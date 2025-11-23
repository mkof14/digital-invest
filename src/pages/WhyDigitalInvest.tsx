import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  Heart,
  Sprout,
  Utensils,
  Network,
  CheckCircle2,
  Target,
  ArrowRight,
  Building2
} from "lucide-react";
import { useLanguage } from '@/contexts/LanguageContext';

const WhyDigitalInvest = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground">
            {t('whyDigital.pageTitle')}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            {t('whyDigital.pageSubtitle')}
          </p>
        </div>
      </section>

      {/* Our Philosophy Section */}
      <section className="py-16 px-4 bg-card/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
            {t('whyDigital.philosophyTitle')}
          </h2>
          <Card className="border border-border/50 bg-card">
            <CardContent className="pt-8 pb-8">
              <p className="text-lg text-muted-foreground leading-relaxed text-center">
                {t('whyDigital.philosophyText')}
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Multi-Sector Strength Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            {t('whyDigital.multiSectorTitle')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border border-border/50 bg-card hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-8 pb-8 space-y-4">
                <div className="p-3 bg-primary/10 rounded-lg w-fit mx-auto">
                  <Heart className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground text-center">
                  {t('whyDigital.healthPlatforms')}
                </h3>
                <p className="text-sm text-muted-foreground text-center leading-relaxed">
                  {t('whyDigital.healthList')}
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border/50 bg-card hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-8 pb-8 space-y-4">
                <div className="p-3 bg-primary/10 rounded-lg w-fit mx-auto">
                  <Sprout className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground text-center">
                  {t('whyDigital.agriDrone')}
                </h3>
                <p className="text-sm text-muted-foreground text-center leading-relaxed">
                  {t('whyDigital.agriList')}
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border/50 bg-card hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-8 pb-8 space-y-4">
                <div className="p-3 bg-primary/10 rounded-lg w-fit mx-auto">
                  <Utensils className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground text-center">
                  {t('whyDigital.foodManufacturing')}
                </h3>
                <p className="text-sm text-muted-foreground text-center leading-relaxed">
                  {t('whyDigital.foodList')}
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border/50 bg-card hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-8 pb-8 space-y-4">
                <div className="p-3 bg-primary/10 rounded-lg w-fit mx-auto">
                  <Network className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground text-center">
                  {t('whyDigital.portfolioBackbone')}
                </h3>
                <p className="text-sm text-muted-foreground text-center leading-relaxed">
                  {t('whyDigital.portfolioList')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Execution and Experience Section */}
      <section className="py-16 px-4 bg-card/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
            {t('whyDigital.executionTitle')}
          </h2>
          <Card className="border border-border/50 bg-card">
            <CardContent className="pt-8 pb-8">
              <p className="text-lg text-muted-foreground leading-relaxed text-center">
                {t('whyDigital.executionText')}
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Private Format Section */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            {t('whyDigital.privateTitle')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border border-border/50 bg-card">
              <CardContent className="pt-8 pb-8">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-sm text-foreground leading-relaxed">
                    {t('whyDigital.privateReason1')}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-border/50 bg-card">
              <CardContent className="pt-8 pb-8">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                    <Target className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-sm text-foreground leading-relaxed">
                    {t('whyDigital.privateReason2')}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-border/50 bg-card">
              <CardContent className="pt-8 pb-8">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                    <Building2 className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-sm text-foreground leading-relaxed">
                    {t('whyDigital.privateReason3')}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 px-4 bg-card/30">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {t('whyDigital.readyTitle')}
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Link to="/projects">
              <Button size="lg" className="px-10 py-6 text-base">
                {t('whyDigital.viewProjectsBtn')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/for-investors">
              <Button size="lg" variant="outline" className="px-10 py-6 text-base">
                {t('whyDigital.forInvestorsBtn')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhyDigitalInvest;
