import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Calendar, Target } from "lucide-react";

const InvestmentTimeline = () => {
  const milestones = [
    {
      phase: "Q1 2024",
      title: "Platform Enhancement",
      description: "Advanced AI integration and predictive analytics deployment",
      status: "completed",
      funding: "$850K",
      outcomes: [
        "97.3% diagnostic accuracy achieved",
        "250K+ patient profiles processed", 
        "5 major healthcare partnerships secured"
      ]
    },
    {
      phase: "Q2-Q3 2024",
      title: "Clinical Validation",
      description: "Multi-center clinical trials and regulatory milestone completion",
      status: "active",
      funding: "$1.2M",
      outcomes: [
        "FDA breakthrough designation submitted",
        "3 clinical trial sites activated",
        "Interim results showing 89% efficacy"
      ]
    },
    {
      phase: "Q4 2024",
      title: "Market Expansion", 
      description: "Commercial launch preparation and strategic partnership development",
      status: "upcoming",
      funding: "$2.5M",
      outcomes: [
        "Commercial platform launch",
        "10+ healthcare systems onboarded",
        "Revenue target: $2.3M"
      ]
    },
    {
      phase: "Q1-Q2 2025",
      title: "Scale & Growth",
      description: "International expansion and advanced feature deployment",
      status: "planned",
      funding: "$5M",
      outcomes: [
        "European market entry",
        "Advanced genomics module",
        "Revenue target: $8.7M"
      ]
    },
    {
      phase: "2025-2026",
      title: "Market Leadership",
      description: "Establishing dominant market position and preparing for exit opportunities",
      status: "projected",
      funding: "$3M",
      outcomes: [
        "Top 3 market position achieved",
        "500M+ patients served globally",
        "Exit valuation: $500M+"
      ]
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-6 w-6 text-success" />;
      case "active":
        return <Clock className="h-6 w-6 text-warning animate-pulse" />;
      case "upcoming":
        return <Calendar className="h-6 w-6 text-primary" />;
      case "planned":
        return <Target className="h-6 w-6 text-accent" />;
      case "projected":
        return <Target className="h-6 w-6 text-info" />;
      default:
        return <Clock className="h-6 w-6 text-muted-foreground" />;
    }
  };

  const getStatusBadge = (status: string) => {
    const variants: Record<string, "default" | "secondary" | "outline"> = {
      completed: "default",
      active: "secondary", 
      upcoming: "outline",
      planned: "outline",
      projected: "outline"
    };
    
    return (
      <Badge variant={variants[status]} className="capitalize">
        {status}
      </Badge>
    );
  };

  return (
    <Card className="border-0 shadow-elevated">
      <CardHeader>
        <CardTitle className="text-2xl flex items-center">
          <Calendar className="mr-3 h-8 w-8 text-primary" />
          Investment Roadmap & Milestones
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {milestones.map((milestone, index) => (
            <div key={index} className="relative">
              {/* Timeline connector */}
              {index < milestones.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-16 bg-gradient-to-b from-primary/50 to-muted-foreground/20"></div>
              )}
              
              <div className="flex space-x-6">
                <div className="flex-shrink-0">
                  {getStatusIcon(milestone.status)}
                </div>
                
                <div className="flex-grow">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-semibold">{milestone.title}</h3>
                        {getStatusBadge(milestone.status)}
                      </div>
                      <p className="text-sm text-primary font-medium">{milestone.phase}</p>
                      <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Funding</p>
                      <p className="text-lg font-bold text-primary">{milestone.funding}</p>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-corporate rounded-lg p-4">
                    <h4 className="font-medium mb-3 text-sm">Key Outcomes & Deliverables:</h4>
                    <ul className="space-y-2">
                      {milestone.outcomes.map((outcome, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 p-6 bg-gradient-premium/10 rounded-lg border border-primary/20">
          <h3 className="font-semibold mb-3 flex items-center">
            <Target className="mr-2 h-5 w-5 text-success" />
            Investment Impact Summary
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="text-center">
              <p className="text-2xl font-bold text-success">$12.5M+</p>
              <p className="text-muted-foreground">Total Funding Raised</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">500M+</p>
              <p className="text-muted-foreground">Patients Impacted</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-accent">25-45%</p>
              <p className="text-muted-foreground">Projected Annual ROI</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default InvestmentTimeline;