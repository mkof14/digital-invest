import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Plus, Edit, Eye, EyeOff, Loader2, Save } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';
import DownloadInvestorBriefButton from '@/components/DownloadInvestorBriefButton';

interface Project {
  id: string;
  slug: string;
  title: string;
  short_description: string;
  long_description: string;
  category: string;
  status: string;
  target_amount: number | null;
  current_raised: number;
  currency: string;
  min_ticket: number | null;
  location: string | null;
  hero_image_url: string;
  deck_url: string | null;
  priority: number | null;
  is_visible: boolean;
  created_at: string;
}

const projectFormSchema = z.object({
  slug: z.string().min(3, 'Slug must be at least 3 characters').max(100).regex(/^[a-z0-9-]+$/, 'Slug must contain only lowercase letters, numbers, and hyphens'),
  title: z.string().min(3, 'Title must be at least 3 characters').max(200),
  short_description: z.string().min(10, 'Short description must be at least 10 characters').max(280),
  long_description: z.string().min(50, 'Long description must be at least 50 characters'),
  category: z.string().min(2, 'Category is required').max(100),
  status: z.enum(['OPEN', 'CLOSED', 'COMING_SOON']),
  target_amount: z.string().optional(),
  current_raised: z.string().optional(),
  currency: z.string().max(10).default('USD'),
  min_ticket: z.string().optional(),
  location: z.string().max(200).optional(),
  hero_image_url: z.string().url('Must be a valid URL').max(500),
  deck_url: z.string().optional().refine((val) => !val || /^https?:\/\/.+/.test(val), {
    message: 'Must be a valid URL',
  }),
  priority: z.string().optional(),
  is_visible: z.boolean().default(true),
});

const AdminProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [createDialogOpen, setCreateDialogOpen] = useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const { toast } = useToast();

  const createForm = useForm<z.infer<typeof projectFormSchema>>({
    resolver: zodResolver(projectFormSchema),
    defaultValues: {
      slug: '',
      title: '',
      short_description: '',
      long_description: '',
      category: '',
      status: 'OPEN',
      target_amount: '',
      current_raised: '0',
      currency: 'USD',
      min_ticket: '',
      location: '',
      hero_image_url: '',
      deck_url: '',
      priority: '0',
      is_visible: true,
    },
  });

  const editForm = useForm<z.infer<typeof projectFormSchema>>({
    resolver: zodResolver(projectFormSchema),
  });

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

  const onCreateSubmit = async (values: z.infer<typeof projectFormSchema>) => {
    setSubmitting(true);
    try {
      const { error } = await supabase.from('projects').insert({
        slug: values.slug,
        title: values.title,
        short_description: values.short_description,
        long_description: values.long_description,
        category: values.category,
        status: values.status as any,
        target_amount: values.target_amount ? parseFloat(values.target_amount) : null,
        current_raised: values.current_raised ? parseFloat(values.current_raised) : 0,
        currency: values.currency,
        min_ticket: values.min_ticket ? parseFloat(values.min_ticket) : null,
        location: values.location || null,
        hero_image_url: values.hero_image_url,
        deck_url: values.deck_url || null,
        priority: values.priority ? parseInt(values.priority) : 0,
        is_visible: values.is_visible,
      });

      if (error) throw error;

      toast({
        title: 'Success',
        description: 'Project created successfully',
      });

      setCreateDialogOpen(false);
      createForm.reset();
      fetchProjects();
    } catch (error: any) {
      toast({
        title: 'Error creating project',
        description: error.message,
        variant: 'destructive',
      });
    } finally {
      setSubmitting(false);
    }
  };

  const openEditDialog = (project: Project) => {
    setEditingProject(project);
    editForm.reset({
      slug: project.slug as string,
      title: project.title as string,
      short_description: project.short_description as string,
      long_description: project.long_description as string,
      category: project.category as string,
      status: project.status as 'OPEN' | 'CLOSED' | 'COMING_SOON',
      target_amount: project.target_amount?.toString() || '',
      current_raised: project.current_raised?.toString() || '0',
      currency: project.currency as string,
      min_ticket: project.min_ticket?.toString() || '',
      location: (project.location as string) || '',
      hero_image_url: project.hero_image_url as string,
      deck_url: (project.deck_url as string) || '',
      priority: project.priority?.toString() || '0',
      is_visible: (project.is_visible as boolean) ?? true,
    });
    setEditDialogOpen(true);
  };

  const onEditSubmit = async (values: z.infer<typeof projectFormSchema>) => {
    if (!editingProject) return;
    
    setSubmitting(true);
    try {
      const { error } = await supabase
        .from('projects')
        .update({
          slug: values.slug,
          title: values.title,
          short_description: values.short_description,
          long_description: values.long_description,
          category: values.category,
          status: values.status as any,
          target_amount: values.target_amount ? parseFloat(values.target_amount) : null,
          current_raised: values.current_raised ? parseFloat(values.current_raised) : 0,
          currency: values.currency,
          min_ticket: values.min_ticket ? parseFloat(values.min_ticket) : null,
          location: values.location || null,
          hero_image_url: values.hero_image_url,
          deck_url: values.deck_url || null,
          priority: values.priority ? parseInt(values.priority) : 0,
          is_visible: values.is_visible,
        })
        .eq('id', editingProject.id);

      if (error) throw error;

      toast({
        title: 'Success',
        description: 'Project updated successfully',
      });

      setEditDialogOpen(false);
      setEditingProject(null);
      fetchProjects();
    } catch (error: any) {
      toast({
        title: 'Error updating project',
        description: error.message,
        variant: 'destructive',
      });
    } finally {
      setSubmitting(false);
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
        <Dialog open={createDialogOpen} onOpenChange={setCreateDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              New Project
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Create New Project</DialogTitle>
              <DialogDescription>
                Add a new investment project to the platform
              </DialogDescription>
            </DialogHeader>
            <Form {...createForm}>
              <form onSubmit={createForm.handleSubmit(onCreateSubmit)} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={createForm.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Title</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="Project Title" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={createForm.control}
                    name="slug"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Slug</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="project-slug" />
                        </FormControl>
                        <FormDescription>URL-friendly identifier (lowercase, hyphens only)</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={createForm.control}
                  name="short_description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Short Description (max 280 chars)</FormLabel>
                      <FormControl>
                        <Textarea {...field} placeholder="Brief project description..." className="min-h-[80px]" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={createForm.control}
                  name="long_description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Long Description</FormLabel>
                      <FormControl>
                        <Textarea {...field} placeholder="Detailed project description..." className="min-h-[150px]" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={createForm.control}
                    name="category"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Category</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="e.g., HealthTech, AgroTech" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={createForm.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Location</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="Charlotte, NC" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <FormField
                    control={createForm.control}
                    name="status"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Status</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select status" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="OPEN">Open</SelectItem>
                            <SelectItem value="CLOSED">Closed</SelectItem>
                            <SelectItem value="COMING_SOON">Coming Soon</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={createForm.control}
                    name="currency"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Currency</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="USD" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={createForm.control}
                    name="priority"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Priority</FormLabel>
                        <FormControl>
                          <Input {...field} type="number" placeholder="0" />
                        </FormControl>
                        <FormDescription>Higher = featured first</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <FormField
                    control={createForm.control}
                    name="target_amount"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Target Amount</FormLabel>
                        <FormControl>
                          <Input {...field} type="number" placeholder="1000000" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={createForm.control}
                    name="current_raised"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Current Raised</FormLabel>
                        <FormControl>
                          <Input {...field} type="number" placeholder="0" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={createForm.control}
                    name="min_ticket"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Min Ticket</FormLabel>
                        <FormControl>
                          <Input {...field} type="number" placeholder="25000" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={createForm.control}
                  name="hero_image_url"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Hero Image URL</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="https://..." />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={createForm.control}
                  name="deck_url"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Pitch Deck URL (optional)</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="https://..." />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={createForm.control}
                  name="is_visible"
                  render={({ field }) => (
                    <FormItem className="flex items-center justify-between rounded-lg border p-4">
                      <div className="space-y-0.5">
                        <FormLabel className="text-base">Visible on Platform</FormLabel>
                        <FormDescription>
                          Show this project to public users
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <div className="flex gap-3 justify-end">
                  <Button type="button" variant="outline" onClick={() => setCreateDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button type="submit" disabled={submitting}>
                    {submitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Creating...
                      </>
                    ) : (
                      <>
                        <Save className="mr-2 h-4 w-4" />
                        Create Project
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
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

              <div className="flex gap-2 flex-wrap">
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
                <DownloadInvestorBriefButton projectSlug={project.slug} variant="outline" size="sm" />
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

      {/* Edit Dialog */}
      <Dialog open={editDialogOpen} onOpenChange={setEditDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Edit Project</DialogTitle>
            <DialogDescription>
              Update project information
            </DialogDescription>
          </DialogHeader>
          <Form {...editForm}>
            <form onSubmit={editForm.handleSubmit(onEditSubmit)} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={editForm.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Project Title" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={editForm.control}
                  name="slug"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Slug</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="project-slug" />
                      </FormControl>
                      <FormDescription>URL-friendly identifier</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={editForm.control}
                name="short_description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Short Description</FormLabel>
                    <FormControl>
                      <Textarea {...field} className="min-h-[80px]" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={editForm.control}
                name="long_description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Long Description</FormLabel>
                    <FormControl>
                      <Textarea {...field} className="min-h-[150px]" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={editForm.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Category</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={editForm.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Location</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <FormField
                  control={editForm.control}
                  name="status"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Status</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="OPEN">Open</SelectItem>
                          <SelectItem value="CLOSED">Closed</SelectItem>
                          <SelectItem value="COMING_SOON">Coming Soon</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={editForm.control}
                  name="currency"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Currency</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={editForm.control}
                  name="priority"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Priority</FormLabel>
                      <FormControl>
                        <Input {...field} type="number" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <FormField
                  control={editForm.control}
                  name="target_amount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Target Amount</FormLabel>
                      <FormControl>
                        <Input {...field} type="number" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={editForm.control}
                  name="current_raised"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Current Raised</FormLabel>
                      <FormControl>
                        <Input {...field} type="number" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={editForm.control}
                  name="min_ticket"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Min Ticket</FormLabel>
                      <FormControl>
                        <Input {...field} type="number" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={editForm.control}
                name="hero_image_url"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Hero Image URL</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={editForm.control}
                name="deck_url"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Pitch Deck URL</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={editForm.control}
                name="is_visible"
                render={({ field }) => (
                  <FormItem className="flex items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                      <FormLabel className="text-base">Visible</FormLabel>
                      <FormDescription>
                        Show on platform
                      </FormDescription>
                    </div>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <div className="flex gap-3 justify-end">
                <Button type="button" variant="outline" onClick={() => setEditDialogOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit" disabled={submitting}>
                  {submitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Saving...
                    </>
                  ) : (
                    <>
                      <Save className="mr-2 h-4 w-4" />
                      Save Changes
                    </>
                  )}
                </Button>
              </div>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminProjects;
