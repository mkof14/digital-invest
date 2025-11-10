import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
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
import CrowdfundingProjectCard from "@/components/CrowdfundingProjectCard";
import biomathPlatform from "@/assets/biomath-platform.jpg";
import investmentDashboard from "@/assets/investment-dashboard.jpg";
import mathModeling from "@/assets/math-modeling-visual.jpg";
import biotechViz from "@/assets/biotech-visualization.jpg";

const Index = () => {
  const projects = [
    {
      title: "BioMath Life Platform",
      description: "Revolutionary precision medicine platform combining mathematical modeling with AI-driven diagnostics for personalized healthcare solutions.",
      category: "Healthcare Technology",
      image: biomathPlatform,
      link: "/projects/biomath-life"
    },
    {
      title: "Investment Portfolio Management",
      description: "Advanced investment tracking and portfolio optimization platform specifically designed for biotechnology and healthcare investments.",
      category: "Financial Technology",
      image: investmentDashboard,
      link: "/start-investing"
    },
    {
      title: "Mathematical Modeling Suite",
      description: "Comprehensive biomathematical simulation tools for predicting treatment outcomes and disease progression with unprecedented accuracy.",
      category: "Research & Development",
      image: mathModeling,
      link: "/projects/biomath-core"
    },
    {
      title: "BioTech Visualization Engine",
      description: "State-of-the-art 3D visualization platform for molecular structures, genetic data, and biological processes in real-time.",
      category: "Visualization Technology",
      image: biotechViz,
      link: "/platform"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section with Clean Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
        {/* Clean Professional Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card" />
        
        <div className="relative z-10 max-w-7xl mx-auto text-center space-y-12">
          {/* Badge */}
          <Badge 
            variant="secondary" 
            className="px-6 py-3 text-base font-semibold backdrop-blur-sm bg-secondary/20 border-secondary/30 animate-fade-in"
          >
            <Zap className="w-4 h-4 mr-2 inline" />
            Professional Investment Platform
          </Badge>
          
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold animate-fade-in">
            <span className="block text-foreground mb-4">
              Invest in the Future
            </span>
            <span className="block text-primary">
              of Precision Medicine
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed animate-fade-in">
            Join exclusive investment opportunities in cutting-edge biotechnology projects. 
            Digital Invest Inc. brings you vetted, high-potential innovations in healthcare and life sciences.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in">
            <Link to="/start-investing">
              <Button size="lg" className="px-12 py-7 text-lg group">
                Start Investing
                <TrendingUp className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/platform">
              <Button size="lg" variant="outline" className="px-12 py-7 text-lg border-2 group">
                Explore Platform
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Investment Projects Section */}
      <section className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <Badge variant="secondary" className="mb-4 px-4 py-2">
              <Rocket className="w-4 h-4 mr-2 inline" />
              Investment Opportunities
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground">
              Our Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover groundbreaking biotechnology innovations seeking strategic investment
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
            {projects.map((project, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CrowdfundingProjectCard {...project} />
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/projects/biomath-life">
              <Button size="lg" variant="outline" className="px-8 py-6 text-lg group border-2">
                View All Projects
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 px-4 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground">
              Why Invest With Us
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We provide unparalleled opportunities in the biotechnology sector with comprehensive support
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Shield className="w-12 h-12" />,
                title: "Secure Investments",
                description: "Bank-grade security with full regulatory compliance and investor protection"
              },
              {
                icon: <LineChart className="w-12 h-12" />,
                title: "High Returns",
                description: "Access to pre-vetted high-growth biotech opportunities with strong ROI potential"
              },
              {
                icon: <Users className="w-12 h-12" />,
                title: "Expert Guidance",
                description: "Professional investment advisors with deep biotechnology sector expertise"
              },
              {
                icon: <Award className="w-12 h-12" />,
                title: "Proven Track Record",
                description: "Successful portfolio of healthcare innovations with measurable impact"
              }
            ].map((feature, index) => (
              <Card key={index} className="hover:-translate-y-1 transition-all duration-300 border border-border/50 bg-card hover:shadow-elevated overflow-hidden">
                <CardContent className="relative pt-8 pb-6 space-y-4">
                  <div className="p-4 bg-primary/5 rounded-xl w-fit mx-auto">
                    <div className="text-primary">{feature.icon}</div>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground text-center">{feature.title}</h3>
                  <p className="text-muted-foreground text-center leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-4 relative overflow-hidden bg-card/30">
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
          <Badge variant="secondary" className="px-6 py-3 text-base">
            <Zap className="w-4 h-4 mr-2 inline" />
            Start Your Investment Journey
          </Badge>
          
          <h2 className="text-4xl md:text-6xl font-bold text-foreground">
            Ready to Invest in
            <span className="block text-primary mt-2">
              Healthcare Innovation?
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join our community of forward-thinking investors and gain exclusive access to 
            groundbreaking biotechnology projects shaping the future of medicine.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <Link to="/start-investing">
              <Button size="lg" className="px-12 py-7 text-lg group">
                Create Account
                <Sparkles className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              </Button>
            </Link>
            <Link to="/team">
              <Button size="lg" variant="outline" className="px-12 py-7 text-lg border-2 group">
                Meet Our Team
                <Users className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              </Button>
            </Link>
          </div>
          
          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-8 pt-12">
            {[
              { icon: <Shield />, text: "SEC Registered" },
              { icon: <Award />, text: "Industry Certified" },
              { icon: <Lock />, text: "Secure Platform" },
              { icon: <CheckCircle2 />, text: "Verified Projects" }
            ].map((badge, index) => (
              <div key={index} className="flex items-center space-x-2 text-muted-foreground">
                <div className="text-primary">{badge.icon}</div>
                <span className="text-sm font-medium">{badge.text}</span>
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
