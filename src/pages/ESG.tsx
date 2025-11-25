import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const ESG = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-orange-animated">ESG & Sustainability</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Environment, Social impact, and Governance in the Digital Invest portfolio.
            </p>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            
            {/* ESG Perspective */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Our ESG Perspective</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We operate at the intersection of health, agriculture, food systems, AI, and infrastructure. This naturally ties Digital Invest projects to environmental, social, and governance topics.
              </p>
            </div>

            {/* Environmental */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Environmental</h2>
              <ul className="list-disc list-inside space-y-3 text-lg text-muted-foreground ml-4">
                <li>TerraAero focuses on more efficient, precise use of agricultural inputs, supporting reduced waste and better resource utilization.</li>
                <li>Precision agriculture can contribute to more sustainable land use and reduced environmental impact.</li>
              </ul>
            </div>

            {/* Social */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Social</h2>
              <ul className="list-disc list-inside space-y-3 text-lg text-muted-foreground ml-4">
                <li>BioMath Core and BioMath Life are designed to help individuals better understand their health and long-term risk profile.</li>
                <li>We prioritize clarity, dignity, and empowerment in how people interact with their own data.</li>
              </ul>
            </div>

            {/* Governance */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Governance</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our governance approach emphasizes long-term responsibility, security, and ethical operations. We aim to align technology with real-world human and environmental needs.
              </p>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ESG;
