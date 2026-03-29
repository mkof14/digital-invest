import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect, useRef, useState, useCallback, type MouseEvent as ReactMouseEvent } from 'react';
import { updateMetaTags } from '@/lib/metaTags';
import { injectStructuredData, removeStructuredData } from '@/lib/structuredData';
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
      { threshold: 0.08, rootMargin: '0px 0px -60px 0px' }
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
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const layout = cardLayouts[project.slug] || 'standard';
  const heroImg = cardHeroImages[project.slug];
  const isFeatured = layout === 'featured';
  const isWide = layout === 'wide';

  const handleMouseMove = useCallback((e: ReactMouseEvent<HTMLAnchorElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setTilt({
      x: (y - 0.5) * -12,
      y: (x - 0.5) * 12,
    });
    setGlare({ x: x * 100, y: y * 100 });
  }, []);

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
    setGlare({ x: 50, y: 50 });
  }, []);

  return (
    <Link
      ref={ref}
      key={project.slug}
      to={`/adamas/${project.slug}`}
      className={`group relative rounded-2xl overflow-hidden ${
        isFeatured ? 'md:col-span-2 min-h-[340px]' : isWide ? 'md:col-span-2 min-h-[240px]' : 'min-h-[280px]'
      }`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${isHovered ? 1.02 : 1})`
          : 'translateY(40px) scale(0.96)',
        transition: isHovered
          ? 'transform 0.15s ease-out, opacity 0.8s cubic-bezier(0.16,1,0.3,1), box-shadow 0.3s ease'
          : `transform 0.5s cubic-bezier(0.16,1,0.3,1) ${(index % 4) * 120}ms, opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${(index % 4) * 120}ms, box-shadow 0.5s ease`,
        boxShadow: isHovered
          ? '0 25px 60px -12px rgba(0,0,0,0.4), 0 12px 28px -8px rgba(0,0,0,0.25)'
          : '0 4px 24px -4px rgba(0,0,0,0.25), 0 0 1px rgba(0,0,0,0.1)',
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
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

      {/* Dark cinematic overlay */}
      <div
        className="absolute inset-0 transition-all duration-500"
        style={{
          background: heroImg
            ? `linear-gradient(160deg, rgba(10,10,15,0.88) 0%, hsl(${project.accentHsl} / 0.25) 50%, rgba(5,5,10,0.92) 100%)`
            : `linear-gradient(160deg, hsl(var(--card)) 0%, hsl(${project.accentHsl} / 0.06) 100%)`,
        }}
      />

      {/* 3D glare / light reflection */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          opacity: isHovered ? 0.12 : 0,
          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.5) 0%, transparent 60%)`,
        }}
      />

      {/* Accent line at top */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] opacity-60 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `linear-gradient(90deg, transparent, hsl(${project.accentHsl} / 0.6), transparent)` }}
      />

      {/* Content */}
      <div
        className={`relative z-10 p-6 md:p-8 flex flex-col justify-end h-full ${heroImg ? 'text-white' : 'text-foreground'}`}
        style={{ transform: 'translateZ(20px)' }}
      >
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

        {/* CTA */}
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

    updateMetaTags({
      title: 'Adamas Materials — Project Portfolio | Diamond Industry, Robotics & Digital Assets',
      description: 'Adamas Materials is a diversified project portfolio spanning the diamond industry, robotics, e-commerce, digital assets, and advanced veterinary technology. 12 projects across 7+ sectors in 40+ countries.',
      ogTitle: 'Adamas Materials — Project Portfolio',
      ogDescription: 'Diversified portfolio of 12 projects across diamond industry, robotics, e-commerce, digital assets, and veterinary technology. Operating in 40+ countries.',
      ogImage: 'https://digital-invest.lovable.app/adamas-og-image.jpg',
      ogType: 'website',
      canonicalUrl: 'https://digitalinvest.com/adamas',
    });

    // Organization JSON-LD
    injectStructuredData({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Adamas Materials",
      "url": "https://digitalinvest.com/adamas",
      "logo": "https://digital-invest.lovable.app/adamas-og-image.jpg",
      "description": "Diversified project portfolio spanning the diamond industry, robotics, e-commerce, digital assets, and advanced veterinary technology.",
      "numberOfEmployees": { "@type": "QuantitativeValue", "value": "200+" },
      "areaServed": "Worldwide",
      "knowsAbout": ["Diamond Industry", "Robotics", "E-Commerce", "Digital Assets", "Veterinary Technology"]
    }, 'adamas-org-schema');

    // ItemList JSON-LD for project portfolio
    injectStructuredData({
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Adamas Materials Project Portfolio",
      "numberOfItems": adamasProjects.length,
      "itemListElement": adamasProjects.map((p, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "name": p.titleKey.split('.').pop(),
        "url": `https://digitalinvest.com/adamas/${p.slug}`,
      }))
    }, 'adamas-list-schema');

    return () => {
      clearTimeout(timer);
      removeStructuredData('adamas-org-schema');
      removeStructuredData('adamas-list-schema');
    };
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
      <AdamasNavigation />

      {/* Hero — cinematic dark section */}
      <section
        ref={heroRef}
        className="relative pt-20 pb-28 overflow-hidden bg-[hsl(220,20%,8%)] dark:bg-[hsl(220,20%,6%)]"
        onMouseMove={handleMouseMove}
      >
        {/* Animated ambient glows */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full blur-[120px] opacity-20"
            style={{
              background: 'radial-gradient(circle, hsl(45, 80%, 55%), transparent 70%)',
              transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)`,
              transition: 'transform 0.6s ease-out',
            }}
          />
          <div
            className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-[100px] opacity-15"
            style={{
              background: 'radial-gradient(circle, hsl(200, 60%, 50%), transparent 70%)',
              transform: `translate(${mousePos.x * -0.3}px, ${mousePos.y * -0.3}px)`,
              transition: 'transform 0.6s ease-out',
            }}
          />
          {/* Decorative lines */}
          <div className="absolute top-16 left-[8%] w-px h-48 bg-gradient-to-b from-transparent via-amber-400/20 to-transparent" />
          <div className="absolute top-28 right-[12%] w-px h-36 bg-gradient-to-b from-transparent via-sky-400/15 to-transparent" />
          <div className="absolute bottom-20 left-[25%] w-24 h-px bg-gradient-to-r from-transparent via-amber-400/15 to-transparent" />
          <div className="absolute bottom-32 right-[30%] w-16 h-px bg-gradient-to-r from-transparent via-sky-400/10 to-transparent" />
        </div>

        <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
          {/* Logo — vivid, with parallax + glow */}
          <div
            className="transition-all duration-700"
            style={{
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible
                ? `translateY(0) translateX(${mousePos.x * 0.3}px) translateY(${mousePos.y * 0.3}px)`
                : 'translateY(-30px)',
            }}
          >
            <div className="relative inline-block">
              {/* Glow behind logo */}
              <div className="absolute inset-0 blur-3xl opacity-30 scale-75"
                style={{ background: 'radial-gradient(circle, hsl(45, 70%, 60%), transparent 60%)' }}
              />
              <img
                src={adamasLogo}
                alt="Adamas Materials"
                className="relative h-48 md:h-64 lg:h-72 mx-auto mb-8 brightness-125 contrast-110 drop-shadow-[0_0_40px_rgba(200,170,80,0.3)]"
              />
            </div>
          </div>

          {/* Badge */}
          <div
            className="transition-all duration-700 delay-200"
            style={{
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? 'translateY(0)' : 'translateY(20px)',
            }}
          >
            <span className="inline-block px-6 py-2 rounded-full text-[10px] font-semibold tracking-[0.3em] uppercase text-amber-300/80 border border-amber-400/20 bg-amber-400/5 backdrop-blur-sm mb-8">
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
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-3">
              {t('adamas.heroTitle', 'Adamas Materials')}
            </h1>
            <p className="text-xl md:text-2xl font-light text-white/50 mb-8 tracking-wide">
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
            <p className="max-w-2xl mx-auto text-sm md:text-base text-white/40 leading-relaxed">
              {t('adamas.heroSubtitle', 'A diversified collection of projects spanning diamond industry, robotics, e-commerce, digital assets, and advanced veterinary technology.')}
            </p>
          </div>

          {/* Separator line */}
          <div className="mt-12 mb-10 flex justify-center">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />
          </div>

          {/* Stats row */}
          <div
            className="flex justify-center gap-14 md:gap-24 transition-all duration-700 delay-700"
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
                <div className="text-3xl md:text-4xl font-bold text-white">{stat.value}</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-white/30 mt-1.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Smooth gradient transition from dark hero to page background */}
      <div className="h-32 bg-gradient-to-b from-[hsl(220,20%,8%)] via-[hsl(220,18%,14%)] to-[hsl(220,16%,90%)] dark:from-[hsl(220,20%,6%)] dark:via-[hsl(220,18%,8%)] dark:to-background" />

      {/* Projects Grid */}
      <section className="py-16 -mt-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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

      <AdamasFooter />
    </div>
  );
};

export default AdamasMaterialsOverview;
