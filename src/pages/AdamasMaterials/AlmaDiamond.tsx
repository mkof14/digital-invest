import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  ArrowLeft, ArrowRight, Sparkles, Gem, Heart, Eye, Globe,
  Palette, ShieldCheck, Star, Gift, TrendingUp, ChevronRight,
  Instagram, Facebook, Crown, Smartphone
} from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import OptimizedImage from '@/components/OptimizedImage';
import heroImg from '@/assets/adamas/alma-diamond-hero.jpg';
import logoImg from '@/assets/adamas/alma-diamond-logo.png';

const AlmaDiamond = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <OptimizedImage src={heroImg} alt="Alma Diamond" containerClassName="w-full h-full" className="w-full h-full object-cover" showSkeleton={false} />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a2e]/95 via-[#0a0a2e]/80 to-[#0a0a2e]/40" />
        </div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-3xl">
            <Link to="/adamas" className="inline-flex items-center text-pink-300/70 hover:text-pink-300 mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" /> {t('adamas.backToProjects', 'Back to Adamas Projects')}
            </Link>
            <div className="mb-6">
              <img src={logoImg} alt="Alma Diamond Logo" className="h-16 md:h-24 object-contain rounded-lg bg-white/90 p-2" />
            </div>
            <Badge className="mb-4 bg-pink-500/20 text-pink-300 border-pink-500/30 text-sm px-4 py-1">
              {t('almaDiamond.badge', 'Lab-Grown Diamond Jewelry')}
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-2 tracking-tight">
              Alma <span className="text-pink-400">Diamond</span>
            </h1>
            <p className="text-xl md:text-2xl text-pink-200/70 font-light italic mb-6">
              {t('almaDiamond.heroSubtitle', 'Your Next Favorite Piece')}
            </p>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
              {t('almaDiamond.heroDesc', 'A boutique lab-grown diamond jewelry brand built on beautiful design, ethical sourcing, and direct-to-consumer accessibility. No noise, just beautiful things.')}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-8 py-6 text-lg">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  {t('projectCommon.expressInterest', 'Express Interest')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Philosophy */}
      <section className="py-20 bg-gradient-to-b from-[#0a0a2e] to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('almaDiamond.philosophyTitle', 'Brand Philosophy')}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('almaDiamond.philosophyDesc', 'Alma Diamond is a modern jewelry brand that believes luxury should be accessible, ethical, and personal. Every piece is crafted with lab-grown diamonds — identical in beauty, brilliance, and composition to mined stones, but created with minimal environmental impact.')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Sparkles, title: t('almaDiamond.phil1Title', 'Lab-Grown Brilliance'), desc: t('almaDiamond.phil1Desc', 'Real diamonds, grown with precision technology — same sparkle, same hardness, ethically sourced') },
              { icon: Heart, title: t('almaDiamond.phil2Title', 'Designed with Love'), desc: t('almaDiamond.phil2Desc', 'Each piece is thoughtfully designed to become a personal favorite — not a status symbol') },
              { icon: ShieldCheck, title: t('almaDiamond.phil3Title', 'Transparent & Ethical'), desc: t('almaDiamond.phil3Desc', 'Full transparency on origin, pricing, and production — no middlemen markup, no hidden costs') },
            ].map((item, i) => (
              <Card key={i} className="bg-card/50 border-pink-500/10 hover:border-pink-500/30 transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 rounded-xl bg-pink-500/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-pink-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            {t('almaDiamond.collectionsTitle', 'Collections')}
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            {t('almaDiamond.collectionsSubtitle', 'Carefully curated categories designed for everyday elegance and special moments')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { icon: Gem, title: t('almaDiamond.col1Title', 'Pendants & Necklaces'), desc: t('almaDiamond.col1Desc', 'Signature bezel-set pendants in gold with vibrant lab-grown gemstones — the everyday statement piece') },
              { icon: Crown, title: t('almaDiamond.col2Title', 'Rings'), desc: t('almaDiamond.col2Desc', 'Engagement rings, stackable bands, and cocktail rings — designed for moments that matter') },
              { icon: Star, title: t('almaDiamond.col3Title', 'Earrings'), desc: t('almaDiamond.col3Desc', 'From classic studs to modern drops — versatile designs that complement every look') },
              { icon: Gift, title: t('almaDiamond.col4Title', 'Gift Sets'), desc: t('almaDiamond.col4Desc', 'Curated gift packages with premium presentation — ready to create unforgettable moments') },
              { icon: Palette, title: t('almaDiamond.col5Title', 'Fancy Colors'), desc: t('almaDiamond.col5Desc', 'Blue, pink, yellow, and green lab-grown diamonds — vibrant colors at accessible prices') },
              { icon: Sparkles, title: t('almaDiamond.col6Title', 'Custom Designs'), desc: t('almaDiamond.col6Desc', 'Personalized pieces crafted to your vision — bespoke jewelry without the traditional markup') },
            ].map((item, i) => (
              <Card key={i} className="bg-card border-border/50 hover:border-pink-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/5">
                <CardContent className="p-6">
                  <item.icon className="w-8 h-8 text-pink-400 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Lab-Grown */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              {t('almaDiamond.whyLabTitle', 'Why Lab-Grown Diamonds?')}
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              {t('almaDiamond.whyLabSubtitle', 'The smart, ethical, and equally brilliant choice')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                t('almaDiamond.lab1', 'Identical physical, chemical, and optical properties to mined diamonds'),
                t('almaDiamond.lab2', 'Up to 70% more affordable than equivalent mined stones'),
                t('almaDiamond.lab3', 'Minimal environmental footprint — no mining, no displacement'),
                t('almaDiamond.lab4', 'Fully certified and graded by independent gemological laboratories'),
                t('almaDiamond.lab5', 'Conflict-free origin with complete traceability'),
                t('almaDiamond.lab6', 'Growing consumer acceptance — lab-grown now represents 20%+ of the diamond market'),
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-card/50 border border-border/50">
                  <ChevronRight className="w-5 h-5 text-pink-400 mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Business Model */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {t('almaDiamond.businessTitle', 'Business Model')}
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {[
              { step: '01', title: t('almaDiamond.biz1Title', 'Direct-to-Consumer E-Commerce'), desc: t('almaDiamond.biz1Desc', 'Shopify-powered storefront with premium UX, high-quality product photography, and seamless checkout — eliminating retail markup for better value.') },
              { step: '02', title: t('almaDiamond.biz2Title', 'Curated Collections'), desc: t('almaDiamond.biz2Desc', 'Small, thoughtful collections launched seasonally — creating urgency and exclusivity without mass production waste.') },
              { step: '03', title: t('almaDiamond.biz3Title', 'Community-First Growth'), desc: t('almaDiamond.biz3Desc', 'Early access program, social media engagement, and community building — organic growth through authentic brand connection.') },
              { step: '04', title: t('almaDiamond.biz4Title', 'Premium Experience'), desc: t('almaDiamond.biz4Desc', 'Beautiful packaging, personalized notes, and post-purchase care — every touchpoint reinforces the premium brand experience.') },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start group">
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500/20 to-pink-600/10 border border-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-pink-400 font-bold text-xl">{item.step}</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                {t('almaDiamond.marketTitle', 'Market Opportunity')}
              </h2>
              <div className="space-y-4">
                {[
                  t('almaDiamond.mkt1', 'Global lab-grown diamond market projected to reach $55B+ by 2032'),
                  t('almaDiamond.mkt2', 'Millennials and Gen Z driving demand for ethical luxury'),
                  t('almaDiamond.mkt3', 'DTC jewelry brands outperforming traditional retail channels'),
                  t('almaDiamond.mkt4', 'Rising consumer awareness and acceptance of lab-grown stones'),
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-card/50 border border-border/50">
                    <ChevronRight className="w-5 h-5 text-pink-400 mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                {t('almaDiamond.diffTitle', 'What Sets Alma Apart')}
              </h2>
              <div className="space-y-4">
                {[
                  t('almaDiamond.diff1', 'Design-first approach — beauty over brand snobbery'),
                  t('almaDiamond.diff2', 'Accessible pricing without sacrificing quality or presentation'),
                  t('almaDiamond.diff3', 'Authentic brand voice — real, warm, personal communication'),
                  t('almaDiamond.diff4', 'Multi-channel presence across social, web, and future retail'),
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-card/50 border border-border/50">
                    <ChevronRight className="w-5 h-5 text-pink-400 mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Presence */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('almaDiamond.digitalTitle', 'Digital Presence')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            {t('almaDiamond.digitalDesc', 'Built on Shopify with a modern, mobile-first design. Social media integration across all major platforms for community engagement and brand building.')}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { icon: Globe, label: t('almaDiamond.web', 'almadiamond.com') },
              { icon: Instagram, label: t('almaDiamond.ig', 'Instagram') },
              { icon: Facebook, label: t('almaDiamond.fb', 'Facebook') },
              { icon: Smartphone, label: t('almaDiamond.mobile', 'Mobile-First') },
            ].map((item, i) => (
              <div key={i} className="rounded-xl border border-pink-500/20 bg-card/50 p-6">
                <item.icon className="w-8 h-8 text-pink-400 mx-auto mb-3" />
                <p className="font-medium text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('almaDiamond.visionTitle', 'Vision')}
          </h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>{t('almaDiamond.vision1', 'A jewelry brand that people love to wear and love to give')}</p>
            <p>{t('almaDiamond.vision2', 'Accessible luxury without compromise on quality or ethics')}</p>
            <p>{t('almaDiamond.vision3', 'No noise, just beautiful things first')}</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#0a0a2e] to-[#1a0a2e]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t('almaDiamond.ctaTitle', 'Interested in Alma Diamond?')}
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            {t('almaDiamond.ctaDesc', 'Alma Diamond is a design-driven, ethically sourced jewelry brand positioned for the growing lab-grown diamond market.')}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-10 py-6 text-lg">
                {t('projectCommon.submitInterest', 'Submit Interest')} <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/adamas">
              <Button size="lg" variant="outline" className="border-gray-500 text-gray-300 hover:bg-white/5 px-10 py-6 text-lg">
                {t('adamas.backToProjects', 'Back to Adamas Projects')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="rounded-xl border border-border/30 bg-muted/30 p-6">
            <p className="text-xs text-muted-foreground/80 leading-relaxed">
              <span className="font-medium text-muted-foreground">{t('adamas.disclaimer.title', 'Important Notice:')}</span>{' '}
              {t('adamas.disclaimer.text', 'This section is for informational purposes only.')}
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AlmaDiamond;
