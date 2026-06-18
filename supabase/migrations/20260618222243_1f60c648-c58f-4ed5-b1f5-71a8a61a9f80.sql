-- Allow editors+ to upload/update/delete inside resources/ prefix of project-documents
DO $$ BEGIN
  CREATE POLICY "Editors can upload resource files"
  ON storage.objects FOR INSERT TO authenticated
  WITH CHECK (
    bucket_id = 'project-documents'
    AND (storage.foldername(name))[1] = 'resources'
    AND public.has_role_level(auth.uid(), 'EDITOR')
  );
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

DO $$ BEGIN
  CREATE POLICY "Editors can update resource files"
  ON storage.objects FOR UPDATE TO authenticated
  USING (
    bucket_id = 'project-documents'
    AND (storage.foldername(name))[1] = 'resources'
    AND public.has_role_level(auth.uid(), 'EDITOR')
  );
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

DO $$ BEGIN
  CREATE POLICY "Admins can delete resource files"
  ON storage.objects FOR DELETE TO authenticated
  USING (
    bucket_id = 'project-documents'
    AND (storage.foldername(name))[1] = 'resources'
    AND public.has_role_level(auth.uid(), 'ADMIN')
  );
EXCEPTION WHEN duplicate_object THEN NULL; END $$;