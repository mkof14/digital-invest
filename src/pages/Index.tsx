import { useEffect, useState } from 'react';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";
import { supabase } from '@/integrations/supabase/client';
import {
  Rocket,
  Lightbulb,
  Target,
  Users,
  TrendingUp,
  Shield,
  ArrowRight,
  Zap,
  Award,
  LineChart,
  Lock,
  CheckCircle2,
  Sparkles,
  Building2
} from "lucide-react";
import terraaeroHero from "@/assets/projects/terraaero-hero.jpg";
import biomathCoreHero from "@/assets/projects/biomathcore-hero.jpg";
import dishcoreHero from "@/assets/projects/dishcore-hero.jpg";
import digitalInvestHero from "@/assets/projects/digitalinvest-hero.jpg";
import biomathLifeHero from "@/assets/projects/biomathlife-hero.jpg";

interface FeaturedProject {
  id: string;
  slug: string;
  title: string;
  short_description: string;
  category: string;
  status: string;
  target_amount: number | null;
  current_raised: number;
  currency: string;
  hero_image_url: string;
}

const Index = () => {
  const [featuredProjects, setFeaturedProjects] = useState<FeaturedProject[]>([]);

  // Map slugs to actual imported images
  const projectImages: Record<string, string> = {
    'terraaero': terraaeroHero,
    'biomathcore': biomathCoreHero,
    'biomath-core': biomathCoreHero,
    'dishcore': dishcoreHero,
    'digital-invest-portfolio': digitalInvestHero,
    'digital-invest-ai-lab': digitalInvestHero,
    'digital-invest-manufacturing': digitalInvestHero,
    'biomathlife': biomathLifeHero,
  };

  useEffect(() => {
    fetchFeaturedProjects();
  }, []);

  const fetchFeaturedProjects = async () => {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('is_visible', true)
        .eq('status', 'OPEN')
        .order('priority', { ascending: false })
        .order('created_at', { ascending: false })
        .limit(3);

      if (error) throw error;
      setFeaturedProjects(data || []);
    } catch (error) {
      console.error('Error fetching featured projects:', error);
    }
  };

  const calculateProgress = (current: number, target: number | null) => {
    if (!target || target === 0) return 0;
    return Math.min((current / target) * 100, 100);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'OPEN':
        return 'bg-success text-success-foreground';
      case 'CLOSED':
        return 'bg-muted text-muted-foreground';
      case 'COMING_SOON':
        return 'bg-info text-info-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/5 to-background" />
        
        <div className="relative z-10 max-w-7xl mx-auto text-center space-y-10">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              Strategic Investment in
              <span className="block text-primary mt-2">Real-Economy and Advanced Technology</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Digital Invest Inc. develops and scales innovative projects across AI, precision health, 
              advanced manufacturing, and agricultural technology—delivering measurable impact in critical sectors of the American economy.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in pt-4">
            <Link to="/start-investing">
              <Button size="lg" className="px-10 py-6 text-base">
                Investment Opportunities
                <TrendingUp className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 max-w-5xl mx-auto animate-fade-in">
            {[
              { value: "25+", label: "Years Experience" },
              { value: "5", label: "Active Projects" },
              { value: "$19.5B", label: "Previous Exit Value" },
              { value: "15+", label: "Countries Served" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-24 px-4 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <Badge variant="secondary" className="mb-2">Investment Opportunities</Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Featured Projects
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our active investment opportunities across technology, healthcare, and real-economy sectors
            </p>
          </div>
          
          {featuredProjects.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {featuredProjects.map((project, index) => (
                  <Link key={project.id} to={`/projects/${project.slug}`}>
                    <Card className="group overflow-hidden border border-border/50 bg-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 h-full flex flex-col animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                      <div className="relative h-48 overflow-hidden bg-muted">
                        <img
                          src={projectImages[project.slug] || project.hero_image_url || '/placeholder.svg'}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700 ease-out"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = '/placeholder.svg';
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <Badge className={`absolute top-4 left-4 ${getStatusColor(project.status)}`}>
                          {project.status.replace('_', ' ')}
                        </Badge>
                        <Badge className="absolute top-4 right-4 bg-background/95 backdrop-blur-sm border-primary/20 text-foreground">
                          {project.category}
                        </Badge>
                      </div>

                      <CardHeader className="flex-1">
                        <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="text-base line-clamp-3 mt-2">
                          {project.short_description}
                        </CardDescription>
                      </CardHeader>

                      {project.target_amount && project.target_amount > 0 && (
                        <CardContent className="pt-0">
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className="text-muted-foreground">Progress</span>
                              <span className="font-semibold text-foreground">
                                {project.currency} {project.current_raised.toLocaleString()} / {project.target_amount.toLocaleString()}
                              </span>
                            </div>
                            <Progress 
                              value={calculateProgress(project.current_raised, project.target_amount)} 
                              className="h-2"
                            />
                            <p className="text-xs text-muted-foreground text-right">
                              {calculateProgress(project.current_raised, project.target_amount).toFixed(1)}% funded
                            </p>
                          </div>
                        </CardContent>
                      )}
                    </Card>
                  </Link>
                ))}
              </div>
              
              <div className="text-center">
                <Link to="/projects">
                  <Button size="lg" variant="outline" className="px-8 py-6 text-lg group border-2">
                    View All Projects
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-6">No featured projects available at this time.</p>
              <Link to="/projects">
                <Button size="lg" variant="outline">
                  View All Projects
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Strategic Capabilities Across Key Sectors
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Diverse expertise spanning health technology, AI systems, advanced manufacturing, and agricultural innovation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Lightbulb className="w-12 h-12" />,
                title: "Health & AI Technology",
                description: "Advanced platforms combining precision health, genomics, AI diagnostics, and personalized care systems"
              },
              {
                icon: <Building2 className="w-12 h-12" />,
                title: "Smart Manufacturing",
                description: "Intelligent production systems for food tech, drone manufacturing, and scalable operations"
              },
              {
                icon: <Target className="w-12 h-12" />,
                title: "Agricultural Innovation",
                description: "Precision drone operations, field analytics, and agritech solutions across the Southern U.S."
              },
              {
                icon: <Award className="w-12 h-12" />,
                title: "Proven Execution",
                description: "Executive team with 70+ combined years and $19.5B previous exit success driving real results"
              }
            ].map((feature, index) => (
              <Card key={index} className="hover:-translate-y-1 transition-all duration-300 border border-border/50 bg-card hover:shadow-lg">
                <CardContent className="pt-8 pb-6 space-y-4">
                  <div className="p-3 bg-primary/10 rounded-lg w-fit mx-auto">
                    <div className="text-primary">{feature.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground text-center">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground text-center leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-4 bg-card/30">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Partner With Us
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Explore investment opportunities in our innovative biotechnology projects. 
            Contact our team to learn more about strategic partnerships and funding options.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Link to="/start-investing">
              <Button size="lg" className="px-10 py-6 text-base">
                Investment Information
                <TrendingUp className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/team">
              <Button size="lg" variant="outline" className="px-10 py-6 text-base">
                Leadership Team
                <Users className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
          
          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 max-w-3xl mx-auto">
            {[
              { icon: <Shield className="w-5 h-5" />, text: "Regulatory Compliant" },
              { icon: <Lock className="w-5 h-5" />, text: "Secure Platform" },
              { icon: <Award className="w-5 h-5" />, text: "Industry Certified" },
              { icon: <CheckCircle2 className="w-5 h-5" />, text: "Verified Projects" }
            ].map((badge, index) => (
              <div key={index} className="flex flex-col items-center space-y-2">
                <div className="text-primary">{badge.icon}</div>
                <span className="text-xs text-muted-foreground text-center">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
