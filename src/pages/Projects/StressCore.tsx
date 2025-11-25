import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, Heart, Zap, TrendingUp, MessageSquare, Activity, ArrowLeft } from 'lucide-react';
import OptimizedImage from '@/components/OptimizedImage';
import stresscoreHero from '@/assets/projects/stresscore-hero.jpg';

const StressCore = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
        <Navigation />

        {/* Hero Section */}
        <div className="relative h-[60vh] min-h-[500px] overflow-hidden">
          <OptimizedImage
            src={stresscoreHero}
            alt="StressCore (MindCore) - Psychological state intelligence platform"
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
              <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-purple-animated">
                StressCore (MindCore)
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl">
                Psychological state intelligence: stress, mood, energy tracking with AI-generated micro-insights
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
                StressCore (MindCore) is a lightweight application focusing on psychological state management. In 
                today's fast-paced world, there is a strong market demand for tools that help people understand and 
                stabilize their mental and emotional state. This platform addresses that need with simplicity and 
                precision.
              </p>
              <p>
                The platform tracks three core elements: stress levels, mood patterns, and energy fluctuations 
                throughout the day. It provides short AI-generated tips and micro-insights that help users become 
                more aware of their psychological patterns and make small adjustments that have meaningful impact.
              </p>
            </div>
          </section>

          {/* Key Features Grid */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Core Elements</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <Brain className="w-10 h-10 text-primary mb-2" />
                  <CardTitle>Stress Tracking</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Simple, intuitive tracking of stress levels throughout the day. Quick check-ins that take 
                    seconds. Pattern recognition showing when and why stress peaks occur.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Heart className="w-10 h-10 text-primary mb-2" />
                  <CardTitle>Mood Monitoring</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Capture emotional state with minimal effort. Track mood shifts over time. Identify triggers 
                    and patterns that affect emotional well-being.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Zap className="w-10 h-10 text-primary mb-2" />
                  <CardTitle>Energy Levels</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Monitor energy fluctuations through the day. Understand when you're at your best and when you 
                    need rest. Optimize scheduling around natural energy patterns.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <MessageSquare className="w-10 h-10 text-primary mb-2" />
                  <CardTitle>AI Micro-Guidance</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Ultra-short, actionable tips generated by AI based on your patterns. No long articles or 
                    overwhelming advice. Just simple suggestions you can implement immediately.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <TrendingUp className="w-10 h-10 text-primary mb-2" />
                  <CardTitle>Pattern Recognition</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Identify recurring patterns in stress, mood, and energy. Understand how different activities, 
                    people, and situations affect your psychological state.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Activity className="w-10 h-10 text-primary mb-2" />
                  <CardTitle>Real-time Awareness</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Build awareness of your current state throughout the day. Catch stress escalation early. 
                    Recognize when you need a break before burnout occurs.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* The Stress-Mood-Energy Triad */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">The Stress-Mood-Energy Triad</h2>
            <Card className="bg-muted/50">
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-6">
                  StressCore is built around three interconnected dimensions of psychological state:
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Stress: Daily Load Management</h3>
                    <p className="text-muted-foreground">
                      Stress is not always negative, but chronic or excessive stress damages health and performance. 
                      StressCore helps users track their stress load, identify sources, and recognize when they're 
                      approaching overload. Quick check-ins throughout the day create awareness without adding burden.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">Mood: Emotional Patterns</h3>
                    <p className="text-muted-foreground">
                      Mood affects decision-making, relationships, creativity, and overall quality of life. By tracking 
                      mood patterns, users gain insight into what lifts or lowers their emotional state. This awareness 
                      enables proactive choices that support emotional stability.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">Energy: Capacity and Depletion</h3>
                    <p className="text-muted-foreground">
                      Energy levels fluctuate naturally throughout the day, but chronic low energy signals deeper issues. 
                      Understanding your energy patterns helps you schedule important tasks during peak periods and 
                      protect recovery time when energy is low.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* AI Micro-Guidance */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">AI Micro-Guidance System</h2>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Short and Actionable</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Guidance is delivered in ultra-short messages. No paragraphs, no lectures. Just simple suggestions 
                    like "Take a 5-minute walk now" or "Schedule a break in the next hour." Users appreciate brevity 
                    when they're stressed or busy.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Pattern-Based Recommendations</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    The AI learns from your historical data. It recognizes what works for you and what doesn't. 
                    Recommendations become more personalized over time, increasing their relevance and impact.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Right-Time Delivery</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Timing matters. Suggestions are delivered when they're most useful: when stress is rising, when 
                    mood is dropping, or when energy is depleting. Proactive guidance prevents issues before they 
                    escalate.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Use Cases */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Use Cases and Applications</h2>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Check-ins During the Day</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Quick, 10-second check-ins at key moments: morning, midday, evening. Build awareness without 
                    disrupting workflow. Track how your state evolves as the day progresses.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Regulating Pace and Workload</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    When stress and energy data show overload, the system suggests slowing down or redistributing 
                    tasks. This helps prevent burnout and maintains sustainable performance over weeks and months.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Awareness of Emotional State</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Many people operate on autopilot, unaware of their psychological state until it's too late. 
                    StressCore builds moment-to-moment awareness, enabling users to make adjustments before small 
                    issues become big problems.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Role in the Ecosystem */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Role in the Ecosystem</h2>
            <Card className="bg-muted/50">
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-4">
                  StressCore integrates with other components of the BioMath health intelligence platform:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li>
                    <strong>SleepCore:</strong> Stress and mood during the day directly affect sleep quality at night. 
                    Understanding this connection helps users improve both.
                  </li>
                  <li>
                    <strong>MoveCore:</strong> Physical activity can reduce stress and improve mood. StressCore and 
                    MoveCore work together to identify activity patterns that support mental well-being.
                  </li>
                  <li>
                    <strong>VitalCore:</strong> Chronic stress shows up in vital signs like heart rate variability and 
                    resting heart rate. VitalCore uses StressCore data to provide early warnings about stress overload.
                  </li>
                  <li>
                    <strong>BioMath Core:</strong> Advanced analysis of psychological patterns and their impact on 
                    overall health metrics and risk factors.
                  </li>
                  <li>
                    <strong>BioMath Life Platform:</strong> Aggregates stress, mood, and energy data with other health 
                    streams to provide a complete picture of daily well-being.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </section>

          {/* Market Context */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Market Context</h2>
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="pt-6">
                <p className="text-muted-foreground">
                  There is currently a very strong psychological demand in the market for tools that help people 
                  understand and stabilize their mental and emotional state. Work pressure, social complexity, and 
                  information overload create constant stress. People want simple, accessible tools that provide 
                  clarity and guidance without adding to their cognitive load. StressCore addresses this need with 
                  a design philosophy of simplicity, approachability, and actionable insight.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Legal Notice */}
          <section>
            <Card className="bg-muted/30 border-primary/20">
              <CardContent className="pt-6">
                <p className="text-sm text-muted-foreground">
                  <strong>Important Notice:</strong> StressCore (MindCore) is an informational tool and is not a 
                  mental health treatment or diagnostic system. It does not replace therapy, counseling, or medical 
                  intervention for mental health conditions. Users experiencing severe stress, anxiety, depression, 
                  or other mental health issues should consult qualified healthcare professionals. All decisions 
                  regarding mental and emotional health remain the responsibility of the user.
                </p>
              </CardContent>
            </Card>
          </section>
        </div>

        <Footer />
      </div>
  );
};

export default StressCore;
