import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useUserRole } from '@/hooks/useUserRole';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowLeft, Users as UsersIcon, AlertCircle, UserPlus, Shield, Trash2, RefreshCw } from 'lucide-react';
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
  role: string | null;
  role_id: string | null;
}

const AdminUsers = () => {
  const navigate = useNavigate();
  const { role: currentUserRole, isLoading: roleLoading, isSuperAdmin } = useUserRole();
  const [users, setUsers] = useState<UserWithRole[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newUserEmail, setNewUserEmail] = useState('');
  const [newUserRole, setNewUserRole] = useState<string>('VIEWER');
  const [isAdding, setIsAdding] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);
  const [deleteUserConfirm, setDeleteUserConfirm] = useState<string | null>(null);

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
    setIsLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('manage-users', {
        body: { action: 'list' }
      });

      if (error) throw error;
      
      if (data?.users) {
        setUsers(data.users);
      }
    } catch (error: any) {
      console.error('Error fetching users:', error);
      toast.error(error.message || 'Failed to load users');
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
      const { data, error } = await supabase.functions.invoke('manage-users', {
        body: { 
          action: 'assign-role',
          email: newUserEmail,
          role: newUserRole
        }
      });

      if (error) throw error;

      toast.success(data.message || `Role ${newUserRole} assigned successfully`);
      setNewUserEmail('');
      setNewUserRole('VIEWER');
      fetchUsers();
    } catch (error: any) {
      console.error('Error adding user role:', error);
      toast.error(error.message || 'Failed to assign role');
    } finally {
      setIsAdding(false);
    }
  };

  const handleRoleChange = async (userId: string, newRole: string) => {
    const user = users.find(u => u.id === userId);
    if (!user) return;

    // Validation: Admin cannot assign SUPER_ADMIN or edit SUPER_ADMIN users
    if (currentUserRole === 'ADMIN') {
      if (newRole === 'SUPER_ADMIN') {
        toast.error('Only Super Admins can assign the Super Admin role');
        return;
      }
      if (user.role === 'SUPER_ADMIN') {
        toast.error('You cannot modify a Super Admin user');
        return;
      }
    }

    try {
      const { data, error } = await supabase.functions.invoke('manage-users', {
        body: {
          action: 'assign-role',
          email: user.email,
          role: newRole
        }
      });

      if (error) throw error;

      toast.success(data.message || `Role updated to ${newRole}`);
      fetchUsers();
    } catch (error: any) {
      console.error('Error updating role:', error);
      toast.error(error.message || 'Failed to update role');
    }
  };

  const handleRemoveRole = async (userId: string) => {
    const user = users.find(u => u.id === userId);
    if (!user) return;

    // Validation: Admin cannot remove SUPER_ADMIN users
    if (currentUserRole === 'ADMIN' && user.role === 'SUPER_ADMIN') {
      toast.error('You cannot remove a Super Admin user');
      return;
    }

    try {
      const { data, error } = await supabase.functions.invoke('manage-users', {
        body: {
          action: 'remove-role',
          userId: userId
        }
      });

      if (error) throw error;

      toast.success(data.message || 'Role removed successfully');
      setDeleteConfirm(null);
      fetchUsers();
    } catch (error: any) {
      console.error('Error removing role:', error);
      toast.error(error.message || 'Failed to remove role');
    }
  };

  const handleDeleteUser = async (userId: string) => {
    const user = users.find(u => u.id === userId);
    if (!user) return;

    // Only SUPER_ADMIN can delete users
    if (!isSuperAdmin()) {
      toast.error('Only Super Admins can delete users');
      return;
    }

    try {
      const { data, error } = await supabase.functions.invoke('manage-users', {
        body: {
          action: 'delete-user',
          userId: userId
        }
      });

      if (error) throw error;

      toast.success(data.message || 'User deleted successfully');
      setDeleteUserConfirm(null);
      fetchUsers();
    } catch (error: any) {
      console.error('Error deleting user:', error);
      toast.error(error.message || 'Failed to delete user');
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
          <p className="text-muted-foreground">Manage admin panel access and user permissions</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={fetchUsers} disabled={isLoading}>
            <RefreshCw className={`mr-2 h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
            Refresh
          </Button>
          <Button variant="ghost" onClick={() => navigate('/admin')}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
        </div>
      </div>

      {/* Add New User Card */}
      <Card className="border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <UserPlus className="h-5 w-5" />
            Assign Role to User
          </CardTitle>
          <CardDescription>
            Enter the email of a registered user to assign them an admin role. User must have an account first.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-1">
                <Label htmlFor="email">User Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="user@example.com"
                  value={newUserEmail}
                  onChange={(e) => setNewUserEmail(e.target.value)}
                  disabled={isAdding}
                  onKeyDown={(e) => e.key === 'Enter' && handleAddUser()}
                />
              </div>
              <div className="md:col-span-1">
                <Label htmlFor="role">Role</Label>
                <Select value={newUserRole} onValueChange={setNewUserRole} disabled={isAdding}>
                  <SelectTrigger id="role">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="VIEWER">Viewer</SelectItem>
                    <SelectItem value="EDITOR">Editor</SelectItem>
                    <SelectItem value="ADMIN">Admin</SelectItem>
                    {isSuperAdmin() && (
                      <SelectItem value="SUPER_ADMIN">Super Admin</SelectItem>
                    )}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-end">
                <Button onClick={handleAddUser} disabled={isAdding} className="w-full">
                  {isAdding ? 'Assigning...' : 'Assign Role'}
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Users List Card */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <UsersIcon className="h-5 w-5" />
            All Registered Users
          </CardTitle>
          <CardDescription>
            View all registered users and manage their admin access roles.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Email</TableHead>
                  <TableHead>Current Role</TableHead>
                  <TableHead>Member Since</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user) => {
                  const isCurrentUserSuperAdmin = isSuperAdmin();
                  const isTargetSuperAdmin = user.role === 'SUPER_ADMIN';
                  const canEdit = isCurrentUserSuperAdmin || !isTargetSuperAdmin;

                  return (
                    <TableRow key={user.id}>
                      <TableCell className="font-medium">{user.email}</TableCell>
                      <TableCell>
                        {user.role ? (
                          <Badge className={getRoleBadgeColor(user.role)}>
                            {user.role}
                          </Badge>
                        ) : (
                          <span className="text-muted-foreground italic text-sm">No role</span>
                        )}
                      </TableCell>
                      <TableCell>
                        {new Date(user.created_at).toLocaleDateString()}
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          {canEdit && (
                            <>
                              <Select
                                value={user.role || 'NO_ROLE'}
                                onValueChange={(value) => {
                                  if (value !== 'NO_ROLE') {
                                    handleRoleChange(user.id, value);
                                  }
                                }}
                              >
                                <SelectTrigger className="w-[140px]">
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
                              
                              {user.role && (
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => setDeleteConfirm(user.id)}
                                  className="text-destructive hover:text-destructive"
                                  title="Remove role"
                                >
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              )}
                              
                              {isCurrentUserSuperAdmin && (
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => setDeleteUserConfirm(user.id)}
                                  className="text-destructive hover:text-destructive hover:bg-destructive/10"
                                  title="Delete user permanently"
                                >
                                  <Trash2 className="h-4 w-4 fill-destructive" />
                                </Button>
                              )}
                            </>
                          )}
                          {!canEdit && (
                            <span className="text-sm text-muted-foreground">Protected</span>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>

          {users.length === 0 && !isLoading && (
            <div className="text-center py-8 text-muted-foreground">
              No users found. Once users sign up, they will appear here.
            </div>
          )}
        </CardContent>
      </Card>

      {/* Info Cards */}
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

      {/* Remove Role Confirmation Dialog */}
      <AlertDialog open={!!deleteConfirm} onOpenChange={(open) => !open && setDeleteConfirm(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Remove Admin Access</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to remove this user's admin role? They will no longer be able to access the admin panel, but their account will remain active.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction 
              onClick={() => deleteConfirm && handleRemoveRole(deleteConfirm)}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              Remove Role
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Delete User Confirmation Dialog */}
      <AlertDialog open={!!deleteUserConfirm} onOpenChange={(open) => !open && setDeleteUserConfirm(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="text-destructive">Delete User Permanently</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to permanently delete this user? This action cannot be undone. 
              The user's account, role, and all associated data will be deleted from the system.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction 
              onClick={() => deleteUserConfirm && handleDeleteUser(deleteUserConfirm)}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              Delete User
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default AdminUsers;
