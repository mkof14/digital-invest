import { useTranslation } from 'react-i18next';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  ArrowLeft,
  Globe,
  Target,
  CheckCircle2,
  Users,
  Building2,
  Shield,
  Cpu,
  Search,
  Briefcase,
  UserCheck,
  BarChart3,
  MessageSquare,
  FileText,
  Zap,
  Network,
  Bot
} from "lucide-react";
import agronworkHero from "@/assets/projects/agronwork-hero.jpg";
import DownloadInvestorBriefButton from "@/components/DownloadInvestorBriefButton";
import OptimizedImage from "@/components/OptimizedImage";
import InvestorPageDisclaimer from "@/components/InvestorPageDisclaimer";

const AGRONWork = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-background theme-agron">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="relative py-32 -mx-4 px-4 overflow-hidden mb-16">
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url(${agronworkHero})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
          </div>
          
          <div className="relative z-10 max-w-4xl">
            <Badge className="mb-4 bg-blue-500/20 text-blue-300 border-blue-500/30 text-sm px-4 py-1">
              Talent Platform
            </Badge>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 project-glow-text">
              AGRON Work
            </h1>
            
            <p className="text-2xl md:text-3xl text-blue-300 font-light mb-4">
              Autonomous Services Talent Platform
            </p>
            
            <p className="text-lg text-muted-foreground max-w-2xl mb-8 leading-relaxed">
              One simple platform for direct connection between employers and professionals in drones, robotics, AI, data, and automation.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg">
                  <Target className="w-5 h-5 mr-2" />
                  Submit Interest
                </Button>
              </Link>
              <DownloadInvestorBriefButton projectSlug="agron-work" />
              <a href="https://argon-work-agron-work-web.vercel.app" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="border-blue-500/30 hover:bg-blue-500/10">
                  <Globe className="w-5 h-5 mr-2" />
                  Visit Website
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Parent Company Notice */}
        <div className="text-center mb-12">
          <p className="text-muted-foreground">
            A portfolio project developed and operated by <strong>Digital Invest Inc.</strong>
          </p>
        </div>

        <div className="project-section-divider" />

        {/* Platform Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Network className="w-8 h-8 text-blue-400" />
            Platform Overview
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed text-lg">
                AGRON Work is a specialized hiring and talent platform designed for the autonomous services industry. It connects employers with verified professionals across drones, robotics, AI, data engineering, and automation sectors.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The platform features AI-powered match scoring, verified skill passports, direct hiring without intermediaries, and comprehensive job search with filters by employment type, location, and specialization.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Match Score', value: '91%', icon: BarChart3 },
                { label: 'Active Roles', value: '243', icon: Briefcase },
                { label: 'Fresh Matches', value: '24', icon: Zap },
                { label: 'Response SLA', value: '13h', icon: MessageSquare },
              ].map((stat) => (
                <Card key={stat.label} className="bg-card/50 border-blue-500/20 text-center p-4">
                  <stat.icon className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <div className="project-section-divider" />

        {/* Two Sides of the Market */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Users className="w-8 h-8 text-blue-400" />
            Two Sides of the Market
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card/50 border-blue-500/20 hover:border-blue-500/40 transition-all">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Building2 className="w-6 h-6 text-blue-400" />
                  I Am Hiring
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">
                  Post jobs, set requirements, and connect with verified specialists in the autonomous services industry.
                </p>
                <ul className="space-y-2">
                  {[
                    'Post jobs with detailed requirements',
                    'Receive targeted applications',
                    'Shortlist candidates with AI matching',
                    'Hire directly without middlemen',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-blue-500/20 hover:border-blue-500/40 transition-all">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Search className="w-6 h-6 text-blue-400" />
                  I Am Looking for Work
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">
                  Search jobs, filter by work type, and apply with one unified profile across all autonomous services roles.
                </p>
                <ul className="space-y-2">
                  {[
                    'Search across drone/robotics/AI domains',
                    'Filter by employment type and location',
                    'Build verified profile and resume',
                    'Apply directly to employers',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <div className="project-section-divider" />

        {/* Why This Platform */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Shield className="w-8 h-8 text-blue-400" />
            Why This Platform
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: UserCheck,
                title: 'Direct Hiring',
                description: 'Post jobs, receive applications, shortlist candidates, and hire without middlemen.',
              },
              {
                icon: FileText,
                title: 'Verified Skills',
                description: 'Skill passports, certifications, project history, and trust signals for better hiring quality.',
              },
              {
                icon: Zap,
                title: 'Simple Process',
                description: 'Clear onboarding, clear filters, and clear hiring status for both sides.',
              },
            ].map((feature) => (
              <Card key={feature.title} className="bg-card/50 border-blue-500/20 hover:border-blue-500/40 transition-all">
                <CardHeader>
                  <feature.icon className="w-8 h-8 text-blue-400 mb-2" />
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <div className="project-section-divider" />

        {/* How It Works */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Cpu className="w-8 h-8 text-blue-400" />
            How AGRON Work Works
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Create Account', description: 'Complete your profile and resume with verified credentials.' },
              { step: '02', title: 'Find Jobs', description: 'Use smart filters, match indicators, and role-level details.' },
              { step: '03', title: 'Apply Directly', description: 'Apply without intermediaries and track every stage.' },
              { step: '04', title: 'AI Tools', description: 'Improve match score and interview readiness with AI assistance.' },
            ].map((item) => (
              <Card key={item.step} className="bg-card/50 border-blue-500/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 text-6xl font-black text-blue-500/10 leading-none pr-2">
                  {item.step}
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <div className="project-section-divider" />

        {/* Key Capabilities */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Bot className="w-8 h-8 text-blue-400" />
            Key Capabilities
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'Search across drone/robotics/AI domains',
              'Save and compare target roles',
              'Build verified profile and resume',
              'Message employers directly',
              'Track applications and statuses',
              'AI match and cover-letter tools',
              'Skill passport verification',
              'Interview readiness scoring',
              'Employment type filters (full-time, contract, remote)',
            ].map((capability) => (
              <div key={capability} className="flex items-center gap-3 p-3 rounded-lg bg-card/30 border border-blue-500/10">
                <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
                <span className="text-sm text-muted-foreground">{capability}</span>
              </div>
            ))}
          </div>
        </section>

        <div className="project-section-divider" />

        {/* Investment Highlights */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Target className="w-8 h-8 text-blue-400" />
            Investment Highlights
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'First-mover in specialized autonomous services talent market',
              'AI-powered matching reduces hiring friction and time-to-fill',
              'Scalable SaaS model with network effects',
              'Directly integrated with AGRON ecosystem and training pipeline',
              'Growing demand for drone, robotics, and AI professionals',
              'Revenue from job postings, premium profiles, and enterprise subscriptions',
            ].map((highlight) => (
              <div key={highlight} className="flex items-start gap-3 p-4 rounded-lg bg-card/30 border border-blue-500/10">
                <ArrowRight className="w-5 h-5 text-blue-400 mt-0.5 shrink-0" />
                <span className="text-muted-foreground">{highlight}</span>
              </div>
            ))}
          </div>
        </section>

        <div className="project-section-divider" />

        {/* Risks */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Shield className="w-8 h-8 text-amber-400" />
            Risk Factors
          </h2>
          <div className="space-y-3">
            {[
              'Early-stage platform — user acquisition and retention timelines may vary',
              'Competition from general job platforms expanding into tech verticals',
              'Regulatory changes in employment and labor markets',
              'Market adoption depends on autonomous services industry growth',
              'No guaranteed returns — participation carries risk of capital loss',
              'Execution risk in scaling technology and operations simultaneously',
            ].map((risk) => (
              <div key={risk} className="flex items-start gap-3 p-3 rounded-lg bg-amber-500/5 border border-amber-500/10">
                <Shield className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                <span className="text-sm text-muted-foreground">{risk}</span>
              </div>
            ))}
          </div>
        </section>

        <div className="project-section-divider" />

        {/* CTA */}
        <section className="text-center py-16">
          <h2 className="text-3xl font-bold mb-4">Interested in AGRON Work?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Submitting interest is non-binding and does not create any agreement. All potential participation is discussed individually and offline.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link to="/contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                <Target className="w-5 h-5 mr-2" />
                Submit Interest
              </Button>
            </Link>
            <Link to="/projects">
              <Button variant="outline" size="lg">
                <ArrowLeft className="w-5 h-5 mr-2" />
                All Projects
              </Button>
            </Link>
          </div>
        </section>

        {/* Legal Disclaimer */}
        <InvestorPageDisclaimer />
      </main>

      <Footer />
    </div>
  );
};

export default AGRONWork;
