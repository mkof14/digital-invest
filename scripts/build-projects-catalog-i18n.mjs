#!/usr/bin/env node
/**
 * Injects `projectsCatalog` (labels, tags, statuses, taglines) and missing
 * `projects.descriptions` entries into every locale file.
 */
import { readFileSync, writeFileSync } from 'node:fs';

const LANGS = ['en', 'ru', 'uk', 'fr', 'ja', 'he', 'ar'];

// key: [en, ru, uk, fr, ja, he, ar]
const labels = {
  'digital-health': ['Digital Health', 'Цифровое здоровье', 'Цифрове здоров’я', 'Santé numérique', 'デジタルヘルス', 'בריאות דיגיטלית', 'الصحة الرقمية'],
  'agritech': ['AgriTech', 'АгроТех', 'АгроТех', 'AgriTech', 'アグリテック', 'אגריטק', 'التكنولوجيا الزراعية'],
  'agrotech': ['AgroTech', 'АгроТех', 'АгроТех', 'AgroTech', 'アグロテック', 'אגרוטק', 'التكنولوجيا الزراعية'],
  'autonomous-operations': ['Autonomous Operations', 'Автономные операции', 'Автономні операції', 'Opérations autonomes', '自律オペレーション', 'תפעול אוטונומי', 'العمليات الذاتية'],
  'workforce': ['Workforce', 'Персонал', 'Персонал', 'Main-d’œuvre', '人材', 'כוח אדם', 'القوى العاملة'],
  'ai-robotics': ['AI & Robotics', 'ИИ и робототехника', 'ШІ та робототехніка', 'IA et robotique', 'AI・ロボティクス', 'AI ורובוטיקה', 'الذكاء الاصطناعي والروبوتات'],
  'lifestyle': ['Lifestyle', 'Образ жизни', 'Спосіб життя', 'Style de vie', 'ライフスタイル', 'אורח חיים', 'نمط الحياة'],
  'medtech': ['MedTech', 'МедТех', 'МедТех', 'MedTech', 'メドテック', 'מדטק', 'التقنية الطبية'],
  'healthtech': ['HealthTech', 'ХелсТех', 'ХелсТех', 'HealthTech', 'ヘルステック', 'הלת׳-טק', 'تقنية الصحة'],
  'biotech': ['BioTech', 'БиоТех', 'БіоТех', 'BioTech', 'バイオテック', 'ביוטק', 'التقنية الحيوية'],
  'biotechnology': ['Biotechnology', 'Биотехнологии', 'Біотехнології', 'Biotechnologie', 'バイオテクノロジー', 'ביוטכנולוגיה', 'التكنولوجيا الحيوية'],
  'fintech': ['FinTech', 'ФинТех', 'ФінТех', 'FinTech', 'フィンテック', 'פינטק', 'التقنية المالية'],
  'health-intelligence': ['Health Intelligence', 'Интеллект здоровья', 'Інтелект здоров’я', 'Intelligence santé', 'ヘルスインテリジェンス', 'אינטליגנציית בריאות', 'ذكاء صحي'],
  'anti-aging': ['Anti-Aging', 'Антивозрастное', 'Антиейджинг', 'Anti-âge', 'アンチエイジング', 'אנטי-אייג׳ינג', 'مكافحة الشيخوخة'],
  'family': ['Family', 'Семья', 'Сім’я', 'Famille', 'ファミリー', 'משפחה', 'العائلة'],
  'diabetes-care': ['Diabetes Care', 'Диабет', 'Діабет', 'Diabète', '糖尿病ケア', 'טיפול בסוכרת', 'رعاية السكري'],
  'productivity': ['Productivity', 'Продуктивность', 'Продуктивність', 'Productivité', '生産性', 'פרודוקטיביות', 'الإنتاجية'],
  'an-agron-technology': ['An AGRON Technology', 'Технология AGRON', 'Технологія AGRON', 'Une technologie AGRON', 'AGRONのテクノロジー', 'טכנולוגיה של AGRON', 'تقنية من AGRON'],
  'digital-commerce': ['Digital Commerce', 'Цифровая коммерция', 'Цифрова комерція', 'Commerce numérique', 'デジタルコマース', 'מסחר דיגיטלי', 'التجارة الرقمية'],
  'project': ['Project', 'Проект', 'Проєкт', 'Projet', 'プロジェクト', 'פרויקט', 'مشروع'],
  'multi-sector': ['Multi-Sector', 'Мультисекторный', 'Мультисекторний', 'Multisectoriel', 'マルチセクター', 'רב-מגזרי', 'متعدد القطاعات'],
  'intelligence-security': ['Intelligence & Security', 'Аналитика и безопасность', 'Аналітика та безпека', 'Renseignement et sécurité', 'インテリジェンス・セキュリティ', 'מודיעין ואבטחה', 'الاستخبارات والأمن'],
  'ai-productivity': ['AI Productivity', 'ИИ-продуктивность', 'ШІ-продуктивність', 'Productivité IA', 'AI生産性', 'פרודוקטיביות AI', 'إنتاجية بالذكاء الاصطناعي'],
  'personal-business-intelligence': ['Personal & Business Intelligence', 'Личный и бизнес-интеллект', 'Особистий та бізнес-інтелект', 'Intelligence personnelle et professionnelle', 'パーソナル＆ビジネスインテリジェンス', 'אינטליגנציה אישית ועסקית', 'الذكاء الشخصي والتجاري'],
  'women-s-wellness': ['Women’s Wellness', 'Женское здоровье', 'Жіноче здоров’я', 'Bien-être féminin', '女性のウェルネス', 'בריאות נשים', 'صحة المرأة'],
  'talent-platform': ['Talent Platform', 'Платформа талантов', 'Платформа талантів', 'Plateforme de talents', 'タレントプラットフォーム', 'פלטפורמת כישרונות', 'منصة المواهب'],
};

