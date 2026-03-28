import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  ArrowRight, Building2, Target, Award, Network, Heart, Sprout, Utensils, Cpu, Cog,
  Clock, TrendingUp, Shield, AlertTriangle, CheckCircle2, Rocket, Globe, ArrowLeft
} from "lucide-react";
import { Link } from "react-router-dom";
import digitalInvestHero from "@/assets/projects/digitalinvest-hero.jpg";
import InterestForm from "@/components/InterestForm";
import DownloadInvestorBriefButton from "@/components/DownloadInvestorBriefButton";
import InvestorPageDisclaimer from "@/components/InvestorPageDisclaimer";

const DigitalInvest = () => {
  const [showInterestForm, setShowInterestForm] = useState(false);
  const { t } = useTranslation();

  const portfolioProjects = [
    { name: "TerraAero", slug: "terraaero", icon: <Sprout className="w-8 h-8" />, descKey: 'proj1Desc' },
    { name: "BioMath Core", slug: "biomathcore", icon: <Heart className="w-8 h-8" />, descKey: 'proj2Desc' },
    { name: "BioMath Life", slug: "biomathlife", icon: <Heart className="w-8 h-8" />, descKey: 'proj3Desc' },
    { name: "DishCore", slug: "dishcore", icon: <Utensils className="w-8 h-8" />, descKey: 'proj4Desc' },
    { name: "Digital Invest", slug: "digital-invest", icon: <Network className="w-8 h-8" />, descKey: 'proj5Desc' },
  ];

  return (
    <div className="min-h-screen bg-background theme-digitalinvest">
      <Navigation />

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <Link to="/projects" className="inline-block mb-6 animate-fade-in">
            <Button variant="ghost" size="sm" className="hover:bg-background/80">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t('projectCommon.backToProjects')}
            </Button>
          </Link>

          <section className="relative -mt-24 mb-16">
            <div className="absolute inset-0 z-0" style={{ backgroundImage: `url(${digitalInvestHero})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '500px' }}>
              <div className="absolute inset-0 bg-gradient-to-r from-[hsl(42,40%,8%)]/95 via-background/90 to-background/60" />
            </div>

            <div className="relative z-10 pt-32 pb-16">
              <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.1s', animationFillMode: 'backwards' }}>
                <div className="flex items-center gap-6 mb-8">
                  <img src="/lovable-uploads/d1011e6f-955a-48d9-adef-662af751c3b9.png" alt="Digital Invest Inc. logo" className="w-20 h-20 md:w-24 md:h-24 object-contain" />
                  <div>
                    <div className="flex gap-3 mb-4">
                      <Badge className="bg-primary text-primary-foreground">{t('projectDigitalInvest.portfolio')}</Badge>
                      <Badge variant="outline">{t('projectDigitalInvest.infrastructure')}</Badge>
                    </div>
                  </div>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold text-foreground">Digital Invest Inc.</h1>
                <p className="text-xl md:text-2xl text-foreground max-w-4xl leading-relaxed">{t('projectDigitalInvest.heroDesc')}</p>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 pt-8">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Card key={i} className="border border-border/50 bg-card/50 backdrop-blur-sm">
                      <CardContent className="pt-6 pb-6 text-center space-y-1">
                        <p className="text-3xl font-bold project-icon">{t(`projectDigitalInvest.metric${i}Value`)}</p>
                        <p className="text-sm text-muted-foreground">{t(`projectDigitalInvest.metric${i}Label`)}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="flex gap-4 flex-wrap mt-8">
                  <Button size="lg" onClick={() => setShowInterestForm(true)}>
                    {t('projectDigitalInvest.submitInterest')} <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button size="lg" variant="outline" asChild className="border-[hsl(var(--project-accent)/0.3)] hover:border-[hsl(var(--project-accent)/0.6)]">
                    <a href="https://digitalinvest.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <Globe className="h-5 w-5" /> digitalinvest.com
                    </a>
                  </Button>
                  <DownloadInvestorBriefButton projectSlug="digital-invest" size="lg" />
                </div>
              </div>
            </div>
          </section>

          <Separator className="my-12" />

          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">{t('projectDigitalInvest.portfolioOverviewTitle')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioProjects.map((project, index) => (
                <Link key={index} to={`/projects/${project.slug}`}>
                  <Card className="border border-border/50 bg-card hover:shadow-lg transition-all duration-300 h-full">
                    <CardContent className="pt-8 pb-8 space-y-4">
                      <div className="p-3 bg-primary/10 rounded-lg w-fit"><div className="project-icon">{project.icon}</div></div>
                      <h3 className="text-xl font-bold text-foreground">{project.name}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{t(`projectDigitalInvest.${project.descKey}`)}</p>
                      <div className="flex items-center text-primary text-sm font-medium pt-2">
                        {t('projectDigitalInvest.viewProject')} <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </section>

          <Separator className="my-12" />

          {/* Portfolio Synergy - Desktop */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t('projectDigitalInvest.synergyTitle')}</h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-3xl">{t('projectDigitalInvest.synergyDesc')}</p>

            <div className="hidden lg:block relative">
              <div className="relative w-full max-w-5xl mx-auto" style={{ height: '600px' }}>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <Card className="border-2 border-[hsl(var(--project-accent)/0.6)] bg-card shadow-elevated w-64">
                    <CardContent className="pt-6 pb-6 text-center space-y-3">
                      <div className="p-4 bg-primary/10 rounded-lg w-fit mx-auto"><Network className="w-12 h-12 project-icon" /></div>
                      <h3 className="text-xl font-bold text-foreground">Digital Invest</h3>
                      <p className="text-xs text-muted-foreground">{t('projectDigitalInvest.portfolioHub')}</p>
                    </CardContent>
                  </Card>
                </div>

                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
                  <defs><marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="hsl(var(--primary))" opacity="0.3" /></marker></defs>
                  {[{ d: "M 50% 50% L 50% 15%" }, { d: "M 50% 50% L 80% 25%", delay: '0.2s' }, { d: "M 50% 50% L 80% 75%", delay: '0.4s' }, { d: "M 50% 50% L 20% 75%", delay: '0.6s' }].map((line, i) => (
                    <path key={i} d={line.d} stroke="hsl(var(--primary))" strokeWidth="2" strokeDasharray="5,5" fill="none" opacity="0.3" markerEnd="url(#arrowhead)" className="animate-pulse" style={line.delay ? { animationDelay: line.delay } : undefined} />
                  ))}
                  <path d="M 50% 15% Q 65% 20% 80% 25%" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="3,3" fill="none" opacity="0.2" />
                  <path d="M 80% 25% Q 82% 50% 80% 75%" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="3,3" fill="none" opacity="0.2" />
                </svg>

                {[
                  { pos: 'absolute top-0 left-1/2 transform -translate-x-1/2', slug: 'terraaero', icon: <Sprout className="w-8 h-8 project-icon" />, name: 'TerraAero', label: t('projectDigitalInvest.agroTech') },
                  { pos: 'absolute top-12 right-4', slug: 'biomathcore', icon: <Heart className="w-8 h-8 project-icon" />, name: 'BioMath Core', label: t('projectDigitalInvest.healthOS') },
                  { pos: 'absolute bottom-12 right-4', slug: 'biomathlife', icon: <Heart className="w-8 h-8 project-icon" />, name: 'BioMath Life', label: t('projectDigitalInvest.longevity') },
                  { pos: 'absolute bottom-12 left-4', slug: 'dishcore', icon: <Utensils className="w-8 h-8 project-icon" />, name: 'DishCore', label: t('projectDigitalInvest.foodTech') },
                ].map((item, i) => (
                  <div key={i} className={item.pos} style={{ zIndex: 5 }}>
                    <Link to={`/projects/${item.slug}`}>
                      <Card className="border border-border/50 bg-card hover:shadow-lg transition-all duration-300 w-56 group">
                        <CardContent className="pt-6 pb-6 text-center space-y-2">
                          <div className="p-3 bg-primary/10 rounded-lg w-fit mx-auto">{item.icon}</div>
                          <h3 className="text-base font-bold text-foreground">{item.name}</h3>
                          <p className="text-xs text-muted-foreground">{item.label}</p>
                          <div className="flex items-center justify-center text-primary text-xs font-medium pt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            {t('projectDigitalInvest.view')} <ArrowRight className="ml-1 h-3 w-3" />
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </div>
                ))}
              </div>

              <div className="mt-12 flex justify-center gap-8 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-0.5 bg-primary opacity-30" style={{ borderTop: '2px dashed' }}></div>
                  <span className="text-muted-foreground">{t('projectDigitalInvest.sharedInfra')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-0.5 bg-muted-foreground opacity-20" style={{ borderTop: '1px dashed' }}></div>
                  <span className="text-muted-foreground">{t('projectDigitalInvest.dataExchange')}</span>
                </div>
              </div>
            </div>

            {/* Mobile View */}
            <div className="lg:hidden space-y-6">
              <Card className="border-2 border-[hsl(var(--project-accent)/0.6)] bg-card shadow-elevated">
                <CardContent className="pt-8 pb-8 text-center space-y-4">
                  <div className="p-4 bg-primary/10 rounded-lg w-fit mx-auto"><Network className="w-12 h-12 project-icon" /></div>
                  <h3 className="text-2xl font-bold text-foreground">Digital Invest</h3>
                  <p className="text-sm text-muted-foreground">{t('projectDigitalInvest.centralPortfolioHub')}</p>
                  <div className="pt-4 border-t border-border/50"><p className="text-xs text-muted-foreground">{t('projectDigitalInvest.connectsPowers')}</p></div>
                </CardContent>
              </Card>
              <div className="flex justify-center"><ArrowRight className="w-6 h-6 text-primary rotate-90 animate-pulse" /></div>
              {portfolioProjects.slice(0, 4).map((project, index) => (
                <div key={index}>
                  <Link to={`/projects/${project.slug}`}>
                    <Card className="border border-border/50 bg-card hover:shadow-lg transition-all duration-300">
                      <CardContent className="pt-6 pb-6">
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-primary/10 rounded-lg"><div className="project-icon">{project.icon}</div></div>
                          <div className="flex-1">
                            <h3 className="text-lg font-bold text-foreground">{project.name}</h3>
                            <p className="text-sm text-muted-foreground">{t(`projectDigitalInvest.${project.descKey}`)}</p>
                          </div>
                          <ArrowRight className="w-5 h-5 project-icon" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                  {index < 3 && <div className="flex justify-center py-2"><div className="w-0.5 h-6 bg-primary/30"></div></div>}
                </div>
              ))}
            </div>
          </section>

          <Separator className="my-12" />

          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">{t('projectDigitalInvest.howPortfolioCreatesValue')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Cpu, titleKey: 'sharedAITitle', descKey: 'sharedAIDesc' },
                { icon: Network, titleKey: 'crossSynergyTitle', descKey: 'crossSynergyDesc' },
                { icon: Shield, titleKey: 'multiSectorTitle', descKey: 'multiSectorDesc' },
              ].map((item, i) => (
                <Card key={i} className="border border-border/50 bg-card">
                  <CardHeader>
                    <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4"><item.icon className="w-8 h-8 project-icon" /></div>
                    <CardTitle className="text-xl">{t(`projectDigitalInvest.${item.titleKey}`)}</CardTitle>
                  </CardHeader>
                  <CardContent><p className="text-muted-foreground leading-relaxed">{t(`projectDigitalInvest.${item.descKey}`)}</p></CardContent>
                </Card>
              ))}
            </div>
          </section>

          <Separator className="my-12" />

          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">{t('projectDigitalInvest.strategicPillarsTitle')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: Cpu, n: 1 }, { icon: Cog, n: 2 }, { icon: Clock, n: 3 }, { icon: Network, n: 4 },
              ].map((item) => (
                <Card key={item.n} className="border border-border/50 bg-card">
                  <CardContent className="pt-6 pb-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0"><item.icon className="w-6 h-6 project-icon" /></div>
                      <div className="space-y-2">
                        <h3 className="text-lg font-bold text-foreground">{t(`projectDigitalInvest.pillar${item.n}Title`)}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{t(`projectDigitalInvest.pillar${item.n}Desc`)}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <Separator className="my-12" />

          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">{t('projectDigitalInvest.roadmapTitle')}</h2>
            <div className="space-y-6">
              {[1, 2, 3, 4].map((i) => (
                <Card key={i} className="border border-border/50 bg-card hover:shadow-lg transition-all duration-300">
                  <CardContent className="pt-6 pb-6">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-xl font-bold project-icon">{i}</span>
                        </div>
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center gap-3">
                          <h3 className="text-xl font-bold text-foreground">{t(`projectDigitalInvest.phase${i}Title`)}</h3>
                          <Clock className="w-5 h-5 project-icon" />
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{t(`projectDigitalInvest.phase${i}Desc`)}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <Separator className="my-12" />

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <AlertTriangle className="h-8 w-8 text-warning" />
              <span className="project-icon">{t('projectDigitalInvest.risksTitle')}</span>
            </h2>
            <div className="bg-warning/10 border border-warning/30 p-6 rounded-lg space-y-4">
              <p className="text-foreground font-semibold mb-4">{t('projectDigitalInvest.risksIntro')}</p>
              <ul className="list-disc list-inside space-y-3 text-foreground">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <li key={i}>{t(`projectDigitalInvest.risk${i}`)}</li>
                ))}
              </ul>
              <p className="text-sm text-muted-foreground mt-6 pt-4 border-t border-warning/20">{t('projectDigitalInvest.risksDisclaimer')}</p>
            </div>
          </section>

          <section className="mt-16 pt-12 border-t border-border/50">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">{t('projectDigitalInvest.ctaTitle')}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{t('projectDigitalInvest.ctaDesc')}</p>
              <Button size="lg" className="text-lg px-10 py-6" onClick={() => setShowInterestForm(true)}>
                <Rocket className="mr-2 h-5 w-5" /> {t('projectDigitalInvest.submitInterest')}
              </Button>
              <p className="text-sm text-muted-foreground">{t('projectDigitalInvest.ctaNoPayment')}</p>
            </div>
          </section>

          <section className="mt-16"><InvestorPageDisclaimer /></section>
        </div>
      </div>

      <InterestForm projectId="portfolio-overview" projectTitle="Digital Invest Portfolio" open={showInterestForm} onOpenChange={setShowInterestForm} />
      <Footer />
    </div>
  );
};

export default DigitalInvest;
