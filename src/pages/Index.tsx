import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Navigation from "@/components/Navigation";
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
      
      {/* Enhanced Animations */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/8 to-accent/6 rounded-full blur-3xl animate-subtle-float"></div>
        <div className="absolute top-3/4 right-1/4 w-128 h-128 bg-gradient-to-l from-secondary/6 to-primary/4 rounded-full blur-3xl animate-subtle-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-1/4 left-1/2 w-80 h-80 bg-gradient-to-br from-accent/8 to-success/4 rounded-full blur-3xl animate-subtle-float" style={{ animationDelay: '6s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-radial from-primary/4 to-transparent rounded-full blur-2xl animate-gentle-pulse" style={{ animationDelay: '9s' }}></div>
      </div>
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-hero overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-electric rounded-full opacity-10 animate-subtle-float"></div>
          <div className="absolute bottom-40 right-20 w-24 h-24 bg-gradient-bio rounded-full opacity-15 animate-gentle-pulse"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-neural rounded-full opacity-20 animate-vibrant-glow"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in">
              <div>
                <Badge variant="secondary" className="mb-4 px-4 py-2 animate-gentle-pulse bg-gradient-electric">
                  Next-Generation Precision Medicine
                </Badge>
                <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
                  Redefining Healthcare Through 
                  <span className="block bg-gradient-electric bg-clip-text text-transparent animate-rainbow-pulse">Mathematical Precision</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Digital Invest Inc. pioneers the convergence of mathematical modeling, artificial intelligence, 
                  and genetic analysis to deliver unprecedented accuracy in personalized medicine and healthcare outcomes.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="px-8 py-4 text-lg shadow-rainbow animate-subtle-float glow-hover" asChild>
                  <a href="/start-investing">Begin Investment Journey</a>
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-4 text-lg electric-hover" asChild>
                  <a href="/platform">Explore Platform</a>
                </Button>
              </div>
            </div>
            
            <div className="relative animate-scale-in">
              <div className="absolute -inset-4 bg-gradient-electric rounded-xl blur-xl opacity-40 animate-vibrant-glow"></div>
              <img 
                src={biotechVisualization} 
                alt="Advanced biotech data visualization" 
                className="relative w-full rounded-xl shadow-rainbow corporate-pattern animate-gentle-pulse"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics Section */}
      <section className="py-20 px-4 bg-gradient-corporate">
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
      <section className="py-20 px-4 bg-gradient-glow relative overflow-hidden">
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
                <Badge className="mb-4 px-4 py-2 bg-gradient-electric animate-gentle-pulse">About Digital Invest Inc.</Badge>
                <h2 className="text-4xl font-bold text-foreground mb-6">
                  Pioneering the Future of <span className="bg-gradient-electric bg-clip-text text-transparent">Precision Medicine</span>
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
              
              <Button className="px-8 py-3 shadow-vibrant electric-hover" asChild>
                <a href="/team">Meet Our Leadership Team</a>
              </Button>
            </div>
            
            <div className="relative animate-scale-in">
              <div className="absolute -inset-4 bg-gradient-rainbow rounded-xl blur-xl opacity-20 animate-rainbow-pulse"></div>
              <img 
                src={mathModelingVisual} 
                alt="Mathematical Modeling Visualization" 
                className="relative w-full rounded-xl shadow-vibrant animate-gentle-pulse"
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

      {/* Leadership Team */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Executive Leadership
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Seasoned executives with proven track records in biotechnology, healthcare, and business development
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Michael Kofman",
                role: "CEO/President",
                description: "Renowned technological visionary with expertise in executive leadership, strategic analysis, and biotechnology innovation. Founded multiple successful companies including 9 Net Avenue (acquired for $19.5B market value).",
                achievements: "Entrepreneur of the Year 1999, Listed in Who's Who in America, Ph.D. in Information Technology"
              },
              {
                name: "Alex Tur",
                role: "CTO",
                description: "Accomplished engineering leader with 20+ years in multidisciplinary software and hardware development. Expert in Cloud B2B/B2C platforms and Big Data processing ecosystems.",
                achievements: "Best Defense Enterprise Designer, Best Defense Concern Inventor, Sun Microsystems Awards finalist"
              },
              {
                name: "Karina Gorfin",
                role: "CLO",
                description: "Executive legal strategist with 25+ years advising international corporations. Expertise in technology law, strategic business relations, and corporate governance.",
                achievements: "Leading Female Attorney in Technology Law, Founded legal practice in 2003, Member of NY and NJ State Bars"
              }
            ].map((member, index) => (
              <Card key={index} className="hover-scale border-0 shadow-elegant">
                <CardHeader className="text-center">
                  <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden shadow-lg">
                    <img 
                      src={index === 0 
                        ? "/lovable-uploads/649e2294-dd2f-4267-955e-efae9202adb9.png"
                        : index === 1 
                          ? alexTur 
                          : karinaGorfin} 
                      alt={`${member.name} professional headshot`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-lg font-medium text-primary">{member.role}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {member.description}
                  </p>
                  <p className="text-sm text-muted-foreground font-medium">
                    {member.achievements}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Statistics */}
      <section className="py-16 px-4 bg-secondary/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Years of Experience", value: "30+", icon: Calendar },
              { label: "Countries Served", value: "10+", icon: Globe },
              { label: "Successful Projects", value: "150+", icon: Target },
              { label: "Team Members", value: "50+", icon: Users }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
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
      
      {/* Enhanced Footer */}
      <footer className="bg-background border-t border-border">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 mb-2">
                <img 
                  src="/lovable-uploads/d1011e6f-955a-48d9-adef-662af751c3b9.png" 
                  alt="Digital Invest Logo" 
                  className="w-8 h-8 object-contain"
                />
                <h3 className="text-xl font-bold text-foreground">Digital Invest Inc.</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Pioneering the future of precision medicine through mathematical modeling, 
                AI-driven diagnostics, and personalized therapeutic solutions.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/company/digital-invest-inc/" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="p-2 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors">
                  <Linkedin className="h-5 w-5 text-primary" />
                </a>
                <a href="https://www.facebook.com/digitalinvestcompany" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="p-2 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors">
                  <Facebook className="h-5 w-5 text-primary" />
                </a>
                <a href="https://www.youtube.com/@BiomathLife" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="p-2 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors">
                  <Youtube className="h-5 w-5 text-primary" />
                </a>
              </div>
            </div>

            {/* Platform */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Platform</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="/platform" className="hover:text-primary transition-colors">BioMath Life Platform</a></li>
                <li><a href="/services" className="hover:text-primary transition-colors">Genomic Analysis</a></li>
                <li><a href="/services" className="hover:text-primary transition-colors">Predictive Intelligence</a></li>
                <li><a href="/services" className="hover:text-primary transition-colors">Clinical Integration</a></li>
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="/team" className="hover:text-primary transition-colors">Leadership Team</a></li>
                <li><a href="/recognition" className="hover:text-primary transition-colors">Recognition</a></li>
                <li><a href="/partnerships" className="hover:text-primary transition-colors">Partnerships</a></li>
                <li><a href="https://www.healthcaretechoutlook.com/digital-invest-inc" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="hover:text-primary transition-colors">Press Coverage</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Contact</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-sm">Charlotte, NC 28204</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                  <a href="tel:19802108177" className="text-sm hover:text-primary transition-colors">
                    (980) 210-8177
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                  <a href="mailto:info@digitalinvest.com" className="text-sm hover:text-primary transition-colors">
                    info@digitalinvest.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-muted-foreground text-sm">
                © 2024 Digital Invest Inc. All rights reserved. Transforming healthcare through precision medicine.
              </p>
              <div className="flex space-x-6 text-sm text-muted-foreground">
                <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;