import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BioMathPlatform from "@/components/BioMathPlatform";
import CompanyInfo from "@/components/CompanyInfo";
import InvestmentCard from "@/components/InvestmentCard";
import InvestorForm from "@/components/InvestorForm";
import heroImage from "@/assets/hero-modern-tech.jpg";
import alexTur from "@/assets/team/alex-tur.jpg";
import karinaGorfin from "@/assets/team/karina-gorfin.jpg";
import biomathPlatform from "@/assets/biomath-platform.jpg";
import { TrendingUp, Users, Target, CheckCircle, Dna, Brain, Activity, Globe, Building2, Award, Shield, Zap, Calendar, Linkedin, Facebook, Youtube, MapPin, Phone, Mail } from 'lucide-react';
import AnimatedStatsCard from '@/components/AnimatedStatsCard';
import DataVisualization from '@/components/DataVisualization';
import biotechVisualization from '@/assets/biotech-visualization.jpg';
import investmentDashboard from '@/assets/investment-dashboard.jpg';
import mathModelingVisual from '@/assets/math-modeling-visual.jpg';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Subtle Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/4 rounded-full blur-3xl animate-subtle-float"></div>
        <div className="absolute top-3/4 right-1/4 w-128 h-128 bg-secondary/3 rounded-full blur-3xl animate-subtle-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-1/4 left-1/2 w-80 h-80 bg-accent/3 rounded-full blur-3xl animate-subtle-float" style={{ animationDelay: '6s' }}></div>
      </div>
      
      {/* Hero Section - Enhanced */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 overflow-hidden">
        {/* Simple Background */}
        <div className="absolute inset-0 bg-background/95"></div>
        
        {/* Minimal Geometric Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-1/4 w-24 h-24 bg-primary/15 rounded-full animate-subtle-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-32 left-1/3 w-32 h-32 bg-accent/10 rounded-full animate-gentle-pulse" style={{ animationDelay: '3s' }}></div>
          <div className="absolute top-1/3 right-20 w-16 h-16 bg-secondary/20 rounded-full animate-vibrant-glow" style={{ animationDelay: '5s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10 animate-fade-in">
              {/* Premium Badge */}
              <div className="inline-flex items-center">
                <Badge variant="secondary" className="px-6 py-3 text-sm font-semibold">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    Next-Generation Precision Medicine
                  </div>
                </Badge>
              </div>
              
              {/* Enhanced Typography */}
              <div className="space-y-6">
                <h1 className="text-6xl md:text-8xl font-black text-foreground leading-none tracking-tight">
                  <span className="block">Redefining</span>
                  <span className="block text-5xl md:text-7xl font-light text-muted-foreground">Healthcare Through</span>
                  <span className="block text-primary">
                    Mathematical Precision
                  </span>
                </h1>
                
                <div className="relative">
                  <div className="absolute -left-4 top-0 w-1 h-full bg-primary rounded-full"></div>
                  <p className="text-2xl md:text-3xl text-muted-foreground leading-relaxed font-light pl-8">
                    Digital Invest Inc. pioneers the convergence of 
                    <span className="text-primary font-medium"> mathematical modeling</span>, 
                    <span className="text-accent font-medium"> artificial intelligence</span>, and 
                    <span className="text-secondary font-medium"> genetic analysis</span> to deliver 
                    unprecedented accuracy in personalized medicine.
                  </p>
                </div>
              </div>
              
              {/* Enhanced CTAs */}
              <div className="flex flex-col sm:flex-row gap-6 pt-8">
                <Button size="lg" className="px-10 py-6 text-xl font-semibold" asChild>
                  <Link to="/start-investing">
                    <span className="flex items-center gap-3">
                      <TrendingUp className="w-6 h-6" />
                      Begin Investment Journey
                    </span>
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="px-10 py-6 text-xl font-semibold border-2" asChild>
                  <Link to="/platform">
                    <span className="flex items-center gap-3">
                      <Globe className="w-6 h-6" />
                      Explore Platform
                    </span>
                  </Link>
                </Button>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex items-center gap-8 pt-8 opacity-80">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Award className="w-5 h-5 text-accent" />
                  <span className="text-sm font-medium">Award-Winning Technology</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">Enterprise Security</span>
                </div>
              </div>
            </div>
            
            {/* Enhanced Hero Visual */}
            <div className="relative animate-scale-in lg:animate-fade-in" style={{ animationDelay: '0.3s' }}>
              {/* Main Image Container */}
              <div className="relative">
                <img 
                  src={biotechVisualization} 
                  alt="Advanced biotech data visualization showcasing precision medicine technology" 
                  className="relative w-full h-auto rounded-2xl shadow-rainbow border border-border/30 backdrop-blur-sm"
                />
                
                {/* Overlay Elements */}
                <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm rounded-lg px-4 py-2 border border-border/50">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-foreground">Live Analytics</span>
                  </div>
                </div>
                
                <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm rounded-lg px-4 py-2 border border-border/50">
                  <div className="text-sm text-muted-foreground">99.7% Accuracy</div>
                  <div className="text-lg font-bold text-primary">Real-Time Processing</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Key Metrics Section */}
      <section className="py-20 px-4 bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Transforming Healthcare Outcomes
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our precision medicine platform delivers measurable results across clinical research, patient outcomes, and healthcare efficiency.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedStatsCard
              icon={TrendingUp}
              title="Prediction Accuracy"
              value="97.3%"
              description="AI-driven diagnostic accuracy rate"
              gradient="gradient-tech"
              delay={0}
            />
            <AnimatedStatsCard
              icon={Users}
              title="Patients Analyzed"
              value="250K+"
              description="Comprehensive genomic profiles processed"
              gradient="gradient-bio"
              delay={200}
            />
            <AnimatedStatsCard
              icon={Target}
              title="Treatment Success"
              value="89.7%"
              description="Personalized therapy effectiveness"
              gradient="gradient-neural"
              delay={400}
            />
            <AnimatedStatsCard
              icon={CheckCircle}
              title="Clinical Validations"
              value="180+"
              description="Peer-reviewed studies completed"
              gradient="gradient-invest"
              delay={600}
            />
          </div>
        </div>
      </section>

      {/* Data Visualization Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Real-Time Platform Analytics
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Live data insights from our precision medicine platform showing current performance metrics and growth trends.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <DataVisualization
              title="Diagnostic Accuracy"
              type="pie"
              data={[
                { label: "Genetic Analysis", value: 97, color: "bg-primary" },
                { label: "Biomarker Detection", value: 94, color: "bg-secondary" },
                { label: "Risk Assessment", value: 89, color: "bg-accent" }
              ]}
            />
            
            <DataVisualization
              title="Treatment Success Rates"
              type="bar"
              data={[
                { label: "Personalized Therapy", value: 89, color: "bg-success" },
                { label: "Standard Treatment", value: 67, color: "bg-warning" },
                { label: "Drug Optimization", value: 84, color: "bg-info" },
                { label: "Preventive Care", value: 76, color: "bg-primary" }
              ]}
            />
            
            <DataVisualization
              title="Platform Growth"
              type="line"
              data={[
                { label: "Q1", value: 25, color: "bg-primary" },
                { label: "Q2", value: 45, color: "bg-secondary" },
                { label: "Q3", value: 78, color: "bg-accent" },
                { label: "Q4", value: 95, color: "bg-success" }
              ]}
            />
          </div>
          
          <div className="relative">
            <img 
              src={investmentDashboard} 
              alt="Investment Analytics Dashboard" 
              className="w-full rounded-xl shadow-rainbow animate-gentle-pulse"
            />
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 px-4 bg-muted/30 relative overflow-hidden">
        {/* Animated background particles */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-20 w-20 h-20 bg-primary/10 rounded-full animate-subtle-float"></div>
          <div className="absolute bottom-20 right-10 w-28 h-28 bg-secondary/10 rounded-full animate-gentle-pulse"></div>
          <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-accent/15 rounded-full animate-vibrant-glow"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in">
              <div>
                <Badge className="mb-4 px-4 py-2">About Digital Invest Inc.</Badge>
                <h2 className="text-4xl font-bold text-foreground mb-6">
                  Pioneering the Future of <span className="text-primary">Precision Medicine</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Founded by visionary technologist Michael Kofman, Digital Invest Inc. represents the convergence 
                  of biotechnology innovation, mathematical precision, and investment strategy. Our company leverages 
                  decades of experience in creating transformative technologies that redefine entire industries.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  With successful exits totaling over $19.5 billion in market value, our leadership team brings 
                  unparalleled expertise in scaling revolutionary technologies from concept to global market leadership.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <AnimatedStatsCard
                  icon={Building2}
                  title="Combined Exit Value"
                  value="$19.5B"
                  description="Total market value of successful exits"
                  gradient="gradient-invest"
                />
                <AnimatedStatsCard
                  icon={Award}
                  title="Companies Founded"
                  value="5+"
                  description="Successful technology ventures created"
                  gradient="gradient-neural"
                />
              </div>
              
              <Button className="px-8 py-3" asChild>
                <Link to="/team">Meet Our Leadership Team</Link>
              </Button>
            </div>
            
            <div className="relative animate-scale-in">
              <img
                src={mathModelingVisual} 
                alt="Mathematical Modeling Visualization" 
                className="relative w-full rounded-xl shadow-lg animate-gentle-pulse"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Platform Capabilities
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive solutions that bridge the gap between genetic data and clinical outcomes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Dna className="h-12 w-12 text-primary mb-4" />,
                title: "Genomic Analysis",
                description: "Advanced sequencing and interpretation of genetic variations with clinical-grade accuracy and comprehensive reporting."
              },
              {
                icon: <Brain className="h-12 w-12 text-primary mb-4" />,
                title: "Predictive Intelligence",
                description: "AI-driven algorithms that forecast disease progression and treatment outcomes before clinical symptoms appear."
              },
              {
                icon: <Activity className="h-12 w-12 text-primary mb-4" />,
                title: "Mathematical Modeling",
                description: "Sophisticated biomathematical simulations of human physiological systems for precise treatment optimization."
              },
              {
                icon: <Shield className="h-12 w-12 text-primary mb-4" />,
                title: "Biomarker Discovery",
                description: "Identification and validation of novel biological indicators for early detection and therapeutic monitoring."
              },
              {
                icon: <Zap className="h-12 w-12 text-primary mb-4" />,
                title: "Precision Therapeutics",
                description: "Individualized treatment protocols tailored to genetic profiles and predictive risk assessments."
              },
              {
                icon: <Users className="h-12 w-12 text-primary mb-4" />,
                title: "Clinical Integration",
                description: "Seamless integration with existing healthcare systems and workflows for practical implementation."
              }
            ].map((service, index) => (
              <Card key={index} className="hover-scale border-0 shadow-elegant group">
                <CardHeader className="text-center">
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Opportunities */}
      <section className="py-20 px-4 bg-secondary/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Strategic Partnership Opportunities
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join Digital Invest Inc. in advancing the future of precision medicine and healthcare technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <InvestmentCard
              title="Platform Advancement"
              description="Next-generation BioMath Life Platform development with enhanced AI capabilities"
              targetAmount="$2.5M"
              currentAmount="$850K"
              progress={34}
              features={[
                "Advanced machine learning integration",
                "Scalable cloud infrastructure",
                "Enhanced predictive analytics"
              ]}
            />
            <InvestmentCard
              title="Clinical Implementation"
              description="Large-scale clinical validation and regulatory pathway advancement"
              targetAmount="$5M"
              currentAmount="$1.2M"
              progress={24}
              features={[
                "Multi-center clinical trials",
                "Regulatory compliance framework",
                "Healthcare system integration"
              ]}
            />
            <InvestmentCard
              title="Global Expansion"
              description="International market development and strategic partnerships"
              targetAmount="$3M"
              currentAmount="$950K"
              progress={32}
              features={[
                "International partnerships",
                "Market development strategies",
                "Global distribution network"
              ]}
            />
          </div>
        </div>
      </section>


      {/* Contact Form */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Partner With Us
            </h2>
            <p className="text-xl text-muted-foreground">
              Ready to explore partnership opportunities? Get in touch with our team.
            </p>
          </div>
          <InvestorForm />
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;