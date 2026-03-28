import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  TrendingUp, ArrowRight, ExternalLink, ChefHat, Clock, ShieldCheck,
  Truck, CalendarCheck, Users, UtensilsCrossed, Leaf, ChevronRight,
  MapPin, ArrowLeft
} from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import InvestorPageDisclaimer from '@/components/InvestorPageDisclaimer';
import heroImg from '@/assets/projects/tableserved-hero.jpg';

const TableServed = () => {
  const [project, setProject] = useState<any>(null);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchProject = async () => {
      const { data } = await supabase
        .from('projects')
        .select('*')
        .eq('slug', 'table-served')
        .single();
      if (data) setProject(data);
    };
    fetchProject();
  }, []);

  return (
    <div className="min-h-screen bg-background theme-tableserved">
      <Navigation />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="TableServed — Weekly Family Nutrition" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1408]/95 via-[#1a1408]/80 to-[#1a1408]/50" />
        </div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-3xl">
            <Link to="/projects" className="inline-flex items-center text-amber-300/70 hover:text-amber-300 mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" /> {t('projectCommon.backToProjects')}
            </Link>
            <Badge className="mb-4 bg-amber-500/20 text-amber-300 border-amber-500/30 text-sm px-4 py-1">
              {t('projectTableServed.badge')}
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-2 tracking-tight">
              Table<span className="text-amber-400">Served</span>
            </h1>
            <p className="text-xl md:text-2xl text-amber-200/70 font-light italic mb-6">
              {t('projectTableServed.heroSubtitle')}
            </p>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
              {t('projectTableServed.heroDesc')}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8 py-6 text-lg">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  {t('projectCommon.expressInterest')}
                </Button>
              </Link>
              {project?.website_url && (
                <a href={project.website_url} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="border-amber-400/40 text-amber-300 hover:bg-amber-500/10 px-8 py-6 text-lg">
                    <ExternalLink className="w-5 h-5 mr-2" /> {t('projectCommon.visitWebsite')}
                  </Button>
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* What is TableServed */}
      <section className="py-20 bg-gradient-to-b from-[#1a1408] to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('projectTableServed.whatIsTitle')}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('projectTableServed.whatIsDesc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: ChefHat, title: t('projectTableServed.feat1Title'), desc: t('projectTableServed.feat1Desc') },
              { icon: CalendarCheck, title: t('projectTableServed.feat2Title'), desc: t('projectTableServed.feat2Desc') },
              { icon: UtensilsCrossed, title: t('projectTableServed.feat3Title'), desc: t('projectTableServed.feat3Desc') },
              { icon: MapPin, title: t('projectTableServed.feat4Title'), desc: t('projectTableServed.feat4Desc') },
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

      {/* The Protocol — How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            {t('projectTableServed.protocolTitle')}
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            {t('projectTableServed.protocolSubtitle')}
          </p>
          <div className="max-w-4xl mx-auto space-y-8">
            {[
              { step: '01', title: t('projectTableServed.proto1Title'), desc: t('projectTableServed.proto1Desc') },
              { step: '02', title: t('projectTableServed.proto2Title'), desc: t('projectTableServed.proto2Desc') },
              { step: '03', title: t('projectTableServed.proto3Title'), desc: t('projectTableServed.proto3Desc') },
              { step: '04', title: t('projectTableServed.proto4Title'), desc: t('projectTableServed.proto4Desc') },
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
            {t('projectTableServed.keyFeaturesTitle')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { icon: ShieldCheck, title: t('projectTableServed.kf1Title'), desc: t('projectTableServed.kf1Desc') },
              { icon: Leaf, title: t('projectTableServed.kf2Title'), desc: t('projectTableServed.kf2Desc') },
              { icon: Users, title: t('projectTableServed.kf3Title'), desc: t('projectTableServed.kf3Desc') },
              { icon: Clock, title: t('projectTableServed.kf4Title'), desc: t('projectTableServed.kf4Desc') },
              { icon: Truck, title: t('projectTableServed.kf5Title'), desc: t('projectTableServed.kf5Desc') },
              { icon: CalendarCheck, title: t('projectTableServed.kf6Title'), desc: t('projectTableServed.kf6Desc') },
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

      {/* Who It Serves */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {t('projectTableServed.whoTitle')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: Users, title: t('projectTableServed.who1Title'), desc: t('projectTableServed.who1Desc') },
              { icon: ChefHat, title: t('projectTableServed.who2Title'), desc: t('projectTableServed.who2Desc') },
              { icon: MapPin, title: t('projectTableServed.who3Title'), desc: t('projectTableServed.who3Desc') },
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

      {/* Investment Highlights */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {t('projectTableServed.investTitle')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              t('projectTableServed.investL1'),
              t('projectTableServed.investL2'),
              t('projectTableServed.investL3'),
              t('projectTableServed.investL4'),
              t('projectTableServed.investL5'),
              t('projectTableServed.investL6'),
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-card/50 border border-border/50">
                <ChevronRight className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                <p className="text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#1a1408] to-[#2a1f0a]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t('projectTableServed.interestedTitle')}
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            {t('projectTableServed.interestedDesc')}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-10 py-6 text-lg">
                {t('projectCommon.submitInterest')} <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/projects">
              <Button size="lg" variant="outline" className="border-gray-500 text-gray-300 hover:bg-white/5 px-10 py-6 text-lg">
                {t('projectCommon.viewAllProjects')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <InvestorPageDisclaimer />
      </div>

      <Footer />
    </div>
  );
};

export default TableServed;
