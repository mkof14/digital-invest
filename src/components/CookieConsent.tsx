import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { X, Cookie } from 'lucide-react';
import { cn } from '@/lib/utils';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Show banner after a short delay
      setTimeout(() => setIsVisible(true), 1000);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cookie-consent', JSON.stringify({
      essential: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString()
    }));
    setIsVisible(false);
  };

  const handleAcceptEssential = () => {
    localStorage.setItem('cookie-consent', JSON.stringify({
      essential: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString()
    }));
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookie-consent', JSON.stringify({
      essential: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString()
    }));
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center p-4 pointer-events-none">
      <Card className={cn(
        "w-full max-w-2xl p-6 shadow-2xl pointer-events-auto",
        "bg-background/95 backdrop-blur-lg border-2"
      )}>
        <div className="flex items-start gap-4">
          <Cookie className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
          <div className="flex-1 space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Cookie Preferences</h3>
              <p className="text-sm text-muted-foreground">
                We use cookies to enhance your browsing experience, analyze site traffic, 
                and understand where our visitors are coming from. By clicking "Accept All", 
                you consent to our use of cookies.
              </p>
            </div>

            {showDetails && (
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-muted/50 rounded">
                  <h4 className="font-medium mb-1">Essential Cookies</h4>
                  <p className="text-muted-foreground text-xs">
                    Required for the website to function properly. Cannot be disabled.
                  </p>
                </div>
                <div className="p-3 bg-muted/50 rounded">
                  <h4 className="font-medium mb-1">Analytics Cookies</h4>
                  <p className="text-muted-foreground text-xs">
                    Help us understand how visitors interact with our website by collecting 
                    anonymous information.
                  </p>
                </div>
                <div className="p-3 bg-muted/50 rounded">
                  <h4 className="font-medium mb-1">Marketing Cookies</h4>
                  <p className="text-muted-foreground text-xs">
                    Used to track visitors across websites to display relevant advertisements.
                  </p>
                </div>
              </div>
            )}

            <div className="flex flex-wrap gap-3">
              <Button onClick={handleAcceptAll} size="sm">
                Accept All
              </Button>
              <Button onClick={handleAcceptEssential} variant="outline" size="sm">
                Essential Only
              </Button>
              <Button 
                onClick={() => setShowDetails(!showDetails)} 
                variant="ghost" 
                size="sm"
              >
                {showDetails ? 'Hide' : 'Show'} Details
              </Button>
              <Button onClick={handleReject} variant="ghost" size="sm">
                Reject All
              </Button>
            </div>

            <p className="text-xs text-muted-foreground">
              Read our{' '}
              <a href="/legal/privacy" className="underline hover:text-foreground">
                Privacy Policy
              </a>{' '}
              and{' '}
              <a href="/cookies" className="underline hover:text-foreground">
                Cookie Policy
              </a>{' '}
              for more information.
            </p>
          </div>
          
          <button
            onClick={handleReject}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </Card>
    </div>
  );
};

export default CookieConsent;
