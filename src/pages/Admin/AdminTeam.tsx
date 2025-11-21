import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Plus, Edit, Eye, EyeOff, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

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

const AdminTeam = () => {
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

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
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Team Member
        </Button>
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
                <div className="flex gap-2">
                  <Badge variant={member.is_visible ? 'default' : 'secondary'}>
                    {member.is_visible ? 'Visible' : 'Hidden'}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                {member.bio && (
                  <p className="text-sm text-muted-foreground line-clamp-3">{member.bio}</p>
                )}
              </div>

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
                <Button variant="outline" size="sm">
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
    </div>
  );
};

export default AdminTeam;
