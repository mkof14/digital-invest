import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Infrastructure = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Technology & Infrastructure</h1>
            <p className="text-xl text-muted-foreground">
              How Digital Invest Inc. thinks about data, integrity, and future-proof systems.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            
            {/* Systems Approach */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Systems Approach</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We design infrastructure as interconnected systems — health data, agricultural operations, manufacturing, and analytics — rather than isolated tools.
              </p>
            </div>

            {/* Data & Integrity Layer */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Data & Integrity Layer</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Digital Invest is exploring cryptographic integrity mechanisms to allow certain key documents or events to be verified as untampered. This may include:
              </p>
              <ul className="list-disc list-inside space-y-3 text-lg text-muted-foreground ml-4">
                <li>hashing important documents,</li>
                <li>timestamping critical events,</li>
                <li>optionally anchoring integrity proofs on a blockchain for long-term verifiability.</li>
              </ul>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                We do not issue tokens or run public crypto schemes. We focus on security, auditability, and trust.
              </p>
            </div>

            {/* Future Architecture */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Future Architecture</h2>
              <ul className="list-disc list-inside space-y-3 text-lg text-muted-foreground ml-4">
                <li>Unified data fabric across portfolio projects.</li>
                <li>Separation of sensitive and non-sensitive domains.</li>
                <li>Audit logs and integrity markers for critical operations.</li>
              </ul>
            </div>

            {/* No Tokenization */}
            <div className="bg-muted/30 rounded-lg p-8 space-y-4">
              <h2 className="text-3xl font-bold">No Tokenization or Public Crypto Offering</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Digital Invest does not operate public token sales, ICOs, or similar. Any cryptographic or blockchain-related technologies are used purely as infrastructure components to enhance security and integrity.
              </p>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Infrastructure;
