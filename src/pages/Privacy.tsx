import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-muted-foreground mb-2">
              Digital Invest Inc. - Protecting Your Privacy
            </p>
            <p className="text-sm text-muted-foreground">
              Last Updated: January 2025
            </p>
          </div>

          <div className="space-y-8">
            <Card className="border-2 border-primary/20">
              <CardContent className="pt-6">
                <p className="text-muted-foreground leading-relaxed">
                  Digital Invest Inc. ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our platforms (BioMath Life, BioMath Core, TerraAero), or engage with our investment services. Please read this policy carefully.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>1. Information We Collect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Personal Information</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    We collect information you provide directly, including:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                    <li>Name, email address, phone number, postal address</li>
                    <li>Investment profile information, financial data, accreditation status</li>
                    <li>Professional information, company details</li>
                    <li>Account credentials and authentication data</li>
                    <li>Payment and transaction information</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Health Information (BioMath Products)</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    For our healthcare platforms, we may collect genetic data, medical history, health metrics, diagnostic information, and treatment records with your explicit consent.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Technical Information</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We automatically collect IP addresses, browser type, device information, cookies, usage data, and analytics information.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. How We Use Your Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We use collected information to:
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                  <li>Provide, operate, and maintain our services and platforms</li>
                  <li>Process investment applications and transactions</li>
                  <li>Deliver personalized healthcare and diagnostic services</li>
                  <li>Communicate with you about services, updates, and opportunities</li>
                  <li>Improve and develop new features and services</li>
                  <li>Ensure security and prevent fraud</li>
                  <li>Comply with legal obligations and regulations</li>
                  <li>Conduct research and analytics (aggregated and anonymized)</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. Data Security & Protection</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Digital Invest Inc. implements industry-leading security measures:
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                  <li>AES-256 encryption for data at rest and TLS encryption for data in transit</li>
                  <li>Multi-factor authentication and role-based access controls</li>
                  <li>Regular security audits and penetration testing</li>
                  <li>Secure cloud infrastructure with redundancy and backups</li>
                  <li>Employee training and strict confidentiality agreements</li>
                  <li>Incident response protocols and monitoring systems</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Healthcare Compliance (HIPAA & HITECH)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Our healthcare platforms (BioMath Life and BioMath Core) comply with:
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                  <li>Health Insurance Portability and Accountability Act (HIPAA)</li>
                  <li>HITECH Act requirements for electronic health records</li>
                  <li>GDPR for European users and international data transfers</li>
                  <li>State-specific healthcare privacy laws</li>
                </ul>
                <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                  Protected Health Information (PHI) is handled with the highest security standards and shared only with your explicit authorization or as required by law.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>5. Information Sharing & Disclosure</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We do not sell your personal information. We may share information with:
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                  <li>Service providers and business partners (under strict confidentiality agreements)</li>
                  <li>Healthcare providers and laboratories (with your consent)</li>
                  <li>Legal and regulatory authorities (when required by law)</li>
                  <li>Professional advisors (attorneys, accountants, auditors)</li>
                  <li>Business successors (in case of merger or acquisition)</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>6. Your Rights & Choices</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                  <li>Access, correct, or delete your personal information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Request data portability</li>
                  <li>Withdraw consent for data processing</li>
                  <li>Object to automated decision-making</li>
                  <li>File complaints with data protection authorities</li>
                </ul>
                <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                  To exercise these rights, contact us at info@digitalinvest.com.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>7. Data Retention</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We retain personal information for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce agreements. Health data is retained according to HIPAA requirements (minimum 6 years). Investment records follow SEC and financial regulations.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>8. International Data Transfers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Digital Invest Inc. operates primarily in the United States. If you access our services from outside the US, your information may be transferred to and processed in the United States. We ensure appropriate safeguards are in place for international transfers, including Standard Contractual Clauses approved by the European Commission.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>9. Children's Privacy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children. If we learn that we have collected information from a child without parental consent, we will delete that information promptly.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>10. Changes to This Policy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We will notify you of material changes via email or prominent notice on our website. The "Last Updated" date at the top indicates the most recent revision.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 bg-primary/5">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  For privacy-related questions, concerns, or to exercise your rights:
                </p>
                <div className="text-sm space-y-1">
                  <p><strong>Digital Invest Inc.</strong></p>
                  <p>Privacy Officer</p>
                  <p>Charlotte, NC 28204, United States</p>
                  <p>Email: <a href="mailto:privacy@digitalinvest.com" className="text-primary hover:underline">privacy@digitalinvest.com</a></p>
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

export default Privacy;