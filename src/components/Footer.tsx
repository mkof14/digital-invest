import { Link } from 'react-router-dom';
import { Linkedin, Facebook, Youtube, MapPin, Mail, Phone, Send } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';

const emailSchema = z.string().trim().email({ message: "Please enter a valid email address" }).max(255, { message: "Email must be less than 255 characters" });

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validation = emailSchema.safeParse(email);
    
    if (!validation.success) {
      toast({
        title: "Invalid Email",
        description: validation.error.errors[0].message,
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call - replace with actual backend integration
    setTimeout(() => {
      toast({
        title: "Successfully Subscribed!",
        description: "Thank you for your interest. We'll keep you updated on investment opportunities.",
      });
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Newsletter Section */}
        <div className="mb-12 pb-12 border-b border-border">
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <h3 className="text-2xl font-bold text-foreground">Stay Informed</h3>
            <p className="text-muted-foreground">
              Subscribe to receive updates on investment opportunities and portfolio developments
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1"
                disabled={isSubmitting}
                required
              />
              <Button type="submit" disabled={isSubmitting} className="sm:w-auto">
                {isSubmitting ? (
                  "Subscribing..."
                ) : (
                  <>
                    Subscribe
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
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
              <li><Link to="/projects/dishcore" className="hover:text-primary transition-colors">DishCore</Link></li>
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
                <strong>Digital Invest Inc.</strong>
              </p>
              <p>
                Investment involves risk. Past performance is not indicative of future results. Healthcare technology services are for informational purposes and do not replace professional medical advice.
              </p>
            </div>
          </div>
        </div>
        
        {/* Copyright - Bottom */}
        <div className="border-t border-border mt-8 pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            © 2010-2025 Digital Invest Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
