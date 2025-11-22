import { Card, CardContent } from '@/components/ui/card';
import { AlertCircle } from 'lucide-react';

interface InvestorPageDisclaimerProps {
  variant?: 'default' | 'compact';
  className?: string;
}

const InvestorPageDisclaimer = ({ variant = 'default', className = '' }: InvestorPageDisclaimerProps) => {
  if (variant === 'compact') {
    return (
      <Card className={`border border-warning/30 bg-warning/5 ${className}`}>
        <CardContent className="pt-5 pb-5">
          <p className="text-sm text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Important Notice:</strong> Information on this page is not an offer or solicitation. Digital Invest Inc. engages only in private, offline discussions with qualified individuals or organizations. All details are illustrative, subject to change, and for informational purposes only. Participation requires due diligence, suitability review, acceptance of risks, and execution of formal agreements. No guarantees or returns are promised or implied.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={`border border-warning/30 bg-warning/5 ${className}`}>
      <CardContent className="pt-6 pb-6">
        <div className="flex items-start gap-4">
          <AlertCircle className="h-6 w-6 text-warning flex-shrink-0 mt-1" />
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-foreground">Legal Disclaimer</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Information provided on this page is not an offer or solicitation. Digital Invest Inc. engages only in private, offline discussions with qualified individuals or organizations. All project details are illustrative, subject to change, and provided for informational purposes. Participation, if any, requires due diligence, suitability review, acceptance of risks, and execution of formal agreements. No guarantees, promises, or forward-looking returns are made or implied.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default InvestorPageDisclaimer;
