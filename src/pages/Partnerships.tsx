import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import InvestmentCard from "@/components/InvestmentCard";
import InvestorForm from "@/components/InvestorForm";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Handshake, 
  Globe, 
  Building2, 
  Users, 
  Target, 
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Heart,
  University,
  Microscope
} from "lucide-react";

const Partnerships = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="max-w-6xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4 px-4 py-2">
            Strategic Partnerships
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Building the Future of
            <span className="block text-primary">Precision Medicine Together</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Join Digital Invest Inc. in advancing healthcare through strategic partnerships, 
            investment opportunities, and collaborative innovation in biomathematical modeling.
          </p>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Partnership Opportunities
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Multiple pathways to collaborate and grow with us in the precision medicine ecosystem
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <Building2 className="h-12 w-12 text-primary mb-4" />,
                title: "Healthcare Systems",
                description: "Partner with hospitals, clinics, and healthcare networks to integrate precision medicine solutions into existing workflows and improve patient outcomes.",
                benefits: [
                  "Improved diagnostic accuracy",
                  "Personalized treatment protocols",
                  "Enhanced patient outcomes",
                  "Operational efficiency gains"
                ]
              },
              {
                icon: <University className="h-12 w-12 text-primary mb-4" />,
                title: "Academic Institutions",
                description: "Collaborate with universities and research institutions on groundbreaking studies in biomathematics, genetics, and precision medicine.",
                benefits: [
                  "Joint research initiatives",
                  "Access to cutting-edge research",
                  "Student exchange programs",
                  "Publication opportunities"
                ]
              },
              {
                icon: <Microscope className="h-12 w-12 text-primary mb-4" />,
                title: "Pharmaceutical Companies",
                description: "Work with pharmaceutical and biotech companies to accelerate drug discovery, optimize clinical trials, and improve therapeutic outcomes.",
                benefits: [
                  "Accelerated drug development",
                  "Enhanced clinical trial design",
                  "Biomarker discovery",
                  "Regulatory pathway optimization"
                ]
              }
            ].map((partnership, index) => (
              <Card key={index} className="hover-scale border-0 shadow-elegant p-6">
                <div className="text-center mb-6">{partnership.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-center">{partnership.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{partnership.description}</p>
                <ul className="space-y-2">
                  {partnership.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
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
              Investment Opportunities
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Strategic investment opportunities to advance precision medicine technology and global healthcare transformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <InvestmentCard
              title="Platform Advancement"
              description="Next-generation BioMath Life Platform development with enhanced AI capabilities and expanded clinical applications"
              targetAmount="$2.5M"
              currentAmount="$850K"
              progress={34}
              features={[
                "Advanced machine learning integration",
                "Scalable cloud infrastructure",
                "Enhanced predictive analytics",
                "Global deployment capabilities"
              ]}
            />
            <InvestmentCard
              title="Clinical Implementation"
              description="Large-scale clinical validation studies and regulatory pathway advancement for healthcare system integration"
              targetAmount="$5M"
              currentAmount="$1.2M"
              progress={24}
              features={[
                "Multi-center clinical trials",
                "FDA regulatory compliance",
                "Healthcare system partnerships",
                "Clinical outcome validation"
              ]}
            />
            <InvestmentCard
              title="Global Expansion"
              description="International market development, strategic partnerships, and global distribution network establishment"
              targetAmount="$3M"
              currentAmount="$950K"
              progress={32}
              features={[
                "International market entry",
                "Strategic partnership development",
                "Global distribution network",
                "Regulatory compliance worldwide"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Current Collaborations */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Current Collaborations
            </h2>
            <p className="text-xl text-muted-foreground">
              Our existing partnerships driving innovation in precision medicine
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="p-8 border-0 shadow-elegant">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <University className="h-8 w-8 text-primary mr-3" />
                  <CardTitle className="text-xl">Academic Collaborations</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Harvard Medical School</h4>
                      <p className="text-sm text-muted-foreground">Collaborative development of genetic reports for clinical interpretation</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Stanford Biomath</h4>
                      <p className="text-sm text-muted-foreground">Joint research in biomathematical modeling and predictive analytics</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="p-8 border-0 shadow-elegant">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <Globe className="h-8 w-8 text-primary mr-3" />
                  <CardTitle className="text-xl">International Projects</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">European Genetic Laboratories</h4>
                      <p className="text-sm text-muted-foreground">Implementation of genetic testing protocols across multiple countries</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Baltic Region Healthcare</h4>
                      <p className="text-sm text-muted-foreground">Regional precision medicine initiatives and healthcare system integration</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partnership Application */}
      <section className="py-20 px-4 bg-secondary/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Join Our Partnership Network
            </h2>
            <p className="text-xl text-muted-foreground">
              Ready to explore partnership or investment opportunities? Connect with our team.
            </p>
          </div>
          <InvestorForm />
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Partnerships;