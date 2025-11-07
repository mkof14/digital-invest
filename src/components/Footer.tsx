import { Link } from 'react-router-dom';
import { Linkedin, Facebook, Youtube, MapPin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="space-y-4 lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/d1011e6f-955a-48d9-adef-662af751c3b9.png" 
                alt="Digital Invest Inc. Logo" 
                className="w-10 h-10 object-contain"
              />
              <h3 className="text-lg font-bold text-foreground">Digital Invest Inc.</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Innovative technology investment portfolio focused on precision medicine, digital health, and agricultural solutions.
            </p>
            <div className="flex space-x-3 pt-2">
              <a href="https://www.linkedin.com/company/digital-invest-inc/" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="p-2 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
                 aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" style={{ color: '#0077B5' }} />
              </a>
              <a href="https://www.facebook.com/digitalinvestcompany" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="p-2 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
                 aria-label="Facebook">
                <Facebook className="h-5 w-5" style={{ color: '#1877F2' }} />
              </a>
              <a href="https://www.youtube.com/@BiomathLife" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="p-2 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
                 aria-label="YouTube">
                <Youtube className="h-5 w-5" style={{ color: '#FF0000' }} />
              </a>
            </div>
          </div>

          {/* Our Projects */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Our Projects</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/projects/biomathlife" className="hover:text-primary transition-colors">BioMath Life Platform</Link></li>
              <li><Link to="/projects/biomathcore" className="hover:text-primary transition-colors">BioMath Core</Link></li>
              <li><Link to="/projects/terraaero" className="hover:text-primary transition-colors">TerraAero</Link></li>
              <li><Link to="/projects/digital-invest" className="hover:text-primary transition-colors">Investment Portfolio</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/team" className="hover:text-primary transition-colors">Leadership Team</Link></li>
              <li><Link to="/recognition" className="hover:text-primary transition-colors">Recognition & Awards</Link></li>
              <li><Link to="/partnerships" className="hover:text-primary transition-colors">Partnerships</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Our Services</Link></li>
              <li><a href="https://www.healthcaretechoutlook.com/digital-invest-inc" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="hover:text-primary transition-colors">Press Coverage</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link to="/cookies" className="hover:text-primary transition-colors">Cookie Policy</Link></li>
            </ul>
            <div className="pt-4">
              <p className="text-xs text-muted-foreground">
                © 2010-2025 Digital Invest Inc.
              </p>
              <p className="text-xs text-muted-foreground">
                All rights reserved.
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="font-medium">Digital Invest Inc.</p>
                  <p>Charlotte, NC 28204</p>
                  <p>United States</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <a href="mailto:info@digitalinvest.com" className="text-sm hover:text-primary transition-colors">
                  info@digitalinvest.com
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-center md:text-left">
            <div className="text-xs text-muted-foreground max-w-2xl">
              <p className="mb-2">
                <strong>Digital Invest Inc.</strong> - Formerly GENEX Company (est. 2010). Registered in North Carolina, USA.
              </p>
              <p>
                Investment involves risk. Past performance is not indicative of future results. Healthcare technology services are for informational purposes and do not replace professional medical advice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
