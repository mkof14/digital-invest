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
      <section className="relative py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 px-4 py-2">
              BioMath Life Platform
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Mathematical Precision
              <span className="block text-primary">Meets Medical Science</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              The BioMath Life Platform transforms healthcare through mathematical modeling of human biology, 
              delivering predictive diagnostics and personalized treatment strategies with unprecedented accuracy.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Brain className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">AI-Driven Intelligence</h3>
                    <p className="text-muted-foreground">Advanced machine learning algorithms process complex biological data to predict disease progression and treatment outcomes.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Activity className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Mathematical Modeling</h3>
                    <p className="text-muted-foreground">Sophisticated biomathematical simulations of human physiological systems enable precise treatment optimization.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Dna className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Genomic Integration</h3>
                    <p className="text-muted-foreground">Comprehensive genetic analysis combined with clinical data provides personalized treatment recommendations.</p>
                  </div>
                </div>
              </div>
              
              <Button size="lg" className="px-8 py-3">
                Explore Capabilities <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            
            <div className="relative">
              <img 
                src={biomathPlatform} 
                alt="BioMath Life Platform Visualization" 
                className="w-full rounded-xl shadow-elegant"
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
              Platform Components
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Integrated modules that work together to deliver comprehensive precision medicine solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Database className="h-12 w-12 text-primary mb-4" />,
                title: "Data Processing Engine",
                description: "High-performance computing infrastructure processes vast amounts of genomic and clinical data in real-time."
              },
              {
                icon: <Cloud className="h-12 w-12 text-primary mb-4" />,
                title: "Cloud Infrastructure",
                description: "Scalable cloud-based architecture ensures secure data storage and processing capabilities worldwide."
              },
              {
                icon: <Monitor className="h-12 w-12 text-primary mb-4" />,
                title: "Clinical Dashboard",
                description: "Intuitive interface provides healthcare professionals with actionable insights and treatment recommendations."
              },
              {
                icon: <Microscope className="h-12 w-12 text-primary mb-4" />,
                title: "Research Module",
                description: "Advanced analytics tools for biomarker discovery and therapeutic target identification."
              },
              {
                icon: <HeartPulse className="h-12 w-12 text-primary mb-4" />,
                title: "Monitoring System",
                description: "Continuous health monitoring with predictive alerts for early intervention opportunities."
              },
              {
                icon: <Pill className="h-12 w-12 text-primary mb-4" />,
                title: "Drug Interaction Analysis",
                description: "Comprehensive pharmacogenomics analysis for personalized medication recommendations."
              }
            ].map((component, index) => (
              <Card key={index} className="hover-scale border-0 shadow-elegant">
                <CardHeader className="text-center">
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {component.icon}
                  </div>
                  <CardTitle className="text-xl">{component.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center leading-relaxed">
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