import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";

/* ──────────────────────────────────────────────────────────────────────────
 * Shared: in-view hook for "play once on enter" animations
 * ────────────────────────────────────────────────────────────────────────── */
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

/* ──────────────────────────────────────────────────────────────────────────
 * 1. Current Focus — rotating live initiative
 * ────────────────────────────────────────────────────────────────────────── */
const focusItems = [
  { name: "BioMath Core", area: "Human Data Models", track: "Research & Development", status: "Active Development", slug: "biomath-core" },
  { name: "SAVEN", area: "Connected Infrastructure", track: "Engineering", status: "Active Development", slug: "saven" },
  { name: "AGRON", area: "Robotic Operations", track: "Field Deployment", status: "Active Development", slug: "agron" },
  { name: "Adamas Materials", area: "Advanced Materials", track: "Operations", status: "Active Development", slug: "/adamas" },
];

export const CurrentFocusBlock = () => {
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(true);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (hovered) return;
    const fadeOut = setTimeout(() => setVisible(false), 6500);
    const swap = setTimeout(() => {
      setIdx((i) => (i + 1) % focusItems.length);
      setVisible(true);
    }, 7000);
    return () => {
      clearTimeout(fadeOut);
      clearTimeout(swap);
    };
  }, [idx, hovered]);

  const item = focusItems[idx];
  const href = item.slug.startsWith("/") ? item.slug : `/projects/${item.slug}`;

  return (
    <section className="py-20 lg:py-28">
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

          <div className="mt-10 flex gap-1.5">
            {focusItems.map((_, i) => (
              <span
                key={i}
                className={`h-0.5 rounded-full transition-all duration-500 ${
                  i === idx ? "w-10 bg-primary" : "w-5 bg-border"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ──────────────────────────────────────────────────────────────────────────
 * 2. Today We Build — rotating tagline
 * ────────────────────────────────────────────────────────────────────────── */
const buildLines = [
  "Human Data Models",
  "Robotic Operations",
  "Advanced Materials",
  "Future Infrastructure",
  "Connected Systems",
];

export const TodayWeBuild = () => {
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const fadeOut = setTimeout(() => setVisible(false), 3600);
    const swap = setTimeout(() => {
      setIdx((i) => (i + 1) % buildLines.length);
      setVisible(true);
    }, 4000);
    return () => {
      clearTimeout(fadeOut);
      clearTimeout(swap);
    };
  }, [idx]);

  return (
    <section className="py-16 lg:py-24 border-y border-border/40">
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
            {buildLines[idx]}
          </span>
        </div>
      </div>
    </section>
  );
};

/* ──────────────────────────────────────────────────────────────────────────
 * 3. Live Numbers — count-up once on enter
 * ────────────────────────────────────────────────────────────────────────── */
type Stat = { label: string; value: number; suffix?: string; display?: string };

const stats: Stat[] = [
  { label: "Projects", value: 4, display: "04" },
  { label: "Research Areas", value: 20, suffix: "+" },
  { label: "Technology Directions", value: 50, suffix: "+" },
  { label: "Development Hours", value: 0, display: "Thousands" },
];

const Counter = ({ stat, run }: { stat: Stat; run: boolean }) => {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!run || stat.display === "Thousands") return;
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
  }, [run, stat]);

  const text =
    stat.display && stat.display !== "Thousands"
      ? stat.display
      : stat.display === "Thousands"
      ? "Thousands"
      : `${n}${stat.suffix ?? ""}`;
  // When animating numeric ones with custom display like "04", pad
  const final =
    stat.display === "04" && run
      ? String(n).padStart(2, "0")
      : text;

  return <div className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground tabular-nums">{final}</div>;
};

export const LiveNumbers = () => {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);
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
              <Counter stat={s} run={inView} />
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
 * 4. Tech Backdrop — subtle animated background (CSS only)
 * Used as <TechBackdrop /> inside a relative parent.
 * ────────────────────────────────────────────────────────────────────────── */
export const TechBackdrop = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
    <div
      className="absolute inset-0 opacity-[0.05]"
      style={{
        backgroundImage:
          "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
        maskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
        WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
      }}
    />
    <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 rounded-full bg-primary/40 animate-subtle-float" />
    <div
      className="absolute top-1/2 right-1/3 w-1 h-1 rounded-full bg-accent/40 animate-subtle-float"
      style={{ animationDelay: "2s" }}
    />
    <div
      className="absolute bottom-1/4 left-1/2 w-1 h-1 rounded-full bg-info/40 animate-subtle-float"
      style={{ animationDelay: "4s" }}
    />
    <div
      className="absolute top-1/3 right-1/4 w-1.5 h-1.5 rounded-full bg-primary/30 animate-subtle-float"
      style={{ animationDelay: "1s" }}
    />
  </div>
);

/* ──────────────────────────────────────────────────────────────────────────
 * 5. Weekly Insight — editorial cards
 * ────────────────────────────────────────────────────────────────────────── */
const insights = [
  {
    category: "Technology",
    title: "Architecting Human Data Models",
    desc: "How BioMath Core structures longitudinal health data for high-resolution research.",
    href: "/projects/biomath-core",
  },
  {
    category: "Operations",
    title: "Robotic Workforce Patterns",
    desc: "Field learnings from AGRON deployments and what comes next for autonomous workflows.",
    href: "/projects/agron",
  },
  {
    category: "Infrastructure",
    title: "Building Calmly, Building Long",
    desc: "Our approach to infrastructure that compounds across product cycles.",
    href: "/why-digital-invest",
  },
];

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
        {insights.map((it) => (
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
 * 6. Activity Strip — infinite marquee
 * ────────────────────────────────────────────────────────────────────────── */
const activities = [
  "Design Updates",
  "Research",
  "Development",
  "Testing",
  "Operations",
  "Architecture",
  "Field Work",
  "Engineering",
];

export const ActivityStrip = () => {
  const row = [...activities, ...activities];
  return (
    <section className="py-10 border-y border-border/30 bg-muted/20 overflow-hidden">
      <div className="relative">
        <div className="flex gap-3 whitespace-nowrap animate-[activity-marquee_45s_linear_infinite]">
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
