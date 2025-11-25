import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, ArrowRight, Loader2, BookOpen, TrendingUp, Newspaper } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

interface NewsPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
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

interface Project {
  id: string;
  title: string;
  slug: string;
}

const News = () => {
  const [posts, setPosts] = useState<NewsPost[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterType, setFilterType] = useState<string>('all');
  const [filterProject, setFilterProject] = useState<string>('all');
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const { toast } = useToast();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [postsResult, projectsResult] = await Promise.all([
        supabase
          .from('news_posts')
          .select(`
            *,
            projects (
              id,
              title,
              slug
            )
          `)
          .eq('is_published', true)
          .order('published_at', { ascending: false }),
        supabase
          .from('projects')
          .select('id, title, slug')
          .eq('is_visible', true)
          .order('title'),
      ]);

      if (postsResult.error) throw postsResult.error;
      if (projectsResult.error) throw projectsResult.error;

      setPosts(postsResult.data || []);
      setProjects(projectsResult.data || []);
    } catch (error: any) {
      toast({
        title: 'Error loading content',
        description: error.message,
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const filteredPosts = posts.filter((post) => {
    if (filterType !== 'all' && post.type !== filterType) return false;
    if (filterProject !== 'all' && post.project_id !== filterProject) return false;
    if (filterCategory !== 'all' && post.category !== filterCategory) return false;
    return true;
  });

  const featuredPost = posts[0];

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

  const getProjectPosts = (projectId: string) => {
    return posts.filter(p => p.project_id === projectId).slice(0, 3);
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

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <div className="pt-32 pb-12 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-orange-animated">News & Insights</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              Updates, project milestones, and in-depth perspectives from the Digital Invest portfolio.
            </p>
            <p className="text-base text-muted-foreground mb-8">
              Stay informed about developments across HealthTech, AgroTech, FoodTech, and multi-sector infrastructure.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" onClick={() => document.getElementById('articles')?.scrollIntoView({ behavior: 'smooth' })}>
                All Articles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/projects">View Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Featured Highlight */}
        {featuredPost && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Featured</h2>
            <Card className="border-2 border-primary/20 bg-card hover:shadow-elevated transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                  <Badge variant="outline" className={getTypeColor(featuredPost.type)}>
                    {getTypeIcon(featuredPost.type)}
                    <span className="ml-1 capitalize">{featuredPost.type}</span>
                  </Badge>
                  {featuredPost.projects && (
                    <Badge variant="outline">
                      {featuredPost.projects.title}
                    </Badge>
                  )}
                  {featuredPost.category && (
                    <Badge variant="secondary">
                      {featuredPost.category}
                    </Badge>
                  )}
                  <div className="flex items-center gap-2 text-muted-foreground ml-auto">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">
                      {new Date(featuredPost.published_at).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </span>
                  </div>
                </div>
                <CardTitle className="text-3xl mb-3">{featuredPost.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg mb-6">
                  {featuredPost.excerpt}
                </CardDescription>
                <Link to={`/news/${featuredPost.slug}`}>
                  <Button size="lg">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Filter Bar */}
        <div id="articles" className="mb-8 space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Latest News & Insights</h2>
          
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
            <Tabs value={filterType} onValueChange={setFilterType} className="w-full md:w-auto">
              <TabsList className="grid w-full md:w-auto grid-cols-4">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="news">News</TabsTrigger>
                <TabsTrigger value="insight">Insights</TabsTrigger>
                <TabsTrigger value="update">Updates</TabsTrigger>
              </TabsList>
            </Tabs>

            <Select value={filterProject} onValueChange={setFilterProject}>
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="All Projects" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Projects</SelectItem>
                {projects.map((project) => (
                  <SelectItem key={project.id} value={project.id}>
                    {project.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={filterCategory} onValueChange={setFilterCategory}>
              <SelectTrigger className="w-full md:w-[150px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="Health">Health</SelectItem>
                <SelectItem value="Agro">Agro</SelectItem>
                <SelectItem value="Food">Food</SelectItem>
                <SelectItem value="Portfolio">Portfolio</SelectItem>
              </SelectContent>
            </Select>

            {(filterType !== 'all' || filterProject !== 'all' || filterCategory !== 'all') && (
              <Button
                variant="ghost"
                onClick={() => {
                  setFilterType('all');
                  setFilterProject('all');
                  setFilterCategory('all');
                }}
                className="text-sm"
              >
                Clear Filters
              </Button>
            )}
          </div>
        </div>

        {/* Main List */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">No articles found for the selected filters.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {filteredPosts.map((post) => (
              <Card
                key={post.id}
                className="group overflow-hidden border border-border/50 bg-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                <CardHeader>
                  <div className="flex items-center gap-2 mb-3 flex-wrap">
                    <Badge variant="outline" className={getTypeColor(post.type)}>
                      {getTypeIcon(post.type)}
                      <span className="ml-1 capitalize">{post.type}</span>
                    </Badge>
                    {post.category && (
                      <Badge variant="secondary" className="text-xs">
                        {post.category}
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300 line-clamp-2 mb-3">
                    {post.title}
                  </CardTitle>
                  <div className="flex items-center gap-2 text-muted-foreground text-xs">
                    <Calendar className="h-3 w-3" />
                    <span>
                      {new Date(post.published_at).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </span>
                  </div>
                  {post.projects && (
                    <div className="text-xs text-muted-foreground mt-1">
                      Project: {post.projects.title}
                    </div>
                  )}
                </CardHeader>

                <CardContent className="flex-1 flex flex-col">
                  <CardDescription className="text-sm line-clamp-3 mb-4 flex-1">
                    {post.excerpt}
                  </CardDescription>

                  <Link to={`/news/${post.slug}`} className="mt-auto">
                    <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      Read More
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Per-Project Quick Sections */}
        {projects.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Updates by Project</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => {
                const projectPosts = getProjectPosts(project.id);
                if (projectPosts.length === 0) return null;

                return (
                  <Card key={project.id} className="border border-border/50">
                    <CardHeader>
                      <CardTitle className="text-lg">{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {projectPosts.map((post) => (
                          <Link
                            key={post.id}
                            to={`/news/${post.slug}`}
                            className="block hover:text-primary transition-colors"
                          >
                            <div className="text-sm font-medium line-clamp-2 mb-1">
                              {post.title}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {new Date(post.published_at).toLocaleDateString('en-US', {
                                month: 'short',
                                day: 'numeric',
                                year: 'numeric',
                              })}
                            </div>
                          </Link>
                        ))}
                        <Button
                          variant="ghost"
                          size="sm"
                          className="w-full mt-2"
                          onClick={() => {
                            setFilterProject(project.id);
                            document.getElementById('articles')?.scrollIntoView({ behavior: 'smooth' });
                          }}
                        >
                          View all →
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        )}

        {/* Stay Informed Block */}
        <Card className="border-2 border-border bg-muted/30">
          <CardHeader>
            <CardTitle className="text-2xl">Stay Informed</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6">
              Digital Invest is actively building and evolving its portfolio. If you want to stay informed about key updates, new phases, and insights, the best path is to review the projects and submit a non-binding expression of interest. We will follow up individually.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Button asChild>
                <Link to="/projects">View Projects</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/for-investors">For Investors</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default News;
