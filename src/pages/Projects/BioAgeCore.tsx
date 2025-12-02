import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, Activity, Clock, Lightbulb, BarChart3, Sparkles, ArrowLeft } from 'lucide-react';
import OptimizedImage from '@/components/OptimizedImage';
import bioagecoreHero from '@/assets/projects/bioagecore-hero.jpg';

const BioAgeCore = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <OptimizedImage
          src={bioagecoreHero}
          alt="BioAge - Biological Age Analysis Platform"
          containerClassName="absolute inset-0 w-full h-full"
          className="w-full h-full object-cover"
          showSkeleton={false}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
        
        <div className="relative z-10 container mx-auto px-4">
          <Link to="/projects" className="animate-fade-in">
            <button className="inline-flex items-center mb-4 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </button>
          </Link>
          <div className="max-w-3xl animate-fade-in" style={{ animationDelay: '0.1s', animationFillMode: 'backwards' }}>
            <div className="inline-block px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full mb-6">
              <span className="text-primary font-semibold">Health Intelligence</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              BioAge
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              AI-powered biological age analysis and optimization tracking
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          
          {/* Overview */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Overview</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              BioAge provides biological age estimation based on real-life signals including sleep, recovery, stress, 
              and activity patterns. Biological age serves as a high-level indicator of system health, reflecting how well 
              your body is functioning relative to your chronological age.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The platform tracks trajectory and dynamics to show whether biological age is improving or worsening over time, 
              providing clear explanations about influencing factors without medical claims.
            </p>
          </div>

          {/* Core Functions */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Core Functions</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-border/50 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Clock className="w-10 h-10 text-primary mb-4" />
                  <CardTitle>Biological Age Estimation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    AI-powered analysis estimates your biological age based on comprehensive health signals and lifestyle patterns.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <TrendingUp className="w-10 h-10 text-primary mb-4" />
                  <CardTitle>Trajectory Tracking</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Monitor whether your biological age is improving or worsening over time with clear trend visualization.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <BarChart3 className="w-10 h-10 text-primary mb-4" />
                  <CardTitle>Factor Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Understand which lifestyle factors have the strongest impact on your biological age indicators.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Lightbulb className="w-10 h-10 text-primary mb-4" />
                  <CardTitle>Optimization Insights</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Receive actionable recommendations on what can improve your bio-age based on your unique patterns.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Activity className="w-10 h-10 text-primary mb-4" />
                  <CardTitle>Signal Integration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Combines sleep quality, stress levels, recovery patterns, and activity data into comprehensive bio-age analysis.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Sparkles className="w-10 h-10 text-primary mb-4" />
                  <CardTitle>Clear Explanations</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    All insights are presented in clear, understandable language without medical jargon or complex terminology.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* How It Works */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">How It Works</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-6 py-4">
                <h3 className="text-xl font-semibold mb-3">Data Collection</h3>
                <p className="text-muted-foreground">
                  BioAge gathers comprehensive data from wearables, health apps, and manual inputs to build a complete 
                  picture of your health signals and lifestyle patterns.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6 py-4">
                <h3 className="text-xl font-semibold mb-3">AI Analysis</h3>
                <p className="text-muted-foreground">
                  Advanced machine learning algorithms process multiple health indicators simultaneously to estimate biological 
                  age based on proven correlations with aging markers.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6 py-4">
                <h3 className="text-xl font-semibold mb-3">Trend Monitoring</h3>
                <p className="text-muted-foreground">
                  Track changes in your biological age over weeks and months, identifying whether lifestyle changes are having 
                  positive or negative effects on aging indicators.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6 py-4">
                <h3 className="text-xl font-semibold mb-3">Personalized Insights</h3>
                <p className="text-muted-foreground">
                  Receive targeted recommendations based on your specific patterns, highlighting which factors you can influence 
                  to potentially improve your biological age trajectory.
                </p>
              </div>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Based on Real-Life Signals</h2>
            <div className="bg-muted/30 rounded-lg p-8">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-xl">•</span>
                  <span className="text-muted-foreground">Sleep quality and consistency patterns</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-xl">•</span>
                  <span className="text-muted-foreground">Heart rate variability and recovery indicators</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-xl">•</span>
                  <span className="text-muted-foreground">Physical activity levels and movement patterns</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-xl">•</span>
                  <span className="text-muted-foreground">Stress exposure and management effectiveness</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-xl">•</span>
                  <span className="text-muted-foreground">Daily energy levels and fatigue patterns</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-xl">•</span>
                  <span className="text-muted-foreground">Recovery capacity after physical or mental stress</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Position in Portfolio */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Position in the Ecosystem</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              BioAge serves as a high-level health indicator within the BioMath ecosystem, synthesizing insights from 
              multiple specialized modules to provide an overarching view of biological health status.
            </p>
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-4">Integration Architecture</h3>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Sleep Integration:</strong> Sleep data provides crucial input for 
                  biological age estimation, as sleep quality is strongly correlated with aging processes.
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Stress Correlation:</strong> Chronic stress patterns are key factors 
                  in accelerated biological aging, making this integration essential.
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Vital Signals:</strong> Heart rate variability and other vital signs 
                  feed directly into bio-age calculations.
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Move Activity Data:</strong> Physical activity patterns contribute 
                  significantly to biological age assessment.
                </p>
              </div>
            </div>
          </div>

          {/* Use Cases */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Who Benefits</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-border/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Health Optimizers</h3>
                <p className="text-muted-foreground">
                  Individuals focused on maximizing healthspan and tracking the effectiveness of their lifestyle interventions.
                </p>
              </div>
              <div className="border border-border/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Longevity Enthusiasts</h3>
                <p className="text-muted-foreground">
                  People interested in understanding and potentially slowing their biological aging process through informed choices.
                </p>
              </div>
              <div className="border border-border/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Performance Athletes</h3>
                <p className="text-muted-foreground">
                  Athletes who want to optimize training and recovery while monitoring overall system health and aging markers.
                </p>
              </div>
              <div className="border border-border/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Wellness Professionals</h3>
                <p className="text-muted-foreground">
                  Health coaches and wellness practitioners seeking objective metrics to guide client interventions.
                </p>
              </div>
            </div>
          </div>

          {/* Legal Notice */}
          <div className="bg-muted/20 border-l-4 border-primary p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">Important Legal Notice</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              BioAge is an informational tool that provides estimates of biological age based on lifestyle and health data.
              It is not a medical device and does not diagnose, treat, cure, or prevent any disease or medical condition. The 
              biological age estimates are for informational and educational purposes only. All health decisions should be made 
              in consultation with qualified healthcare professionals. BioAge does not replace professional medical advice,
              diagnosis, or treatment.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BioAgeCore;