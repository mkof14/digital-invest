import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, ExternalLink, Moon, Heart, Shield, Users, Sparkles, Eye, Download, FileText } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import InvestorPageDisclaimer from '@/components/InvestorPageDisclaimer';
import InterestForm from '@/components/InterestForm';
import { InfographicsGallery, type Infographic } from '@/components/InfographicsGallery';
import lunaHero from '@/assets/projects/luna-hero.webp';
import lunaLogo from '@/assets/projects/luna-logo.webp';
import lunaInfographic from '@/assets/projects/luna-infographic.webp';

const lunaInfographics: Infographic[] = [
  {
    src: lunaInfographic,
    title: 'Luna: The Intelligence Layer for Women\'s Wellbeing',
    alt: 'Luna Balance architecture and intelligence layer infographic',
  },
];

const LunaBalance = () => {
  const [showInterestForm, setShowInterestForm] = useState(false);
  const [project, setProject] = useState<any>(null);

  useEffect(() => {
    const fetchProject = async () => {
      const { data } = await supabase
        .from('projects')
        .select('*')
        .eq('slug', 'luna-balance')
        .single();
      if (data) setProject(data);
    };
    fetchProject();
  }, []);

  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-background theme-luna">
      <Navigation />
      
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={lunaHero} alt="Luna Balance" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(320,30%,8%)]/95 via-background/70 to-background/40" />
        </div>
        <div className="container mx-auto px-4 relative z-10 py-24">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <img src={lunaLogo} alt="Luna Logo" className="h-20 w-20 object-contain" />
              <Badge className="project-badge">{t('projectLunaBalance.heroBadge')}</Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight project-glow-text">Luna Balance</h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 italic">{t('projectLunaBalance.heroSubtitle')}</p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">{t('projectLunaBalance.heroDesc')}</p>
            <p className="text-sm text-muted-foreground mb-8">{t('projectLunaBalance.portfolioNote')}</p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" onClick={() => setShowInterestForm(true)} className="text-lg px-8">
                {t('projectLunaBalance.submitInterest')}
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg px-8">
                <a href="/documents/luna-self-understanding.pdf" target="_blank" rel="noopener noreferrer" download="LUNA-Your-Path-to-Self.pdf">
                  <FileText className="w-5 h-5 mr-2" />
                  LUNA: Your Path to Self (PDF)
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg px-8">
                <a href="/documents/luna-state-intelligence.pdf" target="_blank" rel="noopener noreferrer" download="Luna-State-Intelligence.pdf">
                  <FileText className="w-5 h-5 mr-2" />
                  Luna: State Intelligence (PDF)
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <section className="mb-20">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('projectLunaBalance.philosophyTitle')}</h2>
            <p className="text-lg text-muted-foreground italic mb-8">{t('projectLunaBalance.philosophySubtitle')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Moon, n: 1 }, { icon: Sparkles, n: 2 }, { icon: Heart, n: 3 }, { icon: Shield, n: 4 },
            ].map((item) => (
              <Card key={item.n} className="text-center border-border/50 hover:shadow-elevated transition-all duration-300">
                <CardContent className="pt-8 pb-6">
                  <item.icon className="w-10 h-10 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">{t(`projectLunaBalance.phil${item.n}Title`)}</h3>
                  <p className="text-sm text-muted-foreground">{t(`projectLunaBalance.phil${item.n}Desc`)}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('projectLunaBalance.problemTitle')}</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <ul className="space-y-4 text-muted-foreground">
                  {[1, 2, 3].map((i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Moon className="w-5 h-5 mt-1 text-primary shrink-0" />
                      <span>{t(`projectLunaBalance.prob${i}`)}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10">
                <h3 className="text-xl font-semibold mb-4 text-primary">{t('projectLunaBalance.lunaApproachTitle')}</h3>
                <p className="text-muted-foreground">{t('projectLunaBalance.lunaApproachDesc')}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('projectLunaBalance.silenceTitle')}</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <ul className="space-y-4">
                  {[1, 2, 3, 4].map((i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Eye className="w-5 h-5 mt-1 text-primary shrink-0" />
                      <span className="text-muted-foreground">{t(`projectLunaBalance.silence${i}`)}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-muted/30 rounded-2xl p-8 border border-border/50">
                <h3 className="text-xl font-semibold mb-4">{t('projectLunaBalance.relationshipTitle')}</h3>
                <ul className="space-y-3 text-muted-foreground text-sm">
                  {[1, 2, 3].map((i) => (
                    <li key={i}>🌙 {t(`projectLunaBalance.rel${i}`)}</li>
                  ))}
                </ul>
                <p className="text-xs text-muted-foreground mt-4 italic">{t('projectLunaBalance.relFooter')}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">{t('projectLunaBalance.whatGivesTitle')}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: Shield, n: 1 }, { icon: Heart, n: 2 }, { icon: Sparkles, n: 3 }, { icon: Users, n: 4 },
              ].map((item) => (
                <Card key={item.n} className="border-border/50 hover:shadow-elevated transition-all duration-300">
                  <CardContent className="flex items-start gap-4 pt-6">
                    <item.icon className="w-8 h-8 text-primary shrink-0" />
                    <p className="text-muted-foreground">{t(`projectLunaBalance.give${item.n}`)}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">{t('projectLunaBalance.audienceTitle')}</h2>
            <p className="text-lg text-muted-foreground mb-6 italic">{t('projectLunaBalance.audienceSubtitle')}</p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Users, n: 1 }, { icon: Sparkles, n: 2 }, { icon: Heart, n: 3 },
              ].map((item) => (
                <Card key={item.n} className="border-border/50">
                  <CardContent className="pt-6 text-center">
                    <item.icon className="w-10 h-10 mx-auto mb-4 text-primary" />
                    <h3 className="font-semibold mb-2">{t(`projectLunaBalance.aud${item.n}Title`)}</h3>
                    <p className="text-sm text-muted-foreground">{t(`projectLunaBalance.aud${item.n}Desc`)}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('projectLunaBalance.visionTitle')}</h2>
            <p className="text-xl text-muted-foreground italic mb-4">{t('projectLunaBalance.visionSubtitle')}</p>
            <div className="bg-primary/5 rounded-2xl p-10 border border-primary/10 max-w-2xl mx-auto">
              <p className="text-lg text-muted-foreground mb-4">{t('projectLunaBalance.vision1')}</p>
              <p className="text-muted-foreground mb-4">{t('projectLunaBalance.vision2')}</p>
              <p className="text-muted-foreground font-medium">{t('projectLunaBalance.vision3')}</p>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <a href="https://www.luna29.com" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 text-lg font-medium transition-colors">
              <ExternalLink className="w-5 h-5" /> www.luna29.com
            </a>
          </div>
        </section>

        <section className="mb-20">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">{t('projectLunaBalance.infographicsTitle')}</h2>
            <InfographicsGallery infographics={lunaInfographics} projectTitle="Luna Balance" />
          </div>
        </section>

        <section className="mb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">{t('projectLunaBalance.presentationTitle')}</h2>
            <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300">
              <CardContent className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{t('projectLunaBalance.presentationName')}</h3>
                    <p className="text-sm text-muted-foreground">{t('projectLunaBalance.presentationFormat')}</p>
                  </div>
                </div>
                <a href="/documents/luna-balance-presentation.pdf" download>
                  <Button variant="outline" className="gap-2">
                    <Download className="w-4 h-4" />
                    {t('projectLunaBalance.downloadPDF')}
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-16 text-center">
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" onClick={() => setShowInterestForm(true)} className="text-lg px-8">
              {t('projectLunaBalance.submitInterest')}
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg px-8">
              <a href="/documents/luna-self-understanding.pdf" target="_blank" rel="noopener noreferrer" download="LUNA-Your-Path-to-Self.pdf">
                <FileText className="w-5 h-5 mr-2" />
                LUNA: Your Path to Self (PDF)
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg px-8">
              <a href="/documents/luna-state-intelligence.pdf" target="_blank" rel="noopener noreferrer" download="Luna-State-Intelligence.pdf">
                <FileText className="w-5 h-5 mr-2" />
                Luna: State Intelligence (PDF)
              </a>
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-4 max-w-lg mx-auto">{t('projectLunaBalance.nonBinding')}</p>
        </section>

        <Link to="/projects" className="inline-flex items-center gap-2 text-primary hover:underline mb-8">
          <ArrowLeft className="w-4 h-4" /> {t('projectLunaBalance.backToProjects')}
        </Link>

        <div className="mt-12">
          <InvestorPageDisclaimer />
        </div>
      </div>

      <InterestForm
        projectId={project?.id || ''}
        projectTitle="Luna Balance"
        open={showInterestForm}
        onOpenChange={setShowInterestForm}
      />

      <Footer />
    </div>
  );
};

export default LunaBalance;
