
-- 1. Fix role escalation: replace INSERT policy to prevent admins from assigning roles above their own
DROP POLICY IF EXISTS "Admins can insert user roles" ON public.user_roles;

CREATE POLICY "Admins can insert user roles with escalation protection"
  ON public.user_roles
  FOR INSERT
  TO authenticated
  WITH CHECK (
    has_role_level(auth.uid(), 'ADMIN'::app_role)
    AND (
      CASE role
        WHEN 'SUPER_ADMIN' THEN has_role_level(auth.uid(), 'SUPER_ADMIN'::app_role)
        WHEN 'ADMIN' THEN has_role_level(auth.uid(), 'SUPER_ADMIN'::app_role)
        WHEN 'EDITOR' THEN has_role_level(auth.uid(), 'ADMIN'::app_role)
        WHEN 'VIEWER' THEN has_role_level(auth.uid(), 'ADMIN'::app_role)
        ELSE false
      END
    )
  );

-- Also fix UPDATE policy for same escalation protection
DROP POLICY IF EXISTS "Admins can update user roles" ON public.user_roles;

CREATE POLICY "Admins can update user roles with escalation protection"
  ON public.user_roles
  FOR UPDATE
  TO authenticated
  USING (has_role_level(auth.uid(), 'ADMIN'::app_role))
  WITH CHECK (
    has_role_level(auth.uid(), 'ADMIN'::app_role)
    AND (
      CASE role
        WHEN 'SUPER_ADMIN' THEN has_role_level(auth.uid(), 'SUPER_ADMIN'::app_role)
        WHEN 'ADMIN' THEN has_role_level(auth.uid(), 'SUPER_ADMIN'::app_role)
        WHEN 'EDITOR' THEN has_role_level(auth.uid(), 'ADMIN'::app_role)
        WHEN 'VIEWER' THEN has_role_level(auth.uid(), 'ADMIN'::app_role)
        ELSE false
      END
    )
  );

-- 2. Add DELETE policies for consultation_bookings and investor_leads
CREATE POLICY "Admins can delete consultation bookings"
  ON public.consultation_bookings
  FOR DELETE
  TO authenticated
  USING (has_role_level(auth.uid(), 'ADMIN'::app_role));

CREATE POLICY "Admins can delete investor leads"
  ON public.investor_leads
  FOR DELETE
  TO authenticated
  USING (has_role_level(auth.uid(), 'ADMIN'::app_role));

-- 3. Fix permissive INSERT policies (replace USING true with rate-limit-friendly checks)
-- These are intentionally public forms, but we tighten them slightly

-- social_media_clicks: keep public but add basic validation
DROP POLICY IF EXISTS "Anyone can record social media clicks" ON public.social_media_clicks;
CREATE POLICY "Anyone can record social media clicks"
  ON public.social_media_clicks
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (social_media_id IS NOT NULL);

-- consultation_bookings: keep public but require essential fields
DROP POLICY IF EXISTS "Anyone can create consultation bookings" ON public.consultation_bookings;
CREATE POLICY "Anyone can create consultation bookings"
  ON public.consultation_bookings
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (name IS NOT NULL AND email IS NOT NULL AND date IS NOT NULL);

-- investor_leads: keep public but require essential fields
DROP POLICY IF EXISTS "Anyone can submit investor leads" ON public.investor_leads;
CREATE POLICY "Anyone can submit investor leads"
  ON public.investor_leads
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (name IS NOT NULL AND email IS NOT NULL);
