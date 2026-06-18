import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Download, Maximize2, PlayCircle, ChevronRight, Film } from 'lucide-react';
import agronTacticalPdf from '@/assets/projects/agron-tactical-blueprint.pdf.asset.json';
import agronAutonomousPdf from '@/assets/projects/agron-autonomous-workforce.pdf.asset.json';
import agronAutonomousV2Pdf from '@/assets/projects/agron-autonomous-workforce-v2.pdf.asset.json';

type MediaItem =
  | { kind: 'pdf'; id: string; title: string; subtitle: string; meta: string; url: string; file: string }
  | { kind: 'video'; id: string; title: string; subtitle: string; meta: string; embed: string; watchUrl: string };

const items: MediaItem[] = [
  {
    kind: 'pdf',
    id: 'tactical',
    title: 'AGRON Tactical Blueprint',
    subtitle: 'Operational doctrine',
    meta: 'PDF · Deployment & tactics',
    url: agronTacticalPdf.url,
    file: 'AGRON_Tactical_Blueprint.pdf',
  },
  {
    kind: 'pdf',
    id: 'workforce-1',
    title: 'Autonomous Workforce Infrastructure',
    subtitle: 'Foundational model',
    meta: 'PDF · Vol. I',
    url: agronAutonomousPdf.url,
    file: 'Autonomous_Workforce_Infrastructure.pdf',
  },
  {
    kind: 'pdf',
    id: 'workforce-2',
    title: 'Autonomous Workforce — Vol. II',
    subtitle: 'Expanded framework',
    meta: 'PDF · Vol. II',
    url: agronAutonomousV2Pdf.url,
    file: 'Autonomous_Workforce_Infrastructure_v2.pdf',
  },
  {
    kind: 'video',
    id: 'video-overview',
    title: 'AGRON — Video Overview',
    subtitle: 'Founder briefing',
    meta: 'YouTube · ~5 min',
    embed: 'https://www.youtube.com/embed/tansFOZdKRo?rel=0',
    watchUrl: 'https://www.youtube.com/watch?v=tansFOZdKRo',
  },
];

const AgronMediaShowcase = () => {
  const [activeId, setActiveId] = useState(items[0].id);
  const active = items.find((i) => i.id === activeId)!;

  return (
    <section className="mb-16">
      <div className="flex items-end justify-between flex-wrap gap-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary mb-2">
            <span className="h-px w-8 bg-primary/60" /> Media Room
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Presentations & Video</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl">
            Pick a document or the video on the left — it opens instantly in the preview pane. Download or expand to fullscreen at any time.
          </p>
        </div>
        <div className="flex gap-2">
          {active.kind === 'pdf' ? (
            <>
              <Button variant="outline" size="sm" className="gap-2" asChild>
                <a href={active.url} target="_blank" rel="noopener noreferrer">
                  <Maximize2 className="w-4 h-4" /> Fullscreen
                </a>
              </Button>
              <Button size="sm" className="gap-2" asChild>
                <a href={active.url} download={active.file}>
                  <Download className="w-4 h-4" /> Download
                </a>
              </Button>
            </>
          ) : (
            <Button variant="outline" size="sm" className="gap-2" asChild>
              <a href={active.watchUrl} target="_blank" rel="noopener noreferrer">
                <Maximize2 className="w-4 h-4" /> Open on YouTube
              </a>
            </Button>
          )}
        </div>
      </div>

      <div className="grid lg:grid-cols-[320px_1fr] gap-4">
        {/* Selector rail */}
        <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
          {items.map((item) => {
            const isActive = item.id === activeId;
            const Icon = item.kind === 'video' ? Film : FileText;
            return (
              <button
                key={item.id}
                onClick={() => setActiveId(item.id)}
                className={`group relative text-left flex-shrink-0 lg:flex-shrink w-72 lg:w-auto p-4 rounded-xl border transition-all duration-300 ${
                  isActive
                    ? 'border-primary bg-primary/10 shadow-[0_0_0_1px_hsl(var(--primary)/0.4),0_10px_30px_-12px_hsl(var(--primary)/0.4)]'
                    : 'border-border/60 bg-card hover:border-primary/40 hover:bg-card/80'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                      isActive ? 'bg-primary text-primary-foreground' : 'bg-primary/10 text-primary group-hover:bg-primary/20'
                    }`}
                  >
                    {item.kind === 'video' ? <PlayCircle className="w-5 h-5" /> : <Icon className="w-5 h-5" />}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                      {item.meta}
                    </div>
                    <h3 className="font-semibold text-foreground leading-tight truncate">{item.title}</h3>
                    <p className="text-xs text-muted-foreground mt-0.5 truncate">{item.subtitle}</p>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 mt-3 flex-shrink-0 transition-all ${
                      isActive ? 'text-primary translate-x-1' : 'text-muted-foreground/40 group-hover:text-primary group-hover:translate-x-0.5'
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
              <span className="text-sm font-medium text-foreground truncate">{active.title}</span>
            </div>
            <span className="text-xs text-muted-foreground hidden sm:inline">{active.meta}</span>
          </div>
          <CardContent className="p-0">
            <div className="relative w-full bg-muted" style={{ height: 'min(75vh, 720px)' }}>
              {active.kind === 'pdf' ? (
                <iframe
                  key={active.id}
                  src={`${active.url}#view=FitH&toolbar=1`}
                  title={active.title}
                  className="absolute inset-0 w-full h-full border-0 animate-fade-in"
                />
              ) : (
                <iframe
                  key={active.id}
                  src={active.embed}
                  title={active.title}
                  className="absolute inset-0 w-full h-full border-0 animate-fade-in"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AgronMediaShowcase;
