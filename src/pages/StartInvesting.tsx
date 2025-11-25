import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import InvestorDisclaimer from "@/components/InvestorDisclaimer";
import InvestorPageDisclaimer from '@/components/InvestorPageDisclaimer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  ArrowRight,
  Calendar,
  FileText,
  Users,
  CheckCircle,
  Search,
  Mail,
  Shield
} from "lucide-react";

const StartInvesting = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <InvestorDisclaimer variant="detailed" className="mb-12" />
          
          <div className="text-center mt-12">
            <Badge variant="secondary" className="mb-4 px-4 py-2">
              Private Portfolio Information
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Explore Digital Invest
              <span className="block text-primary">Portfolio Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
              Learn about Digital Invest Inc.'s multi-sector portfolio spanning health technology, 
              agricultural innovation, food manufacturing, and AI-driven infrastructure. All discussions 
              are private, by invitation, and handled offline.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8 py-3" asChild>
                <Link to="/projects">
                  <Search className="mr-2 h-5 w-5" />
                  Explore Projects
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-3" asChild>
                <Link to="/investor-handbook">
                  <FileText className="mr-2 h-5 w-5" />
                  Download Information Materials
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 px-4 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              How to Learn More
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A transparent, private process for exploring potential participation in Digital Invest Inc. projects
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                icon: <Search className="w-6 h-6" />,
                title: "Review Projects",
                description: "Explore detailed project pages covering technology, operations, and roadmaps across our portfolio."
              },
              {
                step: "02",
                icon: <Mail className="w-6 h-6" />,
                title: "Request Information",
                description: "Submit a non-binding request for more information. This creates no commitment or obligation."
              },
              {
                step: "03",
                icon: <Users className="w-6 h-6" />,
                title: "Private Discussion",
                description: "We follow up personally to answer questions, share materials, and discuss your interests."
              },
              {
                step: "04",
                icon: <Shield className="w-6 h-6" />,
                title: "Offline Process",
                description: "Any participation, if applicable, is formalized offline through proper legal channels, separate from this website."
              }
            ].map((process, index) => (
              <Card key={index} className="text-center p-6">
                <div className="text-4xl font-bold text-primary mb-4">{process.step}</div>
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    {process.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{process.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{process.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Overview */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Multi-Sector Portfolio
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Five proprietary projects across health, agriculture, food systems, and infrastructure
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8">
              <CardHeader>
                <CardTitle>Health & Longevity</CardTitle>
                <CardDescription>BioMath Core, BioMath Life</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Data-driven platforms for understanding health risks and longevity in a structured, intelligent way.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardHeader>
                <CardTitle>Agricultural Technology</CardTitle>
                <CardDescription>TerraAero</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Advanced agricultural drone operations with roadmap toward U.S.-based manufacturing.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardHeader>
                <CardTitle>Food Manufacturing</CardTitle>
                <CardDescription>DishCore</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  AI-driven food manufacturing and recipe engine for standardized, scalable meal production.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardHeader>
                <CardTitle>Portfolio Infrastructure</CardTitle>
                <CardDescription>Digital Invest</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  The portfolio backbone combining AI, infrastructure, and long-term multi-sector strategy.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="py-20 px-4 bg-card/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            What This Website Is and Is Not
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border border-primary/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  This Website IS
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  "Informational overview of portfolio projects",
                  "A way to request more information privately",
                  "A resource to understand our portfolio structure"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-foreground leading-relaxed">{item}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Shield className="w-6 h-6 text-muted-foreground" />
                  This Website is NOT
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  "Not a crowdfunding platform or public offering",
                  "Not a place to transact or invest online",
                  "Not providing investment, legal, or tax advice",
                  "Not creating any commitments or agreements"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="text-muted-foreground text-sm">•</span>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Available Resources
            </h2>
            <p className="text-xl text-muted-foreground">
              Informational materials to help you understand our portfolio
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center p-6">
              <FileText className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Investor Handbook</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Comprehensive informational overview of our portfolio
              </p>
              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link to="/investor-handbook">Download</Link>
              </Button>
            </Card>
            
            <Card className="text-center p-6">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Schedule Call</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Request a private conversation with our team
              </p>
              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link to="/schedule">Schedule</Link>
              </Button>
            </Card>
            
            <Card className="text-center p-6">
              <FileText className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Project Briefs</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Individual project information documents
              </p>
              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link to="/investor-documents">View</Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-card/30">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Ready to Learn More?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Review our projects and request private information. All discussions are private and non-binding.
          </p>
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

      {/* Legal Disclaimer */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <InvestorPageDisclaimer />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StartInvesting;
