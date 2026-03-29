import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Globe } from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';
import { useTranslation } from 'react-i18next';
import { languages } from '@/i18n';
import adamasLogo from '@/assets/adamas/adamas-materials-logo.png';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const AdamasNavigation = () => {
  const { theme, setTheme } = useTheme();
  const { t, i18n } = useTranslation();

  const currentLang = languages.find(l => l.code === i18n.language) || languages[0];

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    const lang = languages.find(l => l.code === code);
    document.documentElement.dir = lang && 'dir' in lang ? 'rtl' : 'ltr';
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/85 dark:bg-card/70 backdrop-blur-xl border-b border-border/10 dark:border-border/20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          {/* Left: Adamas logo + name — 200% larger */}
          <Link to="/adamas" className="flex items-center gap-4 group">
            <img
              src={adamasLogo}
              alt="Adamas Materials"
              className="h-14 md:h-16 w-auto brightness-110 transition-transform duration-300 group-hover:scale-105"
            />
            <div className="hidden sm:flex flex-col">
              <span className="text-base md:text-lg font-semibold text-foreground/90 tracking-tight leading-tight">
                Adamas Materials
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-foreground/40">
                Project Portfolio
              </span>
            </div>
          </Link>

          {/* Right: minimal controls */}
          <div className="flex items-center gap-1">
            {/* Link to main site */}
            <Link
              to="/"
              className="text-xs text-foreground/40 hover:text-foreground/70 transition-colors px-3 py-2 rounded-lg hover:bg-muted/40"
            >
              Digital Invest ↗
            </Link>

            <div className="w-px h-5 bg-border/20 mx-1" />

            {/* Language */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-1.5 px-2.5 py-2 rounded-lg text-xs text-foreground/50 hover:text-foreground/80 hover:bg-muted/40 transition-colors">
                  <Globe className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">{currentLang.flag}</span>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="min-w-[140px]">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`text-xs ${i18n.language === lang.code ? 'font-semibold' : ''}`}
                  >
                    <span className="mr-2">{lang.flag}</span>
                    {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Theme toggle */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-lg text-foreground/50 hover:text-foreground/80 hover:bg-muted/40 transition-colors"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AdamasNavigation;
