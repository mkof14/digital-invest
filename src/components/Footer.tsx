import { Link } from 'react-router-dom';
import { Linkedin, MapPin, Mail, Facebook, Youtube, X } from 'lucide-react';
import OptimizedImage from '@/components/OptimizedImage';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* LEFT BLOCK - Company Info */}
          <div className="space-y-4 lg:col-span-1">
            <div className="flex items-center gap-3 mb-2">
              <OptimizedImage 
                src="/lovable-uploads/digital-invest-logo-new.png" 
                alt="Digital Invest Inc. company logo" 
                className="h-8 w-8"
                showSkeleton={false}
              />
              <h3 className="text-lg font-bold text-foreground">Digital Invest Inc.</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Building and scaling real-economy, AI, manufacturing, and health-technology projects across the United States.
            </p>
          </div>

          {/* MIDDLE COLUMNS - Projects */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Projects</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/projects" className="hover:text-primary transition-colors">Projects</Link></li>
              <li><Link to="/why-digital-invest" className="hover:text-primary transition-colors">Why Digital Invest</Link></li>
              <li><Link to="/how-it-works" className="hover:text-primary transition-colors">How It Works</Link></li>
              <li><Link to="/news" className="hover:text-primary transition-colors">News & Insights</Link></li>
              <li><Link to="/schedule" className="hover:text-primary transition-colors">Schedule Consultation</Link></li>
            </ul>
          </div>

          {/* MIDDLE COLUMNS - Company */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/team-members" className="hover:text-primary transition-colors">Team</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">About</Link></li>
              <li><Link to="/governance" className="hover:text-primary transition-colors">Governance</Link></li>
              <li><Link to="/esg" className="hover:text-primary transition-colors">ESG</Link></li>
              <li><Link to="/values" className="hover:text-primary transition-colors">Values</Link></li>
              <li><Link to="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
              <li><Link to="/admin" className="hover:text-primary transition-colors">Admin</Link></li>
            </ul>
          </div>

          {/* MIDDLE COLUMNS - Legal & Risk */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Legal & Risk</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/legal-overview" className="hover:text-primary transition-colors">Legal Overview</Link></li>
              <li><Link to="/legal/terms" className="hover:text-primary transition-colors">Terms of Use</Link></li>
              <li><Link to="/legal/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/legal/risk-disclosure" className="hover:text-primary transition-colors">Risk Disclosure</Link></li>
              <li><Link to="/compliance" className="hover:text-primary transition-colors">Compliance</Link></li>
              <li><Link to="/risk-factors" className="hover:text-primary transition-colors">Risk Factors</Link></li>
              <li><Link to="/security" className="hover:text-primary transition-colors">Security</Link></li>
            </ul>
          </div>

          {/* MIDDLE COLUMNS - Press & Resources */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Press & Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/press-center" className="hover:text-primary transition-colors">Press Center</Link></li>
              <li><Link to="/media-kit" className="hover:text-primary transition-colors">Media Kit</Link></li>
              <li><Link to="/investor-documents" className="hover:text-primary transition-colors">Investor Documents</Link></li>
              <li><Link to="/investor-handbook" className="hover:text-primary transition-colors">Investor Handbook</Link></li>
              <li><Link to="/api" className="hover:text-primary transition-colors">API Overview</Link></li>
              <li><Link to="/infrastructure" className="hover:text-primary transition-colors">Infrastructure</Link></li>
            </ul>
          </div>

          {/* RIGHT BLOCK - Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <a href="mailto:info@digitalinvest.com" className="text-sm hover:text-primary transition-colors">
                  info@digitalinvest.com
                </a>
              </div>
              <div className="flex items-start space-x-3 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm">United States</p>
              </div>
              <div className="pt-2 flex items-center gap-4">
                <a 
                  href="https://www.linkedin.com/company/digital-invest-inc/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Facebook">
                  <Facebook className="h-5 w-5" />
                </a>
                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Youtube">
                  <Youtube className="h-5 w-5" />
                </a>
                <a 
                  href="https://x.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="X (Twitter)">
                  <X className="h-5 w-5" />
                </a>
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
                <span className="text-muted-foreground font-medium">Important Legal Notice:</span> Digital Invest Inc. is not an investment advisor, broker-dealer, public offering platform, or marketplace. This website is for informational purposes only. Participation in any project is handled privately, offline, and only for eligible individuals or entities following due diligence. We do not guarantee any outcomes, performance, or returns.
              </p>
            </div>

            {/* Risk Disclosure */}
            <div className="space-y-1.5">
              <p className="text-xs text-muted-foreground/80 leading-relaxed">
                <span className="text-muted-foreground font-medium">Risk Disclosure:</span> All participation involves significant risk, including potential loss of capital. Private, invitation-only process. The actual legal status, structure, rights, and obligations are defined only in formal agreements executed offline, not by website content.
              </p>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center pt-6 border-t border-border/20">
            <p className="text-xs text-muted-foreground/70">
              © {currentYear} Digital Invest Inc. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
