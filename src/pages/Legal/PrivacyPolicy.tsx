const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none text-foreground space-y-6">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
            <p className="text-muted-foreground">
              Digital Invest Inc. ("we," "our," or "us") respects your privacy and is committed to protecting 
              your personal information. This Privacy Policy explains how we collect, use, and safeguard your 
              information when you visit our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
            <p className="text-muted-foreground mb-3">
              We may collect the following types of information:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Personal identification information (name, email address, phone number)</li>
              <li>Investment preferences and financial information you voluntarily provide</li>
              <li>Usage data and analytics about how you interact with our website</li>
              <li>Technical information (IP address, browser type, device information)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
            <p className="text-muted-foreground mb-3">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Respond to your inquiries and expressions of interest</li>
              <li>Provide information about our investment opportunities</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations and regulatory requirements</li>
              <li>Prevent fraud and ensure security</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Information Sharing</h2>
            <p className="text-muted-foreground">
              We do not sell your personal information to third parties. We may share your information with:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-3">
              <li>Service providers who assist us in operating our website and business</li>
              <li>Legal and regulatory authorities when required by law</li>
              <li>Professional advisors (lawyers, accountants) in connection with investment opportunities</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Data Security</h2>
            <p className="text-muted-foreground">
              We implement reasonable security measures to protect your personal information from unauthorized 
              access, alteration, disclosure, or destruction. However, no method of transmission over the 
              internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Cookies and Tracking</h2>
            <p className="text-muted-foreground">
              We use cookies and similar tracking technologies to analyze website traffic and improve user 
              experience. You can control cookie preferences through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">7. Your Rights</h2>
            <p className="text-muted-foreground">
              Depending on your jurisdiction, you may have rights to access, correct, delete, or restrict 
              the use of your personal information. Contact us to exercise these rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">8. Data Retention</h2>
            <p className="text-muted-foreground">
              We retain your personal information for as long as necessary to fulfill the purposes outlined 
              in this Privacy Policy, unless a longer retention period is required by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">9. Changes to This Policy</h2>
            <p className="text-muted-foreground">
              We may update this Privacy Policy from time to time. We will notify you of significant changes 
              by posting the new policy on our website with an updated effective date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">10. Contact Us</h2>
            <p className="text-muted-foreground">
              If you have questions about this Privacy Policy or how we handle your information, please 
              contact us through the contact form on our website.
            </p>
          </section>

          <p className="text-sm text-muted-foreground mt-8 pt-8 border-t border-border">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
