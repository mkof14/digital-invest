/**
 * AGRON 2026 page content.
 *
 * Authored copy for the AGRON project page inside Digital Invest.
 * English is the source of truth; other languages fall back to English
 * when a translation is not available yet.
 */

export type Pair = { t: string; d: string };
export type Group = { t: string; items: string[] };
export type Area = { t: string; d: string; items?: string[] };


export interface AgronContent {
  back: string;
  hero: {
    badge: string;
    title: string;
    tagline: string;
    chips: string[];
    desc: string;
    ctaPrimary: string;
    ctaSecondary: string;
    external: string;
  };
  what: { title: string; p1: string; p2: string; layers: Pair[] };
  record: { title: string; note: string; stats: { v: string; l: string }[] };
  capabilities: { title: string; items: Pair[] };
  services: { kicker: string; title: string; p: string; note: string; cta: string; areas: Area[] };
  geospatial: { title: string; p: string; items: string[]; cta: string };
  maritimeWater: { title: string; kicker: string; items: Pair[]; cta: string };
  maritimeLand: { title: string; p: string; envs: string[]; items: Pair[] };
  sysArch: { title: string; kicker: string; flow: string[] };
  commercial: { title: string; kicker: string; p: string; items: string[]; note: string };
  path: { title: string; kicker: string; steps: string[]; note: string };
  now: { title: string; note: string; items: { t: string; s: string }[] };
  portfolioArch: { title: string; p: string; items: string[] };

  maritime: {
    title: string;
    kicker: string;
    tagline: string;
    desc: string;
    flowTitle: string;
    flow: string[];
    appsTitle: string;
    apps: Group[];
  };
  starwall: {
    title: string;
    kicker: string;
    p1: string;
    p2: string;
    principleTitle: string;
    principle: string;
    inputsTitle: string;
    inputs: string[];
    chainTitle: string;
    chain: string[];
  };
  modular: { title: string; note: string; items: Pair[]; zonesTitle: string; zones: string[] };
  protection: { title: string; items: Pair[] };
  support: { title: string; kicker: string; p1: string; flow: string[]; capsTitle: string; caps: string[] };
  business: { title: string; kicker: string; items: Group[]; note: string };
  fit: { title: string; p: string; items: string[] };
  maturity: {
    title: string;
    note: string;
    currentTitle: string;
    current: string[];
    nextTitle: string;
    next: string[];
    futureTitle: string;
    future: string[];
  };
  status: { title: string; overviewTitle: string; overview: string; productTitle: string; product: string; cta: string };
  cta: { title: string; desc: string; primary: string; secondary: string };
}

