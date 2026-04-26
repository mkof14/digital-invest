import { useTranslation } from 'react-i18next';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Heart, Sprout, Utensils, Network, CheckCircle2, Target, ArrowRight, Building2 } from "lucide-react";

const WhyDigitalInvest = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <PageHero image={heroImage}>
        <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground">{t('whyDigitalInvest.heroTitle')}</h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">{t('whyDigitalInvest.heroSubtitle')}</p>
        </div>
      </PageHero>

      <section className="py-16 px-4 bg-card/30 section-gradient-cool">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">{t('whyDigitalInvest.philosophy')}</h2>
          <Card className="border border-border/50 bg-card">
            <CardContent className="pt-8 pb-8">
              <p className="text-lg text-muted-foreground leading-relaxed text-center">{t('whyDigitalInvest.philosophyText')}</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-24 px-4 section-gradient-warm">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">{t('whyDigitalInvest.multiSector')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: Heart, title: t('whyDigitalInvest.healthPlatforms'), sub: 'BioMath Core, BioMath Life' },
              { icon: Sprout, title: t('whyDigitalInvest.agroDrones'), sub: 'TerraAero' },
              { icon: Utensils, title: t('whyDigitalInvest.foodManufacturing'), sub: 'DishCore' },
              { icon: Network, title: t('whyDigitalInvest.portfolioBackbone'), sub: 'Digital Invest' },
            ].map(({ icon: Icon, title, sub }, i) => (
              <Card key={i} className="border border-border/50 bg-card hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-8 pb-8 space-y-4">
                  <div className="p-3 bg-primary/10 rounded-lg w-fit mx-auto"><Icon className="w-10 h-10 text-primary" /></div>
                  <h3 className="text-xl font-bold text-foreground text-center">{title}</h3>
                  <p className="text-sm text-muted-foreground text-center leading-relaxed">{sub}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-card/30 section-gradient-lavender">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">{t('whyDigitalInvest.executionTitle')}</h2>
          <Card className="border border-border/50 bg-card">
            <CardContent className="pt-8 pb-8">
              <p className="text-lg text-muted-foreground leading-relaxed text-center">{t('whyDigitalInvest.executionText')}</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-24 px-4 section-gradient-mint">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">{t('whyDigitalInvest.privateFormat')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: CheckCircle2, text: t('whyDigitalInvest.privateDirect') },
              { icon: Target, text: t('whyDigitalInvest.privateTailor') },
              { icon: Building2, text: t('whyDigitalInvest.privateHype') },
            ].map(({ icon: Icon, text }, i) => (
              <Card key={i} className="border border-border/50 bg-card">
                <CardContent className="pt-8 pb-8">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0"><Icon className="w-5 h-5 text-primary" /></div>
                    <p className="text-sm text-foreground leading-relaxed">{text}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-card/30 section-gradient-gold">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">{t('whyDigitalInvest.readyExplore')}</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Link to="/projects"><Button size="lg" className="px-10 py-6 text-base">{t('whyDigitalInvest.viewProjects')}<ArrowRight className="ml-2 h-5 w-5" /></Button></Link>
            <Link to="/for-investors"><Button size="lg" variant="outline" className="px-10 py-6 text-base">{t('whyDigitalInvest.forInvestorsLink')}<ArrowRight className="ml-2 h-5 w-5" /></Button></Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhyDigitalInvest;
