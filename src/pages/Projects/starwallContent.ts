/**
 * StarWall by AGRON — product page content.
 *
 * StarWall is a technology product of AGRON (Digital Invest portfolio).
 * English is the source of truth; other languages fall back to English.
 * Claims policy: no customers, contracts, revenue, installations, ranges,
 * accuracy, certifications or partnerships are asserted anywhere below.
 */

export type Pair = { t: string; d: string };
export type Group = { t: string; items: string[] };
export type Tier = { t: string; d?: string; items: string[] };
export type Level = { n: string; t: string; items: string[] };

export interface StarWallContent {
  back: string;
  hero: {
    badge: string;
    parent: string;
    title: string;
    by: string;
    tagline: string;
    statement: string;
    desc: string;
    ctaPrimary: string;
    ctaAgron: string;
    ctaExternal: string;
    chips: string[];
  };
  intro: { title: string; p1: string; p2: string; questionsTitle: string; questions: string[]; note: string };
  problem: { kicker: string; title: string; p: string; fragments: string[]; conclusion: string };
  model: { kicker: string; title: string; sourcesTitle: string; sources: string[]; coreTitle: string; core: string[]; intelTitle: string; intel: string[]; actionTitle: string; action: string[]; decision: string };
  agnostic: { kicker: string; title: string; p: string; keep: string[]; note: string };
  software: { kicker: string; title: string; p: string; flow: string[]; note: string };
  service: { kicker: string; title: string; p: string; tiers: Tier[]; note: string };
  models: { kicker: string; title: string; items: Group[]; note: string };
  deployment: { kicker: string; title: string; p: string; levels: Level[]; note: string };
  modules: { kicker: string; title: string; p: string; groups: Group[]; note: string };
  container: { kicker: string; title: string; p1: string; p2: string; items: string[] };
  mobile: { kicker: string; title: string; p: string; items: string[]; note: string };
  distributed: { kicker: string; title: string; p: string; flow: string[]; note: string };
  maritime: { kicker: string; title: string; p: string; envs: string[]; sourcesTitle: string; sources: string[]; cta: string };
  beyond: { kicker: string; title: string; groups: Group[]; note: string };
  network: { kicker: string; title: string; p: string; nodes: string[]; hub: string; note: string };
  memory: { kicker: string; title: string; p: string; steps: Pair[]; outcome: string; note: string };
  human: { kicker: string; title: string; p: string; systemTitle: string; system: string[]; principle: string; principleNote: string };
  support: { kicker: string; title: string; flow: string[]; servicesTitle: string; services: string[]; model: string };
  training: { kicker: string; title: string; items: string[]; note: string };
  engine: { kicker: string; title: string; steps: Pair[]; note: string };
  revenue: { kicker: string; title: string; items: Pair[]; note: string };
  recurring: { kicker: string; title: string; columns: Group[]; note: string };
  buyers: { kicker: string; title: string; groups: Group[]; note: string };
  lifecycle: { kicker: string; title: string; steps: Pair[] };
  different: { kicker: string; title: string; items: Pair[] };
  threeForms: { kicker: string; title: string; items: Pair[] };
  relationship: { kicker: string; title: string; p: string; chain: Pair[] };
  cta: { title: string; p: string; primary: string; agron: string; maritime: string; services: string };
  mediaTitle: string;
}

