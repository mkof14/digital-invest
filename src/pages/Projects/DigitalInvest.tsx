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
import digitalInvestHero from "@/assets/projects/digitalinvest-hero.jpg";
import digitalInvestLogo from "/lovable-uploads/d1011e6f-955a-48d9-adef-662af751c3b9.png";
import InterestForm from "@/components/InterestForm";
import DownloadInvestorBriefButton from "@/components/DownloadInvestorBriefButton";
import OptimizedImage from "@/components/OptimizedImage";
import InvestorPageDisclaimer from "@/components/InvestorPageDisclaimer";

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

          {/* Hero Section with Background */}
          <section className="relative -mt-24 mb-16">
            <div 
              className="absolute inset-0 z-0"
              style={{
                backgroundImage: `url(${digitalInvestHero})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '500px'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/90 to-background/70" />
            </div>

            <div className="relative z-10 pt-32 pb-16">
              <div className="space-y-6">
                <div className="flex items-center gap-6 mb-8">
                  <OptimizedImage 
                    src={digitalInvestLogo} 
                    alt="Digital Invest Inc. logo" 
                    className="w-20 h-20 md:w-24 md:h-24 object-contain"
                    showSkeleton={false}
                  />
                  <div>
                    <div className="flex gap-3 mb-4">
                      <Badge className="bg-primary text-primary-foreground">Portfolio</Badge>
                      <Badge variant="outline">Infrastructure</Badge>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3 mb-4" style={{ display: 'none' }}>
                  <Badge className="bg-primary text-primary-foreground">Portfolio</Badge>
                  <Badge variant="outline">Infrastructure</Badge>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold text-foreground">
                  Digital Invest Inc.
                </h1>
                
                <p className="text-xl md:text-2xl text-foreground max-w-4xl leading-relaxed">
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
                    { value: "Multi", label: "Sector Synergy" }
                  ].map((metric, index) => (
                    <Card key={index} className="border border-border/50 bg-card/50 backdrop-blur-sm">
                      <CardContent className="pt-6 pb-6 text-center space-y-1">
                        <p className="text-3xl font-bold text-primary">{metric.value}</p>
                        <p className="text-sm text-muted-foreground">{metric.label}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="flex gap-4 flex-wrap mt-8">
                  <Button size="lg" onClick={() => setShowInterestForm(true)}>
                    Submit Interest
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <DownloadInvestorBriefButton projectSlug="digital-invest" size="lg" />
                </div>
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

          {/* Portfolio Synergy Visualization */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Portfolio Synergy Map
            </h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
              Visual representation of how our projects interconnect and strengthen each other through shared infrastructure, data, and operations.
            </p>

            {/* Desktop View - Circular Layout */}
            <div className="hidden lg:block relative">
              <div className="relative w-full max-w-5xl mx-auto" style={{ height: '600px' }}>
                {/* Central Hub - Digital Invest */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <Card className="border-2 border-primary bg-card shadow-elevated w-64">
                    <CardContent className="pt-6 pb-6 text-center space-y-3">
                      <div className="p-4 bg-primary/10 rounded-lg w-fit mx-auto">
                        <Network className="w-12 h-12 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground">Digital Invest</h3>
                      <p className="text-xs text-muted-foreground">Portfolio Hub</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Connection Lines - SVG */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
                  <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                      <polygon points="0 0, 10 3.5, 0 7" fill="hsl(var(--primary))" opacity="0.3" />
                    </marker>
                  </defs>
                  
                  {/* Center to TerraAero (top) */}
                  <path
                    d="M 50% 50% L 50% 15%"
                    stroke="hsl(var(--primary))"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    fill="none"
                    opacity="0.3"
                    markerEnd="url(#arrowhead)"
                    className="animate-pulse"
                  />
                  
                  {/* Center to BioMath Core (top-right) */}
                  <path
                    d="M 50% 50% L 80% 25%"
                    stroke="hsl(var(--primary))"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    fill="none"
                    opacity="0.3"
                    markerEnd="url(#arrowhead)"
                    className="animate-pulse"
                    style={{ animationDelay: '0.2s' }}
                  />
                  
                  {/* Center to BioMath Life (bottom-right) */}
                  <path
                    d="M 50% 50% L 80% 75%"
                    stroke="hsl(var(--primary))"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    fill="none"
                    opacity="0.3"
                    markerEnd="url(#arrowhead)"
                    className="animate-pulse"
                    style={{ animationDelay: '0.4s' }}
                  />
                  
                  {/* Center to DishCore (bottom-left) */}
                  <path
                    d="M 50% 50% L 20% 75%"
                    stroke="hsl(var(--primary))"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    fill="none"
                    opacity="0.3"
                    markerEnd="url(#arrowhead)"
                    className="animate-pulse"
                    style={{ animationDelay: '0.6s' }}
                  />

                  {/* Inter-project connections */}
                  <path
                    d="M 50% 15% Q 65% 20% 80% 25%"
                    stroke="hsl(var(--muted-foreground))"
                    strokeWidth="1"
                    strokeDasharray="3,3"
                    fill="none"
                    opacity="0.2"
                  />
                  
                  <path
                    d="M 80% 25% Q 82% 50% 80% 75%"
                    stroke="hsl(var(--muted-foreground))"
                    strokeWidth="1"
                    strokeDasharray="3,3"
                    fill="none"
                    opacity="0.2"
                  />
                </svg>

                {/* Surrounding Projects */}
                {/* TerraAero - Top */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2" style={{ zIndex: 5 }}>
                  <Link to="/projects/terraaero">
                    <Card className="border border-border/50 bg-card hover:shadow-lg transition-all duration-300 w-56 group">
                      <CardContent className="pt-6 pb-6 text-center space-y-2">
                        <div className="p-3 bg-primary/10 rounded-lg w-fit mx-auto">
                          <Sprout className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-base font-bold text-foreground">TerraAero</h3>
                        <p className="text-xs text-muted-foreground">AgroTech</p>
                        <div className="flex items-center justify-center text-primary text-xs font-medium pt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          View <ArrowRight className="ml-1 h-3 w-3" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </div>

                {/* BioMath Core - Top Right */}
                <div className="absolute top-12 right-4" style={{ zIndex: 5 }}>
                  <Link to="/projects/biomathcore">
                    <Card className="border border-border/50 bg-card hover:shadow-lg transition-all duration-300 w-56 group">
                      <CardContent className="pt-6 pb-6 text-center space-y-2">
                        <div className="p-3 bg-primary/10 rounded-lg w-fit mx-auto">
                          <Heart className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-base font-bold text-foreground">BioMath Core</h3>
                        <p className="text-xs text-muted-foreground">Health OS</p>
                        <div className="flex items-center justify-center text-primary text-xs font-medium pt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          View <ArrowRight className="ml-1 h-3 w-3" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </div>

                {/* BioMath Life - Bottom Right */}
                <div className="absolute bottom-12 right-4" style={{ zIndex: 5 }}>
                  <Link to="/projects/biomathlife">
                    <Card className="border border-border/50 bg-card hover:shadow-lg transition-all duration-300 w-56 group">
                      <CardContent className="pt-6 pb-6 text-center space-y-2">
                        <div className="p-3 bg-primary/10 rounded-lg w-fit mx-auto">
                          <Heart className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-base font-bold text-foreground">BioMath Life</h3>
                        <p className="text-xs text-muted-foreground">Longevity</p>
                        <div className="flex items-center justify-center text-primary text-xs font-medium pt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          View <ArrowRight className="ml-1 h-3 w-3" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </div>

                {/* DishCore - Bottom Left */}
                <div className="absolute bottom-12 left-4" style={{ zIndex: 5 }}>
                  <Link to="/projects/dishcore">
                    <Card className="border border-border/50 bg-card hover:shadow-lg transition-all duration-300 w-56 group">
                      <CardContent className="pt-6 pb-6 text-center space-y-2">
                        <div className="p-3 bg-primary/10 rounded-lg w-fit mx-auto">
                          <Utensils className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-base font-bold text-foreground">DishCore</h3>
                        <p className="text-xs text-muted-foreground">Food Tech</p>
                        <div className="flex items-center justify-center text-primary text-xs font-medium pt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          View <ArrowRight className="ml-1 h-3 w-3" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </div>
              </div>

              {/* Legend */}
              <div className="mt-12 flex justify-center gap-8 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-0.5 bg-primary opacity-30" style={{ borderTop: '2px dashed' }}></div>
                  <span className="text-muted-foreground">Shared Infrastructure</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-0.5 bg-muted-foreground opacity-20" style={{ borderTop: '1px dashed' }}></div>
                  <span className="text-muted-foreground">Data Exchange</span>
                </div>
              </div>
            </div>

            {/* Mobile/Tablet View - Vertical Flow */}
            <div className="lg:hidden space-y-6">
              <Card className="border-2 border-primary bg-card shadow-elevated">
                <CardContent className="pt-8 pb-8 text-center space-y-4">
                  <div className="p-4 bg-primary/10 rounded-lg w-fit mx-auto">
                    <Network className="w-12 h-12 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Digital Invest</h3>
                  <p className="text-sm text-muted-foreground">Central Portfolio Hub</p>
                  <div className="pt-4 border-t border-border/50">
                    <p className="text-xs text-muted-foreground">Connects & powers all projects below</p>
                  </div>
                </CardContent>
              </Card>

              {/* Connection Arrow */}
              <div className="flex justify-center">
                <ArrowRight className="w-6 h-6 text-primary rotate-90 animate-pulse" />
              </div>

              {portfolioProjects.slice(0, 4).map((project, index) => (
                <div key={index}>
                  <Link to={`/projects/${project.slug}`}>
                    <Card className="border border-border/50 bg-card hover:shadow-lg transition-all duration-300">
                      <CardContent className="pt-6 pb-6">
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-primary/10 rounded-lg">
                            <div className="text-primary">{project.icon}</div>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-bold text-foreground">{project.name}</h3>
                            <p className="text-sm text-muted-foreground">{project.description}</p>
                          </div>
                          <ArrowRight className="w-5 h-5 text-primary" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                  {index < 3 && (
                    <div className="flex justify-center py-2">
                      <div className="w-0.5 h-6 bg-primary/30"></div>
                    </div>
                  )}
                </div>
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

          {/* Legal Disclaimer */}
          <section className="mt-16">
            <InvestorPageDisclaimer />
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
