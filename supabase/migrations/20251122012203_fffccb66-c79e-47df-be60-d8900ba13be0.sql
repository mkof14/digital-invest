-- Add type, project_id, and category to news_posts table
ALTER TABLE public.news_posts 
ADD COLUMN IF NOT EXISTS type TEXT DEFAULT 'news' CHECK (type IN ('news', 'insight', 'update')),
ADD COLUMN IF NOT EXISTS project_id UUID REFERENCES public.projects(id) ON DELETE SET NULL,
ADD COLUMN IF NOT EXISTS category TEXT;

-- Add index for better query performance
CREATE INDEX IF NOT EXISTS idx_news_posts_type ON public.news_posts(type);
CREATE INDEX IF NOT EXISTS idx_news_posts_project_id ON public.news_posts(project_id);
CREATE INDEX IF NOT EXISTS idx_news_posts_category ON public.news_posts(category);