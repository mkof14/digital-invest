# GOOGLE TAG MANAGER - COMPLETE SETUP GUIDE
**Digital Invest Inc.**  
**Last Updated:** November 22, 2025

---

## 📦 ЧТО ТАКОЕ GOOGLE TAG MANAGER (GTM)?

Google Tag Manager — это бесплатный инструмент, который позволяет управлять всеми маркетинговыми тегами (Google Analytics, Facebook Pixel, LinkedIn Insight Tag, Microsoft Clarity, и др.) через один интерфейс **без изменения кода сайта**.

### Преимущества GTM:
- ✅ Управление тегами без программиста
- ✅ Один раз установить, затем только настройки
- ✅ Легко добавлять новые инструменты аналитики
- ✅ Версионирование и откат изменений
- ✅ Расширенное отслеживание событий
- ✅ A/B тестирование и маркетинговые пиксели

---

## 🚀 ШАГ 1: СОЗДАНИЕ GTM АККАУНТА

### 1. Зарегистрироваться в GTM
1. Перейти на https://tagmanager.google.com
2. Нажать **"Create Account"**
3. Заполнить форму:
   - **Account Name:** Digital Invest Inc.
   - **Country:** United States
   - Нажать **Continue**

### 2. Создать контейнер
1. **Container name:** Digital Invest Website
2. **Target platform:** Web
3. Нажать **Create**
4. Принять Terms of Service

### 3. Получить код установки
После создания контейнера GTM покажет два блока кода:

**Код 1 (для `<head>`):**
```html
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXXX');</script>
<!-- End Google Tag Manager -->
```

**Код 2 (для `<body>`):**
```html
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
```

⚠️ **ВАЖНО:** Замените `GTM-XXXXXXX` на ваш реальный Container ID!

---

## 🔧 ШАГ 2: УСТАНОВКА КОДА НА САЙТ

### Где добавить код GTM:

**Файл: `index.html`**

1. **Код 1** — добавить сразу после открывающего тега `<head>`:
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    
    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-XXXXXXX');</script>
    <!-- End Google Tag Manager -->
    
    <link rel="icon" href="/favicon.png" type="image/png" />
    <!-- остальные теги -->
  </head>
```

2. **Код 2** — добавить сразу после открывающего тега `<body>`:
```html
  <body>
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
    
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
```

### Проверка установки:
1. Открыть сайт в браузере
2. Открыть Developer Tools (F12)
3. Во вкладке **Console** ввести: `dataLayer`
4. Если видите массив с данными — GTM установлен правильно ✅

---

## 📊 ШАГ 3: НАСТРОЙКА GOOGLE ANALYTICS 4 ЧЕРЕЗ GTM

### Зачем GA4 через GTM?
- Централизованное управление
- Легче добавлять кастомные события
- Не нужно менять код при изменениях

### Настройка GA4:

1. **Получить Measurement ID:**
   - Зайти в Google Analytics 4
   - Admin → Data Streams → Выбрать свой stream
   - Скопировать Measurement ID (формат: `G-XXXXXXXXXX`)

2. **Создать тег GA4 в GTM:**
   - В GTM нажать **Tags** → **New**
   - **Tag Configuration** → выбрать **Google Analytics: GA4 Configuration**
   - **Measurement ID:** вставить `G-XXXXXXXXXX`
   - **Triggering** → выбрать **All Pages**
   - Нажать **Save**
   - Назвать тег: "GA4 - Configuration"

3. **Опубликовать контейнер:**
   - Нажать **Submit** (вверху справа)
   - **Version Name:** Initial GA4 Setup
   - **Version Description:** Added Google Analytics 4
   - Нажать **Publish**

4. **Проверить работу:**
   - Открыть сайт
   - В GA4 перейти в **Reports** → **Realtime**
   - Должны увидеть себя в реальном времени ✅

---

## 🎯 ШАГ 4: ОТСЛЕЖИВАНИЕ СОБЫТИЙ (EVENTS)

### Важные события для Digital Invest:

#### 1. **Investor Lead Submission** (Форма инвестора)

**Создать Tag:**
- **Tag Type:** Google Analytics: GA4 Event
- **Configuration Tag:** GA4 - Configuration
- **Event Name:** `investor_lead`
- **Event Parameters:**
  - `project_name` → `{{DLV - project_name}}`
  - `amount_range` → `{{DLV - amount_range}}`
  - `source` → `{{DLV - source}}`

**Создать Trigger:**
- **Trigger Type:** Custom Event
- **Event name:** `investor_lead_submitted`
- **This trigger fires on:** All Custom Events

**В коде формы добавить:**
```javascript
// После успешной отправки формы
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: 'investor_lead_submitted',
  project_name: projectName,
  amount_range: amountRange,
  source: 'project_page'
});
```

---

#### 2. **Consultation Booking** (Запись на консультацию)

**Создать Tag:**
- **Tag Type:** Google Analytics: GA4 Event
- **Event Name:** `consultation_booking`
- **Event Parameters:**
  - `project_name` → `{{DLV - project_name}}`
  - `booking_date` → `{{DLV - booking_date}}`

**Trigger:**
- **Trigger Type:** Custom Event
- **Event name:** `consultation_booked`

**В коде добавить:**
```javascript
window.dataLayer.push({
  event: 'consultation_booked',
  project_name: projectName,
  booking_date: selectedDate
});
```

---

#### 3. **PDF Download** (Скачивание Investor Brief)

**Создать Tag:**
- **Tag Type:** Google Analytics: GA4 Event
- **Event Name:** `pdf_download`
- **Event Parameters:**
  - `file_name` → `{{DLV - file_name}}`
  - `project_slug` → `{{DLV - project_slug}}`

**Trigger:**
- **Trigger Type:** Custom Event
- **Event name:** `pdf_downloaded`

**В коде добавить:**
```javascript
window.dataLayer.push({
  event: 'pdf_downloaded',
  file_name: `${slug}-investor-brief.pdf`,
  project_slug: slug
});
```

---

#### 4. **Investor Handbook Download**

**Создать Tag:**
- **Tag Type:** Google Analytics: GA4 Event
- **Event Name:** `handbook_download`
- **Event Parameters:**
  - `email` → `{{DLV - user_email}}`

**Trigger:**
- **Trigger Type:** Custom Event
- **Event name:** `handbook_downloaded`

**В коде добавить:**
```javascript
window.dataLayer.push({
  event: 'handbook_downloaded',
  user_email: email
});
```

---

## 🎨 ШАГ 5: ДОБАВЛЕНИЕ MICROSOFT CLARITY

### Настройка Clarity через GTM:

1. **Получить Clarity Project ID:**
   - Зайти на https://clarity.microsoft.com
   - Создать проект
   - Скопировать Project ID (формат: буквы и цифры, например `abc123def`)

2. **Создать Custom HTML Tag в GTM:**
   - **Tags** → **New**
   - **Tag Configuration** → **Custom HTML**
   - Вставить код:
   ```html
   <script type="text/javascript">
     (function(c,l,a,r,i,t,y){
       c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
       t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
       y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
     })(window, document, "clarity", "script", "YOUR_PROJECT_ID");
   </script>
   ```
   - Заменить `YOUR_PROJECT_ID` на реальный ID
   - **Triggering** → **All Pages**
   - **Save** → назвать "Microsoft Clarity"

3. **Опубликовать:**
   - **Submit** → **Publish**

4. **Проверить:**
   - Открыть сайт
   - В Clarity Dashboard должны появиться сессии в реальном времени

---

## 📱 ШАГ 6: ДОБАВЛЕНИЕ FACEBOOK PIXEL (опционально)

### Если планируете Facebook Ads:

1. **Получить Facebook Pixel ID:**
   - Facebook Business Manager → Events Manager
   - Создать Pixel
   - Скопировать Pixel ID

2. **Создать Custom HTML Tag:**
   - **Tag Configuration** → **Custom HTML**
   - Вставить код Facebook Pixel (предоставит Facebook)
   - **Triggering** → **All Pages**
   - **Save** → "Facebook Pixel"

3. **Настроить события:**
   - Lead (для форм инвестора)
   - ViewContent (просмотр проекта)
   - InitiateCheckout (клик "Submit Interest")

---

## 🔍 ШАГ 7: ТЕСТИРОВАНИЕ И ОТЛАДКА

### GTM Preview Mode:

1. В GTM нажать **Preview** (вверху справа)
2. Ввести URL сайта: `https://digitalinvest.com`
3. Нажать **Connect**
4. Откроется окно Tag Assistant
5. Тестировать:
   - Переходы по страницам
   - Клики на кнопки
   - Отправку форм
