import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { adamasProjects } from './adamasProjects';
import * as LucideIcons from 'lucide-react';
import { ArrowRight } from 'lucide-react';

const AdamasMaterialsOverview = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="max-w-6xl mx-auto px-4 relative z-10 text-center">
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

      {/* Projects Grid */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {adamasProjects.map((project, idx) => {
              const IconComponent = (LucideIcons as any)[project.icon] || LucideIcons.Briefcase;
              return (
                <Link
                  key={project.slug}
                  to={`/adamas/${project.slug}`}
                  className="group relative rounded-2xl border border-border/40 bg-card/60 backdrop-blur-sm p-6 hover:border-primary/30 hover:shadow-xl transition-all duration-500 overflow-hidden"
                >
                  {/* Accent glow */}
                  <div
                    className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                    style={{ background: `hsl(${project.accentHsl})` }}
                  />

                  <div className="relative z-10">
                    {/* Index + Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono text-muted-foreground/60">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{ background: `hsl(${project.accentHsl} / 0.12)` }}
                      >
                        <IconComponent
                          className="w-5 h-5"
                          style={{ color: `hsl(${project.accentHsl})` }}
                        />
                      </div>
                    </div>

                    {/* Category */}
                    <span
                      className="inline-block text-[10px] font-semibold uppercase tracking-widest mb-3 px-2 py-0.5 rounded-full"
                      style={{
                        color: `hsl(${project.accentHsl})`,
                        background: `hsl(${project.accentHsl} / 0.08)`,
                      }}
                    >
                      {t(project.categoryKey, project.category)}
                    </span>

                    {/* Title */}
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {t(project.titleKey)}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                      {t(project.descriptionKey)}
                    </p>

                    {/* CTA */}
                    <div className="flex items-center gap-1.5 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
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
