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
  CheckCircle2, XCircle, Download, Copy, Share2, Mail
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import InvestorPageDisclaimer from '@/components/InvestorPageDisclaimer';
import heroImg from '@/assets/projects/saven-hero.png';
import logoImg from '@/assets/projects/saven-logo.png';
import robotImg from '@/assets/projects/saven-robot.png';
import robotElderlyImg from '@/assets/projects/saven-robot-elderly.jpg';
import infographicImg from '@/assets/projects/saven-infographic.png';
import acronymImg from '@/assets/projects/saven-acronym.png';

const SAVEN = () => {
  const [project, setProject] = useState<any>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImg, setLightboxImg] = useState('');
  const { toast } = useToast();

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
    toast({ title: 'Download started', description: name });
  };

  const handleCopy = async (src: string) => {
    try {
      const res = await fetch(src);
      const blob = await res.blob();
      await navigator.clipboard.write([new ClipboardItem({ [blob.type]: blob })]);
      toast({ title: 'Copied to clipboard' });
    } catch {
      await navigator.clipboard.writeText(window.location.origin + src);
      toast({ title: 'Link copied to clipboard' });
    }
  };

  const handleShare = async (title: string) => {
    if (navigator.share) {
      await navigator.share({ title, url: window.location.href });
    } else {
      await navigator.clipboard.writeText(window.location.href);
      toast({ title: 'Link copied for sharing' });
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
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Projects
            </Link>
            <Badge className="mb-4 bg-orange-500/20 text-orange-300 border-orange-500/30 text-sm px-4 py-1">
              Infrastructure of Continuous Execution
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-2 tracking-tight">
              S<span className="text-orange-400">A</span>V<span className="text-blue-400">E</span>N
            </h1>
            <p className="text-xl md:text-2xl text-gray-300/80 font-light mb-6">
              Managing Life Between Episodes
            </p>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
              Bridging the gap between digital understanding and physical reality. 
              We don't make medicine — we make sure life doesn't fall apart between the episodes.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  Express Interest
                </Button>
              </Link>
              {project?.website_url && (
                <a href={project.website_url} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="border-orange-400/40 text-orange-300 hover:bg-orange-500/10 px-8 py-6 text-lg">
                    <ExternalLink className="w-5 h-5 mr-2" /> Visit Website
                  </Button>
                </a>
              )}
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
              The System of <span className="text-orange-400">Continuous Execution</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Medicine treats episodes. But care doesn't break clinically — it breaks operationally. 
              SAVEN is the execution layer embedded between digital understanding and physical life. 
              A system that forces plans to be executed, not just recommended.
            </p>
          </div>

          {/* What it IS vs IS NOT */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            <Card className="bg-card/50 border-red-500/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-red-400">What It Is NOT</h3>
                <div className="space-y-3">
                  {[
                    'Not a medical app (requires no cognitive effort)',
                    'Not an AI Assistant (does not rely on user words)',
                    'Not a Robot (robots are just bodies)',
                    'Not a generic Care Platform',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <XCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="bg-card/50 border-green-500/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-green-400">What It IS</h3>
                <div className="space-y-3">
                  {[
                    'The Execution Layer between digital understanding and physical life',
                    'A system that forces plans to be executed, not just recommended',
                    'The intelligence and logic — robots and devices are just the bodies',
                    'Infrastructure for continuity of care',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <blockquote className="max-w-3xl mx-auto text-center text-xl italic text-orange-300/80 border-l-4 border-orange-400 pl-6 py-2">
            "SAVEN is the intelligence and logic. Robots and devices are just the bodies."
          </blockquote>
        </div>
      </section>

      {/* BioMath Architecture */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            The BioMath <span className="text-orange-400">Architecture</span>
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { level: 'Level 1', name: 'BioMath Life', desc: 'Strategy, Philosophy, Standards', color: 'from-blue-500/20 to-blue-600/10', border: 'border-blue-500/30' },
              { level: 'Level 2', name: 'BioMath Core (The Brain)', desc: 'Context, Norms, Deviations — 20 Categories × 200+ Services', color: 'from-teal-500/20 to-teal-600/10', border: 'border-teal-500/30' },
              { level: 'Level 3', name: 'SAVEN (The Execution Layer)', desc: 'Action, Verification, Control', color: 'from-orange-500/20 to-orange-600/10', border: 'border-orange-500/30' },
              { level: 'Level 4', name: 'Body Layer', desc: 'Robots, Devices, Humans', color: 'from-gray-500/20 to-gray-600/10', border: 'border-gray-500/30' },
            ].map((item, i) => (
              <Card key={i} className={`bg-gradient-to-r ${item.color} ${item.border} transition-all hover:-translate-y-1`}>
                <CardContent className="p-6 flex items-center gap-6">
                  <Badge variant="outline" className="text-sm px-3 py-1 flex-shrink-0">{item.level}</Badge>
                  <div>
                    <h3 className="text-lg font-bold">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-6 italic">
            Critical Dependency: Core can exist without SAVEN, but SAVEN is meaningless without Core.
          </p>
        </div>
      </section>

      {/* The SAVEN Cycle */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            The SAVEN <span className="text-orange-400">Cycle</span>
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            This cycle is not about health. It is about the reliability of life.
          </p>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { num: '1', title: 'Context', desc: 'Core determines what is normal', icon: Brain },
              { num: '2', title: 'Action', desc: 'Execute the planned intervention', icon: Zap },
              { num: '3', title: 'Verification', desc: 'Confirm the fact was completed', icon: CheckCircle2 },
              { num: '4', title: 'Control', desc: 'Track deviations from trajectory', icon: BarChart3 },
              { num: '5', title: 'Support', desc: 'Provide continuous assistance', icon: ShieldCheck },
            ].map((item, i) => (
              <Card key={i} className="bg-card/50 border-orange-500/10 hover:border-orange-500/30 transition-all text-center">
                <CardContent className="p-5">
                  <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center mx-auto mb-3">
                    <item.icon className="w-6 h-6 text-orange-400" />
                  </div>
                  <span className="text-xs text-orange-400 font-bold">STEP {item.num}</span>
                  <h3 className="text-base font-semibold mt-1">{item.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
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
            Three Environments. <span className="text-orange-400">One Logic.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: Home, title: 'HOME', subtitle: 'Autonomy & Routine', desc: 'SAVEN maintains daily routines and catches deviations before they escalate.' },
              { icon: Hospital, title: 'HOSPITAL', subtitle: 'Restoration & Staffing', desc: 'Ensures continuity of care during the most vulnerable medical episodes.' },
              { icon: Building2, title: 'INSTITUTION', subtitle: 'Transparency & Transition', desc: 'Creates seamless care bridges between environments and care teams.' },
            ].map((item, i) => (
              <Card key={i} className="bg-gradient-to-b from-card to-card/50 border-orange-500/10 text-center hover:border-orange-500/30 transition-all">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-orange-500/10 flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-8 h-8 text-orange-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                  <p className="text-sm text-orange-400 mb-3">{item.subtitle}</p>
                  <p className="text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-8 italic">
            Policies, rules, and roles change. The logic of execution and verification remains identical.
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
                Agnostic to the <span className="text-orange-400">Body</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Apps require cognitive effort and break under stress. Robots make movements but take no responsibility. 
                SAVEN is the link — independent of body form. Whether the actor is a human nurse or a robotic arm, 
                SAVEN validates the fact.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                It connects the digital and the physical without fantasies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Post-Hospital Bridge */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              The Critical Use Case: <span className="text-orange-400">Post-Hospital Bridge</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-card border-red-500/20">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-red-400 mb-3">Problem</h3>
                  <p className="text-muted-foreground">The post-hospital period is the most vulnerable moment in a person's life.</p>
                </CardContent>
              </Card>
              <Card className="bg-card border-orange-500/20">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-orange-400 mb-3">Solution</h3>
                  <p className="text-muted-foreground">SAVEN holds the routine together when the patient is too weak to do so. It retains routine execution and fixes deviations early.</p>
                </CardContent>
              </Card>
              <Card className="bg-card border-green-500/20">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-green-400 mb-3">Impact</h3>
                  <p className="text-muted-foreground">Fewer readmissions, less chaos, less pressure on the family.</p>
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
              SAVEN <span className="text-orange-400">Presentation</span>
            </h2>
            <p className="text-gray-300 mb-8">
              Download the full SAVEN Infrastructure of Continuous Execution presentation.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/documents/SAVEN_Infrastructure_of_Continuous_Execution.pdf" download>
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg">
                  <Download className="w-5 h-5 mr-2" /> Download Presentation (PDF)
                </Button>
              </a>
              <Button size="lg" variant="outline" className="border-orange-400/40 text-orange-300 hover:bg-orange-500/10 px-8 py-6 text-lg"
                onClick={() => handleShare('SAVEN Infrastructure of Continuous Execution')}>
                <Share2 className="w-5 h-5 mr-2" /> Share
              </Button>
              <Button size="lg" variant="outline" className="border-orange-400/40 text-orange-300 hover:bg-orange-500/10 px-8 py-6 text-lg"
                onClick={() => handleSend('SAVEN Infrastructure of Continuous Execution')}>
                <Mail className="w-5 h-5 mr-2" /> Send
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Infographics Gallery */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-orange-400">Infographics</span>
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
                      <Download className="w-3 h-3 mr-1" /> Download
                    </Button>
                    <Button size="sm" variant="outline" onClick={() => handleCopy(item.src)}>
                      <Copy className="w-3 h-3 mr-1" /> Copy
                    </Button>
                    <Button size="sm" variant="outline" onClick={() => handleShare(item.title)}>
                      <Share2 className="w-3 h-3 mr-1" /> Share
                    </Button>
                    <Button size="sm" variant="outline" onClick={() => handleSend(item.title)}>
                      <Mail className="w-3 h-3 mr-1" /> Send
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
            Economic <span className="text-orange-400">Logic</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Network, title: 'High Cost of Exit', desc: 'History cannot be copy-pasted. Accumulated context and trajectories create deep lock-in.' },
              { icon: BarChart3, title: 'Growing LTV', desc: 'Precision increases with duration. The longer the system runs, the more valuable it becomes.' },
              { icon: ShieldCheck, title: 'Risk Reduction', desc: 'Predictable risk for insurers. Every verified action reduces uncertainty.' },
            ].map((item, i) => (
              <Card key={i} className="bg-card/50 border-orange-500/10 hover:border-orange-500/30 transition-all">
                <CardContent className="p-6 text-center">
                  <item.icon className="w-8 h-8 text-orange-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center text-muted-foreground mt-8 text-lg italic">
            The market doesn't need new apps. The market needs infrastructure for continuity.
          </p>
        </div>
      </section>

      {/* Built for Providers */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Built for the <span className="text-orange-400">Providers</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            The human is the beneficiary of the system, but they are not the customer of the infrastructure. 
            SAVEN enables these organizations to guarantee the care they promise.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { icon: Hospital, title: 'Care Organizations' },
              { icon: ShieldCheck, title: 'Insurance Systems' },
              { icon: Cpu, title: 'Device Manufacturers' },
              { icon: Building2, title: 'Infrastructure Projects' },
            ].map((item, i) => (
              <Card key={i} className="bg-card/50 border-border/50 text-center hover:border-orange-500/30 transition-all">
                <CardContent className="p-6">
                  <item.icon className="w-8 h-8 text-orange-400 mx-auto mb-3" />
                  <p className="font-semibold text-sm">{item.title}</p>
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
            Investment <span className="text-orange-400">Highlights</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              'Infrastructure-level play — not an app, but the execution layer for continuous care',
              'Private-label model: partners own the UI, SAVEN owns the continuity logic',
              'Deep integration with BioMath Core (20 categories × 200+ services)',
              'Body-agnostic architecture works with robots, devices, and human caregivers alike',
              'Growing LTV with high switching costs — history and trajectories cannot be replicated',
              'Addresses the critical post-hospital bridge — the most vulnerable moment in patient care',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-card/50 border border-border/50">
                <ChevronRight className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                <p className="text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Formula */}
      <section className="py-16 bg-gradient-to-r from-[#0d0f1a] to-[#1a1020]">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">The Infrastructure Formula</h3>
          <div className="flex flex-wrap items-center justify-center gap-4 text-lg">
            <span className="bg-teal-500/20 text-teal-300 px-6 py-3 rounded-lg font-semibold">BioMath Core</span>
            <span className="text-white text-2xl">+</span>
            <span className="bg-orange-500/20 text-orange-300 px-6 py-3 rounded-lg font-semibold">SAVEN</span>
            <span className="text-white text-2xl">+</span>
            <span className="bg-gray-500/20 text-gray-300 px-6 py-3 rounded-lg font-semibold">Bodies</span>
            <span className="text-white text-2xl">=</span>
            <span className="bg-green-500/20 text-green-300 px-6 py-3 rounded-lg font-bold">System of Continuous Care</span>
          </div>
          <p className="text-gray-400 mt-6 italic">
            It doesn't make a person healthy. It makes the care system work.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#0d0f1a] to-[#1a0f0a]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Interested in SAVEN?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Submitting interest is non-binding and does not create any agreement. 
            All potential participation is discussed individually and offline.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-6 text-lg">
                Submit Interest <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/projects">
              <Button size="lg" variant="outline" className="border-gray-500 text-gray-300 hover:bg-white/5 px-10 py-6 text-lg">
                View All Projects
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
