#!/usr/bin/env node
/**
 * Automatic contrast scanner for the design system.
 *
 * Parses `src/index.css`, extracts CSS custom properties for both the
 * default (dark) theme (`:root { ... }`) and the light theme
 * (`:root.light { ... }`), then validates WCAG 2.1 contrast ratios for
 * every meaningful foreground/background token pair.
 *
 * Run:
 *   node scripts/contrast-check.mjs
 *   node scripts/contrast-check.mjs --strict       # warnings → errors
 *   node scripts/contrast-check.mjs --auto-fix     # suggest nearest AA-safe color
 *                                                  # for --accent and --brand-*-strong
 *   node scripts/contrast-check.mjs --auto-fix --write
 *                                                  # apply suggestions to src/index.css
 *   node scripts/contrast-check.mjs --interactive  # ask Y/N per candidate and write
 *                                                  # accepted ones; print before/after
 *
 * Exits with code 1 on any AA failure (ratio < 4.5 for normal text,
 * < 3 for large text / UI components).
 */

import fs from "node:fs";
import path from "node:path";
import url from "node:url";
import readline from "node:readline";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const cssPath = path.resolve(__dirname, "..", "src", "index.css");
const css = fs.readFileSync(cssPath, "utf8");

const STRICT = process.argv.includes("--strict");
const INTERACTIVE = process.argv.includes("--interactive") || process.argv.includes("-i");
const AUTO_FIX =
  process.argv.includes("--auto-fix") ||
  process.argv.includes("--fix") ||
  INTERACTIVE;
const WRITE = process.argv.includes("--write") || INTERACTIVE;

function prompt(question) {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer.trim().toLowerCase());
    });
  });
}

// Tokens we are allowed to nudge to satisfy contrast. For each pair, we try
// to fix the foreground first, then the background. Only tokens whose name
// matches one of these patterns are considered fixable.
const FIXABLE = new Set(["accent", "brand-gold-strong", "brand-blue-strong"]);

// ---------- color math ----------
const clamp = (n, lo, hi) => Math.max(lo, Math.min(hi, n));

function hslToRgb(h, s, l) {
  s /= 100;
  l /= 100;
  const k = (n) => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = (n) =>
    l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
  return [f(0), f(8), f(4)].map((v) => Math.round(v * 255));
}

function hexToRgb(hex) {
  const m = hex.replace("#", "");
  const v =
    m.length === 3
      ? m.split("").map((c) => parseInt(c + c, 16))
      : [0, 2, 4].map((i) => parseInt(m.slice(i, i + 2), 16));
  return v;
}

function relLuminance([r, g, b]) {
  const f = (c) => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  };
  return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
}

function contrast(rgb1, rgb2) {
  const L1 = relLuminance(rgb1);
  const L2 = relLuminance(rgb2);
  const [hi, lo] = L1 > L2 ? [L1, L2] : [L2, L1];
  return (hi + 0.05) / (lo + 0.05);
}

function rgbToHsl([r, g, b]) {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  const l = (max + min) / 2;
  let h = 0, s = 0;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h *= 60;
  }
  return [h, s * 100, l * 100];
}

function hslToHex(h, s, l) {
  const [r, g, b] = hslToRgb(h, s, l);
  const to = (n) => n.toString(16).padStart(2, "0").toUpperCase();
  return `#${to(r)}${to(g)}${to(b)}`;
}

// Parse a token value into { rgb, hsl, format } where format is 'hex' or 'hsl-triplet'.
function parseColor(value) {
  if (!value) return null;
  const v = value.trim();
  if (v.startsWith("#")) {
    const rgb = hexToRgb(v);
    return { rgb, hsl: rgbToHsl(rgb), format: "hex" };
  }
  const parts = v.split(/\s+/);
  if (parts.length >= 3) {
    const h = parseFloat(parts[0]);
    const s = parseFloat(parts[1]);
    const l = parseFloat(parts[2]);
    if (![h, s, l].some(Number.isNaN)) {
      return { rgb: hslToRgb(h, s, l), hsl: [h, s, l], format: "hsl-triplet" };
    }
  }
  return null;
}

function formatColor(hsl, format) {
  const [h, s, l] = hsl;
  if (format === "hex") return hslToHex(h, s, l);
  return `${+h.toFixed(0)} ${+s.toFixed(0)}% ${+l.toFixed(0)}%`;
}

/**
 * Walk lightness ±1% from the original, keeping hue & saturation, and return
 * the nearest HSL that achieves `targetRatio` against `otherRgb`. Returns
 * null if no value in [0, 100] satisfies the contraint.
 */
