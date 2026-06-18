import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import {
  CURRENT_FOCUS,
  TODAY_WE_BUILD,
  WEEKLY_INSIGHT,
  ACTIVITY_STRIP,
  ROTATION_TIMING,
} from "@/config/engagement";

/* ──────────────────────────────────────────────────────────────────────────
 * Shared hooks
 * ────────────────────────────────────────────────────────────────────────── */

/** Trigger an animation once when an element enters the viewport. */
const useInView = <T extends HTMLElement>(threshold = 0.2) => {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current || inView) return;
    const node = ref.current;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [inView, threshold]);
  return { ref, inView };
};

/** Returns true while the element is on screen AND the tab is visible. */
const useActive = <T extends HTMLElement>() => {
  const ref = useRef<T | null>(null);
  const [active, setActive] = useState(true);
  useEffect(() => {
    let visible = true;
    let onScreen = true;
    const sync = () => setActive(visible && onScreen);

    const onVis = () => {
      visible = document.visibilityState === "visible";
      sync();
    };
    document.addEventListener("visibilitychange", onVis);
    onVis();

    let obs: IntersectionObserver | null = null;
    if (ref.current) {
      obs = new IntersectionObserver(
        ([e]) => {
          onScreen = e.isIntersecting;
          sync();
        },
        { threshold: 0.05 }
      );
      obs.observe(ref.current);
    }
    return () => {
      document.removeEventListener("visibilitychange", onVis);
      obs?.disconnect();
    };
  }, []);
  return { ref, active };
};

const useReducedMotion = () => {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);
  return reduced;
};

/* ──────────────────────────────────────────────────────────────────────────
 * 1. Current Focus
 * ────────────────────────────────────────────────────────────────────────── */
