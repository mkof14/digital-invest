import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface ManageUsersRequest {
  action: 'list' | 'assign-role' | 'remove-role';
  email?: string;
  role?: 'VIEWER' | 'EDITOR' | 'ADMIN' | 'SUPER_ADMIN';
  userId?: string;
}

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      {
        global: {
          headers: { Authorization: req.headers.get('Authorization')! },
        },
      }
    );

    // Create service role client for admin operations
    const supabaseAdmin = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    // Verify user is authenticated
    const { data: { user }, error: authError } = await supabaseClient.auth.getUser();
    
    if (authError || !user) {
      console.error('Authentication error:', authError);
      return new Response(
        JSON.stringify({ error: 'Unauthorized' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Check if user has admin permissions (ADMIN or SUPER_ADMIN)
    const { data: userRole, error: roleError } = await supabaseClient
      .from('user_roles')
      .select('role')
      .eq('user_id', user.id)
      .single();

    if (roleError || !userRole || !['ADMIN', 'SUPER_ADMIN'].includes(userRole.role)) {
      console.error('Permission check failed:', roleError);
      return new Response(
        JSON.stringify({ error: 'Insufficient permissions. Admin role required.' }),
        { status: 403, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const currentUserRole = userRole.role;
    const body: ManageUsersRequest = await req.json();

    console.log('Action requested:', body.action, 'by user role:', currentUserRole);

    // LIST ALL USERS WITH ROLES
    if (body.action === 'list') {
      // Get all auth users using service role
      const { data: { users: authUsers }, error: usersError } = await supabaseAdmin.auth.admin.listUsers();
      
      if (usersError) {
        console.error('Error fetching users:', usersError);
        return new Response(
          JSON.stringify({ error: 'Failed to fetch users' }),
          { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      // Get all user roles
      const { data: roles, error: rolesError } = await supabaseClient
        .from('user_roles')
        .select('*');

      if (rolesError) {
        console.error('Error fetching roles:', rolesError);
        return new Response(
          JSON.stringify({ error: 'Failed to fetch roles' }),
          { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      // Combine auth users with their roles
      const usersWithRoles = authUsers.map(authUser => {
        const userRoleData = roles?.find(r => r.user_id === authUser.id);
        return {
          id: authUser.id,
          email: authUser.email,
          created_at: authUser.created_at,
          role: userRoleData?.role || null,
          role_id: userRoleData?.id || null,
        };
      });

      console.log(`Returning ${usersWithRoles.length} users`);
      return new Response(
        JSON.stringify({ users: usersWithRoles }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // ASSIGN ROLE TO USER
    if (body.action === 'assign-role') {
      if (!body.email || !body.role) {
        return new Response(
          JSON.stringify({ error: 'Email and role are required' }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      // Validation: Regular ADMIN cannot assign SUPER_ADMIN role
      if (currentUserRole === 'ADMIN' && body.role === 'SUPER_ADMIN') {
        return new Response(
          JSON.stringify({ error: 'Only Super Admins can assign the Super Admin role' }),
          { status: 403, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      // Find user by email
      const { data: { users: foundUsers }, error: findError } = await supabaseAdmin.auth.admin.listUsers();
      
      if (findError) {
        console.error('Error finding user:', findError);
        return new Response(
          JSON.stringify({ error: 'Failed to find user' }),
          { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      const targetUser = foundUsers.find(u => u.email?.toLowerCase() === body.email.toLowerCase());
      
      if (!targetUser) {
        return new Response(
          JSON.stringify({ error: 'User not found. They must sign up first at /auth' }),
          { status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      // Check if user already has a role
      const { data: existingRole, error: checkError } = await supabaseClient
        .from('user_roles')
        .select('*')
        .eq('user_id', targetUser.id)
        .single();

      if (checkError && checkError.code !== 'PGRST116') { // PGRST116 = no rows returned
        console.error('Error checking existing role:', checkError);
        return new Response(
          JSON.stringify({ error: 'Failed to check existing role' }),
          { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      if (existingRole) {
        // Validation: Regular ADMIN cannot modify SUPER_ADMIN users
        if (currentUserRole === 'ADMIN' && existingRole.role === 'SUPER_ADMIN') {
          return new Response(
            JSON.stringify({ error: 'You cannot modify a Super Admin user' }),
            { status: 403, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          );
        }

        // Update existing role
        const { error: updateError } = await supabaseClient
          .from('user_roles')
          .update({ role: body.role })
          .eq('user_id', targetUser.id);

        if (updateError) {
          console.error('Error updating role:', updateError);
          return new Response(
            JSON.stringify({ error: 'Failed to update role' }),
            { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          );
        }

        console.log(`Updated role for ${body.email} to ${body.role}`);
        return new Response(
          JSON.stringify({ success: true, message: `Role updated to ${body.role}` }),
          { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      } else {
        // Insert new role
        const { error: insertError } = await supabaseClient
          .from('user_roles')
          .insert([{ user_id: targetUser.id, role: body.role }]);

        if (insertError) {
          console.error('Error inserting role:', insertError);
          return new Response(
            JSON.stringify({ error: 'Failed to assign role' }),
            { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          );
        }

        console.log(`Assigned role ${body.role} to ${body.email}`);
        return new Response(
          JSON.stringify({ success: true, message: `Role ${body.role} assigned successfully` }),
          { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
    }

    // REMOVE ROLE FROM USER
    if (body.action === 'remove-role') {
      if (!body.userId) {
        return new Response(
          JSON.stringify({ error: 'User ID is required' }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      // Check target user's role before deletion
      const { data: targetRole, error: targetRoleError } = await supabaseClient
        .from('user_roles')
        .select('role')
        .eq('user_id', body.userId)
        .single();

      if (targetRoleError) {
        console.error('Error fetching target role:', targetRoleError);
        return new Response(
          JSON.stringify({ error: 'Failed to check user role' }),
          { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      // Validation: Regular ADMIN cannot remove SUPER_ADMIN users
      if (currentUserRole === 'ADMIN' && targetRole.role === 'SUPER_ADMIN') {
        return new Response(
          JSON.stringify({ error: 'You cannot remove a Super Admin user' }),
          { status: 403, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      // Prevent removing the last SUPER_ADMIN
      if (targetRole.role === 'SUPER_ADMIN') {
        const { data: superAdmins, error: countError } = await supabaseClient
          .from('user_roles')
          .select('id')
          .eq('role', 'SUPER_ADMIN');

        if (countError || !superAdmins || superAdmins.length <= 1) {
          return new Response(
            JSON.stringify({ error: 'Cannot remove the last Super Admin' }),
            { status: 403, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          );
        }
      }

      const { error: deleteError } = await supabaseClient
        .from('user_roles')
        .delete()
        .eq('user_id', body.userId);

      if (deleteError) {
        console.error('Error removing role:', deleteError);
        return new Response(
          JSON.stringify({ error: 'Failed to remove role' }),
          { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      console.log(`Removed role from user ${body.userId}`);
      return new Response(
        JSON.stringify({ success: true, message: 'Role removed successfully' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ error: 'Invalid action' }),
      { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error in manage-users function:', error);
    return new Response(
      JSON.stringify({ error: error.message || 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