const en: AgronContent = {
  back: 'Back to Projects',
  hero: {
    badge: 'Digital Invest portfolio company',
    title: 'AGRON',
    tagline: 'Infrastructure for Autonomous Operations',
    chips: ['AI', 'Robotics', 'Autonomous Infrastructure', 'Intelligence', 'Security'],
    desc:
      'AGRON combines operational experience, autonomous systems, software, intelligence, training and deployment infrastructure into systems designed for real operating environments.',
    ctaPrimary: 'Explore AGRON',
    ctaSecondary: 'Visit agron1.com',
    external: 'External site',
  },
  what: {
    title: 'From Technology to Operational Capability',
    p1: 'AGRON focuses on what happens after technology leaves the laboratory.',
    p2:
      'Systems must be evaluated, integrated, operated, monitored, supported, improved and used by trained people in real environments. AGRON connects these layers into an operational structure spanning autonomous systems, software, intelligence, training, field operations and security.',
    layers: [
      { t: 'Autonomous Systems', d: 'Aerial, ground and maritime platforms integrated into working operations.' },
      { t: 'Operations', d: 'Mission management, personnel, equipment, workflows and field deployment.' },
      { t: 'Intelligence', d: 'Situational awareness, correlation, risk analysis and decision support.' },
      { t: 'Security', d: 'Security architecture, monitoring and technical integration.' },
      { t: 'Training', d: 'Operator training, instructor development and certification pathways.' },
      { t: 'Software & Data', d: 'The integration layer connecting sensors, systems and operational data.' },
    ],
  },
  record: {
    title: 'Operating Record',
    note: 'Operational indicators reported by AGRON. No financial performance figures are presented.',
    stats: [
      { v: '10K+', l: 'UAV operators, instructors and specialists trained' },
      { v: '22', l: 'Defined professional-service offerings' },
      { v: '18', l: 'Training programmes developed' },
      { v: '10+', l: 'Countries with delivered programmes' },
    ],

  },
  capabilities: {
    title: 'Capability Architecture',
    items: [
      { t: 'Consulting', d: 'Operational models, autonomous-system strategy, deployment planning and capability architecture.' },
      { t: 'Assessment & Validation', d: 'Independent evaluation and practical validation of UAV, Counter-UAS, autonomous and related technologies.' },
      { t: 'Capability Development', d: 'Building operational capability around technology, personnel, procedures, infrastructure and deployment.' },
      { t: 'Training Infrastructure', d: 'Operator training, instructor development, academy infrastructure and certification pathways.' },
      { t: 'Product Development Support', d: 'Operational feedback, testing, validation, integration and field experience for manufacturers and technology companies.' },
      { t: 'Operations', d: 'Mission management, personnel, equipment, reporting, operational workflows and field deployment.' },
      { t: 'Intelligence & Security', d: 'Situational awareness, risk analysis, monitoring, technical integration, security architecture and decision support.' },
    ],
  },
  services: {
    kicker: 'Professional Services Built Around Operational Capability',
    title: 'AGRON Services Catalog',
    p: 'AGRON provides structured professional services for organizations building, evaluating, deploying or improving autonomous, UAV, Counter-UAS, geospatial, training and operational capabilities.',
    note: 'The full catalog is maintained on the AGRON website.',
    cta: 'Open AGRON Services Catalog',
    areas: [
      {
        t: 'Consulting',
        d: 'Operational consulting for organizations developing or improving UAV, autonomous and Counter-UAS capabilities.',
        items: ['Operating models', 'Employment concepts', 'Deployment planning', 'Capability architecture', 'Decision support'],
      },
      {
        t: 'Assessment & Validation',
        d: 'Independent evaluation of technologies and their practical suitability.',
        items: ['Technology validation', 'Expert assessment', 'Operational use-case analysis', 'Practical suitability evaluation', 'Validation reporting'],
      },
      {
        t: 'Capability Development',
        d: 'Structured programmes for organizations that need operational capability rather than simply equipment.',
        items: [
          'Capability audits',
          'Development roadmaps',
          'Operating concepts',
          'Methodology',
          'Training programme development',
          'Certification-system design',
          'Institutional and national-scale operator-training systems',
        ],
      },
      {
        t: 'Training Infrastructure',
        d: 'Development of professional training capacity.',
        items: [
          'Turnkey training centres',
          'Training infrastructure design',
          'Equipment selection',
          'Procurement consulting',
          'Instructor preparation',
          'Train-the-Trainer',
          'Professional qualification verification',
        ],
      },
      {
        t: 'Product Development',
        d: 'Operational support for manufacturers, technology developers, R&D teams, startups and integrators.',
        items: [
          'End-user experience integration',
          'Expert product-development support',
          'Operational feedback',
          'New-technology implementation',
          'Deployment preparation',
          'Personnel training',
        ],
      },
    ],
  },
  geospatial: {
    title: 'Geospatial & Data Capabilities',
    p: 'Spatial data capabilities represented within the AGRON ecosystem, applied to operational, industrial and infrastructure environments.',
    items: [
      'Spatial data acquisition',
      'Aerial LiDAR',
      'UAV photogrammetry',
      'GIS',
      'Geoportals',
      'Spatial databases',
      'Automation',
      'AI analytics',
      'Industry-specific geospatial solutions',
      'R&D',
      'Knowledge transfer',
    ],
    cta: 'See the full services catalog',
  },
  maritimeWater: {
    kicker: 'On the water',
    title: 'Vessels & Operating Areas',
    items: [
      { t: 'Vessel & Risk Assessment', d: 'Understand the vessel, operating environment, exposure, systems, procedures and potential vulnerabilities.' },
      { t: 'Route Intelligence', d: 'Intelligence related to routes, operating areas, relevant events and changing conditions.' },
      { t: 'Situational Awareness', d: 'Maintain a unified understanding of what is happening around the vessel.' },
      { t: 'Intelligent Analysis', d: 'Correlate information and identify events, patterns, anomalies and situations requiring attention.' },
      { t: 'Crew Readiness & Protocol', d: 'Support crew preparation, procedures, escalation logic and security readiness.' },
    ],
    cta: 'Explore AGRON Maritime',
  },
  maritimeLand: {
    title: 'Shore, Marinas & Facilities',
    p: 'AGRON Maritime protects an operating environment rather than only an individual vessel.',
    envs: ['Marinas', 'Ports', 'Berths', 'Private islands', 'Coastal properties', 'Special facilities', 'Temporary security environments'],
    items: [
      { t: 'Marina Security Assessment', d: 'Assessment of the marina environment, technical systems, access logic and operating procedures.' },
      { t: 'Shore, Berth & Access', d: 'Awareness and integration across shoreline, berths, access points and supporting infrastructure.' },
      { t: 'AGRON Security Support Center', d: 'Specialist support connected to the protected environment when additional analysis is required.' },
    ],
  },
  sysArch: {
    kicker: 'System architecture',
    title: 'How the Environment Is Protected',
    flow: [
      'Protected environment — yacht / marina / port / island / commercial vessel',
      'Sensors + existing systems + AGRON modules',
      'StarWall',
      'Intelligence & analysis',
      'AGRON Security Support Center',
      'Human decision',
    ],
  },
  commercial: {
    kicker: 'Expansion area',
    title: 'Commercial Maritime',
    p: 'The same intelligence, integration, monitoring, modular infrastructure and support architecture can extend beyond private yachts.',
    items: ['Commercial vessels', 'Tankers', 'Ports', 'Terminals', 'Critical maritime infrastructure', 'Strategic maritime routes'],
    note: 'Presented as an expanding application area. No commercial maritime deployments are claimed.',
  },
  path: {
    kicker: 'Development path',
    title: 'From Operational Experience to Scalable Infrastructure',
    steps: [
      'Training & field experience',
      'Assessment & validation',
      'Capability development',
      'Autonomous operations',
      'Intelligence & security',
      'AGRON Maritime',
      'StarWall',
      'Software + intelligence + support + recurring services',
    ],
    note: 'Later stages describe direction of development and are not presented as fully commercialized.',
  },
  now: {
    title: 'Current Development',
    note: 'Status language reflects current stage. Development-stage capabilities are not presented as established commercial deployments.',
    items: [
      { t: 'Professional Services', s: 'Active' },
      { t: 'Training Infrastructure', s: 'Active' },
      { t: 'Assessment & Validation', s: 'Active' },
      { t: 'AGRON Maritime', s: 'Expansion' },
      { t: 'StarWall', s: 'Product & deployment development' },
      { t: 'Modular Security Infrastructure', s: 'Development' },
      { t: 'Commercial Maritime Applications', s: 'Expansion opportunity' },
    ],
  },
  portfolioArch: {
    title: 'Portfolio Architecture',
    p: 'AGRON is one Digital Invest portfolio company. Its capabilities are parts of AGRON, not separate portfolio companies.',
    items: [
      'Professional services',
      'Autonomous operations',
      'Training & capability development',
      'Assessment & validation',
      'Geospatial & data',
      'AGRON Maritime',
      'StarWall',
      'Security infrastructure',
    ],
  },

  maritime: {
    kicker: 'Intelligence + Security',
    title: 'AGRON Maritime',
    tagline: 'See earlier. Understand faster. Be ready.',
    desc:
      'AGRON Maritime extends AGRON’s operational intelligence and security capabilities to yachts, superyachts, marinas, ports, private islands, maritime facilities and selected commercial maritime environments. The system connects intelligence, monitoring, situational awareness, technical systems, trained specialists and decision support.',
    flowTitle: 'A connected system, not isolated hardware',
    flow: [
      'Yacht / Vessel',
      'Sensors + Existing Systems',
      'StarWall',
      'Intelligence & Analysis',
      'AGRON Security Support Center',
      'Human Decision',
    ],
    appsTitle: 'Operating Environments',
    apps: [
      {
        t: 'Yachts & Superyachts',
        items: [
          'Vessel security assessment',
          'Route intelligence',
          'Situational awareness',
          'Anomaly detection',
          'Crew readiness',
          'Security protocols',
          'Technical integration',
          'Support Center access',
        ],
      },
      {
        t: 'Marinas & Ports',
        items: [
          'Water awareness',
          'Air awareness',
          'Shore and perimeter awareness',
          'Access monitoring',
          'Technical systems integration',
          'Incident coordination',
          'Security Support Center',
        ],
      },
      {
        t: 'Private Islands & Special Facilities',
        items: [
          'Distributed monitoring',
          'Integrated communications',
          'Perimeter awareness',
          'Mobile technical infrastructure',
          'Operational support',
        ],
      },
      {
        t: 'Commercial Maritime',
        items: [
          'Commercial vessels',
          'Tankers',
          'Ports',
          'Critical maritime routes',
          'Maritime infrastructure',
        ],
      },
    ],
  },
  starwall: {
    kicker: 'StarWall by AGRON',
    title: 'One intelligence layer across the protected environment.',
    p1:
      'StarWall is the intelligence and integration layer connecting existing equipment, sensors, communications, operational data and security systems into a unified operating picture.',
    p2:
      'Instead of forcing operators to work across multiple isolated systems, StarWall collects and normalizes information, analyzes events, maintains context, identifies significant changes and supports human decision-making.',
    principleTitle: 'Human in command',
    principle:
      'StarWall assists the captain, operator, security lead or responsible decision-maker. It does not remove human responsibility from critical decisions.',
    inputsTitle: 'Connected sources',
    inputs: [
      'Radar',
      'Cameras',
      'AIS / Navigation',
      'RF systems',
      'Acoustic systems',
      'Sensors',
      'Drones',
      'Communications',
      'Existing security systems',
    ],
    chainTitle: 'From signal to decision',
    chain: [
      'Common operating picture',
      'Analysis',
      'Risk / event understanding',
      'Recommended response',
      'Human decision',
    ],
  },
  modular: {
    title: 'Modular Security Infrastructure',
    note:
      'AGRON can integrate technical capability into different physical formats depending on the protected environment. Functional zones are described at a high level only.',
    items: [
      { t: 'Yacht Modules', d: 'Distributed equipment integrated into the vessel rather than requiring a conventional container.' },
      { t: 'Mobile Security Unit', d: 'Vehicle-based configuration for marinas, ports, private facilities, events and temporary deployments — for example a Transit-class cargo van.' },
      { t: 'Containerized Security Unit', d: 'Self-contained infrastructure for ports, commercial vessels, critical sites, islands and larger installations.' },
    ],
    zonesTitle: 'Functional zones',
    zones: [
      'Power & UPS',
      'Communications',
      'Radio systems',
      'Electronics',
      'Compute & data',
      'Operator workstation',
      'Detection systems',
      'Deployable equipment',
    ],
  },
  protection: {
    title: 'Multi-Layer Protection',
    items: [
      { t: 'Detect', d: 'Understand what is happening.' },
      { t: 'Identify', d: 'Correlate observations and determine relevance.' },
      { t: 'Assess', d: 'Evaluate risk and possible developments.' },
      { t: 'Alert', d: 'Deliver meaningful information to the responsible person.' },
      { t: 'Support', d: 'Provide intelligence and specialist assistance.' },
      { t: 'Protect', d: 'Integrate appropriate technical and operational security measures.' },
      { t: 'Learn', d: 'Maintain event history and improve understanding of the protected environment over time.' },
    ],
  },
  support: {
    kicker: 'Technology + People',
    title: 'AGRON Security Support Center',
    p1:
      'Technology provides speed and scale. Experienced specialists provide judgment. The AGRON Security Support Center can remain connected to vessels, marinas, facilities and responsible personnel when additional analysis or operational support is required.',
    flow: ['Client environment', 'StarWall', 'AGRON Security Support Center'],
    capsTitle: 'Capabilities',
    caps: [
      'Situation assessment',
      'Information correlation',
      'Scenario review',
      'Decision support',
      'Specialist escalation',
      'Technical coordination',
      'Incident support',
    ],
  },
  business: {
    kicker: 'Multiple Revenue Layers',
    title: 'Business Model',
    items: [
      { t: 'Professional Services', items: ['Consulting', 'Assessment', 'Engineering', 'Implementation'] },
      { t: 'Technology', items: ['StarWall software', 'System integration', 'Technical infrastructure'] },
      { t: 'Recurring Services', items: ['Software subscriptions', 'Monitoring', 'Intelligence services', 'Support Center', 'Maintenance and support'] },
      { t: 'Training', items: ['Operator training', 'Crew preparation', 'Corporate programmes', 'Academy infrastructure'] },
      { t: 'Deployment', items: ['Maritime installations', 'Mobile units', 'Containerized units', 'Site-specific integration'] },
    ],
    note: 'AGRON is not dependent on a single hardware sale. Prices are not published on Digital Invest.',
  },
  fit: {
    title: 'Why AGRON Fits Digital Invest',
    p:
      'AGRON represents Digital Invest’s expansion into real-world AI, robotics, autonomous infrastructure, intelligence and operational technology. This creates a business substantially broader than a conventional autonomous-equipment manufacturer.',
    items: [
      'Software',
      'Physical infrastructure',
      'Professional services',
      'Recurring revenue',
      'Training',
      'Operational experience',
      'Technical integration',
      'International applications',
    ],
  },
  maturity: {
    title: 'Current · Next · Future Direction',
    note: 'Planned capabilities are never presented as completed functionality.',
    currentTitle: 'Current',
    current: [
      'Consulting, assessment and validation programmes',
      'Training and instructor development',
      'Field operations and mission support',
      'Intelligence and security advisory work',
    ],
    nextTitle: 'Next',
    next: [
      'AGRON Maritime deployments for yachts, marinas and facilities',
      'StarWall integration with additional sensor and communication systems',
      'Mobile and containerized security configurations',
      'Expanded Security Support Center services',
    ],
    futureTitle: 'Future direction',
    future: [
      'Broader commercial maritime applications',
      'Wider international programme participation',
      'Extended autonomous and robotic operations infrastructure',
    ],
  },
  status: {
    title: 'Project Overview vs. Live Product',
    overviewTitle: 'Digital Invest — Project Overview',
    overview:
      'Digital Invest explains the project, its business rationale and product direction as part of the portfolio. This page is informational and does not constitute an offer.',
    productTitle: 'AGRON — Live Product',
    product:
      'agron1.com is the destination for the actual AGRON brand, services, maritime direction and StarWall product experience.',
    cta: 'Visit AGRON',
  },
  cta: {
    title: 'Interested in AGRON?',
    desc:
      'For qualified investors and partners interested in autonomous operations, maritime intelligence and security infrastructure.',
    primary: 'Request information',
    secondary: 'Visit agron1.com',
  },
};

