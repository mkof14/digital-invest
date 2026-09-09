import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import OptimizedImage from '@/components/OptimizedImage';
import InterestForm from '@/components/InterestForm';
import InvestorPageDisclaimer from '@/components/InvestorPageDisclaimer';
import ProjectMediaRoomBySlug from '@/components/ProjectMediaRoomBySlug';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  ArrowLeft, ArrowRight, ArrowDown, ExternalLink, Radar, Cpu, Radio, Battery,
  MonitorSmartphone, Plane, Layers, Network, ShieldCheck, GraduationCap, Building2,
  Ship, Factory, Landmark, Sparkles, Boxes, Truck, Anchor, Clock, Users, LineChart,
} from 'lucide-react';

import starwallLogo from '@/assets/projects/starwall-logo-2026.png.asset.json';
import starwallHero from '@/assets/projects/starwall-hero-2026.png.asset.json';
import starwallCommand from '@/assets/projects/starwall-command.png.asset.json';
import starwallSystem from '@/assets/projects/starwall-system-overview.jpg.asset.json';
import agronLogo from '@/assets/projects/agron-logo-2026.png.asset.json';
import agronMarina from '@/assets/projects/agron-marina.png.asset.json';

import { getStarWallContent } from './starwallContent';

const AGRON_SITE = 'https://www.agron1.com';
const AGRON_SERVICES = 'https://www.agron1.com/services';
const AGRON_MARITIME = 'https://www.agron1.com/maritime';

const moduleIcons = [Radar, Radio, Cpu, Battery, MonitorSmartphone, Plane];
const beyondIcons = [Ship, Landmark, Factory, Building2, ShieldCheck, Sparkles];

