import { useEffect, useState } from "react";

/**
 * Floating reading-progress indicator.
 * Thin vertical bar on the right edge using the brand accent color.
 * - rAF-throttled scroll listener (single passive listener)
 * - Hidden on /admin routes and on very short pages
 * - Does not render on touch-only viewports (md:block)
 */
const ReadingProgress = () => {
  const [progress, setProgress] = useState(0);
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    if (window.location.pathname.startsWith("/admin")) {
      setEnabled(false);
      return;
    }

    let ticking = false;
    const compute = () => {
      const h = document.documentElement;
      const height = h.scrollHeight - h.clientHeight;
      if (height < 400) {
        setEnabled(false);
      } else {
        setEnabled(true);
        setProgress(Math.min(100, Math.max(0, (h.scrollTop / height) * 100)));
      }
      ticking = false;
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(compute);
    };

    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed right-1.5 top-24 bottom-24 w-[3px] rounded-full bg-border/40 z-40 pointer-events-none hidden md:block"
    >
      <div
        className="w-full rounded-full bg-gradient-to-b from-primary via-primary/80 to-accent shadow-[0_0_8px_hsl(var(--primary)/0.5)]"
        style={{ height: `${progress}%`, transition: "height 120ms linear" }}
      />
    </div>
  );
};

export default ReadingProgress;
