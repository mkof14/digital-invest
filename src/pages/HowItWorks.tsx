import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, FileText, Users, CheckCircle, ArrowRight, Shield, AlertCircle } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

const HowItWorks = () => {
  const { t } = useLanguage();
  
  const steps = [
    {
      number: 1,
      icon: Search,
      title: t('howItWorks.browseProjects'),
      description: t('howItWorks.browseDesc'),
    },
    {
      number: 2,
      icon: FileText,
      title: t('howItWorks.requestInfo'),
      description: t('howItWorks.requestDesc'),
    },
    {
      number: 3,
      icon: Users,
      title: t('howItWorks.personalConsult'),
      description: t('howItWorks.personalConsultDesc'),
    },
    {
      number: 4,
      icon: CheckCircle,
      title: t('howItWorks.offlineAgreements'),
      description: t('howItWorks.offlineAgreementsDesc'),
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              {t('howItWorks.pageTitle')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('howItWorks.pageSubtitle')}
            </p>
          </div>

          {/* Steps */}
          <div className="mb-16 space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="relative">
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute left-12 top-32 w-0.5 h-24 bg-border" />
                  )}
                  <Card className="overflow-hidden border border-border/50 hover:shadow-elevated transition-all duration-300">
                    <div className="flex flex-col md:flex-row">
                      <div className="bg-primary/10 p-8 flex items-center justify-center min-w-[200px]">
                        <div className="text-center">
                          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground mb-4">
                            <Icon className="h-8 w-8" />
                          </div>
                          <div className="text-4xl font-bold text-primary">
                            {step.number}
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 p-8">
                        <CardHeader className="p-0 mb-4">
                          <CardTitle className="text-2xl">{step.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0">
                          <CardDescription className="text-base text-foreground">
                            {step.description}
                          </CardDescription>
                        </CardContent>
                      </div>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>

          {/* Key Points */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="border border-border/50">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-success/20 text-success mb-4">
                  <Shield className="h-6 w-6" />
                </div>
                <CardTitle>{t('howItWorks.privatePlatformTitle')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t('howItWorks.privatePlatformDesc')}
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border/50">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-info/20 text-info mb-4">
                  <Users className="h-6 w-6" />
                </div>
                <CardTitle>{t('howItWorks.personalApproachTitle')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t('howItWorks.personalApproachDesc')}
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border/50">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-warning/20 text-warning mb-4">
                  <FileText className="h-6 w-6" />
                </div>
                <CardTitle>{t('howItWorks.documentationTitle')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t('howItWorks.documentationDesc')}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Important Disclaimer */}
          <div className="bg-muted/30 border border-border rounded-lg p-8 mb-12">
            <div className="flex items-start gap-4">
              <AlertCircle className="h-6 w-6 text-warning flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-4 text-foreground">{t('howItWorks.importantLegal')}</h3>
                <div className="space-y-3 text-muted-foreground">
                  <p>
                    <strong className="text-foreground">{t('howItWorks.notAdvice')}</strong> {t('howItWorks.notAdviceText')}
                  </p>
                  <p>
                    <strong className="text-foreground">{t('howItWorks.notPublicOffer')}</strong> {t('howItWorks.notPublicOfferText')}
                  </p>
                  <p>
                    <strong className="text-foreground">{t('howItWorks.compliance')}</strong> {t('howItWorks.complianceText')}
                  </p>
                  <p>
                    <strong className="text-foreground">{t('howItWorks.professionalGuidance')}</strong> {t('howItWorks.professionalGuidanceText')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-card border border-border/50 rounded-lg p-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">{t('howItWorks.readyTitle')}</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t('howItWorks.readyText')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/projects">
                <Button size="lg" className="text-lg px-8">
                  {t('howItWorks.viewProjectsBtn')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/for-investors">
                <Button size="lg" variant="outline" className="text-lg px-8">
                  {t('howItWorks.contactTeamBtn')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HowItWorks;
