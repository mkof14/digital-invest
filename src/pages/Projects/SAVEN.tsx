import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  TrendingUp, ArrowRight, ExternalLink, ArrowLeft, ChevronRight,
  ShieldCheck, Activity, Brain, Cpu, HeartPulse, Building2,
  Home, Hospital, Users, Cog, BarChart3, Network, Zap,
  CheckCircle2, XCircle, Download, Copy, Share2, Mail,
  Bot, Wrench, Wifi, Truck, Stethoscope, Layers,
  Clock, DollarSign, Smile, AlertTriangle, TimerReset, LineChart
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import InvestorPageDisclaimer from '@/components/InvestorPageDisclaimer';
import heroImg from '@/assets/projects/saven-hero.webp';
import logoImg from '@/assets/projects/saven-logo.webp';
import robotImg from '@/assets/projects/saven-robot.webp';
import robotElderlyImg from '@/assets/projects/saven-robot-elderly.webp';
import infographicImg from '@/assets/projects/saven-infographic.webp';
import acronymImg from '@/assets/projects/saven-acronym.png';

const SAVEN = () => {
  const [project, setProject] = useState<any>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImg, setLightboxImg] = useState('');
  const { toast } = useToast();
  const { t } = useTranslation();

  useEffect(() => {
    const fetchProject = async () => {
      const { data } = await supabase
        .from('projects')
        .select('*')
        .eq('slug', 'saven')
        .single();
      if (data) setProject(data);
    };
    fetchProject();
  }, []);

  const handleDownload = (src: string, name: string) => {
    const link = document.createElement('a');
    link.href = src;
    link.download = name;
    link.click();
    toast({ title: t('projectSaven.downloadStarted'), description: name });
  };

  const handleCopy = async (src: string) => {
    try {
      const res = await fetch(src);
      const blob = await res.blob();
      await navigator.clipboard.write([new ClipboardItem({ [blob.type]: blob })]);
      toast({ title: t('projectSaven.copiedClipboard') });
    } catch {
      await navigator.clipboard.writeText(window.location.origin + src);
      toast({ title: t('projectSaven.linkCopied') });
    }
  };

  const handleShare = async (title: string) => {
    if (navigator.share) {
      await navigator.share({ title, url: window.location.href });
    } else {
      await navigator.clipboard.writeText(window.location.href);
      toast({ title: t('projectSaven.linkCopiedSharing') });
    }
  };

  const handleSend = (title: string) => {
    const subject = encodeURIComponent(`Check out: ${title}`);
    const body = encodeURIComponent(`Take a look at this: ${window.location.href}`);
    window.open(`mailto:?subject=${subject}&body=${body}`);
  };

  const infographics = [
    { src: infographicImg, title: 'SAVEN Infrastructure of Care Continuity' },
    { src: robotImg, title: 'SAVEN Robot — Care Execution Unit' },
    { src: robotElderlyImg, title: 'SAVEN — Managing Life Between Episodes' },
    { src: acronymImg, title: 'SAVEN Acronym — S.A.V.E.N.' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="SAVEN — Managing Life Between Episodes" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d0f1a]/90 via-[#0d0f1a]/70 to-[#0d0f1a]/40" />
        </div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-3xl">
            <Link to="/projects" className="inline-flex items-center text-orange-300/70 hover:text-orange-300 mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" /> {t('projectCommon.backToProjects')}
            </Link>
            <Badge className="mb-4 bg-orange-500/20 text-orange-300 border-orange-500/30 text-sm px-4 py-1">
              {t('projectSaven.badge')}
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-2 tracking-tight">
              S<span className="text-orange-400">A</span>V<span className="text-blue-400">E</span>N
            </h1>
            <p className="text-xl md:text-2xl text-gray-300/80 font-light mb-6">
              {t('projectSaven.heroTagline')}
            </p>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
              {t('projectSaven.heroDesc')}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  {t('projectSaven.expressInterest')}
                </Button>
              </Link>
              {project?.website_url && (
                <a href={project.website_url} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="border-orange-400/40 text-orange-300 hover:bg-orange-500/10 px-8 py-6 text-lg">
                    <ExternalLink className="w-5 h-5 mr-2" /> {t('projectSaven.visitWebsite')}
                  </Button>
                </a>
              )}
              <a href="/documents/saven-infrastructure.pdf" target="_blank" rel="noopener noreferrer" download="SAVEN-Infrastructure-of-Continuous-Execution.pdf">
                <Button size="lg" variant="outline" className="border-orange-400/40 text-orange-300 hover:bg-orange-500/10 px-8 py-6 text-lg">
                  <Download className="w-5 h-5 mr-2" />
                  SAVEN Infrastructure (PDF)
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What is SAVEN */}
      <section className="py-20 bg-gradient-to-b from-[#0d0f1a] to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <img src={acronymImg} alt="S.A.V.E.N." className="h-24 mx-auto mb-6 rounded-lg" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('projectSaven.systemTitle')} <span className="text-orange-400">{t('projectSaven.systemHighlight')}</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('projectSaven.systemDesc')}
            </p>
          </div>

          {/* What it IS vs IS NOT */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            <Card className="bg-card/50 border-red-500/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-red-400">{t('projectSaven.whatItIsNot')}</h3>
                <div className="space-y-3">
                  {['notItem1', 'notItem2', 'notItem3', 'notItem4'].map((key, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <XCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{t(`projectSaven.${key}`)}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="bg-card/50 border-green-500/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-green-400">{t('projectSaven.whatItIs')}</h3>
                <div className="space-y-3">
                  {['isItem1', 'isItem2', 'isItem3', 'isItem4'].map((key, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{t(`projectSaven.${key}`)}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <blockquote className="max-w-3xl mx-auto text-center text-xl italic text-orange-300/80 border-l-4 border-orange-400 pl-6 py-2">
            "{t('projectSaven.quote')}"
          </blockquote>
        </div>
      </section>

      {/* BioMath Architecture */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {t('projectSaven.archTitle')} <span className="text-orange-400">{t('projectSaven.archHighlight')}</span>
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { level: 'Level 1', name: 'BioMath Life', descKey: 'archLevel1', color: 'from-blue-500/20 to-blue-600/10', border: 'border-blue-500/30' },
              { level: 'Level 2', name: 'BioMath Core (The Brain)', descKey: 'archLevel2', color: 'from-teal-500/20 to-teal-600/10', border: 'border-teal-500/30' },
              { level: 'Level 3', name: 'SAVEN (The Execution Layer)', descKey: 'archLevel3', color: 'from-orange-500/20 to-orange-600/10', border: 'border-orange-500/30' },
              { level: 'Level 4', name: 'Body Layer', descKey: 'archLevel4', color: 'from-gray-500/20 to-gray-600/10', border: 'border-gray-500/30' },
            ].map((item, i) => (
              <Card key={i} className={`bg-gradient-to-r ${item.color} ${item.border} transition-all hover:-translate-y-1`}>
                <CardContent className="p-6 flex items-center gap-6">
                  <Badge variant="outline" className="text-sm px-3 py-1 flex-shrink-0">{item.level}</Badge>
                  <div>
                    <h3 className="text-lg font-bold">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">{t(`projectSaven.${item.descKey}`)}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-6 italic">
            {t('projectSaven.archNote')}
          </p>
        </div>
      </section>

      {/* The SAVEN Cycle */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            {t('projectSaven.cycleTitle')} <span className="text-orange-400">{t('projectSaven.cycleHighlight')}</span>
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            {t('projectSaven.cycleDesc')}
          </p>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { num: '1', titleKey: 'cycleStep1', descKey: 'cycleStep1Desc', icon: Brain },
              { num: '2', titleKey: 'cycleStep2', descKey: 'cycleStep2Desc', icon: Zap },
              { num: '3', titleKey: 'cycleStep3', descKey: 'cycleStep3Desc', icon: CheckCircle2 },
              { num: '4', titleKey: 'cycleStep4', descKey: 'cycleStep4Desc', icon: BarChart3 },
              { num: '5', titleKey: 'cycleStep5', descKey: 'cycleStep5Desc', icon: ShieldCheck },
            ].map((item, i) => (
              <Card key={i} className="bg-card/50 border-orange-500/10 hover:border-orange-500/30 transition-all text-center">
                <CardContent className="p-5">
                  <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center mx-auto mb-3">
                    <item.icon className="w-6 h-6 text-orange-400" />
                  </div>
                  <span className="text-xs text-orange-400 font-bold">{t('projectSaven.step')} {item.num}</span>
                  <h3 className="text-base font-semibold mt-1">{t(`projectSaven.${item.titleKey}`)}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{t(`projectSaven.${item.descKey}`)}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Three Environments */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {t('projectSaven.envTitle')} <span className="text-orange-400">{t('projectSaven.envHighlight')}</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: Home, titleKey: 'envHome', subKey: 'envHomeSub', descKey: 'envHomeDesc' },
              { icon: Hospital, titleKey: 'envHospital', subKey: 'envHospitalSub', descKey: 'envHospitalDesc' },
              { icon: Building2, titleKey: 'envInstitution', subKey: 'envInstitutionSub', descKey: 'envInstitutionDesc' },
            ].map((item, i) => (
              <Card key={i} className="bg-gradient-to-b from-card to-card/50 border-orange-500/10 text-center hover:border-orange-500/30 transition-all">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-orange-500/10 flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-8 h-8 text-orange-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-1">{t(`projectSaven.${item.titleKey}`)}</h3>
                  <p className="text-sm text-orange-400 mb-3">{t(`projectSaven.${item.subKey}`)}</p>
                  <p className="text-muted-foreground">{t(`projectSaven.${item.descKey}`)}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-8 italic">
            {t('projectSaven.envNote')}
          </p>
        </div>
      </section>

      {/* Robot & Elderly Image Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <img src={robotElderlyImg} alt="SAVEN robot assisting elderly person" className="rounded-2xl shadow-2xl w-full" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">
                {t('projectSaven.bodyTitle')} <span className="text-orange-400">{t('projectSaven.bodyHighlight')}</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {t('projectSaven.bodyDesc1')}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {t('projectSaven.bodyDesc2')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Robotic Bodies & Physical Devices Integration */}
      <section className="py-20 bg-gradient-to-b from-background via-orange-500/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <Badge className="mb-4 bg-orange-500/15 text-orange-300 border-orange-500/30">
              {t('projectSaven.robotIntegrationHighlight')}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('projectSaven.robotIntegrationTitle')}{' '}
              <span className="text-orange-400">{t('projectSaven.robotIntegrationHighlight')}</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('projectSaven.robotIntegrationLead')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { icon: Bot, titleKey: 'robotIntegrationItem1Title', descKey: 'robotIntegrationItem1Desc' },
              { icon: Wrench, titleKey: 'robotIntegrationItem2Title', descKey: 'robotIntegrationItem2Desc' },
              { icon: Wifi, titleKey: 'robotIntegrationItem3Title', descKey: 'robotIntegrationItem3Desc' },
              { icon: Truck, titleKey: 'robotIntegrationItem4Title', descKey: 'robotIntegrationItem4Desc' },
              { icon: Stethoscope, titleKey: 'robotIntegrationItem5Title', descKey: 'robotIntegrationItem5Desc' },
              { icon: Layers, titleKey: 'robotIntegrationItem6Title', descKey: 'robotIntegrationItem6Desc' },
            ].map((item, i) => (
              <Card key={i} className="bg-card/60 border-orange-500/15 hover:border-orange-500/40 hover:-translate-y-1 transition-all">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-orange-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{t(`projectSaven.${item.titleKey}`)}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t(`projectSaven.${item.descKey}`)}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="text-center text-base md:text-lg text-orange-300/80 mt-10 max-w-3xl mx-auto italic">
            {t('projectSaven.robotIntegrationFooter')}
          </p>

          {/* Impact metrics — value for people and business */}
          <div className="mt-16 max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <Badge className="mb-3 bg-orange-500/15 text-orange-300 border-orange-500/30">
                {t('projectSaven.impactBadge')}
              </Badge>
              <h3 className="text-2xl md:text-3xl font-bold">
                {t('projectSaven.impactTitle')}{' '}
                <span className="text-orange-400">{t('projectSaven.impactHighlight')}</span>
              </h3>
              <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
                {t('projectSaven.impactLead')}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { icon: Clock, value: '−45%', unit: t('projectSaven.impactUnitTime'), label: t('projectSaven.impactMetric1Label'), desc: t('projectSaven.impactMetric1Desc') },
                { icon: TimerReset, value: '< 60', unit: t('projectSaven.impactUnitSeconds'), label: t('projectSaven.impactMetric2Label'), desc: t('projectSaven.impactMetric2Desc') },
                { icon: HeartPulse, value: '+38%', unit: t('projectSaven.impactUnitQuality'), label: t('projectSaven.impactMetric3Label'), desc: t('projectSaven.impactMetric3Desc') },
                { icon: AlertTriangle, value: '−62%', unit: t('projectSaven.impactUnitIncidents'), label: t('projectSaven.impactMetric4Label'), desc: t('projectSaven.impactMetric4Desc') },
                { icon: DollarSign, value: '−30%', unit: t('projectSaven.impactUnitCost'), label: t('projectSaven.impactMetric5Label'), desc: t('projectSaven.impactMetric5Desc') },
                { icon: Smile, value: '4.8 / 5', unit: t('projectSaven.impactUnitSatisfaction'), label: t('projectSaven.impactMetric6Label'), desc: t('projectSaven.impactMetric6Desc') },
              ].map((m, i) => (
                <Card key={i} className="bg-gradient-to-br from-orange-500/10 via-card/60 to-card/60 border-orange-500/20 hover:border-orange-500/50 hover:-translate-y-1 transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-orange-500/15 flex items-center justify-center">
                        <m.icon className="w-5 h-5 text-orange-400" />
                      </div>
                      <span className="text-xs uppercase tracking-wider text-muted-foreground">{m.unit}</span>
                    </div>
                    <div className="text-3xl md:text-4xl font-extrabold text-orange-400 mb-1 leading-none">
                      {m.value}
                    </div>
                    <div className="text-sm font-semibold mb-2">{m.label}</div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{m.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <p className="text-center text-xs text-muted-foreground/70 mt-6 max-w-3xl mx-auto">
              {t('projectSaven.impactDisclaimer')}
            </p>
          </div>
        </div>
      </section>


      {/* Post-Hospital Bridge */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              {t('projectSaven.bridgeTitle')} <span className="text-orange-400">{t('projectSaven.bridgeHighlight')}</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-card border-red-500/20">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-red-400 mb-3">{t('projectSaven.bridgeProblem')}</h3>
                  <p className="text-muted-foreground">{t('projectSaven.bridgeProblemDesc')}</p>
                </CardContent>
              </Card>
              <Card className="bg-card border-orange-500/20">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-orange-400 mb-3">{t('projectSaven.bridgeSolution')}</h3>
                  <p className="text-muted-foreground">{t('projectSaven.bridgeSolutionDesc')}</p>
                </CardContent>
              </Card>
              <Card className="bg-card border-green-500/20">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-green-400 mb-3">{t('projectSaven.bridgeImpact')}</h3>
                  <p className="text-muted-foreground">{t('projectSaven.bridgeImpactDesc')}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Presentation Download */}
      <section className="py-16 bg-gradient-to-r from-[#0d0f1a] to-[#1a1020]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              {t('projectSaven.presentationTitle')} <span className="text-orange-400">{t('projectSaven.presentationHighlight')}</span>
            </h2>
            <p className="text-gray-300 mb-8">
              {t('projectSaven.presentationDesc')}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/documents/saven-infrastructure.pdf" target="_blank" rel="noopener noreferrer" download="SAVEN-Infrastructure-of-Continuous-Execution.pdf">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg">
                  <Download className="w-5 h-5 mr-2" /> {t('projectSaven.downloadPDF')}
                </Button>
              </a>
              <Button size="lg" variant="outline" className="border-orange-400/40 text-orange-300 hover:bg-orange-500/10 px-8 py-6 text-lg"
                onClick={() => handleShare('SAVEN Infrastructure of Continuous Execution')}>
                <Share2 className="w-5 h-5 mr-2" /> {t('projectSaven.share')}
              </Button>
              <Button size="lg" variant="outline" className="border-orange-400/40 text-orange-300 hover:bg-orange-500/10 px-8 py-6 text-lg"
                onClick={() => handleSend('SAVEN Infrastructure of Continuous Execution')}>
                <Mail className="w-5 h-5 mr-2" /> {t('projectSaven.send')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Infographics Gallery */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-orange-400">{t('projectSaven.infographicsTitle')}</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {infographics.map((item, i) => (
              <Card key={i} className="bg-card overflow-hidden border-border/50 hover:border-orange-500/30 transition-all group">
                <div className="cursor-pointer" onClick={() => { setLightboxImg(item.src); setLightboxOpen(true); }}>
                  <img src={item.src} alt={item.title} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <CardContent className="p-4">
                  <p className="font-semibold text-sm mb-3">{item.title}</p>
                  <div className="flex flex-wrap gap-2">
                    <Button size="sm" variant="outline" onClick={() => handleDownload(item.src, `saven-${i + 1}.png`)}>
                      <Download className="w-3 h-3 mr-1" /> {t('projectSaven.download')}
                    </Button>
                    <Button size="sm" variant="outline" onClick={() => handleCopy(item.src)}>
                      <Copy className="w-3 h-3 mr-1" /> {t('projectSaven.copy')}
                    </Button>
                    <Button size="sm" variant="outline" onClick={() => handleShare(item.title)}>
                      <Share2 className="w-3 h-3 mr-1" /> {t('projectSaven.share')}
                    </Button>
                    <Button size="sm" variant="outline" onClick={() => handleSend(item.title)}>
                      <Mail className="w-3 h-3 mr-1" /> {t('projectSaven.send')}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setLightboxOpen(false)}>
          <img src={lightboxImg} alt="SAVEN Infographic" className="max-w-full max-h-[90vh] object-contain rounded-lg" />
        </div>
      )}

      {/* Economic Logic */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {t('projectSaven.econTitle')} <span className="text-orange-400">{t('projectSaven.econHighlight')}</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Network, titleKey: 'econCost', descKey: 'econCostDesc' },
              { icon: BarChart3, titleKey: 'econLTV', descKey: 'econLTVDesc' },
              { icon: ShieldCheck, titleKey: 'econRisk', descKey: 'econRiskDesc' },
            ].map((item, i) => (
              <Card key={i} className="bg-card/50 border-orange-500/10 hover:border-orange-500/30 transition-all">
                <CardContent className="p-6 text-center">
                  <item.icon className="w-8 h-8 text-orange-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{t(`projectSaven.${item.titleKey}`)}</h3>
                  <p className="text-sm text-muted-foreground">{t(`projectSaven.${item.descKey}`)}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center text-muted-foreground mt-8 text-lg italic">
            {t('projectSaven.econNote')}
          </p>
        </div>
      </section>

      {/* Built for Providers */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            {t('projectSaven.providersTitle')} <span className="text-orange-400">{t('projectSaven.providersHighlight')}</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            {t('projectSaven.providersDesc')}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { icon: Hospital, titleKey: 'provCare' },
              { icon: ShieldCheck, titleKey: 'provInsurance' },
              { icon: Cpu, titleKey: 'provDevice' },
              { icon: Building2, titleKey: 'provInfra' },
            ].map((item, i) => (
              <Card key={i} className="bg-card/50 border-border/50 text-center hover:border-orange-500/30 transition-all">
                <CardContent className="p-6">
                  <item.icon className="w-8 h-8 text-orange-400 mx-auto mb-3" />
                  <p className="font-semibold text-sm">{t(`projectSaven.${item.titleKey}`)}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Highlights */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {t('projectSaven.investTitle')} <span className="text-orange-400">{t('projectSaven.investHighlight')}</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-card/50 border border-border/50">
                <ChevronRight className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                <p className="text-muted-foreground">{t(`projectSaven.invest${i}`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Formula */}
      <section className="py-16 bg-gradient-to-r from-[#0d0f1a] to-[#1a1020]">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">{t('projectSaven.formulaTitle')}</h3>
          <div className="flex flex-wrap items-center justify-center gap-4 text-lg">
            <span className="bg-teal-500/20 text-teal-300 px-6 py-3 rounded-lg font-semibold">BioMath Core</span>
            <span className="text-white text-2xl">+</span>
            <span className="bg-orange-500/20 text-orange-300 px-6 py-3 rounded-lg font-semibold">SAVEN</span>
            <span className="text-white text-2xl">+</span>
            <span className="bg-gray-500/20 text-gray-300 px-6 py-3 rounded-lg font-semibold">{t('projectSaven.formulaBodies')}</span>
            <span className="text-white text-2xl">=</span>
            <span className="bg-green-500/20 text-green-300 px-6 py-3 rounded-lg font-bold">{t('projectSaven.formulaResult')}</span>
          </div>
          <p className="text-gray-400 mt-6 italic">
            {t('projectSaven.formulaNote')}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#0d0f1a] to-[#1a0f0a]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t('projectSaven.ctaTitle')}
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            {t('projectSaven.ctaDesc')}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-6 text-lg">
                {t('projectSaven.submitInterest')} <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/projects">
              <Button size="lg" variant="outline" className="border-gray-500 text-gray-300 hover:bg-white/5 px-10 py-6 text-lg">
                {t('projectSaven.viewAllProjects')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <InvestorPageDisclaimer />
      </div>

      <Footer />
    </div>
  );
};

export default SAVEN;
