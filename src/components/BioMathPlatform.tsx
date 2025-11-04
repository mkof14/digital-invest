import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Dna, 
  Brain, 
  Activity, 
  Shield, 
  Clock, 
  HeartPulse,
  Microscope,
  Cloud,
  Database,
  Pill,
  Monitor,
  Building2,
  ArrowRight
} from 'lucide-react';

const BioMathPlatform = () => {
  const services = [
    {
      number: "#1",
      title: "Секвенирование и анализ ДНК",
      description: "Создание индивидуального генетического профиля для каждого пациента",
      fullText: "Секвенирование ДНК - это процесс определения порядка нуклеотидных оснований в цепи ДНК. Мы используем эту последовательность для глубокого анализа генетических особенностей пациента, прежде всего для оценки предрасположенности к различным заболеваниям, метаболизма различных веществ и реакции на установленные лекарственные препараты.",
      icon: Dna
    },
    {
      number: "#2", 
      title: "Биоматематическая модель тела",
      description: "Создание индивидуальной биоматематической модели человеческого тела",
      fullText: "Мы рассматриваем человеческое тело как невероятно сложную и точно настроенную систему. Чтобы расчленить и смоделировать процессы, действующие в этой системе, мы разрабатываем биоматематическую модель человеческого тела, адаптированную под каждого пациента.",
      icon: Brain
    },
    {
      number: "#3",
      title: "Быстрая диагностика", 
      description: "Диагностика на основе генетических предрасположенностей и медицинской истории",
      fullText: "ИИ проводит комплексный анализ обширного массива информации для определения основной причины отклонений в жизненно важных показателях и предоставления первоначального диагноза. Это как консультация с огромной панелью врачей.",
      icon: Activity
    },
    {
      number: "#4",
      title: "Моделирование развития болезни",
      description: "Прогнозирование течения заболевания и рекомендации по лечению",
      fullText: "Биоматематическая модель пациента используется для моделирования заболевания и его воздействия на отдельные органы и весь организм в целом. Это позволяет точно определить первопричину проблемы.",
      icon: HeartPulse
    },
    {
      number: "#5",
      title: "Персонализированные лекарства",
      description: "Подбор и/или производство лекарств с максимальной эффективностью", 
      fullText: "Прецизионная медицина, основанная на индивидуальных генетических данных пациента, позволяет достичь максимальной эффективности лекарственных препаратов, избегая при этом негативного воздействия на организм.",
      icon: Pill
    }
  ];

  const keyResources = [
    {
      title: "Лаборатория секвенирования",
      description: "Современная роботизированная биомолекулярная лаборатория для секвенирования ДНК",
      icon: Microscope,
      image: "sequencing_laboratory.jpg"
    },
    {
      title: "BioMath Cloud", 
      description: "Облачная платформа для хранения данных пациентов и обработки с помощью ИИ",
      icon: Cloud,
      image: "bmc.jpg"
    },
    {
      title: "Искусственный интеллект",
      description: "Специализированная версия ИИ для работы с медицинской информацией",
      icon: Brain,
      image: "ai.jpg"
    },
    {
      title: "Оборудование мониторинга",
      description: "Система непрерывного мониторинга жизненно важных показателей 24/7",
      icon: Monitor,
      image: "monitoring.jpg"
    },
    {
      title: "Фармацевтическая фабрика",
      description: "Полностью автоматизированное фармацевтическое оборудование под управлением ИИ",
      icon: Pill,
      image: "pharma.jpg"
    },
    {
      title: "Информационный хаб",
      description: "Центр коммуникации со всеми заинтересованными сторонами",
      icon: Database,
      image: "hub.jpg"
    }
  ];

  const goals = [
    {
      title: "Прецизионная диагностика",
      description: "«Медицинский совет врачей 24/7» на базе ИИ как значительная помощь лечащему врачу в принятии решений",
      icon: Shield
    },
    {
      title: "Быстрый доступ", 
      description: "Сокращение нагрузки на систему здравоохранения и времени ожидания пациентов",
      icon: Clock
    },
    {
      title: "Улучшение жизни",
      description: "Повышение качества жизни и активного долголетия через мониторинг и персонализированную фармакологию",
      icon: HeartPulse
    }
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16">
        <Badge className="mb-6 bg-success/10 text-success border-success/20">
          Революционная платформа
        </Badge>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          <span className="text-primary">BioMath Life Platform</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto">
          На пути к прецизионной медицине через биоматематическое моделирование человеческого тела
        </p>
        
        <div className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
          Используя прорывные технологии в области генетики, биоматематики, 
          искусственного интеллекта и фармакологии
        </div>
        
        <Button variant="default" size="lg" className="text-lg px-8 py-4 hover:scale-105 transition-transform">
          Присоединиться к проекту
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </section>

      {/* Goals Section */}
      <section className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши цели</h2>
          <p className="text-muted-foreground text-lg max-w-4xl mx-auto leading-relaxed">
            Если вы разделяете наши цели и желаете сделать мир лучше, добро пожаловать на борт. 
            Инвестируйте свои знания, опыт, финансы в это.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto mb-12 p-6 bg-card/30 rounded-lg">
          <p className="text-muted-foreground leading-relaxed">
            Основываясь на своих достижениях в области передового анализа генома человека, Digital Invest Inc. 
            продолжает развиваться в направлении изменения ландшафта традиционной медицины. Суть нового проекта, 
            BioMath Life Platform, заключается в смещении акцента со статистических методов диагностики и лечения 
            заболеваний на математические. Используя цифровое моделирование, этот подход открывает широкие возможности, 
            особенно в прогнозировании прогрессирования заболевания и потенциальной реакции организма на лечение 
            еще до его тестирования на пациенте.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {goals.map((goal, index) => (
            <Card key={index} className="p-8 text-center hover:card-hover transition-all duration-300 group">
              <goal.icon className="w-16 h-16 mx-auto mb-6 text-success group-hover:text-success/80 transition-colors" />
              <h3 className="text-xl font-semibold mb-4">{goal.title}</h3>
              <p className="text-muted-foreground">{goal.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-card/20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Как это работает</h2>
          <p className="text-muted-foreground text-lg max-w-4xl mx-auto">
            Архитектура платформы структурирована для различных взаимодействий с клиентами и партнерами. 
            Модульная производственная структура позволяет как комплексные, так и специфические запросы.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <Card className="p-8 mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Информационный хаб</h3>
                <p className="text-muted-foreground mb-4">
                  Общение клиентов и партнеров с платформой осуществляется через внешний информационный хаб. 
                  Задачи хаба включают предварительную обработку и сортировку входящих данных.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Предварительная обработка данных</li>
                  <li>• Адаптация данных под потребности клиентов</li>
                  <li>• Обеспечение информационной безопасности</li>
                </ul>
              </div>
              <div className="flex justify-center">
                <div className="w-48 h-48 rounded-full bg-gradient-tech flex items-center justify-center">
                  <Database className="w-24 h-24 text-primary-foreground" />
                </div>
              </div>
            </div>
          </Card>
          
          <Card className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="flex justify-center lg:order-2">
                <div className="w-48 h-48 rounded-full bg-gradient-neural flex items-center justify-center">
                  <Cloud className="w-24 h-24 text-accent-foreground" />
                </div>
              </div>
              <div className="lg:order-1">
                <h3 className="text-2xl font-semibold mb-4">BioMath Cloud</h3>
                <p className="text-muted-foreground mb-4">
                  Ядро платформы включает данные генетического анализа пациентов, их персонализированную 
                  биоматематическую модель, медицинскую историю и множество других факторов.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Генетический анализ пациентов</li>
                  <li>• Персонализированные биоматематические модели</li>
                  <li>• Медицинская история и результаты лечения</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Услуги платформы</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Каждая услуга платформы служит звеном в технологической цепочке, оставаясь при этом 
            самодостаточным объектом как технически, так и финансово
          </p>
        </div>
        
        <div className="space-y-8">
          {services.map((service, index) => (
            <Card key={index} className="p-8 hover:card-hover transition-all duration-300 group">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                <div className="lg:col-span-1 flex justify-center lg:justify-start">
                  <Badge variant="outline" className="text-lg px-4 py-2 bg-primary/10 text-primary border-primary/20">
                    {service.number}
                  </Badge>
                </div>
                
                <div className="lg:col-span-2 flex justify-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-bio flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                    <service.icon className="w-10 h-10 text-success-foreground" />
                  </div>
                </div>
                
                <div className="lg:col-span-9">
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.fullText}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Key Resources */}
      <section className="py-16 bg-card/20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ключевые ресурсы</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Наши решения работают на передовом технологическом оборудовании, с использованием 
            современных алгоритмов и максимального уровня информационной безопасности
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {keyResources.map((resource, index) => (
            <Card key={index} className="overflow-hidden hover:card-hover transition-all duration-300 group">
              <div className="aspect-video bg-gradient-tech flex items-center justify-center">
                <resource.icon className="w-16 h-16 text-primary-foreground group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-3">{resource.title}</h3>
                <p className="text-muted-foreground text-sm">{resource.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-center">
        <Card className="p-12 bg-gradient-hero">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Инвестируйте в будущее медицины
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Присоединяйтесь к революции в области персонализированной медицины и 
            биоматематического моделирования человеческого тела
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="lg" className="text-lg px-8 py-4 hover:scale-105 transition-transform">
              Стать инвестором
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 hover:scale-105 transition-transform">
              Узнать больше
            </Button>
          </div>
        </Card>
      </section>
    </div>
  );
};

export default BioMathPlatform;