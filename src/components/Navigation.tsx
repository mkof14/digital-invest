import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Why Digital Invest', href: '/why-digital-invest' },
    { label: 'Projects', href: '/projects' },
    { label: 'For Investors', href: '/for-investors' },
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'Team', href: '/team-members' },
    { label: 'News', href: '/news' },
    { label: 'Contact', href: '/contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/20">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/d1011e6f-955a-48d9-adef-662af751c3b9.png" 
              alt="Digital Invest Logo" 
              className="w-10 h-10 object-contain"
            />
            <span className="text-primary text-2xl font-bold">Digital Invest</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {item.label}
              </Link>
            ))}
            
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
            
            <Button variant="outline" size="sm" asChild>
              <Link to="/auth">Admin</Link>
            </Button>
            
            <Button variant="default" asChild className="hover:scale-105 transition-transform">
              <Link to="/start-investing">Start Investing</Link>
            </Button>
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
                  key={item.label}
                  to={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              
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
                {theme === "light" ? "Dark Mode" : "Light Mode"}
              </Button>
              
              <Button variant="outline" className="mt-4" asChild>
                <Link to="/auth">Admin Login</Link>
              </Button>
              
              <Button variant="default" className="mt-2 hover:scale-105 transition-transform" asChild>
                <Link to="/start-investing">Start Investing</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;