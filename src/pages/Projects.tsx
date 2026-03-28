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
import mydayHero from '@/assets/projects/myday-hero.jpg';
import itsgoodtodayHero from '@/assets/projects/itsgoodtoday-hero.jpg';
import agronHero from '@/assets/projects/agron-hero.jpg';
import digitalinvestHero from '@/assets/projects/digitalinvest-hero.jpg';
import biomathlifeHero from '@/assets/projects/biomathlife-hero.jpg';
import stresscoreHero from '@/assets/projects/stresscore-hero.jpg';
import vitalcoreHero from '@/assets/projects/vitalcore-hero.jpg';
import bioagecoreHero from '@/assets/projects/bioagecore-hero.jpg';
import longevitycoreHero from '@/assets/projects/longevitycore-hero.jpg';
import familycoreHero from '@/assets/projects/familycore-hero.jpg';
import seniorcoreHero from '@/assets/projects/seniorcore-hero.jpg';
import skincoreHero from '@/assets/projects/skincore-hero.jpg';
import lunaHero from '@/assets/projects/luna-hero.jpg';
import agronworkHero from '@/assets/projects/agronwork-hero.jpg';
import mrxHero from '@/assets/projects/mrx-hero.jpg';
import tableservedHero from '@/assets/projects/tableserved-hero.jpg';
import baselineHero from '@/assets/projects/baseline-hero.jpg';
import baselineLogo from '@/assets/projects/baseline-logo.png';
import savenHero from '@/assets/projects/saven-hero.png';
import savenLogo from '@/assets/projects/saven-logo.png';
import biomathcoreCardBg from '@/assets/projects/biomathcore-card-bg.png';
import biomathcoreLogoBanner from '@/assets/projects/biomathcore-logo-banner.png';
import OptimizedImage from '@/components/OptimizedImage';
import { shimmerDataURL, getResponsiveImagePaths } from '@/lib/imageUtils';

