import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect, useRef, useState, useCallback } from 'react';
import AdamasNavigation from '@/components/AdamasNavigation';
import AdamasFooter from '@/components/AdamasFooter';
import { adamasProjects } from './adamasProjects';
import adamasLogo from '@/assets/adamas/adamas-materials-logo.png';

// Hero images for card backgrounds
import adamasMaterialsHero from '@/assets/adamas/adamas-materials-hero.jpg';
import originDiamondHero from '@/assets/adamas/origin-diamond-hero.jpg';
import agronNetHero from '@/assets/adamas/agron-net-hero.jpg';
import agronWorkHero from '@/assets/adamas/agron-work-hero.jpg';
import abuMallHero from '@/assets/adamas/abu-mall-hero.jpg';
import almaDiamondHero from '@/assets/adamas/alma-diamond-hero.jpg';
import jewelryDropshippingHero from '@/assets/adamas/jewelry-dropshipping-hero.jpg';
import jatualHero from '@/assets/adamas/jatual-diamonds-hero.jpg';
import coinsTokensHero from '@/assets/adamas/coins-tokens-hero.jpg';
import innovationHero from '@/assets/adamas/innovation-diamonds-hero.jpg';
import itMarketingHero from '@/assets/adamas/it-marketing-hero.jpg';
import animalVetHero from '@/assets/adamas/animal-vet-hero.jpg';

const cardHeroImages: Record<string, string> = {
  'adamas-materials': adamasMaterialsHero,
  'origin-diamond': originDiamondHero,
  'agron-net': agronNetHero,
  'agron-work': agronWorkHero,
  'abu-mall': abuMallHero,
  'alma-diamond': almaDiamondHero,
  'jewelry-dropshipping': jewelryDropshippingHero,
  'jatual-diamonds': jatualHero,
  'coins-and-tokens': coinsTokensHero,
  'innovation-diamonds': innovationHero,
  'it-marketing-group': itMarketingHero,
  'animal-veterinary-service': animalVetHero,
};

// Layout: 'featured' = 2-col large, 'wide' = 2-col compact, 'standard' = 1-col
const cardLayouts: Record<string, 'featured' | 'wide' | 'standard'> = {
  'adamas-materials': 'featured',
  'innovation-diamonds': 'featured',
  'jatual-diamonds': 'wide',
  'agron-net': 'wide',
  'it-marketing-group': 'wide',
};

// Scroll-reveal hook for individual cards
const useCardReveal = () => {
  const ref = useRef<HTMLAnchorElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(el); } },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    obs.observe(el);
    return () => obs.unobserve(el);
  }, []);

  return { ref, visible };
};

// Individual card component to use hook properly
const ProjectCard = ({ project, index }: { project: typeof adamasProjects[0]; index: number }) => {
  const { t } = useTranslation();
  const { ref, visible } = useCardReveal();
  const layout = cardLayouts[project.slug] || 'standard';
  const heroImg = cardHeroImages[project.slug];
  const isFeatured = layout === 'featured';
  const isWide = layout === 'wide';

  return (
    <Link
      ref={ref}
      key={project.slug}
      to={`/adamas/${project.slug}`}
      className={`group relative rounded-2xl overflow-hidden transition-all duration-700 ${
        isFeatured ? 'md:col-span-2 min-h-[340px]' : isWide ? 'md:col-span-2 min-h-[240px]' : 'min-h-[280px]'
      }`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.97)',
        transitionDelay: `${(index % 4) * 100}ms`,
        boxShadow: '0 4px 20px -4px rgba(0,0,0,0.2), 0 0 1px rgba(0,0,0,0.1)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 20px 60px -10px rgba(0,0,0,0.35), 0 8px 24px -8px rgba(0,0,0,0.2)';
        e.currentTarget.style.transform = 'translateY(-4px) scale(1.01)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '0 4px 20px -4px rgba(0,0,0,0.2), 0 0 1px rgba(0,0,0,0.1)';
        e.currentTarget.style.transform = 'translateY(0) scale(1)';
      }}
    >
      {/* Background image with dark overlay */}
      {heroImg && (
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt=""
            className="w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
            loading="lazy"
          />
        </div>
      )}

      {/* Dark cinematic overlay — muted, not acid */}
      <div
        className="absolute inset-0 transition-all duration-500"
        style={{
          background: heroImg
            ? `linear-gradient(160deg, rgba(10,10,15,0.88) 0%, hsl(${project.accentHsl} / 0.25) 50%, rgba(5,5,10,0.92) 100%)`
            : `linear-gradient(160deg, hsl(var(--card)) 0%, hsl(${project.accentHsl} / 0.06) 100%)`,
        }}
      />

      {/* Subtle accent line at top */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] opacity-60 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `linear-gradient(90deg, transparent, hsl(${project.accentHsl} / 0.6), transparent)` }}
      />

      {/* Content */}
      <div className={`relative z-10 p-6 md:p-8 flex flex-col justify-end h-full ${heroImg ? 'text-white' : 'text-foreground'}`}>
        {/* Category tag */}
        <div className="mb-auto">
          <span
            className="inline-block text-[10px] font-medium uppercase tracking-[0.2em] px-3 py-1 rounded border backdrop-blur-md"
            style={{
              color: heroImg ? 'rgba(255,255,255,0.7)' : `hsl(${project.accentHsl})`,
              background: heroImg ? 'rgba(255,255,255,0.06)' : `hsl(${project.accentHsl} / 0.06)`,
              borderColor: heroImg ? 'rgba(255,255,255,0.1)' : `hsl(${project.accentHsl} / 0.15)`,
            }}
          >
            {t(project.categoryKey, project.category)}
          </span>
        </div>

        {/* Title */}
        <h3 className={`font-semibold mb-2 tracking-tight leading-tight ${isFeatured ? 'text-2xl md:text-3xl' : 'text-lg md:text-xl'}`}>
          {t(project.titleKey)}
        </h3>

        {/* Description */}
        <p className={`leading-relaxed mb-4 ${heroImg ? 'text-white/60' : 'text-muted-foreground'} ${isFeatured ? 'text-sm md:text-base max-w-2xl' : 'text-sm line-clamp-3'}`}>
          {t(project.descriptionKey)}
        </p>

        {/* CTA — minimal arrow only */}
        <div className={`flex items-center gap-2 text-xs font-medium tracking-wider uppercase ${heroImg ? 'text-white/40 group-hover:text-white/80' : 'text-muted-foreground group-hover:text-primary'} transition-all duration-500`}>
          <span className="group-hover:tracking-[0.25em] transition-all duration-500">
            {t('adamas.viewProject', 'View Project')}
          </span>
          <svg
            className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </Link>
  );
};

