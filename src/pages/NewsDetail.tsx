import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Loader2, BookOpen, TrendingUp, Newspaper } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

interface NewsPost {
  id: string;
  slug: string;
  title: string;
  body: string;
  published_at: string;
  type: string;
  category: string | null;
  project_id: string | null;
  projects?: {
    id: string;
    title: string;
    slug: string;
  } | null;
}

interface RelatedPost {
  id: string;
  slug: string;
  title: string;
  published_at: string;
  type: string;
  category: string | null;
  projects?: {
    id: string;
    title: string;
    slug: string;
  } | null;
}

const NewsDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<NewsPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<RelatedPost[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    if (slug) {
      fetchPost();
    }
  }, [slug]);

  const fetchPost = async () => {
    try {
      const { data: postData, error: postError } = await supabase
        .from('news_posts')
        .select(`
          *,
          projects (
            id,
            title,
            slug
          )
        `)
        .eq('slug', slug)
        .eq('is_published', true)
        .single();

      if (postError) throw postError;
      setPost(postData);

      // Fetch related posts
      let relatedQuery = supabase
        .from('news_posts')
        .select(`
          id,
          slug,
          title,
          published_at,
          type,
          category,
          projects (
            id,
            title,
            slug
          )
        `)
        .eq('is_published', true)
        .neq('id', postData.id)
        .order('published_at', { ascending: false })
        .limit(3);

      // Prioritize same project
      if (postData.project_id) {
        relatedQuery = relatedQuery.eq('project_id', postData.project_id);
      }

      const { data: relatedData, error: relatedError } = await relatedQuery;

      if (relatedError) throw relatedError;

      // If we don't have enough related posts from same project, get latest posts
      if (relatedData && relatedData.length < 3) {
        const { data: moreData } = await supabase
          .from('news_posts')
          .select(`
            id,
            slug,
            title,
            published_at,
            type,
            category,
            projects (
              id,
              title,
              slug
            )
          `)
          .eq('is_published', true)
          .neq('id', postData.id)
          .order('published_at', { ascending: false })
          .limit(3 - relatedData.length);

        setRelatedPosts([...relatedData, ...(moreData || [])]);
      } else {
        setRelatedPosts(relatedData || []);
      }
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

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'insight': return <BookOpen className="h-4 w-4" />;
      case 'update': return <TrendingUp className="h-4 w-4" />;
      default: return <Newspaper className="h-4 w-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'insight': return 'bg-purple-500/10 text-purple-500 border-purple-500/20';
      case 'update': return 'bg-blue-500/10 text-blue-500 border-blue-500/20';
      default: return 'bg-green-500/10 text-green-500 border-green-500/20';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="flex justify-center items-center h-64">
              <Loader2 className="h-12 w-12 animate-spin text-primary" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-24 pb-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
            <p className="text-muted-foreground mb-8">
              The news post you're looking for doesn't exist or has been removed.
            </p>
            <Link to="/news">
              <Button>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to News & Insights
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Link to="/news" className="inline-block mb-8">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to News & Insights
            </Button>
          </Link>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Article */}
            <article className="lg:col-span-2">
              <header className="mb-8">
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                  <Badge variant="outline" className={getTypeColor(post.type)}>
                    {getTypeIcon(post.type)}
                    <span className="ml-1 capitalize">{post.type}</span>
                  </Badge>
                  {post.projects && (
                    <Badge variant="outline">
                      {post.projects.title}
                    </Badge>
                  )}
                  {post.category && (
                    <Badge variant="secondary">
                      {post.category}
                    </Badge>
                  )}
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  {post.title}
                </h1>

                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <time dateTime={post.published_at}>
                    {new Date(post.published_at).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                </div>
              </header>

              <div className="prose prose-lg max-w-none text-foreground">
                {post.body.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-6 text-base leading-relaxed whitespace-pre-wrap">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Back to News */}
              <div className="mt-12 pt-8 border-t border-border">
                <Link to="/news">
                  <Button variant="outline">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    View All News & Insights
                  </Button>
                </Link>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Related Content */}
              {relatedPosts.length > 0 && (
                <Card className="border border-border/50 sticky top-24">
                  <CardHeader>
                    <CardTitle className="text-lg">Related Content</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {relatedPosts.map((relatedPost) => (
                        <Link
                          key={relatedPost.id}
                          to={`/news/${relatedPost.slug}`}
                          className="block group"
                        >
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <Badge variant="outline" className={`${getTypeColor(relatedPost.type)} text-xs`}>
                                {getTypeIcon(relatedPost.type)}
                                <span className="ml-1 capitalize">{relatedPost.type}</span>
                              </Badge>
                            </div>
                            <h3 className="text-sm font-medium line-clamp-2 group-hover:text-primary transition-colors">
                              {relatedPost.title}
                            </h3>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                              <Calendar className="h-3 w-3" />
                              <span>
                                {new Date(relatedPost.published_at).toLocaleDateString('en-US', {
                                  month: 'short',
                                  day: 'numeric',
                                  year: 'numeric',
                                })}
                              </span>
                            </div>
                            {relatedPost.projects && (
                              <div className="text-xs text-muted-foreground">
                                {relatedPost.projects.title}
                              </div>
                            )}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Stay Informed CTA */}
              <Card className="border-2 border-primary/20 bg-muted/30">
                <CardHeader>
                  <CardTitle className="text-base">Stay Informed</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Review our projects and submit a non-binding expression of interest to receive updates.
                  </p>
                  <div className="space-y-2">
                    <Button asChild size="sm" className="w-full">
                      <Link to="/projects">View Projects</Link>
                    </Button>
                    <Button variant="outline" size="sm" className="w-full" asChild>
                      <Link to="/for-investors">For Investors</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </aside>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NewsDetail;
