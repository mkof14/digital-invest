import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  ArrowRight, ArrowLeft, Globe, MessageSquare, Layers, Brain, Lock,
  Sparkles, CheckCircle2, Eye, GitBranch, Inbox, Workflow, Users, Mic,
} from "lucide-react";
import oneinowLogo from "@/assets/projects/1inow-logo.png";
import oneinowHero from "@/assets/projects/1inow-hero.jpg";
import OptimizedImage from "@/components/OptimizedImage";
import InvestorPageDisclaimer from "@/components/InvestorPageDisclaimer";
import DownloadInvestorBriefButton from "@/components/DownloadInvestorBriefButton";
import { useEffect, useState } from "react";
import { updateMetaTags, resetMetaTags } from "@/lib/metaTags";

// Brand tokens (scoped, applied via inline style to keep tokens isolated to this page)
const BRAND = {
  bg: "#0d1a1f",
  surface: "#11242a",
  surfaceSoft: "#16323a",
  text: "#eef0e8",
  textMuted: "#a9b5ad",
  accent: "#7fa88e",       // sage
  accentSoft: "#a8c4b3",
  accentDeep: "#4a7a5e",
};

const principles = [
  { icon: Inbox, title: "One Input", desc: "Information is entered only once. Everything else is connected automatically." },
  { icon: Layers, title: "One Context", desc: "Projects, people, files, meetings and decisions live in one continuous environment." },
  { icon: MessageSquare, title: "One Conversation", desc: "Ask: “Prepare today’s work”, “What changed since yesterday?” — instead of clicking through pages." },
  { icon: Brain, title: "One Memory", desc: "Verified knowledge over time: decisions, relationships, documents, workflows, history." },
];

const isNot = [
  "a task manager", "a CRM", "a project management system",
  "a notes application", "an AI chat", "a document repository",
];

const business = [
  "Projects", "Meetings", "Files", "Messages", "Approvals",
  "Reports", "Teams", "Investors", "Documents", "Automation",
];

const personal = [
  "Family", "Travel", "Shopping", "Health reminders", "Ideas",
  "Learning", "Home", "Subscriptions", "Finance reminders", "Calendar",
];

const intelligence = [
  "Finds missing information",
  "Detects contradictions",
  "Notices forgotten commitments",
  "Connects related documents",
  "Prepares meetings",
  "Organizes conversations",
  "Reduces repetitive work",
];

const concepts = [
  { icon: Eye, title: "One focus" },
  { icon: GitBranch, title: "In context" },
  { icon: Sparkles, title: "Now — in the moment" },
  { icon: Workflow, title: "Continuous, not fragmented" },
  { icon: Users, title: "Personal — just for you" },
];

