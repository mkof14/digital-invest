/**
 * SAVEN — Digital Invest project page content.
 *
 * Source of truth for public positioning: https://www.savencore.com
 * Claims policy: no customers, partnerships, deployments, revenue,
 * certifications, regulatory approvals, clinical outcomes, robot fleets,
 * production facilities or specific commercial robot integrations are
 * asserted anywhere below. Maturity labels (Architecture / Research /
 * Development) are preserved.
 */

export type Pair = { t: string; d: string };
export type Group = { t: string; items: string[] };
export type Step = { n: string; t: string; items: string[] };

export const SAVEN_LINKS = {
  site: 'https://www.savencore.com',
  technology: 'https://www.savencore.com/en/technology/',
  humanDataModel: 'https://www.savencore.com/en/technology/human-data-model/',
  systems: 'https://www.savencore.com/en/systems/',
  roboticsInterface: 'https://www.savencore.com/en/systems/saven-robotics-interface/',
  roboticsLab: 'https://www.savencore.com/en/labs/saven-robotics-lab/',
  labs: 'https://www.savencore.com/en/labs/',
  partners: 'https://www.savencore.com/en/partners/',
  applications: 'https://www.savencore.com/en/applications/',
  safety: 'https://www.savencore.com/en/trust/safety/',
  biomathCore: 'https://www.savencore.com/en/foundation/biomath-core/',
  purpose: 'https://www.savencore.com/en/purpose/',
  investors: 'https://www.savencore.com/en/investors/',
} as const;

