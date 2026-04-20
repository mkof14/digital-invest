-- Project documents table
CREATE TABLE public.project_documents (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  project_id UUID,
  project_slug TEXT NOT NULL,
  title TEXT NOT NULL,
  document_type TEXT,
  description TEXT,
  file_path TEXT,
  file_name TEXT,
  file_type TEXT,
  file_size INTEGER,
  external_url TEXT,
  is_visible BOOLEAN NOT NULL DEFAULT true,
  sort_order INTEGER NOT NULL DEFAULT 0,
  uploaded_by UUID,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_project_documents_slug ON public.project_documents(project_slug);
CREATE INDEX idx_project_documents_project_id ON public.project_documents(project_id);

ALTER TABLE public.project_documents ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view visible project documents"
ON public.project_documents FOR SELECT
USING (is_visible = true);

CREATE POLICY "Editors can manage project documents"
ON public.project_documents FOR ALL
TO authenticated
USING (has_role_level(auth.uid(), 'EDITOR'::app_role))
WITH CHECK (has_role_level(auth.uid(), 'EDITOR'::app_role));

CREATE TRIGGER update_project_documents_updated_at
BEFORE UPDATE ON public.project_documents
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Public storage bucket for project documents
INSERT INTO storage.buckets (id, name, public)
VALUES ('project-documents', 'project-documents', true)
ON CONFLICT (id) DO NOTHING;

CREATE POLICY "Public can read project documents"
ON storage.objects FOR SELECT
USING (bucket_id = 'project-documents');

CREATE POLICY "Editors can upload project documents"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'project-documents' AND has_role_level(auth.uid(), 'EDITOR'::app_role));

CREATE POLICY "Editors can update project documents"
ON storage.objects FOR UPDATE
TO authenticated
USING (bucket_id = 'project-documents' AND has_role_level(auth.uid(), 'EDITOR'::app_role));

CREATE POLICY "Editors can delete project documents"
ON storage.objects FOR DELETE
TO authenticated
USING (bucket_id = 'project-documents' AND has_role_level(auth.uid(), 'EDITOR'::app_role));