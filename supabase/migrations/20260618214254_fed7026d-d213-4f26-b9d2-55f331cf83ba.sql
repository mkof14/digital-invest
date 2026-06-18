
-- 1) Drop overly permissive storage SELECT on investor-documents (bypasses role check via OR)
DROP POLICY IF EXISTS "Authenticated users can download documents" ON storage.objects;

-- 2) Drop public listing on project-documents (bucket is public; direct URLs still work)
DROP POLICY IF EXISTS "Public can read project documents" ON storage.objects;

-- 3) Admin SELECT for consultation_bookings
CREATE POLICY "Admins can read consultation bookings"
ON public.consultation_bookings
FOR SELECT
TO authenticated
USING (public.has_role_level(auth.uid(), 'ADMIN'::app_role));

CREATE POLICY "Admins can update consultation bookings"
ON public.consultation_bookings
FOR UPDATE
TO authenticated
USING (public.has_role_level(auth.uid(), 'ADMIN'::app_role))
WITH CHECK (public.has_role_level(auth.uid(), 'ADMIN'::app_role));

CREATE POLICY "Admins can delete consultation bookings"
ON public.consultation_bookings
FOR DELETE
TO authenticated
USING (public.has_role_level(auth.uid(), 'ADMIN'::app_role));

-- 4) Admin SELECT for investor_leads
CREATE POLICY "Admins can read investor leads"
ON public.investor_leads
FOR SELECT
TO authenticated
USING (public.has_role_level(auth.uid(), 'ADMIN'::app_role));

CREATE POLICY "Admins can update investor leads"
ON public.investor_leads
FOR UPDATE
TO authenticated
USING (public.has_role_level(auth.uid(), 'ADMIN'::app_role))
WITH CHECK (public.has_role_level(auth.uid(), 'ADMIN'::app_role));

CREATE POLICY "Admins can delete investor leads"
ON public.investor_leads
FOR DELETE
TO authenticated
USING (public.has_role_level(auth.uid(), 'ADMIN'::app_role));

-- 5) Revoke direct EXECUTE on the SECURITY DEFINER role-check helper.
-- RLS policy evaluation continues to call it via the planner without client EXECUTE rights.
REVOKE EXECUTE ON FUNCTION public.has_role_level(uuid, app_role) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.has_role_level(uuid, app_role) TO service_role;
