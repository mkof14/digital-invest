import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Compliance = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Regulatory & Compliance Center</h1>
            <p className="text-xl text-muted-foreground">
              How Digital Invest Inc. approaches regulation, risk, and responsible operations.
            </p>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            
            {/* Compliance Philosophy */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Our Compliance Philosophy</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Digital Invest Inc. operates as a private, multi-sector portfolio. We do not run public offerings or crowdfunding campaigns. All potential participation is handled individually, offline, and in compliance with applicable laws and regulations.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe that serious long-term projects must be built on clear rules, transparency, and respect for regulatory frameworks in finance, health, agriculture, food systems, and data protection.
              </p>
            </div>

            {/* Not a Public Offering */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Not a Public Offering</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                This website, digitalinvest.com, is for informational purposes only. Nothing on this site constitutes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground ml-4">
                <li>a public securities offering,</li>
                <li>a solicitation to buy or sell any security,</li>
                <li>financial, legal, or tax advice.</li>
              </ul>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                All potential participation in Digital Invest projects is:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground ml-4">
                <li>private,</li>
                <li>non-binding at the initial stages,</li>
                <li>subject to due diligence and separate legal agreements offline.</li>
              </ul>
            </div>

            {/* KYC, AML & Eligibility */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">KYC, AML & Eligibility</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Where applicable, and depending on jurisdiction and structure, Digital Invest Inc. may require:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground ml-4">
                <li>Know Your Customer (KYC) verification,</li>
                <li>Anti-Money Laundering (AML) checks,</li>
                <li>confirmation of investor eligibility (for example, accredited investor status in certain cases).</li>
              </ul>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                These processes, when required, are handled securely and privately.
              </p>
            </div>

            {/* Data Protection */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Data Protection & Privacy</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We treat personal and business information with strict confidentiality. Personal data is processed according to internal policies, data protection standards, and technical safeguards described in the Security & Infrastructure section.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-muted/30 rounded-lg p-8 text-center space-y-4">
              <h3 className="text-2xl font-semibold">Contact for Compliance Questions</h3>
              <p className="text-lg text-muted-foreground">
                For regulatory or compliance-related questions, please contact:
              </p>
              <a 
                href="mailto:compliance@digitalinvest.com" 
                className="text-lg font-semibold hover:underline inline-block"
              >
                compliance@digitalinvest.com
              </a>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Compliance;
