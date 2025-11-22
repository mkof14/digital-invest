import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Database } from '@/integrations/supabase/types';

type AppRole = Database['public']['Enums']['app_role'];

export const useUserRole = () => {
  const [role, setRole] = useState<AppRole | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchUserRole();
  }, []);

  const fetchUserRole = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        setRole(null);
        setIsLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', user.id)
        .single();

      if (error) {
        console.error('Error fetching user role:', error);
        setRole(null);
      } else {
        setRole(data?.role || null);
      }
    } catch (error) {
      console.error('Error in fetchUserRole:', error);
      setRole(null);
    } finally {
      setIsLoading(false);
    }
  };

  const hasRole = (minRole: AppRole): boolean => {
    if (!role) return false;

    const roleOrder: Record<AppRole, number> = {
      'VIEWER': 1,
      'EDITOR': 2,
      'ADMIN': 3,
      'SUPER_ADMIN': 4,
    };

    return roleOrder[role] >= roleOrder[minRole];
  };

  const isSuperAdmin = () => role === 'SUPER_ADMIN';
  const isAdmin = () => role === 'ADMIN' || role === 'SUPER_ADMIN';
  const isEditor = () => hasRole('EDITOR');
  const isViewer = () => hasRole('VIEWER');

  return {
    role,
    isLoading,
    hasRole,
    isSuperAdmin,
    isAdmin,
    isEditor,
    isViewer,
    refetch: fetchUserRole,
  };
};
