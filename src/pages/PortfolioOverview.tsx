import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Loader2, ExternalLink, Sparkles, ArrowRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

// Engaging short descriptions per project slug — used as fallback if DB short_description is too long/generic
const overviewTexts: Record<string, { en: string; ru: string }> = {
  'biomath-core': {
    en: 'The brain behind 200+ health services. BioMath Core ingests biometric chaos and turns it into predictive intelligence — no guesswork, just architecture.',
    ru: 'Мозг за 200+ сервисами здоровья. BioMath Core поглощает биометрический хаос и превращает его в предиктивный интеллект — без догадок, только архитектура.'
  },
  'biomathcore': {
    en: 'The brain behind 200+ health services. BioMath Core ingests biometric chaos and turns it into predictive intelligence — no guesswork, just architecture.',
    ru: 'Мозг за 200+ сервисами здоровья. BioMath Core поглощает биометрический хаос и превращает его в предиктивный интеллект — без догадок, только архитектура.'
  },
  'biomathlife': {
    en: 'A longevity platform that doesn\'t sell supplements — it builds your biological profile across 20 categories and 200+ services. Think of it as a control panel for your body.',
    ru: 'Платформа долголетия, которая не продаёт добавки — она строит ваш биологический профиль по 20 категориям и 200+ сервисам. Пульт управления телом.'
  },
  'terraaero': {
    en: 'Drones that don\'t just fly — they farm. Precision irrigation, AI-driven agronomy, U.S.-manufactured fleet expanding across 23 states. Agriculture, upgraded.',
    ru: 'Дроны, которые не просто летают — они фермерствуют. Точное орошение, ИИ-агрономия, флот американского производства в 23 штатах. Сельское хозяйство нового уровня.'
  },
  'agron': {
    en: 'National-scale robotics infrastructure. Training, certification, coordination — AGRON is the operating system for autonomous machines across America.',
    ru: 'Роботизированная инфраструктура национального масштаба. Обучение, сертификация, координация — AGRON — это ОС для автономных машин по всей Америке.'
  },
  'agron-work': {
    en: 'The talent layer for robotics. AGRON Work connects certified operators, technicians, and engineers with the companies building the autonomous future.',
    ru: 'Кадровый слой робототехники. AGRON Work связывает сертифицированных операторов, техников и инженеров с компаниями, строящими автономное будущее.'
  },
  'myday': {
    en: 'Your day, reverse-engineered by AI. MyDay doesn\'t just plan — it learns your patterns, predicts your energy, and restructures your time around what actually works.',
    ru: 'Ваш день, деконструированный ИИ. MyDay не просто планирует — он изучает паттерны, предсказывает энергию и перестраивает время вокруг того, что реально работает.'
  },
  'itsgoodtoday': {
    en: 'No tracking marathons. No meditation pressure. Just one small thing today that makes tomorrow slightly better. A wellness companion for humans, not athletes.',
    ru: 'Никаких марафонов трекинга. Никакого давления медитацией. Просто одна маленькая вещь сегодня, которая сделает завтра чуть лучше. Компаньон для людей, не спортсменов.'
  },
  'mrx-health': {
    en: 'What happens when you mix medications? MRX.Health explores drug interactions through AI-driven bio-scan analysis. Your pharmacist\'s new best friend.',
    ru: 'Что произойдёт при смешении лекарств? MRX.Health исследует взаимодействия через ИИ-анализ биосканирования. Новый лучший друг вашего фармацевта.'
  },
  'table-served': {
    en: 'Not another recipe app. TableServed is a deterministic nutrition protocol — weekly Stability Boxes, a fixed Friday Lock cycle, zero ingredient improvisation. Family nutrition, engineered.',
    ru: 'Не очередное приложение рецептов. TableServed — детерминистический протокол питания: еженедельные Stability Box\'ы, фиксированный цикл Friday Lock, ноль импровизаций. Семейное питание, инженерное.'
  },
  'baseline': {
    en: 'Health logic, simplified to 4 steps. BaseLine takes complex clinical data and turns it into a launchpad — Biological Handshake, Baseline Ingestion, Marker Synthesis, Prognostic Launch.',
    ru: 'Логика здоровья, упрощённая до 4 шагов. BaseLine берёт сложные клинические данные и превращает в стартовую площадку — Biological Handshake, Baseline Ingestion, Marker Synthesis, Prognostic Launch.'
  },
  'saven': {
    en: 'Infrastructure of Continuous Execution. SAVEN is a 5-step operational cycle embedded in a 4-level BioMath architecture. It doesn\'t motivate — it executes.',
    ru: 'Инфраструктура непрерывного исполнения. SAVEN — 5-шаговый операционный цикл внутри 4-уровневой архитектуры BioMath. Не мотивирует — исполняет.'
  },
  'luna-balance': {
    en: 'Silence as technology. Luna Balance is a women\'s mindfulness platform built on \'Silence Technology\' and \'Relationship Mode\' — designed for depth, not noise.',
    ru: 'Тишина как технология. Luna Balance — женская платформа осознанности на основе «Технологии тишины» и «Режима отношений» — для глубины, не для шума.'
  },
  'stresscore': {
    en: 'Stress isn\'t the enemy — misunderstanding it is. StressCore maps your stress patterns and turns data into actionable calm. Science, not slogans.',
    ru: 'Стресс — не враг. Непонимание стресса — враг. StressCore картирует паттерны стресса и превращает данные в действенное спокойствие. Наука, не лозунги.'
  },
  'vitalcore': {
    en: 'Every heartbeat tells a story. VitalCore captures, analyzes, and interprets vital signs in real-time — turning raw data into health narratives.',
    ru: 'Каждое сердцебиение рассказывает историю. VitalCore захватывает, анализирует и интерпретирует показатели в реальном времени — превращая данные в нарративы здоровья.'
  },
  'bioagecore': {
    en: 'Your passport says one age. Your biology says another. BioAgeCore calculates your true biological age and gives you a roadmap to change it.',
    ru: 'Паспорт говорит один возраст. Биология — другой. BioAgeCore рассчитывает истинный биологический возраст и даёт дорожную карту для его изменения.'
  },
  'longevitycore': {
    en: 'Living longer isn\'t the goal — living better, longer, is. LongevityCore is a precision anti-aging system that goes beyond supplements and serums.',
    ru: 'Жить дольше — не цель. Жить лучше и дольше — цель. LongevityCore — прецизионная антивозрастная система за пределами добавок и сывороток.'
  },
  'familycore': {
    en: 'Health isn\'t individual — it\'s generational. FamilyCore connects health data across your household, creating a unified family health intelligence layer.',
    ru: 'Здоровье — не индивидуально. Оно поколенческое. FamilyCore связывает данные здоровья домохозяйства, создавая единый слой семейной аналитики.'
  },
  'seniorcore': {
    en: 'Aging with data, not just dignity. SeniorCore monitors cognitive and physical markers for older adults — predictive care, not reactive.',
    ru: 'Старение с данными, а не только с достоинством. SeniorCore мониторит когнитивные и физические маркеры — предиктивный уход, а не реактивный.'
  },
  'skincore': {
    en: 'Your skin is your largest organ — treat it like one. SkinCore uses AI dermatology to track, analyze, and guide personalized skin care routines.',
    ru: 'Кожа — ваш самый большой орган. Относитесь соответственно. SkinCore использует ИИ-дерматологию для отслеживания и персонализации ухода за кожей.'
  },
  'digital-invest-portfolio': {
    en: 'The umbrella that holds it all. Digital Invest is a multi-sector portfolio company incubating and scaling technology ventures from health to robotics.',
    ru: 'Зонтик, который держит всё. Digital Invest — мультисекторная портфельная компания, инкубирующая и масштабирующая технологические проекты от здоровья до робототехники.'
  },
};