// Per-project accent themes: [gradient-from, gradient-to, text-accent, border-accent, button-bg, button-hover]
const projectThemes: Record<string, { from: string; to: string; accent: string; border: string; btnBg: string; btnHover: string; label: string }> = {
  'biomath-core': { from: 'from-cyan-500/20', to: 'to-blue-600/20', accent: 'text-cyan-400', border: 'border-cyan-500/30', btnBg: 'bg-cyan-600', btnHover: 'hover:bg-cyan-500', label: 'Digital Health' },
  'biomathcore': { from: 'from-cyan-500/20', to: 'to-blue-600/20', accent: 'text-cyan-400', border: 'border-cyan-500/30', btnBg: 'bg-cyan-600', btnHover: 'hover:bg-cyan-500', label: 'Digital Health' },
  'terraaero': { from: 'from-emerald-500/20', to: 'to-green-700/20', accent: 'text-emerald-400', border: 'border-emerald-500/30', btnBg: 'bg-emerald-600', btnHover: 'hover:bg-emerald-500', label: 'AgriTech' },
  'agron': { from: 'from-lime-500/20', to: 'to-green-600/20', accent: 'text-lime-400', border: 'border-lime-500/30', btnBg: 'bg-lime-600', btnHover: 'hover:bg-lime-500', label: 'Robotics' },
  'agron-work': { from: 'from-amber-500/20', to: 'to-orange-600/20', accent: 'text-amber-400', border: 'border-amber-500/30', btnBg: 'bg-amber-600', btnHover: 'hover:bg-amber-500', label: 'Workforce' },
  'saven': { from: 'from-violet-500/20', to: 'to-purple-700/20', accent: 'text-violet-400', border: 'border-violet-500/30', btnBg: 'bg-violet-600', btnHover: 'hover:bg-violet-500', label: 'Infrastructure' },
  'myday': { from: 'from-indigo-500/20', to: 'to-violet-600/20', accent: 'text-indigo-400', border: 'border-indigo-500/30', btnBg: 'bg-indigo-600', btnHover: 'hover:bg-indigo-500', label: 'Lifestyle' },
  'mrx-health': { from: 'from-rose-500/20', to: 'to-red-600/20', accent: 'text-rose-400', border: 'border-rose-500/30', btnBg: 'bg-rose-600', btnHover: 'hover:bg-rose-500', label: 'MedTech' },
  'table-served': { from: 'from-amber-500/20', to: 'to-yellow-600/20', accent: 'text-amber-400', border: 'border-amber-500/30', btnBg: 'bg-amber-600', btnHover: 'hover:bg-amber-500', label: 'FoodTech' },
  'baseline': { from: 'from-teal-500/20', to: 'to-emerald-600/20', accent: 'text-teal-400', border: 'border-teal-500/30', btnBg: 'bg-teal-600', btnHover: 'hover:bg-teal-500', label: 'HealthTech' },
  'luna-balance': { from: 'from-pink-500/20', to: 'to-rose-600/20', accent: 'text-pink-400', border: 'border-pink-500/30', btnBg: 'bg-pink-600', btnHover: 'hover:bg-pink-500', label: "Women's Health" },
  'biomathlife': { from: 'from-sky-500/20', to: 'to-blue-600/20', accent: 'text-sky-400', border: 'border-sky-500/30', btnBg: 'bg-sky-600', btnHover: 'hover:bg-sky-500', label: 'BioTech' },
  'digital-invest-portfolio': { from: 'from-slate-500/20', to: 'to-gray-600/20', accent: 'text-slate-300', border: 'border-slate-500/30', btnBg: 'bg-slate-600', btnHover: 'hover:bg-slate-500', label: 'FinTech' },
  'itsgoodtoday': { from: 'from-orange-500/20', to: 'to-amber-600/20', accent: 'text-orange-400', border: 'border-orange-500/30', btnBg: 'bg-orange-600', btnHover: 'hover:bg-orange-500', label: 'Wellness' },
  'stresscore': { from: 'from-purple-500/20', to: 'to-violet-600/20', accent: 'text-purple-400', border: 'border-purple-500/30', btnBg: 'bg-purple-600', btnHover: 'hover:bg-purple-500', label: 'Mental Health' },
  'vitalcore': { from: 'from-red-500/20', to: 'to-rose-600/20', accent: 'text-red-400', border: 'border-red-500/30', btnBg: 'bg-red-600', btnHover: 'hover:bg-red-500', label: 'Vitals' },
  'bioagecore': { from: 'from-fuchsia-500/20', to: 'to-pink-600/20', accent: 'text-fuchsia-400', border: 'border-fuchsia-500/30', btnBg: 'bg-fuchsia-600', btnHover: 'hover:bg-fuchsia-500', label: 'Longevity' },
  'longevitycore': { from: 'from-emerald-500/20', to: 'to-teal-600/20', accent: 'text-emerald-400', border: 'border-emerald-500/30', btnBg: 'bg-emerald-600', btnHover: 'hover:bg-emerald-500', label: 'Anti-Aging' },
  'familycore': { from: 'from-blue-500/20', to: 'to-indigo-600/20', accent: 'text-blue-400', border: 'border-blue-500/30', btnBg: 'bg-blue-600', btnHover: 'hover:bg-blue-500', label: 'Family' },
  'seniorcore': { from: 'from-warmgray-500/20', to: 'to-stone-600/20', accent: 'text-stone-400', border: 'border-stone-500/30', btnBg: 'bg-stone-600', btnHover: 'hover:bg-stone-500', label: 'Senior Care' },
  'skincore': { from: 'from-pink-400/20', to: 'to-rose-500/20', accent: 'text-pink-300', border: 'border-pink-400/30', btnBg: 'bg-pink-500', btnHover: 'hover:bg-pink-400', label: 'Beauty' },
};

