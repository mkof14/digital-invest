import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
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
  Clock,
  Target,
  Lightbulb,
  Rocket,
  Award,
  BarChart3
} from "lucide-react";
import InvestorPageDisclaimer from '@/components/InvestorPageDisclaimer';

const ForInvestors = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
          <Badge variant="secondary" className="mb-4 px-6 py-3 text-base">
            <Target className="w-4 h-4 mr-2 inline" />
            Investment Opportunities
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold">
            <span className="block text-foreground mb-3">Partner With</span>
            <span className="block gradient-blue-animated">Real Innovation</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Explore structured opportunities in real-economy, AI, manufacturing, and health-technology projects across the United States.
          </p>
          <div className="flex flex-wrap gap-4 justify-center pt-6">
            <Link to="/projects">
              <Button size="lg" className="px-10 py-6 text-lg hover:scale-105 transition-all duration-300">
                Explore Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/schedule">
              <Button variant="outline" size="lg" className="px-10 py-6 text-lg hover:scale-105 transition-all duration-300">
                Schedule Consultation
                <Clock className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-card/30 border-y border-border/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "5+", label: "Active Projects", icon: <Rocket className="w-6 h-6" /> },
              { value: "Multi", label: "Sector Focus", icon: <Target className="w-6 h-6" /> },
              { value: "Long-term", label: "Investment Horizon", icon: <TrendingUp className="w-6 h-6" /> },
              { value: "USA", label: "Operations Base", icon: <Building2 className="w-6 h-6" /> }
            ].map((stat, index) => (
              <div key={index} className="text-center space-y-3 group hover:scale-105 transition-all duration-300">
                <div className="flex justify-center mb-2">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <div className="text-primary">{stat.icon}</div>
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Digital Invest Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-orange-animated">Why Digital Invest?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A focused approach to real-economy innovation with operational excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Lightbulb className="w-8 h-8" />,
                title: "Real-World Impact",
                description: "Projects focused on tangible value creation in manufacturing, health, food, and infrastructure sectors.",
                gradient: "from-blue-500/10 to-primary/10"
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Proven Leadership",
                description: "Decades of experience building and scaling technology platforms with successful exits and operational track records.",
                gradient: "from-orange-500/10 to-primary/10"
              },
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: "Structured Growth",
                description: "Long-term approach with clear roadmaps, milestone tracking, and transparent communication throughout the journey.",
                gradient: "from-purple-500/10 to-primary/10"
              }
            ].map((item, index) => (
              <Card 
                key={index} 
                className="group border border-border/50 bg-card hover:shadow-elevated hover:-translate-y-2 transition-all duration-300"
              >
                <CardContent className="pt-8 pb-8 space-y-4">
                  <div className={`p-4 bg-gradient-to-br ${item.gradient} rounded-lg w-fit group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-primary">{item.icon}</div>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Work With Section */}
      <section className="py-24 px-4 bg-card/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-purple-animated">Ideal Partners</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              We work with sophisticated investors who think long-term
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { 
                icon: <Briefcase className="w-7 h-7" />, 
                title: "Entrepreneurs & Operators",
                description: "Business builders who understand operational complexity and real-world execution"
              },
              { 
                icon: <TrendingUp className="w-7 h-7" />, 
                title: "Long-Term Private Investors",
                description: "Patient capital focused on sustainable growth over extended time horizons"
              },
              { 
                icon: <Building2 className="w-7 h-7" />, 
                title: "Family Offices",
                description: "Multi-generational wealth managers seeking diversified real-economy exposure"
              },
              { 
                icon: <Users className="w-7 h-7" />, 
                title: "Strategic Partners",
                description: "Industry experts and advisors interested in AI and real-economy innovation"
              }
            ].map((item, index) => (
              <Card 
                key={index} 
                className="border border-border/50 bg-card hover:border-primary/50 hover:shadow-lg transition-all duration-300 group"
              >
                <CardContent className="pt-6 pb-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors flex-shrink-0">
                      <div className="text-primary">{item.icon}</div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Your Path as an Investor Section */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-blue-animated">Your Investment Journey</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              A clear, transparent process from exploration to partnership
            </p>
          </div>
          
          <div className="space-y-6">
            {[
              {
                step: "1",
                title: "Explore Projects",
                description: "Review detailed project pages covering health, agriculture, food production, and infrastructure. Access roadmaps, business models, and technical documentation.",
                icon: <Search className="w-6 h-6" />,
                color: "bg-blue-500/10 text-blue-500"
              },
              {
                step: "2",
                title: "Request Information",
                description: "Submit a non-binding inquiry through our secure form. No commitment required, completely private, and no payment necessary at this stage.",
                icon: <Mail className="w-6 h-6" />,
                color: "bg-orange-500/10 text-orange-500"
              },
              {
                step: "3",
                title: "Personal Discussion",
                description: "Direct follow-up via email or phone call. We share additional materials, answer your specific questions, and understand your investment criteria.",
                icon: <Users className="w-6 h-6" />,
                color: "bg-purple-500/10 text-purple-500"
              },
              {
                step: "4",
                title: "Due Diligence",
                description: "Comprehensive review of project fundamentals: roadmap, business model, risk factors, organizational structure, timelines, and milestone targets.",
                icon: <FileText className="w-6 h-6" />,
                color: "bg-green-500/10 text-green-500"
              },
              {
                step: "5",
                title: "Legal Documentation",
                description: "If both parties agree to proceed, participation is formalized through proper legal agreements offline, independent of this website.",
                icon: <Shield className="w-6 h-6" />,
                color: "bg-red-500/10 text-red-500"
              },
              {
                step: "6",
                title: "Ongoing Updates",
                description: "Regular communication with milestone notifications, progress reports, and insights as projects develop and achieve key objectives.",
                icon: <TrendingUp className="w-6 h-6" />,
                color: "bg-indigo-500/10 text-indigo-500"
              }
            ].map((item, index) => (
              <Card 
                key={index} 
                className="border border-border/50 bg-card hover:shadow-elevated hover:border-primary/50 transition-all duration-300 group overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary/50 to-primary/0 group-hover:w-2 transition-all duration-300" />
                <CardContent className="pt-8 pb-8 pl-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className={`w-14 h-14 rounded-full ${item.color} flex items-center justify-center font-bold text-xl group-hover:scale-110 transition-transform duration-300`}>
                        {item.step}
                      </div>
                    </div>
                    <div className="flex-1 space-y-3">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="text-2xl font-bold text-foreground">{item.title}</h3>
                        <div className={`p-2 ${item.color} rounded-lg`}>
                          {item.icon}
                        </div>
                      </div>
                      <p className="text-base text-muted-foreground leading-relaxed">
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

      {/* What You Can Expect Section */}
      <section className="py-24 px-4 bg-card/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-orange-animated">What You Receive</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive support and transparency throughout your journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { text: "Direct access to project overviews and strategic roadmaps", icon: <FileText className="w-5 h-5" /> },
              { text: "Clear explanation of business logic and operational details", icon: <Lightbulb className="w-5 h-5" /> },
              { text: "Structured risk overview and mitigation strategies", icon: <Shield className="w-5 h-5" /> },
              { text: "Personal calls and dedicated Q&A sessions", icon: <Users className="w-5 h-5" /> },
              { text: "Professional offline legal agreements when applicable", icon: <Award className="w-5 h-5" /> },
              { text: "Regular project updates and milestone tracking", icon: <TrendingUp className="w-5 h-5" /> }
            ].map((item, index) => (
              <Card 
                key={index} 
                className="border border-border/50 bg-card hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
              >
                <CardContent className="pt-6 pb-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <div className="text-primary">{item.icon}</div>
                    </div>
                    <p className="text-base text-foreground leading-relaxed font-medium">{item.text}</p>
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
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-purple-animated">Clear Expectations</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Understanding our platform and its purpose
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* This Website IS */}
            <Card className="border-2 border-primary/30 bg-card hover:shadow-elevated hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  This Platform IS
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  "An informational showcase of Digital Invest projects",
                  "A secure channel to request additional information",
                  "A comprehensive resource for portfolio structure understanding",
                  "A gateway to personal consultations and discussions"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 group">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <p className="text-foreground leading-relaxed font-medium">{item}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* This Website is NOT */}
            <Card className="border border-border/50 bg-card hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground flex items-center gap-3">
                  <div className="p-2 bg-muted rounded-lg">
                    <X className="w-6 h-6 text-muted-foreground" />
                  </div>
                  This Platform is NOT
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  "Not a crowdfunding platform or public securities offering",
                  "Not a transactional platform for online investments",
                  "Not providing investment, legal, or tax advisory services",
                  "Not creating any binding commitments or agreements"
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

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-primary/10 via-background to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Ready to Explore Opportunities?
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Review our portfolio of real-economy and AI-driven projects. Submit a non-binding inquiry to receive detailed information and schedule a private consultation.
          </p>
          
          <div className="flex flex-wrap gap-6 justify-center pt-6">
            <Link to="/projects">
              <Button size="lg" className="px-12 py-7 text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                View All Projects
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </Link>
            <Link to="/schedule">
              <Button variant="outline" size="lg" className="px-12 py-7 text-lg hover:scale-105 transition-all duration-300">
                Schedule Consultation
                <Clock className="ml-3 h-6 w-6" />
              </Button>
            </Link>
          </div>

          <Card className="mt-12 border border-border/50 bg-card/50 backdrop-blur">
            <CardContent className="pt-8 pb-8">
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">Private & Confidential</span>
                </div>
                <div className="hidden md:block w-px h-6 bg-border" />
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">No Commitment Required</span>
                </div>
                <div className="hidden md:block w-px h-6 bg-border" />
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">Personal Follow-up</span>
                </div>
              </div>
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
