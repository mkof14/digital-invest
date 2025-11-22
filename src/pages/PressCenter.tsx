import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

interface NewsPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  published_at: string;
  type: string | null;
}

const PressCenter = () => {
  const [pressReleases, setPressReleases] = useState<NewsPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPressReleases();
  }, []);

  const fetchPressReleases = async () => {
    try {
      const { data, error } = await supabase
        .from('news_posts')
        .select('id, slug, title, excerpt, published_at, type')
        .eq('is_published', true)
        .eq('type', 'news')
        .order('published_at', { ascending: false })
        .limit(10);

      if (error) throw error;
      setPressReleases(data || []);
    } catch (error) {
      console.error('Error fetching press releases:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Press Center</h1>
            <p className="text-xl text-muted-foreground">
              Official announcements and media coverage of Digital Invest Inc.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto space-y-16">
            
            {/* Press Releases */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Press Releases</h2>
              
              {loading ? (
                <p className="text-muted-foreground">Loading press releases...</p>
              ) : pressReleases.length > 0 ? (
                <div className="grid gap-6">
                  {pressReleases.map((post) => (
                    <Link 
                      key={post.id}
                      to={`/news/${post.slug}`}
                      className="block bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
                    >
                      <div className="flex justify-between items-start gap-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-2 hover:text-primary transition-colors">
                            {post.title}
                          </h3>
                          <p className="text-muted-foreground mb-3">
                            {post.excerpt}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {new Date(post.published_at).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground">No press releases available at this time.</p>
              )}
            </div>

            {/* Media Coverage */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Media Coverage</h2>
              
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-primary mb-2">
                      Healthcare Tech Outlook
                    </div>
                    <h3 className="text-xl font-semibold mb-3">
                      Digital Invest Inc.: Unleashing Healthcare Transformation with Tailored Treatment Strategies
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Feature article covering Digital Invest's approach to precision medicine and health technology innovation.
                    </p>
                    <a 
                      href="https://healthcare-technology.healthtechoutlook.com/vendors/digital-invest-inc-unleashing-healthcare-transformation-with-tailored-treatment-strategies-cid-7109-mid-78.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:underline"
                    >
                      Read article
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Press Contact */}
            <div className="bg-muted/30 rounded-lg p-8 text-center space-y-4">
              <h3 className="text-2xl font-semibold">Press Contact</h3>
              <p className="text-lg text-muted-foreground">
                For press and media inquiries, please contact:
              </p>
              <a 
                href="mailto:press@digitalinvest.com" 
                className="text-lg font-semibold hover:underline inline-block"
              >
                press@digitalinvest.com
              </a>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PressCenter;
