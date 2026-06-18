import { Link, useLocation } from 'react-router-dom';
import { Sparkles, Cpu, Map, Newspaper, FileText, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const SECTIONS = [
  { key: '', labelKey: 'projectNav.overview', label: 'Overview', icon: Sparkles },
  { key: 'tech', labelKey: 'projectNav.tech', label: 'Technology', icon: Cpu },
  { key: 'roadmap', labelKey: 'projectNav.roadmap', label: 'Roadmap', icon: Map },
  { key: 'media', labelKey: 'projectNav.media', label: 'Media', icon: Newspaper },
  { key: 'docs', labelKey: 'projectNav.docs', label: 'Documents', icon: FileText },
  { key: 'interest', labelKey: 'projectNav.interest', label: 'Interest', icon: Mail },
];

// Slugs reserved by other routes under /projects (none currently, but keep safe)
const RESERVED_SLUGS = new Set<string>([]);

export default function ProjectSectionNav() {
  const { pathname, search } = useLocation();
  const { t } = useTranslation();

  // Hide on presentation embeds
  if (new URLSearchParams(search).get('presentationEmbed') === '1') return null;

  // Match /projects/<slug> or /projects/<slug>/<section>
  const m = pathname.match(/^\/projects\/([^\/]+)(?:\/([^\/]+))?\/?$/);
  if (!m) return null;
  const slug = m[1];
  if (!slug || RESERVED_SLUGS.has(slug)) return null;
  const current = m[2] || '';

  return (
    <div className="sticky top-[3.25rem] z-40 bg-card/85 backdrop-blur-xl border-b border-border/40 animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="flex gap-1 overflow-x-auto py-2 scrollbar-none">
          {SECTIONS.map((s) => {
            const active = current === s.key;
            const to = s.key ? `/projects/${slug}/${s.key}` : `/projects/${slug}`;
            const Icon = s.icon;
            return (
              <Link
                key={s.key || 'overview'}
                to={to}
                className={`group flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm whitespace-nowrap transition-all duration-200 hover:scale-105 ${
                  active
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/60'
                }`}
              >
                <Icon className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-6" />
                {t(s.labelKey, s.label)}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
