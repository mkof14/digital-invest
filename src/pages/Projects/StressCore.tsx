import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, Heart, Zap, TrendingUp, MessageSquare, Activity, ArrowLeft } from 'lucide-react';
import OptimizedImage from '@/components/OptimizedImage';
import stresscoreHero from '@/assets/projects/stresscore-hero.jpg';

const StressCore = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-background">
        <Navigation />

        <div className="relative h-[60vh] min-h-[500px] overflow-hidden">
          <OptimizedImage
            src={stresscoreHero}
            alt="Stress (Mind) - Psychological state intelligence platform"
            containerClassName="absolute inset-0 w-full h-full"
            className="w-full h-full object-cover"
            showSkeleton={false}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
          
          <div className="relative h-full container mx-auto px-4 flex flex-col justify-center">
            <Link to="/projects" className="animate-fade-in">
              <button className="inline-flex items-center mb-4 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                {t('projectCommon.backToProjects')}
              </button>
            </Link>
            <div className="animate-fade-in" style={{ animationDelay: '0.1s', animationFillMode: 'backwards' }}>
              <Badge className="w-fit mb-4 bg-primary/20 text-primary border-primary/30">
                {t('projectStressCore.badge')}
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-purple-animated">
                Stress (Mind)
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl">
                {t('projectStressCore.heroSubtitle')}
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">{t('projectStressCore.overviewTitle')}</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p>{t('projectStressCore.overviewP1')}</p>
              <p>{t('projectStressCore.overviewP2')}</p>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">{t('projectStressCore.coreElementsTitle')}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Brain, n: 1 }, { icon: Heart, n: 2 }, { icon: Zap, n: 3 },
                { icon: MessageSquare, n: 4 }, { icon: TrendingUp, n: 5 }, { icon: Activity, n: 6 },
              ].map((item) => (
                <Card key={item.n}>
                  <CardHeader>
                    <item.icon className="w-10 h-10 text-primary mb-2" />
                    <CardTitle>{t(`projectStressCore.elem${item.n}Title`)}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{t(`projectStressCore.elem${item.n}Desc`)}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">{t('projectStressCore.triadTitle')}</h2>
            <Card className="bg-muted/50">
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-6">{t('projectStressCore.triadIntro')}</p>
                <div className="space-y-6">
                  {['Stress', 'Mood', 'Energy'].map((key) => (
                    <div key={key}>
                      <h3 className="text-xl font-semibold mb-2">{t(`projectStressCore.triad${key}Title`)}</h3>
                      <p className="text-muted-foreground">{t(`projectStressCore.triad${key}Desc`)}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">{t('projectStressCore.guidanceTitle')}</h2>
            <div className="space-y-6">
              {[1, 2, 3].map((i) => (
                <Card key={i}>
                  <CardHeader><CardTitle>{t(`projectStressCore.guide${i}Title`)}</CardTitle></CardHeader>
                  <CardContent><p className="text-muted-foreground">{t(`projectStressCore.guide${i}Desc`)}</p></CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">{t('projectStressCore.useCasesTitle')}</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <Card key={i}>
                  <CardHeader><CardTitle>{t(`projectStressCore.use${i}Title`)}</CardTitle></CardHeader>
                  <CardContent><p className="text-muted-foreground">{t(`projectStressCore.use${i}Desc`)}</p></CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">{t('projectStressCore.ecosystemTitle')}</h2>
            <Card className="bg-muted/50">
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-4">{t('projectStressCore.ecosystemIntro')}</p>
                <ul className="space-y-3 text-muted-foreground">
                  {['Sleep', 'Move', 'Vital', 'Core', 'Life'].map((key) => (
                    <li key={key}>
                      <strong>{t(`projectStressCore.eco${key}`)}</strong>{' '}
                      {t(`projectStressCore.eco${key}Desc`)}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">{t('projectStressCore.marketTitle')}</h2>
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="pt-6">
                <p className="text-muted-foreground">{t('projectStressCore.marketDesc')}</p>
              </CardContent>
            </Card>
          </section>

          <section>
            <Card className="bg-muted/30 border-primary/20">
              <CardContent className="pt-6">
                <p className="text-sm text-muted-foreground">
                  <strong>{t('projectStressCore.legalTitle')}:</strong>{' '}
                  {t('projectStressCore.legalText')}
                </p>
              </CardContent>
            </Card>
          </section>
        </div>

        <Footer />
      </div>
  );
};

export default StressCore;
