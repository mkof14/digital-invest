import { useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { MarkdownContent } from '@/components/MarkdownContent';
import { getContentBlock, renderContentBlock, ContentBlock } from '@/lib/contentService';

const Values = () => {
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState<{
    overview: ContentBlock | null;
    list: ContentBlock | null;
  }>({
    overview: null,
    list: null,
  });

  useEffect(() => {
    const fetchContent = async () => {
      const [overview, list] = await Promise.all([
        getContentBlock('values.overview'),
        getContentBlock('values.list'),
      ]);
      setContent({ overview, list });
      setLoading(false);
    };
    fetchContent();
  }, []);

  // Fallback content
  const fallbacks = {
    overview: 'Our values guide every decision we make and every platform we build.',
    list: `## Excellence in Execution
We build systems that work. Quality, reliability, and attention to detail are non-negotiable.

## Long-Term Thinking
We prioritize sustainable growth over short-term gains. Our projects are designed to endure and evolve over decades.

## Transparency and Integrity
We operate openly with investors, partners, and regulators. We say what we do and do what we say.

## Innovation with Purpose
We innovate to solve real problems—not for novelty's sake. Every platform addresses genuine needs.

## Respect for Data and Privacy
We treat personal and medical data with the highest level of security and ethical care.

## Collaborative Growth
We succeed through partnerships, shared knowledge, and mutual respect across teams and stakeholders.`,
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
            <h1 className="text-5xl font-bold mb-6">Corporate Values</h1>
            <div className="text-xl text-muted-foreground">
              <MarkdownContent content={renderContentBlock(content.overview, fallbacks.overview)} />
            </div>
          </div>
        </section>

        {/* Values Content */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-muted-foreground">
              <MarkdownContent content={renderContentBlock(content.list, fallbacks.list)} />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Values;
