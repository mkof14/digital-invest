import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Loader2 } from 'lucide-react';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { MarkdownContent } from '@/components/MarkdownContent';
import { getContentBlock, renderContentBlock, ContentBlock } from '@/lib/contentService';

const Values = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState<{ overview: ContentBlock | null; list: ContentBlock | null }>({ overview: null, list: null });

  useEffect(() => {
    const fetchContent = async () => {
      const [overview, list] = await Promise.all([getContentBlock('values.overview'), getContentBlock('values.list')]);
      setContent({ overview, list });
      setLoading(false);
    };
    fetchContent();
  }, []);

  const fallbacks = {
    overview: t('values.subtitle'),
    list: `## Excellence in Execution\nWe build systems that work. Quality, reliability, and attention to detail are non-negotiable.\n\n## Long-Term Thinking\nWe prioritize sustainable growth over short-term gains.\n\n## Transparency and Integrity\nWe operate openly with investors, partners, and regulators.\n\n## Innovation with Purpose\nWe innovate to solve real problems—not for novelty's sake.\n\n## Respect for Data and Privacy\nWe treat personal and medical data with the highest level of security and ethical care.\n\n## Collaborative Growth\nWe succeed through partnerships, shared knowledge, and mutual respect.`,
  };

  if (loading) {
    return (<div className="min-h-screen bg-background"><Navigation /><div className="flex items-center justify-center min-h-[400px]"><Loader2 className="h-8 w-8 animate-spin text-muted-foreground" /></div><Footer /></div>);
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">{t('values.title')}</h1>
            <div className="text-xl text-muted-foreground">
              <MarkdownContent content={renderContentBlock(content.overview, fallbacks.overview)} />
            </div>
          </div>
        </section>
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
