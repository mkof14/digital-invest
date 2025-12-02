import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RefreshCw, Battery, Heart, Clock, TrendingUp, Shield, ArrowLeft } from 'lucide-react';
import OptimizedImage from '@/components/OptimizedImage';
import rebootcoreHero from '@/assets/projects/rebootcore-hero.jpg';

const RebootCore = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <OptimizedImage
          src={rebootcoreHero}
          alt="Reboot - Recovery and Burnout Prevention Platform"
          containerClassName="absolute inset-0 w-full h-full"
          className="w-full h-full object-cover"
          showSkeleton={false}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-background/30 to-background/5" />
        
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">Reboot</h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Recovery optimization and burnout prevention system
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Overview</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Reboot helps modern professionals balance stress and restoration by identifying burnout indicators, suggesting strategic micro-rests, analyzing recovery patterns, and providing energy restoration guidance for sustainable performance.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Core Functions</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-border/50 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Shield className="w-10 h-10 text-primary mb-4" />
                  <CardTitle>Burnout Indicators</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Early detection of accumulating stress and declining recovery capacity.</p>
                </CardContent>
              </Card>

              <Card className="border-border/50 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Clock className="w-10 h-10 text-primary mb-4" />
                  <CardTitle>Strategic Micro-Rests</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Timely suggestions for brief recovery breaks that maximize restoration efficiency.</p>
                </CardContent>
              </Card>

              <Card className="border-border/50 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <TrendingUp className="w-10 h-10 text-primary mb-4" />
                  <CardTitle>Recovery Pattern Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Track how well you recover from stress and identify factors that enhance restoration.</p>
                </CardContent>
              </Card>

              <Card className="border-border/50 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Battery className="w-10 h-10 text-primary mb-4" />
                  <CardTitle>Energy Restoration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Guidance for rebuilding physical and mental energy reserves after high-stress periods.</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="bg-muted/20 border-l-4 border-primary p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">Important Legal Notice</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Reboot is an informational tool for tracking stress and recovery patterns. It is not a medical device and does not diagnose or treat any condition. All recommendations are for informational purposes only.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RebootCore;