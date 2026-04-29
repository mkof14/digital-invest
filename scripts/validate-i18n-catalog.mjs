#!/usr/bin/env node
/**
 * i18n validator for `projectBiomathCore.catalog`.
 *
 * Ensures every supported language has the full catalog block with all
 * 20 category keys and the required header strings (badge/title/desc).
 *
 * Usage:
 *   node scripts/validate-i18n-catalog.mjs
 *
 * Exit codes:
 *   0 — all languages valid
 *   1 — one or more languages have missing keys / structural issues
 */

import { readFileSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

const LANGUAGES = ['en', 'ar', 'fr', 'he', 'ja', 'ru', 'uk'];

// Source-of-truth for required category keys (must match BioMathCore.tsx).
const REQUIRED_CATEGORY_KEYS = [
  'criticalHealth',
  'everydayWellness',
  'longevity',
  'mentalWellness',
  'fitness',
  'womensHealth',
  'mensHealth',
  'beauty',
  'nutrition',
  'sleep',
  'environmentalHealth',
  'familyHealth',
  'preventive',
  'biohacking',
  'seniorCare',
  'eyeHealth',
  'digitalTherapeutics',
  'sexualLongevity',
  'mensSexualHealth',
  'womensSexualHealth',
];

const REQUIRED_HEADER_KEYS = ['badge', 'title', 'desc'];

// Both locale roots are loaded at runtime (public/ via HttpBackend, src/ as fallback bundle).
const LOCALE_ROOTS = [
  { label: 'public', tpl: (lang) => `public/locales/${lang}/translation.json` },
  { label: 'src',    tpl: (lang) => `src/i18n/locales/${lang}.json` },
];

const RED = (s) => `\x1b[31m${s}\x1b[0m`;
const GREEN = (s) => `\x1b[32m${s}\x1b[0m`;
const YELLOW = (s) => `\x1b[33m${s}\x1b[0m`;
const BOLD = (s) => `\x1b[1m${s}\x1b[0m`;

let errors = 0;
let warnings = 0;
const report = [];

function isNonEmptyString(v) {
  return typeof v === 'string' && v.trim().length > 0;
}

function validateFile(filePath, label, lang) {
  const abs = resolve(ROOT, filePath);
  if (!existsSync(abs)) {
    report.push(`  ${YELLOW('⚠')}  [${label}] ${filePath} — file missing`);
    warnings++;
    return;
  }

  let json;
  try {
    json = JSON.parse(readFileSync(abs, 'utf8'));
  } catch (e) {
    report.push(`  ${RED('✗')}  [${label}] ${filePath} — invalid JSON: ${e.message}`);
    errors++;
    return;
  }

  const catalog = json?.projectBiomathCore?.catalog;
  if (!catalog || typeof catalog !== 'object') {
    report.push(`  ${RED('✗')}  [${label}] ${filePath} — missing projectBiomathCore.catalog`);
    errors++;
    return;
  }

  const missingHeaders = REQUIRED_HEADER_KEYS.filter((k) => !isNonEmptyString(catalog[k]));
  const cats = catalog.cats || {};
  const missingCats = REQUIRED_CATEGORY_KEYS.filter((k) => !isNonEmptyString(cats[k]));
  const extraCats = Object.keys(cats).filter((k) => !REQUIRED_CATEGORY_KEYS.includes(k));

  if (missingHeaders.length === 0 && missingCats.length === 0 && extraCats.length === 0) {
    report.push(`  ${GREEN('✓')}  [${label}] ${filePath} — 20/20 categories + headers OK`);
    return;
  }

  if (missingHeaders.length) {
    report.push(`  ${RED('✗')}  [${label}] ${filePath} — missing headers: ${missingHeaders.join(', ')}`);
    errors++;
  }
  if (missingCats.length) {
    report.push(`  ${RED('✗')}  [${label}] ${filePath} — missing categories (${missingCats.length}/20): ${missingCats.join(', ')}`);
    errors++;
  }
  if (extraCats.length) {
    report.push(`  ${YELLOW('⚠')}  [${label}] ${filePath} — unknown extra categories: ${extraCats.join(', ')}`);
    warnings++;
  }
}

console.log(BOLD('\n🔍 Validating projectBiomathCore.catalog across 7 languages\n'));

for (const lang of LANGUAGES) {
  console.log(BOLD(`— ${lang.toUpperCase()} —`));
  const localReport = report.length;
  for (const root of LOCALE_ROOTS) {
    validateFile(root.tpl(lang), root.label, lang);
  }
  for (const line of report.slice(localReport)) console.log(line);
  console.log();
}

console.log(BOLD('Summary'));
console.log(`  Languages checked: ${LANGUAGES.length}`);
console.log(`  Required category keys: ${REQUIRED_CATEGORY_KEYS.length}`);
console.log(`  Errors:   ${errors === 0 ? GREEN('0') : RED(String(errors))}`);
console.log(`  Warnings: ${warnings === 0 ? GREEN('0') : YELLOW(String(warnings))}`);
console.log();

if (errors > 0) {
  console.log(RED(BOLD('❌ i18n catalog validation FAILED')));
  process.exit(1);
}
console.log(GREEN(BOLD('✅ i18n catalog validation passed')));
process.exit(0);
