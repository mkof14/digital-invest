-- Resource kind enum
DO $$ BEGIN
  CREATE TYPE public.resource_kind AS ENUM (
    'presentation', 'research', 'video', 'download', 'media', 'technology'
  );
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

-- Table
CREATE TABLE public.resources (
  id              uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  kind            public.resource_kind NOT NULL,
  category        text,
  title           text NOT NULL,
  description     text,
  cover_url       text,
  file_url        text,
  video_url       text,
  external_url    text,
  file_type       text,
  file_size_bytes bigint,
  icon            text,
  sort_order      integer NOT NULL DEFAULT 0,
  is_published    boolean NOT NULL DEFAULT false,
  is_featured     boolean NOT NULL DEFAULT false,
  created_at      timestamptz NOT NULL DEFAULT now(),
  updated_at      timestamptz NOT NULL DEFAULT now()
);

-- GRANTS (required for PostgREST)
GRANT SELECT ON public.resources TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.resources TO authenticated;
GRANT ALL ON public.resources TO service_role;

-- Indexes
CREATE INDEX resources_kind_idx        ON public.resources (kind);
CREATE INDEX resources_published_idx   ON public.resources (is_published);
CREATE INDEX resources_featured_idx    ON public.resources (is_featured) WHERE is_featured;
CREATE INDEX resources_sort_idx        ON public.resources (sort_order);

-- updated_at trigger reuses existing public.update_updated_at_column()
CREATE TRIGGER resources_set_updated_at
BEFORE UPDATE ON public.resources
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- RLS
ALTER TABLE public.resources ENABLE ROW LEVEL SECURITY;

-- Public can read published resources
CREATE POLICY "Public can read published resources"
ON public.resources FOR SELECT
USING (is_published = true OR public.has_role_level(auth.uid(), 'EDITOR'));

-- Editors+ can insert/update; admins can delete
CREATE POLICY "Editors can insert resources"
ON public.resources FOR INSERT
TO authenticated
WITH CHECK (public.has_role_level(auth.uid(), 'EDITOR'));

CREATE POLICY "Editors can update resources"
ON public.resources FOR UPDATE
TO authenticated
USING (public.has_role_level(auth.uid(), 'EDITOR'))
WITH CHECK (public.has_role_level(auth.uid(), 'EDITOR'));

CREATE POLICY "Admins can delete resources"
ON public.resources FOR DELETE
TO authenticated
USING (public.has_role_level(auth.uid(), 'ADMIN'));