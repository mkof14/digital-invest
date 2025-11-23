import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { FolderOpen, Users, TrendingUp, Eye, DollarSign, Percent, AlertCircle, Clock, Mail, FileText, Shield, Layout as LayoutIcon } from 'lucide-react';
import PortfolioDashboard from '@/components/PortfolioDashboard';
import { useLanguage } from '@/contexts/LanguageContext';

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
  last_contacted_at: string | null;
  projects: {
    title: string;
  } | null;
}

interface ActionQueueLead {
  id: string;
  name: string;
  email: string;
  status: string;
  last_contacted_at: string | null;
  last_email_type: string | null;
  projects: {
    title: string;
  } | null;
}

const AdminDashboard = () => {
  const { t } = useLanguage();
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
  const [actionQueue, setActionQueue] = useState<ActionQueueLead[]>([]);

  useEffect(() => {
    fetchStats();
    fetchRecentLeads();
    fetchActionQueue();
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
        .select('id, name, email, status, created_at, last_contacted_at, projects(title)')
        .order('created_at', { ascending: false })
        .limit(10);

      if (error) throw error;
      setRecentLeads(data || []);
    } catch (error) {
      console.error('Error fetching recent leads:', error);
    }
  };

  const fetchActionQueue = async () => {
    try {
      const sevenDaysAgo = new Date();
      sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

      const { data, error } = await supabase
        .from('investor_leads')
        .select('id, name, email, status, last_contacted_at, last_email_type, projects(title)')
        .or(`status.eq.NEW,and(status.eq.CONTACTED,last_contacted_at.lt.${sevenDaysAgo.toISOString()})`)
        .order('created_at', { ascending: false })
        .limit(10);

      if (error) throw error;
      setActionQueue(data || []);
    } catch (error) {
      console.error('Error fetching action queue:', error);
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
      title: t('admin.totalProjects'),
      value: stats.totalProjects,
      description: `${stats.openProjects} ${t('admin.currentlyOpen')}`,
      icon: FolderOpen,
      color: 'text-primary',
      link: '/admin/projects',
    },
    {
      title: t('admin.totalLeads'),
      value: stats.totalLeads,
      description: `${stats.newLeads} ${t('admin.newLeads').toLowerCase()}`,
      icon: Users,
      color: 'text-success',
      link: '/admin/leads',
    },
    {
      title: t('admin.totalRaised'),
      value: `$${(stats.totalRaised / 1000).toFixed(0)}k`,
      description: t('admin.acrossAll'),
      icon: DollarSign,
      color: 'text-success',
      link: '/admin/projects',
    },
    {
      title: t('admin.conversionRate'),
      value: `${stats.conversionRate.toFixed(1)}%`,
      description: t('admin.leadsToQualified'),
      icon: Percent,
      color: 'text-info',
      link: '/admin/leads',
    },
    {
      title: t('admin.openOpportunities'),
      value: stats.openProjects,
      description: t('admin.activeOpportunities'),
      icon: TrendingUp,
      color: 'text-info',
      link: '/admin/projects',
    },
    {
      title: t('admin.newInquiries'),
      value: stats.newLeads,
      description: t('admin.requiresAttention'),
      icon: Eye,
      color: 'text-warning',
      link: '/admin/leads',
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-foreground">{t('admin.dashboard')}</h2>
        <p className="text-muted-foreground">{t('admin.overview')}</p>
      </div>

      {/* Portfolio Overview */}
      <Card className="border border-border/50">
        <CardHeader>
          <CardTitle>{t('admin.portfolioOverview')}</CardTitle>
          <CardDescription>{t('admin.portfolioMetrics')}</CardDescription>
        </CardHeader>
        <CardContent>
          <PortfolioDashboard />
        </CardContent>
      </Card>

      {/* Leads by Status */}
      <Card className="border border-border/50">
        <CardHeader>
          <CardTitle>{t('admin.leadsByStatus')}</CardTitle>
          <CardDescription>{t('admin.leadsDistribution')}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 border border-border rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">{t('admin.newLeads')}</span>
                <Badge className="bg-info text-info-foreground">{stats.newLeads}</Badge>
              </div>
              <div className="text-2xl font-bold">{stats.newLeads}</div>
            </div>
            <div className="p-4 border border-border rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">{t('admin.contacted')}</span>
                <Badge className="bg-warning text-warning-foreground">{stats.contactedLeads}</Badge>
              </div>
              <div className="text-2xl font-bold">{stats.contactedLeads}</div>
            </div>
            <div className="p-4 border border-border rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">{t('admin.qualified')}</span>
                <Badge className="bg-success text-success-foreground">{stats.qualifiedLeads}</Badge>
              </div>
              <div className="text-2xl font-bold">{stats.qualifiedLeads}</div>
            </div>
            <div className="p-4 border border-border rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">{t('admin.total')}</span>
                <Badge variant="outline">{stats.totalLeads}</Badge>
              </div>
              <div className="text-2xl font-bold">{stats.totalLeads}</div>
            </div>
          </div>
        </CardContent>
      </Card>

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
                    {t('admin.viewDetails')}
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
          <CardTitle>{t('admin.quickActions')}</CardTitle>
          <CardDescription>{t('admin.commonTasks')}</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link to="/admin/projects/new">
            <Button className="w-full h-20" size="lg">
              <FolderOpen className="mr-2 h-5 w-5" />
              {t('admin.createProject')}
            </Button>
          </Link>
          <Link to="/admin/leads">
            <Button variant="outline" className="w-full h-20" size="lg">
              <Users className="mr-2 h-5 w-5" />
              {t('admin.reviewLeads')}
            </Button>
          </Link>
          <Link to="/admin/handbook-downloads">
            <Button variant="outline" className="w-full h-20" size="lg">
              <FileText className="mr-2 h-5 w-5" />
              {t('admin.handbookDownloads')}
            </Button>
          </Link>
          <Link to="/admin/users">
            <Button variant="outline" className="w-full h-20" size="lg">
              <Shield className="mr-2 h-5 w-5" />
              {t('admin.usersRoles')}
            </Button>
          </Link>
          <Link to="/admin/site-sections">
            <Button variant="outline" className="w-full h-20" size="lg">
              <LayoutIcon className="mr-2 h-5 w-5" />
              {t('admin.siteSections')}
            </Button>
          </Link>
          <Link to="/admin/news">
            <Button variant="outline" className="w-full h-20" size="lg">
              <Eye className="mr-2 h-5 w-5" />
              {t('admin.manageNews')}
            </Button>
          </Link>
          <Link to="/admin/team">
            <Button variant="outline" className="w-full h-20" size="lg">
              <Users className="mr-2 h-5 w-5" />
              {t('admin.manageTeam')}
            </Button>
          </Link>
          <Link to="/admin/email-templates">
            <Button variant="outline" className="w-full h-20" size="lg">
              <Mail className="mr-2 h-5 w-5" />
              {t('admin.emailTemplates')}
            </Button>
          </Link>
        </CardContent>
      </Card>

      {/* Action Queue */}
      <Card className="border border-border/50 border-l-4 border-l-warning">
        <CardHeader>
          <div className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-warning" />
            <div>
              <CardTitle>{t('admin.actionQueue')}</CardTitle>
              <CardDescription>{t('admin.actionQueueDesc')}</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {actionQueue.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>{t('admin.name')}</TableHead>
                  <TableHead>{t('admin.project')}</TableHead>
                  <TableHead>{t('admin.status')}</TableHead>
                  <TableHead>{t('admin.lastContacted')}</TableHead>
                  <TableHead>{t('admin.lastEmail')}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {actionQueue.map((lead) => (
                  <TableRow key={lead.id}>
                    <TableCell className="font-medium">{lead.name}</TableCell>
                    <TableCell>{lead.projects?.title || 'General'}</TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(lead.status)}>
                        {lead.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {lead.last_contacted_at ? (
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3 text-muted-foreground" />
                          {new Date(lead.last_contacted_at).toLocaleDateString()}
                        </div>
                      ) : (
                        <span className="text-muted-foreground italic">{t('admin.never')}</span>
                      )}
                    </TableCell>
                    <TableCell>
                      {lead.last_email_type ? (
                        <Badge variant="secondary" className="text-xs">
                          {lead.last_email_type}
                        </Badge>
                      ) : (
                        <span className="text-muted-foreground text-xs">None</span>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <p className="text-sm text-muted-foreground text-center py-8">
              {t('admin.noLeadsFollowup')}
            </p>
          )}
          {actionQueue.length > 0 && (
            <div className="mt-4 text-center">
              <Link to="/admin/leads">
                <Button variant="outline" size="sm">
                  {t('admin.viewAllLeads')}
                </Button>
              </Link>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Recent Leads */}
      <Card className="border border-border/50">
        <CardHeader>
          <CardTitle>{t('admin.recentLeads')}</CardTitle>
          <CardDescription>{t('admin.latestExpressions')}</CardDescription>
        </CardHeader>
        <CardContent>
          {recentLeads.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>{t('admin.name')}</TableHead>
                  <TableHead>{t('admin.email')}</TableHead>
                  <TableHead>{t('admin.project')}</TableHead>
                  <TableHead>{t('admin.status')}</TableHead>
                  <TableHead>{t('admin.submitted')}</TableHead>
                  <TableHead>{t('admin.lastContact')}</TableHead>
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
                    <TableCell>
                      {lead.last_contacted_at ? (
                        new Date(lead.last_contacted_at).toLocaleDateString()
                      ) : (
                        <span className="text-muted-foreground italic text-xs">{t('admin.notYet')}</span>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <p className="text-sm text-muted-foreground text-center py-8">
              {t('admin.noLeads')}
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboard;
