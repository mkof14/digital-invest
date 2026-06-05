import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";

import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  ExternalLink,
  FileText,
  Video,
  Link as LinkIcon,
  Image as ImageIcon,
  LayoutGrid,
  List as ListIcon,
  Search,
  Menu,
  X,
  Download,
  Share2,
  Play,
  Pause,
  Info,
  Printer,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Filter,
  Clock,
  Plus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AddContentDialog from "@/components/presentation/AddContentDialog";
import PdfViewer from "@/components/presentation/PdfViewer";
import {
  companyPresentationItems,
  PresentationItem,
  PresentationItemType,
} from "@/data/companyPresentationItems";
import { supabase } from "@/integrations/supabase/client";

const TYPE_META: Record<
  PresentationItemType,
  { label: string; icon: typeof FileText }
> = {
  pdf: { label: "PDF", icon: FileText },
  video: { label: "Video", icon: Video },
  link: { label: "Link", icon: LinkIcon },
  image: { label: "Image", icon: ImageIcon },
  page: { label: "Page", icon: LayoutGrid },
};

const TypeIcon = ({ t, className }: { t: PresentationItemType; className?: string }) => {
  const Icon = TYPE_META[t].icon;
  return <Icon className={className ?? "h-4 w-4"} />;
};

// Normalize YouTube/Vimeo watch URLs to embed-friendly URLs
const normalizeVideoUrl = (url: string) => {
  try {
    const u = new URL(url, window.location.origin);
    if (u.hostname.includes("youtube.com") && u.pathname === "/watch") {
      const v = u.searchParams.get("v");
      if (v) return `https://www.youtube.com/embed/${v}`;
    }
    if (u.hostname === "youtu.be") {
      return `https://www.youtube.com/embed${u.pathname}`;
    }
    if (u.hostname.includes("vimeo.com") && /^\/\d+/.test(u.pathname)) {
      return `https://player.vimeo.com/video${u.pathname}`;
    }
    return url;
  } catch {
    return url;
  }
};

const isDirectVideo = (url: string) => /\.(mp4|webm|ogg)(\?|$)/i.test(url);

const Viewer = ({
  item,
  imageZoom,
  imageRotate,
}: {
  item: PresentationItem;
  imageZoom: number;
  imageRotate: number;
}) => {
  if (item.type === "image") {
    return (
      <div className="w-full h-full overflow-auto flex items-center justify-center bg-black">
        <img
          src={item.url}
          alt={item.title}
          style={{
            transform: `scale(${imageZoom}) rotate(${imageRotate}deg)`,
            transition: "transform 0.2s ease",
          }}
          className="max-w-full max-h-full object-contain"
        />
      </div>
    );
  }

  if (item.type === "pdf") {
    return <PdfViewer url={item.url} title={item.title} />;
  }

  if (item.type === "video" && isDirectVideo(item.url)) {
    return (
      <video
        src={item.url}
        controls
        className="w-full h-full bg-black"
        autoPlay
      />
    );
  }

  const src =
    item.type === "page"
      ? item.url
      : item.type === "video"
      ? normalizeVideoUrl(item.url)
      : item.url;

  return (
    <iframe
      key={item.id}
      src={src}
      title={item.title}
      className="w-full h-full bg-background border-0"
      allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
      allowFullScreen
    />
  );
};

const RECENT_KEY = "cp:recent";
const FAV_KEY = "cp:favorites";