const getTheme = (slug: string) => projectThemes[slug] || { from: 'from-primary/20', to: 'to-primary/20', accent: 'text-primary', border: 'border-primary/30', btnBg: 'bg-primary', btnHover: 'hover:bg-primary/80', label: 'Project' };

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
    myday: mydayHero,
    itsgoodtoday: itsgoodtodayHero,
    agron: agronHero,
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
    'luna-balance': lunaHero,
    'agron-work': agronworkHero,
    'mrx-health': mrxHero,
    'table-served': tableservedHero,
    'baseline': baselineHero,
    'saven': savenHero,
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
            {projects.map((project) => {
              // Special BioMath Core card
              if (project.slug === 'biomath-core' || project.slug === 'biomathcore') {
                return (
                  <Card
                    key={project.id}
                    className="group overflow-hidden border border-border/50 shadow-elegant hover:shadow-elevated transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] flex flex-col md:col-span-2 lg:col-span-3 relative bg-[hsl(220,20%,6%)]"
                  >
                    {/* Full background image */}
                    <div className="absolute inset-0 z-0 opacity-30 group-hover:opacity-40 transition-opacity duration-700">
                      <img src={biomathcoreCardBg} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[hsl(220,20%,6%)]/80 via-[hsl(220,20%,6%)]/50 to-[hsl(220,20%,6%)]/80" />
                    
                    <div className="relative z-10 p-8 md:p-12">
                      {/* Logo banner */}
                      <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
                        <img src={biomathcoreLogoBanner} alt="BioMath Core" className="h-14 md:h-16 object-contain" />
                        <div className="flex gap-3">
                          <Badge className="bg-[hsl(200,80%,50%)]/20 text-[hsl(200,80%,70%)] border-[hsl(200,80%,50%)]/30">
                            Digital Health
                          </Badge>
                          <Badge className={`${getStatusColor(project.status)}`}>
                            {project.status.replace('_', ' ')}
                          </Badge>
                        </div>
                      </div>
                      
                      <p className="text-[hsl(210,10%,75%)] text-lg md:text-xl max-w-3xl mb-8 leading-relaxed">
                        {project.short_description}
                      </p>

                      {/* Health Categories Grid */}
                      <div className="mb-8">
                        <h3 className="text-[hsl(210,10%,90%)] text-sm font-semibold uppercase tracking-widest mb-4">
                          200+ AI-Powered Services · 20 Health Categories
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-10 gap-2">
                          {biomathCategories.map((cat) => (
                            <div
                              key={cat}
                              className="bg-[hsl(210,15%,12%)] border border-[hsl(210,15%,20%)] rounded-lg px-3 py-2 text-center text-xs text-[hsl(210,10%,70%)] hover:border-[hsl(200,80%,50%)]/40 hover:text-[hsl(200,80%,70%)] transition-all duration-300 cursor-default"
                            >
                              {cat}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <Link to={`/projects/${project.slug}`} className="flex-1 max-w-xs">
                          <Button className="w-full bg-[hsl(200,80%,50%)] hover:bg-[hsl(200,80%,45%)] text-white" size="lg">
                            <TrendingUp className="w-4 h-4 mr-2" />
                            Explore Platform
                          </Button>
                        </Link>
                        <Link to={`/projects/${project.slug}`}>
                          <Button variant="outline" size="lg" className="border-[hsl(200,80%,50%)]/30 text-[hsl(200,80%,70%)] hover:bg-[hsl(200,80%,50%)]/10">
                            <ArrowRight className="w-4 h-4" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </Card>
                );
              }

              // Standard project card
              return (
              <Card
                key={project.id}
                className="group overflow-hidden border border-border/50 bg-card shadow-elegant hover:shadow-elevated transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] flex flex-col"
              >
                <div className="relative h-56 overflow-hidden bg-muted">
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
                  <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors duration-300 leading-tight flex items-center gap-3">
                    {project.slug === 'baseline' && (
                      <img src={baselineLogo} alt="BaseLine logo" className="h-8 rounded" />
                    )}
                    {project.slug === 'saven' && (
                      <img src={savenLogo} alt="SAVEN logo" className="h-8 rounded" />
                    )}
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
              );
            })}
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
                        <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors duration-300 leading-tight flex items-center gap-3">
                          {project.slug === 'baseline' && (
                            <img src={baselineLogo} alt="BaseLine logo" className="h-8 rounded" />
                          )}
                          {project.slug === 'saven' && (
                            <img src={savenLogo} alt="SAVEN logo" className="h-8 rounded" />
                          )}
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
