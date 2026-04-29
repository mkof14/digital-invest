#!/usr/bin/env node
/**
 * Arabic linguistic validator for `projectBiomathCore.catalog`.
 *
 * Heuristic checks (not a substitute for a native speaker, but catches
 * regressions and common mistakes):
 *
 *   1. Script integrity — only Arabic letters, spaces, digits, punctuation,
 *      Latin brand names (e.g. BioMath Core) and ASCII separators.
 *   2. Whitespace hygiene — no double spaces, no leading/trailing spaces,
 *      no space before punctuation.
 *   3. Diacritic consistency — flags partially-vowelled words (some
 *      diacritics but not full tashkīl) which usually indicates a typo.
 *   4. Definite-article (ال) agreement in noun-adjective pairs — if the
 *      noun is definite, the adjective must also start with ال.
 *   5. Feminine-agreement spot-checks — gendered nouns (صحة، رعاية، عافية،
 *      لياقة، تغذية، حمية) require feminine adjectives (ending in ـة or
 *      a known feminine form). Masculine nouns (طب، نوم، جمال، علاج)
 *      reject feminine adjectives.
 *   6. Expected exact strings — pinned reference values for the 20
 *      category labels + 3 headers (source-of-truth golden snapshot).
 *      Any drift is reported so we can review intentionally vs. typo.
 *   7. Common-typo blacklist — known misspellings (الصحه, الجنسيه,
 *      التغذيه, العامه …) caused by ـه instead of ـة.
 *
 * Usage:
 *   node scripts/validate-arabic-catalog.mjs            # check both roots
 *   node scripts/validate-arabic-catalog.mjs --strict   # also fail on golden drift
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
const STRICT = process.argv.includes('--strict');

const FILES = [
  'public/locales/ar/translation.json',
  'src/i18n/locales/ar.json',
];

// ---------- Reference (golden) snapshot ----------
const GOLDEN = {
  badge: 'كتالوج الخدمات الكامل',
  title: '20 فئة · 200 خدمة',
  desc: 'الخريطة الكاملة لخدمات BioMath Core — تتضمّن كل فئة مجموعة منظَّمة من عشر خدمات متخصّصة تُغذّي النموذج الرقمي الموحَّد لجسم الإنسان.',
  cats: {
    criticalHealth: 'الصحة الحرجة',
    everydayWellness: 'العافية اليومية',
    longevity: 'طول العمر ومكافحة الشيخوخة',
    mentalWellness: 'الصحة النفسية',
    fitness: 'اللياقة والأداء',
    womensHealth: 'صحة المرأة',
    mensHealth: 'صحة الرجل',
    beauty: 'الجمال والعناية بالبشرة',
    nutrition: 'التغذية والحمية',
    sleep: 'النوم والتعافي',
    environmentalHealth: 'الصحة البيئية',
    familyHealth: 'صحة الأسرة',
    preventive: 'الطب الوقائي',
    biohacking: 'تحسين الأداء البيولوجي',
    seniorCare: 'رعاية كبار السن',
    eyeHealth: 'صحة العين',
    digitalTherapeutics: 'العلاجات الرقمية',
    sexualLongevity: 'الصحة الجنسية المستدامة',
    mensSexualHealth: 'الصحة الجنسية للرجل',
    womensSexualHealth: 'الصحة الجنسية للمرأة',
  },
};

// ---------- Linguistic rules ----------

// Common ـه → ـة typos (taa marbūṭa written as plain hāʾ).
const COMMON_TYPOS = [
  'الصحه', 'صحه', 'الجنسيه', 'جنسيه', 'التغذيه', 'تغذيه',
  'العامه', 'عامه', 'الحياه', 'حياه', 'العافيه', 'عافيه',
  'الرقميه', 'رقميه', 'الوقائيه', 'وقائيه', 'البيئيه', 'بيئيه',
  'النفسيه', 'نفسيه', 'الحرجه', 'حرجه', 'اليوميه', 'يوميه',
  'الحميه', 'حميه', 'العنايه', 'عنايه', 'اللياقه', 'لياقه',
  'المستدامه', 'مستدامه', 'الاسره', 'اسره', 'الفئه', 'فئه',
  'الخدمه', 'خدمه', 'مكافحه', 'المكافحه',
  // hamza errors
  'الاداء', 'الانسان', 'الرجال',
];

// Feminine head-nouns: any following adjective must agree (feminine).
const FEMININE_HEADS = [
  'الصحة', 'صحة', 'العافية', 'عافية', 'اللياقة', 'لياقة',
  'التغذية', 'تغذية', 'الحمية', 'حمية', 'الرعاية', 'رعاية',
  'العناية', 'عناية', 'الفئة', 'فئة', 'الخدمة', 'خدمة',
];

// Masculine head-nouns: adjective should NOT carry feminine ـة ending
// (heuristic — only flags clear adjective-position words).
const MASCULINE_HEADS = ['الطب', 'طب', 'النوم', 'نوم', 'الجمال', 'جمال', 'العلاج', 'علاج'];

// Words allowed to appear in Latin script inside the catalog.
const ALLOWED_LATIN_TOKENS = ['BioMath', 'Core'];

// ---------- Helpers ----------

const ARABIC_LETTER = /[\u0600-\u06FF]/;
const ARABIC_DIACRITIC = /[\u064B-\u0652\u0670\u0640]/g; // tashkīl + tatweel
const ALLOWED_CHAR =
  /^[\u0600-\u06FF\u0750-\u077F\s0-9A-Za-z·—\-–.,،;:!؟?()«»"'\/&]+$/;

const RED = (s) => `\x1b[31m${s}\x1b[0m`;
const GREEN = (s) => `\x1b[32m${s}\x1b[0m`;
const YELLOW = (s) => `\x1b[33m${s}\x1b[0m`;
const DIM = (s) => `\x1b[2m${s}\x1b[0m`;
const BOLD = (s) => `\x1b[1m${s}\x1b[0m`;

function stripDiacritics(s) {
  return s.replace(ARABIC_DIACRITIC, '');
}

function tokenize(s) {
  // Split on whitespace and Latin punctuation; keep Arabic words together.
  return s
    .split(/[\s·—\-–.,،;:!؟?()«»"'\/]+/u)
    .filter((t) => t.length > 0);
}

function isFeminineWord(w) {
  // Ends with taa marbūṭa or alif+taa (feminine plural) — heuristic.
  const bare = stripDiacritics(w).replace(/^ال/, '');
  return /ة$/.test(bare) || /ات$/.test(bare);
}

function isAdjectiveCandidate(w) {
  // Skip prepositions/conjunctions and head-nouns; everything else
  // following a head noun is treated as adjective candidate.
  const skip = new Set(['و', 'أو', 'في', 'من', 'إلى', 'على', 'عن', 'مع']);
  const bare = stripDiacritics(w);
  if (skip.has(bare)) return false;
  // Coordination ("و..." = "and X") joins another NOUN, not an adjective —
  // skip to avoid false agreement warnings.
  if (/^و/.test(bare)) return false;
  // Prepositional phrases ("بـ..." / "لـ...") are not adjectives.
  if (/^[بل]ال?/.test(bare) && bare.length > 3) return false;
  return true;
}

// ---------- Per-string checks ----------

function checkString(label, value, problems) {
  const push = (severity, msg) => problems.push({ label, severity, msg, value });

  if (typeof value !== 'string' || !value.trim()) {
    push('error', 'empty or non-string value');
    return;
  }

  // 1. Whitespace hygiene
  if (value !== value.trim()) push('error', 'leading/trailing whitespace');
  if (/\s{2,}/.test(value)) push('error', 'consecutive whitespace');
  if (/\s[،,.;:!؟?]/.test(value)) push('warn', 'space before punctuation');

  // 2. Allowed character set
  if (!ALLOWED_CHAR.test(value)) {
    const bad = [...value].filter((c) => !ALLOWED_CHAR.test(c)).join('');
    push('error', `disallowed characters: "${bad}"`);
  }

  // 3. Latin tokens must be in the allow-list
  const latinTokens = value.match(/[A-Za-z]+/g) || [];
  for (const t of latinTokens) {
    if (!ALLOWED_LATIN_TOKENS.includes(t)) {
      push('warn', `unexpected Latin token "${t}"`);
    }
  }

  // 4. Common typos (ـه instead of ـة, hamza issues)
  const bare = stripDiacritics(value);
  for (const typo of COMMON_TYPOS) {
    // Word-boundary match (Arabic boundaries are tricky; use lookarounds on non-letters)
    const re = new RegExp(`(^|[^\\u0600-\\u06FF])${typo}([^\\u0600-\\u06FF]|$)`);
    if (re.test(bare)) push('error', `common typo "${typo}" (likely ـه → ـة)`);
  }

  // 5. Partial diacritization — if string has 1-2 diacritics it is usually
  //    a leftover. Either none or fully vocalised. We allow up to 4 (used
  //    intentionally in headline copy like منظَّمة، الموحَّد، تتضمّن).
  const diacriticCount = (value.match(ARABIC_DIACRITIC) || []).length;
  const arabicLetterCount = (value.match(/[\u0600-\u06FF]/g) || []).length;
  if (
    arabicLetterCount > 30 &&
    diacriticCount > 0 &&
    diacriticCount < Math.max(2, Math.floor(arabicLetterCount / 40))
  ) {
    // very long strings with only a stray diacritic
    push('warn', `sparse diacritics (${diacriticCount}) in long string — verify intent`);
  }

  // 6. Article + gender agreement (heuristic: scan adjacent token pairs)
  const tokens = tokenize(bare);
  for (let i = 0; i < tokens.length - 1; i++) {
    const a = tokens[i];
    const b = tokens[i + 1];
    if (!ARABIC_LETTER.test(a) || !ARABIC_LETTER.test(b)) continue;
    if (!isAdjectiveCandidate(b)) continue;

    // Definiteness agreement
    const aDef = a.startsWith('ال');
    const bDef = b.startsWith('ال');
    if (FEMININE_HEADS.includes(a) || MASCULINE_HEADS.includes(a)) {
      if (aDef && !bDef) {
        push('warn', `definiteness mismatch: "${a}" (def) followed by "${b}" (indef)`);
      }
    }

    // Gender agreement (only when head noun is recognised)
    if (FEMININE_HEADS.includes(a)) {
      if (!isFeminineWord(b) && !MASCULINE_HEADS.includes(b)) {
        // allow proper nouns / non-adjectives heuristically: only flag when
        // adjective candidate clearly looks like an adjective (ends in ي or و)
        if (/(ي|و)$/.test(stripDiacritics(b).replace(/^ال/, ''))) {
          push('warn', `gender mismatch: feminine "${a}" + likely-masculine "${b}"`);
        }
      }
    }
    if (MASCULINE_HEADS.includes(a)) {
      if (isFeminineWord(b)) {
        push('warn', `gender mismatch: masculine "${a}" + feminine "${b}"`);
      }
    }
  }
}

// ---------- Golden-snapshot diff ----------

function diffGolden(catalog, problems) {
  const checkPair = (path, expected, actual) => {
    if (expected !== actual) {
      problems.push({
        label: path,
        severity: STRICT ? 'error' : 'warn',
        msg: `golden drift\n        expected: ${expected}\n        actual:   ${actual}`,
        value: actual,
      });
    }
  };
  for (const k of ['badge', 'title', 'desc']) checkPair(k, GOLDEN[k], catalog[k]);
  for (const [k, v] of Object.entries(GOLDEN.cats)) {
    checkPair(`cats.${k}`, v, catalog?.cats?.[k]);
  }
}

// ---------- Runner ----------

let totalErrors = 0;
let totalWarnings = 0;

console.log(BOLD('\n🔍 Arabic linguistic validation — projectBiomathCore.catalog\n'));

for (const rel of FILES) {
  const abs = resolve(ROOT, rel);
  console.log(BOLD(`▸ ${rel}`));

  if (!existsSync(abs)) {
    console.log(`  ${RED('✗')} file missing\n`);
    totalErrors++;
    continue;
  }

  let json;
  try {
    json = JSON.parse(readFileSync(abs, 'utf8'));
  } catch (e) {
    console.log(`  ${RED('✗')} invalid JSON: ${e.message}\n`);
    totalErrors++;
    continue;
  }

  const catalog = json?.projectBiomathCore?.catalog;
  if (!catalog) {
    console.log(`  ${RED('✗')} projectBiomathCore.catalog is missing\n`);
    totalErrors++;
    continue;
  }

  const problems = [];

  // Per-string heuristic checks
  for (const k of ['badge', 'title', 'desc']) checkString(k, catalog[k], problems);
  for (const [k, v] of Object.entries(catalog.cats || {})) {
    checkString(`cats.${k}`, v, problems);
  }

  // Golden snapshot
  diffGolden(catalog, problems);

  if (problems.length === 0) {
    console.log(`  ${GREEN('✓')} no issues found (23 strings checked)\n`);
    continue;
  }

  const errs = problems.filter((p) => p.severity === 'error');
  const warns = problems.filter((p) => p.severity === 'warn');
  totalErrors += errs.length;
  totalWarnings += warns.length;

  for (const p of problems) {
    const icon = p.severity === 'error' ? RED('✗') : YELLOW('⚠');
    console.log(`  ${icon} ${BOLD(p.label)}: ${p.msg}`);
    console.log(`      ${DIM(p.value)}`);
  }
  console.log();
}

console.log(BOLD('Summary'));
console.log(`  Files checked:   ${FILES.length}`);
console.log(`  Strings/file:    23 (3 headers + 20 categories)`);
console.log(`  Errors:          ${totalErrors === 0 ? GREEN('0') : RED(String(totalErrors))}`);
console.log(`  Warnings:        ${totalWarnings === 0 ? GREEN('0') : YELLOW(String(totalWarnings))}`);
console.log(`  Strict mode:     ${STRICT ? 'on' : 'off'}\n`);

if (totalErrors > 0) {
  console.log(RED(BOLD('❌ Arabic catalog validation FAILED')));
  process.exit(1);
}
console.log(GREEN(BOLD('✅ Arabic catalog validation passed')));
process.exit(0);