6. Проверить, что все теги срабатывают ✅

### Проверка в GA4 Real-Time:
1. Открыть GA4 → Reports → Realtime
2. Выполнить действия на сайте
3. События должны появляться в реальном времени

---

## 📋 ЧЕКЛИСТ ФИНАЛЬНОЙ НАСТРОЙКИ

### ✅ Основное:
- [ ] GTM код установлен в `<head>` и `<body>`
- [ ] Контейнер опубликован (первая версия)
- [ ] GA4 Configuration Tag создан и работает
- [ ] Проверено в Preview Mode

### ✅ События:
- [ ] `investor_lead` — форма инвестора
- [ ] `consultation_booking` — запись на консультацию
- [ ] `pdf_download` — скачивание PDF
- [ ] `handbook_download` — Investor Handbook
- [ ] События срабатывают в Real-Time GA4

### ✅ Дополнительные инструменты:
- [ ] Microsoft Clarity установлен через GTM
- [ ] Facebook Pixel (если нужен)
- [ ] LinkedIn Insight Tag (если нужен)

---

## 🎓 ПОЛЕЗНЫЕ РЕСУРСЫ

### Обучение GTM:
- [Google Tag Manager Academy](https://analytics.google.com/analytics/academy/course/5) — бесплатный курс
- [GTM Documentation](https://support.google.com/tagmanager)
- [Simo Ahava's Blog](https://www.simoahava.com/) — лучший блог про GTM

### Видео-гайды:
- [GTM for Beginners (YouTube)](https://www.youtube.com/results?search_query=google+tag+manager+tutorial)
- [Measuring Marketing Academy](https://www.measureschool.com/)

---

## 🆘 TROUBLESHOOTING

### Проблема: GTM не работает
**Решение:**
- Проверить, что код GTM в `<head>` и `<body>`
- Открыть Console (F12) → проверить `dataLayer`
- Убедиться, что контейнер опубликован (Submit → Publish)

### Проблема: События не отслеживаются
**Решение:**
- Использовать Preview Mode для отладки
- Проверить, что `window.dataLayer.push()` вызывается в нужный момент
- Проверить имена событий (должны совпадать)

### Проблема: GA4 не показывает данные
**Решение:**
- Подождать 24-48 часов для обработки
- Проверить Real-Time отчеты (данные сразу)
- Убедиться, что Measurement ID правильный

---

## 📞 ПОДДЕРЖКА

Если нужна помощь:
- **Google Tag Manager Support:** https://support.google.com/tagmanager
- **GA4 Support:** https://support.google.com/analytics
- **Community Forums:** https://www.reddit.com/r/GoogleTagManager/

---

**Готово!** После выполнения всех шагов у вас будет полноценная система аналитики и отслеживания 🎉

**Следующий шаг:** Настроить дашборды и отчеты в GA4 для мониторинга конверсий.
