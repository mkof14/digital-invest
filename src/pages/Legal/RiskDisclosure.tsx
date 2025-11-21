const RiskDisclosure = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Risk Disclosure</h1>
        
        <div className="prose prose-lg max-w-none text-foreground space-y-6">
          <section>
            <div className="bg-warning/10 border border-warning/30 p-6 rounded-lg mb-8">
              <p className="text-foreground font-semibold">
                IMPORTANT: All investments involve risk, including the possible loss of the entire amount invested. 
                Please read this disclosure carefully before considering any investment opportunity.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">1. General Investment Risks</h2>
            <p className="text-muted-foreground mb-3">
              Investing in private companies and early-stage ventures involves substantial risk and may not 
              be suitable for all investors. You should carefully consider the following risks:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Complete loss of investment capital</li>
              <li>Illiquidity - inability to sell or transfer investments</li>
              <li>No guarantee of returns or dividends</li>
              <li>Long investment horizons with uncertain outcomes</li>
              <li>Dilution of ownership through subsequent financing rounds</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Early-Stage Company Risks</h2>
            <p className="text-muted-foreground mb-3">
              Early-stage and development-stage companies face unique challenges:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Limited operating history and unproven business models</li>
              <li>Dependence on key personnel</li>
              <li>Technology and product development risks</li>
              <li>Market acceptance and competition uncertainties</li>
              <li>Regulatory and compliance challenges</li>
              <li>Potential need for additional capital that may not be available</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Market and Economic Risks</h2>
            <p className="text-muted-foreground">
              Broader market and economic factors can significantly impact investment performance, including 
              economic downturns, industry disruptions, geopolitical events, regulatory changes, and shifts 
              in investor sentiment.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Lack of Liquidity</h2>
            <p className="text-muted-foreground">
              Investments in private companies are typically illiquid. There is no public market for these 
              securities, and it may be impossible to sell your investment for an extended period, if ever. 
              You should be prepared to hold your investment indefinitely.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. No Guarantee of Returns</h2>
            <p className="text-muted-foreground">
              Past performance is not indicative of future results. Projected returns and valuations are 
              estimates based on assumptions that may not materialize. Actual results may differ materially 
              from projections.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Limited Information</h2>
            <p className="text-muted-foreground">
              Private companies are not subject to the same disclosure requirements as public companies. 
              You may have limited access to financial and operational information, making it difficult to 
              evaluate investment performance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">7. Regulatory Considerations</h2>
            <p className="text-muted-foreground">
              Investment opportunities may be subject to securities laws and regulations. Investments may 
              only be available to accredited investors or qualified purchasers. Regulations vary by 
              jurisdiction and may change over time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">8. No Professional Advice</h2>
            <p className="text-muted-foreground">
              Digital Invest Inc. does not provide investment, legal, tax, or financial advice. Before making 
              any investment decision, you should consult with qualified professional advisors who can assess 
              your individual circumstances, financial situation, and risk tolerance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">9. Suitability</h2>
            <p className="text-muted-foreground">
              These investments are suitable only for investors who:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-3">
              <li>Can afford to lose their entire investment</li>
              <li>Do not need liquidity for an extended period</li>
              <li>Have adequate financial resources and net worth</li>
              <li>Have sufficient knowledge and experience to evaluate the risks</li>
              <li>Meet applicable accredited investor or qualified purchaser requirements</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">10. Acknowledgment</h2>
            <p className="text-muted-foreground">
              By expressing interest in any investment opportunity, you acknowledge that you have read and 
              understood this Risk Disclosure, and that you are making an independent investment decision 
              based on your own evaluation and professional advice.
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

export default RiskDisclosure;
