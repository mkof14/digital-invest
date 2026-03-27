import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  ArrowLeft,
  Globe,
  Heart,
  Utensils,
  Activity,
  Smile,
  Sun,
  CheckCircle2,
  Users,
  Target,
  Sparkles,
  Clock,
  Lightbulb,
  Shield
} from "lucide-react";
import itsgoodtodayLogo from "@/assets/itsgoodtoday-logo.png";
import itsgoodtodayHero from "@/assets/projects/itsgoodtoday-hero.jpg";
import DownloadInvestorBriefButton from "@/components/DownloadInvestorBriefButton";
import OptimizedImage from "@/components/OptimizedImage";
import InvestorPageDisclaimer from "@/components/InvestorPageDisclaimer";

const ItsGoodToday = () => {
  return (
    <div className="min-h-screen bg-background theme-itsgoodtoday">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="relative py-32 -mx-4 px-4 overflow-hidden mb-16">
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url(${itsgoodtodayHero})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[hsl(30,50%,8%)]/95 via-background/90 to-background/60" />
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
                src={itsgoodtodayLogo} 
                alt="It's Good Today logo" 
                className="w-20 h-20 md:w-24 md:h-24 object-contain"
                showSkeleton={false}
              />
              <div>
                <Badge className="mb-2 project-badge">Daily Wellness Platform</Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-foreground">
                  It's Good Today
                </h1>
              </div>
            </div>
            <p className="text-2xl text-foreground mb-4">
              Your Simple Daily Wellness Companion
            </p>
            <p className="text-xl text-muted-foreground max-w-3xl mb-8">
              A lightweight, positive lifestyle tool helping people feel better through small, achievable daily actions 
              related to food, movement, mood, and lifestyle. Today is good. Tomorrow can be a little better.
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
                <a href="https://www.itsgoodtoday.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Globe className="h-5 w-5" />
                  itsgoodtoday.com
                </a>
              </Button>
              <DownloadInvestorBriefButton projectSlug="itsgoodtoday" size="lg" />
            </div>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="mb-16 -mt-8">
          <Card className="border-primary/20 shadow-lg">
            <CardContent className="pt-8 space-y-4">
              <h2 className="text-3xl font-bold mb-4">Overview</h2>
              <p className="text-lg leading-relaxed">
                It's Good Today is a simple daily wellness platform that helps people feel better through small, 
                achievable daily actions related to food, movement, mood, and lifestyle. The product is designed 
                to support everyday wellbeing without medical claims, diagnoses, or complex tracking.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                It's Good Today is not a medical service. It's a daily wellness companion, a lightweight, positive 
                lifestyle tool, a "small steps" product — not a transformation program. The platform avoids pressure, 
                competition, and over-optimization.
              </p>
              <div className="bg-primary/10 rounded-lg p-6 mt-6">
                <p className="text-xl font-semibold text-center text-primary">
                  "Today is good. Tomorrow can be a little better."
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Target Audience */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Who It Serves</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-primary/20">
              <CardHeader>
                <Users className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Individuals & Families</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  B2C focused platform serving individuals and families looking for simple wellness support.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <Globe className="w-12 h-12 text-primary mb-4" />
                <CardTitle>US-Based Users</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Primary focus on US market with English-only interface and culturally relevant content.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <Target className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Ages 25–55</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Busy professionals and parents seeking better daily structure without complexity.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <Heart className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Simplicity Seekers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Users tired of diets, complex trackers, and complicated wellness apps.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Product Principles */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Product Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-primary/20">
              <CardHeader>
                <Sparkles className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Extreme Simplicity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Minimal cognitive load with clear visual hierarchy. Every interaction is intuitive and quick.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <Shield className="w-10 h-10 text-primary mb-2" />
                <CardTitle>No Medical Language</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  No diagnoses, no fear-based metrics, no health claims. Just supportive daily guidance.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <Sun className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Focus on Today</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  No long-term scoring or complex tracking. Just focus on making today a little bit better.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Core Modules */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Core Product Structure</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-primary/20">
              <CardHeader>
                <Sun className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Home / Today Screen</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Main purpose: give the user one clear focus for the day.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Today's Focus (1 short sentence)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    One Simple Action
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Day Status: Good / Better / Best
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Mark Today as Done
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <Utensils className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Food Module</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Simple, realistic eating — not dieting. Balance over restriction.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Easy food suggestions for the day
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Meal ideas without calories or macros
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Home cooking, takeout, restaurant-friendly
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    No calorie counting, no diet plans
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <Activity className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Movement Module</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Movement, not workouts. No gym programs, no performance pressure.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Light activity suggestions
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Walking prompts
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Stretching and short mobility
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    5–15 minute activity ideas
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <Smile className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Mood & Energy Module</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Awareness, not measurement. Gentle suggestions for better days.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Quick check-in: How do you feel today?
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Simple scale: Low / OK / Good
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Gentle suggestions: breathe, hydrate, pause
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Sleep better recommendations
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Daily Insight */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Daily Insight</h2>
          <Card className="border-primary/20">
            <CardContent className="pt-8">
              <div className="flex items-start gap-6">
                <Lightbulb className="w-16 h-16 text-primary flex-shrink-0" />
                <div>
                  <p className="text-lg text-muted-foreground mb-4">
                    One short insight per day (1–2 sentences). Practical and calm. No motivational clichés. No philosophy.
                  </p>
                  <div className="bg-muted/50 rounded-lg p-6">
                    <p className="text-lg italic text-foreground">
                      "Consistency matters more than intensity."
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* UX/UI & Design */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">UX / UI Design Philosophy</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle>Interface Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Clean, light interface
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Large typography
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Card-based layout
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Minimal text
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Clear spacing
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Emotionally calm design
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle>Visual Tone</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Warm and human
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Daily-life friendly
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Not medical, not fitness-heavy
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Supportive, not instructive
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    No comparisons between users
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    No promises of life transformation
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Market Context */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Market Context & Differentiation</h2>
          <Card className="border-primary/20">
            <CardContent className="pt-8">
              <p className="text-lg text-muted-foreground mb-6">
                It's Good Today sits in the wellness and lifestyle space, addressing the gap between complex health apps 
                and simple reminders. The market is full of tools focused on isolated tasks or aggressive optimization.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">What Makes It Unique</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-1" />
                      Focus on daily execution, not long-term theory
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-1" />
                      Unified workflow instead of multiple disconnected tools
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-1" />
                      Designed for gradual, measurable improvement
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-1" />
                      No pressure, no competition, no over-optimization
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Business Model</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-1" />
                      Direct-to-consumer SaaS platform
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-1" />
                      Free + Premium subscription model
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-1" />
                      Premium features: personalization, family, integrations
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-1" />
                      Current stage: Free MVP
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Investment Opportunity */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Investment Opportunity</h2>
          <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/30">
            <CardContent className="pt-8 space-y-6">
              <p className="text-lg leading-relaxed">
                It's Good Today represents an opportunity to invest in the growing wellness technology sector 
                with a differentiated, user-friendly approach. The platform targets a clear market gap with 
                a scalable SaaS model.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-background/50 rounded-lg">
                  <Clock className="w-10 h-10 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Current Stage</h4>
                  <p className="text-sm text-muted-foreground">Live MVP with active users</p>
                </div>
                <div className="text-center p-6 bg-background/50 rounded-lg">
                  <Target className="w-10 h-10 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Near-Term</h4>
                  <p className="text-sm text-muted-foreground">Improve onboarding & activation</p>
                </div>
                <div className="text-center p-6 bg-background/50 rounded-lg">
                  <Sparkles className="w-10 h-10 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Mid-Term</h4>
                  <p className="text-sm text-muted-foreground">Deeper personalization & integrations</p>
                </div>
              </div>
              <div className="flex gap-4 flex-wrap justify-center pt-4">
                <Link to="/start-investing">
                  <Button size="lg">
                    Request Investment Information
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/schedule">
                  <Button size="lg" variant="outline">
                    Schedule a Call
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Legal Disclaimer */}
        <InvestorPageDisclaimer />
      </main>

      <Footer />
    </div>
  );
};

export default ItsGoodToday;
