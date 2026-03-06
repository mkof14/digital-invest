import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, ExternalLink, Moon, Heart, Shield, Users, Sparkles, Eye } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import InvestorPageDisclaimer from '@/components/InvestorPageDisclaimer';
import InterestForm from '@/components/InterestForm';
import lunaHero from '@/assets/projects/luna-hero.jpg';
import lunaLogo from '@/assets/luna-logo.png';

const LunaBalance = () => {
  const [showInterestForm, setShowInterestForm] = useState(false);
  const [project, setProject] = useState<any>(null);

  useEffect(() => {
    const fetchProject = async () => {
      const { data } = await supabase
        .from('projects')
        .select('*')
        .eq('slug', 'luna-balance')
        .single();
      if (data) setProject(data);
    };
    fetchProject();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={lunaHero} alt="Luna Balance - Return to Yourself" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/40" />
        </div>
        <div className="container mx-auto px-4 relative z-10 py-24">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <img src={lunaLogo} alt="Luna Logo" className="h-20 w-20 object-contain" />
              <Badge className="bg-primary/10 text-primary border-primary/30">Women's Wellness</Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Luna Balance
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 italic">
              The Platform for Your Understanding
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Helping women understand themselves better, not fix themselves. A personal anchor and a tool for mindfulness.
            </p>
            <p className="text-sm text-muted-foreground mb-8">
              A portfolio project developed and operated by Digital Invest Inc.
            </p>
            <Button size="lg" onClick={() => setShowInterestForm(true)} className="text-lg px-8">
              Submit Interest
            </Button>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Philosophy Section */}
        <section className="mb-20">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">LUNA Philosophy: Changing is Natural</h2>
            <p className="text-lg text-muted-foreground italic mb-8">Embracing wholeness through every phase.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Moon, title: 'Natural Cycles', desc: 'The moon changes, but remains whole.' },
              { icon: Sparkles, title: 'Life Phases', desc: 'Your life is also about periods and transitions.' },
              { icon: Heart, title: 'Acceptance', desc: 'Being different is normal.' },
              { icon: Shield, title: 'Understanding', desc: 'Transition from "diagnosis" to "acceptance".' },
            ].map((item, i) => (
              <Card key={i} className="text-center border-border/50 hover:shadow-elevated transition-all duration-300">
                <CardContent className="pt-8 pb-6">
                  <item.icon className="w-10 h-10 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* The Problem */}
        <section className="mb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">The Invisible Problem: When It's Heavy Inside</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <Moon className="w-5 h-5 mt-1 text-primary shrink-0" />
                    <span>Unexplained fatigue, energy shifts, feeling "I don't understand myself."</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Moon className="w-5 h-5 mt-1 text-primary shrink-0" />
                    <span>It's not an illness. But it's important.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Moon className="w-5 h-5 mt-1 text-primary shrink-0" />
                    <span>Medicine seeks diagnosis. Apps demand discipline. Result: Overload and abandonment.</span>
                  </li>
                </ul>
              </div>
              <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10">
                <h3 className="text-xl font-semibold mb-4 text-primary">LUNA's Approach</h3>
                <p className="text-muted-foreground">LUNA offers acceptance instead of pressure. A gentle path to self-understanding without the burden of clinical frameworks or performance metrics.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Silence Technology */}
        <section className="mb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Silence Technology: Your Path to Self</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <ul className="space-y-4">
                  {[
                    'Low-pressure check-in',
                    'Clear state description',
                    'Translating sensations into human language',
                    'No graphs. No ratings. Just silence and clarity.',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Eye className="w-5 h-5 mt-1 text-primary shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-muted/30 rounded-2xl p-8 border border-border/50">
                <h3 className="text-xl font-semibold mb-4">Relationship Mode: A Bridge Between Hearts</h3>
                <ul className="space-y-3 text-muted-foreground text-sm">
                  <li>🌙 LUNA helps explain your state to loved ones without conflict.</li>
                  <li>🌙 A translator from 'internal' language to common human language.</li>
                  <li>🌙 Reduced conflict and less guilt.</li>
                </ul>
                <p className="text-xs text-muted-foreground mt-4 italic">LUNA — your translator in relationships</p>
              </div>
            </div>
          </div>
        </section>

        {/* What LUNA Gives */}
        <section className="mb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">What Does LUNA Give a Woman?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: Shield, text: 'Reduced anxiety, restored trust in your reactions, ability to avoid rash decisions during overload.' },
                { icon: Heart, text: 'Sustainable reconnection with yourself.' },
                { icon: Sparkles, text: 'Focus on the feeling of empowerment and inner peace.' },
                { icon: Users, text: 'Better communication with loved ones through relationship translation tools.' },
              ].map((item, i) => (
                <Card key={i} className="border-border/50 hover:shadow-elevated transition-all duration-300">
                  <CardContent className="flex items-start gap-4 pt-6">
                    <item.icon className="w-8 h-8 text-primary shrink-0" />
                    <p className="text-muted-foreground">{item.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Target Audience */}
        <section className="mb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Who is This Project For?</h2>
            <p className="text-lg text-muted-foreground mb-6 italic">Inclusivity and Emotional Connection.</p>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-border/50">
                <CardContent className="pt-6 text-center">
                  <Users className="w-10 h-10 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">Primary Audience</h3>
                  <p className="text-sm text-muted-foreground">Active, educated women aged 25–55.</p>
                </CardContent>
              </Card>
              <Card className="border-border/50">
                <CardContent className="pt-6 text-center">
                  <Sparkles className="w-10 h-10 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">Seeking Support</h3>
                  <p className="text-sm text-muted-foreground">Living at a high pace, seeking support, not a doctor.</p>
                </CardContent>
              </Card>
              <Card className="border-border/50">
                <CardContent className="pt-6 text-center">
                  <Heart className="w-10 h-10 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">Partners & Families</h3>
                  <p className="text-sm text-muted-foreground">Secondary audience: partners and families who want to understand.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Future Vision */}
        <section className="mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Return to Yourself</h2>
            <p className="text-xl text-muted-foreground italic mb-4">Future Vision</p>
            <div className="bg-primary/5 rounded-2xl p-10 border border-primary/10 max-w-2xl mx-auto">
              <p className="text-lg text-muted-foreground mb-4">LUNA doesn't change a woman; it helps her return to herself.</p>
              <p className="text-muted-foreground mb-4">A personal anchor and a tool for mindfulness.</p>
              <p className="text-muted-foreground font-medium">A strong and timely project.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-16 text-center">
          <Button size="lg" onClick={() => setShowInterestForm(true)} className="text-lg px-8">
            Submit Interest
          </Button>
          <p className="text-xs text-muted-foreground mt-4 max-w-lg mx-auto">
            Submitting interest is non-binding and does not create any agreement. All potential participation is discussed individually and offline.
          </p>
        </section>

        <Link to="/projects" className="inline-flex items-center gap-2 text-primary hover:underline mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to All Projects
        </Link>

        <div className="mt-12">
          <InvestorPageDisclaimer />
        </div>
      </div>

      {showInterestForm && (
        <InterestForm
          projectId={project?.id}
          projectTitle="Luna Balance"
          onClose={() => setShowInterestForm(false)}
        />
      )}

      <Footer />
    </div>
  );
};

export default LunaBalance;