const SectionTitle = ({ kicker, title }: { kicker?: string; title: string }) => (
  <div className="mb-8">
    {kicker && <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-primary/80 mb-3">{kicker}</p>}
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-foreground">{title}</h2>
  </div>
);

/** Horizontal on desktop, vertical on mobile — labels stay readable. */
const FlowChain = ({ steps }: { steps: string[] }) => (
  <div className="flex flex-col lg:flex-row lg:flex-wrap items-stretch lg:items-center justify-center gap-2 lg:gap-3">
    {steps.map((step, i) => (
      <div key={step} className="flex flex-col lg:flex-row items-center gap-2 lg:gap-3">
        <div className="w-full lg:w-auto text-center px-4 py-3 rounded-xl border border-primary/25 bg-primary/5 text-sm font-medium text-foreground">
          {step}
        </div>
        {i < steps.length - 1 && (
          <>
            <ArrowDown className="w-4 h-4 text-primary/60 lg:hidden" aria-hidden="true" />
            <ArrowRight className="w-4 h-4 text-primary/60 hidden lg:block rtl:rotate-180" aria-hidden="true" />
          </>
        )}
      </div>
    ))}
  </div>
);

const Chips = ({ items }: { items: string[] }) => (
  <div className="flex flex-wrap gap-2">
    {items.map((item) => (
      <span
        key={item}
        className="px-3 py-2 rounded-lg border border-border/60 bg-background/50 text-xs md:text-sm text-foreground/80"
      >
        {item}
      </span>
    ))}
  </div>
);

const Bullets = ({ items }: { items: string[] }) => (
  <ul className="space-y-2">
    {items.map((line) => (
      <li key={line} className="flex items-start gap-2 text-sm text-muted-foreground">
        <span className="mt-2 w-1 h-1 rounded-full bg-primary flex-shrink-0" aria-hidden="true" />
        {line}
      </li>
    ))}
  </ul>
);

const StarWall = () => {
  const { i18n } = useTranslation();
  const c = getStarWallContent(i18n.language || 'en');
  const [showInterest, setShowInterest] = useState(false);

  return (
    <div className="min-h-screen bg-background theme-agron">
      <Navigation />

      {/* HERO */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <OptimizedImage
            src={starwallHero.url}
            alt="StarWall by AGRON — coastal command environment at dusk"
            containerClassName="w-full h-full"
            className="w-full h-full object-cover"
            showSkeleton={false}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#05080d]/95 via-[#05080d]/80 to-[#05080d]/35" />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-24">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 rtl:rotate-180" /> {c.back}
          </Link>

          <div className="max-w-3xl">
            <p className="text-[11px] md:text-xs uppercase tracking-[0.25em] text-white/50 mb-5">{c.hero.parent}</p>

            <div className="flex flex-wrap items-center gap-4 mb-6">
              <OptimizedImage
                src={starwallLogo.url}
                alt="StarWall by AGRON logo"
                containerClassName="h-9 md:h-11 w-40 md:w-52"
                className="h-full w-full object-contain object-left"
                showSkeleton={false}
              />
              <Badge className="bg-white/10 text-white border border-white/20">{c.hero.badge}</Badge>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
              {c.hero.title}
              <span className="block text-lg md:text-2xl font-light text-white/70 mt-2">{c.hero.by}</span>
            </h1>
            <p className="mt-4 text-xl md:text-3xl font-light text-white/90">{c.hero.tagline}</p>
            <p className="mt-3 text-sm md:text-base uppercase tracking-[0.15em] text-primary/90">{c.hero.statement}</p>

            <div className="flex flex-wrap gap-2 mt-6">
              {c.hero.chips.map((chip) => (
                <span
                  key={chip}
                  className="px-3 py-1.5 rounded-full border border-white/20 bg-white/5 text-xs md:text-sm text-white/80"
                >
                  {chip}
                </span>
              ))}
            </div>

            <p className="mt-8 text-base md:text-lg text-white/75 leading-relaxed max-w-2xl">{c.hero.desc}</p>

            <div className="flex flex-wrap gap-3 mt-10">
              <Button size="lg" onClick={() => setShowInterest(true)}>
                {c.hero.ctaPrimary} <ArrowRight className="ml-2 w-5 h-5 rtl:rotate-180" />
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link to="/projects/agron">
                  {c.hero.ctaAgron} <ArrowRight className="ml-2 w-4 h-4 rtl:rotate-180" />
                </Link>
              </Button>
              <Button size="lg" variant="ghost" className="text-white hover:text-white" asChild>
                <a href={AGRON_SITE} target="_blank" rel="noopener noreferrer">
                  {c.hero.ctaExternal} <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16 md:py-24 space-y-20 md:space-y-28">
        {/* WHAT STARWALL IS */}
        <section>
          <SectionTitle title={c.intro.title} />
          <p className="text-lg md:text-xl text-foreground leading-relaxed max-w-4xl">{c.intro.p1}</p>
          <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed max-w-4xl">{c.intro.p2}</p>

          <div className="mt-10 p-6 md:p-8 rounded-2xl border border-border/60 bg-card/40">
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-5">{c.intro.questionsTitle}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {c.intro.questions.map((q) => (
                <div key={q} className="px-4 py-3 rounded-lg border border-border/60 bg-background/50 text-sm text-foreground/85">
                  {q}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6 p-6 rounded-2xl border border-primary/30 bg-primary/5">
            <p className="text-base font-medium text-foreground">{c.intro.note}</p>
          </div>
        </section>

        {/* THREE FORMS — central commercial message */}
        <section>
          <SectionTitle kicker={c.threeForms.kicker} title={c.threeForms.title} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {c.threeForms.items.map((item) => (
              <Card key={item.t} className="bg-card/60 border-border/60 hover:border-primary/40 transition-colors">
                <CardContent className="pt-6 space-y-3">
                  <h3 className="font-semibold text-foreground">{item.t}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.d}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* THE PROBLEM */}
        <section>
          <SectionTitle kicker={c.problem.kicker} title={c.problem.title} />
          <p className="text-lg md:text-xl text-foreground leading-relaxed max-w-4xl">{c.problem.p}</p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {c.problem.fragments.map((f) => (
              <div key={f} className="px-4 py-4 rounded-xl border border-dashed border-border/70 bg-card/30 text-sm text-muted-foreground">
                {f}
              </div>
            ))}
          </div>
          <div className="mt-8 p-6 md:p-8 rounded-2xl border border-primary/30 bg-primary/5">
            <p className="text-base md:text-lg text-foreground leading-relaxed">{c.problem.conclusion}</p>
          </div>
        </section>

        {/* THE STARWALL MODEL */}
        <section>
          <SectionTitle kicker={c.model.kicker} title={c.model.title} />
          <div className="rounded-2xl border border-border/60 bg-card/40 p-5 md:p-8 space-y-5">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">{c.model.sourcesTitle}</p>
              <Chips items={c.model.sources} />
            </div>

            <div className="flex justify-center"><ArrowDown className="w-5 h-5 text-primary/70" aria-hidden="true" /></div>

            <div className="rounded-xl border border-primary/40 bg-primary/10 p-5">
              <p className="text-center font-semibold text-foreground mb-4">{c.model.coreTitle}</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
                {c.model.core.map((step) => (
                  <div key={step} className="text-center px-2 py-3 rounded-lg border border-primary/30 bg-background/50 text-xs md:text-sm font-medium text-foreground">
                    {step}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center"><ArrowDown className="w-5 h-5 text-primary/70" aria-hidden="true" /></div>

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">{c.model.intelTitle}</p>
              <Chips items={c.model.intel} />
            </div>

            <div className="flex justify-center"><ArrowDown className="w-5 h-5 text-primary/70" aria-hidden="true" /></div>

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">{c.model.actionTitle}</p>
              <Chips items={c.model.action} />
            </div>

            <div className="flex justify-center"><ArrowDown className="w-5 h-5 text-primary/70" aria-hidden="true" /></div>

            <div className="text-center px-5 py-4 rounded-xl border border-primary/50 bg-primary/15 font-semibold text-foreground">
              {c.model.decision}
            </div>
          </div>

          <OptimizedImage
            src={starwallCommand.url}
            alt="StarWall operating environment across coastal, maritime and urban infrastructure"
            containerClassName="mt-10 w-full rounded-2xl overflow-hidden border border-border/60"
            className="w-full h-auto object-cover"
          />
        </section>

        {/* HARDWARE-AGNOSTIC */}
        <section>
          <SectionTitle kicker={c.agnostic.kicker} title={c.agnostic.title} />
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-4xl">{c.agnostic.p}</p>
          <div className="mt-8"><Chips items={c.agnostic.keep} /></div>
          <p className="mt-6 text-xs text-muted-foreground max-w-4xl leading-relaxed">{c.agnostic.note}</p>
        </section>

        {/* SOFTWARE ONLY */}
        <section>
          <SectionTitle kicker={c.software.kicker} title={c.software.title} />
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-4xl">{c.software.p}</p>
          <div className="mt-8 p-6 md:p-8 rounded-2xl border border-primary/25 bg-primary/5">
            <FlowChain steps={c.software.flow} />
          </div>
          <p className="mt-4 text-xs text-muted-foreground">{c.software.note}</p>
        </section>

        {/* SUBSCRIPTION TIERS */}
        <section>
          <SectionTitle kicker={c.service.kicker} title={c.service.title} />
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-4xl">{c.service.p}</p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {c.service.tiers.map((tier) => (
              <Card key={tier.t} className="bg-card/60 border-border/60 hover:border-primary/40 transition-colors">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-foreground">{tier.t}</h3>
                  {tier.d && <p className="mt-2 text-xs uppercase tracking-wider text-primary/80">{tier.d}</p>}
                  <div className="mt-4"><Bullets items={tier.items} /></div>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted-foreground max-w-4xl leading-relaxed">{c.service.note}</p>
        </section>

        {/* COMMERCIAL MODELS */}
        <section>
          <SectionTitle kicker={c.models.kicker} title={c.models.title} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {c.models.items.map((group) => (
              <Card key={group.t} className="bg-card/60 border-border/60">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-foreground mb-4">{group.t}</h3>
                  <Bullets items={group.items} />
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted-foreground">{c.models.note}</p>
        </section>

        {/* DEPLOYMENT LEVELS */}
        <section>
          <SectionTitle kicker={c.deployment.kicker} title={c.deployment.title} />
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-4xl">{c.deployment.p}</p>
          <div className="mt-8 space-y-3">
            {c.deployment.levels.map((level, i) => (
              <div
                key={level.n}
                className="p-5 md:p-6 rounded-2xl border border-border/60 bg-card/40"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6">
                  <div className="flex items-center gap-3 md:w-72 flex-shrink-0">
                    <span className="text-xs font-mono text-primary/80 border border-primary/30 rounded-md px-2 py-1">
                      {level.n}
                    </span>
                    <h3 className="font-semibold text-foreground">{level.t}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {level.items.map((item) => (
                      <span key={item} className="px-3 py-1.5 rounded-lg border border-border/60 bg-background/50 text-xs md:text-sm text-foreground/80">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div
                  className="mt-4 h-1 rounded-full bg-primary/25"
                  style={{ width: `${((i + 1) / c.deployment.levels.length) * 100}%` }}
                  aria-hidden="true"
                />
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted-foreground">{c.deployment.note}</p>
        </section>

        {/* AGRON MODULES */}
        <section>
          <SectionTitle kicker={c.modules.kicker} title={c.modules.title} />
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-4xl">{c.modules.p}</p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {c.modules.groups.map((group, i) => {
              const Icon = moduleIcons[i % moduleIcons.length];
              return (
                <Card key={group.t} className="bg-card/60 border-border/60">
                  <CardContent className="pt-6">
                    <Icon className="w-6 h-6 text-primary mb-3" aria-hidden="true" />
                    <h3 className="font-semibold text-foreground mb-3">{group.t}</h3>
                    <Bullets items={group.items} />
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <p className="mt-4 text-xs text-muted-foreground">{c.modules.note}</p>
        </section>

        {/* CONTAINER SYSTEMS */}
        <section>
          <SectionTitle kicker={c.container.kicker} title={c.container.title} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            <div>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">{c.container.p1}</p>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">{c.container.p2}</p>
            </div>
            <div className="p-6 rounded-2xl border border-border/60 bg-card/40">
              <Boxes className="w-6 h-6 text-primary mb-4" aria-hidden="true" />
              <Chips items={c.container.items} />
            </div>
          </div>
        </section>

        {/* MOBILE */}
        <section>
          <SectionTitle kicker={c.mobile.kicker} title={c.mobile.title} />
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-4xl">{c.mobile.p}</p>
          <div className="mt-8 p-6 rounded-2xl border border-border/60 bg-card/40">
            <Truck className="w-6 h-6 text-primary mb-4" aria-hidden="true" />
            <Chips items={c.mobile.items} />
          </div>
          <p className="mt-4 text-xs text-muted-foreground">{c.mobile.note}</p>
        </section>

        {/* DISTRIBUTED */}
        <section>
          <SectionTitle kicker={c.distributed.kicker} title={c.distributed.title} />
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-4xl">{c.distributed.p}</p>
          <div className="mt-8 p-6 md:p-8 rounded-2xl border border-border/60 bg-card/40">
            <FlowChain steps={c.distributed.flow} />
          </div>
          <p className="mt-4 text-xs text-muted-foreground">{c.distributed.note}</p>
        </section>

        {/* MARITIME */}
        <section>
          <SectionTitle kicker={c.maritime.kicker} title={c.maritime.title} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">{c.maritime.p}</p>
              <div className="mt-6"><Chips items={c.maritime.envs} /></div>
              <p className="mt-8 text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">{c.maritime.sourcesTitle}</p>
              <Chips items={c.maritime.sources} />
              <div className="mt-8">
                <Button variant="secondary" asChild>
                  <a href={AGRON_MARITIME} target="_blank" rel="noopener noreferrer">
                    {c.maritime.cta} <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
            <OptimizedImage
              src={agronMarina.url}
              alt="AGRON Maritime marina environment"
              containerClassName="w-full rounded-2xl overflow-hidden border border-border/60"
              className="w-full h-auto object-cover"
            />
          </div>
        </section>

        {/* BEYOND MARITIME */}
        <section>
          <SectionTitle kicker={c.beyond.kicker} title={c.beyond.title} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {c.beyond.groups.map((group, i) => {
              const Icon = beyondIcons[i % beyondIcons.length];
              return (
                <Card key={group.t} className="bg-card/60 border-border/60">
                  <CardContent className="pt-6">
                    <Icon className="w-6 h-6 text-primary mb-3" aria-hidden="true" />
                    <h3 className="font-semibold text-foreground mb-3">{group.t}</h3>
                    <Bullets items={group.items} />
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <p className="mt-4 text-xs text-muted-foreground">{c.beyond.note}</p>
        </section>

        {/* NETWORK */}
        <section>
          <SectionTitle kicker={c.network.kicker} title={c.network.title} />
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-4xl">{c.network.p}</p>
          <div className="mt-8 p-6 md:p-8 rounded-2xl border border-border/60 bg-card/40 grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-6 items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2">
              {c.network.nodes.map((node) => (
                <div key={node} className="px-4 py-3 rounded-lg border border-border/60 bg-background/50 text-sm text-foreground/85">
                  {node}
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <ArrowDown className="w-6 h-6 text-primary/70 lg:hidden" aria-hidden="true" />
              <ArrowRight className="w-6 h-6 text-primary/70 hidden lg:block rtl:rotate-180" aria-hidden="true" />
            </div>
            <div className="px-5 py-8 rounded-xl border border-primary/40 bg-primary/10 text-center">
              <Network className="w-7 h-7 text-primary mx-auto mb-3" aria-hidden="true" />
              <p className="font-semibold text-foreground">{c.network.hub}</p>
            </div>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">{c.network.note}</p>
        </section>

        {/* MEMORY */}
        <section>
          <SectionTitle kicker={c.memory.kicker} title={c.memory.title} />
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-4xl">{c.memory.p}</p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {c.memory.steps.map((step) => (
              <div key={step.t} className="p-5 rounded-xl border border-border/60 bg-card/40">
                <Clock className="w-5 h-5 text-primary mb-3" aria-hidden="true" />
                <h3 className="font-semibold text-foreground">{step.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 p-6 rounded-2xl border border-primary/30 bg-primary/5 text-center font-semibold text-foreground">
            {c.memory.outcome}
          </div>
          <p className="mt-4 text-xs text-muted-foreground">{c.memory.note}</p>
        </section>

        {/* HUMAN + AI */}
        <section>
          <SectionTitle kicker={c.human.kicker} title={c.human.title} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            <div>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">{c.human.p}</p>
              <p className="mt-8 text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">{c.human.systemTitle}</p>
              <Chips items={c.human.system} />
            </div>
            <div className="p-8 rounded-2xl border border-primary/40 bg-primary/10">
              <Users className="w-7 h-7 text-primary mb-4" aria-hidden="true" />
              <p className="text-xl md:text-2xl font-bold text-foreground uppercase tracking-wide">{c.human.principle}</p>
              <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed">{c.human.principleNote}</p>
            </div>
          </div>
        </section>

        {/* SUPPORT CENTER */}
        <section>
          <SectionTitle kicker={c.support.kicker} title={c.support.title} />
          <div className="p-6 md:p-8 rounded-2xl border border-border/60 bg-card/40">
            <FlowChain steps={c.support.flow} />
          </div>
          <p className="mt-8 text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">{c.support.servicesTitle}</p>
          <Chips items={c.support.services} />
          <div className="mt-8 p-6 rounded-2xl border border-primary/30 bg-primary/5 text-center font-semibold text-foreground">
            {c.support.model}
          </div>
        </section>

        {/* TRAINING */}
        <section>
          <SectionTitle kicker={c.training.kicker} title={c.training.title} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {c.training.items.map((item) => (
              <div key={item} className="p-5 rounded-xl border border-border/60 bg-card/40 flex items-start gap-3">
                <GraduationCap className="w-5 h-5 text-primary flex-shrink-0" aria-hidden="true" />
                <span className="text-sm text-foreground/85">{item}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted-foreground">{c.training.note}</p>
        </section>

        {/* COMMERCIAL ENGINE */}
        <section>
          <SectionTitle kicker={c.engine.kicker} title={c.engine.title} />
          <div className="p-6 md:p-8 rounded-2xl border border-primary/25 bg-primary/5 space-y-2">
            {c.engine.steps.map((step, i) => (
              <div key={step.t}>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 px-5 py-4 rounded-xl border border-border/60 bg-background/60">
                  <span className="text-sm font-semibold text-foreground sm:w-40 flex-shrink-0 uppercase tracking-wide">{step.t}</span>
                  <span className="text-sm text-muted-foreground">{step.d}</span>
                </div>
                {i < c.engine.steps.length - 1 && (
                  <div className="flex justify-center py-1">
                    <ArrowDown className="w-4 h-4 text-primary/60" aria-hidden="true" />
                  </div>
                )}
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted-foreground">{c.engine.note}</p>
        </section>

        {/* REVENUE LAYERS */}
        <section>
          <SectionTitle kicker={c.revenue.kicker} title={c.revenue.title} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {c.revenue.items.map((item) => (
              <div key={item.t} className="p-5 rounded-xl border border-border/60 bg-card/40">
                <LineChart className="w-5 h-5 text-primary mb-3" aria-hidden="true" />
                <h3 className="font-semibold text-foreground">{item.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted-foreground">{c.revenue.note}</p>
        </section>

        {/* RECURRING */}
        <section>
          <SectionTitle kicker={c.recurring.kicker} title={c.recurring.title} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {c.recurring.columns.map((col, i) => (
              <div
                key={col.t}
                className={`p-6 rounded-2xl border ${i === 1 ? 'border-primary/40 bg-primary/5' : 'border-border/60 bg-card/40'}`}
              >
                <h3 className="font-semibold text-foreground mb-4 uppercase tracking-wide text-sm">{col.t}</h3>
                <Bullets items={col.items} />
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted-foreground">{c.recurring.note}</p>
        </section>

        {/* BUYERS */}
        <section>
          <SectionTitle kicker={c.buyers.kicker} title={c.buyers.title} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {c.buyers.groups.map((group) => (
              <Card key={group.t} className="bg-card/60 border-border/60">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-foreground mb-4">{group.t}</h3>
                  <Chips items={group.items} />
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted-foreground">{c.buyers.note}</p>
        </section>

        {/* LIFECYCLE */}
        <section>
          <SectionTitle kicker={c.lifecycle.kicker} title={c.lifecycle.title} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {c.lifecycle.steps.map((step, i) => (
              <div key={step.t} className="p-5 rounded-xl border border-border/60 bg-card/40">
                <span className="text-xs font-mono text-primary/80">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-2 font-semibold text-foreground">{step.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* WHY DIFFERENT */}
        <section>
          <SectionTitle kicker={c.different.kicker} title={c.different.title} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {c.different.items.map((item) => (
              <div key={item.t} className="p-5 rounded-xl border border-border/60 bg-card/40">
                <Layers className="w-5 h-5 text-primary mb-3" aria-hidden="true" />
                <h3 className="font-semibold text-foreground uppercase tracking-wide text-sm">{item.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SYSTEM OVERVIEW VISUAL */}
        <section>
          <OptimizedImage
            src={starwallSystem.url}
            alt="StarWall by AGRON — system overview: what it is, how it works, who is in charge"
            containerClassName="w-full rounded-2xl overflow-hidden border border-border/60"
            className="w-full h-auto object-contain"
          />
        </section>

        {/* MEDIA ROOM */}
        <ProjectMediaRoomBySlug slug="starwall" />

        {/* RELATIONSHIP */}
        <section>
          <SectionTitle kicker={c.relationship.kicker} title={c.relationship.title} />
          <div className="flex items-center gap-4 mb-6">
            <OptimizedImage
              src={agronLogo.url}
              alt="AGRON logo"
              containerClassName="w-12 h-12"
              className="w-full h-full object-contain"
              showSkeleton={false}
            />
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl">{c.relationship.p}</p>
          </div>
          <div className="p-6 md:p-8 rounded-2xl border border-border/60 bg-card/40 space-y-2">
            {c.relationship.chain.map((node, i) => (
              <div key={node.t}>
                <div className="px-5 py-4 rounded-xl border border-primary/25 bg-primary/5">
                  <p className="font-semibold text-foreground">{node.t}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{node.d}</p>
                </div>
                {i < c.relationship.chain.length - 1 && (
                  <div className="flex justify-center py-1">
                    <ArrowDown className="w-4 h-4 text-primary/60" aria-hidden="true" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground">{c.cta.title}</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">{c.cta.p}</p>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <Button size="lg" onClick={() => setShowInterest(true)}>
              {c.cta.primary} <ArrowRight className="ml-2 w-5 h-5 rtl:rotate-180" />
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/projects/agron">
                {c.cta.agron} <ArrowRight className="ml-2 w-4 h-4 rtl:rotate-180" />
              </Link>
            </Button>
            <Button size="lg" variant="ghost" asChild>
              <a href={AGRON_MARITIME} target="_blank" rel="noopener noreferrer">
                <Anchor className="mr-2 w-4 h-4" /> {c.cta.maritime}
              </a>
            </Button>
            <Button size="lg" variant="ghost" asChild>
              <a href={AGRON_SERVICES} target="_blank" rel="noopener noreferrer">
                {c.cta.services} <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </div>
        </section>

        <InvestorPageDisclaimer />
      </main>

      <InterestForm
        projectId="starwall"
        projectTitle="StarWall by AGRON"
        open={showInterest}
        onOpenChange={setShowInterest}
      />
      <Footer />
    </div>
  );
};

export default StarWall;
