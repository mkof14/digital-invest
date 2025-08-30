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
import { 
  Dna, 
  Brain, 
  Activity, 
  Shield, 
  Zap, 
  Users, 
  ArrowRight, 
  CheckCircle,
  Star,
  Award,
  Globe,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Facebook,
  Youtube,
  Building2,
  Target,
  Calendar,
  Microscope,
  Cloud,
  HeartPulse,
  Pill,
  Database,
  Monitor
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Enhanced Animations */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Digital Invest Inc. - BioMath Life Platform" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-primary opacity-85"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <div className="mb-6 animate-fade-in">
            <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-medium">
              <Award className="w-4 h-4 mr-2" />
              Healthcare Tech Outlook Top Company 2024
            </Badge>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in leading-tight">
            Precision Medicine
            <span className="block text-white/80 text-4xl md:text-6xl">Redefined</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in max-w-3xl mx-auto leading-relaxed">
            Digital Invest Inc. transforms healthcare through mathematical modeling of human biology, 
            delivering predictive diagnostics and personalized treatment strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-8 py-3">
              Discover Platform <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary px-8 py-3">
              Partnership Opportunities
            </Button>
          </div>
        </div>
      </section>

      {/* Recognition & Awards */}
      <section className="py-16 px-4 bg-secondary/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 px-4 py-2">
              Industry Recognition
            </Badge>
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Featured in Leading Publications
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <Card className="border-0 shadow-elegant hover-scale">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <Award className="h-16 w-16 text-primary" />
                </div>
                <CardTitle className="text-2xl">Healthcare Tech Outlook</CardTitle>
                <CardDescription className="text-lg">Top Precision Medicine Solutions Company</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Recognized among the top precision medicine companies transforming healthcare 
                  through innovative genetic analysis and personalized treatment strategies.
                </p>
                <Button variant="outline" asChild>
                  <a href="https://www.healthcaretechoutlook.com/digital-invest-inc" target="_blank" rel="noopener noreferrer">
                    Read Full Interview <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-6 bg-background rounded-lg shadow-sm">
                <CheckCircle className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg">Market Leadership</h4>
                  <p className="text-muted-foreground">Leading innovations in precision medicine and genetic analysis</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-6 bg-background rounded-lg shadow-sm">
                <CheckCircle className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg">International Expertise</h4>
                  <p className="text-muted-foreground">Proven track record with successful projects across multiple countries</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-6 bg-background rounded-lg shadow-sm">
                <CheckCircle className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg">Technology Integration</h4>
                  <p className="text-muted-foreground">Seamless integration of AI, mathematics, and biological sciences</p>
                </div>
              </div>
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
                  <div className="w-24 h-24 rounded-full bg-gradient-primary mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
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
              <h3 className="text-xl font-bold text-foreground">Digital Invest Inc.</h3>
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
                <li><a href="#platform" className="hover:text-primary transition-colors">BioMath Life Platform</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Genomic Analysis</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Predictive Intelligence</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Clinical Integration</a></li>
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#team" className="hover:text-primary transition-colors">Leadership Team</a></li>
                <li><a href="#awards" className="hover:text-primary transition-colors">Recognition</a></li>
                <li><a href="#partnerships" className="hover:text-primary transition-colors">Partnerships</a></li>
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