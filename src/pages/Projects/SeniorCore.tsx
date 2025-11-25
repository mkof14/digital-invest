import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bell, Heart, Activity, Calendar, Shield, Users, ArrowLeft } from 'lucide-react';
import OptimizedImage from '@/components/OptimizedImage';
import seniorcoreHero from '@/assets/projects/seniorcore-hero.jpg';

const SeniorCore = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <OptimizedImage
          src={seniorcoreHero}
          alt="SeniorCore - Senior Support Platform"
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              SeniorCore
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Support system for seniors and their caregivers
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
              SeniorCore is designed for simplicity and clarity, helping seniors maintain independence and daily structure. 
              The platform serves both seniors and their caregivers by organizing essential information and routines in an 
              accessible, easy-to-use format that promotes well-being and confidence.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              By focusing on practical daily needs—medication reminders, routine tracking, and gentle health monitoring—SeniorCore 
              supports aging in place while providing peace of mind for family members and professional caregivers.
            </p>
          </div>

          {/* Core Functions */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Core Functions</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-border/50 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Bell className="w-10 h-10 text-primary mb-4" />
                  <CardTitle>Smart Reminders</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Medication schedules, hydration alerts, and daily routine reminders delivered with clear, gentle notifications.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Activity className="w-10 h-10 text-primary mb-4" />
                  <CardTitle>Risk Pattern Tracking</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Monitor patterns that may indicate health changes, helping identify when professional consultation may be beneficial (non-medical).
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Heart className="w-10 h-10 text-primary mb-4" />
                  <CardTitle>Measurements Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Simple tracking of basic health measurements with clear trend visualizations and historical records.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Shield className="w-10 h-10 text-primary mb-4" />
                  <CardTitle>Safe Lifestyle Guidance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Age-appropriate recommendations for maintaining safe and healthy daily routines.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Calendar className="w-10 h-10 text-primary mb-4" />
                  <CardTitle>Appointment Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Track medical appointments, prepare questions, and maintain records of healthcare provider visits.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Users className="w-10 h-10 text-primary mb-4" />
                  <CardTitle>Caregiver Coordination</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Share selected information with family members and caregivers to enable coordinated support.
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
                <h3 className="text-xl font-semibold mb-3">Simple Setup</h3>
                <p className="text-muted-foreground">
                  Easy onboarding process with large text, clear instructions, and optional assistance from family members or caregivers.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6 py-4">
                <h3 className="text-xl font-semibold mb-3">Daily Structure</h3>
                <p className="text-muted-foreground">
                  Establish consistent daily routines with timed reminders for medications, meals, hydration, and activities.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6 py-4">
                <h3 className="text-xl font-semibold mb-3">Gentle Monitoring</h3>
                <p className="text-muted-foreground">
                  Track health measurements and daily activities without intrusive surveillance, respecting independence and privacy.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6 py-4">
                <h3 className="text-xl font-semibold mb-3">Caregiver Connection</h3>
                <p className="text-muted-foreground">
                  Optional sharing features allow trusted family members or caregivers to stay informed and provide appropriate support.
                </p>
              </div>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Designed for Simplicity and Clarity</h2>
            <div className="bg-muted/30 rounded-lg p-8">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-xl">•</span>
                  <span className="text-muted-foreground">Large, readable text and intuitive navigation suitable for all comfort levels with technology</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-xl">•</span>
                  <span className="text-muted-foreground">Reliable reminders help maintain medication compliance and daily routines</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-xl">•</span>
                  <span className="text-muted-foreground">Health pattern tracking that identifies concerning changes early</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-xl">•</span>
                  <span className="text-muted-foreground">Supports independence while providing safety net through caregiver coordination</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-xl">•</span>
                  <span className="text-muted-foreground">Reduces cognitive load by organizing health information in one clear location</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-xl">•</span>
                  <span className="text-muted-foreground">Peace of mind for both seniors and their families</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Position in Portfolio */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Position in the Ecosystem</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              SeniorCore adapts the BioMath health intelligence platform to meet the specific needs of senior users, 
              prioritizing simplicity, safety, and dignity.
            </p>
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-4">Senior-Focused Design</h3>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Accessibility First:</strong> Every interface element is designed with 
                  senior usability in mind—large buttons, clear labels, and straightforward navigation.
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Independence Support:</strong> Helps seniors maintain autonomy while 
                  providing appropriate oversight and assistance when needed.
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Caregiver Integration:</strong> Balances senior privacy with caregiver 
                  need-to-know, enabling effective support without invasiveness.
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Practical Focus:</strong> Emphasizes daily life management over complex 
                  analysis or optimization metrics.
                </p>
              </div>
            </div>
          </div>

          {/* Use Cases */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Ideal For</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-border/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Independent Seniors</h3>
                <p className="text-muted-foreground">
                  Older adults living independently who want support maintaining healthy routines and medication schedules.
                </p>
              </div>
              <div className="border border-border/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Family Caregivers</h3>
                <p className="text-muted-foreground">
                  Adult children supporting aging parents who live separately and need coordination tools.
                </p>
              </div>
              <div className="border border-border/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Professional Caregivers</h3>
                <p className="text-muted-foreground">
                  Home health aides and care coordinators managing multiple senior clients with different needs and schedules.
                </p>
              </div>
              <div className="border border-border/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Senior Living Facilities</h3>
                <p className="text-muted-foreground">
                  Assisted living communities looking to support resident independence and streamline care coordination.
                </p>
              </div>
            </div>
          </div>

          {/* Legal Notice */}
          <div className="bg-muted/20 border-l-4 border-primary p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">Important Legal Notice</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              SeniorCore is an informational and organizational tool designed to help seniors and caregivers manage daily 
              health routines and track basic health information. It is not a medical device and does not diagnose, treat, or 
              prevent any medical condition. The information provided is for organizational and educational purposes only. All 
              medical decisions should be made in consultation with qualified healthcare professionals. SeniorCore does not 
              replace professional medical advice, diagnosis, or treatment.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SeniorCore;