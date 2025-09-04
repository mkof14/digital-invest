import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, Star, Trophy, Globe, Calendar, Building2, ArrowRight } from "lucide-react";

const Recognition = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="max-w-6xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4 px-4 py-2">
            Industry Recognition
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Leading Innovation in
            <span className="block text-primary">Precision Medicine</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Our groundbreaking work in biomathematical modeling and precision medicine 
            has earned recognition from leading industry publications and organizations worldwide.
          </p>
        </div>
      </section>

      {/* Featured Recognition */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <Card className="p-12 border-0 shadow-elegant bg-gradient-to-r from-primary/5 to-secondary/5 mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <Award className="h-16 w-16 text-primary mr-4" />
                  <div>
                    <h2 className="text-3xl font-bold text-foreground">Healthcare Tech Outlook</h2>
                    <p className="text-xl text-primary font-semibold">Top Precision Medicine Solutions Company</p>
                  </div>
                </div>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  "Digital Invest Inc. stands out as a pioneering force in precision medicine, 
                  combining advanced mathematical modeling with cutting-edge AI to transform 
                  healthcare outcomes. Their innovative approach to biomathematical analysis 
                  sets new standards in the industry."
                </p>
                <Button asChild>
                  <a href="https://www.healthcaretechoutlook.com/digital-invest-inc" 
                     target="_blank" 
                     rel="noopener noreferrer">
                    Read Full Interview <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
              
              <div className="space-y-6">
                <div className="bg-background/80 p-6 rounded-lg shadow-sm">
                  <div className="flex items-center mb-4">
                    <Star className="h-6 w-6 text-primary mr-2" />
                    <h3 className="font-semibold">Market Leadership</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Recognized for leading innovations in precision medicine and genetic analysis technology
                  </p>
                </div>
                
                <div className="bg-background/80 p-6 rounded-lg shadow-sm">
                  <div className="flex items-center mb-4">
                    <Globe className="h-6 w-6 text-primary mr-2" />
                    <h3 className="font-semibold">International Impact</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Proven track record with successful implementations across multiple countries
                  </p>
                </div>
                
                <div className="bg-background/80 p-6 rounded-lg shadow-sm">
                  <div className="flex items-center mb-4">
                    <Building2 className="h-6 w-6 text-primary mr-2" />
                    <h3 className="font-semibold">Technology Innovation</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Seamless integration of AI, mathematics, and biological sciences
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Awards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Trophy className="h-12 w-12 text-primary mb-4" />,
                title: "Entrepreneur of the Year 1999",
                organization: "Entrepreneur Magazine",
                description: "Michael Kofman recognized for outstanding achievements in business creation and development.",
                year: "1999"
              },
              {
                icon: <Award className="h-12 w-12 text-primary mb-4" />,
                title: "Best Defense Enterprise Designer",
                organization: "Defense Industry Recognition",
                description: "Alex Tur honored for exceptional innovation in defense technology systems.",
                year: "1989-1990"
              },
              {
                icon: <Star className="h-12 w-12 text-primary mb-4" />,
                title: "Who's Who in America",
                organization: "Marquis Who's Who",
                description: "Continuous recognition since 2000 for exceptional achievements in technology and business.",
                year: "2000-Present"
              },
              {
                icon: <Building2 className="h-12 w-12 text-primary mb-4" />,
                title: "Sun Microsystems Awards Finalist",
                organization: "Sun Microsystems",
                description: "Innovative project recognition in advanced technology development.",
                year: "2001"
              },
              {
                icon: <Globe className="h-12 w-12 text-primary mb-4" />,
                title: "Leading Female Attorney in Tech Law",
                organization: "Legal Industry Recognition",
                description: "Karina Gorfin recognized for excellence in technology law and corporate governance.",
                year: "2003-Present"
              },
              {
                icon: <Calendar className="h-12 w-12 text-primary mb-4" />,
                title: "Patent Holder - Digital Satellite TV",
                organization: "US Patent Office",
                description: "Innovation in HDTV technology, subsequently acquired by Sony Corporation.",
                year: "Various"
              }
            ].map((award, index) => (
              <Card key={index} className="hover-scale border-0 shadow-elegant">
                <CardHeader className="text-center">
                  {award.icon}
                  <CardTitle className="text-lg">{award.title}</CardTitle>
                  <CardDescription className="text-primary font-medium">{award.organization}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {award.description}
                  </p>
                  <Badge variant="outline">{award.year}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Press Coverage */}
      <section className="py-20 px-4 bg-secondary/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Press Coverage & Publications
            </h2>
            <p className="text-xl text-muted-foreground">
              Our work has been featured in leading industry publications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 border-0 shadow-elegant">
              <h3 className="text-xl font-bold mb-4">Healthcare Tech Outlook Interview</h3>
              <p className="text-muted-foreground mb-6">
                In-depth discussion about our precision medicine platform and its impact on healthcare transformation.
              </p>
              <Button variant="outline" asChild>
                <a href="https://www.healthcaretechoutlook.com/digital-invest-inc" 
                   target="_blank" 
                   rel="noopener noreferrer">
                  Read Article
                </a>
              </Button>
            </Card>
            
            <Card className="p-8 border-0 shadow-elegant">
              <h3 className="text-xl font-bold mb-4">Technical Publications</h3>
              <p className="text-muted-foreground mb-6">
                Research papers and technical documentation on satellite systems, digital communications, and biomathematics.
              </p>
              <Button variant="outline">
                View Publications
              </Button>
            </Card>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Recognition;