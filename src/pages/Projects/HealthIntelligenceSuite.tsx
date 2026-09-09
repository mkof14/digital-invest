import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Brain, Activity, HeartPulse, Users, Sparkles, Layers } from 'lucide-react';
import OptimizedImage from '@/components/OptimizedImage';
import heroImage from '@/assets/projects/vitalcore-hero.jpg';
import ProjectMediaRoomBySlug from '@/components/ProjectMediaRoomBySlug';

type Lang = 'en' | 'ru' | 'uk';

const content = {
  en: {
    badge: 'Health Intelligence',
    title: 'Health Intelligence Suite',
    subtitle: 'One unified health intelligence product combining stress, vitals, biological age, senior care and skin analysis in a single platform.',
    overviewTitle: 'One product, five directions',
    overviewP1: 'Health Intelligence Suite unites five previously separate directions — Stress, Vital, BioAge, Senior and Skin — into one coherent product. Instead of isolated applications, the suite provides a single data model, one interface language and one set of daily signals.',
    overviewP2: 'Each direction remains a distinct capability inside the suite, but they share the same signal processing layer, the same tracking history and the same non-medical guidance approach.',
    modulesTitle: 'Directions inside the suite',
    modules: [
      { icon: Brain, title: 'Stress', desc: 'Psychological state intelligence tracking stress, mood and energy with contextual micro-insights, trigger identification and low-energy windows.' },
      { icon: Activity, title: 'Vital', desc: 'Unified vital signs view combining heart rate, HRV, sleep, stress and activity patterns to show when the body is under pressure.' },
      { icon: HeartPulse, title: 'BioAge', desc: 'Biological age estimation based on real-life signals — sleep, recovery, stress and activity — with trajectory and dynamics over time.' },
      { icon: Users, title: 'Senior', desc: 'Support layer for seniors and caregivers: reminders for medication, hydration and routines, plus clear pattern overviews for families.' },
      { icon: Sparkles, title: 'Skin', desc: 'Camera-based analysis recognising skin patterns and visual trends over time, with ingredient-level feedback and routine tracking.' },
    ],
    whyTitle: 'Why they work better together',
    why: [
      { title: 'Shared signal layer', desc: 'Sleep, recovery, stress and activity feed every direction at once, so the same data produces more context instead of duplicated tracking.' },
      { title: 'One history', desc: 'A single timeline of measurements and changes across all five directions, instead of five disconnected histories.' },
      { title: 'One guidance model', desc: 'Consistent, non-medical daily guidance with the same tone, structure and safety rules across the whole suite.' },
    ],
    statusTitle: 'Status',
    statusText: 'Health Intelligence Suite is presented as a consolidated direction inside the BioMath Life ecosystem. Individual directions previously shown as separate projects are now part of this single product.',
    legalTitle: 'Important note',
    legalText: 'All directions are non-medical wellness tools. They do not diagnose, treat or prevent any disease and are not a substitute for professional medical advice.',
    back: 'Back to Projects',
  },
  ru: {
    badge: 'Health Intelligence',
    title: 'Health Intelligence Suite',
    subtitle: 'Единый продукт, объединяющий направления стресса, витальных показателей, биологического возраста, поддержки старшего поколения и анализа кожи.',
    overviewTitle: 'Один продукт, пять направлений',
    overviewP1: 'Health Intelligence Suite объединяет пять ранее отдельных направлений — Stress, Vital, BioAge, Senior и Skin — в один цельный продукт. Вместо разрозненных приложений — единая модель данных, единый язык интерфейса и один набор ежедневных сигналов.',
    overviewP2: 'Каждое направление остаётся самостоятельной функцией внутри продукта, но они используют общий слой обработки сигналов, общую историю наблюдений и единый немедицинский подход к рекомендациям.',
    modulesTitle: 'Направления внутри продукта',
    modules: [
      { icon: Brain, title: 'Stress', desc: 'Отслеживание стресса, настроения и энергии с контекстными микро-подсказками, определением триггеров и прогнозом периодов спада.' },
      { icon: Activity, title: 'Vital', desc: 'Единая картина витальных показателей: пульс, HRV, сон, стресс и активность — чтобы видеть, когда организм под нагрузкой.' },
      { icon: HeartPulse, title: 'BioAge', desc: 'Оценка биологического возраста на основе реальных сигналов — сна, восстановления, стресса и активности — с динамикой во времени.' },
      { icon: Users, title: 'Senior', desc: 'Поддержка для старшего поколения и их близких: напоминания о приёме лекарств, воде и рутинах, понятные обзоры паттернов.' },
      { icon: Sparkles, title: 'Skin', desc: 'Анализ по камере: распознавание паттернов кожи и визуальных изменений во времени, обратная связь по составам и отслеживание ухода.' },
    ],
    whyTitle: 'Почему вместе лучше',
    why: [
      { title: 'Общий слой сигналов', desc: 'Сон, восстановление, стресс и активность питают все направления сразу — те же данные дают больше контекста без дублирования.' },
      { title: 'Единая история', desc: 'Одна общая хронология измерений и изменений вместо пяти несвязанных историй.' },
      { title: 'Единая модель рекомендаций', desc: 'Согласованные немедицинские ежедневные рекомендации с одинаковой структурой и правилами безопасности.' },
    ],
    statusTitle: 'Статус',
    statusText: 'Health Intelligence Suite представлен как консолидированное направление внутри экосистемы BioMath Life. Направления, ранее показанные отдельными проектами, теперь входят в этот единый продукт.',
    legalTitle: 'Важно',
    legalText: 'Все направления являются немедицинскими wellness-инструментами. Они не диагностируют, не лечат и не предотвращают заболевания и не заменяют консультацию врача.',
    back: 'Назад к проектам',
  },
  uk: {
    badge: 'Health Intelligence',
    title: 'Health Intelligence Suite',
    subtitle: 'Єдиний продукт, що об’єднує напрями стресу, вітальних показників, біологічного віку, підтримки старшого покоління та аналізу шкіри.',
    overviewTitle: 'Один продукт, п’ять напрямів',
    overviewP1: 'Health Intelligence Suite об’єднує п’ять раніше окремих напрямів — Stress, Vital, BioAge, Senior і Skin — в один цілісний продукт: єдина модель даних, єдина мова інтерфейсу та один набір щоденних сигналів.',
    overviewP2: 'Кожен напрям лишається самостійною функцією всередині продукту, але вони використовують спільний шар обробки сигналів, спільну історію спостережень та єдиний немедичний підхід до рекомендацій.',
    modulesTitle: 'Напрями всередині продукту',
    modules: [
      { icon: Brain, title: 'Stress', desc: 'Відстеження стресу, настрою та енергії з контекстними мікро-підказками, визначенням тригерів і прогнозом періодів спаду.' },
      { icon: Activity, title: 'Vital', desc: 'Єдина картина вітальних показників: пульс, HRV, сон, стрес і активність — щоб бачити, коли організм під навантаженням.' },
      { icon: HeartPulse, title: 'BioAge', desc: 'Оцінка біологічного віку на основі реальних сигналів — сну, відновлення, стресу та активності — з динамікою у часі.' },
      { icon: Users, title: 'Senior', desc: 'Підтримка для старшого покоління та їхніх близьких: нагадування про ліки, воду й рутини, зрозумілі огляди патернів.' },
      { icon: Sparkles, title: 'Skin', desc: 'Аналіз за камерою: розпізнавання патернів шкіри та візуальних змін у часі, зворотний зв’язок щодо складів і догляду.' },
    ],
    whyTitle: 'Чому разом краще',
    why: [
      { title: 'Спільний шар сигналів', desc: 'Сон, відновлення, стрес і активність живлять усі напрями одразу — ті самі дані дають більше контексту без дублювання.' },
      { title: 'Єдина історія', desc: 'Одна спільна хронологія вимірювань і змін замість п’яти незв’язаних історій.' },
      { title: 'Єдина модель рекомендацій', desc: 'Узгоджені немедичні щоденні рекомендації з однаковою структурою та правилами безпеки.' },
    ],
    statusTitle: 'Статус',
    statusText: 'Health Intelligence Suite представлено як консолідований напрям в екосистемі BioMath Life. Напрями, що раніше були окремими проектами, тепер входять до цього єдиного продукту.',
    legalTitle: 'Важливо',
    legalText: 'Усі напрями є немедичними wellness-інструментами. Вони не діагностують, не лікують і не запобігають захворюванням та не замінюють консультацію лікаря.',
    back: 'Назад до проектів',
  },
} satisfies Record<Lang, unknown>;

