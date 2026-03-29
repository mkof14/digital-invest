import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { adamasProjects } from './adamasProjects';
import * as LucideIcons from 'lucide-react';
import { ArrowLeft, ArrowRight, Shield } from 'lucide-react';
import OptimizedImage from '@/components/OptimizedImage';

// Per-project hero images
import originDiamondHero from '@/assets/adamas/origin-diamond-hero.jpg';

const projectHeroImages: Record<string, string> = {
  'origin-diamond': originDiamondHero,
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

  const IconComponent = (LucideIcons as any)[project.icon] || LucideIcons.Briefcase;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-28 pb-16 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{ background: `radial-gradient(ellipse at 30% 50%, hsl(${project.accentHsl}), transparent 70%)` }}
        />
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          {/* Back */}
          <Link
            to="/adamas"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            {t('adamas.backToProjects', 'Back to Adamas Projects')}
          </Link>

          <div className="flex items-start gap-5 mb-6">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{ background: `hsl(${project.accentHsl} / 0.12)` }}
            >
              <IconComponent className="w-7 h-7" style={{ color: `hsl(${project.accentHsl})` }} />
            </div>
            <div>
              <span
                className="inline-block text-[10px] font-semibold uppercase tracking-widest mb-2 px-2.5 py-0.5 rounded-full"
                style={{ color: `hsl(${project.accentHsl})`, background: `hsl(${project.accentHsl} / 0.08)` }}
              >
                {t(project.categoryKey, project.category)}
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-foreground">
                {t(project.titleKey)}
              </h1>
            </div>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
            {t(project.descriptionKey)}
          </p>
        </div>
      </section>

      {/* Long Description */}
      <section className="pb-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="rounded-2xl border border-border/30 bg-card/40 p-8 md:p-12">
            <h2 className="text-xl font-semibold text-foreground mb-6">{t('adamas.overview', 'Project Overview')}</h2>
            <div className="prose prose-sm dark:prose-invert max-w-none text-muted-foreground leading-relaxed whitespace-pre-line">
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
              { key: 'adamas.highlight1', fallback: 'Privately Operated', icon: 'Lock' },
              { key: 'adamas.highlight2', fallback: 'Strategic Partnerships', icon: 'Handshake' },
              { key: 'adamas.highlight3', fallback: 'Long-Term Vision', icon: 'TrendingUp' },
            ].map((h, i) => {
              const HIcon = (LucideIcons as any)[h.icon] || Shield;
              return (
                <div key={i} className="flex items-center gap-3 rounded-xl border border-border/30 bg-muted/20 p-4">
                  <HIcon className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground">{t(h.key, h.fallback)}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Navigation between projects */}
      <section className="pb-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex justify-between items-center">
            {prevProject ? (
              <Link
                to={`/adamas/${prevProject.slug}`}
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                {t(prevProject.titleKey)}
              </Link>
            ) : <div />}
            {nextProject ? (
              <Link
                to={`/adamas/${nextProject.slug}`}
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {t(nextProject.titleKey)}
                <ArrowRight className="w-4 h-4" />
              </Link>
            ) : <div />}
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

export default AdamasProjectDetail;
