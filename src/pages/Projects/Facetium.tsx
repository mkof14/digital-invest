import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  ArrowLeft, ArrowRight, ShoppingBag, Eye, Gem, Store, Globe, MapPin,
  Sparkles, MousePointerClick, Package, TrendingUp, Users,
  ChevronRight, Shield, BarChart3, Palette,
} from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import OptimizedImage from '@/components/OptimizedImage';
import InterestForm from '@/components/InterestForm';
import InvestorPageDisclaimer from '@/components/InvestorPageDisclaimer';
import ProjectMediaRoomBySlug from '@/components/ProjectMediaRoomBySlug';
import facetiumLogo from '@/assets/projects/facetium-logo.png.asset.json';
import facetiumEntrance from '@/assets/projects/facetium-entrance.png.asset.json';
import facetiumNetwork from '@/assets/projects/facetium-network.png.asset.json';
import facetiumWorld from '@/assets/projects/facetium-world.png.asset.json';
import facetiumHeadquarters from '@/assets/projects/facetium-headquarters.jpg.asset.json';
import interiorImg from '@/assets/projects/facetium-hero.jpg';

const Facetium = () => {
  const [showInterestForm, setShowInterestForm] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <OptimizedImage
            src={facetiumEntrance.url}
            alt="FACETIUM destination entrance"
            containerClassName="w-full h-full"
            className="w-full h-full object-cover"
            showSkeleton={false}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d0b08]/95 via-[#0d0b08]/85 to-[#0d0b08]/50" />
        </div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-3xl">
            <Link
              to="/projects"
              className="inline-flex items-center text-amber-300/70 hover:text-amber-300 mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Projects
            </Link>
            <img
              src={facetiumLogo.url}
              alt="FACETIUM"
              width={640}
              height={205}
              className="h-16 md:h-24 w-auto object-contain mb-6"
            />
            <Badge className="mb-4 bg-amber-500/20 text-amber-300 border-amber-500/30 text-sm px-4 py-1">
              A Network of Digital Commercial Environments
            </Badge>
            <p className="text-xl md:text-2xl text-amber-200/80 font-light italic mb-6">
              Enter a place built for commerce
            </p>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
              Commerce becomes a place. Walk in. Look around. Try. Talk. Buy. FACETIUM builds
              spatial digital environments for high-value goods — physical architecture reimagined,
              complex products decoded, human service preserved.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8 py-6 text-lg"
                onClick={() => setShowInterestForm(true)}
              >
                <TrendingUp className="w-5 h-5 mr-2" />
                Express Interest
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-amber-400/40 text-amber-200 hover:bg-amber-500/10 px-8 py-6 text-lg"
              >
                <a href="https://facetium.com" target="_blank" rel="noopener noreferrer">
                  <Globe className="w-5 h-5 mr-2" />
                  facetium.com
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Visual gallery */}
      <section className="py-16 bg-[#0d0b08]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { src: facetiumNetwork.url, alt: 'FACETIUM network of digital commercial environments', caption: 'A network of digital commercial environments' },
              { src: facetiumWorld.url, alt: 'FACETIUM digital world for commerce', caption: 'A digital world for commerce' },
              { src: facetiumHeadquarters.url, alt: 'FACETIUM flagship destination architecture', caption: 'Architecture designed as a destination' },
            ].map((item, i) => (
              <figure key={i} className="group overflow-hidden rounded-xl border border-amber-500/15 bg-black/40">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <figcaption className="p-4 text-sm text-amber-200/70">{item.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>


      {/* Positioning */}
      <section className="py-20 bg-gradient-to-b from-[#14100a] to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Market Context</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              High-value goods are not standard e-commerce products. Price, emotion and the need for
              trust make flat online catalogs ineffective at conveying craftsmanship, scale and value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Gem, title: 'High Value', desc: 'Significant purchases require a considered approach to presentation and decision-making' },
              { icon: Sparkles, title: 'Emotional Decision', desc: 'Buying is tied to feelings and life moments — not a transactional click' },
              { icon: Shield, title: 'Trust Required', desc: 'Confidence in quality and authenticity is critical for conversion and loyalty' },
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

      {/* Problem */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">The Problem</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Classic luxury e-commerce fails to deliver the experience customers expect
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Flat visual experience — static photos do not convey beauty and detail',
                'No sense of scale, weight or finish on a standard product page',
                'High anxiety before purchase — doubt and fear of making a mistake',
                'No emotional connection with the product before buying',
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

      {/* Concept */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">The Core Idea</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            FACETIUM is a spatial digital environment. Not a website. Not a marketplace. Not a
            metaverse. A place people enter, navigate, explore and return to.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Store, label: 'Not a Website' },
              { icon: ShoppingBag, label: 'Not a Marketplace' },
              { icon: Globe, label: 'A Spatial Digital Environment' },
            ].map((item, i) => (
              <div key={i} className="rounded-xl border border-amber-500/20 bg-card/50 p-6">
                <item.icon className="w-10 h-10 text-amber-400 mx-auto mb-3" />
                <p className="font-medium">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">The Experience</h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Navigation is intuitive, exactly as it is in the physical world
          </p>
          <div className="max-w-4xl mx-auto space-y-8">
            {[
              { step: '01', title: 'Enter the Space', desc: 'Step into a bright architectural environment. The first impression sets a premium tone.' },
              { step: '02', title: 'Walk the Destination', desc: 'Move freely between boutiques and galleries with complete freedom of choice.' },
              { step: '03', title: 'Explore the Product', desc: 'Examine each piece from every angle — 360° views and deep zoom on detail and finish.' },
              { step: '04', title: 'Decide with Confidence', desc: 'A calm, unhurried purchase journey with premium presentation and clear provenance.' },
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

      {/* Features */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Platform Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { icon: Store, title: 'Branded Environments', desc: 'Each brand receives a distinct spatial identity, atmosphere and storyline' },
              { icon: Eye, title: '360° Product View', desc: 'Every facet, cut and reflection explored from any angle with full zoom' },
              { icon: MousePointerClick, title: 'Virtual Try-On', desc: 'See how a piece looks before deciding — comfortable selection at your own pace' },
              { icon: Package, title: 'Premium Fulfilment', desc: 'Presentation-grade packaging and transparent delivery visualisation' },
              { icon: Palette, title: 'Curated Galleries', desc: 'Collections and categories presented as curated exhibitions, not grids' },
              { icon: Shield, title: 'Authenticity & Provenance', desc: 'Certification and provenance surfaced throughout the experience' },
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

      {/* Value */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Value for Buyers</h2>
              <div className="space-y-4">
                {[
                  'Greater confidence in purchase decisions',
                  'More informed and considered choice',
                  'Less doubt and purchase anxiety',
                  'Emotional satisfaction from the experience itself',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-card/50 border border-border/50">
                    <ChevronRight className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Value for Brands</h2>
              <div className="space-y-4">
                {[
                  'A new format for presenting products and collections',
                  'A global destination reaching buyers worldwide',
                  'Differentiation through experience rather than price',
                  'Reduced discount pressure — focus on value',
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

      {/* Destinations */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Destinations</h2>
            <p className="text-muted-foreground">
              FACETIUM environments are designed as destinations, each with its own architecture,
              light and character.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: 'Abu Dhabi', desc: 'The flagship FACETIUM destination — a luxury environment inspired by Gulf architecture and light.' },
              { title: 'Brand Boutiques', desc: 'Dedicated spaces where individual houses present their world on their own terms.' },
              { title: 'Seasonal Galleries', desc: 'Temporary exhibitions and collection launches staged as spatial events.' },
            ].map((item, i) => (
              <Card key={i} className="bg-card/50 border-amber-500/10 hover:border-amber-500/30 transition-all duration-300">
                <CardContent className="p-6">
                  <MapPin className="w-7 h-7 text-amber-400 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Strategy */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Go-to-Market Strategy</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {[
              { step: '01', title: 'Own Brands First', desc: 'Launch proprietary collections on established channels to validate demand and reduce risk.' },
              { step: '02', title: 'Proof of Concept', desc: 'One environment, a limited set of boutiques and categories. Measure behaviour, conversion and order value.' },
              { step: '03', title: 'FACETIUM Platform', desc: 'Move to FACETIUM as an independent destination with web and mobile experiences.' },
              { step: '04', title: 'Scale & Standard', desc: 'Onboard external houses and extend the platform, with immersive formats in a later phase.' },
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

      {/* Revenue model */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Revenue Model</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: Store, title: 'Premium Spaces', desc: 'Brands hold dedicated environments and showcase areas within the destination' },
              { icon: BarChart3, title: 'Transaction Fees', desc: 'A share of each transaction processed through the FACETIUM platform' },
              { icon: Users, title: 'Brand Services', desc: 'Analytics, content production and marketing support for participating houses' },
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
      <section className="py-20">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">The Future of FACETIUM</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>A digital destination for the luxury and high-value goods industry</p>
            <p>A new standard for presenting premium products online</p>
            <p>A space where value matters more than speed</p>
          </div>
        </div>
      </section>

      {/* Media Room */}
      <ProjectMediaRoomBySlug slug="facetium" fallbackTitle="FACETIUM" />

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#14100a] to-[#2a1f0a]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Interested in FACETIUM?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            FACETIUM is a pragmatic, premium project built on real products, real economics and real
            market needs. All expressions of interest are non-binding.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              size="lg"
              className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-10 py-6 text-lg"
              onClick={() => setShowInterestForm(true)}
            >
              Submit Interest <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Link to="/projects">
              <Button size="lg" variant="outline" className="border-gray-500 text-gray-300 hover:bg-white/5 px-10 py-6 text-lg">
                Back to Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <InvestorPageDisclaimer />
        </div>
      </section>

      <InterestForm
        projectId="facetium"
        projectTitle="FACETIUM"
        open={showInterestForm}
        onOpenChange={setShowInterestForm}
      />
      <Footer />
    </div>
  );
};

export default Facetium;
</content>
</invoke>
<invoke name="code--exec">
<parameter name="command">rg -n "abu-mall|AbuMall" src/App.tsx src/pages/AdamasMaterials/index.tsx src/pages/AdamasMaterials/AdamasProjectDetail.tsx; echo ---; sed -n 150,175p src/pages/ResourcesLibrary.tsx; echo ---; sed -n 305,315p public/sitemap.xml; echo ---; rg -n "Navigate|1inow" src/App.tsx | head