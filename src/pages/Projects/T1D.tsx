import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  ArrowLeft, ArrowRight, Activity, Bell, BookOpen, Users, Globe,
  Utensils, Layers, Smartphone, ShieldCheck, Languages, Eye,
  Radio, Brain, GitBranch, HeartHandshake,
} from 'lucide-react';
import OptimizedImage from '@/components/OptimizedImage';
import InvestorPageDisclaimer from '@/components/InvestorPageDisclaimer';
import t1dHero from '@/assets/projects/t1d-hero.jpg';
import t1dVisual from '@/assets/projects/t1d-visual.jpg';

/**
 * T1/2D — A unified platform for daily life with diabetes.
 * Part of the BioMath Life Family. Multilingual via projectT1D namespace.
 */
const T1D = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tp = (k: string) => t(`projectT1D.${k}`);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[520px] overflow-hidden">
        <OptimizedImage
          src={t1dHero}
          alt="T1/2D — daily life with diabetes platform"
          containerClassName="absolute inset-0 w-full h-full"
          className="w-full h-full object-cover"
          showSkeleton={false}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/55 via-background/80 to-background" />
        {/* Animated gradient blobs */}
        <div className="absolute -top-24 -left-24 w-[420px] h-[420px] bg-primary/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[380px] h-[380px] bg-amber-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />

        <div className="relative h-full container mx-auto px-4 flex flex-col justify-center max-w-5xl">
          <Link to="/projects" className="animate-fade-in">
            <Button variant="ghost" size="sm" className="mb-4 hover:bg-background/80 w-fit">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t('projectCommon.backToProjects')}
            </Button>
          </Link>

          <div className="animate-fade-in" style={{ animationDelay: '0.1s', animationFillMode: 'backwards' }}>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge className="bg-primary/15 text-primary border-primary/30 hover:bg-primary/20">
                {tp('badge')}
              </Badge>
              <Badge variant="outline" className="border-border/60 text-muted-foreground">
                {tp('familyBadge')}
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-5 text-foreground tracking-tight bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text">
              {tp('heroTitle')}
            </h1>
            <p className="text-xl md:text-2xl text-foreground/90 mb-3 max-w-3xl">
              {tp('heroSubtitle')}
            </p>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl">
              {tp('heroDesc')}
            </p>

            <div className="flex gap-3 flex-wrap mt-7">
              <Link to="/start-investing">
                <Button size="lg">
                  {tp('ctaPrimary')}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link to="/projects/biomathlife">
                <Button size="lg" variant="outline">
                  {tp('ctaSecondary')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16 max-w-5xl">
        {/* Overview */}
        <section className="mb-16">
          <Card className="border-primary/20 shadow-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-amber-500/5 pointer-events-none" />
            <CardContent className="pt-8 space-y-4 relative">
              <h2 className="text-3xl font-bold mb-2">{tp('overviewTitle')}</h2>
              <p className="text-lg leading-relaxed">{tp('overviewP1')}</p>
              <p className="text-lg text-muted-foreground leading-relaxed">{tp('overviewP2')}</p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Structure */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-3">{tp('structureTitle')}</h2>
          <p className="text-muted-foreground mb-8 max-w-3xl">{tp('structureDesc')}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* T1 */}
            <Card className="border-border/60 hover:border-primary/40 transition-all hover:shadow-lg group">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                  <Bell className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="flex flex-wrap items-center gap-3">
                  {tp('t1Mode')}
                  <Badge variant="outline" className="text-xs">{tp('t1Tag')}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-foreground mb-2">{tp('usedBy')}</p>
                  <ul className="text-muted-foreground space-y-1.5 text-sm">
                    {[1,2,3,4].map(i => <li key={i}>• {tp(`t1Used${i}`)}</li>)}
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground mb-2">{tp('keyBehavior')}</p>
                  <ul className="text-muted-foreground space-y-1.5 text-sm">
                    {[1,2,3,4,5].map(i => <li key={i}>• {tp(`t1Beh${i}`)}</li>)}
                  </ul>
                </div>
                <p className="text-sm text-foreground/80 border-l-2 border-primary/40 pl-3 italic">{tp('t1Note')}</p>
              </CardContent>
            </Card>

            {/* T2 */}
            <Card className="border-border/60 hover:border-primary/40 transition-all hover:shadow-lg group">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mb-3 group-hover:bg-amber-500/20 transition-colors">
                  <Activity className="w-6 h-6 text-amber-500" />
                </div>
                <CardTitle className="flex flex-wrap items-center gap-3">
                  {tp('t2Mode')}
                  <Badge variant="outline" className="text-xs">{tp('t2Tag')}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-foreground mb-2">{tp('usedBy')}</p>
                  <ul className="text-muted-foreground space-y-1.5 text-sm">
                    {[1,2].map(i => <li key={i}>• {tp(`t2Used${i}`)}</li>)}
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground mb-2">{tp('keyBehavior')}</p>
                  <ul className="text-muted-foreground space-y-1.5 text-sm">
                    {[1,2,3,4,5].map(i => <li key={i}>• {tp(`t2Beh${i}`)}</li>)}
                  </ul>
                </div>
                <p className="text-sm text-foreground/80 border-l-2 border-amber-500/40 pl-3 italic">{tp('t2Note')}</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Real-time interpretation */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-3">{tp('rtTitle')}</h2>
          <p className="text-muted-foreground mb-6 max-w-3xl">{tp('rtDesc')}</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { key: 'stateStable', tone: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' },
              { key: 'stateChanging', tone: 'bg-sky-500/10 text-sky-400 border-sky-500/30' },
              { key: 'stateRisk', tone: 'bg-amber-500/10 text-amber-400 border-amber-500/30' },
              { key: 'stateRecovery', tone: 'bg-violet-500/10 text-violet-400 border-violet-500/30' },
            ].map((s) => (
              <div
                key={s.key}
                className={`rounded-xl border ${s.tone} p-5 text-center font-semibold transition-transform hover:scale-105`}
              >
                {tp(s.key)}
              </div>
            ))}
          </div>
        </section>

        <Separator className="my-12" />

        {/* Architecture infographic */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-3">{tp('archTitle')}</h2>
          <p className="text-muted-foreground mb-8 max-w-3xl">{tp('archDesc')}</p>

          <Card className="border-border/60 overflow-hidden">
            <div className="relative">
              <OptimizedImage
                src={t1dVisual}
                alt="T1/2D system flow"
                containerClassName="absolute inset-0 w-full h-full"
                className="w-full h-full object-cover opacity-40"
                showSkeleton={false}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90" />

              <div className="relative grid grid-cols-2 md:grid-cols-4 gap-4 p-8">
                {[
                  { icon: Radio, key: 'archSignals', color: 'text-sky-400', bg: 'bg-sky-500/10', border: 'border-sky-500/30' },
                  { icon: Brain, key: 'archInterpret', color: 'text-primary', bg: 'bg-primary/10', border: 'border-primary/30' },
                  { icon: GitBranch, key: 'archMode', color: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/30' },
                  { icon: HeartHandshake, key: 'archUser', color: 'text-violet-400', bg: 'bg-violet-500/10', border: 'border-violet-500/30' },
                ].map((step, i) => (
                  <div key={step.key} className="relative">
                    <div className={`rounded-xl border ${step.border} ${step.bg} backdrop-blur-sm p-5 text-center h-full flex flex-col items-center justify-center gap-3 transition-all hover:scale-105`}>
                      <div className={`w-12 h-12 rounded-full ${step.bg} flex items-center justify-center`}>
                        <step.icon className={`w-6 h-6 ${step.color}`} />
                      </div>
                      <p className="font-semibold text-foreground text-sm">{tp(step.key)}</p>
                      <span className={`text-xs ${step.color} font-mono`}>0{i + 1}</span>
                    </div>
                    {i < 3 && (
                      <div className="hidden md:flex absolute top-1/2 -right-2 -translate-y-1/2 z-10 items-center justify-center w-4 h-4">
                        <ArrowRight className="w-4 h-4 text-muted-foreground/60" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Nutrition + diary */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">{tp('nutTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-border/60 hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>{tp('diaryTitle')}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  {[1,2,3,4,5].map(i => <li key={i}>• {tp(`diary${i}`)}</li>)}
                </ul>
                <p className="text-xs text-muted-foreground/80 mt-4 italic">{tp('diaryNote')}</p>
              </CardContent>
            </Card>

            <Card className="border-border/60 hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                  <Layers className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>{tp('t1UsersTitle')}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  {[1,2,3].map(i => <li key={i}>• {tp(`t1U${i}`)}</li>)}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border/60 md:col-span-2 hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-11 h-11 rounded-xl bg-amber-500/10 flex items-center justify-center mb-2">
                  <Utensils className="w-6 h-6 text-amber-500" />
                </div>
                <CardTitle>{tp('foodTitle')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 text-sm">{tp('foodDesc')}</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                  {[1,2,3,4,5,6].map(i => (
                    <div key={i} className="rounded-lg border border-border/60 px-3 py-2 text-muted-foreground hover:border-primary/40 hover:text-foreground transition-colors">
                      {tp(`food${i}`)}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Family */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">{tp('famTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-border/60">
              <CardHeader>
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>{tp('famT1Title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  {[1,2,3].map(i => <li key={i}>• {tp(`famT1_${i}`)}</li>)}
                </ul>
              </CardContent>
            </Card>
            <Card className="border-border/60">
              <CardHeader>
                <div className="w-11 h-11 rounded-xl bg-amber-500/10 flex items-center justify-center mb-2">
                  <Eye className="w-6 h-6 text-amber-500" />
                </div>
                <CardTitle>{tp('famT2Title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  {[1,2].map(i => <li key={i}>• {tp(`famT2_${i}`)}</li>)}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Daily summaries */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-3">{tp('sumTitle')}</h2>
          <p className="text-muted-foreground mb-6 max-w-3xl">{tp('sumDesc')}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[1,2].map(i => (
              <div key={i} className="rounded-xl border border-border/60 bg-gradient-to-br from-muted/30 to-muted/10 px-6 py-5">
                <p className="text-foreground font-medium">"{tp(`sum${i}`)}"</p>
              </div>
            ))}
          </div>
        </section>

        <Separator className="my-12" />

        {/* Multilingual */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-3 flex items-center gap-3">
            <Languages className="w-7 h-7 text-primary" />
            {tp('mlTitle')}
          </h2>
          <p className="text-muted-foreground mb-6 max-w-3xl">{tp('mlDesc')}</p>
          <div className="flex flex-wrap gap-2">
            {[
              'English','Spanish','Russian','Arabic','Portuguese','French',
              'German','Italian','Ukrainian','Chinese','Hindi','Japanese','Korean',
            ].map((l) => (
              <Badge key={l} variant="outline" className="border-border/60 text-muted-foreground py-1.5 px-3 hover:border-primary/40 hover:text-foreground transition-colors">
                {l}
              </Badge>
            ))}
          </div>
        </section>

        <Separator className="my-12" />

        {/* Design principles */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">{tp('designTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-border/60">
              <CardHeader>
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                  <Smartphone className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>{tp('isTitle')}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  {[1,2,3,4,5,6].map(i => <li key={i}>• {tp(`is${i}`)}</li>)}
                </ul>
              </CardContent>
            </Card>
            <Card className="border-border/60">
              <CardHeader>
                <div className="w-11 h-11 rounded-xl bg-rose-500/10 flex items-center justify-center mb-2">
                  <ShieldCheck className="w-6 h-6 text-rose-400" />
                </div>
                <CardTitle>{tp('avoidTitle')}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  {[1,2,3,4].map(i => <li key={i}>• {tp(`av${i}`)}</li>)}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Technology */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">{tp('techTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[1,2,3,4,5,6,7].map(i => (
              <div key={i} className="rounded-lg border border-border/60 px-5 py-3.5 text-sm text-foreground bg-gradient-to-r from-muted/20 to-transparent hover:border-primary/40 hover:from-primary/5 transition-all">
                {tp(`tech${i}`)}
              </div>
            ))}
          </div>
        </section>

        <Separator className="my-12" />

        {/* Why */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">{tp('whyTitle')}</h2>
          <Card className="border-border/60 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-amber-500/5 pointer-events-none" />
            <CardContent className="pt-8 space-y-5 text-muted-foreground leading-relaxed relative">
              <p className="text-lg text-foreground">{tp('whyLead')}</p>
              <p>{tp('whyP')}</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                {[
                  { t: 'clarity', d: 'clarityDesc' },
                  { t: 'timing', d: 'timingDesc' },
                  { t: 'support', d: 'supportDesc' },
                ].map(item => (
                  <div key={item.t} className="rounded-lg border border-border/60 p-4 bg-background/40 backdrop-blur-sm">
                    <p className="text-foreground font-semibold mb-1">{tp(item.t)}</p>
                    <p className="text-sm">{tp(item.d)}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Impact */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">{tp('impactTitle')}</h2>
          <ul className="space-y-3">
            {[1,2,3,4,5].map(i => (
              <li key={i} className="flex items-start gap-3 rounded-lg border border-border/60 bg-gradient-to-r from-muted/20 to-transparent px-5 py-3 hover:border-primary/40 transition-colors">
                <span className="mt-1.5 inline-block w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-foreground">{tp(`imp${i}`)}</span>
              </li>
            ))}
          </ul>
        </section>

        <Separator className="my-12" />

        {/* CTA */}
        <section className="mb-16">
          <Card className="bg-gradient-to-br from-primary/15 via-primary/5 to-amber-500/10 border-primary/20 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            <CardContent className="py-12 text-center relative">
              <h2 className="text-3xl font-bold mb-3">{tp('ctaTitle')}</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">{tp('ctaDesc')}</p>
              <div className="flex gap-3 justify-center flex-wrap">
                <Link to="/start-investing">
                  <Button size="lg">
                    {tp('ctaPrimary')}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/projects">
                  <Button size="lg" variant="outline">
                    <Globe className="w-4 h-4 mr-2" />
                    {tp('ctaAll')}
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
