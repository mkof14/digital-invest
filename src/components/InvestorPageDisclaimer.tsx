import { Card, CardContent } from '@/components/ui/card';

interface InvestorPageDisclaimerProps {
  variant?: 'default' | 'compact';
  className?: string;
}

const InvestorPageDisclaimer = ({ variant = 'default', className = '' }: InvestorPageDisclaimerProps) => {
  if (variant === 'compact') {
    return (
      <Card className={`border border-border/50 bg-muted/20 ${className}`}>
        <CardContent className="pt-5 pb-5">
          <p className="text-xs text-muted-foreground/80 leading-relaxed text-center">
            <span className="text-muted-foreground font-medium">Important Notice:</span> Information on this page is not an offer or solicitation. Digital Invest Inc. engages only in private, offline discussions with qualified individuals or organizations. All details are illustrative, subject to change, and for informational purposes only. Participation requires due diligence, suitability review, acceptance of risks, and execution of formal agreements. No guarantees or returns are promised or implied.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={`border border-border/50 bg-muted/20 ${className}`}>
      <CardContent className="pt-6 pb-6">
        <p className="text-xs text-muted-foreground/80 leading-relaxed text-center">
          <span className="text-muted-foreground font-medium">Legal Disclaimer:</span> Information provided on this page is not an offer or solicitation. Digital Invest Inc. engages only in private, offline discussions with qualified individuals or organizations. All project details are illustrative, subject to change, and provided for informational purposes. Participation, if any, requires due diligence, suitability review, acceptance of risks, and execution of formal agreements. No guarantees, promises, or forward-looking returns are made or implied.
        </p>
      </CardContent>
    </Card>
  );
};

export default InvestorPageDisclaimer;
