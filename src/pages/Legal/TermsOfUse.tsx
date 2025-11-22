import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const TermsOfUse = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8 text-foreground">Terms of Use</h1>
          
          <div className="prose prose-lg max-w-none text-foreground space-y-6">
            <p className="text-muted-foreground">
              Welcome to Digital Invest.
            </p>

            <p className="text-muted-foreground">
              By accessing or using this website, you agree to these Terms of Use.
            </p>

            <section>
              <h2 className="text-2xl font-bold mb-4">Purpose of the website</h2>
              <p className="text-muted-foreground">
                This website provides general information about projects developed by Digital Invest Inc.
                It is not a marketplace, investment adviser, broker, or public crowdfunding platform. This website is strictly informational and does not constitute a public offering, solicitation, or advertisement for investments.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">No contractual relationship</h2>
              <p className="text-muted-foreground mb-3">
                <strong>Critical Notice:</strong> The actual legal status of any relationship with Digital Invest Inc., and any rights or obligations, are defined solely in written agreements executed offline. Website text does not create any contractual relationship, guarantee, or binding commitment.
              </p>
              <p className="text-muted-foreground">
                All terms and conditions of any potential participation are governed exclusively by formal legal documents signed offline, not by content on this website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">No financial transactions</h2>
              <p className="text-muted-foreground">
                The website does not allow online investing, financial transactions, or accepting funds. Any potential participation opportunity is discussed privately, offline, and individually through proper legal channels.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">No guarantees</h2>
              <p className="text-muted-foreground mb-3">
                All information is provided "as is" without warranties of any kind, express or implied. Digital Invest Inc. does not guarantee results, performance, accuracy of data, outcomes, or future events.
              </p>
              <p className="text-muted-foreground">
                Any forward-looking statements regarding projects, timelines, or potential developments are subject to substantial risks and uncertainties. Actual results may differ materially from any projections or descriptions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">User responsibilities</h2>
              <p className="text-muted-foreground">
                You agree not to misuse the website, attempt unauthorized access, or provide false information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Intellectual property</h2>
              <p className="text-muted-foreground">
                All content, trademarks, and materials on this website belong to Digital Invest Inc. unless stated otherwise.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Changes</h2>
              <p className="text-muted-foreground">
                We may update these Terms of Use at any time. Continued use of the website means you accept the updated terms.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsOfUse;
