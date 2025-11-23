-- Create function to increment social media click count
CREATE OR REPLACE FUNCTION public.increment_social_click(social_id UUID)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  UPDATE public.social_media_links
  SET 
    click_count = click_count + 1,
    last_clicked_at = now()
  WHERE id = social_id;
END;
$$;