const tags = {
  'ai-health': ['AI Health', 'ИИ-здоровье', 'ШІ-здоров’я', 'Santé IA', 'AIヘルス', 'בריאות AI', 'الصحة بالذكاء الاصطناعي'],
  'foundation-layer': ['Foundation Layer', 'Базовый слой', 'Базовий шар', 'Couche fondatrice', '基盤レイヤー', 'שכבת בסיס', 'الطبقة الأساسية'],
  'longevity': ['Longevity', 'Долголетие', 'Довголіття', 'Longévité', '長寿', 'אריכות ימים', 'طول العمر'],
  'wellness-platform': ['Wellness Platform', 'Платформа велнеса', 'Платформа велнесу', 'Plateforme bien-être', 'ウェルネス基盤', 'פלטפורמת בריאות', 'منصة العافية'],
  'ai': ['AI', 'ИИ', 'ШІ', 'IA', 'AI', 'AI', 'الذكاء الاصطناعي'],
  'robotics': ['Robotics', 'Робототехника', 'Робототехніка', 'Robotique', 'ロボティクス', 'רובוטיקה', 'الروبوتات'],
  'human-assistance': ['Human Assistance', 'Помощь человеку', 'Допомога людині', 'Assistance humaine', '人間支援', 'סיוע לאדם', 'مساعدة الإنسان'],
  'human-data': ['Human Data', 'Данные человека', 'Дані людини', 'Données humaines', 'ヒューマンデータ', 'נתוני אדם', 'بيانات بشرية'],
  'intelligence': ['Intelligence', 'Аналитика', 'Аналітика', 'Renseignement', 'インテリジェンス', 'מודיעין', 'الاستخبارات'],
  'security': ['Security', 'Безопасность', 'Безпека', 'Sécurité', 'セキュリティ', 'אבטחה', 'الأمن'],
  'infrastructure': ['Infrastructure', 'Инфраструктура', 'Інфраструктура', 'Infrastructure', 'インフラ', 'תשתית', 'البنية التحتية'],
  'b2b': ['B2B', 'B2B', 'B2B', 'B2B', 'B2B', 'B2B', 'B2B'],
  'b2g': ['B2G', 'B2G', 'B2G', 'B2G', 'B2G', 'B2G', 'B2G'],
  'workforce': ['Workforce', 'Персонал', 'Персонал', 'Main-d’œuvre', '人材', 'כוח אדם', 'القوى العاملة'],
  'operations': ['Operations', 'Операции', 'Операції', 'Opérations', 'オペレーション', 'תפעול', 'العمليات'],
  'drones': ['Drones', 'Дроны', 'Дрони', 'Drones', 'ドローン', 'רחפנים', 'الطائرات المسيرة'],
  'precision-agriculture': ['Precision Agriculture', 'Точное земледелие', 'Точне землеробство', 'Agriculture de précision', '精密農業', 'חקלאות מדייקת', 'الزراعة الدقيقة'],
  'diagnostics': ['Diagnostics', 'Диагностика', 'Діагностика', 'Diagnostics', '診断', 'אבחון', 'التشخيص'],
  'continuous-monitoring': ['Continuous Monitoring', 'Постоянный мониторинг', 'Постійний моніторинг', 'Suivi continu', '継続モニタリング', 'ניטור רציף', 'مراقبة مستمرة'],
  'clinical': ['Clinical', 'Клиника', 'Клініка', 'Clinique', '臨床', 'קליני', 'سريري'],
  'telehealth': ['Telehealth', 'Телемедицина', 'Телемедицина', 'Télésanté', '遠隔医療', 'רפואה מרחוק', 'الصحة عن بُعد'],
  'women-s-health': ['Women’s Health', 'Женское здоровье', 'Жіноче здоров’я', 'Santé féminine', '女性の健康', 'בריאות האישה', 'صحة المرأة'],
  'hormonal-cycle': ['Hormonal Cycle', 'Гормональный цикл', 'Гормональний цикл', 'Cycle hormonal', 'ホルモン周期', 'מחזור הורמונלי', 'الدورة الهرمونية'],
  'stress': ['Stress', 'Стресс', 'Стрес', 'Stress', 'ストレス', 'לחץ', 'التوتر'],
  'vitals': ['Vitals', 'Показатели', 'Показники', 'Constantes vitales', 'バイタル', 'סימנים חיוניים', 'المؤشرات الحيوية'],
  'biological-age': ['Biological Age', 'Биологический возраст', 'Біологічний вік', 'Âge biologique', '生物学的年齢', 'גיל ביולוגי', 'العمر البيولوجي'],
  'senior-care': ['Senior Care', 'Забота о пожилых', 'Турбота про літніх', 'Soins aux seniors', 'シニアケア', 'טיפול בקשישים', 'رعاية كبار السن'],
  'skin': ['Skin', 'Кожа', 'Шкіра', 'Peau', 'スキン', 'עור', 'البشرة'],
  'anti-aging': ['Anti-Aging', 'Антивозрастное', 'Антиейджинг', 'Anti-âge', 'アンチエイジング', 'אנטי-אייג׳ינג', 'مكافحة الشيخوخة'],
  'protocols': ['Protocols', 'Протоколы', 'Протоколи', 'Protocoles', 'プロトコル', 'פרוטוקולים', 'البروتوكولات'],
  'family': ['Family', 'Семья', 'Сім’я', 'Famille', 'ファミリー', 'משפחה', 'العائلة'],
  'multi-user': ['Multi-User', 'Мультипользовательский', 'Багатокористувацький', 'Multi-utilisateur', 'マルチユーザー', 'רב-משתמשים', 'متعدد المستخدمين'],
  'diabetes': ['Diabetes', 'Диабет', 'Діабет', 'Diabète', '糖尿病', 'סוכרת', 'السكري'],
  'daily-life': ['Daily Life', 'Повседневность', 'Повсякдення', 'Vie quotidienne', '日常生活', 'חיי היום-יום', 'الحياة اليومية'],
  'ai-planning': ['AI Planning', 'ИИ-планирование', 'ШІ-планування', 'Planification IA', 'AIプランニング', 'תכנון AI', 'التخطيط بالذكاء الاصطناعي'],
  'habits': ['Habits', 'Привычки', 'Звички', 'Habitudes', '習慣', 'הרגלים', 'العادات'],
  'multi-sector': ['Multi-Sector', 'Мультисекторный', 'Мультисекторний', 'Multisectoriel', 'マルチセクター', 'רב-מגזרי', 'متعدد القطاعات'],
  'holding': ['Holding', 'Холдинг', 'Холдинг', 'Holding', 'ホールディング', 'אחזקות', 'شركة قابضة'],
  'intelligence-environment': ['Intelligence Environment', 'Интеллектуальная среда', 'Інтелектуальне середовище', 'Environnement d’intelligence', 'インテリジェンス環境', 'סביבת אינטליגנציה', 'بيئة ذكية'],
};

