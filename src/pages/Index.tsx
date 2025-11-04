import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, TrendingUp, Target, Users, Building2, Award, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const projects = [
    {
      id: "biomathlife",
      name: "BioMath Life Platform",
      category: "Healthcare Innovation",
      tagline: "Towards Precision Medicine",
      description: "Revolutionary precision medicine platform using biomathematical modeling, genetics, AI, and pharmacology to transform healthcare diagnosis and treatment.",
      targetAmount: 25000000,
      currentAmount: 17000000,
      progress: 68,
      investors: 24,
      status: "Active",
      image: "/lovable-uploads/649e2294-dd2f-4267-955e-efae9202adb9.png",
      highlights: [
        "AI-powered medical diagnosis",
        "Personalized treatment plans",
        "24/7 health monitoring",
        "Genetic-based medication"
      ]
    },
    {
      id: "terraaero",
      name: "TerraAero",
      category: "Agricultural Innovation",
      tagline: "Advanced Drone Solutions",
      description: "Cutting-edge drone technology for precision agriculture and rapid delivery services, transforming farming operations and last-mile logistics.",
      targetAmount: 15000000,
      currentAmount: 6750000,
      progress: 45,
      investors: 18,
      status: "Active",
      image: "/lovable-uploads/6dd765a4-4908-4542-a7af-88ec2bf6741f.png",
      highlights: [
        "Precision irrigation & fertilization",
        "Field analysis & reporting",
        "Restaurant & retail delivery",
        "120+ farms served"
      ]
    },
    {
      id: "digital-invest",
      name: "Digital Invest Inc.",
      category: "Investment Platform",
      tagline: "Complete Portfolio Investment",
      description: "Invest in our entire portfolio of innovative technology projects. Established since 2010 with proven track record in genomics, biomathematics, and advanced technologies.",
      targetAmount: 50000000,
      currentAmount: 41000000,
      progress: 82,
      investors: 56,
      status: "Active",
      image: "/lovable-uploads/c2cb51a2-7071-4fb7-be6f-0e69d3a124e0.png",
      highlights: [
        "Diversified portfolio",
        "Multiple revenue streams",
        "Global partnerships",
        "Established since 2010"
      ]
    }
  ];

  const stats = [
    { icon: Building2, value: "3", label: "Active Projects" },
    { icon: Users, value: "98", label: "Total Investors" },
    { icon: Target, value: "$64.75M", label: "Funds Raised" },
    { icon: TrendingUp, value: "72%", label: "Avg. Progress" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <Navigation />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 mt-20">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <Badge className="mb-4 text-base px-4 py-2">Investment Platform</Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
            Digital Invest Inc.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Your gateway to innovative technology investments. Discover groundbreaking projects in precision medicine, agricultural technology, and advanced drone solutions.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/start-investing">
              <Button size="lg" className="text-lg px-8">
                Start Investing
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/partnerships">
              <Button size="lg" variant="outline" className="text-lg px-8">
                Partnership Opportunities
              </Button>
            </Link>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-12">
          <div className="flex items-center gap-2 justify-center p-4 bg-card/50 backdrop-blur-sm rounded-lg border border-border/30">
            <Award className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">Award-Winning</span>
          </div>
          <div className="flex items-center gap-2 justify-center p-4 bg-card/50 backdrop-blur-sm rounded-lg border border-border/30">
            <Shield className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">Enterprise Security</span>
          </div>
          <div className="flex items-center gap-2 justify-center p-4 bg-card/50 backdrop-blur-sm rounded-lg border border-border/30 col-span-2 md:col-span-1">
            <TrendingUp className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">Since 2010</span>
          </div>
        </div>

        {/* Platform Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.label} className="text-center border-primary/20 hover:shadow-glow transition-all">
                <CardContent className="pt-6">
                  <Icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-3xl font-bold mb-1">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Projects Section */}
        <div className="mb-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Investment Opportunities</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our portfolio of innovative projects and invest in the technologies shaping tomorrow
            </p>
          </div>

          <div className="space-y-8">
            {projects.map((project) => (
              <Card key={project.id} className="border-primary/20 hover:shadow-tech transition-all overflow-hidden">
                <div className="grid md:grid-cols-5 gap-6">
                  {/* Project Image */}
                  <div className="md:col-span-2 relative h-64 md:h-auto">
                    <img 
                      src={project.image} 
                      alt={project.name}
                      className="w-full h-full object-cover"
                    />
                    <Badge className="absolute top-4 left-4">{project.category}</Badge>
                    <Badge 
                      variant="secondary" 
                      className="absolute top-4 right-4"
                    >
                      {project.status}
                    </Badge>
                  </div>

                  {/* Project Details */}
                  <div className="md:col-span-3 p-6 md:p-8 flex flex-col">
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold mb-2">{project.name}</h3>
                      <p className="text-lg text-primary mb-4">{project.tagline}</p>
                      <p className="text-muted-foreground mb-6">
                        {project.description}
                      </p>

                      {/* Highlights */}
                      <div className="grid grid-cols-2 gap-3 mb-6">
                        {project.highlights.map((highlight) => (
                          <div key={highlight} className="flex items-center gap-2 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Investment Metrics */}
                    <div className="space-y-4 pt-4 border-t border-border/30">
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">Target</p>
                          <p className="text-lg font-bold text-primary">
                            ${(project.targetAmount / 1000000).toFixed(1)}M
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">Raised</p>
                          <p className="text-lg font-bold">
                            ${(project.currentAmount / 1000000).toFixed(1)}M
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">Investors</p>
                          <p className="text-lg font-bold">{project.investors}</p>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Funding Progress</span>
                          <span className="font-semibold">{project.progress}%</span>
                        </div>
                        <Progress value={project.progress} className="h-2" />
                      </div>

                      <div className="flex gap-3">
                        <Link to={`/projects/${project.id}`} className="flex-1">
                          <Button variant="outline" className="w-full">
                            View Details
                          </Button>
                        </Link>
                        <Link to="/start-investing" className="flex-1">
                          <Button className="w-full">
                            Invest Now
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Why Invest Section */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Invest With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-primary/20 hover:shadow-glow transition-all">
              <CardHeader>
                <Target className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Proven Track Record</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Operating since 2010 with established expertise in advanced genomics, biomathematics, and innovative technology solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:shadow-glow transition-all">
              <CardHeader>
                <Building2 className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Diversified Portfolio</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Multiple revenue streams across healthcare, agriculture, and technology sectors, reducing investment risk.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:shadow-glow transition-all">
              <CardHeader>
                <Award className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Innovation Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Cutting-edge technologies solving real-world problems with significant market potential and social impact.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <Card className="bg-gradient-tech text-primary-foreground border-0">
          <CardContent className="py-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Investing?</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Join our community of investors supporting breakthrough technologies that are shaping the future of healthcare and agriculture.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link to="/start-investing">
                <Button size="lg" variant="secondary" className="text-lg px-8">
                  Start Investing Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/team">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8"
                >
                  Meet the Team
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
