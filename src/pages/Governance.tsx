import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Governance = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-purple-animated">Governance</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              How Digital Invest Inc. structures decision-making, oversight, and responsibility.
            </p>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            
            {/* Governance Approach */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Governance Approach</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-3">
                Digital Invest Inc. follows a governance framework oriented around clarity, accountability, and long-term responsibility. We operate as a focused portfolio company with clear decision lines and technical, operational, and strategic oversight.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                <strong>Governance Purpose:</strong> Governance structures are designed to support disciplined operations, risk oversight, and strategic coordination. However, governance does not eliminate project risks, guarantee outcomes, or ensure success of any specific initiative.
              </p>
            </div>

            {/* Core Governance Elements */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Core Governance Elements</h2>
              <ul className="list-disc list-inside space-y-3 text-lg text-muted-foreground ml-4">
                <li>Defined ownership and management structure.</li>
                <li>Clear separation of strategic decisions and operational execution.</li>
                <li>Periodic project reviews and portfolio-level assessment.</li>
                <li>Risk oversight for regulatory, operational, and technology domains.</li>
              </ul>
            </div>

            {/* Advisory & Expert Input */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Advisory & Expert Input</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Digital Invest engages experienced specialists in health, technology, agriculture, manufacturing, and finance to review assumptions, roadmaps, and execution plans.
              </p>
            </div>

            {/* Transparency for Stakeholders */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Transparency for Stakeholders</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Where appropriate, we provide structured updates, project briefs, and clear status reports to aligned stakeholders and partners.
              </p>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Governance;
