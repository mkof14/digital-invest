import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { FileText, Download, Calendar } from "lucide-react";
import DownloadInvestorBriefButton from "@/components/DownloadInvestorBriefButton";

interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  short_description: string;
}

const DocumentLibrary = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      const { data } = await supabase
        .from("projects")
        .select("id, slug, title, category, short_description")
        .eq("is_visible", true)
        .order("priority", { ascending: true });

      if (data) setProjects(data);
      setLoading(false);
    };

    fetchProjects();
  }, []);

  const corporateDocs = [
    { title: "Investor Handbook", url: "/investor-handbook", description: "Comprehensive guide to Digital Invest portfolio" },
    { title: "Terms of Use", url: "/legal/terms", description: "Legal terms and conditions" },
    { title: "Privacy Policy", url: "/legal/privacy", description: "Data protection and privacy practices" },
    { title: "Risk Disclosure", url: "/legal/risk-disclosure", description: "Investment risk factors" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Document Library
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Access all investor materials, project briefs, and corporate documentation in one centralized location.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">Corporate Documents</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {corporateDocs.map((doc, idx) => (
                  <Card key={idx} className="hover-scale">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <FileText className="h-6 w-6 text-primary" />
                          <CardTitle className="text-lg">{doc.title}</CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        {doc.description}
                      </p>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(doc.url, '_blank')}
                        className="w-full"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        View Document
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-6">Project Investor Briefs</h2>
              {loading ? (
                <div className="text-center py-8">Loading documents...</div>
              ) : (
                <div className="grid md:grid-cols-2 gap-6">
                  {projects.map((project) => (
                    <Card key={project.id} className="hover-scale">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="text-lg mb-1">
                              {project.title}
                            </CardTitle>
                            <span className="text-xs px-2 py-1 rounded bg-primary/10 text-primary">
                              {project.category}
                            </span>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                          {project.short_description}
                        </p>
                        <DownloadInvestorBriefButton 
                          projectSlug={project.slug}
                        />
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>

            <div className="mt-12 p-6 bg-muted/50 rounded-lg">
              <p className="text-sm text-muted-foreground text-center">
                <strong>Important:</strong> These documents are provided for informational purposes only. 
                They do not constitute an offer, solicitation, or investment advice. Any potential participation 
                requires private discussions, due diligence, and formal legal agreements.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DocumentLibrary;
