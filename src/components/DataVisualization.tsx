import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Activity, BarChart3, PieChart } from 'lucide-react';
import { useEffect, useState } from 'react';

interface DataPoint {
  label: string;
  value: number;
  color: string;
}

interface DataVisualizationProps {
  title: string;
  data: DataPoint[];
  type: 'bar' | 'pie' | 'line';
  animated?: boolean;
}

const DataVisualization = ({ 
  title, 
  data, 
  type = 'bar', 
  animated = true 
}: DataVisualizationProps) => {
  const [animatedData, setAnimatedData] = useState<DataPoint[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (animated) {
      // Start with zero values
      setAnimatedData(data.map(d => ({ ...d, value: 0 })));
      
      const timer = setTimeout(() => {
        setIsVisible(true);
        // Animate to real values
        let progress = 0;
        const animationTimer = setInterval(() => {
          progress += 0.02;
          if (progress >= 1) {
            setAnimatedData(data);
            clearInterval(animationTimer);
          } else {
            setAnimatedData(data.map(d => ({
              ...d,
              value: d.value * progress
            })));
          }
        }, 16);
      }, 500);

      return () => {
        clearTimeout(timer);
      };
    } else {
      setAnimatedData(data);
      setIsVisible(true);
    }
  }, [data, animated]);

  const maxValue = Math.max(...data.map(d => d.value));

  const renderBarChart = () => (
    <div className="space-y-4">
      {animatedData.map((item, index) => (
        <div key={index} className="space-y-2">
          <div className="flex justify-between items-center text-sm">
            <span className="text-muted-foreground">{item.label}</span>
            <span className="font-semibold">{Math.round(item.value)}</span>
          </div>
          <div className="h-3 bg-muted rounded-full overflow-hidden">
            <div 
              className={`h-full ${item.color} animate-electric-border transition-all duration-1000 ease-out`}
              style={{ 
                width: `${(item.value / maxValue) * 100}%`,
                background: `linear-gradient(90deg, hsl(var(--primary)), hsl(var(--secondary)), hsl(var(--accent)))`
              }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderPieChart = () => {
    const total = animatedData.reduce((sum, item) => sum + item.value, 0);
    let cumulativePercentage = 0;

    return (
      <div className="flex items-center justify-center space-x-8">
        <div className="relative w-32 h-32">
          <svg className="w-32 h-32 transform -rotate-90 animate-gentle-pulse" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="hsl(var(--muted))"
              strokeWidth="8"
            />
            {animatedData.map((item, index) => {
              const percentage = (item.value / total) * 100;
              const strokeDasharray = `${percentage * 2.51} 251.2`;
              const strokeDashoffset = -cumulativePercentage * 2.51;
              cumulativePercentage += percentage;
              
              return (
                <circle
                  key={index}
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke={`hsl(var(--${index % 2 === 0 ? 'primary' : index % 3 === 0 ? 'secondary' : 'accent'}))`}
                  strokeWidth="8"
                  strokeDasharray={strokeDasharray}
                  strokeDashoffset={strokeDashoffset}
                  className="transition-all duration-1000 ease-out animate-vibrant-glow"
                />
              );
            })}
          </svg>
        </div>
        
        <div className="space-y-2">
          {animatedData.map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div 
                className={`w-3 h-3 rounded-full animate-gentle-pulse`}
                style={{ 
                  background: `hsl(var(--${index % 2 === 0 ? 'primary' : index % 3 === 0 ? 'secondary' : 'accent'}))`
                }}
              ></div>
              <span className="text-sm text-muted-foreground">{item.label}</span>
              <span className="text-sm font-semibold">{Math.round((item.value / total) * 100)}%</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderLineChart = () => (
    <div className="relative h-32">
      <svg className="w-full h-full" viewBox="0 0 400 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="50%" stopColor="hsl(var(--secondary))" />
            <stop offset="100%" stopColor="hsl(var(--accent))" />
          </linearGradient>
        </defs>
        
        <polyline
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          className="animate-electric-border"
          points={animatedData.map((item, index) => 
            `${(index / (animatedData.length - 1)) * 380 + 10},${90 - (item.value / maxValue) * 70}`
          ).join(' ')}
        />
        
        {animatedData.map((item, index) => (
          <circle
            key={index}
            cx={(index / (animatedData.length - 1)) * 380 + 10}
            cy={90 - (item.value / maxValue) * 70}
            r="4"
            fill="hsl(var(--primary))"
            className="animate-vibrant-glow"
          />
        ))}
      </svg>
    </div>
  );

  const getIcon = () => {
    switch (type) {
      case 'bar': return <BarChart3 className="w-5 h-5" />;
      case 'pie': return <PieChart className="w-5 h-5" />;
      case 'line': return <Activity className="w-5 h-5" />;
      default: return <TrendingUp className="w-5 h-5" />;
    }
  };

  return (
    <Card className={`
      border-0 shadow-vibrant electric-hover overflow-hidden
      ${isVisible ? 'animate-fade-in' : 'opacity-0'}
    `}>
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-glow opacity-5 animate-rainbow-pulse"></div>
      
      <div className="relative z-10 p-6">
        <div className="flex items-center space-x-2 mb-6">
          <div className="p-2 bg-gradient-electric rounded-lg animate-gentle-pulse">
            {getIcon()}
          </div>
          <Badge variant="secondary" className="bg-gradient-neural animate-vibrant-glow">
            {title}
          </Badge>
        </div>
        
        <div className="space-y-4">
          {type === 'bar' && renderBarChart()}
          {type === 'pie' && renderPieChart()}
          {type === 'line' && renderLineChart()}
        </div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute top-2 right-2 w-1 h-1 bg-primary rounded-full animate-subtle-float opacity-60"></div>
      <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-accent rounded-full animate-gentle-pulse opacity-40"></div>
    </Card>
  );
};

export default DataVisualization;