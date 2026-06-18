import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import ProjectMediaRoom from './ProjectMediaRoom';

interface Props {
  slug: string;
  /** Optional fallback title if the project row is missing. */
  fallbackTitle?: string;
  /** Optional override for the section heading. */
  heading?: string;
  /** Optional override for the section subheading. */
  subheading?: string;
  className?: string;
}

/**
 * Drop-in Media Room section for the per-project static pages.
 * Looks up the project's id, title and website_url by slug, then
 * renders the shared <ProjectMediaRoom /> with the proper props.
 */
const ProjectMediaRoomBySlug = ({
  slug,
  fallbackTitle,
  heading = 'Media Room',
  subheading = 'Presentations, videos, documents and the official website — all in one place.',
  className = '',
}: Props) => {
  const [meta, setMeta] = useState<{
    id?: string;
    title?: string;
    websiteUrl?: string | null;
  } | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const { data } = await supabase
        .from('projects')
        .select('id, title, website_url')
        .eq('slug', slug)
        .maybeSingle();
      if (cancelled) return;
      setMeta({
        id: data?.id,
        title: data?.title ?? fallbackTitle,
        websiteUrl: data?.website_url ?? null,
      });
    })();
    return () => {
      cancelled = true;
    };
  }, [slug, fallbackTitle]);

  return (
    <section className={`py-16 md:py-20 ${className}`} aria-label="Media Room">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-muted-foreground">{subheading}</p>
        </div>
        <ProjectMediaRoom
          projectSlug={slug}
          projectId={meta?.id}
          websiteUrl={meta?.websiteUrl ?? undefined}
          projectTitle={meta?.title ?? fallbackTitle}
        />
      </div>
    </section>
  );
};

export default ProjectMediaRoomBySlug;