const ru: AgronContent = {
  ...en,
  services: {
    ...en.services,
    kicker: 'Профессиональные услуги вокруг операционных возможностей',
    title: 'Каталог услуг AGRON',
    p: 'AGRON предоставляет структурированные профессиональные услуги организациям, которые создают, оценивают, внедряют или развивают автономные, БПЛА, Counter-UAS, геопространственные, учебные и операционные возможности.',
    note: 'Полный каталог поддерживается на сайте AGRON.',
    cta: 'Открыть каталог услуг AGRON',
    areas: en.services.areas.map((a, i) => ({
      ...a,
      t: ['Консалтинг', 'Оценка и валидация', 'Развитие возможностей', 'Учебная инфраструктура', 'Разработка продукта'][i] ?? a.t,
    })),
  },
  geospatial: { ...en.geospatial, title: 'Геопространственные данные и аналитика', cta: 'Смотреть полный каталог услуг' },
  maritimeWater: { ...en.maritimeWater, kicker: 'На воде', title: 'Суда и районы плавания', cta: 'Подробнее об AGRON Maritime' },
  maritimeLand: { ...en.maritimeLand, title: 'Берег, марины и объекты', p: 'AGRON Maritime защищает всю операционную среду, а не только отдельное судно.' },
  sysArch: { ...en.sysArch, kicker: 'Архитектура системы', title: 'Как защищается среда' },
  commercial: { ...en.commercial, kicker: 'Направление расширения', title: 'Коммерческий флот', note: 'Представлено как направление расширения. Внедрения не заявляются.' },
  path: { ...en.path, kicker: 'Путь развития', title: 'От операционного опыта к масштабируемой инфраструктуре', note: 'Поздние этапы описывают направление развития и не являются полностью коммерциализированными.' },
  now: { ...en.now, title: 'Текущее состояние', note: 'Продукты на стадии разработки не представлены как готовые коммерческие внедрения.' },
  portfolioArch: { ...en.portfolioArch, title: 'Архитектура портфеля', p: 'AGRON — одна компания портфеля Digital Invest. Её направления не являются отдельными компаниями.' },

  back: 'Назад к проектам',
  hero: {
    badge: 'Компания портфеля Digital Invest',
    title: 'AGRON',
    tagline: 'Инфраструктура автономных операций',
    chips: ['ИИ', 'Робототехника', 'Автономная инфраструктура', 'Разведданные', 'Безопасность'],
    desc:
      'AGRON объединяет операционный опыт, автономные системы, программное обеспечение, аналитику, обучение и инфраструктуру развёртывания в решения для реальных условий эксплуатации.',
    ctaPrimary: 'Изучить AGRON',
    ctaSecondary: 'Перейти на agron1.com',
    external: 'Внешний сайт',
  },
  what: {
    title: 'От технологии к операционной способности',
    p1: 'AGRON занимается тем, что происходит после выхода технологии из лаборатории.',
    p2:
      'Системы необходимо оценивать, интегрировать, эксплуатировать, контролировать, поддерживать, улучшать — и ими должны управлять подготовленные люди в реальных условиях. AGRON связывает эти слои в единую операционную структуру: автономные системы, ПО, аналитика, обучение, полевые операции и безопасность.',
    layers: [
      { t: 'Автономные системы', d: 'Воздушные, наземные и морские платформы, интегрированные в реальные операции.' },
      { t: 'Операции', d: 'Управление миссиями, персонал, оборудование, процессы и полевое развёртывание.' },
      { t: 'Аналитика', d: 'Ситуационная осведомлённость, корреляция данных, анализ рисков и поддержка решений.' },
      { t: 'Безопасность', d: 'Архитектура безопасности, мониторинг и техническая интеграция.' },
      { t: 'Обучение', d: 'Подготовка операторов, развитие инструкторов и сертификационные программы.' },
      { t: 'ПО и данные', d: 'Интеграционный слой, объединяющий датчики, системы и операционные данные.' },
    ],
  },
  record: {
    title: 'Операционный опыт',
    note: 'Операционные показатели по данным AGRON. Финансовые показатели не приводятся.',
    stats: [
      { v: '10K+', l: 'Подготовленных операторов БПЛА, инструкторов и специалистов' },
      { v: '22', l: 'Профессиональных услуг в каталоге' },
      { v: '18', l: 'Разработанных учебных программ' },
      { v: '10+', l: 'Стран, где реализованы программы' },
    ],
  },

  capabilities: {
    title: 'Архитектура компетенций',
    items: [
      { t: 'Консалтинг', d: 'Операционные модели, стратегия автономных систем, планирование развёртывания и архитектура компетенций.' },
      { t: 'Оценка и валидация', d: 'Независимая оценка и практическая проверка БПЛА, Counter-UAS, автономных и смежных технологий.' },
      { t: 'Развитие способностей', d: 'Создание операционной способности вокруг технологий, персонала, процедур, инфраструктуры и развёртывания.' },
      { t: 'Инфраструктура обучения', d: 'Подготовка операторов, развитие инструкторов, инфраструктура академии и сертификация.' },
      { t: 'Поддержка разработки продуктов', d: 'Операционная обратная связь, испытания, валидация, интеграция и полевой опыт для производителей.' },
      { t: 'Операции', d: 'Управление миссиями, персонал, оборудование, отчётность, рабочие процессы и полевое развёртывание.' },
      { t: 'Аналитика и безопасность', d: 'Ситуационная осведомлённость, анализ рисков, мониторинг, техническая интеграция и поддержка решений.' },
    ],
  },
  maritime: {
    kicker: 'Аналитика + безопасность',
    title: 'AGRON Maritime',
    tagline: 'Видеть раньше. Понимать быстрее. Быть готовым.',
    desc:
      'AGRON Maritime распространяет операционную аналитику и системы безопасности AGRON на яхты, суперъяхты, марины, порты, частные острова, морские объекты и отдельные коммерческие морские среды. Система связывает аналитику, мониторинг, ситуационную осведомлённость, технические системы, подготовленных специалистов и поддержку решений.',
    flowTitle: 'Связанная система, а не отдельное оборудование',
    flow: [
      'Яхта / судно',
      'Датчики и существующие системы',
      'StarWall',
      'Аналитика и обработка',
      'Центр поддержки безопасности AGRON',
      'Решение человека',
    ],
    appsTitle: 'Среды эксплуатации',
    apps: [
      {
        t: 'Яхты и суперъяхты',
        items: [
          'Оценка безопасности судна',
          'Аналитика маршрута',
          'Ситуационная осведомлённость',
          'Выявление аномалий',
          'Готовность экипажа',
          'Протоколы безопасности',
          'Техническая интеграция',
          'Доступ к Центру поддержки',
        ],
      },
      {
        t: 'Марины и порты',
        items: [
          'Обстановка на воде',
          'Обстановка в воздухе',
          'Береговая и периметровая обстановка',
          'Контроль доступа',
          'Интеграция технических систем',
          'Координация инцидентов',
          'Центр поддержки безопасности',
        ],
      },
      {
        t: 'Частные острова и особые объекты',
        items: [
          'Распределённый мониторинг',
          'Интегрированные коммуникации',
          'Периметровая осведомлённость',
          'Мобильная техническая инфраструктура',
          'Операционная поддержка',
        ],
      },
      {
        t: 'Коммерческий флот',
        items: [
          'Коммерческие суда',
          'Танкеры',
          'Порты',
          'Критические морские маршруты',
          'Морская инфраструктура',
        ],
      },
    ],
  },
  starwall: {
    kicker: 'StarWall by AGRON',
    title: 'Единый аналитический слой охраняемой среды.',
    p1:
      'StarWall — слой аналитики и интеграции, объединяющий существующее оборудование, датчики, связь, операционные данные и системы безопасности в единую картину обстановки.',
    p2:
      'Вместо работы оператора в нескольких изолированных системах StarWall собирает и нормализует информацию, анализирует события, сохраняет контекст, выявляет значимые изменения и поддерживает принятие решений человеком.',
    principleTitle: 'Решение принимает человек',
    principle:
      'StarWall помогает капитану, оператору, руководителю безопасности или иному ответственному лицу. Он не снимает с человека ответственность за критические решения.',
    inputsTitle: 'Подключаемые источники',
    inputs: [
      'Радар',
      'Камеры',
      'AIS / навигация',
      'Радиочастотные системы',
      'Акустические системы',
      'Датчики',
      'Дроны',
      'Связь',
      'Существующие системы безопасности',
    ],
    chainTitle: 'От сигнала к решению',
    chain: [
      'Единая картина обстановки',
      'Анализ',
      'Понимание риска / события',
      'Рекомендуемая реакция',
      'Решение человека',
    ],
  },
  modular: {
    title: 'Модульная инфраструктура безопасности',
    note:
      'AGRON может интегрировать технические возможности в разные физические форматы в зависимости от охраняемой среды. Функциональные зоны описаны только на верхнем уровне.',
    items: [
      { t: 'Яхтенные модули', d: 'Распределённое оборудование, интегрируемое в судно без классического контейнера.' },
      { t: 'Мобильный модуль безопасности', d: 'Конфигурация на базе автомобиля для марин, портов, частных объектов, мероприятий и временных развёртываний — например, фургон класса Transit.' },
      { t: 'Контейнерный модуль безопасности', d: 'Автономная инфраструктура для портов, коммерческих судов, критических объектов, островов и крупных установок.' },
    ],
    zonesTitle: 'Функциональные зоны',
    zones: [
      'Питание и ИБП',
      'Связь',
      'Радиосистемы',
      'Электроника',
      'Вычисления и данные',
      'Рабочее место оператора',
      'Системы обнаружения',
      'Развёртываемое оборудование',
    ],
  },
  protection: {
    title: 'Многоуровневая защита',
    items: [
      { t: 'Обнаружение', d: 'Понять, что происходит.' },
      { t: 'Идентификация', d: 'Сопоставить наблюдения и определить значимость.' },
      { t: 'Оценка', d: 'Оценить риск и возможное развитие ситуации.' },
      { t: 'Оповещение', d: 'Передать содержательную информацию ответственному лицу.' },
      { t: 'Поддержка', d: 'Предоставить аналитику и помощь специалистов.' },
      { t: 'Защита', d: 'Интегрировать соответствующие технические и операционные меры безопасности.' },
      { t: 'Обучение системы', d: 'Сохранять историю событий и улучшать понимание охраняемой среды.' },
    ],
  },
  support: {
    kicker: 'Технологии + люди',
    title: 'Центр поддержки безопасности AGRON',
    p1:
      'Технологии дают скорость и масштаб. Опытные специалисты дают суждение. Центр поддержки безопасности AGRON может оставаться на связи с судами, маринами, объектами и ответственным персоналом, когда требуется дополнительный анализ или операционная поддержка.',
    flow: ['Среда клиента', 'StarWall', 'Центр поддержки безопасности AGRON'],
    capsTitle: 'Возможности',
    caps: [
      'Оценка обстановки',
      'Корреляция информации',
      'Разбор сценариев',
      'Поддержка решений',
      'Эскалация к специалистам',
      'Техническая координация',
      'Поддержка при инцидентах',
    ],
  },
  business: {
    kicker: 'Несколько уровней выручки',
    title: 'Бизнес-модель',
    items: [
      { t: 'Профессиональные услуги', items: ['Консалтинг', 'Оценка', 'Инжиниринг', 'Внедрение'] },
      { t: 'Технологии', items: ['ПО StarWall', 'Системная интеграция', 'Техническая инфраструктура'] },
      { t: 'Регулярные услуги', items: ['Подписки на ПО', 'Мониторинг', 'Аналитические сервисы', 'Центр поддержки', 'Обслуживание и поддержка'] },
      { t: 'Обучение', items: ['Подготовка операторов', 'Подготовка экипажей', 'Корпоративные программы', 'Инфраструктура академии'] },
      { t: 'Развёртывание', items: ['Морские установки', 'Мобильные модули', 'Контейнерные модули', 'Интеграция под объект'] },
    ],
    note: 'AGRON не зависит от разовой продажи оборудования. Цены на Digital Invest не публикуются.',
  },
  fit: {
    title: 'Почему AGRON в портфеле Digital Invest',
    p:
      'AGRON — это выход Digital Invest в прикладной ИИ, робототехнику, автономную инфраструктуру, аналитику и операционные технологии. Модель существенно шире, чем у обычного производителя автономного оборудования.',
    items: [
      'Программное обеспечение',
      'Физическая инфраструктура',
      'Профессиональные услуги',
      'Регулярная выручка',
      'Обучение',
      'Операционный опыт',
      'Техническая интеграция',
      'Международное применение',
    ],
  },
  maturity: {
    title: 'Сейчас · Далее · Направление развития',
    note: 'Планируемые возможности никогда не представляются как уже реализованные.',
    currentTitle: 'Сейчас',
    current: [
      'Программы консалтинга, оценки и валидации',
      'Обучение и подготовка инструкторов',
      'Полевые операции и поддержка миссий',
      'Консультационная работа по аналитике и безопасности',
    ],
    nextTitle: 'Далее',
    next: [
      'Развёртывания AGRON Maritime для яхт, марин и объектов',
      'Интеграция StarWall с дополнительными датчиками и системами связи',
      'Мобильные и контейнерные конфигурации безопасности',
      'Расширение услуг Центра поддержки безопасности',
    ],
    futureTitle: 'Направление развития',
    future: [
      'Более широкое применение в коммерческом судоходстве',
      'Расширенное участие в международных программах',
      'Развитие инфраструктуры автономных и роботизированных операций',
    ],
  },
  status: {
    title: 'Обзор проекта и живой продукт',
    overviewTitle: 'Digital Invest — обзор проекта',
    overview:
      'Digital Invest описывает проект, его бизнес-логику и направление развития в рамках портфеля. Страница носит информационный характер и не является офертой.',
    productTitle: 'AGRON — живой продукт',
    product:
      'agron1.com — место, где представлен сам бренд AGRON, услуги, морское направление и продукт StarWall.',
    cta: 'Перейти на AGRON',
  },
  cta: {
    title: 'Интересует AGRON?',
    desc:
      'Для квалифицированных инвесторов и партнёров, заинтересованных в автономных операциях, морской аналитике и инфраструктуре безопасности.',
    primary: 'Запросить информацию',
    secondary: 'Перейти на agron1.com',
  },
};

