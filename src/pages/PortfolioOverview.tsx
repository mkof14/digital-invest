import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Loader2, ArrowUpRight, Zap, Layers, Activity, Brain, Sprout, Heart, Cpu, Utensils, Sparkles } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const overviewTexts: Record<string, Record<string, string>> = {
  'biomath-core': {
    en: 'The computational brain behind 200+ health services. BioMath Core ingests biometric chaos and turns it into predictive intelligence — no guesswork, just architecture. It\'s the invisible engine that powers every diagnostic layer in the ecosystem. Every other health project in this portfolio runs on its data pipelines and inference models.',
    ru: 'Вычислительный мозг за 200+ сервисами здоровья. BioMath Core поглощает биометрический хаос и превращает его в предиктивный интеллект — без догадок, только архитектура. Невидимый двигатель каждого диагностического слоя экосистемы. Все остальные проекты здоровья в портфеле работают на его дата-пайплайнах и моделях.',
    uk: 'Обчислювальний мозок за 200+ сервісами здоров\'я. BioMath Core поглинає біометричний хаос і перетворює його на предиктивний інтелект — без здогадок, лише архітектура. Невидимий двигун кожного діагностичного шару екосистеми. Усі інші проєкти здоров\'я в портфелі працюють на його дата-пайплайнах та моделях.',
    fr: 'Le cerveau computationnel derrière 200+ services de santé. BioMath Core absorbe le chaos biométrique et le transforme en intelligence prédictive — pas de devinettes, juste de l\'architecture. Le moteur invisible de chaque couche diagnostique. Tous les autres projets santé du portefeuille reposent sur ses pipelines de données.',
    ar: 'العقل الحسابي وراء أكثر من 200 خدمة صحية. يستوعب BioMath Core الفوضى البيومترية ويحولها إلى ذكاء تنبؤي — بدون تخمين، فقط هندسة معمارية. المحرك الخفي لكل طبقة تشخيصية. جميع مشاريع الصحة الأخرى في المحفظة تعمل على خطوط بياناته.',
    ja: '200以上の健康サービスを支える計算頭脳。BioMath Coreは生体計測の混沌を予測知能に変換します — 推測なし、アーキテクチャのみ。エコシステムのすべての診断レイヤーを動かす見えないエンジン。ポートフォリオ内の他すべての健康プロジェクトがそのデータパイプラインで稼働しています。',
    he: 'המוח החישובי מאחורי 200+ שירותי בריאות. BioMath Core קולט כאוס ביומטרי והופך אותו לאינטליגנציה חזויה — ללא ניחושים, רק ארכיטקטורה. המנוע הבלתי נראה של כל שכבת אבחון. כל פרויקטי הבריאות האחרים בתיק פועלים על צינורות הנתונים שלו.'
  },
  'biomathcore': {
    en: 'The computational brain behind 200+ health services. BioMath Core ingests biometric chaos and turns it into predictive intelligence — no guesswork, just architecture. Every other health project in this portfolio runs on its data pipelines and inference models.',
    ru: 'Вычислительный мозг за 200+ сервисами здоровья. BioMath Core поглощает биометрический хаос и превращает его в предиктивный интеллект — без догадок, только архитектура. Все остальные проекты здоровья в портфеле работают на его пайплайнах.',
    uk: 'Обчислювальний мозок за 200+ сервісами здоров\'я. BioMath Core поглинає біометричний хаос і перетворює його на предиктивний інтелект — без здогадок, лише архітектура. Усі інші проєкти здоров\'я працюють на його пайплайнах.',
    fr: 'Le cerveau computationnel derrière 200+ services de santé. BioMath Core transforme le chaos biométrique en intelligence prédictive. Tous les autres projets santé reposent sur ses pipelines.',
    ar: 'العقل الحسابي وراء أكثر من 200 خدمة صحية. يحول BioMath Core الفوضى البيومترية إلى ذكاء تنبؤي. جميع مشاريع الصحة الأخرى تعمل على خطوط بياناته.',
    ja: '200以上の健康サービスを支える計算頭脳。BioMath Coreは生体計測の混沌を予測知能に変換します。他すべての健康プロジェクトがそのパイプラインで稼働しています。',
    he: 'המוח החישובי מאחורי 200+ שירותי בריאות. BioMath Core הופך כאוס ביומטרי לאינטליגנציה חזויה. כל פרויקטי הבריאות האחרים פועלים על צינורות הנתונים שלו.'
  },
  'biomathlife': {
    en: 'A longevity platform that doesn\'t sell supplements — it builds your biological profile across 20 categories and 200+ services. Think of it as a control panel for your body, where every metric has meaning and every recommendation has data behind it. From sleep architecture to hormonal cycles — nothing is left to intuition.',
    ru: 'Платформа долголетия, которая не продаёт добавки — она строит ваш биологический профиль по 20 категориям и 200+ сервисам. Пульт управления телом, где каждая метрика имеет значение, а каждая рекомендация подкреплена данными. От архитектуры сна до гормональных циклов — ничего не оставлено на интуицию.',
    uk: 'Платформа довголіття, яка не продає добавки — вона будує ваш біологічний профіль за 20 категоріями та 200+ сервісами. Панель керування тілом, де кожна метрика має значення, а кожна рекомендація підкріплена даними. Від архітектури сну до гормональних циклів — нічого не залишено на інтуїцію.',
    fr: 'Une plateforme de longévité qui ne vend pas de suppléments — elle construit votre profil biologique à travers 20 catégories et 200+ services. Un panneau de contrôle pour votre corps. De l\'architecture du sommeil aux cycles hormonaux — rien n\'est laissé à l\'intuition.',
    ar: 'منصة طول العمر التي لا تبيع المكملات — بل تبني ملفك البيولوجي عبر 20 فئة و200+ خدمة. لوحة تحكم لجسمك، حيث كل مقياس له معنى. من بنية النوم إلى الدورات الهرمونية — لا شيء يُترك للحدس.',
    ja: 'サプリを売らない長寿プラットフォーム。20カテゴリーと200以上のサービスで生物学的プロファイルを構築します。睡眠アーキテクチャからホルモンサイクルまで — 直感に任せるものは何もありません。',
    he: 'פלטפורמת אריכות ימים שלא מוכרת תוספים — היא בונה את הפרופיל הביולוגי שלך ב-20 קטגוריות ו-200+ שירותים. לוח בקרה לגוף שלך. מארכיטקטורת שינה ועד מחזורים הורמונליים — שום דבר לא נשאר לאינטואיציה.'
  },
  'terraaero': {
    en: 'Drones that don\'t just fly — they farm. Precision irrigation, AI-driven agronomy, U.S.-manufactured fleet expanding across 23 states. This is agriculture reimagined from the sky down, with real hardware and real field results. Each drone processes terrain data in real-time, adjusting water and nutrient delivery down to the square meter.',
    ru: 'Дроны, которые не просто летают — они фермерствуют. Точное орошение, ИИ-агрономия, флот американского производства в 23 штатах. Сельское хозяйство, переосмысленное с неба до земли. Каждый дрон обрабатывает данные рельефа в реальном времени, корректируя подачу воды и питательных веществ с точностью до квадратного метра.',
    uk: 'Дрони, які не просто літають — вони фермерствують. Точне зрошення, ІІ-агрономія, флот американського виробництва у 23 штатах. Кожен дрон обробляє дані рельєфу в реальному часі, коригуючи подачу води та поживних речовин з точністю до квадратного метра.',
    fr: 'Des drones qui ne font pas que voler — ils cultivent. Irrigation de précision, agronomie IA, flotte fabriquée aux États-Unis dans 23 États. Chaque drone traite les données du terrain en temps réel, ajustant l\'eau et les nutriments au mètre carré près.',
    ar: 'طائرات بدون طيار لا تطير فحسب — بل تزرع. ري دقيق، زراعة ذكية بالذكاء الاصطناعي، أسطول مصنوع في أمريكا في 23 ولاية. كل طائرة تعالج بيانات التضاريس في الوقت الفعلي وتضبط توصيل المياه والمغذيات بدقة المتر المربع.',
    ja: '飛ぶだけでなく農業をするドローン。精密灌漑、AI農学、23州に展開する米国製フリート。各ドローンはリアルタイムで地形データを処理し、平方メートル単位で水と栄養素の供給を調整します。',
    he: 'רחפנים שלא רק טסים — הם מחקלאים. השקיה מדויקת, אגרונומיה AI, צי ייצור אמריקאי ב-23 מדינות. כל רחפן מעבד נתוני שטח בזמן אמת ומתאים אספקת מים ומזינים ברמת המטר הרבוע.'
  },
  'agron': {
    en: 'National-scale robotics infrastructure for training, certification, and coordination. AGRON is the operating system for autonomous machines across America — the backbone nobody sees but everyone needs. It standardizes how robots are deployed, maintained, and governed at industrial scale.',
    ru: 'Роботизированная инфраструктура национального масштаба: обучение, сертификация, координация. AGRON — операционная система для автономных машин по всей Америке. Стандартизирует развёртывание, обслуживание и управление роботами в промышленном масштабе.',
    uk: 'Роботизована інфраструктура національного масштабу: навчання, сертифікація, координація. AGRON — операційна система для автономних машин по всій Америці. Стандартизує розгортання, обслуговування та управління роботами у промисловому масштабі.',
    fr: 'Infrastructure robotique à l\'échelle nationale pour la formation, la certification et la coordination. AGRON standardise le déploiement, la maintenance et la gouvernance des robots à l\'échelle industrielle.',
    ar: 'بنية تحتية روبوتية على المستوى الوطني للتدريب والشهادات والتنسيق. AGRON يوحد نشر وصيانة وحوكمة الروبوتات على نطاق صناعي عبر أمريكا.',
    ja: '訓練、認証、調整のための全国規模のロボティクスインフラ。AGRONはアメリカ全土の自律機械のオペレーティングシステム。産業規模でのロボットの展開・保守・ガバナンスを標準化します。',
    he: 'תשתית רובוטיקה בקנה מידה לאומי לאימון, הסמכה ותיאום. AGRON מתקנן את הפריסה, התחזוקה והממשל של רובוטים בקנה מידה תעשייתי ברחבי אמריקה.'
  },
  'agron-work': {
    en: 'The talent layer for robotics. AGRON Work connects certified operators, technicians, and engineers with the companies building the autonomous future. Where human skill meets machine precision. It\'s not a job board — it\'s a verified professional network with skill certification baked in.',
    ru: 'Кадровый слой робототехники. AGRON Work связывает сертифицированных операторов, техников и инженеров с компаниями автономного будущего. Это не доска вакансий — это верифицированная профессиональная сеть со встроенной сертификацией навыков.',
    uk: 'Кадровий шар робототехніки. AGRON Work з\'єднує сертифікованих операторів, техніків та інженерів з компаніями автономного майбутнього. Це не дошка вакансій — це верифікована професійна мережа з вбудованою сертифікацією навичок.',
    fr: 'La couche talent de la robotique. AGRON Work connecte opérateurs certifiés, techniciens et ingénieurs avec les entreprises de l\'avenir autonome. Ce n\'est pas un site d\'emploi — c\'est un réseau professionnel vérifié avec certification intégrée.',
    ar: 'طبقة المواهب للروبوتات. يربط AGRON Work المشغلين والفنيين والمهندسين المعتمدين بشركات المستقبل المستقل. ليس لوحة وظائف — بل شبكة مهنية موثقة مع شهادات مهارات مدمجة.',
    ja: 'ロボティクスの人材レイヤー。AGRON Workは認定オペレーター、技術者、エンジニアを自律的未来を構築する企業と結びつけます。求人掲示板ではなく、スキル認証が組み込まれた検証済みプロフェッショナルネットワークです。',
    he: 'שכבת הכישרון של הרובוטיקה. AGRON Work מחבר מפעילים, טכנאים ומהנדסים מוסמכים עם חברות העתיד האוטונומי. לא לוח דרושים — רשת מקצועית מאומתת עם הסמכת מיומנויות מובנית.'
  },
  'myday': {
    en: 'Your day, reverse-engineered by AI. MyDay doesn\'t just plan — it learns your patterns, predicts your energy peaks, and restructures your time around what actually works. Productivity isn\'t about doing more — it\'s about doing right. The system adapts weekly based on behavioral feedback loops.',
    ru: 'Ваш день, деконструированный ИИ. MyDay не просто планирует — он изучает паттерны, предсказывает пики энергии и перестраивает время вокруг того, что реально работает. Система адаптируется еженедельно на основе поведенческих обратных связей.',
    uk: 'Ваш день, деконструйований ІІ. MyDay не просто планує — він вивчає патерни, передбачає піки енергії та перебудовує час навколо того, що реально працює. Система адаптується щотижня на основі поведінкових зворотних зв\'язків.',
    fr: 'Votre journée, rétro-conçue par l\'IA. MyDay apprend vos habitudes, prédit vos pics d\'énergie et restructure votre temps. Le système s\'adapte chaque semaine grâce aux boucles de rétroaction comportementale.',
    ar: 'يومك، معاد هندسته بالذكاء الاصطناعي. MyDay يتعلم أنماطك ويتنبأ بذروات طاقتك ويعيد هيكلة وقتك. يتكيف النظام أسبوعياً بناءً على حلقات التغذية الراجعة السلوكية.',
    ja: 'AIによってリバースエンジニアリングされたあなたの一日。MyDayはパターンを学び、エネルギーのピークを予測し、本当に効果的なことに時間を再構築します。行動フィードバックループに基づき毎週適応します。',
    he: 'היום שלך, מהונדס לאחור על ידי AI. MyDay לומד את הדפוסים שלך, חוזה שיאי אנרגיה ומבנה מחדש את הזמן. המערכת מתאימה עצמה שבועית על בסיס לולאות משוב התנהגותיות.'
  },
  'itsgoodtoday': {
    en: 'No tracking marathons. No meditation pressure. Just one small thing today that makes tomorrow slightly better. A wellness companion designed for real humans, not fitness influencers. It uses micro-habit science to build sustainable change without overwhelming you.',
    ru: 'Никаких марафонов трекинга. Никакого давления медитацией. Просто одна маленькая вещь сегодня, которая сделает завтра чуть лучше. Использует науку микро-привычек для устойчивых изменений без перегрузки.',
    uk: 'Жодних марафонів трекінгу. Жодного тиску медитацією. Просто одна маленька річ сьогодні, яка зробить завтра трохи кращим. Використовує науку мікро-звичок для стійких змін без перевантаження.',
    fr: 'Pas de marathons de suivi. Pas de pression. Juste une petite chose aujourd\'hui qui rend demain un peu meilleur. Utilise la science des micro-habitudes pour un changement durable sans vous submerger.',
    ar: 'لا ماراثونات تتبع. لا ضغط. مجرد شيء صغير اليوم يجعل الغد أفضل. يستخدم علم العادات الصغيرة لبناء تغيير مستدام دون إرهاقك.',
    ja: 'トラッキングマラソンなし。プレッシャーなし。今日の小さな一つが、明日を少し良くする。マイクロハビットサイエンスを使い、圧倒することなく持続可能な変化を構築します。',
    he: 'בלי מרתוני מעקב. בלי לחץ. רק דבר קטן אחד היום. משתמש במדע מיקרו-הרגלים לשינוי בר-קיימא בלי להציף אותך.'
  },
  'mrx-health': {
    en: 'What happens when you mix medications? MRX.Health explores drug interactions through AI-driven bio-scan analysis — turning pharmacological complexity into clear, actionable safety insights. It cross-references thousands of compound combinations and flags risks before they become emergencies. No medical advice — just transparent data.',
    ru: 'Что произойдёт при смешении лекарств? MRX.Health исследует лекарственные взаимодействия через ИИ-анализ биосканирования. Перекрёстно проверяет тысячи комбинаций соединений и выявляет риски до того, как они станут экстренными. Без медицинских советов — только прозрачные данные.',
    uk: 'Що станеться при змішуванні ліків? MRX.Health досліджує лікарські взаємодії через ІІ-аналіз біосканування. Перехресно перевіряє тисячі комбінацій сполук та виявляє ризики до того, як вони стануть екстреними. Без медичних порад — лише прозорі дані.',
    fr: 'Que se passe-t-il quand vous mélangez des médicaments ? MRX.Health explore les interactions médicamenteuses via l\'IA. Il croise des milliers de combinaisons et signale les risques avant qu\'ils ne deviennent urgents. Pas de conseil médical — juste des données transparentes.',
    ar: 'ماذا يحدث عند خلط الأدوية؟ يستكشف MRX.Health التفاعلات الدوائية بالذكاء الاصطناعي. يتحقق من آلاف تركيبات المركبات ويحدد المخاطر قبل أن تصبح طوارئ. بدون نصائح طبية — فقط بيانات شفافة.',
    ja: '薬を混ぜるとどうなる？MRX.HealthはAIバイオスキャンで薬物相互作用を探求。数千の化合物の組み合わせを照合し、緊急事態になる前にリスクを検出します。医療アドバイスなし — 透明なデータのみ。',
    he: 'מה קורה כשמערבבים תרופות? MRX.Health חוקר אינטראקציות תרופתיות באמצעות AI. בודק אלפי שילובי תרכובות ומזהה סיכונים לפני שהם הופכים למצבי חירום. ללא ייעוץ רפואי — רק נתונים שקופים.'
  },
  'table-served': {
    en: 'Not another recipe app. TableServed is a deterministic nutrition protocol — weekly Stability Boxes, a fixed Friday Lock cycle, zero ingredient improvisation. Family nutrition, engineered with the precision of a supply chain. Every box is pre-calculated for macro balance, allergen safety, and household size.',
    ru: 'Не очередное приложение рецептов. TableServed — детерминистический протокол питания: еженедельные Stability Box\'ы, фиксированный цикл Friday Lock, ноль импровизаций. Каждый бокс рассчитан по макро-балансу, аллергенной безопасности и размеру семьи.',
    uk: 'Не черговий додаток рецептів. TableServed — детерміністичний протокол харчування: щотижневі Stability Box\'и, фіксований цикл Friday Lock, нуль імпровізацій. Кожен бокс розрахований по макро-балансу, алергенній безпеці та розміру родини.',
    fr: 'Pas une autre appli de recettes. TableServed est un protocole nutritionnel déterministe — Stability Boxes hebdomadaires, cycle Friday Lock fixe, zéro improvisation. Chaque box est pré-calculée pour l\'équilibre macro, la sécurité allergène et la taille du foyer.',
    ar: 'ليس تطبيق وصفات آخر. TableServed بروتوكول تغذية حتمي — صناديق استقرار أسبوعية، دورة قفل الجمعة، صفر ارتجال. كل صندوق محسوب مسبقاً للتوازن الغذائي وسلامة المواد المسببة للحساسية وحجم الأسرة.',
    ja: 'ただのレシピアプリではありません。TableServedは決定論的栄養プロトコル — 毎週のStability Box、Friday Lockサイクル、即興ゼロ。各ボックスはマクロバランス、アレルゲン安全性、世帯サイズに基づいて事前計算されています。',
    he: 'לא עוד אפליקציית מתכונים. TableServed הוא פרוטוקול תזונתי דטרמיניסטי — קופסאות יציבות שבועיות, מחזור נעילת שישי, אפס אלתור. כל קופסה מחושבת מראש לאיזון מאקרו, בטיחות אלרגנים וגודל משק הבית.'
  },
  'baseline': {
    en: 'Health logic, simplified to 4 steps. BaseLine takes complex clinical data and turns it into a launchpad — Biological Handshake, Baseline Ingestion, Marker Synthesis, Prognostic Launch. Your health journey starts with understanding where you stand. It replaces months of fragmented testing with one structured onboarding sequence.',
    ru: 'Логика здоровья, упрощённая до 4 шагов. BaseLine берёт сложные клинические данные и превращает в стартовую площадку — Biological Handshake, Baseline Ingestion, Marker Synthesis, Prognostic Launch. Заменяет месяцы разрозненных тестов одной структурированной последовательностью.',
    uk: 'Логіка здоров\'я, спрощена до 4 кроків. BaseLine бере складні клінічні дані і перетворює на стартовий майданчик. Замінює місяці розрізнених тестів однією структурованою послідовністю.',
    fr: 'La logique de santé en 4 étapes. BaseLine transforme des données cliniques complexes en rampe de lancement. Il remplace des mois de tests fragmentés par une séquence d\'intégration structurée.',
    ar: 'منطق الصحة في 4 خطوات. يحول BaseLine البيانات السريرية المعقدة إلى منصة انطلاق. يستبدل أشهر من الاختبارات المتفرقة بتسلسل تأهيل منظم واحد.',
    ja: '健康ロジックを4ステップに簡素化。BaseLineは複雑な臨床データを発射台に変えます。何ヶ月もの断片的なテストを、一つの構造化されたオンボーディングシーケンスに置き換えます。',
    he: 'לוגיקת בריאות ב-4 צעדים. BaseLine הופך נתונים קליניים מורכבים לכן שיגור. מחליף חודשים של בדיקות מפוזרות ברצף קליטה מובנה אחד.'
  },
  'saven': {
    en: 'SAVEN is not a wellness app — it\'s an Infrastructure of Continuous Execution. Built on a 5-step operational cycle (Context → Action → Verification → Control → Support), it sits within the 4-level BioMath architecture hierarchy. SAVEN doesn\'t motivate you — it creates an environment where execution happens automatically. The "Three Environments" logic separates your physical, digital, and social contexts, and the economic model is designed around high exit costs and growing LTV. Once inside, the system sustains itself.',
    ru: 'SAVEN — не велнес-приложение, а Инфраструктура Непрерывного Исполнения. Построен на 5-шаговом операционном цикле (Контекст → Действие → Верификация → Контроль → Поддержка) внутри 4-уровневой архитектуры BioMath. SAVEN не мотивирует — он создаёт среду, где исполнение происходит автоматически. Логика «Трёх Сред» разделяет физический, цифровой и социальный контексты, а экономическая модель построена на высоких затратах выхода и растущем LTV. Попав внутрь, система поддерживает себя сама.',
    uk: 'SAVEN — не велнес-додаток, а Інфраструктура Безперервного Виконання. Побудований на 5-кроковому операційному циклі (Контекст → Дія → Верифікація → Контроль → Підтримка) всередині 4-рівневої архітектури BioMath. SAVEN не мотивує — він створює середовище, де виконання відбувається автоматично. Логіка «Трьох Середовищ» розділяє фізичний, цифровий та соціальний контексти, а економічна модель побудована на високих витратах виходу та зростаючому LTV.',
    fr: 'SAVEN n\'est pas une appli bien-être — c\'est une Infrastructure d\'Exécution Continue. Basé sur un cycle opérationnel en 5 étapes (Contexte → Action → Vérification → Contrôle → Support) au sein de l\'architecture BioMath à 4 niveaux. SAVEN ne motive pas — il crée un environnement où l\'exécution est automatique. La logique des « Trois Environnements » sépare les contextes physique, numérique et social, avec un modèle économique fondé sur des coûts de sortie élevés et un LTV croissant.',
    ar: 'SAVEN ليس تطبيق صحة — إنه بنية التنفيذ المستمر. مبني على دورة تشغيلية من 5 خطوات (سياق ← عمل ← تحقق ← تحكم ← دعم) ضمن هرمية BioMath من 4 مستويات. لا يحفز — بل يخلق بيئة يحدث فيها التنفيذ تلقائياً. منطق "البيئات الثلاث" يفصل السياقات المادية والرقمية والاجتماعية، والنموذج الاقتصادي مبني على تكاليف خروج عالية وقيمة عمر متنامية.',
    ja: 'SAVENはウェルネスアプリではなく、継続的実行のインフラです。4レベルのBioMathアーキテクチャ内の5ステップ運用サイクル（コンテキスト→アクション→検証→制御→サポート）で構築。動機づけではなく、実行が自動的に起こる環境を作ります。「三つの環境」ロジックが物理的・デジタル・社会的コンテキストを分離し、経済モデルは高い離脱コストと成長するLTVを中心に設計されています。',
    he: 'SAVEN הוא לא אפליקציית בריאות — הוא תשתית של ביצוע רציף. בנוי על מחזור תפעולי בן 5 שלבים (הקשר ← פעולה ← אימות ← בקרה ← תמיכה) בתוך הירארכיית BioMath בת 4 רמות. לא מניע — יוצר סביבה שבה הביצוע קורה אוטומטית. לוגיקת "שלוש הסביבות" מפרידה הקשרים פיזיים, דיגיטליים וחברתיים, והמודל הכלכלי בנוי על עלויות יציאה גבוהות ו-LTV צומח.'
  },
  'luna-balance': {
    en: 'Silence as technology. Luna Balance is a women\'s mindfulness platform built on \'Silence Technology\' and \'Relationship Mode\' — designed for emotional depth, inner stillness, and authentic connection. It doesn\'t prescribe meditation routines; it builds a personalized emotional architecture that adapts to hormonal and relational cycles.',
    ru: 'Тишина как технология. Luna Balance — женская платформа осознанности на основе «Технологии тишины» и «Режима отношений». Не назначает медитацию — строит персонализированную эмоциональную архитектуру, адаптирующуюся к гормональным и отношенческим циклам.',
    uk: 'Тиша як технологія. Luna Balance — жіноча платформа усвідомленості на основі «Технології тиші» та «Режиму стосунків». Не призначає медитацію — будує персоналізовану емоційну архітектуру, що адаптується до гормональних та стосункових циклів.',
    fr: 'Le silence comme technologie. Luna Balance est une plateforme de pleine conscience pour femmes. Elle ne prescrit pas de routines de méditation — elle construit une architecture émotionnelle personnalisée qui s\'adapte aux cycles hormonaux et relationnels.',
    ar: 'الصمت كتقنية. Luna Balance منصة وعي نسائية مبنية على "تقنية الصمت" و"وضع العلاقات". لا تصف تمارين تأمل — بل تبني بنية عاطفية مخصصة تتكيف مع الدورات الهرمونية والعلاقاتية.',
    ja: 'テクノロジーとしての静寂。Luna Balanceは「サイレンステクノロジー」と「リレーションシップモード」に基づく女性向けマインドフルネスプラットフォーム。瞑想ルーチンを処方せず、ホルモンと関係性のサイクルに適応するパーソナライズされた感情アーキテクチャを構築します。',
    he: 'שתיקה כטכנולוגיה. Luna Balance פלטפורמת מיינדפולנס לנשים. לא רושמת שגרות מדיטציה — בונה ארכיטקטורה רגשית מותאמת אישית שמסתגלת למחזורים הורמונליים ויחסיים.'
  },
  'stresscore': {
    en: 'Stress isn\'t the enemy — misunderstanding it is. StressCore maps your stress patterns and turns data into actionable calm. Science-backed resilience, not motivational posters. The system distinguishes productive stress from chronic overload and teaches your body to recalibrate in real-time.',
    ru: 'Стресс — не враг. Непонимание стресса — враг. StressCore картирует паттерны стресса и превращает данные в действенное спокойствие. Система различает продуктивный стресс от хронической перегрузки и учит тело рекалибровке в реальном времени.',
    uk: 'Стрес — не ворог. Нерозуміння стресу — ворог. StressCore картографує патерни стресу і перетворює дані на дієвий спокій. Система розрізняє продуктивний стрес від хронічного перевантаження та вчить тіло рекалібруватися в реальному часі.',
    fr: 'Le stress n\'est pas l\'ennemi — le mal comprendre, si. StressCore cartographie vos schémas de stress. Le système distingue le stress productif de la surcharge chronique et enseigne à votre corps à se recalibrer en temps réel.',
    ar: 'التوتر ليس العدو — سوء فهمه هو العدو. يرسم StressCore خرائط أنماط التوتر. يميز النظام بين التوتر المنتج والحمل الزائد المزمن ويعلم جسمك إعادة المعايرة في الوقت الفعلي.',
    ja: 'ストレスは敵ではない — それを誤解することが敵です。StressCoreはストレスパターンをマッピング。生産的ストレスと慢性過負荷を区別し、リアルタイムで体を再キャリブレーションさせます。',
    he: 'סטרס הוא לא האויב — אי-הבנה שלו כן. StressCore ממפה דפוסי סטרס. המערכת מבחינה בין סטרס פרודוקטיבי לעומס כרוני ומלמדת את הגוף לכייל מחדש בזמן אמת.'
  },
  'vitalcore': {
    en: 'Every heartbeat tells a story. VitalCore captures, analyzes, and interprets vital signs in real-time — turning raw physiological data into health narratives you can actually act on. It connects to wearables, lab results, and clinical devices to create a unified vitals dashboard.',
    ru: 'Каждое сердцебиение рассказывает историю. VitalCore захватывает и интерпретирует показатели в реальном времени. Подключается к носимым устройствам, лабораторным результатам и клиническим приборам для создания единой панели показателей жизнедеятельности.',
    uk: 'Кожне серцебиття розповідає історію. VitalCore захоплює та інтерпретує показники в реальному часі. Підключається до носимих пристроїв, лабораторних результатів та клінічних приладів для створення єдиної панелі показників.',
    fr: 'Chaque battement de cœur raconte une histoire. VitalCore capture et interprète les signes vitaux en temps réel. Il se connecte aux wearables, résultats de labo et dispositifs cliniques pour un tableau de bord unifié des signes vitaux.',
    ar: 'كل نبضة قلب تحكي قصة. يلتقط VitalCore العلامات الحيوية ويفسرها في الوقت الفعلي. يتصل بالأجهزة القابلة للارتداء ونتائج المختبر والأجهزة السريرية للوحة معلومات موحدة.',
    ja: 'すべての心拍がストーリーを語ります。VitalCoreはバイタルサインをリアルタイムで捕捉・解釈。ウェアラブル、ラボ結果、臨床デバイスに接続し、統合バイタルダッシュボードを作成します。',
    he: 'כל פעימת לב מספרת סיפור. VitalCore לוכד ומפרש סימנים חיוניים בזמן אמת. מתחבר למכשירים לבישים, תוצאות מעבדה ומכשירים קליניים ללוח מחוונים אחיד.'
  },
  'bioagecore': {
    en: 'Your passport says one age. Your biology says another. BioAgeCore calculates your true biological age and gives you a personalized roadmap to change it — because aging is negotiable. It combines epigenetic markers, metabolic panels, and lifestyle data into one actionable age score.',
    ru: 'Паспорт говорит один возраст. Биология — другой. BioAgeCore рассчитывает истинный биологический возраст и даёт дорожную карту для его изменения. Объединяет эпигенетические маркеры, метаболические панели и данные образа жизни в один рабочий показатель возраста.',
    uk: 'Паспорт каже один вік. Біологія — інший. BioAgeCore розраховує справжній біологічний вік і дає дорожню карту для його зміни. Об\'єднує епігенетичні маркери, метаболічні панелі та дані способу життя в один робочий показник віку.',
    fr: 'Votre passeport dit un âge. Votre biologie en dit un autre. BioAgeCore calcule votre véritable âge biologique. Il combine marqueurs épigénétiques, panels métaboliques et données de style de vie en un score d\'âge actionnable.',
    ar: 'جواز سفرك يقول عمراً. بيولوجيتك تقول آخر. يحسب BioAgeCore عمرك البيولوجي الحقيقي. يجمع العلامات الجينية والألواح الأيضية وبيانات نمط الحياة في درجة عمر واحدة قابلة للتنفيذ.',
    ja: 'パスポートはひとつの年齢を示します。生物学は別の年齢を。BioAgeCoreは真の生物学的年齢を計算。エピジェネティックマーカー、代謝パネル、ライフスタイルデータを一つの実用的な年齢スコアに統合します。',
    he: 'הדרכון אומר גיל אחד. הביולוגיה אומרת אחר. BioAgeCore מחשב את הגיל הביולוגי האמיתי. משלב סמנים אפיגנטיים, פאנלים מטבוליים ונתוני אורח חיים לציון גיל אחד בר-פעולה.'
  },
  'longevitycore': {
    en: 'Living longer isn\'t the goal — living better, longer, is. LongevityCore is a precision anti-aging system that goes beyond supplements and serums into the architecture of biological time. It tracks cellular aging markers and builds intervention protocols personalized to your biology.',
    ru: 'Жить дольше — не цель. Жить лучше и дольше — цель. LongevityCore — прецизионная антивозрастная система за пределами добавок, в архитектуре биологического времени. Отслеживает маркеры клеточного старения и строит протоколы вмешательства, персонализированные под вашу биологию.',
    uk: 'Жити довше — не мета. Жити краще і довше — мета. LongevityCore — прецизійна антивікова система за межами добавок. Відстежує маркери клітинного старіння та будує протоколи втручання, персоналізовані під вашу біологію.',
    fr: 'Vivre plus longtemps n\'est pas l\'objectif — vivre mieux, plus longtemps, oui. LongevityCore suit les marqueurs du vieillissement cellulaire et construit des protocoles d\'intervention personnalisés selon votre biologie.',
    ar: 'العيش أطول ليس الهدف — العيش بشكل أفضل وأطول هو الهدف. LongevityCore يتتبع علامات الشيخوخة الخلوية ويبني بروتوكولات تدخل مخصصة لبيولوجيتك.',
    ja: '長生きが目標ではなく、より良く長く生きることが目標。LongevityCoreは細胞老化マーカーを追跡し、あなたの生物学に合わせた介入プロトコルを構築します。',
    he: 'לחיות יותר זה לא המטרה — לחיות טוב יותר, יותר זמן. LongevityCore עוקב אחר סמני הזדקנות תאית ובונה פרוטוקולי התערבות מותאמים לביולוגיה שלך.'
  },
  'familycore': {
    en: 'Health isn\'t individual — it\'s generational. FamilyCore connects health data across your household, creating a unified family health intelligence layer that grows with every member. It detects hereditary risk patterns and builds preventive protocols for the entire household.',
    ru: 'Здоровье — не индивидуально. Оно поколенческое. FamilyCore связывает данные здоровья домохозяйства, создавая единый слой семейной аналитики. Выявляет наследственные паттерны рисков и строит превентивные протоколы для всей семьи.',
    uk: 'Здоров\'я — не індивідуальне. Воно поколінське. FamilyCore з\'єднує дані здоров\'я домогосподарства. Виявляє спадкові патерни ризиків та будує превентивні протоколи для всієї родини.',
    fr: 'La santé n\'est pas individuelle — elle est générationnelle. FamilyCore connecte les données de santé de votre foyer. Il détecte les schémas de risque héréditaires et construit des protocoles préventifs pour tout le foyer.',
    ar: 'الصحة ليست فردية — إنها جيلية. يربط FamilyCore بيانات الصحة عبر أسرتك. يكتشف أنماط المخاطر الوراثية ويبني بروتوكولات وقائية لكل الأسرة.',
    ja: '健康は個人のものではなく世代のもの。FamilyCoreは家庭全体の健康データを接続。遺伝性リスクパターンを検出し、家族全体の予防プロトコルを構築します。',
    he: 'בריאות היא לא אישית — היא דורית. FamilyCore מחבר נתוני בריאות ברחבי משק הבית. מזהה דפוסי סיכון תורשתיים ובונה פרוטוקולים מונעים לכל המשפחה.'
  },
  'seniorcore': {
    en: 'Aging with data, not just dignity. SeniorCore monitors cognitive and physical markers for older adults — delivering predictive care before problems become emergencies. It integrates caregiver dashboards and automated alerts, so families stay informed without being intrusive.',
    ru: 'Старение с данными, а не только с достоинством. SeniorCore мониторит когнитивные и физические маркеры — предиктивный уход до экстренных ситуаций. Интегрирует панели для ухаживающих и автоматические оповещения, чтобы семьи были информированы без навязчивости.',
    uk: 'Старіння з даними, а не лише з гідністю. SeniorCore моніторить когнітивні та фізичні маркери — предиктивний догляд до екстрених ситуацій. Інтегрує панелі для доглядачів та автоматичні сповіщення.',
    fr: 'Vieillir avec des données, pas seulement avec dignité. SeniorCore surveille les marqueurs cognitifs et physiques. Il intègre des tableaux de bord pour les soignants et des alertes automatisées pour que les familles restent informées.',
    ar: 'الشيخوخة مع البيانات. يراقب SeniorCore العلامات المعرفية والجسدية لكبار السن. يدمج لوحات معلومات لمقدمي الرعاية وتنبيهات تلقائية حتى تبقى العائلات على اطلاع دون تطفل.',
    ja: 'データとともに老いる。SeniorCoreは高齢者の認知的・身体的マーカーを監視。介護者ダッシュボードと自動アラートを統合し、家族が押し付けがましくなく情報を得られるようにします。',
    he: 'הזדקנות עם נתונים. SeniorCore עוקב אחר סמנים קוגניטיביים ופיזיים. משלב לוחות מחוונים למטפלים והתראות אוטומטיות כדי שמשפחות יישארו מעודכנות.'
  },
  'skincore': {
    en: 'Your skin is your largest organ — treat it like one. SkinCore uses AI dermatology to track, analyze, and guide personalized skin care routines with clinical-grade precision. It monitors changes over time and flags anomalies that deserve professional attention.',
    ru: 'Кожа — ваш самый большой орган. SkinCore использует ИИ-дерматологию для персонализации ухода с клинической точностью. Отслеживает изменения во времени и выявляет аномалии, требующие профессионального внимания.',
    uk: 'Шкіра — ваш найбільший орган. SkinCore використовує ІІ-дерматологію для персоналізації догляду з клінічною точністю. Відстежує зміни з часом та виявляє аномалії, що потребують професійної уваги.',
    fr: 'Votre peau est votre plus grand organe. SkinCore utilise la dermatologie IA avec une précision clinique. Il surveille les changements au fil du temps et signale les anomalies nécessitant une attention professionnelle.',
    ar: 'بشرتك أكبر عضو لديك. يستخدم SkinCore الأمراض الجلدية بالذكاء الاصطناعي بدقة سريرية. يراقب التغييرات بمرور الوقت ويحدد الشذوذات التي تستحق اهتماماً مهنياً.',
    ja: '肌はあなたの最大の臓器。SkinCoreはAI皮膚科学で臨床グレードの精度でパーソナライズされたスキンケアをガイド。経時変化を監視し、専門的注意が必要な異常を検出します。',
    he: 'העור הוא האיבר הגדול ביותר. SkinCore משתמש בדרמטולוגיית AI בדיוק קליני. עוקב אחר שינויים לאורך זמן ומזהה חריגות שמצדיקות תשומת לב מקצועית.'
  },
  'digital-invest-portfolio': {
    en: 'The umbrella that holds it all. Digital Invest is a multi-sector portfolio company incubating and scaling technology ventures from health to robotics to food systems. Every project shares infrastructure, data layers, and operational principles — creating compounding value across the entire ecosystem.',
    ru: 'Зонтик, который держит всё. Digital Invest — мультисекторная портфельная компания, инкубирующая и масштабирующая проекты от здоровья до робототехники. Каждый проект делит инфраструктуру, дата-слои и операционные принципы — создавая совокупную ценность по всей экосистеме.',
    uk: 'Парасолька, що тримає все. Digital Invest — мультисекторна портфельна компанія. Кожен проєкт ділить інфраструктуру, дата-шари та операційні принципи — створюючи сукупну цінність по всій екосистемі.',
    fr: 'Le parapluie qui rassemble tout. Digital Invest est une société de portefeuille multi-secteur. Chaque projet partage infrastructure, couches de données et principes opérationnels — créant une valeur composée à travers l\'écosystème.',
    ar: 'المظلة التي تحمل كل شيء. Digital Invest شركة محفظة متعددة القطاعات. كل مشروع يتشارك البنية التحتية وطبقات البيانات والمبادئ التشغيلية — مما يخلق قيمة مركبة عبر النظام بأكمله.',
    ja: 'すべてを束ねる傘。Digital Investはマルチセクターポートフォリオ企業。各プロジェクトがインフラ、データレイヤー、運営原則を共有し、エコシステム全体で複合的価値を創出します。',
    he: 'המטריה שמחזיקה הכל. Digital Invest חברת תיק השקעות רב-מגזרית. כל פרויקט חולק תשתית, שכבות נתונים ועקרונות תפעוליים — ויוצר ערך מצטבר לאורך כל המערכת.'
  },
};

