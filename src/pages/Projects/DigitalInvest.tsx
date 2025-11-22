import { useState } from 'react';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  ArrowRight,
  Building2,
  Target,
  Award,
  Network,
  Heart,
  Sprout,
  Utensils,
  Cpu,
  Cog,
  Clock,
  TrendingUp,
  Shield,
  AlertTriangle,
  CheckCircle2,
  Rocket
} from "lucide-react";
import { Link } from "react-router-dom";
import InterestForm from "@/components/InterestForm";

const DigitalInvest = () => {
  const [showInterestForm, setShowInterestForm] = useState(false);

  const portfolioProjects = [
    {
      name: "TerraAero",
      slug: "terraaero",
      icon: <Sprout className="w-8 h-8" />,
      description: "AgroTech & Drone Manufacturing"
    },
    {
      name: "BioMath Core",
      slug: "biomathcore",
      icon: <Heart className="w-8 h-8" />,
      description: "Intelligent Health Operating System"
    },
    {
      name: "BioMath Life",
      slug: "biomathlife",
      icon: <Heart className="w-8 h-8" />,
      description: "Longevity & Personal Health Navigation"
    },
    {
      name: "DishCore",
      slug: "dishcore",
      icon: <Utensils className="w-8 h-8" />,
      description: "Intelligent Food Manufacturing"
    },
    {
      name: "Digital Invest",
      slug: "digital-invest",
      icon: <Network className="w-8 h-8" />,
      description: "Portfolio Infrastructure & Strategy Layer"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Link to="/projects" className="inline-block mb-6">
            <Button variant="ghost" size="sm">
              <ArrowRight className="mr-2 h-4 w-4 rotate-180" />
              Back to Projects
            </Button>
          </Link>

          {/* Hero Section */}
          <section className="mb-16">
            <div className="space-y-6">
              <div className="flex gap-3 mb-4">
                <Badge className="bg-primary text-primary-foreground">Portfolio</Badge>
                <Badge variant="outline">Infrastructure</Badge>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-foreground">
                Digital Invest Inc.
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl leading-relaxed">
                The multi-sector portfolio that unifies all Digital Invest projects across AI, health, 
                agriculture, food production, and manufacturing.
              </p>

              {/* Summary Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 pt-8">
                {[
                  { value: "5", label: "Proprietary Projects" },
                  { value: "3", label: "Core Industries" },
                  { value: "20+", label: "Years Experience" },
                  { value: "U.S.", label: "Based Development" },
                  { value: "∞", label: "Multi-Sector Synergy" }
                ].map((metric, index) => (
                  <Card key={index} className="border border-border/50 bg-card">
                    <CardContent className="pt-6 pb-6 text-center">
                      <div className="text-3xl font-bold text-primary mb-1">{metric.value}</div>
                      <div className="text-xs text-muted-foreground">{metric.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <Separator className="my-12" />

          {/* Portfolio Overview Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Portfolio Overview
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioProjects.map((project, index) => (
                <Link key={index} to={`/projects/${project.slug}`}>
                  <Card className="border border-border/50 bg-card hover:shadow-lg transition-all duration-300 h-full">
                    <CardContent className="pt-8 pb-8 space-y-4">
                      <div className="p-3 bg-primary/10 rounded-lg w-fit">
                        <div className="text-primary">{project.icon}</div>
                      </div>
                      <h3 className="text-xl font-bold text-foreground">{project.name}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex items-center text-primary text-sm font-medium pt-2">
                        View Project <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </section>

          <Separator className="my-12" />

          {/* How the Portfolio Works Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              How the Portfolio Creates Value
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border border-border/50 bg-card">
                <CardHeader>
                  <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                    <Cpu className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Shared AI & Backend</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Core analytics, data models, infrastructure, and backend services are reused across projects.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-border/50 bg-card">
                <CardHeader>
                  <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                    <Network className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Cross-Project Synergy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Manufacturing, health data, and operations reinforce each other to create long-term strategic advantage.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-border/50 bg-card">
                <CardHeader>
                  <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Multi-Sector Stability</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Diversification across industries reduces volatility and strengthens resilience.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator className="my-12" />

          {/* Strategic Pillars Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Strategic Pillars
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Technology Foundation",
                  description: "AI systems, backend architecture, and secure infrastructure.",
                  icon: <Cpu className="w-6 h-6" />
                },
                {
                  title: "Operational Excellence",
                  description: "Agro-drone, manufacturing, health data interpretation.",
                  icon: <Cog className="w-6 h-6" />
                },
                {
                  title: "Long-Term Focus",
                  description: "Real-economy execution that compounds over time.",
                  icon: <Clock className="w-6 h-6" />
                },
                {
                  title: "Portfolio Integration",
                  description: "Each project benefits from the growth of the others.",
                  icon: <Network className="w-6 h-6" />
                }
              ].map((pillar, index) => (
                <Card key={index} className="border border-border/50 bg-card">
                  <CardContent className="pt-6 pb-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                        <div className="text-primary">{pillar.icon}</div>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-lg font-bold text-foreground">{pillar.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <Separator className="my-12" />

          {/* Portfolio Roadmap Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Portfolio Roadmap
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  phase: "1",
                  title: "Portfolio Infrastructure",
                  description: "Backend, design system, and investor environment."
                },
                {
                  phase: "2",
                  title: "Project Expansion",
                  description: "Scaling individual projects in parallel (health, agro, foodtech)."
                },
                {
                  phase: "3",
                  title: "Operations & Manufacturing",
                  description: "Drone manufacturing, food production automation, integrations."
                },
                {
                  phase: "4",
                  title: "Portfolio Suite",
                  description: "Unified analytics, investor reporting, cross-project visibility."
                }
              ].map((phase, index) => (
                <Card key={index} className="border border-border/50 bg-card hover:shadow-lg transition-all duration-300">
                  <CardContent className="pt-6 pb-6">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-xl font-bold text-primary">{phase.phase}</span>
                        </div>
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center gap-3">
                          <h3 className="text-xl font-bold text-foreground">{phase.title}</h3>
                          <Clock className="w-5 h-5 text-primary" />
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {phase.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <Separator className="my-12" />

          {/* Portfolio Risks Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <AlertTriangle className="h-8 w-8 text-warning" />
              <span className="text-primary">Portfolio Risks</span>
            </h2>
            <div className="bg-warning/10 border border-warning/30 p-6 rounded-lg space-y-4">
              <p className="text-foreground font-semibold mb-4">
                Multi-sector portfolio investments involve specific risks:
              </p>
              <ul className="list-disc list-inside space-y-3 text-foreground">
                <li>Multi-sector exposure increases operational complexity</li>
                <li>Regulations vary across industries</li>
                <li>Execution across several projects requires strong coordination</li>
                <li>Market conditions can affect timelines</li>
                <li>No results or returns are guaranteed</li>
                <li>Diversification does not eliminate risk</li>
              </ul>
              <p className="text-sm text-muted-foreground mt-6 pt-4 border-t border-warning/20">
                This information is for informational purposes only. Consult with legal and financial advisors before making any investment decision.
              </p>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="mt-16 pt-12 border-t border-border/50">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Want to Explore the Digital Invest Portfolio?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                This is a non-binding expression of interest. All discussions happen individually and offline.
              </p>
              <Button size="lg" className="text-lg px-10 py-6" onClick={() => setShowInterestForm(true)}>
                <Rocket className="mr-2 h-5 w-5" />
                Submit Interest
              </Button>
              <p className="text-sm text-muted-foreground">
                No payment required • Private conversations only
              </p>
            </div>
          </section>
        </div>
      </div>

      {/* Interest Form Modal */}
      <InterestForm
        projectId="portfolio-overview"
        projectTitle="Digital Invest Portfolio"
        open={showInterestForm}
        onOpenChange={setShowInterestForm}
      />

      <Footer />
    </div>
  );
};

export default DigitalInvest;
