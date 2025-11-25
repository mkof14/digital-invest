import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Security = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-blue-animated">Security & Infrastructure</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              How Digital Invest Inc. designs systems to protect data, documents, and operations.
            </p>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            
            {/* Security by Design */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Security by Design</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Digital Invest Inc. designs infrastructure with security as a core requirement, not an afterthought. Our systems and processes are structured to protect confidential information, investor data, and operational intelligence.
              </p>
            </div>

            {/* Core Security Principles */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Core Security Principles</h2>
              <ul className="list-disc list-inside space-y-3 text-lg text-muted-foreground ml-4">
                <li>Encryption in transit and at rest for sensitive data where applicable.</li>
                <li>Role-based access control for internal tools and document access.</li>
                <li>Segmentation of environments (development, staging, production).</li>
                <li>Secure document distribution to investors using controlled channels.</li>
                <li>Regular monitoring and logging of system events.</li>
              </ul>
            </div>

            {/* Data & Document Protection */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Data & Document Protection</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Investor documents, technical briefs, and operational materials are stored in controlled environments. Access is limited to authorized team members and, where relevant, to investors or partners under agreed terms.
              </p>
            </div>

            {/* Audit & Integrity */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Audit & Integrity</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Digital Invest is exploring cryptographic integrity layers to ensure that key documents and events can be verified as untampered. This concept is described further in our{" "}
                <Link to="/infrastructure" className="underline hover:text-primary">
                  Technology & Infrastructure overview
                </Link>
                .
              </p>
            </div>

            {/* Responsible Use of AI */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Responsible Use of AI</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                AI-driven components are designed for explanation, assistance, and decision support. We focus on transparency, control, and human oversight rather than opaque black-box systems.
              </p>
            </div>

            {/* Security Limitations */}
            <div className="bg-muted/30 rounded-lg p-8">
              <h2 className="text-3xl font-bold mb-4">Security Limitations & Residual Risk</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                <strong>Important Notice:</strong> While Digital Invest Inc. takes security seriously and implements reasonable measures to protect data and documents, no system can be guaranteed to be completely secure.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Cyber threats, operational risks, human error, and unforeseen vulnerabilities remain possible despite protective measures. Users, partners, and investors should take appropriate precautions and understand that residual security risks cannot be eliminated entirely.
              </p>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Security;
