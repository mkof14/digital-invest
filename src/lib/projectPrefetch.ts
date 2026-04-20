// Prefetch project page chunks on hover/focus to make navigation feel instant.
// Maps slug -> dynamic import factory that mirrors App.tsx legacy routes.
type Importer = () => Promise<unknown>;

const projectImporters: Record<string, Importer> = {
  'biomath-core':   () => import('@/pages/Projects/BioMathCore'),
  'biomathcore':    () => import('@/pages/Projects/BioMathCore'),
  'biomathlife':    () => import('@/pages/Projects/BioMathLife'),
  'terraaero':      () => import('@/pages/Projects/TerraAero'),
  'digital-invest': () => import('@/pages/Projects/DigitalInvest'),
  'myday':          () => import('@/pages/Projects/MyDay'),
  'itsgoodtoday':   () => import('@/pages/Projects/ItsGoodToday'),
  'luna-balance':   () => import('@/pages/Projects/LunaBalance'),
  'stresscore':     () => import('@/pages/Projects/StressCore'),
  'vitalcore':      () => import('@/pages/Projects/VitalCore'),
  'bioagecore':     () => import('@/pages/Projects/BioAgeCore'),
  'longevitycore':  () => import('@/pages/Projects/LongevityCore'),
  'familycore':     () => import('@/pages/Projects/FamilyCore'),
  'seniorcore':     () => import('@/pages/Projects/SeniorCore'),
  'skincore':       () => import('@/pages/Projects/SkinCore'),
  'mrx-health':     () => import('@/pages/Projects/MRXHealth'),
  'table-served':   () => import('@/pages/Projects/TableServed'),
  'baseline':       () => import('@/pages/Projects/BaseLine'),
  'saven':          () => import('@/pages/Projects/SAVEN'),
  'agron':          () => import('@/pages/Projects/AGRON'),
  'agron-work':     () => import('@/pages/Projects/AGRONWork'),
};

const prefetched = new Set<string>();
let prefetchedDetail = false;

/** Kick off background download of the project page for the given slug. */
export function prefetchProject(slug: string) {
  if (typeof window === 'undefined') return;
  // Avoid prefetching on slow networks / data-saver
  // @ts-expect-error - non-standard but widely supported on mobile
  const conn = (navigator as any).connection;
  if (conn?.saveData) return;
  if (conn?.effectiveType && /^(slow-2g|2g)$/.test(conn.effectiveType)) return;

  // Always warm the generic detail page once
  if (!prefetchedDetail) {
    prefetchedDetail = true;
    import('@/pages/ProjectDetail').catch(() => { prefetchedDetail = false; });
  }

  if (prefetched.has(slug)) return;
  const factory = projectImporters[slug];
  if (!factory) return;
  prefetched.add(slug);
  factory().catch(() => prefetched.delete(slug));
}

/** Convenience handlers for use on Link components. */
export const projectPrefetchHandlers = (slug: string) => ({
  onMouseEnter: () => prefetchProject(slug),
  onFocus:      () => prefetchProject(slug),
  onTouchStart: () => prefetchProject(slug),
});
