import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Moon, Salad, Activity, Clock, Brain, Sparkles, ArrowLeft } from 'lucide-react';
import OptimizedImage from '@/components/OptimizedImage';
import longevitycoreHero from '@/assets/projects/longevitycore-hero.jpg';

const LongevityCore = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <OptimizedImage
          src={longevitycoreHero}
          alt="LongevityCore - Personalized Longevity Planning Platform"
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
              LongevityCore
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Personalized AI longevity planning aligned with daily life
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
              LongevityCore delivers AI-driven longevity planning that integrates seamlessly into daily life. Rather than 
              prescribing one-size-fits-all protocols, the platform adapts to personal patterns and routines, making sustainable 
              improvements realistic and achievable.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              By focusing on sleep optimization, nutritional insights, movement patterns, biorhythms, and behavior recognition, 
              LongevityCore helps users make informed decisions about their long-term health trajectory through practical, 
              evidence-based recommendations.
            </p>
          </div>

          {/* Core Functions */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Core Functions</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-border/50 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Moon className="w-10 h-10 text-primary mb-4" />
                  <CardTitle>Sleep Optimization</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Personalized sleep recommendations based on your patterns, schedule, and recovery needs for optimal restoration.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Salad className="w-10 h-10 text-primary mb-4" />
                  <CardTitle>Nutritional Insights</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Evidence-based nutrition guidance with specific recommendations on nutrients and supplementation (non-medical).
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Activity className="w-10 h-10 text-primary mb-4" />
                  <CardTitle>Movement Recommendations</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Activity suggestions tailored to your fitness level, schedule, and longevity goals for sustainable practice.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Clock className="w-10 h-10 text-primary mb-4" />
                  <CardTitle>Biorhythm Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Understand your natural energy cycles and align activities with peak performance windows throughout the day.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Brain className="w-10 h-10 text-primary mb-4" />
                  <CardTitle>Behavior Pattern Recognition</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    AI identifies habits and patterns that support or hinder longevity goals, providing targeted improvement areas.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Sparkles className="w-10 h-10 text-primary mb-4" />
                  <CardTitle>Adaptive Planning</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Plans evolve based on your progress, challenges, and changing circumstances for sustained engagement.
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
                <h3 className="text-xl font-semibold mb-3">Profile Assessment</h3>
                <p className="text-muted-foreground">
                  LongevityCore begins by understanding your current lifestyle, health patterns, constraints, and goals through 
                  comprehensive data collection and analysis.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6 py-4">
                <h3 className="text-xl font-semibold mb-3">Personalized Plan Generation</h3>
                <p className="text-muted-foreground">
                  AI algorithms create a customized longevity plan that fits your schedule, preferences, and capabilities, ensuring 
                  recommendations are practical and sustainable.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6 py-4">
                <h3 className="text-xl font-semibold mb-3">Continuous Adaptation</h3>
                <p className="text-muted-foreground">
                  As you implement changes and provide feedback, the system learns and adapts, refining recommendations to better 
                  match what works for you individually.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6 py-4">
                <h3 className="text-xl font-semibold mb-3">Progress Tracking</h3>
                <p className="text-muted-foreground">
                  Monitor improvements across multiple dimensions—sleep quality, energy levels, stress management, and physical 
                  fitness—to see the cumulative impact of lifestyle changes.
                </p>
              </div>
            </div>
          </div>

          {/* Key Focus Areas */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Sustainable, Realistic Improvements</h2>
            <div className="bg-muted/30 rounded-lg p-8">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-xl">•</span>
                  <span className="text-muted-foreground">Sleep schedule optimization based on your chronotype and obligations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-xl">•</span>
                  <span className="text-muted-foreground">Nutrition patterns that fit your lifestyle, budget, and preferences</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-xl">•</span>
                  <span className="text-muted-foreground">Movement strategies that integrate into daily routines and work schedules</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-xl">•</span>
                  <span className="text-muted-foreground">Stress management techniques aligned with your personality and triggers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-xl">•</span>
                  <span className="text-muted-foreground">Evidence-based supplementation guidance (informational, non-medical)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-xl">•</span>
                  <span className="text-muted-foreground">Behavior modification strategies based on proven psychological principles</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Position in Portfolio */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Position in the Ecosystem</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              LongevityCore serves as the strategic planning layer within the BioMath ecosystem, coordinating insights from 
              multiple modules to create a comprehensive longevity roadmap.
            </p>
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-4">Ecosystem Integration</h3>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Data Synthesis:</strong> Aggregates insights from SleepCore, StressCore, 
                  MoveCore, VitalCore, and other modules to inform strategic recommendations.
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Holistic Approach:</strong> Unlike single-focus modules, LongevityCore 
                  coordinates across all health dimensions for maximum synergistic effect.
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Long-term Optimization:</strong> Focuses on sustainable improvements over 
                  months and years rather than quick fixes or short-term gains.
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Personalization Engine:</strong> Adapts all module outputs to create a 
                  cohesive plan that matches individual needs and circumstances.
                </p>
              </div>
            </div>
          </div>

          {/* Use Cases */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Ideal For</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-border/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Longevity-Focused Individuals</h3>
                <p className="text-muted-foreground">
                  People committed to maximizing healthspan and lifespan through evidence-based lifestyle optimization.
                </p>
              </div>
              <div className="border border-border/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Health Optimizers</h3>
                <p className="text-muted-foreground">
                  Individuals seeking a comprehensive, data-driven approach to health improvement across all major domains.
                </p>
              </div>
              <div className="border border-border/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Preventive Health Enthusiasts</h3>
                <p className="text-muted-foreground">
                  Those who prefer proactive health management over reactive medical interventions.
                </p>
              </div>
              <div className="border border-border/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Busy Professionals</h3>
                <p className="text-muted-foreground">
                  People with demanding schedules who need efficient, practical strategies for long-term health maintenance.
                </p>
              </div>
            </div>
          </div>

          {/* Legal Notice */}
          <div className="bg-muted/20 border-l-4 border-primary p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">Important Legal Notice</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              LongevityCore is an informational and educational tool that provides personalized lifestyle recommendations 
              based on health data and scientific research. It is not a medical device and does not diagnose, treat, cure, or 
              prevent any disease. The recommendations provided are for informational purposes only and should not replace 
              professional medical advice. All health decisions should be made in consultation with qualified healthcare 
              professionals. LongevityCore does not provide medical, nutritional, or therapeutic services.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LongevityCore;