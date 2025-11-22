import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Apple,
  Calendar,
  BarChart3,
  Target,
  Utensils,
  TrendingUp,
  CheckCircle2,
  Scale,
  Heart
} from "lucide-react";
import dishcoreLogo from "@/assets/dishcore-logo.png";
import DownloadInvestorBriefButton from "@/components/DownloadInvestorBriefButton";

const DishCore = () => {
  const features = [
    {
      icon: <Utensils className="h-10 w-10 text-primary" />,
      title: "Personalized Daily Menus",
      description: "Custom meal plans and recipes tailored to your goals, preferences, and dietary needs."
    },
    {
      icon: <Target className="h-10 w-10 text-primary" />,
      title: "Goal-Aligned Nutrition",
      description: "Every recommendation is based on your specific health objectives and body data."
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-primary" />,
      title: "Visual Progress Tracking",
      description: "Clear, intuitive tracking of your body changes and nutritional progress."
    },
    {
      icon: <Calendar className="h-10 w-10 text-primary" />,
      title: "Weekly Reports",
      description: "Clean, comprehensive reports showing your weekly achievements and insights."
    },
    {
      icon: <Apple className="h-10 w-10 text-primary" />,
      title: "Smart Food Analysis",
      description: "Advanced analysis of what you eat and how it affects your body."
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-primary" />,
      title: "Practical Recommendations",
      description: "Actionable advice that fits naturally into your daily routine."
    }
  ];

  const benefits = [
    "Reduces complexity in healthy eating",
    "Removes guesswork from nutrition planning",
    "Works seamlessly at home, gym, or on the go",
    "Turns healthy eating into a natural routine",
    "Easy, modern, and genuinely helpful tools",
    "Keeps nutrition aligned with your goals"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4 bg-secondary/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center space-y-8">
            <img 
              src={dishcoreLogo} 
              alt="DishCore Logo" 
              className="w-48 h-48 md:w-64 md:h-64 object-contain"
            />
            
            <div className="space-y-4">
              <Badge className="mb-2 bg-success/10 text-success border-success/20">
                Personal Nutrition Platform
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground">
                DishCore
              </h1>
              <p className="text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Eat Smarter, Feel Better, Stay in Shape
              </p>
              <div className="flex gap-4 justify-center flex-wrap mt-6">
                <Link to="/start-investing">
                  <Button size="lg">
                    Learn More
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <DownloadInvestorBriefButton projectSlug="dishcore" size="lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="border-primary/20">
            <CardContent className="pt-8 space-y-6">
              <p className="text-lg text-foreground leading-relaxed">
                DishCore is a personal nutrition and body-tracking platform designed to help people eat smarter, 
                feel better, and stay in shape with clarity and consistency.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                It combines your goals, preferences, daily habits, and body data into one simple system that 
                actively supports your progress. DishCore analyzes what you eat, how your body changes, and 
                what you aim for — then provides personalized daily menus and recipes, practical recommendations, 
                visual progress tracking, smart insights, and clean weekly reports.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                DishCore works as your everyday guide — reducing complexity, removing guesswork, and turning 
                healthy eating into a natural, enjoyable routine. Whether at home, at the gym, or on the go, 
                DishCore keeps your nutrition aligned with your goals, with tools that are easy, modern, and 
                genuinely helpful.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 bg-secondary/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Platform Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need for successful nutrition management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover-scale border-primary/20">
                <CardHeader>
                  <div className="mb-4">{feature.icon}</div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Why Choose DishCore?
            </h2>
            <p className="text-xl text-muted-foreground">
              A smarter approach to nutrition and wellness
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle2 className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                <p className="text-lg text-foreground">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-4 bg-secondary/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Perfect For Every Lifestyle
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-primary/20">
              <CardContent className="pt-8 text-center space-y-4">
                <Heart className="h-12 w-12 text-primary mx-auto" />
                <h3 className="text-xl font-bold">At Home</h3>
                <p className="text-muted-foreground">
                  Plan weekly meals, track ingredients, and maintain consistent healthy eating habits.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardContent className="pt-8 text-center space-y-4">
                <Target className="h-12 w-12 text-primary mx-auto" />
                <h3 className="text-xl font-bold">At the Gym</h3>
                <p className="text-muted-foreground">
                  Optimize nutrition for performance, recovery, and body composition goals.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardContent className="pt-8 text-center space-y-4">
                <Scale className="h-12 w-12 text-primary mx-auto" />
                <h3 className="text-xl font-bold">On the Go</h3>
                <p className="text-muted-foreground">
                  Make smart food choices anywhere with mobile-friendly tools and quick insights.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-elegant bg-card">
            <CardContent className="py-12 text-center space-y-6">
              <h2 className="text-3xl font-bold">Ready to Transform Your Nutrition?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Join DishCore and start your journey to smarter eating and better health today.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Link to="/start-investing">
                  <Button size="lg">
                    Investment Opportunities
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/services">
                  <Button size="lg" variant="outline">
                    View All Services
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

export default DishCore;
