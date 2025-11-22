import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const RiskFactors = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Risk Factors</h1>
            <p className="text-xl text-muted-foreground">
              Understanding the risks associated with early-stage, multi-sector projects.
            </p>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            
            {/* General Risk Statement */}
            <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-8">
              <h2 className="text-3xl font-bold mb-4">General Risk Statement</h2>
              <p className="text-lg leading-relaxed">
                All early-stage projects carry risk. Digital Invest Inc. does not guarantee any outcomes, performance, or returns. Participants must be prepared for the possibility of partial or total loss of capital.
              </p>
            </div>

            {/* Market & Sector Risks */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Market & Sector Risks</h2>
              <ul className="list-disc list-inside space-y-3 text-lg text-muted-foreground ml-4">
                <li>Market conditions can change rapidly in HealthTech, AgroTech, FoodTech, and AI.</li>
                <li>Demand patterns, regulation, and competition can affect timelines and results.</li>
                <li>Macroeconomic events may impact funding, operations, or scaling.</li>
              </ul>
            </div>

            {/* Regulatory Risks */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Regulatory Risks</h2>
              <ul className="list-disc list-inside space-y-3 text-lg text-muted-foreground ml-4">
                <li>Regulations in healthcare, data usage, agriculture, and food production can evolve.</li>
                <li>Compliance requirements may increase over time, potentially affecting operations.</li>
                <li>Cross-border activities may introduce additional complexity.</li>
              </ul>
            </div>

            {/* Operational & Execution Risks */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Operational & Execution Risks</h2>
              <ul className="list-disc list-inside space-y-3 text-lg text-muted-foreground ml-4">
                <li>Complex multi-sector execution requires strong coordination.</li>
                <li>Delays, cost overruns, or technical challenges may occur.</li>
                <li>Manufacturing, logistics, and field operations can be affected by external factors.</li>
              </ul>
            </div>

            {/* Technology & Data Risks */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Technology & Data Risks</h2>
              <ul className="list-disc list-inside space-y-3 text-lg text-muted-foreground ml-4">
                <li>AI and data-driven systems depend on data quality and model validity.</li>
                <li>Cybersecurity is an ongoing area of risk despite strong protective measures.</li>
                <li>Infrastructure updates and migrations may introduce temporary instability.</li>
              </ul>
            </div>

            {/* No Guarantees */}
            <div className="bg-muted/30 rounded-lg p-8">
              <h2 className="text-3xl font-bold mb-4">No Guarantees</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Nothing on this website, nor any documents or communications from Digital Invest Inc., should be interpreted as a guarantee of financial performance, valuation, or return.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                <strong className="text-foreground">No assurance of performance or outcomes is provided.</strong> All projects entail significant risks, including operational, market, regulatory, technological, and financial risks. Only individuals who fully understand and accept such risks should request further information. Participation, if any, may result in partial or total loss of capital.
              </p>
            </div>

            {/* Forward-Looking Statements */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Forward-Looking Statements</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Any statements regarding future plans, projections, timelines, or anticipated outcomes are forward-looking and involve substantial risks and uncertainties. Actual results may differ materially from any projected or anticipated scenarios. No reliance should be placed on forward-looking statements.
              </p>
            </div>

            {/* Suitability & Eligibility */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Suitability & Eligibility</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Participation in Digital Invest projects is not suitable for all individuals. Potential participants must meet eligibility requirements, which may include accredited investor status, financial suitability, and risk tolerance assessments conducted offline through proper legal channels.
              </p>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default RiskFactors;
