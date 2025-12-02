import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sparkles, Calendar, Lightbulb, Heart, TrendingUp, Target, ArrowLeft } from 'lucide-react';
import OptimizedImage from '@/components/OptimizedImage';
import dailycoreHero from '@/assets/projects/dailycore-hero.jpg';

const DailyCore = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <OptimizedImage
          src={dailycoreHero}
          alt="Daily - Personal AI Health Companion"
          containerClassName="absolute inset-0 w-full h-full"
          className="w-full h-full object-cover"
          showSkeleton={false}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
        
        <div className="relative z-10 container mx-auto px-4">
          <Link to="/projects" className="animate-fade-in">
            <Button variant="ghost" size="sm" className="mb-6 hover:bg-background/80">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Button>
          </Link>
          <div className="max-w-3xl animate-fade-in" style={{ animationDelay: '0.1s', animationFillMode: 'backwards' }}>
            <div className="inline-block px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full mb-6">
              <span className="text-primary font-semibold">Health Intelligence</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">Daily</h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Personal AI health companion with daily guidance and planning
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Overview</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Daily acts as a daily AI partner that understands personal patterns. It delivers full-day summaries, AI-driven suggestions, daily planning assistance, and motivation support, making health optimization feel natural and achievable.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Core Functions</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-border/50 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Calendar className="w-10 h-10 text-primary mb-4" />
                  <CardTitle>Full-Day Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Comprehensive overview of your day including sleep, activity, stress, and recovery.</p>
                </CardContent>
              </Card>

              <Card className="border-border/50 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Sparkles className="w-10 h-10 text-primary mb-4" />
                  <CardTitle>AI Guidance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Personalized suggestions based on your unique patterns and today's circumstances.</p>
                </CardContent>
              </Card>

              <Card className="border-border/50 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Target className="w-10 h-10 text-primary mb-4" />
                  <CardTitle>Daily Planning</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Strategic recommendations for optimizing today's schedule and priorities.</p>
                </CardContent>
              </Card>

              <Card className="border-border/50 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Heart className="w-10 h-10 text-primary mb-4" />
                  <CardTitle>Motivation Engine</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Encouraging, personalized support that helps maintain healthy habits long-term.</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="bg-muted/20 border-l-4 border-primary p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">Important Legal Notice</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Daily is an informational companion tool. It is not a medical device and does not diagnose or treat any condition. All recommendations are for informational purposes only.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DailyCore;