const categoryColors: Record<string, string> = {
  'Digital Health': 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
  'AgriTech': 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
  'Robotics': 'bg-lime-500/20 text-lime-300 border-lime-500/30',
  'Robotics Infrastructure': 'bg-lime-500/20 text-lime-300 border-lime-500/30',
  'Workforce': 'bg-amber-500/20 text-amber-300 border-amber-500/30',
  'AI Productivity': 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
  'Lifestyle': 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
  'Wellness': 'bg-orange-500/20 text-orange-300 border-orange-500/30',
  'MedTech': 'bg-rose-500/20 text-rose-300 border-rose-500/30',
  'FoodTech': 'bg-amber-500/20 text-amber-300 border-amber-500/30',
  'HealthTech': 'bg-teal-500/20 text-teal-300 border-teal-500/30',
  'BioTech': 'bg-sky-500/20 text-sky-300 border-sky-500/30',
  'FinTech': 'bg-slate-500/20 text-slate-300 border-slate-500/30',
  'Mental Health': 'bg-purple-500/20 text-purple-300 border-purple-500/30',
  'Vitals': 'bg-red-500/20 text-red-300 border-red-500/30',
  'Longevity': 'bg-fuchsia-500/20 text-fuchsia-300 border-fuchsia-500/30',
  'Anti-Aging': 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
  'Family': 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  'Senior Care': 'bg-stone-500/20 text-stone-300 border-stone-500/30',
  'Beauty': 'bg-pink-500/20 text-pink-300 border-pink-500/30',
  'Infrastructure': 'bg-violet-500/20 text-violet-300 border-violet-500/30',
  "Women's Health": 'bg-pink-500/20 text-pink-300 border-pink-500/30',
};

