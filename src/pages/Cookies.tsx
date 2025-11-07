import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Cookies = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Cookie Policy
            </h1>
            <p className="text-lg text-muted-foreground mb-2">
              Digital Invest Inc. - Cookie Usage
            </p>
            <p className="text-sm text-muted-foreground">
              Last Updated: January 2025
            </p>
          </div>

          <div className="space-y-8">
            <Card className="border-2 border-primary/20">
              <CardContent className="pt-6">
                <p className="text-muted-foreground leading-relaxed">
                  This Cookie Policy explains how Digital Invest Inc. ("we," "our," or "us") uses cookies and similar tracking technologies on our websites and platforms. By using our services, you consent to the use of cookies as described in this policy.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>1. What Are Cookies?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Cookies are small text files placed on your device (computer, smartphone, tablet) when you visit a website. They enable the website to remember your actions and preferences over time, improving your browsing experience and helping us understand how users interact with our services.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We also use similar technologies like web beacons, pixels, local storage, and session storage for similar purposes.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. Types of Cookies We Use</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Strictly Necessary Cookies</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                    Essential for the website to function. These cookies enable core functionality such as security, network management, and accessibility.
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-xs text-muted-foreground ml-4">
                    <li>Authentication and session management</li>
                    <li>Security and fraud prevention</li>
                    <li>Load balancing and performance</li>
                    <li>User preference storage (language, theme)</li>
                  </ul>
                  <p className="text-xs text-muted-foreground mt-2 italic">Duration: Session or up to 1 year</p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">Analytics & Performance Cookies</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                    Help us understand how visitors use our website by collecting anonymous information about page visits, traffic sources, and user behavior.
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-xs text-muted-foreground ml-4">
                    <li>Google Analytics (traffic analysis)</li>
                    <li>Page view tracking and time spent</li>
                    <li>Error tracking and debugging</li>
                    <li>A/B testing and optimization</li>
                  </ul>
                  <p className="text-xs text-muted-foreground mt-2 italic">Duration: Up to 2 years</p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">Functional Cookies</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                    Enable enhanced functionality and personalization based on your interactions.
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-xs text-muted-foreground ml-4">
                    <li>Remember user preferences and settings</li>
                    <li>Personalized content recommendations</li>
                    <li>Chat and customer support features</li>
                    <li>Form auto-fill and saved information</li>
                  </ul>
                  <p className="text-xs text-muted-foreground mt-2 italic">Duration: Up to 1 year</p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">Marketing & Advertising Cookies</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                    Used to deliver relevant advertisements and track campaign effectiveness.
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-xs text-muted-foreground ml-4">
                    <li>LinkedIn, Facebook, YouTube advertising pixels</li>
                    <li>Remarketing and retargeting</li>
                    <li>Conversion tracking</li>
                    <li>Interest-based advertising</li>
                  </ul>
                  <p className="text-xs text-muted-foreground mt-2 italic">Duration: Up to 2 years</p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">Social Media Cookies</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                    Enable social sharing and integration with social media platforms.
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-xs text-muted-foreground ml-4">
                    <li>Social sharing buttons (LinkedIn, Facebook, YouTube)</li>
                    <li>Social login authentication</li>
                    <li>Social media feed embedding</li>
                  </ul>
                  <p className="text-xs text-muted-foreground mt-2 italic">Duration: Varies by platform</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. Third-Party Cookies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We use services from trusted third-party providers that may place cookies on your device:
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                  <li><strong>Google Analytics:</strong> Website traffic and user behavior analysis</li>
                  <li><strong>LinkedIn Insight Tag:</strong> Professional audience analytics and advertising</li>
                  <li><strong>Facebook Pixel:</strong> Social media marketing and conversion tracking</li>
                  <li><strong>YouTube:</strong> Video content embedding and analytics</li>
                  <li><strong>Cloud Service Providers:</strong> Infrastructure and performance optimization</li>
                </ul>
                <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                  These third parties have their own privacy policies governing their use of cookies.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. How to Manage Cookies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  You have several options to control and manage cookies:
                </p>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2 text-sm">Browser Settings</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                    Most browsers allow you to control cookies through settings:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-xs text-muted-foreground ml-4">
                    <li><strong>Chrome:</strong> Settings → Privacy and Security → Cookies</li>
                    <li><strong>Firefox:</strong> Options → Privacy & Security → Cookies</li>
                    <li><strong>Safari:</strong> Preferences → Privacy → Cookies</li>
                    <li><strong>Edge:</strong> Settings → Privacy → Cookies</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2 text-sm">Opt-Out Links</h4>
                  <ul className="list-disc list-inside space-y-1 text-xs text-muted-foreground ml-4">
                    <li>Google Analytics: <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Opt-out Browser Add-on</a></li>
                    <li>Network Advertising Initiative: <a href="http://www.networkadvertising.org/choices/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">NAI Opt-Out</a></li>
                    <li>Digital Advertising Alliance: <a href="http://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">DAA Opt-Out</a></li>
                  </ul>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed bg-muted/30 p-3 rounded">
                  <strong>Note:</strong> Disabling certain cookies may limit functionality and affect your user experience on our platforms.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>5. Do Not Track Signals</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Some browsers include "Do Not Track" (DNT) features. Currently, there is no industry standard for responding to DNT signals. We do not currently respond to DNT browser signals but honor opt-out preferences through cookie settings and opt-out mechanisms described above.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>6. Mobile Device Identifiers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  When you access our services via mobile applications, we may use mobile device identifiers (like Apple's IDFA or Google's Advertising ID) for similar purposes as cookies. You can reset or limit ad tracking in your device settings:
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4 mt-2">
                  <li><strong>iOS:</strong> Settings → Privacy → Advertising → Limit Ad Tracking</li>
                  <li><strong>Android:</strong> Settings → Google → Ads → Opt out of Ads Personalization</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>7. Updates to This Cookie Policy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We may update this Cookie Policy periodically to reflect changes in technology, legislation, or our business practices. We will post the updated version on this page with a revised "Last Updated" date. We encourage you to review this policy regularly.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 bg-primary/5">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  If you have questions about our use of cookies or this Cookie Policy:
                </p>
                <div className="text-sm space-y-1">
                  <p><strong>Digital Invest Inc.</strong></p>
                  <p>Privacy & Data Protection</p>
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

export default Cookies;