import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Camera, TrendingUp, Sparkles, Droplets, Sun, Eye, ArrowLeft } from 'lucide-react';
import OptimizedImage from '@/components/OptimizedImage';
import skincoreHero from '@/assets/projects/skincore-hero.jpg';

const SkinCore = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <OptimizedImage
          src={skincoreHero}
          alt="SkinCore - AI Skin Analysis Platform"
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">SkinCore</h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              AI-powered skin analysis from photos with trend tracking
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Overview</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              SkinCore uses camera-based AI analysis to recognize skin patterns and track visual trends over time. The platform provides recommendations with ingredient-level feedback, helping users understand what works for their skin through daily and weekly tracking without medical positioning.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Core Functions</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-border/50 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Camera className="w-10 h-10 text-primary mb-4" />
                  <CardTitle>AI Photo Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Camera-based pattern recognition for skin texture, tone, and condition tracking (non-medical).</p>
                </CardContent>
              </Card>

              <Card className="border-border/50 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <TrendingUp className="w-10 h-10 text-primary mb-4" />
                  <CardTitle>Visual Trend Tracking</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Monitor skin changes over days and weeks with clear before/after comparisons.</p>
                </CardContent>
              </Card>

              <Card className="border-border/50 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Sparkles className="w-10 h-10 text-primary mb-4" />
                  <CardTitle>Ingredient-Level Feedback</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Understand which ingredients work for your skin based on tracking and patterns.</p>
                </CardContent>
              </Card>

              <Card className="border-border/50 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Eye className="w-10 h-10 text-primary mb-4" />
                  <CardTitle>Pattern Recognition</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">AI identifies correlations between products, routines, and skin condition changes.</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="bg-muted/20 border-l-4 border-primary p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">Important Legal Notice</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              SkinCore is an informational tool for tracking skin appearance patterns. It is not a medical device and does not diagnose, treat, or prevent any skin condition or disease. All recommendations are for informational purposes only. Consult qualified healthcare professionals for medical advice.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SkinCore;