const categoryIcons: Record<string, React.ReactNode> = {
  'Digital Health': <Activity className="w-4 h-4" />,
  'AgriTech': <Sprout className="w-4 h-4" />,
  'Robotics': <Cpu className="w-4 h-4" />,
  'Robotics Infrastructure': <Cpu className="w-4 h-4" />,
  'Workforce': <Layers className="w-4 h-4" />,
  'AI Productivity': <Brain className="w-4 h-4" />,
  'Lifestyle': <Sparkles className="w-4 h-4" />,
  'Wellness': <Heart className="w-4 h-4" />,
  'MedTech': <Activity className="w-4 h-4" />,
  'FoodTech': <Utensils className="w-4 h-4" />,
  'HealthTech': <Activity className="w-4 h-4" />,
  'BioTech': <Zap className="w-4 h-4" />,
  'Mental Health': <Brain className="w-4 h-4" />,
  'Vitals': <Activity className="w-4 h-4" />,
  'Longevity': <Sparkles className="w-4 h-4" />,
  'Anti-Aging': <Sparkles className="w-4 h-4" />,
  'Family': <Heart className="w-4 h-4" />,
  'Senior Care': <Heart className="w-4 h-4" />,
  'Beauty': <Sparkles className="w-4 h-4" />,
  'Infrastructure': <Layers className="w-4 h-4" />,
  "Women's Health": <Heart className="w-4 h-4" />,
};

