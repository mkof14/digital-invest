import { useEffect } from 'react';

const TEAM_ABOUT_CONTENT_VERSION = 'team-about-michael-kofman-bio-2026-06-18-v3';
const TEAM_ABOUT_CACHE_KEY = 'digital-invest:team-about-content-version';
const TEAM_ABOUT_ROUTES = ['/team', '/team-members', '/about'];
const STALE_TEAM_ABOUT_SNIPPETS = [
  'Visionary entrepreneur with 25+ years',
  'CEO/President & Founder',
  'CEO/President of Digital Invest Inc. Over 30 years',
  'experienced technology leader with over 30 years',
];

const clearRouteCache = async () => {
  if (!('caches' in window)) return;

  const cacheNames = await window.caches.keys();
  await Promise.all(
    cacheNames.map(async (cacheName) => {
      const cache = await window.caches.open(cacheName);
      const requests = await cache.keys();

      await Promise.all(
        requests.map((request) => {
          const url = new URL(request.url);
          const isTeamAboutRoute = TEAM_ABOUT_ROUTES.includes(url.pathname);
          const isAppShell = url.pathname === '/' || url.pathname.endsWith('/index.html');

          return isTeamAboutRoute || isAppShell ? cache.delete(request) : Promise.resolve(false);
        })
      );
    })
  );
};

export const useTeamAboutCacheRefresh = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const currentPath = window.location.pathname;
    if (!TEAM_ABOUT_ROUTES.includes(currentPath)) return;

    const storedVersion = window.localStorage.getItem(TEAM_ABOUT_CACHE_KEY);
    const pageStillHasStaleBio = STALE_TEAM_ABOUT_SNIPPETS.some((snippet) =>
      document.body?.innerText.includes(snippet)
    );

    if (storedVersion === TEAM_ABOUT_CONTENT_VERSION && !pageStillHasStaleBio) return;

    window.localStorage.setItem(TEAM_ABOUT_CACHE_KEY, TEAM_ABOUT_CONTENT_VERSION);

    clearRouteCache().finally(() => {
      window.location.reload();
    });
  }, []);
};