import { useEffect, useState } from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useUserRole } from '@/hooks/useUserRole';
import { Button } from '@/components/ui/button';
import { LayoutDashboard, FolderOpen, Users, LogOut, Loader2, UsersRound, Newspaper, Shield, Layout, FileText, Mail, FileEdit, Calendar, Clock, Map, Rocket } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';
import OptimizedImage from '@/components/OptimizedImage';

const AdminLayout = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { role, isLoading: roleLoading, hasRole } = useUserRole();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        navigate('/auth');
        return;
      }
      
      setUser(session.user);
    } catch (error) {
      console.error('Auth error:', error);
      navigate('/auth');
    } finally {
      setLoading(false);
    }
  };

  // Check if user has minimum required role
  useEffect(() => {
    if (!loading && !roleLoading && !hasRole('VIEWER')) {
      toast.error('Access denied. You need admin access to view this page.');
      navigate('/');
    }
  }, [loading, roleLoading, role, navigate, hasRole]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/admin', minRole: 'VIEWER' },
    { icon: FolderOpen, label: 'Projects', path: '/admin/projects', minRole: 'EDITOR' },
    { icon: Users, label: 'Investor Leads', path: '/admin/leads', minRole: 'EDITOR' },
    { icon: FileText, label: 'Handbook Downloads', path: '/admin/handbook-downloads', minRole: 'EDITOR' },
    { icon: UsersRound, label: 'Team Members', path: '/admin/team', minRole: 'EDITOR' },
    { icon: Newspaper, label: 'News & Updates', path: '/admin/news', minRole: 'EDITOR' },
    { icon: Mail, label: 'Email Templates', path: '/admin/email-templates', minRole: 'EDITOR' },
    { icon: FileEdit, label: 'Content Manager', path: '/admin/content', minRole: 'EDITOR' },
    { icon: Calendar, label: 'Consultations', path: '/admin/consultations', minRole: 'EDITOR' },
    { icon: Clock, label: 'Availability', path: '/admin/availability', minRole: 'ADMIN' },
    { icon: Shield, label: 'Users & Roles', path: '/admin/users', minRole: 'ADMIN' },
    { icon: Layout, label: 'Site Sections', path: '/admin/site-sections', minRole: 'ADMIN' },
    { icon: Map, label: 'Sitemap & SEO', path: '/admin/sitemap', minRole: 'ADMIN' },
    { icon: Rocket, label: 'Launch Checklist', path: '/admin/launch-checklist', minRole: 'ADMIN' },
  ];

  if (loading || roleLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Admin Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <OptimizedImage 
              src="/lovable-uploads/digital-invest-logo-new.png" 
              alt="Digital Invest Inc. admin logo" 
              className="w-8 h-8 object-contain"
              showSkeleton={false}
            />
            <span className="text-xl font-bold text-primary">Admin Panel</span>
            {role && (
              <span className="text-xs px-2 py-1 rounded bg-primary/10 text-primary">
                {role}
              </span>
            )}
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">{user?.email}</span>
            <Button variant="outline" size="sm" onClick={handleSignOut}>
              <LogOut className="mr-2 h-4 w-4" />
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      <div className="flex pt-16">
        {/* Sidebar */}
        <aside className="fixed left-0 top-16 bottom-0 w-64 bg-card border-r border-border overflow-y-auto">
          <nav className="p-4 space-y-2">
            {navItems
              .filter(item => hasRole(item.minRole as any))
              .map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link key={item.path} to={item.path}>
                    <Button
                      variant={isActive ? 'default' : 'ghost'}
                      className={cn(
                        'w-full justify-start',
                        isActive && 'bg-primary text-primary-foreground'
                      )}
                    >
                      <Icon className="mr-2 h-4 w-4" />
                      {item.label}
                    </Button>
                  </Link>
                );
              })}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 ml-64 p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
