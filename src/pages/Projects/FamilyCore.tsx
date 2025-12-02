import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Baby, Moon, Calendar, Salad, Heart, Shield, ArrowLeft } from 'lucide-react';
import OptimizedImage from '@/components/OptimizedImage';
import familycoreHero from '@/assets/projects/familycore-hero.jpg';

const FamilyCore = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <OptimizedImage
          src={familycoreHero}
          alt="Family - Family Health Companion Platform"
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Family
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              A practical health companion for parents and families
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
              Family simplifies daily health decisions for parents by organizing health-related routines in one clear interface. 
              The platform is designed to reduce complexity and provide quick access to important health information, making family 
              health management more efficient and less stressful.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From tracking children's health patterns to managing vaccination schedules and nutrition planning, Family helps
              parents stay organized and informed without feeling overwhelmed by medical terminology or complex systems.
            </p>
          </div>

          {/* Core Functions */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Core Functions</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-border/50 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Baby className="w-10 h-10 text-primary mb-4" />
                  <CardTitle>Child Health Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Centralized dashboard showing each child's health status, recent changes, and areas needing attention.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Moon className="w-10 h-10 text-primary mb-4" />
                  <CardTitle>Sleep Schedule Helper</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Track sleep patterns and receive age-appropriate recommendations for healthy sleep routines.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Calendar className="w-10 h-10 text-primary mb-4" />
                  <CardTitle>Vaccination Calendar</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Informational vaccination tracking with reminders for upcoming appointments (non-medical guidance).
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Salad className="w-10 h-10 text-primary mb-4" />
                  <CardTitle>Nutrition Suggestions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Age-appropriate nutrition guidance and meal planning ideas tailored to family preferences and needs.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Heart className="w-10 h-10 text-primary mb-4" />
                  <CardTitle>Growth & Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Track developmental milestones and physical growth with age-appropriate benchmarks (informational only).
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Shield className="w-10 h-10 text-primary mb-4" />
                  <CardTitle>Health Event Logging</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Record illnesses, injuries, and health events for easy reference during medical appointments.
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
                <h3 className="text-xl font-semibold mb-3">Family Profile Setup</h3>
                <p className="text-muted-foreground">
                  Create profiles for each child with age, basic health information, and any special considerations or preferences.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6 py-4">
                <h3 className="text-xl font-semibold mb-3">Routine Organization</h3>
                <p className="text-muted-foreground">
                  Set up daily health routines including sleep schedules, meal times, medication reminders, and activity goals.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6 py-4">
                <h3 className="text-xl font-semibold mb-3">Automated Reminders</h3>
                <p className="text-muted-foreground">
                  Receive timely notifications for important health tasks, appointments, and routine care activities.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6 py-4">
                <h3 className="text-xl font-semibold mb-3">Progress Tracking</h3>
                <p className="text-muted-foreground">
                  Monitor health patterns over time with simple visualizations that highlight improvements or areas needing attention.
                </p>
              </div>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Simplifies Daily Decisions</h2>
            <div className="bg-muted/30 rounded-lg p-8">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-xl">•</span>
                  <span className="text-muted-foreground">All family health information in one easy-to-access location</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-xl">•</span>
                  <span className="text-muted-foreground">Clear reminders for appointments, medications, and routine care</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-xl">•</span>
                  <span className="text-muted-foreground">Age-appropriate guidance without overwhelming medical complexity</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-xl">•</span>
                  <span className="text-muted-foreground">Historical health records ready for pediatrician visits</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-xl">•</span>
                  <span className="text-muted-foreground">Nutrition and sleep recommendations based on current research</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-xl">•</span>
                  <span className="text-muted-foreground">Peace of mind knowing important health tasks won't be forgotten</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Position in Portfolio */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Position in the Ecosystem</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Family extends the BioMath ecosystem to family health management, applying proven health intelligence 
              principles to the unique needs of parents and children.
            </p>
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-4">Family-Focused Health Intelligence</h3>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Practical Focus:</strong> While other modules target individual optimization, 
                  Family prioritizes practical organization and peace of mind for busy parents.
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Age-Appropriate Guidance:</strong> Recommendations are tailored to each 
                  child's developmental stage and family circumstances.
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Simplified Interface:</strong> Designed for quick check-ins during busy 
                  daily routines rather than deep analysis.
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Information Organization:</strong> Focuses on making health information 
                  accessible and actionable for non-medical users.
                </p>
              </div>
            </div>
          </div>

          {/* Use Cases */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Ideal For</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-border/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Busy Parents</h3>
                <p className="text-muted-foreground">
                  Parents juggling work and family who need efficient health management without complexity.
                </p>
              </div>
              <div className="border border-border/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">First-Time Parents</h3>
                <p className="text-muted-foreground">
                  New parents who want guidance and organization as they navigate childhood health milestones.
                </p>
              </div>
              <div className="border border-border/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Multi-Child Families</h3>
                <p className="text-muted-foreground">
                  Families with multiple children needing to track different ages, schedules, and health needs.
                </p>
              </div>
              <div className="border border-border/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Health-Conscious Families</h3>
                <p className="text-muted-foreground">
                  Families prioritizing preventive health and wanting to establish good habits early in childhood.
                </p>
              </div>
            </div>
          </div>

          {/* Legal Notice */}
          <div className="bg-muted/20 border-l-4 border-primary p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">Important Legal Notice</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Family is an informational and organizational tool designed to help parents manage family health routines. 
              It is not a medical device and does not diagnose, treat, or prevent any medical condition. The information and 
              guidance provided are for educational purposes only. All medical decisions regarding children's health should be 
              made in consultation with qualified pediatric healthcare professionals. Family does not replace professional 
              medical advice, diagnosis, or treatment.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FamilyCore;