import { useTranslation } from 'react-i18next';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { 
  ArrowRight, Calendar, BarChart3, Target, CheckCircle2, Brain, Database, Cpu,
  Users, Globe, Activity, Rocket, AlertCircle, ArrowLeft, Clock, TrendingUp,
  Lightbulb, Sparkles, Zap
} from "lucide-react";
import mydayLogo from "@/assets/myday-logo.webp";
import mydayHero from "@/assets/projects/myday-hero.webp";
import DownloadInvestorBriefButton from "@/components/DownloadInvestorBriefButton";
import OptimizedImage from "@/components/OptimizedImage";
import InvestorPageDisclaimer from "@/components/InvestorPageDisclaimer";

const MyDay = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-background theme-myday">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="relative py-32 -mx-4 px-4 overflow-hidden mb-16">
          <div className="absolute inset-0 z-0" style={{ backgroundImage: `url(${mydayHero})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="absolute inset-0 bg-gradient-to-r from-[hsl(255,40%,8%)]/95 via-background/90 to-background/60" />
          </div>
          <div className="relative z-10 max-w-4xl">
            <Link to="/projects" className="animate-fade-in">
              <Button variant="ghost" size="sm" className="mb-6 hover:bg-background/80">
                <ArrowLeft className="w-4 h-4 mr-2" /> {t('projectCommon.backToProjects')}
              </Button>
            </Link>
            <div className="animate-fade-in" style={{ animationDelay: '0.1s', animationFillMode: 'backwards' }}>
              <div className="flex items-center gap-6 mb-8">
                <OptimizedImage src={mydayLogo} alt="MyDay logo" className="w-20 h-20 md:w-24 md:h-24 object-contain" showSkeleton={false} />
                <div>
                  <Badge className="mb-2 project-badge">{t('projectMyDay.badge')}</Badge>
                  <h1 className="text-4xl md:text-6xl font-bold project-glow-text">MyDay</h1>
                </div>
              </div>
              <p className="text-2xl text-foreground mb-4">{t('projectMyDay.heroSubtitle')}</p>
              <p className="text-xl text-muted-foreground max-w-3xl mb-8">{t('projectMyDay.heroDesc')}</p>
              <div className="flex gap-4 flex-wrap">
                <Link to="/start-investing">
                  <Button size="lg">{t('projectCommon.requestInformation')} <ArrowRight className="ml-2 w-5 h-5" /></Button>
                </Link>
                <Button size="lg" variant="outline" asChild className="border-[hsl(var(--project-accent)/0.3)] hover:border-[hsl(var(--project-accent)/0.6)]">
                  <a href="https://myday.live" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <Globe className="h-5 w-5" /> myday.live
                  </a>
                </Button>
                <DownloadInvestorBriefButton projectSlug="myday" size="lg" />
              </div>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="mb-16 -mt-8">
          <Card className="border-primary/20 shadow-lg">
            <CardContent className="pt-8 space-y-4">
              <h2 className="text-3xl font-bold mb-4">{t('projectMyDay.overviewTitle')}</h2>
              <p className="text-lg leading-relaxed">{t('projectMyDay.overviewP1')}</p>
              <p className="text-lg text-muted-foreground leading-relaxed">{t('projectMyDay.overviewP2')}</p>
            </CardContent>
          </Card>
        </section>

        <div className="project-section-divider my-12" />

        {/* Core Mission */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">{t('projectCommon.coreMission')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Calendar, title: t('projectMyDay.mission1Title'), desc: t('projectMyDay.mission1Desc') },
              { icon: Brain, title: t('projectMyDay.mission2Title'), desc: t('projectMyDay.mission2Desc') },
              { icon: TrendingUp, title: t('projectMyDay.mission3Title'), desc: t('projectMyDay.mission3Desc') },
            ].map((item, i) => (
              <Card key={i} className="project-card">
                <CardHeader>
                  <item.icon className="w-12 h-12 project-icon mb-4" />
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent><p className="text-muted-foreground">{item.desc}</p></CardContent>
              </Card>
            ))}
          </div>
        </section>

        <div className="project-section-divider my-12" />

        {/* How the Platform Works */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">{t('projectCommon.howPlatformWorks')}</h2>
          <div className="space-y-6">
            {[
              { step: 1, title: t('projectMyDay.step1Title'), desc: t('projectMyDay.step1Desc') },
              { step: 2, title: t('projectMyDay.step2Title'), desc: t('projectMyDay.step2Desc') },
              { step: 3, title: t('projectMyDay.step3Title'), desc: t('projectMyDay.step3Desc') },
              { step: 4, title: t('projectMyDay.step4Title'), desc: t('projectMyDay.step4Desc') },
            ].map((item, i) => (
              <Card key={i} className="project-card">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[hsl(var(--project-accent)/0.1)] flex items-center justify-center project-icon font-bold text-xl">{item.step}</div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent><p className="text-muted-foreground leading-relaxed">{item.desc}</p></CardContent>
              </Card>
            ))}
          </div>
        </section>

        <div className="project-section-divider my-12" />

        {/* Technology & Architecture */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">{t('projectCommon.technologyArchitecture')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: Cpu, title: t('projectMyDay.techCloudTitle'), desc: t('projectMyDay.techCloudDesc'), list: ['techCloudL1','techCloudL2','techCloudL3','techCloudL4'] },
              { icon: Brain, title: t('projectMyDay.techAITitle'), desc: t('projectMyDay.techAIDesc'), list: ['techAIL1','techAIL2','techAIL3','techAIL4'] },
              { icon: BarChart3, title: t('projectMyDay.techAnalyticsTitle'), desc: t('projectMyDay.techAnalyticsDesc'), list: ['techAnalyticsL1','techAnalyticsL2','techAnalyticsL3','techAnalyticsL4'] },
              { icon: Database, title: t('projectMyDay.techScaleTitle'), desc: t('projectMyDay.techScaleDesc'), list: ['techScaleL1','techScaleL2','techScaleL3','techScaleL4'] },
            ].map((item, i) => (
              <Card key={i} className="project-card">
                <CardHeader>
                  <item.icon className="w-10 h-10 project-icon mb-2" />
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{item.desc}</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {item.list.map((key, j) => <li key={j}>• {t(`projectMyDay.${key}`)}</li>)}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <div className="project-section-divider my-12" />

        {/* Key Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">{t('projectCommon.keyFeatures')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Calendar, title: t('projectMyDay.featPlanTitle'), desc: t('projectMyDay.featPlanDesc') },
              { icon: Target, title: t('projectMyDay.featHabitTitle'), desc: t('projectMyDay.featHabitDesc') },
              { icon: Activity, title: t('projectMyDay.featMealTitle'), desc: t('projectMyDay.featMealDesc') },
              { icon: Lightbulb, title: t('projectMyDay.featInsightTitle'), desc: t('projectMyDay.featInsightDesc') },
              { icon: BarChart3, title: t('projectMyDay.featProgressTitle'), desc: t('projectMyDay.featProgressDesc') },
              { icon: Sparkles, title: t('projectMyDay.featSubTitle'), desc: t('projectMyDay.featSubDesc') },
            ].map((item, i) => (
              <Card key={i} className="project-card">
                <CardHeader>
                  <item.icon className="w-10 h-10 project-icon mb-2" />
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent><p className="text-muted-foreground">{item.desc}</p></CardContent>
              </Card>
            ))}
          </div>
        </section>

        <div className="project-section-divider my-12" />

        {/* Operational Model */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">{t('projectMyDay.opModelTitle')}</h2>
          <Card className="project-card">
            <CardContent className="pt-8 space-y-6">
              <p className="text-lg leading-relaxed">{t('projectMyDay.opModelDesc')}</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                {[
                  { icon: Zap, title: t('projectMyDay.opFreeTitle'), desc: t('projectMyDay.opFreeDesc') },
                  { icon: TrendingUp, title: t('projectMyDay.opDataTitle'), desc: t('projectMyDay.opDataDesc') },
                  { icon: Activity, title: t('projectMyDay.opImprovTitle'), desc: t('projectMyDay.opImprovDesc') },
                ].map((item, i) => (
                  <div key={i} className="text-center p-4 bg-primary/5 rounded-lg">
                    <item.icon className="w-10 h-10 text-primary mx-auto mb-2" />
                    <h4 className="font-semibold mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        <div className="project-section-divider my-12" />

        {/* Who It Serves */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">{t('projectCommon.whoItServes')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: Users, title: t('projectMyDay.whoStructureTitle'), desc: t('projectMyDay.whoStructureDesc') },
              { icon: Target, title: t('projectMyDay.whoHabitTitle'), desc: t('projectMyDay.whoHabitDesc') },
              { icon: Lightbulb, title: t('projectMyDay.whoSimpleTitle'), desc: t('projectMyDay.whoSimpleDesc') },
              { icon: Rocket, title: t('projectMyDay.whoEarlyTitle'), desc: t('projectMyDay.whoEarlyDesc') },
            ].map((item, i) => (
              <Card key={i} className="project-card">
                <CardHeader>
                  <item.icon className="w-10 h-10 project-icon mb-2" />
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent><p className="text-muted-foreground">{item.desc}</p></CardContent>
              </Card>
            ))}
          </div>
        </section>

        <div className="project-section-divider my-12" />

        {/* Market Context */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">{t('projectMyDay.marketTitle')}</h2>
          <Card className="project-card">
            <CardContent className="pt-8 space-y-6">
              <p className="text-lg leading-relaxed">{t('projectMyDay.marketDesc')}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" /> {t('projectMyDay.uniqueTitle')}
                  </h4>
                  <ul className="space-y-3 text-muted-foreground">
                    {['uniqueL1','uniqueL2','uniqueL3','uniqueL4'].map((key, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <ArrowRight className="w-4 h-4 text-primary mt-1 shrink-0" /> {t(`projectMyDay.${key}`)}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg flex items-center gap-2">
                    <Target className="w-5 h-5 text-primary" /> {t('projectMyDay.marketPosTitle')}
                  </h4>
                  <ul className="space-y-3 text-muted-foreground">
                    {['marketPosL1','marketPosL2','marketPosL3','marketPosL4'].map((key, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <ArrowRight className="w-4 h-4 text-primary mt-1 shrink-0" /> {t(`projectMyDay.${key}`)}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <div className="project-section-divider my-12" />

        {/* Long-Term Vision */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">{t('projectMyDay.visionTitle')}</h2>
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
            <CardContent className="pt-8 space-y-6">
              <p className="text-lg leading-relaxed">{t('projectMyDay.visionDesc')}</p>
              <div className="mt-8">
                <h4 className="font-semibold text-lg mb-4">{t('projectMyDay.roadmapTitle')}</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { badge: t('projectCommon.currentStage'), title: t('projectMyDay.roadmapCurrentTitle'), desc: t('projectMyDay.roadmapCurrentDesc') },
                    { badge: t('projectCommon.next12Months'), title: t('projectMyDay.roadmapNearTitle'), desc: t('projectMyDay.roadmapNearDesc') },
                    { badge: t('projectCommon.next18to36Months'), title: t('projectMyDay.roadmapMidTitle'), desc: t('projectMyDay.roadmapMidDesc') },
                  ].map((item, i) => (
                    <Card key={i} className="border-primary/30 bg-card/50">
                      <CardHeader>
                        <Badge variant="outline" className="w-fit mb-2">{item.badge}</Badge>
                        <CardTitle className="text-lg">{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent><p className="text-sm text-muted-foreground">{item.desc}</p></CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <div className="project-section-divider my-12" />

        {/* Important Notices */}
        <section className="mb-16">
          <Card className="border-yellow-500/30 bg-yellow-500/5">
            <CardHeader>
              <div className="flex items-center gap-3">
                <AlertCircle className="w-8 h-8 text-yellow-500" />
                <CardTitle className="text-xl">{t('projectMyDay.noticesTitle')}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p><strong>{t('projectMyDay.noticeStatus')}</strong> {t('projectMyDay.noticeStatusText')}</p>
              <p><strong>{t('projectMyDay.noticeMedical')}</strong> {t('projectMyDay.noticeMedicalText')}</p>
              <p><strong>{t('projectMyDay.noticeInvestment')}</strong> {t('projectMyDay.noticeInvestmentText')}</p>
            </CardContent>
          </Card>
        </section>

        {/* Call to Action */}
        <section className="text-center py-12">
          <h2 className="text-3xl font-bold mb-4">{t('projectMyDay.ctaTitle')}</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">{t('projectMyDay.ctaDesc')}</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/start-investing">
              <Button size="lg">{t('projectCommon.requestInformation')} <ArrowRight className="ml-2 w-5 h-5" /></Button>
            </Link>
            <Button size="lg" variant="outline" asChild>
              <a href="https://myday.live" target="_blank" rel="noopener noreferrer">
                <Globe className="mr-2 w-5 h-5" /> {t('projectCommon.visitWebsite')} myday.live
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
