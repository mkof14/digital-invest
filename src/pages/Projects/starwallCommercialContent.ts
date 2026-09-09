/**
 * StarWall by AGRON — commercial, enterprise & B2G architecture content.
 *
 * Extends (does not replace) starwallContent.ts.
 * Claims policy: no customers, contracts, revenue, pricing, certifications,
 * partnerships, procurement eligibility or universal compatibility are asserted.
 */

export type Pair = { t: string; d: string };
export type Group = { t: string; d?: string; items: string[] };
export type Step = { n: string; t: string; d: string };
export type Status = 'active' | 'development' | 'planned';
export type Edition = { t: string; d: string; items: string[]; status: Status };
export type DeployArch = { t: string; d: string; status: Status };

export interface StarWallCommercialContent {
  statusLegend: { title: string; active: string; development: string; planned: string; note: string };

  threeModels: {
    kicker: string;
    title: string;
    p: string;
    progression: string[];
    items: { n: string; t: string; d: string; providesTitle: string; provides: string[]; customerTitle?: string; customer?: string[]; model: string }[];
  };

  editions: { kicker: string; title: string; p: string; items: Edition[]; note: string };

  deployArch: { kicker: string; title: string; p: string; items: DeployArch[]; note: string };

  integrationLayer: {
    kicker: string;
    title: string;
    p: string;
    flow: string[];
    mechanismsTitle: string;
    mechanisms: string[];
    note: string;
  };

  dataControl: { kicker: string; title: string; p: string; items: string[]; note: string };

  roles: { kicker: string; title: string; p: string; items: Group[]; note: string };

  multiSite: { kicker: string; title: string; p: string; nodes: string[]; flow: string[]; growth: string[]; note: string };

  pilot: { kicker: string; title: string; p: string; steps: Step[]; cta: string; note: string };

  procurementB2B: { kicker: string; title: string; p: string; path: string[]; note: string };
  procurementB2G: { kicker: string; title: string; p: string; path: string[]; note: string };

  b2b: { kicker: string; title: string; customersTitle: string; customers: string[]; scopeTitle: string; scope: string[]; cta: string };
  b2g: { kicker: string; title: string; envsTitle: string; envs: string[]; structureTitle: string; structure: string[]; cta: string; note: string };

  partners: { kicker: string; title: string; p: string; items: Group[]; cta: string; note: string };

  expansionModel: { kicker: string; title: string; p: string; chain: string[]; note: string };

  revenueArch: { kicker: string; title: string; columns: Group[]; note: string };

  subscriptionLogic: { kicker: string; title: string; p: string; items: string[]; note: string };

  contracts: { kicker: string; title: string; items: Pair[]; note: string };

  landExpand: { kicker: string; title: string; steps: Pair[] };

  finalArch: { kicker: string; title: string; layers: Group[]; note: string };
}

