import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Careers = () => {
  const roles = [
    "Senior AI / Data Systems Engineers",
    "Full-Stack Developers",
    "Bioinformatics / Health Data Specialists",
    "Drone / Robotics Engineers",
    "Manufacturing & Process Engineers",
    "Operations, Logistics, and Field Managers"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Careers at Digital Invest Inc.</h1>
            <p className="text-xl text-muted-foreground">
              Building long-term systems at the intersection of health, AI, agriculture, and infrastructure.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            
            {/* Why Join */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Why Join Digital Invest</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We are building platforms that the world will rely on for health, food, and operations. We look for people who think in systems, not in features.
              </p>
            </div>

            {/* How We Work */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">How We Work</h2>
              <ul className="list-disc list-inside space-y-3 text-lg text-muted-foreground ml-4">
                <li>Small, focused teams with high responsibility.</li>
                <li>Long-term, multi-year vision.</li>
                <li>Deep respect for engineering, science, and operations.</li>
                <li>Remote-friendly, with emphasis on clear communication.</li>
              </ul>
            </div>

            {/* Who We Look For */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Who We Look For</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {roles.map((role, index) => (
                  <div 
                    key={index}
                    className="bg-card border border-border rounded-lg p-6"
                  >
                    <p className="font-semibold">{role}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* How to Apply */}
            <div className="bg-muted/30 rounded-lg p-8 space-y-4">
              <h2 className="text-3xl font-bold">How to Apply</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                If you believe your experience aligns with our mission, send your CV, a short introduction, and links to relevant work to:
              </p>
              <a 
                href="mailto:careers@digitalinvest.com" 
                className="text-lg font-semibold hover:underline inline-block"
              >
                careers@digitalinvest.com
              </a>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Careers;
