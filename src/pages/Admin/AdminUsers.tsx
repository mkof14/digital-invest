import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Database } from '@/integrations/supabase/types';
import { useUserRole } from '@/hooks/useUserRole';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft, Users as UsersIcon, AlertCircle } from 'lucide-react';
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

interface UserWithRole {
  id: string;
  email: string;
  created_at: string;
  user_roles?: {
    role: string;
  } | null;
}

const AdminUsers = () => {
  const navigate = useNavigate();
  const { role: currentUserRole, isLoading: roleLoading, isSuperAdmin } = useUserRole();
  const [users, setUsers] = useState<UserWithRole[]>([]);
  const [isLoading, setIsLoading] = useState(true);
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
      // First get all auth users
      const { data: authData, error: authError } = await supabase.auth.admin.listUsers();
      
      if (authError) throw authError;

      // Then get user roles
      const { data: rolesData, error: rolesError } = await supabase
        .from('user_roles')
        .select('user_id, role');

      if (rolesError) throw rolesError;

      // Combine the data
      const usersWithRoles = authData.users.map(user => ({
        id: user.id,
        email: user.email || '',
        created_at: user.created_at,
        user_roles: rolesData?.find(r => r.user_id === user.id) ? {
          role: rolesData.find(r => r.user_id === user.id)!.role
        } : null,
      }));

      setUsers(usersWithRoles);
    } catch (error) {
      console.error('Error fetching users:', error);
      toast.error('Failed to load users');
    } finally {
      setIsLoading(false);
    }
  };

  const handleRoleChange = async (userId: string, newRole: string) => {
    const user = users.find(u => u.id === userId);
    const currentRole = user?.user_roles?.role || null;

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

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <UsersIcon className="h-5 w-5" />
            User Roles
          </CardTitle>
          <CardDescription>
            Assign roles to control access levels. {!isSuperAdmin() && 'Only Super Admins can assign the Super Admin role.'}
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
                {users.map((user) => {
                  const userRole = user.user_roles?.role;
                  const isCurrentUserSuperAdmin = isSuperAdmin();
                  const isTargetSuperAdmin = userRole === 'SUPER_ADMIN';
                  const canEdit = isCurrentUserSuperAdmin || !isTargetSuperAdmin;

                  return (
                    <TableRow key={user.id}>
                      <TableCell className="font-medium">{user.email}</TableCell>
                      <TableCell>
                        {userRole ? (
                          <Badge className={getRoleBadgeColor(userRole)}>
                            {userRole}
                          </Badge>
                        ) : (
                          <span className="text-muted-foreground italic">No role assigned</span>
                        )}
                      </TableCell>
                      <TableCell>
                        {new Date(user.created_at).toLocaleDateString()}
                      </TableCell>
                      <TableCell className="text-right">
                        {canEdit ? (
                          <Select
                            value={userRole || 'NO_ROLE'}
                            onValueChange={(value) => handleRoleChange(user.id, value)}
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

          {users.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              No users found
            </div>
          )}
        </CardContent>
      </Card>

      <Card className="border-warning">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-warning">
            <AlertCircle className="h-5 w-5" />
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