const AdamasMaterialsOverview = () => {
  const { t } = useTranslation();
  const heroRef = useRef<HTMLDivElement>(null);
  const [heroVisible, setHeroVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => setHeroVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 20,
    });
  }, []);

  return (
    <div className="min-h-screen bg-[hsl(220,16%,90%)] dark:bg-background">
      <Navigation />

      {/* Hero — cinematic, with parallax logo */}
      <section
        ref={heroRef}
        className="relative pt-36 pb-24 overflow-hidden"
        onMouseMove={handleMouseMove}
      >
        {/* Ambient background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(220,16%,88%)] via-[hsl(220,14%,90%)] to-[hsl(220,16%,90%)] dark:from-background dark:via-background dark:to-background" />
          {/* Subtle radial glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full opacity-[0.04] dark:opacity-[0.06] blur-3xl"
            style={{ background: 'radial-gradient(circle, hsl(var(--primary)), transparent 70%)' }}
          />
          {/* Geometric accent lines */}
          <div className="absolute top-20 left-[10%] w-px h-40 bg-gradient-to-b from-transparent via-primary/10 to-transparent" />
          <div className="absolute top-32 right-[15%] w-px h-32 bg-gradient-to-b from-transparent via-primary/8 to-transparent" />
          <div className="absolute bottom-10 left-[30%] w-20 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
        </div>

        <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
          {/* Logo — large, with parallax */}
          <div
            className="transition-all duration-700"
            style={{
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible
                ? `translateY(0) translateX(${mousePos.x * 0.3}px) translateY(${mousePos.y * 0.3}px)`
                : 'translateY(-30px)',
            }}
          >
            <img
              src={adamasLogo}
              alt="Adamas Materials"
              className="h-40 md:h-56 lg:h-64 mx-auto mb-8 drop-shadow-2xl"
            />
          </div>

          {/* Badge */}
          <div
            className="transition-all duration-700 delay-200"
            style={{
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? 'translateY(0)' : 'translateY(20px)',
            }}
          >
            <span className="inline-block px-5 py-1.5 rounded border text-[10px] font-medium tracking-[0.25em] uppercase text-muted-foreground border-border/40 bg-muted/30 backdrop-blur-sm mb-8">
              {t('adamas.badge', 'Adamas Materials Projects')}
            </span>
          </div>

          {/* Title */}
          <div
            className="transition-all duration-700 delay-300"
            style={{
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? 'translateY(0)' : 'translateY(20px)',
            }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-foreground mb-4">
              {t('adamas.heroTitle', 'Adamas Materials')}
            </h1>
            <p className="text-xl md:text-2xl font-light text-muted-foreground mb-8">
              {t('adamas.heroHighlight', 'Project Portfolio')}
            </p>
          </div>

          {/* Subtitle */}
          <div
            className="transition-all duration-700 delay-500"
            style={{
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? 'translateY(0)' : 'translateY(20px)',
            }}
          >
            <p className="max-w-2xl mx-auto text-sm md:text-base text-muted-foreground/70 leading-relaxed">
              {t('adamas.heroSubtitle', 'A diversified collection of projects spanning diamond industry, robotics, e-commerce, digital assets, and advanced veterinary technology.')}
            </p>
          </div>

          {/* Stats row */}
          <div
            className="mt-14 flex justify-center gap-12 md:gap-20 transition-all duration-700 delay-700"
            style={{
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? 'translateY(0)' : 'translateY(20px)',
            }}
          >
            {[
              { value: '12', label: t('adamas.statsProjects', 'Projects') },
              { value: '7+', label: t('adamas.statsSectors', 'Sectors') },
              { value: '40+', label: t('adamas.statsCountries', 'Countries') },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-light text-foreground">{stat.value}</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/50 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
      </div>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {adamasProjects.map((project, idx) => (
              <ProjectCard key={project.slug} project={project} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="rounded-xl border border-border/20 bg-muted/20 p-6">
            <p className="text-xs text-muted-foreground/60 leading-relaxed">
              <span className="font-medium text-muted-foreground/80">{t('adamas.disclaimer.title', 'Important Notice:')}</span>{' '}
              {t('adamas.disclaimer.text', 'This section is for informational purposes only. Adamas Materials Projects are presented separately and do not constitute a public offering or solicitation. All potential participation is private and handled offline through proper legal channels.')}
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AdamasMaterialsOverview;