const statuses = {
  OPEN: ['Open', 'Открыт', 'Відкрито', 'Ouvert', '公開中', 'פתוח', 'مفتوح'],
  COMING_SOON: ['Coming Soon', 'Скоро', 'Незабаром', 'Bientôt', '近日公開', 'בקרוב', 'قريباً'],
  CLOSED: ['Closed', 'Закрыт', 'Закрито', 'Fermé', '終了', 'סגור', 'مغلق'],
  IN_DEVELOPMENT: ['In Development', 'В разработке', 'У розробці', 'En développement', '開発中', 'בפיתוח', 'قيد التطوير'],
};

const taglines = {
  'biomath-core': ['Foundation for 200+ ecosystem services', 'Основа для 200+ сервисов экосистемы', 'Основа для 200+ сервісів екосистеми', 'Base de plus de 200 services de l’écosystème', 'エコシステム200以上のサービスの基盤', 'בסיס ל-200+ שירותי האקוסיסטם', 'أساس لأكثر من 200 خدمة في المنظومة'],
  'biomathcore': ['Foundation for 200+ ecosystem services', 'Основа для 200+ сервисов экосистемы', 'Основа для 200+ сервісів екосистеми', 'Base de plus de 200 services de l’écosystème', 'エコシステム200以上のサービスの基盤', 'בסיס ל-200+ שירותי האקוסיסטם', 'أساس لأكثر من 200 خدمة في المنظومة'],
  'biomathlife': ['Flagship BioTech platform', 'Флагманская BioTech платформа', 'Флагманська BioTech платформа', 'Plateforme BioTech phare', '旗艦バイオテック・プラットフォーム', 'פלטפורמת ביוטק מובילה', 'منصة التقنية الحيوية الرائدة'],
  'saven': ['Intelligence for robots that help people', 'Интеллект для роботов, которые помогают людям', 'Інтелект для роботів, які допомагають людям', 'L’intelligence des robots au service des personnes', '人を助けるロボットのための知能', 'אינטליגנציה לרובוטים שעוזרים לאנשים', 'ذكاء للروبوتات التي تساعد الناس'],
  'agron': ['Infrastructure for Autonomous Operations', 'Инфраструктура для автономных операций', 'Інфраструктура для автономних операцій', 'Infrastructure pour opérations autonomes', '自律オペレーションのためのインフラ', 'תשתית לתפעול אוטונומי', 'بنية تحتية للعمليات الذاتية'],
  'starwall': ['Intelligence Across the Physical World — an AGRON technology', 'Аналитика для физического мира — технология AGRON', 'Аналітика для фізичного світу — технологія AGRON', 'L’intelligence du monde physique — une technologie AGRON', '物理世界のインテリジェンス — AGRONのテクノロジー', 'מודיעין ברחבי העולם הפיזי — טכנולוגיה של AGRON', 'استخبارات عبر العالم المادي — تقنية من AGRON'],
  'agron-work': ['Workforce platform for AGRON ecosystem', 'Кадровая платформа экосистемы AGRON', 'Кадрова платформа екосистеми AGRON', 'Plateforme RH de l’écosystème AGRON', 'AGRONエコシステムの人材プラットフォーム', 'פלטפורמת כוח אדם לאקוסיסטם AGRON', 'منصة القوى العاملة لمنظومة AGRON'],
  'terraaero': ['Drone-powered precision agriculture', 'Точное земледелие на дронах', 'Точне землеробство на дронах', 'Agriculture de précision par drones', 'ドローンによる精密農業', 'חקלאות מדייקת מבוססת רחפנים', 'زراعة دقيقة بالطائرات المسيرة'],
  'health-intelligence-suite': ['Stress, Vital, BioAge, Senior and Skin in one product', 'Stress, Vital, BioAge, Senior и Skin в одном продукте', 'Stress, Vital, BioAge, Senior і Skin в одному продукті', 'Stress, Vital, BioAge, Senior et Skin en un seul produit', 'Stress・Vital・BioAge・Senior・Skinを一つの製品に', 'Stress, Vital, BioAge, Senior ו-Skin במוצר אחד', 'Stress وVital وBioAge وSenior وSkin في منتج واحد'],
  't1d': ['Unified daily-life platform for Type 1 and Type 2 diabetes', 'Единая платформа повседневной жизни при диабете 1 и 2 типа', 'Єдина платформа повсякденного життя при діабеті 1 і 2 типу', 'Plateforme unifiée du quotidien pour le diabète de type 1 et 2', '1型・2型糖尿病のための統合された日常プラットフォーム', 'פלטפורמה מאוחדת לחיי היום-יום עם סוכרת סוג 1 ו-2', 'منصة موحدة للحياة اليومية مع السكري من النوع 1 و2'],
  'digital-invest-portfolio': ['Multi-sector investment platform', 'Мультисекторная инвестиционная платформа', 'Мультисекторна інвестиційна платформа', 'Plateforme d’investissement multisectorielle', 'マルチセクター投資プラットフォーム', 'פלטפורמת השקעות רב-מגזרית', 'منصة استثمار متعددة القطاعات'],
  '1inow': ['One place. One context. Right now.', 'Одно место. Один контекст. Прямо сейчас.', 'Одне місце. Один контекст. Просто зараз.', 'Un lieu. Un contexte. Maintenant.', '一つの場所。一つの文脈。いま。', 'מקום אחד. הקשר אחד. עכשיו.', 'مكان واحد. سياق واحد. الآن.'],
  'facetium': ['A network of digital commercial environments', 'Сеть цифровых коммерческих пространств', 'Мережа цифрових комерційних просторів', 'Un réseau d’environnements commerciaux numériques', 'デジタル商業環境のネットワーク', 'רשת של סביבות מסחר דיגיטליות', 'شبكة من البيئات التجارية الرقمية'],
};

