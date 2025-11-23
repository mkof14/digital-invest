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
            Why Digital Invest
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            Building long-term real-economy and AI-driven platforms under one portfolio.
          </p>
        </div>
      </section>

      {/* Our Philosophy Section */}
      <section className="py-16 px-4 bg-card/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
            Our Philosophy
          </h2>
          <Card className="border border-border/50 bg-card">
            <CardContent className="pt-8 pb-8">
              <p className="text-lg text-muted-foreground leading-relaxed text-center">
                We focus on building real companies and platforms, not short-lived concepts. 
                Each project is designed with clear operations, technology, and long-term scalability in mind.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Multi-Sector Strength Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Multi-Sector Strength
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border border-border/50 bg-card hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-8 pb-8 space-y-4">
                <div className="p-3 bg-primary/10 rounded-lg w-fit mx-auto">
                  <Heart className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground text-center">
                  Health & Longevity Platforms
                </h3>
                <p className="text-sm text-muted-foreground text-center leading-relaxed">
                  BioMath Core, BioMath Life
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border/50 bg-card hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-8 pb-8 space-y-4">
                <div className="p-3 bg-primary/10 rounded-lg w-fit mx-auto">
                  <Sprout className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground text-center">
                  Agricultural Drone Technology
                </h3>
                <p className="text-sm text-muted-foreground text-center leading-relaxed">
                  TerraAero
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border/50 bg-card hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-8 pb-8 space-y-4">
                <div className="p-3 bg-primary/10 rounded-lg w-fit mx-auto">
                  <Utensils className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground text-center">
                  Intelligent Food Manufacturing
                </h3>
                <p className="text-sm text-muted-foreground text-center leading-relaxed">
                  DishCore
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border/50 bg-card hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-8 pb-8 space-y-4">
                <div className="p-3 bg-primary/10 rounded-lg w-fit mx-auto">
                  <Network className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground text-center">
                  Portfolio-Level Backbone
                </h3>
                <p className="text-sm text-muted-foreground text-center leading-relaxed">
                  Digital Invest
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
            Execution and Experience
          </h2>
          <Card className="border border-border/50 bg-card">
            <CardContent className="pt-8 pb-8">
              <p className="text-lg text-muted-foreground leading-relaxed text-center">
                Digital Invest is led by a founder with decades of experience in technology, infrastructure, 
                health, manufacturing, and data systems. The focus is on practical execution, measurable progress, 
                and sustainable growth.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Private Format Section */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Why a Private Format
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border border-border/50 bg-card">
              <CardContent className="pt-8 pb-8">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-sm text-foreground leading-relaxed">
                    We prefer direct, clear communication
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
                    We can tailor information to serious, long-term partners
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
                    We avoid public hype and keep the focus on real work
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
            Ready to Explore Our Projects?
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Link to="/projects">
              <Button size="lg" className="px-10 py-6 text-base">
                View Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/for-investors">
              <Button size="lg" variant="outline" className="px-10 py-6 text-base">
                For Investors
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
