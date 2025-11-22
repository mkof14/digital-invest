import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, FileText, Users, CheckCircle, ArrowRight, Shield, AlertCircle } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      icon: Search,
      title: 'Browse Projects',
      description: 'Explore our curated portfolio of investment opportunities. Each project is owned and managed by Digital Invest Inc., ensuring quality and strategic alignment.',
    },
    {
      number: 2,
      icon: FileText,
      title: 'Submit Expression of Interest',
      description: 'Found a project that aligns with your investment goals? Submit a non-binding expression of interest through our secure online form. No payment is required at this stage.',
    },
    {
      number: 3,
      icon: Users,
      title: 'Personal Consultation',
      description: 'Our investment team will contact you personally to discuss the opportunity in detail. We will share comprehensive documentation, financial projections, and answer all your questions.',
    },
    {
      number: 4,
      icon: CheckCircle,
      title: 'Formal Investment Process',
      description: 'If both parties agree to proceed, the investment is executed through proper legal channels. All agreements are formalized with appropriate legal documentation and regulatory compliance.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            How It Works
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A transparent, professional process designed for serious investors looking to participate 
            in high-quality private investment opportunities.
          </p>
        </div>

        {/* Steps */}
        <div className="mb-16 space-y-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute left-12 top-32 w-0.5 h-24 bg-border" />
                )}
                <Card className="overflow-hidden border border-border/50 hover:shadow-elevated transition-all duration-300">
                  <div className="flex flex-col md:flex-row">
                    <div className="bg-primary/10 p-8 flex items-center justify-center min-w-[200px]">
                      <div className="text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground mb-4">
                          <Icon className="h-8 w-8" />
                        </div>
                        <div className="text-4xl font-bold text-primary">
                          {step.number}
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 p-8">
                      <CardHeader className="p-0 mb-4">
                        <CardTitle className="text-2xl">{step.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="p-0">
                        <CardDescription className="text-base text-foreground">
                          {step.description}
                        </CardDescription>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Key Points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="border border-border/50">
            <CardHeader>
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-success/20 text-success mb-4">
                <Shield className="h-6 w-6" />
              </div>
              <CardTitle>Private Platform</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                This is not a public crowdfunding site. All projects are owned by Digital Invest Inc. and managed through professional investment channels.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-border/50">
            <CardHeader>
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-info/20 text-info mb-4">
                <Users className="h-6 w-6" />
              </div>
              <CardTitle>Personal Approach</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Every potential investor receives personalized attention from our team. We believe in building long-term relationships based on trust and transparency.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-border/50">
            <CardHeader>
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-warning/20 text-warning mb-4">
                <FileText className="h-6 w-6" />
              </div>
              <CardTitle>Proper Documentation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                All investments are executed through appropriate legal frameworks, with full documentation and regulatory compliance.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Important Disclaimer */}
        <div className="bg-muted/30 border border-border rounded-lg p-8 mb-12">
          <div className="flex items-start gap-4">
            <AlertCircle className="h-6 w-6 text-warning flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold mb-4 text-foreground">Important Legal Information</h3>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  <strong className="text-foreground">Not Investment Advice:</strong> Digital Invest Inc. does not provide investment, legal, or tax advice. All information on this website is for informational purposes only.
                </p>
                <p>
                  <strong className="text-foreground">Not a Public Offer:</strong> Nothing on this website constitutes a public offer or a solicitation to buy securities. Any potential participation must be discussed individually and may require additional legal documentation.
                </p>
                <p>
                  <strong className="text-foreground">Regulatory Compliance:</strong> All investment opportunities are subject to applicable securities laws and regulations. Investments may only be available to accredited investors or qualified purchasers as defined by applicable law.
                </p>
                <p>
                  <strong className="text-foreground">Professional Guidance:</strong> We strongly recommend consulting with your legal, financial, and tax advisors before making any investment decision.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-card border border-border/50 rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Ready to Explore Opportunities?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Browse our current portfolio and submit your expression of interest for projects that align with your investment goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/projects">
              <Button size="lg" className="text-lg px-8">
                View Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/for-investors">
              <Button size="lg" variant="outline" className="text-lg px-8">
                Contact Our Team
              </Button>
            </Link>
          </div>
        </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HowItWorks;
