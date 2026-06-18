// Centralized per-route SEO metadata for Digital Invest.
// Used by <RouteSEO/> to populate <title>, meta description,
// canonical, Open Graph and Twitter card tags on every navigation.

export interface RouteSEOData {
  title: string;
  description: string;
  image?: string;
  type?: "website" | "article" | "profile";
  keywords?: string;
}

const SITE_NAME = "Digital Invest Inc.";
const DEFAULT_IMAGE = "https://digital-invest.lovable.app/og-digital-invest.webp";

// Static route → SEO map. Titles ≤60 chars, descriptions ≤160 chars.
export const ROUTE_SEO: Record<string, RouteSEOData> = {
  "/": {
    title: "Digital Invest — Private Multi-Sector Portfolio",
    description:
      "Private portfolio company operating 20+ projects across digital health, biotech, agrotech drones and food production. By invitation, qualified investors only.",
    keywords:
      "digital invest, private portfolio, qualified investors, biotechnology, agrotech, digital health",
  },
  "/projects": {
    title: "Projects Portfolio — Digital Invest",
    description:
      "Explore 20+ active projects across digital health, biotech, agrotech drones, food production and infrastructure. Private portfolio for qualified investors.",
    keywords: "portfolio projects, biotech projects, agrotech, digital health, longevity, AI productivity",
  },
  "/overview": {
    title: "Portfolio Overview — Digital Invest",
    description:
      "Complete overview of Digital Invest's multi-sector portfolio: flagship BioMath, TerraAero, MyDay and 18 more operating projects.",
  },
  "/for-investors": {
    title: "For Investors — Digital Invest",
    description:
      "Information for qualified investors: thesis, process, materials and how to express interest. Non-binding, by invitation only.",
  },
  "/why-digital-invest": {
    title: "Why Digital Invest — Long-Term Operating Thesis",
    description:
      "Why Digital Invest: long-horizon multi-sector thesis across health, robotics, productivity and infrastructure. Operator-led, founder-aligned.",
  },
  "/start-investing": {
    title: "Start the Conversation — Digital Invest",
    description:
      "Begin a private conversation with Digital Invest. Express non-binding interest, request materials, and schedule a consultation.",
  },
  "/how-it-works": {
    title: "How It Works — Digital Invest Process",
    description:
      "How Digital Invest builds, funds and scales its portfolio companies — from concept to operating system. Investor process and timeline.",
  },
  "/schedule": {
    title: "Schedule a Consultation — Digital Invest",
    description:
      "Book a 30-minute private consultation with the Digital Invest team. Available for qualified investors and strategic partners.",
  },
  "/about": {
    title: "About Digital Invest — Operator-Led Portfolio Company",
    description:
      "Digital Invest Inc. — a U.S.-based private portfolio company building operating systems across health, biotech, agrotech and food.",
  },
  "/team": {
    title: "Team — Digital Invest",
    description: "Meet the operators behind Digital Invest and its portfolio of 20+ projects.",
  },
  "/contact": {
    title: "Contact — Digital Invest",
    description:
      "Reach the Digital Invest team. info@digitalinvest.com — for qualified investors, partners and press inquiries.",
  },
  "/news": {
    title: "News & Insights — Digital Invest",
    description:
      "Latest news, portfolio updates and operating insights from Digital Invest and its 20+ active projects.",
  },
  "/investor-application": {
    title: "Investor Application — Digital Invest",
    description: "Apply privately as a qualified investor with Digital Invest. Non-binding expression of interest.",
  },
  "/investor-documents": {
    title: "Investor Documents — Digital Invest",
    description: "Access the document center: investor handbook, presentations and project briefings.",
  },
  "/document-library": {
    title: "Document Library — Digital Invest",
    description: "Investor library: presentations, briefings, infographics and policy documents.",
  },
  "/resources": {
    title: "Resources Library — Digital Invest",
    description: "Curated resources for investors, partners and operators across the Digital Invest portfolio.",
  },
  "/media-kit": {
    title: "Media Kit — Digital Invest",
    description: "Brand assets, logos, executive bios and press materials for Digital Invest Inc.",
  },
  "/careers": {
    title: "Careers — Digital Invest",
    description: "Build the next operating systems in health, agrotech and food. Open roles at Digital Invest.",
  },
  "/partnerships": {
    title: "Partnerships — Digital Invest",
    description: "Strategic, distribution and research partnerships across the Digital Invest portfolio.",
  },
  "/platform": {
    title: "Platform — Digital Invest Operating Layer",
    description: "The shared platform powering 20+ Digital Invest projects: data, models, infrastructure and brand.",
  },
  "/services": {
    title: "Services — Digital Invest",
    description: "Operating services available across the Digital Invest portfolio for partners and investors.",
  },
  "/recognition": {
    title: "Recognition — Digital Invest",
    description: "Awards, recognition and acknowledgements across the Digital Invest portfolio.",
  },
  "/infrastructure": {
    title: "Infrastructure — Digital Invest",
    description: "Shared infrastructure, data and compute layer supporting the Digital Invest portfolio.",
  },
  "/api": {
    title: "API — Digital Invest",
    description: "Programmatic access for Digital Invest partners and integrators.",
  },
  "/glossary": {
    title: "Glossary — Digital Invest",
    description: "Definitions of investor and operating terms used across Digital Invest materials.",
  },
  "/compliance": {
    title: "Compliance — Digital Invest",
    description: "Compliance framework: KYC, AML, accredited-investor verification and disclosures.",
  },
  "/risk-factors": {
    title: "Risk Factors — Digital Invest",
    description: "Material risk factors associated with the Digital Invest private portfolio.",
  },
  "/security": {
    title: "Security — Digital Invest",
    description: "Information security posture and practices at Digital Invest Inc.",
  },
  "/governance": {
    title: "Governance — Digital Invest",
    description: "Corporate governance, board oversight and operating committees at Digital Invest.",
  },
  "/esg": {
    title: "ESG — Digital Invest",
    description: "Environmental, social and governance principles guiding the Digital Invest portfolio.",
  },
  "/values": {
    title: "Values — Digital Invest",
    description: "The values that guide how Digital Invest operates and partners with its portfolio.",
  },
  "/legal-overview": {
    title: "Legal Overview — Digital Invest",
    description: "Legal framework, disclosures and policy documents for Digital Invest Inc.",
  },
  "/legal/terms": {
    title: "Terms of Use — Digital Invest",
    description: "Terms of use governing access to the Digital Invest website and materials.",
  },
  "/legal/privacy": {
    title: "Privacy Policy — Digital Invest",
    description: "How Digital Invest collects, uses and protects personal information.",
  },
  "/legal/risk-disclosure": {
    title: "Risk Disclosure — Digital Invest",
    description: "Risk disclosure statement for prospective qualified investors of Digital Invest Inc.",
  },
  "/privacy": {
    title: "Privacy — Digital Invest",
    description: "Privacy practices and data handling at Digital Invest Inc.",
  },
  "/terms": {
    title: "Terms — Digital Invest",
    description: "Terms applicable to use of the Digital Invest website.",
  },
  "/cookies": {
    title: "Cookies — Digital Invest",
    description: "Cookie policy and tracking preferences for the Digital Invest website.",
  },
  "/demo": {
    title: "Corporate Demo — Digital Invest",
    description: "An Apple-inspired private walkthrough of the Digital Invest operating thesis.",
  },
  "/company-presentation": {
    title: "Company Presentation — Digital Invest",
    description: "Private company presentation: Digital Invest portfolio thesis and operating systems.",
  },
  "/internal-documents": {
    title: "Internal Documents — Digital Invest",
    description: "Internal operating documents for Digital Invest team members.",
  },
};

