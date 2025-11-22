import { Card, CardContent } from '@/components/ui/card';

interface GlobalLegalDisclaimerProps {
  className?: string;
}

const GlobalLegalDisclaimer = ({ className = '' }: GlobalLegalDisclaimerProps) => {
  return (
    <Card className={`border border-border/50 bg-muted/20 ${className}`}>
      <CardContent className="pt-6 pb-6">
        <p className="text-xs text-muted-foreground leading-relaxed text-center">
          <strong className="text-foreground">Legal Notice:</strong> Digital Invest Inc. is a private entity. This website is for informational purposes only and does not constitute an offer to sell, a solicitation of an offer to buy, or a recommendation of any securities or financial instruments. Nothing on this website should be construed as investment, legal, tax, or financial advice. Any potential participation with Digital Invest Inc. is strictly private, by invitation only, and subject to due diligence, eligibility verification, and formal legal agreements executed offline. Digital Invest Inc. does not guarantee performance, outcomes, returns, or future results.
        </p>
      </CardContent>
    </Card>
  );
};

export default GlobalLegalDisclaimer;
