import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, Activity, Clock, Lightbulb, BarChart3, Sparkles, ArrowLeft } from 'lucide-react';
import OptimizedImage from '@/components/OptimizedImage';
import bioagecoreHero from '@/assets/projects/bioagecore-hero.jpg';

const BioAgeCore = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <OptimizedImage
          src={bioagecoreHero}
          alt="BioAge - Biological Age Analysis Platform"
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
              <span className="text-primary font-semibold">{t('projectBioAgeCore.badge')}</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">BioAge</h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">{t('projectBioAgeCore.heroSubtitle')}</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">{t('projectBioAgeCore.overviewTitle')}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">{t('projectBioAgeCore.overviewP1')}</p>
            <p className="text-lg text-muted-foreground leading-relaxed">{t('projectBioAgeCore.overviewP2')}</p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">{t('projectBioAgeCore.coreFunctionsTitle')}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: Clock, titleKey: 'func1Title', descKey: 'func1Desc' },
                { icon: TrendingUp, titleKey: 'func2Title', descKey: 'func2Desc' },
                { icon: BarChart3, titleKey: 'func3Title', descKey: 'func3Desc' },
                { icon: Lightbulb, titleKey: 'func4Title', descKey: 'func4Desc' },
                { icon: Activity, titleKey: 'func5Title', descKey: 'func5Desc' },
                { icon: Sparkles, titleKey: 'func6Title', descKey: 'func6Desc' },
              ].map((item, i) => (
                <Card key={i} className="border-border/50 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <item.icon className="w-10 h-10 text-primary mb-4" />
                    <CardTitle>{t(`projectBioAgeCore.${item.titleKey}`)}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{t(`projectBioAgeCore.${item.descKey}`)}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">{t('projectBioAgeCore.howItWorksTitle')}</h2>
            <div className="space-y-6">
              {['step1', 'step2', 'step3', 'step4'].map((step) => (
                <div key={step} className="border-l-4 border-primary pl-6 py-4">
                  <h3 className="text-xl font-semibold mb-3">{t(`projectBioAgeCore.${step}Title`)}</h3>
                  <p className="text-muted-foreground">{t(`projectBioAgeCore.${step}Desc`)}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">{t('projectBioAgeCore.signalsTitle')}</h2>
            <div className="bg-muted/30 rounded-lg p-8">
              <ul className="space-y-4">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-primary mr-3 text-xl">•</span>
                    <span className="text-muted-foreground">{t(`projectBioAgeCore.signal${i}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">{t('projectBioAgeCore.ecosystemTitle')}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">{t('projectBioAgeCore.ecosystemDesc')}</p>
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-4">{t('projectBioAgeCore.integrationTitle')}</h3>
              <div className="space-y-4">
                {[
                  { label: 'intSleep', desc: 'intSleepDesc' },
                  { label: 'intStress', desc: 'intStressDesc' },
                  { label: 'intVital', desc: 'intVitalDesc' },
                  { label: 'intMove', desc: 'intMoveDesc' },
                ].map((item) => (
                  <p key={item.label} className="text-muted-foreground">
                    <strong className="text-foreground">{t(`projectBioAgeCore.${item.label}`)}</strong>{' '}
                    {t(`projectBioAgeCore.${item.desc}`)}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">{t('projectBioAgeCore.benefitsTitle')}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="border border-border/50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">{t(`projectBioAgeCore.ben${i}Title`)}</h3>
                  <p className="text-muted-foreground">{t(`projectBioAgeCore.ben${i}Desc`)}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-muted/20 border-l-4 border-primary p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">{t('projectBioAgeCore.legalTitle')}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{t('projectBioAgeCore.legalText')}</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BioAgeCore;
