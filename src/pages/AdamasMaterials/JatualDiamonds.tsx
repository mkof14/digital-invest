import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowLeft, Crown, Diamond, Gem, Sparkles, Star, Palette, Shield, Globe2, HeartHandshake, Eye, Layers } from 'lucide-react';
import OptimizedImage from '@/components/OptimizedImage';
import jatualHero from '@/assets/adamas/jatual-diamonds-hero.webp';

const JatualDiamonds = () => {
  const { t } = useTranslation();

  const collections = [
    { key: 'cielDeParis', icon: Star, accent: '220 70% 55%' },
    { key: 'jardinsDeParis', icon: Sparkles, accent: '160 60% 45%' },
    { key: 'leCoeurDeParis', icon: HeartHandshake, accent: '340 60% 50%' },
    { key: 'reineEnRose', icon: Crown, accent: '310 55% 50%' },
  ];

  const categories = [
    { key: 'earrings', icon: Gem },
    { key: 'rings', icon: Diamond },
    { key: 'bracelets', icon: Layers },
    { key: 'necklaces', icon: Sparkles },
    { key: 'pendants', icon: Star },
  ];

  const pillars = [
    { key: 'vendome', icon: Globe2 },
    { key: 'labGrown', icon: Shield },
    { key: 'craftsmanship', icon: Eye },
    { key: 'personalization', icon: Palette },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <OptimizedImage
          src={jatualHero}
          alt="JATUAL PARIS"
          containerClassName="absolute inset-0 w-full h-full"
          className="w-full h-full object-cover"
          showSkeleton={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-5xl mx-auto">
            <Link
              to="/adamas"
              className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors mb-4"
            >
              <ArrowLeft className="w-4 h-4" />
              {t('adamas.backToProjects', 'Back to Adamas Projects')}
            </Link>
            <span className="inline-block text-[10px] font-semibold uppercase tracking-widest mb-2 px-2.5 py-0.5 rounded-full text-amber-300 bg-amber-300/15 backdrop-blur-sm">
              {t('adamas.categories.diamond', 'Diamond Industry')}
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight text-white">
              JATUAL PARIS
            </h1>
            <p className="text-lg text-white/70 mt-3 max-w-2xl">
              {t('adamas.jatual.heroTagline', 'High Jewelry Maison — Place Vendôme, Paris')}
            </p>
          </div>
        </div>
      </section>

      {/* Brand Philosophy */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-light text-foreground mb-6">
            {t('adamas.jatual.philosophy.title', 'The Maison')}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <p className="text-muted-foreground leading-relaxed">
              {t('adamas.jatual.philosophy.text1', 'JATUAL PARIS is a high jewelry maison rooted in the heritage of Place Vendôme and shaped by a more conscious vision for the modern world. Each creation features next-generation lab-grown diamonds — brilliant, rare, and responsibly made.')}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {t('adamas.jatual.philosophy.text2', 'The philosophy centers on an unwavering commitment to advanced craftsmanship and responsible beauty. Beyond creating exquisite jewelry, JATUAL PARIS shapes a refined vision of modern royalty — where elegance meets ethical innovation.')}
            </p>
          </div>
        </div>
      </section>

      {/* Four Pillars */}
      <section className="py-16 border-t border-border/20">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-light text-foreground mb-10">
            {t('adamas.jatual.pillars.title', 'Defining Principles')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p, i) => (
              <div key={i} className="rounded-2xl border border-border/30 bg-card/40 p-6 text-center">
                <p.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="text-sm font-semibold text-foreground mb-2">
                  {t(`adamas.jatual.pillars.${p.key}.title`)}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {t(`adamas.jatual.pillars.${p.key}.text`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collections */}
      <section className="py-20 border-t border-border/20">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-light text-foreground mb-4">
            {t('adamas.jatual.collections.title', 'High Jewelry Collections')}
          </h2>
          <p className="text-muted-foreground mb-10 max-w-2xl">
            {t('adamas.jatual.collections.subtitle', 'Each collection tells a unique story — from the grandeur of Parisian gardens to the pulse of the heart itself.')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {collections.map((c, i) => (
              <div
                key={i}
                className="rounded-2xl border border-border/30 bg-card/40 p-8 hover:bg-card/60 transition-colors"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: `hsl(${c.accent} / 0.12)` }}
                  >
                    <c.icon className="w-6 h-6" style={{ color: `hsl(${c.accent})` }} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {t(`adamas.jatual.collections.${c.key}.name`)}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t(`adamas.jatual.collections.${c.key}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 border-t border-border/20">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-light text-foreground mb-8">
            {t('adamas.jatual.categories.title', 'Product Categories')}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {categories.map((cat, i) => (
              <div key={i} className="rounded-xl border border-border/30 bg-muted/20 p-5 text-center hover:bg-muted/40 transition-colors">
                <cat.icon className="w-7 h-7 text-primary mx-auto mb-3" />
                <span className="text-sm font-medium text-foreground">
                  {t(`adamas.jatual.categories.${cat.key}`)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Pieces */}
      <section className="py-20 border-t border-border/20">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-light text-foreground mb-10">
            {t('adamas.jatual.signature.title', 'Signature Creations')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['mediterraneanPrincess', 'princesseDAzure', 'bleuRoyal'].map((piece, i) => (
              <div key={i} className="rounded-2xl border border-border/30 bg-card/40 p-6">
                <h3 className="text-base font-semibold text-foreground mb-2">
                  {t(`adamas.jatual.signature.${piece}.name`)}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t(`adamas.jatual.signature.${piece}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Position */}
      <section className="py-16 border-t border-border/20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="rounded-2xl border border-border/30 bg-card/40 p-8 md:p-12">
            <h2 className="text-2xl font-light text-foreground mb-6">
              {t('adamas.jatual.market.title', 'Market Positioning')}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-3">
                  {t('adamas.jatual.market.audience.title', 'Target Audience')}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t('adamas.jatual.market.audience.text', 'Discerning collectors, high-net-worth individuals, and sophisticated connoisseurs who demand the highest standards of quality, design, and ethical sourcing in luxury jewelry.')}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-3">
                  {t('adamas.jatual.market.differentiation.title', 'Competitive Edge')}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t('adamas.jatual.market.differentiation.text', 'JATUAL PARIS uniquely combines Place Vendôme heritage with next-generation conflict-free diamonds, delivering beauty without compromise — positioning the brand at the intersection of tradition and innovation.')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Model */}
      <section className="py-16 border-t border-border/20">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-light text-foreground mb-8">
            {t('adamas.jatual.business.title', 'Business Model')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['directSales', 'bespoke', 'digitalPresence'].map((model, i) => (
              <div key={i} className="rounded-xl border border-border/30 bg-muted/20 p-6">
                <h3 className="text-sm font-semibold text-foreground mb-2">
                  {t(`adamas.jatual.business.${model}.title`)}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {t(`adamas.jatual.business.${model}.text`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 border-t border-border/20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-light text-foreground mb-6">
            {t('adamas.jatual.vision.title', 'Vision')}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-4">
            {t('adamas.jatual.vision.text', 'To redefine the global standard of luxury jewelry by merging Parisian haute joaillerie tradition with sustainable innovation — creating pieces that are not merely worn, but cherished across generations.')}
          </p>
          <p className="text-base italic text-primary/80">
            {t('adamas.jatual.vision.tagline', '"Luxury Reimagined. Beauty Without Compromise."')}
          </p>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="rounded-xl border border-border/30 bg-muted/30 p-6">
            <p className="text-xs text-muted-foreground/80 leading-relaxed">
              <span className="font-medium text-muted-foreground">{t('adamas.disclaimer.title', 'Important Notice:')}</span>{' '}
              {t('adamas.disclaimer.text')}
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default JatualDiamonds;
