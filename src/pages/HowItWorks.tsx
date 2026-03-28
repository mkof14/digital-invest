import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, FileText, Users, CheckCircle, ArrowRight, Shield, AlertCircle } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const HowItWorks = () => {
  const { t } = useTranslation();

  const steps = [
    { number: 1, icon: Search, title: t('howItWorks.step1Title'), description: t('howItWorks.step1Desc') },
    { number: 2, icon: FileText, title: t('howItWorks.step2Title'), description: t('howItWorks.step2Desc') },
    { number: 3, icon: Users, title: t('howItWorks.step3Title'), description: t('howItWorks.step3Desc') },
    { number: 4, icon: CheckCircle, title: t('howItWorks.step4Title'), description: t('howItWorks.step4Desc') },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">{t('howItWorks.title')}</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{t('howItWorks.subtitle')}</p>
          </div>

          <div className="mb-16 space-y-8 section-gradient-warm rounded-2xl p-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="relative">
                  {index < steps.length - 1 && <div className="hidden md:block absolute left-12 top-32 w-0.5 h-24 bg-border" />}
                  <Card className="overflow-hidden border border-border/50 hover:shadow-elevated transition-all duration-300">
                    <div className="flex flex-col md:flex-row">
                      <div className="bg-primary/10 p-8 flex items-center justify-center min-w-[200px]">
                        <div className="text-center">
                          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground mb-4"><Icon className="h-8 w-8" /></div>
                          <div className="text-4xl font-bold text-primary">{step.number}</div>
                        </div>
                      </div>
                      <div className="flex-1 p-8">
                        <CardHeader className="p-0 mb-4"><CardTitle className="text-2xl">{step.title}</CardTitle></CardHeader>
                        <CardContent className="p-0"><CardDescription className="text-base text-foreground">{step.description}</CardDescription></CardContent>
                      </div>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 section-gradient-cool rounded-2xl p-8">
            {[
              { icon: Shield, title: t('howItWorks.privatePlatform'), desc: t('howItWorks.privatePlatformDesc'), colorClass: 'bg-success/20 text-success' },
              { icon: Users, title: t('howItWorks.personalApproach'), desc: t('howItWorks.personalApproachDesc'), colorClass: 'bg-info/20 text-info' },
              { icon: FileText, title: t('howItWorks.properDocumentation'), desc: t('howItWorks.properDocumentationDesc'), colorClass: 'bg-warning/20 text-warning' },
            ].map((item, index) => (
              <Card key={index} className="border border-border/50">
                <CardHeader>
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${item.colorClass} mb-4`}><item.icon className="h-6 w-6" /></div>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent><p className="text-muted-foreground">{item.desc}</p></CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-muted/30 border border-border rounded-lg p-8 mb-12">
            <div className="flex items-start gap-4">
              <AlertCircle className="h-6 w-6 text-warning flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-4 text-foreground">{t('howItWorks.legalTitle')}</h3>
                <div className="space-y-3 text-muted-foreground">
                  <p><strong className="text-foreground">{t('howItWorks.notAdvice')}</strong> {t('howItWorks.notAdviceText')}</p>
                  <p><strong className="text-foreground">{t('howItWorks.notOffer')}</strong> {t('howItWorks.notOfferText')}</p>
                  <p><strong className="text-foreground">{t('howItWorks.regulatory')}</strong> {t('howItWorks.regulatoryText')}</p>
                  <p><strong className="text-foreground">{t('howItWorks.professionalGuidance')}</strong> {t('howItWorks.professionalGuidanceText')}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center bg-card border border-border/50 rounded-lg p-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">{t('howItWorks.readyTitle')}</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">{t('howItWorks.readySubtitle')}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/projects"><Button size="lg" className="text-lg px-8">{t('howItWorks.viewProjects')}<ArrowRight className="ml-2 h-5 w-5" /></Button></Link>
              <Link to="/for-investors"><Button size="lg" variant="outline" className="text-lg px-8">{t('howItWorks.contactTeam')}</Button></Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HowItWorks;
