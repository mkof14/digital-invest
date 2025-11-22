import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import InvestorDisclaimer from '@/components/InvestorDisclaimer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Download, FileText } from 'lucide-react';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';

const InvestorHandbook = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.email) {
      toast.error('Email is required');
      return;
    }

    try {
      const { error } = await supabase
        .from('investor_leads')
        .insert({
          name: formData.name || 'Handbook Download',
          email: formData.email,
          project_id: null,
          amount_range: 'undisclosed',
          source: 'investor-handbook',
          comments: 'Downloaded Investor Handbook'
        });

      if (error) throw error;

      setEmailSubmitted(true);
      toast.success('Thank you! You can now download the handbook.');
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to submit form');
    }
  };

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/investor-handbook-pdf`, {
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`
        }
      });

      if (!response.ok) {
        throw new Error('Failed to generate PDF');
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'digital-invest-investor-handbook-2025.pdf';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
      
      toast.success('Investor Handbook downloaded successfully');
    } catch (error) {
      console.error('Error downloading handbook:', error);
      toast.error('Failed to download Investor Handbook');
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
              <FileText className="w-10 h-10 text-primary" />
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-foreground">
              Investor Handbook
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
              Digital Invest Inc. — Informational Overview of Multi-Sector Portfolio
            </p>

            <div className="max-w-2xl mx-auto">
              <p className="text-sm text-muted-foreground px-6 py-4 bg-muted/30 rounded-lg border border-border/50">
                <strong>Important:</strong> This handbook is not a prospectus, public offering document, or solicitation material. It is provided only for informational purposes for qualified individuals who have been invited to review it.
              </p>
            </div>

            {!emailSubmitted ? (
              <form onSubmit={handleSubmit} className="pt-8 max-w-md mx-auto space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name (Optional)</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full gap-2">
                  <FileText className="w-5 h-5" />
                  Request Download Access
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  This is informational material only. No commitment or agreement is created by downloading.
                </p>
              </form>
            ) : (
              <div className="pt-8">
                <Button 
                  size="lg" 
                  onClick={handleDownload}
                  disabled={isDownloading}
                  className="gap-2"
                >
                  <Download className="w-5 h-5" />
                  {isDownloading ? 'Generating PDF...' : 'Download Investor Handbook (PDF)'}
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 px-4 border-t border-border">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">What's Inside</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The Digital Invest Investor Handbook provides a comprehensive overview of our multi-sector portfolio, 
                strategic philosophy, technology infrastructure, and investment process.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="text-xl font-semibold text-foreground mb-3">Company Overview</h3>
                <p className="text-muted-foreground">
                  History, mission, and strategic positioning across HealthTech, AgroTech, FoodTech, and AI infrastructure.
                </p>
              </div>

              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="text-xl font-semibold text-foreground mb-3">Portfolio Projects</h3>
                <p className="text-muted-foreground">
                  Detailed summaries of BioMath Core, BioMath Life, TerraAero, DishCore, and infrastructure systems.
                </p>
              </div>

              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="text-xl font-semibold text-foreground mb-3">Technology & Infrastructure</h3>
                <p className="text-muted-foreground">
                  Systems approach, integrity layers, security principles, and architectural philosophy.
                </p>
              </div>

              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="text-xl font-semibold text-foreground mb-3">Governance & Risk</h3>
                <p className="text-muted-foreground">
                  Governance structure, ESG framework, risk factors, and compliance approach.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6 p-12 rounded-lg border border-border bg-card">
            <h2 className="text-3xl font-bold text-foreground">
              Private & Offline Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              This handbook is informational only and does not constitute a public offering or financial advice. 
              All potential participation is discussed individually and handled offline.
            </p>
            <div className="pt-4">
              <Button 
                size="lg" 
                onClick={handleDownload}
                disabled={isDownloading}
                className="gap-2"
              >
                <Download className="w-5 h-5" />
                {isDownloading ? 'Generating PDF...' : 'Download Handbook'}
              </Button>
            </div>
          </div>
        </section>

        {/* Legal Notice */}
        <section className="py-16 px-4 bg-card/30">
          <div className="max-w-4xl mx-auto">
            <InvestorDisclaimer variant="detailed" />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default InvestorHandbook;