const en: StarWallCommercialContent = {
  statusLegend: {
    title: 'How to read this page',
    active: 'Available / Active — supported by verified AGRON operations or products.',
    development: 'In development — actively being built.',
    planned: 'Planned / Architectural — future deployment architecture or expansion opportunity.',
    note: 'Planned capabilities are not presented as current product claims.',
  },

  threeModels: {
    kicker: 'Commercial Architecture',
    title: 'One Product. Three Ways to Deploy.',
    p: 'StarWall can begin as software on top of compatible existing infrastructure and expand into managed intelligence and full integrated infrastructure.',
    progression: ['Software', 'Managed Intelligence', 'Integrated Infrastructure'],
    items: [
      {
        n: '01',
        t: 'StarWall Software',
        d: 'Start with what you already have. StarWall operates as the intelligence layer above compatible existing customer infrastructure.',
        customerTitle: 'Customer provides',
        customer: ['Existing sensors', 'Existing cameras', 'Existing radar where applicable', 'Existing communications', 'Existing operational systems', 'Existing security systems', 'Existing data sources'],
        providesTitle: 'StarWall provides',
        provides: ['Integration', 'Unified operating picture', 'Event management', 'Context', 'Analysis', 'Historical intelligence', 'Alerts', 'Decision support'],
        model: 'Recurring software subscription',
      },
      {
        n: '02',
        t: 'StarWall Managed Intelligence',
        d: 'Software + intelligence + people. Everything in StarWall Software, plus AGRON specialists in the loop.',
        providesTitle: 'Adds',
        provides: ['Advanced intelligence', 'Monitoring', 'Event correlation', 'Scenario analysis', 'Escalation', 'AGRON specialist support', 'Security Support Center where applicable', 'Operational reporting'],
        model: 'Recurring managed subscription / service agreement',
      },
      {
        n: '03',
        t: 'StarWall Integrated Infrastructure',
        d: 'Software + intelligence + physical infrastructure. Everything above, plus selected AGRON hardware and services.',
        providesTitle: 'Adds',
        provides: ['AGRON modules', 'Sensors', 'Communications', 'Compute', 'Data infrastructure', 'Mobile systems', 'Containerized systems', 'Operator environments', 'Deployable equipment', 'Training', 'Maintenance', 'Technical support'],
        model: 'Implementation + infrastructure + recurring StarWall services',
      },
    ],
  },

  editions: {
    kicker: 'Product Editions',
    title: 'A Commercial Architecture, Not a Price List',
    p: 'Editions describe scope. Final pricing is not published and is defined per deployment.',
    items: [
      { t: 'StarWall Core', d: 'For individual locations or operating environments.', status: 'development', items: ['Core software', 'Integrations', 'Unified operating picture', 'Event management', 'Historical context', 'Alerts', 'Reporting'] },
      { t: 'StarWall Intelligence', d: 'Core, plus deeper analysis.', status: 'development', items: ['Advanced analysis', 'Correlation', 'Risk context', 'Scenario support', 'External information integration where applicable', 'Advanced reporting'] },
      { t: 'StarWall Managed', d: 'Intelligence, plus AGRON people.', status: 'development', items: ['Monitoring', 'Escalation workflows', 'AGRON specialist support', 'Support Center access', 'Operational coordination', 'Ongoing optimization'] },
      { t: 'StarWall Enterprise', d: 'Multiple locations, fleets, ports, large facilities, infrastructure operators and distributed environments.', status: 'planned', items: ['Multi-site architecture', 'Centralized management', 'Advanced permissions', 'Custom integrations', 'Private deployment options', 'Enterprise support', 'Custom reporting', 'Service levels where contracted'] },
      { t: 'StarWall Government', d: 'Public-sector and government environments, architected per requirement.', status: 'planned', items: ['Private deployments', 'Dedicated infrastructure', 'Multi-site operations', 'Advanced access controls', 'Custom integrations', 'Government-specific data policies', 'Training', 'Support', 'Maintenance', 'Managed services'] },
    ],
    note: 'No certifications, approvals or government eligibility are implied.',
  },

  deployArch: {
    kicker: 'Deployment',
    title: 'Deploy Where Operations Require It',
    p: 'Deployment architecture is selected according to operational, security and jurisdictional requirements.',
    items: [
      { t: 'Cloud', d: 'Centralized managed software deployment where appropriate.', status: 'development' },
      { t: 'Private Cloud', d: 'Dedicated customer environment.', status: 'planned' },
      { t: 'On-Premise', d: 'StarWall deployed inside customer-controlled infrastructure.', status: 'planned' },
      { t: 'Hybrid', d: 'Combination of local infrastructure and external services.', status: 'planned' },
    ],
    note: 'Supported and planned deployment architectures. Not every model is presented as production-ready today.',
  },

  integrationLayer: {
    kicker: 'Integration',
    title: 'Built to Connect',
    p: 'StarWall sits above existing systems as the integration and intelligence layer.',
    flow: ['Data Sources', 'Connectors / Integration', 'StarWall Data Layer', 'Correlation & Intelligence', 'Operating Picture', 'Events / Alerts / Recommendations', 'Human Decision'],
    mechanismsTitle: 'Integration architecture may include, depending on the deployment',
    mechanisms: ['APIs', 'Connectors', 'Secure data ingestion', 'Event streams', 'Compatible device interfaces', 'Database integrations', 'External intelligence sources', 'Operational-system integrations'],
    note: 'Actual integration depends on available interfaces, access, security requirements and technical architecture. Universal compatibility is not claimed.',
  },

  dataControl: {
    kicker: 'Enterprise & Government',
    title: 'Your Environment. Your Operational Data.',
    p: 'Data architecture is designed around customer control.',
    items: ['Data ownership', 'Access control', 'User permissions', 'Role-based access', 'Audit history', 'Data retention policies', 'Encryption', 'Environment separation', 'Deployment-specific storage', 'Administrative control'],
    note: 'Security and data architecture are configured according to deployment requirements and contractual scope. No security certifications are claimed.',
  },

  roles: {
    kicker: 'Human in Command',
    title: 'The Right Information at the Right Level',
    p: 'StarWall is designed so that each role sees the information relevant to its responsibility.',
    items: [
      { t: 'Operator', items: ['Real-time operating picture', 'Events', 'Alerts', 'Assigned procedures'] },
      { t: 'Supervisor', items: ['Multiple operators', 'Escalations', 'Operational status', 'Incident coordination'] },
      { t: 'Security / Operations Lead', items: ['Broader situational awareness', 'Risk context', 'Historical patterns', 'Cross-system information'] },
      { t: 'Executive / Command', items: ['High-level operating status', 'Critical events', 'Risk overview', 'Strategic reporting'] },
      { t: 'AGRON Support Center', items: ['Specialist analysis', 'Escalated events', 'Scenario support', 'Technical coordination', 'Human assistance'] },
    ],
    note: 'Permissions are configurable. Not every role sees every category of information.',
  },

  multiSite: {
    kicker: 'Scale',
    title: 'From One Site to an Operating Network',
    p: 'A single environment can grow into a coordinated operating network.',
    nodes: ['Site 01', 'Site 02', 'Site 03', 'Vessel', 'Mobile Unit', 'Port', 'Facility'],
    flow: ['StarWall', 'Central Operating Picture', 'Authorized Local / Regional / Central Users'],
    growth: ['1 Site', 'Multiple Sites', 'Fleet / Portfolio', 'Enterprise Network'],
    note: 'Architecture is defined per deployment. Unlimited scalability is not claimed.',
  },

  pilot: {
    kicker: 'Pilot Program',
    title: 'Start With a Controlled Deployment',
    p: 'Enterprise and government customers may begin with a limited StarWall pilot before wider deployment.',
    steps: [
      { n: '01', t: 'Assess', d: 'Understand the environment, existing infrastructure, requirements and available integrations.' },
      { n: '02', t: 'Design', d: 'Define pilot scope.' },
      { n: '03', t: 'Integrate', d: 'Connect selected systems.' },
      { n: '04', t: 'Deploy', d: 'Launch StarWall in the controlled environment.' },
      { n: '05', t: 'Validate', d: 'Evaluate operational value, workflows, integration and user experience.' },
      { n: '06', t: 'Train', d: 'Prepare responsible personnel.' },
      { n: '07', t: 'Expand', d: 'Move from pilot to broader deployment where justified.' },
    ],
    cta: 'Discuss a StarWall Pilot',
    note: 'Pilot duration, scope and commercial terms are defined per environment.',
  },

  procurementB2B: {
    kicker: 'B2B Path',
    title: 'Low-Friction Entry, Structured Expansion',
    p: 'A commercial relationship can begin with an assessment and grow into an enterprise deployment.',
    path: ['Assess', 'Pilot', 'Subscribe', 'Integrate', 'Operate', 'Expand', 'Enterprise'],
    note: 'Indicative buyer journey. Actual sequence is defined per customer.',
  },

  procurementB2G: {
    kicker: 'B2G Path',
    title: 'Structured Public-Sector Deployment',
    p: 'Terminology is kept neutral because procurement procedures vary by jurisdiction and agency.',
    path: ['Requirements', 'Assessment', 'Pilot / Evaluation', 'Technical Architecture', 'Procurement', 'Deployment', 'Acceptance', 'Training', 'Support & Maintenance', 'Expansion'],
    note: 'No existing government contracts, approvals or procurement eligibility are implied.',
  },

  b2b: {
    kicker: 'B2B',
    title: 'StarWall for Business',
    customersTitle: 'Potential customers',
    customers: ['Fleet operators', 'Marinas', 'Ports', 'Industrial companies', 'Infrastructure operators', 'Logistics organizations', 'Large facilities', 'Security organizations', 'Technology companies', 'Systems integrators', 'Large enterprises'],
    scopeTitle: 'Commercial deployment may include',
    scope: ['Software subscription', 'Enterprise licensing', 'Integration', 'Installation', 'Monitoring', 'Managed intelligence', 'Hardware modules', 'Training', 'Maintenance', 'Support', 'Multi-site expansion'],
    cta: 'Request Enterprise Information',
  },

  b2g: {
    kicker: 'B2G',
    title: 'StarWall for Government',
    envsTitle: 'Potential environments',
    envs: ['Government facilities', 'Public infrastructure', 'Ports', 'Transportation', 'Critical infrastructure', 'Emergency operations', 'Distributed government sites', 'Large operational networks'],
    structureTitle: 'Potential commercial structure',
    structure: ['Assessment', 'Pilot deployment', 'System integration', 'Private deployment', 'Infrastructure', 'Training', 'Acceptance', 'Support agreement', 'Maintenance', 'Managed services', 'Multi-site expansion'],
    cta: 'Discuss B2G Deployment',
    note: 'Presented as architecture. No government contracts, certifications or procurement eligibility are claimed.',
  },

  partners: {
    kicker: 'Ecosystem',
    title: 'Build With StarWall',
    p: 'StarWall does not require AGRON to manufacture or install every component. Compatible technology, integration and service partners can participate in a deployment.',
    items: [
      { t: 'Technology Partners', items: ['Sensors', 'Radar', 'Cameras', 'Communications', 'Robotics', 'Data systems', 'Infrastructure technology'] },
      { t: 'Systems Integrators', items: ['Integrate StarWall into broader customer environments'] },
      { t: 'Equipment Manufacturers', items: ['Connect compatible equipment into the StarWall environment'] },
      { t: 'OEM / Embedded', items: ['Explore StarWall technology integration into third-party products or solutions where commercially and technically appropriate'] },
      { t: 'Service Partners', items: ['Deployment support', 'Maintenance', 'Training', 'Specialized services'] },
    ],
    cta: 'Integrate with StarWall',
    note: 'Partnership categories only. No existing partnerships are implied.',
  },

  expansionModel: {
    kicker: 'Commercial Model',
    title: 'Customer Expansion Model',
    p: 'The commercial relationship is designed to deepen over time rather than depend solely on new customer acquisition.',
    chain: ['Pilot', 'Software Subscription', 'Additional Integrations', 'Intelligence', 'Monitoring', 'AGRON Support', 'Additional Modules', 'Mobile / Container Infrastructure', 'Additional Locations', 'Enterprise Deployment', 'Long-Term Support'],
    note: 'Illustrates commercial logic. No forecasts, conversion rates or financial projections are published.',
  },

  revenueArch: {
    kicker: 'Revenue Architecture',
    title: 'Initial + Recurring + Expansion Revenue',
    columns: [
      { t: 'Initial Revenue', items: ['Assessment', 'Architecture', 'Integration', 'Installation', 'Configuration', 'Pilot', 'Training', 'Infrastructure'] },
      { t: 'Recurring Revenue', items: ['Software subscription', 'Intelligence', 'Monitoring', 'Support Center', 'Maintenance', 'Technical support', 'Enterprise licensing', 'Managed services'] },
      { t: 'Expansion Revenue', items: ['Additional users', 'Additional sites', 'Additional vessels', 'Additional integrations', 'Additional modules', 'Mobile infrastructure', 'Container infrastructure', 'Training expansion', 'Enterprise rollout'] },
    ],
    note: 'Revenue architecture only. No figures, forecasts or margins are published.',
  },

  subscriptionLogic: {
    kicker: 'Subscription',
    title: 'Subscription as the Central Mechanism',
    p: 'Subscription is intended to be the core commercial mechanism of StarWall. Billing dimensions are illustrative and not final.',
    items: ['Protected environment', 'Location', 'Vessel', 'Facility', 'Number of sites', 'Number of integrations', 'Service level', 'Intelligence level', 'Monitoring level', 'Enterprise agreement'],
    note: 'A final billing metric has not been established.',
  },

  contracts: {
    kicker: 'Contract Structure',
    title: 'Potential Commercial Relationships',
    items: [
      { t: 'Software', d: 'Monthly / annual subscription' },
      { t: 'Enterprise', d: 'Annual / multi-year agreement' },
      { t: 'Managed Services', d: 'Recurring service agreement' },
      { t: 'Integrated Infrastructure', d: 'Implementation + equipment + recurring services' },
      { t: 'Government', d: 'Contract-specific procurement structure' },
      { t: 'Support', d: 'Annual support / maintenance agreement' },
    ],
    note: 'High-level structures only. No legal or contractual terms are published.',
  },

  landExpand: {
    kicker: 'Expansion Logic',
    title: 'Land With Software. Expand With Capability.',
    steps: [
      { t: 'StarWall', d: 'Software' },
      { t: 'Connect', d: 'Existing systems' },
      { t: 'Understand', d: 'Intelligence' },
      { t: 'Support', d: 'Monitoring + AGRON specialists' },
      { t: 'Expand', d: 'Additional sites' },
      { t: 'Add', d: 'AGRON modules' },
      { t: 'Deploy', d: 'Mobile / container infrastructure' },
      { t: 'Scale', d: 'Enterprise / government network' },
    ],
  },

  finalArch: {
    kicker: 'Summary',
    title: 'StarWall Commercial Architecture',
    layers: [
      { t: 'Product', items: ['Software', 'Intelligence'] },
      { t: 'Commercial Model', items: ['Subscription', 'B2B', 'B2G', 'Enterprise'] },
      { t: 'Deployment', items: ['Cloud', 'Private', 'On-Premise', 'Hybrid'] },
      { t: 'Integration', items: ['Existing customer infrastructure', 'Third-party equipment', 'AGRON modules'] },
      { t: 'Physical Infrastructure', items: ['Distributed modules', 'Mobile systems', 'Container systems'] },
      { t: 'Services', items: ['Intelligence', 'Monitoring', 'Support Center', 'Training', 'Maintenance'] },
      { t: 'Scale', items: ['Single site', 'Multi-site', 'Fleet', 'Enterprise', 'Government network'] },
    ],
    note: 'StarWall is a technology product of AGRON within the Digital Invest portfolio.',
  },
};

