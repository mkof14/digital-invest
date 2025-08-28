import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Users, Target } from 'lucide-react';

interface InvestmentCardProps {
  title: string;
  description: string;
  category: 'AI' | 'BioTech' | 'Blockchain' | 'ML';
  minInvestment: string;
  expectedReturn: string;
  riskLevel: 'Низкий' | 'Средний' | 'Высокий';
  investors: number;
  progress: number;
  target: string;
}

const InvestmentCard = ({
  title,
  description,
  category,
  minInvestment,
  expectedReturn,
  riskLevel,
  investors,
  progress,
  target
}: InvestmentCardProps) => {
  const getCategoryStyles = (cat: string) => {
    switch (cat) {
      case 'AI':
        return 'bg-gradient-tech text-primary-foreground';
      case 'BioTech':
        return 'bg-gradient-bio text-success-foreground';
      case 'Blockchain':
        return 'bg-gradient-invest text-secondary-foreground';
      case 'ML':
        return 'bg-gradient-neural text-accent-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'Низкий':
        return 'text-success border-success/20 bg-success/10';
      case 'Средний':
        return 'text-secondary border-secondary/20 bg-secondary/10';
      case 'Высокий':
        return 'text-destructive border-destructive/20 bg-destructive/10';
      default:
        return 'text-muted-foreground border-border';
    }
  };

  return (
    <Card className="group hover:card-hover hover:shadow-glow transition-all duration-300 p-6 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 neural-pattern opacity-5"></div>
      
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <Badge className={getCategoryStyles(category)}>{category}</Badge>
            <h3 className="text-xl font-semibold mt-2 mb-1">{title}</h3>
            <p className="text-muted-foreground text-sm">{description}</p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-muted-foreground">Прогресс сбора</span>
            <span className="text-sm font-medium">{progress}%</span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div 
              className="bg-gradient-tech h-2 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="text-center">
            <Target className="w-4 h-4 text-muted-foreground mx-auto mb-1" />
            <p className="text-xs text-muted-foreground">Цель</p>
            <p className="text-sm font-medium">{target}</p>
          </div>
          <div className="text-center">
            <TrendingUp className="w-4 h-4 text-success mx-auto mb-1" />
            <p className="text-xs text-muted-foreground">Доходность</p>
            <p className="text-sm font-medium text-success">{expectedReturn}</p>
          </div>
          <div className="text-center">
            <Users className="w-4 h-4 text-muted-foreground mx-auto mb-1" />
            <p className="text-xs text-muted-foreground">Инвесторы</p>
            <p className="text-sm font-medium">{investors}</p>
          </div>
        </div>

        {/* Investment Details */}
        <div className="flex justify-between items-center mb-4">
          <div>
            <p className="text-xs text-muted-foreground">Мин. инвестиция</p>
            <p className="font-semibold">{minInvestment}</p>
          </div>
          <Badge variant="outline" className={getRiskColor(riskLevel)}>
            {riskLevel} риск
          </Badge>
        </div>

        {/* Action Button */}
        <Button variant="tech" className="w-full group-hover:shadow-tech">
          Инвестировать
        </Button>
      </div>
    </Card>
  );
};

export default InvestmentCard;