export const savenContent = {
  back: 'Back to Projects',

  hero: {
    badge: 'Digital Invest › SAVEN',
    title: 'SAVEN',
    tagline: 'Intelligence for Robots That Help People',
    desc:
      'SAVEN develops the intelligence, interaction, personalization, integration and safety-oriented technologies that can help robotic systems understand and assist people in the physical world.',
    chips: ['Artificial Intelligence', 'Robotics', 'Human Assistance', 'Human Data', 'Connected Physical Systems'],
    ctaPrimary: 'Explore SAVEN',
    ctaExternal: 'Visit SAVEN Core',
    status: 'Architecture · Research · Development',
  },

  nav: [
    { id: 'overview', label: 'SAVEN' },
    { id: 'human-assistance', label: 'Human Assistance' },
    { id: 'human-data-model', label: 'Human Data Model' },
    { id: 'technology', label: 'Technology' },
    { id: 'robotics-interface', label: 'Robotics Interface' },
    { id: 'robotics-lab', label: 'Robotics Lab' },
    { id: 'partners', label: 'Partners' },
  ],

  idea: {
    kicker: 'The Core Idea',
    title: 'Turning Intelligence Into Human Care',
    p1:
      'Robotics is moving out of controlled industrial environments and into places built for people — homes, care environments, rehabilitation settings, hospitals, workplaces, public environments and everyday life.',
    p2: 'Mechanical capability alone is not enough. Robots operating around people need intelligence that can understand:',
    needs: ['The person', 'Movement', 'Context', 'Environment', 'Task', 'Interaction', 'Limits', 'Permissions', 'Safety'],
    conclusion: 'SAVEN is being developed around this missing layer.',
  },

  assistance: {
    kicker: 'Human Assistance',
    title: 'Technology Built Around People',
    p: 'The assistance areas currently represented by SAVEN describe where human-assistance intelligence is being developed — not clinical effectiveness and not medical-device status.',
    items: [
      { t: 'Mobility', d: 'Assistance with movement and physical navigation.' },
      { t: 'Physical Assistance', d: 'Support for physical tasks where robotic systems can appropriately help.' },
      { t: 'Rehabilitation Support', d: 'Potential robotic support within professionally supervised rehabilitation environments.' },
      { t: 'Independent Living', d: 'Technology designed to help people perform more everyday activities independently.' },
      { t: 'Everyday Tasks', d: 'Physical assistance in environments built around normal human life.' },
      { t: 'Human-Robot Interaction', d: 'Making interaction between people and robotic systems more understandable, controlled and useful.' },
    ] as Pair[],
    note: 'These areas describe development direction. They are not statements of clinical effectiveness or approved medical use.',
  },

  layer: {
    kicker: 'Architecture',
    title: 'The SAVEN Human Assistance Layer',
    p:
      'SAVEN’s value is not limited to building mechanical robots. The architecture includes an intelligence and integration layer designed to work across compatible robotic systems.',
    layers: [
      {
        n: '01',
        t: 'Perception',
        d: 'Understanding people, movement, surroundings, objects and context through compatible sensors and robotic systems.',
        items: ['People', 'Movement', 'Surroundings', 'Objects', 'Context'],
      },
      {
        n: '02',
        t: 'Human Movement Understanding',
        d: 'Interpreting movement patterns and physical interaction to help determine when and how assistance may be appropriate.',
        items: ['Movement patterns', 'Physical interaction', 'Timing of assistance'],
      },
      {
        n: '03',
        t: 'Assistance Intelligence',
        d: 'Software and AI designed to coordinate robotic assistance according to task, environment, system capabilities, human context and defined limits.',
        items: ['Task', 'Environment', 'System capabilities', 'Human context', 'Defined limits'],
      },
      {
        n: '04',
        t: 'Personalization',
        d: 'Adapting interaction and assistance to the individual, within permitted information only.',
        items: ['Preferences', 'Routines', 'Capabilities', 'Context', 'Permitted information'],
      },
      {
        n: '05',
        t: 'Safety & Control',
        d: 'Designing oversight and limits directly into human-robot interaction.',
        items: ['Human oversight', 'Operational limits', 'Interruption mechanisms', 'System monitoring', 'Safe-state behavior'],
      },
    ],
  },

  beyondRobot: {
    kicker: 'One Intelligence Approach',
    title: 'Intelligence Beyond a Single Robot',
    p:
      'The future of assistive robotics will not be defined by one machine. Different environments and tasks require different physical systems. SAVEN is being developed as a hardware-flexible intelligence and integration approach.',
    forms: ['Humanoid Robots', 'Mobile Robots', 'Robotic Arms', 'Wearable Robotics', 'Rehabilitation Systems', 'Future Assistive Devices'],
    flow: ['Multiple Robotic Forms', 'SAVEN Human Assistance Intelligence', 'One Intelligence Approach'],
    note: 'Potential compatible categories. Compatibility with any specific commercial robot is not implied.',
  },

  hardware: {
    kicker: 'Hardware-Flexible Model',
    title: 'The Robot Does Not Define SAVEN',
    p1:
      'SAVEN is not built on the assumption that it must manufacture every physical platform itself. Different robotics manufacturers specialize in different capabilities.',
    specialties: ['Mobility', 'Manipulation', 'Humanoid systems', 'Wearables', 'Rehabilitation systems', 'Sensors', 'Physical platforms'],
    p2: 'SAVEN focuses on the intelligence, interaction, personalization, integration and human-assistance layer. This allows a potential architecture:',
    equation: ['Robotics Platform', 'SAVEN Human-Assistance Intelligence', 'Defined Application'],
    equationResult: 'Potential Integrated Solution',
    dependsTitle: 'Actual integration depends on:',
    depends: ['Hardware architecture', 'Interfaces', 'Sensors', 'Control systems', 'Safety requirements', 'Technical validation', 'Commercial agreements'],
    note: 'Universal compatibility is not claimed.',
  },

  humanData: {
    kicker: 'Human Data',
    title: 'Understanding the Person — Not Only the Task',
    p1:
      'Useful human assistance requires some understanding of the person and the current situation. SAVEN refers to this authorized context as Human Data.',
    p2: 'Human Data may include information from different permitted sources. The objective is not unrestricted collection. The objective is to determine:',
    questions: [
      'What information matters',
      'Why it matters',
      'Who may access it',
      'How it may be used',
      'Under what permissions',
      'For what defined purpose',
    ],
  },

  hdm: {
    kicker: 'Human Data Model',
    title: 'Structured Human Context',
    p:
      'The Human Data Model is the structured representation that organizes Human Data and preserves context and relationships before other systems use that information.',
    chain: ['Human Data', 'Human Data Model', 'Knowledge / Context', 'SAVEN Systems', 'Human Assistance'],
    p2: 'The Human Data Model exists between human information and later systems so assistance can remain:',
    qualities: ['Permissioned', 'Limited', 'Structured', 'Reviewable', 'Accountable'],
    principlesTitle: 'Human Data Model Principles',
    principles: [
      { t: 'Consistency', d: 'Shared definitions reduce contradictory interpretation.' },
      { t: 'Data Separation', d: 'Different information categories remain distinct unless there is an explicit purpose and permission to combine them.' },
      { t: 'Privacy', d: 'Define what may be used, why and by whom.' },
      { t: 'Explainability', d: 'Authorized reviewers should be able to understand what context informed assistance.' },
      { t: 'Extensibility', d: 'New categories enter through governed architecture rather than uncontrolled collection.' },
      { t: 'Interoperability', d: 'Information exchange remains limited and governed.' },
      { t: 'Human Oversight', d: 'The model supports assistance. It does not give systems independent authority over people.' },
    ] as Pair[],
  },

  biomath: {
    kicker: 'Foundation Relationship',
    title: 'BioMath Core → SAVEN',
    p1:
      'BioMath Core provides specialized analysis and reports. The Human Data Model remains the broader structured representation of Human Data. BioMath Core does not replace the Human Data Model.',
    p2:
      'BioMath Core may use or contribute information through the Human Data Model where appropriate, permissioned and supported. Its reports and conclusions may inform SAVEN assistance architecture under human control.',
    chain: [
      { t: 'BioMath Life', d: 'Strategy · Philosophy · Standards' },
      { t: 'BioMath Core', d: 'Analysis · Context · Reports' },
      { t: 'Human Data Model', d: 'Structured Human Context' },
      { t: 'SAVEN', d: 'Orchestration · Intelligence · Assistance' },
      { t: 'Physical Systems', d: 'Robots · Devices · Human Interfaces' },
    ] as Pair[],
    scope: 'Model coverage: 20 categories · 200+ services.',
    scopeNote:
      'Model Coverage describes the BioMath Core model — not a current SAVEN commercial service catalog. This is not described as a deployed clinical system.',
  },

  systems: {
    kicker: 'SAVEN Systems Architecture',
    title: 'From Human Understanding to Physical Action',
    stack: [
      { t: 'Human Context', items: ['Human Data', 'Human Data Model'] },
      { t: 'Knowledge', items: ['Knowledge Engine', 'AI Decision Support'] },
      { t: 'Governance', items: ['Safety Layer', 'Communication Layer', 'Permissions', 'Human Oversight'] },
      { t: 'Physical Interface', items: ['Robotics Layer', 'SAVEN Robotics Interface'] },
      { t: 'Robotic System', items: ['Compatible physical platform'] },
      { t: 'Assistance', items: ['Physical-world action under defined limits and human authority'] },
    ] as Group[],
  },

  knowledge: {
    kicker: 'Knowledge Engine',
    title: 'Consistent Context for Later Systems',
    p:
      'The Knowledge Engine represents the architecture responsible for maintaining and providing consistent context to later SAVEN systems. It is presented here as architecture, not as a deployed commercial AI engine.',
    chain: ['Human Data Model', 'Knowledge Engine', 'AI Decision Support', 'SAVEN Systems'],
  },

  decision: {
    kicker: 'AI Decision Support',
    title: 'AI Assists. People Decide.',
    p: 'AI Decision Support is designed to analyze available authorized information and support human review. It may help present:',
    items: ['Context', 'Options', 'Uncertainty', 'Relevant changes', 'Potential considerations'],
    statement: 'AI assists. Human authority remains.',
    note: 'Autonomous medical decisions are not implied.',
  },

  interface: {
    kicker: 'Flagship Workstream',
    title: 'SAVEN Robotics Interface',
    p:
      'The SAVEN Robotics Interface is the shared communication and control direction through which diverse compatible robots and devices may connect to SAVEN under human command.',
    distinction: [
      { t: 'Robotics Layer', d: 'Defines where physical interaction fits within SAVEN systems architecture.' },
      { t: 'SAVEN Robotics Interface', d: 'Represents the flagship communication and control workstream connecting compatible robotic and physical systems.' },
    ] as Pair[],
    top: 'SAVEN Intelligence',
    hub: 'Robotics Interface',
    endpoints: ['Humanoid Robot', 'Mobile Robot', 'Robotic Arm', 'Wearable System', 'Rehabilitation System', 'Future Device'],
    note: 'Production integrations are not claimed.',
  },

  lab: {
    kicker: 'R&D Program',
    title: 'SAVEN Robotics Lab',
    p: 'The SAVEN Robotics Lab is the development and integration environment behind SAVEN’s human-assistance robotics program.',
    scopeTitle: 'Current development scope',
    scope: [
      'Human-robot interaction',
      'Robotics integration',
      'Movement intelligence',
      'Perception',
      'Physical assistance',
      'Personalization',
      'Safety architecture',
      'AI-assisted control',
      'Simulation',
      'Prototype development',
      'Partner integrations',
      'Real-world validation',
    ],
    note:
      'The Lab is an R&D and architecture program. No large existing physical laboratory, operational robot fleet, commercial clinical product or production-scale deployment is implied.',
  },

  pathway: {
    kicker: 'Maturity',
    title: 'From Research to Real-World Assistance',
    steps: [
      { n: '01', t: 'Research', items: ['Human needs', 'Use cases', 'Interaction models', 'Safety requirements'] },
      { n: '02', t: 'Integration', items: ['Sensors', 'AI', 'Robotics platforms', 'Software'] },
      { n: '03', t: 'Prototype', items: ['Controlled interaction', 'Movement', 'Tasks', 'User interfaces'] },
      { n: '04', t: 'Validation', items: ['Safety', 'Usability', 'Performance', 'Human feedback'] },
      { n: '05', t: 'Pilot Programs', items: ['Selected environments', 'Partners', 'Professional oversight'] },
      { n: '06', t: 'Deployment', items: ['Defined applications', 'Qualified platforms', 'Operational support'] },
    ] as Step[],
    note:
      'Architecture, research and prototype concepts are not presented as product, commercial availability, deployment, validation, clinical use or certification.',
  },

  environments: {
    kicker: 'Applications',
    title: 'Care Where Life Happens',
    p: 'Potential application environments. These describe future opportunities, not deployed products.',
    items: [
      { t: 'Home', items: ['Independent living', 'Everyday assistance', 'Mobility', 'Physical tasks'] },
      { t: 'Healthcare Environments', items: ['Appropriate assistive applications', 'Physical support', 'Human-supervised workflows'] },
      { t: 'Rehabilitation', items: ['Professionally supervised assistive robotics', 'Movement support', 'Interaction'] },
      { t: 'Senior Living', items: ['Mobility assistance', 'Everyday tasks', 'Physical support', 'Human interaction'] },
      { t: 'Workplace', items: ['Physical assistance', 'Human-robot collaboration', 'Task support'] },
      { t: 'Emergency & Remote Environments', items: ['Potential assistance where human resources or physical access may be constrained'] },
    ] as Group[],
  },

  broader: {
    kicker: 'Scope',
    title: 'SAVEN Is Broader Than Healthcare',
    p: 'SAVEN begins with a human-assistance mission, but human assistance exists in many environments.',
    envs: ['Home', 'Care', 'Rehabilitation', 'Workplace', 'Public Environments', 'Remote Environments', 'Emergency'],
    common: 'Human Assistance',
    commonNote: 'The common layer is human assistance — not a specific industry.',
  },

  partners: {
    kicker: 'Partnership Model',
    title: 'Build With SAVEN',
    p: 'SAVEN should not attempt to manufacture every robot. The partnership architecture is designed around combination:',
    equation: ['Your Robotics Platform', 'SAVEN Human-Assistance Intelligence', 'Defined Application'],
    equationResult: 'Potential Integrated Solution',
    categories: [
      { t: 'Robotics Manufacturers', d: 'Integrate compatible platforms with SAVEN human-assistance intelligence.' },
      { t: 'Sensor & Component Companies', d: 'Perception, movement, safety and interaction technologies.' },
      { t: 'AI & Technology Companies', d: 'Intelligence, multimodal interaction, personalization and robotics technologies.' },
      { t: 'Rehabilitation Organizations', d: 'Explore controlled, professionally supervised applications.' },
      { t: 'Senior Living & Care Organizations', d: 'Evaluate real-world assistance requirements.' },
      { t: 'Universities & Research Institutions', d: 'Human-robot interaction, mobility, safety and assistive robotics.' },
      { t: 'Healthcare Organizations', d: 'Explore appropriate clinical and nonclinical applications subject to applicable requirements.' },
    ] as Pair[],
    note: 'Existing partnerships are not implied.',
    entryTitle: 'Partner Entry Model',
    entry: [
      { t: 'Platform', d: 'Compatible robotic hardware.' },
      { t: 'Integrate', d: 'Connect appropriate interfaces and sensors.' },
      { t: 'SAVEN', d: 'Add human-assistance intelligence.' },
      { t: 'Application', d: 'Define a specific assistance scenario.' },
      { t: 'Validate', d: 'Safety, usability and performance.' },
      { t: 'Pilot', d: 'Controlled real-world environment.' },
      { t: 'Deploy', d: 'Only where technically, operationally, legally and commercially appropriate.' },
    ] as Pair[],
    cta: 'Build With SAVEN',
  },

  commercial: {
    kicker: 'Commercial Architecture',
    title: 'Potential Commercial Architecture',
    p: 'Possible future commercial layers. None of these are presented as currently operational, and no revenue forecasts are published.',
    items: [
      { t: 'Technology Licensing', d: 'SAVEN human-assistance intelligence integrated into compatible robotic platforms.' },
      { t: 'Platform Integration', d: 'Engineering and integration with robotics manufacturers.' },
      { t: 'Enterprise Deployments', d: 'Defined applications for organizations operating assistive robotics.' },
      { t: 'Software & Intelligence', d: 'Recurring software components where applicable.' },
      { t: 'Support', d: 'Technical and operational support.' },
      { t: 'Training', d: 'Operator, caregiver, administrator and partner training where required.' },
      { t: 'Partner Programmes', d: 'Joint development and integration.' },
      { t: 'Custom Development', d: 'Application-specific engineering and integration.' },
    ] as Pair[],
    b2bTitle: 'Potential B2B Relationships',
    b2b: [
      'Robotics manufacturers',
      'Healthcare organizations',
      'Rehabilitation organizations',
      'Senior-living operators',
      'Technology companies',
      'Industrial organizations',
      'Large care providers',
      'Systems integrators',
      'Research organizations',
    ],
    b2bFlow: ['Research', 'Partnership', 'Integration', 'Prototype', 'Validation', 'Pilot', 'Commercial Agreement', 'Deployment', 'Support'],
  },

  scale: {
    kicker: 'Long-Term Model',
    title: 'How Value Could Compound',
    steps: ['One Application', 'One Compatible Platform', 'Validated Integration', 'Additional Applications', 'Additional Robotic Forms', 'Partner Network', 'Multiple Environments'],
    conclusion:
      'The strategic value is not necessarily one robot. It is the possibility of one human-assistance intelligence approach operating across multiple compatible robotic forms.',
  },

  difference: {
    kicker: 'The Strategic Difference',
    title: 'One Intelligence. Many Bodies. Real-World Action.',
    p: '“Bodies” means robotic and physical embodiments — not people.',
    lines: ['Different machines.', 'Different physical capabilities.', 'Different environments.', 'One governed human-assistance intelligence approach.'],
  },

  pillars: {
    kicker: 'Architecture Pillars',
    title: 'S · A · V · E · N',
    items: [
      { l: 'S', t: 'Support', d: 'Human care and assistance remain the purpose.' },
      { l: 'A', t: 'Action', d: 'Connect intelligence with physical action under human authority.' },
      { l: 'V', t: 'Verification', d: 'Safety, trust, validation and oversight are built into the architecture.' },
      { l: 'E', t: 'Environment', d: 'Assistance must understand the physical environment in which it operates.' },
      { l: 'N', t: 'Network', d: 'Connected systems allow intelligence to work across different compatible physical forms.' },
    ],
    line: 'Support · Action · Verification · Environment · Network',
  },

  safety: {
    kicker: 'Safety & Oversight',
    title: 'People Remain in Command',
    items: [
      'Human authority',
      'Operational limits',
      'Permissions',
      'Interruption mechanisms',
      'Safe-state behavior',
      'Escalation',
      'System monitoring',
      'Explainability',
      'Controlled automation',
    ],
    statement: 'AI and automation are tools. They do not replace human responsibility for important outcomes.',
  },

  privacy: {
    kicker: 'Privacy',
    title: 'Assistance Requires Trust',
    p: 'Human context must remain limited to what is necessary and authorized.',
    items: ['Permission', 'Purpose limitation', 'Minimum necessary information', 'Access control', 'Data separation', 'Reviewability', 'Security', 'Human oversight'],
    note: 'No certifications are claimed.',
  },

  isNot: {
    kicker: 'Boundaries',
    title: 'What SAVEN Is Not',
    items: [
      'A replacement for human care',
      'A physician',
      'An autonomous medical authority',
      'A medicine provider',
      'A single humanoid robot',
      'An unrestricted Human Data collection system',
      'A production clinical system unless explicitly validated and approved',
    ],
    statement: 'AI is a tool for human assistance — not the purpose of SAVEN.',
  },

  fit: {
    kicker: 'Portfolio',
    title: 'Why SAVEN Fits Digital Invest',
    p: 'SAVEN represents Digital Invest’s long-horizon work at the intersection of:',
    items: [
      'Artificial intelligence',
      'Human Data',
      'Robotics',
      'Connected systems',
      'Human-machine interaction',
      'Assistive technology',
      'Physical-world intelligence',
    ],
    conclusion: 'SAVEN extends intelligence beyond screens and software into physical systems capable of assisting people.',
    archTitle: 'Portfolio Architecture',
    arch: [
      { t: 'Digital Invest', d: 'Long-horizon technology portfolio' },
      { t: 'SAVEN', d: 'Human-Assistance Intelligence' },
      { t: 'Human Data Model', d: 'Structured Human Context' },
      { t: 'SAVEN Systems', d: 'Knowledge · AI · Safety · Communication' },
      { t: 'SAVEN Robotics Interface', d: 'Communication and control workstream' },
      { t: 'Compatible Robotic Systems', d: 'Humanoid · Mobile · Arms · Wearables · Rehabilitation' },
      { t: 'Human Assistance', d: 'Physical-world action under human authority' },
    ] as Pair[],
    archNote: 'BioMath Core connects into the Human Data / context architecture and does not replace the Human Data Model.',
  },

  cta: {
    title: 'Explore SAVEN With Digital Invest',
    p: 'SAVEN is a long-horizon technology project. All expressions of interest are non-binding and handled offline.',
    primary: 'Express Interest',
    external: 'Visit SAVEN Core',
    partners: 'Partners',
    investors: 'SAVEN Investors',
  },

  mediaTitle: 'SAVEN Media Room',
};

export type SavenContent = typeof savenContent;