const en: StarWallContent = {
  back: 'Back to Projects',
  hero: {
    badge: 'An AGRON Technology',
    parent: 'Digital Invest › AGRON › StarWall',
    title: 'STARWALL',
    by: 'by AGRON',
    tagline: 'Intelligence Across the Physical World',
    statement: 'One operating picture. Multiple systems. Human in command.',
    desc:
      'StarWall connects software, sensors, equipment, operational information, external data and human expertise into a unified intelligence and decision-support environment.',
    ctaPrimary: 'Explore StarWall',
    ctaAgron: 'Explore AGRON',
    ctaExternal: 'Visit AGRON',
    chips: ['AI', 'Intelligence', 'Security', 'Infrastructure', 'B2B', 'B2G'],
  },
  intro: {
    title: 'A Software and Intelligence Layer',
    p1:
      'StarWall is an intelligent software and integration layer designed to connect information from sensors, equipment, operational systems, communications, external data sources and human observations into one understandable operating environment.',
    p2:
      'StarWall collects, normalizes, correlates, analyzes and maintains context across information that would otherwise remain fragmented between separate systems and screens.',
    questionsTitle: 'The objective is not more alerts. The objective is understanding:',
    questions: [
      'What is happening.',
      'What has changed.',
      'What matters.',
      'What may happen next.',
      'What requires attention.',
      'What options are available.',
    ],
    note: 'StarWall supports human decision-making. The responsible person remains in command.',
  },
  problem: {
    kicker: 'The Problem',
    title: 'The Problem Is Not Lack of Data',
    p: 'Modern operations already generate enormous amounts of information. The problem is fragmentation.',
    fragments: [
      'Radar has one interface.',
      'Cameras have another.',
      'Navigation has another.',
      'Access control has another.',
      'Sensors generate their own alerts.',
      'Communications exist separately.',
      'External intelligence exists elsewhere.',
      'Historical events disappear into different databases.',
      'Human observations may never enter the same system.',
    ],
    conclusion:
      'Operators are forced to interpret multiple screens and disconnected information streams. StarWall creates an intelligence layer above them.',
  },
  model: {
    kicker: 'Architecture',
    title: 'The StarWall Model',
    sourcesTitle: 'Sources',
    sources: [
      'Radar', 'Cameras', 'Sensors', 'AIS / Navigation', 'RF systems', 'Acoustic systems',
      'Access systems', 'Communications', 'Drones', 'Robotics', 'IoT', 'Existing security systems',
      'Operational software', 'External data', 'Intelligence feeds', 'Human observations', 'Historical events',
    ],
    coreTitle: 'StarWall',
    core: ['Connect', 'Normalize', 'Correlate', 'Analyze', 'Remember', 'Assess', 'Model'],
    intelTitle: 'Intelligence',
    intel: [
      'Unified operating picture', 'Event correlation', 'Anomaly detection', 'Context',
      'Risk changes', 'Scenario analysis', 'Intelligent alerts', 'Historical understanding',
    ],
    actionTitle: 'Action',
    action: ['Inform', 'Escalate', 'Recommend', 'Coordinate', 'Support'],
    decision: 'Human Decision',
  },
  agnostic: {
    kicker: 'Hardware-Agnostic',
    title: 'Keep the Equipment. Connect the Intelligence.',
    p:
      'StarWall is designed to work with existing infrastructure wherever technically possible. A customer should not necessarily need to replace what is already installed.',
    keep: [
      'Radar', 'Cameras', 'Navigation systems', 'Sensors', 'Communications',
      'Access systems', 'Monitoring systems', 'Drones', 'Robotics', 'Security equipment',
    ],
    note:
      'Designed to integrate with compatible existing and new systems. Actual integration depends on available interfaces, APIs, protocols, access, security requirements and technical architecture. Universal compatibility is not claimed.',
  },
  software: {
    kicker: 'Entry Point',
    title: 'Start With Software',
    p:
      'StarWall does not require an AGRON container or AGRON hardware to create value. A customer may deploy StarWall as a software and intelligence solution on top of existing infrastructure.',
    flow: ['Existing Customer Systems', 'StarWall', 'Unified Intelligence', 'Customer Operations Team'],
    note: 'This creates a lower-friction entry point into StarWall.',
  },
  service: {
    kicker: 'Subscription',
    title: 'StarWall as a Service',
    p: 'StarWall can operate through a recurring subscription model. Tiers below are illustrative of scope, not pricing.',
    tiers: [
      { t: 'StarWall Software', items: ['Software access', 'System integrations', 'Operating picture', 'Event management', 'Historical context', 'Alerts', 'Reporting'] },
      { t: 'StarWall Intelligence', d: 'Everything in Software, plus:', items: ['Advanced analysis', 'Event correlation', 'Risk context', 'Scenario support', 'External intelligence integration where applicable'] },
      { t: 'StarWall Monitoring', d: 'Everything above, plus:', items: ['Continuous monitoring services', 'Escalation workflows', 'Operational support'] },
      { t: 'StarWall Managed', d: 'Everything above, plus:', items: ['AGRON specialist support', 'Security Support Center', 'Individual operating protocols', 'Ongoing configuration', 'Advanced reporting', 'Operational coordination'] },
      { t: 'StarWall Enterprise', d: 'Custom deployment for:', items: ['Enterprises', 'Fleet operators', 'Infrastructure operators', 'Ports', 'Marinas', 'Large facilities', 'Multiple sites', 'Distributed operations', 'Custom integrations', 'Private environments'] },
      { t: 'StarWall Government', d: 'Custom B2G deployment. Potential environments:', items: ['Government facilities', 'Critical infrastructure', 'Public infrastructure', 'Ports', 'Transportation', 'Emergency management', 'Border and territorial monitoring environments where legally applicable', 'Distributed government facilities', 'Large operational networks'] },
    ],
    note:
      'No pricing is published. Government deployments require individual architecture, security requirements, procurement procedures, data governance and integration. No existing government contracts are implied.',
  },
  models: {
    kicker: 'Commercial Models',
    title: 'One Product. Multiple Deployment Models.',
    items: [
      { t: 'SaaS / Subscription', items: ['Recurring StarWall software and intelligence services', 'Best suited to customers with compatible infrastructure', 'Per protected location', 'Per vessel', 'Per facility', 'Per operating environment', 'Per organization', 'Enterprise agreement'] },
      { t: 'B2B', items: ['Yacht management companies', 'Marinas', 'Ports', 'Fleet operators', 'Industrial facilities', 'Infrastructure operators', 'Logistics companies', 'Security organizations', 'Technology integrators', 'Large enterprises'] },
      { t: 'B2G', items: ['Enterprise licensing', 'Private deployment', 'Dedicated infrastructure', 'System integration', 'Multi-site deployment', 'Support agreements', 'Training', 'Maintenance', 'Managed services', 'Custom development'] },
    ],
    note: 'Licensing metrics are indicative. Final commercial structure is defined per deployment. Government pricing is not published.',
  },
  deployment: {
    kicker: 'Deployment Options',
    title: 'Software to Full Infrastructure',
    p: 'StarWall can scale from a software-only deployment to a complete AGRON integrated environment.',
    levels: [
      { n: '01', t: 'StarWall Software', items: ["Customer's existing equipment", 'StarWall'] },
      { n: '02', t: 'StarWall + Intelligence', items: ['Customer infrastructure', 'StarWall', 'Intelligence services'] },
      { n: '03', t: 'StarWall + Monitoring', items: ['Customer infrastructure', 'StarWall', 'Continuous monitoring', 'Support'] },
      { n: '04', t: 'StarWall + AGRON Modules', items: ['StarWall', 'Existing equipment', 'Selected AGRON technical modules'] },
      { n: '05', t: 'StarWall + Mobile Infrastructure', items: ['StarWall', 'AGRON mobile technical unit', 'Sensors / communications / compute / operational equipment'] },
      { n: '06', t: 'StarWall + Containerized Infrastructure', items: ['StarWall', 'AGRON containerized technical infrastructure', 'Detection systems', 'Communications', 'Compute', 'Operator environment', 'Deployable equipment'] },
      { n: '07', t: 'Full Managed Environment', items: ['StarWall', 'Integrated infrastructure', 'Intelligence', 'Monitoring', 'AGRON Security Support Center', 'Training', 'Maintenance', 'Operational support'] },
    ],
    note: 'A customer relationship can begin as software and expand into integrated infrastructure and services over time.',
  },
  modules: {
    kicker: 'AGRON Modules',
    title: 'Technical Modules StarWall Can Connect',
    p: 'StarWall can connect to AGRON-developed or AGRON-integrated technical modules, alongside compatible third-party equipment.',
    groups: [
      { t: 'Sensing & Detection', items: ['Radar', 'Cameras', 'Acoustic sensing', 'RF sensing', 'Environmental sensors', 'Other compatible detection systems'] },
      { t: 'Communications', items: ['Radio', 'Network connectivity', 'Secure communications', 'Data links'] },
      { t: 'Compute & Data', items: ['Edge compute', 'Servers', 'Storage', 'Networking', 'Data processing', 'Backup'] },
      { t: 'Power & Resilience', items: ['Power management', 'UPS', 'Backup systems', 'Infrastructure monitoring'] },
      { t: 'Operational Environment', items: ['Operator workstation', 'Displays', 'Communications', 'Command interfaces'] },
      { t: 'Mobile / Deployable Equipment', items: ['Drones', 'Robotic systems', 'Portable sensors', 'Deployable technical equipment'] },
    ],
    note: 'Presented at architecture level. Detailed technical specifications are not published.',
  },
  container: {
    kicker: 'Physical Infrastructure',
    title: 'StarWall + AGRON Container Systems',
    p1: 'AGRON Container Systems provide physical infrastructure around StarWall when a customer requires more than software.',
    p2: 'The container is not one fixed product. It is a configurable technical architecture, and StarWall becomes the software and intelligence layer connecting the environment.',
    items: ['Power', 'UPS', 'Communications', 'Radio systems', 'Electronics', 'Compute', 'Networking', 'Data storage', 'Operator workstation', 'Detection systems', 'Sensors', 'Deployable equipment'],
  },
  mobile: {
    kicker: 'Mobile',
    title: 'StarWall Mobile',
    p: 'For temporary, mobile, distributed or rapidly deployable environments, StarWall can operate with AGRON mobile infrastructure.',
    items: ['Cargo van-based systems', 'Mobile command environments', 'Temporary monitoring locations', 'Events', 'Ports', 'Marinas', 'Remote facilities', 'Infrastructure projects', 'Emergency operations'],
    note: 'Mobile configurations are defined per deployment.',
  },
  distributed: {
    kicker: 'Distributed',
    title: 'Distributed StarWall',
    p: 'Not every environment needs a container. For yachts, buildings, facilities, marinas, campuses and similar locations, individual components can be distributed throughout the protected environment.',
    flow: ['Distributed Sensors + Existing Infrastructure + AGRON Modules', 'StarWall', 'Unified Intelligence'],
    note: 'Particularly relevant where a large centralized technical container is impractical.',
  },
  maritime: {
    kicker: 'One Vertical Application',
    title: 'StarWall Maritime',
    p: 'StarWall can become the intelligence layer behind AGRON Maritime environments — one major application of the product, not its definition.',
    envs: ['Yachts', 'Superyachts', 'Marinas', 'Ports', 'Private islands', 'Commercial vessels', 'Maritime facilities'],
    sourcesTitle: 'Potential information sources',
    sources: ['Navigation', 'AIS', 'Radar', 'Cameras', 'Sensors', 'Communications', 'Marina information', 'Route information', 'External intelligence', 'Historical events', 'Human observations'],
    cta: 'Explore AGRON Maritime',
  },
  beyond: {
    kicker: 'Beyond Maritime',
    title: 'One Architecture. Multiple Environments.',
    groups: [
      { t: 'Maritime', items: ['Yachts', 'Commercial vessels', 'Marinas', 'Ports', 'Islands'] },
      { t: 'Critical Infrastructure', items: ['Energy', 'Utilities', 'Communications', 'Industrial facilities', 'Transportation infrastructure'] },
      { t: 'Industrial', items: ['Factories', 'Warehouses', 'Logistics hubs', 'Large industrial sites'] },
      { t: 'Enterprise', items: ['Corporate campuses', 'Large private properties', 'Distributed facilities'] },
      { t: 'Public Sector', items: ['Government facilities', 'Public infrastructure', 'Emergency operations', 'Multi-site environments'] },
      { t: 'Special Environments', items: ['Temporary facilities', 'Major events', 'Remote sites', 'High-value assets', 'Complex operating environments'] },
    ],
    note: 'Potential application environments. No established deployments in these verticals are claimed.',
  },
  network: {
    kicker: 'Scale',
    title: 'From One Site to Many',
    p: 'StarWall can be architected for a single environment or for a distributed operating network.',
    nodes: ['Site 01', 'Site 02', 'Vessel', 'Mobile', 'Port', 'Facility', 'Site N'],
    hub: 'StarWall Environment',
    note: 'Architecture is defined per deployment. Unlimited scalability is not claimed.',
  },
  memory: {
    kicker: 'Context Over Time',
    title: 'StarWall Remembers',
    p:
      'Many security systems react to an event and then effectively start again. StarWall is designed to maintain structured historical context where deployment configuration and data policies permit. The value of an observation can change when connected to previous events.',
    steps: [
      { t: 'Now', d: 'What is happening?' },
      { t: 'History', d: 'Has this happened before?' },
      { t: 'Context', d: 'What else changed?' },
      { t: 'Pattern', d: 'Are events connected?' },
      { t: 'Scenario', d: 'What could develop next?' },
    ],
    outcome: 'Better-informed human decision',
    note: 'Scenario analysis supports judgement. Guaranteed prediction is not claimed.',
  },
  human: {
    kicker: 'Human + AI',
    title: 'Intelligence for People, Not Instead of People',
    p: 'AI and automated analysis can help process scale, identify relationships, prioritize information and maintain context.',
    systemTitle: 'The system may',
    system: ['Observe', 'Correlate', 'Analyze', 'Prioritize', 'Alert', 'Recommend', 'Model scenarios'],
    principle: 'Human in Command',
    principleNote: 'The responsible human decides. Decision authority is never transferred to the system.',
  },
  support: {
    kicker: 'People',
    title: 'AGRON Security Support Center',
    flow: ['Customer', 'StarWall', 'AGRON Security Support Center'],
    servicesTitle: 'Potential services',
    services: ['Situation assessment', 'Information correlation', 'Scenario review', 'Decision support', 'Specialist escalation', 'Technical coordination', 'Incident support'],
    model: 'Software + Intelligence + People',
  },
  training: {
    kicker: 'Training',
    title: 'Prepared Operators, Not Just Installed Software',
    items: ['Operator onboarding', 'Administrator training', 'Security-team training', 'Operational procedures', 'Scenario exercises', 'System-integration training', 'Refresher training', 'Train-the-Trainer for large deployments'],
    note: 'Training is part of the commercial architecture and a customer-retention layer.',
  },
  engine: {
    kicker: 'Commercial Architecture',
    title: 'StarWall Commercial Engine',
    steps: [
      { t: 'Entry', d: 'Software subscription' },
      { t: 'Expand', d: 'Additional users / locations / integrations' },
      { t: 'Intelligence', d: 'Analysis + monitoring' },
      { t: 'Services', d: 'AGRON Support Center' },
      { t: 'Infrastructure', d: 'Modules + mobile systems + container systems' },
      { t: 'Operations', d: 'Training + maintenance + support' },
      { t: 'Enterprise', d: 'Multi-site / fleet deployment' },
      { t: 'B2G', d: 'Large custom environments' },
    ],
    note: 'Commercial logic only. No financial projections are published.',
  },
  revenue: {
    kicker: 'Revenue',
    title: 'Multiple Revenue Layers',
    items: [
      { t: 'Software subscriptions', d: 'Recurring software access.' },
      { t: 'Enterprise licensing', d: 'Larger organizational deployments.' },
      { t: 'Government contracts', d: 'Custom B2G deployments and services.' },
      { t: 'System integration', d: 'Connecting existing customer infrastructure.' },
      { t: 'Hardware integration', d: 'AGRON modules and third-party compatible equipment.' },
      { t: 'Mobile systems', d: 'Deployable infrastructure.' },
      { t: 'Containerized systems', d: 'Larger integrated installations.' },
      { t: 'Intelligence services', d: 'Analysis and contextual intelligence.' },
      { t: 'Monitoring', d: 'Recurring monitoring services.' },
      { t: 'Support Center', d: 'Specialist support.' },
      { t: 'Training', d: 'Initial and recurring training.' },
      { t: 'Maintenance', d: 'Software and technical infrastructure support.' },
      { t: 'Professional services', d: 'Assessment, architecture, implementation and optimization.' },
    ],
    note: 'Revenue categories describe the commercial model. No revenue figures are published.',
  },
  recurring: {
    kicker: 'Recurring Revenue',
    title: 'Not a One-Time Equipment Business',
    columns: [
      { t: 'Initial', items: ['Assessment', 'Integration', 'Installation', 'Configuration', 'Training'] },
      { t: 'Recurring', items: ['Software', 'Intelligence', 'Monitoring', 'Support', 'Maintenance', 'Data services where applicable'] },
      { t: 'Expansion', items: ['Additional sites', 'Additional vessels', 'Additional integrations', 'Additional modules', 'Additional infrastructure', 'Enterprise deployment'] },
    ],
    note: 'Structure of the intended commercial model. No committed contracts are represented.',
  },
  buyers: {
    kicker: 'Buyers',
    title: 'Who Buys StarWall',
    groups: [
      { t: 'B2B', items: ['CEO / COO', 'Chief Security Officer', 'Security Director', 'Operations Director', 'Fleet Manager', 'Port / Marina Operator', 'Infrastructure Operator', 'Enterprise IT / OT', 'Systems Integrator', 'Facility Operator'] },
      { t: 'B2G', items: ['Government agencies', 'Infrastructure authorities', 'Port authorities', 'Public-safety organizations', 'Emergency-management organizations', 'Government facility operators', 'Relevant national / regional organizations'] },
    ],
    note: 'Buyer categories only. No specific agencies or organizations are targeted or claimed.',
  },
  lifecycle: {
    kicker: 'Deployment Model',
    title: 'From Assessment to Expansion',
    steps: [
      { t: 'Assess', d: 'Understand existing infrastructure.' },
      { t: 'Connect', d: 'Integrate compatible systems.' },
      { t: 'Configure', d: 'Build the operating picture.' },
      { t: 'Deploy', d: 'Launch StarWall.' },
      { t: 'Train', d: 'Prepare responsible personnel.' },
      { t: 'Operate', d: 'Use StarWall in daily operations.' },
      { t: 'Support', d: 'Add AGRON intelligence and specialist support.' },
      { t: 'Expand', d: 'Add sites, modules, equipment, services or infrastructure.' },
    ],
  },
  different: {
    kicker: 'Distinctions',
    title: 'Why StarWall Is Different',
    items: [
      { t: 'Software-first', d: 'Can begin without replacing existing infrastructure.' },
      { t: 'Hardware-agnostic', d: 'Designed to integrate compatible systems from different sources.' },
      { t: 'Modular', d: 'Can expand from software to physical AGRON infrastructure.' },
      { t: 'Human-in-command', d: 'Decision authority remains with responsible personnel.' },
      { t: 'Contextual', d: 'Designed to connect events rather than simply display alerts.' },
      { t: 'Historical', d: 'Maintains relevant operating context over time where deployment and policy allow.' },
      { t: 'Service-enabled', d: 'Can combine software with AGRON intelligence, monitoring, training and support.' },
      { t: 'Multi-environment', d: 'Architecture can be adapted to different physical operating environments.' },
    ],
  },
  threeForms: {
    kicker: 'Three Forms',
    title: 'Three Ways StarWall Is Sold',
    items: [
      { t: '1 — Software Product', d: 'StarWall operating on compatible customer infrastructure.' },
      { t: '2 — Managed Intelligence Product', d: 'StarWall + subscription + intelligence + monitoring + human support.' },
      { t: '3 — Integrated Infrastructure Product', d: 'StarWall + AGRON modules + mobile/container systems + services + training + ongoing support.' },
    ],
  },
  relationship: {
    kicker: 'Digital Invest Relationship',
    title: 'Built by AGRON',
    p: 'StarWall is developed as the technology and intelligence layer within AGRON’s expanding autonomous operations, intelligence and security architecture.',
    chain: [
      { t: 'Digital Invest', d: 'Portfolio & strategic development' },
      { t: 'AGRON', d: 'Operations · Intelligence · Security · Infrastructure' },
      { t: 'StarWall', d: 'Software · Integration · Intelligence · Decision Support' },
      { t: 'AGRON Infrastructure', d: 'Modules · Mobile Systems · Container Systems' },
      { t: 'AGRON Services', d: 'Intelligence · Monitoring · Support · Training' },
    ],
  },
  cta: {
    title: 'Interested in StarWall?',
    p: 'Request information about StarWall as a software product, a managed intelligence service or an integrated AGRON deployment.',
    primary: 'Request Information',
    agron: 'Explore AGRON',
    maritime: 'AGRON Maritime',
    services: 'AGRON Services Catalog',
  },
  mediaTitle: 'StarWall Media Room',
};

