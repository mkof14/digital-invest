import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Dna, 
  Brain, 
  Activity, 
  Monitor,
  Pill,
  ArrowRight,
  Droplets,
  Wheat,
  BarChart3,
  Package,
  Heart,
  Lock,
  Building2,
  TrendingUp
} from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const biomathServices = [
    {
      step: "#1",
      icon: <Dna className="h-12 w-12 text-primary mb-4" />,
      title: "Sequencing and Advanced Analysis of Human DNA",
      description: "Creating individual genetic profiles for each patient through comprehensive DNA sequencing and analysis.",
    },
    {
      step: "#2",
      icon: <Brain className="h-12 w-12 text-primary mb-4" />,
      title: "Individual Biomathematical Model Creation",
      description: "Developing personalized biomathematical models of the human body based on genetic profiles.",
    },
    {
      step: "#3", 
      icon: <Monitor className="h-12 w-12 text-primary mb-4" />,
      title: "Quick Diagnosis Based on Genetic Predispositions",
      description: "Rapid diagnosis using genetic predispositions, monitoring history, and previous medical prescriptions.",
    },
    {
      step: "#4",
      icon: <Activity className="h-12 w-12 text-primary mb-4" />,
      title: "Disease Development Modeling",
      description: "Modeling disease progression and recommending treatment methodology.",
    },
    {
      step: "#5",
      icon: <Pill className="h-12 w-12 text-primary mb-4" />,
      title: "Medication Selection and Production",
      description: "Selection and/or production of medications with maximum effectiveness.",
    }
  ];

  const terraAeroServices = [
    {
      icon: <Droplets className="h-12 w-12 text-primary mb-4" />,
      title: "Precision Irrigation",
      description: "Advanced drone-based irrigation services for optimal water distribution."
    },
    {
      icon: <Wheat className="h-12 w-12 text-primary mb-4" />,
      title: "Agricultural Fertilization",
      description: "Professional fertilization and crop treatment with all types of agricultural inputs."
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-primary mb-4" />,
      title: "Field Analysis",
      description: "Comprehensive field analysis using drone imaging and advanced analytics."
    },
    {
      icon: <Package className="h-12 w-12 text-primary mb-4" />,
      title: "Drone Delivery",
      description: "Fast delivery services for restaurants, retail, and express packages."
    }
  ];

  const biomathCoreServices = [
    {
      icon: <Brain className="h-12 w-12 text-primary mb-4" />,
      title: "Dual AI Health Analysis",
      description: "Comprehensive health insights powered by multiple AI models with expert validation."
    },
    {
      icon: <Activity className="h-12 w-12 text-primary mb-4" />,
      title: "200+ AI Health Services",
      description: "Access AI-powered health services across 20 comprehensive health categories."
    },
    {
      icon: <Lock className="h-12 w-12 text-primary mb-4" />,
      title: "Secure Data Vault",
      description: "Military-grade encryption with zero-trust architecture and SOC 2 certification."
    },
    {
      icon: <Heart className="h-12 w-12 text-primary mb-4" />,
      title: "Daily Wellness Insights",
      description: "Personalized guidance tracking sleep, cognition, movement, and mood."
    }
  ];

  const digitalInvestServices = [
    {
      icon: <Building2 className="h-12 w-12 text-primary mb-4" />,
      title: "Strategic Technology Consulting",
      description: "Expert guidance in biomathematics, AI, and precision medicine technologies."
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-primary mb-4" />,
      title: "Investment Management",
      description: "Comprehensive investment portfolio management across multiple innovative projects."
    }
  ];

  const dishCoreServices = [
    {
      icon: <Activity className="h-12 w-12 text-primary mb-4" />,
      title: "Personalized Meal Planning",
      description: "Custom daily menus and recipes tailored to your goals, preferences, and body data."
    },
    {
      icon: <Brain className="h-12 w-12 text-primary mb-4" />,
      title: "Smart Food Analysis",
      description: "Analyze what you eat and how it affects your body with intelligent insights."
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-primary mb-4" />,
      title: "Progress Tracking",
      description: "Visual tracking of body changes and nutritional progress with weekly reports."
    },
    {
      icon: <Heart className="h-12 w-12 text-primary mb-4" />,
      title: "Goal-Aligned Nutrition",
      description: "Every recommendation based on your specific health objectives and lifestyle."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-4 bg-secondary/10">
        <div className="max-w-6xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4 px-4 py-2">
            Our Services
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Complete Portfolio of
            <span className="block text-primary">Innovation Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            From precision medicine to agricultural technology, we offer cutting-edge solutions 
            across multiple domains of technological innovation.
          </p>
        </div>
      </section>

      {/* BioMath Life Platform Services */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-success/10 text-success border-success/20">
              Precision Medicine
            </Badge>
            <h2 className="text-4xl font-bold text-foreground mb-4">
              BioMath Life Platform Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
              Our comprehensive 5-service technological chain for precision medicine
            </p>
            <Link to="/projects/biomathlife">
              <Button variant="outline">
                View Full Platform
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {biomathServices.map((service, index) => (
              <Card key={index} className="hover-scale border-primary/20">
                <CardContent className="pt-6 text-center">
                  <div className="text-2xl font-bold text-primary mb-2">{service.step}</div>
                  {service.icon}
                  <h3 className="text-lg font-bold mb-3">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* TerraAero Services */}
      <section className="py-20 px-4 bg-secondary/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Agricultural Technology
            </Badge>
            <h2 className="text-4xl font-bold text-foreground mb-4">
              TerraAero Drone Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
              Advanced drone solutions for agriculture and delivery operations
            </p>
            <Link to="/projects/terraaero">
              <Button variant="outline">
                View TerraAero
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {terraAeroServices.map((service, index) => (
              <Card key={index} className="hover-scale border-primary/20">
                <CardContent className="pt-6 text-center">
                  {service.icon}
                  <h3 className="text-lg font-bold mb-3">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* BioMath Core Services */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
              Digital Health
            </Badge>
            <h2 className="text-4xl font-bold text-foreground mb-4">
              BioMath Core Platform
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
              AI-powered wellness platform with 200+ health services
            </p>
            <Link to="/projects/biomathcore">
              <Button variant="outline">
                View BioMath Core
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {biomathCoreServices.map((service, index) => (
              <Card key={index} className="hover-scale border-primary/20">
                <CardContent className="pt-6 text-center">
                  {service.icon}
                  <h3 className="text-lg font-bold mb-3">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Invest Services */}
      <section className="py-20 px-4 bg-secondary/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">
              Investment Platform
            </Badge>
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Digital Invest Inc. Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
              Strategic consulting and investment management services
            </p>
            <Link to="/projects/digital-invest">
              <Button variant="outline">
                View Platform
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {digitalInvestServices.map((service, index) => (
              <Card key={index} className="hover-scale border-primary/20">
                <CardContent className="pt-8 text-center">
                  {service.icon}
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* DishCore Services */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-success/10 text-success border-success/20">
              Nutrition Platform
            </Badge>
            <h2 className="text-4xl font-bold text-foreground mb-4">
              DishCore Platform
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
              Personal nutrition and body-tracking platform for smarter eating
            </p>
            <Link to="/projects/dishcore">
              <Button variant="outline">
                View DishCore
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {dishCoreServices.map((service, index) => (
              <Card key={index} className="hover-scale border-primary/20">
                <CardContent className="pt-6 text-center">
                  {service.icon}
                  <h3 className="text-lg font-bold mb-3">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-elegant bg-card">
            <CardContent className="py-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Explore our services or contact us to learn how we can help transform your operations.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Link to="/start-investing">
                  <Button size="lg">
                    Start Investing
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/partnerships">
                  <Button size="lg" variant="outline">
                    Partnership Opportunities
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Services;
