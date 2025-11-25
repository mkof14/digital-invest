import { Card, CardContent } from '@/components/ui/card';
import { AlertCircle } from 'lucide-react';

interface InvestorDisclaimerProps {
  variant?: 'default' | 'compact' | 'detailed';
  className?: string;
}

const InvestorDisclaimer = ({ variant = 'default', className = '' }: InvestorDisclaimerProps) => {
  if (variant === 'compact') {
    return (
      <Card className={`border border-border/50 bg-muted/30 ${className}`}>
        <CardContent className="pt-6 pb-6">
          <p className="text-sm text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Important:</strong> Nothing on this website constitutes a public offering, investment advice, or a solicitation to buy or sell any security. Any potential participation with Digital Invest Inc. is handled privately, offline, and subject to due diligence, eligibility, and separate legal agreements.
          </p>
        </CardContent>
      </Card>
    );
  }

  if (variant === 'detailed') {
    return (
      <Card className={`border border-border/50 bg-muted/30 ${className}`}>
        <CardContent className="pt-6 pb-6">
          <div className="flex items-start gap-4">
            <AlertCircle className="h-6 w-6 text-warning flex-shrink-0 mt-1" />
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-foreground">Important Legal Information</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>
                  <strong className="text-foreground">Informational Only:</strong> This website provides information about Digital Invest Inc. projects for informational purposes only. Nothing on this site constitutes a public offering, investment advice, or a solicitation to buy or sell securities.
                </p>
                <p>
                  <strong className="text-foreground">Private Process:</strong> Any potential participation is handled privately, by invitation, and offline through proper legal channels. All agreements require separate legal documentation and are subject to due diligence and eligibility requirements.
                </p>
                <p>
                  <strong className="text-foreground">No Guarantees:</strong> All investments involve risk and may result in partial or total loss of capital. No returns are guaranteed. Past performance does not indicate future results.
                </p>
                <p>
                  <strong className="text-foreground">Not Financial Advice:</strong> Digital Invest Inc. does not provide investment, legal, or tax advice. Consult your own professional advisors before making any financial decisions.
                </p>
                <p>
                  <strong className="text-foreground">Legal Status:</strong> The actual legal status, structure of participation, rights, and obligations are defined only in formal agreements executed offline, not by website content.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  // Default variant
  return (
    <Card className={`border border-border/50 bg-muted/30 ${className}`}>
      <CardContent className="pt-6 pb-6">
        <div className="flex items-start gap-4">
          <AlertCircle className="h-5 w-5 text-warning flex-shrink-0 mt-0.5" />
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Important Notice:</strong> Information on this page is not an offer or solicitation. Digital Invest Inc. engages only in private discussions with qualified individuals. All details are subject to change and provided for informational purposes only.
              </p>
            </p>
            <p>
              Any potential participation with Digital Invest Inc. is discussed privately, by invitation, and handled offline through proper legal documentation. All participation is subject to due diligence, eligibility requirements, and regulatory compliance. No guarantees of outcomes are provided.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default InvestorDisclaimer;
