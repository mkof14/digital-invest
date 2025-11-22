import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8 text-foreground">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none text-foreground space-y-6">
            <p className="text-muted-foreground">
              We respect your privacy.
            </p>

            <p className="text-muted-foreground">
              This Privacy Policy explains how Digital Invest Inc. collects and uses information submitted through this website.
            </p>

            <section>
              <h2 className="text-2xl font-bold mb-4">Information we collect</h2>
              <p className="text-muted-foreground mb-3">
                When you submit a form or expression of interest, we may collect:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Your name</li>
                <li>Your email address</li>
                <li>Optional phone, country, and message content</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">How we use your information</h2>
              <p className="text-muted-foreground mb-3">
                We use this information to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Respond to your inquiries</li>
                <li>Review and follow up on your expression of interest</li>
                <li>Communicate with you about relevant projects</li>
              </ul>
              <p className="text-muted-foreground mt-3">
                We do not sell or share your personal information with third parties outside Digital Invest Inc., except if required by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Data security</h2>
              <p className="text-muted-foreground">
                We use reasonable technical measures to protect data, but no system is completely secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Cookies and analytics</h2>
              <p className="text-muted-foreground">
                Basic analytics tools or cookies may be used to understand website usage and improve performance.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Updates</h2>
              <p className="text-muted-foreground">
                We may update this Privacy Policy from time to time. The updated version will be posted on this page.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