function nearestPassingHsl(origHsl, otherRgb, targetRatio) {
  const [h, s, l0] = origHsl;
  for (let delta = 1; delta <= 100; delta++) {
    for (const sign of [-1, 1]) {
      const l = l0 + sign * delta;
      if (l < 0 || l > 100) continue;
      const rgb = hslToRgb(h, s, l);
      if (contrast(rgb, otherRgb) >= targetRatio) return [h, s, l];
    }
  }
  return null;
}

// ---------- CSS extraction ----------
function extractBlock(selector) {
  // matches `selector { ... }` (first occurrence)
  const re = new RegExp(
    selector.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "\\s*\\{([^}]*)\\}",
    "m",
  );
  const m = css.match(re);
  return m ? m[1] : "";
}

function parseTokens(block) {
  const tokens = {};
  const re = /--([a-z0-9-]+)\s*:\s*([^;]+);/gi;
  let m;
  while ((m = re.exec(block))) {
    tokens[m[1]] = m[2].trim();
  }
  return tokens;
}

function tokenToRgb(value) {
  if (!value) return null;
  const v = value.trim();
  if (v.startsWith("#")) return hexToRgb(v);
  // HSL triplet "H S% L%"
  const parts = v.split(/\s+/);
  if (parts.length >= 3) {
    const h = parseFloat(parts[0]);
    const s = parseFloat(parts[1]);
    const l = parseFloat(parts[2]);
    if (!Number.isNaN(h) && !Number.isNaN(s) && !Number.isNaN(l)) {
      return hslToRgb(h, clamp(s, 0, 100), clamp(l, 0, 100));
    }
  }
  return null;
}

// ---------- token pairs to check ----------
// kind: 'text' (AA >=4.5, AAA >=7) | 'ui' (AA >=3 for large text / non-text)
const PAIRS = [
  ["foreground", "background", "text", "Body text on background"],
  ["card-foreground", "card", "text", "Card text"],
  ["popover-foreground", "popover", "text", "Popover text"],
  ["primary-foreground", "primary", "text", "Primary button"],
  ["secondary-foreground", "secondary", "text", "Secondary button"],
  ["accent-foreground", "accent", "text", "Accent surface"],
  ["destructive-foreground", "destructive", "text", "Destructive button"],
  ["muted-foreground", "background", "text", "Muted text on bg"],
  ["muted-foreground", "muted", "text", "Muted text on muted bg"],
  // Note: --border is intentionally low-contrast for subtle dividers.
  // Add ["border", "background", "ui", ...] here if you need to enforce it
  // around interactive controls (WCAG 1.4.11 requires ≥3:1 there).
];

// brand utility colors (hex). They are used as text on the page background.
const BRAND_PAIRS = [
  ["brand-gold", "background", "text", "Brand gold text (link)"],
  ["brand-blue", "background", "text", "Brand blue text (link)"],
  ["brand-gold", "card", "text", "Brand gold text on card"],
  ["brand-blue", "card", "text", "Brand blue text on card"],
  ["brand-gold-strong", "background", "text", "Brand gold-strong text"],
  ["brand-blue-strong", "background", "text", "Brand blue-strong text"],
];

// Literal hardcoded color pairs used by .btn-brand-* and link hovers.
// These are theme-independent (declared inline in CSS), so we check them once.
// kind: 'text' (AA ≥4.5) | 'ui' (AA ≥3 — non-text contrast)
const LITERAL_PAIRS = [
  // Solid brand buttons
  ["#0F172A", "#D4A24C", "text", ".btn-brand-gold idle (#0F172A on #D4A24C)"],
  ["#0F172A", "#E8C070", "text", ".btn-brand-gold hover mid stop"],
  ["#FFFFFF", "#1A66D0", "text", ".btn-brand-blue idle (#fff on #1A66D0)"],
  ["#FFFFFF", "#1559C2", "text", ".btn-brand-blue hover mid stop"],
  // Outline buttons — dark theme bg (#0F172A-ish)
  ["#D4A24C", "#0F172A", "text", ".btn-brand-outline-gold on dark"],
  ["#E8C070", "#0F172A", "text", ".btn-brand-outline-gold:hover on dark"],
  ["#4A95F2", "#0F172A", "text", ".btn-brand-outline-blue on dark"],
  ["#7AB8F5", "#0F172A", "text", ".btn-brand-outline-blue:hover on dark"],
];

