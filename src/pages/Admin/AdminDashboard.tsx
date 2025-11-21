import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { FolderOpen, Users, TrendingUp, Eye, DollarSign, Percent } from 'lucide-react';

interface Stats {
  totalProjects: number;
  openProjects: number;
  totalLeads: number;
  newLeads: number;
  contactedLeads: number;
  qualifiedLeads: number;
  totalRaised: number;
  conversionRate: number;
}

interface RecentLead {
  id: string;
  name: string;
  email: string;
  status: string;
  created_at: string;
  projects: {
    title: string;
  } | null;
}

const AdminDashboard = () => {
  const [stats, setStats] = useState<Stats>({
    totalProjects: 0,
    openProjects: 0,
    totalLeads: 0,
    newLeads: 0,
    contactedLeads: 0,
    qualifiedLeads: 0,
    totalRaised: 0,
    conversionRate: 0,
  });
  const [recentLeads, setRecentLeads] = useState<RecentLead[]>([]);

  useEffect(() => {
    fetchStats();
    fetchRecentLeads();
  }, []);

  const fetchStats = async () => {
    try {
      const { data: projects } = await supabase
        .from('projects')
        .select('id, status, current_raised');

      const { data: leads } = await supabase
        .from('investor_leads')
        .select('id, status');

      const totalRaised = projects?.reduce((sum, p) => sum + (Number(p.current_raised) || 0), 0) || 0;
      const totalLeadsCount = leads?.length || 0;
      const qualifiedLeadsCount = leads?.filter(l => l.status === 'QUALIFIED').length || 0;
      const conversionRate = totalLeadsCount > 0 ? (qualifiedLeadsCount / totalLeadsCount) * 100 : 0;

      setStats({
        totalProjects: projects?.length || 0,
        openProjects: projects?.filter(p => p.status === 'OPEN').length || 0,
        totalLeads: totalLeadsCount,
        newLeads: leads?.filter(l => l.status === 'NEW').length || 0,
        contactedLeads: leads?.filter(l => l.status === 'CONTACTED').length || 0,
        qualifiedLeads: qualifiedLeadsCount,
        totalRaised,
        conversionRate,
      });
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  };

  const fetchRecentLeads = async () => {
    try {
      const { data, error } = await supabase
        .from('investor_leads')
        .select('id, name, email, status, created_at, projects(title)')
        .order('created_at', { ascending: false })
        .limit(5);

      if (error) throw error;
      setRecentLeads(data || []);
    } catch (error) {
      console.error('Error fetching recent leads:', error);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'NEW': return 'bg-info text-info-foreground';
      case 'CONTACTED': return 'bg-warning text-warning-foreground';
      case 'QUALIFIED': return 'bg-success text-success-foreground';
      case 'DECLINED': return 'bg-muted text-muted-foreground';
      default: return 'bg-muted text-muted-foreground';
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
      title: 'Total Raised',
      value: `$${(stats.totalRaised / 1000).toFixed(0)}k`,
      description: 'Across all projects',
      icon: DollarSign,
      color: 'text-success',
      link: '/admin/projects',
    },
    {
      title: 'Conversion Rate',
      value: `${stats.conversionRate.toFixed(1)}%`,
      description: 'Leads to qualified',
      icon: Percent,
      color: 'text-info',
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* Recent Leads */}
      <Card className="border border-border/50">
        <CardHeader>
          <CardTitle>Recent Investor Leads</CardTitle>
          <CardDescription>Latest expressions of interest</CardDescription>
        </CardHeader>
        <CardContent>
          {recentLeads.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Project</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentLeads.map((lead) => (
                  <TableRow key={lead.id}>
                    <TableCell className="font-medium">{lead.name}</TableCell>
                    <TableCell>{lead.email}</TableCell>
                    <TableCell>{lead.projects?.title || 'General'}</TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(lead.status)}>
                        {lead.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {new Date(lead.created_at).toLocaleDateString()}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <p className="text-sm text-muted-foreground text-center py-8">
              No leads yet
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboard;
