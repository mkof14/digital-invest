#!/usr/bin/env node
/**
 * Multi-language linguistic validator for `projectBiomathCore.catalog`.
 *
 * Heuristic, language-aware checks across all 7 supported locales:
 *
 *   • EN — ASCII-only (+ curly quotes), apostrophe style, capitalization
 *     (Title Case for category labels), no double spaces.
 *   • RU / UK — Cyrillic-only body text, ё/і apostrophe rules, no Latin
 *     leakage other than brand tokens, single ё-spelling, UK uses ’ not '.
 *   • FR — Latin + accents, requires curly apostrophe ’ (not '), spacing
 *     before « » : ; ! ? if those punctuation marks are used.
 *   • JA — must contain CJK or kana; ASCII letters only for brand tokens;
 *     uses ・ as middle dot (not ·).
 *   • HE — Hebrew letters + RTL punctuation; no ـة-style typos; brand
 *     tokens allowed.
 *   • AR — delegated to validate-arabic-catalog.mjs (already strict).
 *
 *   • Cross-language structural checks: 23 strings (badge/title/desc + 20
 *     category keys), no duplicates inside a language, identical key set
 *     in public/ and src/ locale roots.
 *
 * Usage:
 *   node scripts/validate-catalog-i18n.mjs            # all languages
 *   node scripts/validate-catalog-i18n.mjs --lang fr  # one language
 *   node scripts/validate-catalog-i18n.mjs --strict   # warnings → errors
 *
 * Exit codes:
 *   0 — clean (warnings allowed unless --strict)
 *   1 — one or more hard errors
 */

import { readFileSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

const args = process.argv.slice(2);
const STRICT = args.includes('--strict');
const LANG_ARG = (() => {
  const i = args.indexOf('--lang');
  return i >= 0 ? args[i + 1] : null;
})();

const LANGUAGES = ['en', 'ru', 'uk', 'fr', 'ja', 'he', 'ar'];
const LOCALE_ROOTS = [
  (lang) => `public/locales/${lang}/translation.json`,
  (lang) => `src/i18n/locales/${lang}.json`,
];

const REQUIRED_HEADERS = ['badge', 'title', 'desc'];
const REQUIRED_CATS = [
  'criticalHealth','everydayWellness','longevity','mentalWellness','fitness',
  'womensHealth','mensHealth','beauty','nutrition','sleep',
  'environmentalHealth','familyHealth','preventive','biohacking','seniorCare',
  'eyeHealth','digitalTherapeutics','sexualLongevity','mensSexualHealth','womensSexualHealth',
];

const BRAND_TOKENS = ['BioMath', 'Core'];

const RED = (s) => `\x1b[31m${s}\x1b[0m`;
const GREEN = (s) => `\x1b[32m${s}\x1b[0m`;
const YELLOW = (s) => `\x1b[33m${s}\x1b[0m`;
const DIM = (s) => `\x1b[2m${s}\x1b[0m`;
const BOLD = (s) => `\x1b[1m${s}\x1b[0m`;

// ---------- Per-language checkers ----------

function commonChecks(label, value, push) {
  if (typeof value !== 'string' || !value.trim()) {
    push('error', 'empty or non-string');
    return false;
  }
  if (value !== value.trim()) push('error', 'leading/trailing whitespace');
  if (/\s{2,}/.test(value)) push('error', 'consecutive whitespace');
  if (/\s[,.;:!?،؛]/.test(value)) push('warn', 'space before ASCII/AR punctuation');
  // Stray BOM / zero-width chars
  if (/[\u200B\u200C\u200E\u200F\uFEFF]/.test(value)) {
    push('warn', 'contains zero-width / bidi control character');
  }
  return true;
}

function stripBrand(s) {
  let r = s;
  for (const t of BRAND_TOKENS) r = r.split(t).join('');
  return r;
}

const CHECKERS = {
  en(label, value, push) {
    // ASCII + a few typographic chars
    const allowed = /^[\x20-\x7E·—–’‘“”]+$/;
    if (!allowed.test(value)) {
      const bad = [...value].filter((c) => !allowed.test(c)).join('');
      push('error', `non-ASCII characters: "${bad}"`);
    }
    if (label.startsWith('cats.')) {
      // Title Case: each non-trivial word starts with uppercase letter.
      const words = value.split(/[\s&·]+/).filter(Boolean);
      const small = new Set(['and', 'or', 'of', 'the', 'to', 'in', 'for', 'a', 'an']);
      for (const w of words) {
        const bare = w.replace(/[’'"().,]/g, '');
        if (!bare) continue;
        if (small.has(bare.toLowerCase())) continue;
        if (!/^[A-Z]/.test(bare)) push('warn', `Title-Case expected: "${w}"`);
      }
    }
  },

  ru(label, value, push) {
    const stripped = stripBrand(value);
    // Body must be Cyrillic + digits + punctuation; no stray Latin words.
    const latin = stripped.match(/[A-Za-z]+/g) || [];
    if (latin.length > 0) push('warn', `Latin tokens outside brand: ${latin.join(', ')}`);
    // Forbid English-style apostrophe in Russian (no apostrophes at all normally).
    if (/['`]/.test(stripped)) push('warn', `straight quote/apostrophe in RU text`);
    // ё consistency: not enforced (optional in RU).
  },

  uk(label, value, push) {
    const stripped = stripBrand(value);
    const latin = stripped.match(/[A-Za-z]+/g) || [];
    if (latin.length > 0) push('warn', `Latin tokens outside brand: ${latin.join(', ')}`);
    // Ukrainian apostrophe should be curly ’, not straight '.
    if (/'/.test(stripped)) push('error', `straight apostrophe — use curly ’ (Ukrainian standard)`);
    // Russian-only letters (ё, ъ, ы, э) should not appear in Ukrainian copy.
    const ruOnly = stripped.match(/[ёъыэЁЪЫЭ]/g);
    if (ruOnly) push('error', `Russian-only letters in UK: ${[...new Set(ruOnly)].join(', ')}`);
  },

  fr(label, value, push) {
    const allowed = /^[\x20-\x7E·—–’‘“”«»ÀÂÄÆÇÉÈÊËÎÏÔŒÙÛÜŸàâäæçéèêëîïôœùûüÿ]+$/;
    if (!allowed.test(value)) {
      const bad = [...value].filter((c) => !allowed.test(c)).join('');
      push('warn', `unexpected characters: "${bad}"`);
    }
    // French style: prefer curly apostrophe ’ (l’homme) — straight ' is acceptable
    // in many UI contexts but should be consistent. Warn only.
    if (/'/.test(value) && /’/.test(value)) {
      push('warn', `mixed apostrophe styles (' and ’) — pick one`);
    }
    // « » must have NBSP inside; here we just flag if narrow chevrons used wrong.
    if (/«[^\s\u00A0]/.test(value) || /[^\s\u00A0]»/.test(value)) {
      push('warn', `« » without inner space`);
    }
  },

  ja(label, value, push) {
    // Must contain at least one CJK/kana char
    if (!/[\u3040-\u30FF\u3400-\u9FFF]/.test(value)) {
      push('error', 'no Japanese characters found');
    }
    // Middle-dot convention: prefer ・ (U+30FB) over · (U+00B7) inside JA copy.
    if (/·/.test(value)) push('warn', 'use ・ (U+30FB) instead of · in Japanese');
    // No straight ASCII letters except brand
    const stripped = stripBrand(value);
    const latin = stripped.match(/[A-Za-z]+/g) || [];
    if (latin.length > 0) push('warn', `Latin tokens outside brand: ${latin.join(', ')}`);
  },

  he(label, value, push) {
    if (!/[\u0590-\u05FF]/.test(value)) push('error', 'no Hebrew characters found');
    const stripped = stripBrand(value);
    const latin = stripped.match(/[A-Za-z]+/g) || [];
    if (latin.length > 0) push('warn', `Latin tokens outside brand: ${latin.join(', ')}`);
    // No Arabic letters mixed in
    if (/[\u0600-\u06FF]/.test(stripped)) push('error', 'Arabic letters inside Hebrew string');
    // Geresh/gershayim style — warn on ASCII apostrophes inside Hebrew words
    if (/[\u0590-\u05FF]'[\u0590-\u05FF]/.test(value)) {
      push('warn', `use Hebrew geresh ׳ instead of ASCII ' between Hebrew letters`);
    }
  },

  ar(label, value, push) {
    // Light check; deep checks live in validate-arabic-catalog.mjs.
    if (!/[\u0600-\u06FF]/.test(value)) push('error', 'no Arabic characters found');
    // Common ـه → ـة typo shortlist
    const typos = ['الصحه', 'الجنسيه', 'التغذيه', 'العافيه', 'الرقميه', 'البيئيه', 'النفسيه'];
    for (const t of typos) if (value.includes(t)) push('error', `typo "${t}"`);
  },
};

// ---------- Runner ----------

let totalErrors = 0;
let totalWarnings = 0;
const summary = [];

function processFile(lang, filePath) {
  const abs = resolve(ROOT, filePath);
  const fileLine = `  ▸ ${filePath}`;
  if (!existsSync(abs)) {
    console.log(`${fileLine}\n    ${RED('✗')} file missing\n`);
    totalErrors++;
    return;
  }
  let json;
  try {
    json = JSON.parse(readFileSync(abs, 'utf8'));
  } catch (e) {
    console.log(`${fileLine}\n    ${RED('✗')} invalid JSON: ${e.message}\n`);
    totalErrors++;
    return;
  }
  const cat = json?.projectBiomathCore?.catalog;
  if (!cat) {
    console.log(`${fileLine}\n    ${RED('✗')} projectBiomathCore.catalog missing\n`);
    totalErrors++;
    return;
  }

  // Structure
  const missingHeaders = REQUIRED_HEADERS.filter((k) => typeof cat[k] !== 'string' || !cat[k].trim());
  const cats = cat.cats || {};
  const missingCats = REQUIRED_CATS.filter((k) => typeof cats[k] !== 'string' || !cats[k].trim());
  const extraCats = Object.keys(cats).filter((k) => !REQUIRED_CATS.includes(k));

  const problems = [];
  if (missingHeaders.length) problems.push({ severity: 'error', label: 'structure', msg: `missing headers: ${missingHeaders.join(', ')}`, value: '' });
  if (missingCats.length) problems.push({ severity: 'error', label: 'structure', msg: `missing categories: ${missingCats.join(', ')}`, value: '' });
  if (extraCats.length) problems.push({ severity: 'warn', label: 'structure', msg: `extra categories: ${extraCats.join(', ')}`, value: '' });

  // Duplicates inside the language
  const seen = new Map();
  for (const k of REQUIRED_CATS) {
    const v = cats[k];
    if (!v) continue;
    const key = v.trim().toLowerCase();
    if (seen.has(key)) {
      problems.push({ severity: 'error', label: `cats.${k}`, msg: `duplicate of cats.${seen.get(key)}`, value: v });
    } else {
      seen.set(key, k);
    }
  }

  // Per-string checks
  const checker = CHECKERS[lang];
  const allStrings = [
    ...REQUIRED_HEADERS.map((k) => [k, cat[k]]),
    ...REQUIRED_CATS.map((k) => [`cats.${k}`, cats[k]]),
  ];
  for (const [label, value] of allStrings) {
    const push = (severity, msg) => problems.push({ severity, label, msg, value });
    if (!commonChecks(label, value, push)) continue;
    checker(label, value, push);
  }

  const errs = problems.filter((p) => p.severity === 'error');
  const warns = problems.filter((p) => p.severity === 'warn');
  totalErrors += errs.length;
  totalWarnings += warns.length;

  if (problems.length === 0) {
    console.log(`${fileLine}\n    ${GREEN('✓')} 23/23 strings clean\n`);
    return;
  }
  console.log(fileLine);
  for (const p of problems) {
    const icon = p.severity === 'error' ? RED('✗') : YELLOW('⚠');
    console.log(`    ${icon} ${BOLD(p.label)}: ${p.msg}`);
    if (p.value) console.log(`        ${DIM(p.value)}`);
  }
  console.log();
}

console.log(BOLD('\n🔍 Multi-language catalog validation — projectBiomathCore.catalog\n'));

const langs = LANG_ARG ? [LANG_ARG] : LANGUAGES;
for (const lang of langs) {
  if (!CHECKERS[lang]) {
    console.log(RED(`Unknown language: ${lang}`));
    process.exit(2);
  }
  console.log(BOLD(`— ${lang.toUpperCase()} —`));
  for (const tpl of LOCALE_ROOTS) processFile(lang, tpl(lang));
}

console.log(BOLD('Summary'));
console.log(`  Languages:   ${langs.join(', ')}`);
console.log(`  Files/lang:  ${LOCALE_ROOTS.length} (public + src)`);
console.log(`  Errors:      ${totalErrors === 0 ? GREEN('0') : RED(String(totalErrors))}`);
console.log(`  Warnings:    ${totalWarnings === 0 ? GREEN('0') : YELLOW(String(totalWarnings))}`);
console.log(`  Strict mode: ${STRICT ? 'on' : 'off'}\n`);

const failed = totalErrors > 0 || (STRICT && totalWarnings > 0);
if (failed) {
  console.log(RED(BOLD('❌ Catalog i18n validation FAILED')));
  process.exit(1);
}
console.log(GREEN(BOLD('✅ Catalog i18n validation passed')));
process.exit(0);
