import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Linkedin, Mail, Loader2, Building2, CheckCircle2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';

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
      <div className="pt-24 pb-16">
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

        {/* Founder Section */}
        <section className="mb-16">
          <div className="bg-card/30 border border-border/50 rounded-lg p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-12 items-start">
              {/* Profile Image Placeholder */}
              <div className="flex-shrink-0">
                <div className="w-48 h-48 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-border/50">
                  <div className="text-center">
                    <Building2 className="w-16 h-16 text-primary mx-auto mb-2" />
                    <p className="text-sm font-semibold text-foreground">Michael Kofman</p>
                    <p className="text-xs text-muted-foreground">Founder & CEO</p>
                  </div>
                </div>
              </div>

              {/* Bio Text */}
              <div className="flex-1 space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-2">About the Founder</h2>
                  <p className="text-primary font-semibold">Michael Kofman, Founder & CEO</p>
                </div>
                
                <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
                  <p>
                    Michael Kofman is a technology entrepreneur with decades of experience building large-scale 
                    platforms in data, AI, health, manufacturing, and real-economy operations. He previously led 
                    and built companies in data storage, hosting, analytics, and enterprise-level infrastructures. 
                    Michael's background spans operational leadership, complex project execution, and strategic 
                    development across multiple industries.
                  </p>
                  <p>
                    Digital Invest represents the consolidation of these capabilities into a unified multi-sector 
                    portfolio, built with a long-term, structured approach to real-world impact.
                  </p>
                </div>

                {/* Key Highlights */}
                <div className="pt-4">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Key Highlights</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      "Multi-company builder",
                      "U.S. operations experience",
                      "AI & data systems expert",
                      "Multi-sector execution"
                    ].map((highlight, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-foreground">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Philosophy Quote */}
                <div className="pt-6 border-t border-border/50">
                  <blockquote className="text-sm text-muted-foreground italic">
                    "My approach is based on real execution, practical systems, and long-term thinking. 
                    Digital Invest is not about hype, trends, or shortcuts — it is about building real 
                    platforms that create real value over time."
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Team Members Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">Team Members</h2>
          <p className="text-lg text-muted-foreground">
            Experienced professionals across technology, operations, and strategic development
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
      <Footer />
    </div>
  );
};

export default TeamPage;
