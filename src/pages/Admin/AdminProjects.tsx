import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Plus, Edit, Eye, EyeOff, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';

interface Project {
  id: string;
  slug: string;
  title: string;
  status: string;
  target_amount: number | null;
  current_raised: number;
  currency: string;
  is_visible: boolean;
  created_at: string;
}

const AdminProjects = () => {
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
        .select('*')
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

  const toggleVisibility = async (projectId: string, currentVisibility: boolean) => {
    try {
      const { error } = await supabase
        .from('projects')
        .update({ is_visible: !currentVisibility })
        .eq('id', projectId);

      if (error) throw error;

      toast({
        title: 'Success',
        description: `Project ${!currentVisibility ? 'shown' : 'hidden'} successfully`,
      });

      fetchProjects();
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive',
      });
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-foreground">Manage Projects</h2>
          <p className="text-muted-foreground">Create and manage investment opportunities</p>
        </div>
        <Link to="/admin/projects/new">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Project
          </Button>
        </Link>
      </div>

      <div className="grid gap-6">
        {projects.map((project) => (
          <Card key={project.id} className="border border-border/50">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>Slug: {project.slug}</CardDescription>
                </div>
                <div className="flex gap-2">
                  <Badge variant={project.status === 'OPEN' ? 'default' : 'secondary'}>
                    {project.status}
                  </Badge>
                  <Badge variant={project.is_visible ? 'default' : 'secondary'}>
                    {project.is_visible ? 'Visible' : 'Hidden'}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <div>
                  <p className="text-sm text-muted-foreground">Target</p>
                  <p className="font-semibold">
                    {project.target_amount ? `${project.currency} ${project.target_amount.toLocaleString()}` : 'TBD'}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Raised</p>
                  <p className="font-semibold">
                    {project.currency} {project.current_raised.toLocaleString()}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Progress</p>
                  <p className="font-semibold">
                    {project.target_amount ? `${((project.current_raised / project.target_amount) * 100).toFixed(1)}%` : 'N/A'}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Created</p>
                  <p className="font-semibold">
                    {new Date(project.created_at).toLocaleDateString()}
                  </p>
                </div>
              </div>

              <div className="flex gap-2">
                <Link to={`/admin/projects/edit/${project.id}`}>
                  <Button variant="outline" size="sm">
                    <Edit className="mr-2 h-4 w-4" />
                    Edit
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => toggleVisibility(project.id, project.is_visible)}
                >
                  {project.is_visible ? (
                    <>
                      <EyeOff className="mr-2 h-4 w-4" />
                      Hide
                    </>
                  ) : (
                    <>
                      <Eye className="mr-2 h-4 w-4" />
                      Show
                    </>
                  )}
                </Button>
                <Link to={`/projects/${project.slug}`} target="_blank">
                  <Button variant="ghost" size="sm">
                    <Eye className="mr-2 h-4 w-4" />
                    View Public
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}

        {projects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No projects yet. Create your first project to get started.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminProjects;
