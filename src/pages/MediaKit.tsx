import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Download } from "lucide-react";
import OptimizedImage from "@/components/OptimizedImage";

const MediaKit = () => {
  const projects = [
    {
      name: "BioMath Core",
      description: "Intelligent health operating system"
    },
    {
      name: "BioMath Life",
      description: "Long-term health and longevity navigation"
    },
    {
      name: "TerraAero",
      description: "Advanced AgroDrone operations & manufacturing"
    },
    {
      name: "DishCore",
      description: "Intelligent food manufacturing engine"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Media Kit</h1>
            <p className="text-xl text-muted-foreground">
              Logos, brand assets, and key materials for media use.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto space-y-16">
            
            {/* Brand Assets */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Brand Assets</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-card border border-border rounded-lg p-8 text-center space-y-4">
                  <div className="bg-white rounded-lg p-8 mb-4">
                    <OptimizedImage 
                      src="/lovable-uploads/d1011e6f-955a-48d9-adef-662af751c3b9.png"
                      alt="Digital Invest Inc. logo for light backgrounds"
                      className="h-16 mx-auto"
                      showSkeleton={false}
                    />
                  </div>
                  <h3 className="font-semibold">Primary Logo (Light Background)</h3>
                  <p className="text-sm text-muted-foreground">For use on white or light backgrounds</p>
                </div>

                <div className="bg-card border border-border rounded-lg p-8 text-center space-y-4">
                  <div className="bg-slate-900 rounded-lg p-8 mb-4">
                    <OptimizedImage 
                      src="/lovable-uploads/d1011e6f-955a-48d9-adef-662af751c3b9.png"
                      alt="Digital Invest Inc. logo for dark backgrounds"
                      className="h-16 mx-auto brightness-0 invert"
                      showSkeleton={false}
                    />
                  </div>
                  <h3 className="font-semibold">Reversed Logo (Dark Background)</h3>
                  <p className="text-sm text-muted-foreground">For use on dark backgrounds</p>
                </div>
              </div>

              <div className="bg-muted/30 rounded-lg p-6">
                <h4 className="font-semibold mb-3">Brand Colors</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="space-y-2">
                    <div className="h-16 rounded bg-[#0B1120]"></div>
                    <p className="text-sm font-mono">#0B1120</p>
                    <p className="text-xs text-muted-foreground">Primary Dark</p>
                  </div>
                  <div className="space-y-2">
                    <div className="h-16 rounded bg-[#38BDF8]"></div>
                    <p className="text-sm font-mono">#38BDF8</p>
                    <p className="text-xs text-muted-foreground">Accent Blue</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Founder Profile */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Founder's Profile</h2>
              
              <div className="bg-card border border-border rounded-lg p-8">
                <h3 className="text-xl font-semibold mb-2">Michael Kofman</h3>
                <p className="text-muted-foreground mb-4">Founder & CEO</p>
                <p className="text-muted-foreground leading-relaxed">
                  Technology entrepreneur with decades of experience across health, infrastructure, and real-economy systems. Founder of Digital Invest Inc., leading multi-sector portfolio development across HealthTech, AgroTech, FoodTech, and AI-driven infrastructure.
                </p>
              </div>
            </div>

            {/* Key Projects Overview */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Key Projects Overview</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                  <div key={index} className="bg-card border border-border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-2">{project.name}</h3>
                    <p className="text-muted-foreground">{project.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Downloadable Materials */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Downloadable Materials</h2>
              
              <div className="space-y-4">
                <Link 
                  to="/investor-documents"
                  className="flex items-center justify-between bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Project Investor Briefs</h3>
                    <p className="text-sm text-muted-foreground">
                      Comprehensive PDF briefs for each portfolio project
                    </p>
                  </div>
                  <Download className="h-5 w-5 text-muted-foreground" />
                </Link>
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MediaKit;
