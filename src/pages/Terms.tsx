import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Terms of Service
            </h1>
            <p className="text-lg text-muted-foreground mb-2">
              Digital Invest Inc. - Legal Agreement
            </p>
            <p className="text-sm text-muted-foreground">
              Last Updated: January 2025
            </p>
          </div>

          <div className="space-y-8">
            <Card className="border-2 border-primary/20">
              <CardContent className="pt-6">
                <p className="text-muted-foreground leading-relaxed">
                  These Terms of Service ("Terms") constitute a legally binding agreement between you and Digital Invest Inc. ("Company," "we," "our," or "us") governing your access to and use of our websites, platforms, services, and products. By accessing or using our services, you agree to be bound by these Terms and our Privacy Policy.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>1. Acceptance of Terms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  By creating an account, accessing our website, or using any of our services (including BioMath Life Platform, BioMath Core, TerraAero, and investment services), you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree, you must not access or use our services.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  You must be at least 18 years old and have the legal capacity to enter into binding contracts to use our services.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. Description of Services</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Digital Invest Inc. provides:
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                  <li><strong>Investment Services:</strong> Access to investment opportunities in our portfolio companies</li>
                  <li><strong>BioMath Life Platform:</strong> Precision medicine and biomathematical modeling services</li>
                  <li><strong>BioMath Core:</strong> Digital health platform with AI-powered health analysis</li>
                  <li><strong>TerraAero:</strong> Agricultural drone services and delivery solutions</li>
                  <li><strong>Information Services:</strong> Educational content, research, and company information</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. User Accounts & Registration</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  You are responsible for:
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                  <li>Providing accurate, current, and complete registration information</li>
                  <li>Maintaining the security of your account credentials</li>
                  <li>All activities that occur under your account</li>
                  <li>Notifying us immediately of any unauthorized access</li>
                </ul>
                <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                  We reserve the right to suspend or terminate accounts that violate these Terms or provide false information.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Investment Terms & Disclaimers</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm font-semibold text-foreground">IMPORTANT INVESTMENT DISCLAIMERS:</p>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                  <li>All investments involve risk, including potential loss of principal</li>
                  <li>Past performance is not indicative of future results</li>
                  <li>Investment opportunities may be limited to accredited investors</li>
                  <li>You should consult with financial, legal, and tax advisors before investing</li>
                  <li>We do not provide investment advice or recommendations</li>
                  <li>Investments may be illiquid and difficult to sell</li>
                  <li>Forward-looking statements are not guarantees of future performance</li>
                </ul>
                <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                  Digital Invest Inc. is not a registered broker-dealer or investment advisor. We facilitate connections between investors and investment opportunities but do not provide investment advice.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>5. Healthcare Services Disclaimer</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm font-semibold text-foreground">MEDICAL DISCLAIMER:</p>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                  <li>Our healthcare services are for informational purposes only</li>
                  <li>Services do not constitute medical advice, diagnosis, or treatment</li>
                  <li>Always consult qualified healthcare professionals for medical decisions</li>
                  <li>Do not disregard professional medical advice based on our services</li>
                  <li>In case of medical emergency, call emergency services immediately</li>
                  <li>Results and recommendations are based on available data and AI analysis</li>
                  <li>We do not guarantee specific health outcomes or treatment success</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>6. Intellectual Property Rights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  All content, technology, software, designs, logos, trademarks, and intellectual property on our platforms are owned by Digital Invest Inc. or licensed to us. You may not:
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                  <li>Copy, modify, or distribute our content without permission</li>
                  <li>Reverse engineer or decompile our software</li>
                  <li>Use our trademarks or branding without authorization</li>
                  <li>Create derivative works based on our services</li>
                  <li>Remove copyright or proprietary notices</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>7. User Conduct & Prohibited Activities</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  You agree not to:
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                  <li>Violate any laws, regulations, or third-party rights</li>
                  <li>Provide false, misleading, or fraudulent information</li>
                  <li>Interfere with or disrupt our services or servers</li>
                  <li>Attempt unauthorized access to our systems</li>
                  <li>Use automated systems (bots, scrapers) without permission</li>
                  <li>Transmit viruses, malware, or harmful code</li>
                  <li>Harass, abuse, or harm other users</li>
                  <li>Use services for money laundering or illegal activities</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>8. Payment Terms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  For paid services or investment transactions:
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                  <li>All fees are stated in US Dollars unless otherwise specified</li>
                  <li>Payment is required before service delivery or investment confirmation</li>
                  <li>We accept payment methods as displayed on our platform</li>
                  <li>All sales are final unless otherwise stated</li>
                  <li>You authorize us to charge your payment method for applicable fees</li>
                  <li>We reserve the right to modify pricing with notice</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>9. Limitation of Liability</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW:
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                  <li>Services are provided "AS IS" without warranties of any kind</li>
                  <li>We do not guarantee uninterrupted, error-free, or secure service</li>
                  <li>Digital Invest Inc. is not liable for investment losses or poor performance</li>
                  <li>We are not liable for health outcomes or medical decisions based on our services</li>
                  <li>Total liability shall not exceed the amount you paid us in the past 12 months</li>
                  <li>We are not liable for indirect, incidental, or consequential damages</li>
                  <li>Some jurisdictions do not allow liability limitations; terms may vary</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>10. Indemnification</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  You agree to indemnify, defend, and hold harmless Digital Invest Inc., its officers, directors, employees, and partners from any claims, liabilities, damages, losses, or expenses (including legal fees) arising from your use of our services, violation of these Terms, or infringement of any third-party rights.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>11. Termination</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We may suspend or terminate your access to our services at any time, with or without cause or notice, including for violation of these Terms. Upon termination, your right to use our services ceases immediately. Sections of these Terms that by nature should survive termination will remain in effect.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>12. Governing Law & Dispute Resolution</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  These Terms are governed by the laws of the State of North Carolina and the United States, without regard to conflict of law principles. Any disputes shall be resolved through:
                </p>
                <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground ml-4">
                  <li>Good faith negotiation between parties</li>
                  <li>Binding arbitration in Charlotte, North Carolina (if negotiation fails)</li>
                  <li>Arbitration under American Arbitration Association rules</li>
                </ol>
                <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                  You waive the right to participate in class action lawsuits against Digital Invest Inc.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>13. Changes to Terms</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We reserve the right to modify these Terms at any time. Material changes will be communicated via email or prominent notice on our website. Continued use of our services after changes constitutes acceptance of the modified Terms. The "Last Updated" date reflects the most recent version.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>14. Miscellaneous</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-muted-foreground"><strong>Severability:</strong> If any provision is found unenforceable, remaining provisions remain in effect.</p>
                <p className="text-sm text-muted-foreground"><strong>Entire Agreement:</strong> These Terms constitute the entire agreement between you and Digital Invest Inc.</p>
                <p className="text-sm text-muted-foreground"><strong>No Waiver:</strong> Failure to enforce any provision does not waive our right to enforce it later.</p>
                <p className="text-sm text-muted-foreground"><strong>Assignment:</strong> You may not assign your rights; we may assign ours without notice.</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 bg-primary/5">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  For questions about these Terms of Service:
                </p>
                <div className="text-sm space-y-1">
                  <p><strong>Digital Invest Inc.</strong></p>
                  <p>Legal Department</p>
                  <p>Charlotte, NC 28204, United States</p>
                  <p>Email: <a href="mailto:legal@digitalinvest.com" className="text-primary hover:underline">legal@digitalinvest.com</a></p>
                  <p>General: <a href="mailto:info@digitalinvest.com" className="text-primary hover:underline">info@digitalinvest.com</a></p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Terms;