const ru: StarWallCommercialContent = {
  ...en,
  statusLegend: {
    title: 'Как читать эту страницу',
    active: 'Доступно / активно — подтверждено операциями или продуктами AGRON.',
    development: 'В разработке — активно создаётся.',
    planned: 'Планируется / архитектура — будущая архитектура развёртывания или направление расширения.',
    note: 'Планируемые возможности не представлены как текущие продуктовые заявления.',
  },
  threeModels: {
    ...en.threeModels,
    kicker: 'Коммерческая архитектура',
    title: 'Один продукт. Три способа развёртывания.',
    p: 'StarWall может начинаться как программное обеспечение поверх совместимой существующей инфраструктуры и расширяться до управляемой аналитики и полной интегрированной инфраструктуры.',
    progression: ['Программное обеспечение', 'Управляемая аналитика', 'Интегрированная инфраструктура'],
  },
  editions: { ...en.editions, kicker: 'Редакции продукта', title: 'Коммерческая архитектура, а не прайс-лист', p: 'Редакции описывают объём. Цены не публикуются и определяются для каждого проекта.' },
  deployArch: { ...en.deployArch, kicker: 'Развёртывание', title: 'Развёртывание там, где этого требуют операции' },
  integrationLayer: { ...en.integrationLayer, kicker: 'Интеграция', title: 'Создан для подключения' },
  dataControl: { ...en.dataControl, kicker: 'Enterprise и государственный сектор', title: 'Ваша среда. Ваши операционные данные.' },
  roles: { ...en.roles, kicker: 'Решение принимает человек', title: 'Нужная информация на нужном уровне' },
  multiSite: { ...en.multiSite, kicker: 'Масштаб', title: 'От одного объекта к операционной сети' },
  pilot: { ...en.pilot, kicker: 'Пилотная программа', title: 'Начните с контролируемого развёртывания', cta: 'Обсудить пилот StarWall' },
  b2b: { ...en.b2b, kicker: 'B2B', title: 'StarWall для бизнеса', cta: 'Запросить корпоративную информацию' },
  b2g: { ...en.b2g, kicker: 'B2G', title: 'StarWall для государственного сектора', cta: 'Обсудить развёртывание B2G' },
  partners: { ...en.partners, kicker: 'Экосистема', title: 'Создавайте вместе со StarWall', cta: 'Интеграция со StarWall' },
  expansionModel: { ...en.expansionModel, kicker: 'Коммерческая модель', title: 'Модель расширения клиента' },
  revenueArch: { ...en.revenueArch, kicker: 'Архитектура выручки', title: 'Начальная + регулярная + расширяющая выручка' },
  subscriptionLogic: { ...en.subscriptionLogic, kicker: 'Подписка', title: 'Подписка как основной механизм' },
  contracts: { ...en.contracts, kicker: 'Структура договоров', title: 'Возможные коммерческие отношения' },
  landExpand: { ...en.landExpand, kicker: 'Логика расширения', title: 'Начните с ПО. Расширяйтесь возможностями.' },
  finalArch: { ...en.finalArch, kicker: 'Итог', title: 'Коммерческая архитектура StarWall' },
};

