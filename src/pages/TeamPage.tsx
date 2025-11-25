import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Linkedin, Building2, CheckCircle2 } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const TeamPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="block text-foreground mb-2">Visionary Leaders in</span>
            <span className="block gradient-purple-animated">Precision Medicine</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our leadership team combines decades of experience in biotechnology, healthcare innovation, 
            and business development to drive the future of precision medicine.
          </p>
        </div>

        {/* Executive Leadership Section */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Executive Leadership
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            {/* Michael Kofman */}
            <Card className="hover:-translate-y-1 transition-all duration-300 border border-border/50 bg-card hover:shadow-elevated">
              <CardHeader>
                <CardTitle className="text-3xl text-foreground">Michael Kofman</CardTitle>
                <CardDescription className="text-xl font-semibold text-primary">CEO/President & Founder</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  Visionary entrepreneur and technological innovator with over 25 years of experience in executive leadership. 
                  Founded Digital Invest Inc. to revolutionize precision medicine through mathematical modeling and AI-driven 
                  diagnostics. Previously founded 9 Net Avenue, which achieved a remarkable $19.5B market valuation.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary" />
                    <span className="text-sm font-medium">Entrepreneur of the Year 1999</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Building2 className="w-5 h-5 text-secondary" />
                    <span className="text-sm font-medium">Founded 5+ successful technology companies</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Linkedin className="w-5 h-5 text-secondary" />
                    <span className="text-sm font-medium">Ph.D. in Information Technology</span>
                  </div>
                </div>
                <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
                  <h4 className="font-semibold text-primary mb-2">Key Achievements</h4>
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
            <Card className="hover:-translate-y-1 transition-all duration-300 border border-border/50 bg-card hover:shadow-elevated">
              <CardHeader>
                <CardTitle className="text-3xl text-foreground">Alex Tur</CardTitle>
                <CardDescription className="text-xl font-semibold text-primary">Chief Technology Officer</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  Distinguished technology architect and engineering leader with over 20 years of experience in 
                  multidisciplinary software and hardware development. Specializes in cloud-native B2B/B2C platforms, 
                  Big Data processing ecosystems, and enterprise-scale distributed systems.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary" />
                    <span className="text-sm font-medium">Best Defense Enterprise Designer Award</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Building2 className="w-5 h-5 text-secondary" />
                    <span className="text-sm font-medium">20+ years in engineering leadership</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Linkedin className="w-5 h-5 text-secondary" />
                    <span className="text-sm font-medium">Master's in Electrical Engineering</span>
                  </div>
                </div>
                <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
                  <h4 className="font-semibold text-primary mb-2">Technical Expertise</h4>
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
            <Card className="hover:-translate-y-1 transition-all duration-300 border border-border/50 bg-card hover:shadow-elevated">
              <CardHeader>
                <CardTitle className="text-3xl text-foreground">Karina Gorfin</CardTitle>
                <CardDescription className="text-xl font-semibold text-primary">Chief Legal Officer</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  Distinguished legal strategist and corporate counsel with over 25 years of experience advising 
                  international corporations on complex technology law matters. Recognized leader in healthcare 
                  regulatory compliance, intellectual property, and strategic business relations.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary" />
                    <span className="text-sm font-medium">Leading Female Attorney in Tech Law</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Building2 className="w-5 h-5 text-secondary" />
                    <span className="text-sm font-medium">Founded legal practice in 2003</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Linkedin className="w-5 h-5 text-secondary" />
                    <span className="text-sm font-medium">NY and NJ State Bars member</span>
                  </div>
                </div>
                <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
                  <h4 className="font-semibold text-primary mb-2">Legal Specializations</h4>
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

          {/* Leadership Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-card/30 rounded-lg p-8">
            {[
              { label: "Combined Experience", value: "70+" },
              { label: "Countries Served", value: "15+" },
              { label: "Companies Founded", value: "10+" },
              { label: "Industry Awards", value: "25+" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TeamPage;
