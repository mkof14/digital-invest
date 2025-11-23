import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'ru' | 'uk' | 'es' | 'fr' | 'de' | 'zh' | 'ja' | 'ar' | 'pt' | 'it' | 'nl' | 'pl' | 'tr' | 'ko';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.forInvestors': 'For Investors',
    'nav.aboutUs': 'About Us',
    'nav.team': 'Team',
    'nav.contact': 'Contact',
    'nav.news': 'News & Insights',
    'nav.howItWorks': 'How It Works',
    'nav.investorInfo': 'Investor Information',
    
    // Common
    'common.learnMore': 'Learn More',
    'common.viewDetails': 'View Details',
    'common.viewAll': 'View All',
    'common.submit': 'Submit',
    'common.cancel': 'Cancel',
    'common.save': 'Save',
    'common.delete': 'Delete',
    'common.edit': 'Edit',
    'common.back': 'Back',
    'common.loading': 'Loading...',
    'common.search': 'Search',
    'common.filter': 'Filter',
    'common.close': 'Close',
    'common.download': 'Download',
    'common.readMore': 'Read More',
    
    // Hero Section
    'hero.title': 'Building Real-Economy and Advanced Technology Projects',
    'hero.subtitle': 'Multi-sector portfolio across health, agriculture, food systems, and AI infrastructure',
    'hero.cta1': 'Explore Projects',
    'hero.cta2': 'Investment Information',
    
    // Footer
    'footer.company': 'Company',
    'footer.projects': 'Projects',
    'footer.legal': 'Legal & Risk',
    'footer.press': 'Press & Resources',
    'footer.contact': 'Contact',
    'footer.description': 'Building and scaling real-economy, AI, manufacturing, and health-technology projects across the United States.',
    'footer.copyright': '© 2025 Digital Invest Inc. All rights reserved.',
    
    // Team Page
    'team.title': 'Our Team',
    'team.subtitle': 'Meet the professionals driving innovation and growth at Digital Invest Inc.',
    'team.founderTitle': 'Executive Leadership',
    'team.teamMembers': 'Team Members',
    'team.teamSubtitle': 'Experienced professionals across technology, operations, and strategic development',
  },
  ru: {
    // Navigation
    'nav.home': 'Главная',
    'nav.projects': 'Проекты',
    'nav.forInvestors': 'Для Инвесторов',
    'nav.aboutUs': 'О Нас',
    'nav.team': 'Команда',
    'nav.contact': 'Контакты',
    'nav.news': 'Новости и Статьи',
    'nav.howItWorks': 'Как Это Работает',
    'nav.investorInfo': 'Информация для Инвесторов',
    
    // Common
    'common.learnMore': 'Узнать Больше',
    'common.viewDetails': 'Подробнее',
    'common.viewAll': 'Посмотреть Все',
    'common.submit': 'Отправить',
    'common.cancel': 'Отмена',
    'common.save': 'Сохранить',
    'common.delete': 'Удалить',
    'common.edit': 'Редактировать',
    'common.back': 'Назад',
    'common.loading': 'Загрузка...',
    'common.search': 'Поиск',
    'common.filter': 'Фильтр',
    'common.close': 'Закрыть',
    'common.download': 'Скачать',
    'common.readMore': 'Читать Далее',
    
    // Hero Section
    'hero.title': 'Создание Проектов Реальной Экономики и Передовых Технологий',
    'hero.subtitle': 'Мультисекторальный портфель в сферах здравоохранения, сельского хозяйства, пищевых систем и AI инфраструктуры',
    'hero.cta1': 'Изучить Проекты',
    'hero.cta2': 'Инвестиционная Информация',
    
    // Footer
    'footer.company': 'Компания',
    'footer.projects': 'Проекты',
    'footer.legal': 'Юридическая Информация',
    'footer.press': 'Пресс-центр',
    'footer.contact': 'Контакты',
    'footer.description': 'Создание и масштабирование проектов реальной экономики, AI, производства и здравоохранения в США.',
    'footer.copyright': '© 2025 Digital Invest Inc. Все права защищены.',
    
    // Team Page
    'team.title': 'Наша Команда',
    'team.subtitle': 'Познакомьтесь с профессионалами, которые управляют инновациями и развитием Digital Invest Inc.',
    'team.founderTitle': 'Исполнительное Руководство',
    'team.teamMembers': 'Члены Команды',
    'team.teamSubtitle': 'Опытные профессионалы в области технологий, операций и стратегического развития',
  },
  uk: {
    // Navigation
    'nav.home': 'Головна',
    'nav.projects': 'Проекти',
    'nav.forInvestors': 'Для Інвесторів',
    'nav.aboutUs': 'Про Нас',
    'nav.team': 'Команда',
    'nav.contact': 'Контакти',
    'nav.news': 'Новини та Статті',
    'nav.howItWorks': 'Як Це Працює',
    'nav.investorInfo': 'Інформація для Інвесторів',
    
    // Common
    'common.learnMore': 'Дізнатися Більше',
    'common.viewDetails': 'Детальніше',
    'common.viewAll': 'Переглянути Все',
    'common.submit': 'Відправити',
    'common.cancel': 'Скасувати',
    'common.save': 'Зберегти',
    'common.delete': 'Видалити',
    'common.edit': 'Редагувати',
    'common.back': 'Назад',
    'common.loading': 'Завантаження...',
    'common.search': 'Пошук',
    'common.filter': 'Фільтр',
    'common.close': 'Закрити',
    'common.download': 'Завантажити',
    'common.readMore': 'Читати Далі',
    
    // Hero Section
    'hero.title': 'Створення Проектів Реальної Економіки та Передових Технологій',
    'hero.subtitle': 'Мультисекторальний портфель у сферах охорони здоров\'я, сільського господарства, харчових систем та AI інфраструктури',
    'hero.cta1': 'Дослідити Проекти',
    'hero.cta2': 'Інвестиційна Інформація',
    
    // Footer
    'footer.company': 'Компанія',
    'footer.projects': 'Проекти',
    'footer.legal': 'Юридична Інформація',
    'footer.press': 'Прес-центр',
    'footer.contact': 'Контакти',
    'footer.description': 'Створення та масштабування проектів реальної економіки, AI, виробництва та охорони здоров\'я в США.',
    'footer.copyright': '© 2025 Digital Invest Inc. Всі права захищені.',
    
    // Team Page
    'team.title': 'Наша Команда',
    'team.subtitle': 'Познайомтеся з професіоналами, які керують інноваціями та розвитком Digital Invest Inc.',
    'team.founderTitle': 'Виконавче Керівництво',
    'team.teamMembers': 'Члени Команди',
    'team.teamSubtitle': 'Досвідчені професіонали в галузі технологій, операцій та стратегічного розвитку',
  },
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.projects': 'Proyectos',
    'nav.forInvestors': 'Para Inversores',
    'nav.aboutUs': 'Sobre Nosotros',
    'nav.team': 'Equipo',
    'nav.contact': 'Contacto',
    'nav.news': 'Noticias e Insights',
    'nav.howItWorks': 'Cómo Funciona',
    'nav.investorInfo': 'Información para Inversores',
    
    // Common
    'common.learnMore': 'Saber Más',
    'common.viewDetails': 'Ver Detalles',
    'common.viewAll': 'Ver Todo',
    'common.submit': 'Enviar',
    'common.cancel': 'Cancelar',
    'common.save': 'Guardar',
    'common.delete': 'Eliminar',
    'common.edit': 'Editar',
    'common.back': 'Volver',
    'common.loading': 'Cargando...',
    'common.search': 'Buscar',
    'common.filter': 'Filtrar',
    'common.close': 'Cerrar',
    'common.download': 'Descargar',
    'common.readMore': 'Leer Más',
    
    // Hero Section
    'hero.title': 'Construyendo Proyectos de Economía Real y Tecnología Avanzada',
    'hero.subtitle': 'Cartera multisectorial en salud, agricultura, sistemas alimentarios e infraestructura de IA',
    'hero.cta1': 'Explorar Proyectos',
    'hero.cta2': 'Información de Inversión',
    
    // Footer
    'footer.company': 'Empresa',
    'footer.projects': 'Proyectos',
    'footer.legal': 'Legal y Riesgo',
    'footer.press': 'Prensa y Recursos',
    'footer.contact': 'Contacto',
    'footer.description': 'Construyendo y escalando proyectos de economía real, IA, manufactura y tecnología de salud en Estados Unidos.',
    'footer.copyright': '© 2025 Digital Invest Inc. Todos los derechos reservados.',
    
    // Team Page
    'team.title': 'Nuestro Equipo',
    'team.subtitle': 'Conoce a los profesionales que impulsan la innovación y el crecimiento en Digital Invest Inc.',
    'team.founderTitle': 'Liderazgo Ejecutivo',
    'team.teamMembers': 'Miembros del Equipo',
    'team.teamSubtitle': 'Profesionales experimentados en tecnología, operaciones y desarrollo estratégico',
  },
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.projects': 'Projets',
    'nav.forInvestors': 'Pour les Investisseurs',
    'nav.aboutUs': 'À Propos',
    'nav.team': 'Équipe',
    'nav.contact': 'Contact',
    'nav.news': 'Actualités et Insights',
    'nav.howItWorks': 'Comment Ça Marche',
    'nav.investorInfo': 'Informations pour Investisseurs',
    
    // Common
    'common.learnMore': 'En Savoir Plus',
    'common.viewDetails': 'Voir les Détails',
    'common.viewAll': 'Voir Tout',
    'common.submit': 'Soumettre',
    'common.cancel': 'Annuler',
    'common.save': 'Enregistrer',
    'common.delete': 'Supprimer',
    'common.edit': 'Modifier',
    'common.back': 'Retour',
    'common.loading': 'Chargement...',
    'common.search': 'Rechercher',
    'common.filter': 'Filtrer',
    'common.close': 'Fermer',
    'common.download': 'Télécharger',
    'common.readMore': 'Lire Plus',
    
    // Hero Section
    'hero.title': 'Construire des Projets d\'Économie Réelle et de Technologie Avancée',
    'hero.subtitle': 'Portefeuille multisectoriel dans la santé, l\'agriculture, les systèmes alimentaires et l\'infrastructure IA',
    'hero.cta1': 'Explorer les Projets',
    'hero.cta2': 'Informations sur l\'Investissement',
    
    // Footer
    'footer.company': 'Entreprise',
    'footer.projects': 'Projets',
    'footer.legal': 'Juridique et Risques',
    'footer.press': 'Presse et Ressources',
    'footer.contact': 'Contact',
    'footer.description': 'Construction et mise à l\'échelle de projets d\'économie réelle, d\'IA, de fabrication et de technologie de santé aux États-Unis.',
    'footer.copyright': '© 2025 Digital Invest Inc. Tous droits réservés.',
    
    // Team Page
    'team.title': 'Notre Équipe',
    'team.subtitle': 'Rencontrez les professionnels qui stimulent l\'innovation et la croissance chez Digital Invest Inc.',
    'team.founderTitle': 'Direction Exécutive',
    'team.teamMembers': 'Membres de l\'Équipe',
    'team.teamSubtitle': 'Professionnels expérimentés en technologie, opérations et développement stratégique',
  },
  de: {
    // Navigation
    'nav.home': 'Startseite',
    'nav.projects': 'Projekte',
    'nav.forInvestors': 'Für Investoren',
    'nav.aboutUs': 'Über Uns',
    'nav.team': 'Team',
    'nav.contact': 'Kontakt',
    'nav.news': 'Nachrichten und Insights',
    'nav.howItWorks': 'Wie Es Funktioniert',
    'nav.investorInfo': 'Investoreninformationen',
    
    // Common
    'common.learnMore': 'Mehr Erfahren',
    'common.viewDetails': 'Details Anzeigen',
    'common.viewAll': 'Alle Anzeigen',
    'common.submit': 'Absenden',
    'common.cancel': 'Abbrechen',
    'common.save': 'Speichern',
    'common.delete': 'Löschen',
    'common.edit': 'Bearbeiten',
    'common.back': 'Zurück',
    'common.loading': 'Lädt...',
    'common.search': 'Suchen',
    'common.filter': 'Filtern',
    'common.close': 'Schließen',
    'common.download': 'Herunterladen',
    'common.readMore': 'Weiterlesen',
    
    // Hero Section
    'hero.title': 'Aufbau von Realwirtschafts- und Hochtechnologieprojekten',
    'hero.subtitle': 'Multisektorales Portfolio in Gesundheit, Landwirtschaft, Lebensmittelsystemen und KI-Infrastruktur',
    'hero.cta1': 'Projekte Erkunden',
    'hero.cta2': 'Investitionsinformationen',
    
    // Footer
    'footer.company': 'Unternehmen',
    'footer.projects': 'Projekte',
    'footer.legal': 'Rechtliches und Risiken',
    'footer.press': 'Presse und Ressourcen',
    'footer.contact': 'Kontakt',
    'footer.description': 'Aufbau und Skalierung von Realwirtschafts-, KI-, Fertigungs- und Gesundheitstechnologieprojekten in den Vereinigten Staaten.',
    'footer.copyright': '© 2025 Digital Invest Inc. Alle Rechte vorbehalten.',
    
    // Team Page
    'team.title': 'Unser Team',
    'team.subtitle': 'Lernen Sie die Fachleute kennen, die Innovation und Wachstum bei Digital Invest Inc. vorantreiben.',
    'team.founderTitle': 'Geschäftsführung',
    'team.teamMembers': 'Teammitglieder',
    'team.teamSubtitle': 'Erfahrene Fachleute in Technologie, Betrieb und strategischer Entwicklung',
  },
  zh: {
    // Navigation
    'nav.home': '首页',
    'nav.projects': '项目',
    'nav.forInvestors': '投资者',
    'nav.aboutUs': '关于我们',
    'nav.team': '团队',
    'nav.contact': '联系',
    'nav.news': '新闻与洞察',
    'nav.howItWorks': '如何运作',
    'nav.investorInfo': '投资者信息',
    
    // Common
    'common.learnMore': '了解更多',
    'common.viewDetails': '查看详情',
    'common.viewAll': '查看全部',
    'common.submit': '提交',
    'common.cancel': '取消',
    'common.save': '保存',
    'common.delete': '删除',
    'common.edit': '编辑',
    'common.back': '返回',
    'common.loading': '加载中...',
    'common.search': '搜索',
    'common.filter': '筛选',
    'common.close': '关闭',
    'common.download': '下载',
    'common.readMore': '阅读更多',
    
    // Hero Section
    'hero.title': '构建实体经济和先进技术项目',
    'hero.subtitle': '跨健康、农业、食品系统和人工智能基础设施的多部门投资组合',
    'hero.cta1': '探索项目',
    'hero.cta2': '投资信息',
    
    // Footer
    'footer.company': '公司',
    'footer.projects': '项目',
    'footer.legal': '法律与风险',
    'footer.press': '新闻与资源',
    'footer.contact': '联系',
    'footer.description': '在美国构建和扩展实体经济、人工智能、制造和健康技术项目。',
    'footer.copyright': '© 2025 Digital Invest Inc. 版权所有。',
    
    // Team Page
    'team.title': '我们的团队',
    'team.subtitle': '认识推动 Digital Invest Inc. 创新和增长的专业人士。',
    'team.founderTitle': '执行领导',
    'team.teamMembers': '团队成员',
    'team.teamSubtitle': '在技术、运营和战略发展方面经验丰富的专业人士',
  },
  ja: {
    // Navigation
    'nav.home': 'ホーム',
    'nav.projects': 'プロジェクト',
    'nav.forInvestors': '投資家向け',
    'nav.aboutUs': '私たちについて',
    'nav.team': 'チーム',
    'nav.contact': 'お問い合わせ',
    'nav.news': 'ニュースとインサイト',
    'nav.howItWorks': '仕組み',
    'nav.investorInfo': '投資家情報',
    
    // Common
    'common.learnMore': '詳細を見る',
    'common.viewDetails': '詳細を表示',
    'common.viewAll': 'すべて表示',
    'common.submit': '送信',
    'common.cancel': 'キャンセル',
    'common.save': '保存',
    'common.delete': '削除',
    'common.edit': '編集',
    'common.back': '戻る',
    'common.loading': '読み込み中...',
    'common.search': '検索',
    'common.filter': 'フィルター',
    'common.close': '閉じる',
    'common.download': 'ダウンロード',
    'common.readMore': '続きを読む',
    
    // Hero Section
    'hero.title': '実体経済と先端技術プロジェクトの構築',
    'hero.subtitle': '健康、農業、食品システム、AIインフラストラクチャにわたるマルチセクターポートフォリオ',
    'hero.cta1': 'プロジェクトを探索',
    'hero.cta2': '投資情報',
    
    // Footer
    'footer.company': '会社',
    'footer.projects': 'プロジェクト',
    'footer.legal': '法律とリスク',
    'footer.press': 'プレスとリソース',
    'footer.contact': 'お問い合わせ',
    'footer.description': '米国全土で実体経済、AI、製造、ヘルステクノロジープロジェクトを構築および拡大しています。',
    'footer.copyright': '© 2025 Digital Invest Inc. 無断転載を禁じます。',
    
    // Team Page
    'team.title': '私たちのチーム',
    'team.subtitle': 'Digital Invest Inc.のイノベーションと成長を推進する専門家たちをご紹介します。',
    'team.founderTitle': 'エグゼクティブリーダーシップ',
    'team.teamMembers': 'チームメンバー',
    'team.teamSubtitle': 'テクノロジー、オペレーション、戦略的開発における経験豊富な専門家',
  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.projects': 'المشاريع',
    'nav.forInvestors': 'للمستثمرين',
    'nav.aboutUs': 'من نحن',
    'nav.team': 'الفريق',
    'nav.contact': 'اتصل بنا',
    'nav.news': 'الأخبار والرؤى',
    'nav.howItWorks': 'كيف يعمل',
    'nav.investorInfo': 'معلومات المستثمرين',
    
    // Common
    'common.learnMore': 'اعرف المزيد',
    'common.viewDetails': 'عرض التفاصيل',
    'common.viewAll': 'عرض الكل',
    'common.submit': 'إرسال',
    'common.cancel': 'إلغاء',
    'common.save': 'حفظ',
    'common.delete': 'حذف',
    'common.edit': 'تحرير',
    'common.back': 'رجوع',
    'common.loading': 'جار التحميل...',
    'common.search': 'بحث',
    'common.filter': 'تصفية',
    'common.close': 'إغلاق',
    'common.download': 'تحميل',
    'common.readMore': 'اقرأ المزيد',
    
    // Hero Section
    'hero.title': 'بناء مشاريع الاقتصاد الحقيقي والتكنولوجيا المتقدمة',
    'hero.subtitle': 'محفظة متعددة القطاعات عبر الصحة والزراعة وأنظمة الغذاء والبنية التحتية للذكاء الاصطناعي',
    'hero.cta1': 'استكشف المشاريع',
    'hero.cta2': 'معلومات الاستثمار',
    
    // Footer
    'footer.company': 'الشركة',
    'footer.projects': 'المشاريع',
    'footer.legal': 'القانونية والمخاطر',
    'footer.press': 'الصحافة والموارد',
    'footer.contact': 'اتصل بنا',
    'footer.description': 'بناء وتوسيع نطاق مشاريع الاقتصاد الحقيقي والذكاء الاصطناعي والتصنيع والتكنولوجيا الصحية في جميع أنحاء الولايات المتحدة.',
    'footer.copyright': '© 2025 Digital Invest Inc. جميع الحقوق محفوظة.',
    
    // Team Page
    'team.title': 'فريقنا',
    'team.subtitle': 'تعرف على المحترفين الذين يقودون الابتكار والنمو في Digital Invest Inc.',
    'team.founderTitle': 'القيادة التنفيذية',
    'team.teamMembers': 'أعضاء الفريق',
    'team.teamSubtitle': 'محترفون ذوو خبرة في التكنولوجيا والعمليات والتطوير الاستراتيجي',
  },
  pt: {
    // Navigation
    'nav.home': 'Início',
    'nav.projects': 'Projetos',
    'nav.forInvestors': 'Para Investidores',
    'nav.aboutUs': 'Sobre Nós',
    'nav.team': 'Equipe',
    'nav.contact': 'Contato',
    'nav.news': 'Notícias e Insights',
    'nav.howItWorks': 'Como Funciona',
    'nav.investorInfo': 'Informações para Investidores',
    
    // Common
    'common.learnMore': 'Saiba Mais',
    'common.viewDetails': 'Ver Detalhes',
    'common.viewAll': 'Ver Tudo',
    'common.submit': 'Enviar',
    'common.cancel': 'Cancelar',
    'common.save': 'Salvar',
    'common.delete': 'Excluir',
    'common.edit': 'Editar',
    'common.back': 'Voltar',
    'common.loading': 'Carregando...',
    'common.search': 'Pesquisar',
    'common.filter': 'Filtrar',
    'common.close': 'Fechar',
    'common.download': 'Baixar',
    'common.readMore': 'Ler Mais',
    
    // Hero Section
    'hero.title': 'Construindo Projetos de Economia Real e Tecnologia Avançada',
    'hero.subtitle': 'Portfólio multissetorial em saúde, agricultura, sistemas alimentares e infraestrutura de IA',
    'hero.cta1': 'Explorar Projetos',
    'hero.cta2': 'Informações de Investimento',
    
    // Footer
    'footer.company': 'Empresa',
    'footer.projects': 'Projetos',
    'footer.legal': 'Jurídico e Risco',
    'footer.press': 'Imprensa e Recursos',
    'footer.contact': 'Contato',
    'footer.description': 'Construindo e escalando projetos de economia real, IA, manufatura e tecnologia de saúde nos Estados Unidos.',
    'footer.copyright': '© 2025 Digital Invest Inc. Todos os direitos reservados.',
    
    // Team Page
    'team.title': 'Nossa Equipe',
    'team.subtitle': 'Conheça os profissionais que impulsionam a inovação e o crescimento na Digital Invest Inc.',
    'team.founderTitle': 'Liderança Executiva',
    'team.teamMembers': 'Membros da Equipe',
    'team.teamSubtitle': 'Profissionais experientes em tecnologia, operações e desenvolvimento estratégico',
  },
  it: {
    // Navigation
    'nav.home': 'Home',
    'nav.projects': 'Progetti',
    'nav.forInvestors': 'Per Investitori',
    'nav.aboutUs': 'Chi Siamo',
    'nav.team': 'Team',
    'nav.contact': 'Contatti',
    'nav.news': 'Notizie e Insights',
    'nav.howItWorks': 'Come Funziona',
    'nav.investorInfo': 'Informazioni per Investitori',
    
    // Common
    'common.learnMore': 'Scopri di Più',
    'common.viewDetails': 'Vedi Dettagli',
    'common.viewAll': 'Vedi Tutto',
    'common.submit': 'Invia',
    'common.cancel': 'Annulla',
    'common.save': 'Salva',
    'common.delete': 'Elimina',
    'common.edit': 'Modifica',
    'common.back': 'Indietro',
    'common.loading': 'Caricamento...',
    'common.search': 'Cerca',
    'common.filter': 'Filtra',
    'common.close': 'Chiudi',
    'common.download': 'Scarica',
    'common.readMore': 'Leggi di Più',
    
    // Hero Section
    'hero.title': 'Costruzione di Progetti di Economia Reale e Tecnologia Avanzata',
    'hero.subtitle': 'Portafoglio multisettoriale in salute, agricoltura, sistemi alimentari e infrastruttura IA',
    'hero.cta1': 'Esplora Progetti',
    'hero.cta2': 'Informazioni sugli Investimenti',
    
    // Footer
    'footer.company': 'Azienda',
    'footer.projects': 'Progetti',
    'footer.legal': 'Legale e Rischi',
    'footer.press': 'Stampa e Risorse',
    'footer.contact': 'Contatti',
    'footer.description': 'Costruzione e scalabilità di progetti di economia reale, IA, produzione e tecnologia sanitaria negli Stati Uniti.',
    'footer.copyright': '© 2025 Digital Invest Inc. Tutti i diritti riservati.',
    
    // Team Page
    'team.title': 'Il Nostro Team',
    'team.subtitle': 'Incontra i professionisti che guidano l\'innovazione e la crescita in Digital Invest Inc.',
    'team.founderTitle': 'Leadership Esecutiva',
    'team.teamMembers': 'Membri del Team',
    'team.teamSubtitle': 'Professionisti esperti in tecnologia, operazioni e sviluppo strategico',
  },
  nl: {
    // Navigation
    'nav.home': 'Home',
    'nav.projects': 'Projecten',
    'nav.forInvestors': 'Voor Investeerders',
    'nav.aboutUs': 'Over Ons',
    'nav.team': 'Team',
    'nav.contact': 'Contact',
    'nav.news': 'Nieuws en Inzichten',
    'nav.howItWorks': 'Hoe Het Werkt',
    'nav.investorInfo': 'Investeerdersinformatie',
    
    // Common
    'common.learnMore': 'Meer Informatie',
    'common.viewDetails': 'Bekijk Details',
    'common.viewAll': 'Bekijk Alles',
    'common.submit': 'Verzenden',
    'common.cancel': 'Annuleren',
    'common.save': 'Opslaan',
    'common.delete': 'Verwijderen',
    'common.edit': 'Bewerken',
    'common.back': 'Terug',
    'common.loading': 'Laden...',
    'common.search': 'Zoeken',
    'common.filter': 'Filteren',
    'common.close': 'Sluiten',
    'common.download': 'Downloaden',
    'common.readMore': 'Lees Meer',
    
    // Hero Section
    'hero.title': 'Bouwen aan Reële Economie en Geavanceerde Technologieprojecten',
    'hero.subtitle': 'Multisectorale portefeuille in gezondheidszorg, landbouw, voedselsystemen en AI-infrastructuur',
    'hero.cta1': 'Ontdek Projecten',
    'hero.cta2': 'Investeringsinformatie',
    
    // Footer
    'footer.company': 'Bedrijf',
    'footer.projects': 'Projecten',
    'footer.legal': 'Juridisch en Risico',
    'footer.press': 'Pers en Bronnen',
    'footer.contact': 'Contact',
    'footer.description': 'Bouwen en opschalen van reële economie, AI, productie en gezondheidstechnologieprojecten in de Verenigde Staten.',
    'footer.copyright': '© 2025 Digital Invest Inc. Alle rechten voorbehouden.',
    
    // Team Page
    'team.title': 'Ons Team',
    'team.subtitle': 'Ontmoet de professionals die innovatie en groei bij Digital Invest Inc. stimuleren.',
    'team.founderTitle': 'Uitvoerend Leiderschap',
    'team.teamMembers': 'Teamleden',
    'team.teamSubtitle': 'Ervaren professionals in technologie, operaties en strategische ontwikkeling',
  },
  pl: {
    // Navigation
    'nav.home': 'Strona Główna',
    'nav.projects': 'Projekty',
    'nav.forInvestors': 'Dla Inwestorów',
    'nav.aboutUs': 'O Nas',
    'nav.team': 'Zespół',
    'nav.contact': 'Kontakt',
    'nav.news': 'Wiadomości i Analizy',
    'nav.howItWorks': 'Jak To Działa',
    'nav.investorInfo': 'Informacje dla Inwestorów',
    
    // Common
    'common.learnMore': 'Dowiedz się Więcej',
    'common.viewDetails': 'Zobacz Szczegóły',
    'common.viewAll': 'Zobacz Wszystko',
    'common.submit': 'Wyślij',
    'common.cancel': 'Anuluj',
    'common.save': 'Zapisz',
    'common.delete': 'Usuń',
    'common.edit': 'Edytuj',
    'common.back': 'Wstecz',
    'common.loading': 'Ładowanie...',
    'common.search': 'Szukaj',
    'common.filter': 'Filtruj',
    'common.close': 'Zamknij',
    'common.download': 'Pobierz',
    'common.readMore': 'Czytaj Więcej',
    
    // Hero Section
    'hero.title': 'Budowanie Projektów Realnej Gospodarki i Zaawansowanych Technologii',
    'hero.subtitle': 'Wielosektorowe portfolio w obszarze zdrowia, rolnictwa, systemów żywnościowych i infrastruktury AI',
    'hero.cta1': 'Odkryj Projekty',
    'hero.cta2': 'Informacje Inwestycyjne',
    
    // Footer
    'footer.company': 'Firma',
    'footer.projects': 'Projekty',
    'footer.legal': 'Prawne i Ryzyko',
    'footer.press': 'Prasa i Zasoby',
    'footer.contact': 'Kontakt',
    'footer.description': 'Budowanie i skalowanie projektów realnej gospodarki, AI, produkcji i technologii zdrowotnych w Stanach Zjednoczonych.',
    'footer.copyright': '© 2025 Digital Invest Inc. Wszelkie prawa zastrzeżone.',
    
    // Team Page
    'team.title': 'Nasz Zespół',
    'team.subtitle': 'Poznaj profesjonalistów napędzających innowacje i rozwój w Digital Invest Inc.',
    'team.founderTitle': 'Kierownictwo Wykonawcze',
    'team.teamMembers': 'Członkowie Zespołu',
    'team.teamSubtitle': 'Doświadczeni profesjonaliści w dziedzinie technologii, operacji i rozwoju strategicznego',
  },
  tr: {
    // Navigation
    'nav.home': 'Ana Sayfa',
    'nav.projects': 'Projeler',
    'nav.forInvestors': 'Yatırımcılar İçin',
    'nav.aboutUs': 'Hakkımızda',
    'nav.team': 'Ekip',
    'nav.contact': 'İletişim',
    'nav.news': 'Haberler ve İçgörüler',
    'nav.howItWorks': 'Nasıl Çalışır',
    'nav.investorInfo': 'Yatırımcı Bilgileri',
    
    // Common
    'common.learnMore': 'Daha Fazla Bilgi',
    'common.viewDetails': 'Detayları Görüntüle',
    'common.viewAll': 'Tümünü Görüntüle',
    'common.submit': 'Gönder',
    'common.cancel': 'İptal',
    'common.save': 'Kaydet',
    'common.delete': 'Sil',
    'common.edit': 'Düzenle',
    'common.back': 'Geri',
    'common.loading': 'Yükleniyor...',
    'common.search': 'Ara',
    'common.filter': 'Filtrele',
    'common.close': 'Kapat',
    'common.download': 'İndir',
    'common.readMore': 'Devamını Oku',
    
    // Hero Section
    'hero.title': 'Gerçek Ekonomi ve İleri Teknoloji Projeleri Oluşturuyoruz',
    'hero.subtitle': 'Sağlık, tarım, gıda sistemleri ve yapay zeka altyapısı alanlarında çok sektörlü portföy',
    'hero.cta1': 'Projeleri Keşfedin',
    'hero.cta2': 'Yatırım Bilgileri',
    
    // Footer
    'footer.company': 'Şirket',
    'footer.projects': 'Projeler',
    'footer.legal': 'Yasal ve Risk',
    'footer.press': 'Basın ve Kaynaklar',
    'footer.contact': 'İletişim',
    'footer.description': 'Amerika Birleşik Devletleri genelinde gerçek ekonomi, yapay zeka, üretim ve sağlık teknolojisi projelerinin inşası ve ölçeklendirilmesi.',
    'footer.copyright': '© 2025 Digital Invest Inc. Tüm hakları saklıdır.',
    
    // Team Page
    'team.title': 'Ekibimiz',
    'team.subtitle': 'Digital Invest Inc.\'de yenilik ve büyümeyi yönlendiren profesyonellerle tanışın.',
    'team.founderTitle': 'Yönetici Liderlik',
    'team.teamMembers': 'Ekip Üyeleri',
    'team.teamSubtitle': 'Teknoloji, operasyonlar ve stratejik gelişim alanlarında deneyimli profesyoneller',
  },
  ko: {
    // Navigation
    'nav.home': '홈',
    'nav.projects': '프로젝트',
    'nav.forInvestors': '투자자를 위한',
    'nav.aboutUs': '회사 소개',
    'nav.team': '팀',
    'nav.contact': '연락처',
    'nav.news': '뉴스 및 인사이트',
    'nav.howItWorks': '작동 방식',
    'nav.investorInfo': '투자자 정보',
    
    // Common
    'common.learnMore': '더 알아보기',
    'common.viewDetails': '상세 보기',
    'common.viewAll': '모두 보기',
    'common.submit': '제출',
    'common.cancel': '취소',
    'common.save': '저장',
    'common.delete': '삭제',
    'common.edit': '편집',
    'common.back': '뒤로',
    'common.loading': '로딩 중...',
    'common.search': '검색',
    'common.filter': '필터',
    'common.close': '닫기',
    'common.download': '다운로드',
    'common.readMore': '더 읽기',
    
    // Hero Section
    'hero.title': '실물 경제 및 첨단 기술 프로젝트 구축',
    'hero.subtitle': '건강, 농업, 식품 시스템 및 AI 인프라에 걸친 다부문 포트폴리오',
    'hero.cta1': '프로젝트 탐색',
    'hero.cta2': '투자 정보',
    
    // Footer
    'footer.company': '회사',
    'footer.projects': '프로젝트',
    'footer.legal': '법률 및 리스크',
    'footer.press': '보도 자료 및 리소스',
    'footer.contact': '연락처',
    'footer.description': '미국 전역에서 실물 경제, AI, 제조 및 헬스케어 기술 프로젝트를 구축하고 확장합니다.',
    'footer.copyright': '© 2025 Digital Invest Inc. 모든 권리 보유.',
    
    // Team Page
    'team.title': '우리 팀',
    'team.subtitle': 'Digital Invest Inc.의 혁신과 성장을 이끄는 전문가들을 만나보세요.',
    'team.founderTitle': '경영진',
    'team.teamMembers': '팀 멤버',
    'team.teamSubtitle': '기술, 운영 및 전략적 개발 분야의 경험 많은 전문가',
  },
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('language') as Language;
    const validLanguages: Language[] = ['en', 'ru', 'uk', 'es', 'fr', 'de', 'zh', 'ja', 'ar', 'pt', 'it', 'nl', 'pl', 'tr', 'ko'];
    return validLanguages.includes(saved) ? saved : 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    const langTranslations = translations[language] as Record<string, string> | undefined;
    if (!langTranslations) return key;
    return langTranslations[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
