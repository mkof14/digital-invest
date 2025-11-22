import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Code2 } from "lucide-react";

const API = () => {
  const apiDomains = [
    "Health insights and risk interpretation (BioMath Core)",
    "Longevity trend metrics (BioMath Life)",
    "Agro operations status and analytics (TerraAero)",
    "Production and nutrition logic (DishCore)"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-muted/50 rounded-full p-4">
                <Code2 className="h-12 w-12 text-muted-foreground" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-6">Developer & API Overview</h1>
            <p className="text-xl text-muted-foreground">
              The future layer for interoperable health, agro, and infrastructure intelligence.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            
            {/* Vision */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Vision</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Over time, Digital Invest aims to expose carefully designed APIs that allow partners and enterprise clients to integrate with parts of our platforms.
              </p>
            </div>

            {/* Potential API Domains */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Potential API Domains</h2>
              <div className="grid gap-4">
                {apiDomains.map((domain, index) => (
                  <div 
                    key={index}
                    className="bg-card border border-border rounded-lg p-6"
                  >
                    <p className="text-muted-foreground">{domain}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Security & Access */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Security & Access</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                API access, when available, will be fully authenticated, audited, and rate-limited. No personal data will be shared without explicit authorization and appropriate legal framework.
              </p>
            </div>

            {/* Status */}
            <div className="bg-muted/30 rounded-lg p-8 space-y-4">
              <h2 className="text-3xl font-bold">Status</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At this stage, the API program is in planning and internal experimentation. This page serves as a forward-looking overview.
              </p>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default API;
