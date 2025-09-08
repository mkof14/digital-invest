import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
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
            BioMath Life Platform
            <span className="block text-primary">Services & Solutions</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Each service serves as a link in our technological chain, functioning as both integrated components 
            and self-contained entities. Our 5-step process transforms genetic data into personalized treatment recommendations.
          </p>
        </div>
      </section>

      {/* Core Services - BioMath Platform */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              BioMath Life Platform Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive 5-service technological chain for precision medicine
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 mb-20">
            {[
              {
                step: "#1",
                icon: <Dna className="h-16 w-16 text-primary mb-6" />,
                title: "Sequencing and Advanced Analysis of Human DNA",
                description: "Creating individual genetic profiles for each patient through comprehensive DNA sequencing and analysis.",
                details: "DNA sequencing identifies the order of nucleotide bases in a strand of DNA. We leverage this sequence for in-depth analysis of genetic traits, primarily to assess susceptibility to various diseases, metabolization of different substances, and reaction to established medications. Using extensive datasets from our research and the collective work of other researchers, we construct a comprehensive genetic profile for each patient.",
                features: [
                  "High-performance robotic biomolecular laboratory",
                  "Comprehensive genetic trait analysis", 
                  "Disease susceptibility assessment",
                  "Medication reaction prediction",
                  "Individual genetic profile creation"
                ]
              },
              {
                step: "#2",
                icon: <Brain className="h-16 w-16 text-primary mb-6" />,
                title: "Individual Biomathematical Model Creation",
                description: "Developing personalized biomathematical models of the human body based on genetic profiles and additional factors.",
                details: "We view the human body as an intricately complex and finely-tuned system where every organ and subsystem is linked through a vast network of connections. We develop a biomathematical model of the human body and refine it with insights from the patient's genetic profile, yielding a tailored biomathematical model specific to each patient.",
                features: [
                  "Complex system modeling approach",
                  "Genetic profile integration",
                  "Organ interconnection mapping",
                  "Personalized model refinement",
                  "Patient-specific adaptations"
                ]
              },
              {
                step: "#3", 
                icon: <Monitor className="h-16 w-16 text-primary mb-6" />,
                title: "Quick Diagnosis Based on Genetic Predispositions",
                description: "Rapid diagnosis using genetic predispositions, monitoring history, and previous medical prescriptions.",
                details: "We monitor patient health through biochemical data analysis and daily medical telemetry when necessary. This allows fine-tuning of the patient's biomathematical model. When significant deviations in health indicators are identified, AI conducts comprehensive analysis to pinpoint underlying causes and provide initial diagnosis - like a consultation with a vast panel of doctors.",
                features: [
                  "Continuous health monitoring",
                  "Biochemical data analysis",
                  "Daily medical telemetry",
                  "AI-powered diagnosis assistance",
                  "Medical expert panel simulation"
                ]
              },
              {
                step: "#4",
                icon: <Activity className="h-16 w-16 text-primary mb-6" />,
                title: "Disease Development Modeling",
                description: "Modeling disease progression, ordering additional examinations, and recommending treatment methodology.",
                details: "When disease is identified, we employ the patient's biomathematical model to simulate the ailment and its impact on individual organs and the overall body. This enables precise identification of root causes and simulation of disease progression under specific treatment protocols, gauging response to various medications while factoring in potential side effects.",
                features: [
                  "Disease simulation modeling",
                  "Root cause identification",
                  "Treatment protocol simulation", 
                  "Medication response prediction",
                  "Side effect assessment"
                ]
              },
              {
                step: "#5",
                icon: <Pill className="h-16 w-16 text-primary mb-6" />,
                title: "Medication Selection and Production",
                description: "Selection and/or production of medications with maximum effectiveness based on patient's biomathematical model.",
                details: "Precision Medicine based on individual genetic data enables us to achieve maximum medication effectiveness while avoiding adverse impacts. Our solutions allow us to pinpoint precisely the right medications or formulate distinct combinations tailored to specific patients, drawing from their genetic traits and body characteristics.",
                features: [
                  "Personalized medication selection",
                  "Custom medication formulation",
                  "Genetic-based optimization",
                  "Adverse effect minimization",
                  "Patient-specific combinations"
                ]
              }
            ].map((service, index) => (
              <Card key={index} className="p-8 border-0 shadow-elegant hover-scale">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                  <div className="text-center lg:text-left">
                    <div className="text-3xl font-bold text-primary mb-2">{service.step}</div>
                    {service.icon}
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                  </div>
                  
                  <div className="lg:col-span-2 space-y-6">
                    <p className="text-muted-foreground leading-relaxed">{service.details}</p>
                    
                    <div>
                      <h4 className="font-semibold mb-4">Key Features:</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button variant="outline">
                      Learn More About This Service
                    </Button>
                  </div>
                </div>
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
              Platform Implementation Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our structured approach ensures seamless integration of BioMath Life Platform services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Genetic Profiling",
                description: "Comprehensive DNA analysis and individual genetic profile creation using our robotic laboratory."
              },
              {
                step: "02", 
                title: "Model Development",
                description: "Creation of personalized biomathematical model tailored to patient's genetic and physiological data."
              },
              {
                step: "03",
                title: "Continuous Monitoring",
                description: "Real-time health monitoring with AI-powered analysis for early detection and diagnosis."
              },
              {
                step: "04",
                title: "Treatment Optimization",
                description: "Personalized medication selection and treatment protocol development based on predictive modeling."
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
      
      <Footer />
    </div>
  );
};

export default Services;