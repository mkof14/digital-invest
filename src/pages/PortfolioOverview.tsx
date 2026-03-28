import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Loader2, ArrowUpRight, Zap, Layers, Activity, Brain, Sprout, Heart, Cpu, Utensils, Sparkles } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const overviewTexts: Record<string, { en: string; ru: string }> = {
  'biomath-core': {
    en: 'The computational brain behind 200+ health services. BioMath Core ingests biometric chaos and turns it into predictive intelligence — no guesswork, just architecture. It\'s the invisible engine that powers every diagnostic layer in the ecosystem.',
    ru: 'Вычислительный мозг за 200+ сервисами здоровья. BioMath Core поглощает биометрический хаос и превращает его в предиктивный интеллект — без догадок, только архитектура. Невидимый двигатель каждого диагностического слоя экосистемы.'
  },
  'biomathcore': {
    en: 'The computational brain behind 200+ health services. BioMath Core ingests biometric chaos and turns it into predictive intelligence — no guesswork, just architecture. It\'s the invisible engine that powers every diagnostic layer in the ecosystem.',
    ru: 'Вычислительный мозг за 200+ сервисами здоровья. BioMath Core поглощает биометрический хаос и превращает его в предиктивный интеллект — без догадок, только архитектура. Невидимый двигатель каждого диагностического слоя экосистемы.'
  },
  'biomathlife': {
    en: 'A longevity platform that doesn\'t sell supplements — it builds your biological profile across 20 categories and 200+ services. Think of it as a control panel for your body, where every metric has meaning and every recommendation has data behind it.',
    ru: 'Платформа долголетия, которая не продаёт добавки — она строит ваш биологический профиль по 20 категориям и 200+ сервисам. Пульт управления телом, где каждая метрика имеет значение, а каждая рекомендация подкреплена данными.'
  },
  'terraaero': {
    en: 'Drones that don\'t just fly — they farm. Precision irrigation, AI-driven agronomy, U.S.-manufactured fleet expanding across 23 states. This is agriculture reimagined from the sky down, with real hardware and real field results.',
    ru: 'Дроны, которые не просто летают — они фермерствуют. Точное орошение, ИИ-агрономия, флот американского производства в 23 штатах. Сельское хозяйство, переосмысленное с неба до земли, с реальным железом и реальными результатами.'
  },
  'agron': {
    en: 'National-scale robotics infrastructure for training, certification, and coordination. AGRON is the operating system for autonomous machines across America — the backbone nobody sees but everyone needs.',
    ru: 'Роботизированная инфраструктура национального масштаба: обучение, сертификация, координация. AGRON — операционная система для автономных машин по всей Америке. Хребет, который никто не видит, но все в нём нуждаются.'
  },
  'agron-work': {
    en: 'The talent layer for robotics. AGRON Work connects certified operators, technicians, and engineers with the companies building the autonomous future. Where human skill meets machine precision.',
    ru: 'Кадровый слой робототехники. AGRON Work связывает сертифицированных операторов, техников и инженеров с компаниями, строящими автономное будущее. Где человеческое мастерство встречает машинную точность.'
  },
  'myday': {
    en: 'Your day, reverse-engineered by AI. MyDay doesn\'t just plan — it learns your patterns, predicts your energy peaks, and restructures your time around what actually works. Productivity isn\'t about doing more — it\'s about doing right.',
    ru: 'Ваш день, деконструированный ИИ. MyDay не просто планирует — он изучает паттерны, предсказывает пики энергии и перестраивает время вокруг того, что реально работает. Продуктивность — не делать больше, а делать правильно.'
  },
  'itsgoodtoday': {
    en: 'No tracking marathons. No meditation pressure. Just one small thing today that makes tomorrow slightly better. A wellness companion designed for real humans, not fitness influencers.',
    ru: 'Никаких марафонов трекинга. Никакого давления медитацией. Просто одна маленькая вещь сегодня, которая сделает завтра чуть лучше. Компаньон для реальных людей, а не фитнес-инфлюенсеров.'
  },
  'mrx-health': {
    en: 'What happens when you mix medications? MRX.Health explores drug interactions through AI-driven bio-scan analysis — turning pharmacological complexity into clear, actionable safety insights.',
    ru: 'Что произойдёт при смешении лекарств? MRX.Health исследует лекарственные взаимодействия через ИИ-анализ биосканирования — превращая фармакологическую сложность в ясные инсайты безопасности.'
  },
  'table-served': {
    en: 'Not another recipe app. TableServed is a deterministic nutrition protocol — weekly Stability Boxes, a fixed Friday Lock cycle, zero ingredient improvisation. Family nutrition, engineered with the precision of a supply chain.',
    ru: 'Не очередное приложение рецептов. TableServed — детерминистический протокол питания: еженедельные Stability Box\'ы, фиксированный цикл Friday Lock, ноль импровизаций. Семейное питание, спроектированное с точностью цепочки поставок.'
  },
  'baseline': {
    en: 'Health logic, simplified to 4 steps. BaseLine takes complex clinical data and turns it into a launchpad — Biological Handshake, Baseline Ingestion, Marker Synthesis, Prognostic Launch. Your health journey starts with understanding where you stand.',
    ru: 'Логика здоровья, упрощённая до 4 шагов. BaseLine берёт сложные клинические данные и превращает в стартовую площадку. Путь к здоровью начинается с понимания, где вы находитесь.'
  },
  'saven': {
    en: 'Infrastructure of Continuous Execution. SAVEN is a 5-step operational cycle embedded in a 4-level BioMath architecture. It doesn\'t motivate — it executes. Discipline, automated.',
    ru: 'Инфраструктура непрерывного исполнения. SAVEN — 5-шаговый операционный цикл внутри 4-уровневой архитектуры BioMath. Не мотивирует — исполняет. Дисциплина, автоматизированная.'
  },
  'luna-balance': {
    en: 'Silence as technology. Luna Balance is a women\'s mindfulness platform built on \'Silence Technology\' and \'Relationship Mode\' — designed for emotional depth, inner stillness, and authentic connection.',
    ru: 'Тишина как технология. Luna Balance — женская платформа осознанности на основе «Технологии тишины» и «Режима отношений» — для эмоциональной глубины, внутренней тишины и подлинных связей.'
  },
  'stresscore': {
    en: 'Stress isn\'t the enemy — misunderstanding it is. StressCore maps your stress patterns and turns data into actionable calm. Science-backed resilience, not motivational posters.',
    ru: 'Стресс — не враг. Непонимание стресса — враг. StressCore картирует паттерны стресса и превращает данные в действенное спокойствие. Научная устойчивость, а не мотивационные плакаты.'
  },
  'vitalcore': {
    en: 'Every heartbeat tells a story. VitalCore captures, analyzes, and interprets vital signs in real-time — turning raw physiological data into health narratives you can actually act on.',
    ru: 'Каждое сердцебиение рассказывает историю. VitalCore захватывает и интерпретирует показатели в реальном времени — превращая физиологические данные в нарративы здоровья, на которые можно действовать.'
  },
  'bioagecore': {
    en: 'Your passport says one age. Your biology says another. BioAgeCore calculates your true biological age and gives you a personalized roadmap to change it — because aging is negotiable.',
    ru: 'Паспорт говорит один возраст. Биология — другой. BioAgeCore рассчитывает истинный биологический возраст и даёт персональную дорожную карту для его изменения — потому что старение обсуждаемо.'
  },
  'longevitycore': {
    en: 'Living longer isn\'t the goal — living better, longer, is. LongevityCore is a precision anti-aging system that goes beyond supplements and serums into the architecture of biological time.',
    ru: 'Жить дольше — не цель. Жить лучше и дольше — цель. LongevityCore — прецизионная антивозрастная система за пределами добавок, в архитектуре биологического времени.'
  },
  'familycore': {
    en: 'Health isn\'t individual — it\'s generational. FamilyCore connects health data across your household, creating a unified family health intelligence layer that grows with every member.',
    ru: 'Здоровье — не индивидуально. Оно поколенческое. FamilyCore связывает данные здоровья домохозяйства, создавая единый слой семейной аналитики, растущий с каждым участником.'
  },
  'seniorcore': {
    en: 'Aging with data, not just dignity. SeniorCore monitors cognitive and physical markers for older adults — delivering predictive care before problems become emergencies.',
    ru: 'Старение с данными, а не только с достоинством. SeniorCore мониторит когнитивные и физические маркеры — предиктивный уход до того, как проблемы станут экстренными.'
  },
  'skincore': {
    en: 'Your skin is your largest organ — treat it like one. SkinCore uses AI dermatology to track, analyze, and guide personalized skin care routines with clinical-grade precision.',
    ru: 'Кожа — ваш самый большой орган. Относитесь соответственно. SkinCore использует ИИ-дерматологию для персонализации ухода за кожей с клинической точностью.'
  },
  'digital-invest-portfolio': {
    en: 'The umbrella that holds it all. Digital Invest is a multi-sector portfolio company incubating and scaling technology ventures from health to robotics to food systems.',
    ru: 'Зонтик, который держит всё. Digital Invest — мультисекторная портфельная компания, инкубирующая и масштабирующая проекты от здоровья до робототехники и продовольственных систем.'
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
