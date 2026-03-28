import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Sun, Moon, LogIn, LogOut, User, Globe } from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';
import OptimizedImage from '@/components/OptimizedImage';
import { useAuth } from '@/hooks/useAuth';
import { useTranslation } from 'react-i18next';
import { languages } from '@/i18n';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const { user, signOut, isAuthenticated } = useAuth();
  const { t, i18n } = useTranslation();

  const navItems = [
    { label: t('nav.home'), href: '/' },
    { label: t('nav.projects'), href: '/projects' },
    { label: t('nav.forInvestors'), href: '/for-investors' },
    { label: t('nav.aboutUs'), href: '/about' },
    { label: t('nav.contact'), href: '/contact' }
  ];

  const isActivePath = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  const currentLang = languages.find(l => l.code === i18n.language) || languages[0];

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    const lang = languages.find(l => l.code === code);
    if (lang && 'dir' in lang) {
      document.documentElement.dir = 'rtl';
    } else {
      document.documentElement.dir = 'ltr';
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/20">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <OptimizedImage 
              src="/lovable-uploads/digital-invest-logo-new.png" 
              alt="Digital Invest Inc. company logo" 
              className="w-14 h-14 object-contain"
              containerClassName="bg-transparent"
              showSkeleton={false}
            />
            <span className="text-foreground text-2xl font-bold">Digital Invest</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <nav className="flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`transition-all duration-300 hover:scale-110 inline-block ${
                    isActivePath(item.href)
                      ? 'text-foreground font-semibold text-lg scale-105'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            
            {/* Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="p-2 gap-1.5">
                  <Globe className="h-4 w-4" />
                  <span className="text-xs font-medium">{currentLang.flag}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-44">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`cursor-pointer ${i18n.language === lang.code ? 'bg-muted font-medium' : ''}`}
                  >
                    <span className="mr-2">{lang.flag}</span>
                    {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="p-2"
            >
              {theme === "light" ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </Button>
            
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span className="max-w-[150px] truncate">{user?.email}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>{t('nav.myAccount')}</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleSignOut} className="cursor-pointer">
                    <LogOut className="mr-2 h-4 w-4" />
                    {t('nav.signOut')}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button variant="outline" asChild className="hover:bg-muted/50 transition-all">
                <Link to="/investor-auth" className="flex items-center gap-2">
                  <LogIn className="h-4 w-4" />
                  {t('nav.signIn')}
                </Link>
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border/20">
            <div className="flex flex-col space-y-3 pt-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`transition-all duration-300 hover:scale-110 inline-block py-2 ${
                    isActivePath(item.href)
                      ? 'text-foreground font-semibold text-lg scale-105'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              {/* Mobile Language Selector */}
              <div className="flex flex-wrap gap-2 py-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`px-3 py-1.5 rounded-md text-sm transition-colors ${
                      i18n.language === lang.code
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground hover:bg-muted/80'
                    }`}
                  >
                    {lang.flag} {lang.name}
                  </button>
                ))}
              </div>
              
              {/* Mobile Theme Toggle */}
              <Button
                variant="ghost"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="justify-start py-2"
              >
                {theme === "light" ? (
                  <Moon className="h-5 w-5 mr-2" />
                ) : (
                  <Sun className="h-5 w-5 mr-2" />
                )}
                {theme === "light" ? t('nav.darkMode') : t('nav.lightMode')}
              </Button>
              
              {isAuthenticated ? (
                <div className="mt-4 space-y-2">
                  <div className="px-2 py-2 text-sm text-muted-foreground truncate border border-border rounded">
                    {user?.email}
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full hover:bg-muted/50 transition-all"
                    onClick={() => {
                      handleSignOut();
                      setIsOpen(false);
                    }}
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    {t('nav.signOut')}
                  </Button>
                </div>
              ) : (
                <Button variant="outline" className="mt-4 hover:bg-muted/50 transition-all" asChild onClick={() => setIsOpen(false)}>
                  <Link to="/investor-auth" className="flex items-center justify-center gap-2">
                    <LogIn className="h-4 w-4" />
                    {t('nav.signIn')}
                  </Link>
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