function check(themeName, tokens) {
  const results = [];
  for (const [fgKey, bgKey, kind, label] of [...PAIRS, ...BRAND_PAIRS]) {
    const fg = tokenToRgb(tokens[fgKey]);
    const bg = tokenToRgb(tokens[bgKey]);
    if (!fg || !bg) {
      results.push({ themeName, label, fgKey, bgKey, missing: true });
      continue;
    }
    const ratio = contrast(fg, bg);
    const minAA = kind === "text" ? 4.5 : 3;
    const status =
      ratio >= minAA ? "pass" : ratio >= 3 && kind === "text" ? "warn" : "fail";
    results.push({
      themeName,
      label,
      fgKey,
      bgKey,
      ratio: +ratio.toFixed(2),
      kind,
      minAA,
      status,
    });
  }
  return results;
}

function checkLiterals() {
  const results = [];
  for (const [fgHex, bgHex, kind, label] of LITERAL_PAIRS) {
    const fg = hexToRgb(fgHex);
    const bg = hexToRgb(bgHex);
    const ratio = contrast(fg, bg);
    const minAA = kind === "text" ? 4.5 : 3;
    const status =
      ratio >= minAA ? "pass" : ratio >= 3 && kind === "text" ? "warn" : "fail";
    results.push({
      themeName: "lit  ",
      label,
      fgKey: fgHex,
      bgKey: bgHex,
      ratio: +ratio.toFixed(2),
      kind,
      minAA,
      status,
    });
  }
  return results;
}

// brand tokens live in :root / :root.light too, but the CSS uses both
// triplet and hex values. We merge both blocks per theme.
// `:root` block appears twice in the file (general + brand). Merge extras.
const allRoot = [...css.matchAll(/:root\s*\{([^}]*)\}/g)]
  .map((m) => parseTokens(m[1]))
  .reduce((acc, t) => Object.assign(acc, t), {});
const allLight = [...css.matchAll(/:root\.light\s*\{([^}]*)\}/g)]
  .map((m) => parseTokens(m[1]))
  .reduce((acc, t) => Object.assign(acc, t), {});

const darkAll = { ...allRoot };
const lightAll = { ...allRoot, ...allLight }; // light inherits, overrides

const themeTokens = { dark: darkAll, light: lightAll };

const results = [
  ...check("dark", darkAll),
  ...check("light", lightAll),
  ...checkLiterals(),
];

// ---------- report ----------
const RED = "\x1b[31m";
const YEL = "\x1b[33m";
const GRN = "\x1b[32m";
const DIM = "\x1b[2m";
const RST = "\x1b[0m";

let fails = 0;
let warns = 0;
console.log("Design-system contrast scan\n");
for (const r of results) {
  if (r.missing) {
    console.log(
      `${YEL}? ${r.themeName.padEnd(5)} ${r.label} — missing token (${r.fgKey} / ${r.bgKey})${RST}`,
    );
    continue;
  }
  const tag =
    r.status === "pass"
      ? `${GRN}PASS${RST}`
      : r.status === "warn"
        ? `${YEL}WARN${RST}`
        : `${RED}FAIL${RST}`;
  if (r.status === "fail") fails++;
  if (r.status === "warn") warns++;
  console.log(
    `${tag} ${r.themeName.padEnd(5)} ${r.ratio.toFixed(2).padStart(5)}:1  ${r.label} ${DIM}(${r.fgKey} on ${r.bgKey}, need ≥${r.minAA})${RST}`,
  );
}

console.log(
  `\n${fails} fail · ${warns} warn · ${results.length - fails - warns} pass`,
);

