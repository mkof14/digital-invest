-- Create team_members table
CREATE TABLE public.team_members (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL,
  title TEXT NOT NULL,
  bio TEXT,
  photo_url TEXT,
  linkedin_url TEXT,
  email TEXT,
  order_index INTEGER DEFAULT 0,
  is_visible BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Create news_posts table
CREATE TABLE public.news_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  excerpt TEXT NOT NULL CHECK (char_length(excerpt) <= 500),
  body TEXT NOT NULL,
  published_at TIMESTAMPTZ,
  is_published BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.team_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.news_posts ENABLE ROW LEVEL SECURITY;

-- RLS Policies for team_members
CREATE POLICY "Anyone can view visible team members"
  ON public.team_members FOR SELECT
  USING (is_visible = true);

CREATE POLICY "Authenticated users can manage team members"
  ON public.team_members FOR ALL
  USING (auth.uid() IS NOT NULL)
  WITH CHECK (auth.uid() IS NOT NULL);

-- RLS Policies for news_posts
CREATE POLICY "Anyone can view published news"
  ON public.news_posts FOR SELECT
  USING (is_published = true);

CREATE POLICY "Authenticated users can manage news"
  ON public.news_posts FOR ALL
  USING (auth.uid() IS NOT NULL)
  WITH CHECK (auth.uid() IS NOT NULL);

-- Add triggers for updated_at
CREATE TRIGGER update_team_members_updated_at
  BEFORE UPDATE ON public.team_members
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_news_posts_updated_at
  BEFORE UPDATE ON public.news_posts
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Add location field to projects table
ALTER TABLE public.projects ADD COLUMN location TEXT;

-- Add priority field to projects table for featured ordering
ALTER TABLE public.projects ADD COLUMN priority INTEGER DEFAULT 0;

-- Add notes field to investor_leads for internal admin notes
ALTER TABLE public.investor_leads ADD COLUMN notes TEXT;

-- Create indexes
CREATE INDEX idx_team_members_order ON public.team_members(order_index);
CREATE INDEX idx_team_members_visible ON public.team_members(is_visible);
CREATE INDEX idx_news_posts_slug ON public.news_posts(slug);
CREATE INDEX idx_news_posts_published ON public.news_posts(is_published, published_at DESC);
CREATE INDEX idx_projects_priority ON public.projects(priority DESC, created_at DESC);