import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Moon, Salad, Activity, Clock, Brain, Sparkles, ArrowLeft } from 'lucide-react';
import OptimizedImage from '@/components/OptimizedImage';
import longevitycoreHero from '@/assets/projects/longevitycore-hero.jpg';

const LongevityCore = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <OptimizedImage
          src={longevitycoreHero}
          alt="Longevity - Personalized Longevity Planning Platform"
          containerClassName="absolute inset-0 w-full h-full"
          className="w-full h-full object-cover"
          showSkeleton={false}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
        
        <div className="relative z-10 container mx-auto px-4">
          <Link to="/projects" className="animate-fade-in">
            <button className="inline-flex items-center mb-4 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t('projectCommon.backToProjects')}
            </button>
          </Link>
          <div className="max-w-3xl animate-fade-in" style={{ animationDelay: '0.1s', animationFillMode: 'backwards' }}>
            <div className="inline-block px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full mb-6">
              <span className="text-primary font-semibold">{t('projectLongevityCore.badge')}</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">Longevity</h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">{t('projectLongevityCore.heroSubtitle')}</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">{t('projectLongevityCore.overviewTitle')}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">{t('projectLongevityCore.overviewP1')}</p>
            <p className="text-lg text-muted-foreground leading-relaxed">{t('projectLongevityCore.overviewP2')}</p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">{t('projectLongevityCore.coreFunctionsTitle')}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: Moon, n: 1 }, { icon: Salad, n: 2 }, { icon: Activity, n: 3 },
                { icon: Clock, n: 4 }, { icon: Brain, n: 5 }, { icon: Sparkles, n: 6 },
              ].map((item) => (
                <Card key={item.n} className="border-border/50 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <item.icon className="w-10 h-10 text-primary mb-4" />
                    <CardTitle>{t(`projectLongevityCore.func${item.n}Title`)}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{t(`projectLongevityCore.func${item.n}Desc`)}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">{t('projectLongevityCore.howItWorksTitle')}</h2>
            <div className="space-y-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="border-l-4 border-primary pl-6 py-4">
                  <h3 className="text-xl font-semibold mb-3">{t(`projectLongevityCore.step${i}Title`)}</h3>
                  <p className="text-muted-foreground">{t(`projectLongevityCore.step${i}Desc`)}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">{t('projectLongevityCore.benefitsTitle')}</h2>
            <div className="bg-muted/30 rounded-lg p-8">
              <ul className="space-y-4">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-primary mr-3 text-xl">•</span>
                    <span className="text-muted-foreground">{t(`projectLongevityCore.benefit${i}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">{t('projectLongevityCore.ecosystemTitle')}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">{t('projectLongevityCore.ecosystemDesc')}</p>
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-4">{t('projectLongevityCore.designTitle')}</h3>
              <div className="space-y-4">
                {[
                  { label: 'designData', desc: 'designDataDesc' },
                  { label: 'designHolistic', desc: 'designHolisticDesc' },
                  { label: 'designLongTerm', desc: 'designLongTermDesc' },
                  { label: 'designPersonal', desc: 'designPersonalDesc' },
                ].map((item) => (
                  <p key={item.label} className="text-muted-foreground">
                    <strong className="text-foreground">{t(`projectLongevityCore.${item.label}`)}</strong>{' '}
                    {t(`projectLongevityCore.${item.desc}`)}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">{t('projectLongevityCore.idealForTitle')}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="border border-border/50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">{t(`projectLongevityCore.ideal${i}Title`)}</h3>
                  <p className="text-muted-foreground">{t(`projectLongevityCore.ideal${i}Desc`)}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-muted/20 border-l-4 border-primary p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">{t('projectLongevityCore.legalTitle')}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{t('projectLongevityCore.legalText')}</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LongevityCore;
