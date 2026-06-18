import { Card } from "@/components/ui/card";
import { Resource } from "@/lib/resources";
import OptimizedImage from "@/components/OptimizedImage";
import { ArrowRight, FileText, Play } from "lucide-react";

interface Props {
  resource: Resource;
  onOpen: (r: Resource) => void;
  variant?: "default" | "video";
}

const ResourceCard = ({ resource, onOpen, variant = "default" }: Props) => {
  const isVideo = variant === "video" || resource.kind === "video";
  return (
    <Card
      onClick={() => onOpen(resource)}
      className="group cursor-pointer overflow-hidden bg-card/70 border-border/60 flex flex-col"
    >
      <div className="relative aspect-[16/10] bg-muted overflow-hidden">
        {resource.cover_url ? (
          <OptimizedImage
            src={resource.cover_url}
            alt={resource.title}
            className="w-full h-full object-cover"
            containerClassName="w-full h-full"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-muted-foreground/40">
            {isVideo ? <Play className="w-10 h-10" /> : <FileText className="w-10 h-10" />}
          </div>
        )}
        {isVideo && (
          <div className="absolute inset-0 flex items-center justify-center bg-foreground/10 group-hover:bg-foreground/20 transition-colors">
            <div className="w-14 h-14 rounded-full bg-background/90 flex items-center justify-center shadow-md">
              <Play className="w-5 h-5 text-foreground translate-x-0.5" />
            </div>
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col flex-1">
        {resource.category && (
          <div className="text-[10px] uppercase tracking-[0.18em] text-primary/80 font-semibold mb-3">
            {resource.category}
          </div>
        )}
        <h3 className="text-lg font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors">
          {resource.title}
        </h3>
        {resource.description && (
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-1">
            {resource.description}
          </p>
        )}
        <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-foreground">
          {isVideo ? "Watch" : resource.kind === "presentation" ? "View Presentation" : "Read"}
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
        </div>
      </div>
    </Card>
  );
};

export default ResourceCard;
