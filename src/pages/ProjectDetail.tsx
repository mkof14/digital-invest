import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, TrendingUp, Target, Calendar, Users, AlertTriangle, FileText, Loader2, ExternalLink, CheckCircle2, DollarSign, Clock, Rocket } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import InterestForm from '@/components/InterestForm';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { updateMetaTags, resetMetaTags, truncateForMeta } from '@/lib/metaTags';
import { generateProjectSchema, generateBreadcrumbSchema, injectStructuredData, removeStructuredData } from '@/lib/structuredData';
import OptimizedImage from '@/components/OptimizedImage';
import { MarkdownContent } from '@/components/MarkdownContent';
import InvestorPageDisclaimer from '@/components/InvestorPageDisclaimer';
import biomathCoreHero from '@/assets/projects/biomath-core-hero.jpg';
import digitalInvestHero from '@/assets/projects/digitalinvest-hero.jpg';

interface Project {
  id: string;
  slug: string;
  title: string;
  short_description: string;
  long_description: string;
  status: string;
  target_amount: number | null;
  current_raised: number;
  currency: string;
  min_ticket: number | null;
  category: string;
  hero_image_url: string;
  deck_url: string | null;
  website_url: string | null;
  location: string | null;
}

const getInvestmentHighlights = (category: string) => {
  const categoryLower = category.toLowerCase();
  
  if (categoryLower.includes('agro') || categoryLower.includes('terraaero') || categoryLower.includes('agriculture')) {
    return [
      "Real agricultural demand and clear service model",
      "Scalable drone operations with multi-state expansion potential",
      "Roadmap towards U.S.-based drone manufacturing",
      "Strong operational focus and measurable unit economics"
    ];
  }
  
  if (categoryLower.includes('health') || categoryLower.includes('biomath') || categoryLower.includes('longevity')) {
    return [
      "High-value health and longevity data infrastructure",
      "AI-driven insights instead of raw numbers",
      "Multi-layer model across many health categories",
      "Long-term usage potential and subscription-style logic"
    ];
  }
  
  if (categoryLower.includes('food') || categoryLower.includes('dishcore') || categoryLower.includes('nutrition')) {
    return [
      "Standardized, scalable food manufacturing",
      "AI-driven recipe and nutrition engine",
      "High repeatability and recurring demand",
      "Strong synergy with health and wellness platforms"
    ];
  }
  
  if (categoryLower.includes('digital invest') || categoryLower.includes('infrastructure')) {
    return [
      "Multi-sector, multi-project portfolio structure",
      "Shared AI, infrastructure, and manufacturing backbone",
      "Cross-project synergy and long-term roadmap",
      "Diversified exposure across multiple industries"
    ];
  }
  
  return [
    "Clear business model and revenue potential",
    "Strong market demand and growth trajectory",
    "Experienced team with proven track record",
    "Strategic positioning in growing industry"
  ];
};

const getWhyNow = (category: string) => {
  const categoryLower = category.toLowerCase();
  
  if (categoryLower.includes('agro') || categoryLower.includes('terraaero') || categoryLower.includes('agriculture')) {
    return "Drone-enabled agriculture is moving from experimentation to daily operations. Farms are seeking efficient, repeatable ways to manage spraying, fertilization, and analytics.";
  }
  
  if (categoryLower.includes('health') || categoryLower.includes('biomath') || categoryLower.includes('longevity')) {
    return "People are overwhelmed with health data and need clear interpretation. Demand for structured health and longevity tools is growing rapidly.";
  }
  
  if (categoryLower.includes('food') || categoryLower.includes('dishcore') || categoryLower.includes('nutrition')) {
    return "Food production needs to move from generic processes to precise, standardized, data-driven manufacturing.";
  }
  
  if (categoryLower.includes('digital invest') || categoryLower.includes('infrastructure')) {
    return "Multi-project ecosystems can create more stable, enduring value than isolated single ventures.";
  }
  
  return "Market conditions are favorable for innovative solutions that address real-world challenges with proven technology.";
};

