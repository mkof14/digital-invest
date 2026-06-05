
CREATE POLICY "Public can read presentations bucket"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'presentations');

CREATE POLICY "Editors can upload to presentations bucket"
  ON storage.objects FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id = 'presentations' AND public.has_role_level(auth.uid(), 'EDITOR'));

CREATE POLICY "Editors can update presentations bucket"
  ON storage.objects FOR UPDATE
  TO authenticated
  USING (bucket_id = 'presentations' AND public.has_role_level(auth.uid(), 'EDITOR'));

CREATE POLICY "Editors can delete from presentations bucket"
  ON storage.objects FOR DELETE
  TO authenticated
  USING (bucket_id = 'presentations' AND public.has_role_level(auth.uid(), 'EDITOR'));
