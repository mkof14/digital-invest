-- ===== investor_documents =====
-- Visible documents readable by VIEWER+ (matches storage policy)
CREATE POLICY "VIEWER+ can read investor documents metadata"
ON public.investor_documents
FOR SELECT
TO authenticated
USING (
  is_visible = true
  AND public.has_role_level(auth.uid(), 'VIEWER'::public.app_role)
);

-- Admins manage all
CREATE POLICY "Admins can read all investor documents"
ON public.investor_documents
FOR SELECT
TO authenticated
USING (public.has_role_level(auth.uid(), 'ADMIN'::public.app_role));

CREATE POLICY "Admins can insert investor documents"
ON public.investor_documents
FOR INSERT
TO authenticated
WITH CHECK (public.has_role_level(auth.uid(), 'ADMIN'::public.app_role));

CREATE POLICY "Admins can update investor documents"
ON public.investor_documents
FOR UPDATE
TO authenticated
USING (public.has_role_level(auth.uid(), 'ADMIN'::public.app_role));

CREATE POLICY "Admins can delete investor documents"
ON public.investor_documents
FOR DELETE
TO authenticated
USING (public.has_role_level(auth.uid(), 'ADMIN'::public.app_role));

-- ===== team_members =====
-- Public read is intentionally served via the safe view `public_team_members`,
-- so the base table itself is admin-only.
CREATE POLICY "Admins can read team members"
ON public.team_members
FOR SELECT
TO authenticated
USING (public.has_role_level(auth.uid(), 'ADMIN'::public.app_role));

CREATE POLICY "Admins can insert team members"
ON public.team_members
FOR INSERT
TO authenticated
WITH CHECK (public.has_role_level(auth.uid(), 'ADMIN'::public.app_role));

CREATE POLICY "Admins can update team members"
ON public.team_members
FOR UPDATE
TO authenticated
USING (public.has_role_level(auth.uid(), 'ADMIN'::public.app_role));

CREATE POLICY "Admins can delete team members"
ON public.team_members
FOR DELETE
TO authenticated
USING (public.has_role_level(auth.uid(), 'ADMIN'::public.app_role));

-- ===== user_roles =====
-- Users can see their own role(s)
CREATE POLICY "Users can view their own roles"
ON public.user_roles
FOR SELECT
TO authenticated
USING (user_id = auth.uid());

-- Admins can read all role assignments
CREATE POLICY "Admins can read all user roles"
ON public.user_roles
FOR SELECT
TO authenticated
USING (public.has_role_level(auth.uid(), 'ADMIN'::public.app_role));

-- Only SUPER_ADMIN can grant/revoke roles
CREATE POLICY "Super admins can insert roles"
ON public.user_roles
FOR INSERT
TO authenticated
WITH CHECK (public.has_role_level(auth.uid(), 'SUPER_ADMIN'::public.app_role));

CREATE POLICY "Super admins can update roles"
ON public.user_roles
FOR UPDATE
TO authenticated
USING (public.has_role_level(auth.uid(), 'SUPER_ADMIN'::public.app_role));

CREATE POLICY "Super admins can delete roles"
ON public.user_roles
FOR DELETE
TO authenticated
USING (public.has_role_level(auth.uid(), 'SUPER_ADMIN'::public.app_role));