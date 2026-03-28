import { useTranslation } from 'react-i18next';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  FileText,
  Shield,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  X,
  Briefcase,
  Building2,
  Search,
  Mail,
  Clock,
  Target,
  Lightbulb,
  Rocket,
  Award,
  BarChart3
} from "lucide-react";
import InvestorPageDisclaimer from '@/components/InvestorPageDisclaimer';

const ForInvestors = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
          <Badge variant="secondary" className="mb-4 px-6 py-3 text-base">
            <Target className="w-4 h-4 mr-2 inline" />
            {t('investors.badge')}
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold">
            <span className="block text-foreground mb-3">{t('investors.heroTitle1')}</span>
            <span className="block gradient-blue-animated">{t('investors.heroTitle2')}</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            {t('investors.heroSubtitle')}
          </p>
          <div className="flex flex-wrap gap-4 justify-center pt-6">
            <Link to="/projects">
              <Button size="lg" className="px-10 py-6 text-lg hover:scale-105 transition-all duration-300">
                {t('investors.exploreProjects')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/schedule">
              <Button variant="outline" size="lg" className="px-10 py-6 text-lg hover:scale-105 transition-all duration-300">
                {t('investors.scheduleConsultation')}
                <Clock className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-card/30 section-gradient-cool border-y border-border/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "5+", label: t('investors.activeProjects'), icon: <Rocket className="w-6 h-6" /> },
              { value: "Multi", label: t('investors.sectorFocus'), icon: <Target className="w-6 h-6" /> },
              { value: "Long-term", label: t('investors.investmentHorizon'), icon: <TrendingUp className="w-6 h-6" /> },
              { value: "USA", label: t('investors.operationsBase'), icon: <Building2 className="w-6 h-6" /> }
            ].map((stat, index) => (
              <div key={index} className="text-center space-y-3 group hover:scale-105 transition-all duration-300">
                <div className="flex justify-center mb-2">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <div className="text-primary">{stat.icon}</div>
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Digital Invest Section */}
      <section className="py-24 px-4 section-gradient-warm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-orange-animated">{t('investors.whyTitle')}</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('investors.whySubtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Lightbulb className="w-8 h-8" />,
                title: t('investors.realWorldImpact'),
                description: t('investors.realWorldImpactDesc'),
                gradient: "from-blue-500/10 to-primary/10"
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: t('investors.provenLeadership'),
                description: t('investors.provenLeadershipDesc'),
                gradient: "from-orange-500/10 to-primary/10"
              },
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: t('investors.structuredGrowth'),
                description: t('investors.structuredGrowthDesc'),
                gradient: "from-purple-500/10 to-primary/10"
              }
            ].map((item, index) => (
              <Card 
                key={index} 
                className="group border border-border/50 bg-card hover:shadow-elevated hover:-translate-y-2 transition-all duration-300"
              >
                <CardContent className="pt-8 pb-8 space-y-4">
                  <div className={`p-4 bg-gradient-to-br ${item.gradient} rounded-lg w-fit group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-primary">{item.icon}</div>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Work With Section */}
      <section className="py-24 px-4 bg-card/30 section-gradient-lavender">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-purple-animated">{t('investors.idealPartners')}</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              {t('investors.idealPartnersSubtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: <Briefcase className="w-7 h-7" />, title: t('investors.entrepreneurs'), description: t('investors.entrepreneursDesc') },
              { icon: <TrendingUp className="w-7 h-7" />, title: t('investors.longTermInvestors'), description: t('investors.longTermInvestorsDesc') },
              { icon: <Building2 className="w-7 h-7" />, title: t('investors.familyOffices'), description: t('investors.familyOfficesDesc') },
              { icon: <Users className="w-7 h-7" />, title: t('investors.strategicPartners'), description: t('investors.strategicPartnersDesc') }
            ].map((item, index) => (
              <Card 
                key={index} 
                className="border border-border/50 bg-card hover:border-primary/50 hover:shadow-lg transition-all duration-300 group"
              >
                <CardContent className="pt-6 pb-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors flex-shrink-0">
                      <div className="text-primary">{item.icon}</div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Your Path as an Investor Section */}
      <section className="py-24 px-4 section-gradient-mint">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-blue-animated">{t('investors.journeyTitle')}</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              {t('investors.journeySubtitle')}
            </p>
          </div>
          
          <div className="space-y-6">
            {[
              { step: "1", title: t('investors.step1'), description: t('investors.step1Desc'), icon: <Search className="w-6 h-6" />, color: "bg-blue-500/10 text-blue-500" },
              { step: "2", title: t('investors.step2'), description: t('investors.step2Desc'), icon: <Mail className="w-6 h-6" />, color: "bg-orange-500/10 text-orange-500" },
              { step: "3", title: t('investors.step3'), description: t('investors.step3Desc'), icon: <Users className="w-6 h-6" />, color: "bg-purple-500/10 text-purple-500" },
              { step: "4", title: t('investors.step4'), description: t('investors.step4Desc'), icon: <FileText className="w-6 h-6" />, color: "bg-green-500/10 text-green-500" },
              { step: "5", title: t('investors.step5'), description: t('investors.step5Desc'), icon: <Shield className="w-6 h-6" />, color: "bg-red-500/10 text-red-500" },
              { step: "6", title: t('investors.step6'), description: t('investors.step6Desc'), icon: <TrendingUp className="w-6 h-6" />, color: "bg-indigo-500/10 text-indigo-500" }
            ].map((item, index) => (
              <Card 
                key={index} 
                className="border border-border/50 bg-card hover:shadow-elevated hover:border-primary/50 transition-all duration-300 group overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary/50 to-primary/0 group-hover:w-2 transition-all duration-300" />
                <CardContent className="pt-8 pb-8 pl-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className={`w-14 h-14 rounded-full ${item.color} flex items-center justify-center font-bold text-xl group-hover:scale-110 transition-transform duration-300`}>
                        {item.step}
                      </div>
                    </div>
                    <div className="flex-1 space-y-3">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="text-2xl font-bold text-foreground">{item.title}</h3>
                        <div className={`p-2 ${item.color} rounded-lg`}>
                          {item.icon}
                        </div>
                      </div>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What You Can Expect Section */}
      <section className="py-24 px-4 bg-card/30 section-gradient-gold">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-orange-animated">{t('investors.whatYouReceive')}</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              {t('investors.whatYouReceiveSubtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { text: "Direct access to project overviews and strategic roadmaps", icon: <FileText className="w-5 h-5" /> },
              { text: "Clear explanation of business logic and operational details", icon: <Lightbulb className="w-5 h-5" /> },
              { text: "Structured risk overview and mitigation strategies", icon: <Shield className="w-5 h-5" /> },
              { text: "Personal calls and dedicated Q&A sessions", icon: <Users className="w-5 h-5" /> },
              { text: "Professional offline legal agreements when applicable", icon: <Award className="w-5 h-5" /> },
              { text: "Regular project updates and milestone tracking", icon: <TrendingUp className="w-5 h-5" /> }
            ].map((item, index) => (
              <Card 
                key={index} 
                className="border border-border/50 bg-card hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
              >
                <CardContent className="pt-6 pb-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <div className="text-primary">{item.icon}</div>
                    </div>
                    <p className="text-base text-foreground leading-relaxed font-medium">{item.text}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What This Website Is/Is Not Section */}
      <section className="py-24 px-4 section-gradient-rose">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-purple-animated">{t('investors.clearExpectations')}</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              {t('investors.clearExpectationsSubtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* This Website IS */}
            <Card className="border-2 border-primary/30 bg-card hover:shadow-elevated hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  {t('investors.platformIs')}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[t('investors.is1'), t('investors.is2'), t('investors.is3'), t('investors.is4')].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 group">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <p className="text-foreground leading-relaxed font-medium">{item}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* This Website is NOT */}
            <Card className="border border-border/50 bg-card hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground flex items-center gap-3">
                  <div className="p-2 bg-muted rounded-lg">
                    <X className="w-6 h-6 text-muted-foreground" />
                  </div>
                  {t('investors.platformIsNot')}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[t('investors.isNot1'), t('investors.isNot2'), t('investors.isNot3'), t('investors.isNot4')].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground leading-relaxed">{item}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-primary/10 via-background to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">{t('investors.ctaTitle')}</h2>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">{t('investors.ctaSubtitle')}</p>
          <div className="flex flex-wrap gap-6 justify-center pt-6">
            <Link to="/projects"><Button size="lg" className="px-12 py-7 text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">{t('investors.viewAllProjects')}<ArrowRight className="ml-3 h-6 w-6" /></Button></Link>
            <Link to="/schedule"><Button variant="outline" size="lg" className="px-12 py-7 text-lg hover:scale-105 transition-all duration-300">{t('investors.scheduleConsultation')}<Clock className="ml-3 h-6 w-6" /></Button></Link>
          </div>
          <Card className="mt-12 border border-border/50 bg-card/50 backdrop-blur">
            <CardContent className="pt-8 pb-8">
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-muted-foreground">
                <div className="flex items-center gap-2"><Shield className="w-5 h-5 text-primary" /><span className="text-sm font-medium">{t('investors.privateConfidential')}</span></div>
                <div className="hidden md:block w-px h-6 bg-border" />
                <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary" /><span className="text-sm font-medium">{t('investors.noCommitment')}</span></div>
                <div className="hidden md:block w-px h-6 bg-border" />
                <div className="flex items-center gap-2"><Users className="w-5 h-5 text-primary" /><span className="text-sm font-medium">{t('investors.personalFollowup')}</span></div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Legal Disclaimer */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <InvestorPageDisclaimer />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ForInvestors;