const accentBorders: Record<string, string> = {
  'biomath-core': 'border-l-cyan-500',
  'biomathcore': 'border-l-cyan-500',
  'biomathlife': 'border-l-sky-500',
  'terraaero': 'border-l-emerald-500',
  'agron': 'border-l-lime-500',
  'agron-work': 'border-l-amber-500',
  'myday': 'border-l-indigo-500',
  'itsgoodtoday': 'border-l-orange-500',
  'mrx-health': 'border-l-rose-500',
  'table-served': 'border-l-amber-400',
  'baseline': 'border-l-teal-500',
  'saven': 'border-l-violet-500',
  'luna-balance': 'border-l-pink-500',
  'stresscore': 'border-l-purple-500',
  'vitalcore': 'border-l-red-500',
  'bioagecore': 'border-l-fuchsia-500',
  'longevitycore': 'border-l-emerald-400',
  'familycore': 'border-l-blue-500',
  'seniorcore': 'border-l-stone-500',
  'skincore': 'border-l-pink-400',
  'digital-invest-portfolio': 'border-l-slate-400',
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
    if (texts) {
      return lang === 'ru' ? texts.ru : texts.en;
    }
    return dbDesc;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="h-6 w-6 text-primary" />
            <span className="text-sm font-medium text-primary tracking-widest uppercase">
              Digital Invest Inc.
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
            {lang === 'ru' ? 'Портфолио проектов' : 'Portfolio at a Glance'}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            {lang === 'ru'
              ? 'Все проекты в одном месте. Коротко, по существу, без воды.'
              : 'Every project in one place. Short, sharp, no fluff.'}
          </p>
          <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
            <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            {lang === 'ru'
              ? `${projects.length} активных проектов`
              : `${projects.length} active projects`}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="container mx-auto px-4 pb-20">
        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : (
          <div className="grid gap-4 md:gap-5">
            {projects.map((project, index) => {
              const borderAccent = accentBorders[project.slug] || 'border-l-primary';
              const catColor = categoryColors[project.category] || 'bg-muted text-muted-foreground';

              return (
                <Link
                  key={project.id}
                  to={`/projects/${project.slug}`}
                  className="group block"
                >
                  <div
                    className={`
                      relative border-l-4 ${borderAccent}
                      bg-card/50 backdrop-blur-sm rounded-r-xl
                      p-5 md:p-6
                      transition-all duration-300
                      hover:bg-card/80 hover:shadow-lg hover:shadow-primary/5
                      hover:translate-x-1
                    `}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="flex flex-col md:flex-row md:items-start gap-3 md:gap-6">
                      {/* Number */}
                      <div className="hidden md:flex items-center justify-center w-10 h-10 rounded-lg bg-muted/50 text-muted-foreground font-mono text-sm shrink-0">
                        {String(index + 1).padStart(2, '0')}
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-2">
                          <h2 className="text-lg md:text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                            {project.title}
                          </h2>
                          <span className={`text-xs px-2.5 py-0.5 rounded-full border ${catColor} shrink-0`}>
                            {project.category}
                          </span>
                        </div>
                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                          {getDescription(project.slug, project.short_description)}
                        </p>
                      </div>

                      {/* Arrow */}
                      <div className="hidden md:flex items-center shrink-0">
                        <ArrowRight className="h-5 w-5 text-muted-foreground/40 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}

        {/* Footer note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground/60">
            {lang === 'ru'
              ? 'Список обновляется автоматически при добавлении новых проектов.'
              : 'This list updates automatically as new projects are added.'}
          </p>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 mt-4 text-primary hover:underline text-sm font-medium"
          >
            {lang === 'ru' ? 'Полный каталог проектов' : 'Full project catalog'}
            <ExternalLink className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PortfolioOverview;
