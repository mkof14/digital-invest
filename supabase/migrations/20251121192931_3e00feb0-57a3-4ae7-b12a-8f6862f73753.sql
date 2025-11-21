-- Create enum for project status
CREATE TYPE project_status AS ENUM ('OPEN', 'CLOSED', 'COMING_SOON');

-- Create enum for investor lead status
CREATE TYPE lead_status AS ENUM ('NEW', 'CONTACTED', 'QUALIFIED', 'DECLINED');

-- Create projects table
CREATE TABLE public.projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  short_description TEXT NOT NULL CHECK (char_length(short_description) <= 280),
  long_description TEXT NOT NULL,
  status project_status NOT NULL DEFAULT 'OPEN',
  target_amount NUMERIC(15,2),
  current_raised NUMERIC(15,2) DEFAULT 0,
  currency TEXT DEFAULT 'USD',
  min_ticket NUMERIC(15,2),
  category TEXT NOT NULL,
  hero_image_url TEXT NOT NULL,
  deck_url TEXT,
  is_visible BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Create investor_leads table
CREATE TABLE public.investor_leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id UUID NOT NULL REFERENCES public.projects(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  country TEXT,
  amount_range TEXT NOT NULL,
  comments TEXT,
  status lead_status DEFAULT 'NEW',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Create project_updates table
CREATE TABLE public.project_updates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id UUID NOT NULL REFERENCES public.projects(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  body TEXT NOT NULL,
  published_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  is_public BOOLEAN DEFAULT true
);

-- Enable Row Level Security
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.investor_leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.project_updates ENABLE ROW LEVEL SECURITY;

-- RLS Policies for projects (public can view visible projects)
CREATE POLICY "Anyone can view visible projects"
  ON public.projects FOR SELECT
  USING (is_visible = true);

CREATE POLICY "Authenticated users can manage projects"
  ON public.projects FOR ALL
  USING (auth.uid() IS NOT NULL)
  WITH CHECK (auth.uid() IS NOT NULL);

-- RLS Policies for investor_leads (anyone can insert, only authenticated can read/update)
CREATE POLICY "Anyone can submit investor leads"
  ON public.investor_leads FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view investor leads"
  ON public.investor_leads FOR SELECT
  USING (auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated users can update investor leads"
  ON public.investor_leads FOR UPDATE
  USING (auth.uid() IS NOT NULL)
  WITH CHECK (auth.uid() IS NOT NULL);

-- RLS Policies for project_updates
CREATE POLICY "Anyone can view public project updates"
  ON public.project_updates FOR SELECT
  USING (is_public = true);

CREATE POLICY "Authenticated users can manage project updates"
  ON public.project_updates FOR ALL
  USING (auth.uid() IS NOT NULL)
  WITH CHECK (auth.uid() IS NOT NULL);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Add trigger to projects table
CREATE TRIGGER update_projects_updated_at
  BEFORE UPDATE ON public.projects
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Create indexes for better performance
CREATE INDEX idx_projects_slug ON public.projects(slug);
CREATE INDEX idx_projects_status ON public.projects(status);
CREATE INDEX idx_projects_is_visible ON public.projects(is_visible);
CREATE INDEX idx_investor_leads_project_id ON public.investor_leads(project_id);
CREATE INDEX idx_investor_leads_status ON public.investor_leads(status);
CREATE INDEX idx_project_updates_project_id ON public.project_updates(project_id);