const accentGradients: Record<string, string> = {
  'biomath-core': 'from-cyan-500/20 to-cyan-500/0',
  'biomathcore': 'from-cyan-500/20 to-cyan-500/0',
  'biomathlife': 'from-sky-500/20 to-sky-500/0',
  'terraaero': 'from-emerald-500/20 to-emerald-500/0',
  'agron': 'from-lime-500/20 to-lime-500/0',
  'agron-work': 'from-amber-500/20 to-amber-500/0',
  'myday': 'from-indigo-500/20 to-indigo-500/0',
  'itsgoodtoday': 'from-orange-500/20 to-orange-500/0',
  'mrx-health': 'from-rose-500/20 to-rose-500/0',
  'table-served': 'from-amber-400/20 to-amber-400/0',
  'baseline': 'from-teal-500/20 to-teal-500/0',
  'saven': 'from-violet-500/20 to-violet-500/0',
  'luna-balance': 'from-pink-500/20 to-pink-500/0',
  'stresscore': 'from-purple-500/20 to-purple-500/0',
  'vitalcore': 'from-red-500/20 to-red-500/0',
  'bioagecore': 'from-fuchsia-500/20 to-fuchsia-500/0',
  'longevitycore': 'from-emerald-400/20 to-emerald-400/0',
  'familycore': 'from-blue-500/20 to-blue-500/0',
  'seniorcore': 'from-stone-500/20 to-stone-500/0',
  'skincore': 'from-pink-400/20 to-pink-400/0',
  'digital-invest-portfolio': 'from-slate-400/20 to-slate-400/0',
};

