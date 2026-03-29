import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { adamasProjects } from './adamasProjects';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import OptimizedImage from '@/components/OptimizedImage';

// Per-project hero images
import originDiamondHero from '@/assets/adamas/origin-diamond-hero.jpg';
import jatualHero from '@/assets/adamas/jatual-diamonds-hero.jpg';
import innovationHero from '@/assets/adamas/innovation-diamonds-hero.jpg';
import adamasMaterialsHero from '@/assets/adamas/adamas-materials-hero.jpg';
import abuMallHero from '@/assets/adamas/abu-mall-hero.jpg';
import almaDiamondHero from '@/assets/adamas/alma-diamond-hero.jpg';
import jewelryDropshippingHero from '@/assets/adamas/jewelry-dropshipping-hero.jpg';
import coinsTokensHero from '@/assets/adamas/coins-tokens-hero.jpg';
import itMarketingHero from '@/assets/adamas/it-marketing-hero.jpg';
import animalVetHero from '@/assets/adamas/animal-vet-hero.jpg';
import agronNetHero from '@/assets/adamas/agron-net-hero.jpg';
import agronWorkHero from '@/assets/adamas/agron-work-hero.jpg';

const projectHeroImages: Record<string, string> = {
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

const AdamasProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useTranslation();

  const project = adamasProjects.find(p => p.slug === slug);
  const projectIndex = adamasProjects.findIndex(p => p.slug === slug);
  const prevProject = projectIndex > 0 ? adamasProjects[projectIndex - 1] : null;
  const nextProject = projectIndex < adamasProjects.length - 1 ? adamasProjects[projectIndex + 1] : null;

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-foreground mb-4">{t('common.noResults', 'Project not found')}</h1>
            <Link to="/adamas" className="text-primary hover:underline">{t('adamas.backToProjects', 'Back to Adamas Projects')}</Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const hasHero = !!projectHeroImages[project.slug];

  return (
    <div className="min-h-screen bg-[hsl(220,16%,92%)] dark:bg-background">
      <Navigation />

      {/* Hero Image — always dark overlay for readability */}
      {hasHero && (
        <section className="relative h-[55vh] min-h-[420px] overflow-hidden">
          <OptimizedImage
            src={projectHeroImages[project.slug]}
            alt={t(project.titleKey)}
            containerClassName="absolute inset-0 w-full h-full"
            className="w-full h-full object-cover"
            showSkeleton={false}
          />
          {/* Dark cinematic gradient — works in both themes */}
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(8,10,18,0.95)] via-[rgba(8,10,18,0.4)] to-[rgba(8,10,18,0.2)]" />

          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <div className="max-w-5xl mx-auto">
              <Link
                to="/adamas"
                className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors mb-5 group"
              >
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                {t('adamas.backToProjects', 'Back to Adamas Projects')}
              </Link>

              <div className="flex items-center gap-3 mb-3">
                <span
                  className="inline-block text-[10px] font-medium uppercase tracking-[0.2em] px-3 py-1 rounded border backdrop-blur-md"
                  style={{
                    color: `hsl(${project.accentHsl})`,
                    background: `hsl(${project.accentHsl} / 0.12)`,
                    borderColor: `hsl(${project.accentHsl} / 0.25)`,
                  }}
                >
                  {t(project.categoryKey, project.category)}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white">
                {t(project.titleKey)}
              </h1>
            </div>
          </div>
        </section>
      )}

      {/* Hero fallback (no image) */}
      {!hasHero && (
        <section className="relative pt-28 pb-16 overflow-hidden bg-[hsl(220,16%,88%)] dark:bg-[hsl(220,20%,8%)]">
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{ background: `radial-gradient(ellipse at 30% 50%, hsl(${project.accentHsl}), transparent 70%)` }}
          />
          <div className="max-w-5xl mx-auto px-4 relative z-10">
            <Link
              to="/adamas"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              {t('adamas.backToProjects', 'Back to Adamas Projects')}
            </Link>

            <div className="mb-4">
              <span
                className="inline-block text-[10px] font-medium uppercase tracking-[0.2em] px-3 py-1 rounded border"
                style={{
                  color: `hsl(${project.accentHsl})`,
                  background: `hsl(${project.accentHsl} / 0.08)`,
                  borderColor: `hsl(${project.accentHsl} / 0.2)`,
                }}
              >
                {t(project.categoryKey, project.category)}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground mb-6">
              {t(project.titleKey)}
            </h1>

            <p className="text-base text-foreground/60 leading-relaxed max-w-3xl">
              {t(project.descriptionKey)}
            </p>
          </div>
        </section>
      )}

      {/* Description (below hero image) */}
      {hasHero && (
        <section className="pt-10 pb-6">
          <div className="max-w-5xl mx-auto px-4">
            <p className="text-base text-foreground/70 dark:text-foreground/60 leading-relaxed max-w-3xl">
              {t(project.descriptionKey)}
            </p>
          </div>
        </section>
      )}

      {/* Long Description */}
      <section className="pb-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="rounded-2xl border border-border/50 dark:border-border/30 bg-white/60 dark:bg-card/40 backdrop-blur-sm p-8 md:p-12 shadow-sm">
            <h2 className="text-xl font-semibold text-foreground mb-6">{t('adamas.overview', 'Project Overview')}</h2>
            <div className="prose prose-sm dark:prose-invert max-w-none text-foreground/70 dark:text-muted-foreground leading-relaxed whitespace-pre-line">
              {t(project.longDescriptionKey)}
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="pb-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { key: 'adamas.highlight1', fallback: 'Privately Operated' },
              { key: 'adamas.highlight2', fallback: 'Strategic Partnerships' },
              { key: 'adamas.highlight3', fallback: 'Long-Term Vision' },
            ].map((h, i) => (
              <div
                key={i}
                className="rounded-xl border border-border/50 dark:border-border/30 bg-white/50 dark:bg-muted/20 p-5 shadow-sm"
              >
                <div
                  className="w-8 h-[2px] rounded-full mb-3"
                  style={{ background: `hsl(${project.accentHsl})` }}
                />
                <span className="text-sm font-medium text-foreground">{t(h.key, h.fallback)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation between projects */}
      <section className="pb-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="h-px bg-gradient-to-r from-transparent via-border/50 to-transparent mb-8" />
          <div className="flex justify-between items-center">
            {prevProject ? (
              <Link
                to={`/adamas/${prevProject.slug}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-foreground/60 hover:text-foreground transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                {t(prevProject.titleKey)}
              </Link>
            ) : <div />}
            {nextProject ? (
              <Link
                to={`/adamas/${nextProject.slug}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-foreground/60 hover:text-foreground transition-colors group"
              >
                {t(nextProject.titleKey)}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            ) : <div />}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="rounded-xl border border-border/40 dark:border-border/30 bg-white/40 dark:bg-muted/30 p-6">
            <p className="text-xs text-foreground/50 dark:text-muted-foreground/80 leading-relaxed">
              <span className="font-medium text-foreground/70 dark:text-muted-foreground">{t('adamas.disclaimer.title', 'Important Notice:')}</span>{' '}
              {t('adamas.disclaimer.text', 'This section is for informational purposes only. Adamas Materials Projects are presented separately and do not constitute a public offering or solicitation. All potential participation is private and handled offline through proper legal channels.')}
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AdamasProjectDetail;
