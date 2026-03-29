import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import AdamasNavigation from '@/components/AdamasNavigation';
import AdamasFooter from '@/components/AdamasFooter';
import { adamasProjects, type ProjectStatus } from './adamasProjects';
import { ArrowLeft, ArrowRight, Mail } from 'lucide-react';
import OptimizedImage from '@/components/OptimizedImage';
import { useEffect, useState } from 'react';
import { updateMetaTags } from '@/lib/metaTags';
import { injectStructuredData, removeStructuredData } from '@/lib/structuredData';

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

// Per-project logos
import adamasMaterialsLogoIcon from '@/assets/adamas/logos/adamas-materials-logo-icon.png';
import originDiamondLogo from '@/assets/adamas/logos/origin-diamond-logo.png';
import agronNetLogo from '@/assets/adamas/logos/agron-net-logo.png';
import agronWorkLogo from '@/assets/adamas/logos/agron-work-logo.png';
import abuMallLogo from '@/assets/adamas/logos/abu-mall-logo.png';
import almaDiamondLogo from '@/assets/adamas/logos/alma-diamond-logo.png';
import jewelryDropshippingLogo from '@/assets/adamas/logos/jewelry-dropshipping-logo.png';
import jatualDiamondsLogo from '@/assets/adamas/logos/jatual-diamonds-logo.png';
import coinsTokensLogo from '@/assets/adamas/logos/coins-tokens-logo.png';
import innovationDiamondsLogo from '@/assets/adamas/logos/innovation-diamonds-logo.png';
import itMarketingLogo from '@/assets/adamas/logos/it-marketing-logo.png';
import animalVetLogo from '@/assets/adamas/logos/animal-vet-logo.png';

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

const projectLogos: Record<string, string> = {
  'adamas-materials': adamasMaterialsLogoIcon,
  'origin-diamond': originDiamondLogo,
  'agron-net': agronNetLogo,
  'agron-work': agronWorkLogo,
  'abu-mall': abuMallLogo,
  'alma-diamond': almaDiamondLogo,
  'jewelry-dropshipping': jewelryDropshippingLogo,
  'jatual-diamonds': jatualDiamondsLogo,
  'coins-and-tokens': coinsTokensLogo,
  'innovation-diamonds': innovationDiamondsLogo,
  'it-marketing-group': itMarketingLogo,
  'animal-veterinary-service': animalVetLogo,
};

const statusConfig: Record<ProjectStatus, { labelKey: string; fallback: string; color: string }> = {
  active: { labelKey: 'adamas.status.active', fallback: 'Active', color: '142 71% 45%' },
  development: { labelKey: 'adamas.status.development', fallback: 'In Development', color: '38 92% 50%' },
  planning: { labelKey: 'adamas.status.planning', fallback: 'Planning', color: '217 91% 60%' },
  launch: { labelKey: 'adamas.status.launch', fallback: 'Launching', color: '280 65% 55%' },
};

const AdamasProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useTranslation();
  const [contactOpen, setContactOpen] = useState(false);

  const project = adamasProjects.find(p => p.slug === slug);
  const projectIndex = adamasProjects.findIndex(p => p.slug === slug);
  const prevProject = projectIndex > 0 ? adamasProjects[projectIndex - 1] : null;
  const nextProject = projectIndex < adamasProjects.length - 1 ? adamasProjects[projectIndex + 1] : null;

  const heroImage = project ? projectHeroImages[project.slug] : undefined;
  const projectTitle = project ? t(project.titleKey) : '';
  const projectDesc = project ? t(project.descriptionKey) : '';

  useEffect(() => {
    if (!project) return;
    updateMetaTags({
      title: `${projectTitle} — Adamas Materials`,
      description: projectDesc,
      ogTitle: `${projectTitle} — Adamas Materials Project Portfolio`,
      ogDescription: projectDesc,
      ogImage: heroImage || 'https://www.digitalinvest.com/adamas-og-image.png',
      ogType: 'article',
      canonicalUrl: `https://digitalinvest.com/adamas/${project.slug}`,
...
      "name": projectTitle,
      "description": projectDesc,
      "image": heroImage || 'https://www.digitalinvest.com/adamas-og-image.png',
      "url": `https://digitalinvest.com/adamas/${project.slug}`,
      "category": project.category,
      "brand": {
        "@type": "Organization",
        "name": "Adamas Materials"
      }
    }, 'adamas-project-schema');

    // BreadcrumbList JSON-LD
    injectStructuredData({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Adamas Materials", "item": "https://digitalinvest.com/adamas" },
        { "@type": "ListItem", "position": 2, "name": projectTitle, "item": `https://digitalinvest.com/adamas/${project.slug}` }
      ]
    }, 'adamas-breadcrumb-schema');

    return () => {
      removeStructuredData('adamas-project-schema');
      removeStructuredData('adamas-breadcrumb-schema');
    };
  }, [project, projectTitle, projectDesc, heroImage]);

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <AdamasNavigation />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-foreground mb-4">{t('common.noResults', 'Project not found')}</h1>
            <Link to="/adamas" className="text-primary hover:underline">{t('adamas.backToProjects', 'Back to Adamas Projects')}</Link>
          </div>
        </div>
        <AdamasFooter />
      </div>
    );
  }

  const hasHero = !!heroImage;
  const projectLogo = projectLogos[project.slug];
  const status = statusConfig[project.status];
  const relatedProjects = project.relatedSlugs
    .map(s => adamasProjects.find(p => p.slug === s))
    .filter(Boolean) as typeof adamasProjects;

  return (
    <div className="min-h-screen bg-[hsl(220,14%,96%)] dark:bg-background">
      <AdamasNavigation />

      {/* Hero Image */}
      {hasHero && (
        <section className="relative h-[55vh] min-h-[420px] overflow-hidden">
          <OptimizedImage
            src={projectHeroImages[project.slug]}
            alt={t(project.titleKey)}
            containerClassName="absolute inset-0 w-full h-full"
            className="w-full h-full object-cover"
            showSkeleton={false}
          />
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

              <div className="flex items-center gap-3 mb-3 flex-wrap">
                {/* Project Logo */}
                {projectLogo && (
                  <img
                    src={projectLogo}
                    alt=""
                    className="h-12 w-12 md:h-14 md:w-14 rounded-xl object-contain bg-white/10 backdrop-blur-md p-1.5 border border-white/10"
                    loading="lazy"
                  />
                )}
                <div className="flex items-center gap-3">
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
                  {/* Status Badge */}
                  <span
                    className="inline-flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-[0.15em] px-3 py-1 rounded border backdrop-blur-md"
                    style={{
                      color: `hsl(${status.color})`,
                      background: `hsl(${status.color} / 0.12)`,
                      borderColor: `hsl(${status.color} / 0.25)`,
                    }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full animate-pulse"
                      style={{ background: `hsl(${status.color})` }}
                    />
                    {t(status.labelKey, status.fallback)}
                  </span>
                </div>
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

            <div className="flex items-center gap-4 mb-4">
              {projectLogo && (
                <img
                  src={projectLogo}
                  alt=""
                  className="h-14 w-14 rounded-xl object-contain bg-muted/50 p-1.5 border border-border/30"
                  loading="lazy"
                />
              )}
              <div className="flex items-center gap-3">
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
                <span
                  className="inline-flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-[0.15em] px-3 py-1 rounded border"
                  style={{
                    color: `hsl(${status.color})`,
                    background: `hsl(${status.color} / 0.08)`,
                    borderColor: `hsl(${status.color} / 0.2)`,
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full animate-pulse"
                    style={{ background: `hsl(${status.color})` }}
                  />
                  {t(status.labelKey, status.fallback)}
                </span>
              </div>
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

      {/* Contact / Inquiry Section */}
      <section className="pb-16">
        <div className="max-w-5xl mx-auto px-4">
          <div
            className="rounded-2xl border border-border/40 dark:border-border/30 p-8 md:p-10 shadow-sm relative overflow-hidden"
            style={{
              background: `linear-gradient(135deg, hsl(${project.accentHsl} / 0.04), transparent 60%)`,
            }}
          >
            <div className="absolute top-0 right-0 w-40 h-40 opacity-[0.03]" style={{
              background: `radial-gradient(circle, hsl(${project.accentHsl}), transparent 70%)`
            }} />
            <div className="relative z-10">
              <div className="flex items-start gap-4 mb-6">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    background: `hsl(${project.accentHsl} / 0.1)`,
                    border: `1px solid hsl(${project.accentHsl} / 0.2)`,
                  }}
                >
                  <Mail className="w-5 h-5" style={{ color: `hsl(${project.accentHsl})` }} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {t('adamas.contact.title', 'Interested in this project?')}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t('adamas.contact.subtitle', 'Get in touch with our team for private inquiries and partnership discussions.')}
                  </p>
                </div>
              </div>

              {!contactOpen ? (
                <button
                  onClick={() => setContactOpen(true)}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 hover:shadow-lg"
                  style={{
                    background: `hsl(${project.accentHsl})`,
                    color: 'white',
                  }}
                >
                  {t('adamas.contact.button', 'Send Inquiry')}
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <form
                  className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setContactOpen(false);
                  }}
                >
                  <input
                    type="text"
                    placeholder={t('adamas.contact.namePlaceholder', 'Your name')}
                    className="px-4 py-2.5 rounded-lg border border-border/50 bg-white/60 dark:bg-muted/30 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50"
                    required
                  />
                  <input
                    type="email"
                    placeholder={t('adamas.contact.emailPlaceholder', 'Your email')}
                    className="px-4 py-2.5 rounded-lg border border-border/50 bg-white/60 dark:bg-muted/30 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50"
                    required
                  />
                  <textarea
                    placeholder={t('adamas.contact.messagePlaceholder', 'Your message or inquiry...')}
                    rows={3}
                    className="md:col-span-2 px-4 py-2.5 rounded-lg border border-border/50 bg-white/60 dark:bg-muted/30 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 resize-none"
                  />
                  <div className="md:col-span-2 flex gap-3">
                    <button
                      type="submit"
                      className="px-6 py-2.5 rounded-lg text-sm font-medium text-white transition-all duration-300 hover:shadow-lg"
                      style={{ background: `hsl(${project.accentHsl})` }}
                    >
                      {t('adamas.contact.send', 'Send')}
                    </button>
                    <button
                      type="button"
                      onClick={() => setContactOpen(false)}
                      className="px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {t('common.cancel', 'Cancel')}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="pb-16">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-lg font-semibold text-foreground mb-6">
              {t('adamas.relatedProjects', 'Related Projects')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relatedProjects.map((rp) => {
                const rpHero = projectHeroImages[rp.slug];
                const rpLogo = projectLogos[rp.slug];
                const rpStatus = statusConfig[rp.status];
                return (
                  <Link
                    key={rp.slug}
                    to={`/adamas/${rp.slug}`}
                    className="group relative rounded-xl overflow-hidden min-h-[200px] transition-all duration-500 hover:-translate-y-1"
                    style={{
                      boxShadow: '0 4px 16px -4px rgba(0,0,0,0.15)',
                    }}
                  >
                    {rpHero && (
                      <img
                        src={rpHero}
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                    )}
                    <div
                      className="absolute inset-0"
                      style={{
                        background: rpHero
                          ? `linear-gradient(160deg, rgba(10,10,15,0.85) 0%, hsl(${rp.accentHsl} / 0.2) 50%, rgba(5,5,10,0.9) 100%)`
                          : `linear-gradient(160deg, hsl(var(--card)) 0%, hsl(${rp.accentHsl} / 0.06) 100%)`,
                      }}
                    />
                    <div className="absolute top-0 left-0 right-0 h-[2px] opacity-50 group-hover:opacity-100 transition-opacity"
                      style={{ background: `linear-gradient(90deg, transparent, hsl(${rp.accentHsl} / 0.5), transparent)` }}
                    />
                    <div className="relative z-10 p-5 flex flex-col justify-end h-full text-white">
                      <div className="mb-auto flex items-center gap-2">
                        {rpLogo && (
                          <img src={rpLogo} alt="" className="h-8 w-8 rounded-lg object-contain bg-white/10 p-1 border border-white/10" loading="lazy" />
                        )}
                        <span
                          className="inline-flex items-center gap-1 text-[9px] font-medium uppercase tracking-[0.15em] px-2 py-0.5 rounded border backdrop-blur-md"
                          style={{
                            color: `hsl(${rpStatus.color})`,
                            background: `hsl(${rpStatus.color} / 0.12)`,
                            borderColor: `hsl(${rpStatus.color} / 0.2)`,
                          }}
                        >
                          <span className="w-1 h-1 rounded-full" style={{ background: `hsl(${rpStatus.color})` }} />
                          {t(rpStatus.labelKey, rpStatus.fallback)}
                        </span>
                      </div>
                      <h3 className="text-base font-semibold mb-1">{t(rp.titleKey)}</h3>
                      <p className="text-xs text-white/50 line-clamp-2">{t(rp.descriptionKey)}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

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

      <AdamasFooter />
    </div>
  );
};

export default AdamasProjectDetail;
