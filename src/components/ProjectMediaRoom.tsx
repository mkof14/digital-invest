import { useEffect, useMemo, useRef, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  FileText,
  Download,
  Maximize2,
  PlayCircle,
  Film,
  Globe,
  ExternalLink,
  Loader2,
  AlertTriangle,
  RefreshCw,
  Image as ImageIcon,
  Calendar,
} from 'lucide-react';
import {
  ProjectDocumentRecord,
  getDocumentUrl,
  isPreviewable,
  getFileExtension,
  getFileTypeColor,
} from './documents/documentUtils';
import { getProjectMediaExtras } from '@/data/projectMediaExtras';

export type MediaKind = 'pdf' | 'video' | 'website' | 'link' | 'image';

export interface MediaItem {
  kind: MediaKind;
  id: string;
  title: string;
  subtitle?: string;
  meta?: string;
  url: string;
  embed?: string;
  watchUrl?: string;
  fileName?: string;
  thumbnail?: string;   // optional preview image for the grid card
  badge?: string;       // file-type badge label (e.g. PDF, MP4, IMG, LINK)
  updatedAt?: string;   // ISO date string — rendered as "Updated …"
}

interface Props {
  projectSlug: string;
  projectId?: string;
  websiteUrl?: string | null;
  projectTitle?: string;
}

interface ProjectDocumentRow extends ProjectDocumentRecord {
  updated_at?: string | null;
  created_at?: string | null;
}

const kindMeta = (k: MediaKind) => {
  if (k === 'video') return 'Video';
  if (k === 'website') return 'Official site';
  if (k === 'link') return 'External link';
  if (k === 'image') return 'Image';
  return 'PDF';
};

const defaultBadge = (item: MediaItem): string => {
  if (item.badge) return item.badge;
  if (item.kind === 'video') return 'MP4';
  if (item.kind === 'website') return 'WEB';
  if (item.kind === 'link') return 'LINK';
  if (item.kind === 'image') return 'IMG';
  return 'PDF';
};

const youtubeIdFromUrl = (url?: string): string | null => {
  if (!url) return null;
  const m = url.match(/(?:youtube\.com\/(?:embed\/|watch\?v=)|youtu\.be\/)([\w-]{6,})/);
  return m ? m[1] : null;
};

const defaultThumb = (item: MediaItem): string | null => {
  if (item.thumbnail) return item.thumbnail;
  if (item.kind === 'image') return item.url;
  if (item.kind === 'video') {
    const id = youtubeIdFromUrl(item.embed ?? item.watchUrl ?? item.url);
    return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : null;
  }
  return null;
};

const formatDate = (iso?: string): string | null => {
  if (!iso) return null;
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return null;
  return d.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
};

const ThumbFallback = ({ item }: { item: MediaItem }) => {
  const Icon = item.kind === 'video' ? PlayCircle : item.kind === 'website' || item.kind === 'link' ? Globe : item.kind === 'image' ? ImageIcon : FileText;
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/15 via-muted to-accent/15">
      <Icon className="w-12 h-12 text-primary/60" />
    </div>
  );
};

