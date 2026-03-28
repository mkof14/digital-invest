import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  TrendingUp, ArrowRight, ExternalLink, ArrowLeft, ChevronRight,
  ShieldCheck, Activity, Brain, Dna, HeartPulse, FlaskConical,
  Scan, FileText, Pill, Eye, Stethoscope, BarChart3, Users, Lock
} from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import InvestorPageDisclaimer from '@/components/InvestorPageDisclaimer';
import heroImg from '@/assets/projects/baseline-hero.jpg';
import logoImg from '@/assets/projects/baseline-logo.png';

const BaseLine = () => {
  const [project, setProject] = useState<any>(null);

  useEffect(() => {
    const fetchProject = async () => {
      const { data } = await supabase
        .from('projects')
        .select('*')
        .eq('slug', 'baseline')
        .single();
      if (data) setProject(data);
    };
    fetchProject();
  }, []);

  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="BaseLine — BioMath Core" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b1520]/95 via-[#0b1520]/80 to-[#0b1520]/50" />
        </div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-3xl">
            <Link to="/projects" className="inline-flex items-center text-slate-400 hover:text-slate-200 mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" /> {t('projectCommon.backToProjects')}
            </Link>
            <img src={logoImg} alt="BaseLine BioMath Core" className="h-16 md:h-20 mb-6" />
            <Badge className="mb-4 bg-teal-500/20 text-teal-300 border-teal-500/30 text-sm px-4 py-1">
              {t('projectBaseLine.heroBadge')}
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-2 tracking-tight">
              {t('projectBaseLine.heroTitle')}
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
              {t('projectBaseLine.heroDesc')}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-6 text-lg">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  {t('projectBaseLine.expressInterest')}
                </Button>
              </Link>
              {project?.website_url && (
                <a href={project.website_url} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="border-teal-400/40 text-teal-300 hover:bg-teal-500/10 px-8 py-6 text-lg">
                    <ExternalLink className="w-5 h-5 mr-2" /> {t('projectCommon.visitWebsite')}
                  </Button>
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-[#0b1520] to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('projectBaseLine.whatIsTitle')}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{t('projectBaseLine.whatIsDesc')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Dna, n: 1 }, { icon: Activity, n: 2 }, { icon: FlaskConical, n: 3 }, { icon: Brain, n: 4 },
            ].map((item) => (
              <Card key={item.n} className="bg-card/50 border-teal-500/10 hover:border-teal-500/30 transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 rounded-xl bg-teal-500/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-teal-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{t(`projectBaseLine.feat${item.n}Title`)}</h3>
                  <p className="text-sm text-muted-foreground">{t(`projectBaseLine.feat${item.n}Desc`)}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">{t('projectBaseLine.clinicalTitle')}</h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">{t('projectBaseLine.clinicalSubtitle')}</p>
          <div className="max-w-4xl mx-auto space-y-8">
            {[
              { icon: Lock, n: 1 }, { icon: HeartPulse, n: 2 }, { icon: FlaskConical, n: 3 }, { icon: Brain, n: 4 },
            ].map((item) => (
              <div key={item.n} className="flex gap-6 items-start group">
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500/20 to-teal-600/10 border border-teal-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-teal-400 font-bold text-xl">{String(item.n).padStart(2, '0')}</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                    <item.icon className="w-5 h-5 text-teal-400" />
                    {t(`projectBaseLine.clin${item.n}Title`)}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{t(`projectBaseLine.clin${item.n}Desc`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Brain className="w-12 h-12 text-teal-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('projectBaseLine.futureAITitle')}</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{t('projectBaseLine.futureAIDesc')}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <Card className="bg-card border-teal-500/20">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2 text-teal-400">{t('projectBaseLine.predictiveTitle')}</h3>
                  <p className="text-muted-foreground">{t('projectBaseLine.predictiveDesc')}</p>
                </CardContent>
              </Card>
              <Card className="bg-card border-teal-500/20">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2 text-teal-400">{t('projectBaseLine.statisticalTitle')}</h3>
                  <p className="text-muted-foreground">{t('projectBaseLine.statisticalDesc')}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t('projectBaseLine.clinicalServicesTitle')}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {[
              { icon: BarChart3, name: 'My Health Score' },
              { icon: FlaskConical, name: 'Lab Digest' },
              { icon: Brain, name: 'My Future AI' },
              { icon: Stethoscope, name: 'Symptom Helper' },
              { icon: ShieldCheck, name: 'Safety Check' },
              { icon: Activity, name: 'Recovery Tracker' },
              { icon: Dna, name: 'Genomic Review' },
              { icon: Scan, name: 'Neural Pain Map' },
              { icon: FileText, name: 'Orphan Review' },
              { icon: HeartPulse, name: 'Post-Viral Audit' },
              { icon: FileText, name: 'Procedure Audit' },
              { icon: ShieldCheck, name: 'Immunization Log' },
              { icon: Pill, name: 'Precision Refill' },
              { icon: Users, name: 'Condition Coach' },
              { icon: Pill, name: 'Meds Reminder' },
              { icon: BarChart3, name: 'Cost Planner' },
              { icon: Scan, name: 'Study Finder' },
              { icon: Brain, name: 'Insight Pro' },
              { icon: Eye, name: 'Vision Lab' },
              { icon: Brain, name: 'Neural Link' },
            ].map((item, i) => (
              <Card key={i} className="bg-card/50 border-border/50 hover:border-teal-500/30 transition-all">
                <CardContent className="p-4 flex flex-col items-center text-center gap-2">
                  <item.icon className="w-6 h-6 text-teal-400" />
                  <span className="text-sm font-medium">{item.name}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t('projectBaseLine.investTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-card/50 border border-border/50">
                <ChevronRight className="w-5 h-5 text-teal-400 mt-0.5 flex-shrink-0" />
                <p className="text-muted-foreground">{t(`projectBaseLine.invest${i}`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-[#0b1520] to-[#0d1f2d]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{t('projectBaseLine.ctaTitle')}</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">{t('projectBaseLine.ctaDesc')}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white px-10 py-6 text-lg">
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

export default BaseLine;
