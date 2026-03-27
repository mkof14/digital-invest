import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Calendar,
  BarChart3,
  Target,
  CheckCircle2,
  Brain,
  Database,
  Cpu,
  Users,
  Globe,
  Activity,
  Rocket,
  AlertCircle,
  ArrowLeft,
  Clock,
  TrendingUp,
  Lightbulb,
  Sparkles,
  Zap
} from "lucide-react";
import mydayLogo from "@/assets/myday-logo.png";
import mydayHero from "@/assets/projects/myday-hero.jpg";
import DownloadInvestorBriefButton from "@/components/DownloadInvestorBriefButton";
import OptimizedImage from "@/components/OptimizedImage";
import InvestorPageDisclaimer from "@/components/InvestorPageDisclaimer";

const MyDay = () => {
  return (
    <div className="min-h-screen bg-background theme-myday">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="relative py-32 -mx-4 px-4 overflow-hidden mb-16">
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url(${mydayHero})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/90 to-background/70" />
          </div>

          <div className="relative z-10 max-w-4xl">
            <Link to="/projects" className="animate-fade-in">
              <Button variant="ghost" size="sm" className="mb-6 hover:bg-background/80">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Projects
              </Button>
            </Link>
            <div className="animate-fade-in" style={{ animationDelay: '0.1s', animationFillMode: 'backwards' }}>
              <div className="flex items-center gap-6 mb-8">
              <OptimizedImage 
                src={mydayLogo} 
                alt="MyDay logo" 
                className="w-20 h-20 md:w-24 md:h-24 object-contain"
                showSkeleton={false}
              />
              <div>
                <Badge className="mb-2">AI Daily Planning Platform</Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-foreground">
                  MyDay
                </h1>
              </div>
            </div>
            <p className="text-2xl text-foreground mb-4">
              Your Personal Daily Operating System
            </p>
            <p className="text-xl text-muted-foreground max-w-3xl mb-8">
              MyDay transforms daily planning through AI-driven insights, habit tracking, and behavioral optimization. 
              From structured routines to nutrition logging - making better daily decisions simple, 
              measurable, and consistently improving.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link to="/start-investing">
                <Button size="lg">
                  Request Information
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-primary/30 hover:border-primary"
              >
                <a href="https://myday.live" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Globe className="h-5 w-5" />
                  myday.live
                </a>
              </Button>
              <DownloadInvestorBriefButton projectSlug="myday" size="lg" />
            </div>
            </div>
          </div>
        </section>

        {/* Overview - Positioned High */}
        <section className="mb-16 -mt-8">
          <Card className="border-primary/20 shadow-lg">
            <CardContent className="pt-8 space-y-4">
              <h2 className="text-3xl font-bold mb-4">Overview</h2>
              <p className="text-lg leading-relaxed">
                MyDay is an AI-powered daily planning and habit optimization platform designed to help individuals 
                structure their day, track routines, nutrition, and behaviors, and turn everyday data into actionable insights. 
                The platform focuses on practical daily execution rather than abstract goal setting.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Unlike generic productivity apps or simple habit trackers, MyDay integrates structured planning, 
                behavioral tracking, and AI-driven feedback into a single, cohesive workflow. The system identifies 
                patterns, correlations, and opportunities for improvement based on real behavior, not assumptions.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Core Mission */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Core Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-primary/20">
              <CardHeader>
                <Calendar className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Structure Daily Execution</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Remove chaos from daily planning. Transform routines from scattered intentions into 
                  structured, trackable workflows. Make daily execution clear, simple, and consistent.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <Brain className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Intelligence-Driven Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Apply AI to behavioral patterns, identifying what actually works for you. 
                  Move from guessing to knowing with data-driven recommendations based on your real behavior.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <TrendingUp className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Gradual Improvement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Focus on measurable, incremental progress rather than radical change. 
                  Build sustainable habits through continuous feedback and adaptive guidance.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* How the Platform Works */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">How the Platform Works</h2>
          <div className="space-y-6">
            <Card className="border-primary/20">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                    1
                  </div>
                  <CardTitle className="text-xl">Plan Your Day</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Users structure their daily intentions, set priorities, and define what matters. 
                  The platform provides templates and suggestions based on your goals and past patterns, 
                  making planning quick and purposeful.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                    2
                  </div>
                  <CardTitle className="text-xl">Log Key Activities</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Track habits, meals, routines, and behaviors throughout the day. Simple logging 
                  captures what you actually do - nutrition, exercise, sleep, productivity, and more. 
                  The system learns from your inputs to understand your patterns.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                    3
                  </div>
                  <CardTitle className="text-xl">Receive AI Insights</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Get continuous feedback through AI-generated insights. Daily and weekly summaries 
                  identify patterns, correlations, and optimization opportunities based on your real 
                  behavior data, not generic advice.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                    4
                  </div>
                  <CardTitle className="text-xl">Improve Over Time</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  The system continuously refines recommendations based on what works for you. 
                  Progress tracking shows trends, and AI suggestions become more personalized 
                  as it learns your patterns and preferences.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Technology & Systems */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Technology & Architecture</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-primary/20">
              <CardHeader>
                <Cpu className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Cloud-Based SaaS Platform</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Modern, scalable infrastructure designed for reliability and performance. 
                  Access your data anywhere, with real-time synchronization across devices 
                  and secure cloud storage.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Real-time data synchronization</li>
                  <li>• Cross-device accessibility</li>
                  <li>• Secure cloud infrastructure</li>
                  <li>• 99.9% uptime target</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <Brain className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Modular AI Services</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Specialized AI modules for different aspects of daily optimization - 
                  from habit analysis to nutrition insights. Each module improves independently 
                  while contributing to holistic recommendations.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Behavioral pattern recognition</li>
                  <li>• Correlation analysis</li>
                  <li>• Personalized recommendations</li>
                  <li>• Continuous learning models</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <BarChart3 className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Event-Driven Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Every action generates insights. The analytics engine processes behavioral 
                  data in real-time, identifying trends and correlations that manual 
                  tracking would miss.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Real-time event processing</li>
                  <li>• Trend detection algorithms</li>
                  <li>• Progress visualization</li>
                  <li>• Custom reporting</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <Database className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Scalable Architecture</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Built for growth with secure authentication, subscription management, 
                  and infrastructure that scales with user demand. Designed for gradual 
                  feature expansion without disruption.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Secure authentication</li>
                  <li>• Subscription management</li>
                  <li>• Auto-scaling infrastructure</li>
                  <li>• Modular feature deployment</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Key Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Key Features & Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-primary/20">
              <CardHeader>
                <Calendar className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Daily Planning & Routines</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Structure your day with intention. Create routines, set priorities, and 
                  build consistent habits with templates and AI-assisted planning.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <Target className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Habit & Behavior Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Log habits, track behaviors, and monitor consistency. Simple, quick input 
                  captures what matters without overwhelming complexity.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <Activity className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Meal & Nutrition Logging</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Track what you eat with simple meal logging. Understand nutrition patterns 
                  and how food choices correlate with energy and productivity.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <Lightbulb className="w-10 h-10 text-primary mb-2" />
                <CardTitle>AI-Generated Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Receive daily and weekly AI insights based on your actual behavior. 
                  Discover patterns you didn't know existed and get actionable recommendations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <BarChart3 className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Progress Summaries</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Visual progress tracking shows trends over time. Understand what's working, 
                  identify areas for improvement, and celebrate consistent wins.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <Sparkles className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Subscription Tiers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Flexible plans (Free, Plus, Pro) provide access to features that match 
                  your needs. Start free and upgrade as you grow.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Operational Model */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Operational Model</h2>
          <Card className="border-primary/20">
            <CardContent className="pt-8 space-y-6">
              <p className="text-lg leading-relaxed">
                MyDay operates as a direct-to-consumer SaaS platform with a free trial and monthly subscriptions. 
                Product development follows a data-driven loop: measure user behavior, improve activation and 
                retention, and iteratively refine features based on real usage.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <Zap className="w-10 h-10 text-primary mx-auto mb-2" />
                  <h4 className="font-semibold mb-2">Free Trial</h4>
                  <p className="text-sm text-muted-foreground">Start with core features at no cost</p>
                </div>
                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <TrendingUp className="w-10 h-10 text-primary mx-auto mb-2" />
                  <h4 className="font-semibold mb-2">Data-Driven Development</h4>
                  <p className="text-sm text-muted-foreground">Features shaped by real user behavior</p>
                </div>
                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <Activity className="w-10 h-10 text-primary mx-auto mb-2" />
                  <h4 className="font-semibold mb-2">Continuous Improvement</h4>
                  <p className="text-sm text-muted-foreground">Regular updates based on feedback</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Who It Serves */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Who It Serves</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-primary/20">
              <CardHeader>
                <Users className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Structure Seekers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Individuals seeking better daily structure and consistency. People who want 
                  to turn chaotic days into organized, intentional routines.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <Target className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Habit Builders</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Users interested in habit formation and self-optimization. Those who want 
                  to build lasting behaviors through tracking and feedback.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <Lightbulb className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Simplicity Lovers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  People who want simple, AI-assisted guidance without complexity. Users 
                  looking for straightforward tools that just work.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <Rocket className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Early Adopters</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Early adopters of AI-powered productivity and wellness tools. Innovators 
                  who embrace new approaches to personal optimization.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Market Context */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Market Context & Uniqueness</h2>
          <Card className="border-primary/20">
            <CardContent className="pt-8 space-y-6">
              <p className="text-lg leading-relaxed">
                MyDay sits at the intersection of productivity, habit tracking, and AI-assisted personal 
                optimization. The market is fragmented, with many tools focusing on isolated tasks; 
                MyDay addresses the gap between planning, execution, and feedback in a single system.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    What Makes MyDay Unique
                  </h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-primary mt-1 shrink-0" />
                      Focus on daily execution, not long-term theory
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-primary mt-1 shrink-0" />
                      AI insights grounded in real user behavior
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-primary mt-1 shrink-0" />
                      Unified workflow instead of multiple disconnected tools
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-primary mt-1 shrink-0" />
                      Designed for gradual, measurable improvement
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg flex items-center gap-2">
                    <Target className="w-5 h-5 text-primary" />
                    Market Position
                  </h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-primary mt-1 shrink-0" />
                      Productivity + Habit Tracking + AI Insights combined
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-primary mt-1 shrink-0" />
                      Addresses fragmented tool landscape
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-primary mt-1 shrink-0" />
                      Bridges planning and execution gap
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-primary mt-1 shrink-0" />
                      Continuous feedback loop creates stickiness
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Long-Term Vision */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Long-Term Vision</h2>
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
            <CardContent className="pt-8 space-y-6">
              <p className="text-lg leading-relaxed">
                To evolve into a personal daily operating system that continuously adapts to user behavior, 
                integrates additional data sources, and provides increasingly precise, personalized guidance over time.
              </p>
              <div className="mt-8">
                <h4 className="font-semibold text-lg mb-4">Roadmap</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="border-primary/30 bg-card/50">
                    <CardHeader>
                      <Badge variant="outline" className="w-fit mb-2">Current Stage</Badge>
                      <CardTitle className="text-lg">Live MVP</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Active users, subscriptions enabled, analytics and growth infrastructure in place.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-primary/30 bg-card/50">
                    <CardHeader>
                      <Badge variant="outline" className="w-fit mb-2">Near-Term</Badge>
                      <CardTitle className="text-lg">Activation & Retention</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Improve onboarding, expand AI insight depth, strengthen retention mechanisms.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-primary/30 bg-card/50">
                    <CardHeader>
                      <Badge variant="outline" className="w-fit mb-2">Mid-Term</Badge>
                      <CardTitle className="text-lg">Advanced Intelligence</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Advanced correlations, deeper personalization, selective external data integrations.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Important Notices */}
        <section className="mb-16">
          <Card className="border-yellow-500/30 bg-yellow-500/5">
            <CardHeader>
              <div className="flex items-center gap-3">
                <AlertCircle className="w-8 h-8 text-yellow-500" />
                <CardTitle className="text-xl">Important Notices</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p>
                <strong>Platform Status:</strong> MyDay is a live platform with active users and ongoing development. 
                Features and capabilities continue to evolve based on user feedback and data.
              </p>
              <p>
                <strong>Not Medical Advice:</strong> MyDay provides general wellness tracking and insights. 
                It is not a medical device and does not provide medical advice. Consult healthcare 
                professionals for medical decisions.
              </p>
              <p>
                <strong>Investment Information:</strong> Information on this page is for informational purposes only 
                and does not constitute an offer to sell or a solicitation of an offer to buy any securities.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Call to Action */}
        <section className="text-center py-12">
          <h2 className="text-3xl font-bold mb-4">Interested in MyDay?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Learn more about investment opportunities in this AI-powered daily planning platform.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/start-investing">
              <Button size="lg">
                Request Information
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" asChild>
              <a href="https://myday.live" target="_blank" rel="noopener noreferrer">
                <Globe className="mr-2 w-5 h-5" />
                Visit myday.live
              </a>
            </Button>
          </div>
        </section>

        {/* Legal Disclaimer */}
        <div className="mt-8">
          <InvestorPageDisclaimer />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MyDay;
