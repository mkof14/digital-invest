import { useEffect, useState } from "react";

/**
 * Floating reading-progress indicator.
 * Thin vertical bar on the right edge using the brand accent color.
 * Hides on /admin and on very short pages.
 */
const ReadingProgress = () => {
  const [progress, setProgress] = useState(0);
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop;
      const height = h.scrollHeight - h.clientHeight;
      if (height < 400) {
        setEnabled(false);
        return;
      }
      setEnabled(true);
      setProgress(Math.min(100, Math.max(0, (scrolled / height) * 100)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  if (typeof window !== "undefined" && window.location.pathname.startsWith("/admin")) {
    return null;
  }
  if (!enabled) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed right-1.5 top-24 bottom-24 w-[3px] rounded-full bg-border/40 z-40 pointer-events-none hidden md:block"
    >
      <div
        className="w-full rounded-full bg-gradient-to-b from-primary via-primary/80 to-accent transition-[height] duration-150 ease-out shadow-[0_0_8px_hsl(var(--primary)/0.5)]"
        style={{ height: `${progress}%` }}
      />
    </div>
  );
};

export default ReadingProgress;
