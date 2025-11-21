import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { TrendingUp, ArrowRight, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import terraaeroHero from '@/assets/projects/terraaero-hero.jpg';
import biomathcoreHero from '@/assets/projects/biomathcore-hero.jpg';
import dishcoreHero from '@/assets/projects/dishcore-hero.jpg';
import digitalinvestHero from '@/assets/projects/digitalinvest-hero.jpg';
import biomathlifeHero from '@/assets/projects/biomathlife-hero.jpg';

interface Project {
  id: string;
  slug: string;
  title: string;
  short_description: string;
  status: string;
  target_amount: number | null;
  current_raised: number;
  currency: string;
  category: string;
  hero_image_url: string;
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  // Map slugs to actual imported images
  const projectImages: Record<string, string> = {
    'terraaero': terraaeroHero,
    'biomathcore': biomathcoreHero,
    'biomath-core': biomathcoreHero,
    'dishcore': dishcoreHero,
    'digital-invest-portfolio': digitalinvestHero,
    'digital-invest-ai-lab': digitalinvestHero,
    'digital-invest-manufacturing': digitalinvestHero,
    'biomathlife': biomathlifeHero,
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('is_visible', true)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setProjects(data || []);
    } catch (error: any) {
      toast({
        title: 'Error loading projects',
        description: error.message,
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'OPEN':
        return 'bg-success text-success-foreground';
      case 'CLOSED':
        return 'bg-muted text-muted-foreground';
      case 'COMING_SOON':
        return 'bg-info text-info-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const calculateProgress = (current: number, target: number | null) => {
    if (!target || target === 0) return 0;
    return Math.min((current / target) * 100, 100);
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
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Investment Opportunities
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our portfolio of carefully selected projects. Each opportunity represents innovation, 
            growth potential, and strategic value.
          </p>
          <p className="text-sm text-muted-foreground mt-4 max-w-2xl mx-auto border-l-4 border-primary pl-4 py-2">
            <strong>Important:</strong> These are private investment opportunities managed by Digital Invest Inc. 
            This is not a public crowdfunding platform. All investments are discussed individually through proper legal channels.
          </p>
        </div>

        {/* Projects Grid */}
        {projects.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">No projects available at this time.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="group overflow-hidden border border-border/50 bg-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                <div className="relative h-56 overflow-hidden bg-muted">
                  <img
                    src={projectImages[project.slug] || project.hero_image_url || '/placeholder.svg'}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700 ease-out"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/placeholder.svg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Badge className={`absolute top-4 left-4 ${getStatusColor(project.status)}`}>
                    {project.status.replace('_', ' ')}
                  </Badge>
                  <Badge className="absolute top-4 right-4 bg-background/95 backdrop-blur-sm border-primary/20 text-foreground">
                    {project.category}
                  </Badge>
                </div>

                <CardHeader className="flex-1">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300 line-clamp-2">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-base line-clamp-3 mt-2">
                    {project.short_description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  {project.target_amount && project.target_amount > 0 ? (
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground font-medium">Progress</span>
                        <span className="font-bold text-foreground">
                          {project.currency} {project.current_raised.toLocaleString()} / {project.target_amount.toLocaleString()}
                        </span>
                      </div>
                      <Progress 
                        value={calculateProgress(project.current_raised, project.target_amount)} 
                        className="h-2.5"
                      />
                      <p className="text-xs text-muted-foreground text-right font-medium">
                        {calculateProgress(project.current_raised, project.target_amount).toFixed(1)}% funded
                      </p>
                    </div>
                  ) : (
                    <div className="text-sm text-muted-foreground py-2">
                      Investment details available upon inquiry
                    </div>
                  )}
                </CardContent>

                <CardFooter className="flex gap-3 pt-4">
                  <Link to={`/projects/${project.slug}`} className="flex-1">
                    <Button className="w-full group/btn" size="lg">
                      <TrendingUp className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                      View Details
                    </Button>
                  </Link>
                  <Link to={`/projects/${project.slug}`}>
                    <Button variant="outline" size="lg" className="px-4">
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
