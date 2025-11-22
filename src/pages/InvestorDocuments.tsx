import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import DownloadInvestorBriefButton from '@/components/DownloadInvestorBriefButton';
import { Loader2, FileText } from 'lucide-react';
import InvestorPageDisclaimer from '@/components/InvestorPageDisclaimer';

interface Project {
  id: string;
  slug: string;
  title: string;
  short_description: string;
  category: string;
  status: string;
  hero_image_url?: string;
}

const InvestorDocuments = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('id, slug, title, short_description, category, status, hero_image_url')
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
        return 'bg-green-500/10 text-green-500 border-green-500/20';
      case 'CLOSED':
        return 'bg-gray-500/10 text-gray-500 border-gray-500/20';
      case 'COMING_SOON':
        return 'bg-blue-500/10 text-blue-500 border-blue-500/20';
      default:
        return 'bg-muted text-muted-foreground border-border';
    }
  };

  const getCategoryColor = (category: string) => {
    const lowerCategory = category.toLowerCase();
    if (lowerCategory.includes('health') || lowerCategory.includes('biotech')) {
      return 'bg-purple-500/10 text-purple-500 border-purple-500/20';
    } else if (lowerCategory.includes('agro') || lowerCategory.includes('agriculture')) {
      return 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20';
    } else if (lowerCategory.includes('food')) {
      return 'bg-orange-500/10 text-orange-500 border-orange-500/20';
    } else if (lowerCategory.includes('digital') || lowerCategory.includes('portfolio')) {
      return 'bg-indigo-500/10 text-indigo-500 border-indigo-500/20';
    }
    return 'bg-muted text-muted-foreground border-border';
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <FileText className="h-12 w-12 text-primary mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                Investor Documents
              </h1>
            </div>
            <p className="text-xl text-muted-foreground mb-8">
              Download project overview materials for review. Private, non-binding.
            </p>
            
            {/* Disclaimer Block */}
            <InvestorPageDisclaimer variant="compact" />
          </div>

          {/* Loading State */}
          {loading && (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          )}

          {/* Projects Grid */}
          {!loading && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {projects.map((project) => (
                <Card key={project.id} className="flex flex-col hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge variant="outline" className={getCategoryColor(project.category)}>
                        {project.category}
                      </Badge>
                      <Badge variant="outline" className={getStatusColor(project.status)}>
                        {project.status.replace('_', ' ')}
                      </Badge>
                    </div>
                    <CardDescription className="line-clamp-3">
                      {project.short_description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col justify-end">
                    <DownloadInvestorBriefButton
                      projectSlug={project.slug}
                      variant="default"
                      size="default"
                      className="w-full"
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Empty State */}
          {!loading && projects.length === 0 && (
            <div className="text-center py-20">
              <FileText className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                No documents available
              </h3>
              <p className="text-muted-foreground">
                Project briefs will be available here once projects are published.
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default InvestorDocuments;
