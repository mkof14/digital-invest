import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Activity, TrendingUp, Clock, AlertCircle, Target, Zap, ArrowLeft } from 'lucide-react';
import OptimizedImage from '@/components/OptimizedImage';
import movecoreHero from '@/assets/projects/movecore-hero.jpg';

const MoveCore = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
        <Navigation />

        {/* Hero Section */}
        <div className="relative h-[60vh] min-h-[500px] overflow-hidden">
          <OptimizedImage
            src={movecoreHero}
            alt="MoveCore - Movement and activity intelligence platform"
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
                Daily Life
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-orange-animated">
                MoveCore
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl">
                Movement and activity intelligence layer tracking steps, activity levels, and providing behavioral nudges
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
                MoveCore is the basic movement and activity layer of our ecosystem. Modern life involves long periods 
                of sitting and inactivity, which have significant negative effects on health, energy, cognition, and 
                mood. Small amounts of movement throughout the day can counteract these effects.
              </p>
              <p>
                The platform tracks steps, activity levels, and micro-movements. It detects patterns of inactivity 
                and provides simple prompts to encourage healthy movement habits: "Stand up now," "Walk for 5 minutes," 
                or "Take a break." These behavioral nudges help users break sedentary periods without disrupting their 
                workflow or daily routines.
              </p>
            </div>
          </section>

          {/* Key Features Grid */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Core Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <Activity className="w-10 h-10 text-primary mb-2" />
                  <CardTitle>Step Tracking</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Continuous step counting throughout the day. Daily, weekly, and monthly totals. Goal setting 
                    and achievement tracking. Historical trends and progress visualization.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <TrendingUp className="w-10 h-10 text-primary mb-2" />
                  <CardTitle>Activity Level</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Measurement of overall activity intensity: sedentary, light, moderate, vigorous. Active minutes 
                    throughout the day. Comparison against health guidelines and personal baselines.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Clock className="w-10 h-10 text-primary mb-2" />
                  <CardTitle>Inactivity Detection</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Identification of prolonged sitting or sedentary periods. Real-time alerts when inactivity 
                    exceeds healthy thresholds. Prevention of extended immobility.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <AlertCircle className="w-10 h-10 text-primary mb-2" />
                  <CardTitle>Simple Prompts</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Brief, actionable messages: "Stand up now," "Walk for 5 minutes," "Stretch briefly." Timed to 
                    appear when most effective. Non-intrusive but attention-getting.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Target className="w-10 h-10 text-primary mb-2" />
                  <CardTitle>Micro-Movements</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Tracking of small movements that don't register as steps but contribute to overall activity: 
                    fidgeting, standing, shifting position. Every bit of movement counts.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Zap className="w-10 h-10 text-primary mb-2" />
                  <CardTitle>Energy and Focus</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Movement breaks improve energy and mental clarity. MoveCore prompts timed movement to reset 
                    attention, reduce fatigue, and maintain cognitive performance.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Why Movement Matters */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Why Low-Level Movement Throughout the Day Matters</h2>
            <Card className="bg-muted/50">
              <CardContent className="pt-6">
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Research consistently shows that prolonged sitting and inactivity are harmful, even for people 
                    who exercise regularly. The negative effects accumulate over hours: reduced metabolic rate, 
                    increased insulin resistance, decreased circulation, muscle tension, and cognitive decline.
                  </p>
                  <p>
                    The solution is not necessarily long exercise sessions (though those are valuable). Instead, it's 
                    frequent, brief movement throughout the day. Standing up every hour, walking for a few minutes, 
                    or doing light stretches can significantly counteract the harms of sitting.
                  </p>
                  <p>
                    MoveCore focuses on this continuous low-level activity. It's designed for people with desk jobs, 
                    long meetings, extended travel, or other situations where movement is naturally limited. The goal 
                    is to make movement a constant, effortless part of daily life rather than a separate activity 
                    requiring significant time or effort.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Behavioral Nudges */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Behavioral Nudges and Prompts</h2>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Simple and Direct Messages</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Prompts are ultra-short and specific: "Stand up now," "Walk to the window," "Take 10 steps." 
                    No explanations, no justifications. Just clear instructions that take seconds to execute.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Timed to Inactivity Periods</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    MoveCore tracks how long you've been stationary. When the period exceeds healthy limits (typically 
                    45-60 minutes), a gentle prompt appears. This timing ensures the nudge is relevant and useful.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Non-Intrusive but Effective</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Prompts are designed to get attention without being annoying. They can be dismissed if timing is 
                    bad, but they return if inactivity continues. The balance is between persistent encouragement and 
                    respect for the user's autonomy.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Building Habits Through Repetition</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Over weeks and months, these frequent prompts build automatic movement habits. Users begin to stand 
                    up or walk briefly without needing reminders. The external nudge becomes an internal routine.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Fit in Daily Life */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Fit in Daily Life</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Desk Work and Office Environments</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Standing desks, walking meetings, brief stretches between tasks. MoveCore integrates seamlessly 
                    into office routines, helping workers stay active without leaving their workspace.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Long Sessions and Focus Work</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Deep work requires concentration, but extended immobility reduces cognitive performance. Brief 
                    movement breaks every hour reset attention and maintain mental clarity.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Travel and Commuting</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Long flights, train rides, or car trips involve prolonged sitting. MoveCore reminds users to 
                    stand, stretch, or walk briefly during stops and breaks.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Daily Routines and Household Activities</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Encouraging movement during leisure time: walking instead of driving short distances, taking 
                    stairs, moving while on phone calls. Small choices that accumulate.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Integration */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Integration with Health Ecosystem</h2>
            <Card className="bg-muted/50">
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-4">
                  MoveCore integrates with other components of the BioMath platform to provide comprehensive health intelligence:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li>
                    <strong>SleepCore:</strong> Physical activity during the day improves sleep quality and duration. 
                    MoveCore data helps SleepCore understand when and how much activity supports better rest.
                  </li>
                  <li>
                    <strong>StressCore/MindCore:</strong> Movement reduces stress and improves mood. Walking breaks 
                    and physical activity are simple interventions for managing psychological state.
                  </li>
                  <li>
                    <strong>VitalCore:</strong> Activity levels affect heart rate, HRV, and overall cardiovascular 
                    health. MoveCore provides critical input for VitalCore's early warning system.
                  </li>
                  <li>
                    <strong>BioMath Core:</strong> Advanced analysis of movement patterns and their relationship to 
                    metabolic health, cardiovascular risk, and cognitive performance.
                  </li>
                  <li>
                    <strong>BioMath Life Platform:</strong> Aggregates movement data with sleep, stress, and vital 
                    signs to provide a complete picture of daily health and well-being.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </section>

          {/* Legal Notice */}
          <section>
            <Card className="bg-muted/30 border-primary/20">
              <CardContent className="pt-6">
                <p className="text-sm text-muted-foreground">
                  <strong>Important Notice:</strong> MoveCore is an informational tool and activity tracking system. 
                  It is not a medical device and does not diagnose, treat, or prevent any medical condition. Users 
                  with mobility limitations, cardiovascular conditions, or other health concerns should consult 
                  qualified healthcare professionals before making significant changes to their activity levels. All 
                  decisions regarding physical activity and exercise remain the responsibility of the user.
                </p>
              </CardContent>
            </Card>
          </section>
        </div>

        <Footer />
      </div>
  );
};

export default MoveCore;
