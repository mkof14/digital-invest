import { useCallback, useEffect, useRef, useState } from "react";
import * as pdfjsLib from "pdfjs-dist";
import pdfWorker from "pdfjs-dist/build/pdf.worker.min.mjs?url";
import {
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  Loader2,
  PanelLeftClose,
  PanelLeftOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker;

interface PdfViewerProps {
  url: string;
  title?: string;
}

const PdfViewer = ({ url, title }: PdfViewerProps) => {
  const [pdf, setPdf] = useState<pdfjsLib.PDFDocumentProxy | null>(null);
  const [numPages, setNumPages] = useState(0);
  const [page, setPage] = useState(1);
  const [scale, setScale] = useState(1.25);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [thumbsOpen, setThumbsOpen] = useState(true);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const renderTaskRef = useRef<any>(null);

  // Load PDF
  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);
    setPdf(null);
    setPage(1);

    const task = pdfjsLib.getDocument({ url, withCredentials: false });
    task.promise
      .then((doc) => {
        if (cancelled) return;
        setPdf(doc);
        setNumPages(doc.numPages);
        setLoading(false);
      })
      .catch((e) => {
        if (cancelled) return;
        console.error("PDF load failed", e);
        setError(e?.message || "Failed to load PDF");
        setLoading(false);
      });

    return () => {
      cancelled = true;
      task.destroy();
    };
  }, [url]);

  // Render current page
  useEffect(() => {
    if (!pdf || !canvasRef.current) return;
    let cancelled = false;
    (async () => {
      try {
        const p = await pdf.getPage(page);
        if (cancelled) return;
        const dpr = window.devicePixelRatio || 1;
        const viewport = p.getViewport({ scale: scale * dpr });
        const canvas = canvasRef.current!;
        const ctx = canvas.getContext("2d")!;
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        canvas.style.width = `${viewport.width / dpr}px`;
        canvas.style.height = `${viewport.height / dpr}px`;

        if (renderTaskRef.current) {
          try {
            renderTaskRef.current.cancel();
          } catch {}
        }
        const task = p.render({ canvasContext: ctx, viewport });
        renderTaskRef.current = task;
        await task.promise;
      } catch (e: any) {
        if (e?.name !== "RenderingCancelledException") {
          console.error("Render failed", e);
        }
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [pdf, page, scale]);

  const goPrev = useCallback(() => setPage((p) => Math.max(1, p - 1)), []);
  const goNext = useCallback(
    () => setPage((p) => Math.min(numPages, p + 1)),
    [numPages]
  );

  // Keyboard nav
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement) return;
      if (e.key === "PageDown") {
        e.preventDefault();
        goNext();
      } else if (e.key === "PageUp") {
        e.preventDefault();
        goPrev();
      } else if (e.key === "+" || e.key === "=") {
        setScale((s) => Math.min(4, s + 0.25));
      } else if (e.key === "-") {
        setScale((s) => Math.max(0.5, s - 0.25));
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goPrev, goNext]);

  if (error) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center gap-3 bg-muted/20 p-6 text-center">
        <p className="text-sm text-muted-foreground">PDF preview unavailable.</p>
        <Button asChild variant="outline" size="sm">
          <a href={url} target="_blank" rel="noopener noreferrer">
            Open PDF in new tab
          </a>
        </Button>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-col bg-muted/20">
      {/* PDF toolbar */}
      <div className="flex items-center justify-between gap-2 px-3 py-2 border-b border-border bg-card/60 backdrop-blur">
        <div className="flex items-center gap-1.5">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={() => setThumbsOpen((v) => !v)}
            title={thumbsOpen ? "Hide page thumbnails" : "Show page thumbnails"}
          >
            {thumbsOpen ? (
              <PanelLeftClose className="h-4 w-4" />
            ) : (
              <PanelLeftOpen className="h-4 w-4" />
            )}
          </Button>
          <span className="text-xs text-muted-foreground truncate max-w-[200px]">
            {title}
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={goPrev}
            disabled={page <= 1}
            title="Previous page (PgUp)"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <div className="flex items-center gap-1 text-xs">
            <Input
              type="number"
              min={1}
              max={numPages}
              value={page}
              onChange={(e) => {
                const v = Number(e.target.value);
                if (Number.isFinite(v))
                  setPage(Math.max(1, Math.min(numPages || 1, v)));
              }}
              className="h-8 w-14 text-xs text-center"
            />
            <span className="text-muted-foreground tabular-nums">/ {numPages || "…"}</span>
          </div>
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={goNext}
            disabled={page >= numPages}
            title="Next page (PgDn)"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
          <div className="w-px h-5 bg-border mx-1" />
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={() => setScale((s) => Math.max(0.5, s - 0.25))}
            title="Zoom out (-)"
          >
            <ZoomOut className="h-4 w-4" />
          </Button>
          <span className="text-xs tabular-nums w-12 text-center">
            {Math.round(scale * 100)}%
          </span>
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={() => setScale((s) => Math.min(4, s + 0.25))}
            title="Zoom in (+)"
          >
            <ZoomIn className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Body */}
      <div className="flex-1 flex min-h-0">
        {/* Thumbnails */}
        {thumbsOpen && (
          <div className="w-36 shrink-0 border-r border-border overflow-y-auto bg-card/40 p-2 space-y-2">
            {pdf &&
              Array.from({ length: numPages }, (_, i) => i + 1).map((n) => (
                <PdfThumb
                  key={n}
                  pdf={pdf}
                  page={n}
                  active={n === page}
                  onClick={() => setPage(n)}
                />
              ))}
          </div>
        )}

        {/* Main page */}
        <div className="flex-1 overflow-auto p-4 flex items-start justify-center">
          {loading ? (
            <div className="flex items-center gap-2 text-muted-foreground py-12">
              <Loader2 className="h-4 w-4 animate-spin" />
              <span className="text-sm">Loading PDF…</span>
            </div>
          ) : (
            <canvas
              ref={canvasRef}
              className="shadow-lg bg-white rounded-sm max-w-full"
            />
          )}
        </div>
      </div>
    </div>
  );
};

// Thumbnail (lazy renders once)
const PdfThumb = ({
  pdf,
  page,
  active,
  onClick,
}: {
  pdf: pdfjsLib.PDFDocumentProxy;
  page: number;
  active: boolean;
  onClick: () => void;
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const renderedRef = useRef(false);

  useEffect(() => {
    if (renderedRef.current || !canvasRef.current) return;
    renderedRef.current = true;
    let cancelled = false;
    (async () => {
      try {
        const p = await pdf.getPage(page);
        if (cancelled) return;
        const targetW = 120;
        const base = p.getViewport({ scale: 1 });
        const scale = targetW / base.width;
        const viewport = p.getViewport({ scale });
        const canvas = canvasRef.current!;
        const ctx = canvas.getContext("2d")!;
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        await p.render({ canvasContext: ctx, viewport }).promise;
      } catch {}
    })();
    return () => {
      cancelled = true;
    };
  }, [pdf, page]);

  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full rounded border transition-all overflow-hidden bg-white flex flex-col items-center ${
        active
          ? "border-primary ring-2 ring-primary/40"
          : "border-border hover:border-primary/50"
      }`}
      title={`Page ${page}`}
    >
      <canvas ref={canvasRef} className="w-full h-auto block" />
      <span className="text-[10px] text-muted-foreground py-1">{page}</span>
    </button>
  );
};

export default PdfViewer;
