import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Linkedin, Mail, Loader2, Building2, CheckCircle2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';
import OptimizedImage from '@/components/OptimizedImage';

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
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
            About the Founder
          </h2>
          
          <div className="bg-card/30 border border-border/50 rounded-lg p-8 md:p-12 mb-12">
            <div className="flex flex-col gap-12 items-start">
              {/* Bio Text */}
              <div className="flex-1 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Michael Kofman</h3>
                  <p className="text-primary font-semibold">Founder & CEO</p>
                </div>
                
                <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
                  <p>
                    Michael Kofman is a technology entrepreneur with decades of experience building large-scale 
                    platforms in data, AI, Digital Health, BioTech, manufacturing, and real-economy operations. He previously led 
                    and built companies in data storage, analytics, and enterprise-level infrastructures. 
                    Michael's background spans operational leadership, complex project execution, and strategic 
                    development across multiple industries.
                  </p>
                  <p>
                    Digital Invest represents the consolidation of these capabilities into a unified multi-sector 
                    portfolio, built with a long-term, structured approach to real-world impact.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Background and Achievements */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Professional Background and Achievements
            </h3>
            
            <div className="space-y-4">
              {[
                "Built and scaled multiple technology and real-economy companies",
                "Experience with U.S. operations, infrastructure, and enterprise systems",
                "Led teams across technology, data platforms, and manufacturing",
                "Deep expertise in AI-driven health analytics and system design",
                "Multi-sector operational execution (healthtech, foodtech, agriculture, manufacturing)"
              ].map((achievement, index) => (
                <Card key={index} className="border border-border/50 bg-card">
                  <CardContent className="pt-6 pb-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                      </div>
                      <p className="text-base text-foreground leading-relaxed">
                        {achievement}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Visual Achievement Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { icon: <Building2 className="w-8 h-8" />, label: "Multi-Company Builder" },
              { icon: <Linkedin className="w-8 h-8" />, label: "Team Leadership" },
              { icon: <Mail className="w-8 h-8" />, label: "AI & Data Systems" },
              { icon: <CheckCircle2 className="w-8 h-8" />, label: "Operational Excellence" }
            ].map((item, index) => (
              <Card key={index} className="border border-border/50 bg-card">
                <CardContent className="pt-6 pb-6 text-center space-y-3">
                  <div className="p-3 bg-primary/10 rounded-lg w-fit mx-auto">
                    <div className="text-primary">{item.icon}</div>
                  </div>
                  <p className="text-sm font-medium text-foreground">{item.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Founder's Philosophy */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Founder's Philosophy
            </h3>
            
            <Card className="border border-primary/30 bg-card">
              <CardContent className="pt-8 pb-8">
                <blockquote className="text-lg text-foreground leading-relaxed text-center italic">
                  "My approach is based on real execution, practical systems, and long-term thinking. 
                  Digital Invest is not about hype, trends, or shortcuts — it is about building real 
                  platforms that create real value over time."
                </blockquote>
                <div className="mt-6 pt-6 border-t border-border/50 text-center">
                  <p className="text-sm text-muted-foreground">— Michael Kofman, Founder & CEO</p>
                </div>
              </CardContent>
            </Card>
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
                    <OptimizedImage
                      src={member.photo_url}
                      alt={`${member.full_name} - ${member.title}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700 ease-out"
                      containerClassName="w-full h-full"
                      aspectRatio="auto"
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