const CompanyPresentation = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [dbItems, setDbItems] = useState<PresentationItem[]>([]);
  const items = useMemo(
    () => [...companyPresentationItems, ...dbItems],
    [dbItems]
  );

  const initialId =
    searchParams.get("item") || companyPresentationItems[0]?.id || "";
  const [activeId, setActiveId] = useState<string>(initialId);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [query, setQuery] = useState("");
  const [typeFilters, setTypeFilters] = useState<Set<PresentationItemType>>(
    new Set()
  );
  const [sidebarView, setSidebarView] = useState<"list" | "grid">("list");
  const [showNotes, setShowNotes] = useState(false);
  const [autoplay, setAutoplay] = useState(false);
  const [autoplaySec, setAutoplaySec] = useState(15);
  const [imageZoom, setImageZoom] = useState(1);
  const [imageRotate, setImageRotate] = useState(0);
  const [favorites, setFavorites] = useState<Set<string>>(() => {
    try {
      return new Set(JSON.parse(localStorage.getItem(FAV_KEY) || "[]"));
    } catch {
      return new Set();
    }
  });
  const [recent, setRecent] = useState<string[]>(() => {
    try {
      return JSON.parse(localStorage.getItem(RECENT_KEY) || "[]");
    } catch {
      return [];
    }
  });
  const [addOpen, setAddOpen] = useState(false);
  const stageRef = useRef<HTMLDivElement>(null);

  const fetchDbItems = useCallback(async () => {
    const { data } = await supabase
      .from("presentation_items")
      .select("*")
      .eq("is_visible", true)
      .order("group_name", { ascending: true, nullsFirst: false })
      .order("sort_order", { ascending: true });
    if (data) {
      setDbItems(
        data.map((r: any) => ({
          id: `db-${r.id}`,
          title: r.title,
          description: r.description ?? undefined,
          type: r.item_type as PresentationItemType,
          url: r.url,
          group: r.group_name ?? "Uploaded",
        }))
      );
    }
  }, []);

  useEffect(() => {
    fetchDbItems();
  }, [fetchDbItems]);

  const active = useMemo(
    () => items.find((i) => i.id === activeId) ?? items[0],
    [activeId, items]
  );

  // Sync active id to URL + recent list
  useEffect(() => {
    if (!active) return;
    setSearchParams(
      (prev) => {
        const next = new URLSearchParams(prev);
        next.set("item", active.id);
        return next;
      },
      { replace: true }
    );
    setRecent((prev) => {
      const next = [active.id, ...prev.filter((id) => id !== active.id)].slice(0, 8);
      localStorage.setItem(RECENT_KEY, JSON.stringify(next));
      return next;
    });
    setImageZoom(1);
    setImageRotate(0);
  }, [active?.id]);

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      localStorage.setItem(FAV_KEY, JSON.stringify(Array.from(next)));
      return next;
    });
  };

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items.filter((i) => {
      if (typeFilters.size > 0 && !typeFilters.has(i.type)) return false;
      if (!q) return true;
      return (
        i.title.toLowerCase().includes(q) ||
        (i.description ?? "").toLowerCase().includes(q) ||
        (i.group ?? "").toLowerCase().includes(q)
      );
    });
  }, [items, query, typeFilters]);

  const grouped = useMemo(() => {
    const map = new Map<string, PresentationItem[]>();
    const favs = filtered.filter((i) => favorites.has(i.id));
    if (favs.length) map.set("★ Favorites", favs);
    filtered.forEach((i) => {
      const g = i.group ?? "Other";
      if (!map.has(g)) map.set(g, []);
      map.get(g)!.push(i);
    });
    return Array.from(map.entries());
  }, [filtered, favorites]);

  const idx = items.findIndex((i) => i.id === active?.id);
  const goPrev = useCallback(
    () => idx > 0 && setActiveId(items[idx - 1].id),
    [idx, items]
  );
  const goNext = useCallback(
    () =>
      setActiveId(
        items[idx < items.length - 1 ? idx + 1 : 0].id // wrap for slideshow
      ),
    [idx, items]
  );

  const toggleFullscreen = async () => {
    const el = stageRef.current;
    if (!el) return;
    if (!document.fullscreenElement) {
      await el.requestFullscreen?.();
    } else {
      await document.exitFullscreen?.();
    }
  };

  const copyShareLink = async () => {
    if (!active) return;
    const url = `${window.location.origin}/company-presentation?item=${active.id}`;
    try {
      await navigator.clipboard.writeText(url);
      toast.success("Share link copied");
    } catch {
      toast.error("Could not copy link");
    }
  };

  const printActive = () => {
    if (!active) return;
    if (active.type === "pdf" || active.type === "image" || active.type === "link") {
      window.open(active.url, "_blank", "noopener,noreferrer");
      toast.message("Opened in new tab — use browser print");
    } else {
      window.print();
    }
  };

  useEffect(() => {
    document.title = "Company Presentation — Digital Invest";
  }, []);

  useEffect(() => {
    const handler = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", handler);
    return () => document.removeEventListener("fullscreenchange", handler);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement) return;
      if (e.key === "ArrowLeft") goPrev();
      else if (e.key === "ArrowRight") goNext();
      else if (e.key.toLowerCase() === "f") toggleFullscreen();
      else if (e.key.toLowerCase() === "s") setSidebarOpen((v) => !v);
      else if (e.key.toLowerCase() === "n") setShowNotes((v) => !v);
      else if (e.key === " ") {
        e.preventDefault();
        setAutoplay((v) => !v);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goPrev, goNext]);

  // Autoplay timer
  useEffect(() => {
    if (!autoplay) return;
    const t = setInterval(goNext, Math.max(3, autoplaySec) * 1000);
    return () => clearInterval(t);
  }, [autoplay, autoplaySec, goNext]);

  if (!active) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        No presentations available.
      </div>
    );
  }

  const allTypes: PresentationItemType[] = ["pdf", "video", "image", "page", "link"];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1 flex flex-col">
        {/* Toolbar */}
        <div className="border-b border-border bg-card/40">
          <div className="container mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3 min-w-0">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSidebarOpen((s) => !s)}
                aria-label="Toggle sidebar (S)"
                title="Toggle sidebar (S)"
              >
                {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
              <div className="min-w-0">
                <h1 className="text-base md:text-xl font-semibold tracking-tight truncate">
                  {active.title}
                </h1>
                <p className="text-[11px] text-muted-foreground flex items-center gap-1.5">
                  <TypeIcon t={active.type} className="h-3 w-3" />
                  <span>{TYPE_META[active.type].label}</span>
                  {active.group && <span>· {active.group}</span>}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1.5 flex-wrap">
              <Button
                size="sm"
                className="h-8 gap-1.5"
                onClick={() => setAddOpen(true)}
                title="Добавить PDF, видео, изображение или ссылку"
              >
                <Plus className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">Add content</span>
              </Button>
              <div className="w-px h-5 bg-border mx-1 hidden sm:block" />

              {active.type === "image" && (
                <>
                  <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => setImageZoom((z) => Math.max(0.25, z - 0.25))} aria-label="Zoom out">
                    <ZoomOut className="h-3.5 w-3.5" />
                  </Button>
                  <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => setImageZoom((z) => Math.min(4, z + 0.25))} aria-label="Zoom in">
                    <ZoomIn className="h-3.5 w-3.5" />
                  </Button>
                  <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => setImageRotate((r) => r + 90)} aria-label="Rotate">
                    <RotateCcw className="h-3.5 w-3.5" />
                  </Button>
                </>
              )}

              <Button
                variant={autoplay ? "default" : "outline"}
                size="icon"
                className="h-8 w-8"
                onClick={() => setAutoplay((v) => !v)}
                aria-label={autoplay ? "Pause slideshow" : "Start slideshow (Space)"}
                title={autoplay ? "Pause slideshow" : "Slideshow (Space)"}
              >
                {autoplay ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
              </Button>
              {autoplay && (
                <Input
                  type="number"
                  min={3}
                  max={120}
                  value={autoplaySec}
                  onChange={(e) => setAutoplaySec(Number(e.target.value) || 15)}
                  className="h-8 w-16 text-xs"
                  aria-label="Slideshow interval (seconds)"
                  title="Seconds per slide"
                />
              )}

              <Button variant="outline" size="icon" className="h-8 w-8" onClick={goPrev} disabled={idx <= 0} aria-label="Previous (←)" title="Previous (←)">
                <ChevronLeft className="h-3.5 w-3.5" />
              </Button>
              <span className="text-[11px] text-muted-foreground tabular-nums px-1">
                {idx + 1} / {items.length}
              </span>
              <Button variant="outline" size="icon" className="h-8 w-8" onClick={goNext} aria-label="Next (→)" title="Next (→)">
                <ChevronRight className="h-3.5 w-3.5" />
              </Button>

              <Button
                variant={showNotes ? "default" : "outline"}
                size="icon"
                className="h-8 w-8"
                onClick={() => setShowNotes((v) => !v)}
                aria-label="Toggle notes (N)"
                title="Toggle notes panel (N)"
              >
                <Info className="h-3.5 w-3.5" />
              </Button>

              <Button variant="outline" size="icon" className="h-8 w-8" onClick={copyShareLink} aria-label="Copy share link" title="Copy share link">
                <Share2 className="h-3.5 w-3.5" />
              </Button>

              {(active.type === "pdf" || active.type === "image" || active.type === "video") && (
                <Button variant="outline" size="icon" className="h-8 w-8" asChild aria-label="Download" title="Download">
                  <a href={active.url} download target="_blank" rel="noopener noreferrer">
                    <Download className="h-3.5 w-3.5" />
                  </a>
                </Button>
              )}

              <Button variant="outline" size="icon" className="h-8 w-8" onClick={printActive} aria-label="Print" title="Print">
                <Printer className="h-3.5 w-3.5" />
              </Button>

              <Button variant="outline" size="icon" className="h-8 w-8" asChild aria-label="Open in new tab" title="Open in new tab">
                <a href={active.url} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8"
                onClick={toggleFullscreen}
                aria-label={isFullscreen ? "Exit fullscreen" : "Fullscreen (F)"}
                title={isFullscreen ? "Exit fullscreen (F)" : "Fullscreen (F)"}
              >
                {isFullscreen ? <Minimize2 className="h-3.5 w-3.5" /> : <Maximize2 className="h-3.5 w-3.5" />}
              </Button>
            </div>
          </div>
        </div>

        <div className="flex-1 flex min-h-[calc(100vh-200px)]">
          {/* Sidebar */}
          <aside
            className={`${
              sidebarOpen ? "w-80" : "w-0"
            } transition-all duration-300 border-r border-border bg-card/30 overflow-hidden flex-shrink-0`}
          >
            <div className="w-80 h-full flex flex-col">
              <div className="p-3 border-b border-border space-y-2">
                <Button
                  onClick={() => setAddOpen(true)}
                  className="w-full h-9 gap-2"
                  size="sm"
                >
                  <Plus className="h-4 w-4" />
                  Add content
                </Button>
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search presentations…"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="pl-8 h-9"
                  />
                </div>
                <div className="flex items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1">
                    {allTypes.map((t) => {
                      const active = typeFilters.has(t);
                      return (
                        <button
                          key={t}
                          onClick={() =>
                            setTypeFilters((prev) => {
                              const next = new Set(prev);
                              if (next.has(t)) next.delete(t);
                              else next.add(t);
                              return next;
                            })
                          }
                          className={`text-[10px] px-1.5 py-0.5 rounded border flex items-center gap-1 transition-colors ${
                            active
                              ? "bg-primary text-primary-foreground border-primary"
                              : "border-border text-muted-foreground hover:bg-accent"
                          }`}
                          title={`Filter ${TYPE_META[t].label}`}
                        >
                          <TypeIcon t={t} className="h-3 w-3" />
                          {TYPE_META[t].label}
                        </button>
                      );
                    })}
                    {typeFilters.size > 0 && (
                      <button
                        onClick={() => setTypeFilters(new Set())}
                        className="text-[10px] px-1.5 py-0.5 rounded text-muted-foreground hover:text-foreground"
                        title="Clear filters"
                      >
                        <Filter className="h-3 w-3" />
                      </button>
                    )}
                  </div>
                  <div className="flex border border-border rounded overflow-hidden">
                    <button
                      onClick={() => setSidebarView("list")}
                      className={`p-1 ${sidebarView === "list" ? "bg-accent" : ""}`}
                      title="List view"
                      aria-label="List view"
                    >
                      <ListIcon className="h-3.5 w-3.5" />
                    </button>
                    <button
                      onClick={() => setSidebarView("grid")}
                      className={`p-1 ${sidebarView === "grid" ? "bg-accent" : ""}`}
                      title="Grid view"
                      aria-label="Grid view"
                    >
                      <LayoutGrid className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-2 space-y-4">
                {recent.length > 0 && !query && typeFilters.size === 0 && (
                  <div>
                    <div className="px-2 py-1 text-[11px] uppercase tracking-wider text-muted-foreground font-semibold flex items-center gap-1">
                      <Clock className="h-3 w-3" /> Recent
                    </div>
                    <div className="flex flex-wrap gap-1 px-2">
                      {recent
                        .map((id) => items.find((i) => i.id === id))
                        .filter(Boolean)
                        .slice(0, 6)
                        .map((i) => (
                          <button
                            key={i!.id}
                            onClick={() => setActiveId(i!.id)}
                            className="text-[11px] px-2 py-0.5 rounded-full border border-border hover:bg-accent truncate max-w-[140px]"
                            title={i!.title}
                          >
                            {i!.title}
                          </button>
                        ))}
                    </div>
                  </div>
                )}

                {grouped.map(([group, list]) => (
                  <div key={group}>
                    <div className="px-2 py-1 text-[11px] uppercase tracking-wider text-muted-foreground font-semibold flex items-center justify-between">
                      <span>{group}</span>
                      <span className="text-muted-foreground/70">{list.length}</span>
                    </div>

                    {sidebarView === "list" ? (
                      <div className="space-y-1">
                        {list.map((item) => (
                          <div
                            key={item.id}
                            className={`group w-full px-2.5 py-2 rounded-md flex items-start gap-2.5 transition-colors cursor-pointer ${
                              item.id === active.id
                                ? "bg-primary/10 border border-primary/30"
                                : "hover:bg-accent border border-transparent"
                            }`}
                            onClick={() => setActiveId(item.id)}
                          >
                            <span
                              className={`mt-0.5 flex-shrink-0 ${
                                item.id === active.id
                                  ? "text-primary"
                                  : "text-muted-foreground"
                              }`}
                            >
                              <TypeIcon t={item.type} />
                            </span>
                            <span className="min-w-0 flex-1">
                              <span className="block text-sm font-medium truncate">
                                {item.title}
                              </span>
                              {item.description && (
                                <span className="block text-xs text-muted-foreground line-clamp-2">
                                  {item.description}
                                </span>
                              )}
                            </span>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleFavorite(item.id);
                              }}
                              className={`text-sm leading-none transition-opacity ${
                                favorites.has(item.id)
                                  ? "text-yellow-500 opacity-100"
                                  : "opacity-0 group-hover:opacity-100 text-muted-foreground"
                              }`}
                              title={favorites.has(item.id) ? "Unfavorite" : "Favorite"}
                              aria-label="Toggle favorite"
                            >
                              ★
                            </button>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="grid grid-cols-2 gap-2 px-1">
                        {list.map((item) => (
                          <button
                            key={item.id}
                            onClick={() => setActiveId(item.id)}
                            className={`aspect-video rounded-md border p-2 flex flex-col justify-between text-left transition-colors ${
                              item.id === active.id
                                ? "border-primary bg-primary/10"
                                : "border-border hover:bg-accent"
                            }`}
                            title={item.title}
                          >
                            <TypeIcon t={item.type} className="h-4 w-4 text-muted-foreground" />
                            <span className="text-[11px] font-medium line-clamp-2">
                              {item.title}
                            </span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                {grouped.length === 0 && (
                  <div className="text-sm text-muted-foreground p-4 text-center">
                    No matches.
                  </div>
                )}
              </div>
              <div className="p-3 border-t border-border text-[11px] text-muted-foreground leading-relaxed">
                <div className="font-semibold mb-1">Shortcuts</div>
                <div>← → navigate · F fullscreen · S sidebar</div>
                <div>N notes · Space play/pause slideshow</div>
              </div>
            </div>
          </aside>

          {/* Stage + optional notes panel */}
          <section className="flex-1 flex flex-col min-h-[70vh]">
            <div
              ref={stageRef}
              className="flex-1 relative bg-muted/30 min-h-[60vh]"
            >
              <Viewer item={active} imageZoom={imageZoom} imageRotate={imageRotate} />
            </div>

            {showNotes && (
              <div className="border-t border-border bg-card/40 p-4 max-h-56 overflow-y-auto">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary" className="text-[10px]">
                    <TypeIcon t={active.type} className="h-3 w-3 mr-1" />
                    {TYPE_META[active.type].label}
                  </Badge>
                  {active.group && (
                    <Badge variant="outline" className="text-[10px]">{active.group}</Badge>
                  )}
                  <h2 className="text-sm font-semibold">{active.title}</h2>
                </div>
                <p className="text-sm text-muted-foreground whitespace-pre-line">
                  {active.description || "No notes for this item. Add a description in the admin panel."}
                </p>
                <div className="mt-2 text-[11px] text-muted-foreground break-all">
                  {active.url}
                </div>
              </div>
            )}
          </section>
        </div>
      </main>

      <AddContentDialog
        open={addOpen}
        onOpenChange={setAddOpen}
        onCreated={fetchDbItems}
      />

      <Footer />
    </div>
  );
};

export default CompanyPresentation;
