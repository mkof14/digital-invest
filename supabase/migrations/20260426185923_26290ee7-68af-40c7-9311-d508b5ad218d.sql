INSERT INTO public.projects (
  slug, title, short_description, long_description,
  status, category, hero_image_url, is_visible, priority
) VALUES (
  't1d',
  'T1/2D',
  'A practical system that helps people with Type 1 and Type 2 diabetes understand what is happening, respond in time, and manage daily life with less stress.',
  'T1/2D is a unified platform designed to support people living with diabetes in everyday life. Built around one principle — reduce the effort required to understand and manage the condition on a daily basis — it operates continuously and translates incoming data into simple, actionable context. The platform is one system with two clearly separated operational modes: Type 1 (timing, awareness, response) and Type 2 (daily understanding, routine), so children, parents, caregivers and Type 2 adults are not forced into the same experience. Part of the BioMath Life Family.',
  'OPEN',
  'Digital Health',
  '/placeholder.svg',
  true,
  44
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  short_description = EXCLUDED.short_description,
  long_description = EXCLUDED.long_description,
  category = EXCLUDED.category,
  is_visible = EXCLUDED.is_visible,
  priority = EXCLUDED.priority;