// Project slug → display name. Used to build per-project SEO without
// touching each /pages/Projects/*.tsx file.
const PROJECT_TITLES: Record<string, string> = {
  "biomathcore": "BioMath Core — Digital Health Foundation",
  "biomath-core": "BioMath Core — Digital Health Foundation",
  "biomathlife": "BioMath Life — Longevity Operating System",
  "terraaero": "TerraAero — Agrotech Drone Platform",
  "digital-invest": "Digital Invest — Portfolio Company",
  "myday": "MyDay — AI Productivity Operating System",
  "1inow": "1inow — Sustainable Environment Platform",
  "itsgoodtoday": "It's Good Today — Food Intelligence",
  "luna-balance": "Luna Balance — Women's Health",
  "stresscore": "StressCore — Stress & Recovery Platform",
  "vitalcore": "VitalCore — Vital Signs Intelligence",
  "bioagecore": "BioAge Core — Biological Age Platform",
  "longevitycore": "LongevityCore — Longevity Protocol Platform",
  "familycore": "FamilyCore — Family Health Platform",
  "seniorcore": "SeniorCore — Senior Health Platform",
  "skincore": "SkinCore — Skin Health Intelligence",
  "mrx-health": "MRX Health — Precision Health",
  "table-served": "Table Served — Food Manufacturing",
  "baseline": "BaseLine — Health Baseline Platform",
  "saven": "SAVEN — Safety & Environment",
  "agron": "AGRON — Autonomous Agriculture",
  "agron-work": "AGRON Work — Autonomous Workforce",
  "t1d": "T1D — Type 1 Diabetes Platform",
};

