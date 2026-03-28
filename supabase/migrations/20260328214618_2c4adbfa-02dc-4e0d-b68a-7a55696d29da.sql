
-- Fix 1: Team members - create a public view without email, restrict base table
-- Drop existing public SELECT policy
DROP POLICY IF EXISTS "Anyone can view visible team members" ON public.team_members;

-- Create new policy: only editors+ can SELECT from base table
CREATE POLICY "Editors can view all team members"
  ON public.team_members
  FOR SELECT
  TO authenticated
  USING (has_role_level(auth.uid(), 'EDITOR'::app_role));

-- Create a public view without the email column
CREATE OR REPLACE VIEW public.public_team_members AS
  SELECT id, full_name, title, bio, photo_url, linkedin_url, order_index, is_visible, created_at, updated_at
  FROM public.team_members
  WHERE is_visible = true;

-- Grant access to the view for anon and authenticated
GRANT SELECT ON public.public_team_members TO anon, authenticated;

-- Fix 2: Investor documents - require VIEWER role minimum
DROP POLICY IF EXISTS "Authenticated users can view visible documents" ON public.investor_documents;

CREATE POLICY "Viewers can view visible documents"
  ON public.investor_documents
  FOR SELECT
  TO authenticated
  USING (is_visible = true AND has_role_level(auth.uid(), 'VIEWER'::app_role));
