import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Camera, TrendingUp, Sparkles, Eye, ArrowLeft } from 'lucide-react';
import OptimizedImage from '@/components/OptimizedImage';
import skincoreHero from '@/assets/projects/skincore-hero.jpg';

const SkinCore = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <OptimizedImage
          src={skincoreHero}
          alt="Skin - AI Skin Analysis Platform"
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
              <span className="text-primary font-semibold">{t('projectSkinCore.badge')}</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">Skin</h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">{t('projectSkinCore.heroSubtitle')}</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">{t('projectSkinCore.overviewTitle')}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{t('projectSkinCore.overviewDesc')}</p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">{t('projectSkinCore.coreFunctionsTitle')}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: Camera, n: 1 }, { icon: TrendingUp, n: 2 },
                { icon: Sparkles, n: 3 }, { icon: Eye, n: 4 },
              ].map((item) => (
                <Card key={item.n} className="border-border/50 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <item.icon className="w-10 h-10 text-primary mb-4" />
                    <CardTitle>{t(`projectSkinCore.func${item.n}Title`)}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{t(`projectSkinCore.func${item.n}Desc`)}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="bg-muted/20 border-l-4 border-primary p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">{t('projectSkinCore.legalTitle')}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{t('projectSkinCore.legalText')}</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SkinCore;