export function seoForPath(pathname: string): RouteSEOData {
  // Exact match first
  if (ROUTE_SEO[pathname]) return ROUTE_SEO[pathname];

  // Dynamic: /projects/:slug
  if (pathname.startsWith("/projects/")) {
    const slug = pathname.split("/projects/")[1]?.split("/")[0] ?? "";
    const display = PROJECT_TITLES[slug] ?? toTitle(slug);
    return {
      title: `${display} — Digital Invest`,
      description: `${display} — part of the Digital Invest private multi-sector portfolio. Information for qualified investors only.`,
      keywords: `${slug}, digital invest, portfolio project`,
    };
  }

  // Dynamic: /news/:slug
  if (pathname.startsWith("/news/")) {
    const slug = pathname.split("/news/")[1]?.split("/")[0] ?? "";
    return {
      title: `${toTitle(slug)} — Digital Invest News`,
      description: `${toTitle(slug)} — latest insight from Digital Invest. News, portfolio updates and operating commentary.`,
      type: "article",
    };
  }

  // Admin / auth fallback (these should not be indexed but still get a title)
  return {
    title: "Digital Invest — Private Multi-Sector Portfolio",
    description:
      "Private portfolio company operating 20+ projects across digital health, biotech, agrotech and food production.",
  };
}

function toTitle(slug: string): string {
  return slug
    .split("-")
    .map((p) => (p ? p[0].toUpperCase() + p.slice(1) : p))
    .join(" ");
}

export function applySEO(pathname: string) {
  if (typeof document === "undefined") return;
  const data = seoForPath(pathname);
  const url = `https://digital-invest.lovable.app${pathname}`;
  const image = data.image ?? DEFAULT_IMAGE;
  const type = data.type ?? "website";

  document.title = data.title;
  setMeta("description", data.description);
  if (data.keywords) setMeta("keywords", data.keywords);

  // Canonical
  setLink("canonical", url);

  // Open Graph
  setMeta("og:title", data.title, "property");
  setMeta("og:description", data.description, "property");
  setMeta("og:url", url, "property");
  setMeta("og:image", image, "property");
  setMeta("og:type", type, "property");
  setMeta("og:site_name", SITE_NAME, "property");

  // Twitter
  setMeta("twitter:card", "summary_large_image");
  setMeta("twitter:title", data.title);
  setMeta("twitter:description", data.description);
  setMeta("twitter:image", image);
  setMeta("twitter:url", url);
}

function setMeta(name: string, content: string, attr: "name" | "property" = "name") {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}
