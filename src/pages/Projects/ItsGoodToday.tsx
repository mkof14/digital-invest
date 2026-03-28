import { useTranslation } from 'react-i18next';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  ArrowRight, ArrowLeft, Globe, Heart, Utensils, Activity, Smile, Sun,
  CheckCircle2, Users, Target, Sparkles, Clock, Lightbulb, Shield
} from "lucide-react";
import itsgoodtodayLogo from "@/assets/itsgoodtoday-logo.png";
import itsgoodtodayHero from "@/assets/projects/itsgoodtoday-hero.jpg";
import DownloadInvestorBriefButton from "@/components/DownloadInvestorBriefButton";
import OptimizedImage from "@/components/OptimizedImage";
import InvestorPageDisclaimer from "@/components/InvestorPageDisclaimer";

const ItsGoodToday = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-background theme-itsgoodtoday">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        {/* Hero */}
        <section className="relative py-32 -mx-4 px-4 overflow-hidden mb-16">
          <div className="absolute inset-0 z-0" style={{ backgroundImage: `url(${itsgoodtodayHero})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="absolute inset-0 bg-gradient-to-r from-[hsl(30,50%,8%)]/95 via-background/90 to-background/60" />
          </div>
          <div className="relative z-10 max-w-4xl">
            <Link to="/projects" className="animate-fade-in">
              <Button variant="ghost" size="sm" className="mb-6 hover:bg-background/80">
                <ArrowLeft className="w-4 h-4 mr-2" /> {t('projectCommon.backToProjects')}
              </Button>
            </Link>
            <div className="animate-fade-in" style={{ animationDelay: '0.1s', animationFillMode: 'backwards' }}>
              <div className="flex items-center gap-6 mb-8">
                <OptimizedImage src={itsgoodtodayLogo} alt="It's Good Today logo" className="w-20 h-20 md:w-24 md:h-24 object-contain" showSkeleton={false} />
                <div>
                  <Badge className="mb-2 project-badge">{t('projectItsGoodToday.heroBadge')}</Badge>
                  <h1 className="text-4xl md:text-6xl font-bold project-glow-text">{t('projectItsGoodToday.heroTitle')}</h1>
                </div>
              </div>
              <p className="text-2xl text-foreground mb-4">{t('projectItsGoodToday.heroTagline')}</p>
              <p className="text-xl text-muted-foreground max-w-3xl mb-8">{t('projectItsGoodToday.heroDesc')}</p>
              <div className="flex gap-4 flex-wrap">
                <Link to="/start-investing"><Button size="lg">{t('projectItsGoodToday.requestInfo')} <ArrowRight className="ml-2 w-5 h-5" /></Button></Link>
                <Button size="lg" variant="outline" asChild className="border-[hsl(var(--project-accent)/0.3)] hover:border-[hsl(var(--project-accent)/0.6)]">
                  <a href="https://www.itsgoodtoday.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2"><Globe className="h-5 w-5" /> itsgoodtoday.com</a>
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
              <h2 className="text-3xl font-bold mb-4">{t('projectItsGoodToday.overviewTitle')}</h2>
              <p className="text-lg leading-relaxed">{t('projectItsGoodToday.overviewP1')}</p>
              <p className="text-lg text-muted-foreground leading-relaxed">{t('projectItsGoodToday.overviewP2')}</p>
              <div className="bg-primary/10 rounded-lg p-6 mt-6">
                <p className="text-xl font-semibold text-center text-primary">{t('projectItsGoodToday.overviewQuote')}</p>
              </div>
            </CardContent>
          </Card>
        </section>

        <div className="project-section-divider my-12" />

        {/* Who It Serves */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">{t('projectItsGoodToday.whoTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[{ icon: Users, n: 1 }, { icon: Globe, n: 2 }, { icon: Target, n: 3 }, { icon: Heart, n: 4 }].map((item) => (
              <Card key={item.n} className="project-card">
                <CardHeader><item.icon className="w-12 h-12 project-icon mb-4" /><CardTitle>{t(`projectItsGoodToday.who${item.n}Title`)}</CardTitle></CardHeader>
                <CardContent><p className="text-muted-foreground">{t(`projectItsGoodToday.who${item.n}Desc`)}</p></CardContent>
              </Card>
            ))}
          </div>
        </section>

        <div className="project-section-divider my-12" />

        {/* Product Principles */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">{t('projectItsGoodToday.principlesTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[{ icon: Sparkles, n: 1 }, { icon: Shield, n: 2 }, { icon: Sun, n: 3 }].map((item) => (
              <Card key={item.n} className="project-card">
                <CardHeader><item.icon className="w-10 h-10 project-icon mb-2" /><CardTitle>{t(`projectItsGoodToday.prin${item.n}Title`)}</CardTitle></CardHeader>
                <CardContent><p className="text-muted-foreground">{t(`projectItsGoodToday.prin${item.n}Desc`)}</p></CardContent>
              </Card>
            ))}
          </div>
        </section>

        <div className="project-section-divider my-12" />

        {/* Core Modules */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">{t('projectItsGoodToday.coreStructureTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: Sun, titleKey: 'homeTitle', descKey: 'homeDesc', items: ['homeItem1','homeItem2','homeItem3','homeItem4'] },
              { icon: Utensils, titleKey: 'foodTitle', descKey: 'foodDesc', items: ['foodItem1','foodItem2','foodItem3','foodItem4'] },
              { icon: Activity, titleKey: 'movementTitle', descKey: 'movementDesc', items: ['moveItem1','moveItem2','moveItem3','moveItem4'] },
              { icon: Smile, titleKey: 'moodTitle', descKey: 'moodDesc', items: ['moodItem1','moodItem2','moodItem3','moodItem4'] },
            ].map((mod, i) => (
              <Card key={i} className="project-card">
                <CardHeader><mod.icon className="w-10 h-10 project-icon mb-2" /><CardTitle>{t(`projectItsGoodToday.${mod.titleKey}`)}</CardTitle></CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{t(`projectItsGoodToday.${mod.descKey}`)}</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {mod.items.map((item) => (
                      <li key={item} className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" />{t(`projectItsGoodToday.${item}`)}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <div className="project-section-divider my-12" />

        {/* Daily Insight */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">{t('projectItsGoodToday.insightTitle')}</h2>
          <Card className="project-card">
            <CardContent className="pt-8">
              <div className="flex items-start gap-6">
                <Lightbulb className="w-16 h-16 text-primary flex-shrink-0" />
                <div>
                  <p className="text-lg text-muted-foreground mb-4">{t('projectItsGoodToday.insightDesc')}</p>
                  <div className="bg-muted/50 rounded-lg p-6">
                    <p className="text-lg italic text-foreground">{t('projectItsGoodToday.insightQuote')}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <div className="project-section-divider my-12" />

        {/* Investment */}
        <section className="mb-16">
          <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/30">
            <CardContent className="pt-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { icon: Clock, label: 'Current Stage', desc: 'Live MVP with active users' },
                  { icon: Target, label: 'Near-Term', desc: 'Improve onboarding & activation' },
                  { icon: Sparkles, label: 'Mid-Term', desc: 'Deeper personalization & integrations' },
                ].map((item, i) => (
                  <div key={i} className="text-center p-6 bg-background/50 rounded-lg">
                    <item.icon className="w-10 h-10 text-primary mx-auto mb-3" />
                    <h4 className="font-semibold mb-2">{item.label}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="flex gap-4 flex-wrap justify-center pt-4">
                <Link to="/start-investing"><Button size="lg">{t('projectItsGoodToday.requestInfo')} <ArrowRight className="ml-2 w-5 h-5" /></Button></Link>
                <Link to="/schedule"><Button size="lg" variant="outline">Schedule a Call</Button></Link>
              </div>
            </CardContent>
          </Card>
        </section>

        <InvestorPageDisclaimer />
      </main>

      <Footer />
    </div>
  );
};

export default ItsGoodToday;
