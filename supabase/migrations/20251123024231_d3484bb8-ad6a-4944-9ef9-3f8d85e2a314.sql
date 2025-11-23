-- Create social_media_links table for managing social media links
CREATE TABLE IF NOT EXISTS public.social_media_links (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  platform TEXT NOT NULL UNIQUE,
  display_name TEXT NOT NULL,
  url TEXT,
  is_visible BOOLEAN NOT NULL DEFAULT true,
  sort_order INTEGER NOT NULL DEFAULT 0,
  icon_name TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.social_media_links ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Anyone can view visible social media links"
ON public.social_media_links
FOR SELECT
USING (is_visible = true);

CREATE POLICY "Admins can manage social media links"
ON public.social_media_links
FOR ALL
USING (has_role_level(auth.uid(), 'ADMIN'::app_role))
WITH CHECK (has_role_level(auth.uid(), 'ADMIN'::app_role));

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_social_media_links_updated_at
BEFORE UPDATE ON public.social_media_links
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert default social media links
INSERT INTO public.social_media_links (platform, display_name, url, icon_name, sort_order) VALUES
('linkedin', 'LinkedIn', 'https://www.linkedin.com/company/96294379/admin/dashboard/', 'Linkedin', 1),
('facebook', 'Facebook', 'https://www.facebook.com/digitalinvestcompany', 'Facebook', 2),
('youtube', 'YouTube', 'https://www.youtube.com/@BiomathLife', 'Youtube', 3),
('x', 'X (Twitter)', 'https://x.com', 'X', 4);