import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface NewsPost {
  id: string;
  slug: string;
  title: string;
  body: string;
  published_at: string;
}

const NewsDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<NewsPost | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    if (slug) {
      fetchPost();
    }
  }, [slug]);

  const fetchPost = async () => {
    try {
      const { data, error } = await supabase
        .from('news_posts')
        .select('*')
        .eq('slug', slug)
        .eq('is_published', true)
        .single();

      if (error) throw error;
      setPost(data);
    } catch (error: any) {
      toast({
        title: 'Error loading news post',
        description: error.message,
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center h-64">
            <Loader2 className="h-12 w-12 animate-spin text-primary" />
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">The news post you're looking for doesn't exist or has been removed.</p>
          <Link to="/news">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to News
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Link to="/news" className="inline-block mb-6">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to News
          </Button>
        </Link>

        {/* Article */}
        <article className="max-w-4xl mx-auto">
          <header className="mb-8">
            <div className="flex items-center gap-2 text-muted-foreground mb-4">
              <Calendar className="h-4 w-4" />
              <time dateTime={post.published_at}>
                {new Date(post.published_at).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {post.title}
            </h1>
          </header>

          <div className="prose prose-lg max-w-none text-foreground">
            {post.body.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-4 whitespace-pre-wrap">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Back to News */}
          <div className="mt-12 pt-8 border-t border-border">
            <Link to="/news">
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                View All News
              </Button>
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
};

export default NewsDetail;
