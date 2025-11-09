import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Target, Users, Calendar, TrendingUp, Rocket, ArrowRight } from "lucide-react";
import { useState } from "react";

interface ProjectFeature {
  icon: React.ReactNode;
  label: string;
}

interface CrowdfundingProjectCardProps {
  title: string;
  description: string;
  targetAmount: string;
  currentAmount: string;
  progress: number;
  backers: number;
  daysLeft: number;
  category: string;
  link: string;
  image?: string;
  features: ProjectFeature[];
  gradient: string;
}

const CrowdfundingProjectCard = ({
  title,
  description,
  targetAmount,
  currentAmount,
  progress,
  backers,
  daysLeft,
  category,
  link,
  image,
  features,
  gradient,
}: CrowdfundingProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-500 hover:border-primary/50 hover:shadow-glow"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient Background */}
      <div
        className={`absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-10 ${gradient}`}
      />

      {/* Image Section */}
      {image && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
          <Badge
            className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm border-primary/30 text-primary"
            variant="outline"
          >
            {category}
          </Badge>
        </div>
      )}

      <div className="p-6 space-y-6">
        {/* Title and Description */}
        <div className="space-y-3">
          <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <p className="text-muted-foreground leading-relaxed line-clamp-2">
            {description}
          </p>
        </div>

        {/* Funding Progress */}
        <div className="space-y-3">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-3xl font-bold text-primary">{currentAmount}</p>
              <p className="text-sm text-muted-foreground">
                funded of {targetAmount}
              </p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-foreground">{progress}%</p>
              <p className="text-sm text-muted-foreground">complete</p>
            </div>
          </div>

          <Progress
            value={progress}
            className="h-2 bg-muted/50"
          />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 py-4 border-y border-border/50">
          <div className="flex flex-col items-center gap-1">
            <Users className="h-5 w-5 text-secondary" />
            <p className="text-lg font-bold text-foreground">{backers}</p>
            <p className="text-xs text-muted-foreground">Backers</p>
          </div>
          <div className="flex flex-col items-center gap-1 border-x border-border/50">
            <Calendar className="h-5 w-5 text-accent" />
            <p className="text-lg font-bold text-foreground">{daysLeft}</p>
            <p className="text-xs text-muted-foreground">Days Left</p>
          </div>
          <div className="flex flex-col items-center gap-1">
            <TrendingUp className="h-5 w-5 text-success" />
            <p className="text-lg font-bold text-foreground">{progress}%</p>
            <p className="text-xs text-muted-foreground">Progress</p>
          </div>
        </div>

        {/* Features */}
        <div className="space-y-2">
          {features.slice(0, 3).map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              <div className="text-primary">{feature.icon}</div>
              <span>{feature.label}</span>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-2">
          <Button
            asChild
            className="flex-1 bg-gradient-to-r from-primary to-primary-light hover:from-primary-dark hover:to-primary shadow-tech group/btn"
          >
            <Link to={link}>
              <Rocket className="mr-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
              Back This Project
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-primary/30 hover:bg-primary/10 hover:border-primary/50"
          >
            <Link to={link}>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Animated Corner Accent */}
      <div
        className={`absolute top-0 right-0 h-32 w-32 bg-gradient-to-br from-primary/20 to-transparent blur-3xl transition-all duration-700 ${
          isHovered ? "opacity-100 scale-150" : "opacity-0 scale-100"
        }`}
      />
    </Card>
  );
};

export default CrowdfundingProjectCard;