const accentDots: Record<string, string> = {
  'biomath-core': 'bg-cyan-500',
  'biomathcore': 'bg-cyan-500',
  'biomathlife': 'bg-sky-500',
  'terraaero': 'bg-emerald-500',
  'agron': 'bg-lime-500',
  'agron-work': 'bg-amber-500',
  'myday': 'bg-indigo-500',
  'itsgoodtoday': 'bg-orange-500',
  'mrx-health': 'bg-rose-500',
  'table-served': 'bg-amber-400',
  'baseline': 'bg-teal-500',
  'saven': 'bg-violet-500',
  'luna-balance': 'bg-pink-500',
  'stresscore': 'bg-purple-500',
  'vitalcore': 'bg-red-500',
  'bioagecore': 'bg-fuchsia-500',
  'longevitycore': 'bg-emerald-400',
  'familycore': 'bg-blue-500',
  'seniorcore': 'bg-stone-500',
  'skincore': 'bg-pink-400',
  'digital-invest-portfolio': 'bg-slate-400',
};

interface Project {
  id: string;
  slug: string;
  title: string;
  short_description: string;
  category: string;
  status: string;
}

const PortfolioOverview = () => {
  const { t, i18n } = useTranslation();
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const lang = i18n.language;

  useEffect(() => {
    const fetchProjects = async () => {
      const { data } = await supabase
        .from('projects')
        .select('id, slug, title, short_description, category, status')
        .eq('is_visible', true)
        .order('priority', { ascending: false })
        .order('created_at', { ascending: true });
      if (data) setProjects(data);
      setLoading(false);
    };
    fetchProjects();
  }, []);

  const getDescription = (slug: string, dbDesc: string) => {
    const texts = overviewTexts[slug];
    if (texts) return texts[lang] || texts.en || dbDesc;
    return dbDesc;
  };

  // Group projects into sectors for visual variety
  const sectors = projects.reduce<Record<string, Project[]>>((acc, p) => {
    const sector = p.category;
    if (!acc[sector]) acc[sector] = [];
    acc[sector].push(p);
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero — editorial style */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Abstract background shapes */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/[0.03] via-transparent to-transparent" />
          <div className="absolute top-32 -left-20 w-[500px] h-[500px] rounded-full bg-primary/[0.04] blur-[100px]" />
          <div className="absolute -bottom-20 right-0 w-[600px] h-[400px] rounded-full bg-accent/[0.04] blur-[120px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-12 bg-primary/60" />
              <span className="text-xs font-semibold text-primary tracking-[0.2em] uppercase">
                Digital Invest Inc.
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] tracking-tight">
              {lang === 'ru' ? (
                <>Все проекты.<br /><span className="text-primary/80">Одна экосистема.</span></>
              ) : (
                <>Every project.<br /><span className="text-primary/80">One ecosystem.</span></>
              )}
            </h1>

            <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              {lang === 'ru'
                ? 'Здесь нет маркетинговой воды. Каждый проект — в нескольких предложениях. Кликните, чтобы погрузиться глубже.'
                : 'No marketing fluff. Every project in a few sentences. Click to dive deeper.'}
            </p>

            <div className="mt-10 flex items-center gap-6">
              <div className="flex items-center gap-2.5">
                <div className="h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse shadow-lg shadow-green-500/30" />
                <span className="text-sm font-medium text-foreground">
                  {projects.length} {lang === 'ru' ? 'проектов' : 'projects'}
                </span>
              </div>
              <div className="h-4 w-px bg-border" />
              <span className="text-sm text-muted-foreground">
                {Object.keys(sectors).length} {lang === 'ru' ? 'секторов' : 'sectors'}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects — magazine layout */}
      <section className="container mx-auto px-4 pb-24">
        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : (
          <div className="space-y-3">
            {projects.map((project, index) => {
              const gradient = accentGradients[project.slug] || 'from-primary/20 to-primary/0';
              const dot = accentDots[project.slug] || 'bg-primary';
              const icon = categoryIcons[project.category] || <Zap className="w-4 h-4" />;
              const isHovered = hoveredIdx === index;

              return (
                <Link
                  key={project.id}
                  to={`/projects/${project.slug}`}
                  className="group block"
                  onMouseEnter={() => setHoveredIdx(index)}
                  onMouseLeave={() => setHoveredIdx(null)}
                >
                  <div
                    className={`
                      relative overflow-hidden rounded-2xl
                      border border-border/40
                      transition-all duration-500 ease-out
                      ${isHovered ? 'bg-card shadow-xl shadow-primary/[0.06] scale-[1.01] border-border/60' : 'bg-card/40'}
                    `}
                  >
                    {/* Gradient accent overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                    <div className="relative z-10 p-6 md:p-8">
                      <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                        {/* Left: index + dot */}
                        <div className="flex items-center gap-4 md:flex-col md:items-center md:gap-2 shrink-0 md:w-16">
                          <span className="font-mono text-xs text-muted-foreground/50 tabular-nums">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                          <div className={`h-2 w-2 rounded-full ${dot} transition-all duration-300 ${isHovered ? 'scale-150 shadow-lg' : ''}`}
                            style={isHovered ? { boxShadow: `0 0 12px currentColor` } : {}}
                          />
                        </div>

                        {/* Center: content */}
                        <div className="flex-1 min-w-0 space-y-3">
                          <div className="flex flex-wrap items-center gap-3">
                            <h2 className={`text-2xl md:text-3xl font-extrabold tracking-tight transition-colors duration-300 ${isHovered ? 'text-primary' : 'text-foreground'}`}>
                              {project.title}
                            </h2>
                            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted/60 text-muted-foreground text-xs font-medium">
                              {icon}
                              <span>{project.category}</span>
                            </div>
                            {(project.slug === 'biomath-core' || project.slug === 'biomathcore') && (
                              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold border border-primary/20">
                                <Layers className="w-3.5 h-3.5" />
                                <span>{lang === 'ru' ? 'Флагман · 200+ сервисов' : lang === 'uk' ? 'Флагман · 200+ сервісів' : lang === 'fr' ? 'Projet phare · 200+ services' : lang === 'ar' ? 'المشروع الرئيسي · 200+ خدمة' : lang === 'ja' ? 'フラッグシップ · 200+サービス' : lang === 'he' ? 'פרויקט דגל · 200+ שירותים' : 'Flagship · 200+ services'}</span>
                              </div>
                            )}
                          </div>

                          <p className="text-[15px] md:text-base text-muted-foreground leading-[1.7] max-w-3xl">
                            {getDescription(project.slug, project.short_description)}
                          </p>
                        </div>

                        {/* Right: arrow */}
                        <div className="hidden md:flex items-center shrink-0 self-center">
                          <div className={`
                            w-10 h-10 rounded-full border border-border/50 flex items-center justify-center
                            transition-all duration-300
                            ${isHovered ? 'bg-primary border-primary text-primary-foreground scale-110' : 'text-muted-foreground/40'}
                          `}>
                            <ArrowUpRight className="h-4 w-4" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-16 pt-12 border-t border-border/30">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-sm text-muted-foreground/60">
                {lang === 'ru'
                  ? 'Список обновляется автоматически при добавлении новых проектов.'
                  : 'This list updates automatically as new projects are added.'}
              </p>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors text-sm font-semibold"
            >
              {lang === 'ru' ? 'Полный каталог проектов' : 'Full project catalog'}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PortfolioOverview;
