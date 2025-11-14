import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Droplets, Wheat, BarChart3, FileText, Package, Zap, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";
import terraaeroLogo from "@/assets/terraaero-logo.png";

const TerraAero = () => {
  const fundingProgress = 45;
  const targetAmount = 15000000;
  const currentAmount = 6750000;

  const agriculturalServices = [
    {
      icon: Droplets,
      title: "Irrigation & Watering",
      description: "Precision irrigation services using advanced drone technology for optimal water distribution across your fields.",
    },
    {
      icon: Wheat,
      title: "Fertilization",
      description: "Professional fertilization and crop treatment services with all types of agricultural inputs for maximum yield.",
    },
    {
      icon: BarChart3,
      title: "Field Analysis",
      description: "Comprehensive field analysis using drone imaging and advanced analytics to optimize farming operations.",
    },
    {
      icon: FileText,
      title: "Professional Reports",
      description: "Detailed reports and recommendations tailored to your farming needs with actionable insights.",
    },
  ];

  const deliveryServices = [
    {
      icon: Package,
      title: "Restaurant Delivery",
      description: "Hot, fresh food delivered directly from restaurants to customers in minutes, not hours.",
      features: ["Under 30-minute delivery", "Temperature-controlled", "Real-time tracking"],
    },
    {
      icon: Package,
      title: "Retail Delivery",
      description: "Quick delivery of packages and goods from local stores and businesses.",
      features: ["Up to 5kg payload", "Secure confirmation", "Same-day delivery"],
    },
    {
      icon: Zap,
      title: "Express Service",
      description: "Premium express delivery for urgent packages and time-sensitive deliveries.",
      features: ["Priority queue", "10-minute guarantee", "24/7 availability"],
    },
  ];

  const stats = [
    { value: "120+", label: "Farms Served" },
    { value: "1.2K+", label: "Acres Treated" },
    { value: "2.5K+", label: "Deliveries Completed" },
    { value: "96%", label: "Client Satisfaction" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12 mt-20">
        {/* Hero Section */}
        <div className="mb-12">
          <div className="flex justify-center mb-6">
            <img src={terraaeroLogo} alt="TerraAero Logo" className="w-48 h-48 md:w-64 md:h-64" />
          </div>
          <Badge className="mb-4">Agricultural Innovation</Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
            TerraAero
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mb-8">
            Advanced drone solutions for agriculture and delivery. Transform your operations with cutting-edge drone technology - from precision farming to rapid delivery services.
          </p>
        </div>

        {/* Investment Overview */}
        <Card className="mb-12 border-primary/20 shadow-tech">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-3xl mb-2">Investment Opportunity</CardTitle>
                <CardDescription>Invest in the future of drone technology</CardDescription>
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
                  18
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

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat) => (
            <Card key={stat.label} className="text-center border-primary/20 hover:shadow-glow transition-all">
              <CardContent className="pt-6">
                <p className="text-4xl font-bold text-primary mb-2">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Agricultural Services */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8">Agricultural Drone Services</h2>
          <p className="text-muted-foreground mb-6">
            Complete agricultural solutions powered by cutting-edge drone technology and expert analysis. Transform your farming operations with precision and efficiency.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {agriculturalServices.map((service) => {
              const Icon = service.icon;
              return (
                <Card key={service.title} className="border-primary/20 hover:shadow-tech transition-all">
                  <CardHeader>
                    <Icon className="w-12 h-12 text-primary mb-4" />
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Delivery Services */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8">Drone Delivery Services</h2>
          <p className="text-muted-foreground mb-6">
            Fast, reliable, and eco-friendly delivery solutions for restaurants and retailers. Experience the future of delivery with our advanced drone technology.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {deliveryServices.map((service) => {
              const Icon = service.icon;
              return (
                <Card key={service.title} className="border-primary/20 hover:shadow-glow transition-all">
                  <CardHeader>
                    <Icon className="w-12 h-12 text-primary mb-4" />
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <Card className="bg-gradient-tech text-primary-foreground border-0">
          <CardContent className="py-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Experience the Future?</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Get started with our professional drone services today and transform your agricultural and delivery operations.
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

export default TerraAero;
