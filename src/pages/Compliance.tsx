import { useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { MarkdownContent } from '@/components/MarkdownContent';
import { getContentBlock, renderContentBlock, ContentBlock } from '@/lib/contentService';

const Compliance = () => {
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState<{
    philosophy: ContentBlock | null;
    notPublicOffering: ContentBlock | null;
    kycAml: ContentBlock | null;
    dataProtection: ContentBlock | null;
  }>({
    philosophy: null,
    notPublicOffering: null,
    kycAml: null,
    dataProtection: null,
  });

  useEffect(() => {
    const fetchContent = async () => {
      const [philosophy, notPublicOffering, kycAml, dataProtection] = await Promise.all([
        getContentBlock('compliance.philosophy'),
        getContentBlock('compliance.notPublicOffering'),
        getContentBlock('compliance.kycAml'),
        getContentBlock('compliance.dataProtection'),
      ]);
      setContent({ philosophy, notPublicOffering, kycAml, dataProtection });
      setLoading(false);
    };
    fetchContent();
  }, []);

  // Fallback content
  const fallbacks = {
    philosophy: `Digital Invest Inc. operates as a private, multi-sector portfolio. We do not run public offerings or crowdfunding campaigns. All potential participation is handled individually, offline, and in compliance with applicable laws and regulations.

We believe that serious long-term projects must be built on clear rules, transparency, and respect for regulatory frameworks in finance, health, agriculture, food systems, and data protection.`,
    notPublicOffering: `This website, digitalinvest.com, is for informational purposes only. Nothing on this site constitutes:

- a public securities offering,
- a solicitation to buy or sell any security,
- financial, legal, or tax advice.

All potential participation in Digital Invest projects is:

- private,
- non-binding at the initial stages,
- subject to due diligence and separate legal agreements offline.`,
    kycAml: `Where applicable, and depending on jurisdiction and structure, Digital Invest Inc. may require:

- Know Your Customer (KYC) verification,
- Anti-Money Laundering (AML) checks,
- confirmation of investor eligibility (for example, accredited investor status in certain cases).

These processes, when required, are handled securely and privately.`,
    dataProtection: `We treat personal and business information with strict confidentiality. Personal data is processed according to internal policies, data protection standards, and technical safeguards described in the Security & Infrastructure section.`,
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="flex items-center justify-center min-h-[400px]">
          <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-purple-animated">Regulatory & Compliance Center</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              How Digital Invest Inc. approaches regulation, risk, and responsible operations.
            </p>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            
            {/* Compliance Philosophy */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Our Compliance Philosophy</h2>
              <div className="text-muted-foreground">
                <MarkdownContent
                  content={renderContentBlock(content.philosophy, fallbacks.philosophy)}
                />
              </div>
            </div>

            {/* Not a Public Offering */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Not a Public Offering</h2>
              <div className="text-muted-foreground">
                <MarkdownContent
                  content={renderContentBlock(content.notPublicOffering, fallbacks.notPublicOffering)}
                />
              </div>
            </div>

            {/* KYC, AML & Eligibility */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">KYC, AML & Eligibility</h2>
              <div className="text-muted-foreground">
                <MarkdownContent
                  content={renderContentBlock(content.kycAml, fallbacks.kycAml)}
                />
              </div>
            </div>

            {/* Data Protection */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Data Protection & Privacy</h2>
              <div className="text-muted-foreground">
                <MarkdownContent
                  content={renderContentBlock(content.dataProtection, fallbacks.dataProtection)}
                />
              </div>
            </div>

            {/* Legal Status Determination */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Legal Status & Agreements</h2>
              <div className="text-muted-foreground">
                <p className="text-lg leading-relaxed mb-4">
                  The actual legal status, structure of participation, rights, and obligations are defined only in formal agreements and documents executed offline, not by website content.
                </p>
                <p className="text-lg leading-relaxed">
                  This website provides informational overviews. Any potential participation requires separate legal documentation, eligibility verification, and regulatory compliance review conducted through proper offline channels.
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-muted/30 rounded-lg p-8 text-center space-y-4">
              <h3 className="text-2xl font-semibold">Contact for Compliance Questions</h3>
              <p className="text-lg text-muted-foreground">
                For regulatory or compliance-related questions, please contact:
              </p>
              <a 
                href="mailto:compliance@digitalinvest.com" 
                className="text-lg font-semibold hover:underline inline-block"
              >
                compliance@digitalinvest.com
              </a>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Compliance;
