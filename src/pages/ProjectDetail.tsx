import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, TrendingUp, Target, Calendar, Users, AlertTriangle, FileText, Loader2, ExternalLink } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import InterestForm from '@/components/InterestForm';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

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
}

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

  const calculateProgress = (current: number, target: number | null) => {
    if (!target || target === 0) return 0;
    return Math.min((current / target) * 100, 100);
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
            <img
              src={project.hero_image_url}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <div className="flex gap-3 mb-4">
                <Badge className={getStatusColor(project.status)}>
                  {project.status.replace('_', ' ')}
                </Badge>
                <Badge variant="outline">{project.category}</Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                {project.title}
              </h1>
              <p className="text-xl text-muted-foreground">
                {project.short_description}
              </p>
            </div>
          </div>

          {/* Investment Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-card border border-border p-6 rounded-lg">
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <Target className="h-4 w-4" />
                <span className="text-sm">Target Amount</span>
              </div>
              <p className="text-2xl font-bold text-foreground">
                {project.target_amount ? `${project.currency} ${project.target_amount.toLocaleString()}` : 'TBD'}
              </p>
            </div>

            <div className="bg-card border border-border p-6 rounded-lg">
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <TrendingUp className="h-4 w-4" />
                <span className="text-sm">Current Raised</span>
              </div>
              <p className="text-2xl font-bold text-foreground">
                {project.currency} {project.current_raised.toLocaleString()}
              </p>
            </div>

            <div className="bg-card border border-border p-6 rounded-lg">
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <Users className="h-4 w-4" />
                <span className="text-sm">Minimum Ticket</span>
              </div>
              <p className="text-2xl font-bold text-foreground">
                {project.min_ticket ? `${project.currency} ${project.min_ticket.toLocaleString()}` : 'Negotiable'}
              </p>
            </div>

            <div className="bg-card border border-border p-6 rounded-lg">
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <Calendar className="h-4 w-4" />
                <span className="text-sm">Progress</span>
              </div>
              <p className="text-2xl font-bold text-foreground">
                {project.target_amount ? `${calculateProgress(project.current_raised, project.target_amount).toFixed(1)}%` : 'N/A'}
              </p>
            </div>
          </div>

          {project.target_amount && (
            <div className="bg-card border border-border p-6 rounded-lg mb-8">
              <Progress value={calculateProgress(project.current_raised, project.target_amount)} className="h-3 mb-2" />
              <p className="text-sm text-muted-foreground text-center">
                {project.currency} {project.current_raised.toLocaleString()} raised of {project.currency} {project.target_amount.toLocaleString()} goal
              </p>
            </div>
          )}

          {/* CTA Button */}
          {project.status === 'OPEN' && (
            <div className="text-center mb-12">
              <Button size="lg" className="text-lg px-8 py-6" onClick={() => setShowInterestForm(true)}>
                <TrendingUp className="mr-2 h-5 w-5" />
                Submit Expression of Interest
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                Non-binding • No payment required at this stage
              </p>
            </div>
          )}
        </div>

        <Separator className="my-12" />

        {/* Content Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <section>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <span className="text-primary">Overview</span>
              </h2>
              <div className="prose prose-lg max-w-none text-foreground">
                <p className="whitespace-pre-wrap">{project.long_description}</p>
              </div>
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
                <span className="text-primary">Risk Disclosure</span>
              </h2>
              <div className="bg-warning/10 border border-warning/30 p-6 rounded-lg space-y-4">
                <p className="text-foreground">
                  <strong>Important:</strong> Investment in private companies carries significant risks, including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Potential loss of entire investment</li>
                  <li>Illiquidity - investments may not be easily sold</li>
                  <li>No guaranteed returns or dividends</li>
                  <li>Market, operational, and regulatory risks</li>
                  <li>Early-stage companies may not achieve projected results</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4">
                  This information is for accredited investors only. Consult with legal and financial advisors before making any investment decision.
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

            {/* Contact */}
            <div className="bg-card border border-border p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Questions?</h3>
              <p className="text-muted-foreground mb-4">
                Our investment team is here to answer your questions and discuss this opportunity in detail.
              </p>
              <Link to="/for-investors">
                <Button variant="outline" className="w-full">
                  Contact Us
                </Button>
              </Link>
            </div>

            {/* Disclaimer */}
            <div className="bg-muted/30 border border-border p-6 rounded-lg text-sm text-muted-foreground">
              <p className="font-semibold text-foreground mb-2">Legal Disclaimer</p>
              <p>
                Digital Invest Inc. does not provide investment, legal, or tax advice. Information on this page is for informational purposes only and does not constitute a public offer or solicitation.
              </p>
            </div>
          </div>
        </div>
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
