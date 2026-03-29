import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import adamasLogo from '@/assets/adamas/adamas-materials-logo.png';

const AdamasFooter = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/20 bg-card/40 dark:bg-card/30 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Logo section */}
        <div className="flex flex-col items-center mb-10">
          <Link to="/adamas" className="group flex flex-col items-center gap-3">
            <img
              src={adamasLogo}
              alt="Adamas Materials"
              className="h-16 md:h-20 w-auto brightness-110 transition-transform duration-300 group-hover:scale-105"
            />
            <span className="text-base md:text-lg font-semibold text-foreground/80 tracking-tight">
              Adamas Materials
            </span>
          </Link>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border/40 to-transparent mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: copyright */}
          <div className="text-xs text-foreground/35">
            © {currentYear} Adamas Materials. {t('adamas.footer.rights', 'All rights reserved.')}
          </div>

          {/* Center: minimal links */}
          <div className="flex items-center gap-8">
            <Link
              to="/adamas"
              className="text-xs text-foreground/40 hover:text-foreground/70 transition-colors"
            >
              {t('adamas.footer.projects', 'Projects')}
            </Link>
            <Link
              to="/"
              className="text-xs text-foreground/40 hover:text-foreground/70 transition-colors"
            >
              Digital Invest
            </Link>
            <Link
              to="/legal/privacy"
              className="text-xs text-foreground/40 hover:text-foreground/70 transition-colors"
            >
              {t('adamas.footer.privacy', 'Privacy')}
            </Link>
          </div>

          {/* Right: disclaimer note */}
          <div className="text-[10px] text-foreground/25 max-w-xs text-center md:text-right leading-relaxed">
            {t('adamas.footer.note', 'Informational purposes only. Not a public offering.')}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AdamasFooter;
