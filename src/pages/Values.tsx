import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Values = () => {
  const values = [
    {
      title: "Clarity",
      description: "Technology must make reality clearer, not more confusing."
    },
    {
      title: "Integrity",
      description: "We say what we mean and build what we say."
    },
    {
      title: "Execution",
      description: "Real progress is measured in systems deployed and operations running, not just concepts."
    },
    {
      title: "Longevity",
      description: "We design platforms and infrastructures intended to endure and evolve."
    },
    {
      title: "Human-Centric Intelligence",
      description: "AI should explain, support, and empower — not overwhelm or replace human responsibility."
    },
    {
      title: "Precision",
      description: "Detail, rigor, and discipline matter in every line of code, every process, every deployment."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Corporate Values</h1>
            <p className="text-xl text-muted-foreground">
              The principles that guide Digital Invest Inc.
            </p>
          </div>
        </section>

        {/* Values Grid */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Values;
