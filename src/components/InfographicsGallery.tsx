import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Download, 
  Copy, 
  Share2, 
  Mail, 
  ChevronLeft, 
  ChevronRight, 
  X, 
  ZoomIn,
  Images,
  Check
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Infographic {
  src: string;
  title: string;
  alt: string;
}

interface InfographicsGalleryProps {
  infographics: Infographic[];
  projectTitle?: string;
}

const InfographicsGallery = ({ infographics, projectTitle = "BioMath Core" }: InfographicsGalleryProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const isOpen = selectedIndex !== null;
  const current = selectedIndex !== null ? infographics[selectedIndex] : null;

  const openViewer = (index: number) => setSelectedIndex(index);
  const closeViewer = () => setSelectedIndex(null);

  const goNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % infographics.length);
    }
  };

  const goPrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + infographics.length) % infographics.length);
    }
  };

  const handleDownload = async (src: string, title: string) => {
    try {
      const response = await fetch(src);
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${title.replace(/\s+/g, "-").toLowerCase()}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      toast({ title: "Downloaded", description: `${title} saved successfully` });
    } catch {
      toast({ title: "Error", description: "Failed to download image", variant: "destructive" });
    }
  };

  const handleCopy = async (src: string) => {
    try {
      const response = await fetch(src);
      const blob = await response.blob();
      await navigator.clipboard.write([
        new ClipboardItem({ [blob.type]: blob }),
      ]);
      setCopied(true);
      toast({ title: "Copied!", description: "Image copied to clipboard" });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback: copy URL
      try {
        await navigator.clipboard.writeText(window.location.origin + src);
        setCopied(true);
        toast({ title: "Link copied!", description: "Image link copied to clipboard" });
        setTimeout(() => setCopied(false), 2000);
      } catch {
        toast({ title: "Error", description: "Failed to copy", variant: "destructive" });
      }
    }
  };

  const handleShare = async (src: string, title: string) => {
    const shareData = {
      title: `${projectTitle} — ${title}`,
      text: `Check out this infographic: ${title}`,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        if ((err as Error).name !== "AbortError") {
          toast({ title: "Share cancelled", variant: "destructive" });
        }
      }
    } else {
      // Fallback: copy link
      await navigator.clipboard.writeText(window.location.href);
      toast({ title: "Link copied!", description: "Share link copied to clipboard" });
    }
  };

  const handleEmail = (title: string) => {
    const subject = encodeURIComponent(`${projectTitle} — ${title}`);
    const body = encodeURIComponent(
      `I'd like to share this infographic from ${projectTitle}:\n\n${title}\n\nView it here: ${window.location.href}`
    );
    window.open(`mailto:?subject=${subject}&body=${body}`, "_self");
  };

  return (
    <>
      {/* Thumbnail Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {infographics.map((infographic, index) => (
          <Card
            key={index}
            className="border-primary/20 overflow-hidden cursor-pointer group hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            onClick={() => openViewer(index)}
          >
            <div className="relative aspect-video overflow-hidden">
              <img
                src={infographic.src}
                alt={infographic.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-all duration-300 flex items-center justify-center">
                <ZoomIn className="w-10 h-10 text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
            <div className="p-4">
              <p className="text-sm font-medium text-foreground">{infographic.title}</p>
            </div>
          </Card>
        ))}
      </div>

      {/* Lightbox Viewer */}
      <Dialog open={isOpen} onOpenChange={(open) => !open && closeViewer()}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-background/95 backdrop-blur-xl border-primary/20 overflow-hidden">
          <DialogTitle className="sr-only">
            {current?.title || "Infographic viewer"}
          </DialogTitle>

          {current && (
            <div className="flex flex-col h-[90vh]">
              {/* Top Bar */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-border/50">
                <div className="flex items-center gap-3">
                  <Badge variant="outline" className="text-xs">
                    {(selectedIndex ?? 0) + 1} / {infographics.length}
                  </Badge>
                  <h3 className="text-lg font-semibold truncate max-w-[400px]">
                    {current.title}
                  </h3>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleDownload(current.src, current.title)}
                    className="gap-2"
                  >
                    <Download className="w-4 h-4" />
                    <span className="hidden sm:inline">Download</span>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleCopy(current.src)}
                    className="gap-2"
                  >
                    {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                    <span className="hidden sm:inline">{copied ? "Copied" : "Copy"}</span>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleShare(current.src, current.title)}
                    className="gap-2"
                  >
                    <Share2 className="w-4 h-4" />
                    <span className="hidden sm:inline">Share</span>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleEmail(current.title)}
                    className="gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    <span className="hidden sm:inline">Send</span>
                  </Button>

                  <div className="w-px h-6 bg-border/50 mx-1" />

                  <Button variant="ghost" size="icon" onClick={closeViewer}>
                    <X className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              {/* Image Area */}
              <div className="flex-1 relative flex items-center justify-center p-4 overflow-auto">
                {/* Navigation Arrows */}
                {infographics.length > 1 && (
                  <>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-background/80 hover:bg-background border border-border/50"
                      onClick={goPrev}
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-background/80 hover:bg-background border border-border/50"
                      onClick={goNext}
                    >
                      <ChevronRight className="w-6 h-6" />
                    </Button>
                  </>
                )}

                <img
                  src={current.src}
                  alt={current.alt}
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
              </div>

              {/* Bottom Thumbnails */}
              {infographics.length > 1 && (
                <div className="flex items-center justify-center gap-3 px-6 py-4 border-t border-border/50">
                  {infographics.map((inf, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedIndex(idx)}
                      className={`w-20 h-14 rounded-md overflow-hidden border-2 transition-all ${
                        idx === selectedIndex
                          ? "border-primary shadow-md scale-105"
                          : "border-transparent opacity-60 hover:opacity-100"
                      }`}
                    >
                      <img
                        src={inf.src}
                        alt={inf.title}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export { InfographicsGallery };
export type { Infographic };
