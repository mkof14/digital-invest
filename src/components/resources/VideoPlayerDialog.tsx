import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Resource, toEmbedUrl } from "@/lib/resources";

interface Props {
  resource: Resource | null;
  onClose: () => void;
}

const VideoPlayerDialog = ({ resource, onClose }: Props) => {
  const open = !!resource;
  const url = resource?.video_url || resource?.external_url || "";
  const embed = url ? toEmbedUrl(url) : null;

  return (
    <Dialog open={open} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="max-w-5xl p-0 overflow-hidden bg-background">
        <DialogTitle className="sr-only">{resource?.title ?? "Video"}</DialogTitle>
        <div className="aspect-video w-full bg-black">
          {embed?.type === "iframe" && (
            <iframe
              src={embed.src}
              title={resource?.title}
              className="w-full h-full"
              allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
          {embed?.type === "video" && (
            <video src={embed.src} className="w-full h-full" controls />
          )}
        </div>
        {resource && (
          <div className="p-6">
            {resource.category && (
              <div className="text-[10px] uppercase tracking-[0.18em] text-primary/80 font-semibold mb-2">
                {resource.category}
              </div>
            )}
            <h3 className="text-xl font-semibold tracking-tight">{resource.title}</h3>
            {resource.description && (
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {resource.description}
              </p>
            )}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default VideoPlayerDialog;
