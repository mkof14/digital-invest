import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  ArrowLeft, ArrowRight, Activity, Bell, BookOpen, Users, Globe,
  Utensils, Layers, Smartphone, ShieldCheck, Languages, Eye,
} from 'lucide-react';
import OptimizedImage from '@/components/OptimizedImage';
import InvestorPageDisclaimer from '@/components/InvestorPageDisclaimer';
import t1dHero from '@/assets/projects/t1d-hero.jpg';

/**
 * T1/2D — A unified platform for daily life with diabetes.
 * Part of the BioMath Life Family. Page is intentionally written without
 * generic AI/healthcare marketing phrasing — content is operational and
 * mirrors the project description provided by the team.
 */
const T1D = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[520px] overflow-hidden">
        <OptimizedImage
          src={t1dHero}
          alt="T1/2D — A unified platform for daily life with diabetes"
          containerClassName="absolute inset-0 w-full h-full"
          className="w-full h-full object-cover"
          showSkeleton={false}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/55 via-background/80 to-background" />

        <div className="relative h-full container mx-auto px-4 flex flex-col justify-center max-w-5xl">
          <Link to="/projects" className="animate-fade-in">
            <Button variant="ghost" size="sm" className="mb-4 hover:bg-background/80 w-fit">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Button>
          </Link>

          <div
            className="animate-fade-in"
            style={{ animationDelay: '0.1s', animationFillMode: 'backwards' }}
          >
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge className="bg-primary/15 text-primary border-primary/30 hover:bg-primary/20">
                Digital Health · Daily Life Infrastructure
              </Badge>
              <Badge variant="outline" className="border-border/60 text-muted-foreground">
                BioMath Life Family
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-5 text-foreground tracking-tight">
              T1/2D
            </h1>
            <p className="text-xl md:text-2xl text-foreground/90 mb-3 max-w-3xl">
              A unified platform for daily life with diabetes.
            </p>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl">
              A practical system that helps people with Type&nbsp;1 and Type&nbsp;2
              diabetes understand what is happening, respond in time, and manage
              daily life with less stress.
            </p>

            <div className="flex gap-3 flex-wrap mt-7">
              <Link to="/start-investing">
                <Button size="lg">
                  Request Information
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link to="/projects/biomathlife">
                <Button size="lg" variant="outline">
                  Part of BioMath Life
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16 max-w-5xl">
        {/* Overview */}
        <section className="mb-16">
          <Card className="border-primary/20 shadow-sm">
            <CardContent className="pt-8 space-y-4">
              <h2 className="text-3xl font-bold mb-2">Overview</h2>
              <p className="text-lg leading-relaxed">
                T1/2D is a unified platform designed to support people living with
                diabetes in everyday life. It is built around one principle:
                reduce the effort required to understand and manage the condition
                on a daily basis.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Most existing solutions focus on collecting and displaying data.
                T1/2D focuses on understanding, timing, clarity, and usability.
                The system operates continuously and translates incoming data
                into simple, actionable context.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Structure of the Platform */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-3">Structure of the platform</h2>
          <p className="text-muted-foreground mb-8 max-w-3xl">
            T1/2D is built as one system with two clearly separated operational
            modes. Both use the same platform, but behavior, messaging and
            interaction differ — so different users are not forced into the same
            experience.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* T1 */}
            <Card className="border-border/60 hover:border-primary/40 transition-colors">
              <CardHeader>
                <Bell className="w-9 h-9 text-primary mb-3" />
                <CardTitle className="flex items-center gap-3">
                  Type&nbsp;1 Mode (T1)
                  <Badge variant="outline" className="text-xs">Timing · Awareness · Response</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-foreground mb-2">Used by</p>
                  <ul className="text-muted-foreground space-y-1.5 text-sm">
                    <li>• Children with Type&nbsp;1 diabetes</li>
                    <li>• Parents</li>
                    <li>• Caregivers</li>
                    <li>• Adults requiring close monitoring</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground mb-2">Key behavior</p>
                  <ul className="text-muted-foreground space-y-1.5 text-sm">
                    <li>• Detects meaningful changes</li>
                    <li>• Highlights risk early</li>
                    <li>• Supports timely response</li>
                    <li>• Provides caregiver visibility when needed</li>
                    <li>• Follows recovery after events</li>
                  </ul>
                </div>
                <p className="text-sm text-foreground/80 border-l-2 border-primary/40 pl-3 italic">
                  Does not overload with constant alerts. Only reacts when
                  necessary.
                </p>
              </CardContent>
            </Card>

            {/* T2 */}
            <Card className="border-border/60 hover:border-primary/40 transition-colors">
              <CardHeader>
                <Activity className="w-9 h-9 text-primary mb-3" />
                <CardTitle className="flex items-center gap-3">
                  Type&nbsp;2 Mode (T2)
                  <Badge variant="outline" className="text-xs">Daily Understanding · Routine</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-foreground mb-2">Used by</p>
                  <ul className="text-muted-foreground space-y-1.5 text-sm">
                    <li>• Adults managing Type&nbsp;2 diabetes</li>
                    <li>• Users focused on stability and habits</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground mb-2">Key behavior</p>
                  <ul className="text-muted-foreground space-y-1.5 text-sm">
                    <li>• Shows simple daily states</li>
                    <li>• Highlights after-meal changes</li>
                    <li>• Identifies patterns over time</li>
                    <li>• Provides low-pressure guidance</li>
                    <li>• Avoids interruption unless needed</li>
                  </ul>
                </div>
                <p className="text-sm text-foreground/80 border-l-2 border-primary/40 pl-3 italic">
                  No alarm-driven experience. No unnecessary noise.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Real-time interpretation */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-3">Real-time interpretation</h2>
          <p className="text-muted-foreground mb-6 max-w-3xl">
            The system translates incoming signals into simple states shown in
            plain language. No technical interpretation required from the user.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Stable', tone: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' },
              { label: 'Changing', tone: 'bg-sky-500/10 text-sky-400 border-sky-500/30' },
              { label: 'Possible risk', tone: 'bg-amber-500/10 text-amber-400 border-amber-500/30' },
              { label: 'Recovery', tone: 'bg-violet-500/10 text-violet-400 border-violet-500/30' },
            ].map((s) => (
              <div
                key={s.label}
                className={`rounded-xl border ${s.tone} p-5 text-center font-semibold`}
              >
                {s.label}
              </div>
            ))}
          </div>
        </section>

        <Separator className="my-12" />

        {/* Daily diary + Nutrition */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Nutrition & daily diary</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-border/60">
              <CardHeader>
                <BookOpen className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Built-in daily diary</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li>• Log meals — breakfast, lunch, dinner, snacks</li>
                  <li>• Track carbohydrates</li>
                  <li>• Track calories and nutrients</li>
                  <li>• Add notes</li>
                  <li>• Record activity</li>
                </ul>
                <p className="text-xs text-muted-foreground/80 mt-4 italic">
                  The system supports incomplete entries and real-life usage.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/60">
              <CardHeader>
                <Layers className="w-8 h-8 text-primary mb-2" />
                <CardTitle>For Type&nbsp;1 users</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li>• Log insulin doses</li>
                  <li>• Record bolus and corrections</li>
                  <li>• Note pump adjustments</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border/60 md:col-span-2">
              <CardHeader>
                <Utensils className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Food & nutrition support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 text-sm">
                  T1/2D includes structured guidance — content is practical and
                  directly usable, not advisory boilerplate.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                  {[
                    'Food recommendations',
                    'Carbohydrate awareness',
                    'Ready meal plans',
                    'Simple recipes',
                    'Vitamin information',
                    'Nutrition information',
                  ].map((i) => (
                    <div
                      key={i}
                      className="rounded-lg border border-border/60 px-3 py-2 text-muted-foreground"
                    >
                      {i}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Family and caregiver */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Family & caregiver support</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-border/60">
              <CardHeader>
                <Users className="w-8 h-8 text-primary mb-2" />
                <CardTitle>For Type&nbsp;1</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li>• Shared awareness is available</li>
                  <li>• Alerts can be forwarded when needed</li>
                  <li>• Control remains with the user or parent</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-border/60">
              <CardHeader>
                <Eye className="w-8 h-8 text-primary mb-2" />
                <CardTitle>For Type&nbsp;2</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li>• Caregiver layer is optional</li>
                  <li>• System remains individual-first</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Daily summaries */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-3">Daily summaries</h2>
          <p className="text-muted-foreground mb-6 max-w-3xl">
            The system provides short, readable summaries. No dashboards. No
            overload.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-xl border border-border/60 bg-muted/20 px-6 py-5">
              <p className="text-foreground font-medium">“1 alert. Responded. Stable.”</p>
            </div>
            <div className="rounded-xl border border-border/60 bg-muted/20 px-6 py-5">
              <p className="text-foreground font-medium">“Mostly stable today. One after-meal rise.”</p>
            </div>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Multilingual */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-3 flex items-center gap-3">
            <Languages className="w-7 h-7 text-primary" />
            Multilingual support
          </h2>
          <p className="text-muted-foreground mb-6 max-w-3xl">
            The platform is designed for global use. All content is structured
            and consistent across languages.
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              'English', 'Spanish', 'Russian', 'Arabic', 'Portuguese', 'French',
              'German', 'Italian', 'Ukrainian', 'Chinese', 'Hindi', 'Japanese', 'Korean',
            ].map((l) => (
              <Badge
                key={l}
                variant="outline"
                className="border-border/60 text-muted-foreground py-1.5 px-3"
              >
                {l}
              </Badge>
            ))}
          </div>
        </section>

        <Separator className="my-12" />

        {/* Design principles */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Design principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-border/60">
              <CardHeader>
                <Smartphone className="w-8 h-8 text-primary mb-2" />
                <CardTitle>What the product is</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li>• Simple</li>
                  <li>• Calm</li>
                  <li>• Readable</li>
                  <li>• Non-clinical</li>
                  <li>• Minimal interaction effort</li>
                  <li>• Mobile-first</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-border/60">
              <CardHeader>
                <ShieldCheck className="w-8 h-8 text-primary mb-2" />
                <CardTitle>What the product avoids</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li>• Charts as default surface</li>
                  <li>• Dashboards</li>
                  <li>• Complex controls</li>
                  <li>• Medical terminology overload</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Technology structure */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Technology structure</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Real-time data ingestion',
              'Interpretation layer',
              'Mode-based behavior (T1 / T2)',
              'Modular backend',
              'Multilingual content system',
              'Device integration layer',
              'Scalable architecture',
            ].map((row) => (
              <div
                key={row}
                className="rounded-lg border border-border/60 px-5 py-3.5 text-sm text-foreground bg-muted/10"
              >
                {row}
              </div>
            ))}
          </div>
        </section>

        <Separator className="my-12" />

        {/* Why this project matters */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Why this project matters</h2>
          <Card className="border-border/60">
            <CardContent className="pt-8 space-y-5 text-muted-foreground leading-relaxed">
              <p className="text-lg text-foreground">
                Diabetes is managed every day, not occasionally.
              </p>
              <p>
                Existing tools require constant attention, manual interpretation
                and continuous user effort. T1/2D reduces that effort.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="rounded-lg border border-border/60 p-4">
                  <p className="text-foreground font-semibold mb-1">Clarity</p>
                  <p className="text-sm">Instead of data overload.</p>
                </div>
                <div className="rounded-lg border border-border/60 p-4">
                  <p className="text-foreground font-semibold mb-1">Timing</p>
                  <p className="text-sm">Instead of constant monitoring.</p>
                </div>
                <div className="rounded-lg border border-border/60 p-4">
                  <p className="text-foreground font-semibold mb-1">Support</p>
                  <p className="text-sm">Instead of pressure.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Expected impact */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Expected impact</h2>
          <ul className="space-y-3">
            {[
              'Fewer missed critical moments (T1)',
              'Clearer daily understanding (T2)',
              'Reduced stress for users and families',
              'More consistent daily control',
              'Better long-term habits',
            ].map((row) => (
              <li
                key={row}
                className="flex items-start gap-3 rounded-lg border border-border/60 bg-muted/10 px-5 py-3"
              >
                <span className="mt-1.5 inline-block w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-foreground">{row}</span>
              </li>
            ))}
          </ul>
        </section>

        <Separator className="my-12" />

        {/* CTA */}
        <section className="mb-16">
          <Card className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-primary/20">
            <CardContent className="py-12 text-center">
              <h2 className="text-3xl font-bold mb-3">
                T1/2D is part of the BioMath Life Family
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                A focused operational layer for daily diabetes management,
                built on the same data principles as the rest of the BioMath
                Life portfolio.
              </p>
              <div className="flex gap-3 justify-center flex-wrap">
                <Link to="/start-investing">
                  <Button size="lg">
                    Request Information
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/projects">
                  <Button size="lg" variant="outline">
                    <Globe className="w-4 h-4 mr-2" />
                    All BioMath Life Family
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>

        <div className="mt-16">
          <InvestorPageDisclaimer />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default T1D;
