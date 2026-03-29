import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const AdamasFooter = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/20 bg-card/30 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left: copyright */}
          <div className="text-xs text-foreground/40">
            © {currentYear} Adamas Materials. {t('adamas.footer.rights', 'All rights reserved.')}
          </div>

          {/* Center: minimal links */}
          <div className="flex items-center gap-6">
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
          <div className="text-[10px] text-foreground/30 max-w-xs text-center md:text-right">
            {t('adamas.footer.note', 'Informational purposes only. Not a public offering.')}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AdamasFooter;
