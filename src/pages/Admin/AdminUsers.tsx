import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Database } from '@/integrations/supabase/types';
import { useUserRole } from '@/hooks/useUserRole';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowLeft, Users as UsersIcon, AlertCircle, UserPlus, Shield } from 'lucide-react';
import { toast } from 'sonner';
import { Badge } from '@/components/ui/badge';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

interface UserRole {
  id: string;
  user_id: string;
  role: string;
  created_at: string;
}

const AdminUsers = () => {
  const navigate = useNavigate();
  const { role: currentUserRole, isLoading: roleLoading, isSuperAdmin } = useUserRole();
  const [userRoles, setUserRoles] = useState<UserRole[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newUserEmail, setNewUserEmail] = useState('');
  const [newUserRole, setNewUserRole] = useState<string>('VIEWER');
  const [isAdding, setIsAdding] = useState(false);
  const [changeRoleDialog, setChangeRoleDialog] = useState<{
    userId: string;
    currentRole: string | null;
    newRole: string;
  } | null>(null);

  useEffect(() => {
    if (!roleLoading && (!currentUserRole || !['ADMIN', 'SUPER_ADMIN'].includes(currentUserRole))) {
      navigate('/admin');
      toast.error('Access denied. Admin role required.');
    }
  }, [currentUserRole, roleLoading, navigate]);

  useEffect(() => {
    if (currentUserRole && ['ADMIN', 'SUPER_ADMIN'].includes(currentUserRole)) {
      fetchUsers();
    }
  }, [currentUserRole]);

  const fetchUsers = async () => {
    try {
      const { data, error } = await supabase
        .from('user_roles')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setUserRoles(data || []);
    } catch (error) {
      console.error('Error fetching user roles:', error);
      toast.error('Failed to load users');
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddUser = async () => {
    if (!newUserEmail.trim()) {
      toast.error('Please enter an email address');
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(newUserEmail)) {
      toast.error('Please enter a valid email address');
      return;
    }

    // Validation: Admin cannot assign SUPER_ADMIN
    if (currentUserRole === 'ADMIN' && newUserRole === 'SUPER_ADMIN') {
      toast.error('Only Super Admins can assign the Super Admin role');
      return;
    }

    setIsAdding(true);
    try {
      toast.info('Please ensure the user has signed up at /auth first. Assigning role now...');
      
      // For now, we'll accept any email and let the database handle validation
      // In a production app, you'd use an edge function to verify the user exists
      
      // Check if role already exists for this email
      // We can't easily check by email without auth.admin access
      // So we'll just try to insert and let the unique constraint handle it
      
      toast.error('To assign a role: 1) User must sign up at /auth 2) Contact your developer to assign roles via database or edge function. Client-side role assignment requires additional backend setup for security.');
      
    } catch (error) {
      console.error('Error adding user role:', error);
      toast.error('Failed to assign role. Please contact your developer for backend role assignment.');
    } finally {
      setIsAdding(false);
    }
  };

  const handleRoleChange = async (userId: string, newRole: string) => {
    const userRole = userRoles.find(u => u.user_id === userId);
    const currentRole = userRole?.role || null;

    // Validation: Admin cannot assign SUPER_ADMIN or edit SUPER_ADMIN users
    if (currentUserRole === 'ADMIN') {
      if (newRole === 'SUPER_ADMIN') {
        toast.error('Only Super Admins can assign the Super Admin role');
        return;
      }
      if (currentRole === 'SUPER_ADMIN') {
        toast.error('You cannot modify a Super Admin user');
        return;
      }
    }

    // Show confirmation dialog
    setChangeRoleDialog({
      userId,
      currentRole,
      newRole,
    });
  };

  const confirmRoleChange = async () => {
    if (!changeRoleDialog) return;

    const { userId, currentRole, newRole } = changeRoleDialog;

    try {
      const roleValue = newRole as Database['public']['Enums']['app_role'];
      
      if (currentRole) {
        // Update existing role
        const { error } = await supabase
          .from('user_roles')
          .update({ role: roleValue })
          .eq('user_id', userId);

        if (error) throw error;
      } else {
        // Insert new role
        const { error } = await supabase
          .from('user_roles')
          .insert([{ user_id: userId, role: roleValue }]);

        if (error) throw error;
      }

      toast.success(`Role updated to ${newRole}`);
      fetchUsers();
    } catch (error) {
      console.error('Error updating role:', error);
      toast.error('Failed to update role');
    } finally {
      setChangeRoleDialog(null);
    }
  };

  const getRoleBadgeColor = (role: string) => {
    switch (role) {
      case 'SUPER_ADMIN': return 'bg-destructive text-destructive-foreground';
      case 'ADMIN': return 'bg-primary text-primary-foreground';
      case 'EDITOR': return 'bg-secondary text-secondary-foreground';
      case 'VIEWER': return 'bg-muted text-muted-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  if (roleLoading || isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">Loading...</div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-foreground">Users & Roles</h2>
          <p className="text-muted-foreground">Manage who can access the admin panel and what they can do</p>
        </div>
        <Button variant="ghost" onClick={() => navigate('/admin')}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Dashboard
        </Button>
      </div>

      {/* Add New User Card */}
      <Card className="border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <UserPlus className="h-5 w-5" />
            Assign Role to User
          </CardTitle>
          <CardDescription>
            Shows users who have been assigned admin roles. To add new users: they must sign up at /auth, then use /admin/setup to claim Super Admin or contact existing admin to assign a role.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-muted/50 border border-border rounded-lg p-4 mb-4">
            <p className="text-sm text-muted-foreground">
              <strong>How to grant admin access:</strong>
            </p>
            <ol className="text-sm text-muted-foreground mt-2 space-y-1 list-decimal list-inside">
              <li>New user signs up at <code className="text-foreground">/auth</code></li>
              <li>If no Super Admin exists, they go to <code className="text-foreground">/admin/setup</code> to claim Super Admin</li>
              <li>Super Admin can then assign roles to other users manually in the database or via /admin/setup page</li>
            </ol>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <UsersIcon className="h-5 w-5" />
            Users with Admin Access
          </CardTitle>
          <CardDescription>
            Manage roles for users who have been granted admin panel access.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Email</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Member Since</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {userRoles.map((userRole) => {
                  const isCurrentUserSuperAdmin = isSuperAdmin();
                  const isTargetSuperAdmin = userRole.role === 'SUPER_ADMIN';
                  const canEdit = isCurrentUserSuperAdmin || !isTargetSuperAdmin;

                  return (
                    <TableRow key={userRole.id}>
                      <TableCell className="font-medium text-muted-foreground">
                        User ID: {userRole.user_id.substring(0, 8)}...
                      </TableCell>
                      <TableCell>
                        <Badge className={getRoleBadgeColor(userRole.role)}>
                          {userRole.role}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        {new Date(userRole.created_at).toLocaleDateString()}
                      </TableCell>
                      <TableCell className="text-right">
                        {canEdit ? (
                          <Select
                            value={userRole.role}
                            onValueChange={(value) => handleRoleChange(userRole.user_id, value)}
                          >
                            <SelectTrigger className="w-[140px] ml-auto">
                              <SelectValue placeholder="Assign role" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="VIEWER">Viewer</SelectItem>
                              <SelectItem value="EDITOR">Editor</SelectItem>
                              <SelectItem value="ADMIN">Admin</SelectItem>
                              {isCurrentUserSuperAdmin && (
                                <SelectItem value="SUPER_ADMIN">Super Admin</SelectItem>
                              )}
                            </SelectContent>
                          </Select>
                        ) : (
                          <span className="text-sm text-muted-foreground">Protected</span>
                        )}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>

          {userRoles.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              No users with admin access yet. Use the form above to assign roles.
            </div>
          )}
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-warning">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-warning">
              <AlertCircle className="h-5 w-5" />
              Access Control
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <div className="font-semibold text-foreground">By Default: Nobody Has Access</div>
            <p className="text-muted-foreground">
              Your admin panel is secure by default. Only users you explicitly grant a role can access any admin features.
            </p>
            <div className="mt-4 space-y-2">
              <div><strong>To Grant Access:</strong></div>
              <ol className="list-decimal list-inside space-y-1 text-muted-foreground ml-2">
                <li>User creates account at /auth</li>
                <li>You enter their email above and assign a role</li>
                <li>They can now access admin panel with that role's permissions</li>
              </ol>
            </div>
          </CardContent>
        </Card>

        <Card className="border-primary">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Role Hierarchy
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <div>
              <strong>Super Admin:</strong> Full access, can manage all roles including other admins
            </div>
            <div>
              <strong>Admin:</strong> Full admin panel access, can manage Editor/Viewer roles, cannot modify Super Admins
            </div>
            <div>
              <strong>Editor:</strong> Can create and edit content, limited access to settings
            </div>
            <div>
              <strong>Viewer:</strong> Read-only access to admin panel
            </div>
          </CardContent>
        </Card>
      </div>

      <AlertDialog open={!!changeRoleDialog} onOpenChange={(open) => !open && setChangeRoleDialog(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirm Role Change</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to change this user's role to <strong>{changeRoleDialog?.newRole}</strong>?
              This will change their access permissions immediately.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={confirmRoleChange}>Confirm</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default AdminUsers;
