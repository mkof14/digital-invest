import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { TrendingUp, ArrowRight, Loader2, Grid3x3, List } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import InvestorPageDisclaimer from '@/components/InvestorPageDisclaimer';
import terraaeroHero from '@/assets/projects/terraaero-hero.jpg';
import biomathcoreHero from '@/assets/projects/biomathcore-hero.jpg';
import dishcoreHero from '@/assets/projects/dishcore-hero.jpg';
import digitalinvestHero from '@/assets/projects/digitalinvest-hero.jpg';
import biomathlifeHero from '@/assets/projects/biomathlife-hero.jpg';
import stresscoreHero from '@/assets/projects/stresscore-hero.jpg';
import vitalcoreHero from '@/assets/projects/vitalcore-hero.jpg';
import bioagecoreHero from '@/assets/projects/bioagecore-hero.jpg';
import longevitycoreHero from '@/assets/projects/longevitycore-hero.jpg';
import familycoreHero from '@/assets/projects/familycore-hero.jpg';
import seniorcoreHero from '@/assets/projects/seniorcore-hero.jpg';
import skincoreHero from '@/assets/projects/skincore-hero.jpg';
import dailycoreHero from '@/assets/projects/dailycore-hero.jpg';
import OptimizedImage from '@/components/OptimizedImage';
import { shimmerDataURL, getResponsiveImagePaths } from '@/lib/imageUtils';

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
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const { toast } = useToast();

  // Map slugs to actual imported images
  const projectImages: Record<string, string> = {
    terraaero: terraaeroHero,
    biomathcore: biomathcoreHero,
    'biomath-core': biomathcoreHero,
    dishcore: dishcoreHero,
    'digital-invest-portfolio': digitalinvestHero,
    'digital-invest-ai-lab': digitalinvestHero,
    'digital-invest-manufacturing': digitalinvestHero,
    biomathlife: biomathlifeHero,
    stresscore: stresscoreHero,
    vitalcore: vitalcoreHero,
    bioagecore: bioagecoreHero,
    longevitycore: longevitycoreHero,
    familycore: familycoreHero,
    seniorcore: seniorcoreHero,
    skincore: skincoreHero,
    dailycore: dailycoreHero,
  };

  // Get optimized image path based on format support
  const getProjectImage = (project: Project) => {
    // First priority: use imported image by slug
    if (projectImages[project.slug]) {
      return projectImages[project.slug];
    }
    
    // Second priority: if hero_image_url is a public path (starts with /lovable-uploads or /public)
    if (project.hero_image_url && 
        (project.hero_image_url.startsWith('/lovable-uploads/') || 
         project.hero_image_url.startsWith('/public/'))) {
      return project.hero_image_url;
    }
    
    // Fallback to placeholder
    return '/placeholder.svg';
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
        .order('priority', { ascending: false })
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-blue-animated">Project Portfolio</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our portfolio of multi-sector projects. Each represents innovation, real-world operations, and strategic development.
          </p>
          <p className="text-sm text-muted-foreground mt-4 max-w-2xl mx-auto border-l-4 border-primary pl-4 py-2">
            <strong>Important:</strong> These are private project opportunities. This is not a public offering platform or marketplace. All participation is discussed individually, offline, and subject to eligibility and due diligence.
          </p>
        </div>

        {/* View Toggle */}
        {projects.length > 0 && (
          <div className="flex justify-end mb-6 gap-2">
            <Button
              variant={viewMode === 'grid' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('grid')}
              className="transition-all duration-300"
            >
              <Grid3x3 className="w-4 h-4 mr-2" />
              Grid
            </Button>
            <Button
              variant={viewMode === 'list' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('list')}
              className="transition-all duration-300"
            >
              <List className="w-4 h-4 mr-2" />
              List
            </Button>
          </div>
        )}

        {/* Projects Grid/List */}
        {projects.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">No projects available at this time.</p>
          </div>
        ) : viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="group overflow-hidden border border-border/50 bg-card shadow-elegant hover:shadow-elevated transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] flex flex-col"
              >
                <div className="relative h-64 overflow-hidden bg-muted">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {(() => {
                    const responsiveImages = getResponsiveImagePaths(getProjectImage(project));
                    return (
                      <OptimizedImage
                        src={getProjectImage(project)}
                        alt={`${project.title} - ${project.category} investment project`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700 ease-out"
                        containerClassName="w-full h-full"
                        blurDataURL={shimmerDataURL(400, 300)}
                        avifSrcSet={responsiveImages.avifSrcSet}
                        webpSrcSet={responsiveImages.webpSrcSet}
                        srcSet={responsiveImages.srcSet}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    );
                  })()}
                  
                  <Badge className={`absolute top-4 left-4 z-20 ${getStatusColor(project.status)} transition-all duration-300 group-hover:scale-110`}>
                    {project.status.replace('_', ' ')}
                  </Badge>
                  <Badge className="absolute top-4 right-4 z-20 bg-background/95 backdrop-blur-sm border-primary/20 shadow-lg transition-all duration-300 group-hover:scale-110">
                    {project.category}
                  </Badge>
                </div>

                <CardHeader className="flex-1 space-y-3">
                  <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors duration-300 leading-tight">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed line-clamp-3">
                    {project.short_description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="text-sm text-muted-foreground leading-relaxed">
                    Investment details available upon inquiry
                  </div>
                </CardContent>

                <CardFooter className="flex gap-3 pt-4">
                  <Link to={`/projects/${project.slug}`} className="flex-1">
                    <Button className="w-full ripple-effect group-hover:shadow-md transition-shadow" size="lg">
                      <TrendingUp className="w-4 h-4 mr-2" />
                      Learn More
                    </Button>
                  </Link>
                  <Link to={`/projects/${project.slug}`}>
                    <Button variant="outline" size="lg" className="ripple-effect group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all">
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-6 animate-fade-in">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="group overflow-hidden border border-border/50 bg-card shadow-elegant hover:shadow-elevated transition-all duration-500 hover:-translate-y-1"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="relative w-full md:w-80 h-56 overflow-hidden bg-muted">
                    <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {(() => {
                      const responsiveImages = getResponsiveImagePaths(getProjectImage(project));
                      return (
                        <OptimizedImage
                          src={getProjectImage(project)}
                          alt={`${project.title} - ${project.category} investment project`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700 ease-out"
                          containerClassName="w-full h-full"
                          blurDataURL={shimmerDataURL(320, 240)}
                          avifSrcSet={responsiveImages.avifSrcSet}
                          webpSrcSet={responsiveImages.webpSrcSet}
                          srcSet={responsiveImages.srcSet}
                          sizes="(max-width: 640px) 100vw, 50vw"
                        />
                      );
                    })()}
                    
                    <Badge className={`absolute top-4 left-4 z-20 ${getStatusColor(project.status)} transition-all duration-300 group-hover:scale-110`}>
                      {project.status.replace('_', ' ')}
                    </Badge>
                  </div>

                  <div className="flex-1 flex flex-col">
                    <CardHeader className="flex-1 space-y-3">
                      <div className="flex items-start justify-between gap-4">
                        <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors duration-300 leading-tight">
                          {project.title}
                        </CardTitle>
                        <Badge className="bg-background/95 backdrop-blur-sm border-primary/20 shadow-lg transition-all duration-300 group-hover:scale-110 shrink-0">
                          {project.category}
                        </Badge>
                      </div>
                      <CardDescription className="text-base leading-relaxed">
                        {project.short_description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="pt-0">
                      <div className="text-sm text-muted-foreground leading-relaxed">
                        Investment details available upon inquiry
                      </div>
                    </CardContent>

                    <CardFooter className="flex gap-3 pt-4">
                      <Link to={`/projects/${project.slug}`} className="flex-1">
                        <Button className="w-full ripple-effect group-hover:shadow-md transition-shadow" size="lg">
                          <TrendingUp className="w-4 h-4 mr-2" />
                          Learn More
                        </Button>
                      </Link>
                      <Link to={`/projects/${project.slug}`}>
                        <Button variant="outline" size="lg" className="ripple-effect group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all">
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
        </div>

        {/* Legal Disclaimer */}
        <div className="mt-16 max-w-5xl mx-auto">
          <InvestorPageDisclaimer />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
