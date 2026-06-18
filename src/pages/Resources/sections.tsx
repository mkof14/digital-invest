import { Resource, formatFileSize } from "@/lib/resources";
import ResourceCard from "@/components/resources/ResourceCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Download, FileText } from "lucide-react";
import * as Icons from "lucide-react";
import { Link } from "react-router-dom";

const SectionShell = ({
  id,
  title,
  subtitle,
  children,
}: {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) => (
  <section id={id} className="py-16 lg:py-24 scroll-mt-32">
    <div className="mb-10">
      <p className="text-[11px] tracking-[0.22em] uppercase text-muted-foreground mb-3">
        {title}
      </p>
      {subtitle && (
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight max-w-2xl">
          {subtitle}
        </h2>
      )}
    </div>
    {children}
  </section>
);

/* ─── Featured ─── */
export const FeaturedResource = ({
  resource,
  onOpen,
}: {
  resource: Resource;
  onOpen: (r: Resource) => void;
}) => (
  <section className="pt-10">
    <Card className="overflow-hidden bg-card/70 border-border/60">
      <div className="grid md:grid-cols-5 gap-0">
        <div className="md:col-span-2 aspect-[16/10] md:aspect-auto bg-muted relative">
          {resource.cover_url ? (
            <img
              src={resource.cover_url}
              alt={resource.title}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/30">
              <FileText className="w-16 h-16" />
            </div>
          )}
        </div>
        <div className="md:col-span-3 p-8 md:p-12 flex flex-col justify-center">
          <div className="text-[10px] uppercase tracking-[0.22em] text-primary/80 font-semibold mb-3">
            Featured · {resource.category ?? "Resource"}
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            {resource.title}
          </h2>
          {resource.description && (
            <p className="mt-4 text-base text-muted-foreground leading-relaxed max-w-xl">
              {resource.description}
            </p>
          )}
          <div className="mt-8">
            <Button onClick={() => onOpen(resource)} size="lg" className="group">
              Open Resource
              <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  </section>
);

/* ─── Grids ─── */
export const PresentationsGrid = ({ items, onOpen }: { items: Resource[]; onOpen: (r: Resource) => void }) => (
  <SectionShell id="presentations" title="Presentations" subtitle="Executive briefings and project overviews.">
    {items.length === 0 ? (
      <EmptyHint label="No presentations published yet." />
    ) : (
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((r) => (
          <ResourceCard key={r.id} resource={r} onOpen={onOpen} />
        ))}
      </div>
    )}
  </SectionShell>
);

export const ResearchGrid = ({ items, onOpen }: { items: Resource[]; onOpen: (r: Resource) => void }) => (
  <SectionShell id="research" title="Research & Publications" subtitle="Long-form thinking from inside our studios.">
    {items.length === 0 ? (
      <EmptyHint label="No publications yet." />
    ) : (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((r) => (
          <Card
            key={r.id}
            onClick={() => onOpen(r)}
            className="group cursor-pointer p-7 bg-card/70 border-border/60 flex flex-col"
          >
            {r.category && (
              <div className="text-[10px] uppercase tracking-[0.18em] text-primary/80 font-semibold mb-4">
                {r.category}
              </div>
            )}
            <h3 className="text-xl font-semibold tracking-tight group-hover:text-primary transition-colors mb-3">
              {r.title}
            </h3>
            {r.description && (
              <p className="text-sm text-muted-foreground leading-relaxed flex-1 line-clamp-4">
                {r.description}
              </p>
            )}
            <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-foreground">
              Read
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Card>
        ))}
      </div>
    )}
  </SectionShell>
);

export const VideoLibrary = ({ items, onOpen }: { items: Resource[]; onOpen: (r: Resource) => void }) => (
  <SectionShell id="videos" title="Video Library" subtitle="Corporate, technology and project overviews.">
    {items.length === 0 ? (
      <EmptyHint label="No videos available yet." />
    ) : (
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((r) => (
          <ResourceCard key={r.id} resource={r} onOpen={onOpen} variant="video" />
        ))}
      </div>
    )}
  </SectionShell>
);

