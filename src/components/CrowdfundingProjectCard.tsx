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
    <Card className="group overflow-hidden border border-border/50 bg-card hover:shadow-elevated transition-all duration-500 hover:-translate-y-2">
      <div className="relative h-64 overflow-hidden">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <OptimizedImage 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700 ease-out"
          containerClassName="w-full h-full"
        />
        <Badge className="absolute top-4 left-4 z-20 bg-background/95 backdrop-blur-sm border-primary/20 shadow-lg">
          {category}
        </Badge>
      </div>
      
      <CardHeader className="space-y-3">
        <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors duration-300 leading-tight">
          {title}
        </CardTitle>
        <CardDescription className="text-base leading-relaxed text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardFooter className="flex gap-3">
        <Link to={link} className="flex-1">
          <Button className="w-full ripple-effect" size="lg">
            <TrendingUp className="w-4 h-4 mr-2" />
            Learn More
          </Button>
        </Link>
        <Link to={link}>
          <Button variant="outline" size="lg" className="ripple-effect">
            <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CrowdfundingProjectCard;
