import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FolderOpen, Users, TrendingUp, Eye } from 'lucide-react';

interface Stats {
  totalProjects: number;
  openProjects: number;
  totalLeads: number;
  newLeads: number;
}

const AdminDashboard = () => {
  const [stats, setStats] = useState<Stats>({
    totalProjects: 0,
    openProjects: 0,
    totalLeads: 0,
    newLeads: 0,
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      // Fetch project stats
      const { data: projects } = await supabase
        .from('projects')
        .select('id, status');

      // Fetch lead stats
      const { data: leads } = await supabase
        .from('investor_leads')
        .select('id, status');

      setStats({
        totalProjects: projects?.length || 0,
        openProjects: projects?.filter(p => p.status === 'OPEN').length || 0,
        totalLeads: leads?.length || 0,
        newLeads: leads?.filter(l => l.status === 'NEW').length || 0,
      });
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  };

  const statCards = [
    {
      title: 'Total Projects',
      value: stats.totalProjects,
      description: `${stats.openProjects} currently open`,
      icon: FolderOpen,
      color: 'text-primary',
      link: '/admin/projects',
    },
    {
      title: 'Total Leads',
      value: stats.totalLeads,
      description: `${stats.newLeads} new leads`,
      icon: Users,
      color: 'text-success',
      link: '/admin/leads',
    },
    {
      title: 'Open Opportunities',
      value: stats.openProjects,
      description: 'Active investment opportunities',
      icon: TrendingUp,
      color: 'text-info',
      link: '/admin/projects',
    },
    {
      title: 'New Inquiries',
      value: stats.newLeads,
      description: 'Requires attention',
      icon: Eye,
      color: 'text-warning',
      link: '/admin/leads',
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-foreground">Dashboard</h2>
        <p className="text-muted-foreground">Overview of your investment platform</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title} className="border border-border/50 hover:shadow-elevated transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <Icon className={`h-5 w-5 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  {stat.description}
                </p>
                <Link to={stat.link}>
                  <Button variant="ghost" size="sm" className="mt-2 w-full">
                    View Details
                  </Button>
                </Link>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Quick Actions */}
      <Card className="border border-border/50">
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common administrative tasks</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link to="/admin/projects/new">
            <Button className="w-full" size="lg">
              <FolderOpen className="mr-2 h-4 w-4" />
              Create New Project
            </Button>
          </Link>
          <Link to="/admin/projects">
            <Button variant="outline" className="w-full" size="lg">
              <Eye className="mr-2 h-4 w-4" />
              Manage Projects
            </Button>
          </Link>
          <Link to="/admin/leads">
            <Button variant="outline" className="w-full" size="lg">
              <Users className="mr-2 h-4 w-4" />
              Review Leads
            </Button>
          </Link>
        </CardContent>
      </Card>

      {/* Recent Activity */}
      <Card className="border border-border/50">
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Latest platform updates</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground text-center py-8">
            Activity tracking will be available soon
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboard;
