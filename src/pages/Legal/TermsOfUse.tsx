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
                It is not a marketplace, investment adviser, broker, or public crowdfunding platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">No financial transactions</h2>
              <p className="text-muted-foreground">
                The website does not allow online investing or accepting funds.
                Any investment opportunity is discussed offline and individually.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">No guarantees</h2>
              <p className="text-muted-foreground">
                All information is provided "as is".
                Digital Invest Inc. does not guarantee results, performance, or accuracy of data.
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
