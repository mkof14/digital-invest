import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  ArrowLeft, ArrowRight, ShoppingBag, Eye, Gem, Store, Globe,
  Sparkles, MousePointerClick, Package, TrendingUp, Users,
  ChevronRight, Shield, BarChart3, Smartphone, Palette
} from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import OptimizedImage from '@/components/OptimizedImage';
import heroImg from '@/assets/adamas/abu-mall-hero.jpg';
import logoImg from '@/assets/adamas/abu-mall-logo.png';

const AbuMall = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <OptimizedImage src={heroImg} alt="Abu Mall" containerClassName="w-full h-full" className="w-full h-full object-cover" showSkeleton={false} />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a140a]/95 via-[#1a140a]/80 to-[#1a140a]/50" />
        </div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-3xl">
            <Link to="/adamas" className="inline-flex items-center text-amber-300/70 hover:text-amber-300 mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" /> {t('adamas.backToProjects', 'Back to Adamas Projects')}
            </Link>
            <div className="mb-6">
              <img src={logoImg} alt="Abu Mall Logo" className="h-20 md:h-28 object-contain" />
            </div>
            <Badge className="mb-4 bg-amber-500/20 text-amber-300 border-amber-500/30 text-sm px-4 py-1">
              {t('abuMall.badge', 'Premium Jewelry E-Commerce')}
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-2 tracking-tight">
              Abu <span className="text-amber-400">Mall</span>
            </h1>
            <p className="text-xl md:text-2xl text-amber-200/70 font-light italic mb-6">
              {t('abuMall.heroSubtitle', 'Next-generation virtual jewelry mall')}
            </p>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
              {t('abuMall.heroDesc', 'Premium e-commerce built on experience, trust, and realistic economics. Not a website, not a marketplace — a spatial digital environment where users navigate, choose, and interact.')}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8 py-6 text-lg">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  {t('projectCommon.expressInterest', 'Express Interest')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Market Context */}
      <section className="py-20 bg-gradient-to-b from-[#1a140a] to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('abuMall.marketTitle', 'Market Context')}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('abuMall.marketDesc', 'Jewelry is not a standard e-commerce product. High price, emotional decision-making, and the need for trust make traditional online catalogs ineffective for conveying the true value and feel of fine jewelry.')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Gem, title: t('abuMall.market1Title', 'High Value'), desc: t('abuMall.market1Desc', 'Significant investment requiring a special approach to presentation and decision-making') },
              { icon: Sparkles, title: t('abuMall.market2Title', 'Emotional Purchase'), desc: t('abuMall.market2Desc', 'Buying is tied to feelings and important life moments — not a transactional click') },
              { icon: Shield, title: t('abuMall.market3Title', 'Trust Required'), desc: t('abuMall.market3Desc', 'Confidence in quality and authenticity is critical for conversion and loyalty') },
            ].map((item, i) => (
              <Card key={i} className="bg-card/50 border-amber-500/10 hover:border-amber-500/30 transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 rounded-xl bg-amber-500/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-amber-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              {t('abuMall.problemTitle', 'The Problem')}
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              {t('abuMall.problemSubtitle', 'Classic jewelry e-commerce fails to deliver the experience customers need')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                t('abuMall.problem1', 'Flat visual experience — static photos don\'t convey beauty and details'),
                t('abuMall.problem2', 'No sense of scale and quality in standard product pages'),
                t('abuMall.problem3', 'High anxiety before purchase — doubt and fear of making a mistake'),
                t('abuMall.problem4', 'No emotional connection with the product before buying'),
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-card/50 border border-border/50">
                  <ChevronRight className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Idea */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('abuMall.ideaTitle', 'The Core Idea')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            {t('abuMall.ideaDesc', 'Abu Mall is a virtual jewelry mall. Not a website. Not a marketplace. Not a metaverse. It\'s a spatial digital environment where users navigate, choose, and interact.')}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="rounded-xl border border-amber-500/20 bg-card/50 p-6">
              <Store className="w-10 h-10 text-amber-400 mx-auto mb-3" />
              <p className="font-medium">{t('abuMall.notSite', 'Not a Website')}</p>
            </div>
            <div className="rounded-xl border border-amber-500/20 bg-card/50 p-6">
              <ShoppingBag className="w-10 h-10 text-amber-400 mx-auto mb-3" />
              <p className="font-medium">{t('abuMall.notMarketplace', 'Not a Marketplace')}</p>
            </div>
            <div className="rounded-xl border border-amber-500/20 bg-card/50 p-6">
              <Globe className="w-10 h-10 text-amber-400 mx-auto mb-3" />
              <p className="font-medium">{t('abuMall.spatialEnv', 'A Spatial Digital Environment')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* User Experience */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            {t('abuMall.uxTitle', 'User Experience')}
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            {t('abuMall.uxSubtitle', 'Navigation is intuitive, like in the real world')}
          </p>
          <div className="max-w-4xl mx-auto space-y-8">
            {[
              { step: '01', title: t('abuMall.ux1Title', 'Enter the Space'), desc: t('abuMall.ux1Desc', 'Step into a bright, architectural environment. First impression creates a premium atmosphere.') },
              { step: '02', title: t('abuMall.ux2Title', 'Walk the Mall'), desc: t('abuMall.ux2Desc', 'Free navigation through the virtual mall. Browse jewelry stores with complete freedom of choice.') },
              { step: '03', title: t('abuMall.ux3Title', 'Explore Products'), desc: t('abuMall.ux3Desc', 'Examine jewelry from all angles. 360° view, zoom into details — the piece feels like a real object.') },
              { step: '04', title: t('abuMall.ux4Title', 'Purchase Experience'), desc: t('abuMall.ux4Desc', 'A calm, premium purchase process. No rush or stress — confidence in your decision with beautiful premium packaging.') },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start group">
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-amber-400 font-bold text-xl">{item.step}</span>
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

      {/* Key Features */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {t('abuMall.featuresTitle', 'Store & Showcase Features')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { icon: Store, title: t('abuMall.feat1Title', 'Virtual Storefronts'), desc: t('abuMall.feat1Desc', 'Each brand gets a unique virtual space with its own atmosphere, style, and mood') },
              { icon: Eye, title: t('abuMall.feat2Title', '360° Product View'), desc: t('abuMall.feat2Desc', 'Examine every cut, facet, and sparkle from every angle with full zoom capabilities') },
              { icon: MousePointerClick, title: t('abuMall.feat3Title', 'Virtual Try-On'), desc: t('abuMall.feat3Desc', 'See how jewelry looks on you — comfortable selection at your own pace') },
              { icon: Package, title: t('abuMall.feat4Title', 'Premium Delivery'), desc: t('abuMall.feat4Desc', 'Beautiful premium packaging with physical delivery visualization') },
              { icon: Palette, title: t('abuMall.feat5Title', 'Brand Showcases'), desc: t('abuMall.feat5Desc', 'Organized presentation of collections with individual category showcases') },
              { icon: Shield, title: t('abuMall.feat6Title', 'Trust & Authenticity'), desc: t('abuMall.feat6Desc', 'Every product authenticated with full certification and quality assurance') },
            ].map((item, i) => (
              <Card key={i} className="bg-card border-border/50 hover:border-amber-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/5">
                <CardContent className="p-6">
                  <item.icon className="w-8 h-8 text-amber-400 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                {t('abuMall.buyerValueTitle', 'Value for Buyers')}
              </h2>
              <div className="space-y-4">
                {[
                  t('abuMall.buyerV1', 'Greater confidence in purchase decisions'),
                  t('abuMall.buyerV2', 'More informed and conscious choice'),
                  t('abuMall.buyerV3', 'Less doubt and purchase anxiety'),
                  t('abuMall.buyerV4', 'Emotional satisfaction from the buying experience'),
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-card/50 border border-border/50">
                    <ChevronRight className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                {t('abuMall.brandValueTitle', 'Value for Brands')}
              </h2>
              <div className="space-y-4">
                {[
                  t('abuMall.brandV1', 'New format for product presentation — innovative showcase'),
                  t('abuMall.brandV2', 'Global storefront — access buyers worldwide'),
                  t('abuMall.brandV3', 'Differentiation through experience, not price'),
                  t('abuMall.brandV4', 'Reduced price competition — focus on value, not discounts'),
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-card/50 border border-border/50">
                    <ChevronRight className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Go-to-Market Strategy */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {t('abuMall.strategyTitle', 'Go-to-Market Strategy')}
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {[
              { step: '01', title: t('abuMall.strat1Title', 'Amazon Brand Registry Launch'), desc: t('abuMall.strat1Desc', 'Start with 3 proprietary jewelry brands on Amazon — creating unique collections on a proven platform to validate demand and reduce risk.') },
              { step: '02', title: t('abuMall.strat2Title', 'Proof of Concept'), desc: t('abuMall.strat2Desc', 'One virtual mall, limited number of stores, 1–2 product categories. Test user behavior, measure conversion, assess impact on average order value.') },
              { step: '03', title: t('abuMall.strat3Title', 'Abu Mall Platform Launch'), desc: t('abuMall.strat3Desc', 'Transition to Abu Mall as an independent environment — scale to additional platforms, launch proprietary platform, expand presence.') },
              { step: '04', title: t('abuMall.strat4Title', 'Scale & Industry Standard'), desc: t('abuMall.strat4Desc', 'Expand stores, onboard external brands, develop platform as the industry standard. Support: web, mobile, VR (next phase).') },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start group">
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-amber-400 font-bold text-xl">{item.step}</span>
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

      {/* Revenue Model */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {t('abuMall.revenueTitle', 'Revenue Model')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: Store, title: t('abuMall.rev1Title', 'Premium Storefronts'), desc: t('abuMall.rev1Desc', 'Brands pay for virtual space — premium stores and showcase areas within the mall') },
              { icon: BarChart3, title: t('abuMall.rev2Title', 'Sales Commission'), desc: t('abuMall.rev2Desc', 'Percentage from each transaction processed through the Abu Mall platform') },
              { icon: Users, title: t('abuMall.rev3Title', 'Brand Services'), desc: t('abuMall.rev3Desc', 'Analytics, marketing, and support services for brands — data-driven insights and tools') },
            ].map((item, i) => (
              <Card key={i} className="bg-gradient-to-b from-card to-card/50 border-amber-500/10 text-center hover:border-amber-500/30 transition-all">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-amber-500/10 flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-8 h-8 text-amber-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('abuMall.visionTitle', 'The Future of Abu Mall')}
          </h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>{t('abuMall.vision1', 'The digital shopping center for the jewelry industry')}</p>
            <p>{t('abuMall.vision2', 'A new standard for online sales of premium goods')}</p>
            <p>{t('abuMall.vision3', 'A space where value matters more than speed')}</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#1a140a] to-[#2a1f0a]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t('abuMall.ctaTitle', 'Interested in Abu Mall?')}
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            {t('abuMall.ctaDesc', 'Abu Mall is a pragmatic, premium e-commerce project built on real sales, real economics, and real market needs.')}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-10 py-6 text-lg">
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

export default AbuMall;
