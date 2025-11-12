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

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/5 to-background" />
        
        <div className="relative z-10 max-w-7xl mx-auto text-center space-y-10">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              Strategic Investment in
              <span className="block text-primary mt-2">Precision Medicine Innovation</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Digital Invest Inc. develops breakthrough biotechnology solutions combining mathematical modeling, 
              AI diagnostics, and precision medicine to transform healthcare outcomes.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in pt-4">
            <Link to="/start-investing">
              <Button size="lg" className="px-10 py-6 text-base">
                Investment Opportunities
                <TrendingUp className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/platform">
              <Button size="lg" variant="outline" className="px-10 py-6 text-base">
                Our Platform
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 max-w-5xl mx-auto animate-fade-in">
            {[
              { value: "25+", label: "Years Experience" },
              { value: "4", label: "Active Projects" },
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

      {/* Our Projects Section */}
      <section className="py-24 px-4 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Our Innovation Portfolio
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Four flagship projects at the intersection of biotechnology, mathematics, and artificial intelligence
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

      {/* Our Expertise Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Proven Excellence in Biotech Innovation
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Strategic advantages that position us as leaders in precision medicine investment
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Target className="w-12 h-12" />,
                title: "Precision Focus",
                description: "Deep specialization in mathematical modeling and AI-driven precision medicine solutions"
              },
              {
                icon: <Award className="w-12 h-12" />,
                title: "Proven Leadership",
                description: "Executive team with 70+ combined years and $19.5B previous exit success"
              },
              {
                icon: <Building2 className="w-12 h-12" />,
                title: "Corporate Excellence",
                description: "Full regulatory compliance with healthcare and investment industry standards"
              },
              {
                icon: <Lightbulb className="w-12 h-12" />,
                title: "Innovation Pipeline",
                description: "Proprietary technology platforms spanning diagnostics, treatment, and data analytics"
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
