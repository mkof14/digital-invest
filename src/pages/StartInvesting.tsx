import Navigation from "@/components/Navigation";
import InvestorForm from "@/components/InvestorForm";
import ROICalculator from "@/components/ROICalculator";
import InvestmentTimeline from "@/components/InvestmentTimeline";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  TrendingUp, 
  DollarSign, 
  Shield, 
  Users, 
  Target, 
  CheckCircle,
  ArrowRight,
  Calendar,
  BarChart3,
  PieChart,
  Globe,
  Award,
  Lightbulb,
  FileText,
  Clock,
  Phone,
  Calculator,
  Briefcase,
  Video,
  Download
} from "lucide-react";

const StartInvesting = () => {
  const investmentTiers = [
    {
      title: "Strategic Partner",
      amount: "$50K - $250K",
      description: "Join as a strategic partner with direct involvement in platform development and market expansion.",
      features: [
        "Quarterly board meetings participation",
        "Technology roadmap input",
        "Priority market access",
        "Custom integration support",
        "Annual strategic review sessions"
      ],
      returnPotential: "15-25% projected annual return",
      timeline: "3-5 years"
    },
    {
      title: "Growth Investor", 
      amount: "$250K - $1M",
      description: "Significant equity position with enhanced governance rights and accelerated growth participation.",
      features: [
        "Board observer rights",
        "Monthly progress reports",
        "Global expansion priority",
        "IP licensing opportunities",
        "Exit strategy planning"
      ],
      returnPotential: "20-35% projected annual return",
      timeline: "2-4 years"
    },
    {
      title: "Institutional Partner",
      amount: "$1M+",
      description: "Premium institutional investment with maximum influence and exclusive partnership benefits.",
      features: [
        "Board seat appointment",
        "Technology co-development",
        "Exclusive market territories",
        "White-label solutions",
        "Strategic M&A participation"
      ],
      returnPotential: "25-45% projected annual return", 
      timeline: "1-3 years"
    }
  ];

  const investmentProcess = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "Schedule a confidential discussion with our investment team to explore opportunities and align objectives.",
      duration: "1-2 weeks",
      deliverables: ["Investment overview presentation", "Market analysis report", "Technology demonstration"]
    },
    {
      step: "02", 
      title: "Due Diligence",
      description: "Comprehensive review of financials, technology, market position, and growth projections with full transparency.",
      duration: "2-4 weeks",
      deliverables: ["Financial statements review", "Technology audit", "Legal documentation", "Risk assessment"]
    },
    {
      step: "03",
      title: "Investment Structuring",
      description: "Customize investment terms, governance structure, and partnership agreement based on mutual objectives.",
      duration: "1-3 weeks", 
      deliverables: ["Term sheet negotiation", "Legal framework", "Governance structure", "Investment agreement"]
    },
    {
      step: "04",
      title: "Partnership Activation",
      description: "Complete investment process and begin active collaboration on strategic initiatives and growth acceleration.",
      duration: "1-2 weeks",
      deliverables: ["Funds transfer", "Board integration", "Strategic planning", "Market launch support"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="max-w-6xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4 px-4 py-2">
            Investment Opportunity
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Partner with the Future of
            <span className="block text-primary">Precision Medicine</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
            Join Digital Invest Inc. in transforming healthcare through mathematical modeling, 
            AI-driven diagnostics, and personalized therapeutic solutions. Strategic investment 
            opportunities from $50K to $10M+ with exceptional growth potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8 py-3 glow-hover">
              <Calendar className="mr-2 h-5 w-5" />
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-3 electric-hover">
              <FileText className="mr-2 h-5 w-5" />
              Download Investor Deck
            </Button>
            <Button size="lg" variant="secondary" className="px-8 py-3">
              <Video className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Investment Opportunities */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Investment Tiers & Opportunities
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Flexible investment structures designed to match your capital capacity and strategic objectives
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {investmentTiers.map((tier, index) => (
              <Card key={index} className="hover-scale border-0 shadow-elegant p-6 relative overflow-hidden">
                {index === 1 && (
                  <Badge className="absolute top-4 right-4 bg-primary text-white">
                    Most Popular
                  </Badge>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl text-center">{tier.title}</CardTitle>
                  <CardDescription className="text-center">
                    <span className="text-2xl font-bold text-primary">{tier.amount}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">{tier.description}</p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {tier.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-4 border-t border-border space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Return Potential:</span>
                      <span className="font-semibold text-primary">{tier.returnPotential}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span>Timeline:</span>
                      <span className="font-semibold">{tier.timeline}</span>
                    </div>
                  </div>
                  
                  <Button className="w-full">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="py-20 px-4 bg-secondary/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Massive Market Opportunity
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                The precision medicine market is experiencing unprecedented growth, driven by 
                advances in genomics, AI, and personalized healthcare. Our mathematical modeling 
                approach positions us at the forefront of this transformation.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">$217B</div>
                  <div className="text-sm text-muted-foreground">Global Precision Medicine Market by 2028</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">12.8%</div>
                  <div className="text-sm text-muted-foreground">Annual Market Growth Rate (CAGR)</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">75%</div>
                  <div className="text-sm text-muted-foreground">Healthcare Cost Reduction Potential</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">500M+</div>
                  <div className="text-sm text-muted-foreground">Patients Benefiting Globally</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <Card className="p-6 border-0 shadow-sm">
                <div className="flex items-center mb-4">
                  <BarChart3 className="h-8 w-8 text-primary mr-3" />
                  <h3 className="font-semibold">Revenue Projections</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>2024 Revenue</span>
                      <span className="font-semibold">$2.3M</span>
                    </div>
                    <Progress value={23} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>2025 Projection</span>
                      <span className="font-semibold">$8.7M</span>
                    </div>
                    <Progress value={87} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>2026 Target</span>
                      <span className="font-semibold">$25M</span>
                    </div>
                    <Progress value={100} className="h-2" />
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 border-0 shadow-sm">
                <div className="flex items-center mb-4">
                  <Globe className="h-8 w-8 text-primary mr-3" />
                  <h3 className="font-semibold">Global Expansion Plan</h3>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>North America (Current)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span>Europe (2025)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span>Asia-Pacific (2026)</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Process */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Investment Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A transparent, structured approach to partnership that ensures mutual success and aligned objectives
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {investmentProcess.map((process, index) => (
              <Card key={index} className="text-center p-6 border-0 shadow-elegant relative">
                <div className="text-4xl font-bold text-primary mb-4">{process.step}</div>
                <h3 className="text-xl font-semibold mb-3">{process.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{process.description}</p>
                
                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-center space-x-2">
                    <Clock className="w-3 h-3 text-primary" />
                    <span className="font-medium">{process.duration}</span>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-border">
                  <h4 className="font-medium text-xs mb-2">Key Deliverables:</h4>
                  <ul className="space-y-1 text-xs text-muted-foreground">
                    {process.deliverables.map((deliverable, idx) => (
                      <li key={idx}>• {deliverable}</li>
                    ))}
                  </ul>
                </div>
                
                {index < investmentProcess.length - 1 && (
                  <ArrowRight className="absolute top-1/2 -right-4 w-6 h-6 text-primary transform -translate-y-1/2 hidden lg:block" />
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-20 px-4 bg-gradient-glow">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Calculate Your Investment Returns
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Use our interactive calculator to project potential returns based on your investment amount and timeline
            </p>
          </div>
          <ROICalculator />
        </div>
      </section>

      {/* Investment Timeline */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Investment Roadmap & Milestones
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transparent timeline showing how your investment accelerates our growth and drives returns
            </p>
          </div>
          <InvestmentTimeline />
        </div>
      </section>

      {/* Enhanced Investment Tools */}
      <section className="py-20 px-4 bg-secondary/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Investment Resources & Tools
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive resources to support your investment decision and ongoing partnership
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6 hover-scale border-0 shadow-elevated">
              <Download className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Investor Deck</h3>
              <p className="text-sm text-muted-foreground mb-4">Comprehensive presentation with market analysis, financials, and growth strategy</p>
              <Button variant="outline" size="sm" className="w-full">Download PDF</Button>
            </Card>
            
            <Card className="text-center p-6 hover-scale border-0 shadow-elevated">
              <BarChart3 className="h-12 w-12 text-tech mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Financial Model</h3>
              <p className="text-sm text-muted-foreground mb-4">Detailed financial projections and scenario analysis spreadsheet</p>
              <Button variant="outline" size="sm" className="w-full">Access Model</Button>
            </Card>
            
            <Card className="text-center p-6 hover-scale border-0 shadow-elevated">
              <Video className="h-12 w-12 text-innovation mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Platform Demo</h3>
              <p className="text-sm text-muted-foreground mb-4">Interactive demonstration of our BioMath Life Platform capabilities</p>
              <Button variant="outline" size="sm" className="w-full">Watch Demo</Button>
            </Card>
            
            <Card className="text-center p-6 hover-scale border-0 shadow-elevated">
              <Briefcase className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Due Diligence</h3>
              <p className="text-sm text-muted-foreground mb-4">Virtual data room with legal documents, audited financials, and IP portfolio</p>
              <Button variant="outline" size="sm" className="w-full">Request Access</Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Risk & Returns */}
      <section className="py-20 px-4 bg-secondary/20">
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="returns" className="w-full">
            <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-12">
              <TabsTrigger value="returns">Returns</TabsTrigger>
              <TabsTrigger value="risks">Risk Analysis</TabsTrigger>
              <TabsTrigger value="protection">Protection</TabsTrigger>
            </TabsList>
            
            <TabsContent value="returns" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-foreground mb-4">Projected Returns</h2>
                <p className="text-xl text-muted-foreground">Multiple pathways to exceptional returns on investment</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="p-6 text-center border-0 shadow-elegant">
                  <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Revenue Growth</h3>
                  <div className="text-3xl font-bold text-primary mb-2">400%+</div>
                  <p className="text-sm text-muted-foreground">Projected 3-year revenue growth driven by market expansion and platform adoption</p>
                </Card>
                
                <Card className="p-6 text-center border-0 shadow-elegant">
                  <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Market Position</h3>
                  <div className="text-3xl font-bold text-primary mb-2">Top 3</div>
                  <p className="text-sm text-muted-foreground">Target position in precision medicine platform market by 2026</p>
                </Card>
                
                <Card className="p-6 text-center border-0 shadow-elegant">
                  <DollarSign className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Exit Valuation</h3>
                  <div className="text-3xl font-bold text-primary mb-2">$500M+</div>
                  <p className="text-sm text-muted-foreground">Conservative exit valuation based on industry comparables and growth trajectory</p>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="risks" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-foreground mb-4">Risk Assessment</h2>
                <p className="text-xl text-muted-foreground">Comprehensive risk analysis and mitigation strategies</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="p-6 border-0 shadow-elegant">
                  <h3 className="text-lg font-semibold mb-4 text-destructive">Identified Risks</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-medium">Regulatory Changes</h4>
                        <p className="text-sm text-muted-foreground">Healthcare regulations and FDA approval processes</p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-medium">Technology Competition</h4>
                        <p className="text-sm text-muted-foreground">Emerging competitive technologies and market disruption</p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-medium">Market Adoption</h4>
                        <p className="text-sm text-muted-foreground">Healthcare system integration and adoption rates</p>
                      </div>
                    </li>
                  </ul>
                </Card>
                
                <Card className="p-6 border-0 shadow-elegant">
                  <h3 className="text-lg font-semibold mb-4 text-success">Mitigation Strategies</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium">Regulatory Expertise</h4>
                        <p className="text-sm text-muted-foreground">Experienced legal team and regulatory consultants</p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium">IP Protection</h4>
                        <p className="text-sm text-muted-foreground">Strong patent portfolio and proprietary algorithms</p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium">Strategic Partnerships</h4>
                        <p className="text-sm text-muted-foreground">Healthcare system collaborations and early adoption agreements</p>
                      </div>
                    </li>
                  </ul>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="protection" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-foreground mb-4">Investor Protection</h2>
                <p className="text-xl text-muted-foreground">Comprehensive safeguards for your investment</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="p-6 text-center border-0 shadow-elegant">
                  <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Legal Framework</h3>
                  <p className="text-sm text-muted-foreground">Comprehensive legal documentation with investor rights and protections</p>
                </Card>
                
                <Card className="p-6 text-center border-0 shadow-elegant">
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Board Representation</h3>
                  <p className="text-sm text-muted-foreground">Governance rights and board participation based on investment level</p>
                </Card>
                
                <Card className="p-6 text-center border-0 shadow-elegant">
                  <FileText className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Regular Reporting</h3>
                  <p className="text-sm text-muted-foreground">Monthly financial reports and quarterly strategic updates</p>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Start Your Investment Journey
            </h2>
            <p className="text-xl text-muted-foreground">
              Complete the form below to begin the investment process or schedule a consultation with our team.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 text-center border-0 shadow-sm">
              <Phone className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Direct Contact</h3>
              <p className="text-sm text-muted-foreground mb-4">Speak directly with our investment team</p>
              <Button variant="outline" size="sm">
                <Phone className="mr-2 h-4 w-4" />
                (980) 210-8177
              </Button>
            </Card>
            
            <Card className="p-6 text-center border-0 shadow-sm">
              <Calendar className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Schedule Meeting</h3>
              <p className="text-sm text-muted-foreground mb-4">Book a consultation at your convenience</p>
              <Button variant="outline" size="sm">
                <Calendar className="mr-2 h-4 w-4" />
                Book Now
              </Button>
            </Card>
            
            <Card className="p-6 text-center border-0 shadow-sm">
              <FileText className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Investment Materials</h3>
              <p className="text-sm text-muted-foreground mb-4">Download detailed investor documentation</p>
              <Button variant="outline" size="sm">
                <FileText className="mr-2 h-4 w-4" />
                Download
              </Button>
            </Card>
          </div>
          
          <InvestorForm />
        </div>
      </section>
    </div>
  );
};

export default StartInvesting;