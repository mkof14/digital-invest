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
              <h2 className="text-2xl font-bold mb-4">Key risk factors</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-3">
                <li><strong>Capital Loss:</strong> You may lose some or all of the capital you commit. No returns are guaranteed.</li>
                <li><strong>No Performance Guarantees:</strong> Future performance cannot be guaranteed or predicted with certainty.</li>
                <li><strong>Project Risks:</strong> Early-stage projects may face delays, strategic changes, operational challenges, or may be discontinued entirely.</li>
                <li><strong>Market & Economic Risks:</strong> Market, regulatory, and economic conditions can significantly affect outcomes and valuations.</li>
                <li><strong>Liquidity Risk:</strong> Participation may be illiquid with limited or no ability to exit.</li>
                <li><strong>Regulatory Risk:</strong> Changes in laws or regulations could materially impact project viability or structure.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Forward-looking statements</h2>
              <p className="text-muted-foreground mb-3">
                Any statements on this website regarding future plans, projections, anticipated results, timelines, or market opportunities are forward-looking and involve substantial risks and uncertainties.
              </p>
              <p className="text-muted-foreground">
                <strong>No Reliance:</strong> Actual results may differ materially from any forward-looking statements. These statements are not promises or guarantees. No one should rely on forward-looking statements as predictions of future events.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Suitability & eligibility</h2>
              <p className="text-muted-foreground">
                Participation in Digital Invest projects is not suitable for all individuals. Only those who fully understand and are willing to accept substantial risk, including potential total loss of capital, should request further information. Eligibility requirements may include accredited investor status, jurisdiction restrictions, and financial suitability assessments.
              </p>
            </section>

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
              <h2 className="text-2xl font-bold mb-4">No advice provided</h2>
              <p className="text-muted-foreground mb-3">
                <strong>Not Financial, Legal, or Tax Advice:</strong> Nothing on this website constitutes financial, legal, or tax advice. Digital Invest Inc. does not provide investment advice, recommendations, or counsel through this website.
              </p>
              <p className="text-muted-foreground">
                Before participating in any potential opportunity, you must conduct your own independent due diligence and consult with qualified professionals (financial advisors, attorneys, tax professionals) in your jurisdiction. Do not rely on website content as a substitute for professional advice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Acknowledgment of risk</h2>
              <p className="text-muted-foreground">
                By using this website or expressing interest in any project, you acknowledge that you have read and understood these risk factors, that you accept substantial risk including potential total loss of capital, and that you will seek independent professional advice before making any financial decisions.
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
