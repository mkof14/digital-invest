import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Activity, Plane, Heart, Building2, Award, Shield, Globe, Dna, Brain, Droplets } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const projects = [
    {
      id: "biomathlife",
      name: "BioMath Life Platform",
      category: "Healthcare Innovation",
      icon: Dna,
      tagline: "Precision Medicine through Biomathematical Modeling",
      description: "Revolutionary platform shifting from statistical to mathematical methods in disease diagnosis and treatment. Using digital simulation to predict disease progression and treatment response before testing on patients.",
      features: [
        "Genomic Analysis & DNA Sequencing",
        "Personalized Biomathematical Models",
        "AI-Powered Medical Diagnosis 24/7",
        "Disease Development Modeling",
        "Personalized Medication Selection"
      ],
      borderColor: "border-blue-500/30"
    },
    {
      id: "biomathcore",
      name: "BioMath Core",
      category: "Digital Health",
      icon: Heart,
      tagline: "All of Health in One Platform",
      description: "Where data meets daily life. Track, understand, and optimize your wellbeing through intelligent, real-time insights tailored to you. From sleep to cognition, from movement to mood.",
      features: [
        "200+ AI-Powered Health Services",
        "20 Comprehensive Health Categories",
        "Dual AI Analysis & Second Opinion",
        "Secure Health Data Vault (AES-256)",
        "24/7 AI Health Advisor"
      ],
      borderColor: "border-green-500/30"
    },
    {
      id: "terraaero",
      name: "TerraAero",
      category: "Agricultural Technology",
      icon: Plane,
      tagline: "Advanced Drone Solutions for Agriculture & Delivery",
      description: "Transform operations with cutting-edge drone technology. From precision farming to rapid delivery - bringing innovation to agriculture and last-mile logistics.",
      features: [
        "Precision Irrigation & Watering",
        "Fertilization & Crop Treatment",
        "Field Analysis & Professional Reports",
        "Restaurant & Retail Delivery",
        "Express Service with 10-min Guarantee"
      ],
      borderColor: "border-amber-500/30"
    },
    {
      id: "digital-invest",
      name: "Digital Invest Inc.",
      category: "Investment Platform",
      icon: Building2,
      tagline: "Complete Technology Portfolio",
      description: "Your gateway to innovative technology investments. Established since 2010 (formerly GENEX Company) with proven expertise in genomics, biomathematics, and advanced technologies.",
      features: [
        "Diversified Project Portfolio",
        "Multiple Revenue Streams",
        "International Partnerships",
        "Award-Winning Technology",
        "Proven Track Record Since 2010"
      ],
      borderColor: "border-violet-500/30"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-[pulse_8s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-[pulse_8s_ease-in-out_infinite] [animation-delay:4s]"></div>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 mt-20">
        <div className="text-center max-w-5xl mx-auto mb-16 animate-fade-in">
          <Badge className="mb-6 text-base px-6 py-2 animate-scale-in">
            <Globe className="w-4 h-4 mr-2" />
            Innovation Investment Platform
          </Badge>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight">
            <span className="block bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              Digital Invest Inc.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Pioneering breakthrough technologies in precision medicine, digital health, and agricultural innovation. 
            Join us in shaping the future of healthcare and technology.
          </p>

          <div className="flex gap-6 justify-center flex-wrap mb-12">
            <Link to="/start-investing">
              <Button size="lg" className="text-lg px-10 py-6 hover-scale">
                Explore Opportunities
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/team">
              <Button size="lg" variant="outline" className="text-lg px-10 py-6 hover-scale">
                Meet the Team
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex items-center justify-center gap-8 flex-wrap">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Award className="w-5 h-5 text-primary" />
              <span>Award-Winning Technology</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Shield className="w-5 h-5 text-primary" />
              <span>Enterprise Security</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Building2 className="w-5 h-5 text-primary" />
              <span>Established 2010</span>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="mb-20">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Innovation Portfolio</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our cutting-edge projects transforming healthcare, agriculture, and technology
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <Card 
                  key={project.id} 
                  className={`group border-2 ${project.borderColor} hover:shadow-2xl transition-all duration-500 overflow-hidden hover-scale animate-fade-in`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  
                  <CardHeader className="relative">
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {project.category}
                      </Badge>
                    </div>
                    
                    <CardTitle className="text-2xl md:text-3xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.name}
                    </CardTitle>
                    
                    <p className="text-base font-semibold text-primary mb-3">
                      {project.tagline}
                    </p>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </CardHeader>

                  <CardContent className="relative space-y-6">
                    {/* Features List */}
                    <div className="space-y-3">
                      <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                        Key Features
                      </p>
                      <div className="space-y-2">
                        {project.features.map((feature) => (
                          <div key={feature} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                            <span className="text-sm leading-relaxed">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-4">
                      <Link to={`/projects/${project.id}`} className="flex-1">
                        <Button variant="outline" className="w-full group-hover:border-primary transition-colors">
                          Learn More
                        </Button>
                      </Link>
                      <Link to="/start-investing" className="flex-1">
                        <Button className="w-full">
                          Invest
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-20 animate-fade-in">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Digital Invest Inc.?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Pioneering innovation with proven expertise and cutting-edge solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-primary/30 hover:shadow-glow transition-all hover-scale">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Proven Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Operating since 2010 with established leadership in genomics, biomathematics, and AI-powered healthcare solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/30 hover:shadow-glow transition-all hover-scale">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Activity className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Diversified Portfolio</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Multiple revenue streams across healthcare, digital health, and agricultural technology sectors.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/30 hover:shadow-glow transition-all hover-scale">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Droplets className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Real-World Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Solving critical challenges in precision medicine, personal health management, and sustainable agriculture.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <Card className="relative overflow-hidden border-2 border-primary/30 bg-card">
          <CardContent className="relative py-16 px-8 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Be Part of the Innovation?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Join us in revolutionizing healthcare and technology. Explore investment opportunities 
                and partnership programs that align with your vision.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Link to="/start-investing">
                  <Button size="lg" className="text-lg px-10 py-6 hover-scale">
                    Start Investing
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/partnerships">
                  <Button size="lg" variant="outline" className="text-lg px-10 py-6 hover-scale">
                    Partnership Opportunities
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
