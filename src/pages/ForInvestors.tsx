import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  Users,
  FileText,
  Shield,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  X,
  Briefcase,
  Building2,
  Search,
  Mail,
  Clock
} from "lucide-react";
import InvestorPageDisclaimer from '@/components/InvestorPageDisclaimer';
import { useLanguage } from '@/contexts/LanguageContext';

const ForInvestors = () => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground">
            {t('forInvestors.title')}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            {t('forInvestors.subtitle')}
          </p>
        </div>
      </section>

      {/* Who We Work With Section */}
      <section className="py-16 px-4 bg-card/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            {t('forInvestors.whoWeWorkWith')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Briefcase className="w-6 h-6" />, text: "Entrepreneurs and operators" },
              { icon: <TrendingUp className="w-6 h-6" />, text: "Long-term private investors" },
              { icon: <Building2 className="w-6 h-6" />, text: "Family offices" },
              { icon: <Users className="w-6 h-6" />, text: "Partners interested in real-economy and AI projects" }
            ].map((item, index) => (
              <Card key={index} className="border border-border/50 bg-card">
                <CardContent className="pt-6 pb-6">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <div className="text-primary">{item.icon}</div>
                    </div>
                    <p className="text-sm text-foreground font-medium leading-relaxed">{item.text}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What You Can Expect Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            {t('forInvestors.whatToExpect')}
          </h2>
          
          <div className="space-y-4">
            {[
              "Direct access to project overviews and roadmaps",
              "Clear explanation of business logic and operations",
              "Structured risk overview",
              "Personal calls and Q&A sessions",
              "Offline legal agreements",
              "Project updates and milestones after onboarding"
            ].map((item, index) => (
              <Card key={index} className="border border-border/50 bg-card">
                <CardContent className="pt-6 pb-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-base text-foreground leading-relaxed">{item}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Your Path as an Investor Section */}
      <section className="py-24 px-4 bg-card/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            {t('forInvestors.yourPath')}
          </h2>
          
          <div className="space-y-6">
            {[
              {
                step: "1",
                title: "Explore projects",
                description: "Review the platforms across health, agriculture, food production, and infrastructure. Read detailed project pages, roadmaps, and business models.",
                icon: <Search className="w-6 h-6" />
              },
              {
                step: "2",
                title: "Request more information",
                description: "Use a short form to request more information about one or more projects. This is non-binding, creates no commitment, and requires no payment.",
                icon: <Mail className="w-6 h-6" />
              },
              {
                step: "3",
                title: "Personal follow-up",
                description: "We contact you directly via email or phone to share additional materials, answer your questions, and understand your interests.",
                icon: <Users className="w-6 h-6" />
              },
              {
                step: "4",
                title: "Due diligence",
                description: "We review the project together in detail: roadmap, business model, risks, structure, timelines, and expected milestones.",
                icon: <FileText className="w-6 h-6" />
              },
              {
                step: "5",
                title: "Offline agreements (if applicable)",
                description: "If both sides agree to proceed after thorough discussion, any participation is formalized offline through proper legal documentation, separate from this website.",
                icon: <Shield className="w-6 h-6" />
              },
              {
                step: "6",
                title: "Updates & growth",
                description: "You receive periodic updates, milestone notifications, and insights as projects progress and develop over time.",
                icon: <TrendingUp className="w-6 h-6" />
              }
            ].map((item, index) => (
              <Card key={index} className="border border-border/50 bg-card hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-6 pb-6">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-xl font-bold text-primary">{item.step}</span>
                      </div>
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-3">
                        <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                        <div className="text-primary">{item.icon}</div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What This Website Is/Is Not Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            {t('forInvestors.whatThisIs')} / {t('forInvestors.whatThisIsNot')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* This Website IS */}
            <Card className="border border-primary/30 bg-card">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                  {t('forInvestors.whatThisIs')}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  "An informational overview of Digital Invest projects",
                  "A way to request more information privately",
                  "A resource to understand the portfolio structure"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-foreground leading-relaxed">{item}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* This Website is NOT */}
            <Card className="border border-border/50 bg-card">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground flex items-center gap-3">
                  <X className="w-6 h-6 text-muted-foreground" />
                  {t('forInvestors.whatThisIsNot')}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  "Not a crowdfunding platform or public offering",
                  "Not a place to transact or invest online",
                  "Not a source of investment, legal, or tax advice",
                  "Not creating any commitments or agreements"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground leading-relaxed">{item}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact / Next Steps Section */}
      <section className="py-24 px-4 bg-card/30">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {t('forInvestors.nextSteps')}
          </h2>
          
          <Card className="border border-border/50 bg-card">
            <CardContent className="pt-8 pb-8">
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                To learn more, review the projects and submit a non-binding request for private information. We will follow up privately to discuss your interests and answer questions.
              </p>
              
              <Link to="/projects">
                <Button size="lg" className="px-10 py-6 text-base">
                  View Projects
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Legal Disclaimer */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <InvestorPageDisclaimer />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ForInvestors;
