import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import OptimizedImage from "@/components/OptimizedImage";

interface CrowdfundingProjectCardProps {
  title: string;
  description: string;
  category: string;
  image: string;
  link: string;
}

const CrowdfundingProjectCard = ({ 
  title, 
  description, 
  category, 
  image, 
  link
}: CrowdfundingProjectCardProps) => {
  return (
    <Card className="group overflow-hidden border border-border/50 bg-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
      <div className="relative h-64 overflow-hidden">
        <OptimizedImage 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700 ease-out group-hover:brightness-105"
          containerClassName="w-full h-full"
        />
        <Badge className="absolute top-4 left-4 bg-background/95 backdrop-blur-sm border-primary/20">
          {category}
        </Badge>
      </div>
      
      <CardHeader className="space-y-2">
        <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300">
          {title}
        </CardTitle>
        <CardDescription className="text-base leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardFooter className="flex gap-3">
        <Link to={link} className="flex-1">
          <Button className="w-full" size="lg">
            <TrendingUp className="w-4 h-4 mr-2" />
            Learn More
          </Button>
        </Link>
        <Link to={link}>
          <Button variant="outline" size="lg">
            <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CrowdfundingProjectCard;
