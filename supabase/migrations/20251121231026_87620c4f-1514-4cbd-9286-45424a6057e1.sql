-- Add website_url field to projects table
ALTER TABLE public.projects 
ADD COLUMN website_url text;