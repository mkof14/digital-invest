-- Create storage bucket for investor documents
INSERT INTO storage.buckets (id, name, public)
VALUES ('investor-documents', 'investor-documents', false)
ON CONFLICT (id) DO NOTHING;

-- Create investor_documents table
CREATE TABLE IF NOT EXISTS public.investor_documents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  file_name TEXT NOT NULL,
  file_path TEXT NOT NULL,
  file_type TEXT NOT NULL,
  file_size INTEGER NOT NULL,
  category TEXT DEFAULT 'general',
  is_visible BOOLEAN DEFAULT true,
  uploaded_by UUID REFERENCES auth.users(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.investor_documents ENABLE ROW LEVEL SECURITY;

-- RLS Policies for investor_documents
CREATE POLICY "Admins can manage documents"
ON public.investor_documents
FOR ALL
USING (has_role_level(auth.uid(), 'ADMIN'::app_role))
WITH CHECK (has_role_level(auth.uid(), 'ADMIN'::app_role));

CREATE POLICY "Authenticated users can view visible documents"
ON public.investor_documents
FOR SELECT
USING (is_visible = true AND auth.uid() IS NOT NULL);

-- RLS Policies for storage.objects (investor-documents bucket)
CREATE POLICY "Admins can upload documents"
ON storage.objects
FOR INSERT
WITH CHECK (
  bucket_id = 'investor-documents' 
  AND has_role_level(auth.uid(), 'ADMIN'::app_role)
);

CREATE POLICY "Admins can update documents"
ON storage.objects
FOR UPDATE
USING (
  bucket_id = 'investor-documents' 
  AND has_role_level(auth.uid(), 'ADMIN'::app_role)
)
WITH CHECK (
  bucket_id = 'investor-documents' 
  AND has_role_level(auth.uid(), 'ADMIN'::app_role)
);

CREATE POLICY "Admins can delete documents"
ON storage.objects
FOR DELETE
USING (
  bucket_id = 'investor-documents' 
  AND has_role_level(auth.uid(), 'ADMIN'::app_role)
);

CREATE POLICY "Authenticated users can download documents"
ON storage.objects
FOR SELECT
USING (
  bucket_id = 'investor-documents' 
  AND auth.uid() IS NOT NULL
);

-- Create trigger for updated_at
CREATE TRIGGER update_investor_documents_updated_at
BEFORE UPDATE ON public.investor_documents
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();