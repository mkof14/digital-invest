import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { FileText, Shield, AlertTriangle, Lock, Scale, Leaf } from "lucide-react";

const LegalOverview = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
          <div className="max-w-4xl mx-auto text-center">
            <Scale className="h-16 w-16 text-primary mx-auto mb-6" />
            <h1 className="text-5xl font-bold mb-6">Legal Center</h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive legal, compliance, and risk information for Digital Invest Inc.
            </p>
          </div>
        </section>

        {/* Main Legal Statement */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <Card className="border-2 border-primary/20 bg-muted/30 mb-12">
              <CardContent className="pt-8 pb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Digital Invest Inc. Legal Position</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Digital Invest Inc. is a private entity operating a multi-sector portfolio of projects. This website serves strictly informational purposes and does not constitute a public offering, crowdfunding platform, or marketplace for securities.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  All potential participation with Digital Invest Inc. is handled privately, by invitation only, and subject to due diligence, eligibility verification, suitability assessment, and formal legal agreements executed offline.
                </p>
                <p className="text-lg font-semibold text-foreground">
                  Critical: The legal status of any relationship with Digital Invest Inc., and any rights or obligations, are defined exclusively in written agreements executed offline. Website text does not create any contractual relationship, guarantee, or binding commitment.
                </p>
              </CardContent>
            </Card>

            {/* Legal Resources Grid */}
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Legal Resources</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Compliance */}
              <Link to="/compliance">
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer border border-border/50">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <Shield className="h-6 w-6 text-primary" />
                      <CardTitle>Regulatory & Compliance</CardTitle>
                    </div>
                    <CardDescription className="text-base">
                      Digital Invest Inc.'s approach to regulation, KYC/AML, eligibility requirements, and compliance philosophy. Explains how we structure participation to meet regulatory standards.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>

              {/* Risk Factors */}
              <Link to="/risk-factors">
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer border border-border/50">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <AlertTriangle className="h-6 w-6 text-warning" />
                      <CardTitle>Risk Factors</CardTitle>
                    </div>
                    <CardDescription className="text-base">
                      Comprehensive risk disclosures covering market risks, operational challenges, regulatory uncertainties, technology risks, and capital loss potential across all portfolio projects.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>

              {/* Risk Disclosure (Legal) */}
              <Link to="/legal/risk-disclosure">
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer border border-border/50">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <AlertTriangle className="h-6 w-6 text-warning" />
                      <CardTitle>Risk Disclosure (Legal)</CardTitle>
                    </div>
                    <CardDescription className="text-base">
                      Formal risk disclosure document covering capital loss, forward-looking statements, suitability requirements, and acknowledgment that no advice is provided through this website.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>

              {/* Terms of Use */}
              <Link to="/legal/terms">
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer border border-border/50">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <FileText className="h-6 w-6 text-primary" />
                      <CardTitle>Terms of Use</CardTitle>
                    </div>
                    <CardDescription className="text-base">
                      Website terms covering purpose, user responsibilities, no financial transactions, intellectual property, and critical clause on offline contract supremacy.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>

              {/* Privacy Policy */}
              <Link to="/legal/privacy">
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer border border-border/50">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <Lock className="h-6 w-6 text-primary" />
                      <CardTitle>Privacy Policy</CardTitle>
                    </div>
                    <CardDescription className="text-base">
                      Data collection, usage, and protection policies. Explains how Digital Invest Inc. handles personal information submitted through forms and website interactions.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>

              {/* Security */}
              <Link to="/security">
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer border border-border/50">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <Lock className="h-6 w-6 text-primary" />
                      <CardTitle>Security & Infrastructure</CardTitle>
                    </div>
                    <CardDescription className="text-base">
                      Security by design, data protection measures, document control, audit systems, and critical limitations acknowledging that no system is 100% secure.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>

              {/* Governance */}
              <Link to="/governance">
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer border border-border/50">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <Scale className="h-6 w-6 text-primary" />
                      <CardTitle>Governance</CardTitle>
                    </div>
                    <CardDescription className="text-base">
                      Decision-making structure, oversight mechanisms, advisory input, and stakeholder transparency. Clarifies that governance supports disciplined operations but does not eliminate risks.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>

              {/* ESG */}
              <Link to="/esg">
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer border border-border/50">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <Leaf className="h-6 w-6 text-success" />
                      <CardTitle>ESG & Sustainability</CardTitle>
                    </div>
                    <CardDescription className="text-base">
                      Environmental, social, and governance impact considerations across health, agriculture, and food technology projects in the Digital Invest portfolio.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            </div>

            {/* Contact Section */}
            <div className="mt-16 text-center">
              <Card className="bg-muted/30 border-border/50">
                <CardContent className="pt-8 pb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Questions About Legal Matters?</h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    For regulatory, compliance, or legal questions, contact our compliance team.
                  </p>
                  <a 
                    href="mailto:compliance@digitalinvest.com" 
                    className="text-lg font-semibold hover:underline text-primary"
                  >
                    compliance@digitalinvest.com
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default LegalOverview;