const uk: StarWallCommercialContent = {
  ...en,
  statusLegend: {
    title: 'Як читати цю сторінку',
    active: 'Доступно / активно — підтверджено операціями або продуктами AGRON.',
    development: 'У розробці — активно створюється.',
    planned: 'Заплановано / архітектура — майбутня архітектура розгортання або напрям розширення.',
    note: 'Заплановані можливості не подаються як поточні продуктові твердження.',
  },
  threeModels: {
    ...en.threeModels,
    kicker: 'Комерційна архітектура',
    title: 'Один продукт. Три способи розгортання.',
    p: 'StarWall може починатися як програмне забезпечення поверх сумісної наявної інфраструктури та розширюватися до керованої аналітики й повної інтегрованої інфраструктури.',
    progression: ['Програмне забезпечення', 'Керована аналітика', 'Інтегрована інфраструктура'],
  },
  pilot: { ...en.pilot, kicker: 'Пілотна програма', title: 'Почніть із контрольованого розгортання', cta: 'Обговорити пілот StarWall' },
  b2b: { ...en.b2b, kicker: 'B2B', title: 'StarWall для бізнесу', cta: 'Запитати корпоративну інформацію' },
  b2g: { ...en.b2g, kicker: 'B2G', title: 'StarWall для державного сектору', cta: 'Обговорити розгортання B2G' },
  partners: { ...en.partners, kicker: 'Екосистема', title: 'Створюйте разом зі StarWall', cta: 'Інтеграція зі StarWall' },
  finalArch: { ...en.finalArch, kicker: 'Підсумок', title: 'Комерційна архітектура StarWall' },
};

const CONTENT: Record<string, StarWallCommercialContent> = { en, ru, uk };

export const getStarWallCommercialContent = (language: string): StarWallCommercialContent =>
  CONTENT[language?.split('-')[0]] ?? en;

export default CONTENT;
