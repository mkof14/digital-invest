import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  TrendingUp, ArrowRight, ExternalLink, ArrowLeft, ChevronRight,
  ShieldCheck, Activity, Brain, Dna, HeartPulse, FlaskConical,
  Scan, FileText, Pill, Eye, Stethoscope, BarChart3, Users, Lock
} from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import InvestorPageDisclaimer from '@/components/InvestorPageDisclaimer';
import heroImg from '@/assets/projects/baseline-hero.jpg';
import logoImg from '@/assets/projects/baseline-logo.png';

const BaseLine = () => {
  const [project, setProject] = useState<any>(null);

  useEffect(() => {
    const fetchProject = async () => {
      const { data } = await supabase
        .from('projects')
        .select('*')
        .eq('slug', 'baseline')
        .single();
      if (data) setProject(data);
    };
    fetchProject();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="BaseLine — BioMath Core" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b1520]/95 via-[#0b1520]/80 to-[#0b1520]/50" />
        </div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-3xl">
            <Link to="/projects" className="inline-flex items-center text-slate-400 hover:text-slate-200 mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Projects
            </Link>
            <img src={logoImg} alt="BaseLine BioMath Core" className="h-16 md:h-20 mb-6" />
            <Badge className="mb-4 bg-teal-500/20 text-teal-300 border-teal-500/30 text-sm px-4 py-1">
              Digital Health · BioMath Core
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-2 tracking-tight">
              HEALTH <span className="text-teal-400">SIMPLIFIED.</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
              Professional health logic made simple. Understand your data, live a longer life. 
              We translate clinical noise into human clarity.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-6 text-lg">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  Express Interest
                </Button>
              </Link>
              {project?.website_url && (
                <a href={project.website_url} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="border-teal-400/40 text-teal-300 hover:bg-teal-500/10 px-8 py-6 text-lg">
                    <ExternalLink className="w-5 h-5 mr-2" /> Visit Website
                  </Button>
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* What is BaseLine */}
      <section className="py-20 bg-gradient-to-b from-[#0b1520] to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What is <span className="text-teal-400">BaseLine</span>?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              BaseLine is a BioMath Core health intelligence platform. It takes your raw clinical data — 
              blood tests, vitals, biomarkers — and translates them into clear, actionable longevity insights. 
              Learn the logic behind your longevity through dual-opinion science and AI-powered prognostics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Dna, title: 'Biological Anchor', desc: 'Secure BioID with 256-bit encryption creates a unique mathematical anchor for your biological data.' },
              { icon: Activity, title: 'Baseline Vitals', desc: 'Enter your Static Vitals (BP, Heart Rate) — the "Current Location" on your health map.' },
              { icon: FlaskConical, title: 'Lab Synthesis', desc: 'Upload blood tests. Our engine turns raw numbers into Emerald, Amber, or Red status markers.' },
              { icon: Brain, title: 'My Future AI', desc: 'See where your current path leads in 10 years and identify which habit shift moves the needle most.' },
            ].map((item, i) => (
              <Card key={i} className="bg-card/50 border-teal-500/10 hover:border-teal-500/30 transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 rounded-xl bg-teal-500/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-teal-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* The 4-Step Clinical Launch */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            The 4-Step <span className="text-teal-400">Clinical Launch</span>
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Follow this path to move from raw data to actionable life-extension insights.
          </p>
          <div className="max-w-4xl mx-auto space-y-8">
            {[
              { step: '01', icon: Lock, title: 'THE BIOLOGICAL HANDSHAKE', desc: 'Set up your secure BioID. We don\'t just store name and email — we create a unique mathematical anchor for your biological data using 256-bit encryption.' },
              { step: '02', icon: HeartPulse, title: 'BASELINE INGESTION', desc: 'Enter your "Static Vitals" (BP, Heart Rate). Think of this as the "Current Location" on your health map. Without a baseline, we cannot calculate a destination.' },
              { step: '03', icon: FlaskConical, title: 'MARKER SYNTHESIS', desc: 'Upload your Lab Digest (Blood Tests). Our engine reads the "raw numbers" that doctors often don\'t have time to explain, turning them into Emerald, Amber, or Red status.' },
              { step: '04', icon: Brain, title: 'PROGNOSTIC LAUNCH', desc: 'Run the "My Future AI" (Trajectory). See where your current path leads in 10 years and identify exactly which habit shift moves the needle the most.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start group">
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500/20 to-teal-600/10 border border-teal-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-teal-400 font-bold text-xl">{item.step}</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                    <item.icon className="w-5 h-5 text-teal-400" />
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* My Future AI */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Brain className="w-12 h-12 text-teal-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              MY FUTURE <span className="text-teal-400">AI</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Longitudinal statistical forecasting and biological decay modeling.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <Card className="bg-card border-teal-500/20">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2 text-teal-400">Predictive Shift</h3>
                  <p className="text-muted-foreground">
                    Shifting the focus from "reactive" healthcare to a "predictive maintenance" model 
                    of biological optimization.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card border-teal-500/20">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2 text-teal-400">Statistical Fidelity</h3>
                  <p className="text-muted-foreground">
                    Projections derived from large-scale longitudinal datasets (NHANES) cross-referenced 
                    with your personal biomarker history.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Clinical <span className="text-teal-400">Services</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {[
              { icon: BarChart3, name: 'My Health Score' },
              { icon: FlaskConical, name: 'Lab Digest' },
              { icon: Brain, name: 'My Future AI' },
              { icon: Stethoscope, name: 'Symptom Helper' },
              { icon: ShieldCheck, name: 'Safety Check' },
              { icon: Activity, name: 'Recovery Tracker' },
              { icon: Dna, name: 'Genomic Review' },
              { icon: Scan, name: 'Neural Pain Map' },
              { icon: FileText, name: 'Orphan Review' },
              { icon: HeartPulse, name: 'Post-Viral Audit' },
              { icon: FileText, name: 'Procedure Audit' },
              { icon: ShieldCheck, name: 'Immunization Log' },
              { icon: Pill, name: 'Precision Refill' },
              { icon: Users, name: 'Condition Coach' },
              { icon: Pill, name: 'Meds Reminder' },
              { icon: BarChart3, name: 'Cost Planner' },
              { icon: Scan, name: 'Study Finder' },
              { icon: Brain, name: 'Insight Pro' },
              { icon: Eye, name: 'Vision Lab' },
              { icon: Brain, name: 'Neural Link' },
            ].map((item, i) => (
              <Card key={i} className="bg-card/50 border-border/50 hover:border-teal-500/30 transition-all">
                <CardContent className="p-4 flex flex-col items-center text-center gap-2">
                  <item.icon className="w-6 h-6 text-teal-400" />
                  <span className="text-sm font-medium">{item.name}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Highlights */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Investment <span className="text-teal-400">Highlights</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              'Built on BioMath Core — the foundational architecture powering 200+ health services',
              'AI-driven predictive health modeling shifts healthcare from reactive to preventive',
              'Clinical-grade data synthesis with NHANES longitudinal dataset integration',
              '20+ clinical services spanning diagnostics, genomics, AI forecasting, and medication management',
              'SaaS subscription model with B2B licensing potential for clinics and health systems',
              'Scalable, secure architecture with 256-bit encryption and regulatory-ready compliance',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-card/50 border border-border/50">
                <ChevronRight className="w-5 h-5 text-teal-400 mt-0.5 flex-shrink-0" />
                <p className="text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#0b1520] to-[#0d1f2d]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Interested in BaseLine?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Submitting interest is non-binding and does not create any agreement. 
            All potential participation is discussed individually and offline.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white px-10 py-6 text-lg">
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

export default BaseLine;
