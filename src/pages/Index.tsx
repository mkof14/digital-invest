import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { supabase } from '@/integrations/supabase/client';
import { generateFAQSchema, injectStructuredData, removeStructuredData } from '@/lib/structuredData';
import { updateMetaTags, resetMetaTags } from '@/lib/metaTags';
import { verifyMetaTags } from '@/lib/verifyMetaTags';
import OptimizedImage from "@/components/OptimizedImage";
import FloatingElements from "@/components/FloatingElements";
import ROICalculator from "@/components/ROICalculator";
import SearchBar from "@/components/SearchBar";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Rocket,
  Lightbulb,
  Target,
  Users,
  TrendingUp,
  Shield,
  ArrowRight,
  Zap,
  Award,
  LineChart,
  Lock,
  CheckCircle2,
  Sparkles,
  Building2,
  Heart,
  Sprout,
  Utensils,
  Network,
  BarChart3,
  FileText,
  Clock,
  Mail,
  Search,
  Briefcase,
  Brain,
  Cpu,
  Layers,
  Activity,
  Orbit,
  ArrowUpRight,
  Play,
  ChevronRight,
  Minus
} from "lucide-react";
import {
  HealthDNAIcon,
  AgroDataIcon,
  FoodMolecularIcon,
  InfraHubIcon,
  EcosystemCoreIcon,
  ShieldCircuitIcon,
  GrowthArrowIcon,
  PartnershipIcon,
  DailyPulseIcon,
  DataStreamIcon,
  AILoopIcon,
  SynergyOrbitIcon
} from "@/components/icons/BrandIcons";
import terraaeroHero from "@/assets/projects/terraaero-hero.jpg";
import biomathCoreHero from "@/assets/projects/biomathcore-hero.jpg";
import dishcoreHero from "@/assets/projects/dishcore-hero.jpg";
import digitalInvestHero from "@/assets/projects/digitalinvest-hero.webp";
import biomathLifeHero from "@/assets/projects/biomathlife-hero.jpg";
import heroBackground from "@/assets/hero-digital-invest.webp";
import {
  CurrentFocusBlock,
  TodayWeBuild,
  LiveNumbers,
  WeeklyInsight,
  ActivityStrip,
} from "@/components/engagement/EngagementSections";

interface FeaturedProject {
  id: string;
  slug: string;
  title: string;
  short_description: string;
  category: string;
  status: string;
  target_amount: number | null;
  current_raised: number;
  currency: string;
  hero_image_url: string;
}

