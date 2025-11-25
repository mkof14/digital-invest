import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Moon, Activity, TrendingUp, Clock, Brain, Heart, ArrowLeft } from 'lucide-react';
import OptimizedImage from '@/components/OptimizedImage';
import sleepcoreHero from '@/assets/projects/sleepcore-hero.jpg';

const SleepCore = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
        <Navigation />

        {/* Hero Section */}
        <div className="relative h-[60vh] min-h-[500px] overflow-hidden">
          <OptimizedImage
            src={sleepcoreHero}
            alt="SleepCore - Sleep intelligence platform"
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
              <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-blue-animated">
                SleepCore
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl">
                Sleep intelligence layer focusing on understanding and improving sleep as a key risk and fatigue factor
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
                SleepCore is the sleep-intelligence layer of our ecosystem. It focuses on understanding and improving 
                sleep as one of the main risk and fatigue factors in modern life. Poor sleep quality affects cognitive 
                performance, physical health, emotional regulation, and overall quality of life.
              </p>
              <p>
                The platform imports data from connected devices and wearables, analyzes sleep quality patterns, explores 
                relationships between daytime activities and nighttime rest, and provides simple, actionable daily advice 
                that users can implement immediately.
              </p>
            </div>
          </section>

          {/* Key Features Grid */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Core Capabilities</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <Moon className="w-10 h-10 text-primary mb-2" />
                  <CardTitle>Device Integration</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Seamless import from wearables and connected devices. Automatic synchronization of sleep data 
                    including duration, stages, interruptions, and environmental factors.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Activity className="w-10 h-10 text-primary mb-2" />
                  <CardTitle>Sleep Quality Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Comprehensive analysis of sleep architecture: deep sleep, REM, light sleep phases. Pattern 
                    recognition across weeks and months to identify trends and issues.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <TrendingUp className="w-10 h-10 text-primary mb-2" />
                  <CardTitle>Daytime Correlation</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Understanding how daytime activities, stress, exercise, and nutrition affect nighttime sleep 
                    quality. Identifying patterns that support or disrupt rest.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Clock className="w-10 h-10 text-primary mb-2" />
                  <CardTitle>Sleep Consistency</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Tracking bedtime and wake time consistency. Circadian rhythm alignment. Identifying schedule 
                    disruptions and their impact on recovery.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Brain className="w-10 h-10 text-primary mb-2" />
                  <CardTitle>Daily Insights</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Simple, actionable suggestions delivered each day. "What to improve today" guidance that is 
                    practical and easy to understand without overwhelming the user.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Heart className="w-10 h-10 text-primary mb-2" />
                  <CardTitle>Recovery Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Assessing how well sleep supports physical and mental recovery. Understanding when the body 
                    is under-recovered and needs additional rest or intervention.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* How It Works */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">How It Works</h2>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>1. Data Import and Synchronization</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Connect your wearable devices, smartwatches, or sleep trackers. SleepCore automatically imports 
                    nightly sleep data including duration, stages, heart rate during sleep, movement, and environmental 
                    conditions. All data remains private and secure.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>2. Nightly Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Each morning, SleepCore analyzes the previous night's sleep. It evaluates sleep architecture, 
                    identifies interruptions, assesses consistency with your historical patterns, and compares your 
                    sleep against optimal benchmarks for your age and activity level.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>3. Daily Feedback Loop</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Receive clear, concise feedback on what went well and what could be improved. Suggestions are 
                    specific and actionable: adjust your bedtime routine, modify evening activities, optimize your 
                    sleep environment, or change daytime habits that affect nighttime rest.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>4. Long-term Pattern Recognition</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Over weeks and months, SleepCore identifies broader patterns. It shows how sleep quality changes 
                    with seasons, work schedules, travel, stress levels, and lifestyle factors. This helps users 
                    understand their unique sleep needs and optimize their routines accordingly.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Core Metrics */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Core Metrics and Outputs</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Sleep Architecture</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Deep sleep duration and percentage</li>
                  <li>• REM sleep patterns and timing</li>
                  <li>• Light sleep phases and transitions</li>
                  <li>• Wake episodes and disruptions</li>
                  <li>• Sleep cycle completion and quality</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Quality Indicators</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Total sleep duration vs. need</li>
                  <li>• Sleep efficiency (time asleep vs. time in bed)</li>
                  <li>• Sleep consistency score</li>
                  <li>• Recovery assessment</li>
                  <li>• Overall sleep quality rating</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Position in Portfolio */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Position in the Portfolio</h2>
            <Card className="bg-muted/50">
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-4">
                  SleepCore is a foundational layer within the BioMath health intelligence ecosystem. It integrates 
                  seamlessly with other components:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li>
                    <strong>BioMath Core:</strong> Provides advanced computational analysis of sleep patterns and 
                    their relationship to overall health metrics
                  </li>
                  <li>
                    <strong>StressCore/MindCore:</strong> Connects mental and emotional state during the day with 
                    sleep quality at night
                  </li>
                  <li>
                    <strong>MoveCore:</strong> Links physical activity levels and timing with sleep onset and quality
                  </li>
                  <li>
                    <strong>VitalCore:</strong> Uses sleep data as a critical input for early warning signals about 
                    overall health status and recovery capacity
                  </li>
                  <li>
                    <strong>BioMath Life Platform:</strong> Aggregates sleep intelligence with other health data 
                    streams to provide a comprehensive daily health picture
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
                  <CardTitle>Professionals</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Optimize performance and cognitive function through better sleep. Understand how work stress 
                    and schedules affect rest.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Athletes and Active Individuals</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Track recovery through sleep quality. Adjust training intensity based on nightly rest and 
                    recovery metrics.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Health-Conscious Users</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Understand sleep as a pillar of overall health. Make informed lifestyle changes based on 
                    sleep data and patterns.
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
                  <strong>Important Notice:</strong> SleepCore is an informational tool and is not a medical device. 
                  It does not diagnose, treat, or prevent any medical condition. Sleep disorders and chronic sleep 
                  issues should be evaluated by qualified healthcare professionals. All decisions regarding health 
                  and lifestyle remain the responsibility of the user.
                </p>
              </CardContent>
            </Card>
          </section>
        </div>

        <Footer />
      </div>
  );
};

export default SleepCore;
