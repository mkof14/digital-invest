import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { adamasProjects } from './adamasProjects';
import * as LucideIcons from 'lucide-react';
import { ArrowRight } from 'lucide-react';
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

// Per-project card layout: 'featured' = large, 'standard' = normal, 'wide' = spans 2 cols
const cardLayouts: Record<string, 'featured' | 'wide' | 'standard'> = {
  'adamas-materials': 'featured',
  'innovation-diamonds': 'featured',
  'jatual-diamonds': 'wide',
  'agron-net': 'wide',
  'it-marketing-group': 'wide',
};

const AdamasMaterialsOverview = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="max-w-6xl mx-auto px-4 relative z-10 text-center">
          <img src={adamasLogo} alt="Adamas Materials" className="h-24 md:h-32 mx-auto mb-6 drop-shadow-lg" />
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary border border-primary/20 mb-6">
            {t('adamas.badge', 'Adamas Materials Projects')}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-foreground mb-6">
            {t('adamas.heroTitle', 'Adamas Materials')}
            <span className="block text-primary font-medium mt-2">
              {t('adamas.heroHighlight', 'Project Portfolio')}
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
            {t('adamas.heroSubtitle', 'A diversified collection of projects spanning diamond industry, robotics, e-commerce, digital assets, and advanced veterinary technology.')}
          </p>
        </div>
      </section>

      {/* Projects Grid — custom layout per project */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {adamasProjects.map((project) => {
              const IconComponent = (LucideIcons as any)[project.icon] || LucideIcons.Briefcase;
              const layout = cardLayouts[project.slug] || 'standard';
              const heroImg = cardHeroImages[project.slug];
              const isFeatured = layout === 'featured';
              const isWide = layout === 'wide';

              return (
                <Link
                  key={project.slug}
                  to={`/adamas/${project.slug}`}
                  className={`group relative rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl ${
                    isFeatured ? 'md:col-span-2 min-h-[320px]' : isWide ? 'md:col-span-2 min-h-[220px]' : 'min-h-[260px]'
                  }`}
                >
                  {/* Background image */}
                  {heroImg && (
                    <div className="absolute inset-0">
                      <img
                        src={heroImg}
                        alt=""
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  )}

                  {/* Overlay — unique gradient per project using accent */}
                  <div
                    className="absolute inset-0 transition-opacity duration-500"
                    style={{
                      background: heroImg
                        ? `linear-gradient(135deg, hsl(${project.accentHsl} / 0.85) 0%, hsl(${project.accentHsl} / 0.6) 40%, rgba(0,0,0,0.7) 100%)`
                        : `linear-gradient(135deg, hsl(${project.accentHsl} / 0.15) 0%, hsl(${project.accentHsl} / 0.05) 100%)`,
                    }}
                  />

                  {/* Content */}
                  <div className={`relative z-10 p-6 md:p-8 flex flex-col justify-end h-full ${heroImg ? 'text-white' : 'text-foreground'}`}>
                    {/* Icon + Category */}
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center backdrop-blur-md"
                        style={{
                          background: heroImg ? 'rgba(255,255,255,0.15)' : `hsl(${project.accentHsl} / 0.12)`,
                        }}
                      >
                        <IconComponent
                          className="w-5 h-5"
                          style={{ color: heroImg ? '#fff' : `hsl(${project.accentHsl})` }}
                        />
                      </div>
                      <span
                        className="text-[10px] font-semibold uppercase tracking-widest px-2.5 py-0.5 rounded-full backdrop-blur-sm"
                        style={{
                          color: heroImg ? '#fff' : `hsl(${project.accentHsl})`,
                          background: heroImg ? 'rgba(255,255,255,0.15)' : `hsl(${project.accentHsl} / 0.08)`,
                        }}
                      >
                        {t(project.categoryKey, project.category)}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className={`font-semibold mb-2 tracking-tight ${isFeatured ? 'text-2xl md:text-3xl' : 'text-lg md:text-xl'}`}>
                      {t(project.titleKey)}
                    </h3>

                    {/* Description */}
                    <p className={`leading-relaxed mb-4 ${heroImg ? 'text-white/80' : 'text-muted-foreground'} ${isFeatured ? 'text-sm md:text-base max-w-2xl' : 'text-sm line-clamp-3'}`}>
                      {t(project.descriptionKey)}
                    </p>

                    {/* CTA */}
                    <div className={`flex items-center gap-1.5 text-sm font-medium ${heroImg ? 'text-white' : 'text-primary'} opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300`}>
                      {t('adamas.viewProject', 'View Project')}
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="rounded-xl border border-border/30 bg-muted/30 p-6">
            <p className="text-xs text-muted-foreground/80 leading-relaxed">
              <span className="font-medium text-muted-foreground">{t('adamas.disclaimer.title', 'Important Notice:')}</span>{' '}
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
