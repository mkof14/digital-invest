-- Drop and recreate has_role_level with parameter rename (_user_id) and deterministic role pick
DROP FUNCTION IF EXISTS public.has_role_level(uuid, public.app_role) CASCADE;

CREATE OR REPLACE FUNCTION public.has_role_level(_user_id uuid, _required_role public.app_role)
RETURNS boolean
LANGUAGE plpgsql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  user_role public.app_role;
  role_order jsonb := '{"VIEWER": 1, "EDITOR": 2, "ADMIN": 3, "SUPER_ADMIN": 4}'::jsonb;
  user_level int;
  required_level int;
BEGIN
  SELECT role
  INTO user_role
  FROM public.user_roles
  WHERE user_roles.user_id = _user_id
  ORDER BY (role_order ->> role::text)::int DESC NULLS LAST
  LIMIT 1;

  IF user_role IS NULL THEN
    RETURN FALSE;
  END IF;

  user_level := (role_order ->> user_role::text)::int;
  required_level := (role_order ->> _required_role::text)::int;

  RETURN user_level >= required_level;
END;
$$;

-- Recreate policies that may have been dropped by CASCADE
-- Storage policies on storage.objects
DROP POLICY IF EXISTS "VIEWER+ can download investor documents" ON storage.objects;
CREATE POLICY "VIEWER+ can download investor documents"
ON storage.objects
FOR SELECT
TO authenticated
USING (
  bucket_id = 'investor-documents'
  AND public.has_role_level(auth.uid(), 'VIEWER'::public.app_role)
);

DROP POLICY IF EXISTS "Admins can upload documents" ON storage.objects;
CREATE POLICY "Admins can upload documents"
ON storage.objects
FOR INSERT
TO authenticated
WITH CHECK (
  bucket_id = 'investor-documents'
  AND public.has_role_level(auth.uid(), 'ADMIN'::public.app_role)
);

DROP POLICY IF EXISTS "Admins can update documents" ON storage.objects;
CREATE POLICY "Admins can update documents"
ON storage.objects
FOR UPDATE
TO authenticated
USING (
  bucket_id = 'investor-documents'
  AND public.has_role_level(auth.uid(), 'ADMIN'::public.app_role)
);

DROP POLICY IF EXISTS "Admins can delete documents" ON storage.objects;
CREATE POLICY "Admins can delete documents"
ON storage.objects
FOR DELETE
TO authenticated
USING (
  bucket_id = 'investor-documents'
  AND public.has_role_level(auth.uid(), 'ADMIN'::public.app_role)
);

DROP POLICY IF EXISTS "Editors can upload project documents" ON storage.objects;
CREATE POLICY "Editors can upload project documents"
ON storage.objects
FOR INSERT
TO authenticated
WITH CHECK (
  bucket_id = 'project-documents'
  AND public.has_role_level(auth.uid(), 'EDITOR'::public.app_role)
);

DROP POLICY IF EXISTS "Editors can update project documents" ON storage.objects;
CREATE POLICY "Editors can update project documents"
ON storage.objects
FOR UPDATE
TO authenticated
USING (
  bucket_id = 'project-documents'
  AND public.has_role_level(auth.uid(), 'EDITOR'::public.app_role)
);

DROP POLICY IF EXISTS "Editors can delete project documents" ON storage.objects;
CREATE POLICY "Editors can delete project documents"
ON storage.objects
FOR DELETE
TO authenticated
USING (
  bucket_id = 'project-documents'
  AND public.has_role_level(auth.uid(), 'EDITOR'::public.app_role)
);