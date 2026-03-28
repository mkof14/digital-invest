import { useTranslation } from 'react-i18next';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
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
  Plane,
  Truck,
  MapPin,
  Cpu,
  GraduationCap,
  Settings,
  FileCheck,
  Network,
  Factory,
  Zap,
  Eye,
  Download,
  Share2,
  Mail,
  FileText
} from "lucide-react";
import agronLogo from "@/assets/agron-logo.png";
import agronHero from "@/assets/projects/agron-hero.jpg";
import agronInfographic from "@/assets/projects/agron-infographic.jpeg";
import DownloadInvestorBriefButton from "@/components/DownloadInvestorBriefButton";
import OptimizedImage from "@/components/OptimizedImage";
import InvestorPageDisclaimer from "@/components/InvestorPageDisclaimer";
import { InfographicsGallery } from "@/components/InfographicsGallery";
import { useToast } from "@/hooks/use-toast";

const AGRON = () => {
  const { toast } = useToast();

  const infographics = [
    {
      src: agronInfographic,
      title: "AGRON: The Future of Robotics & Drone Workforce Development",
      alt: "AGRON integrated framework and training to career model infographic"
    }
  ];

  const handleSharePresentation = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title: "AGRON — Robotics Operations Network", url: window.location.href });
      } catch {}
    } else {
      await navigator.clipboard.writeText(window.location.href);
      toast({ title: "Link copied!", description: "Share link copied to clipboard" });
    }
  };

  const handleEmailPresentation = () => {
    const subject = encodeURIComponent("AGRON — The Robotics Operations Network Presentation");
    const body = encodeURIComponent(`Check out the AGRON presentation:\n\n${window.location.href}`);
    window.open(`mailto:?subject=${subject}&body=${body}`, "_self");
  };

  return (
    <div className="min-h-screen bg-background theme-agron">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="relative py-32 -mx-4 px-4 overflow-hidden mb-16">
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url(${agronHero})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[hsl(210,30%,8%)]/98 via-background/95 to-background/70" />
          </div>

          <div className="relative z-10 max-w-4xl">
            <Link to="/projects" className="animate-fade-in">
              <Button variant="ghost" size="sm" className="mb-6 hover:bg-background/80">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Projects
              </Button>
            </Link>
            <div className="animate-fade-in" style={{ animationDelay: '0.1s', animationFillMode: 'backwards' }}>
              <div className="flex items-center gap-6 mb-8">
              <OptimizedImage 
                src={agronLogo} 
                alt="AGRON logo" 
                className="w-20 h-20 md:w-24 md:h-24 object-contain rounded-lg"
                showSkeleton={false}
              />
              <div>
                <Badge className="mb-2 project-badge">Robotics Infrastructure</Badge>
                <h1 className="text-4xl md:text-5xl font-bold project-glow-text">
                  AGRON
                </h1>
                <p className="text-lg text-muted-foreground mt-1">
                  Aerial–Ground Robotics Operations Network
                </p>
              </div>
            </div>
            <p className="text-2xl text-foreground mb-4">
              National Infrastructure Platform
            </p>
            <p className="text-xl text-muted-foreground max-w-3xl mb-8">
              A national-scale infrastructure platform for autonomous aerial and ground robotics — 
              training, certification, operations, and standards across the United States.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link to="/start-investing">
                <Button size="lg">
                  Request Information
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <DownloadInvestorBriefButton projectSlug="agron" size="lg" />
            </div>
            </div>
          </div>
        </section>

        {/* Positioning Statement */}
        <section className="mb-16 -mt-8">
          <Card className="border-primary/20 shadow-lg bg-primary/5">
            <CardContent className="pt-8 text-center">
              <p className="text-2xl font-semibold text-primary">
                AGRON is not a robotics startup.
              </p>
              <p className="text-2xl font-semibold text-foreground mt-2">
                AGRON is national infrastructure.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Overview */}
        <section className="mb-16">
          <Card className="border-primary/20 shadow-lg">
            <CardContent className="pt-8 space-y-4">
              <h2 className="text-3xl font-bold mb-4">Overview</h2>
              <p className="text-lg leading-relaxed">
                AGRON (Aerial–Ground Robotics Operations Network) is a national-scale infrastructure platform 
                designed to support the training, certification, coordination, and real-world operation of 
                autonomous aerial and ground robotic systems across the United States.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                AGRON is not a hardware manufacturer and does not produce drones or robots. Its role is to act 
                as the operational, educational, and regulatory interface between autonomous technologies, 
                human operators, enterprises, and government institutions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The project combines physical training and operations centers, advanced simulation environments, 
                AI-assisted instruction, and a standardized operational framework into a unified national network.
              </p>
              <div className="bg-muted/50 rounded-lg p-6 mt-6">
                <p className="text-lg font-medium text-foreground">
                  AGRON is positioned as a long-term infrastructure asset rather than a short-term technology product.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        <div className="project-section-divider my-12" />

        {/* Core Mission */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Core Mission</h2>
          <Card className="project-card">
            <CardContent className="pt-8">
              <div className="flex items-start gap-6">
                <Target className="w-16 h-16 text-primary flex-shrink-0" />
                <p className="text-xl leading-relaxed">
                  To build a trusted national system that enables safe, scalable, and standardized deployment 
                  of autonomous aerial and ground robotic systems for commercial, governmental, and defense applications.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        <div className="project-section-divider my-12" />

        {/* Problems Addressed */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Core Problems Addressed</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="project-card">
              <CardHeader>
                <Users className="w-10 h-10 project-icon mb-2" />
                <CardTitle>Operator Shortage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Rapid growth of autonomous systems without sufficient trained operators to operate them safely.
                </p>
              </CardContent>
            </Card>

            <Card className="project-card">
              <CardHeader>
                <FileCheck className="w-10 h-10 project-icon mb-2" />
                <CardTitle>Fragmented Standards</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Fragmented and inconsistent training standards across the industry.
                </p>
              </CardContent>
            </Card>

            <Card className="project-card">
              <CardHeader>
                <Settings className="w-10 h-10 project-icon mb-2" />
                <CardTitle>Framework Gap</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Lack of unified certification and operational frameworks for autonomous systems.
                </p>
              </CardContent>
            </Card>

            <Card className="project-card">
              <CardHeader>
                <Shield className="w-10 h-10 project-icon mb-2" />
                <CardTitle>High Risk Environment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  High operational and regulatory risk for government and enterprise users.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <div className="project-section-divider my-12" />

        {/* AGRON Solution */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">AGRON Solution</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="project-card">
              <CardHeader>
                <GraduationCap className="w-10 h-10 project-icon mb-2" />
                <CardTitle>Training & Certification</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Standardized training and certification for aerial and ground robotics operators.
                </p>
              </CardContent>
            </Card>

            <Card className="project-card">
              <CardHeader>
                <Cpu className="w-10 h-10 project-icon mb-2" />
                <CardTitle>AI-Assisted Education</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Simulation-first education with AI-assisted instructors and real-time analytics.
                </p>
              </CardContent>
            </Card>

            <Card className="project-card">
              <CardHeader>
                <Settings className="w-10 h-10 project-icon mb-2" />
                <CardTitle>Ops-as-a-Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Real-world operational support and mission coordination for enterprise and government.
                </p>
              </CardContent>
            </Card>

            <Card className="project-card">
              <CardHeader>
                <Network className="w-10 h-10 project-icon mb-2" />
                <CardTitle>National Network</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Scalable national network of specialized operational nodes across the U.S.
                </p>
              </CardContent>
            </Card>

            <Card className="project-card">
              <CardHeader>
                <FileCheck className="w-10 h-10 project-icon mb-2" />
                <CardTitle>Standards Framework</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Long-term standards and licensing framework for autonomous operations.
                </p>
              </CardContent>
            </Card>

            <Card className="project-card">
              <CardHeader>
                <Zap className="w-10 h-10 project-icon mb-2" />
                <CardTitle>Evolution Path</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  AGRON evolves from education → operations → national infrastructure.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <div className="project-section-divider my-12" />

        {/* Key Domains */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Key Domains Covered</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="project-card">
              <CardHeader>
                <Plane className="w-12 h-12 project-icon mb-4" />
                <CardTitle>Aerial Robotics</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Drones and UAS
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    BVLOS operations
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Swarm and coordinated flight
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Inspection, delivery, ISR
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Emergency response
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="project-card">
              <CardHeader>
                <Truck className="w-12 h-12 project-icon mb-4" />
                <CardTitle>Ground Robotics</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Unmanned ground vehicles (UGV)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Mobile robotic platforms
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Logistics and security
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Infrastructure monitoring
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Autonomous systems
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="project-card">
              <CardHeader>
                <Network className="w-12 h-12 project-icon mb-4" />
                <CardTitle>Combined Operations</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Coordinated air-ground missions
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Shared command and control
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Integrated simulation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Real-world execution
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <div className="project-section-divider my-12" />

        {/* Service Phases */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Core Services by Phase</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-primary/20 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 to-primary" />
              <CardHeader>
                <Badge className="w-fit mb-2">Phase 1</Badge>
                <CardTitle>Training & Certification</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• UAS operator training (basic and advanced)</li>
                  <li>• Ground robotics operator training</li>
                  <li>• Combined air–ground mission training</li>
                  <li>• Simulation-based instruction</li>
                  <li>• AGRON internal certification framework</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary/20 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/80" />
              <CardHeader>
                <Badge className="w-fit mb-2">Phase 2</Badge>
                <CardTitle>Operations & Platform</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Ops-as-a-Service (operators + systems + AI)</li>
                  <li>• Mission planning and execution</li>
                  <li>• Command and control dashboards</li>
                  <li>• Fleet coordination</li>
                  <li>• Compliance reporting</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary/20 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/80 to-primary/50" />
              <CardHeader>
                <Badge className="w-fit mb-2">Phase 3</Badge>
                <CardTitle>System & Standards</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• National certification programs</li>
                  <li>• Government workforce development</li>
                  <li>• Standards licensing</li>
                  <li>• International pilot programs</li>
                  <li>• Allied partner integration</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <div className="project-section-divider my-12" />

        {/* Target Clients */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Target Clients</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="project-card">
              <CardHeader>
                <Building2 className="w-12 h-12 project-icon mb-4" />
                <CardTitle>Government & Public Sector</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Federal agencies</li>
                  <li>• State and local governments</li>
                  <li>• Emergency services (EMS, police, fire)</li>
                  <li>• Infrastructure and transportation authorities</li>
                  <li>• Defense and security organizations</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="project-card">
              <CardHeader>
                <Factory className="w-12 h-12 project-icon mb-4" />
                <CardTitle>Enterprise & B2B</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Agriculture</li>
                  <li>• Energy and utilities</li>
                  <li>• Construction and infrastructure</li>
                  <li>• Logistics and supply chain</li>
                  <li>• Industrial and inspection services</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="project-card">
              <CardHeader>
                <Shield className="w-12 h-12 project-icon mb-4" />
                <CardTitle>Defense & Advanced Programs</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Defense contractors</li>
                  <li>• Simulation and doctrine programs</li>
                  <li>• Advanced robotics training</li>
                  <li>• Restricted and secure operations</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <div className="project-section-divider my-12" />

        {/* Network Structure */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Initial U.S. Network</h2>
          <p className="text-lg text-muted-foreground mb-8">
            AGRON operates as a distributed national network of specialized nodes. Each node may include 
            training facilities, simulation labs, operational command rooms, robotics labs, and certification areas.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="project-card">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-primary" />
                  <Badge variant="outline">NODE-01</Badge>
                </div>
                <CardTitle className="mt-4">Dallas–Fort Worth, TX</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Primary operations and training node
                </p>
              </CardContent>
            </Card>

            <Card className="project-card">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-primary" />
                  <Badge variant="outline">NODE-02</Badge>
                </div>
                <CardTitle className="mt-4">Phoenix, AZ</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Testing, simulation, and autonomous systems node
                </p>
              </CardContent>
            </Card>

            <Card className="project-card">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-primary" />
                  <Badge variant="outline">NODE-03</Badge>
                </div>
                <CardTitle className="mt-4">Raleigh–Durham, NC</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Training, certification, and research node
                </p>
              </CardContent>
            </Card>

            <Card className="project-card">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-primary" />
                  <Badge variant="outline">NODE-04</Badge>
                </div>
                <CardTitle className="mt-4">San Diego, CA</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Defense and advanced simulation node
                </p>
              </CardContent>
            </Card>

            <Card className="project-card">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-primary" />
                  <Badge variant="outline">HQ</Badge>
                </div>
                <CardTitle className="mt-4">Washington, DC</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  National coordination, standards, and government relations
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <div className="project-section-divider my-12" />

        {/* Technology Stack */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Technology Stack</h2>
          <Card className="project-card">
            <CardContent className="pt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="flex items-start gap-3">
                  <Eye className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Simulation-first training environments</p>
                    <p className="text-sm text-muted-foreground">Advanced virtual training systems</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Cpu className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">AI-assisted instructors</p>
                    <p className="text-sm text-muted-foreground">Intelligent analytics and guidance</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Settings className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Command & control systems</p>
                    <p className="text-sm text-muted-foreground">Integrated operational dashboards</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FileCheck className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Compliance and reporting</p>
                    <p className="text-sm text-muted-foreground">Regulatory compliance tools</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Secure data frameworks</p>
                    <p className="text-sm text-muted-foreground">Enterprise-grade security</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                <p className="text-muted-foreground">
                  AGRON is technology-agnostic and does not depend on specific hardware vendors.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        <div className="project-section-divider my-12" />

        {/* Business Model */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Business Model</h2>
          <Card className="project-card">
            <CardContent className="pt-8">
              <p className="text-lg mb-6">Primary revenue streams:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-4 bg-muted/30 rounded-lg">
                  <p className="font-medium">Training & Certification</p>
                  <p className="text-sm text-muted-foreground">Programs and courses</p>
                </div>
                <div className="p-4 bg-muted/30 rounded-lg">
                  <p className="font-medium">Ops-as-a-Service</p>
                  <p className="text-sm text-muted-foreground">Contract operations</p>
                </div>
                <div className="p-4 bg-muted/30 rounded-lg">
                  <p className="font-medium">Government Programs</p>
                  <p className="text-sm text-muted-foreground">Grants and contracts</p>
                </div>
                <div className="p-4 bg-muted/30 rounded-lg">
                  <p className="font-medium">Enterprise Contracts</p>
                  <p className="text-sm text-muted-foreground">B2B infrastructure services</p>
                </div>
                <div className="p-4 bg-muted/30 rounded-lg">
                  <p className="font-medium">Platform Licensing</p>
                  <p className="text-sm text-muted-foreground">Simulation and standards</p>
                </div>
              </div>
              <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                <p className="text-foreground font-medium">
                  The model emphasizes recurring revenue and long-term contracts.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        <div className="project-section-divider my-12" />

        {/* Long-term Vision */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Long-Term Vision (5 Years)</h2>
          <Card className="project-card">
            <CardContent className="pt-8">
              <p className="text-lg mb-6">Within five years, AGRON is designed to become:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg">A national system of record for robotics operations</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg">A trusted workforce and certification infrastructure</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg">A key partner to government and enterprise</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg">A scalable platform with international applications</p>
                </div>
              </div>
              <div className="mt-8 p-6 bg-primary/10 rounded-lg text-center">
                <p className="text-xl font-semibold text-foreground">
                  AGRON is intended to function as a foundational layer of the future autonomous economy.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Investor Presentation */}
        <section className="mb-16">
          <div className="project-section-divider my-12" />
          <h2 className="text-3xl font-bold mb-8">Investor Presentation</h2>
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 via-background to-primary/10 overflow-hidden">
            <CardContent className="pt-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <FileText className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">AGRON — The Robotics Operations Network</h3>
                  <p className="text-muted-foreground">Complete investor presentation (PDF)</p>
                </div>
              </div>
              <div className="flex gap-3 flex-wrap">
                <a href="/documents/AGRON_The_Robotics_Operations_Network.pdf" download>
                  <Button className="gap-2">
                    <Download className="w-4 h-4" />
                    Download PDF
                  </Button>
                </a>
                <Button variant="outline" className="gap-2" onClick={handleSharePresentation}>
                  <Share2 className="w-4 h-4" />
                  Share
                </Button>
                <Button variant="outline" className="gap-2" onClick={handleEmailPresentation}>
                  <Mail className="w-4 h-4" />
                  Send
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Infographics */}
        <section className="mb-16">
          <div className="project-section-divider my-12" />
          <h2 className="text-3xl font-bold mb-8">Infographics</h2>
          <InfographicsGallery infographics={infographics} projectTitle="AGRON" />
        </section>

        {/* CTA */}
        <section className="mb-16">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
            <CardContent className="pt-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Interested in AGRON?</h2>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Contact us to learn more about investment opportunities and partnership programs.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Link to="/start-investing">
                  <Button size="lg">
                    Request Information
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <DownloadInvestorBriefButton projectSlug="agron" size="lg" />
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Legal Disclaimer */}
        <InvestorPageDisclaimer />
      </main>

      <Footer />
    </div>
  );
};

export default AGRON;
