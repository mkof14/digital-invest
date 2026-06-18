
-- Replace permissive INSERT on social_media_clicks with one that binds to a real visible link
DROP POLICY IF EXISTS "Anyone can record social media clicks" ON public.social_media_clicks;
CREATE POLICY "Anyone can record valid social media clicks"
ON public.social_media_clicks
FOR INSERT
TO anon, authenticated
WITH CHECK (
  social_media_id IS NOT NULL
  AND EXISTS (
    SELECT 1 FROM public.social_media_links l
    WHERE l.id = social_media_id AND l.is_visible = true
  )
);

-- Admin read access for analytics
CREATE POLICY "Admins can read social media clicks"
ON public.social_media_clicks
FOR SELECT
TO authenticated
USING (public.has_role_level(auth.uid(), 'ADMIN'::app_role));

-- Guard against presentation_items leaking private bucket file paths
CREATE OR REPLACE FUNCTION public.prevent_private_bucket_paths_on_presentation_items()
RETURNS trigger
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  IF NEW.file_path IS NOT NULL AND (
       NEW.file_path ILIKE 'investor-documents/%'
    OR NEW.file_path ILIKE 'presentations/%'
  ) THEN
    RAISE EXCEPTION 'presentation_items.file_path must not reference a private bucket path (%).', NEW.file_path;
  END IF;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS presentation_items_block_private_paths ON public.presentation_items;
CREATE TRIGGER presentation_items_block_private_paths
BEFORE INSERT OR UPDATE ON public.presentation_items
FOR EACH ROW EXECUTE FUNCTION public.prevent_private_bucket_paths_on_presentation_items();

REVOKE EXECUTE ON FUNCTION public.prevent_private_bucket_paths_on_presentation_items() FROM PUBLIC, anon, authenticated;
