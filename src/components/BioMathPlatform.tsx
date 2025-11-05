import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Dna, 
  Brain, 
  Activity, 
  Shield, 
  Clock, 
  HeartPulse,
  Microscope,
  Cloud,
  Database,
  Pill,
  Monitor,
  Building2,
  ArrowRight
} from 'lucide-react';

const BioMathPlatform = () => {
  const services = [
    {
      number: "#1",
      title: "DNA Sequencing and Analysis",
      description: "Creating individual genetic profiles for each patient",
      fullText: "DNA sequencing is the process of determining the order of nucleotide bases in a DNA strand. We use this sequence for in-depth analysis of patient genetic traits, primarily to assess susceptibility to various diseases, metabolism of different substances, and reaction to established medications.",
      icon: Dna
    },
    {
      number: "#2", 
      title: "Biomathematical Body Model",
      description: "Creating individual biomathematical models of the human body",
      fullText: "We view the human body as an incredibly complex and finely-tuned system. To dissect and model the processes acting within this system, we develop a biomathematical model of the human body, adapted for each patient.",
      icon: Brain
    },
    {
      number: "#3",
      title: "Quick Diagnosis", 
      description: "Diagnosis based on genetic predispositions and medical history",
      fullText: "AI conducts comprehensive analysis of extensive data arrays to determine the root cause of vital signs deviations and provide initial diagnosis. It's like consulting with a vast panel of physicians.",
      icon: Activity
    },
    {
      number: "#4",
      title: "Disease Development Modeling",
      description: "Predicting disease progression and treatment recommendations",
      fullText: "The patient's biomathematical model is used to simulate the disease and its impact on individual organs and the entire body. This allows precise identification of the root cause of the problem.",
      icon: HeartPulse
    },
    {
      number: "#5",
      title: "Personalized Medications",
      description: "Selection and/or production of medications with maximum effectiveness", 
      fullText: "Precision medicine based on individual patient genetic data enables maximum medication effectiveness while avoiding adverse impacts on the body.",
      icon: Pill
    }
  ];

  const keyResources = [
    {
      title: "Sequencing Laboratory",
      description: "Modern robotic biomolecular laboratory for DNA sequencing",
      icon: Microscope,
      image: "sequencing_laboratory.jpg"
    },
    {
      title: "BioMath Cloud", 
      description: "Cloud platform for storing patient data and AI processing",
      icon: Cloud,
      image: "bmc.jpg"
    },
    {
      title: "Artificial Intelligence",
      description: "Specialized AI version for working with medical information",
      icon: Brain,
      image: "ai.jpg"
    },
    {
      title: "Monitoring Equipment",
      description: "24/7 continuous vital signs monitoring system",
      icon: Monitor,
      image: "monitoring.jpg"
    },
    {
      title: "Pharmaceutical Factory",
      description: "Fully automated pharmaceutical equipment under AI control",
      icon: Pill,
      image: "pharma.jpg"
    },
    {
      title: "Information Hub",
      description: "Communication center with all stakeholders",
      icon: Database,
      image: "hub.jpg"
    }
  ];

  const goals = [
    {
      title: "Precision Diagnosis",
      description: "AI-powered '24/7 Medical Council' providing significant support to physicians in decision-making",
      icon: Shield
    },
    {
      title: "Quick Access", 
      description: "Reducing healthcare system burden and patient waiting times",
      icon: Clock
    },
    {
      title: "Life Improvement",
      description: "Enhancing quality of life and active longevity through monitoring and personalized pharmacology",
      icon: HeartPulse
    }
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16">
        <Badge className="mb-6 bg-success/10 text-success border-success/20">
          Revolutionary Platform
        </Badge>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          <span className="text-primary">BioMath Life Platform</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto">
          Towards precision medicine through biomathematical modeling of the human body
        </p>
        
        <div className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
          Using breakthrough technologies in genetics, biomathematics, 
          artificial intelligence, and pharmacology
        </div>
        
        <Button variant="default" size="lg" className="text-lg px-8 py-4">
          Join the Project
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </section>

      {/* Goals Section */}
      <section className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Goals</h2>
          <p className="text-muted-foreground text-lg max-w-4xl mx-auto leading-relaxed">
            If you share our goals and want to make the world a better place, welcome aboard. 
            Invest your knowledge, experience, and finances in this mission.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto mb-12 p-6 bg-card/30 rounded-lg">
          <p className="text-muted-foreground leading-relaxed">
            Building on achievements in advanced human genome analysis, Digital Invest Inc. 
            continues to evolve towards transforming the traditional medicine landscape. The essence of the new project, 
            BioMath Life Platform, lies in shifting the emphasis from statistical methods of disease diagnosis and treatment 
            to mathematical ones. Using digital modeling, this approach opens wide opportunities, 
            especially in predicting disease progression and potential body response to treatment 
            before testing it on the patient.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {goals.map((goal, index) => (
            <Card key={index} className="p-8 text-center hover:card-hover transition-all duration-300 group">
              <goal.icon className="w-16 h-16 mx-auto mb-6 text-success group-hover:text-success/80 transition-colors" />
              <h3 className="text-xl font-semibold mb-4">{goal.title}</h3>
              <p className="text-muted-foreground">{goal.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-card/20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-muted-foreground text-lg max-w-4xl mx-auto">
            The platform architecture is structured for various interactions with clients and partners. 
            Modular production structure enables both comprehensive and specific requests.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <Card className="p-8 mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Information Hub</h3>
                <p className="text-muted-foreground mb-4">
                  Client and partner communication with the platform occurs through the external information hub. 
                  Hub tasks include preprocessing and sorting incoming data.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Data preprocessing</li>
                  <li>• Data adaptation to client needs</li>
                  <li>• Information security assurance</li>
                </ul>
              </div>
              <div className="flex justify-center">
                <div className="w-48 h-48 rounded-full bg-gradient-tech flex items-center justify-center">
                  <Database className="w-24 h-24 text-primary-foreground" />
                </div>
              </div>
            </div>
          </Card>
          
          <Card className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="flex justify-center lg:order-2">
                <div className="w-48 h-48 rounded-full bg-gradient-neural flex items-center justify-center">
                  <Cloud className="w-24 h-24 text-accent-foreground" />
                </div>
              </div>
              <div className="lg:order-1">
                <h3 className="text-2xl font-semibold mb-4">BioMath Cloud</h3>
                <p className="text-muted-foreground mb-4">
                  The platform core includes patient genetic analysis data, their personalized 
                  biomathematical model, medical history, and many other factors.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Patient genetic analysis</li>
                  <li>• Personalized biomathematical models</li>
                  <li>• Medical history and treatment outcomes</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Platform Services</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Each platform service serves as a link in the technological chain, while remaining 
            a self-sufficient entity both technically and financially
          </p>
        </div>
        
        <div className="space-y-8">
          {services.map((service, index) => (
            <Card key={index} className="p-8 hover:card-hover transition-all duration-300 group">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                <div className="lg:col-span-1 flex justify-center lg:justify-start">
                  <Badge variant="outline" className="text-lg px-4 py-2 bg-primary/10 text-primary border-primary/20">
                    {service.number}
                  </Badge>
                </div>
                
                <div className="lg:col-span-2 flex justify-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-bio flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                    <service.icon className="w-10 h-10 text-success-foreground" />
                  </div>
                </div>
                
                <div className="lg:col-span-9">
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.fullText}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Key Resources */}
      <section className="py-16 bg-card/20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Resources</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Our solutions operate on cutting-edge technological equipment, using 
            modern algorithms and maximum level of information security
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {keyResources.map((resource, index) => (
            <Card key={index} className="overflow-hidden hover:card-hover transition-all duration-300 group">
              <div className="aspect-video bg-gradient-tech flex items-center justify-center">
                <resource.icon className="w-16 h-16 text-primary-foreground group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-3">{resource.title}</h3>
                <p className="text-muted-foreground text-sm">{resource.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-center">
        <Card className="p-12 bg-card">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Invest in the Future of Medicine
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Join the revolution in personalized medicine and 
            biomathematical modeling of the human body
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="lg" className="text-lg px-8 py-4">
              Become an Investor
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4">
              Learn More
            </Button>
          </div>
        </Card>
      </section>
    </div>
  );
};

export default BioMathPlatform;