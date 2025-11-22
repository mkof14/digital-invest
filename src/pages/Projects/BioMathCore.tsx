import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Heart, Brain, Activity, Shield, Lock, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import biomathCoreLogo from "@/assets/biomath-core-logo.png";
import DownloadInvestorBriefButton from "@/components/DownloadInvestorBriefButton";
import OptimizedImage from "@/components/OptimizedImage";
import InvestorPageDisclaimer from "@/components/InvestorPageDisclaimer";

const BioMathCore = () => {
  const healthCategories = [
    "Critical Health",
    "Everyday Wellness", 
    "Longevity & Anti-Aging",
    "Mental Wellness",
    "Fitness & Performance",
    "Women's Health",
    "Men's Health",
    "Beauty & Skincare",
    "Nutrition & Diet",
    "Sleep & Recovery",
    "Environmental Health",
    "Family Health",
    "Preventive Medicine",
    "Biohacking & Performance",
    "Senior Care",
    "Eye-Health Suite",
    "Digital Therapeutics",
    "Sexual Longevity",
    "Men's Sexual Health",
    "Women's Sexual Health"
  ];

  const features = [
    {
      icon: Brain,
      title: "Dual AI Analysis",
      description: "Get comprehensive health insights powered by multiple AI models with balanced recommendations and expert validation."
    },
    {
      icon: Activity,
      title: "200+ AI Services",
      description: "Access AI-powered health services across 20 comprehensive health categories tailored to your needs."
    },
    {
      icon: Lock,
      title: "Secure Data Vault",
      description: "Military-grade AES-256 encryption with zero-trust architecture and SOC 2 certification."
    }
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Join",
      description: "Create your account and set your wellness focus"
    },
    {
      step: "2",
      title: "Activate Services",
      description: "Choose from 200+ AI services across 20 health categories"
    },
    {
      step: "3",
      title: "Receive Daily Insights",
      description: "Get personalized guidance that helps you understand what your body needs"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12 mt-20">
      {/* Hero Section */}
      <div className="mb-16 text-center animate-fade-in">
        <div className="flex justify-center mb-6">
          <OptimizedImage 
            src={biomathCoreLogo} 
            alt="BioMath Core - Intelligent health operating system logo" 
            className="w-32 h-32 md:w-40 md:h-40"
            showSkeleton={false}
          />
        </div>
        <Badge className="mb-4">Digital Health Platform</Badge>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
          BioMath Core
        </h1>
          <p className="text-2xl md:text-3xl font-light text-muted-foreground mb-4">
            Where Data Meets Daily Life
          </p>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            From sleep to cognition, from movement to mood — BioMath Core brings clarity to your health journey. 
            Track, understand, and optimize your wellbeing through intelligent, real-time insights tailored to you.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/start-investing">
              <Button size="lg" className="px-8">
                Start Free Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="px-8">
              Explore Learning Center
            </Button>
            <DownloadInvestorBriefButton projectSlug="biomathcore" size="lg" />
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Transform Your Health Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.title} className="border-primary/20 hover:shadow-glow transition-all hover-scale">
                  <CardHeader>
                    <Icon className="w-12 h-12 text-primary mb-4" />
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Health Categories */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Health Categories</h2>
            <p className="text-lg text-muted-foreground">
              Explore 200+ AI-powered services across 20 comprehensive health categories
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {healthCategories.map((category) => (
              <Card key={category} className="border-primary/20 hover:border-primary/40 transition-all hover-scale cursor-pointer">
                <CardContent className="p-4 text-center">
                  <p className="text-sm font-medium">{category}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground">Simple, supportive, effective</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorks.map((item) => (
              <Card key={item.step} className="border-primary/20 hover:shadow-tech transition-all">
                <CardContent className="pt-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-tech text-primary-foreground text-2xl font-bold flex items-center justify-center mx-auto mb-6">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Core Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Core Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-primary/20 hover:shadow-glow transition-all">
              <CardHeader>
                <CardTitle className="text-xl">Understanding, Not Overwhelm</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We convert signals into meaning, then into gentle, supportive daily guidance. Clarity without pressure.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:shadow-glow transition-all">
              <CardHeader>
                <CardTitle className="text-xl">Reassurance, Not Urgency</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Built on a foundation of emotional safety. You are learning, never failing. Guidance is invitational, not prescriptive.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:shadow-glow transition-all">
              <CardHeader>
                <CardTitle className="text-xl">Interpretation, Not Diagnosis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We help you understand how your body is responding day-to-day. Educational, supportive, wellness-first.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Security Section */}
        <Card className="mb-16 border-primary/20">
          <CardHeader>
            <div className="flex items-center gap-4 mb-4">
              <Shield className="w-12 h-12 text-primary" />
              <div>
                <CardTitle className="text-2xl mb-2">Model Archive - Your Secure Vault</CardTitle>
                <p className="text-muted-foreground">
                  All your health data in one encrypted vault. Store lab results, genetic data, wearable metrics, 
                  and medical records with military-grade security.
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-3xl font-bold text-primary mb-2">AES-256</p>
                <p className="text-sm text-muted-foreground">Encryption</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary mb-2">Zero-Trust</p>
                <p className="text-sm text-muted-foreground">Architecture</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary mb-2">SOC 2</p>
                <p className="text-sm text-muted-foreground">Certified</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <Card className="bg-gradient-tech text-primary-foreground border-0">
          <CardContent className="py-12 text-center">
            <Heart className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Health Journey?</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands who are taking control of their wellness with AI-powered insights and personalized guidance.
            </p>
            <div className="flex gap-4 justify-center">
              <Link to="/start-investing">
                <Button size="lg" variant="secondary">
                  Start Free Today
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                Learn More
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Legal Disclaimer */}
        <div className="mt-16">
          <InvestorPageDisclaimer />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BioMathCore;