export const CurrentFocusBlock = () => {
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(true);
  const [hovered, setHovered] = useState(false);
  const { ref, active } = useActive<HTMLDivElement>();
  const reduced = useReducedMotion();

  useEffect(() => {
    if (hovered || !active || reduced || CURRENT_FOCUS.length <= 1) return;
    const { currentFocusInterval: total, currentFocusFadeLead: lead } = ROTATION_TIMING;
    const fadeOut = setTimeout(() => setVisible(false), total - lead);
    const swap = setTimeout(() => {
      setIdx((i) => (i + 1) % CURRENT_FOCUS.length);
      setVisible(true);
    }, total);
    return () => {
      clearTimeout(fadeOut);
      clearTimeout(swap);
    };
  }, [idx, hovered, active, reduced]);

  const item = CURRENT_FOCUS[idx];
  if (!item) return null;
  const href = item.slug.startsWith("/") ? item.slug : `/projects/${item.slug}`;

  return (
    <section ref={ref} className="py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="rounded-2xl border border-border/60 bg-card/60 backdrop-blur-sm p-10 lg:p-14 shadow-sm hover:shadow-md transition-shadow"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-success" />
            </span>
            <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-muted-foreground">
              Current Focus
            </span>
          </div>

          <div
            key={idx}
            className={`transition-opacity duration-700 ${visible ? "opacity-100" : "opacity-0"}`}
          >
            <Link to={href} className="group block">
              <h3 className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors">
                {item.name}
              </h3>
              <p className="mt-3 text-lg text-muted-foreground font-light">{item.area}</p>

              <div className="mt-8 grid grid-cols-2 gap-8 max-w-md">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground/70 mb-1">Track</div>
                  <div className="text-sm font-medium text-foreground">{item.track}</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground/70 mb-1">Status</div>
                  <div className="text-sm font-medium text-foreground inline-flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-success" />
                    {item.status}
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {CURRENT_FOCUS.length > 1 && (
            <div className="mt-10 flex gap-1.5">
              {CURRENT_FOCUS.map((_, i) => (
                <span
                  key={i}
                  className={`h-0.5 rounded-full transition-all duration-500 ${
                    i === idx ? "w-10 bg-primary" : "w-5 bg-border"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

/* ──────────────────────────────────────────────────────────────────────────
 * 2. Today We Build
 * ────────────────────────────────────────────────────────────────────────── */
export const TodayWeBuild = () => {
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(true);
  const { ref, active } = useActive<HTMLElement>();
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!active || reduced || TODAY_WE_BUILD.length <= 1) return;
    const { todayWeBuildInterval: total, todayWeBuildFadeLead: lead } = ROTATION_TIMING;
    const fadeOut = setTimeout(() => setVisible(false), total - lead);
    const swap = setTimeout(() => {
      setIdx((i) => (i + 1) % TODAY_WE_BUILD.length);
      setVisible(true);
    }, total);
    return () => {
      clearTimeout(fadeOut);
      clearTimeout(swap);
    };
  }, [idx, active, reduced]);

  return (
    <section ref={ref} className="py-16 lg:py-24 border-y border-border/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-[11px] tracking-[0.24em] uppercase text-muted-foreground mb-4">
          Today We Build
        </p>
        <div className="h-16 md:h-20 flex items-center justify-center">
          <span
            key={idx}
            className={`text-4xl md:text-6xl font-semibold tracking-tight transition-opacity duration-700 ${
              visible ? "opacity-100" : "opacity-0"
            }`}
          >
            {TODAY_WE_BUILD[idx]}
          </span>
        </div>
      </div>
    </section>
  );
};

/* ──────────────────────────────────────────────────────────────────────────
 * 3. Live Numbers
 * ────────────────────────────────────────────────────────────────────────── */
type Stat = { label: string; value: number; suffix?: string; display?: string };

const stats: Stat[] = [
  { label: "Projects", value: 4, display: "04" },
  { label: "Research Areas", value: 20, suffix: "+" },
  { label: "Technology Directions", value: 50, suffix: "+" },
  { label: "Development Hours", value: 0, display: "Thousands" },
];

const Counter = ({ stat, run, reduced }: { stat: Stat; run: boolean; reduced: boolean }) => {
  const [n, setN] = useState(reduced ? stat.value : 0);
  useEffect(() => {
    if (!run || reduced || stat.display === "Thousands") return;
    const duration = 1400;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * stat.value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [run, reduced, stat]);

  const final =
    stat.display === "Thousands"
      ? "Thousands"
      : stat.display === "04"
      ? String(n).padStart(2, "0")
      : `${n}${stat.suffix ?? ""}`;
  return <div className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground tabular-nums">{final}</div>;
};

export const LiveNumbers = () => {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);
  const reduced = useReducedMotion();
  return (
    <section ref={ref} className="py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border/50 rounded-2xl overflow-hidden border border-border/40">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`bg-card/70 backdrop-blur-sm p-8 lg:p-10 text-center transition-all duration-500 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              }`}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <Counter stat={s} run={inView} reduced={reduced} />
              <div className="mt-3 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ──────────────────────────────────────────────────────────────────────────
 * 4. Weekly Insight
 * ────────────────────────────────────────────────────────────────────────── */
export const WeeklyInsight = () => (
  <section className="py-20 lg:py-28">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-end justify-between mb-12">
        <div>
          <p className="text-[11px] tracking-[0.22em] uppercase text-muted-foreground mb-3">
            Weekly Insight
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            From inside the studio
          </h2>
        </div>
        <Link
          to="/news"
          className="hidden md:inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary story-link"
        >
          All insights <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {WEEKLY_INSIGHT.map((it) => (
          <Card key={it.title} className="group p-7 flex flex-col h-full bg-card/70 backdrop-blur-sm">
            <div className="text-[10px] uppercase tracking-[0.18em] text-primary/80 font-semibold mb-4">
              {it.category}
            </div>
            <h3 className="text-xl font-semibold tracking-tight mb-3 group-hover:text-primary transition-colors">
              {it.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed flex-1">{it.desc}</p>
            <Link
              to={it.href}
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-foreground story-link"
            >
              Read more
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

/* ──────────────────────────────────────────────────────────────────────────
 * 5. Activity Strip — pauses when off-screen / tab hidden / reduced motion
 * ────────────────────────────────────────────────────────────────────────── */
export const ActivityStrip = () => {
  const row = [...ACTIVITY_STRIP, ...ACTIVITY_STRIP];
  const { ref, active } = useActive<HTMLElement>();
  const reduced = useReducedMotion();
  const animate = active && !reduced;
  return (
    <section ref={ref} className="py-10 border-y border-border/30 bg-muted/20 overflow-hidden">
      <div className="relative">
        <div
          className="flex gap-3 whitespace-nowrap"
          style={{
            animation: animate ? "activity-marquee 45s linear infinite" : "none",
            willChange: animate ? "transform" : "auto",
          }}
        >
          {row.map((a, i) => (
            <span
              key={i}
              className="inline-flex items-center px-4 py-1.5 rounded-full border border-border/60 bg-card text-xs font-medium text-muted-foreground tracking-wide"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-success/70 mr-2" />
              {a}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