export const DownloadCenter = ({ items }: { items: Resource[] }) => (
  <SectionShell id="downloads" title="Download Center" subtitle="Official documents and corporate materials.">
    {items.length === 0 ? (
      <EmptyHint label="No documents available for download." />
    ) : (
      <Card className="overflow-hidden bg-card/70 border-border/60">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-[10px] uppercase tracking-[0.18em] text-muted-foreground border-b border-border/60">
                <th className="px-6 py-4 font-semibold">Document</th>
                <th className="px-6 py-4 font-semibold hidden md:table-cell">Type</th>
                <th className="px-6 py-4 font-semibold hidden md:table-cell">Size</th>
                <th className="px-6 py-4 font-semibold text-right">Download</th>
              </tr>
            </thead>
            <tbody>
              {items.map((r) => (
                <tr key={r.id} className="border-b border-border/30 last:border-0 hover:bg-muted/30 transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-medium text-foreground">{r.title}</div>
                    {r.description && (
                      <div className="text-xs text-muted-foreground mt-1 line-clamp-1">
                        {r.description}
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4 text-muted-foreground hidden md:table-cell">
                    {r.file_type ?? r.category ?? "—"}
                  </td>
                  <td className="px-6 py-4 text-muted-foreground hidden md:table-cell">
                    {formatFileSize(r.file_size_bytes)}
                  </td>
                  <td className="px-6 py-4 text-right">
                    {r.file_url ? (
                      <a href={r.file_url} target="_blank" rel="noopener noreferrer" download>
                        <Button variant="outline" size="sm">
                          <Download className="w-4 h-4 mr-1.5" />
                          Download
                        </Button>
                      </a>
                    ) : (
                      <span className="text-xs text-muted-foreground">—</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    )}
  </SectionShell>
);

/* ─── Media Kit ─── */
const mediaKitItems = [
  { title: "Company Description", desc: "Official corporate description and positioning.", href: "/about" },
  { title: "Executive Biography", desc: "Founder and leadership biographies.", href: "/team" },
  { title: "Official Logos", desc: "Logo lockups and usage guidance.", href: "/media-kit" },
  { title: "Brand Assets", desc: "Approved colors, typography and visual elements.", href: "/media-kit" },
  { title: "Executive Photos", desc: "Approved imagery for editorial use.", href: "/team" },
  { title: "Contact Information", desc: "Press and partnership inquiries.", href: "/contact" },
];

export const MediaKitGrid = () => (
  <SectionShell id="media" title="Media Kit" subtitle="Everything press, partners and analysts need in one place.">
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {mediaKitItems.map((m) => (
        <Link key={m.title} to={m.href} className="group">
          <Card className="p-7 h-full bg-card/70 border-border/60">
            <h3 className="text-lg font-semibold tracking-tight group-hover:text-primary transition-colors">
              {m.title}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
            <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-foreground">
              Open
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Card>
        </Link>
      ))}
    </div>
  </SectionShell>
);

/* ─── Technology ─── */
export const TechnologyLibrary = ({ items, onOpen }: { items: Resource[]; onOpen: (r: Resource) => void }) => (
  <SectionShell id="technology" title="Technology Library" subtitle="Core technology areas across our portfolio.">
    {items.length === 0 ? (
      <EmptyHint label="No technology entries yet." />
    ) : (
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((r) => {
          const IconCmp = (r.icon && (Icons as any)[r.icon]) || Icons.Sparkles;
          return (
            <Card
              key={r.id}
              onClick={() => onOpen(r)}
              className="group cursor-pointer p-7 bg-card/70 border-border/60 flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                <IconCmp className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold tracking-tight group-hover:text-primary transition-colors">
                {r.title}
              </h3>
              {r.description && (
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">
                  {r.description}
                </p>
              )}
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-foreground">
                Explore
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Card>
          );
        })}
      </div>
    )}
  </SectionShell>
);

const EmptyHint = ({ label }: { label: string }) => (
  <div className="text-sm text-muted-foreground italic py-8 border border-dashed border-border/50 rounded-xl text-center">
    {label}
  </div>
);
