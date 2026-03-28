import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Activity, AlertTriangle, TrendingDown, Shield, Eye, ArrowLeft } from 'lucide-react';
import OptimizedImage from '@/components/OptimizedImage';
import vitalcoreHero from '@/assets/projects/vitalcore-hero.jpg';

const VitalCore = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-background">
        <Navigation />

        <div className="relative h-[60vh] min-h-[500px] overflow-hidden">
          <OptimizedImage
            src={vitalcoreHero}
            alt="Vital - Early warning health signals platform"
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
                {t('projectVitalCore.badge')}
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-tech-animated">Vital</h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl">
                {t('projectVitalCore.heroSubtitle')}
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">{t('projectVitalCore.overviewTitle')}</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p>{t('projectVitalCore.overviewP1')}</p>
              <p>{t('projectVitalCore.overviewP2')}</p>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">{t('projectVitalCore.dataSourcesTitle')}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Heart, n: 1 }, { icon: Activity, n: 2 }, { icon: AlertTriangle, n: 3 },
                { icon: TrendingDown, n: 4 }, { icon: Shield, n: 5 }, { icon: Eye, n: 6 },
              ].map((item) => (
                <Card key={item.n}>
                  <CardHeader>
                    <item.icon className="w-10 h-10 text-primary mb-2" />
                    <CardTitle>{t(`projectVitalCore.src${item.n}Title`)}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{t(`projectVitalCore.src${item.n}Desc`)}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">{t('projectVitalCore.signalTitle')}</h2>
            <Card className="bg-muted/50">
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-6">{t('projectVitalCore.signalIntro')}</p>
                <div className="space-y-6">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i}>
                      <h3 className="text-xl font-semibold mb-2">{t(`projectVitalCore.sig${i}Title`)}</h3>
                      <p className="text-muted-foreground">{t(`projectVitalCore.sig${i}Desc`)}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">{t('projectVitalCore.alertsTitle')}</h2>
            <div className="space-y-6">
              {[1, 2, 3, 4].map((i) => (
                <Card key={i}>
                  <CardHeader><CardTitle>{t(`projectVitalCore.alert${i}Title`)}</CardTitle></CardHeader>
                  <CardContent><p className="text-muted-foreground">{t(`projectVitalCore.alert${i}Desc`)}</p></CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">{t('projectVitalCore.ecosystemTitle')}</h2>
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-4">{t('projectVitalCore.ecosystemIntro')}</p>
                <ul className="space-y-3 text-muted-foreground">
                  {['Sleep', 'Stress', 'Move', 'Core', 'Life'].map((key) => (
                    <li key={key}>
                      <strong>{t(`projectVitalCore.eco${key}`)}</strong>{' '}
                      {t(`projectVitalCore.eco${key}Desc`)}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">{t('projectVitalCore.useCasesTitle')}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <Card key={i}>
                  <CardHeader><CardTitle>{t(`projectVitalCore.use${i}Title`)}</CardTitle></CardHeader>
                  <CardContent><p className="text-sm text-muted-foreground">{t(`projectVitalCore.use${i}Desc`)}</p></CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <Card className="bg-muted/30 border-primary/20">
              <CardContent className="pt-6">
                <p className="text-sm text-muted-foreground">
                  <strong>{t('projectVitalCore.legalTitle')}:</strong>{' '}
                  {t('projectVitalCore.legalText')}
                </p>
              </CardContent>
            </Card>
          </section>
        </div>

        <Footer />
      </div>
  );
};

export default VitalCore;
