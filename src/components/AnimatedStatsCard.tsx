import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { LucideIcon } from 'lucide-react';
import { useEffect, useState } from 'react';

interface AnimatedStatsCardProps {
  icon: LucideIcon;
  title: string;
  value: string;
  description: string;
  gradient?: string;
  delay?: number;
}

const AnimatedStatsCard = ({
  icon: Icon,
  title,
  value,
  description,
  gradient = "gradient-tech",
  delay = 0
}: AnimatedStatsCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValue, setAnimatedValue] = useState("0");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      // Animate numbers if value contains numbers
      const numericValue = parseInt(value.replace(/[^\d]/g, ''));
      if (!isNaN(numericValue)) {
        let current = 0;
        const increment = numericValue / 30;
        const timer = setInterval(() => {
          current += increment;
          if (current >= numericValue) {
            setAnimatedValue(value);
            clearInterval(timer);
          } else {
            setAnimatedValue(Math.floor(current) + value.replace(/[\d]/g, '').slice(-1));
          }
        }, 50);
      } else {
        setAnimatedValue(value);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return (
    <Card className={`
      relative overflow-hidden border-0 shadow-vibrant
      electric-hover glow-hover
      ${isVisible ? 'animate-fade-in' : 'opacity-0'}
    `}>
      {/* Animated background gradient */}
      <div className={`absolute inset-0 bg-${gradient} opacity-10 animate-rainbow-pulse`}></div>
      
      {/* Electric border animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-secondary/20 animate-electric-border rounded-lg"></div>
      
      <div className="relative z-10 p-8 text-center">
        {/* Animated icon */}
        <div className="mb-6 animate-subtle-float">
          <div className="inline-flex p-4 rounded-full bg-gradient-electric animate-vibrant-glow">
            <Icon className="w-8 h-8 text-primary-foreground" />
          </div>
        </div>
        
        {/* Animated value */}
        <div className="mb-4">
          <div className="text-4xl md:text-5xl font-bold bg-gradient-electric bg-clip-text text-transparent animate-rainbow-pulse">
            {animatedValue}
          </div>
          <Badge variant="secondary" className="mt-2 bg-gradient-glow animate-gentle-pulse">
            {title}
          </Badge>
        </div>
        
        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
      </div>
      
      {/* Floating particles effect */}
      <div className="absolute top-4 right-4 w-2 h-2 bg-primary rounded-full animate-gentle-pulse opacity-60"></div>
      <div className="absolute bottom-6 left-6 w-1 h-1 bg-secondary rounded-full animate-subtle-float opacity-40"></div>
      <div className="absolute top-1/2 left-4 w-1.5 h-1.5 bg-accent rounded-full animate-vibrant-glow opacity-30"></div>
    </Card>
  );
};

export default AnimatedStatsCard;