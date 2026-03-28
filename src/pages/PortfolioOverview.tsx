import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Loader2, ArrowUpRight, Zap, Layers, Activity, Brain, Sprout, Heart, Cpu, Utensils, Sparkles } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const overviewTexts: Record<string, Record<string, string>> = {
  'biomath-core': {
    en: 'The computational brain behind 200+ health services. BioMath Core ingests biometric chaos and turns it into predictive intelligence — no guesswork, just architecture. It\'s the invisible engine that powers every diagnostic layer in the ecosystem.',
    ru: 'Вычислительный мозг за 200+ сервисами здоровья. BioMath Core поглощает биометрический хаос и превращает его в предиктивный интеллект — без догадок, только архитектура. Невидимый двигатель каждого диагностического слоя экосистемы.',
    uk: 'Обчислювальний мозок за 200+ сервісами здоров\'я. BioMath Core поглинає біометричний хаос і перетворює його на предиктивний інтелект — без здогадок, лише архітектура. Невидимий двигун кожного діагностичного шару екосистеми.',
    fr: 'Le cerveau computationnel derrière 200+ services de santé. BioMath Core absorbe le chaos biométrique et le transforme en intelligence prédictive — pas de devinettes, juste de l\'architecture. Le moteur invisible de chaque couche diagnostique de l\'écosystème.',
    ar: 'العقل الحسابي وراء أكثر من 200 خدمة صحية. يستوعب BioMath Core الفوضى البيومترية ويحولها إلى ذكاء تنبؤي — بدون تخمين، فقط هندسة معمارية. المحرك الخفي الذي يشغل كل طبقة تشخيصية في النظام.',
    ja: '200以上の健康サービスを支える計算頭脳。BioMath Coreは生体計測の混沌を予測知能に変換します — 推測なし、アーキテクチャのみ。エコシステムのすべての診断レイヤーを動かす見えないエンジンです。',
    he: 'המוח החישובי מאחורי 200+ שירותי בריאות. BioMath Core קולט כאוס ביומטרי והופך אותו לאינטליגנציה חזויה — ללא ניחושים, רק ארכיטקטורה. המנוע הבלתי נראה שמפעיל כל שכבת אבחון במערכת.'
  },
  'biomathcore': {
    en: 'The computational brain behind 200+ health services. BioMath Core ingests biometric chaos and turns it into predictive intelligence — no guesswork, just architecture. It\'s the invisible engine that powers every diagnostic layer in the ecosystem.',
    ru: 'Вычислительный мозг за 200+ сервисами здоровья. BioMath Core поглощает биометрический хаос и превращает его в предиктивный интеллект — без догадок, только архитектура. Невидимый двигатель каждого диагностического слоя экосистемы.',
    uk: 'Обчислювальний мозок за 200+ сервісами здоров\'я. BioMath Core поглинає біометричний хаос і перетворює його на предиктивний інтелект — без здогадок, лише архітектура.',
    fr: 'Le cerveau computationnel derrière 200+ services de santé. BioMath Core transforme le chaos biométrique en intelligence prédictive.',
    ar: 'العقل الحسابي وراء أكثر من 200 خدمة صحية. يحول BioMath Core الفوضى البيومترية إلى ذكاء تنبؤي.',
    ja: '200以上の健康サービスを支える計算頭脳。BioMath Coreは生体計測の混沌を予測知能に変換します。',
    he: 'המוח החישובי מאחורי 200+ שירותי בריאות. BioMath Core הופך כאוס ביומטרי לאינטליגנציה חזויה.'
  },
  'biomathlife': {
    en: 'A longevity platform that doesn\'t sell supplements — it builds your biological profile across 20 categories and 200+ services. Think of it as a control panel for your body, where every metric has meaning and every recommendation has data behind it.',
    ru: 'Платформа долголетия, которая не продаёт добавки — она строит ваш биологический профиль по 20 категориям и 200+ сервисам. Пульт управления телом, где каждая метрика имеет значение, а каждая рекомендация подкреплена данными.',
    uk: 'Платформа довголіття, яка не продає добавки — вона будує ваш біологічний профіль за 20 категоріями та 200+ сервісами. Панель керування тілом, де кожна метрика має значення, а кожна рекомендація підкріплена даними.',
    fr: 'Une plateforme de longévité qui ne vend pas de suppléments — elle construit votre profil biologique à travers 20 catégories et 200+ services. Un panneau de contrôle pour votre corps, où chaque métrique a un sens.',
    ar: 'منصة طول العمر التي لا تبيع المكملات — بل تبني ملفك البيولوجي عبر 20 فئة و200+ خدمة. لوحة تحكم لجسمك، حيث كل مقياس له معنى وكل توصية مدعومة بالبيانات.',
    ja: 'サプリを売らない長寿プラットフォーム。20カテゴリーと200以上のサービスで生物学的プロファイルを構築します。すべての指標に意味があり、すべての推奨にデータの裏付けがあります。',
    he: 'פלטפורמת אריכות ימים שלא מוכרת תוספים — היא בונה את הפרופיל הביולוגי שלך ב-20 קטגוריות ו-200+ שירותים. לוח בקרה לגוף שלך, שבו לכל מדד יש משמעות.'
  },
  'terraaero': {
    en: 'Drones that don\'t just fly — they farm. Precision irrigation, AI-driven agronomy, U.S.-manufactured fleet expanding across 23 states. This is agriculture reimagined from the sky down, with real hardware and real field results.',
    ru: 'Дроны, которые не просто летают — они фермерствуют. Точное орошение, ИИ-агрономия, флот американского производства в 23 штатах. Сельское хозяйство, переосмысленное с неба до земли, с реальным железом и реальными результатами.',
    uk: 'Дрони, які не просто літають — вони фермерствують. Точне зрошення, ІІ-агрономія, флот американського виробництва у 23 штатах. Сільське господарство, переосмислене з неба до землі.',
    fr: 'Des drones qui ne font pas que voler — ils cultivent. Irrigation de précision, agronomie pilotée par l\'IA, flotte fabriquée aux États-Unis dans 23 États. L\'agriculture réinventée depuis le ciel.',
    ar: 'طائرات بدون طيار لا تطير فحسب — بل تزرع. ري دقيق، زراعة ذكية بالذكاء الاصطناعي، أسطول مصنوع في أمريكا يتوسع في 23 ولاية. زراعة أعيد تصورها من السماء.',
    ja: '飛ぶだけでなく農業をするドローン。精密灌漑、AI農学、23州に展開する米国製フリート。空から再構築された農業。',
    he: 'רחפנים שלא רק טסים — הם מחקלאים. השקיה מדויקת, אגרונומיה מונעת AI, צי ייצור אמריקאי ב-23 מדינות. חקלאות שנוצרה מחדש מהשמיים.'
  },
  'agron': {
    en: 'National-scale robotics infrastructure for training, certification, and coordination. AGRON is the operating system for autonomous machines across America — the backbone nobody sees but everyone needs.',
    ru: 'Роботизированная инфраструктура национального масштаба: обучение, сертификация, координация. AGRON — операционная система для автономных машин по всей Америке. Хребет, который никто не видит, но все в нём нуждаются.',
    uk: 'Роботизована інфраструктура національного масштабу: навчання, сертифікація, координація. AGRON — операційна система для автономних машин по всій Америці. Хребет, який ніхто не бачить, але всі потребують.',
    fr: 'Infrastructure robotique à l\'échelle nationale pour la formation, la certification et la coordination. AGRON est le système d\'exploitation des machines autonomes à travers l\'Amérique.',
    ar: 'بنية تحتية روبوتية على المستوى الوطني للتدريب والشهادات والتنسيق. AGRON هو نظام التشغيل للآلات المستقلة عبر أمريكا — العمود الفقري الذي لا يراه أحد لكن الجميع يحتاجه.',
    ja: '訓練、認証、調整のための全国規模のロボティクスインフラ。AGRONはアメリカ全土の自律機械のオペレーティングシステム — 誰も見えないが皆が必要とする背骨です。',
    he: 'תשתית רובוטיקה בקנה מידה לאומי לאימון, הסמכה ותיאום. AGRON היא מערכת ההפעלה למכונות אוטונומיות ברחבי אמריקה — עמוד השדרה שאף אחד לא רואה אבל כולם צריכים.'
  },
  'agron-work': {
    en: 'The talent layer for robotics. AGRON Work connects certified operators, technicians, and engineers with the companies building the autonomous future. Where human skill meets machine precision.',
    ru: 'Кадровый слой робототехники. AGRON Work связывает сертифицированных операторов, техников и инженеров с компаниями, строящими автономное будущее. Где человеческое мастерство встречает машинную точность.',
    uk: 'Кадровий шар робототехніки. AGRON Work з\'єднує сертифікованих операторів, техніків та інженерів з компаніями, що будують автономне майбутнє. Де людська майстерність зустрічає машинну точність.',
    fr: 'La couche talent de la robotique. AGRON Work connecte opérateurs certifiés, techniciens et ingénieurs avec les entreprises qui construisent l\'avenir autonome.',
    ar: 'طبقة المواهب للروبوتات. يربط AGRON Work المشغلين والفنيين والمهندسين المعتمدين بالشركات التي تبني المستقبل المستقل. حيث تلتقي المهارة البشرية بدقة الآلة.',
    ja: 'ロボティクスの人材レイヤー。AGRON Workは認定オペレーター、技術者、エンジニアを自律的未来を構築する企業と結びつけます。人間のスキルと機械の精度が出会う場所。',
    he: 'שכבת הכישרון של הרובוטיקה. AGRON Work מחבר מפעילים, טכנאים ומהנדסים מוסמכים עם החברות שבונות את העתיד האוטונומי. שם מיומנות אנושית פוגשת דיוק מכני.'
  },
  'myday': {
    en: 'Your day, reverse-engineered by AI. MyDay doesn\'t just plan — it learns your patterns, predicts your energy peaks, and restructures your time around what actually works. Productivity isn\'t about doing more — it\'s about doing right.',
    ru: 'Ваш день, деконструированный ИИ. MyDay не просто планирует — он изучает паттерны, предсказывает пики энергии и перестраивает время вокруг того, что реально работает. Продуктивность — не делать больше, а делать правильно.',
    uk: 'Ваш день, деконструйований ІІ. MyDay не просто планує — він вивчає патерни, передбачає піки енергії та перебудовує час навколо того, що реально працює. Продуктивність — не робити більше, а робити правильно.',
    fr: 'Votre journée, rétro-conçue par l\'IA. MyDay ne planifie pas seulement — il apprend vos habitudes, prédit vos pics d\'énergie et restructure votre temps. La productivité, c\'est faire juste, pas faire plus.',
    ar: 'يومك، معاد هندسته بالذكاء الاصطناعي. MyDay لا يخطط فحسب — بل يتعلم أنماطك، ويتنبأ بذروات طاقتك، ويعيد هيكلة وقتك. الإنتاجية ليست عمل المزيد — بل العمل الصحيح.',
    ja: 'AIによってリバースエンジニアリングされたあなたの一日。MyDayは単に計画するだけでなく、パターンを学び、エネルギーのピークを予測し、本当に効果的なことに時間を再構築します。',
    he: 'היום שלך, מהונדס לאחור על ידי AI. MyDay לא רק מתכנן — הוא לומד את הדפוסים שלך, חוזה את שיאי האנרגיה שלך ומבנה מחדש את הזמן סביב מה שבאמת עובד.'
  },
  'itsgoodtoday': {
    en: 'No tracking marathons. No meditation pressure. Just one small thing today that makes tomorrow slightly better. A wellness companion designed for real humans, not fitness influencers.',
    ru: 'Никаких марафонов трекинга. Никакого давления медитацией. Просто одна маленькая вещь сегодня, которая сделает завтра чуть лучше. Компаньон для реальных людей, а не фитнес-инфлюенсеров.',
    uk: 'Жодних марафонів трекінгу. Жодного тиску медитацією. Просто одна маленька річ сьогодні, яка зробить завтра трохи кращим. Компаньйон для реальних людей, а не фітнес-інфлюенсерів.',
    fr: 'Pas de marathons de suivi. Pas de pression de méditation. Juste une petite chose aujourd\'hui qui rend demain un peu meilleur. Un compagnon bien-être conçu pour de vrais humains.',
    ar: 'لا ماراثونات تتبع. لا ضغط تأمل. مجرد شيء صغير اليوم يجعل الغد أفضل قليلاً. رفيق صحي مصمم للبشر الحقيقيين، وليس مؤثري اللياقة.',
    ja: 'トラッキングマラソンなし。瞑想のプレッシャーなし。今日の小さな一つが、明日を少し良くする。フィットネスインフルエンサーではなく、本物の人間のためのウェルネスコンパニオン。',
    he: 'בלי מרתוני מעקב. בלי לחץ מדיטציה. רק דבר קטן אחד היום שהופך את המחר לקצת יותר טוב. מלווה בריאות שתוכנן לבני אדם אמיתיים.'
  },
  'mrx-health': {
    en: 'What happens when you mix medications? MRX.Health explores drug interactions through AI-driven bio-scan analysis — turning pharmacological complexity into clear, actionable safety insights.',
    ru: 'Что произойдёт при смешении лекарств? MRX.Health исследует лекарственные взаимодействия через ИИ-анализ биосканирования — превращая фармакологическую сложность в ясные инсайты безопасности.',
    uk: 'Що станеться при змішуванні ліків? MRX.Health досліджує лікарські взаємодії через ІІ-аналіз біосканування — перетворюючи фармакологічну складність на зрозумілі інсайти безпеки.',
    fr: 'Que se passe-t-il quand vous mélangez des médicaments ? MRX.Health explore les interactions médicamenteuses via l\'analyse bio-scan pilotée par l\'IA — transformant la complexité pharmacologique en insights de sécurité clairs.',
    ar: 'ماذا يحدث عند خلط الأدوية؟ يستكشف MRX.Health التفاعلات الدوائية من خلال تحليل المسح البيولوجي بالذكاء الاصطناعي — ويحول التعقيد الدوائي إلى رؤى أمان واضحة.',
    ja: '薬を混ぜるとどうなる？MRX.HealthはAI駆動のバイオスキャン分析で薬物相互作用を探求し、薬理学的複雑さを明確で実用的な安全性インサイトに変換します。',
    he: 'מה קורה כשמערבבים תרופות? MRX.Health חוקר אינטראקציות תרופתיות באמצעות ניתוח סריקה ביולוגית מונע AI — והופך מורכבות פרמקולוגית לתובנות בטיחות ברורות.'
  },
  'table-served': {
    en: 'Not another recipe app. TableServed is a deterministic nutrition protocol — weekly Stability Boxes, a fixed Friday Lock cycle, zero ingredient improvisation. Family nutrition, engineered with the precision of a supply chain.',
    ru: 'Не очередное приложение рецептов. TableServed — детерминистический протокол питания: еженедельные Stability Box\'ы, фиксированный цикл Friday Lock, ноль импровизаций. Семейное питание, спроектированное с точностью цепочки поставок.',
    uk: 'Не черговий додаток рецептів. TableServed — детерміністичний протокол харчування: щотижневі Stability Box\'и, фіксований цикл Friday Lock, нуль імпровізацій. Сімейне харчування з точністю ланцюжка постачання.',
    fr: 'Pas une autre appli de recettes. TableServed est un protocole nutritionnel déterministe — des Stability Boxes hebdomadaires, un cycle Friday Lock fixe, zéro improvisation. La nutrition familiale, conçue avec la précision d\'une chaîne d\'approvisionnement.',
    ar: 'ليس تطبيق وصفات آخر. TableServed هو بروتوكول تغذية حتمي — صناديق استقرار أسبوعية، دورة قفل الجمعة الثابتة، صفر ارتجال. تغذية عائلية مهندسة بدقة سلسلة التوريد.',
    ja: 'ただのレシピアプリではありません。TableServedは決定論的栄養プロトコル — 毎週のStability Box、固定のFriday Lockサイクル、即興ゼロ。サプライチェーンの精度で設計された家族栄養。',
    he: 'לא עוד אפליקציית מתכונים. TableServed הוא פרוטוקול תזונתי דטרמיניסטי — קופסאות יציבות שבועיות, מחזור נעילת יום שישי קבוע, אפס אלתור. תזונה משפחתית מהונדסת בדיוק של שרשרת אספקה.'
  },
  'baseline': {
    en: 'Health logic, simplified to 4 steps. BaseLine takes complex clinical data and turns it into a launchpad — Biological Handshake, Baseline Ingestion, Marker Synthesis, Prognostic Launch. Your health journey starts with understanding where you stand.',
    ru: 'Логика здоровья, упрощённая до 4 шагов. BaseLine берёт сложные клинические данные и превращает в стартовую площадку. Путь к здоровью начинается с понимания, где вы находитесь.',
    uk: 'Логіка здоров\'я, спрощена до 4 кроків. BaseLine бере складні клінічні дані і перетворює на стартовий майданчик. Шлях до здоров\'я починається з розуміння, де ви знаходитесь.',
    fr: 'La logique de santé, simplifiée en 4 étapes. BaseLine prend des données cliniques complexes et les transforme en rampe de lancement. Votre parcours santé commence par comprendre où vous en êtes.',
    ar: 'منطق الصحة، مبسط في 4 خطوات. يأخذ BaseLine البيانات السريرية المعقدة ويحولها إلى منصة انطلاق. رحلتك الصحية تبدأ بفهم أين تقف.',
    ja: '健康ロジックを4ステップに簡素化。BaseLineは複雑な臨床データを発射台に変えます。健康の旅は、自分がどこにいるかを理解することから始まります。',
    he: 'לוגיקת בריאות, מפושטת ל-4 צעדים. BaseLine לוקח נתונים קליניים מורכבים והופך אותם לכן שיגור. המסע הבריאותי שלך מתחיל בהבנת איפה אתה עומד.'
  },
  'saven': {
    en: 'Infrastructure of Continuous Execution. SAVEN is a 5-step operational cycle embedded in a 4-level BioMath architecture. It doesn\'t motivate — it executes. Discipline, automated.',
    ru: 'Инфраструктура непрерывного исполнения. SAVEN — 5-шаговый операционный цикл внутри 4-уровневой архитектуры BioMath. Не мотивирует — исполняет. Дисциплина, автоматизированная.',
    uk: 'Інфраструктура безперервного виконання. SAVEN — 5-кроковий операційний цикл всередині 4-рівневої архітектури BioMath. Не мотивує — виконує. Дисципліна, автоматизована.',
    fr: 'Infrastructure d\'exécution continue. SAVEN est un cycle opérationnel en 5 étapes intégré dans une architecture BioMath à 4 niveaux. Il ne motive pas — il exécute. La discipline, automatisée.',
    ar: 'بنية التنفيذ المستمر. SAVEN هي دورة تشغيلية من 5 خطوات مدمجة في بنية BioMath من 4 مستويات. لا تحفز — بل تنفذ. الانضباط، مؤتمت.',
    ja: '継続的実行のインフラ。SAVENは4レベルのBioMathアーキテクチャに組み込まれた5ステップの運用サイクルです。動機づけではなく実行します。規律の自動化。',
    he: 'תשתית של ביצוע רציף. SAVEN הוא מחזור תפעולי בן 5 שלבים המוטמע בארכיטקטורת BioMath בת 4 רמות. הוא לא מניע — הוא מבצע. משמעת, אוטומטית.'
  },
  'luna-balance': {
    en: 'Silence as technology. Luna Balance is a women\'s mindfulness platform built on \'Silence Technology\' and \'Relationship Mode\' — designed for emotional depth, inner stillness, and authentic connection.',
    ru: 'Тишина как технология. Luna Balance — женская платформа осознанности на основе «Технологии тишины» и «Режима отношений» — для эмоциональной глубины, внутренней тишины и подлинных связей.',
    uk: 'Тиша як технологія. Luna Balance — жіноча платформа усвідомленості на основі «Технології тиші» та «Режиму стосунків» — для емоційної глибини, внутрішнього спокою та справжніх зв\'язків.',
    fr: 'Le silence comme technologie. Luna Balance est une plateforme de pleine conscience pour femmes construite sur la « Technologie du Silence » et le « Mode Relation » — pour la profondeur émotionnelle et la connexion authentique.',
    ar: 'الصمت كتقنية. Luna Balance هي منصة وعي نسائية مبنية على "تقنية الصمت" و"وضع العلاقات" — مصممة للعمق العاطفي والسكون الداخلي والتواصل الحقيقي.',
    ja: 'テクノロジーとしての静寂。Luna Balanceは「サイレンステクノロジー」と「リレーションシップモード」に基づく女性向けマインドフルネスプラットフォーム — 感情の深さ、内なる静けさ、本物のつながりのために。',
    he: 'שתיקה כטכנולוגיה. Luna Balance היא פלטפורמת מיינדפולנס לנשים הבנויה על "טכנולוגיית השתיקה" ו"מצב מערכות יחסים" — מעוצבת לעומק רגשי, שקט פנימי וחיבור אותנטי.'
  },
  'stresscore': {
    en: 'Stress isn\'t the enemy — misunderstanding it is. StressCore maps your stress patterns and turns data into actionable calm. Science-backed resilience, not motivational posters.',
    ru: 'Стресс — не враг. Непонимание стресса — враг. StressCore картирует паттерны стресса и превращает данные в действенное спокойствие. Научная устойчивость, а не мотивационные плакаты.',
    uk: 'Стрес — не ворог. Нерозуміння стресу — ворог. StressCore картографує патерни стресу і перетворює дані на дієвий спокій. Наукова стійкість, а не мотиваційні плакати.',
    fr: 'Le stress n\'est pas l\'ennemi — le mal comprendre, si. StressCore cartographie vos schémas de stress et transforme les données en calme actionnable. Résilience scientifique, pas des affiches motivationnelles.',
    ar: 'التوتر ليس العدو — سوء فهمه هو العدو. يرسم StressCore خرائط أنماط التوتر ويحول البيانات إلى هدوء قابل للتنفيذ. مرونة مدعومة بالعلم، وليس ملصقات تحفيزية.',
    ja: 'ストレスは敵ではない — それを誤解することが敵です。StressCoreはストレスパターンをマッピングし、データを実行可能な平穏に変えます。科学に裏付けられたレジリエンス。',
    he: 'סטרס הוא לא האויב — אי-הבנה שלו כן. StressCore ממפה את דפוסי הסטרס שלך והופך נתונים לשקט ניתן לפעולה. חוסן מגובה מדעית, לא כרזות מוטיבציה.'
  },
  'vitalcore': {
    en: 'Every heartbeat tells a story. VitalCore captures, analyzes, and interprets vital signs in real-time — turning raw physiological data into health narratives you can actually act on.',
    ru: 'Каждое сердцебиение рассказывает историю. VitalCore захватывает и интерпретирует показатели в реальном времени — превращая физиологические данные в нарративы здоровья, на которые можно действовать.',
    uk: 'Кожне серцебиття розповідає історію. VitalCore захоплює та інтерпретує показники в реальному часі — перетворюючи фізіологічні дані на наративи здоров\'я, на які можна діяти.',
    fr: 'Chaque battement de cœur raconte une histoire. VitalCore capture et interprète les signes vitaux en temps réel — transformant les données physiologiques brutes en récits de santé exploitables.',
    ar: 'كل نبضة قلب تحكي قصة. يلتقط VitalCore العلامات الحيوية ويفسرها في الوقت الفعلي — ويحول البيانات الفسيولوجية الخام إلى روايات صحية يمكنك التصرف بناءً عليها.',
    ja: 'すべての心拍がストーリーを語ります。VitalCoreはバイタルサインをリアルタイムで捕捉・分析・解釈し、生の生理学的データを実行可能な健康ナラティブに変えます。',
    he: 'כל פעימת לב מספרת סיפור. VitalCore לוכד ומפרש סימנים חיוניים בזמן אמת — והופך נתונים פיזיולוגיים גולמיים לנרטיבי בריאות שאפשר לפעול לפיהם.'
  },
  'bioagecore': {
    en: 'Your passport says one age. Your biology says another. BioAgeCore calculates your true biological age and gives you a personalized roadmap to change it — because aging is negotiable.',
    ru: 'Паспорт говорит один возраст. Биология — другой. BioAgeCore рассчитывает истинный биологический возраст и даёт персональную дорожную карту для его изменения — потому что старение обсуждаемо.',
    uk: 'Паспорт каже один вік. Біологія — інший. BioAgeCore розраховує справжній біологічний вік і дає персональну дорожню карту для його зміни — бо старіння обговорюване.',
    fr: 'Votre passeport dit un âge. Votre biologie en dit un autre. BioAgeCore calcule votre véritable âge biologique et vous donne une feuille de route personnalisée — parce que le vieillissement est négociable.',
    ar: 'جواز سفرك يقول عمراً واحداً. بيولوجيتك تقول آخر. يحسب BioAgeCore عمرك البيولوجي الحقيقي ويمنحك خارطة طريق شخصية لتغييره — لأن الشيخوخة قابلة للتفاوض.',
    ja: 'パスポートはひとつの年齢を示します。生物学は別の年齢を示します。BioAgeCoreは真の生物学的年齢を計算し、それを変えるためのパーソナライズされたロードマップを提供します — 老化は交渉可能だからです。',
    he: 'הדרכון שלך אומר גיל אחד. הביולוגיה שלך אומרת אחר. BioAgeCore מחשב את הגיל הביולוגי האמיתי שלך ונותן לך מפת דרכים מותאמת אישית לשנות אותו — כי הזדקנות ניתנת למשא ומתן.'
  },
  'longevitycore': {
    en: 'Living longer isn\'t the goal — living better, longer, is. LongevityCore is a precision anti-aging system that goes beyond supplements and serums into the architecture of biological time.',
    ru: 'Жить дольше — не цель. Жить лучше и дольше — цель. LongevityCore — прецизионная антивозрастная система за пределами добавок, в архитектуре биологического времени.',
    uk: 'Жити довше — не мета. Жити краще і довше — мета. LongevityCore — прецизійна антивікова система за межами добавок, в архітектурі біологічного часу.',
    fr: 'Vivre plus longtemps n\'est pas l\'objectif — vivre mieux, plus longtemps, oui. LongevityCore est un système anti-âge de précision qui va au-delà des suppléments dans l\'architecture du temps biologique.',
    ar: 'العيش لفترة أطول ليس الهدف — العيش بشكل أفضل لفترة أطول هو الهدف. LongevityCore هو نظام مكافحة شيخوخة دقيق يتجاوز المكملات والأمصال إلى هندسة الزمن البيولوجي.',
    ja: '長生きが目標ではない — より良く、より長く生きることが目標です。LongevityCoreはサプリメントや美容液を超え、生物学的時間のアーキテクチャに踏み込む精密アンチエイジングシステムです。',
    he: 'לחיות יותר זה לא המטרה — לחיות טוב יותר, יותר זמן, כן. LongevityCore היא מערכת אנטי-אייג\'ינג מדויקת שחורגת מתוספים לארכיטקטורה של זמן ביולוגי.'
  },
  'familycore': {
    en: 'Health isn\'t individual — it\'s generational. FamilyCore connects health data across your household, creating a unified family health intelligence layer that grows with every member.',
    ru: 'Здоровье — не индивидуально. Оно поколенческое. FamilyCore связывает данные здоровья домохозяйства, создавая единый слой семейной аналитики, растущий с каждым участником.',
    uk: 'Здоров\'я — не індивідуальне. Воно поколінське. FamilyCore з\'єднує дані здоров\'я домогосподарства, створюючи єдиний шар сімейної аналітики, що зростає з кожним учасником.',
    fr: 'La santé n\'est pas individuelle — elle est générationnelle. FamilyCore connecte les données de santé de votre foyer, créant une couche d\'intelligence santé familiale unifiée qui grandit avec chaque membre.',
    ar: 'الصحة ليست فردية — إنها جيلية. يربط FamilyCore بيانات الصحة عبر أسرتك، مما يخلق طبقة ذكاء صحي عائلي موحدة تنمو مع كل فرد.',
    ja: '健康は個人のものではなく、世代のものです。FamilyCoreは家庭全体の健康データを接続し、メンバーとともに成長する統合的な家族健康インテリジェンスレイヤーを作ります。',
    he: 'בריאות היא לא אישית — היא דורית. FamilyCore מחבר נתוני בריאות ברחבי משק הבית שלך, ויוצר שכבת מודיעין בריאותי משפחתי מאוחד שגדלה עם כל חבר.'
  },
  'seniorcore': {
    en: 'Aging with data, not just dignity. SeniorCore monitors cognitive and physical markers for older adults — delivering predictive care before problems become emergencies.',
    ru: 'Старение с данными, а не только с достоинством. SeniorCore мониторит когнитивные и физические маркеры — предиктивный уход до того, как проблемы станут экстренными.',
    uk: 'Старіння з даними, а не лише з гідністю. SeniorCore моніторить когнітивні та фізичні маркери — предиктивний догляд до того, як проблеми стануть екстреними.',
    fr: 'Vieillir avec des données, pas seulement avec dignité. SeniorCore surveille les marqueurs cognitifs et physiques des personnes âgées — livrant des soins prédictifs avant que les problèmes ne deviennent urgents.',
    ar: 'الشيخوخة مع البيانات، وليس فقط بكرامة. يراقب SeniorCore العلامات المعرفية والجسدية لكبار السن — ويقدم رعاية تنبؤية قبل أن تصبح المشاكل طوارئ.',
    ja: 'データとともに老いる。SeniorCoreは高齢者の認知的・身体的マーカーを監視し、問題が緊急事態になる前に予測的ケアを提供します。',
    he: 'הזדקנות עם נתונים, לא רק בכבוד. SeniorCore עוקב אחר סמנים קוגניטיביים ופיזיים של מבוגרים — ומספק טיפול חזוי לפני שבעיות הופכות למצבי חירום.'
  },
  'skincore': {
    en: 'Your skin is your largest organ — treat it like one. SkinCore uses AI dermatology to track, analyze, and guide personalized skin care routines with clinical-grade precision.',
    ru: 'Кожа — ваш самый большой орган. Относитесь соответственно. SkinCore использует ИИ-дерматологию для персонализации ухода за кожей с клинической точностью.',
    uk: 'Шкіра — ваш найбільший орган. Ставтеся відповідно. SkinCore використовує ІІ-дерматологію для персоналізації догляду за шкірою з клінічною точністю.',
    fr: 'Votre peau est votre plus grand organe — traitez-la comme tel. SkinCore utilise la dermatologie IA pour guider des routines de soins personnalisées avec une précision clinique.',
    ar: 'بشرتك هي أكبر عضو لديك — عاملها كذلك. يستخدم SkinCore الأمراض الجلدية بالذكاء الاصطناعي لتتبع وتحليل وتوجيه روتين العناية بالبشرة المخصص بدقة سريرية.',
    ja: '肌はあなたの最大の臓器です — そのように扱いましょう。SkinCoreはAI皮膚科学を使用して、臨床グレードの精度でパーソナライズされたスキンケアルーチンを追跡・分析・ガイドします。',
    he: 'העור שלך הוא האיבר הגדול ביותר — התייחס אליו כך. SkinCore משתמש בדרמטולוגיית AI כדי לעקוב, לנתח ולהנחות שגרות טיפוח מותאמות אישית בדיוק קליני.'
  },
  'digital-invest-portfolio': {
    en: 'The umbrella that holds it all. Digital Invest is a multi-sector portfolio company incubating and scaling technology ventures from health to robotics to food systems.',
    ru: 'Зонтик, который держит всё. Digital Invest — мультисекторная портфельная компания, инкубирующая и масштабирующая проекты от здоровья до робототехники и продовольственных систем.',
    uk: 'Парасолька, що тримає все. Digital Invest — мультисекторна портфельна компанія, що інкубує та масштабує проєкти від здоров\'я до робототехніки та продовольчих систем.',
    fr: 'Le parapluie qui rassemble tout. Digital Invest est une société de portefeuille multi-secteur incubant et développant des ventures technologiques de la santé à la robotique aux systèmes alimentaires.',
    ar: 'المظلة التي تحمل كل شيء. Digital Invest هي شركة محفظة متعددة القطاعات تحتضن وتوسع المشاريع التقنية من الصحة إلى الروبوتات إلى أنظمة الغذاء.',
    ja: 'すべてを束ねる傘。Digital Investは健康からロボティクス、食品システムまで、テクノロジーベンチャーをインキュベート・スケールするマルチセクターポートフォリオ企業です。',
    he: 'המטריה שמחזיקה הכל. Digital Invest היא חברת תיק השקעות רב-מגזרית המדגרת ומרחיבה מיזמים טכנולוגיים מבריאות לרובוטיקה למערכות מזון.'
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
    if (texts) return lang === 'ru' ? texts.ru : texts.en;
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
                            <h2 className={`text-xl md:text-2xl font-bold transition-colors duration-300 ${isHovered ? 'text-primary' : 'text-foreground'}`}>
                              {project.title}
                            </h2>
                            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted/60 text-muted-foreground text-xs font-medium">
                              {icon}
                              <span>{project.category}</span>
                            </div>
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