const ru: StarWallContent = {
  ...en,
  back: 'Назад к проектам',
  hero: {
    ...en.hero,
    badge: 'Технология AGRON',
    tagline: 'Интеллект для физического мира',
    statement: 'Одна операционная картина. Множество систем. Решение принимает человек.',
    desc:
      'StarWall объединяет программное обеспечение, датчики, оборудование, операционные данные, внешние источники и экспертизу людей в единую среду анализа и поддержки решений.',
    ctaPrimary: 'Изучить StarWall',
    ctaAgron: 'Перейти к AGRON',
    ctaExternal: 'Открыть AGRON',
    chips: ['ИИ', 'Аналитика', 'Безопасность', 'Инфраструктура', 'B2B', 'B2G'],
  },
  intro: {
    ...en.intro,
    title: 'Программный и аналитический слой',
    p1:
      'StarWall — это интеллектуальный программный и интеграционный слой, который соединяет данные датчиков, оборудования, операционных систем, связи, внешних источников и наблюдений людей в одну понятную операционную среду.',
    p2:
      'StarWall собирает, нормализует, сопоставляет, анализирует и сохраняет контекст информации, которая иначе остаётся разрозненной между отдельными системами и экранами.',
    questionsTitle: 'Цель — не больше оповещений, а понимание:',
    questions: [
      'Что происходит.',
      'Что изменилось.',
      'Что действительно важно.',
      'Что может произойти дальше.',
      'Что требует внимания.',
      'Какие есть варианты действий.',
    ],
    note: 'StarWall поддерживает решения человека. Ответственное лицо остаётся главным.',
  },
  problem: {
    ...en.problem,
    kicker: 'Проблема',
    title: 'Проблема не в нехватке данных',
    p: 'Современные операции уже производят огромный объём информации. Проблема — фрагментация.',
    conclusion:
      'Операторы вынуждены интерпретировать множество экранов и несвязанных потоков информации. StarWall создаёт аналитический слой над ними.',
  },
  cta: {
    ...en.cta,
    title: 'Интересует StarWall?',
    p: 'Запросите информацию о StarWall как о программном продукте, управляемом аналитическом сервисе или интегрированном решении AGRON.',
    primary: 'Запросить информацию',
    agron: 'Перейти к AGRON',
  },
  mediaTitle: 'Медиа-центр StarWall',
};

const uk: StarWallContent = {
  ...en,
  back: 'Назад до проєктів',
  hero: {
    ...en.hero,
    badge: 'Технологія AGRON',
    tagline: 'Інтелект для фізичного світу',
    statement: 'Одна операційна картина. Багато систем. Рішення ухвалює людина.',
    desc:
      'StarWall поєднує програмне забезпечення, датчики, обладнання, операційні дані, зовнішні джерела та експертизу людей у єдине середовище аналітики та підтримки рішень.',
    ctaPrimary: 'Дослідити StarWall',
    ctaAgron: 'Перейти до AGRON',
    ctaExternal: 'Відкрити AGRON',
    chips: ['ШІ', 'Аналітика', 'Безпека', 'Інфраструктура', 'B2B', 'B2G'],
  },
  cta: {
    ...en.cta,
    title: 'Цікавить StarWall?',
    primary: 'Запросити інформацію',
    agron: 'Перейти до AGRON',
  },
  mediaTitle: 'Медіацентр StarWall',
};

const CONTENT: Record<string, StarWallContent> = { en, ru, uk };

export const getStarWallContent = (language: string): StarWallContent =>
  CONTENT[language?.split('-')[0]] ?? en;

export default CONTENT;