const ProjectMediaRoom = ({ projectSlug, projectId, websiteUrl, projectTitle }: Props) => {
  const [dbDocs, setDbDocs] = useState<ProjectDocumentRow[]>([]);

  useEffect(() => {
    const fetchDocs = async () => {
      let query = supabase
        .from('project_documents')
        .select('id, title, document_type, description, file_path, file_name, file_type, file_size, external_url, sort_order, updated_at, created_at')
        .eq('is_visible', true)
        .order('sort_order', { ascending: true });
      if (projectId) {
        query = query.or(`project_id.eq.${projectId},project_slug.eq.${projectSlug}`);
      } else {
        query = query.eq('project_slug', projectSlug);
      }
      const { data, error } = await query;
      if (!error && data) setDbDocs(data as ProjectDocumentRow[]);
    };
    fetchDocs();
  }, [projectSlug, projectId]);

  const items = useMemo<MediaItem[]>(() => {
    const result: MediaItem[] = [];

    if (websiteUrl) {
      result.push({
        kind: 'website',
        id: 'website',
        title: `${projectTitle ?? 'Project'} — Official Website`,
        subtitle: websiteUrl.replace(/^https?:\/\//, '').replace(/\/$/, ''),
        meta: 'Live site',
        url: websiteUrl,
        badge: 'WEB',
      });
    }

    const extras = getProjectMediaExtras(projectSlug);
    result.push(...extras);

    for (const d of dbDocs) {
      const ext = getFileExtension(d).toUpperCase();
      const isPdf = ext === 'PDF' || (d.file_type || '').includes('pdf');
      const url = getDocumentUrl(d);
      const updatedAt = d.updated_at ?? d.created_at ?? undefined;
      const base = {
        id: `db-${d.id}`,
        title: d.title,
        subtitle: d.document_type ?? undefined,
        meta: ext || 'File',
        url,
        fileName: d.file_name ?? undefined,
        badge: ext,
        updatedAt,
      };
      if (d.external_url && !d.file_path) {
        result.push({ ...base, kind: 'link', badge: 'LINK' });
      } else if (isPreviewable(d) && isPdf) {
        result.push({ ...base, kind: 'pdf', badge: 'PDF' });
      } else if (isPreviewable(d)) {
        result.push({ ...base, kind: 'image', thumbnail: url });
      } else {
        result.push({ ...base, kind: 'link' });
      }
    }

    return result;
  }, [dbDocs, websiteUrl, projectSlug, projectTitle]);

  const [activeId, setActiveId] = useState<string | null>(null);
  const active = items.find((i) => i.id === activeId) ?? items[0];

  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading');
  const [reloadKey, setReloadKey] = useState(0);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (!active) return;
    setStatus('loading');
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => {
      setStatus((s) => (s === 'loading' ? 'error' : s));
    }, 15000) as unknown as number;
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, [active?.id, reloadKey]);

  const handleLoaded = () => {
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    setStatus('ready');
  };
  const handleError = () => {
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    setStatus('error');
  };
  const retry = () => setReloadKey((k) => k + 1);

  if (items.length === 0) return null;

  return (
    <section className="mb-16">
      {/* Grid of uniform cards */}
      <div
        role="list"
        aria-label="Media items"
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8"
      >
        {items.map((item) => {
          const isActive = item.id === active?.id;
          const thumb = defaultThumb(item);
          const badge = defaultBadge(item);
          const dateLabel = formatDate(item.updatedAt);
          return (
            <button
              key={item.id}
              role="listitem"
              onClick={() => setActiveId(item.id)}
              aria-label={`Open ${item.title}`}
              aria-pressed={isActive}
              className={`group text-left rounded-xl border bg-card overflow-hidden transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                isActive
                  ? 'border-primary shadow-[0_0_0_1px_hsl(var(--primary)/0.4),0_18px_40px_-18px_hsl(var(--primary)/0.5)]'
                  : 'border-border/60 hover:border-primary/50 hover:shadow-lg'
              }`}
            >
              {/* Thumbnail (consistent 16:10 frame for every card) */}
              <div className="relative w-full aspect-[16/10] bg-muted overflow-hidden">
                {thumb ? (
                  <img
                    src={thumb}
                    alt=""
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = 'none';
                    }}
                  />
                ) : (
                  <ThumbFallback item={item} />
                )}
                {/* Always-visible fallback layer behind the image */}
                {!thumb && <ThumbFallback item={item} />}
                {/* Overlay for video */}
                {item.kind === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <PlayCircle className="w-14 h-14 text-white drop-shadow-lg" />
                  </div>
                )}
                {/* File-type badge */}
                <span
                  className={`absolute top-2 left-2 inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-bold tracking-wider border ${getFileTypeColor(badge)}`}
                >
                  {badge}
                </span>
                {isActive && (
                  <span className="absolute top-2 right-2 inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-semibold bg-primary text-primary-foreground">
                    Open
                  </span>
                )}
              </div>
              {/* Meta row */}
              <div className="p-3">
                <h3 className="text-sm font-semibold text-foreground leading-tight line-clamp-2 min-h-[2.5rem]">
                  {item.title}
                </h3>
                {item.subtitle && (
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-1">{item.subtitle}</p>
                )}
                <div className="flex items-center gap-1.5 mt-2 text-[11px] text-muted-foreground">
                  <Calendar className="w-3 h-3" />
                  <span>{dateLabel ? `Updated ${dateLabel}` : item.meta ?? kindMeta(item.kind)}</span>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Preview pane */}
      {active && (
        <Card className="border border-primary/30 bg-card overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b border-border/60 bg-muted/40 flex-wrap gap-2">
            <div className="flex items-center gap-2 min-w-0">
              <span className="inline-flex w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span
                className={`inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-bold tracking-wider border ${getFileTypeColor(defaultBadge(active))}`}
              >
                {defaultBadge(active)}
              </span>
              <span className="text-sm font-medium text-foreground truncate">{active.title}</span>
            </div>
            <div className="flex items-center gap-2">
              {formatDate(active.updatedAt) && (
                <span className="hidden sm:inline-flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar className="w-3 h-3" /> Updated {formatDate(active.updatedAt)}
                </span>
              )}
              {(active.kind === 'pdf' || active.kind === 'image') && (
                <>
                  <Button variant="outline" size="sm" className="gap-2" aria-label={`Open ${active.title} in full screen`} asChild>
                    <a href={active.url} target="_blank" rel="noopener noreferrer">
                      <Maximize2 className="w-4 h-4" /> Fullscreen
                    </a>
                  </Button>
                  <Button size="sm" className="gap-2" aria-label={`Download ${active.title}`} asChild>
                    <a href={active.url} download={active.fileName}>
                      <Download className="w-4 h-4" /> Download
                    </a>
                  </Button>
                </>
              )}
              {active.kind === 'video' && (
                <Button variant="outline" size="sm" className="gap-2" aria-label={`Watch ${active.title} on YouTube`} asChild>
                  <a href={active.watchUrl ?? active.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" /> Open on YouTube
                  </a>
                </Button>
              )}
              {(active.kind === 'website' || active.kind === 'link') && (
                <Button variant="outline" size="sm" className="gap-2" aria-label={`Open ${active.title} in new browser tab`} asChild>
                  <a href={active.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" /> Open in new tab
                  </a>
                </Button>
              )}
            </div>
          </div>
          <CardContent className="p-0">
            <div className="relative w-full bg-muted" style={{ height: 'min(75vh, 720px)' }}>
              {active.kind === 'pdf' && (
                <iframe
                  key={`${active.id}-${reloadKey}`}
                  src={`${active.url}#view=FitH&toolbar=1`}
                  title={active.title}
                  onLoad={handleLoaded}
                  onError={handleError}
                  className="absolute inset-0 w-full h-full border-0 animate-fade-in"
                />
              )}
              {active.kind === 'video' && (
                <iframe
                  key={`${active.id}-${reloadKey}`}
                  src={active.embed ?? active.url}
                  title={active.title}
                  onLoad={handleLoaded}
                  onError={handleError}
                  className="absolute inset-0 w-full h-full border-0 animate-fade-in"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              )}
              {active.kind === 'image' && (
                <img
                  key={`${active.id}-${reloadKey}`}
                  src={active.url}
                  alt={active.title}
                  onLoad={handleLoaded}
                  onError={handleError}
                  className="absolute inset-0 w-full h-full object-contain animate-fade-in bg-background"
                />
              )}
              {(active.kind === 'website' || active.kind === 'link') && (
                <div className="absolute inset-0 flex flex-col">
                  <iframe
                    key={`${active.id}-${reloadKey}`}
                    src={active.url}
                    title={active.title}
                    onLoad={handleLoaded}
                    onError={handleError}
                    className="flex-1 w-full border-0 animate-fade-in bg-background"
                    sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                    referrerPolicy="no-referrer"
                  />
                  <div className="px-4 py-2 text-xs text-muted-foreground bg-muted/60 border-t border-border/60 flex items-center justify-between gap-3">
                    <span className="truncate">
                      Some sites block embedding. If the preview is blank, open in a new tab.
                    </span>
                    <a
                      href={active.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-primary hover:underline shrink-0"
                    >
                      Open <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              )}

              {status === 'loading' && (
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-background/80 backdrop-blur-sm animate-fade-in">
                  <Loader2 className="w-8 h-8 text-primary animate-spin" />
                  <div className="text-sm font-medium text-foreground">Loading {kindMeta(active.kind).toLowerCase()}…</div>
                  <div className="text-xs text-muted-foreground max-w-xs text-center truncate px-4">{active.title}</div>
                  <div className="w-40 h-1 rounded-full bg-muted overflow-hidden mt-1">
                    <div className="h-full w-1/3 bg-primary animate-[loading-bar_1.2s_ease-in-out_infinite]" />
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-background/90 backdrop-blur-sm animate-fade-in p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center">
                    <AlertTriangle className="w-6 h-6 text-destructive" />
                  </div>
                  <div className="text-base font-semibold text-foreground">Preview couldn't load</div>
                  <div className="text-sm text-muted-foreground max-w-md">
                    The file is taking too long or the source blocks embedding. Try again or open it in a new tab.
                  </div>
                  <div className="flex gap-2 mt-2">
                    <Button size="sm" variant="outline" className="gap-2" aria-label="Retry loading preview" onClick={retry}>
                      <RefreshCw className="w-4 h-4" /> Retry
                    </Button>
                    <Button size="sm" className="gap-2" aria-label="Open content in new browser tab" asChild>
                      <a href={active.watchUrl ?? active.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" /> Open in new tab
                      </a>
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      )}
    </section>
  );
};

export default ProjectMediaRoom;
