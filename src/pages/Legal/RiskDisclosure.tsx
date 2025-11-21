import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const RiskDisclosure = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8 text-foreground">Risk Disclosure</h1>
          
          <div className="prose prose-lg max-w-none text-foreground space-y-6">
            <p className="text-muted-foreground">
              All investment opportunities discussed by Digital Invest Inc. involve risk.
            </p>

            <section>
              <h2 className="text-2xl font-bold mb-4">Key points</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>You may lose some or all of the capital you invest.</li>
                <li>Future performance cannot be guaranteed.</li>
                <li>Early-stage projects may face delays, changes in strategy, or operational challenges.</li>
                <li>Market, regulatory, and economic conditions can affect outcomes.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">No advice</h2>
              <p className="text-muted-foreground">
                Nothing on this website constitutes financial, legal, or tax advice.
                Before participating in any investment opportunity, you should conduct your own due diligence and 
                consult with qualified professionals in your jurisdiction.
              </p>
            </section>

            <section>
              <p className="text-muted-foreground">
                By using this website or expressing interest in any project, you acknowledge that you understand 
                and accept these general risk factors.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RiskDisclosure;
