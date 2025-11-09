import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Rocket,
  Lightbulb,
  Target,
  Sparkles,
  Users,
  TrendingUp,
  Shield,
  Brain,
  Microscope,
  Dna,
  Cpu,
  DollarSign,
  Plane,
  Activity,
  Database,
  Zap,
  ArrowRight,
  TrendingUp as Growth,
  Heart,
  Calendar,
} from "lucide-react";
import CrowdfundingProjectCard from "@/components/CrowdfundingProjectCard";
import biomathPlatform from "@/assets/biomath-platform.jpg";
import investmentDashboard from "@/assets/investment-dashboard.jpg";
import mathModeling from "@/assets/math-modeling-visual.jpg";
import biotechViz from "@/assets/biotech-visualization.jpg";

const Index = () => {
  const projects = [
    {
      title: "BioMath Life Platform",
      description:
        "Revolutionary precision medicine platform combining advanced mathematical modeling with AI-driven diagnostics for personalized treatment solutions.",
      targetAmount: "$5,000,000",
      currentAmount: "$3,200,000",
      progress: 64,
      backers: 1847,
      daysLeft: 45,
      category: "Healthcare Tech",
      link: "/projects/biomathlife",
      image: biomathPlatform,
      gradient: "bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20",
      features: [
        { icon: <Brain className="h-4 w-4" />, label: "AI-Powered Diagnostics" },
        { icon: <Activity className="h-4 w-4" />, label: "Real-time Health Monitoring" },
        { icon: <Dna className="h-4 w-4" />, label: "Genomic Integration" },
      ],
    },
    {
      title: "BioMath Core",
      description:
        "Advanced mathematical modeling engine for biological systems, enabling breakthrough research in drug development and disease understanding.",
      targetAmount: "$3,500,000",
      currentAmount: "$2,100,000",
      progress: 60,
      backers: 923,
      daysLeft: 60,
      category: "Research Tech",
      link: "/projects/biomathcore",
      image: mathModeling,
      gradient: "bg-gradient-to-br from-tech/20 via-innovation/20 to-success/20",
      features: [
        { icon: <Microscope className="h-4 w-4" />, label: "Cellular-Level Modeling" },
        { icon: <Database className="h-4 w-4" />, label: "Drug Interaction Simulation" },
        { icon: <TrendingUp className="h-4 w-4" />, label: "Disease Progression Prediction" },
      ],
    },
    {
      title: "TerraAero",
      description:
        "Next-generation aerospace technology focused on sustainable aviation and advanced materials for the future of flight.",
      targetAmount: "$8,000,000",
      currentAmount: "$4,800,000",
      progress: 60,
      backers: 1256,
      daysLeft: 38,
      category: "Aerospace",
      link: "/projects/terraaero",
      image: biotechViz,
      gradient: "bg-gradient-to-br from-accent/20 via-warning/20 to-primary/20",
      features: [
        { icon: <Plane className="h-4 w-4" />, label: "Sustainable Aviation Technology" },
        { icon: <Cpu className="h-4 w-4" />, label: "Advanced Materials Research" },
        { icon: <Zap className="h-4 w-4" />, label: "Flight Efficiency Optimization" },
      ],
    },
    {
      title: "Digital Invest Inc. Platform",
      description:
        "Comprehensive investment platform providing strategic funding, mentorship, and resources for breakthrough innovations.",
      targetAmount: "$10,000,000",
      currentAmount: "$7,500,000",
      progress: 75,
      backers: 2341,
      daysLeft: 52,
      category: "Investment Platform",
      link: "/projects/digital-invest",
      image: investmentDashboard,
      gradient: "bg-gradient-to-br from-secondary/20 via-primary/20 to-success/20",
      features: [
        { icon: <DollarSign className="h-4 w-4" />, label: "Strategic Investment Portfolio" },
        { icon: <Users className="h-4 w-4" />, label: "Expert Mentorship Network" },
        { icon: <Growth className="h-4 w-4" />, label: "Growth Acceleration Programs" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background corporate-pattern">
      <Navigation />

      {/* Dynamic Animated Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 h-[600px] w-[600px] rounded-full bg-primary/10 blur-[120px] animate-subtle-float" />
        <div className="absolute bottom-1/4 -right-1/4 h-[600px] w-[600px] rounded-full bg-secondary/10 blur-[120px] animate-subtle-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] rounded-full bg-accent/8 blur-[100px] animate-subtle-float" style={{ animationDelay: '4s' }} />
        <div className="absolute top-3/4 left-1/4 h-[400px] w-[400px] rounded-full bg-tech/8 blur-[100px] animate-subtle-float" style={{ animationDelay: '1s' }} />
      </div>

      {/* Hero Section - Modern Crowdfunding Style */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="container mx-auto text-center space-y-10 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 border border-primary/30 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-primary animate-pulse" />
            <span className="text-sm font-semibold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Fund Tomorrow's Breakthrough Innovations
            </span>
            <Sparkles className="h-4 w-4 text-accent animate-pulse" />
          </div>
          
          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-black leading-[1.1] tracking-tight">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-rainbow-pulse">
              Back the Future
            </span>
            <br />
            <span className="text-foreground">You Believe In</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
            Join thousands of forward-thinking investors funding revolutionary projects in 
            <span className="text-primary font-semibold"> healthcare</span>, 
            <span className="text-secondary font-semibold"> aerospace</span>, and 
            <span className="text-accent font-semibold"> emerging technologies</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-5 justify-center pt-8">
            <Button
              asChild
              size="lg"
              className="h-14 px-8 bg-gradient-to-r from-primary via-secondary to-primary-light hover:shadow-glow text-base font-semibold group"
            >
              <Link to="/start-investing">
                <Rocket className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                Start Investing Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="h-14 px-8 border-2 border-primary/40 hover:bg-primary/10 hover:border-primary/60 text-base font-semibold backdrop-blur-sm"
            >
              <Link to="/partnerships">
                <Users className="mr-2 h-5 w-5" />
                Become a Partner
              </Link>
            </Button>
          </div>

          {/* Stats Bar */}
          <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { value: "$18.6M", label: "Total Funded", icon: <DollarSign className="h-5 w-5" /> },
              { value: "6,367", label: "Active Backers", icon: <Users className="h-5 w-5" /> },
              { value: "4", label: "Live Projects", icon: <Rocket className="h-5 w-5" /> },
              { value: "67%", label: "Avg. Success Rate", icon: <TrendingUp className="h-5 w-5" /> },
            ].map((stat, i) => (
              <div key={i} className="text-center space-y-2 group">
                <div className="flex justify-center text-primary group-hover:text-secondary transition-colors">
                  {stat.icon}
                </div>
                <p className="text-3xl md:text-4xl font-bold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Projects Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 border border-success/30">
              <div className="h-2 w-2 rounded-full bg-success animate-pulse" />
              <span className="text-sm font-semibold text-success">Live Funding Campaigns</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black">
              <span className="text-foreground">Explore </span>
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Active Projects
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Back groundbreaking innovations and be part of the next generation of technological breakthroughs
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8 animate-fade-in">
            {projects.map((project, index) => (
              <CrowdfundingProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 px-6 relative">
        <div className="container mx-auto space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-6 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-black">
              <span className="text-foreground">Why Back With </span>
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Digital Invest Inc.
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Join a community of innovators and investors shaping the future of technology
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="h-10 w-10" />,
                title: "Vetted & Verified",
                description:
                  "Every project undergoes comprehensive due diligence by our team of industry experts and technical advisors",
                color: "from-primary to-primary-light",
              },
              {
                icon: <Users className="h-10 w-10" />,
                title: "Thriving Community",
                description:
                  "Connect with 6,000+ active investors, founders, and innovators in our exclusive network",
                color: "from-secondary to-secondary-light",
              },
              {
                icon: <TrendingUp className="h-10 w-10" />,
                title: "Transparent Progress",
                description:
                  "Real-time updates, detailed milestones, and comprehensive reporting keep you informed every step",
                color: "from-accent to-accent-light",
              },
              {
                icon: <Lightbulb className="h-10 w-10" />,
                title: "Early Access",
                description:
                  "Get exclusive first access to groundbreaking technologies before they reach the mainstream market",
                color: "from-success to-success-light",
              },
              {
                icon: <Target className="h-10 w-10" />,
                title: "Strategic Support",
                description:
                  "Beyond funding - we provide mentorship, resources, and strategic guidance to ensure project success",
                color: "from-warning to-warning-light",
              },
              {
                icon: <Zap className="h-10 w-10" />,
                title: "Fast & Secure",
                description:
                  "Streamlined investment process with bank-level security and compliance, powered by cutting-edge technology",
                color: "from-info to-info-light",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-2xl border border-border/40 bg-card/40 backdrop-blur-sm hover:bg-card/60 transition-all duration-500 hover:border-primary/40 hover:shadow-elevated overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className={`relative inline-flex p-3 rounded-xl bg-gradient-to-br ${item.color} text-background mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-tech`}>
                  {item.icon}
                </div>
                
                {/* Content */}
                <div className="relative space-y-3">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Corner Accent */}
                <div className="absolute -bottom-8 -right-8 h-24 w-24 rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <div className="relative rounded-3xl border-2 border-primary/30 bg-gradient-to-br from-card/80 via-card/60 to-card/80 backdrop-blur-xl p-16 md:p-20 text-center space-y-10 overflow-hidden shadow-elevated">
            {/* Animated Background Elements */}
            <div className="absolute top-0 left-1/4 h-64 w-64 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-0 right-1/4 h-64 w-64 bg-secondary/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
            
            <div className="relative space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 border border-primary/40 backdrop-blur-sm">
                <Rocket className="h-4 w-4 text-primary" />
                <span className="text-sm font-semibold text-foreground">Launch Your Investment Journey</span>
              </div>

              {/* Heading */}
              <h2 className="text-5xl md:text-6xl font-black leading-tight">
                <span className="text-foreground">Ready to Fund </span>
                <br />
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Tomorrow's Innovations?
                </span>
              </h2>

              {/* Description */}
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
                Join 6,000+ investors who are already backing the future. Start with as little as $100 and be part of something extraordinary.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-5 justify-center pt-8">
                <Button
                  asChild
                  size="lg"
                  className="h-16 px-10 bg-gradient-to-r from-primary via-primary-light to-secondary hover:shadow-glow text-lg font-bold group shadow-tech"
                >
                  <Link to="/start-investing">
                    <Target className="mr-3 h-6 w-6 group-hover:rotate-90 transition-transform duration-300" />
                    Start Investing Now
                    <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
                  </Link>
                </Button>
                <Button 
                  asChild 
                  size="lg" 
                  variant="outline" 
                  className="h-16 px-10 border-2 border-primary/40 hover:bg-primary/10 hover:border-primary/60 text-lg font-bold backdrop-blur-sm"
                >
                  <Link to="/partnerships">
                    <Users className="mr-3 h-6 w-6" />
                    Partner With Us
                  </Link>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="pt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-success" />
                  <span>SEC Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-warning" />
                  <span>Instant Verification</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-info" />
                  <span>6,367 Active Investors</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