const HealthIntelligenceSuite = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const lang = (['en', 'ru', 'uk'].includes(i18n.language?.slice(0, 2))
    ? i18n.language.slice(0, 2)
    : 'en') as Lang;
  const c = content[lang];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="relative h-[60vh] min-h-[460px] overflow-hidden">
        <OptimizedImage
          src={heroImage}
          alt="Health Intelligence Suite — unified health intelligence platform"
          containerClassName="absolute inset-0 w-full h-full"
          className="w-full h-full object-cover"
          showSkeleton={false}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />

        <div className="relative h-full container mx-auto px-4 flex flex-col justify-center">
          <Link to="/projects" className="animate-fade-in">
            <button className="inline-flex items-center mb-4 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {c.back}
            </button>
          </Link>
          <div className="animate-fade-in" style={{ animationDelay: '0.1s', animationFillMode: 'backwards' }}>
            <Badge className="w-fit mb-4 bg-primary/20 text-primary border-primary/30">{c.badge}</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{c.title}</h1>
            <p className="text-lg md:text-2xl text-muted-foreground max-w-3xl">{c.subtitle}</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">{c.overviewTitle}</h2>
          <div className="space-y-4 text-muted-foreground text-lg max-w-4xl">
            <p>{c.overviewP1}</p>
            <p>{c.overviewP2}</p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">{c.modulesTitle}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {c.modules.map((m) => (
              <Card key={m.title} className="transition-transform duration-300 hover:-translate-y-1">
                <CardHeader>
                  <m.icon className="w-10 h-10 text-primary mb-2" aria-hidden="true" />
                  <CardTitle>{m.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{m.desc}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">{c.whyTitle}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {c.why.map((w) => (
              <Card key={w.title} className="bg-muted/40">
                <CardHeader>
                  <Layers className="w-8 h-8 text-primary mb-2" aria-hidden="true" />
                  <CardTitle className="text-xl">{w.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{w.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">{c.statusTitle}</h2>
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <p className="text-muted-foreground">{c.statusText}</p>
            </CardContent>
          </Card>
        </section>

        <section>
          <Card className="bg-muted/30 border-primary/20">
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">
                <strong>{c.legalTitle}:</strong> {c.legalText}
              </p>
            </CardContent>
          </Card>
        </section>
      </div>

      <ProjectMediaRoomBySlug slug="health-intelligence-suite" />
      <Footer />
    </div>
  );
};

export default HealthIntelligenceSuite;
