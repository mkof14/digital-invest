import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { TrendingUp, Briefcase, Users, Target } from "lucide-react";

const PortfolioDashboard = () => {
  const [stats, setStats] = useState({
    totalProjects: 0,
    activeProjects: 0,
    totalLeads: 0,
    qualifiedLeads: 0
  });

  useEffect(() => {
    const fetchStats = async () => {
      const [projects, leads] = await Promise.all([
        supabase.from("projects").select("id, status", { count: "exact" }),
        supabase.from("investor_leads").select("id, status", { count: "exact" })
      ]);

      setStats({
        totalProjects: projects.data?.length || 0,
        activeProjects: projects.data?.filter(p => p.status === "OPEN").length || 0,
        totalLeads: leads.data?.length || 0,
        qualifiedLeads: leads.data?.filter(l => l.status === "QUALIFIED").length || 0
      });
    };

    fetchStats();
  }, []);

  const statCards = [
    {
      title: "Total Projects",
      value: stats.totalProjects,
      icon: Briefcase,
      description: "Portfolio companies"
    },
    {
      title: "Active Opportunities",
      value: stats.activeProjects,
      icon: TrendingUp,
      description: "Open for discussions"
    },
    {
      title: "Investor Interest",
      value: stats.totalLeads,
      icon: Users,
      description: "Expressions of interest"
    },
    {
      title: "Qualified Prospects",
      value: stats.qualifiedLeads,
      icon: Target,
      description: "In due diligence"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {statCards.map((stat, idx) => (
        <Card key={idx} className="hover-scale">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground mt-1">
              {stat.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default PortfolioDashboard;
