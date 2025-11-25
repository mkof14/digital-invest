# Email Communication System - Digital Invest

## Overview

Автоматическая система отправки email-уведомлений через Resend API для всех форм на сайте Digital Invest.

## Компоненты системы

### 1. Edge Function: `send-notification`

**Путь:** `supabase/functions/send-notification/index.ts`

**Функционал:**
- Отправка уведомлений администраторам о новых заявках
- Отправка подтверждений пользователям
- Поддержка 4 типов уведомлений:
  - `investor_lead` - Заявка на инвестирование
  - `consultation_booking` - Бронирование консультации
  - `handbook_download` - Скачивание handbook
  - `contact` - Контактная форма

**Параметры запроса:**
```typescript
{
  type: 'investor_lead' | 'consultation_booking' | 'handbook_download' | 'contact',
  data: {
    name: string;
    email: string;
    phone?: string;
    country?: string;
    projectTitle?: string;
    amountRange?: string;
    comments?: string;
    date?: string;
    time?: string;
  },
  sendToAdmin?: boolean,  // default: true
  sendToUser?: boolean    // default: true
}
```

### 2. Email Templates (React Email)

Система использует профессиональные React Email templates для красивого дизайна писем:

#### Для администраторов:
- **Template:** `admin-notification.tsx`
- **От:** `Digital Invest Notifications <notifications@digitalinvest.com>`
- **Кому:** `info@digitalinvest.com`
- **Дизайн:** Структурированная карточка с брендингом Digital Invest
- **Содержание:** Все данные из формы в читаемом формате

#### Для пользователей:
Отдельные templates для каждого типа уведомлений:

1. **investor-lead-confirmation.tsx**
   - Благодарность за интерес
   - Информация о процессе
   - Кнопка скачивания Investor Handbook
   - Disclaimer о приватности процесса

2. **consultation-confirmation.tsx**
   - Подтверждение даты/времени
   - Информация о следующих шагах
   - Ожидание подтверждения со ссылкой

3. **handbook-confirmation.tsx**
   - Благодарность за скачивание
   - Призыв к действию (Schedule Consultation)
   - Информация о следующих шагах

4. **contact-confirmation.tsx**
   - Подтверждение получения сообщения
   - Ссылка на портфолио проектов
   - Информация о сроках ответа