// ---------- auto-fix ----------
async function runAutoFix() {
  console.log("\nAuto-fix suggestions (--accent and brand-*-strong):\n");

  const proposals = new Map();

  for (const r of results) {
    if ((r.status !== "fail" && r.status !== "warn") || r.missing) continue;
    if (r.themeName === "lit  ") continue;

    const tokens = themeTokens[r.themeName];
    let fixToken = null;
    let pairedKey = null;
    if (FIXABLE.has(r.fgKey)) {
      fixToken = r.fgKey;
      pairedKey = r.bgKey;
    } else if (FIXABLE.has(r.bgKey)) {
      fixToken = r.bgKey;
      pairedKey = r.fgKey;
    } else {
      console.log(
        `${YEL}skip${RST} ${r.themeName} ${r.label} — no fixable token (${r.fgKey}/${r.bgKey})`,
      );
      continue;
    }

    const origRaw = tokens[fixToken];
    const orig = parseColor(origRaw);
    const paired = parseColor(tokens[pairedKey]);
    if (!orig || !paired) continue;

    const target = r.minAA;
    const suggestion = nearestPassingHsl(orig.hsl, paired.rgb, target);
    if (!suggestion) {
      console.log(
        `${RED}× ${RST}${r.themeName} --${fixToken}: no value in HSL lightness range reaches ${target}:1 vs --${pairedKey}`,
      );
      continue;
    }
    const newValue = formatColor(suggestion, orig.format);
    const newRatio = contrast(hslToRgb(...suggestion), paired.rgb);
    const oldRatio = contrast(orig.rgb, paired.rgb);

    const key = `${r.themeName}:${fixToken}`;
    const prev = proposals.get(key);
    if (!prev || newRatio > prev.ratio) {
      proposals.set(key, {
        theme: r.themeName,
        token: fixToken,
        oldValue: origRaw,
        newValue,
        format: orig.format,
        ratio: newRatio,
        oldRatio,
        against: pairedKey,
        label: r.label,
      });
    }
  }

  if (proposals.size === 0) {
    console.log("Nothing to fix among --accent / --brand-*-strong. ✨");
    return;
  }

  // Decide which proposals to apply.
  const accepted = [];
  const rejected = [];

  if (INTERACTIVE) {
    console.log(`Found ${proposals.size} candidate(s). Review one by one:\n`);
    for (const p of proposals.values()) {
      console.log(
        `${DIM}${p.theme}${RST} ${p.label}\n` +
          `  --${p.token}: ${DIM}${p.oldValue}${RST} ${RED}(${p.oldRatio.toFixed(2)}:1)${RST}` +
          ` → ${p.newValue} ${GRN}(${p.ratio.toFixed(2)}:1)${RST} vs --${p.against}`,
      );
      const ans = await prompt("  apply? [y/N/q] ");
      if (ans === "q") {
        console.log("  aborted by user.");
        break;
      }
      if (ans === "y" || ans === "yes") accepted.push(p);
      else rejected.push(p);
    }
  } else {
    for (const p of proposals.values()) {
      console.log(
        `${GRN}fix${RST} ${p.theme.padEnd(5)} --${p.token}: ${DIM}${p.oldValue}${RST} → ${p.newValue}  ${DIM}(${p.ratio.toFixed(2)}:1 vs --${p.against})${RST}`,
      );
      accepted.push(p);
    }
  }

  if (WRITE && accepted.length > 0) {
    let next = css;
    let applied = 0;
    for (const p of accepted) {
      const blockRe =
        p.theme === "light"
          ? /:root\.light\s*\{([^}]*)\}/g
          : /:root(?!\.)\s*\{([^}]*)\}/g;
      const declRe = new RegExp(
        `(--${p.token}\\s*:\\s*)${p.oldValue.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}(\\s*;)`,
      );
      next = next.replace(blockRe, (full, body) => {
        if (!declRe.test(body)) return full;
        const updated = body.replace(declRe, `$1${p.newValue}$2`);
        if (updated !== body) applied++;
        return full.replace(body, updated);
      });
    }
    if (applied > 0) {
      fs.writeFileSync(cssPath, next);
      console.log(`\n${GRN}wrote${RST} ${applied} replacement(s) to src/index.css`);
    } else {
      console.log(`\n${YEL}note${RST} no replacements written (values not found verbatim)`);
    }
  } else if (!WRITE) {
    console.log(
      `\n${DIM}re-run with --write to apply these changes to src/index.css${RST}`,
    );
  }

  // Before/after summary
  console.log("\n┌─ Summary ──────────────────────────────────────────────");
  console.log(`│ candidates: ${proposals.size}`);
  console.log(`│ accepted:   ${accepted.length}`);
  console.log(`│ rejected:   ${rejected.length}`);
  if (accepted.length > 0) {
    console.log("│");
    console.log("│ before → after:");
    for (const p of accepted) {
      console.log(
        `│   ${p.theme.padEnd(5)} --${p.token}:`,
      );
      console.log(
        `│     ${DIM}was${RST} ${p.oldValue}  ${RED}${p.oldRatio.toFixed(2)}:1${RST}`,
      );
      console.log(
        `│     ${DIM}now${RST} ${p.newValue}  ${GRN}${p.ratio.toFixed(2)}:1${RST}  vs --${p.against}`,
      );
    }
  }
  if (rejected.length > 0) {
    console.log("│");
    console.log("│ skipped (kept original):");
    for (const p of rejected) {
      console.log(
        `│   ${p.theme.padEnd(5)} --${p.token}  ${DIM}(${p.oldValue}, ${p.oldRatio.toFixed(2)}:1)${RST}`,
      );
    }
  }
  console.log("└────────────────────────────────────────────────────────");
}

if (AUTO_FIX) {
  await runAutoFix();
}

if (fails > 0 || (STRICT && warns > 0)) {
  process.exit(1);
}
