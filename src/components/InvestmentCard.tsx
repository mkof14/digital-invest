import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { TrendingUp, Users, Target, CheckCircle } from 'lucide-react';

interface InvestmentCardProps {
  title: string;
  description: string;
  targetAmount: string;
  currentAmount: string;
  progress: number;
  features: string[];
}

const InvestmentCard = ({
  title,
  description,
  targetAmount,
  currentAmount,
  progress,
  features
}: InvestmentCardProps) => {
  return (
    <Card className="group hover-scale border-0 shadow-elegant p-6 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5"></div>
      
      <div className="relative z-10">
        {/* Header */}
        <div className="mb-6">
          <Badge variant="secondary" className="mb-3">Investment Opportunity</Badge>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
        </div>

        {/* Progress Section */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm text-muted-foreground">Funding Progress</span>
            <span className="text-sm font-medium">{progress}%</span>
          </div>
          <Progress value={progress} className="h-2 mb-2" />
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Raised: {currentAmount}</span>
            <span className="font-medium">Goal: {targetAmount}</span>
          </div>
        </div>

        {/* Features */}
        <div className="mb-6">
          <h4 className="text-sm font-medium mb-3">Key Focus Areas</h4>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-sm text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Action Button */}
        <Button className="w-full">
          Learn More About Partnership
        </Button>
      </div>
    </Card>
  );
};

export default InvestmentCard;