const descriptions = {
  'starwall': [
    'Intelligence Across the Physical World. Software and intelligence infrastructure connecting sensors, systems, operational data, external information and human decision-makers into one operating picture.',
    'Аналитика для физического мира. Программная и интеллектуальная инфраструктура, объединяющая датчики, системы, операционные данные, внешнюю информацию и людей, принимающих решения, в единую оперативную картину.',
    'Аналітика для фізичного світу. Програмна та інтелектуальна інфраструктура, що об’єднує датчики, системи, операційні дані, зовнішню інформацію та людей, які ухвалюють рішення, в єдину оперативну картину.',
    'L’intelligence du monde physique. Une infrastructure logicielle et informationnelle reliant capteurs, systèmes, données opérationnelles, informations externes et décideurs humains en une seule image opérationnelle.',
    '物理世界のインテリジェンス。センサー、システム、運用データ、外部情報、そして意思決定を行う人間を一つの運用画面に統合するソフトウェアとインテリジェンス基盤です。',
    'מודיעין ברחבי העולם הפיזי. תשתית תוכנה ומודיעין המחברת חיישנים, מערכות, נתונים תפעוליים, מידע חיצוני ומקבלי החלטות אנושיים לתמונה תפעולית אחת.',
    'استخبارات عبر العالم المادي. بنية برمجية واستخباراتية تربط المستشعرات والأنظمة والبيانات التشغيلية والمعلومات الخارجية وصنّاع القرار في صورة تشغيلية واحدة.',
  ],
  'facetium': [
    'A network of digital commercial environments — spatial destinations where premium commerce becomes a place people enter, explore and trust.',
    'Сеть цифровых коммерческих пространств — мест, куда люди заходят, где исследуют премиальную коммерцию и которым доверяют.',
    'Мережа цифрових комерційних просторів — місць, куди люди заходять, де досліджують преміальну комерцію та яким довіряють.',
    'Un réseau d’environnements commerciaux numériques — des lieux où le commerce premium devient un espace que l’on visite, explore et auquel on fait confiance.',
    'デジタル商業環境のネットワーク — プレミアムな商取引が「訪れ、探索し、信頼できる場所」になる空間です。',
    'רשת של סביבות מסחר דיגיטליות — מרחבים שאליהם אנשים נכנסים, חוקרים מסחר פרימיום ונותנים בהם אמון.',
    'شبكة من البيئات التجارية الرقمية — أماكن يدخلها الناس ويستكشفون فيها التجارة الفاخرة ويثقون بها.',
  ],
  '1inow': [
    'One place. One context. Right now. 1inow is a personal and business intelligence environment that connects tasks, notes, projects, files, meetings and messages into a single living context.',
    'Одно место. Один контекст. Прямо сейчас. 1inow — среда личного и бизнес-интеллекта, которая связывает задачи, заметки, проекты, файлы, встречи и сообщения в единый живой контекст.',
    'Одне місце. Один контекст. Просто зараз. 1inow — середовище особистого та бізнес-інтелекту, що поєднує завдання, нотатки, проєкти, файли, зустрічі та повідомлення в єдиний живий контекст.',
    'Un lieu. Un contexte. Maintenant. 1inow est un environnement d’intelligence personnelle et professionnelle qui relie tâches, notes, projets, fichiers, réunions et messages en un seul contexte vivant.',
    '一つの場所、一つの文脈、いま。1inowは、タスク・メモ・プロジェクト・ファイル・会議・メッセージを一つの生きた文脈に統合する、個人とビジネスのためのインテリジェンス環境です。',
    'מקום אחד. הקשר אחד. עכשיו. 1inow היא סביבת אינטליגנציה אישית ועסקית המחברת משימות, פתקים, פרויקטים, קבצים, פגישות והודעות להקשר חי אחד.',
    'مكان واحد. سياق واحد. الآن. 1inow بيئة ذكاء شخصي وتجاري تربط المهام والملاحظات والمشاريع والملفات والاجتماعات والرسائل في سياق حي واحد.',
  ],
  't1d': [
    'A practical system that helps people with Type 1 and Type 2 diabetes understand what is happening, respond in time, and manage daily life with less stress.',
    'Практичная система, которая помогает людям с диабетом 1 и 2 типа понимать происходящее, вовремя реагировать и вести повседневную жизнь с меньшим стрессом.',
    'Практична система, що допомагає людям із діабетом 1 і 2 типу розуміти, що відбувається, вчасно реагувати та жити повсякденням із меншим стресом.',
    'Un système pratique qui aide les personnes atteintes de diabète de type 1 et 2 à comprendre ce qui se passe, à réagir à temps et à vivre leur quotidien avec moins de stress.',
    '1型・2型糖尿病の人が、いま何が起きているかを理解し、適切なタイミングで対応し、日常をより少ないストレスで過ごすための実用的なシステムです。',
    'מערכת פרקטית שעוזרת לאנשים עם סוכרת סוג 1 ו-2 להבין מה קורה, להגיב בזמן ולנהל את חיי היום-יום בפחות לחץ.',
    'نظام عملي يساعد المصابين بالسكري من النوع 1 و2 على فهم ما يحدث، والاستجابة في الوقت المناسب، وإدارة حياتهم اليومية بضغط أقل.',
  ],
  'health-intelligence-suite': [
    'Five health directions merged into one product: Stress, Vital, BioAge, Senior and Skin — one signal layer, one history, one non-medical guidance model.',
    'Пять направлений здоровья в одном продукте: Stress, Vital, BioAge, Senior и Skin — один слой сигналов, одна история, одна немедицинская модель рекомендаций.',
    'П’ять напрямів здоров’я в одному продукті: Stress, Vital, BioAge, Senior і Skin — один шар сигналів, одна історія, одна немедична модель рекомендацій.',
    'Cinq directions santé réunies en un seul produit : Stress, Vital, BioAge, Senior et Skin — une couche de signaux, un historique, un modèle de recommandations non médical.',
    '5つの健康領域を一つの製品に統合：Stress、Vital、BioAge、Senior、Skin — 一つのシグナル層、一つの履歴、一つの非医療ガイダンスモデル。',
    'חמישה תחומי בריאות במוצר אחד: Stress, Vital, BioAge, Senior ו-Skin — שכבת אותות אחת, היסטוריה אחת, מודל הנחיה לא-רפואי אחד.',
    'خمسة اتجاهات صحية في منتج واحد: Stress وVital وBioAge وSenior وSkin — طبقة إشارات واحدة، وسجل واحد، ونموذج إرشاد غير طبي واحد.',
  ],
};

const pick = (table, idx) =>
  Object.fromEntries(Object.entries(table).map(([k, v]) => [k, v[idx]]));

LANGS.forEach((lang, idx) => {
  const paths = [`src/i18n/locales/.json`, `public/locales//translation.json`];
  for (const path of paths) {
  const json = JSON.parse(readFileSync(path, 'utf8'));
  json.projectsCatalog = {
    labels: pick(labels, idx),
    tags: pick(tags, idx),
    statuses: pick(statuses, idx),
  };
  json.projects = json.projects || {};
  json.projects.taglines = { ...(json.projects.taglines || {}), ...pick(taglines, idx) };
  json.projects.descriptions = { ...(json.projects.descriptions || {}), ...pick(descriptions, idx) };
  writeFileSync(path, JSON.stringify(json, null, 2) + '\n');
  console.log('updated', path);
  }
});
