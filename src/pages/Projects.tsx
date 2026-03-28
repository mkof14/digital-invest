import { useEffect, useState, useRef, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { TrendingUp, ArrowRight, Loader2, Grid3x3, List, Search, X, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
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

const ScrollRevealCard = ({ children, index }: { children: React.ReactNode; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    if (ref.current) observer.observe(ref.current);
    return () => { if (ref.current) observer.unobserve(ref.current); };
  }, []);

  return (
    <div
      ref={ref}
      className="transition-all duration-700 ease-out"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.95)',
        transitionDelay: `${index % 3 * 120}ms`,
      }}
    >
      {children}
    </div>
  );
};

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const { toast } = useToast();
  const { t } = useTranslation();

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
      <div className="pt-24 pb-16 section-gradient-slate">
        <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-blue-animated">{t('projects.title')}</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('projects.subtitle')}
          </p>
          <p className="text-sm text-muted-foreground mt-4 max-w-2xl mx-auto border-l-4 border-primary pl-4 py-2">
            <strong>{t('projects.important')}:</strong> {t('projects.disclaimer')}
          </p>
        </div>

        {/* Search & Filter Bar */}
        {projects.length > 0 && (() => {
          const categories = Array.from(new Set(projects.map(p => {
            const t = getTheme(p.slug);
            return t.label;
          }))).sort();

          return (
            <div className="mb-8 space-y-4">
              {/* Search */}
              <div className="relative max-w-lg mx-auto">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder={t('projects.searchPlaceholder')}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-10 h-12 text-base rounded-xl border-border/60 bg-card/80 backdrop-blur-sm shadow-sm focus:shadow-md transition-shadow"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-muted transition-colors"
                  >
                    <X className="h-4 w-4 text-muted-foreground" />
                  </button>
                )}
              </div>

              {/* Category Pills + View Toggle */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-2">
                  <Filter className="h-4 w-4 text-muted-foreground mr-1" />
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === 'all'
                        ? 'bg-primary text-primary-foreground shadow-md'
                        : 'bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground'
                    }`}
                  >
                    {t('projects.all')} ({projects.length})
                  </button>
                  {categories.map(cat => {
                    const count = projects.filter(p => getTheme(p.slug).label === cat).length;
                    return (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                          selectedCategory === cat
                            ? 'bg-primary text-primary-foreground shadow-md'
                            : 'bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground'
                        }`}
                      >
                        {cat} ({count})
                      </button>
                    );
                  })}
                </div>
                <div className="flex gap-2">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                    className="transition-all duration-300"
                  >
                    <Grid3x3 className="w-4 h-4 mr-2" />
                    {t('projects.grid')}
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                    className="transition-all duration-300"
                  >
                    <List className="w-4 h-4 mr-2" />
                    {t('projects.list')}
                  </Button>
                </div>
              </div>
            </div>
          );
        })()}

        {/* Projects Grid/List */}
        {(() => {
          const filteredProjects = projects.filter(p => {
            const matchesSearch = !searchQuery || 
              p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
              p.short_description.toLowerCase().includes(searchQuery.toLowerCase()) ||
              p.category.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = selectedCategory === 'all' || getTheme(p.slug).label === selectedCategory;
            return matchesSearch && matchesCategory;
          });

          if (filteredProjects.length === 0) {
            return (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg">
                  {searchQuery || selectedCategory !== 'all' 
                    ? t('projects.noMatchFilters')
                    : t('projects.noProjects')}
                </p>
                {(searchQuery || selectedCategory !== 'all') && (
                  <Button variant="outline" className="mt-4" onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}>
                    {t('projects.clearFilters')}
                  </Button>
                )}
              </div>
            );
          }

          return viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => {
              const theme = getTheme(project.slug);
              const isBioMath = project.slug === 'biomath-core' || project.slug === 'biomathcore';
              const projectImage = isBioMath ? biomathcoreCardBg : getProjectImage(project);
              const hasLogo = project.slug === 'baseline' || project.slug === 'saven' || isBioMath;
              
              return (
                <ScrollRevealCard key={project.id} index={index}>
                <Link
                  to={`/projects/${project.slug}`}
                  className="group block h-full"
                >
                  <Card className={`overflow-hidden border ${theme.border} bg-card shadow-elegant hover:shadow-elevated transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] flex flex-col h-full cursor-pointer`}>
                    {/* Image */}
                    <div className="relative h-52 overflow-hidden bg-muted">
                      <div className={`absolute inset-0 bg-gradient-to-t ${theme.from} ${theme.to} z-10 opacity-60`} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-10" />
                      
                      {isBioMath ? (
                        <img src={projectImage} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700" />
                      ) : (
                        (() => {
                          const responsiveImages = getResponsiveImagePaths(projectImage);
                          return (
                            <OptimizedImage
                              src={projectImage}
                              alt={`${project.title} - ${project.category}`}
                              className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700 ease-out"
                              containerClassName="w-full h-full"
                              blurDataURL={shimmerDataURL(400, 300)}
                              avifSrcSet={responsiveImages.avifSrcSet}
                              webpSrcSet={responsiveImages.webpSrcSet}
                              srcSet={responsiveImages.srcSet}
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                          );
                        })()
                      )}

                      {/* Title overlay on image */}
                      <div className="absolute bottom-0 left-0 right-0 z-20 p-4">
                        <div className="flex items-center gap-2 mb-1">
                          {project.slug === 'baseline' && <img src={baselineLogo} alt="" className="h-6 rounded" />}
                          {project.slug === 'saven' && <img src={savenLogo} alt="" className="h-6 rounded" />}
                          {isBioMath && <img src={biomathcoreLogoBanner} alt="" className="h-7 object-contain" />}
                        </div>
                        {!hasLogo && (
                          <h3 className="text-white font-bold text-lg leading-tight drop-shadow-lg">
                            {project.title}
                          </h3>
                        )}
                      </div>

                      <Badge className={`absolute top-3 left-3 z-20 ${getStatusColor(project.status)} text-xs`}>
                        {project.status.replace('_', ' ')}
                      </Badge>
                      <Badge className={`absolute top-3 right-3 z-20 bg-black/60 backdrop-blur-sm text-white border-white/20 text-xs`}>
                        {theme.label}
                      </Badge>
                    </div>

                    <CardHeader className="flex-1 space-y-3 pb-2">
                      <CardTitle className={`text-xl font-extrabold tracking-tight leading-snug`}>
                        <span className={`bg-gradient-to-r ${theme.from.replace('/20', '')} ${theme.to.replace('/20', '')} bg-clip-text text-transparent`}>
                          {project.title}
                        </span>
                      </CardTitle>
                      <CardDescription className="text-sm leading-relaxed line-clamp-4 text-muted-foreground/90">
                        {t(`projects.descriptions.${project.slug}`, project.short_description)}
                      </CardDescription>
                    </CardHeader>

                    <CardFooter className="pt-0 pb-5">
                      <div className="w-full flex items-center justify-between bg-foreground/[0.07] hover:bg-foreground/[0.12] border border-border/60 text-foreground rounded-lg px-5 py-3 text-sm font-medium transition-all duration-300 group-hover:shadow-md group-hover:gap-3 group-hover:border-primary/30">
                        <span className="flex items-center gap-2">
                          <TrendingUp className="w-4 h-4 text-primary/70" />
                          {t('projects.exploreProject')}
                        </span>
                        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-all duration-300 group-hover:translate-x-1" />
                      </div>
                    </CardFooter>
                  </Card>
                </Link>
                </ScrollRevealCard>
              );
            })}
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            {filteredProjects.map((project, index) => {
              const theme = getTheme(project.slug);
              const isBioMath = project.slug === 'biomath-core' || project.slug === 'biomathcore';
              const projectImage = isBioMath ? biomathcoreCardBg : getProjectImage(project);

              return (
                <ScrollRevealCard key={project.id} index={index}>
                <Link to={`/projects/${project.slug}`} className="group block">
                  <Card className={`overflow-hidden border ${theme.border} bg-card shadow-elegant hover:shadow-elevated transition-all duration-500 hover:-translate-y-1 cursor-pointer`}>
                    <div className="flex flex-col md:flex-row">
                      <div className="relative w-full md:w-80 h-48 overflow-hidden bg-muted">
                        <div className={`absolute inset-0 bg-gradient-to-r ${theme.from} ${theme.to} z-10 opacity-60`} />
                        {isBioMath ? (
                          <img src={projectImage} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700" />
                        ) : (
                          (() => {
                            const responsiveImages = getResponsiveImagePaths(projectImage);
                            return (
                              <OptimizedImage
                                src={projectImage}
                                alt={`${project.title} - ${project.category}`}
                                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700 ease-out"
                                containerClassName="w-full h-full"
                                blurDataURL={shimmerDataURL(320, 240)}
                                avifSrcSet={responsiveImages.avifSrcSet}
                                webpSrcSet={responsiveImages.webpSrcSet}
                                srcSet={responsiveImages.srcSet}
                                sizes="(max-width: 640px) 100vw, 50vw"
                              />
                            );
                          })()
                        )}
                        <Badge className={`absolute top-3 left-3 z-20 ${getStatusColor(project.status)} text-xs`}>
                          {project.status.replace('_', ' ')}
                        </Badge>
                      </div>

                      <div className="flex-1 flex flex-col">
                        <CardHeader className="flex-1 space-y-2">
                          <div className="flex items-start justify-between gap-4">
                            <CardTitle className={`text-xl font-bold ${theme.accent} transition-colors duration-300 leading-tight flex items-center gap-3`}>
                              {project.slug === 'baseline' && <img src={baselineLogo} alt="" className="h-7 rounded" />}
                              {project.slug === 'saven' && <img src={savenLogo} alt="" className="h-7 rounded" />}
                              {isBioMath && <img src={biomathcoreLogoBanner} alt="" className="h-7 object-contain" />}
                              {project.title}
                            </CardTitle>
                            <Badge className={`${theme.border} bg-black/40 backdrop-blur-sm text-white text-xs shrink-0`}>
                              {theme.label}
                            </Badge>
                          </div>
                          <CardDescription className="text-sm leading-relaxed">
                            {t(`projects.descriptions.${project.slug}`, project.short_description)}
                          </CardDescription>
                        </CardHeader>

                        <CardFooter className="pt-0 pb-4">
                          <div className={`flex items-center gap-2 ${theme.btnBg} text-white rounded-lg px-5 py-2.5 text-sm font-semibold transition-all duration-300 group-hover:shadow-lg group-hover:gap-3`}>
                            <TrendingUp className="w-4 h-4" />
                            {t('projects.exploreProject')}
                            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                          </div>
                        </CardFooter>
                      </div>
                    </div>
                  </Card>
                </Link>
                </ScrollRevealCard>
              );
            })}
          </div>
        );
        })()}
        </div>

        {/* Portfolio Overview CTA */}
        <div className="mt-12 text-center">
          <Link to="/overview">
            <Button size="lg" variant="outline" className="gap-2 text-base border-primary/30 hover:bg-primary/5">
              <TrendingUp className="w-5 h-5" />
              {t('footer.overview', 'Portfolio Overview')}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
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
