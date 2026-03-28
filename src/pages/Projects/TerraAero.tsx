import { useTranslation } from 'react-i18next';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Droplets, Wheat, BarChart3, Package, Zap, MapPin, Users, Globe, Factory, Rocket, AlertCircle, Layers, Activity, ArrowLeft, Download, Share2, Mail, FileText, Copy, Check, ZoomIn } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import terraaeroLogo from "@/assets/terraaero-logo.png";
import terraaeroHero from "@/assets/projects/terraaero-hero.jpg";
import terraaeroInfographic from "@/assets/projects/terraaero-infographic.jpeg";
import DownloadInvestorBriefButton from "@/components/DownloadInvestorBriefButton";
import OptimizedImage from "@/components/OptimizedImage";
import InvestorPageDisclaimer from "@/components/InvestorPageDisclaimer";
import { useToast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

const TerraAero = () => {
  const [infographicOpen, setInfographicOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();
  const { t } = useTranslation();

  const handleDownloadInfographic = async () => {
    try {
      const response = await fetch(terraaeroInfographic);
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "terraaero-integrated-architecture.jpeg";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      toast({ title: t('projectTerraAero.download'), description: "Infographic saved successfully" });
    } catch {
      toast({ title: "Error", description: "Failed to download", variant: "destructive" });
    }
  };

  const handleCopyInfographic = async () => {
    try {
      const response = await fetch(terraaeroInfographic);
      const blob = await response.blob();
      await navigator.clipboard.write([new ClipboardItem({ [blob.type]: blob })]);
      setCopied(true);
      toast({ title: t('projectTerraAero.copied'), description: "Infographic copied to clipboard" });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      try {
        await navigator.clipboard.writeText(window.location.origin + terraaeroInfographic);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch {
        toast({ title: "Error", description: "Failed to copy", variant: "destructive" });
      }
    }
  };

  return (
    <div className="min-h-screen theme-terraaero" style={{ background: 'hsl(85, 15%, 5%)' }}>
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        {/* Hero */}
        <section className="relative py-32 -mx-4 px-4 overflow-hidden mb-16">
          <div className="absolute inset-0 z-0" style={{ backgroundImage: `url(${terraaeroHero})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="absolute inset-0 bg-gradient-to-r from-[hsl(85,30%,8%)]/95 via-background/90 to-background/60" />
          </div>
          <div className="relative z-10 max-w-4xl">
            <Link to="/projects" className="animate-fade-in">
              <Button variant="ghost" size="sm" className="mb-6 hover:bg-background/80">
                <ArrowLeft className="w-4 h-4 mr-2" /> {t('projectCommon.backToProjects')}
              </Button>
            </Link>
            <div className="flex items-center gap-6 mb-8 animate-fade-in" style={{ animationDelay: '0.1s', animationFillMode: 'backwards' }}>
              <OptimizedImage src={terraaeroLogo} alt="TerraAero logo" className="w-20 h-20 md:w-24 md:h-24 object-contain" showSkeleton={false} />
              <div>
                <Badge className="mb-4 project-badge">{t('projectTerraAero.badge')}</Badge>
                <h1 className="text-4xl md:text-6xl font-bold project-glow-text">TerraAero</h1>
              </div>
            </div>
            <p className="text-2xl text-foreground mb-4">{t('projectTerraAero.heroSubtitle')}</p>
            <p className="text-xl text-muted-foreground max-w-3xl mb-8">{t('projectTerraAero.heroDesc')}</p>
            <div className="flex gap-4 flex-wrap">
              <Link to="/start-investing"><Button size="lg">{t('projectCommon.requestInformation')} <ArrowRight className="ml-2 w-5 h-5" /></Button></Link>
              <Button size="lg" variant="outline" asChild className="border-[hsl(var(--project-accent)/0.3)] hover:border-[hsl(var(--project-accent)/0.6)]">
                <a href="https://terraaero.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2"><Globe className="h-5 w-5" /> terraaero.com</a>
              </Button>
              <DownloadInvestorBriefButton projectSlug="terraaero" size="lg" />
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="mb-16 -mt-8">
          <Card className="border-primary/20 shadow-lg">
            <CardContent className="pt-8 space-y-4">
              <h2 className="text-3xl font-bold mb-4">{t('projectTerraAero.overviewTitle')}</h2>
              <p className="text-lg leading-relaxed">{t('projectTerraAero.overviewP1')}</p>
              <p className="text-lg text-muted-foreground leading-relaxed">{t('projectTerraAero.overviewP2')}</p>
            </CardContent>
          </Card>
        </section>

        <div className="project-section-divider my-12" />

        {/* Core Mission */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">{t('projectCommon.coreMission')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Wheat, title: t('projectTerraAero.mission1Title'), desc: t('projectTerraAero.mission1Desc') },
              { icon: Package, title: t('projectTerraAero.mission2Title'), desc: t('projectTerraAero.mission2Desc') },
              { icon: Factory, title: t('projectTerraAero.mission3Title'), desc: t('projectTerraAero.mission3Desc') },
            ].map((item, i) => (
              <Card key={i} className="project-card">
                <CardHeader><item.icon className="w-12 h-12 project-icon mb-4" /><CardTitle>{item.title}</CardTitle></CardHeader>
                <CardContent><p className="text-muted-foreground">{item.desc}</p></CardContent>
              </Card>
            ))}
          </div>
        </section>

        <div className="project-section-divider my-12" />

        {/* How TerraAero Works */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">{t('projectTerraAero.howTitle')}</h2>
          <div className="space-y-6">
            {[
              { step: 1, title: t('projectTerraAero.step1Title'), desc: t('projectTerraAero.step1Desc') },
              { step: 2, title: t('projectTerraAero.step2Title'), desc: t('projectTerraAero.step2Desc') },
              { step: 3, title: t('projectTerraAero.step3Title'), desc: t('projectTerraAero.step3Desc') },
              { step: 4, title: t('projectTerraAero.step4Title'), desc: t('projectTerraAero.step4Desc') },
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

        {/* Technology & Systems */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">{t('projectTerraAero.techTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: Zap, title: t('projectTerraAero.techDroneTitle'), desc: t('projectTerraAero.techDroneDesc'), list: ['techDroneL1','techDroneL2','techDroneL3','techDroneL4'] },
              { icon: BarChart3, title: t('projectTerraAero.techAITitle'), desc: t('projectTerraAero.techAIDesc'), list: ['techAIL1','techAIL2','techAIL3','techAIL4'] },
              { icon: MapPin, title: t('projectTerraAero.techOpsTitle'), desc: t('projectTerraAero.techOpsDesc'), list: ['techOpsL1','techOpsL2','techOpsL3','techOpsL4'] },
              { icon: Package, title: t('projectTerraAero.techDeliveryTitle'), desc: t('projectTerraAero.techDeliveryDesc'), list: ['techDeliveryL1','techDeliveryL2','techDeliveryL3','techDeliveryL4'] },
            ].map((item, i) => (
              <Card key={i} className="project-card">
                <CardHeader><item.icon className="w-10 h-10 project-icon mb-2" /><CardTitle>{item.title}</CardTitle></CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{item.desc}</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {item.list.map((key, j) => <li key={j}>• {t(`projectTerraAero.${key}`)}</li>)}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <div className="project-section-divider my-12" />

        {/* Operational Model */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">{t('projectTerraAero.opModelTitle')}</h2>
          <Card className="project-card">
            <CardContent className="pt-8 space-y-6">
              {[
                { title: t('projectTerraAero.opServiceTitle'), desc: t('projectTerraAero.opServiceDesc') },
                { title: t('projectTerraAero.opCrewTitle'), desc: t('projectTerraAero.opCrewDesc') },
                { title: t('projectTerraAero.opLogisticsTitle'), desc: t('projectTerraAero.opLogisticsDesc') },
              ].map((item, i) => (
                <div key={i}><h3 className="text-xl font-bold mb-3">{item.title}</h3><p className="text-muted-foreground leading-relaxed">{item.desc}</p></div>
              ))}
            </CardContent>
          </Card>
        </section>

        <div className="project-section-divider my-12" />

        {/* Agricultural Services */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">{t('projectTerraAero.agriTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              { icon: Droplets, title: t('projectTerraAero.agriCropTitle'), desc: t('projectTerraAero.agriCropDesc'), list: ['agriCropL1','agriCropL2','agriCropL3','agriCropL4'] },
              { icon: Wheat, title: t('projectTerraAero.agriFieldTitle'), desc: t('projectTerraAero.agriFieldDesc'), list: ['agriFieldL1','agriFieldL2','agriFieldL3','agriFieldL4'] },
              { icon: Droplets, title: t('projectTerraAero.agriIrrigationTitle'), desc: t('projectTerraAero.agriIrrigationDesc'), list: ['agriIrrigationL1','agriIrrigationL2','agriIrrigationL3','agriIrrigationL4'] },
              { icon: BarChart3, title: t('projectTerraAero.agriSeasonTitle'), desc: t('projectTerraAero.agriSeasonDesc'), list: ['agriSeasonL1','agriSeasonL2','agriSeasonL3','agriSeasonL4'] },
            ].map((item, i) => (
              <Card key={i} className="project-card">
                <CardHeader><item.icon className="w-12 h-12 project-icon mb-4" /><CardTitle>{item.title}</CardTitle></CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{item.desc}</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {item.list.map((key, j) => <li key={j}>• {t(`projectTerraAero.${key}`)}</li>)}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <div className="project-section-divider my-12" />

        {/* Who It Serves */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">{t('projectTerraAero.whoTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: t('projectTerraAero.whoFarmsTitle'), desc: t('projectTerraAero.whoFarmsDesc') },
              { title: t('projectTerraAero.whoCoopsTitle'), desc: t('projectTerraAero.whoCoopsDesc') },
              { title: t('projectTerraAero.whoFoodTitle'), desc: t('projectTerraAero.whoFoodDesc') },
              { title: t('projectTerraAero.whoRetailTitle'), desc: t('projectTerraAero.whoRetailDesc') },
            ].map((item, i) => (
              <Card key={i} className="project-card">
                <CardHeader><CardTitle>{item.title}</CardTitle></CardHeader>
                <CardContent><p className="text-muted-foreground">{item.desc}</p></CardContent>
              </Card>
            ))}
          </div>
        </section>

        <div className="project-section-divider my-12" />

        {/* Market Context */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">{t('projectTerraAero.marketTitle')}</h2>
          <Card className="project-card">
            <CardContent className="pt-8 space-y-4">
              <p className="text-lg leading-relaxed">{t('projectTerraAero.marketP1')}</p>
              <p className="text-muted-foreground leading-relaxed">{t('projectTerraAero.marketP2')}</p>
              <p className="text-muted-foreground leading-relaxed">{t('projectTerraAero.marketP3')}</p>
            </CardContent>
          </Card>
        </section>

        <div className="project-section-divider my-12" />

        {/* What Makes TerraAero Unique */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">{t('projectTerraAero.uniqueTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: Layers, title: t('projectTerraAero.uniqueStackTitle'), desc: t('projectTerraAero.uniqueStackDesc') },
              { icon: Factory, title: t('projectTerraAero.uniqueMfgTitle'), desc: t('projectTerraAero.uniqueMfgDesc') },
              { icon: Users, title: t('projectTerraAero.uniqueOpsTitle'), desc: t('projectTerraAero.uniqueOpsDesc') },
              { icon: BarChart3, title: t('projectTerraAero.uniqueMultiTitle'), desc: t('projectTerraAero.uniqueMultiDesc') },
            ].map((item, i) => (
              <Card key={i} className="project-card">
                <CardHeader><item.icon className="w-10 h-10 project-icon mb-2" /><CardTitle>{item.title}</CardTitle></CardHeader>
                <CardContent><p className="text-muted-foreground">{item.desc}</p></CardContent>
              </Card>
            ))}
          </div>
        </section>

        <div className="project-section-divider my-12" />

        {/* 23-State Expansion */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">{t('projectTerraAero.expansionTitle')}</h2>
          <Card className="project-card">
            <CardContent className="pt-8 space-y-6">
              {[
                { title: t('projectTerraAero.phase1Title'), desc: t('projectTerraAero.phase1Desc') },
                { title: t('projectTerraAero.phase2Title'), desc: t('projectTerraAero.phase2Desc') },
                { title: t('projectTerraAero.phase3Title'), desc: t('projectTerraAero.phase3Desc') },
              ].map((item, i) => (
                <div key={i}>
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2"><MapPin className="w-6 h-6 text-primary" /> {item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>

        <div className="project-section-divider my-12" />

        {/* Long-Term Vision */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">{t('projectTerraAero.visionTitle')}</h2>
          <Card className="project-card">
            <CardContent className="pt-8 space-y-4">
              <p className="text-lg leading-relaxed">{t('projectTerraAero.visionP1')}</p>
              <p className="text-muted-foreground leading-relaxed">{t('projectTerraAero.visionP2')}</p>
              <p className="text-muted-foreground leading-relaxed">{t('projectTerraAero.visionP3')}</p>
            </CardContent>
          </Card>
        </section>

        <div className="project-section-divider my-12" />

        {/* Current Stage & Roadmap */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">{t('projectTerraAero.roadmapTitle')}</h2>
          <div className="space-y-6">
            <Card className="border-primary/20 bg-primary/5">
              <CardHeader><CardTitle className="flex items-center gap-2"><Globe className="w-6 h-6" /> {t('projectCommon.currentStage')}</CardTitle></CardHeader>
              <CardContent><p className="text-muted-foreground">{t('projectTerraAero.currentStageDesc')}</p></CardContent>
            </Card>
            <Card className="project-card">
              <CardHeader><CardTitle className="flex items-center gap-2"><Activity className="w-6 h-6" /> {t('projectTerraAero.next12Title')}</CardTitle></CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  {['next12L1','next12L2','next12L3','next12L4','next12L5','next12L6'].map((key, i) => <li key={i}>• {t(`projectTerraAero.${key}`)}</li>)}
                </ul>
              </CardContent>
            </Card>
            <Card className="project-card">
              <CardHeader><CardTitle className="flex items-center gap-2"><Rocket className="w-6 h-6" /> {t('projectTerraAero.next18Title')}</CardTitle></CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  {['next18L1','next18L2','next18L3','next18L4','next18L5','next18L6'].map((key, i) => <li key={i}>• {t(`projectTerraAero.${key}`)}</li>)}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <div className="project-section-divider my-12" />

        {/* Infographic */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-2 text-center" style={{ color: 'hsl(85, 40%, 70%)' }}>{t('projectTerraAero.infographicTitle')}</h2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">{t('projectTerraAero.infographicSubtitle')}</p>
          <Card className="overflow-hidden" style={{ borderColor: 'hsl(85, 40%, 30%, 0.3)', background: 'hsl(85, 10%, 8%)' }}>
            <div className="relative cursor-pointer group" onClick={() => setInfographicOpen(true)}>
              <img src={terraaeroInfographic} alt={t('projectTerraAero.infographicCaption')} className="w-full object-contain" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <ZoomIn className="w-14 h-14 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg" />
              </div>
            </div>
            <CardContent className="py-5 flex flex-wrap items-center justify-between gap-4" style={{ borderTop: '1px solid hsl(85, 30%, 20%, 0.3)' }}>
              <p className="text-sm font-medium" style={{ color: 'hsl(85, 30%, 65%)' }}>{t('projectTerraAero.infographicCaption')}</p>
              <div className="flex gap-2">
                <Button size="sm" variant="ghost" onClick={handleDownloadInfographic} className="gap-2"><Download className="w-4 h-4" /> {t('projectTerraAero.download')}</Button>
                <Button size="sm" variant="ghost" onClick={handleCopyInfographic} className="gap-2">
                  {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                  {copied ? t('projectTerraAero.copied') : t('projectTerraAero.copy')}
                </Button>
                <Button size="sm" variant="ghost" className="gap-2" onClick={() => { if (navigator.share) { navigator.share({ title: t('projectTerraAero.infographicCaption'), url: window.location.href }); } else { navigator.clipboard.writeText(window.location.href); toast({ title: "Link copied!" }); } }}>
                  <Share2 className="w-4 h-4" /> {t('projectTerraAero.share')}
                </Button>
                <Button size="sm" variant="ghost" className="gap-2" asChild>
                  <a href={`mailto:?subject=${encodeURIComponent(t('projectTerraAero.infographicCaption'))}&body=${encodeURIComponent(window.location.href)}`}><Mail className="w-4 h-4" /> {t('projectTerraAero.send')}</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Infographic Lightbox */}
        <Dialog open={infographicOpen} onOpenChange={setInfographicOpen}>
          <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 backdrop-blur-xl overflow-hidden" style={{ background: 'hsl(85, 10%, 5%, 0.95)', borderColor: 'hsl(85, 30%, 25%, 0.3)' }}>
            <DialogTitle className="sr-only">{t('projectTerraAero.infographicCaption')}</DialogTitle>
            <div className="flex flex-col h-[90vh]">
              <div className="flex items-center justify-between px-6 py-4" style={{ borderBottom: '1px solid hsl(85, 20%, 20%, 0.5)' }}>
                <h3 className="text-lg font-semibold" style={{ color: 'hsl(85, 30%, 70%)' }}>{t('projectTerraAero.infographicCaption')}</h3>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm" onClick={handleDownloadInfographic} className="gap-2"><Download className="w-4 h-4" /> {t('projectTerraAero.download')}</Button>
                  <Button variant="ghost" size="sm" onClick={handleCopyInfographic} className="gap-2">
                    {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                    {copied ? t('projectTerraAero.copied') : t('projectTerraAero.copy')}
                  </Button>
                </div>
              </div>
              <div className="flex-1 flex items-center justify-center p-4 overflow-auto">
                <img src={terraaeroInfographic} alt={t('projectTerraAero.infographicCaption')} className="max-w-full max-h-full object-contain" />
              </div>
            </div>
          </DialogContent>
        </Dialog>

        <div className="project-section-divider my-12" />

        {/* Investor Presentation */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">{t('projectTerraAero.presentationTitle')}</h2>
          <Card className="overflow-hidden border-[hsl(85,40%,30%)/0.3] bg-gradient-to-br from-[hsl(85,20%,8%)] via-background to-[hsl(85,15%,12%)]">
            <CardContent className="py-10 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0 w-24 h-24 rounded-2xl bg-[hsl(85,40%,25%)/0.2] border border-[hsl(85,40%,40%)/0.3] flex items-center justify-center">
                <FileText className="w-12 h-12 text-[hsl(85,50%,55%)]" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2">{t('projectTerraAero.presentationName')}</h3>
                <p className="text-muted-foreground">{t('projectTerraAero.presentationDesc')}</p>
              </div>
              <div className="flex flex-wrap gap-3 justify-center">
                <Button asChild className="bg-[hsl(85,50%,40%)] hover:bg-[hsl(85,50%,35%)] text-white">
                  <a href="/documents/TERRAAERO-INVESTOR-ONE-PAGER-VC-GRADE.pdf" download><Download className="w-4 h-4 mr-2" /> {t('projectTerraAero.downloadPDF')}</a>
                </Button>
                <Button variant="outline" className="border-[hsl(85,40%,30%)/0.5]" onClick={() => { if (navigator.share) { navigator.share({ title: t('projectTerraAero.presentationName'), url: window.location.href }); } else { navigator.clipboard.writeText(window.location.href); } }}>
                  <Share2 className="w-4 h-4 mr-2" /> {t('projectTerraAero.share')}
                </Button>
                <Button variant="outline" className="border-[hsl(85,40%,30%)/0.5]" asChild>
                  <a href={`mailto:?subject=${encodeURIComponent(t('projectTerraAero.presentationName'))}&body=${encodeURIComponent(window.location.href)}`}><Mail className="w-4 h-4 mr-2" /> {t('projectTerraAero.send')}</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA */}
        <Card className="bg-gradient-tech text-primary-foreground border-0 mb-16">
          <CardContent className="py-12 text-center">
            <Wheat className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">{t('projectTerraAero.ctaTitle')}</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">{t('projectTerraAero.ctaDesc')}</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link to="/start-investing"><Button size="lg" variant="secondary">{t('projectCommon.requestInformation')} <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
              <DownloadInvestorBriefButton projectSlug="terraaero" size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10" />
            </div>
          </CardContent>
        </Card>

        <div className="mt-16"><InvestorPageDisclaimer /></div>
      </main>
      <Footer />
    </div>
  );
};

export default TerraAero;
