import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import ResourceToolbar from "@/components/resources/ResourceToolbar";
import VideoPlayerDialog from "@/components/resources/VideoPlayerDialog";
import {
  Resource,
  ResourceKind,
  fetchPublishedResources,
} from "@/lib/resources";
import {
  FeaturedResource,
  PresentationsGrid,
  ResearchGrid,
  VideoLibrary,
  DownloadCenter,
  MediaKitGrid,
  TechnologyLibrary,
} from "./sections";
import { updateMetaTags, resetMetaTags } from "@/lib/metaTags";

const IntelligenceCenter = () => {
  const navigate = useNavigate();
  const [resources, setResources] = useState<Resource[]>([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<ResourceKind | "all">("all");
  const [videoResource, setVideoResource] = useState<Resource | null>(null);

  useEffect(() => {
    updateMetaTags({
      title: "Resources — Digital Invest Intelligence Center",
      description:
        "Presentations, research, videos, downloads, media materials and technology overviews from Digital Invest.",
      canonicalUrl: "https://digitalinvest.com/resources",
    });
    fetchPublishedResources()
      .then(setResources)
      .catch(console.error)
      .finally(() => setLoading(false));
    return () => resetMetaTags();
  }, []);

  const handleOpen = (r: Resource) => {
    if (r.kind === "video") {
      setVideoResource(r);
      return;
    }
    if (r.file_url) {
      navigate(`/resources/${r.id}`);
      return;
    }
    if (r.external_url) {
      window.open(r.external_url, "_blank", "noopener,noreferrer");
    }
  };

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return resources.filter((r) => {
      if (filter !== "all" && r.kind !== filter) return false;
      if (!q) return true;
      return (
        r.title.toLowerCase().includes(q) ||
        (r.description ?? "").toLowerCase().includes(q) ||
        (r.category ?? "").toLowerCase().includes(q)
      );
    });
  }, [resources, query, filter]);

  const featured = resources.find((r) => r.is_featured);
  const byKind = (k: ResourceKind) => filtered.filter((r) => r.kind === k);

  const quickLinks: { label: string; href: string }[] = [
    { label: "Presentations", href: "#presentations" },
    { label: "Research", href: "#research" },
    { label: "Videos", href: "#videos" },
    { label: "Downloads", href: "#downloads" },
  ];

  return (
    <div className="min-h-screen bg-background max-w-[1600px] mx-auto">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl">
          <p className="text-[11px] tracking-[0.22em] uppercase text-muted-foreground mb-4">
            Intelligence Center
          </p>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-foreground">
            Digital Invest Resources
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed font-light">
            Explore our projects, publications, presentations, technology overviews,
            media materials and corporate documents.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {quickLinks.map((q) => (
              <a key={q.href} href={q.href}>
                <Button variant="outline" size="sm" className="rounded-full">
                  {q.label}
                </Button>
              </a>
            ))}
          </div>
        </div>
      </section>

      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <ResourceToolbar
          query={query}
          onQueryChange={setQuery}
          activeFilter={filter}
          onFilterChange={setFilter}
        />

        {loading ? (
          <div className="py-32 text-center text-muted-foreground">Loading resources…</div>
        ) : (
          <>
            {featured && filter === "all" && !query && (
              <FeaturedResource resource={featured} onOpen={handleOpen} />
            )}

            {(filter === "all" || filter === "presentation") && (
              <PresentationsGrid items={byKind("presentation")} onOpen={handleOpen} />
            )}
            {(filter === "all" || filter === "research") && (
              <ResearchGrid items={byKind("research")} onOpen={handleOpen} />
            )}
            {(filter === "all" || filter === "video") && (
              <VideoLibrary items={byKind("video")} onOpen={handleOpen} />
            )}
            {(filter === "all" || filter === "download") && (
              <DownloadCenter items={byKind("download")} />
            )}
            {(filter === "all" || filter === "media") && <MediaKitGrid />}
            {(filter === "all" || filter === "technology") && (
              <TechnologyLibrary items={byKind("technology")} onOpen={handleOpen} />
            )}
          </>
        )}
      </div>

      <VideoPlayerDialog resource={videoResource} onClose={() => setVideoResource(null)} />
      <Footer />
    </div>
  );
};

export default IntelligenceCenter;