const OneInow = () => {
  useEffect(() => {
    updateMetaTags({
      title: "1inow — One place. One context. Right now.",
      description: "1inow is a personal and business intelligence environment that connects tasks, notes, projects, files, meetings and messages into a single living context.",
      ogImage: oneinowHero,
      twitterImage: oneinowHero,
      canonicalUrl: typeof window !== "undefined" ? window.location.href : undefined,
    });
    return () => resetMetaTags();
  }, []);

  return (
    <div className="min-h-screen" style={{ background: BRAND.bg, color: BRAND.text, fontFamily: "Inter, system-ui, sans-serif" }}>
      <Navigation />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url(${oneinowHero})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            aria-hidden
          />
          <div
            className="absolute inset-0 z-0"
            style={{
              background: `linear-gradient(135deg, ${BRAND.bg}f5 0%, ${BRAND.bg}cc 55%, ${BRAND.bg}99 100%)`,
            }}
            aria-hidden
          />
          <div className="relative z-10 container mx-auto px-4 pt-32 pb-24">
            <Link to="/projects">
              <Button variant="ghost" size="sm" className="mb-8 hover:bg-white/5" style={{ color: BRAND.textMuted }}>
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Projects
              </Button>
            </Link>

            <div className="flex items-center gap-6 mb-10">
              <OptimizedImage
                src={oneinowLogo}
                alt="1inow logo"
                className="w-24 h-24 md:w-28 md:h-28 object-contain"
                showSkeleton={false}
              />
              <div>
                <Badge
                  className="mb-3 border-0"
                  style={{ background: `${BRAND.accent}22`, color: BRAND.accentSoft }}
                >
                  Personal &amp; Business Intelligence
                </Badge>
                <h1 className="text-5xl md:text-7xl font-semibold tracking-tight" style={{ color: BRAND.text }}>
                  <span style={{ color: BRAND.accent }}>1</span>inow
                </h1>
              </div>
            </div>

            <p className="text-2xl md:text-3xl font-light max-w-3xl mb-4" style={{ color: BRAND.text }}>
              One place. One context. Right now.
            </p>
            <p className="text-lg md:text-xl max-w-3xl mb-10 leading-relaxed" style={{ color: BRAND.textMuted }}>
              A personal and business intelligence environment that helps people organize work and life
              without becoming another application that demands constant attention.{" "}
              <span style={{ color: BRAND.accentSoft }}>Remember less. Understand more.</span>
            </p>

            <div className="flex flex-wrap gap-3">
              <Link to="/start-investing">
                <Button
                  size="lg"
                  className="border-0"
                  style={{ background: BRAND.accent, color: BRAND.bg }}
                >
                  Request Information <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                asChild
                style={{ borderColor: `${BRAND.accent}55`, color: BRAND.text, background: "transparent" }}
              >
                <a href="https://www.1inow.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Globe className="h-5 w-5" /> 1inow.com
                </a>
              </Button>
              <DownloadInvestorBriefButton projectSlug="1inow" size="lg" />
            </div>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="container mx-auto px-4 py-20">
          <div className="max-w-3xl">
            <div className="text-xs tracking-[0.25em] uppercase mb-4" style={{ color: BRAND.accent }}>Overview</div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 leading-tight">
              Instead of managing tasks, notes, projects, files, meetings and messages separately,
              1inow continuously connects them into a single living context.
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: BRAND.textMuted }}>
              The goal is simple: <span style={{ color: BRAND.accentSoft }}>remember less, understand more</span>.
              The system observes, connects, remembers, and prepares information automatically —
              reducing manual work instead of creating it. The user spends less time organizing and
              more time making decisions.
            </p>
          </div>
        </section>

        {/* CORE PRINCIPLES */}
        <section className="py-20" style={{ background: BRAND.surface }}>
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mb-12">
              <div className="text-xs tracking-[0.25em] uppercase mb-4" style={{ color: BRAND.accent }}>Core Principles</div>
              <h2 className="text-3xl md:text-4xl font-semibold">Four ideas that hold everything together.</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {principles.map((p) => (
                <Card key={p.title} className="border-0" style={{ background: BRAND.surfaceSoft, color: BRAND.text }}>
                  <CardHeader>
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                      style={{ background: `${BRAND.accent}1a`, color: BRAND.accent }}
                    >
                      <p.icon className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-2xl font-medium" style={{ color: BRAND.text }}>{p.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="leading-relaxed" style={{ color: BRAND.textMuted }}>{p.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* WHAT IT IS NOT */}
        <section className="container mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="text-xs tracking-[0.25em] uppercase mb-4" style={{ color: BRAND.accent }}>What 1inow is not</div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                Not another app demanding your attention.
              </h2>
              <p className="leading-relaxed" style={{ color: BRAND.textMuted }}>
                1inow is a unified environment where all of these elements naturally work together — not
                another silo competing for your focus.
              </p>
            </div>
            <div className="space-y-2">
              {isNot.map((x) => (
                <div
                  key={x}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg"
                  style={{ background: BRAND.surface, color: BRAND.textMuted }}
                >
                  <span className="text-lg" style={{ color: BRAND.accent }}>—</span>
                  <span>It is not {x}.</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TWO LAYERS */}
        <section className="py-20" style={{ background: BRAND.surface }}>
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mb-12">
              <div className="text-xs tracking-[0.25em] uppercase mb-4" style={{ color: BRAND.accent }}>Two layers, one environment</div>
              <h2 className="text-3xl md:text-4xl font-semibold">Business and personal — separated by design.</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              <Card className="border-0" style={{ background: BRAND.surfaceSoft }}>
                <CardHeader>
                  <CardTitle className="text-2xl font-medium" style={{ color: BRAND.text }}>Business</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {business.map((b) => (
                      <span key={b} className="px-3 py-1.5 rounded-full text-sm" style={{ background: `${BRAND.accent}1a`, color: BRAND.accentSoft }}>{b}</span>
                    ))}
                  </div>
                  <p className="mt-6 text-sm" style={{ color: BRAND.textMuted }}>Everything connected automatically.</p>
                </CardContent>
              </Card>
              <Card className="border-0" style={{ background: BRAND.surfaceSoft }}>
                <CardHeader>
                  <CardTitle className="text-2xl font-medium" style={{ color: BRAND.text }}>Personal</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {personal.map((b) => (
                      <span key={b} className="px-3 py-1.5 rounded-full text-sm" style={{ background: `${BRAND.accent}1a`, color: BRAND.accentSoft }}>{b}</span>
                    ))}
                  </div>
                  <p className="mt-6 text-sm" style={{ color: BRAND.textMuted }}>Private unless the user explicitly connects it.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* INTELLIGENCE */}
        <section className="container mx-auto px-4 py-20">
          <div className="max-w-3xl mb-12">
            <div className="text-xs tracking-[0.25em] uppercase mb-4" style={{ color: BRAND.accent }}>Intelligence</div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">It asks questions only when necessary. It never invents facts.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {intelligence.map((i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-5 rounded-xl"
                style={{ background: BRAND.surface }}
              >
                <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0" style={{ color: BRAND.accent }} />
                <span style={{ color: BRAND.text }}>{i}</span>
              </div>
            ))}
          </div>
        </section>

        {/* PRIVACY & COMMUNICATION */}
        <section className="py-20" style={{ background: BRAND.surface }}>
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8">
            <Card className="border-0" style={{ background: BRAND.surfaceSoft }}>
              <CardHeader>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: `${BRAND.accent}1a`, color: BRAND.accent }}>
                  <Lock className="w-6 h-6" />
                </div>
                <CardTitle className="text-2xl font-medium" style={{ color: BRAND.text }}>Privacy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3" style={{ color: BRAND.textMuted }}>
                <p>Personal and business information are separated into independent privacy zones.</p>
                <p>Users control what is remembered, what is shared, what is connected, and what the assistant may use.</p>
                <p style={{ color: BRAND.accentSoft }}>Nothing is assumed. Everything important is transparent.</p>
              </CardContent>
            </Card>
            <Card className="border-0" style={{ background: BRAND.surfaceSoft }}>
              <CardHeader>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: `${BRAND.accent}1a`, color: BRAND.accent }}>
                  <Mic className="w-6 h-6" />
                </div>
                <CardTitle className="text-2xl font-medium" style={{ color: BRAND.text }}>Communication</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3" style={{ color: BRAND.textMuted }}>
                <p>The primary interface is conversation. Users can type or speak naturally.</p>
                <p>The system understands context and transforms conversations into actions, reminders, documents, meetings, workflows and connected knowledge — without unnecessary forms.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CONCEPT STRIP */}
        <section className="container mx-auto px-4 py-20">
          <div className="text-xs tracking-[0.25em] uppercase mb-10" style={{ color: BRAND.accent }}>Concept</div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {concepts.map((c) => (
              <div key={c.title} className="flex flex-col items-center text-center p-6 rounded-xl" style={{ background: BRAND.surface }}>
                <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4" style={{ border: `1.5px solid ${BRAND.accent}66`, color: BRAND.accent }}>
                  <c.icon className="w-6 h-6" />
                </div>
                <div className="text-sm" style={{ color: BRAND.text }}>{c.title}</div>
              </div>
            ))}
          </div>
        </section>

        {/* PROMISE */}
        <section className="py-24" style={{ background: BRAND.surface }}>
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <div className="text-xs tracking-[0.25em] uppercase mb-6" style={{ color: BRAND.accent }}>Product Promise</div>
            <h2 className="text-3xl md:text-5xl font-semibold leading-tight mb-8">
              1inow exists to remove organizational friction.
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-2xl mx-auto mb-10 text-sm">
              {["Less searching", "Less remembering", "Less repetition", "More clarity", "More continuity", "More attention"].map((x) => (
                <div key={x} className="px-4 py-3 rounded-lg" style={{ background: BRAND.surfaceSoft, color: BRAND.textMuted }}>{x}</div>
              ))}
            </div>
            <p className="text-xl italic" style={{ color: BRAND.accentSoft }}>
              “One place. One context. Right now.”
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-4 py-20">
          <div
            className="rounded-3xl p-10 md:p-16 text-center"
            style={{ background: `linear-gradient(135deg, ${BRAND.surfaceSoft}, ${BRAND.surface})`, border: `1px solid ${BRAND.accent}33` }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Continue, don’t start over.</h2>
            <p className="text-lg max-w-2xl mx-auto mb-8" style={{ color: BRAND.textMuted }}>
              Explore how 1inow fits into the Digital Invest portfolio or request the investor brief.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/start-investing">
                <Button size="lg" className="border-0" style={{ background: BRAND.accent, color: BRAND.bg }}>
                  Request Information <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <DownloadInvestorBriefButton projectSlug="1inow" size="lg" />
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 pb-16">
          <InvestorPageDisclaimer />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default OneInow;
