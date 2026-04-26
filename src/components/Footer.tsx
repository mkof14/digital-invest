import { Link } from 'react-router-dom';
import { MapPin, Mail, Globe, Sun, Moon, ChevronUp } from 'lucide-react';
import OptimizedImage from '@/components/OptimizedImage';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import * as LucideIcons from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { languages } from '@/i18n';
import { useTheme } from '@/components/ThemeProvider';
import { useState, useRef, useEffect } from 'react';

interface SocialMediaLink {
  id: string;
  platform: string;
  display_name: string;
  url: string | null;
  is_visible: boolean;
  sort_order: number;
  icon_name: string;
}

const Footer = () => {
  const { t, i18n } = useTranslation();
  const { theme, setTheme } = useTheme();
  const currentYear = new Date().getFullYear();
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    const lang = languages.find(l => l.code === code);
    if (lang && 'dir' in lang) {
      document.documentElement.dir = 'rtl';
    } else {
      document.documentElement.dir = 'ltr';
    }
    setLangOpen(false);
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const currentLang = languages.find(l => l.code === i18n.language) || languages[0];

  const { data: socialLinks } = useQuery({
    queryKey: ['social-media-links'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('social_media_links')
        .select('*')
        .eq('is_visible', true)
        .order('sort_order', { ascending: true });

      if (error) throw error;
      return data as SocialMediaLink[];
    },
  });

  const linkClass = "text-sm text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-300 inline-flex items-center gap-1 group/link";

  return (
    <footer className="bg-card/60 border-t border-border/30">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* LEFT BLOCK - Company Info */}
          <div className="space-y-4 lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-2 hover:opacity-80 transition-opacity w-fit">
              <OptimizedImage 
                src="/lovable-uploads/digital-invest-logo-new.png" 
                alt="Digital Invest Inc. company logo" 
                className="h-16 w-16 brightness-110 contrast-105"
                containerClassName="bg-transparent"
                showSkeleton={false}
              />
              <h3 className="text-lg font-bold text-foreground">Digital Invest Inc.</h3>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          {/* Projects */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground text-sm tracking-wide uppercase">{t('footer.projects')}</h4>
            <ul className="space-y-2.5">
              <li><Link to="/" className={linkClass}><span className="w-0 group-hover/link:w-2 h-px bg-primary transition-all duration-300" />{t('footer.home')}</Link></li>
              <li><Link to="/projects" className={linkClass}><span className="w-0 group-hover/link:w-2 h-px bg-primary transition-all duration-300" />{t('footer.projects')}</Link></li>
              <li><Link to="/why-digital-invest" className={linkClass}><span className="w-0 group-hover/link:w-2 h-px bg-primary transition-all duration-300" />{t('footer.whyDigitalInvest')}</Link></li>
              <li><Link to="/how-it-works" className={linkClass}><span className="w-0 group-hover/link:w-2 h-px bg-primary transition-all duration-300" />{t('footer.howItWorks')}</Link></li>
              <li><Link to="/news" className={linkClass}><span className="w-0 group-hover/link:w-2 h-px bg-primary transition-all duration-300" />{t('footer.news')}</Link></li>
              <li><Link to="/schedule" className={linkClass}><span className="w-0 group-hover/link:w-2 h-px bg-primary transition-all duration-300" />{t('footer.schedule')}</Link></li>
              <li><Link to="/overview" className={linkClass}><span className="w-0 group-hover/link:w-2 h-px bg-primary transition-all duration-300" />{t('footer.overview', 'Portfolio Overview')}</Link></li>
              <li><Link to="/adamas" className={linkClass}><span className="w-0 group-hover/link:w-2 h-px bg-primary transition-all duration-300" />{t('footer.adamasMaterials', 'Adamas Materials')}</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground text-sm tracking-wide uppercase">{t('footer.companySection')}</h4>
            <ul className="space-y-2.5">
              <li><Link to="/team" className={linkClass}><span className="w-0 group-hover/link:w-2 h-px bg-primary transition-all duration-300" />{t('footer.team')}</Link></li>
              <li><Link to="/about" className={linkClass}><span className="w-0 group-hover/link:w-2 h-px bg-primary transition-all duration-300" />{t('footer.about')}</Link></li>
              <li><Link to="/governance" className={linkClass}><span className="w-0 group-hover/link:w-2 h-px bg-primary transition-all duration-300" />{t('footer.governance')}</Link></li>
              <li><Link to="/esg" className={linkClass}><span className="w-0 group-hover/link:w-2 h-px bg-primary transition-all duration-300" />{t('footer.esg')}</Link></li>
              <li><Link to="/values" className={linkClass}><span className="w-0 group-hover/link:w-2 h-px bg-primary transition-all duration-300" />{t('footer.values')}</Link></li>
              <li><Link to="/careers" className={linkClass}><span className="w-0 group-hover/link:w-2 h-px bg-primary transition-all duration-300" />{t('footer.careers')}</Link></li>
              <li><Link to="/admin" className={linkClass}><span className="w-0 group-hover/link:w-2 h-px bg-primary transition-all duration-300" />{t('footer.admin')}</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground text-sm tracking-wide uppercase">{t('footer.legal')}</h4>
            <ul className="space-y-2.5">
              <li><Link to="/legal-overview" className={linkClass}><span className="w-0 group-hover/link:w-2 h-px bg-primary transition-all duration-300" />{t('footer.legalOverview')}</Link></li>
              <li><Link to="/legal/terms" className={linkClass}><span className="w-0 group-hover/link:w-2 h-px bg-primary transition-all duration-300" />{t('footer.terms')}</Link></li>
              <li><Link to="/legal/privacy" className={linkClass}><span className="w-0 group-hover/link:w-2 h-px bg-primary transition-all duration-300" />{t('footer.privacy')}</Link></li>
              <li><Link to="/legal/risk-disclosure" className={linkClass}><span className="w-0 group-hover/link:w-2 h-px bg-primary transition-all duration-300" />{t('footer.risk')}</Link></li>
              <li><Link to="/compliance" className={linkClass}><span className="w-0 group-hover/link:w-2 h-px bg-primary transition-all duration-300" />{t('footer.compliance')}</Link></li>
              <li><Link to="/risk-factors" className={linkClass}><span className="w-0 group-hover/link:w-2 h-px bg-primary transition-all duration-300" />{t('footer.riskFactors')}</Link></li>
              <li><Link to="/security" className={linkClass}><span className="w-0 group-hover/link:w-2 h-px bg-primary transition-all duration-300" />{t('footer.security')}</Link></li>
            </ul>
          </div>

          {/* Resources + Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground text-sm tracking-wide uppercase">{t('footer.resources')}</h4>
            <ul className="space-y-2.5">
              <li><Link to="/investor-documents" className={linkClass}><span className="w-0 group-hover/link:w-2 h-px bg-primary transition-all duration-300" />{t('footer.investorDocuments')}</Link></li>
              <li><Link to="/start-investing" className={linkClass}><span className="w-0 group-hover/link:w-2 h-px bg-primary transition-all duration-300" />{t('footer.investorInfo')}</Link></li>
              <li><Link to="/glossary" className={linkClass}><span className="w-0 group-hover/link:w-2 h-px bg-primary transition-all duration-300" />{t('footer.glossary')}</Link></li>
              <li><Link to="/document-library" className={linkClass}><span className="w-0 group-hover/link:w-2 h-px bg-primary transition-all duration-300" />{t('footer.documentLibrary')}</Link></li>
              <li><Link to="/resources" className={linkClass}><span className="w-0 group-hover/link:w-2 h-px bg-primary transition-all duration-300" />Resource Library</Link></li>
              <li><Link to="/infrastructure" className={linkClass}><span className="w-0 group-hover/link:w-2 h-px bg-primary transition-all duration-300" />{t('footer.infrastructure')}</Link></li>
            </ul>

            {/* Contact inline */}
            <div className="pt-4 space-y-2.5">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                <a href="mailto:info@digitalinvest.com" className="text-sm hover:text-primary transition-colors">
                  info@digitalinvest.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                <p className="text-sm">United States</p>
              </div>
              <div className="flex items-center gap-3 pt-1">
                {socialLinks?.map((link) => {
                  const IconComponent = (LucideIcons as any)[link.icon_name];
                  if (!link.url || !IconComponent) return null;
                  
                  const handleClick = async (e: React.MouseEvent) => {
                    e.preventDefault();
                    try {
                      await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/track-social-click`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ socialMediaId: link.id }),
                      });
                    } catch (error) {
                      console.error('Failed to track click:', error);
                    }
                    window.open(link.url, '_blank', 'noopener,noreferrer');
                  };
                  
                  return (
                    <a 
                      key={link.id}
                      href={link.url}
                      onClick={handleClick}
                      className="text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-200 cursor-pointer"
                      aria-label={link.display_name}>
                      <IconComponent className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom bar: Language + Theme + Copyright */}
        <div className="mt-10 pt-6 border-t border-border/20">
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Left: Language dropdown + Theme toggle */}
            <div className="flex items-center gap-3">
              {/* Language dropdown */}
              <div className="relative" ref={langRef}>
                <button
                  onClick={() => setLangOpen(!langOpen)}
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 border border-border/30 transition-all duration-200"
                >
                  <Globe className="w-4 h-4" />
                  <span>{currentLang.flag} {currentLang.name}</span>
                  <ChevronUp className={`w-3.5 h-3.5 transition-transform duration-200 ${langOpen ? '' : 'rotate-180'}`} />
                </button>

                {langOpen && (
                  <div className="absolute bottom-full mb-2 left-0 bg-popover border border-border rounded-xl shadow-xl p-1.5 min-w-[180px] z-50 animate-fade-in">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                        className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-all duration-150 ${
                          i18n.language === lang.code 
                            ? 'bg-primary/10 text-primary font-medium' 
                            : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                        }`}
                      >
                        <span className="text-base">{lang.flag}</span>
                        <span>{lang.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Theme toggle */}
              <button
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 border border-border/30 transition-all duration-200"
              >
                {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
                <span className="hidden sm:inline">{theme === 'light' ? 'Dark' : 'Light'}</span>
              </button>
            </div>

            {/* Right: Copyright */}
            <p className="text-xs text-muted-foreground/70">
              © {currentYear} Digital Invest Inc. {t('footer.rights')}
            </p>
          </div>
        </div>

        {/* Legal Notices */}
        <div className="mt-6 pt-6 border-t border-border/20">
          <div className="max-w-5xl mx-auto space-y-4">
            <p className="text-xs text-muted-foreground/80 leading-relaxed">
              <span className="text-muted-foreground font-medium">{t('footer.legalNotice')}</span> {t('footer.legalNoticeText')}
            </p>
            <p className="text-xs text-muted-foreground/80 leading-relaxed">
              <span className="text-muted-foreground font-medium">{t('footer.riskDisclosure')}</span> {t('footer.riskDisclosureText')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;