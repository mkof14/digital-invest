import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Building2, TrendingUp, Users, Target, Award, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const DigitalInvest = () => {
  const fundingProgress = 82;
  const targetAmount = 50000000;
  const currentAmount = 41000000;

  const highlights = [
    {
      icon: Award,
      title: "Established Track Record",
      description: "Operating since 2010 (formerly GENEX Company) with proven success in advanced genomics and biomathematics.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Headquartered in Charlotte, NC, with international partnerships and research collaborations.",
    },
    {
      icon: Target,
      title: "Multiple Revenue Streams",
      description: "Diversified portfolio across precision medicine, agricultural technology, and delivery solutions.",
    },
  ];

  const portfolio = [
    {
      name: "BioMath Life Platform",
      status: "Active",
      funding: 68,
      focus: "Precision Medicine",
    },
    {
      name: "TerraAero",
      status: "Active",
      funding: 45,
      focus: "Agricultural & Delivery Drones",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12 mt-20">
        {/* Hero Section */}
        <div className="mb-12">
          <Badge className="mb-4">Investment Platform</Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
            Digital Invest Inc.
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mb-8">
            Your gateway to innovative technology investments. A comprehensive portfolio of cutting-edge projects in precision medicine, agricultural technology, and advanced drone solutions.
          </p>
        </div>

        {/* Investment Overview */}
        <Card className="mb-12 border-primary/20 shadow-tech">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-3xl mb-2">Platform Investment Opportunity</CardTitle>
                <CardDescription>Invest in our entire portfolio of innovative projects</CardDescription>
              </div>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                <TrendingUp className="w-4 h-4 mr-2" />
                Active
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Target Amount</p>
                <p className="text-2xl font-bold text-primary">
                  ${(targetAmount / 1000000).toFixed(0)}M
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Current Funding</p>
                <p className="text-2xl font-bold">
                  ${(currentAmount / 1000000).toFixed(0)}M
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Total Investors</p>
                <p className="text-2xl font-bold flex items-center gap-2">
                  <Users className="w-6 h-6" />
                  56
                </p>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Progress</span>
                <span className="font-semibold">{fundingProgress}%</span>
              </div>
              <Progress value={fundingProgress} className="h-3" />
            </div>

            <div className="flex gap-4">
              <Link to="/start-investing" className="flex-1">
                <Button size="lg" className="w-full">
                  Invest in Portfolio
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="flex-1">
                Download Prospectus
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Company Highlights */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8">Why Invest in Digital Invest Inc.?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((highlight) => {
              const Icon = highlight.icon;
              return (
                <Card key={highlight.title} className="border-primary/20 hover:shadow-glow transition-all">
                  <CardHeader>
                    <Icon className="w-12 h-12 text-primary mb-4" />
                    <CardTitle>{highlight.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{highlight.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Portfolio Overview */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8">Our Portfolio</h2>
          <div className="space-y-6">
            {portfolio.map((project) => (
              <Card key={project.name} className="border-primary/20 hover:shadow-tech transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-2">
                        <h3 className="text-2xl font-bold">{project.name}</h3>
                        <Badge>{project.status}</Badge>
                      </div>
                      <p className="text-muted-foreground">{project.focus}</p>
                    </div>
                    <Link to={`/projects/${project.name.toLowerCase().replace(/\s+/g, '-')}`}>
                      <Button variant="outline">
                        View Details
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Funding Progress</span>
                      <span className="font-semibold">{project.funding}%</span>
                    </div>
                    <Progress value={project.funding} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Leadership Team */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8">Leadership Team</h2>
          <Card className="border-primary/20">
            <CardContent className="p-8">
              <div className="flex items-start gap-6">
                <div className="w-24 h-24 rounded-full bg-gradient-tech flex items-center justify-center text-primary-foreground text-3xl font-bold flex-shrink-0">
                  MK
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">Michael Kofman</h3>
                  <p className="text-primary font-semibold mb-4">CEO & Founder</p>
                  <p className="text-muted-foreground mb-4">
                    Leading Digital Invest Inc. (formerly GENEX Company) since 2010, Michael has pioneered advanced genomics research and biomathematical modeling applications in precision medicine.
                  </p>
                  <div className="flex gap-4">
                    <Link to="/team">
                      <Button variant="outline">View Full Team</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <Card className="bg-gradient-tech text-primary-foreground border-0">
          <CardContent className="py-12 text-center">
            <Building2 className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Invest in Innovation</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Join our community of investors supporting breakthrough technologies in healthcare and agriculture.
            </p>
            <div className="flex gap-4 justify-center">
              <Link to="/start-investing">
                <Button size="lg" variant="secondary">
                  Start Investing
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link to="/partnerships">
                <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                  Partnership Opportunities
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default DigitalInvest;
