import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Loader2, ArrowUpRight, Layers } from 'lucide-react';
import { getProjectIcon } from '@/components/icons/ProjectIcons';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import portfolioHero from '@/assets/heroes/portfolio-overview.webp';

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
    en: 'Infrastructure for autonomous operations. AGRON combines autonomous systems, software, intelligence, training, field operations and security into deployable operational capability — including AGRON Maritime for yachts, marinas, ports and facilities, and the StarWall intelligence layer. Human in command at every critical decision.',
    ru: 'Инфраструктура автономных операций. AGRON объединяет автономные системы, ПО, аналитику, обучение, полевые операции и безопасность в готовую операционную способность — включая AGRON Maritime для яхт, марин, портов и объектов и аналитический слой StarWall. Критические решения принимает человек.',
    uk: 'Інфраструктура автономних операцій. AGRON поєднує автономні системи, ПЗ, аналітику, навчання, польові операції та безпеку — включно з AGRON Maritime для яхт, марин, портів і об’єктів та аналітичним шаром StarWall. Критичні рішення ухвалює людина.',
    fr: 'Infrastructure pour opérations autonomes. AGRON réunit systèmes autonomes, logiciels, renseignement, formation, opérations de terrain et sécurité, dont AGRON Maritime et la couche d’intelligence StarWall. L’humain reste décisionnaire.',
    ar: 'بنية تحتية للعمليات الذاتية. يجمع AGRON بين الأنظمة الذاتية والبرمجيات والتحليل والتدريب والعمليات الميدانية والأمن، بما في ذلك AGRON Maritime وطبقة StarWall التحليلية. القرار الحاسم يبقى للإنسان.',
    ja: '自律オペレーションのためのインフラ。AGRONは自律システム、ソフトウェア、インテリジェンス、訓練、現場運用、セキュリティを統合します。AGRON MaritimeとStarWallインテリジェンス層を含み、重要な判断は常に人間が行います。',
    he: 'תשתית לפעולות אוטונומיות. AGRON משלב מערכות אוטונומיות, תוכנה, מודיעין, הכשרה, פעילות שטח ואבטחה — כולל AGRON Maritime ושכבת המודיעין StarWall. ההחלטות הקריטיות נשארות בידי אדם.'
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
  'mrx-health': {
    en: 'What happens when you mix medications? MRX.Health explores drug interactions through AI-driven bio-scan analysis — turning pharmacological complexity into clear, actionable safety insights. It cross-references thousands of compound combinations and flags risks before they become emergencies. No medical advice — just transparent data.',
    ru: 'Что произойдёт при смешении лекарств? MRX.Health исследует лекарственные взаимодействия через ИИ-анализ биосканирования. Перекрёстно проверяет тысячи комбинаций соединений и выявляет риски до того, как они станут экстренными. Без медицинских советов — только прозрачные данные.',
    uk: 'Що станеться при змішуванні ліків? MRX.Health досліджує лікарські взаємодії через ІІ-аналіз біосканування. Перехресно перевіряє тисячі комбінацій сполук та виявляє ризики до того, як вони стануть екстреними. Без медичних порад — лише прозорі дані.',
    fr: 'Que se passe-t-il quand vous mélangez des médicaments ? MRX.Health explore les interactions médicamenteuses via l\'IA. Il croise des milliers de combinaisons et signale les risques avant qu\'ils ne deviennent urgents. Pas de conseil médical — juste des données transparentes.',
    ar: 'ماذا يحدث عند خلط الأدوية؟ يستكشف MRX.Health التفاعلات الدوائية بالذكاء الاصطناعي. يتحقق من آلاف تركيبات المركبات ويحدد المخاطر قبل أن تصبح طوارئ. بدون نصائح طبية — فقط بيانات شفافة.',
    ja: '薬を混ぜるとどうなる？MRX.HealthはAIバイオスキャンで薬物相互作用を探求。数千の化合物の組み合わせを照合し、緊急事態になる前にリスクを検出します。医療アドバイスなし — 透明なデータのみ。',
    he: 'מה קורה כשמערבבים תרופות? MRX.Health חוקר אינטראקציות תרופתיות באמצעות AI. בודק אלפי שילובי תרכובות ומזהה סיכונים לפני שהם הופכים למצבי חירום. ללא ייעוץ רפואי — רק נתונים שקופים.'
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
    en: 'SAVEN develops the intelligence, interaction, personalization, integration and safety-oriented technologies that can help robotic systems assist people in the physical world — mobility, physical tasks, rehabilitation support and everyday activities. SAVEN is broader than one robot: a hardware-flexible Human Assistance Layer (perception, human movement understanding, assistance intelligence, personalization, safety and control) designed to work across humanoid robots, mobile robots, robotic arms, wearable robotics and rehabilitation systems. Human authority remains. Status: architecture, research and development.',
    ru: 'SAVEN разрабатывает интеллект, взаимодействие, персонализацию, интеграцию и технологии безопасности, которые помогают роботизированным системам поддерживать людей в физическом мире — мобильность, физические задачи, поддержку реабилитации и повседневные действия. SAVEN шире одного робота: это аппаратно-гибкий слой человеческой поддержки (восприятие, понимание движения, интеллект помощи, персонализация, безопасность и контроль), рассчитанный на гуманоидных и мобильных роботов, роботизированные манипуляторы, носимую робототехнику и реабилитационные системы. Решение остаётся за человеком. Статус: архитектура, исследования и разработка.',
    uk: 'SAVEN розробляє інтелект, взаємодію, персоналізацію, інтеграцію та технології безпеки, які допомагають роботизованим системам підтримувати людей у фізичному світі — мобільність, фізичні завдання, підтримку реабілітації та щоденні дії. SAVEN ширший за одного робота: це апаратно-гнучкий шар людської підтримки (сприйняття, розуміння руху, інтелект допомоги, персоналізація, безпека та контроль) для гуманоїдних і мобільних роботів, маніпуляторів, носимої робототехніки та реабілітаційних систем. Рішення залишається за людиною. Статус: архітектура, дослідження та розробка.',
    fr: 'SAVEN développe l\'intelligence, l\'interaction, la personnalisation, l\'intégration et les technologies orientées sécurité qui peuvent aider les systèmes robotiques à assister les personnes dans le monde physique — mobilité, tâches physiques, soutien à la rééducation et activités quotidiennes. SAVEN dépasse un seul robot : une couche d\'assistance humaine indépendante du matériel (perception, compréhension du mouvement, intelligence d\'assistance, personnalisation, sécurité et contrôle) conçue pour des robots humanoïdes, mobiles, bras robotisés, robotique portable et systèmes de rééducation. L\'autorité humaine demeure. Statut : architecture, recherche et développement.',
    ar: 'تطوّر SAVEN تقنيات الذكاء والتفاعل والتخصيص والتكامل والسلامة التي يمكن أن تساعد الأنظمة الروبوتية على مساندة الإنسان في العالم المادي — الحركة والمهام البدنية ودعم إعادة التأهيل والأنشطة اليومية. SAVEN أوسع من روبوت واحد: طبقة مساعدة بشرية مرنة تجاه العتاد (الإدراك، فهم الحركة، ذكاء المساعدة، التخصيص، السلامة والتحكم) مصمّمة للعمل مع الروبوتات البشرية والمتحركة والأذرع الروبوتية والروبوتات القابلة للارتداء وأنظمة إعادة التأهيل. تبقى السلطة للإنسان. الحالة: بنية وبحث وتطوير.',
    ja: 'SAVENは、ロボットシステムが物理世界で人を支援できるようにするための知能・インタラクション・パーソナライゼーション・統合・安全指向の技術を開発しています。対象は移動、身体的タスク、リハビリ支援、日常活動です。SAVENは単一のロボットにとどまらず、ハードウェアに柔軟なヒューマン・アシスタンス・レイヤー（知覚、動作理解、支援知能、パーソナライゼーション、安全と制御）として、ヒューマノイド、移動ロボット、ロボットアーム、装着型ロボティクス、リハビリシステムでの動作を想定しています。権限は常に人間にあります。ステータス：アーキテクチャ・研究・開発。',
    he: 'SAVEN מפתחת את טכנולוגיות הבינה, האינטראקציה, ההתאמה האישית, האינטגרציה והבטיחות שיכולות לסייע למערכות רובוטיות לתמוך באנשים בעולם הפיזי — ניידות, משימות פיזיות, תמיכה בשיקום ופעילויות יומיומיות. SAVEN רחבה מרובוט אחד: שכבת סיוע אנושי גמישה לחומרה (תפיסה, הבנת תנועה, בינת סיוע, התאמה אישית, בטיחות ובקרה) המיועדת לרובוטים הומנואידים, רובוטים ניידים, זרועות רובוטיות, רובוטיקה לבישה ומערכות שיקום. הסמכות נשארת בידי האדם. סטטוס: ארכיטקטורה, מחקר ופיתוח.'
  },
  'health-intelligence-suite': {
    en: 'Five health directions merged into one product: Stress, Vital, BioAge, Senior and Skin. One signal layer, one history, one non-medical guidance model across stress, vitals, biological age, senior support and skin analysis.',
    ru: 'Пять направлений объединены в один продукт: Stress, Vital, BioAge, Senior и Skin. Общий слой сигналов, единая история наблюдений и единая немедицинская модель рекомендаций.',
    uk: 'П’ять напрямів об’єднані в один продукт: Stress, Vital, BioAge, Senior і Skin. Спільний шар сигналів, єдина історія спостережень та єдина немедична модель рекомендацій.'
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
  't1d': {
    en: 'A unified daily-life platform for people with Type 1 and Type 2 diabetes. T1/2D translates continuous signals into simple states — stable, changing, possible risk, recovery — and runs in two distinct modes so children, parents, caregivers and Type 2 adults aren\'t forced into the same experience. No alarm-driven dashboards. Less effort, better timing.',
    ru: 'Единая платформа повседневной жизни для людей с диабетом 1 и 2 типа. T1/2D переводит непрерывные сигналы в простые состояния — стабильно, изменяется, возможный риск, восстановление — и работает в двух раздельных режимах, чтобы дети, родители, опекуны и взрослые со 2 типом не получали одинаковый опыт. Без дашбордов и тревожных уведомлений по умолчанию.',
    uk: 'Єдина платформа повсякденного життя для людей з діабетом 1 та 2 типу. T1/2D перетворює безперервні сигнали на прості стани та працює у двох окремих режимах, щоб діти, батьки, опікуни та дорослі з 2 типом не мали однакового досвіду. Без дашбордів і тривожних сповіщень за замовчуванням.',
    fr: 'Une plateforme unifiée pour la vie quotidienne avec le diabète de type 1 et 2. T1/2D traduit les signaux continus en états simples et fonctionne en deux modes distincts pour que enfants, parents, aidants et adultes type 2 ne partagent pas la même expérience. Pas de tableaux de bord ni d\'alarmes par défaut.',
    ar: 'منصة موحدة للحياة اليومية لمرضى السكري من النوع 1 والنوع 2. يحول T1/2D الإشارات المستمرة إلى حالات بسيطة ويعمل بوضعين منفصلين حتى لا يضطر الأطفال والآباء ومقدمو الرعاية والبالغون من النوع 2 إلى نفس التجربة. بدون لوحات تحكم أو تنبيهات افتراضية.',
    ja: '1型・2型糖尿病の日常生活のための統合プラットフォーム。T1/2Dは連続信号をシンプルな状態に変換し、2つの独立したモードで動作するため、子供、親、介護者、2型の大人が同じ体験を強いられません。アラームベースのダッシュボードはありません。',
    he: 'פלטפורמה מאוחדת לחיי היומיום עם סוכרת מסוג 1 ו-2. T1/2D מתרגם אותות רציפים למצבים פשוטים ופועל בשני מצבים נפרדים כך שילדים, הורים, מטפלים ומבוגרים מסוג 2 לא נאלצים לחוות את אותה חוויה. ללא לוחות מחוונים מבוססי התראות כברירת מחדל.'
  },
  'starwall': {
    en: 'StarWall by AGRON — intelligence across the physical world. A software and integration layer that connects compatible sensors, equipment, operational systems, external data and human observations into one operating picture, with the responsible person always in command. Sold as software, managed intelligence or a full AGRON integrated deployment.',
    ru: 'StarWall by AGRON — интеллект для физического мира. Программный и интеграционный слой, который объединяет совместимые датчики, оборудование, операционные системы, внешние данные и наблюдения людей в единую операционную картину. Решение всегда принимает ответственный человек.',
    uk: 'StarWall by AGRON — інтелект для фізичного світу. Програмний та інтеграційний шар, що об’єднує сумісні датчики, обладнання, операційні системи, зовнішні дані та спостереження людей в єдину операційну картину.',
    fr: 'StarWall by AGRON — l’intelligence du monde physique. Une couche logicielle et d’intégration qui relie capteurs, équipements, systèmes opérationnels, données externes et observations humaines en une seule image opérationnelle.',
    ar: 'StarWall by AGRON — ذكاء للعالم المادي. طبقة برمجية وتكاملية تربط المستشعرات والمعدات والأنظمة التشغيلية والبيانات الخارجية وملاحظات البشر في صورة تشغيلية واحدة.',
    ja: 'StarWall by AGRON — 物理世界のためのインテリジェンス。センサー、機器、運用システム、外部データ、人の観察を一つの運用画面に統合するソフトウェア／統合レイヤーです。',
    he: 'StarWall by AGRON — מודיעין לעולם הפיזי. שכבת תוכנה ואינטגרציה המחברת חיישנים, ציוד, מערכות תפעוליות, נתונים חיצוניים ותצפיות אנוש לתמונה תפעולית אחת.'
  },
  'facetium': {
    en: 'A network of digital commercial environments. FACETIUM turns commerce into a place: buyers walk into an architectural destination, explore complex products in detail, talk to real people and decide with confidence. Physical architecture reimagined, human service preserved.',
    ru: 'Сеть цифровых коммерческих пространств. FACETIUM превращает торговлю в место: покупатель входит в архитектурную среду, детально изучает сложные товары, общается с людьми и принимает решение уверенно. Архитектура переосмыслена, человеческий сервис сохранён.',
    uk: 'Мережа цифрових комерційних середовищ. FACETIUM перетворює торгівлю на місце: покупець входить в архітектурне середовище, детально вивчає складні товари, спілкується з людьми та ухвалює рішення впевнено.',
    fr: 'Un réseau d\'environnements commerciaux numériques. FACETIUM fait du commerce un lieu : on y entre, on explore les produits en détail, on échange avec de vraies personnes et on décide en confiance.',
    ar: 'شبكة من البيئات التجارية الرقمية. يحوّل FACETIUM التجارة إلى مكان: يدخل المشتري بيئة معمارية، ويستكشف المنتجات بالتفصيل، ويتحدث مع أشخاص حقيقيين، ويقرر بثقة.',
    ja: 'デジタル商業環境のネットワーク。FACETIUMは商取引を「場所」に変えます。建築的な空間に入り、複雑な商品をじっくり確かめ、人と話し、納得して決められます。',
    he: 'רשת של סביבות מסחר דיגיטליות. FACETIUM הופכת מסחר למקום: נכנסים לסביבה אדריכלית, בוחנים מוצרים מורכבים לעומק, מדברים עם אנשים אמיתיים ומחליטים בביטחון.'
  },
  '1inow': {
    en: 'One place. One context. Right now. 1inow is a personal and business intelligence environment that quietly connects tasks, notes, projects, files, meetings and messages into a single living context — so users remember less and understand more. Not another app demanding attention: a unified environment where everything naturally works together.',
    ru: 'Одно место. Один контекст. Прямо сейчас. 1inow — среда личного и делового интеллекта, которая тихо связывает задачи, заметки, проекты, файлы, встречи и сообщения в единый живой контекст. Пользователь меньше помнит — больше понимает. Не очередное приложение, требующее внимания, а единая среда, где всё работает естественно.',
    uk: 'Одне місце. Один контекст. Просто зараз. 1inow — середовище особистого та бізнес-інтелекту, що тихо з\'єднує задачі, нотатки, проєкти, файли, зустрічі та повідомлення в єдиний живий контекст. Користувач менше пам\'ятає — більше розуміє.',
    fr: 'Un lieu. Un contexte. Maintenant. 1inow est un environnement d\'intelligence personnelle et professionnelle qui relie discrètement tâches, notes, projets, fichiers, réunions et messages en un seul contexte vivant. Moins de mémoire à charger, plus de compréhension.',
    ar: 'مكان واحد. سياق واحد. الآن. 1inow بيئة ذكاء شخصي وتجاري تربط بهدوء المهام والملاحظات والمشاريع والملفات والاجتماعات والرسائل في سياق واحد حي. تذكَّر أقل، افهم أكثر.',
    ja: 'ひとつの場所。ひとつの文脈。今、この瞬間。1inowはタスク、ノート、プロジェクト、ファイル、ミーティング、メッセージを静かにひとつの生きた文脈に結びつける、個人・ビジネス向けインテリジェンス環境です。覚えることを減らし、理解を深める。',
    he: 'מקום אחד. הקשר אחד. עכשיו. 1inow היא סביבת אינטליגנציה אישית ועסקית שמחברת בשקט משימות, הערות, פרויקטים, קבצים, פגישות והודעות להקשר חי אחד. לזכור פחות, להבין יותר.'
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

// Per-project icons live in @/components/icons/ProjectIcons (shared registry).


// Display order — must match /projects page exactly.
const projectOrder: string[] = [
  'digital-invest-portfolio',
  'biomathlife',
  'biomath-core',
  'biomathcore',
  'saven',
  'longevitycore',
  'familycore',
  'luna-balance',
  'health-intelligence-suite',
  't1d',
  'mrx-health',
  'baseline',
  'agron',
  'starwall',
  'agron-work',
  'terraaero',
  'myday',
  '1inow',
  'facetium',
];

const getProjectOrderIndex = (slug: string) => {
  const idx = projectOrder.indexOf(slug);
  return idx === -1 ? 999 : idx;
};

const accentGradients: Record<string, string> = {
  'biomath-core': 'from-cyan-500/20 to-cyan-500/0',
  'biomathcore': 'from-cyan-500/20 to-cyan-500/0',
  'biomathlife': 'from-sky-500/20 to-sky-500/0',
  'terraaero': 'from-emerald-500/20 to-emerald-500/0',
  'agron': 'from-lime-500/20 to-lime-500/0',
  'starwall': 'from-orange-500/20 to-orange-500/0',
  'agron-work': 'from-amber-500/20 to-amber-500/0',
  'myday': 'from-indigo-500/20 to-indigo-500/0',
  '1inow': 'from-emerald-400/20 to-emerald-400/0',
  'facetium': 'from-amber-500/20 to-amber-500/0',
  'mrx-health': 'from-rose-500/20 to-rose-500/0',
  'baseline': 'from-teal-500/20 to-teal-500/0',
  'saven': 'from-sky-500/20 to-sky-500/0',
  'luna-balance': 'from-pink-500/20 to-pink-500/0',
  'health-intelligence-suite': 'from-cyan-500/20 to-cyan-500/0',
  'longevitycore': 'from-emerald-400/20 to-emerald-400/0',
  'familycore': 'from-blue-500/20 to-blue-500/0',
  't1d': 'from-teal-500/20 to-teal-500/0',
  'digital-invest-portfolio': 'from-slate-400/20 to-slate-400/0',
};

const accentDots: Record<string, string> = {
  'biomath-core': 'bg-cyan-500',
  'biomathcore': 'bg-cyan-500',
  'biomathlife': 'bg-sky-500',
  'terraaero': 'bg-emerald-500',
  'agron': 'bg-lime-500',
  'starwall': 'bg-orange-500',
  'agron-work': 'bg-amber-500',
  'myday': 'bg-indigo-500',
  '1inow': 'bg-emerald-400',
  'facetium': 'bg-amber-500',
  'mrx-health': 'bg-rose-500',
  'baseline': 'bg-teal-500',
  'saven': 'bg-sky-500',
  'luna-balance': 'bg-pink-500',
  'health-intelligence-suite': 'bg-cyan-500',
  'longevitycore': 'bg-emerald-400',
  'familycore': 'bg-blue-500',
  't1d': 'bg-teal-500',
  'digital-invest-portfolio': 'bg-slate-400',
};

// Полная палитра для проектов: text/border/bg/glow используется при hover карточки.
const accentPalette: Record<string, { text: string; border: string; bgSoft: string; glow: string; ring: string }> = {
  'biomath-core':   { text: 'text-cyan-400',    border: 'border-cyan-500/60',    bgSoft: 'bg-cyan-500/10',    glow: 'shadow-cyan-500/20',    ring: 'ring-cyan-500/40' },
  'biomathcore':    { text: 'text-cyan-400',    border: 'border-cyan-500/60',    bgSoft: 'bg-cyan-500/10',    glow: 'shadow-cyan-500/20',    ring: 'ring-cyan-500/40' },
  'biomathlife':    { text: 'text-sky-400',     border: 'border-sky-500/60',     bgSoft: 'bg-sky-500/10',     glow: 'shadow-sky-500/20',     ring: 'ring-sky-500/40' },
  'terraaero':      { text: 'text-emerald-400', border: 'border-emerald-500/60', bgSoft: 'bg-emerald-500/10', glow: 'shadow-emerald-500/20', ring: 'ring-emerald-500/40' },
  'agron':          { text: 'text-lime-400',    border: 'border-lime-500/60',    bgSoft: 'bg-lime-500/10',    glow: 'shadow-lime-500/20',    ring: 'ring-lime-500/40' },
  'starwall':       { text: 'text-orange-400',  border: 'border-orange-500/60',  bgSoft: 'bg-orange-500/10',  glow: 'shadow-orange-500/20',  ring: 'ring-orange-500/40' },
  'agron-work':     { text: 'text-amber-400',   border: 'border-amber-500/60',   bgSoft: 'bg-amber-500/10',   glow: 'shadow-amber-500/20',   ring: 'ring-amber-500/40' },
  'myday':          { text: 'text-indigo-400',  border: 'border-indigo-500/60',  bgSoft: 'bg-indigo-500/10',  glow: 'shadow-indigo-500/20',  ring: 'ring-indigo-500/40' },
  '1inow':          { text: 'text-emerald-300', border: 'border-emerald-400/60', bgSoft: 'bg-emerald-400/10', glow: 'shadow-emerald-400/20', ring: 'ring-emerald-400/40' },
  'facetium':       { text: 'text-amber-300',   border: 'border-amber-500/60',   bgSoft: 'bg-amber-500/10',   glow: 'shadow-amber-500/20',   ring: 'ring-amber-500/40' },
  'mrx-health':     { text: 'text-rose-400',    border: 'border-rose-500/60',    bgSoft: 'bg-rose-500/10',    glow: 'shadow-rose-500/20',    ring: 'ring-rose-500/40' },
  'baseline':       { text: 'text-teal-400',    border: 'border-teal-500/60',    bgSoft: 'bg-teal-500/10',    glow: 'shadow-teal-500/20',    ring: 'ring-teal-500/40' },
  'saven':          { text: 'text-sky-400',  border: 'border-sky-500/60',  bgSoft: 'bg-sky-500/10',  glow: 'shadow-sky-500/20',  ring: 'ring-sky-500/40' },
  'luna-balance':   { text: 'text-pink-400',    border: 'border-pink-500/60',    bgSoft: 'bg-pink-500/10',    glow: 'shadow-pink-500/20',    ring: 'ring-pink-500/40' },
  'health-intelligence-suite': { text: 'text-cyan-300',   border: 'border-cyan-500/60',   bgSoft: 'bg-cyan-500/10',   glow: 'shadow-cyan-500/20',   ring: 'ring-cyan-500/40' },
  'longevitycore':  { text: 'text-emerald-300', border: 'border-emerald-400/60', bgSoft: 'bg-emerald-400/10', glow: 'shadow-emerald-400/20', ring: 'ring-emerald-400/40' },
  'familycore':     { text: 'text-blue-400',    border: 'border-blue-500/60',    bgSoft: 'bg-blue-500/10',    glow: 'shadow-blue-500/20',    ring: 'ring-blue-500/40' },
  't1d':            { text: 'text-teal-300',    border: 'border-teal-500/60',    bgSoft: 'bg-teal-500/10',    glow: 'shadow-teal-500/20',    ring: 'ring-teal-500/40' },
  'digital-invest-portfolio': { text: 'text-slate-300', border: 'border-slate-400/60', bgSoft: 'bg-slate-500/10', glow: 'shadow-slate-500/20', ring: 'ring-slate-400/40' },
};

const getAccentPalette = (slug: string) => accentPalette[slug] || { text: 'text-primary', border: 'border-primary/60', bgSoft: 'bg-primary/10', glow: 'shadow-primary/20', ring: 'ring-primary/40' };

interface Project {
  id: string;
  slug: string;
  title: string;
  short_description: string;
  category: string;
  status: string;
  hero_image_url: string;
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
        .select('id, slug, title, short_description, category, status, hero_image_url')
        .eq('is_visible', true)
        .order('priority', { ascending: false })
        .order('created_at', { ascending: true });
      if (data) {
        const sorted = data.slice().sort(
          (a: any, b: any) => getProjectOrderIndex(a.slug) - getProjectOrderIndex(b.slug)
        );
        setProjects(sorted);
      }
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
      <section className="dark relative pt-32 pb-20 overflow-hidden bg-[#0b1220] text-foreground">
        {/* Themed background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${portfolioHero})` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/30" aria-hidden="true" />
        {/* Vertical readability gradient — fades to fixed deep navy (not page background)
            so the subtitle area stays dark in light mode too. */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-b from-transparent via-[#0b1220]/40 to-[#0b1220]/85" aria-hidden="true" />


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

            <p className="mt-8 text-base md:text-lg text-primary-light max-w-2xl leading-relaxed">
              {lang === 'ru'
                ? 'Все проекты портфеля собраны на одной странице для быстрого ознакомления. Для более глубокого изучения — переходите на страницу проекта. Если этого недостаточно — свяжитесь с представителем Digital Invest или отправьте запрос через сайт для получения детальной информации. Ряд данных предоставляется индивидуально в связи с правовыми и конфиденциальными ограничениями.'
                : lang === 'uk'
                ? 'Усі проєкти портфеля зібрані на одній сторінці для швидкого ознайомлення. Для глибшого вивчення — переходьте на сторінку проєкту. Якщо цього недостатньо — зв\'яжіться з представником Digital Invest або надішліть запит через сайт. Частина інформації надається індивідуально через правові та конфіденційні обмеження.'
                : lang === 'fr'
                ? 'Tous les projets du portefeuille réunis sur une seule page. Pour en savoir plus, consultez la page dédiée. Pour des informations détaillées, contactez un représentant Digital Invest ou soumettez une demande via le site. Certaines données sont fournies individuellement en raison de restrictions légales et de confidentialité.'
                : lang === 'ar'
                ? 'جميع مشاريع المحفظة مجمعة في صفحة واحدة للاطلاع السريع. للتعمق أكثر، انتقل إلى صفحة المشروع. إذا لم يكن ذلك كافياً، تواصل مع ممثل Digital Invest أو أرسل طلباً عبر الموقع. يتم تقديم بعض المعلومات بشكل فردي بسبب القيود القانونية والسرية.'
                : lang === 'ja'
                ? 'ポートフォリオの全プロジェクトを1ページにまとめました。詳しくはプロジェクトページへ。さらに詳細な情報が必要な場合は、Digital Investの担当者にご連絡いただくか、サイトからお問い合わせください。法的および機密上の制約により、一部の情報は個別に提供されます。'
                : lang === 'he'
                ? 'כל פרויקטי התיק מרוכזים בעמוד אחד להיכרות מהירה. להעמקה — היכנסו לעמוד הפרויקט. למידע מפורט יותר, צרו קשר עם נציג Digital Invest או שלחו בקשה דרך האתר. חלק מהמידע מסופק באופן אישי בשל מגבלות משפטיות וסודיות.'
                : 'All portfolio projects on one page for a quick overview. Dive deeper by clicking into any project. For detailed financial and operational information, contact a Digital Invest representative or submit a request through the website. Certain data is provided individually due to legal and confidentiality restrictions.'}
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
          <div className="space-y-4">
            {projects.map((project, index) => {
              const gradient = accentGradients[project.slug] || 'from-primary/20 to-primary/0';
              const dot = accentDots[project.slug] || 'bg-primary';
              const icon = getProjectIcon(project.slug);
              const isHovered = hoveredIdx === index;
              const palette = getAccentPalette(project.slug);
              const isFlagship = project.slug === 'biomath-core' || project.slug === 'biomathcore';

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
                      border-2 transition-all duration-500 ease-out
                      ${isHovered
                        ? `bg-card shadow-2xl ${palette.glow} scale-[1.015] ${palette.border}`
                        : `bg-card/50 border-border/40`}
                      ${isFlagship ? `ring-1 ${palette.ring} ring-offset-2 ring-offset-background` : ''}
                    `}
                  >
                    {/* Vertical color accent bar (left side) */}
                    <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${dot} transition-all duration-500 ${isHovered ? 'w-2' : ''}`} />

                    {/* Color gradient overlay on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                    {/* Soft color glow blob */}
                    <div className={`absolute -top-20 -right-20 w-64 h-64 rounded-full ${palette.bgSoft} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

                    <div className="relative z-10 p-6 md:p-8 pl-7 md:pl-9">
                      <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                        <div className="flex items-center gap-4 md:flex-col md:items-center md:gap-2 shrink-0 md:w-12">
                          <span className={`font-mono text-xs tabular-nums transition-colors duration-300 ${isHovered ? palette.text : 'text-muted-foreground/50'}`}>
                            {String(index + 1).padStart(2, '0')}
                          </span>
                          <div className={`h-2.5 w-2.5 rounded-full ${dot} transition-all duration-300 ${isHovered ? 'scale-150 shadow-lg' : ''}`} />
                        </div>

                        <div className="flex-1 min-w-0 space-y-3">
                          <div className="flex flex-wrap items-center gap-3">
                            <h2 className={`text-2xl md:text-3xl font-extrabold tracking-tight transition-colors duration-300 ${isHovered ? palette.text : 'text-foreground'}`}>
                              {project.title}
                            </h2>
                            <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border transition-all duration-300 ${isHovered ? `${palette.bgSoft} ${palette.text} ${palette.border}` : 'bg-muted/60 text-muted-foreground border-transparent'}`}>
                              {icon}
                              <span>{t(`projectsCatalog.labels.${project.category.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`, project.category)}</span>
                            </div>
                            {isFlagship && (
                              <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${palette.bgSoft} ${palette.text} ${palette.border} shadow-sm`}>
                                <Layers className="w-3.5 h-3.5" />
                                <span>{lang === 'ru' ? '★ Флагман · 200+ сервисов' : lang === 'uk' ? '★ Флагман · 200+ сервісів' : lang === 'fr' ? '★ Projet phare · 200+ services' : lang === 'ar' ? '★ المشروع الرئيسي · 200+ خدمة' : lang === 'ja' ? '★ フラッグシップ · 200+サービス' : lang === 'he' ? '★ פרויקט דגל · 200+ שירותים' : '★ Flagship · 200+ services'}</span>
                              </div>
                            )}
                          </div>

                          <p className="text-[15px] md:text-base text-muted-foreground leading-[1.7] max-w-3xl">
                            {getDescription(project.slug, project.short_description)}
                          </p>

                          <div className="h-0.5 w-full bg-border/30 rounded-full overflow-hidden mt-4">
                            <div className={`h-full ${dot} transition-all duration-700 ease-out ${isHovered ? 'w-1/2' : 'w-0'}`} />
                          </div>
                        </div>

                        <div className="hidden md:flex items-center shrink-0 self-center">
                          <div className={`
                            w-11 h-11 rounded-full border-2 flex items-center justify-center
                            transition-all duration-300
                            ${isHovered ? `${dot} ${palette.border} text-white scale-110 shadow-lg ${palette.glow}` : 'border-border/50 text-muted-foreground/40'}
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
