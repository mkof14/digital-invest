import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const AdminSetup = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [superAdminExists, setSuperAdminExists] = useState(false);
  const [isSettingUp, setIsSettingUp] = useState(false);
  const [setupComplete, setSetupComplete] = useState(false);

  useEffect(() => {
    checkSetupStatus();
  }, []);

  const checkSetupStatus = async () => {
    try {
      // Get current authenticated user
      const { data: { user }, error: userError } = await supabase.auth.getUser();
      
      if (userError || !user) {
        toast.error('Please sign in first');
        navigate('/auth');
        return;
      }

      setCurrentUser(user);

      // Check if any SUPER_ADMIN exists
      const { data: superAdmins, error: queryError } = await supabase
        .from('user_roles')
        .select('id')
        .eq('role', 'SUPER_ADMIN')
        .limit(1);

      if (queryError) {
        console.error('Error checking super admins:', queryError);
        // If we can't query (might be due to RLS), assume setup might be needed
        setSuperAdminExists(false);
      } else {
        setSuperAdminExists(superAdmins && superAdmins.length > 0);
      }
    } catch (error) {
      console.error('Error in checkSetupStatus:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const claimSuperAdminRole = async () => {
    if (!currentUser) return;

    setIsSettingUp(true);
    try {
      // Double-check no super admin exists before inserting
      const { data: existingAdmins } = await supabase
        .from('user_roles')
        .select('id')
        .eq('role', 'SUPER_ADMIN')
        .limit(1);

      if (existingAdmins && existingAdmins.length > 0) {
        toast.error('A Super Admin already exists');
        setSuperAdminExists(true);
        setIsSettingUp(false);
        return;
      }

      // Check if user already has a role
      const { data: existingRole } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', currentUser.id)
        .single();

      if (existingRole) {
        // Update existing role
        const { error: updateError } = await supabase
          .from('user_roles')
          .update({ role: 'SUPER_ADMIN' })
          .eq('user_id', currentUser.id);

        if (updateError) throw updateError;
      } else {
        // Insert new role
        const { error: insertError } = await supabase
          .from('user_roles')
          .insert([{ user_id: currentUser.id, role: 'SUPER_ADMIN' }]);

        if (insertError) throw insertError;
      }

      setSetupComplete(true);
      toast.success('Super Admin role assigned successfully!');
      
      setTimeout(() => {
        navigate('/admin');
      }, 2000);
    } catch (error) {
      console.error('Error claiming super admin role:', error);
      toast.error('Failed to assign Super Admin role. Please try again.');
    } finally {
      setIsSettingUp(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="flex items-center justify-center min-h-[60vh]">
          <Loader2 className="h-12 w-12 animate-spin text-primary" />
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-4">
              <Shield className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl font-bold text-foreground">Admin Setup</h1>
            <p className="text-lg text-muted-foreground">
              Initial configuration for Digital Invest admin panel
            </p>
          </div>

          {setupComplete ? (
            <Card className="border-success">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-success">
                  <CheckCircle className="h-5 w-5" />
                  Setup Complete
                </CardTitle>
                <CardDescription>
                  You've been assigned the Super Admin role
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Redirecting you to the admin panel...
                </p>
                <Button onClick={() => navigate('/admin')} className="w-full">
                  Go to Admin Panel
                </Button>
              </CardContent>
            </Card>
          ) : superAdminExists ? (
            <Card className="border-warning">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-warning">
                  <AlertCircle className="h-5 w-5" />
                  Setup Already Complete
                </CardTitle>
                <CardDescription>
                  A Super Admin has already been configured
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  The admin panel has already been set up. If you need admin access, 
                  please contact your existing Super Admin.
                </p>
                <div className="bg-muted p-4 rounded-lg space-y-2">
                  <p className="text-sm font-medium">Current user:</p>
                  <p className="text-sm text-muted-foreground">{currentUser?.email}</p>
                </div>
                <div className="flex gap-2">
                  <Button onClick={() => navigate('/admin')} variant="outline" className="flex-1">
                    Try Admin Panel
                  </Button>
                  <Button onClick={() => navigate('/')} className="flex-1">
                    Go Home
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle>Claim Super Admin Role</CardTitle>
                <CardDescription>
                  No Super Admin exists yet. You can claim this role to set up the admin panel.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-muted p-4 rounded-lg space-y-2">
                  <p className="text-sm font-medium">You are signed in as:</p>
                  <p className="text-sm text-muted-foreground">{currentUser?.email}</p>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold">Super Admin permissions include:</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                      <span>Full access to all admin panel features</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                      <span>Ability to manage other administrators and assign roles</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                      <span>Control site sections, visibility, and access permissions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                      <span>Manage projects, leads, team members, and content</span>
                    </li>
                  </ul>
                </div>

                <Button 
                  onClick={claimSuperAdminRole} 
                  disabled={isSettingUp}
                  className="w-full"
                  size="lg"
                >
                  {isSettingUp ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Setting up...
                    </>
                  ) : (
                    <>
                      <Shield className="mr-2 h-4 w-4" />
                      Claim Super Admin Role
                    </>
                  )}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  This action can only be performed once. Future administrators must be 
                  assigned by an existing Super Admin.
                </p>
              </CardContent>
            </Card>
          )}

          <Card className="border-muted">
            <CardHeader>
              <CardTitle className="text-sm">Need Help?</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p>
                If you're having trouble with setup or need to reset the admin configuration, 
                please contact technical support at <strong>support@digitalinvest.com</strong>
              </p>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AdminSetup;
