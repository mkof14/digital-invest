-- Create app_role enum for user roles
CREATE TYPE public.app_role AS ENUM ('SUPER_ADMIN', 'ADMIN', 'EDITOR', 'VIEWER');

-- Create user_roles table
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  UNIQUE (user_id)
);

-- Create site_sections table for managing page visibility and access
CREATE TABLE public.site_sections (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  key TEXT UNIQUE NOT NULL,
  display_name TEXT NOT NULL,
  description TEXT,
  is_visible BOOLEAN DEFAULT true,
  show_in_main_nav BOOLEAN DEFAULT false,
  show_in_footer BOOLEAN DEFAULT true,
  min_role_to_view TEXT DEFAULT 'PUBLIC',
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable RLS on user_roles
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Enable RLS on site_sections
ALTER TABLE public.site_sections ENABLE ROW LEVEL SECURITY;

-- Create security definer function to check user role
CREATE OR REPLACE FUNCTION public.get_user_role(user_id UUID)
RETURNS app_role
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT role FROM public.user_roles WHERE user_roles.user_id = $1;
$$;

-- Create function to check if user has minimum role
CREATE OR REPLACE FUNCTION public.has_role_level(user_id UUID, min_role app_role)
RETURNS BOOLEAN
LANGUAGE plpgsql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  user_role app_role;
  role_order JSONB := '{"VIEWER": 1, "EDITOR": 2, "ADMIN": 3, "SUPER_ADMIN": 4}'::jsonb;
BEGIN
  SELECT role INTO user_role FROM public.user_roles WHERE user_roles.user_id = $1;
  
  IF user_role IS NULL THEN
    RETURN FALSE;
  END IF;
  
  RETURN (role_order->>user_role::text)::int >= (role_order->>min_role::text)::int;
END;
$$;

-- RLS Policies for user_roles
-- Admins can view all user roles
CREATE POLICY "Admins can view all user roles"
ON public.user_roles
FOR SELECT
TO authenticated
USING (public.has_role_level(auth.uid(), 'ADMIN'));

-- Admins can insert user roles
CREATE POLICY "Admins can insert user roles"
ON public.user_roles
FOR INSERT
TO authenticated
WITH CHECK (public.has_role_level(auth.uid(), 'ADMIN'));

-- Admins can update user roles (additional logic needed in app to prevent demoting super admins)
CREATE POLICY "Admins can update user roles"
ON public.user_roles
FOR UPDATE
TO authenticated
USING (public.has_role_level(auth.uid(), 'ADMIN'))
WITH CHECK (public.has_role_level(auth.uid(), 'ADMIN'));

-- Super admins can delete user roles
CREATE POLICY "Super admins can delete user roles"
ON public.user_roles
FOR DELETE
TO authenticated
USING (public.has_role_level(auth.uid(), 'SUPER_ADMIN'));

-- RLS Policies for site_sections
-- Anyone can view site sections (needed for navigation)
CREATE POLICY "Anyone can view site sections"
ON public.site_sections
FOR SELECT
TO authenticated, anon
USING (true);

-- Only admins can manage site sections
CREATE POLICY "Admins can manage site sections"
ON public.site_sections
FOR ALL
TO authenticated
USING (public.has_role_level(auth.uid(), 'ADMIN'))
WITH CHECK (public.has_role_level(auth.uid(), 'ADMIN'));

-- Seed site_sections table
INSERT INTO public.site_sections (key, display_name, description, is_visible, show_in_main_nav, show_in_footer, min_role_to_view, sort_order) VALUES
  ('news', 'News & Insights', 'Company news, insights, and updates', true, true, true, 'PUBLIC', 10),
  ('careers', 'Careers', 'Career opportunities and hiring information', true, false, true, 'PUBLIC', 20),
  ('press_center', 'Press Center', 'Press releases and media coverage', true, false, true, 'PUBLIC', 30),
  ('media_kit', 'Media Kit', 'Brand assets and media materials', true, false, true, 'PUBLIC', 40),
  ('investor_documents', 'Investor Documents', 'Public investor materials and briefs', true, false, true, 'PUBLIC', 50),
  ('investor_handbook', 'Investor Handbook', 'Comprehensive investor handbook', true, false, true, 'PUBLIC', 60),
  ('developer_api', 'Developer & API', 'API overview and developer resources', true, false, true, 'PUBLIC', 70),
  ('technology_infrastructure', 'Technology & Infrastructure', 'Technology systems and data integrity', true, false, true, 'PUBLIC', 80),
  ('security', 'Security & Infrastructure', 'Security principles and data protection', true, false, true, 'PUBLIC', 90),
  ('compliance', 'Compliance', 'Regulatory and compliance information', true, false, true, 'PUBLIC', 100),
  ('risk_factors', 'Risk Factors', 'Investment risk disclosures', true, false, true, 'PUBLIC', 110),
  ('esg', 'ESG & Sustainability', 'Environmental, social, and governance', true, false, true, 'PUBLIC', 120),
  ('values', 'Corporate Values', 'Company values and principles', true, false, true, 'PUBLIC', 130),
  ('governance', 'Governance', 'Governance structure and oversight', true, false, true, 'PUBLIC', 140),
  ('internal_documents', 'Internal Documents', 'Restricted internal materials', true, false, false, 'ADMIN', 150);

-- Add trigger for updated_at on user_roles
CREATE TRIGGER update_user_roles_updated_at
BEFORE UPDATE ON public.user_roles
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Add trigger for updated_at on site_sections
CREATE TRIGGER update_site_sections_updated_at
BEFORE UPDATE ON public.site_sections
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();