const getRevenueModel = (category: string) => {
  const categoryLower = category.toLowerCase();
  
  if (categoryLower.includes('agro') || categoryLower.includes('terraaero') || categoryLower.includes('agriculture')) {
    return [
      "Drone-based spraying and fertilization services",
      "Field analytics and data services",
      "Future drone manufacturing and equipment programs"
    ];
  }
  
  if (categoryLower.includes('health') || categoryLower.includes('biomath')) {
    if (categoryLower.includes('core')) {
      return [
        "Subscription access to health and insight modules",
        "Enterprise integrations and B2B offerings",
        "Data and analytics services (not selling personal data)"
      ];
    } else {
      return [
        "Longevity and wellness memberships",
        "Partnerships with wellness networks and clinics",
        "Advanced analytics modules"
      ];
    }
  }
  
  if (categoryLower.includes('food') || categoryLower.includes('dishcore') || categoryLower.includes('nutrition')) {
    return [
      "Ready-meal production and manufacturing services",
      "B2B sales to retailers and wellness partners",
      "White-label production and custom menus"
    ];
  }
  
  if (categoryLower.includes('digital invest') || categoryLower.includes('infrastructure')) {
    return [
      "Portfolio-wide project value",
      "Shared technology and infrastructure assets",
      "Cross-project revenue synergies"
    ];
  }
  
  return [
    "Direct product and service sales",
    "Subscription and recurring revenue",
    "Strategic partnerships and licensing"
  ];
};

