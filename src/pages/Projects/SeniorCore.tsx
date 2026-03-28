import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bell, Heart, Activity, Calendar, Shield, Users, ArrowLeft } from 'lucide-react';
import OptimizedImage from '@/components/OptimizedImage';
import seniorcoreHero from '@/assets/projects/seniorcore-hero.jpg';

const SeniorCore = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <OptimizedImage
          src={seniorcoreHero}
          alt="Senior - Senior Support Platform"
          containerClassName="absolute inset-0 w-full h-full"
          className="w-full h-full object-cover"
          showSkeleton={false}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-background/30 to-background/5" />
        
        <div className="relative z-10 container mx-auto px-4">
          <Link to="/projects" className="animate-fade-in">
            <Button variant="ghost" size="sm" className="mb-6 hover:bg-background/80">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t('projectCommon.backToProjects')}
            </Button>
          </Link>
          <div className="max-w-3xl animate-fade-in" style={{ animationDelay: '0.1s', animationFillMode: 'backwards' }}>
            <div className="inline-block px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full mb-6">
              <span className="text-primary font-semibold">{t('projectSeniorCore.badge')}</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">Senior</h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">{t('projectSeniorCore.heroSubtitle')}</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">{t('projectSeniorCore.overviewTitle')}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">{t('projectSeniorCore.overviewP1')}</p>
            <p className="text-lg text-muted-foreground leading-relaxed">{t('projectSeniorCore.overviewP2')}</p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">{t('projectSeniorCore.coreFunctionsTitle')}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: Bell, n: 1 }, { icon: Activity, n: 2 }, { icon: Heart, n: 3 },
                { icon: Shield, n: 4 }, { icon: Calendar, n: 5 }, { icon: Users, n: 6 },
              ].map((item) => (
                <Card key={item.n} className="border-border/50 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <item.icon className="w-10 h-10 text-primary mb-4" />
                    <CardTitle>{t(`projectSeniorCore.func${item.n}Title`)}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{t(`projectSeniorCore.func${item.n}Desc`)}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">{t('projectSeniorCore.howItWorksTitle')}</h2>
            <div className="space-y-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="border-l-4 border-primary pl-6 py-4">
                  <h3 className="text-xl font-semibold mb-3">{t(`projectSeniorCore.step${i}Title`)}</h3>
                  <p className="text-muted-foreground">{t(`projectSeniorCore.step${i}Desc`)}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">{t('projectSeniorCore.benefitsTitle')}</h2>
            <div className="bg-muted/30 rounded-lg p-8">
              <ul className="space-y-4">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-primary mr-3 text-xl">•</span>
                    <span className="text-muted-foreground">{t(`projectSeniorCore.benefit${i}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">{t('projectSeniorCore.ecosystemTitle')}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">{t('projectSeniorCore.ecosystemDesc')}</p>
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-4">{t('projectSeniorCore.designTitle')}</h3>
              <div className="space-y-4">
                {[
                  { label: 'designAccess', desc: 'designAccessDesc' },
                  { label: 'designIndep', desc: 'designIndepDesc' },
                  { label: 'designCaregiver', desc: 'designCaregiverDesc' },
                  { label: 'designPractical', desc: 'designPracticalDesc' },
                ].map((item) => (
                  <p key={item.label} className="text-muted-foreground">
                    <strong className="text-foreground">{t(`projectSeniorCore.${item.label}`)}</strong>{' '}
                    {t(`projectSeniorCore.${item.desc}`)}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">{t('projectSeniorCore.idealForTitle')}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="border border-border/50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">{t(`projectSeniorCore.ideal${i}Title`)}</h3>
                  <p className="text-muted-foreground">{t(`projectSeniorCore.ideal${i}Desc`)}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-muted/20 border-l-4 border-primary p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">{t('projectSeniorCore.legalTitle')}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{t('projectSeniorCore.legalText')}</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SeniorCore;
