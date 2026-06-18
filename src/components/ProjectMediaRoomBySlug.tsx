import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import ProjectMediaRoom from './ProjectMediaRoom';
import { Sparkles } from 'lucide-react';

interface Props {
  slug: string;
  fallbackTitle?: string;
  heading?: string;
  subheading?: string;
  className?: string;
}

/**
 * Drop-in Media Room section for the per-project static pages.
 * Visually elevated band — sits high on the page so investors and analysts
 * can reach presentations, PDFs, videos and the official website immediately.
 */
const ProjectMediaRoomBySlug = ({
  slug,
  fallbackTitle,
  heading = 'Media Room',
  subheading = 'Presentations, infographics, videos, documents and the official website — open instantly, no downloads required.',
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
    <section
      id="media-room"
      aria-label="Media Room"
      className={`relative py-14 md:py-20 overflow-hidden border-y border-primary/20 ${className}`}
    >
      {/* Elevated background — gradient band + soft orbs to make the section pop */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
      <div className="absolute -top-24 -left-24 w-[28rem] h-[28rem] rounded-full bg-primary/20 blur-3xl -z-10" aria-hidden />
      <div className="absolute -bottom-24 -right-24 w-[28rem] h-[28rem] rounded-full bg-accent/20 blur-3xl -z-10" aria-hidden />

      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-[0.18em] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            For investors & analysts
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent">
            {heading}
          </h2>
          <p className="text-muted-foreground md:text-lg">{subheading}</p>
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
