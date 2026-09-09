#!/usr/bin/env node
/** Adds missing UI labels (filters, category, view, nav.resources) to all locales. */
import { readFileSync, writeFileSync } from 'node:fs';

const LANGS = ['en', 'ru', 'uk', 'fr', 'ja', 'he', 'ar'];
const data = {
  'projects.filters': ['Filters', 'Фильтры', 'Фільтри', 'Filtres', 'フィルター', 'מסננים', 'عوامل التصفية'],
  'projects.category': ['Category', 'Категория', 'Категорія', 'Catégorie', 'カテゴリー', 'קטגוריה', 'الفئة'],
  'projects.view': ['View', 'Вид', 'Вигляд', 'Affichage', '表示', 'תצוגה', 'العرض'],
  'nav.resources': ['Resources', 'Ресурсы', 'Ресурси', 'Ressources', 'リソース', 'משאבים', 'الموارد'],
};

LANGS.forEach((lang, idx) => {
  for (const path of [`src/i18n/locales/${lang}.json`, `public/locales/${lang}/translation.json`]) {
    const json = JSON.parse(readFileSync(path, 'utf8'));
    for (const [dotted, values] of Object.entries(data)) {
      const [ns, key] = dotted.split('.');
      json[ns] = json[ns] || {};
      json[ns][key] = values[idx];
    }
    writeFileSync(path, JSON.stringify(json, null, 2) + '\n');
  }
  console.log('updated', lang);
});