const uk: AgronContent = {
  ...ru,
  back: 'Назад до проєктів',
  hero: {
    ...ru.hero,
    badge: 'Компанія портфеля Digital Invest',
    tagline: 'Інфраструктура автономних операцій',
    chips: ['ШІ', 'Робототехніка', 'Автономна інфраструктура', 'Аналітика', 'Безпека'],
    desc:
      'AGRON поєднує операційний досвід, автономні системи, програмне забезпечення, аналітику, навчання та інфраструктуру розгортання в рішення для реальних умов експлуатації.',
    ctaPrimary: 'Дослідити AGRON',
    ctaSecondary: 'Перейти на agron1.com',
    external: 'Зовнішній сайт',
  },
  status: {
    ...ru.status,
    title: 'Огляд проєкту та живий продукт',
    overviewTitle: 'Digital Invest — огляд проєкту',
    productTitle: 'AGRON — живий продукт',
    cta: 'Перейти на AGRON',
  },
  cta: {
    ...ru.cta,
    title: 'Цікавить AGRON?',
    primary: 'Запросити інформацію',
  },
};

const CONTENT: Record<string, AgronContent> = { en, ru, uk };

export const getAgronContent = (language: string): AgronContent =>
  CONTENT[language?.split('-')[0]] ?? en;

export default CONTENT;
