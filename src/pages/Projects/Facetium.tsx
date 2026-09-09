import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  ArrowLeft, ArrowRight, Globe, MapPin, ChevronRight, Store, Users,
  Sparkles, Building2, CalendarDays, Layers, Cpu, Briefcase, Boxes,
  Compass, Wrench, ShieldCheck, Gem, Ticket, Rocket, HelpCircle, Search,
} from 'lucide-react';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import OptimizedImage from '@/components/OptimizedImage';
import InterestForm from '@/components/InterestForm';
import InvestorPageDisclaimer from '@/components/InvestorPageDisclaimer';
import ProjectMediaRoomBySlug from '@/components/ProjectMediaRoomBySlug';
import facetiumLogo from '@/assets/projects/facetium-logo.png.asset.json';
import facetiumEntrance from '@/assets/projects/facetium-entrance.png.asset.json';
import facetiumNetwork from '@/assets/projects/facetium-network.png.asset.json';
import facetiumWorld from '@/assets/projects/facetium-world.png.asset.json';
import facetiumHeadquarters from '@/assets/projects/facetium-headquarters.jpg.asset.json';
import interiorImg from '@/assets/projects/facetium-hero.jpg';

type Item = { title: string; desc: string };

const Facetium = () => {
  const { t } = useTranslation();
  const [showInterestForm, setShowInterestForm] = useState(false);

  const list = (key: string) => t(`facetium.${key}`, { returnObjects: true }) as string[];
  const items = (key: string) => t(`facetium.${key}`, { returnObjects: true }) as Item[];
  const s = (key: string) => t(`facetium.${key}`);

  const galleryCaptions = list('galleryCaptions');
  const gallery = [
    { src: facetiumNetwork.url, alt: 'FACETIUM network of interactive commercial environments' },
    { src: facetiumWorld.url, alt: 'FACETIUM digital world for commerce' },
    { src: facetiumHeadquarters.url, alt: 'FACETIUM flagship destination architecture' },
  ];

  const Chips = ({ values }: { values: string[] }) => (
    <div className="flex flex-wrap gap-2 justify-center">
      {values.map((v, i) => (
        <span
          key={i}
          className="px-4 py-2 rounded-full border border-amber-500/25 bg-amber-500/5 text-sm text-foreground/80"
        >
          {v}
        </span>
      ))}
    </div>
  );

  const Bullets = ({ values }: { values: string[] }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {values.map((v, i) => (
        <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-card/50 border border-border/50">
          <ChevronRight className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
          <p className="text-muted-foreground">{v}</p>
        </div>
      ))}
    </div>
  );

  const Flow = ({ values }: { values: string[] }) => (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {values.map((v, i) => (
        <span key={i} className="flex items-center gap-3">
          <span className="px-4 py-2 rounded-lg bg-amber-500/10 border border-amber-500/20 text-sm font-medium">
            {v}
          </span>
          {i < values.length - 1 && <ArrowRight className="w-4 h-4 text-amber-400/60 rtl:rotate-180" />}
        </span>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <OptimizedImage
            src={facetiumEntrance.url}
            alt="FACETIUM destination entrance"
            containerClassName="w-full h-full"
            className="w-full h-full object-cover"
            showSkeleton={false}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d0b08]/95 via-[#0d0b08]/85 to-[#0d0b08]/50" />
        </div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-3xl">
            <Link
              to="/projects"
              className="inline-flex items-center text-amber-300/70 hover:text-amber-300 mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2 rtl:rotate-180" /> {s('back')}
            </Link>
            <img
              src={facetiumLogo.url}
              alt="FACETIUM"
              width={640}
              height={205}
              className="h-16 md:h-24 w-auto object-contain mb-6"
            />
            <Badge className="mb-4 bg-amber-500/20 text-amber-300 border-amber-500/30 text-sm px-4 py-1">
              {s('badge')}
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4 leading-tight">
              {s('heroTitle')}
            </h1>
            <p className="text-xl md:text-2xl text-amber-200/80 font-light italic mb-6">
              {s('heroTagline')}
            </p>
            <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed max-w-2xl">{s('heroDesc')}</p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-warning text-warning-foreground hover:bg-warning/90 px-8 py-6 text-lg"
                onClick={() => setShowInterestForm(true)}
              >
                {s('ctaInterest')}
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 px-8 py-6 text-lg"
              >
                <a href="https://facetium.com" target="_blank" rel="noopener noreferrer">
                  <Globe className="w-5 h-5 mr-2" />
                  {s('ctaVisit')}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {gallery.map((item, i) => (
              <figure key={i} className="group overflow-hidden rounded-xl border border-border/60 bg-background/40">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <figcaption className="p-4 text-sm text-muted-foreground">{galleryCaptions[i]}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* From pages to places */}
      <section className="py-20 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">{s('pagesTitle')}</h2>
          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed mb-12">
            <p>{s('pagesP1')}</p>
            <p>{s('pagesP2')}</p>
            <p>{s('pagesP3')}</p>
          </div>
          <Flow values={list('flow')} />
        </div>
      </section>

      {/* Experience */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{s('expTitle')}</h2>
          <p className="text-muted-foreground mb-10">{s('expDesc')}</p>
          <Chips values={list('expItems')} />
          <div className="rounded-2xl overflow-hidden border border-amber-500/15 mt-12">
            <img
              src={interiorImg}
              alt="Interior of a FACETIUM environment"
              loading="lazy"
              width={1600}
              height={912}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Boutiques */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{s('boutiqueTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              { icon: Building2, title: s('model1Title'), desc: s('model1Desc') },
              { icon: Store, title: s('model2Title'), desc: s('model2Desc') },
            ].map((m, i) => (
              <Card key={i} className="bg-card/50 border-amber-500/10">
                <CardContent className="p-6">
                  <m.icon className="w-8 h-8 text-amber-400 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{m.title}</h3>
                  <p className="text-sm text-muted-foreground">{m.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <Chips values={list('boutiqueCaps')} />
        </div>
      </section>

      {/* Product capabilities */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{s('productTitle')}</h2>
          <p className="text-muted-foreground mb-10">{s('productDesc')}</p>
          <Chips values={list('productItems')} />
          <p className="text-sm text-muted-foreground/80 mt-8 max-w-3xl mx-auto">{s('productJewelry')}</p>
        </div>
      </section>

      {/* Human connection */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">{s('humanTitle')}</h2>
          <p className="text-center text-muted-foreground mb-10">{s('humanDesc')}</p>
          <Bullets values={list('humanItems')} />
          <p className="text-center text-xl italic text-amber-500/90 mt-10">{s('humanQuote')}</p>
        </div>
      </section>

      {/* Commerce */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">{s('commerceTitle')}</h2>
          <div className="mb-12">
            <Flow values={list('journey')} />
          </div>
          <Bullets values={list('commerceItems')} />
          <p className="text-sm text-muted-foreground/80 mt-8 text-center">{s('commerceNote')}</p>
        </div>
      </section>

      {/* Phygital */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{s('phygitalTitle')}</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10">{s('phygitalP')}</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <span className="px-6 py-3 rounded-xl border border-amber-500/25 bg-card/60 font-medium">
              {s('phygitalLeft')}
            </span>
            <Layers className="w-6 h-6 text-amber-400" />
            <span className="px-6 py-3 rounded-xl border border-amber-500/25 bg-card/60 font-medium">
              {s('phygitalRight')}
            </span>
          </div>
        </div>
      </section>

      {/* Persistence */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{s('persistTitle')}</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">{s('persistP')}</p>
        </div>
      </section>

      {/* Events */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">{s('eventsTitle')}</h2>
          <Chips values={list('eventsItems')} />
        </div>
      </section>

      {/* Before / During / After */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{s('bdaTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: s('beforeTitle'), desc: s('beforeP') },
              { title: s('duringTitle'), desc: s('duringP') },
              { title: s('afterTitle'), desc: s('afterP') },
            ].map((m, i) => (
              <Card key={i} className="bg-card/50 border-amber-500/10">
                <CardContent className="p-6">
                  <CalendarDays className="w-7 h-7 text-amber-400 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{m.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center text-lg font-medium mt-10">{s('bdaKey')}</p>
        </div>
      </section>

      {/* B2B */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{s('b2bTitle')}</h2>
          <p className="text-muted-foreground mb-10">{s('b2bDesc')}</p>
          <Chips values={list('industries')} />
          <div className="mt-12 text-left">
            <Bullets values={list('b2bItems')} />
          </div>
        </div>
      </section>

      {/* Audiences */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{s('audienceTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Users className="w-6 h-6 text-amber-400" /> {s('visitorsTitle')}
              </h3>
              <div className="space-y-3">
                {list('visitors').map((v, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-card/50 border border-border/50">
                    <ChevronRight className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">{v}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Briefcase className="w-6 h-6 text-amber-400" /> {s('orgsTitle')}
              </h3>
              <div className="space-y-3">
                {list('orgs').map((v, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-card/50 border border-border/50">
                    <ChevronRight className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">{v}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="text-center text-muted-foreground mt-10">{s('audienceNote')}</p>
        </div>
      </section>

      {/* Presence options */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{s('launchTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items('launchItems').map((m, i) => (
              <Card key={i} className="bg-card border-border/50 hover:border-amber-500/30 transition-all duration-300">
                <CardContent className="p-6">
                  <Boxes className="w-8 h-8 text-amber-400 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{m.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Brand environments */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{s('brandTitle')}</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">{s('brandP')}</p>
        </div>
      </section>

      {/* Destinations */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{s('destTitle')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {list('destinations').map((d, i) => (
              <Card key={i} className="bg-card/50 border-amber-500/10 hover:border-amber-500/30 transition-all duration-300">
                <CardContent className="p-6 flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-amber-400 flex-shrink-0" />
                  <span className="font-semibold">{d}</span>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center text-muted-foreground max-w-3xl mx-auto">{s('destDesc')}</p>
          <p className="text-center text-sm text-muted-foreground/80 mt-4 max-w-3xl mx-auto">{s('destNote')}</p>
        </div>
      </section>

      {/* Access */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">{s('accessTitle')}</h2>
          <Chips values={list('devices')} />
          <p className="text-muted-foreground mt-8">{s('accessNote')}</p>
        </div>
      </section>

      {/* Technology */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <Cpu className="w-10 h-10 text-amber-400 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{s('techTitle')}</h2>
          <p className="text-muted-foreground mb-10">{s('techP')}</p>
          <Chips values={list('techItems')} />
        </div>
      </section>

      {/* Business model */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{s('modelTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items('modelItems').map((m, i) => (
              <Card key={i} className="bg-card border-border/50 hover:border-amber-500/30 transition-all duration-300">
                <CardContent className="p-6">
                  <Sparkles className="w-7 h-7 text-amber-400 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{m.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Expansion */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">{s('expandTitle')}</h2>
          <Flow values={list('expandChain')} />
          <p className="text-sm text-muted-foreground/80 mt-8">{s('expandNote')}</p>
        </div>
      </section>

      {/* Digital Invest */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{s('diTitle')}</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">{s('diP')}</p>
        </div>
      </section>

      {/* Product architecture */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">{s('archTitle')}</h2>
          <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12">{s('archDesc')}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items('archItems').map((m, i) => (
              <Card key={i} className="bg-card border-border/50 hover:border-amber-500/30 transition-all duration-300">
                <CardContent className="p-6">
                  <Layers className="w-7 h-7 text-amber-400 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{m.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground/80 mt-8">{s('archNote')}</p>
        </div>
      </section>

      {/* How a business joins */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 uppercase tracking-tight">{s('joinTitle')}</h2>
          <p className="text-center text-muted-foreground mb-12">{s('joinDesc')}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items('joinSteps').map((m, i) => (
              <Card key={i} className="bg-card/50 border-amber-500/10">
                <CardContent className="p-6">
                  <span className="text-sm font-mono text-amber-400">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-lg font-semibold mt-2 mb-2">{m.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{s('servicesTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items('servicesItems').map((m, i) => (
              <Card key={i} className="bg-card border-border/50 hover:border-amber-500/30 transition-all duration-300">
                <CardContent className="p-6">
                  <Wrench className="w-7 h-7 text-amber-400 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{m.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Deployment models */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">{s('deployTitle')}</h2>
          <p className="text-center text-muted-foreground mb-12">{s('deployDesc')}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {items('deployItems').map((m, i) => (
              <Card key={i} className="bg-card/50 border-amber-500/10">
                <CardContent className="p-6">
                  <Building2 className="w-7 h-7 text-amber-400 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{m.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground/80 mt-8">{s('deployNote')}</p>
          <div className="text-center mt-8">
            <Button size="lg" className="px-8 py-6 text-lg" onClick={() => setShowInterestForm(true)}>
              {s('deployCta')}
            </Button>
          </div>
        </div>
      </section>

      {/* One identity */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{s('identityTitle')}</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-3xl mx-auto">{s('identityP')}</p>
          <Chips values={list('identityItems')} />
          <p className="text-sm text-muted-foreground/80 mt-8 max-w-3xl mx-auto">{s('identityNote')}</p>
        </div>
      </section>

      {/* Discovery & navigation */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <Compass className="w-10 h-10 text-amber-400 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{s('discoveryTitle')}</h2>
          <p className="text-muted-foreground mb-10 max-w-3xl mx-auto">{s('discoveryDesc')}</p>
          <Chips values={list('discoveryCats')} />
          <div className="mt-10">
            <Flow values={list('discoveryActions')} />
          </div>
          <p className="text-sm text-muted-foreground/80 mt-8 max-w-3xl mx-auto">{s('discoveryNote')}</p>
        </div>
      </section>

      {/* Trust */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <ShieldCheck className="w-10 h-10 text-amber-400 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">{s('trustTitle')}</h2>
          <Bullets values={list('trustItems')} />
          <p className="text-sm text-muted-foreground/80 mt-8 text-center">{s('trustNote')}</p>
        </div>
      </section>

      {/* Private client */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <Gem className="w-10 h-10 text-amber-400 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{s('privateTitle')}</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-3xl mx-auto">{s('privateP')}</p>
          <Flow values={list('privateJourney')} />
        </div>
      </section>

      {/* Exhibition organizers */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <Ticket className="w-10 h-10 text-amber-400 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-tight">{s('expoTitle')}</h2>
          <p className="text-muted-foreground mb-10">{s('expoDesc')}</p>
          <Chips values={list('expoItems')} />
          <p className="text-sm text-muted-foreground/80 mt-8 max-w-3xl mx-auto">{s('expoGoal')}</p>
        </div>
      </section>

      {/* For brands / for visitors */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-2">
                <Briefcase className="w-6 h-6 text-amber-400" /> {s('brandsTitle')}
              </h2>
              <div className="space-y-3">
                {list('brandsItems').map((v, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-card/50 border border-border/50">
                    <ChevronRight className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">{v}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-2">
                <Search className="w-6 h-6 text-amber-400" /> {s('visitorsWhyTitle')}
              </h2>
              <div className="space-y-3">
                {list('visitorsWhyItems').map((v, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-card/50 border border-border/50">
                    <ChevronRight className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">{v}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current / Next / Future */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{s('maturityTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {items('maturityItems').map((m, i) => (
              <Card key={i} className="bg-card border-border/50">
                <CardContent className="p-6">
                  <Rocket className="w-7 h-7 text-amber-400 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{m.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground/80 mt-8">{s('maturityNote')}</p>
        </div>
      </section>

      {/* Request an environment */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-tight">{s('requestTitle')}</h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-3xl mx-auto">{s('requestDesc')}</p>
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button size="lg" className="px-8 py-6 text-lg" onClick={() => setShowInterestForm(true)}>
              {s('requestCta')} <ArrowRight className="w-5 h-5 ml-2 rtl:rotate-180" />
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-6 text-lg" onClick={() => setShowInterestForm(true)}>
              {s('requestCta2')}
            </Button>
          </div>
          <Chips values={list('requestOptions')} />
        </div>
      </section>

      {/* Project overview vs live product */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{s('statusTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-card/50 border-amber-500/10">
              <CardContent className="p-6">
                <Boxes className="w-7 h-7 text-amber-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">{s('statusOverviewTitle')}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s('statusOverviewDesc')}</p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 border-amber-500/10">
              <CardContent className="p-6">
                <Globe className="w-7 h-7 text-amber-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">{s('statusProductTitle')}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s('statusProductDesc')}</p>
                <Button asChild>
                  <a href="https://facetium.com" target="_blank" rel="noopener noreferrer">
                    {s('ctaVisit')}
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Five answers */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{s('fiveTitle')}</h2>
          <div className="space-y-4">
            {items('fiveItems').map((m, i) => (
              <div key={i} className="flex items-start gap-4 p-6 rounded-xl bg-card/50 border border-border/50">
                <HelpCircle className="w-6 h-6 text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-1">{m.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Media Room */}
      <ProjectMediaRoomBySlug slug="facetium" fallbackTitle="FACETIUM" />

      {/* CTA */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">{s('finalTitle')}</h2>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-muted-foreground text-lg mb-10">
            {list('finalLines').map((l, i) => (
              <span key={i}>{l}</span>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              size="lg"
              className="bg-warning text-warning-foreground hover:bg-warning/90 px-10 py-6 text-lg"
              onClick={() => setShowInterestForm(true)}
            >
              {s('ctaInterest')} <ArrowRight className="w-5 h-5 ml-2 rtl:rotate-180" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="px-10 py-6 text-lg"
            >
              <a href="https://facetium.com" target="_blank" rel="noopener noreferrer">
                {s('ctaVisit')}
              </a>
            </Button>
            <Link to="/projects">
              <Button size="lg" variant="ghost" className="px-10 py-6 text-lg">
                {s('back')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <InvestorPageDisclaimer />
        </div>
      </section>

      <InterestForm
        projectId="facetium"
        projectTitle="FACETIUM"
        open={showInterestForm}
        onOpenChange={setShowInterestForm}
      />
      <Footer />
    </div>
  );
};

export default Facetium;
