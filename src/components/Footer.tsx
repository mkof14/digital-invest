import { Link } from 'react-router-dom';
import { Linkedin, MapPin, Mail, Facebook, Youtube, X } from 'lucide-react';
import OptimizedImage from '@/components/OptimizedImage';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import * as LucideIcons from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

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
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

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

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* LEFT BLOCK - Company Info */}
          <div className="space-y-4 lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-2 hover:opacity-80 transition-opacity w-fit">
              <OptimizedImage 
                src="/lovable-uploads/digital-invest-logo-new.png" 
                alt="Digital Invest Inc. company logo" 
                className="h-14 w-14"
                showSkeleton={false}
              />
              <h3 className="text-lg font-bold text-foreground">Digital Invest Inc.</h3>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t('footer.description2')}
            </p>
          </div>

          {/* MIDDLE COLUMNS - Projects */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">{t('footer.projects')}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-primary transition-all duration-300 hover:scale-105 inline-block">{t('footer.home')}</Link></li>
              <li><Link to="/projects" className="hover:text-primary transition-all duration-300 hover:scale-105 inline-block">{t('footer.allProjects')}</Link></li>
              <li><Link to="/why-digital-invest" className="hover:text-primary transition-all duration-300 hover:scale-105 inline-block">{t('footer.whyDigitalInvest')}</Link></li>
              <li><Link to="/how-it-works" className="hover:text-primary transition-all duration-300 hover:scale-105 inline-block">{t('footer.howItWorks')}</Link></li>
              <li><Link to="/news" className="hover:text-primary transition-all duration-300 hover:scale-105 inline-block">{t('footer.newsInsights')}</Link></li>
              <li><Link to="/schedule" className="hover:text-primary transition-all duration-300 hover:scale-105 inline-block">{t('footer.scheduleConsultation')}</Link></li>
            </ul>
          </div>

          {/* MIDDLE COLUMNS - Company */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">{t('footer.company')}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/team" className="hover:text-primary transition-all duration-300 hover:scale-105 inline-block">{t('footer.team')}</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-all duration-300 hover:scale-105 inline-block">{t('footer.about')}</Link></li>
              <li><Link to="/governance" className="hover:text-primary transition-all duration-300 hover:scale-105 inline-block">{t('footer.governance')}</Link></li>
              <li><Link to="/esg" className="hover:text-primary transition-all duration-300 hover:scale-105 inline-block">{t('footer.esg')}</Link></li>
              <li><Link to="/values" className="hover:text-primary transition-all duration-300 hover:scale-105 inline-block">{t('footer.values')}</Link></li>
              <li><Link to="/careers" className="hover:text-primary transition-all duration-300 hover:scale-105 inline-block">{t('footer.careers')}</Link></li>
              <li><Link to="/admin" className="hover:text-primary transition-all duration-300 hover:scale-105 inline-block">{t('footer.admin')}</Link></li>
            </ul>
          </div>

          {/* MIDDLE COLUMNS - Legal & Risk */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">{t('footer.legalRisk')}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/legal-overview" className="hover:text-primary transition-all duration-300 hover:scale-105 inline-block">{t('footer.legalOverview')}</Link></li>
              <li><Link to="/legal/terms" className="hover:text-primary transition-all duration-300 hover:scale-105 inline-block">{t('footer.termsOfUse')}</Link></li>
              <li><Link to="/legal/privacy" className="hover:text-primary transition-all duration-300 hover:scale-105 inline-block">{t('footer.privacyPolicy')}</Link></li>
              <li><Link to="/legal/risk-disclosure" className="hover:text-primary transition-all duration-300 hover:scale-105 inline-block">{t('footer.riskDisclosure')}</Link></li>
              <li><Link to="/compliance" className="hover:text-primary transition-all duration-300 hover:scale-105 inline-block">{t('footer.compliance')}</Link></li>
              <li><Link to="/risk-factors" className="hover:text-primary transition-all duration-300 hover:scale-105 inline-block">{t('footer.riskFactors')}</Link></li>
              <li><Link to="/security" className="hover:text-primary transition-all duration-300 hover:scale-105 inline-block">{t('footer.security')}</Link></li>
            </ul>
          </div>

          {/* MIDDLE COLUMNS - Press & Resources */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">{t('footer.pressResources')}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/press-center" className="hover:text-primary transition-all duration-300 hover:scale-105 inline-block">{t('footer.pressCenter')}</Link></li>
              <li><Link to="/media-kit" className="hover:text-primary transition-all duration-300 hover:scale-105 inline-block">{t('footer.mediaKit')}</Link></li>
              <li><Link to="/investor-documents" className="hover:text-primary transition-all duration-300 hover:scale-105 inline-block">{t('footer.investorDocuments')}</Link></li>
              <li><Link to="/investor-handbook" className="hover:text-primary transition-all duration-300 hover:scale-105 inline-block">{t('footer.investorHandbook')}</Link></li>
              <li><Link to="/glossary" className="hover:text-primary transition-all duration-300 hover:scale-105 inline-block">{t('footer.glossary')}</Link></li>
              <li><Link to="/document-library" className="hover:text-primary transition-all duration-300 hover:scale-105 inline-block">{t('footer.documentLibrary')}</Link></li>
              <li><Link to="/api" className="hover:text-primary transition-all duration-300 hover:scale-105 inline-block">{t('footer.apiOverview')}</Link></li>
              <li><Link to="/infrastructure" className="hover:text-primary transition-all duration-300 hover:scale-105 inline-block">{t('footer.infrastructure')}</Link></li>
            </ul>
          </div>

          {/* RIGHT BLOCK - Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">{t('footer.contact')}</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <a href="mailto:info@digitalinvest.com" className="text-sm hover:text-primary transition-colors">
                  info@digitalinvest.com
                </a>
              </div>
              <div className="flex items-start space-x-3 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm">{t('footer.location')}</p>
              </div>
              <div className="pt-2 flex items-center gap-4">
                {socialLinks?.map((link) => {
                  const IconComponent = (LucideIcons as any)[link.icon_name];
                  if (!link.url || !IconComponent) return null;
                  
                  const handleClick = async (e: React.MouseEvent) => {
                    e.preventDefault();
                    
                    // Track click
                    try {
                      await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/track-social-click`, {
                        method: 'POST',
                        headers: {
                          'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ socialMediaId: link.id }),
                      });
                    } catch (error) {
                      console.error('Failed to track click:', error);
                    }
                    
                    // Open link
                    window.open(link.url, '_blank', 'noopener,noreferrer');
                  };
                  
                  return (
                    <a 
                      key={link.id}
                      href={link.url}
                      onClick={handleClick}
                      className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                      aria-label={link.display_name}>
                      <IconComponent className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        
        {/* Legal Notices */}
        <div className="mt-12 pt-8 border-t border-border/30">
          <div className="max-w-5xl mx-auto space-y-6 mb-8">
            {/* Important Legal Notice */}
            <div className="space-y-1.5">
              <p className="text-xs text-muted-foreground/80 leading-relaxed">
                <span className="text-muted-foreground font-medium">{t('footer.importantLegalNotice')}</span> {t('footer.legalNoticeText')}
              </p>
            </div>

            {/* Risk Disclosure */}
            <div className="space-y-1.5">
              <p className="text-xs text-muted-foreground/80 leading-relaxed">
                <span className="text-muted-foreground font-medium">{t('footer.riskDisclosureLabel')}</span> {t('footer.riskText')}
              </p>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center pt-6 border-t border-border/20">
            <p className="text-xs text-muted-foreground/70">
              {t('footer.copyright').replace('{year}', currentYear.toString())}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
