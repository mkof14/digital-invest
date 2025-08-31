import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
  Pill,
  Target,
  ChartBar
} from "lucide-react";

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="max-w-6xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4 px-4 py-2">
            Our Services
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Comprehensive Solutions for
            <span className="block text-primary">Precision Medicine</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            From genomic analysis to predictive modeling, we provide end-to-end solutions 
            that bridge the gap between genetic data and clinical outcomes.
          </p>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
            {[
              {
                icon: <Dna className="h-16 w-16 text-primary mb-6" />,
                title: "Genomic Analysis & Sequencing",
                description: "Advanced DNA sequencing and interpretation with clinical-grade accuracy. Our comprehensive genomic analysis identifies genetic variations, predispositions, and actionable insights for personalized treatment strategies.",
                features: [
                  "Whole genome sequencing",
                  "Variant analysis and interpretation", 
                  "Pharmacogenomics testing",
                  "Hereditary disease screening"
                ]
              },
              {
                icon: <Brain className="h-16 w-16 text-primary mb-6" />,
                title: "AI-Powered Predictive Intelligence",
                description: "Machine learning algorithms that analyze complex biological patterns to forecast disease progression and treatment outcomes before clinical symptoms appear.",
                features: [
                  "Disease progression modeling",
                  "Treatment outcome prediction",
                  "Risk stratification algorithms",
                  "Early intervention alerts"
                ]
              }
            ].map((service, index) => (
              <Card key={index} className="p-8 border-0 shadow-elegant hover-scale">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <ArrowRight className="w-4 h-4 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline">Learn More</Button>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Activity className="h-12 w-12 text-primary mb-4" />,
                title: "Mathematical Modeling",
                description: "Sophisticated biomathematical simulations of human physiological systems for precise treatment optimization and drug interaction analysis."
              },
              {
                icon: <Shield className="h-12 w-12 text-primary mb-4" />,
                title: "Biomarker Discovery",
                description: "Identification and validation of novel biological indicators for early detection, disease monitoring, and therapeutic target identification."
              },
              {
                icon: <Zap className="h-12 w-12 text-primary mb-4" />,
                title: "Precision Therapeutics",
                description: "Individualized treatment protocols tailored to genetic profiles, medical history, and predictive risk assessments."
              },
              {
                icon: <Users className="h-12 w-12 text-primary mb-4" />,
                title: "Clinical Integration",
                description: "Seamless integration with existing healthcare systems and workflows for practical implementation in clinical settings."
              },
              {
                icon: <Target className="h-12 w-12 text-primary mb-4" />,
                title: "Drug Development Support",
                description: "Accelerate pharmaceutical research with predictive modeling and patient stratification for clinical trials."
              },
              {
                icon: <ChartBar className="h-12 w-12 text-primary mb-4" />,
                title: "Population Health Analytics",
                description: "Large-scale genomic analysis for population health insights, epidemiological research, and public health initiatives."
              }
            ].map((service, index) => (
              <Card key={index} className="hover-scale border-0 shadow-elegant group">
                <CardHeader className="text-center">
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 px-4 bg-secondary/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Our Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A systematic approach to delivering precision medicine solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Data Collection",
                description: "Comprehensive gathering of genomic, clinical, and phenotypic data from multiple sources."
              },
              {
                step: "02", 
                title: "Analysis & Modeling",
                description: "Advanced computational analysis using AI and mathematical modeling techniques."
              },
              {
                step: "03",
                title: "Interpretation",
                description: "Clinical interpretation of results with actionable insights and recommendations."
              },
              {
                step: "04",
                title: "Implementation",
                description: "Integration into clinical workflows with ongoing monitoring and optimization."
              }
            ].map((process, index) => (
              <Card key={index} className="text-center p-6 border-0 shadow-sm">
                <div className="text-4xl font-bold text-primary mb-4">{process.step}</div>
                <h3 className="text-xl font-semibold mb-3">{process.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{process.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;