import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Lock } from "lucide-react";

const InternalDocuments = () => {
  const categories = [
    "Technical Whitepapers",
    "Architecture & Infrastructure",
    "Manufacturing Specs",
    "Operations & Playbooks",
    "Governance & Internal Policies"
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
                <Lock className="h-12 w-12 text-muted-foreground" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-6">Internal Documents Center</h1>
            <p className="text-xl text-muted-foreground">
              Secure environment for internal and restricted portfolio materials.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Info Block */}
            <div className="bg-muted/30 border border-border rounded-lg p-8">
              <p className="text-lg text-muted-foreground leading-relaxed text-center">
                This section is reserved for internal use and restricted partners. It may include technical documentation, operating procedures, manufacturing docs, and advanced project materials.
              </p>
            </div>

            {/* Categories */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-center">Document Categories</h2>
              
              <div className="grid gap-4">
                {categories.map((category, index) => (
                  <div 
                    key={index}
                    className="bg-card border border-border rounded-lg p-6 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-4">
                      <Lock className="h-5 w-5 text-muted-foreground" />
                      <span className="font-semibold">{category}</span>
                    </div>
                    <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded">
                      Access Restricted
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Access Note */}
            <div className="text-center">
              <p className="text-muted-foreground">
                For access requests, please contact your designated Digital Invest representative.
              </p>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default InternalDocuments;