const Index = () => {
  const { t } = useTranslation();
  const [featuredProjects, setFeaturedProjects] = useState<FeaturedProject[]>([]);
  
  const featuredSection = useScrollAnimation({ threshold: 0.15 });
  const whatWeBuildSection = useScrollAnimation({ threshold: 0.15 });
  const biomathVisionSection = useScrollAnimation({ threshold: 0.15 });
  const whyDigitalSection = useScrollAnimation({ threshold: 0.15 });
  const investmentSection = useScrollAnimation({ threshold: 0.15 });
  const journeySection = useScrollAnimation({ threshold: 0.15 });
  const faqSection = useScrollAnimation({ threshold: 0.15 });
  const capabilitiesSection = useScrollAnimation({ threshold: 0.15 });

  const featuredHeading = useScrollAnimation({ threshold: 0.3 });
  const calculatorHeading = useScrollAnimation({ threshold: 0.3 });
  const whatWeBuildHeading = useScrollAnimation({ threshold: 0.3 });
  const biomathVisionHeading = useScrollAnimation({ threshold: 0.3 });
  const whyDigitalHeading = useScrollAnimation({ threshold: 0.3 });
  const investmentHeading = useScrollAnimation({ threshold: 0.3 });
  const capabilitiesHeading = useScrollAnimation({ threshold: 0.3 });
  const journeyHeading = useScrollAnimation({ threshold: 0.3 });
  const faqHeading = useScrollAnimation({ threshold: 0.3 });

  const projectImages: Record<string, string> = {
    'terraaero': terraaeroHero,
    'biomathcore': biomathCoreHero,
    'biomath-core': biomathCoreHero,
    'dishcore': dishcoreHero,
    'digital-invest-portfolio': digitalInvestHero,
    'digital-invest-ai-lab': digitalInvestHero,
    'digital-invest-manufacturing': digitalInvestHero,
    'biomathlife': biomathLifeHero,
  };

  useEffect(() => {
    fetchFeaturedProjects();

    // Investor-focused meta tags & Open Graph
    updateMetaTags({
      title: 'Digital Invest Inc. — Private Multi-Sector Investment Portfolio',
      description: 'Private investment company building operating systems across health, biotechnology, agrotech and food production. Information for qualified and accredited investors only. Not a public offering.',
      ogTitle: 'Digital Invest Inc. — Where Capital Meets Real-World Execution',
      ogDescription: 'A private portfolio of 20+ active projects across digital health, agrotech drones, food manufacturing and multi-sector infrastructure. By invitation, for qualified investors.',
      ogImage: 'https://digitalinvest.com/og-digital-invest.webp',
      ogType: 'website',
      twitterTitle: 'Digital Invest Inc. — Private Multi-Sector Portfolio',
      twitterDescription: 'Operating systems for health, agrotech and food. For qualified investors. Not a public offering.',
      twitterImage: 'https://digitalinvest.com/og-digital-invest.webp',
      canonicalUrl: 'https://digitalinvest.com/',
    });

    // DEV-only: verify meta tags both in DOM and in raw server HTML response
    verifyMetaTags({
      title: /Digital Invest/i,
      description: /qualified|accredited|private/i,
      ogTitle: /Digital Invest/i,
      ogDescription: /private|qualified|portfolio/i,
      ogImage: /og-digital-invest\.webp$/i,
    });

    const faqData = [
      { question: "Is this a crowdfunding platform?", answer: "No. Digital Invest Inc. is not a crowdfunding platform. This website is informational only." },
      { question: "Can I invest online through this website?", answer: "No. This website does not process payments or facilitate direct online investment." },
      { question: "Are returns guaranteed?", answer: "No. All investments carry risk, and returns are never guaranteed." },
      { question: "What happens after I submit interest?", answer: "We will review your submission and may reach out personally to discuss the project." },
      { question: "Who can participate?", answer: "Participation is typically limited to qualified investors or accredited investors." },
      { question: "Why is everything handled privately?", answer: "We believe in building strong, trust-based relationships with our investors." }
    ];

    const faqSchema = generateFAQSchema(faqData);
    injectStructuredData(faqSchema, 'faq-structured-data');

    return () => {
      removeStructuredData('faq-structured-data');
      resetMetaTags();
    };
  }, []);

  const fetchFeaturedProjects = async () => {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('is_visible', true)
        .eq('status', 'OPEN')
        .order('priority', { ascending: false })
        .order('created_at', { ascending: false })
        .limit(3);
      if (error) throw error;
      setFeaturedProjects(data || []);
    } catch (error) {
      console.error('Error fetching featured projects:', error);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'OPEN': return 'bg-success text-success-foreground';
      case 'CLOSED': return 'bg-muted text-muted-foreground';
      case 'COMING_SOON': return 'bg-info text-info-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen bg-background max-w-[1600px] mx-auto">
      <Navigation />

      {/* ═══════════════════ HERO — Futuristic Orbital Field ═══════════════════ */}
      <section className="hero-tech relative overflow-hidden min-h-[92vh] flex flex-col">
        {/* Atmosphere */}
        <div className="absolute inset-0 hero-aurora" aria-hidden />
        <div className="absolute inset-0 hero-tech-grid opacity-70" aria-hidden />
        <div className="absolute inset-0 hero-noise" aria-hidden />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px hero-scanline bg-gradient-to-r from-transparent via-[rgba(224,180,95,0.55)] to-transparent" aria-hidden />

        {/* Orbital system with brand core */}
        <div className="pointer-events-none absolute -right-[22vw] top-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[900px] max-h-[900px] lg:right-[-10vw]" aria-hidden>
          <div className="hero-orbit hero-orbit-1" />
          <div className="hero-orbit hero-orbit-2" />
          <div className="hero-orbit hero-orbit-3" />
          <div className="hero-core" />
          <img
            src={ecosystemCore.url}
            alt=""
            loading="lazy"
            decoding="async"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[46%] max-w-[380px] rounded-full opacity-[0.55] mix-blend-screen select-none"
          />
        </div>


        {/* Signal line */}
        <div className="relative z-10 pt-24 lg:pt-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-success hero-blink" />
              <span className="text-foreground">Digital Invest</span>
              <span className="hidden sm:inline text-muted-foreground/60">— private multi-sector portfolio</span>
            </div>
          </div>
        </div>

        <div className="relative z-10 flex-1 flex items-center w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-3xl">
            <div className="hero-rise" style={{ animationDelay: '0.05s' }}>
              <span className="font-mono text-[10px] uppercase tracking-[0.34em] text-brand-gold">
                Multi-sector technology holding
              </span>
            </div>

            <h1
              className="hero-rise mt-8 text-[2.7rem] sm:text-6xl lg:text-[5rem] font-semibold leading-[0.95] tracking-[-0.04em]"
              style={{ animationDelay: '0.15s' }}
            >
              <span className="hero-gradient-text">{t('hero.strategicTitle')}</span>{' '}
              <span className="hero-glow-text">{t('hero.strategicHighlight')}</span>
            </h1>

            <p
              className="hero-rise mt-9 max-w-xl text-base md:text-lg leading-relaxed text-muted-foreground font-light"
              style={{ animationDelay: '0.28s' }}
            >
              {t('hero.description')}
            </p>

            {/* Text-based entries — no buttons */}
            <div className="hero-rise mt-12 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10" style={{ animationDelay: '0.4s' }}>
              <Link to="/projects" className="hero-entry group">
                <span className="hero-entry-index">01</span>
                <span className="hero-entry-label">{t('hero.exploreProjects')}</span>
                <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
              <Link to="/why-digital-invest" className="hero-entry group">
                <span className="hero-entry-index">02</span>
                <span className="hero-entry-label">{t('hero.learnWhy')}</span>
                <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </div>

            <p className="hero-rise mt-10 font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground/70" style={{ animationDelay: '0.5s' }}>
              No commitment · Private review · Direct conversation
            </p>
          </div>
        </div>

        {/* Sector ticker rail */}
        <div className="relative z-10 border-t border-border/15 overflow-hidden">
          <div className="flex hero-ticker-track w-max">
            {[0, 1].map((dup) => (
              <div key={dup} className="flex shrink-0" aria-hidden={dup === 1}>
                {['HealthTech', 'AI & Robotics', 'AgriTech', 'Advanced Materials', 'FoodTech', 'Autonomous Systems', 'Infrastructure', 'Human Data'].map((s, i) => (
                  <span key={s} className="flex items-center gap-4 px-8 py-4 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                    <span className="text-brand-gold tabular-nums">{String(i + 1).padStart(2, '0')}</span>
                    {s}
                    <span className="w-1 h-1 rounded-full bg-border/40" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ═══════════════════ ENGAGEMENT — Current Focus + Today We Build ═══════════════════ */}
      <CurrentFocusBlock />
      <TodayWeBuild />

      {/* ═══════════════════ FEATURED PROJECTS — Magazine Strip (moved up) ═══════════════════ */}
      <section ref={featuredSection.ref} className={`pt-8 pb-16 md:pt-12 md:pb-20 px-4 section-gradient-cool scroll-fade-in ${featuredSection.isVisible ? 'visible' : ''}`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
            <div className="space-y-3">
              <Badge variant="secondary" className="text-xs tracking-wide uppercase">{t('featured.badge')}</Badge>
              <h2 ref={featuredHeading.ref} className={`text-3xl md:text-5xl font-bold tracking-tight text-foreground animate-heading-reveal ${featuredHeading.isVisible ? 'visible' : ''}`}>
                {t('featured.title')}
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl font-light">
                {t('featured.subtitle')}
              </p>
            </div>
            <Link to="/projects" className="shrink-0">
              <Button variant="ghost" className="group text-muted-foreground hover:text-brand-gold transition-colors duration-300">
                {t('featured.viewAll')}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:text-brand-blue transition-all" />
              </Button>
            </Link>
          </div>

          {featuredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredProjects.map((project, index) => (
                <Link key={project.id} to={`/projects/${project.slug}`} className="group block">
                  <div className="relative overflow-hidden rounded-2xl bg-card border border-border/40 hover:border-border transition-all duration-500 hover:-translate-y-1" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="relative h-56 overflow-hidden">
                      <OptimizedImage
                        src={projectImages[project.slug] || project.hero_image_url || '/placeholder.svg'}
                        alt={`${project.title} - ${project.category}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-out"
                        containerClassName="w-full h-full"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                        <Badge className={`${getStatusColor(project.status)} text-[10px]`}>
                          {project.status.replace('_', ' ')}
                        </Badge>
                        <span className="text-xs text-foreground/70 font-medium bg-background/60 backdrop-blur-sm px-2 py-0.5 rounded-full">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-5 space-y-3">
                      <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                        {project.short_description}
                      </p>
                      <div className="flex items-center text-xs text-muted-foreground group-hover:text-primary transition-colors pt-1">
                        <span>{t('featured.viewDetails')}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-6">{t('featured.noProjects')}</p>
              <Link to="/projects">
                <Button size="lg" className="btn-brand-outline-gold">{t('featured.viewAll')} <ArrowRight className="ml-2 h-5 w-5" /></Button>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* ═══════════════════ ECOSYSTEM VISION — Editorial ═══════════════════ */}
      <section ref={biomathVisionSection.ref} className={`py-20 md:py-28 px-4 section-gradient-warm scroll-fade-in ${biomathVisionSection.isVisible ? 'visible' : ''}`}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
            {/* Left label */}
            <div className="md:col-span-4 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/8 border border-primary/15 text-xs font-medium text-primary tracking-wide uppercase">
                <EcosystemCoreIcon className="text-primary" size={14} />
                {t('ecosystem.badge')}
              </div>
              <h2 ref={biomathVisionHeading.ref} className={`text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight animate-heading-reveal ${biomathVisionHeading.isVisible ? 'visible' : ''}`}>
                {t('ecosystem.title')}
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                {t('ecosystem.subtitle')} <span className="text-primary font-semibold">{t('ecosystem.beginning')}</span>
              </p>

              {/* Core Hub CTA */}
              <Link to="/projects/biomathcore" className="group inline-flex items-center gap-3 mt-4 p-4 rounded-xl border border-brand-gold/20 bg-card/50 hover:bg-card hover:border-brand-gold/50 transition-all duration-300 shadow-brand-gold-hover">
                <div className="shrink-0 p-2.5 bg-gradient-to-br from-[#D4A24C]/15 to-[#1E73E8]/15 rounded-lg">
                  <EcosystemCoreIcon className="text-brand-gold" size={24} />
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-bold text-foreground group-hover:text-brand-gold transition-colors">{t('ecosystem.coreTitle')}</div>
                  <div className="text-xs text-muted-foreground"><span className="text-brand-blue font-semibold">{t('ecosystem.coreServices')}</span> · {t('ecosystem.coreActive')}</div>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-brand-gold group-hover:translate-x-1 transition-all shrink-0" />
              </Link>
            </div>

            {/* Right — 2x2 bento */}
            <div className="md:col-span-8 grid grid-cols-2 gap-3">
              {[
                { 
                  title: t('ecosystem.dailyHealth'), desc: t('ecosystem.dailyHealthDesc'),
                  icon: <DailyPulseIcon size={22} />, color: "text-emerald-500", glow: "shadow-emerald-500/10", gradient: "from-emerald-500/8 to-transparent"
                },
                { 
                  title: t('ecosystem.unifiedData'), desc: t('ecosystem.unifiedDataDesc'),
                  icon: <DataStreamIcon size={22} />, color: "text-blue-500", glow: "shadow-blue-500/10", gradient: "from-blue-500/8 to-transparent"
                },
                { 
                  title: t('ecosystem.selfImproving'), desc: t('ecosystem.selfImprovingDesc'),
                  icon: <AILoopIcon size={22} />, color: "text-amber-500", glow: "shadow-amber-500/10", gradient: "from-amber-500/8 to-transparent"
                },
                { 
                  title: t('ecosystem.crossSynergy'), desc: t('ecosystem.crossSynergyDesc'),
                  icon: <SynergyOrbitIcon size={22} />, color: "text-violet-500", glow: "shadow-violet-500/10", gradient: "from-violet-500/8 to-transparent"
                }
              ].map((node, i) => (
                <div key={i} className={`group relative bg-card/60 border border-border/40 rounded-xl p-5 md:p-6 hover:bg-card hover:border-border/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${node.glow} overflow-hidden`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${node.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="relative">
                    <div className={`mb-3 ${node.color} group-hover:scale-110 transition-transform duration-300`}>{node.icon}</div>
                    <h3 className="text-sm font-bold text-foreground mb-1.5">{node.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{node.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* ═══════════════════ WHAT WE BUILD — Asymmetric Bento ═══════════════════ */}
      <section ref={whatWeBuildSection.ref} className={`py-20 md:py-28 px-4 section-gradient-mint scroll-slide-up ${whatWeBuildSection.isVisible ? 'visible' : ''}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14 space-y-3">
            <h2 ref={whatWeBuildHeading.ref} className={`text-3xl md:text-5xl font-bold tracking-tight text-foreground animate-heading-reveal ${whatWeBuildHeading.isVisible ? 'visible' : ''}`}>
              {t('whatWeBuild.title')}
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto font-light">
              {t('whatWeBuild.subtitle2')}
            </p>
          </div>
          
          {/* Bento grid: 2 large + 2 small */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Large card — Health */}
            <div className="group relative overflow-hidden rounded-2xl border border-border/40 bg-card/60 p-8 md:p-10 hover:bg-card hover:border-border/80 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 min-h-[200px] flex flex-col justify-end">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-6 right-6 opacity-60 group-hover:opacity-90 group-hover:scale-110 transition-all duration-300">
                <HealthDNAIcon className="text-primary" size={48} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2 relative">{t('whatWeBuild.healthTitle')}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-sm relative">{t('whatWeBuild.healthDesc')}</p>
            </div>

            {/* Large card — Agro */}
            <div className="group relative overflow-hidden rounded-2xl border border-border/40 bg-card/60 p-8 md:p-10 hover:bg-card hover:border-border/80 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 min-h-[200px] flex flex-col justify-end">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-6 right-6 opacity-60 group-hover:opacity-90 group-hover:scale-110 transition-all duration-300">
                <AgroDataIcon className="text-primary" size={48} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2 relative">{t('whatWeBuild.agroTitle')}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-sm relative">{t('whatWeBuild.agroDesc')}</p>
            </div>

            {/* Small card — Food */}
            <div className="group relative overflow-hidden rounded-2xl border border-border/40 bg-card/60 p-6 md:p-8 hover:bg-card hover:border-border/80 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-500 flex items-center gap-6">
              <div className="absolute inset-0 bg-gradient-to-r from-rose-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="shrink-0 opacity-60 group-hover:opacity-90 group-hover:scale-110 transition-all duration-300">
                <FoodMolecularIcon className="text-primary" size={40} />
              </div>
              <div className="relative">
                <h3 className="text-lg font-bold text-foreground mb-1">{t('whatWeBuild.foodTitle')}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t('whatWeBuild.foodDesc')}</p>
              </div>
            </div>

            {/* Small card — Infrastructure */}
            <div className="group relative overflow-hidden rounded-2xl border border-border/40 bg-card/60 p-6 md:p-8 hover:bg-card hover:border-border/80 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-500 flex items-center gap-6">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="shrink-0 opacity-60 group-hover:opacity-90 group-hover:scale-110 transition-all duration-300">
                <InfraHubIcon className="text-primary" size={40} />
              </div>
              <div className="relative">
                <h3 className="text-lg font-bold text-foreground mb-1">{t('whatWeBuild.infraTitle')}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t('whatWeBuild.infraDesc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ ROI CALCULATOR ═══════════════════ */}
      <section className="py-20 md:py-28 px-4 section-gradient-teal">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14 space-y-3">
            <h2 ref={calculatorHeading.ref} className={`text-3xl md:text-5xl font-bold tracking-tight text-foreground animate-heading-reveal ${calculatorHeading.isVisible ? 'visible' : ''}`}>
              {t('calculator.title')}
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto font-light">
              {t('calculator.subtitle')}
            </p>
            <p className="text-xs text-muted-foreground/70">{t('calculator.disclaimer')}</p>
          </div>
          <ROICalculator />
        </div>
      </section>

      {/* ═══════════════════ WHY DIGITAL INVEST — Horizontal Cards ═══════════════════ */}
      <section ref={whyDigitalSection.ref} className={`py-20 md:py-28 px-4 section-gradient-lavender scroll-scale-in ${whyDigitalSection.isVisible ? 'visible' : ''}`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">
            {/* Left sticky heading */}
            <div className="md:w-1/3 md:sticky md:top-32 space-y-4">
              <h2 ref={whyDigitalHeading.ref} className={`text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight animate-heading-reveal ${whyDigitalHeading.isVisible ? 'visible' : ''}`}>
                {t('whyDigitalInvest.heroTitle')}
              </h2>
              <div className="w-12 h-0.5 bg-primary/40" />
            </div>

            {/* Right — stacked items */}
            <div className="md:w-2/3 space-y-4">
              {[
                { icon: <Building2 className="w-5 h-5" />, text: "Five independent proprietary projects", num: "01" },
                { icon: <BarChart3 className="w-5 h-5" />, text: "Three high-growth industries: HealthTech, AgroTech, FoodTech", num: "02" },
                { icon: <Award className="w-5 h-5" />, text: "20+ years of operational and entrepreneurial experience", num: "03" },
                { icon: <CheckCircle2 className="w-5 h-5" />, text: "Real platforms, not just concepts or slideware", num: "04" },
                { icon: <Shield className="w-5 h-5" />, text: "Fully U.S.-based development and operations", num: "05" },
                { icon: <Target className="w-5 h-5" />, text: "Long-term strategy across real-economy and AI-driven sectors", num: "06" }
              ].map((item, i) => (
                <div key={i} className="group flex items-start gap-5 p-5 rounded-xl border border-border/20 hover:border-border/60 bg-card/30 hover:bg-card/70 hover:shadow-md transition-all duration-300 hover:-translate-x-1">
                  <span className="text-xs font-mono text-primary/40 mt-1 shrink-0 group-hover:text-primary/70 transition-colors">{item.num}</span>
                  <div className="text-primary/60 mt-0.5 shrink-0 group-hover:text-primary group-hover:scale-110 transition-all duration-300">{item.icon}</div>
                  <p className="text-base md:text-lg text-foreground font-medium leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ LIVE NUMBERS ═══════════════════ */}
      <LiveNumbers />

      {/* ═══════════════════ INVESTMENT HIGHLIGHTS — Large Number Grid ═══════════════════ */}
      <section ref={investmentSection.ref} className={`py-20 md:py-28 px-4 section-gradient-gold scroll-fade-in ${investmentSection.isVisible ? 'visible' : ''}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14 space-y-3">
            <h2 ref={investmentHeading.ref} className={`text-3xl md:text-5xl font-bold tracking-tight text-foreground animate-heading-reveal ${investmentHeading.isVisible ? 'visible' : ''}`}>
              {t('investmentHighlights.title')}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 rounded-2xl overflow-hidden">
            {[
              { title: "Real projects", description: "Structured, operational, and designed to scale over time.", icon: <CheckCircle2 className="w-6 h-6" />, gradient: "from-emerald-500/8" },
              { title: "Clear economics", description: "Each platform has a defined business model and unit logic.", icon: <LineChart className="w-6 h-6" />, gradient: "from-blue-500/8" },
              { title: "Shared infrastructure", description: "Core AI, backend, analytics, and manufacturing work across the portfolio.", icon: <Network className="w-6 h-6" />, gradient: "from-violet-500/8" },
              { title: "Multi-sector diversification", description: "Exposure to HealthTech, AgroTech, FoodTech, and infrastructure.", icon: <Target className="w-6 h-6" />, gradient: "from-amber-500/8" },
              { title: "Defined roadmaps", description: "Every project has a phased, realistic roadmap instead of vague promises.", icon: <FileText className="w-6 h-6" />, gradient: "from-teal-500/8" },
              { title: "Private and individual", description: "No public offering. All potential participation is discussed individually.", icon: <Lock className="w-6 h-6" />, gradient: "from-rose-500/8" }
            ].map((h, i) => (
              <div key={i} className="group relative bg-card/60 border border-border/30 rounded-xl p-7 md:p-8 space-y-3 hover:bg-card hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${h.gradient} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative text-primary/60 group-hover:text-primary/80 group-hover:scale-110 transition-all duration-300 origin-left">{h.icon}</div>
                <h3 className="relative text-lg font-bold text-foreground">{h.title}</h3>
                <p className="relative text-sm text-muted-foreground leading-relaxed">{h.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ CAPABILITIES — Minimal ═══════════════════ */}
      <section ref={capabilitiesSection.ref} className={`py-20 md:py-28 px-4 section-gradient-rose scroll-slide-up ${capabilitiesSection.isVisible ? 'visible' : ''}`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14 space-y-3">
            <h2 ref={capabilitiesHeading.ref} className={`text-3xl md:text-4xl font-bold tracking-tight text-foreground animate-heading-reveal ${capabilitiesHeading.isVisible ? 'visible' : ''}`}>
              {t('capabilities.title')}
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto font-light">{t('capabilities.subtitle')}</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Lightbulb className="w-8 h-8" />, title: t('capabilities.item1Title'), desc: t('capabilities.item1Desc'), gradient: "from-amber-500/8" },
              { icon: <Building2 className="w-8 h-8" />, title: t('capabilities.item2Title'), desc: t('capabilities.item2Desc'), gradient: "from-blue-500/8" },
              { icon: <Target className="w-8 h-8" />, title: t('capabilities.item3Title'), desc: t('capabilities.item3Desc'), gradient: "from-emerald-500/8" },
              { icon: <Award className="w-8 h-8" />, title: t('capabilities.item4Title'), desc: t('capabilities.item4Desc'), gradient: "from-violet-500/8" }
            ].map((cap, i) => (
              <div key={i} className="group relative text-center space-y-3 p-6 rounded-xl border border-border/30 bg-card/40 hover:bg-card hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-b ${cap.gradient} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative inline-flex p-3 rounded-xl bg-muted/50 text-primary/60 group-hover:text-primary group-hover:scale-110 transition-all duration-300">{cap.icon}</div>
                <h3 className="relative text-base font-bold text-foreground">{cap.title}</h3>
                <p className="relative text-sm text-muted-foreground leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ JOURNEY — Horizontal Timeline ═══════════════════ */}
      <section ref={journeySection.ref} className={`py-20 md:py-28 px-4 section-gradient-slate scroll-fade-in ${journeySection.isVisible ? 'visible' : ''}`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14 space-y-3">
            <h2 ref={journeyHeading.ref} className={`text-3xl md:text-4xl font-bold tracking-tight text-foreground animate-heading-reveal ${journeyHeading.isVisible ? 'visible' : ''}`}>
              {t('journey.title')}
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto font-light">{t('journey.subtitle')}</p>
          </div>
          
          {/* Timeline */}
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-border" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-4">
              {[
                { step: "1", title: t('journey.step1Title'), desc: t('journey.step1Desc'), icon: <Search className="w-4 h-4" /> },
                { step: "2", title: t('journey.step2Title'), desc: t('journey.step2Desc'), icon: <Mail className="w-4 h-4" /> },
                { step: "3", title: t('journey.step3Title'), desc: t('journey.step3Desc'), icon: <Users className="w-4 h-4" /> },
                { step: "4", title: t('journey.step4Title'), desc: t('journey.step4Desc'), icon: <Search className="w-4 h-4" /> },
                { step: "5", title: t('journey.step5Title'), desc: t('journey.step5Desc'), icon: <FileText className="w-4 h-4" /> },
                { step: "6", title: t('journey.step6Title'), desc: t('journey.step6Desc'), icon: <TrendingUp className="w-4 h-4" /> }
              ].map((item, i) => (
                <div key={i} className="group relative text-center space-y-3">
                  {/* Step dot */}
                  <div className="mx-auto w-12 h-12 rounded-full bg-card border-2 border-border flex items-center justify-center text-sm font-bold text-primary relative z-10 group-hover:border-primary/50 group-hover:shadow-md group-hover:shadow-primary/10 group-hover:scale-110 transition-all duration-300">
                    {item.step}
                  </div>
                  <h3 className="text-sm font-bold text-foreground leading-tight group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ WEEKLY INSIGHT ═══════════════════ */}
      <WeeklyInsight />

      {/* ═══════════════════ FAQ — Clean ═══════════════════ */}
      <section ref={faqSection.ref} className={`py-20 md:py-28 px-4 section-gradient-cool scroll-fade-in ${faqSection.isVisible ? 'visible' : ''}`}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <h2 ref={faqHeading.ref} className={`text-3xl md:text-4xl font-bold tracking-tight text-foreground animate-heading-reveal ${faqHeading.isVisible ? 'visible' : ''}`}>
              {t('indexFaq.title')}
            </h2>
          </div>
          
          <Accordion type="single" collapsible className="space-y-2">
            {[1,2,3,4,5,6].map((i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b border-border/30 px-0">
                <AccordionTrigger className="text-base font-medium text-foreground hover:text-primary py-5">
                  {t(`indexFaq.q${i}`)}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                  {t(`indexFaq.a${i}`)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ═══════════════════ CURRENT ACTIVITY STRIP ═══════════════════ */}
      <ActivityStrip />

      {/* ═══════════════════ CTA — Full-width Dramatic ═══════════════════ */}
      <section className="py-20 md:py-28 px-4 section-gradient-warm">
        <div className="max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl border border-brand-gold/20 bg-card/50 p-10 md:p-16 text-center gradient-brand-bg-soft">
            {/* Decorative gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#D4A24C]/[0.05] via-transparent to-[#1E73E8]/[0.06]" />
            
            <div className="relative z-10 space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight gradient-brand-animated">
                Partner With Us
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
                Explore <span className="text-brand-gold font-medium">investment opportunities</span> in our innovative biotechnology projects. 
                Contact our team to learn more about <span className="text-brand-blue font-medium">strategic partnerships</span>.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link to="/start-investing">
                  <Button size="lg" className="px-10 py-6 text-base group btn-brand-gold shadow-brand-gold">
                    Investment Information
                    <ArrowUpRight className="ml-2 h-5 w-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Button>
                </Link>
                <Link to="/team">
                  <Button size="lg" className="px-10 py-6 text-base group btn-brand-outline-blue">
                    Leadership Team
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
              
              <div className="flex flex-wrap justify-center gap-8 pt-10">
                {[
                  { icon: <ShieldCircuitIcon className="text-brand-gold" size={16} />, text: "Regulatory Compliant" },
                  { icon: <Lock className="w-4 h-4 text-brand-blue" />, text: "Secure Platform" },
                  { icon: <GrowthArrowIcon className="text-brand-gold" size={16} />, text: "Industry Certified" },
                  { icon: <CheckCircle2 className="w-4 h-4 text-brand-blue" />, text: "Verified Projects" }
                ].map((b, i) => (
                  <div key={i} className="flex items-center gap-2 text-muted-foreground/70">
                    {b.icon}
                    <span className="text-xs font-medium">{b.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Overview CTA */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Link to="/overview">
            <Button variant="ghost" className="gap-2 text-sm text-muted-foreground hover:text-brand-gold group transition-colors duration-300">
              <Layers className="w-4 h-4 group-hover:text-brand-blue transition-colors" />
              {t('footer.overview', 'Portfolio Overview')}
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:text-brand-blue transition-all" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-10 px-4 border-t border-border/30">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-start gap-4 p-6">
            <ShieldCircuitIcon className="text-muted-foreground/50" size={20} />
            <div className="space-y-1.5">
              <h3 className="text-sm font-semibold text-foreground">{t('disclaimerSection.title')}</h3>
              <p className="text-xs text-muted-foreground/70 leading-relaxed">{t('disclaimerSection.text')}</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
