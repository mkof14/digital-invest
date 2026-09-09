import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import OptimizedImage from '@/components/OptimizedImage';
import InterestForm from '@/components/InterestForm';
import InvestorPageDisclaimer from '@/components/InvestorPageDisclaimer';
import ProjectMediaRoomBySlug from '@/components/ProjectMediaRoomBySlug';
import DownloadInvestorBriefButton from '@/components/DownloadInvestorBriefButton';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  ArrowLeft, ArrowRight, ArrowDown, ExternalLink, Cpu, Radar, ShieldCheck,
  GraduationCap, Network, Settings, Anchor, Ship, Truck,
  Eye, Search, Gauge, Bell, LifeBuoy, Lock, Brain, Building2, Layers,
} from 'lucide-react';

import agronLogo from '@/assets/projects/agron-logo-2026.png.asset.json';
import agronMarina from '@/assets/projects/agron-marina.png.asset.json';
import agronPort from '@/assets/projects/agron-port.png.asset.json';
import agronIsland from '@/assets/projects/agron-island.png.asset.json';
import starwallOverview from '@/assets/projects/starwall-overview.jpg.asset.json';
import starwallLogo from '@/assets/projects/starwall-logo.png.asset.json';

import { getAgronContent } from './agronContent';

const AGRON_SITE = 'https://www.agron1.com';
const AGRON_SERVICES = 'https://www.agron1.com/services';
const AGRON_MARITIME = 'https://www.agron1.com/maritime';

const layerIcons = [Cpu, Settings, Brain, ShieldCheck, GraduationCap, Network];
const capabilityIcons = [Building2, Search, Layers, GraduationCap, Settings, Network, ShieldCheck];
const serviceIcons = [Network, Search, Layers, GraduationCap, Settings];
const protectionIcons = [Eye, Search, Gauge, Bell, LifeBuoy, Lock, Brain];
const modularIcons = [Ship, Truck, ContainerIcon];


