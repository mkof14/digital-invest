import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Plus, Edit, Eye, EyeOff, Loader2, Trash2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface TeamMember {
  id: string;
  full_name: string;
  title: string;
  bio: string | null;
  photo_url: string | null;
  linkedin_url: string | null;
  email: string | null;
  order_index: number | null;
  is_visible: boolean | null;
  created_at: string;
}

const teamMemberSchema = z.object({
  full_name: z.string().min(2, 'Full name must be at least 2 characters').max(200),
  title: z.string().min(2, 'Title must be at least 2 characters').max(200),
  bio: z.string().optional(),
  photo_url: z.string().url('Must be a valid URL').optional().or(z.literal('')),
  linkedin_url: z.string().url('Must be a valid URL').optional().or(z.literal('')),
  email: z.string().email('Invalid email address').optional().or(z.literal('')),
  order_index: z.string().optional(),
  is_visible: z.boolean().default(true),
});

const AdminTeam = () => {
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [createDialogOpen, setCreateDialogOpen] = useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [editingMember, setEditingMember] = useState<TeamMember | null>(null);
  const [deletingMemberId, setDeletingMemberId] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const { toast } = useToast();

  const createForm = useForm<z.infer<typeof teamMemberSchema>>({
    resolver: zodResolver(teamMemberSchema),
    defaultValues: {
      full_name: '',
      title: '',
      bio: '',
      photo_url: '',
      linkedin_url: '',
      email: '',
      order_index: '0',
      is_visible: true,
    },
  });

  const editForm = useForm<z.infer<typeof teamMemberSchema>>({
    resolver: zodResolver(teamMemberSchema),
  });

  useEffect(() => {
    fetchTeamMembers();
  }, []);

  const fetchTeamMembers = async () => {
    try {
      const { data, error } = await supabase
        .from('team_members')
        .select('*')
        .order('order_index', { ascending: true });

      if (error) throw error;
      setMembers(data || []);
    } catch (error: any) {
      toast({
        title: 'Error loading team members',
        description: error.message,
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const onCreateSubmit = async (values: z.infer<typeof teamMemberSchema>) => {
    setSubmitting(true);
    try {
      const { error } = await supabase.from('team_members').insert({
        full_name: values.full_name,
        title: values.title,
        bio: values.bio || null,
        photo_url: values.photo_url || null,
        linkedin_url: values.linkedin_url || null,
        email: values.email || null,
        order_index: values.order_index ? parseInt(values.order_index) : 0,
        is_visible: values.is_visible,
      });

      if (error) throw error;

      toast({
        title: 'Success',
        description: 'Team member created successfully',
      });

      setCreateDialogOpen(false);
      createForm.reset();
      fetchTeamMembers();
    } catch (error: any) {
      toast({
        title: 'Error creating team member',
        description: error.message,
        variant: 'destructive',
      });
    } finally {
      setSubmitting(false);
    }
  };

  const openEditDialog = (member: TeamMember) => {
    setEditingMember(member);
    editForm.reset({
      full_name: member.full_name,
      title: member.title,
      bio: member.bio || '',
      photo_url: member.photo_url || '',
      linkedin_url: member.linkedin_url || '',
      email: member.email || '',
      order_index: member.order_index?.toString() || '0',
      is_visible: member.is_visible ?? true,
    });
    setEditDialogOpen(true);
  };

  const onEditSubmit = async (values: z.infer<typeof teamMemberSchema>) => {
    if (!editingMember) return;

    setSubmitting(true);
    try {
      const { error } = await supabase
        .from('team_members')
        .update({
          full_name: values.full_name,
          title: values.title,
          bio: values.bio || null,
          photo_url: values.photo_url || null,
          linkedin_url: values.linkedin_url || null,
          email: values.email || null,
          order_index: values.order_index ? parseInt(values.order_index) : 0,
          is_visible: values.is_visible,
        })
        .eq('id', editingMember.id);

      if (error) throw error;

      toast({
        title: 'Success',
        description: 'Team member updated successfully',
      });

      setEditDialogOpen(false);
      setEditingMember(null);
      fetchTeamMembers();
    } catch (error: any) {
      toast({
        title: 'Error updating team member',
        description: error.message,
        variant: 'destructive',
      });
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async () => {
    if (!deletingMemberId) return;

    try {
      const { error } = await supabase
        .from('team_members')
        .delete()
        .eq('id', deletingMemberId);

      if (error) throw error;

      toast({
        title: 'Success',
        description: 'Team member deleted successfully',
      });

      setDeleteDialogOpen(false);
      setDeletingMemberId(null);
      fetchTeamMembers();
    } catch (error: any) {
      toast({
        title: 'Error deleting team member',
        description: error.message,
        variant: 'destructive',
      });
    }
  };

  const toggleVisibility = async (memberId: string, currentVisibility: boolean) => {
    try {
      const { error } = await supabase
        .from('team_members')
        .update({ is_visible: !currentVisibility })
        .eq('id', memberId);

      if (error) throw error;

      toast({
        title: 'Success',
        description: `Team member ${!currentVisibility ? 'shown' : 'hidden'} successfully`,
      });

      fetchTeamMembers();
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
          <h2 className="text-3xl font-bold text-foreground">Manage Team Members</h2>
          <p className="text-muted-foreground">Create and manage team member profiles</p>
        </div>
        <Dialog open={createDialogOpen} onOpenChange={setCreateDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              New Team Member
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Create New Team Member</DialogTitle>
              <DialogDescription>
                Add a new team member profile
              </DialogDescription>
            </DialogHeader>
            <Form {...createForm}>
              <form onSubmit={createForm.handleSubmit(onCreateSubmit)} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={createForm.control}
                    name="full_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="John Doe" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={createForm.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Title</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="CEO & Founder" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={createForm.control}
                  name="bio"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Bio</FormLabel>
                      <FormControl>
                        <Textarea {...field} placeholder="Brief biography..." className="min-h-[100px]" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={createForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email (optional)</FormLabel>
                        <FormControl>
                          <Input {...field} type="email" placeholder="john@example.com" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={createForm.control}
                    name="linkedin_url"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>LinkedIn URL (optional)</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="https://linkedin.com/in/..." />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={createForm.control}
                  name="photo_url"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Photo URL (optional)</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="https://..." />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={createForm.control}
                    name="order_index"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Order Index</FormLabel>
                        <FormControl>
                          <Input {...field} type="number" placeholder="0" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={createForm.control}
                    name="is_visible"
                    render={({ field }) => (
                      <FormItem className="flex items-center justify-between space-y-0 rounded-lg border p-4">
                        <div>
                          <FormLabel>Visible on Site</FormLabel>
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
                </div>

                <div className="flex justify-end gap-2">
                  <Button type="button" variant="outline" onClick={() => setCreateDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button type="submit" disabled={submitting}>
                    {submitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Create Team Member
                  </Button>
                </div>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-6">
        {members.map((member) => (
          <Card key={member.id} className="border border-border/50">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>{member.full_name}</CardTitle>
                  <CardDescription>{member.title}</CardDescription>
                </div>
                <Badge variant={member.is_visible ? 'default' : 'secondary'}>
                  {member.is_visible ? 'Visible' : 'Hidden'}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              {member.bio && (
                <div className="mb-4">
                  <p className="text-sm text-muted-foreground line-clamp-3">{member.bio}</p>
                </div>
              )}

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-semibold text-sm">{member.email || 'Not set'}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">LinkedIn</p>
                  <p className="font-semibold text-sm">{member.linkedin_url ? 'Set' : 'Not set'}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Order</p>
                  <p className="font-semibold text-sm">{member.order_index ?? 0}</p>
                </div>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={() => openEditDialog(member)}>
                  <Edit className="mr-2 h-4 w-4" />
                  Edit
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => toggleVisibility(member.id, member.is_visible ?? false)}
                >
                  {member.is_visible ? (
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
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setDeletingMemberId(member.id);
                    setDeleteDialogOpen(true);
                  }}
                >
                  <Trash2 className="mr-2 h-4 w-4" />
                  Delete
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}

        {members.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No team members yet. Create your first team member profile to get started.</p>
          </div>
        )}
      </div>

      {/* Edit Dialog */}
      <Dialog open={editDialogOpen} onOpenChange={setEditDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Edit Team Member</DialogTitle>
            <DialogDescription>
              Update team member information
            </DialogDescription>
          </DialogHeader>
          <Form {...editForm}>
            <form onSubmit={editForm.handleSubmit(onEditSubmit)} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={editForm.control}
                  name="full_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="John Doe" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={editForm.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="CEO & Founder" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={editForm.control}
                name="bio"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bio</FormLabel>
                    <FormControl>
                      <Textarea {...field} placeholder="Brief biography..." className="min-h-[100px]" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={editForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email (optional)</FormLabel>
                      <FormControl>
                        <Input {...field} type="email" placeholder="john@example.com" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={editForm.control}
                  name="linkedin_url"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>LinkedIn URL (optional)</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="https://linkedin.com/in/..." />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={editForm.control}
                name="photo_url"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Photo URL (optional)</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="https://..." />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={editForm.control}
                  name="order_index"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Order Index</FormLabel>
                      <FormControl>
                        <Input {...field} type="number" placeholder="0" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={editForm.control}
                  name="is_visible"
                  render={({ field }) => (
                    <FormItem className="flex items-center justify-between space-y-0 rounded-lg border p-4">
                      <div>
                        <FormLabel>Visible on Site</FormLabel>
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
              </div>

              <div className="flex justify-end gap-2">
                <Button type="button" variant="outline" onClick={() => setEditDialogOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit" disabled={submitting}>
                  {submitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Save Changes
                </Button>
              </div>
            </form>
          </Form>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the team member profile.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default AdminTeam;
