import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  TrendingUp, ArrowRight, ExternalLink, Pill, Activity, Shield, 
  BarChart3, Users, Stethoscope, Brain, AlertTriangle, ChevronRight,
  Scan, HeartPulse, FileText, Clock
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import InvestorPageDisclaimer from '@/components/InvestorPageDisclaimer';
import mrxHero from '@/assets/projects/mrx-hero.jpg';

const MRXHealth = () => {
  const [project, setProject] = useState<any>(null);
  const { toast } = useToast();

  useEffect(() => {
    const fetchProject = async () => {
      const { data } = await supabase
        .from('projects')
        .select('*')
        .eq('slug', 'mrx-health')
        .single();
      if (data) setProject(data);
    };
    fetchProject();
  }, []);

  return (
    <div className="min-h-screen bg-background theme-mrx-health">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={mrxHero} alt="MRX.Health - Medication Reactions Explorer" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/95 via-[#0a1628]/80 to-[#0a1628]/60" />
        </div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-cyan-500/20 text-cyan-300 border-cyan-500/30 text-sm px-4 py-1">
              Digital Health Platform
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-2 tracking-tight">
              MRX<span className="text-cyan-400">.Health</span>
            </h1>
            <p className="text-xl md:text-2xl text-cyan-200/80 font-light tracking-widest uppercase mb-6">
              Medication Reactions Explorer
            </p>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
              Know your medicine inside out. We track your pills and monitor how you feel — keeping you safe and your doctor informed.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-6 text-lg">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  Express Interest
                </Button>
              </Link>
              {project?.website_url && (
                <a href={project.website_url} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="border-cyan-400/40 text-cyan-300 hover:bg-cyan-500/10 px-8 py-6 text-lg">
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Visit Website
                  </Button>
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* What is MRX.Health */}
      <section className="py-20 bg-gradient-to-b from-[#0a1628] to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What is <span className="text-cyan-400">MRX.Health</span>?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              MRX.Health is a Medication Reactions Explorer — a digital health tool that helps users track their medications, 
              monitor side effects and reactions, and share transparent data with healthcare providers. 
              It's not medical advice — it's what's actually happening with your body when you take your pills.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Pill, title: 'Medication Tracking', desc: 'Log every pill you take with dosage, timing, and frequency — building a complete medication history.' },
              { icon: Scan, title: 'Bio-Scan Analysis', desc: 'Real-time molecular identification and stability assessment of your medications.' },
              { icon: Activity, title: 'Reaction Monitoring', desc: 'Track how you feel after taking medications — log symptoms, side effects, and changes in well-being.' },
              { icon: Shield, title: 'Interaction Checks', desc: 'Automatic cross-referencing of your medication list to flag potential drug-to-drug interactions.' },
            ].map((item, i) => (
              <Card key={i} className="bg-card/50 border-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 rounded-xl bg-cyan-500/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            How <span className="text-cyan-400">It Works</span>
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {[
              { step: '01', icon: Pill, title: 'Add Your Medications', desc: 'Enter all prescriptions, supplements, and over-the-counter drugs you currently take. The system builds your personal medication profile.' },
              { step: '02', icon: Scan, title: 'Bio-Scan & Molecular Analysis', desc: 'MRX analyzes each medication for molecular stability, checks known interaction databases, and creates a real-time safety profile.' },
              { step: '03', icon: HeartPulse, title: 'Track How You Feel', desc: 'Log daily symptoms, mood changes, energy levels, and any unusual reactions. The platform correlates your reports with medication timing.' },
              { step: '04', icon: FileText, title: 'Share Reports with Your Doctor', desc: 'Generate clear, data-driven reports showing medication timelines, reaction patterns, and interaction alerts — ready for your healthcare provider.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start group">
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-cyan-600/10 border border-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-cyan-400 font-bold text-xl">{item.step}</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                    <item.icon className="w-5 h-5 text-cyan-400" />
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Key <span className="text-cyan-400">Capabilities</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            A comprehensive medication management ecosystem designed for transparency and safety
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { icon: Pill, title: 'Complete Medication Log', desc: 'Track prescriptions, OTC drugs, vitamins, and supplements in one unified dashboard.' },
              { icon: Brain, title: 'AI-Powered Pattern Detection', desc: 'Machine learning algorithms identify correlations between medications and reported symptoms over time.' },
              { icon: Shield, title: 'Drug Interaction Alerts', desc: 'Real-time warnings when your medication combinations may pose interaction risks.' },
              { icon: BarChart3, title: 'Symptom Analytics', desc: 'Visual charts and timelines showing how your body responds to each medication across days, weeks, and months.' },
              { icon: Stethoscope, title: 'Doctor-Ready Reports', desc: 'Generate professional medical reports that your healthcare provider can review and act upon.' },
              { icon: Clock, title: 'Dosage Reminders', desc: 'Smart reminders to take medications on time, with tracking of missed or delayed doses.' },
            ].map((item, i) => (
              <Card key={i} className="bg-card border-border/50 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/5">
                <CardContent className="p-6">
                  <item.icon className="w-8 h-8 text-cyan-400 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Who It Serves */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Who <span className="text-cyan-400">It Serves</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: Users, title: 'Patients & Individuals', desc: 'Anyone taking multiple medications who wants to understand how drugs interact and affect their daily well-being.' },
              { icon: Stethoscope, title: 'Healthcare Providers', desc: 'Doctors and pharmacists who need transparent, patient-reported data to make better-informed treatment decisions.' },
              { icon: HeartPulse, title: 'Caregivers & Families', desc: 'Family members managing medications for elderly parents or dependents who need reliable tracking and alerts.' },
            ].map((item, i) => (
              <Card key={i} className="bg-gradient-to-b from-card to-card/50 border-cyan-500/10 text-center hover:border-cyan-500/30 transition-all">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-cyan-500/10 flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Important Disclaimer */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <AlertTriangle className="w-10 h-10 text-amber-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">No Medical Advice</h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              MRX.Health does not provide medical advice, diagnosis, or treatment recommendations. 
              The platform tracks and visualizes data about your medications and how you report feeling — 
              nothing more. Always consult your healthcare provider for medical decisions.
            </p>
            <p className="text-sm text-muted-foreground mt-4 italic">
              "No medical advice. Just what's happening."
            </p>
          </div>
        </div>
      </section>

      {/* Investment Highlights */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Investment <span className="text-cyan-400">Highlights</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              'Growing global demand for medication safety and drug interaction monitoring tools',
              'Subscription-based SaaS model with potential for B2B healthcare provider licensing',
              'AI-driven pattern detection creates a defensible data moat over time',
              'Part of the Digital Invest digital health ecosystem with cross-platform synergies',
              'Addresses a real patient safety gap — adverse drug reactions are a leading cause of hospital visits',
              'Scalable architecture ready for multi-language and multi-region deployment',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-card/50 border border-border/50">
                <ChevronRight className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                <p className="text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#0a1628] to-[#0d2137]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Interested in MRX.Health?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Submitting interest is non-binding and does not create any agreement. 
            All potential participation is discussed individually and offline.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white px-10 py-6 text-lg">
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

      {/* Disclaimer */}
      <div className="container mx-auto px-4 py-12">
        <InvestorPageDisclaimer />
      </div>

      <Footer />
    </div>
  );
};

export default MRXHealth;
