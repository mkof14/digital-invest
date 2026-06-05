
CREATE TABLE public.presentation_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  item_type text NOT NULL CHECK (item_type IN ('pdf','video','link','image','page')),
  url text NOT NULL,
  group_name text,
  sort_order int NOT NULL DEFAULT 0,
  is_visible boolean NOT NULL DEFAULT true,
  file_path text,
  file_size bigint,
  file_mime text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT ON public.presentation_items TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.presentation_items TO authenticated;
GRANT ALL ON public.presentation_items TO service_role;

ALTER TABLE public.presentation_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can view visible presentation items"
  ON public.presentation_items FOR SELECT
  USING (is_visible = true);

CREATE POLICY "Editors can view all presentation items"
  ON public.presentation_items FOR SELECT
  TO authenticated
  USING (public.has_role_level(auth.uid(), 'EDITOR'));

CREATE POLICY "Editors can insert presentation items"
  ON public.presentation_items FOR INSERT
  TO authenticated
  WITH CHECK (public.has_role_level(auth.uid(), 'EDITOR'));

CREATE POLICY "Editors can update presentation items"
  ON public.presentation_items FOR UPDATE
  TO authenticated
  USING (public.has_role_level(auth.uid(), 'EDITOR'))
  WITH CHECK (public.has_role_level(auth.uid(), 'EDITOR'));

CREATE POLICY "Editors can delete presentation items"
  ON public.presentation_items FOR DELETE
  TO authenticated
  USING (public.has_role_level(auth.uid(), 'EDITOR'));

CREATE TRIGGER presentation_items_set_updated_at
  BEFORE UPDATE ON public.presentation_items
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
