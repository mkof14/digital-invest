import { useEffect, useMemo, useRef, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  FileText,
  Download,
  Maximize2,
  PlayCircle,
  ChevronRight,
  Film,
  Globe,
  ExternalLink,
  Loader2,
  AlertTriangle,
  RefreshCw,
} from 'lucide-react';
import {
  ProjectDocumentRecord,
  getDocumentUrl,
  isPreviewable,
  getFileExtension,
} from './documents/documentUtils';
import { getProjectMediaExtras } from '@/data/projectMediaExtras';

export type MediaKind = 'pdf' | 'video' | 'website' | 'link' | 'image';

export interface MediaItem {
  kind: MediaKind;
  id: string;
  title: string;
  subtitle?: string;
  meta?: string;
  url: string;       // for pdf/image/link/website — preview url
  embed?: string;    // for video — embed url
  watchUrl?: string; // for video — external watch url
  fileName?: string; // for pdf download
}

interface Props {
  projectSlug: string;
  projectId?: string;
  websiteUrl?: string | null;
  projectTitle?: string;
}

const kindIcon = (k: MediaKind) => {
  if (k === 'video') return Film;
  if (k === 'website') return Globe;
  if (k === 'link') return ExternalLink;
  return FileText;
};

const kindMeta = (k: MediaKind) => {
  if (k === 'video') return 'Video';
  if (k === 'website') return 'Official site';
  if (k === 'link') return 'External link';
  if (k === 'image') return 'Image';
  return 'PDF';
};

