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
  'luna-balance':   () => import('@/pages/Projects/LunaBalance'),
  'health-intelligence-suite': () => import('@/pages/Projects/HealthIntelligenceSuite'),
  'longevitycore':  () => import('@/pages/Projects/LongevityCore'),
  'familycore':     () => import('@/pages/Projects/FamilyCore'),
  'mrx-health':     () => import('@/pages/Projects/MRXHealth'),
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
  const conn = (navigator as unknown as { connection?: { saveData?: boolean; effectiveType?: string } }).connection;
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
