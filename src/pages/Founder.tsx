import { useState } from 'react';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  Building2,
  Users,
  Cpu,
  TrendingUp,
  ArrowRight,
  Rocket
} from "lucide-react";
import InterestForm from "@/components/InterestForm";

const Founder = () => {
  const [showInterestForm, setShowInterestForm] = useState(false);

  const achievements = [
    "Built and scaled multiple technology and real-economy companies",
    "Experience with U.S. operations, infrastructure, and enterprise systems",
    "Led teams across technology, data platforms, and manufacturing",
    "Deep expertise in AI-driven health analytics and system design",
    "Multi-sector operational execution (healthtech, foodtech, agriculture, manufacturing)"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground">
            About the Founder
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            Experience, leadership, and the long-term vision behind Digital Invest.
          </p>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-16 px-4 bg-card/30">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            {/* Profile Image Placeholder */}
            <div className="flex-shrink-0">
              <div className="w-48 h-48 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-border/50">
                <div className="text-center">
                  <Building2 className="w-16 h-16 text-primary mx-auto mb-2" />
                  <p className="text-sm font-semibold text-foreground">Michael Kofman</p>
                  <p className="text-xs text-muted-foreground">Founder & CEO</p>
                </div>
              </div>
            </div>

            {/* Bio Text */}
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl font-bold text-foreground">Biography</h2>
              <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
                <p>
                  Michael Kofman is a technology entrepreneur with decades of experience building large-scale 
                  platforms in data, AI, health, manufacturing, and real-economy operations. He previously led 
                  and built companies in data storage, hosting, analytics, and enterprise-level infrastructures. 
                  Michael's background spans operational leadership, complex project execution, and strategic 
                  development across multiple industries.
                </p>
                <p>
                  Digital Invest represents the consolidation of these capabilities into a unified multi-sector 
                  portfolio, built with a long-term, structured approach to real-world impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Achievements Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Professional Background and Achievements
          </h2>
          
          <div className="space-y-4">
            {achievements.map((achievement, index) => (
              <Card key={index} className="border border-border/50 bg-card hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-6 pb-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-base text-foreground leading-relaxed">
                      {achievement}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Visual Achievement Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
              { icon: <Building2 className="w-8 h-8" />, label: "Multi-Company Builder" },
              { icon: <Users className="w-8 h-8" />, label: "Team Leadership" },
              { icon: <Cpu className="w-8 h-8" />, label: "AI & Data Systems" },
              { icon: <TrendingUp className="w-8 h-8" />, label: "Operational Excellence" }
            ].map((item, index) => (
              <Card key={index} className="border border-border/50 bg-card">
                <CardContent className="pt-6 pb-6 text-center space-y-3">
                  <div className="p-3 bg-primary/10 rounded-lg w-fit mx-auto">
                    <div className="text-primary">{item.icon}</div>
                  </div>
                  <p className="text-sm font-medium text-foreground">{item.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 px-4 bg-card/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
            Founder's Philosophy
          </h2>
          
          <Card className="border border-primary/30 bg-card">
            <CardContent className="pt-8 pb-8">
              <blockquote className="text-lg text-foreground leading-relaxed text-center italic">
                "My approach is based on real execution, practical systems, and long-term thinking. 
                Digital Invest is not about hype, trends, or shortcuts — it is about building real 
                platforms that create real value over time."
              </blockquote>
              <div className="mt-6 pt-6 border-t border-border/50 text-center">
                <p className="text-sm text-muted-foreground">— Michael Kofman, Founder & CEO</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Learn More About Our Projects
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            Explore the portfolio projects that embody this long-term, execution-focused philosophy.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Link to="/projects">
              <Button size="lg" className="px-10 py-6 text-base">
                View Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline" 
              className="px-10 py-6 text-base"
              onClick={() => setShowInterestForm(true)}
            >
              Submit Interest
              <Rocket className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <p className="text-sm text-muted-foreground pt-4">
            Non-binding expression of interest • Private conversations only
          </p>
        </div>
      </section>

      {/* Interest Form Modal */}
      <InterestForm
        projectId="founder-inquiry"
        projectTitle="General Inquiry"
        open={showInterestForm}
        onOpenChange={setShowInterestForm}
      />

      <Footer />
    </div>
  );
};

export default Founder;
