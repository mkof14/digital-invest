// Easy-to-edit catalog for the Company Presentation hub.
// Add / remove items here — each item shows up in the left sidebar.
//
// Supported types:
//   - "pdf"   → embedded PDF viewer (url should point to a .pdf file or Google Drive preview link)
//   - "video" → embedded video (YouTube/Vimeo embed URL, or direct .mp4)
//   - "link"  → external website opened inside an iframe (fallback: open in new tab)
//   - "image" → single image full-screen
//   - "page"  → internal route on this site (e.g. "/projects/biomath-core")

export type PresentationItemType = "pdf" | "video" | "link" | "image" | "page";

export interface PresentationItem {
  id: string;
  title: string;
  description?: string;
  type: PresentationItemType;
  url: string;
  group?: string; // optional grouping in the sidebar
  thumbnail?: string;
}

export const companyPresentationItems: PresentationItem[] = [
  {
    id: "portfolio-deck",
    title: "Portfolio Snapshot",
    description: "Full portfolio of 20+ projects.",
    type: "page",
    url: "/overview",
    group: "Main Decks",
  },
  {
    id: "biomath-core",
    title: "BioMath Core — Flagship",
    description: "Digital health supercomputer architecture.",
    type: "page",
    url: "/projects/biomath-core",
    group: "Flagship Projects",
  },
  {
    id: "adamas-materials",
    title: "Adamas Materials",
    description: "Diamond / luxury vertical.",
    type: "page",
    url: "/adamas",
    group: "Flagship Projects",
  },
  {
    id: "agron-net",
    title: "AGRON Net",
    description: "Adamas agricultural network vertical.",
    type: "page",
    url: "/adamas/agron-net",
    group: "Flagship Projects",
  },
  {
    id: "agron-work",
    title: "AGRON Work",
    description: "AGRON operational platform.",
    type: "page",
    url: "/adamas/agron-work",
    group: "Flagship Projects",
  },
  {
    id: "team",
    title: "Team & Leadership",
    type: "page",
    url: "/team",
    group: "Company",
  },
  {
    id: "for-investors",
    title: "For Investors",
    type: "page",
    url: "/for-investors",
    group: "Company",
  },
  // Example of a video item — replace URL with a real one:
  // {
  //   id: "intro-video",
  //   title: "Founder Intro (2 min)",
  //   type: "video",
  //   url: "https://www.youtube.com/embed/XXXXXXXX",
  //   group: "Media",
  // },
];