const ProjectMediaRoom = ({ projectSlug, projectId, websiteUrl, projectTitle }: Props) => {
  const [dbDocs, setDbDocs] = useState<ProjectDocumentRecord[]>([]);

  useEffect(() => {
    const fetchDocs = async () => {
      let query = supabase
        .from('project_documents')
        .select('id, title, document_type, description, file_path, file_name, file_type, file_size, external_url, sort_order')
        .eq('is_visible', true)
        .order('sort_order', { ascending: true });
      if (projectId) {
        query = query.or(`project_id.eq.${projectId},project_slug.eq.${projectSlug}`);
      } else {
        query = query.eq('project_slug', projectSlug);
      }
      const { data, error } = await query;
      if (!error && data) setDbDocs(data);
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
      });
    }

    const extras = getProjectMediaExtras(projectSlug);
    result.push(...extras);

    for (const d of dbDocs) {
      const ext = getFileExtension(d).toLowerCase();
      const isPdf = ext === 'pdf' || (d.file_type || '').includes('pdf');
      const url = getDocumentUrl(d);
      if (d.external_url && !d.file_path) {
        result.push({
          kind: 'link',
          id: `db-${d.id}`,
          title: d.title,
          subtitle: d.document_type ?? undefined,
          meta: 'External link',
          url,
        });
      } else if (isPreviewable(d) && isPdf) {
        result.push({
          kind: 'pdf',
          id: `db-${d.id}`,
          title: d.title,
          subtitle: d.document_type ?? undefined,
          meta: 'PDF',
          url,
          fileName: d.file_name ?? undefined,
        });
      } else if (isPreviewable(d)) {
        result.push({
          kind: 'image',
          id: `db-${d.id}`,
          title: d.title,
          subtitle: d.document_type ?? undefined,
          meta: ext.toUpperCase() || 'Image',
          url,
          fileName: d.file_name ?? undefined,
        });
      } else {
        result.push({
          kind: 'link',
          id: `db-${d.id}`,
          title: d.title,
          subtitle: d.document_type ?? undefined,
          meta: ext.toUpperCase() || 'File',
          url,
          fileName: d.file_name ?? undefined,
        });
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
    // Fail-safe: if nothing reports load within 15s, surface an error state.
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
      <div className="flex items-end justify-between flex-wrap gap-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary mb-2">
            <span className="h-px w-8 bg-primary/60" /> Media Room
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Presentations, Documents & Video
          </h2>
          <p className="text-muted-foreground mt-2 max-w-2xl">
            Pick an item on the left — it opens instantly in the preview pane. Download, open
            externally, or expand to fullscreen at any time.
          </p>
        </div>
        {active && (
          <div className="flex gap-2">
            {active.kind === 'pdf' || active.kind === 'image' ? (
              <>
                <Button variant="outline" size="sm" className="gap-2" asChild>
                  <a href={active.url} target="_blank" rel="noopener noreferrer">
                    <Maximize2 className="w-4 h-4" /> Fullscreen
                  </a>
                </Button>
                <Button size="sm" className="gap-2" asChild>
                  <a href={active.url} download={active.fileName}>
                    <Download className="w-4 h-4" /> Download
                  </a>
                </Button>
              </>
            ) : active.kind === 'video' ? (
              <Button variant="outline" size="sm" className="gap-2" asChild>
                <a href={active.watchUrl ?? active.url} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4" /> Open on YouTube
                </a>
              </Button>
            ) : (
              <Button variant="outline" size="sm" className="gap-2" asChild>
                <a href={active.url} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4" /> Open in new tab
                </a>
              </Button>
            )}
          </div>
        )}
      </div>

      <div className="grid lg:grid-cols-[320px_1fr] gap-4">
        {/* Selector rail */}
        <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
          {items.map((item) => {
            const isActive = item.id === active?.id;
            const Icon = kindIcon(item.kind);
            return (
              <button
                key={item.id}
                onClick={() => setActiveId(item.id)}
                aria-label={`Show preview for ${item.title}`}
                aria-pressed={isActive}
                className={`group relative text-left flex-shrink-0 lg:flex-shrink w-72 lg:w-auto p-4 rounded-xl border transition-all duration-300 ${
                  isActive
                    ? 'border-primary bg-primary/10 shadow-[0_0_0_1px_hsl(var(--primary)/0.4),0_10px_30px_-12px_hsl(var(--primary)/0.4)]'
                    : 'border-border/60 bg-card hover:border-primary/40 hover:bg-card/80'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                      isActive
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-primary/10 text-primary group-hover:bg-primary/20'
                    }`}
                  >
                    {item.kind === 'video' ? <PlayCircle className="w-5 h-5" /> : <Icon className="w-5 h-5" />}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                      {item.meta ?? kindMeta(item.kind)}
                    </div>
                    <h3 className="font-semibold text-foreground leading-tight truncate">{item.title}</h3>
                    {item.subtitle && (
                      <p className="text-xs text-muted-foreground mt-0.5 truncate">{item.subtitle}</p>
                    )}
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 mt-3 flex-shrink-0 transition-all ${
                      isActive
                        ? 'text-primary translate-x-1'
                        : 'text-muted-foreground/40 group-hover:text-primary group-hover:translate-x-0.5'
                    }`}
                  />
                </div>
                {isActive && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-10 rounded-r bg-primary hidden lg:block" />
                )}
              </button>
            );
          })}
        </div>

        {/* Preview pane */}
        <Card className="border border-primary/30 bg-card overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b border-border/60 bg-muted/40">
            <div className="flex items-center gap-2 min-w-0">
              <span className="inline-flex w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-foreground truncate">{active?.title}</span>
            </div>
            <span className="text-xs text-muted-foreground hidden sm:inline">
              {active?.meta ?? (active ? kindMeta(active.kind) : '')}
            </span>
          </div>
          <CardContent className="p-0">
            <div className="relative w-full bg-muted" style={{ height: 'min(75vh, 720px)' }}>
              {active?.kind === 'pdf' && (
                <iframe
                  key={`${active.id}-${reloadKey}`}
                  src={`${active.url}#view=FitH&toolbar=1`}
                  title={active.title}
                  onLoad={handleLoaded}
                  onError={handleError}
                  className="absolute inset-0 w-full h-full border-0 animate-fade-in"
                />
              )}
              {active?.kind === 'video' && (
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
              {active?.kind === 'image' && (
                <img
                  key={`${active.id}-${reloadKey}`}
                  src={active.url}
                  alt={active.title}
                  onLoad={handleLoaded}
                  onError={handleError}
                  className="absolute inset-0 w-full h-full object-contain animate-fade-in bg-background"
                />
              )}
              {(active?.kind === 'website' || active?.kind === 'link') && (
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

              {/* Loading overlay */}
              {status === 'loading' && active && (
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-background/80 backdrop-blur-sm animate-fade-in">
                  <Loader2 className="w-8 h-8 text-primary animate-spin" />
                  <div className="text-sm font-medium text-foreground">Loading {kindMeta(active.kind).toLowerCase()}…</div>
                  <div className="text-xs text-muted-foreground max-w-xs text-center truncate px-4">
                    {active.title}
                  </div>
                  <div className="w-40 h-1 rounded-full bg-muted overflow-hidden mt-1">
                    <div className="h-full w-1/3 bg-primary animate-[loading-bar_1.2s_ease-in-out_infinite]" />
                  </div>
                </div>
              )}

              {/* Error overlay */}
              {status === 'error' && active && (
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-background/90 backdrop-blur-sm animate-fade-in p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center">
                    <AlertTriangle className="w-6 h-6 text-destructive" />
                  </div>
                  <div className="text-base font-semibold text-foreground">Preview couldn't load</div>
                  <div className="text-sm text-muted-foreground max-w-md">
                    The file is taking too long or the source blocks embedding. Try again or open it in a new tab.
                  </div>
                  <div className="flex gap-2 mt-2">
                    <Button size="sm" variant="outline" className="gap-2" onClick={retry}>
                      <RefreshCw className="w-4 h-4" /> Retry
                    </Button>
                    <Button size="sm" className="gap-2" asChild>
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
      </div>
    </section>
  );
};

export default ProjectMediaRoom;
