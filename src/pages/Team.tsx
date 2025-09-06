import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import alexTur from "@/assets/team/alex-tur.jpg";
import karinaGorfin from "@/assets/team/karina-gorfin.jpg";
import { Award, Users, Globe, Building2 } from "lucide-react";

const Team = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="max-w-6xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4 px-4 py-2">
            Executive Leadership
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Visionary Leaders in
            <span className="block text-primary">Precision Medicine</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Our leadership team combines decades of experience in biotechnology, healthcare innovation, 
            and business development to drive the future of precision medicine.
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Michael Kofman */}
            <Card className="card-hover border-0 shadow-tech">
              <CardHeader className="text-center">
                <div className="w-48 h-48 rounded-full mx-auto mb-6 overflow-hidden shadow-glow bg-primary/10">
                  <img 
                    src="/lovable-uploads/649e2294-dd2f-4267-955e-efae9202adb9.png" 
                    alt="Michael Kofman, CEO/President" 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <CardTitle className="text-2xl text-foreground">Michael Kofman</CardTitle>
                <CardDescription className="text-lg font-medium text-primary">CEO/President & Founder</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  Visionary entrepreneur and technological innovator with over 25 years of experience in executive leadership. 
                  Founded Digital Invest Inc. to revolutionize precision medicine through mathematical modeling and AI-driven 
                  diagnostics. Previously founded 9 Net Avenue, which achieved a remarkable $19.5B market valuation.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Award className="w-5 h-5 text-secondary" />
                    <span className="text-sm font-medium">Entrepreneur of the Year 1999</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Building2 className="w-5 h-5 text-secondary" />
                    <span className="text-sm font-medium">Founded 5+ successful technology companies</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe className="w-5 h-5 text-secondary" />
                    <span className="text-sm font-medium">Ph.D. in Information Technology</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-secondary" />
                    <span className="text-sm font-medium">Expert in biotech strategy & innovation</span>
                  </div>
                </div>
                <div className="bg-secondary/10 rounded-lg p-4 border border-secondary/20">
                  <h4 className="font-semibold text-secondary mb-2">Key Achievements</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Led 9 Net Avenue to $19.5B market cap acquisition</li>
                    <li>• Pioneer in biotechnology mathematical modeling</li>
                    <li>• 25+ years in executive leadership</li>
                    <li>• Strategic advisor to Fortune 500 companies</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Alex Tur */}
            <Card className="card-hover border-0 shadow-tech">
              <CardHeader className="text-center">
                <div className="w-48 h-48 rounded-full mx-auto mb-6 overflow-hidden shadow-glow bg-primary/10">
                  <img 
                    src={alexTur} 
                    alt="Alex Tur, CTO" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-2xl text-foreground">Alex Tur</CardTitle>
                <CardDescription className="text-lg font-medium text-primary">Chief Technology Officer</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  Distinguished technology architect and engineering leader with over 20 years of experience in 
                  multidisciplinary software and hardware development. Specializes in cloud-native B2B/B2C platforms, 
                  Big Data processing ecosystems, and enterprise-scale distributed systems.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Award className="w-5 h-5 text-secondary" />
                    <span className="text-sm font-medium">Best Defense Enterprise Designer Award</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Building2 className="w-5 h-5 text-secondary" />
                    <span className="text-sm font-medium">20+ years in engineering leadership</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe className="w-5 h-5 text-secondary" />
                    <span className="text-sm font-medium">Master's in Electrical Engineering</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-secondary" />
                    <span className="text-sm font-medium">Cloud architecture & data processing expert</span>
                  </div>
                </div>
                <div className="bg-secondary/10 rounded-lg p-4 border border-secondary/20">
                  <h4 className="font-semibold text-secondary mb-2">Technical Expertise</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Enterprise cloud architecture design</li>
                    <li>• Big Data processing & machine learning</li>
                    <li>• Distributed systems & microservices</li>
                    <li>• Healthcare data security & compliance</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Karina Gorfin */}
            <Card className="card-hover border-0 shadow-tech">
              <CardHeader className="text-center">
                <div className="w-48 h-48 rounded-full mx-auto mb-6 overflow-hidden shadow-glow bg-primary/10">
                  <img 
                    src={karinaGorfin} 
                    alt="Karina Gorfin, CLO" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-2xl text-foreground">Karina Gorfin</CardTitle>
                <CardDescription className="text-lg font-medium text-primary">Chief Legal Officer</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  Distinguished legal strategist and corporate counsel with over 25 years of experience advising 
                  international corporations on complex technology law matters. Recognized leader in healthcare 
                  regulatory compliance, intellectual property, and strategic business relations.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Award className="w-5 h-5 text-secondary" />
                    <span className="text-sm font-medium">Leading Female Attorney in Tech Law</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Building2 className="w-5 h-5 text-secondary" />
                    <span className="text-sm font-medium">Founded legal practice in 2003</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-secondary" />
                    <span className="text-sm font-medium">NY and NJ State Bars member</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe className="w-5 h-5 text-secondary" />
                    <span className="text-sm font-medium">Healthcare regulatory compliance expert</span>
                  </div>
                </div>
                <div className="bg-secondary/10 rounded-lg p-4 border border-secondary/20">
                  <h4 className="font-semibold text-secondary mb-2">Legal Specializations</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Healthcare & biotechnology regulation</li>
                    <li>• Intellectual property & patent law</li>
                    <li>• Corporate governance & compliance</li>
                    <li>• International business transactions</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 px-4 bg-secondary/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Leadership Experience
            </h2>
            <p className="text-lg text-muted-foreground">
              Collective expertise driving innovation in precision medicine
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Combined Experience", value: "70+", icon: Users },
              { label: "Countries Served", value: "15+", icon: Globe },
              { label: "Companies Founded", value: "10+", icon: Building2 },
              { label: "Industry Awards", value: "25+", icon: Award }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Team;