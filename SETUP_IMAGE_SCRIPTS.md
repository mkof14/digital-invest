# Настройка скриптов для работы с изображениями

## Добавление npm скриптов

Добавьте следующие скрипты в ваш `package.json` в секцию `"scripts"`:

```json
{
  "scripts": {
    "images:generate": "node scripts/generate-modern-formats.js",
    "images:clean": "node scripts/clean-modern-formats.js",
    "prebuild": "npm run images:generate",
    "build": "tsc && vite build",
    "build:force-images": "npm run images:clean && npm run images:generate && vite build"
  }
}
```

## Описание скриптов

### `npm run images:generate`
Генерирует WebP и AVIF версии всех изображений вручную.

### `npm run images:clean`
Удаляет все сгенерированные WebP и AVIF файлы.

### `npm run prebuild`
Автоматически выполняется перед `npm run build` - генерирует современные форматы изображений.

### `npm run build:force-images`
Очищает старые форматы, генерирует новые и собирает проект.

## Быстрый старт

1. После добавления скриптов выполните первую генерацию:
   ```bash
   npm run images:generate
   ```

2. Для обычной сборки (автоматически генерирует форматы):
   ```bash
   npm run build
   ```

3. Для принудительной регенерации всех форматов:
   ```bash
   npm run build:force-images
   ```

## Настройка Git

### .gitignore (опционально)

Если НЕ хотите коммитить сгенерированные файлы:

```gitignore
# Modern image formats (auto-generated)
**/*.webp
**/*.avif
```

### Рекомендуется

Коммитьте сгенерированные файлы для:
- Более быстрого деплоя
- Консистентности между окружениями
- Отсутствия зависимости от build времени

## CI/CD

Скрипты автоматически запускаются при сборке через Vercel/Netlify благодаря `prebuild` hook.

Убедитесь, что в вашем CI/CD окружении установлен Sharp:
```bash
npm install sharp --save-dev
```