**Все templates включают:**
- Профессиональный header с логотипом
- Брендирование Digital Invest (цвета #0B1120, #38BDF8)
- Responsive дизайн
- Красивые кнопки призыва к действию
- Disclaimer секции
- Footer с контактами и legal notice

### 3. Интеграция с формами

Система интегрирована со всеми формами на сайте:

#### InterestForm (Заявка на проект)
- **Файл:** `src/components/InterestForm.tsx`
- **Тип:** `investor_lead`
- **Отправка:** После успешного сохранения в `investor_leads`

#### InvestorForm (Investor Handbook)
- **Файл:** `src/components/InvestorForm.tsx`
- **Тип:** `handbook_download`
- **Отправка:** После успешного сохранения в `investor_leads`

#### Contact Form
- **Файл:** `src/pages/Contact.tsx`
- **Тип:** `contact`
- **Отправка:** После успешного сохранения в `investor_leads`

#### Schedule (Бронирование консультации)
- **Файл:** `src/pages/Schedule.tsx`
- **Тип:** `consultation_booking`
- **Отправка:** После успешного сохранения в `consultation_bookings`

## Настройка Resend

### 1. Создание аккаунта
1. Перейдите на [resend.com](https://resend.com)
2. Зарегистрируйтесь и войдите в аккаунт

### 2. Верификация домена
1. Перейдите в [Domains](https://resend.com/domains)
2. Добавьте домен `digitalinvest.com`
3. Добавьте DNS записи для верификации:
   - SPF запись
   - DKIM записи
   - DMARC запись (опционально)

### 3. API Key
API ключ уже добавлен в Supabase Secrets:
- **Имя:** `RESEND_API_KEY`
- **Значение:** `re_gQVqD14J_PZCa67ty7SrZ7c7VZps8CWBG`

## Что требуется дополнительно

### 1. Верификация домена в Resend (ОБЯЗАТЕЛЬНО)
До верификации домена все emails будут отправляться с `onboarding@resend.dev`. После верификации можно использовать:
- `info@digitalinvest.com`
- `notifications@digitalinvest.com`
- Любой другой адрес на вашем домене

**Инструкция по верификации:**
1. Войдите в [Resend Dashboard](https://resend.com/domains)
2. Нажмите "Add Domain"
3. Введите `digitalinvest.com`
4. Скопируйте предоставленные DNS записи
5. Добавьте их в настройки DNS вашего домена (у регистратора или хостинг-провайдера)
6. Дождитесь верификации (обычно 15-60 минут)

### 2. Настройка DNS записей

Минимальные обязательные записи для отправки email:

```
Type: TXT
Name: @
Value: v=spf1 include:_spf.resend.com ~all

Type: TXT
Name: resend._domainkey
Value: [значение предоставит Resend]

Type: CNAME
Name: resend._domainkey
Value: [значение предоставит Resend]
```

### 3. Тестирование системы

После верификации домена:

1. **Тест через форму на сайте:**
   - Откройте любую страницу с формой
   - Заполните и отправьте форму
   - Проверьте `info@digitalinvest.com` на получение уведомления
   - Проверьте email пользователя на получение подтверждения

2. **Проверка логов:**
   - Откройте Admin → Cloud → Edge Functions
   - Выберите `send-notification`
   - Проверьте логи выполнения

3. **Resend Dashboard:**
   - Войдите в [Resend Emails](https://resend.com/emails)
   - Проверьте статусы отправленных писем
   - Просмотрите детали доставки

## Обработка ошибок

Система имеет graceful error handling:
- Если отправка email не удалась, форма всё равно сохраняется в базу
- Ошибки логируются в консоль
- Пользователь всегда видит подтверждение успешной отправки формы

## Мониторинг

### Resend Dashboard
- Статистика отправок
- Статусы доставки
- Открытия и клики
- Ошибки и bounces

### Supabase Edge Function Logs
- Логи вызовов функции
- Ошибки выполнения
- Время выполнения

## Лимиты и тарифы Resend

**Free Plan:**
- 100 emails/день
- 3,000 emails/месяц

**Pro Plan ($20/месяц):**
- 50,000 emails/месяц
- Дополнительные: $1 за 1,000 emails

## Особенности React Email Templates

### Преимущества:

1. **Компонентный подход**
   - Легко поддерживать и обновлять
   - Переиспользуемые компоненты
   - Type-safe props

2. **Профессиональный дизайн**
   - Consistent брендинг
   - Mobile-responsive
   - Работает во всех email клиентах

3. **Простая кастомизация**
   - Изменяйте цвета в одном месте
   - Добавляйте новые секции
   - Легко A/B тестировать

### Структура файлов:

```
supabase/functions/send-notification/
├── index.ts                                    # Main edge function
└── _templates/
    ├── admin-notification.tsx                  # Admin notifications
    ├── investor-lead-confirmation.tsx          # Investor lead confirmations
    ├── consultation-confirmation.tsx           # Consultation confirmations
    ├── handbook-confirmation.tsx               # Handbook download confirmations
    └── contact-confirmation.tsx                # Contact form confirmations
```

## Дальнейшие улучшения

### Рекомендуемые доработки:

1. **Drip Email Campaigns**
   - Автоматические follow-up письма
   - Email sequences для новых leads

3. **Email Analytics**
   - Отслеживание открытий
   - Отслеживание кликов
   - A/B тестирование subject lines

4. **Unsubscribe Management**
   - Возможность отписаться от рассылок
   - Preferences center

5. **Attachment Support**
   - Отправка PDF attachments
   - Investor briefs вместе с confirmations

## Контакты для поддержки

**Resend Support:** support@resend.com
**Documentation:** https://resend.com/docs

## Заключение

Система email-коммуникации полностью настроена и готова к работе. 

**Осталось только:**
1. ✅ API Key добавлен
2. ⏳ Верифицировать домен в Resend
3. ⏳ Добавить DNS записи
4. ✅ Edge function развернута
5. ✅ Все формы интегрированы
6. ✅ React Email templates созданы
7. ✅ Профессиональный дизайн писем

После верификации домена система начнет отправлять профессиональные branded emails от `info@digitalinvest.com` с красивым дизайном React Email.
