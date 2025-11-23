-- Add click tracking columns to social_media_links table
ALTER TABLE public.social_media_links 
ADD COLUMN IF NOT EXISTS click_count INTEGER NOT NULL DEFAULT 0,
ADD COLUMN IF NOT EXISTS last_clicked_at TIMESTAMP WITH TIME ZONE;

-- Create table for detailed click analytics
CREATE TABLE IF NOT EXISTS public.social_media_clicks (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  social_media_id UUID NOT NULL REFERENCES public.social_media_links(id) ON DELETE CASCADE,
  clicked_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  referrer TEXT,
  user_agent TEXT
);

-- Enable RLS
ALTER TABLE public.social_media_clicks ENABLE ROW LEVEL SECURITY;

-- Create policies for clicks table
CREATE POLICY "Anyone can record social media clicks"
ON public.social_media_clicks
FOR INSERT
WITH CHECK (true);

CREATE POLICY "Admins can view social media clicks"
ON public.social_media_clicks
FOR SELECT
USING (has_role_level(auth.uid(), 'ADMIN'::app_role));

-- Create index for better performance
CREATE INDEX IF NOT EXISTS idx_social_media_clicks_social_media_id 
ON public.social_media_clicks(social_media_id);

CREATE INDEX IF NOT EXISTS idx_social_media_clicks_clicked_at 
ON public.social_media_clicks(clicked_at DESC);