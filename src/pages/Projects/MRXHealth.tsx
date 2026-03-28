import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  TrendingUp, ArrowRight, ExternalLink, Pill, Activity, Shield, 
  BarChart3, Users, Stethoscope, Brain, AlertTriangle, ChevronRight,
  Scan, HeartPulse, FileText, Clock
} from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import InvestorPageDisclaimer from '@/components/InvestorPageDisclaimer';
import mrxHero from '@/assets/projects/mrx-hero.jpg';

const MRXHealth = () => {
  const [project, setProject] = useState<any>(null);

  useEffect(() => {
    const fetchProject = async () => {
      const { data } = await supabase
        .from('projects')
        .select('*')
        .eq('slug', 'mrx-health')
        .single();
      if (data) setProject(data);
    };
    fetchProject();
  }, []);

  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-background theme-mrx-health">
      <Navigation />

      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={mrxHero} alt="MRX.Health" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/95 via-[#0a1628]/80 to-[#0a1628]/60" />
        </div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-cyan-500/20 text-cyan-300 border-cyan-500/30 text-sm px-4 py-1">
              {t('projectMRXHealth.heroBadge')}
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-2 tracking-tight">
              MRX<span className="text-cyan-400">.Health</span>
            </h1>
            <p className="text-xl md:text-2xl text-cyan-200/80 font-light tracking-widest uppercase mb-6">
              {t('projectMRXHealth.heroTagline')}
            </p>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
              {t('projectMRXHealth.heroDesc')}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-6 text-lg">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  {t('projectMRXHealth.expressInterest')}
                </Button>
              </Link>
              {project?.website_url && (
                <a href={project.website_url} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="border-cyan-400/40 text-cyan-300 hover:bg-cyan-500/10 px-8 py-6 text-lg">
                    <ExternalLink className="w-5 h-5 mr-2" />
                    {t('projectCommon.visitWebsite')}
                  </Button>
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-[#0a1628] to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('projectMRXHealth.whatIsTitle')}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{t('projectMRXHealth.whatIsDesc')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Pill, n: 1 }, { icon: Scan, n: 2 }, { icon: Activity, n: 3 }, { icon: Shield, n: 4 },
            ].map((item) => (
              <Card key={item.n} className="bg-card/50 border-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 rounded-xl bg-cyan-500/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{t(`projectMRXHealth.feat${item.n}Title`)}</h3>
                  <p className="text-sm text-muted-foreground">{t(`projectMRXHealth.feat${item.n}Desc`)}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">{t('projectMRXHealth.howItWorksTitle')}</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {[
              { icon: Pill, n: 1 }, { icon: Scan, n: 2 }, { icon: HeartPulse, n: 3 }, { icon: FileText, n: 4 },
            ].map((item) => (
              <div key={item.n} className="flex gap-6 items-start group">
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-cyan-600/10 border border-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-cyan-400 font-bold text-xl">{String(item.n).padStart(2, '0')}</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                    <item.icon className="w-5 h-5 text-cyan-400" />
                    {t(`projectMRXHealth.step${item.n}Title`)}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{t(`projectMRXHealth.step${item.n}Desc`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">{t('projectMRXHealth.capabilitiesTitle')}</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">{t('projectMRXHealth.capabilitiesSubtitle')}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { icon: Pill, n: 1 }, { icon: Brain, n: 2 }, { icon: Shield, n: 3 },
              { icon: BarChart3, n: 4 }, { icon: Stethoscope, n: 5 }, { icon: Clock, n: 6 },
            ].map((item) => (
              <Card key={item.n} className="bg-card border-border/50 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/5">
                <CardContent className="p-6">
                  <item.icon className="w-8 h-8 text-cyan-400 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{t(`projectMRXHealth.cap${item.n}Title`)}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t(`projectMRXHealth.cap${item.n}Desc`)}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t('projectMRXHealth.whoTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: Users, n: 1 }, { icon: Stethoscope, n: 2 }, { icon: HeartPulse, n: 3 },
            ].map((item) => (
              <Card key={item.n} className="bg-gradient-to-b from-card to-card/50 border-cyan-500/10 text-center hover:border-cyan-500/30 transition-all">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-cyan-500/10 flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{t(`projectMRXHealth.who${item.n}Title`)}</h3>
                  <p className="text-muted-foreground">{t(`projectMRXHealth.who${item.n}Desc`)}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <AlertTriangle className="w-10 h-10 text-amber-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">{t('projectMRXHealth.disclaimerTitle')}</h3>
            <p className="text-muted-foreground leading-relaxed text-lg">{t('projectMRXHealth.disclaimerDesc')}</p>
            <p className="text-sm text-muted-foreground mt-4 italic">{t('projectMRXHealth.disclaimerQuote')}</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t('projectMRXHealth.investTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-card/50 border border-border/50">
                <ChevronRight className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                <p className="text-muted-foreground">{t(`projectMRXHealth.invest${i}`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-[#0a1628] to-[#0d2137]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{t('projectMRXHealth.ctaTitle')}</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">{t('projectMRXHealth.ctaDesc')}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white px-10 py-6 text-lg">
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

export default MRXHealth;
