import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Linkedin, Mail, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface TeamMember {
  id: string;
  full_name: string;
  title: string;
  bio: string | null;
  photo_url: string | null;
  linkedin_url: string | null;
  email: string | null;
}

const TeamPage = () => {
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchTeam();
  }, []);

  const fetchTeam = async () => {
    try {
      const { data, error } = await supabase
        .from('team_members')
        .select('*')
        .eq('is_visible', true)
        .order('order_index', { ascending: true });

      if (error) throw error;
      setMembers(data || []);
    } catch (error: any) {
      toast({
        title: 'Error loading team',
        description: error.message,
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
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

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Our Team
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the professionals driving innovation and growth at Digital Invest Inc.
          </p>
        </div>

        {/* Team Grid */}
        {members.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">Team information will be available soon.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {members.map((member) => (
              <Card
                key={member.id}
                className="group overflow-hidden border border-border/50 bg-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
              >
                {member.photo_url && (
                  <div className="relative h-64 overflow-hidden bg-muted">
                    <img
                      src={member.photo_url}
                      alt={member.full_name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700 ease-out"
                    />
                  </div>
                )}
                
                <CardHeader>
                  <CardTitle className="text-xl">{member.full_name}</CardTitle>
                  <CardDescription className="text-base font-semibold text-primary">
                    {member.title}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  {member.bio && (
                    <p className="text-muted-foreground mb-4 line-clamp-4">
                      {member.bio}
                    </p>
                  )}

                  <div className="flex gap-2">
                    {member.linkedin_url && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={member.linkedin_url} target="_blank" rel="noopener noreferrer">
                          <Linkedin className="h-4 w-4 mr-2" />
                          LinkedIn
                        </a>
                      </Button>
                    )}
                    {member.email && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={`mailto:${member.email}`}>
                          <Mail className="h-4 w-4 mr-2" />
                          Email
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamPage;
