import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Activity, AlertTriangle, TrendingDown, Shield, Eye, ArrowLeft } from 'lucide-react';
import OptimizedImage from '@/components/OptimizedImage';
import vitalcoreHero from '@/assets/projects/vitalcore-hero.jpg';

const VitalCore = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
        <Navigation />

        {/* Hero Section */}
        <div className="relative h-[60vh] min-h-[500px] overflow-hidden">
          <OptimizedImage
            src={vitalcoreHero}
            alt="VitalCore - Early warning health signals platform"
            containerClassName="absolute inset-0 w-full h-full"
            className="w-full h-full object-cover"
            showSkeleton={false}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
          
          <div className="relative h-full container mx-auto px-4 flex flex-col justify-center">
            <Link to="/projects" className="animate-fade-in">
              <button className="inline-flex items-center mb-4 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Projects
              </button>
            </Link>
            <div className="animate-fade-in" style={{ animationDelay: '0.1s', animationFillMode: 'backwards' }}>
              <Badge className="w-fit mb-4 bg-primary/20 text-primary border-primary/30">
                Health Intelligence
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-tech-animated">
                VitalCore
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl">
                Early warning system for vital signs, combining HR, HRV, sleep, stress, and activity patterns
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-16">
          {/* Overview */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Overview</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p>
                VitalCore is an early warning system built around vital signs and key health patterns. It analyzes 
                heart rate, heart rate variability (HRV), sleep quality, stress levels, and activity data to detect 
                when "something is off." By combining multiple inputs, it identifies subtle changes that indicate the 
                body is under pressure.
              </p>
              <p>
                The platform serves as an early signal engine, showing when the body is approaching overload before 
                serious problems develop. It helps users take preventive action: rest more, reduce stress, adjust 
                activity, or consult healthcare professionals if needed. VitalCore keeps people engaged because it 
                provides value by warning them early.
              </p>
            </div>
          </section>

          {/* Key Data Sources */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Core Data Sources</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <Heart className="w-10 h-10 text-primary mb-2" />
                  <CardTitle>Heart Rate (HR)</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Continuous heart rate monitoring throughout the day and night. Resting heart rate trends, 
                    exercise response, recovery patterns. Elevated resting HR can signal stress, illness, or overtraining.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Activity className="w-10 h-10 text-primary mb-2" />
                  <CardTitle>Heart Rate Variability (HRV)</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    HRV measures the variation in time between heartbeats. Higher HRV typically indicates better 
                    recovery and resilience. Declining HRV can signal stress, fatigue, or illness before symptoms appear.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <AlertTriangle className="w-10 h-10 text-primary mb-2" />
                  <CardTitle>Sleep Quality</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Sleep data from SleepCore: duration, stages, interruptions, consistency. Poor sleep affects all 
                    other health metrics and increases risk of illness and burnout.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <TrendingDown className="w-10 h-10 text-primary mb-2" />
                  <CardTitle>Stress Levels</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Stress data from StressCore/MindCore. Chronic stress shows up in vital signs and contributes to 
                    cardiovascular risk, immune suppression, and mental health issues.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Shield className="w-10 h-10 text-primary mb-2" />
                  <CardTitle>Activity Patterns</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Movement and exercise data from MoveCore. Sudden decreases in activity can indicate fatigue or 
                    illness. Overtraining shows up as elevated resting HR and reduced HRV.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Eye className="w-10 h-10 text-primary mb-2" />
                  <CardTitle>Pattern Recognition</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    VitalCore doesn't just track individual metrics. It looks for patterns across all data sources. 
                    Combinations of changes are more meaningful than single indicators.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Signal Detection */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Signal Detection: When Something Is Off</h2>
            <Card className="bg-muted/50">
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-6">
                  VitalCore continuously analyzes your health data streams, looking for patterns that indicate the 
                  body is under pressure. These signals often appear before you feel sick or exhausted:
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Pattern Changes</h3>
                    <p className="text-muted-foreground">
                      Deviation from your personal baselines. A sudden increase in resting heart rate, a drop in HRV, 
                      or deteriorating sleep quality all signal that something has changed. VitalCore tracks these 
                      shifts and alerts you when they cross thresholds.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">Load Accumulation</h3>
                    <p className="text-muted-foreground">
                      Stress, poor sleep, and high activity can accumulate over days or weeks. Each day might seem 
                      manageable, but the cumulative load can push the body toward breakdown. VitalCore tracks this 
                      accumulation and warns when you're approaching unsustainable levels.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">Recovery Gaps</h3>
                    <p className="text-muted-foreground">
                      When activity and stress are high but recovery (sleep, low heart rate, high HRV) is insufficient, 
                      the body cannot repair itself. VitalCore identifies these recovery gaps and recommends adjustments 
                      before exhaustion or illness occur.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">Multi-Signal Alerts</h3>
                    <p className="text-muted-foreground">
                      A single metric out of range might not be concerning, but multiple metrics shifting together 
                      indicate a real issue. VitalCore's strength is combining inputs to generate more accurate and 
                      actionable alerts.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Alerts and Insights */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Alerts and Insights</h2>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Early Gentle Warnings</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    VitalCore alerts are designed to be early and gentle. They're not medical alarms or panic-inducing 
                    notifications. Instead, they're friendly reminders that your body is showing signs of stress and 
                    might need attention.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Actionable Recommendations</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Alerts come with suggestions: "Consider getting extra sleep tonight," "Reduce intense exercise 
                    for a few days," "Check stress levels and take breaks." These recommendations are practical and 
                    immediately implementable.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Trend Visualization</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Users can view their vital signs over time: heart rate trends, HRV changes, sleep quality patterns. 
                    Visual feedback helps them understand what's improving, what's declining, and why.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Engagement Through Value</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    VitalCore keeps users engaged because it provides real, tangible value. When the system warns them 
                    of approaching illness or burnout, and they take action and avoid the issue, they trust the platform 
                    more. This trust drives long-term engagement and usage.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* How VitalCore Ties Into the Portfolio */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">How VitalCore Ties Into the Portfolio</h2>
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-4">
                  VitalCore is the "sentry" for the BioMath ecosystem. It sits at the center of the platform, 
                  monitoring all incoming health data streams and watching for early warning signs:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li>
                    <strong>SleepCore:</strong> Provides sleep quality data that feeds into VitalCore's recovery 
                    assessment and early warning algorithms.
                  </li>
                  <li>
                    <strong>StressCore/MindCore:</strong> Supplies stress and mood data that helps VitalCore understand 
                    psychological load and its impact on physical health.
                  </li>
                  <li>
                    <strong>MoveCore:</strong> Contributes activity and movement data to assess whether the user is 
                    balancing exertion with recovery.
                  </li>
                  <li>
                    <strong>BioMath Core:</strong> Provides advanced computational analysis and risk modeling based on 
                    the vital signs and patterns detected by VitalCore.
                  </li>
                  <li>
                    <strong>BioMath Life Platform:</strong> Aggregates all health streams, with VitalCore serving as 
                    the central early warning layer that protects users from overload and guides them toward sustainable 
                    health practices.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </section>

          {/* Use Cases */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Use Cases and Applications</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Athletes and Active Individuals</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Avoid overtraining by monitoring recovery through HRV and resting heart rate. Adjust training 
                    intensity based on VitalCore's early warnings.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>High-Stress Professionals</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Track the physiological impact of work stress. Receive early warnings when stress is affecting 
                    cardiovascular health and recovery capacity.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Health-Conscious Users</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Monitor overall health trends and catch potential issues early. Use VitalCore as a continuous 
                    health check that guides lifestyle decisions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Legal Notice */}
          <section>
            <Card className="bg-muted/30 border-primary/20">
              <CardContent className="pt-6">
                <p className="text-sm text-muted-foreground">
                  <strong>Important Notice:</strong> VitalCore is an informational tool and early warning system. 
                  It is not a medical device and does not diagnose, treat, or prevent any medical condition. Alerts 
                  and insights are based on pattern recognition and should not replace professional medical evaluation. 
                  Users experiencing concerning symptoms or health changes should consult qualified healthcare 
                  professionals. All decisions regarding health and medical care remain the responsibility of the user 
                  and their healthcare providers.
                </p>
              </CardContent>
            </Card>
          </section>
        </div>

        <Footer />
      </div>
  );
};

export default VitalCore;
