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

interface NewsPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  published_at: string | null;
  is_published: boolean | null;
  created_at: string;
}

const newsPostSchema = z.object({
  slug: z.string().min(3, 'Slug must be at least 3 characters').max(100).regex(/^[a-z0-9-]+$/, 'Slug must contain only lowercase letters, numbers, and hyphens'),
  title: z.string().min(3, 'Title must be at least 3 characters').max(200),
  excerpt: z.string().min(10, 'Excerpt must be at least 10 characters').max(500),
  body: z.string().min(50, 'Body must be at least 50 characters'),
  is_published: z.boolean().default(false),
});

const AdminNews = () => {
  const [posts, setPosts] = useState<NewsPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [createDialogOpen, setCreateDialogOpen] = useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<NewsPost | null>(null);
  const [deletingPostId, setDeletingPostId] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const { toast } = useToast();

  const createForm = useForm<z.infer<typeof newsPostSchema>>({
    resolver: zodResolver(newsPostSchema),
    defaultValues: {
      slug: '',
      title: '',
      excerpt: '',
      body: '',
      is_published: false,
    },
  });

  const editForm = useForm<z.infer<typeof newsPostSchema>>({
    resolver: zodResolver(newsPostSchema),
  });

  useEffect(() => {
    fetchNewsPosts();
  }, []);

  const fetchNewsPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('news_posts')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setPosts(data || []);
    } catch (error: any) {
      toast({
        title: 'Error loading news posts',
        description: error.message,
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const onCreateSubmit = async (values: z.infer<typeof newsPostSchema>) => {
    setSubmitting(true);
    try {
      const { error } = await supabase.from('news_posts').insert({
        slug: values.slug,
        title: values.title,
        excerpt: values.excerpt,
        body: values.body,
        is_published: values.is_published,
        published_at: values.is_published ? new Date().toISOString() : null,
      });

      if (error) throw error;

      toast({
        title: 'Success',
        description: 'News post created successfully',
      });

      setCreateDialogOpen(false);
      createForm.reset();
      fetchNewsPosts();
    } catch (error: any) {
      toast({
        title: 'Error creating news post',
        description: error.message,
        variant: 'destructive',
      });
    } finally {
      setSubmitting(false);
    }
  };

  const openEditDialog = (post: NewsPost) => {
    setEditingPost(post);
    editForm.reset({
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt,
      body: post.body,
      is_published: post.is_published ?? false,
    });
    setEditDialogOpen(true);
  };

  const onEditSubmit = async (values: z.infer<typeof newsPostSchema>) => {
    if (!editingPost) return;

    setSubmitting(true);
    try {
      const { error } = await supabase
        .from('news_posts')
        .update({
          slug: values.slug,
          title: values.title,
          excerpt: values.excerpt,
          body: values.body,
          is_published: values.is_published,
          published_at: values.is_published && !editingPost.is_published 
            ? new Date().toISOString() 
            : editingPost.published_at,
        })
        .eq('id', editingPost.id);

      if (error) throw error;

      toast({
        title: 'Success',
        description: 'News post updated successfully',
      });

      setEditDialogOpen(false);
      setEditingPost(null);
      fetchNewsPosts();
    } catch (error: any) {
      toast({
        title: 'Error updating news post',
        description: error.message,
        variant: 'destructive',
      });
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async () => {
    if (!deletingPostId) return;

    try {
      const { error } = await supabase
        .from('news_posts')
        .delete()
        .eq('id', deletingPostId);

      if (error) throw error;

      toast({
        title: 'Success',
        description: 'News post deleted successfully',
      });

      setDeleteDialogOpen(false);
      setDeletingPostId(null);
      fetchNewsPosts();
    } catch (error: any) {
      toast({
        title: 'Error deleting news post',
        description: error.message,
        variant: 'destructive',
      });
    }
  };

  const togglePublished = async (postId: string, currentStatus: boolean) => {
    try {
      const { error } = await supabase
        .from('news_posts')
        .update({ 
          is_published: !currentStatus,
          published_at: !currentStatus ? new Date().toISOString() : null
        })
        .eq('id', postId);

      if (error) throw error;

      toast({
        title: 'Success',
        description: `News post ${!currentStatus ? 'published' : 'unpublished'} successfully`,
      });

      fetchNewsPosts();
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
          <h2 className="text-3xl font-bold text-foreground">Manage News & Updates</h2>
          <p className="text-muted-foreground">Create and manage news posts and company updates</p>
        </div>
        <Dialog open={createDialogOpen} onOpenChange={setCreateDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              New Post
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Create New Post</DialogTitle>
              <DialogDescription>
                Add a new news post or company update
              </DialogDescription>
            </DialogHeader>
            <Form {...createForm}>
              <form onSubmit={createForm.handleSubmit(onCreateSubmit)} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={createForm.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Title</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="Post Title" />
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
                          <Input {...field} placeholder="post-slug" />
                        </FormControl>
                        <FormDescription>URL-friendly identifier</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={createForm.control}
                  name="excerpt"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Excerpt (max 500 chars)</FormLabel>
                      <FormControl>
                        <Textarea {...field} placeholder="Brief summary..." className="min-h-[80px]" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={createForm.control}
                  name="body"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Body</FormLabel>
                      <FormControl>
                        <Textarea {...field} placeholder="Full post content..." className="min-h-[200px]" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={createForm.control}
                  name="is_published"
                  render={({ field }) => (
                    <FormItem className="flex items-center justify-between space-y-0 rounded-lg border p-4">
                      <div>
                        <FormLabel>Publish Immediately</FormLabel>
                        <FormDescription>Make this post visible to public</FormDescription>
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

                <div className="flex justify-end gap-2">
                  <Button type="button" variant="outline" onClick={() => setCreateDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button type="submit" disabled={submitting}>
                    {submitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Create Post
                  </Button>
                </div>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-6">
        {posts.map((post) => (
          <Card key={post.id} className="border border-border/50">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>{post.title}</CardTitle>
                  <CardDescription>Slug: {post.slug}</CardDescription>
                </div>
                <Badge variant={post.is_published ? 'default' : 'secondary'}>
                  {post.is_published ? 'Published' : 'Draft'}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <p className="text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm text-muted-foreground">Created</p>
                  <p className="font-semibold text-sm">
                    {new Date(post.created_at).toLocaleDateString()}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Published</p>
                  <p className="font-semibold text-sm">
                    {post.published_at ? new Date(post.published_at).toLocaleDateString() : 'Not published'}
                  </p>
                </div>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={() => openEditDialog(post)}>
                  <Edit className="mr-2 h-4 w-4" />
                  Edit
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => togglePublished(post.id, post.is_published ?? false)}
                >
                  {post.is_published ? (
                    <>
                      <EyeOff className="mr-2 h-4 w-4" />
                      Unpublish
                    </>
                  ) : (
                    <>
                      <Eye className="mr-2 h-4 w-4" />
                      Publish
                    </>
                  )}
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setDeletingPostId(post.id);
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

        {posts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No news posts yet. Create your first post to get started.</p>
          </div>
        )}
      </div>

      {/* Edit Dialog */}
      <Dialog open={editDialogOpen} onOpenChange={setEditDialogOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Edit Post</DialogTitle>
            <DialogDescription>
              Update news post information
            </DialogDescription>
          </DialogHeader>
          <Form {...editForm}>
            <form onSubmit={editForm.handleSubmit(onEditSubmit)} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={editForm.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Post Title" />
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
                        <Input {...field} placeholder="post-slug" />
                      </FormControl>
                      <FormDescription>URL-friendly identifier</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={editForm.control}
                name="excerpt"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Excerpt (max 500 chars)</FormLabel>
                    <FormControl>
                      <Textarea {...field} placeholder="Brief summary..." className="min-h-[80px]" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={editForm.control}
                name="body"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Body</FormLabel>
                    <FormControl>
                      <Textarea {...field} placeholder="Full post content..." className="min-h-[200px]" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={editForm.control}
                name="is_published"
                render={({ field }) => (
                  <FormItem className="flex items-center justify-between space-y-0 rounded-lg border p-4">
                    <div>
                      <FormLabel>Published</FormLabel>
                      <FormDescription>Make this post visible to public</FormDescription>
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
              This action cannot be undone. This will permanently delete the news post.
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

export default AdminNews;
