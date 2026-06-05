import { useEffect, useMemo, useRef, useState } from "react";

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
  Search,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  companyPresentationItems,
  PresentationItem,
} from "@/data/companyPresentationItems";
import { supabase } from "@/integrations/supabase/client";

const typeIcon = (t: PresentationItem["type"]) => {
  switch (t) {
    case "pdf":
      return <FileText className="h-4 w-4" />;
    case "video":
      return <Video className="h-4 w-4" />;
    case "link":
      return <LinkIcon className="h-4 w-4" />;
    case "image":
      return <ImageIcon className="h-4 w-4" />;
    case "page":
      return <LayoutGrid className="h-4 w-4" />;
  }
};

const Viewer = ({ item }: { item: PresentationItem }) => {
  // Internal site routes render inside the iframe at the same origin
  const src =
    item.type === "page"
      ? item.url
      : item.type === "pdf"
      ? `${item.url}#toolbar=1&navpanes=0&view=FitH`
      : item.url;

  if (item.type === "image") {
    return (
      <div className="w-full h-full flex items-center justify-center bg-black">
        <img
          src={item.url}
          alt={item.title}
          className="max-w-full max-h-full object-contain"
        />
      </div>
    );
  }

  if (item.type === "video" && /\.(mp4|webm|ogg)$/i.test(item.url)) {
    return (
      <video
        src={item.url}
        controls
        className="w-full h-full bg-black"
        autoPlay
      />
    );
  }

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

const CompanyPresentation = () => {
  const [dbItems, setDbItems] = useState<PresentationItem[]>([]);
  const items = useMemo(
    () => [...companyPresentationItems, ...dbItems],
    [dbItems]
  );
  const [activeId, setActiveId] = useState<string>(
    companyPresentationItems[0]?.id ?? ""
  );
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [query, setQuery] = useState("");
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    (async () => {
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
            type: r.item_type as PresentationItem["type"],
            url: r.url,
            group: r.group_name ?? "Uploaded",
          }))
        );
      }
    })();
  }, []);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [query, setQuery] = useState("");
  const stageRef = useRef<HTMLDivElement>(null);

  const items = companyPresentationItems;
  const active = useMemo(
    () => items.find((i) => i.id === activeId) ?? items[0],
    [activeId, items]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter(
      (i) =>
        i.title.toLowerCase().includes(q) ||
        (i.description ?? "").toLowerCase().includes(q) ||
        (i.group ?? "").toLowerCase().includes(q)
    );
  }, [items, query]);

  const grouped = useMemo(() => {
    const map = new Map<string, PresentationItem[]>();
    filtered.forEach((i) => {
      const g = i.group ?? "Other";
      if (!map.has(g)) map.set(g, []);
      map.get(g)!.push(i);
    });
    return Array.from(map.entries());
  }, [filtered]);

  const idx = items.findIndex((i) => i.id === active?.id);
  const goPrev = () => idx > 0 && setActiveId(items[idx - 1].id);
  const goNext = () =>
    idx < items.length - 1 && setActiveId(items[idx + 1].id);

  const toggleFullscreen = async () => {
    const el = stageRef.current;
    if (!el) return;
    if (!document.fullscreenElement) {
      await el.requestFullscreen?.();
    } else {
      await document.exitFullscreen?.();
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
      if (e.key === "ArrowRight") goNext();
      if (e.key.toLowerCase() === "f") toggleFullscreen();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [idx, items]);

  if (!active) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        No presentations available.
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">

      <Navigation />

      <main className="flex-1 flex flex-col">
        <div className="border-b border-border bg-card/40">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSidebarOpen((s) => !s)}
                aria-label="Toggle sidebar"
              >
                {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
              <div>
                <h1 className="text-xl md:text-2xl font-semibold tracking-tight">
                  Company Presentation
                </h1>
                <p className="text-xs text-muted-foreground">
                  Interactive hub — decks, videos, documents & live pages
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <Button variant="outline" size="icon" className="h-8 w-8" onClick={goPrev} disabled={idx <= 0} aria-label="Previous">
                <ChevronLeft className="h-3.5 w-3.5" />
              </Button>
              <span className="text-[11px] text-muted-foreground tabular-nums px-1">
                {idx + 1} / {items.length}
              </span>
              <Button variant="outline" size="icon" className="h-8 w-8" onClick={goNext} disabled={idx >= items.length - 1} aria-label="Next">
                <ChevronRight className="h-3.5 w-3.5" />
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
                aria-label={isFullscreen ? "Exit fullscreen" : "Fullscreen"}
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
              <div className="p-3 border-b border-border">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search presentations…"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="pl-8 h-9"
                  />
                </div>
              </div>
              <div className="flex-1 overflow-y-auto p-2 space-y-4">
                {grouped.map(([group, list]) => (
                  <div key={group}>
                    <div className="px-2 py-1 text-[11px] uppercase tracking-wider text-muted-foreground font-semibold">
                      {group}
                    </div>
                    <div className="space-y-1">
                      {list.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => setActiveId(item.id)}
                          className={`w-full text-left px-2.5 py-2 rounded-md flex items-start gap-2.5 transition-colors ${
                            item.id === active.id
                              ? "bg-primary/10 border border-primary/30 text-foreground"
                              : "hover:bg-accent border border-transparent"
                          }`}
                        >
                          <span
                            className={`mt-0.5 flex-shrink-0 ${
                              item.id === active.id
                                ? "text-primary"
                                : "text-muted-foreground"
                            }`}
                          >
                            {typeIcon(item.type)}
                          </span>
                          <span className="min-w-0">
                            <span className="block text-sm font-medium truncate">
                              {item.title}
                            </span>
                            {item.description && (
                              <span className="block text-xs text-muted-foreground line-clamp-2">
                                {item.description}
                              </span>
                            )}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
                {grouped.length === 0 && (
                  <div className="text-sm text-muted-foreground p-4 text-center">
                    No matches.
                  </div>
                )}
              </div>
              <div className="p-3 border-t border-border text-[11px] text-muted-foreground">
                Tip: ← → to navigate, F to fullscreen.
              </div>
            </div>
          </aside>

          {/* Stage */}
          <section
            ref={stageRef}
            className="flex-1 relative bg-muted/30 min-h-[70vh]"
          >
            <Viewer item={active} />
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CompanyPresentation;
