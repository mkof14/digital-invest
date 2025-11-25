import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Scale, Droplets, Moon, Activity, Salad, TrendingDown, ArrowLeft } from 'lucide-react';
import OptimizedImage from '@/components/OptimizedImage';
import weightcoreHero from '@/assets/projects/weightcore-hero.jpg';

const WeightCore = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <OptimizedImage
          src={weightcoreHero}
          alt="WeightCore - Weight Intelligence Platform"
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
              WeightCore
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Weight intelligence — understanding causes, not counting calories
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
              WeightCore focuses on understanding the root causes behind weight changes through system-level analysis. 
              Weight is a system-level variable, not a single number. Instead of simple calorie counting, WeightCore examines 
              the complex interplay of factors that influence weight dynamics.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              By providing root-cause analysis across lifestyle patterns, WeightCore delivers daily insights that explain 
              WHY weight changes occur, offering a comprehensive view that goes beyond traditional weight management approaches.
            </p>
          </div>

          {/* Core Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Core Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-border/50 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Moon className="w-10 h-10 text-primary mb-4" />
                  <CardTitle>Sleep Impact on Weight</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Analyze how sleep quality and duration influence weight regulation, metabolism, and appetite control.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Droplets className="w-10 h-10 text-primary mb-4" />
                  <CardTitle>Water Balance & Salt Retention</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Track fluid retention patterns and understand how sodium intake affects daily weight fluctuations.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Activity className="w-10 h-10 text-primary mb-4" />
                  <CardTitle>Hormonal Indicators</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Monitor indirect hormonal signals that influence metabolism and weight regulation (non-medical).
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <TrendingDown className="w-10 h-10 text-primary mb-4" />
                  <CardTitle>Stress Influence</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Understand how stress levels impact eating patterns, metabolism, and weight management.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Salad className="w-10 h-10 text-primary mb-4" />
                  <CardTitle>Nutrition Data Integration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Import nutrition information from DishCore for comprehensive dietary pattern analysis.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Scale className="w-10 h-10 text-primary mb-4" />
                  <CardTitle>System-Level Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    View weight as part of an integrated system, identifying patterns and correlations across multiple factors.
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
                <h3 className="text-xl font-semibold mb-3">Data Integration</h3>
                <p className="text-muted-foreground">
                  WeightCore collects data from multiple sources including sleep trackers, activity monitors, nutrition logs, 
                  and stress indicators to build a complete picture of the factors influencing weight.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6 py-4">
                <h3 className="text-xl font-semibold mb-3">Pattern Recognition</h3>
                <p className="text-muted-foreground">
                  Advanced algorithms identify correlations between lifestyle factors and weight changes, revealing hidden 
                  patterns that simple calorie counting cannot detect.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6 py-4">
                <h3 className="text-xl font-semibold mb-3">Root-Cause Analysis</h3>
                <p className="text-muted-foreground">
                  Instead of focusing on weight numbers alone, WeightCore explains why weight changes occur by analyzing 
                  the underlying factors and their interactions.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6 py-4">
                <h3 className="text-xl font-semibold mb-3">Daily Insights</h3>
                <p className="text-muted-foreground">
                  Receive clear, actionable explanations about what drove weight changes each day, helping you understand 
                  and adjust the factors within your control.
                </p>
              </div>
            </div>
          </div>

          {/* Key Insights */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Key Insights Provided</h2>
            <div className="bg-muted/30 rounded-lg p-8">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-xl">•</span>
                  <span className="text-muted-foreground">Why weight increased or decreased today</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-xl">•</span>
                  <span className="text-muted-foreground">Which factors had the strongest impact on weight changes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-xl">•</span>
                  <span className="text-muted-foreground">How sleep quality affects weight regulation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-xl">•</span>
                  <span className="text-muted-foreground">Patterns in water retention and their causes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-xl">•</span>
                  <span className="text-muted-foreground">Stress-related weight fluctuations and their timing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-xl">•</span>
                  <span className="text-muted-foreground">Nutrition patterns that correlate with weight changes</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Position in Portfolio */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Position in the Portfolio</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              WeightCore is a key component of the BioMath health intelligence ecosystem, working in concert with other 
              specialized modules to provide comprehensive health insights.
            </p>
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-4">Integration Points</h3>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  <strong className="text-foreground">With SleepCore:</strong> Sleep quality data feeds directly into weight analysis, 
                  revealing how rest affects metabolism and appetite regulation.
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">With StressCore:</strong> Stress patterns are correlated with weight changes, 
                  helping identify emotional eating triggers and stress-related metabolism shifts.
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">With DishCore:</strong> Nutrition data provides essential context for 
                  understanding dietary impacts on weight dynamics.
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">With MoveCore:</strong> Activity levels contribute to the complete picture 
                  of energy balance and metabolic patterns.
                </p>
              </div>
            </div>
          </div>

          {/* Use Cases */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Use Cases</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-border/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Health-Conscious Individuals</h3>
                <p className="text-muted-foreground">
                  Understand the real drivers behind weight changes and make informed decisions based on comprehensive data analysis.
                </p>
              </div>
              <div className="border border-border/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Athletes & Fitness Enthusiasts</h3>
                <p className="text-muted-foreground">
                  Track how training, recovery, and nutrition interact to influence body composition and performance.
                </p>
              </div>
              <div className="border border-border/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Professionals Managing Stress</h3>
                <p className="text-muted-foreground">
                  See how work-related stress and sleep patterns affect weight, enabling better lifestyle balance.
                </p>
              </div>
              <div className="border border-border/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Health Optimization</h3>
                <p className="text-muted-foreground">
                  Move beyond simple calorie counting to understand the complex systems that regulate body weight.
                </p>
              </div>
            </div>
          </div>

          {/* Legal Notice */}
          <div className="bg-muted/20 border-l-4 border-primary p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">Important Legal Notice</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              WeightCore is an informational tool designed to help users understand factors that may influence weight. 
              It is not a medical device and does not diagnose, treat, or prevent any medical condition. The insights 
              provided are for informational purposes only. All health-related decisions should be made in consultation 
              with qualified healthcare professionals. WeightCore does not replace professional medical advice, diagnosis, 
              or treatment.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WeightCore;