const getRoadmapPhases = (category: string) => {
  const categoryLower = category.toLowerCase();
  
  if (categoryLower.includes('health') || categoryLower.includes('biomath')) {
    return [
      { phase: "Phase 1", title: "Model build", description: "Core platform development and initial testing" },
      { phase: "Phase 2", title: "Service expansion", description: "Rollout to early adopters and partners" },
      { phase: "Phase 3", title: "Integrations", description: "Third-party partnerships and API development" },
      { phase: "Phase 4", title: "Advanced insights", description: "AI enhancements and predictive analytics" }
    ];
  }
  
  if (categoryLower.includes('agro') || categoryLower.includes('terraaero') || categoryLower.includes('agriculture')) {
    return [
      { phase: "Phase 1", title: "Initial operations", description: "Establish core service capabilities" },
      { phase: "Phase 2", title: "Multi-state rollout", description: "Expand geographic coverage" },
      { phase: "Phase 3", title: "Manufacturing", description: "Develop U.S.-based production capacity" },
      { phase: "Phase 4", title: "Scaling", description: "National expansion and optimization" }
    ];
  }
  
  return [
    { phase: "Phase 1", title: "Foundation", description: "Core product development and market entry" },
    { phase: "Phase 2", title: "Expansion", description: "Growth and market penetration" },
    { phase: "Phase 3", title: "Scaling & Optimization", description: "Efficiency improvements and partnerships" },
    { phase: "Phase 4", title: "Long-term growth", description: "Market leadership and innovation" }
  ];
};

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [showInterestForm, setShowInterestForm] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (slug) {
      fetchProject();
    }
  }, [slug]);

  useEffect(() => {
    if (project) {
      const pageTitle = `${project.title} - Investment Opportunity | Digital Invest Inc.`;
      const pageDescription = truncateForMeta(project.short_description, 160);
      const canonicalUrl = `https://digitalinvest.com/projects/${project.slug}`;
      const ogImage = project.hero_image_url || 'https://digitalinvest.com/lovable-uploads/d1011e6f-955a-48d9-adef-662af751c3b9.png';

      updateMetaTags({
        title: pageTitle,
        description: pageDescription,
        ogTitle: project.title,
        ogDescription: pageDescription,
        ogImage: ogImage,
        ogType: 'article',
        canonicalUrl: canonicalUrl,
      });

      // Add structured data for SEO
      const projectSchema = generateProjectSchema(project);
      injectStructuredData(projectSchema, 'project-structured-data');

      // Add breadcrumb schema
      const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: 'https://digitalinvest.com/' },
        { name: 'Projects', url: 'https://digitalinvest.com/projects' },
        { name: project.title, url: `https://digitalinvest.com/projects/${project.slug}` }
      ]);
      injectStructuredData(breadcrumbSchema, 'breadcrumb-structured-data');
    }

    return () => {
      resetMetaTags();
      removeStructuredData('project-structured-data');
      removeStructuredData('breadcrumb-structured-data');
    };
  }, [project]);

  const fetchProject = async () => {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('slug', slug)
        .eq('is_visible', true)
        .single();

      if (error) throw error;
      setProject(data);
    } catch (error: any) {
      toast({
        title: 'Error loading project',
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
      <div className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center h-64">
            <Loader2 className="h-12 w-12 animate-spin text-primary" />
          </div>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
          <p className="text-muted-foreground mb-8">The project you're looking for doesn't exist or has been removed.</p>
          <Link to="/projects">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const isBioMathCore = project.slug === 'biomath-core';
  const isDigitalInvestPortfolio = project.slug === 'digital-invest-portfolio';
  const heroImageSrc = isBioMathCore
    ? biomathCoreHero
    : isDigitalInvestPortfolio
      ? digitalInvestHero
      : project.hero_image_url;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
        {/* Back Button */}
        <Link to="/projects" className="inline-block mb-6">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Button>
        </Link>

        {/* Hero Section */}
        <div className="mb-12">
          <div className="relative h-[400px] rounded-lg overflow-hidden mb-8">
            <OptimizedImage
              src={heroImageSrc}
              alt={`${project.title} - ${project.category} project overview`}
              className="w-full h-full object-cover"
              containerClassName="w-full h-full"
              aspectRatio="video"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <div className="flex items-center gap-4 mb-4">
                {(isBioMathCore || isDigitalInvestPortfolio) && (
                  <img
                    src={isBioMathCore ? '/lovable-uploads/biomath-core-logo.png' : '/lovable-uploads/d1011e6f-955a-48d9-adef-662af751c3b9.png'}
                    alt={isBioMathCore ? 'BioMath Core logo' : 'Digital Invest Inc. logo'}
                    className="w-16 h-16 md:w-20 md:h-20 object-contain"
                  />
                )}
                <div>
                  <div className="flex gap-3 mb-3">
                    <Badge className={getStatusColor(project.status)}>
                      {project.status.replace('_', ' ')}
                    </Badge>
                    <Badge variant="outline">{project.category}</Badge>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                    {project.title}
                  </h1>
                  <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground mb-2">
                    <span>{project.category}</span>
                    {project.location && (
                      <>
                        <span>·</span>
                        <span>{project.location}</span>
                      </>
                    )}
                    <span>·</span>
                    <Badge className={getStatusColor(project.status)}>
                      {project.status.replace('_', ' ')}
                    </Badge>
                  </div>
                  <p className="text-lg text-muted-foreground/90 mb-1">
                    A portfolio project developed and operated by Digital Invest Inc.
                  </p>
                  <p className="text-xl text-foreground">
                    {project.short_description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          {project.status === 'OPEN' && (
            <div className="text-center mb-12">
              <Button size="lg" className="text-lg px-8 py-6" onClick={() => setShowInterestForm(true)}>
                <TrendingUp className="mr-2 h-5 w-5" />
                Request Private Information
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                Non-binding request • No payment required
              </p>
            </div>
          )}
        </div>

        <Separator className="my-12" />

        {/* Investment Highlights Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-foreground">
            Investment Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {getInvestmentHighlights(project.category).map((highlight, index) => (
              <Card key={index} className="border border-border/50 bg-card">
                <CardContent className="pt-6 pb-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-sm text-foreground leading-relaxed">{highlight}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-12" />

        {/* Why Now Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-foreground">
            Why Now?
          </h2>
          <Card className="border border-border/50 bg-card">
            <CardContent className="pt-6 pb-6">
              <p className="text-base text-muted-foreground leading-relaxed">
                {getWhyNow(project.category)}
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Revenue Model Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-foreground">
            How This Project Can Generate Revenue
          </h2>
          <div className="space-y-4">
            {getRevenueModel(project.category).map((revenue, index) => (
              <Card key={index} className="border border-border/50 bg-card">
                <CardContent className="pt-6 pb-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                      <DollarSign className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-sm text-foreground leading-relaxed">{revenue}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-12" />

        {/* Roadmap Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-foreground">
            Roadmap
          </h2>
          <div className="space-y-6">
            {getRoadmapPhases(project.category).map((phase, index) => (
              <Card key={index} className="border border-border/50 bg-card hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-6 pb-6">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-lg font-bold text-primary">{index + 1}</span>
                      </div>
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-3">
                        <h3 className="text-xl font-bold text-foreground">{phase.title}</h3>
                        <Clock className="w-5 h-5 text-primary" />
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {phase.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-12" />

        {/* Content Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <section>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <span className="text-primary">Overview</span>
              </h2>
              <MarkdownContent 
                content={project.long_description} 
                className="prose-lg"
              />
            </section>

            {/* Use of Funds */}
            <section>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <span className="text-primary">Use of Funds</span>
              </h2>
              <div className="space-y-4">
                <div className="bg-card border border-border p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Research & Development</h3>
                  <p className="text-muted-foreground">Investment in cutting-edge technology and innovation</p>
                </div>
                <div className="bg-card border border-border p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Market Expansion</h3>
                  <p className="text-muted-foreground">Growing our reach and establishing market presence</p>
                </div>
                <div className="bg-card border border-border p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Team Growth</h3>
                  <p className="text-muted-foreground">Hiring top talent to accelerate development</p>
                </div>
              </div>
            </section>

            {/* Risks */}
            <section>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <AlertTriangle className="h-8 w-8 text-warning" />
                <span className="text-primary">Risks</span>
              </h2>
              <div className="bg-warning/10 border border-warning/30 p-6 rounded-lg space-y-4">
                <p className="text-foreground font-semibold mb-4">
                  All investments involve risk. Key considerations include:
                </p>
                <ul className="list-disc list-inside space-y-3 text-foreground">
                  <li>Early-stage projects may experience delays or strategy changes</li>
                  <li>Regulatory environments may evolve in health, agriculture, or manufacturing</li>
                  <li>Market demand can vary across regions and over time</li>
                  <li>Operational and execution risks are always present</li>
                  <li>No financial results or returns are guaranteed</li>
                  <li>Investments can result in partial or full loss of capital</li>
                  <li>Liquidity may be limited or unavailable for extended periods</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-6 pt-4 border-t border-warning/20">
                  This information is for informational purposes only. Consult with legal and financial advisors before making any investment decision.
                </p>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Website Link */}
            {project.website_url && (
              <div className="bg-card border border-border p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <ExternalLink className="h-5 w-5 text-primary" />
                  Project Website
                </h3>
                <Button variant="outline" className="w-full" asChild>
                  <a href={project.website_url} target="_blank" rel="noopener noreferrer">
                    Visit Website
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            )}

            {/* Documents */}
            {project.deck_url && (
              <div className="bg-card border border-border p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  Documents
                </h3>
                <Button variant="outline" className="w-full" asChild>
                  <a href={project.deck_url} target="_blank" rel="noopener noreferrer">
                    View Pitch Deck
                  </a>
                </Button>
              </div>
            )}

            <div className="bg-card border border-border p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Questions?</h3>
              <p className="text-muted-foreground mb-4">
                Contact our team for private information and to discuss this project opportunity.
              </p>
              <Link to="/contact">
                <Button variant="outline" className="w-full">
                  Request Information
                </Button>
              </Link>
            </div>

            {/* Disclaimer */}
            <InvestorPageDisclaimer variant="compact" />
          </div>
        </div>

        {/* Investor Page Disclaimer - Bottom of Page */}
        <InvestorPageDisclaimer className="mt-12" />

        {/* Final Call to Action */}
        <section className="mt-16 pt-12 border-t border-border/50">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold text-foreground">
              Request More Information
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Submitting a request is non-binding and does not create any agreement. All participation is discussed privately and offline.
            </p>
            {project.status === 'OPEN' && (
              <Button size="lg" className="text-lg px-10 py-6" onClick={() => setShowInterestForm(true)}>
                <Rocket className="mr-2 h-5 w-5" />
                Request Private Information
              </Button>
            )}
            <p className="text-sm text-muted-foreground">
              No payment required • Private consultation only
            </p>
          </div>
        </section>
        </div>
      </div>

      {/* Interest Form Modal */}
      <InterestForm
        projectId={project.id}
        projectTitle={project.title}
        open={showInterestForm}
        onOpenChange={setShowInterestForm}
      />
      
      <Footer />
    </div>
  );
};

export default ProjectDetail;
