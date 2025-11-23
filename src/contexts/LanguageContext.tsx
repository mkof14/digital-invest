import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'ru';

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
    
    // Team Page
    'team.title': 'Our Team',
    'team.subtitle': 'Meet the professionals driving innovation and growth at Digital Invest Inc.',
    'team.founderTitle': 'About the Founder',
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
    
    // Team Page
    'team.title': 'Наша Команда',
    'team.subtitle': 'Познакомьтесь с профессионалами, которые управляют инновациями и развитием Digital Invest Inc.',
    'team.founderTitle': 'О Основателе',
    'team.teamMembers': 'Члены Команды',
    'team.teamSubtitle': 'Опытные профессионалы в области технологий, операций и стратегического развития',
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved === 'ru' || saved === 'en') ? saved : 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
      if (value === undefined) break;
    }
    
    return value || key;
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
