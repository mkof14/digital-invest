/**
 * ─────────────────────────────────────────────────────────────────────────
 *  Engagement Layer Content Config
 * ─────────────────────────────────────────────────────────────────────────
 *  Edit this file to change what shows in the homepage engagement sections.
 *  No other code needs to be touched. Save the file — the preview reloads.
 *
 *  Sections controlled here:
 *    1. CURRENT_FOCUS  — rotating "Current Focus" block
 *    2. TODAY_WE_BUILD — rotating tagline under hero
 *    3. WEEKLY_INSIGHT — editorial cards above FAQ
 *    4. ACTIVITY_STRIP — moving pills near the footer
 *
 *  Timing is configured in ROTATION_TIMING (milliseconds).
 * ─────────────────────────────────────────────────────────────────────────
 */

export type FocusItem = {
  /** Project name displayed as the large title */
  name: string;
  /** Sub-line, e.g. "Human Data Models" */
  area: string;
  /** Stage/track label, e.g. "Research & Development" */
  track: string;
  /** Short status string, e.g. "Active Development" */
  status: string;
  /**
   * Where the block links to.
   *  - Bare slug "biomath-core" → /projects/biomath-core
   *  - Full path "/adamas"     → used as-is
   */
  slug: string;
};

export const CURRENT_FOCUS: FocusItem[] = [
  { name: "BioMath Core",     area: "Human Data Models",        track: "Research & Development", status: "Active Development", slug: "biomath-core" },
  { name: "SAVEN",            area: "Connected Infrastructure", track: "Engineering",            status: "Active Development", slug: "saven" },
  { name: "AGRON",            area: "Robotic Operations",       track: "Field Deployment",       status: "Active Development", slug: "agron" },
  { name: "Adamas Materials", area: "Advanced Materials",       track: "Operations",             status: "Active Development", slug: "/adamas" },
];

export const TODAY_WE_BUILD: string[] = [
  "Human Data Models",
  "Robotic Operations",
  "Advanced Materials",
  "Future Infrastructure",
  "Connected Systems",
];

export type InsightCard = {
  category: string;
  title: string;
  desc: string;
  href: string;
};

export const WEEKLY_INSIGHT: InsightCard[] = [
  {
    category: "Technology",
    title: "Architecting Human Data Models",
    desc: "How BioMath Core structures longitudinal health data for high-resolution research.",
    href: "/projects/biomath-core",
  },
  {
    category: "Operations",
    title: "Robotic Workforce Patterns",
    desc: "Field learnings from AGRON deployments and what comes next for autonomous workflows.",
    href: "/projects/agron",
  },
  {
    category: "Infrastructure",
    title: "Building Calmly, Building Long",
    desc: "Our approach to infrastructure that compounds across product cycles.",
    href: "/why-digital-invest",
  },
];

export const ACTIVITY_STRIP: string[] = [
  "Design Updates",
  "Research",
  "Development",
  "Testing",
  "Operations",
  "Architecture",
  "Field Work",
  "Engineering",
];

/** All timing values in milliseconds. */
export const ROTATION_TIMING = {
  /** Current Focus: how long each item is shown before swapping. */
  currentFocusInterval: 7000,
  /** Current Focus: fade-out begins this many ms before the swap. */
  currentFocusFadeLead: 500,
  /** Today We Build: how long each line is shown before swapping. */
  todayWeBuildInterval: 4000,
  /** Today We Build: fade-out begins this many ms before the swap. */
  todayWeBuildFadeLead: 400,
};
