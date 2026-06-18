import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ChevronLeft, ChevronRight, Download, Share2 } from "lucide-react";
import { toast } from "sonner";
import PdfViewer from "@/components/presentation/PdfViewer";
import {
  Resource,
  fetchPublishedResources,
  fetchResource,
} from "@/lib/resources";

const ResourceViewer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [resource, setResource] = useState<Resource | null>(null);
  const [siblings, setSiblings] = useState<Resource[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    Promise.all([fetchResource(id), fetchPublishedResources()])
      .then(([r, all]) => {
        setResource(r);
        if (r) setSiblings(all.filter((x) => x.kind === r.kind));
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [id]);

  const idx = resource ? siblings.findIndex((s) => s.id === resource.id) : -1;
  const prev = idx > 0 ? siblings[idx - 1] : null;
  const next = idx >= 0 && idx < siblings.length - 1 ? siblings[idx + 1] : null;

  const handleShare = async () => {
    const url = window.location.href;
    try {
      await navigator.clipboard.writeText(url);
      toast.success("Link copied to clipboard");
    } catch {
      toast.error("Could not copy link");
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <div className="pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex items-center justify-between py-4 gap-3 flex-wrap">
          <Link to="/resources">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-1.5" /> Back to Resources
            </Button>
          </Link>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              disabled={!prev}
              onClick={() => prev && navigate(`/resources/${prev.id}`)}
            >
              <ChevronLeft className="w-4 h-4 mr-1" /> Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              disabled={!next}
              onClick={() => next && navigate(`/resources/${next.id}`)}
            >
              Next <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
            {resource?.file_url && (
              <a href={resource.file_url} target="_blank" rel="noopener noreferrer" download>
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-1.5" /> Download
                </Button>
              </a>
            )}
            <Button variant="outline" size="sm" onClick={handleShare}>
              <Share2 className="w-4 h-4 mr-1.5" /> Share
            </Button>
          </div>
        </div>

        {resource && (
          <div className="pb-4">
            {resource.category && (
              <div className="text-[10px] uppercase tracking-[0.18em] text-primary/80 font-semibold mb-2">
                {resource.category}
              </div>
            )}
            <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">{resource.title}</h1>
            {resource.description && (
              <p className="mt-2 text-sm text-muted-foreground max-w-3xl">{resource.description}</p>
            )}
          </div>
        )}
      </div>

      <div className="flex-1 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full pb-12">
        {loading ? (
          <div className="py-32 text-center text-muted-foreground">Loading…</div>
        ) : !resource ? (
          <div className="py-32 text-center text-muted-foreground">Resource not found.</div>
        ) : resource.file_url ? (
          <div className="h-[80vh] border border-border/60 rounded-xl overflow-hidden bg-card">
            <PdfViewer url={resource.file_url} title={resource.title} />
          </div>
        ) : resource.external_url ? (
          <div className="py-16 text-center">
            <a href={resource.external_url} target="_blank" rel="noopener noreferrer">
              <Button size="lg">Open external resource</Button>
            </a>
          </div>
        ) : (
          <div className="py-16 text-center text-muted-foreground">No viewable content.</div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default ResourceViewer;
