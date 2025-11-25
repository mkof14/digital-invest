import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Activity, TrendingUp, Moon, Zap, BarChart3, ArrowLeft } from 'lucide-react';
import OptimizedImage from '@/components/OptimizedImage';
import heartcoreHero from '@/assets/projects/heartcore-hero.jpg';

const HeartCore = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <OptimizedImage
          src={heartcoreHero}
          alt="HeartCore - Heart Rate Variability Platform"
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">HeartCore</h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Heart rate variability and recovery signal monitoring
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Overview</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              HeartCore focuses on patterns rather than diagnoses, tracking HRV, heart rate trends, and their correlations with stress and sleep. The platform provides early indicators of overload or imbalance through daily recommendations based on personalized patterns.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Core Functions</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-border/50 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Heart className="w-10 h-10 text-primary mb-4" />
                  <CardTitle>HRV Monitoring</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Track heart rate variability as an indicator of system balance and recovery capacity.</p>
                </CardContent>
              </Card>

              <Card className="border-border/50 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Activity className="w-10 h-10 text-primary mb-4" />
                  <CardTitle>Heart Rate Trends</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Monitor resting and active heart rate patterns over time for system health indicators.</p>
                </CardContent>
              </Card>

              <Card className="border-border/50 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Zap className="w-10 h-10 text-primary mb-4" />
                  <CardTitle>Stress Correlation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Identify how stress levels impact cardiovascular patterns and recovery.</p>
                </CardContent>
              </Card>

              <Card className="border-border/50 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Moon className="w-10 h-10 text-primary mb-4" />
                  <CardTitle>Sleep Integration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Understand how sleep quality affects heart rate variability and recovery signals.</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="bg-muted/20 border-l-4 border-primary p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">Important Legal Notice</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              HeartCore is an informational tool for tracking cardiovascular patterns. It is not a medical device and does not diagnose, treat, or prevent any medical condition. All insights are for informational purposes only. Consult qualified healthcare professionals for medical advice.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HeartCore;