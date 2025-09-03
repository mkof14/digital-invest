import Navigation from "@/components/Navigation";
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
            <Card className="hover-scale border-0 shadow-elegant">
              <CardHeader className="text-center">
                <div className="relative w-48 h-48 rounded-full mx-auto mb-6 overflow-hidden shadow-elegant">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-secondary/10 to-accent/15"></div>
                  <img 
                    src="/lovable-uploads/6dd765a4-4908-4542-a7af-88ec2bf6741f.png" 
                    alt="Michael Kofman, CEO/President" 
                    className="relative z-10 w-full h-full object-cover object-center"
                    style={{
                      filter: 'contrast(1.1) brightness(1.05)',
                      mixBlendMode: 'multiply'
                    }}
                  />
                </div>
                <CardTitle className="text-2xl">Michael Kofman</CardTitle>
                <CardDescription className="text-lg font-medium text-primary">CEO/President</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Renowned technological visionary with expertise in executive leadership, strategic analysis, 
                  and biotechnology innovation. Founded multiple successful companies including 9 Net Avenue 
                  (acquired for $19.5B market value).
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Award className="w-4 h-4 text-primary" />
                    <span className="text-sm">Entrepreneur of the Year 1999</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Building2 className="w-4 h-4 text-primary" />
                    <span className="text-sm">Founded 5+ successful companies</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Globe className="w-4 h-4 text-primary" />
                    <span className="text-sm">Ph.D. in Information Technology</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Alex Tur */}
            <Card className="hover-scale border-0 shadow-elegant">
              <CardHeader className="text-center">
                <div className="w-48 h-48 rounded-full mx-auto mb-6 overflow-hidden shadow-lg">
                  <img 
                    src={alexTur} 
                    alt="Alex Tur, CTO" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-2xl">Alex Tur</CardTitle>
                <CardDescription className="text-lg font-medium text-primary">CTO</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Accomplished engineering leader with 20+ years in multidisciplinary software and hardware 
                  development. Expert in Cloud B2B/B2C platforms and Big Data processing ecosystems.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Award className="w-4 h-4 text-primary" />
                    <span className="text-sm">Best Defense Enterprise Designer</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Building2 className="w-4 h-4 text-primary" />
                    <span className="text-sm">20+ years engineering leadership</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Globe className="w-4 h-4 text-primary" />
                    <span className="text-sm">Master's in Electrical Engineering</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Karina Gorfin */}
            <Card className="hover-scale border-0 shadow-elegant">
              <CardHeader className="text-center">
                <div className="w-48 h-48 rounded-full mx-auto mb-6 overflow-hidden shadow-lg">
                  <img 
                    src={karinaGorfin} 
                    alt="Karina Gorfin, CLO" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-2xl">Karina Gorfin</CardTitle>
                <CardDescription className="text-lg font-medium text-primary">CLO</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Executive legal strategist with 25+ years advising international corporations. 
                  Expertise in technology law, strategic business relations, and corporate governance.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Award className="w-4 h-4 text-primary" />
                    <span className="text-sm">Leading Female Attorney in Tech Law</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Building2 className="w-4 h-4 text-primary" />
                    <span className="text-sm">Founded legal practice in 2003</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-primary" />
                    <span className="text-sm">NY and NJ State Bars member</span>
                  </div>
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
    </div>
  );
};

export default Team;