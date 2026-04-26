/**
 * Dev-only verification of meta tags & Open Graph.
 *
 * Two checks:
 *   1) DOM check  — reads what the SPA actually rendered (after updateMetaTags ran).
 *   2) HTML check — fetches the page HTML and parses it, so you can see what the
 *      *server* (CDN) returns to crawlers / social-media scrapers that don't run JS.
 *
 * Logs a clean ✅/❌ table to the console. No-op in production builds.
 */

interface ExpectedTags {
  title?: string | RegExp;
  description?: string | RegExp;
  ogTitle?: string | RegExp;
  ogDescription?: string | RegExp;
  ogImage?: string | RegExp;
}

interface FoundTags {
  title: string | null;
  description: string | null;
  ogTitle: string | null;
  ogDescription: string | null;
  ogImage: string | null;
}

const readFromDocument = (): FoundTags => ({
  title: document.title || null,
  description:
    document.querySelector('meta[name="description"]')?.getAttribute('content') ?? null,
  ogTitle:
    document.querySelector('meta[property="og:title"]')?.getAttribute('content') ?? null,
  ogDescription:
    document.querySelector('meta[property="og:description"]')?.getAttribute('content') ?? null,
  ogImage:
    document.querySelector('meta[property="og:image"]')?.getAttribute('content') ?? null,
});

const readFromHtml = (html: string): FoundTags => {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  return {
    title: doc.querySelector('title')?.textContent ?? null,
    description:
      doc.querySelector('meta[name="description"]')?.getAttribute('content') ?? null,
    ogTitle:
      doc.querySelector('meta[property="og:title"]')?.getAttribute('content') ?? null,
    ogDescription:
      doc.querySelector('meta[property="og:description"]')?.getAttribute('content') ?? null,
    ogImage:
      doc.querySelector('meta[property="og:image"]')?.getAttribute('content') ?? null,
  };
};

const matches = (value: string | null, expected?: string | RegExp): boolean => {
  if (!value) return false;
  if (!expected) return value.length > 0;
  return expected instanceof RegExp ? expected.test(value) : value.includes(expected);
};

const formatRow = (
  key: string,
  value: string | null,
  expected: string | RegExp | undefined,
): { key: string; ok: string; value: string } => {
  const ok = matches(value, expected) ? '✅' : '❌';
  const display = value ? (value.length > 80 ? value.slice(0, 77) + '…' : value) : '(missing)';
  return { key, ok, value: display };
};

const printReport = (label: string, found: FoundTags, expected: ExpectedTags) => {
  const rows = [
    formatRow('title', found.title, expected.title),
    formatRow('description', found.description, expected.description),
    formatRow('og:title', found.ogTitle, expected.ogTitle),
    formatRow('og:description', found.ogDescription, expected.ogDescription),
    formatRow('og:image', found.ogImage, expected.ogImage),
  ];
  const allOk = rows.every((r) => r.ok === '✅');

  // eslint-disable-next-line no-console
  console.groupCollapsed(
    `%c[meta-check] ${label} ${allOk ? '✅ all good' : '❌ issues found'}`,
    `color: ${allOk ? '#16a34a' : '#dc2626'}; font-weight: bold;`,
  );
  // eslint-disable-next-line no-console
  console.table(rows);
  // eslint-disable-next-line no-console
  console.groupEnd();
};

export const verifyMetaTags = async (expected: ExpectedTags): Promise<void> => {
  if (!import.meta.env.DEV) return;

  // 1) What the user (and Google with JS) sees right now in the live DOM.
  printReport('DOM (client-rendered)', readFromDocument(), expected);

  // 2) What the server returns to crawlers / social scrapers (no JS execution).
  try {
    const res = await fetch(window.location.pathname, {
      headers: { Accept: 'text/html' },
      cache: 'no-store',
    });
    if (!res.ok) {
      // eslint-disable-next-line no-console
      console.warn(`[meta-check] HTML fetch failed: HTTP ${res.status}`);
      return;
    }
    const html = await res.text();
    printReport('HTML (server response, what social scrapers see)', readFromHtml(html), expected);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.warn('[meta-check] HTML fetch error:', err);
  }
};
