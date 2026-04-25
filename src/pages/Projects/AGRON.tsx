import { useTranslation } from 'react-i18next';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  ArrowRight, ArrowLeft, Globe, Target, CheckCircle2, Users, Building2, Shield, Plane, Truck,
  MapPin, Cpu, GraduationCap, Settings, FileCheck, Network, Factory, Zap, Eye, Download, Share2, Mail, FileText
} from "lucide-react";
import agronLogo from "@/assets/agron-logo.webp";
import agronHero from "@/assets/projects/agron-hero.webp";
import agronInfographic from "@/assets/projects/agron-infographic.webp";
import agronInfographic1 from "@/assets/agron-infographic-1.jpeg";
import agronInfographic2 from "@/assets/agron-infographic-2.jpeg";
import DownloadInvestorBriefButton from "@/components/DownloadInvestorBriefButton";
import OptimizedImage from "@/components/OptimizedImage";
import InvestorPageDisclaimer from "@/components/InvestorPageDisclaimer";
import { InfographicsGallery } from "@/components/InfographicsGallery";
import { useToast } from "@/hooks/use-toast";

const AGRON = () => {
  const { toast } = useToast();
  const { t } = useTranslation();

  const infographics = [
    { src: agronInfographic, title: t('projectAgron.presentationName'), alt: "AGRON infographic" },
    { src: agronInfographic1, title: "AGRON: The Future of Robotics & Drone Workforce Development", alt: "AGRON Integrated Framework and Training to Career Model" },
    { src: agronInfographic2, title: "AGRON: The Aerial-Ground Robotics Operations Network Ecosystem", alt: "AGRON Ecosystem: Education, Practical Operations, and Career Integration" },
  ];

  const handleSharePresentation = async () => {
    if (navigator.share) { try { await navigator.share({ title: t('projectAgron.presentationName'), url: window.location.href }); } catch {} }
    else { await navigator.clipboard.writeText(window.location.href); toast({ title: "Link copied!" }); }
  };

  const handleEmailPresentation = () => {
    const subject = encodeURIComponent(t('projectAgron.presentationName'));
    const body = encodeURIComponent(`${window.location.href}`);
    window.open(`mailto:?subject=${subject}&body=${body}`, "_self");
  };

  return (
    <div className="min-h-screen bg-background theme-agron">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        {/* Hero */}
        <section className="relative py-32 -mx-4 px-4 overflow-hidden mb-16">
          <div className="absolute inset-0 z-0" style={{ backgroundImage: `url(${agronHero})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="absolute inset-0 bg-gradient-to-r from-[hsl(210,30%,8%)]/98 via-background/95 to-background/70" />
          </div>
          <div className="relative z-10 max-w-4xl">
            <Link to="/adamas" className="animate-fade-in">
              <Button variant="ghost" size="sm" className="mb-6 hover:bg-background/80"><ArrowLeft className="w-4 h-4 mr-2" /> {t('adamas.backToProjects', 'Back to Adamas Projects')}</Button>
            </Link>
            <div className="animate-fade-in" style={{ animationDelay: '0.1s', animationFillMode: 'backwards' }}>
              <div className="flex items-center gap-6 mb-8">
                <OptimizedImage src={agronLogo} alt="AGRON logo" className="w-20 h-20 md:w-24 md:h-24 object-contain rounded-lg" showSkeleton={false} />
                <div>
                  <Badge className="mb-2 project-badge">{t('projectAgron.badge')}</Badge>
                  <h1 className="text-4xl md:text-5xl font-bold project-glow-text">AGRON</h1>
                  <p className="text-lg text-muted-foreground mt-1">{t('projectAgron.subtitle')}</p>
                </div>
              </div>
              <p className="text-2xl text-foreground mb-4">{t('projectAgron.heroTitle')}</p>
              <p className="text-xl text-muted-foreground max-w-3xl mb-8">{t('projectAgron.heroDesc')}</p>
              <div className="flex gap-4 flex-wrap">
                <Link to="/start-investing"><Button size="lg">{t('projectCommon.requestInformation')} <ArrowRight className="ml-2 w-5 h-5" /></Button></Link>
                <DownloadInvestorBriefButton projectSlug="agron" size="lg" />
                <Button size="lg" variant="outline" asChild>
                  <a href="/documents/agron-network.pdf" target="_blank" rel="noopener noreferrer" download="The-AGRON-Network.pdf">
                    <FileText className="w-5 h-5 mr-2" />
                    The AGRON Network (PDF)
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Positioning */}
        <section className="mb-16 -mt-8">
          <Card className="border-primary/20 shadow-lg bg-primary/5">
            <CardContent className="pt-8 text-center">
              <p className="text-2xl font-semibold text-primary">{t('projectAgron.positioning1')}</p>
              <p className="text-2xl font-semibold text-foreground mt-2">{t('projectAgron.positioning2')}</p>
            </CardContent>
          </Card>
        </section>

        {/* Overview */}
        <section className="mb-16">
          <Card className="border-primary/20 shadow-lg">
            <CardContent className="pt-8 space-y-4">
              <h2 className="text-3xl font-bold mb-4">{t('projectAgron.overviewTitle')}</h2>
              <p className="text-lg leading-relaxed">{t('projectAgron.overviewP1')}</p>
              <p className="text-lg text-muted-foreground leading-relaxed">{t('projectAgron.overviewP2')}</p>
              <p className="text-lg text-muted-foreground leading-relaxed">{t('projectAgron.overviewP3')}</p>
              <div className="bg-muted/50 rounded-lg p-6 mt-6"><p className="text-lg font-medium text-foreground">{t('projectAgron.overviewHighlight')}</p></div>
            </CardContent>
          </Card>
        </section>

        <div className="project-section-divider my-12" />

        {/* Core Mission */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">{t('projectAgron.coreMissionTitle')}</h2>
          <Card className="project-card">
            <CardContent className="pt-8">
              <div className="flex items-start gap-6">
                <Target className="w-16 h-16 text-primary flex-shrink-0" />
                <p className="text-xl leading-relaxed">{t('projectAgron.coreMissionDesc')}</p>
              </div>
            </CardContent>
          </Card>
        </section>

        <div className="project-section-divider my-12" />

        {/* Problems */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">{t('projectAgron.problemsTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: Users, title: t('projectAgron.problemOperatorTitle'), desc: t('projectAgron.problemOperatorDesc') },
              { icon: FileCheck, title: t('projectAgron.problemStandardsTitle'), desc: t('projectAgron.problemStandardsDesc') },
              { icon: Settings, title: t('projectAgron.problemFrameworkTitle'), desc: t('projectAgron.problemFrameworkDesc') },
              { icon: Shield, title: t('projectAgron.problemRiskTitle'), desc: t('projectAgron.problemRiskDesc') },
            ].map((item, i) => (
              <Card key={i} className="project-card">
                <CardHeader><item.icon className="w-10 h-10 project-icon mb-2" /><CardTitle>{item.title}</CardTitle></CardHeader>
                <CardContent><p className="text-muted-foreground">{item.desc}</p></CardContent>
              </Card>
            ))}
          </div>
        </section>

        <div className="project-section-divider my-12" />

        {/* Solution */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">{t('projectAgron.solutionTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: GraduationCap, title: t('projectAgron.solTrainingTitle'), desc: t('projectAgron.solTrainingDesc') },
              { icon: Cpu, title: t('projectAgron.solAITitle'), desc: t('projectAgron.solAIDesc') },
              { icon: Settings, title: t('projectAgron.solOpsTitle'), desc: t('projectAgron.solOpsDesc') },
              { icon: Network, title: t('projectAgron.solNetworkTitle'), desc: t('projectAgron.solNetworkDesc') },
              { icon: FileCheck, title: t('projectAgron.solStandardsTitle'), desc: t('projectAgron.solStandardsDesc') },
              { icon: Zap, title: t('projectAgron.solEvolutionTitle'), desc: t('projectAgron.solEvolutionDesc') },
            ].map((item, i) => (
              <Card key={i} className="project-card">
                <CardHeader><item.icon className="w-10 h-10 project-icon mb-2" /><CardTitle>{item.title}</CardTitle></CardHeader>
                <CardContent><p className="text-muted-foreground">{item.desc}</p></CardContent>
              </Card>
            ))}
          </div>
        </section>

        <div className="project-section-divider my-12" />

        {/* Key Domains */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">{t('projectAgron.domainsTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Plane, title: t('projectAgron.domainAerialTitle'), keys: ['domainAerialL1','domainAerialL2','domainAerialL3','domainAerialL4','domainAerialL5'] },
              { icon: Truck, title: t('projectAgron.domainGroundTitle'), keys: ['domainGroundL1','domainGroundL2','domainGroundL3','domainGroundL4','domainGroundL5'] },
              { icon: Network, title: t('projectAgron.domainCombinedTitle'), keys: ['domainCombinedL1','domainCombinedL2','domainCombinedL3','domainCombinedL4'] },
            ].map((item, i) => (
              <Card key={i} className="project-card">
                <CardHeader><item.icon className="w-12 h-12 project-icon mb-4" /><CardTitle>{item.title}</CardTitle></CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    {item.keys.map((key, j) => (
                      <li key={j} className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> {t(`projectAgron.${key}`)}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <div className="project-section-divider my-12" />

        {/* Service Phases */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">{t('projectAgron.phasesTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { phase: 'Phase 1', title: t('projectAgron.phase1Title'), keys: ['phase1L1','phase1L2','phase1L3','phase1L4','phase1L5'] },
              { phase: 'Phase 2', title: t('projectAgron.phase2Title'), keys: ['phase2L1','phase2L2','phase2L3','phase2L4','phase2L5'] },
              { phase: 'Phase 3', title: t('projectAgron.phase3Title'), keys: ['phase3L1','phase3L2','phase3L3','phase3L4','phase3L5'] },
            ].map((item, i) => (
              <Card key={i} className="border-primary/20 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 to-primary" />
                <CardHeader><Badge className="w-fit mb-2">{item.phase}</Badge><CardTitle>{item.title}</CardTitle></CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {item.keys.map((key, j) => <li key={j}>• {t(`projectAgron.${key}`)}</li>)}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <div className="project-section-divider my-12" />

        {/* Target Clients */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">{t('projectAgron.clientsTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Building2, title: t('projectAgron.clientGovTitle'), keys: ['clientGovL1','clientGovL2','clientGovL3','clientGovL4','clientGovL5'] },
              { icon: Factory, title: t('projectAgron.clientB2BTitle'), keys: ['clientB2BL1','clientB2BL2','clientB2BL3','clientB2BL4','clientB2BL5'] },
              { icon: Shield, title: t('projectAgron.clientDefenseTitle'), keys: ['clientDefenseL1','clientDefenseL2','clientDefenseL3','clientDefenseL4'] },
            ].map((item, i) => (
              <Card key={i} className="project-card">
                <CardHeader><item.icon className="w-12 h-12 project-icon mb-4" /><CardTitle>{item.title}</CardTitle></CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {item.keys.map((key, j) => <li key={j}>• {t(`projectAgron.${key}`)}</li>)}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <div className="project-section-divider my-12" />

        {/* Network */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">{t('projectAgron.networkTitle')}</h2>
          <p className="text-lg text-muted-foreground mb-8">{t('projectAgron.networkDesc')}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { badge: 'NODE-01', city: t('projectAgron.node1City'), desc: t('projectAgron.node1Desc') },
              { badge: 'NODE-02', city: t('projectAgron.node2City'), desc: t('projectAgron.node2Desc') },
              { badge: 'NODE-03', city: t('projectAgron.node3City'), desc: t('projectAgron.node3Desc') },
              { badge: 'NODE-04', city: t('projectAgron.node4City'), desc: t('projectAgron.node4Desc') },
              { badge: 'HQ', city: t('projectAgron.nodeHQCity'), desc: t('projectAgron.nodeHQDesc') },
            ].map((item, i) => (
              <Card key={i} className="project-card">
                <CardHeader>
                  <div className="flex items-center gap-3"><MapPin className="w-6 h-6 text-primary" /><Badge variant="outline">{item.badge}</Badge></div>
                  <CardTitle className="mt-4">{item.city}</CardTitle>
                </CardHeader>
                <CardContent><p className="text-muted-foreground">{item.desc}</p></CardContent>
              </Card>
            ))}
          </div>
        </section>

        <div className="project-section-divider my-12" />

        {/* Technology Stack */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">{t('projectAgron.techTitle')}</h2>
          <Card className="project-card">
            <CardContent className="pt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: Eye, title: t('projectAgron.techSim'), desc: t('projectAgron.techSimDesc') },
                  { icon: Cpu, title: t('projectAgron.techAI'), desc: t('projectAgron.techAIDesc') },
                  { icon: Settings, title: t('projectAgron.techCmd'), desc: t('projectAgron.techCmdDesc') },
                  { icon: FileCheck, title: t('projectAgron.techCompliance'), desc: t('projectAgron.techComplianceDesc') },
                  { icon: Shield, title: t('projectAgron.techSecurity'), desc: t('projectAgron.techSecurityDesc') },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <item.icon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div><p className="font-medium">{item.title}</p><p className="text-sm text-muted-foreground">{item.desc}</p></div>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-muted/50 rounded-lg"><p className="text-muted-foreground">{t('projectAgron.techAgnostic')}</p></div>
            </CardContent>
          </Card>
        </section>

        <div className="project-section-divider my-12" />

        {/* Business Model */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">{t('projectAgron.bizModelTitle')}</h2>
          <Card className="project-card">
            <CardContent className="pt-8">
              <p className="text-lg mb-6">{t('projectAgron.bizModelIntro')}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { title: t('projectAgron.bizTraining'), desc: t('projectAgron.bizTrainingDesc') },
                  { title: t('projectAgron.bizOps'), desc: t('projectAgron.bizOpsDesc') },
                  { title: t('projectAgron.bizGov'), desc: t('projectAgron.bizGovDesc') },
                  { title: t('projectAgron.bizEnterprise'), desc: t('projectAgron.bizEnterpriseDesc') },
                  { title: t('projectAgron.bizLicensing'), desc: t('projectAgron.bizLicensingDesc') },
                ].map((item, i) => (
                  <div key={i} className="p-4 bg-muted/30 rounded-lg"><p className="font-medium">{item.title}</p><p className="text-sm text-muted-foreground">{item.desc}</p></div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-primary/10 rounded-lg"><p className="text-foreground font-medium">{t('projectAgron.bizRecurring')}</p></div>
            </CardContent>
          </Card>
        </section>

        <div className="project-section-divider my-12" />

        {/* Long-term Vision */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">{t('projectAgron.visionTitle')}</h2>
          <Card className="project-card">
            <CardContent className="pt-8">
              <p className="text-lg mb-6">{t('projectAgron.visionIntro')}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {['visionL1','visionL2','visionL3','visionL4'].map((key, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-lg">{t(`projectAgron.${key}`)}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-primary/10 rounded-lg text-center">
                <p className="text-xl font-semibold text-foreground">{t('projectAgron.visionFoundation')}</p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Investor Presentation */}
        <section className="mb-16">
          <div className="project-section-divider my-12" />
          <h2 className="text-3xl font-bold mb-8">{t('projectAgron.presentationTitle')}</h2>
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 via-background to-primary/10 overflow-hidden">
            <CardContent className="pt-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center"><FileText className="w-7 h-7 text-primary" /></div>
                <div><h3 className="text-xl font-semibold">{t('projectAgron.presentationName')}</h3><p className="text-muted-foreground">{t('projectAgron.presentationDesc')}</p></div>
              </div>
              <div className="flex gap-3 flex-wrap">
                <a href="/documents/AGRON_The_Robotics_Operations_Network.pdf" download><Button className="gap-2"><Download className="w-4 h-4" /> {t('projectAgron.downloadPDF')}</Button></a>
                <Button variant="outline" className="gap-2" onClick={handleSharePresentation}><Share2 className="w-4 h-4" /> {t('projectAgron.share')}</Button>
                <Button variant="outline" className="gap-2" onClick={handleEmailPresentation}><Mail className="w-4 h-4" /> {t('projectAgron.send')}</Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Infographics */}
        <section className="mb-16">
          <div className="project-section-divider my-12" />
          <h2 className="text-3xl font-bold mb-8">{t('projectAgron.infographicsTitle')}</h2>
          <InfographicsGallery infographics={infographics} projectTitle="AGRON" />
        </section>

        {/* CTA */}
        <section className="mb-16">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
            <CardContent className="pt-8 text-center">
              <h2 className="text-3xl font-bold mb-4">{t('projectAgron.ctaTitle')}</h2>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">{t('projectAgron.ctaDesc')}</p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Link to="/start-investing"><Button size="lg">{t('projectCommon.requestInformation')} <ArrowRight className="ml-2 w-5 h-5" /></Button></Link>
                <DownloadInvestorBriefButton projectSlug="agron" size="lg" />
                <Button size="lg" variant="outline" asChild>
                  <a href="/documents/agron-network.pdf" target="_blank" rel="noopener noreferrer" download="The-AGRON-Network.pdf">
                    <FileText className="w-5 h-5 mr-2" />
                    The AGRON Network (PDF)
                  </a>
                </Button>
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

export default AGRON;
