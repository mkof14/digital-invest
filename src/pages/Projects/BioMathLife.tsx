import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle2, TrendingUp, Users, Target, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const BioMathLife = () => {
  const fundingProgress = 68; // Example progress
  const targetAmount = 25000000;
  const currentAmount = 17000000;

  const services = [
    {
      number: "1",
      title: "DNA Sequencing & Analysis",
      description: "Advanced analysis of human DNA, creating individual genetic profiles for each patient through cutting-edge sequencing technology.",
    },
    {
      number: "2",
      title: "Biomathematical Modeling",
      description: "Creation of individual biomathematical models of the human body based on genetic profiles and comprehensive health data.",
    },
    {
      number: "3",
      title: "AI-Powered Diagnosis",
      description: "Quick diagnosis based on genetic predispositions, monitoring history, and previous medical prescriptions using advanced AI.",
    },
    {
      number: "4",
      title: "Disease Modeling",
      description: "Modeling disease development, ordering additional examinations, and recommending optimal treatment methodology.",
    },
    {
      number: "5",
      title: "Personalized Medication",
      description: "Selection and/or production of medications with maximum effectiveness based on the patient's biomathematical model.",
    },
  ];

  const keyResources = [
    { title: "Sequencing Laboratory", description: "Cutting-edge robotic biomolecular laboratory ensuring maximum efficiency" },
    { title: "BioMath Cloud", description: "Cloud platform hosting patient data, medical knowledge bases, and AI processing" },
    { title: "Artificial Intelligence", description: "Specialized medical AI providing advisory input for diagnosis and treatment" },
    { title: "Monitoring Equipment", description: "24/7 vital signs monitoring system tracking patient health in real-time" },
    { title: "Pharmaceutical Factory", description: "Fully automated equipment for personalized medication production" },
    { title: "Information Hub", description: "Secure communication platform for all stakeholders" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12 mt-20">
        {/* Hero Section */}
        <div className="mb-12">
          <Badge className="mb-4">Healthcare Innovation</Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
            BioMath Life Platform
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mb-8">
            Towards precision medicine through biomathematical modeling of the human body using breakthrough technologies in genetics, biomathematics, Artificial Intelligence, and pharmacology.
          </p>
        </div>

        {/* Investment Overview */}
        <Card className="mb-12 border-primary/20 shadow-tech">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-3xl mb-2">Investment Opportunity</CardTitle>
                <CardDescription>Join the future of precision medicine</CardDescription>
              </div>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                <TrendingUp className="w-4 h-4 mr-2" />
                Active
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Target Amount</p>
                <p className="text-2xl font-bold text-primary">
                  ${(targetAmount / 1000000).toFixed(1)}M
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Current Funding</p>
                <p className="text-2xl font-bold">
                  ${(currentAmount / 1000000).toFixed(1)}M
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Investors</p>
                <p className="text-2xl font-bold flex items-center gap-2">
                  <Users className="w-6 h-6" />
                  24
                </p>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Progress</span>
                <span className="font-semibold">{fundingProgress}%</span>
              </div>
              <Progress value={fundingProgress} className="h-3" />
            </div>

            <div className="flex gap-4">
              <Link to="/start-investing" className="flex-1">
                <Button size="lg" className="w-full">
                  Invest Now
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="flex-1">
                Download Prospectus
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Key Goals */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8">Our Goals</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-primary/20 hover:shadow-glow transition-all">
              <CardHeader>
                <Target className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Precision Diagnosis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  "Medical Council of Physicians 24/7" powered by specialized AI, assisting physicians in accurate decision-making.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:shadow-glow transition-all">
              <CardHeader>
                <Calendar className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Quick Access</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Reducing healthcare system burden and patient waiting times through efficient diagnosis and treatment decision-making.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:shadow-glow transition-all">
              <CardHeader>
                <TrendingUp className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Improving Life</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Enhancing quality of life and active longevity through vital signs monitoring and personalized pharmacology.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Platform Services */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8">Platform Services</h2>
          <div className="space-y-6">
            {services.map((service) => (
              <Card key={service.number} className="border-primary/20 hover:shadow-tech transition-all">
                <CardContent className="flex gap-6 p-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gradient-tech flex items-center justify-center text-primary-foreground font-bold text-xl">
                      #{service.number}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Key Resources */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8">Key Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyResources.map((resource) => (
              <Card key={resource.title} className="border-primary/20 hover:shadow-glow transition-all">
                <CardHeader>
                  <CardTitle className="text-lg">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{resource.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <Card className="bg-gradient-tech text-primary-foreground border-0">
          <CardContent className="py-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Invest in the Future of Medicine?</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Join us in revolutionizing healthcare through precision medicine and advanced biomathematical modeling.
            </p>
            <div className="flex gap-4 justify-center">
              <Link to="/start-investing">
                <Button size="lg" variant="secondary">
                  Start Investing
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                Learn More
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default BioMathLife;
