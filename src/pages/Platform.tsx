import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import biomathPlatform from "@/assets/biomath-platform.jpg";
import { 
  Dna, 
  Brain, 
  Activity, 
  Shield, 
  Zap, 
  Users,
  ArrowRight,
  Microscope,
  Database,
  Cloud,
  Monitor,
  HeartPulse,
  Pill
} from "lucide-react";

const Platform = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-card/20 via-background to-card/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 px-4 py-2">
              BioMath Life Platform
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Mathematical Precision
              <span className="block text-primary mt-2">Meets Medical Science</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
              Since 2010, we've pioneered advanced human genome analysis. The BioMath Life Platform represents 
              our evolution from statistical methods to precise mathematical modeling. Through biomathematical 
              simulation and digital prediction systems, we can forecast disease progression and treatment 
              response with unprecedented accuracy—before any patient application.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mt-12">
              <div className="p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Years of Research</div>
              </div>
              <div className="p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50">
                <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
                <div className="text-sm text-muted-foreground">Genome Analyses</div>
              </div>
              <div className="p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50">
                <div className="text-3xl font-bold text-primary mb-2">95%</div>
                <div className="text-sm text-muted-foreground">Prediction Accuracy</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-16">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-foreground mb-6">Core Capabilities</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-4 bg-card/30 rounded-lg border border-border/50">
                  <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                    <Brain className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">AI-Driven Intelligence</h3>
                    <p className="text-muted-foreground">Our proprietary machine learning algorithms analyze vast datasets of biological information, 
                    identifying patterns invisible to traditional analysis. The system processes genomic sequences, protein interactions, 
                    and cellular responses to predict disease trajectories with remarkable precision.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 p-4 bg-card/30 rounded-lg border border-border/50">
                  <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                    <Activity className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Mathematical Modeling</h3>
                    <p className="text-muted-foreground">We've developed sophisticated biomathematical simulations that replicate human 
                    physiological systems at the molecular level. These digital twins allow us to test thousands of treatment scenarios, 
                    optimizing therapeutic approaches before any real-world application.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 p-4 bg-card/30 rounded-lg border border-border/50">
                  <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                    <Dna className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Genomic Integration</h3>
                    <p className="text-muted-foreground">By combining comprehensive genetic analysis with longitudinal clinical data, 
                    our platform delivers truly personalized treatment recommendations. Each patient's unique genetic makeup guides 
                    therapeutic decisions, maximizing efficacy while minimizing adverse effects.</p>
                  </div>
                </div>
              </div>
              
              <Button size="lg" className="px-8 py-6">
                Explore Capabilities <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/5 rounded-2xl blur-2xl"></div>
              <img 
                src={biomathPlatform} 
                alt="BioMath Life Platform Visualization" 
                className="relative w-full rounded-xl shadow-elevated border border-border/50"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Platform Components */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Platform Architecture
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Six integrated modules working in harmony to deliver comprehensive precision medicine solutions. 
              Each component is designed for scalability, security, and seamless data flow across the entire ecosystem.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Database className="h-12 w-12 text-primary mb-4" />,
                title: "Data Processing Engine",
                description: "Enterprise-grade computing infrastructure handles millions of genomic sequences and clinical records simultaneously. Our distributed processing system achieves sub-second query times on petabyte-scale datasets, enabling real-time clinical decision support."
              },
              {
                icon: <Cloud className="h-12 w-12 text-primary mb-4" />,
                title: "Cloud Infrastructure",
                description: "Built on multi-region, HIPAA-compliant cloud architecture with 99.99% uptime guarantee. Automated scaling handles traffic spikes while maintaining consistent performance. All data is encrypted at rest and in transit with AES-256 encryption."
              },
              {
                icon: <Monitor className="h-12 w-12 text-primary mb-4" />,
                title: "Clinical Dashboard",
                description: "Physician-designed interface displays complex genomic data in intuitive visualizations. Integrated decision support system highlights critical findings and suggests evidence-based treatment protocols. Mobile-responsive design enables secure access from any device."
              },
              {
                icon: <Microscope className="h-12 w-12 text-primary mb-4" />,
                title: "Research Module",
                description: "Powerful analytics suite for biomarker discovery and therapeutic target validation. Machine learning models identify novel genetic associations and predict drug response. Includes collaboration tools for multi-institutional research projects."
              },
              {
                icon: <HeartPulse className="h-12 w-12 text-primary mb-4" />,
                title: "Monitoring System",
                description: "Real-time patient health tracking with AI-powered predictive analytics. Early warning system detects subtle changes indicating disease progression or treatment complications. Configurable alert thresholds ensure timely clinical intervention."
              },
              {
                icon: <Pill className="h-12 w-12 text-primary mb-4" />,
                title: "Drug Interaction Analysis",
                description: "Comprehensive pharmacogenomics engine analyzes genetic variants affecting drug metabolism. Cross-references patient genome with drug interaction databases to identify risks. Generates personalized dosing recommendations based on genetic profile."
              }
            ].map((component, index) => (
              <Card key={index} className="hover:-translate-y-1 transition-all duration-300 border border-border/50 bg-card hover:shadow-elevated group">
                <CardHeader className="text-center pb-4">
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {component.icon}
                  </div>
                  <CardTitle className="text-xl font-bold">{component.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {component.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Platform;