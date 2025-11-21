const TermsOfUse = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Terms of Use</h1>
        
        <div className="prose prose-lg max-w-none text-foreground space-y-6">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground">
              By accessing and using this website, you accept and agree to be bound by these Terms of Use. 
              If you do not agree to these terms, please do not use this website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Informational Purposes Only</h2>
            <p className="text-muted-foreground">
              All content on this website is provided for informational purposes only. Nothing on this website 
              constitutes investment, legal, tax, or financial advice. Digital Invest Inc. does not provide 
              such advice through this website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Not a Public Offer</h2>
            <p className="text-muted-foreground">
              Nothing on this website constitutes a public offering or solicitation to buy or sell securities. 
              Any investment opportunities described on this website are private placements that may only be 
              available to accredited investors or qualified purchasers, as defined by applicable securities laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. No Guarantee of Results</h2>
            <p className="text-muted-foreground">
              Past performance information provided on this website is not indicative of future results. 
              No representation or warranty is made that any investment will or is likely to achieve profits 
              or losses similar to those shown. All investments carry risk, including the possible loss of 
              principal.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. User Conduct</h2>
            <p className="text-muted-foreground">
              You agree to use this website only for lawful purposes and in a manner that does not infringe 
              the rights of others or restrict their use of the website. You may not use this website to 
              transmit harmful, offensive, or illegal content.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Intellectual Property</h2>
            <p className="text-muted-foreground">
              All content on this website, including text, graphics, logos, and images, is the property of 
              Digital Invest Inc. or its content suppliers and is protected by international copyright laws. 
              Unauthorized use of any content may violate copyright, trademark, and other laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">7. Limitation of Liability</h2>
            <p className="text-muted-foreground">
              Digital Invest Inc. shall not be liable for any damages arising from the use or inability to 
              use this website, including but not limited to direct, indirect, incidental, punitive, and 
              consequential damages.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">8. Changes to Terms</h2>
            <p className="text-muted-foreground">
              Digital Invest Inc. reserves the right to modify these Terms of Use at any time without prior 
              notice. Your continued use of the website following any changes indicates your acceptance of 
              the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">9. Contact Information</h2>
            <p className="text-muted-foreground">
              For questions about these Terms of Use, please contact us through the contact form on our website.
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

export default TermsOfUse;
