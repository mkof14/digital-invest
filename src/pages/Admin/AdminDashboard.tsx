import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import {
  FolderOpen,
  Users,
  TrendingUp,
  Eye,
  AlertCircle,
  Clock,
  Mail,
  FileText,
  Shield,
  Layout as LayoutIcon,
  Newspaper,
  UsersRound,
  FileEdit,
  Calendar,
  Share2,
  Map,
  Rocket,
  ArrowRight,
} from 'lucide-react';

interface DashStats {
  projects: number;
  openProjects: number;
  leads: number;
  newLeads: number;
  contactedLeads: number;
  qualifiedLeads: number;
  projectDocs: number;
  investorDocs: number;
  team: number;
  news: number;
  consultations: number;
  pendingConsultations: number;
}

interface RecentLead {
  id: string;
  name: string;
  email: string;
  status: string;
  created_at: string;
  last_contacted_at: string | null;
  projects: { title: string } | null;
}

interface ActionQueueLead {
  id: string;
  name: string;
  email: string;
  status: string;
  last_contacted_at: string | null;
  last_email_type: string | null;
  projects: { title: string } | null;
}

const AdminDashboard = () => {
  const [stats, setStats] = useState<DashStats>({
    projects: 0,
    openProjects: 0,
    leads: 0,
    newLeads: 0,
    contactedLeads: 0,
    qualifiedLeads: 0,
    projectDocs: 0,
    investorDocs: 0,
    team: 0,
    news: 0,
    consultations: 0,
    pendingConsultations: 0,
  });
  const [recentLeads, setRecentLeads] = useState<RecentLead[]>([]);
  const [actionQueue, setActionQueue] = useState<ActionQueueLead[]>([]);

  useEffect(() => {
    fetchAll();
  }, []);

  const fetchAll = async () => {
    const [
      { data: projects },
      { data: leads },
      { count: projectDocsCount },
      { count: investorDocsCount },
      { count: teamCount },
      { count: newsCount },
      { data: consultations },
      { data: recent },
    ] = await Promise.all([
      supabase.from('projects').select('id, status'),
      supabase.from('investor_leads').select('id, status'),
      supabase.from('project_documents').select('id', { count: 'exact', head: true }),
      supabase.from('investor_documents').select('id', { count: 'exact', head: true }),
      supabase.from('team_members').select('id', { count: 'exact', head: true }),
      supabase.from('news_posts').select('id', { count: 'exact', head: true }),
      supabase.from('consultation_bookings').select('id, status'),
      supabase
        .from('investor_leads')
        .select('id, name, email, status, created_at, last_contacted_at, projects(title)')
        .order('created_at', { ascending: false })
        .limit(8),
    ]);

    setStats({
      projects: projects?.length || 0,
      openProjects: projects?.filter((p) => p.status === 'OPEN').length || 0,
      leads: leads?.length || 0,
      newLeads: leads?.filter((l) => l.status === 'NEW').length || 0,
      contactedLeads: leads?.filter((l) => l.status === 'CONTACTED').length || 0,
      qualifiedLeads: leads?.filter((l) => l.status === 'QUALIFIED').length || 0,
      projectDocs: projectDocsCount || 0,
      investorDocs: investorDocsCount || 0,
      team: teamCount || 0,
      news: newsCount || 0,
      consultations: consultations?.length || 0,
      pendingConsultations: consultations?.filter((c) => c.status === 'PENDING').length || 0,
    });

    setRecentLeads(recent || []);

    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    const { data: queue } = await supabase
      .from('investor_leads')
      .select('id, name, email, status, last_contacted_at, last_email_type, projects(title)')
      .or(`status.eq.NEW,and(status.eq.CONTACTED,last_contacted_at.lt.${sevenDaysAgo.toISOString()})`)
      .order('created_at', { ascending: false })
      .limit(8);
    setActionQueue(queue || []);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'NEW':
        return 'bg-blue-500/10 text-blue-600 border-blue-500/20';
      case 'CONTACTED':
        return 'bg-amber-500/10 text-amber-600 border-amber-500/20';
      case 'QUALIFIED':
        return 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20';
      case 'DECLINED':
        return 'bg-muted text-muted-foreground border-border';
      default:
        return 'bg-muted text-muted-foreground border-border';
    }
  };

  // Visual section cards — categorized
  const sections = [
    {
      group: 'Content',
      items: [
        {
          title: 'Projects',
          desc: 'Portfolio companies & investments',
          icon: FolderOpen,
          link: '/admin/projects',
          count: stats.projects,
          subCount: `${stats.openProjects} open`,
          color: 'from-blue-500/10 to-blue-500/5',
          iconColor: 'text-blue-600',
          border: 'border-blue-500/20',
        },
        {
          title: 'Project Documents',
          desc: 'Pitch decks, briefs, presentations',
          icon: FileText,
          link: '/admin/project-documents',
          count: stats.projectDocs,
          subCount: 'attached files',
          color: 'from-violet-500/10 to-violet-500/5',
          iconColor: 'text-violet-600',
          border: 'border-violet-500/20',
        },
        {
          title: 'Investor Documents',
          desc: 'Library + handbook downloads',
          icon: FileText,
          link: '/admin/handbook-downloads',
          count: stats.investorDocs,
          subCount: 'documents',
          color: 'from-indigo-500/10 to-indigo-500/5',
          iconColor: 'text-indigo-600',
          border: 'border-indigo-500/20',
        },
        {
          title: 'News & Updates',
          desc: 'Articles and announcements',
          icon: Newspaper,
          link: '/admin/news',
          count: stats.news,
          subCount: 'posts',
          color: 'from-amber-500/10 to-amber-500/5',
          iconColor: 'text-amber-600',
          border: 'border-amber-500/20',
        },
        {
          title: 'Team Members',
          desc: 'People & bios',
          icon: UsersRound,
          link: '/admin/team',
          count: stats.team,
          subCount: 'members',
          color: 'from-pink-500/10 to-pink-500/5',
          iconColor: 'text-pink-600',
          border: 'border-pink-500/20',
        },
        {
          title: 'Content Manager',
          desc: 'Mini-CMS for site copy',
          icon: FileEdit,
          link: '/admin/content',
          count: null,
          subCount: 'Edit pages',
          color: 'from-cyan-500/10 to-cyan-500/5',
          iconColor: 'text-cyan-600',
          border: 'border-cyan-500/20',
        },
      ],
    },
    {
      group: 'Investors & Engagement',
      items: [
        {
          title: 'Investor Leads',
          desc: 'CRM and follow-ups',
          icon: Users,
          link: '/admin/leads',
          count: stats.leads,
          subCount: `${stats.newLeads} new · ${stats.qualifiedLeads} qualified`,
          color: 'from-emerald-500/10 to-emerald-500/5',
          iconColor: 'text-emerald-600',
          border: 'border-emerald-500/20',
        },
        {
          title: 'Consultations',
          desc: 'Booked sessions',
          icon: Calendar,
          link: '/admin/consultations',
          count: stats.consultations,
          subCount: `${stats.pendingConsultations} pending`,
          color: 'from-orange-500/10 to-orange-500/5',
          iconColor: 'text-orange-600',
          border: 'border-orange-500/20',
        },
        {
          title: 'Email Templates',
          desc: 'Branded transactional emails',
          icon: Mail,
          link: '/admin/email-templates',
          count: null,
          subCount: 'Manage',
          color: 'from-rose-500/10 to-rose-500/5',
          iconColor: 'text-rose-600',
          border: 'border-rose-500/20',
        },
      ],
    },
    {
      group: 'Configuration',
      items: [
        {
          title: 'Users & Roles',
          desc: 'Access control (RBAC)',
          icon: Shield,
          link: '/admin/users',
          count: null,
          subCount: 'Manage access',
          color: 'from-red-500/10 to-red-500/5',
          iconColor: 'text-red-600',
          border: 'border-red-500/20',
        },
        {
          title: 'Site Sections',
          desc: 'Navigation visibility',
          icon: LayoutIcon,
          link: '/admin/site-sections',
          count: null,
          subCount: 'Configure',
          color: 'from-slate-500/10 to-slate-500/5',
          iconColor: 'text-slate-600',
          border: 'border-slate-500/20',
        },
        {
          title: 'Social Media',
          desc: 'Links & analytics',
          icon: Share2,
          link: '/admin/social-media',
          count: null,
          subCount: 'Manage links',
          color: 'from-teal-500/10 to-teal-500/5',
          iconColor: 'text-teal-600',
          border: 'border-teal-500/20',
        },
        {
          title: 'Sitemap & SEO',
          desc: 'Search optimization',
          icon: Map,
          link: '/admin/sitemap',
          count: null,
          subCount: 'Review',
          color: 'from-lime-500/10 to-lime-500/5',
          iconColor: 'text-lime-600',
          border: 'border-lime-500/20',
        },
        {
          title: 'Launch Checklist',
          desc: 'Pre-launch readiness',
          icon: Rocket,
          link: '/admin/launch-checklist',
          count: null,
          subCount: 'Verify',
          color: 'from-fuchsia-500/10 to-fuchsia-500/5',
          iconColor: 'text-fuchsia-600',
          border: 'border-fuchsia-500/20',
        },
      ],
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-end justify-between flex-wrap gap-4">
        <div>
          <h2 className="text-3xl font-bold text-foreground">Admin Dashboard</h2>
          <p className="text-muted-foreground">Centralized control for the Digital Invest platform</p>
        </div>
        <div className="flex gap-2">
          <Link to="/admin/projects">
            <Button>
              <FolderOpen className="mr-2 h-4 w-4" />
              New Project
            </Button>
          </Link>
          <Link to="/admin/project-documents">
            <Button variant="outline">
              <FileText className="mr-2 h-4 w-4" />
              Upload Document
            </Button>
          </Link>
        </div>
      </div>

      {/* Top KPIs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <KpiCard label="Projects" value={stats.projects} sub={`${stats.openProjects} open`} icon={FolderOpen} color="text-blue-600" />
        <KpiCard label="Total Leads" value={stats.leads} sub={`${stats.newLeads} new`} icon={Users} color="text-emerald-600" />
        <KpiCard label="Documents" value={stats.projectDocs + stats.investorDocs} sub={`${stats.projectDocs} project · ${stats.investorDocs} investor`} icon={FileText} color="text-violet-600" />
        <KpiCard label="Pending Bookings" value={stats.pendingConsultations} sub={`of ${stats.consultations} total`} icon={Calendar} color="text-orange-600" />
      </div>

      {/* Sections grid */}
      {sections.map((group) => (
        <div key={group.group}>
          <div className="flex items-center gap-2 mb-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              {group.group}
            </h3>
            <div className="flex-1 h-px bg-border" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {group.items.map((item) => {
              const Icon = item.icon;
              return (
                <Link key={item.title} to={item.link}>
                  <Card
                    className={`relative overflow-hidden border ${item.border} bg-gradient-to-br ${item.color} hover:shadow-lg hover:scale-[1.02] transition-all duration-200 cursor-pointer h-full`}
                  >
                    <CardContent className="p-5">
                      <div className="flex items-start justify-between mb-3">
                        <div className={`w-11 h-11 rounded-lg bg-background/80 border ${item.border} flex items-center justify-center`}>
                          <Icon className={`h-5 w-5 ${item.iconColor}`} />
                        </div>
                        {item.count !== null && (
                          <div className="text-right">
                            <div className="text-2xl font-bold text-foreground leading-none">
                              {item.count}
                            </div>
                          </div>
                        )}
                      </div>
                      <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                      <p className="text-xs text-muted-foreground mb-2">{item.desc}</p>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-muted-foreground">{item.subCount}</span>
                        <ArrowRight className={`h-3.5 w-3.5 ${item.iconColor} opacity-60`} />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      ))}

      {/* Lead status breakdown */}
      <Card className="border border-border/50">
        <CardHeader>
          <CardTitle>Leads Pipeline</CardTitle>
          <CardDescription>Distribution by status</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <PipelineCell label="New" value={stats.newLeads} color="bg-blue-500/10 text-blue-600 border-blue-500/20" />
            <PipelineCell label="Contacted" value={stats.contactedLeads} color="bg-amber-500/10 text-amber-600 border-amber-500/20" />
            <PipelineCell label="Qualified" value={stats.qualifiedLeads} color="bg-emerald-500/10 text-emerald-600 border-emerald-500/20" />
            <PipelineCell label="Total" value={stats.leads} color="bg-muted text-foreground border-border" />
          </div>
        </CardContent>
      </Card>

      {/* Action Queue */}
      <Card className="border border-border/50 border-l-4 border-l-amber-500">
        <CardHeader>
          <div className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-amber-500" />
            <div>
              <CardTitle>Action Queue</CardTitle>
              <CardDescription>Leads requiring follow-up</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {actionQueue.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Project</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Last Contacted</TableHead>
                  <TableHead>Last Email</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {actionQueue.map((lead) => (
                  <TableRow key={lead.id}>
                    <TableCell className="font-medium">{lead.name}</TableCell>
                    <TableCell className="text-sm">{lead.projects?.title || 'General'}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className={getStatusColor(lead.status)}>{lead.status}</Badge>
                    </TableCell>
                    <TableCell className="text-sm">
                      {lead.last_contacted_at ? (
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3 text-muted-foreground" />
                          {new Date(lead.last_contacted_at).toLocaleDateString()}
                        </div>
                      ) : (
                        <span className="text-muted-foreground italic">Never</span>
                      )}
                    </TableCell>
                    <TableCell>
                      {lead.last_email_type ? (
                        <Badge variant="secondary" className="text-xs">{lead.last_email_type}</Badge>
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
              No leads requiring immediate follow-up
            </p>
          )}
          {actionQueue.length > 0 && (
            <div className="mt-4 text-center">
              <Link to="/admin/leads">
                <Button variant="outline" size="sm">View All Leads</Button>
              </Link>
            </div>
          )}
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
                  <TableHead>Submitted</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentLeads.map((lead) => (
                  <TableRow key={lead.id}>
                    <TableCell className="font-medium">{lead.name}</TableCell>
                    <TableCell className="text-sm">{lead.email}</TableCell>
                    <TableCell className="text-sm">{lead.projects?.title || 'General'}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className={getStatusColor(lead.status)}>{lead.status}</Badge>
                    </TableCell>
                    <TableCell className="text-sm">{new Date(lead.created_at).toLocaleDateString()}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <p className="text-sm text-muted-foreground text-center py-8">No leads yet</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

const KpiCard = ({
  label,
  value,
  sub,
  icon: Icon,
  color,
}: {
  label: string;
  value: number;
  sub: string;
  icon: any;
  color: string;
}) => (
  <Card className="border border-border/50">
    <CardContent className="p-4">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs text-muted-foreground uppercase tracking-wider">{label}</span>
        <Icon className={`h-4 w-4 ${color}`} />
      </div>
      <div className="text-3xl font-bold text-foreground">{value}</div>
      <p className="text-xs text-muted-foreground mt-1 truncate">{sub}</p>
    </CardContent>
  </Card>
);

const PipelineCell = ({ label, value, color }: { label: string; value: number; color: string }) => (
  <div className={`p-4 rounded-lg border ${color}`}>
    <div className="text-xs uppercase tracking-wider opacity-80 mb-1">{label}</div>
    <div className="text-2xl font-bold">{value}</div>
  </div>
);

export default AdminDashboard;
