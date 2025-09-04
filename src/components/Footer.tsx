import { Link } from 'react-router-dom';
import { Linkedin, Facebook, Youtube, MapPin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 mb-2">
              <img 
                src="/lovable-uploads/d1011e6f-955a-48d9-adef-662af751c3b9.png" 
                alt="Digital Invest Logo" 
                className="w-8 h-8 object-contain"
              />
              <h3 className="text-xl font-bold text-foreground">Digital Invest Inc.</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Pioneering the future of precision medicine through mathematical modeling, 
              AI-driven diagnostics, and personalized therapeutic solutions.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/digital-invest-inc/" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="p-2 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors">
                <Linkedin className="h-5 w-5 text-primary" />
              </a>
              <a href="https://www.facebook.com/digitalinvestcompany" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="p-2 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors">
                <Facebook className="h-5 w-5 text-primary" />
              </a>
              <a href="https://www.youtube.com/@BiomathLife" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="p-2 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors">
                <Youtube className="h-5 w-5 text-primary" />
              </a>
            </div>
          </div>

          {/* Platform */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Platform</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link to="/platform" className="hover:text-primary transition-colors">BioMath Life Platform</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Genomic Analysis</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Predictive Intelligence</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Clinical Integration</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Company</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link to="/team" className="hover:text-primary transition-colors">Leadership Team</Link></li>
              <li><Link to="/recognition" className="hover:text-primary transition-colors">Recognition</Link></li>
              <li><Link to="/partnerships" className="hover:text-primary transition-colors">Partnerships</Link></li>
              <li><a href="https://www.healthcaretechoutlook.com/digital-invest-inc" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="hover:text-primary transition-colors">Press Coverage</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-sm">Charlotte, NC 28204, USA</span>
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
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © 2024 Digital Invest Inc. All rights reserved. Transforming healthcare through precision medicine.
            </p>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;