/** Vertical on mobile, horizontal on desktop — never overflows. */
const FlowChain = ({ steps }: { steps: string[] }) => (
  <div className="flex flex-col lg:flex-row lg:flex-wrap items-stretch lg:items-center justify-center gap-2 lg:gap-3">
    {steps.map((step, i) => (
      <div key={i} className="flex flex-col lg:flex-row items-center gap-2 lg:gap-3">
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

const SectionTitle = ({ kicker, title }: { kicker?: string; title: string }) => (
  <div className="mb-8">
    {kicker && (
      <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-primary/80 mb-3">{kicker}</p>
    )}
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-foreground">{title}</h2>
  </div>
);

const AGRON = () => {
  const { i18n } = useTranslation();
  const c = getAgronContent(i18n.language || 'en');
  const [showInterest, setShowInterest] = useState(false);

  return (
    <div className="min-h-screen bg-background theme-agron">
      <Navigation />

      {/* HERO */}
      <section className="relative min-h-[78vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <OptimizedImage
            src={agronPort.url}
            alt="AGRON autonomous operations and port infrastructure environment"

            containerClassName="w-full h-full"
            className="w-full h-full object-cover"
            showSkeleton={false}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#05080d]/95 via-[#05080d]/85 to-[#05080d]/45" />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-24">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 rtl:rotate-180" /> {c.back}
          </Link>

          <div className="max-w-3xl">
            <div className="flex items-center gap-5 mb-6">
              <OptimizedImage
                src={agronLogo.url}
                alt="AGRON official logo"
                containerClassName="w-16 h-16 md:w-20 md:h-20 flex-shrink-0"
                className="w-full h-full object-contain"
                showSkeleton={false}
              />
              <Badge className="bg-white/10 text-white border border-white/20">{c.hero.badge}</Badge>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">{c.hero.title}</h1>
            <p className="mt-3 text-xl md:text-3xl font-light text-white/90">{c.hero.tagline}</p>

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
              <Button size="lg" asChild>
                <a href={AGRON_SERVICES} target="_blank" rel="noopener noreferrer">
                  {c.services.cta} <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <a href={AGRON_SITE} target="_blank" rel="noopener noreferrer">
                  {c.hero.ctaSecondary} <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </Button>
              <Button size="lg" variant="ghost" className="text-white hover:text-white" onClick={() => setShowInterest(true)}>
                {c.cta.primary} <ArrowRight className="ml-2 w-5 h-5 rtl:rotate-180" />
              </Button>
              <DownloadInvestorBriefButton projectSlug="agron" size="lg" />
            </div>

          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16 md:py-24 space-y-20 md:space-y-28">
        {/* WHAT AGRON IS */}
        <section>
          <SectionTitle title={c.what.title} />
          <p className="text-lg md:text-xl text-foreground leading-relaxed max-w-4xl">{c.what.p1}</p>
          <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed max-w-4xl">{c.what.p2}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {c.what.layers.map((layer, i) => {
              const Icon = layerIcons[i % layerIcons.length];
              return (
                <Card key={layer.t} className="bg-card/60 border-border/60 hover:border-primary/40 transition-colors">
                  <CardContent className="pt-6 space-y-3">
                    <Icon className="w-7 h-7 text-primary" aria-hidden="true" />
                    <h3 className="font-semibold text-foreground">{layer.t}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{layer.d}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mt-10 p-6 md:p-8 rounded-2xl border border-border/60 bg-card/40">
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-6">{c.what.flowTitle}</p>
            <FlowChain steps={c.what.flow} />
          </div>
        </section>


        {/* OPERATING RECORD */}
        <section>
          <SectionTitle title={c.record.title} />
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
            {c.record.stats.map((s) => (
              <div key={s.l} className="p-6 rounded-xl border border-border/60 bg-card/40">
                <p className="text-2xl md:text-3xl font-bold text-foreground">{s.v}</p>
                <p className="mt-2 text-xs md:text-sm text-muted-foreground leading-snug">{s.l}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted-foreground">{c.record.note}</p>
        </section>

        {/* CAPABILITIES */}
        <section>
          <SectionTitle title={c.capabilities.title} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {c.capabilities.items.map((item, i) => {
              const Icon = capabilityIcons[i % capabilityIcons.length];
              return (
                <Card key={item.t} className="bg-card/60 border-border/60 hover:border-primary/40 transition-colors">
                  <CardContent className="pt-6 space-y-3">
                    <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
                    <h3 className="font-semibold text-foreground">{item.t}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.d}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* SERVICES CATALOG */}
        <section>
          <SectionTitle kicker={c.services.kicker} title={c.services.title} />
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-4xl">{c.services.p}</p>

          <div className="mt-8">
            <Button size="lg" asChild>
              <a href={AGRON_SERVICES} target="_blank" rel="noopener noreferrer">
                {c.services.cta} <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </Button>
            <p className="mt-3 text-xs text-muted-foreground">{c.services.note}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {c.services.areas.map((area, i) => {
              const Icon = serviceIcons[i % serviceIcons.length];
              return (
                <Card key={area.t} className="bg-card/60 border-border/60 hover:border-primary/40 transition-colors">
                  <CardContent className="pt-6">
                    <Icon className="w-6 h-6 text-primary mb-3" aria-hidden="true" />
                    <h3 className="font-semibold text-foreground">{area.t}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{area.d}</p>
                    {area.items && (
                      <ul className="mt-4 space-y-2">
                        {area.items.map((line) => (
                          <li key={line} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="mt-2 w-1 h-1 rounded-full bg-primary flex-shrink-0" aria-hidden="true" />
                            {line}
                          </li>
                        ))}
                      </ul>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* GEOSPATIAL */}
        <section>
          <SectionTitle title={c.geospatial.title} />
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-4xl">{c.geospatial.p}</p>
          <div className="flex flex-wrap gap-2 mt-6">
            {c.geospatial.items.map((item) => (
              <span key={item} className="px-4 py-2 rounded-lg border border-border/60 bg-card/40 text-sm text-foreground/80">
                {item}
              </span>
            ))}
          </div>
          <a
            href={AGRON_SERVICES}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 text-sm font-medium text-primary hover:underline"
          >
            {c.geospatial.cta} <ExternalLink className="w-4 h-4" />
          </a>
        </section>


        {/* AGRON MARITIME */}
        <section>
          <SectionTitle kicker={c.maritime.kicker} title={c.maritime.title} />
          <p className="text-xl md:text-2xl font-light text-foreground">{c.maritime.tagline}</p>
          <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed max-w-4xl">
            {c.maritime.desc}
          </p>

          <div className="mt-10 p-6 md:p-8 rounded-2xl border border-border/60 bg-card/40">
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-6">{c.maritime.flowTitle}</p>
            <FlowChain steps={c.maritime.flow} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
            {[
              { src: agronMarina.url, alt: 'AGRON marina security environment' },
              { src: agronPort.url, alt: 'AGRON port security environment' },
              { src: agronIsland.url, alt: 'AGRON private island security environment' },
            ].map((image) => (
              <OptimizedImage
                key={image.src}
                src={image.src}
                alt={image.alt}
                containerClassName="w-full aspect-[16/10] rounded-xl overflow-hidden border border-border/60"
                className="w-full h-full object-cover"
              />
            ))}
          </div>

          <h3 className="text-xl md:text-2xl font-semibold text-foreground mt-14 mb-6">{c.maritime.appsTitle}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {c.maritime.apps.map((app, i) => (
              <Card key={app.t} className="bg-card/60 border-border/60">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    {i === 0 ? <Ship className="w-5 h-5 text-primary" /> : i === 1 ? <Anchor className="w-5 h-5 text-primary" /> : i === 2 ? <Radar className="w-5 h-5 text-primary" /> : <ContainerIcon className="w-5 h-5 text-primary" />}
                    <h4 className="font-semibold text-foreground">{app.t}</h4>
                  </div>
                  <ul className="space-y-2">
                    {app.items.map((line) => (
                      <li key={line} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-2 w-1 h-1 rounded-full bg-primary flex-shrink-0" aria-hidden="true" />
                        {line}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <h3 className="text-xl md:text-2xl font-semibold text-foreground mt-14 mb-2">{c.maritimeWater.title}</h3>
          <p className="text-xs uppercase tracking-[0.2em] text-primary/80 mb-6">{c.maritimeWater.kicker}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {c.maritimeWater.items.map((item) => (
              <div key={item.t} className="p-5 rounded-xl border border-border/60 bg-card/40">
                <h4 className="font-semibold text-foreground">{item.t}</h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
          <a
            href={AGRON_MARITIME}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 text-sm font-medium text-primary hover:underline"
          >
            {c.maritimeWater.cta} <ExternalLink className="w-4 h-4" />
          </a>

          <h3 className="text-xl md:text-2xl font-semibold text-foreground mt-14 mb-3">{c.maritimeLand.title}</h3>
          <p className="text-base text-muted-foreground leading-relaxed max-w-4xl">{c.maritimeLand.p}</p>
          <div className="flex flex-wrap gap-2 mt-6">
            {c.maritimeLand.envs.map((env) => (
              <span key={env} className="px-3 py-2 rounded-lg border border-border/60 bg-background/50 text-xs md:text-sm text-foreground/80">
                {env}
              </span>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            {c.maritimeLand.items.map((item) => (
              <div key={item.t} className="p-5 rounded-xl border border-border/60 bg-card/40">
                <h4 className="font-semibold text-foreground">{item.t}</h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 p-6 md:p-8 rounded-2xl border border-primary/25 bg-primary/5">
            <p className="text-xs uppercase tracking-[0.2em] text-primary/80 mb-2">{c.sysArch.kicker}</p>
            <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-6">{c.sysArch.title}</h3>
            <FlowChain steps={c.sysArch.flow} />
          </div>

          <div className="mt-14">
            <p className="text-xs uppercase tracking-[0.2em] text-primary/80 mb-2">{c.commercial.kicker}</p>
            <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3">{c.commercial.title}</h3>
            <p className="text-base text-muted-foreground leading-relaxed max-w-4xl">{c.commercial.p}</p>
            <div className="flex flex-wrap gap-2 mt-6">
              {c.commercial.items.map((item) => (
                <span key={item} className="px-4 py-2 rounded-full border border-border/60 bg-card/40 text-sm text-foreground/80">
                  {item}
                </span>
              ))}
            </div>
            <p className="mt-4 text-xs text-muted-foreground">{c.commercial.note}</p>
          </div>
        </section>



        {/* STARWALL */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <OptimizedImage
              src={starwallLogo.url}
              alt="StarWall by AGRON logo"
              containerClassName="h-10 w-40"
              className="h-full w-full object-contain object-left"
              showSkeleton={false}
            />
          </div>
          <SectionTitle kicker={c.starwall.kicker} title={c.starwall.title} />
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-4xl">{c.starwall.p1}</p>
          <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed max-w-4xl">{c.starwall.p2}</p>

          <div className="mt-8 p-6 rounded-2xl border border-primary/30 bg-primary/5">
            <p className="font-semibold text-foreground">{c.starwall.principleTitle}</p>
            <p className="mt-2 text-sm md:text-base text-muted-foreground leading-relaxed">{c.starwall.principle}</p>
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl border border-border/60 bg-card/40">
              <p className="text-sm uppercase tracking-widest text-muted-foreground mb-5">{c.starwall.inputsTitle}</p>
              <div className="flex flex-wrap gap-2">
                {c.starwall.inputs.map((input) => (
                  <span key={input} className="px-3 py-2 rounded-lg border border-border/60 bg-background/50 text-xs md:text-sm text-foreground/80">
                    {input}
                  </span>
                ))}
              </div>
              <div className="flex justify-center my-6">
                <ArrowDown className="w-5 h-5 text-primary/70" aria-hidden="true" />
              </div>
              <div className="text-center px-5 py-4 rounded-xl border border-primary/40 bg-primary/10 font-semibold text-foreground">
                StarWall
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-border/60 bg-card/40">
              <p className="text-sm uppercase tracking-widest text-muted-foreground mb-5">{c.starwall.chainTitle}</p>
              <FlowChain steps={c.starwall.chain} />
            </div>
          </div>

          <OptimizedImage
            src={starwallOverview.url}
            alt="StarWall by AGRON maritime intelligence overview"
            containerClassName="mt-10 w-full rounded-2xl overflow-hidden border border-border/60"
            className="w-full h-auto object-contain"
          />
        </section>

        {/* MODULAR INFRASTRUCTURE */}
        <section>
          <SectionTitle title={c.modular.title} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
            {c.modular.items.map((item, i) => {
              const Icon = modularIcons[i % modularIcons.length];
              return (
                <Card key={item.t} className="bg-card/60 border-border/60">
                  <CardContent className="pt-6 flex items-start gap-4">
                    <Icon className="w-6 h-6 text-primary flex-shrink-0" aria-hidden="true" />
                    <div>
                      <h3 className="font-semibold text-foreground">{item.t}</h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.d}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <div className="mt-6 p-6 rounded-2xl border border-border/60 bg-card/40">
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">{c.modular.zonesTitle}</p>
            <div className="flex flex-wrap gap-2">
              {c.modular.zones.map((zone) => (
                <span key={zone} className="px-3 py-2 rounded-lg border border-border/60 bg-background/50 text-xs md:text-sm text-foreground/80">
                  {zone}
                </span>
              ))}
            </div>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">{c.modular.note}</p>

        </section>

        {/* MULTI-LAYER PROTECTION */}
        <section>
          <SectionTitle title={c.protection.title} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {c.protection.items.map((item, i) => {
              const Icon = protectionIcons[i % protectionIcons.length];
              return (
                <div key={item.t} className="p-5 rounded-xl border border-border/60 bg-card/40">
                  <Icon className="w-6 h-6 text-primary mb-3" aria-hidden="true" />
                  <h3 className="font-semibold text-foreground">{item.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.d}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* SUPPORT CENTER */}
        <section>
          <SectionTitle kicker={c.support.kicker} title={c.support.title} />
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-4xl">{c.support.p1}</p>
          <div className="mt-8 p-6 rounded-2xl border border-border/60 bg-card/40">
            <FlowChain steps={c.support.flow} />
          </div>
          <h3 className="text-lg font-semibold text-foreground mt-10 mb-4">{c.support.capsTitle}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {c.support.caps.map((cap) => (
              <div key={cap} className="px-4 py-3 rounded-lg border border-border/60 bg-background/50 text-sm text-foreground/85">
                {cap}
              </div>
            ))}
          </div>
        </section>

        {/* BUSINESS MODEL */}
        <section>
          <SectionTitle kicker={c.business.kicker} title={c.business.title} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {c.business.items.map((group) => (
              <Card key={group.t} className="bg-card/60 border-border/60">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-foreground mb-4">{group.t}</h3>
                  <ul className="space-y-2">
                    {group.items.map((line) => (
                      <li key={line} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-2 w-1 h-1 rounded-full bg-primary flex-shrink-0" aria-hidden="true" />
                        {line}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted-foreground">{c.business.note}</p>
        </section>

        {/* MATURITY */}
        <section>
          <SectionTitle title={c.maturity.title} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: c.maturity.currentTitle, items: c.maturity.current, tone: 'border-primary/40 bg-primary/5' },
              { title: c.maturity.nextTitle, items: c.maturity.next, tone: 'border-border/60 bg-card/40' },
              { title: c.maturity.futureTitle, items: c.maturity.future, tone: 'border-dashed border-border/60 bg-transparent' },
            ].map((col) => (
              <div key={col.title} className={`p-6 rounded-2xl border ${col.tone}`}>
                <h3 className="font-semibold text-foreground mb-4">{col.title}</h3>
                <ul className="space-y-3">
                  {col.items.map((line) => (
                    <li key={line} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-2 w-1 h-1 rounded-full bg-primary flex-shrink-0" aria-hidden="true" />
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted-foreground">{c.maturity.note}</p>
        </section>

        {/* DEVELOPMENT PATH */}
        <section>
          <SectionTitle kicker={c.path.kicker} title={c.path.title} />
          <div className="p-6 md:p-8 rounded-2xl border border-primary/25 bg-primary/5">
            <FlowChain steps={c.path.steps} />
          </div>
          <p className="mt-4 text-xs text-muted-foreground">{c.path.note}</p>
        </section>

        {/* CURRENT DEVELOPMENT */}
        <section>
          <SectionTitle title={c.now.title} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {c.now.items.map((item) => (
              <div key={item.t} className="flex items-center justify-between gap-4 p-5 rounded-xl border border-border/60 bg-card/40">
                <span className="text-sm font-medium text-foreground">{item.t}</span>
                <Badge variant="secondary" className="shrink-0">{item.s}</Badge>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted-foreground">{c.now.note}</p>
        </section>

        {/* PORTFOLIO ARCHITECTURE */}
        <section>
          <SectionTitle title={c.portfolioArch.title} />
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-4xl">{c.portfolioArch.p}</p>
          <div className="mt-8 p-6 md:p-8 rounded-2xl border border-border/60 bg-card/40">
            <FlowChain steps={['Digital Invest', 'AGRON']} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-6">
              {c.portfolioArch.items.map((item) => (
                <div key={item} className="px-4 py-3 rounded-lg border border-border/60 bg-background/50 text-sm text-foreground/85">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* PORTFOLIO FIT */}
        <section>
          <SectionTitle title={c.fit.title} />
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-4xl">{c.fit.p}</p>
          <div className="flex flex-wrap gap-2 mt-6">
            {c.fit.items.map((item) => (
              <span key={item} className="px-4 py-2 rounded-full border border-border/60 bg-card/40 text-sm text-foreground/80">
                {item}
              </span>
            ))}
          </div>
        </section>

        {/* MEDIA ROOM */}
        <ProjectMediaRoomBySlug slug="agron" />

        {/* PROJECT OVERVIEW VS LIVE PRODUCT */}
        <section>
          <SectionTitle title={c.status.title} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="bg-card/60 border-border/60">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-foreground">{c.status.overviewTitle}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.status.overview}</p>
              </CardContent>
            </Card>
            <Card className="bg-primary/5 border-primary/30">
              <CardContent className="pt-6 flex flex-col h-full">
                <h3 className="font-semibold text-foreground">{c.status.productTitle}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.status.product}</p>
                <div className="mt-6">
                  <Button asChild>
                    <a href={AGRON_SITE} target="_blank" rel="noopener noreferrer">
                      {c.status.cta} <ExternalLink className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground">{c.cta.title}</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">{c.cta.desc}</p>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <Button size="lg" onClick={() => setShowInterest(true)}>
              {c.cta.primary} <ArrowRight className="ml-2 w-5 h-5 rtl:rotate-180" />
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <a href={AGRON_SITE} target="_blank" rel="noopener noreferrer">
                {c.cta.secondary} <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </div>
        </section>

        <InvestorPageDisclaimer />
      </main>

      <InterestForm
        projectId="agron"
        projectTitle="AGRON — Infrastructure for Autonomous Operations"
        open={showInterest}
        onOpenChange={setShowInterest}
      />
      <Footer />
    </div>
  );
};

export default AGRON;
