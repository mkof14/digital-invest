import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { ArrowLeft, Download, FileText, Images, ExternalLink } from 'lucide-react';
import { InfographicsGallery, type Infographic } from '@/components/InfographicsGallery';
import InvestorPageDisclaimer from '@/components/InvestorPageDisclaimer';

// Infographics
import agronInfographic from '@/assets/projects/agron-infographic.webp';
import agronInfographic2 from '@/assets/agron-infographic-2.webp';
import lunaInfographic from '@/assets/projects/luna-infographic.webp';
import savenInfographic from '@/assets/projects/saven-infographic.webp';
import terraaeroInfographic from '@/assets/projects/terraaero-infographic.webp';
import biomathInfographic1 from '@/assets/projects/biomath-core-infographic1.webp';
import biomathInfographic2 from '@/assets/projects/biomath-core-infographic2.webp';
import biomathInfographic3 from '@/assets/projects/biomath-core-infographic3.webp';

// Logos
import agronLogo from '@/assets/agron-logo.webp';
import lunaLogo from '@/assets/projects/luna-logo.webp';

interface DocumentItem {
  title: string;
  description: string;
  href: string;
  filename: string;
}

interface ProjectResources {
  slug: string;
  name: string;
  tagline: string;
  projectUrl: string;
  documents: DocumentItem[];
  infographics: Infographic[];
}

const projects: ProjectResources[] = [
  {
    slug: 'agron',
    name: 'AGRON',
    tagline: 'Aerial-Ground Robotics Operations Network',
    projectUrl: '/projects/agron',
    documents: [
      {
        title: 'AGRON: The Robotics Operations Network',
        description: 'Full investor presentation outlining the AGRON network model, training pipeline, and partner ecosystem.',
        href: '/documents/AGRON_The_Robotics_Operations_Network.pdf',
        filename: 'AGRON-The-Robotics-Operations-Network.pdf',
      },
      {
        title: 'The AGRON Network',
        description: 'Concise overview of AGRON-Net infrastructure: nodes, certifications and operator workflow.',
        href: '/documents/agron-network.pdf',
        filename: 'The-AGRON-Network.pdf',
      },
    ],
    infographics: [
      { src: agronInfographic, title: 'AGRON Network Overview', alt: 'AGRON network overview infographic' },
      { src: agronInfographic2, title: 'AGRON: The Aerial-Ground Robotics Operations Network Ecosystem', alt: 'AGRON Ecosystem: Education, Practical Operations, and Career Integration' },
    ],
  },
  {
    slug: 'luna-balance',
    name: 'LUNA Balance',
    tagline: 'Intelligence Layer for Women\'s Wellbeing',
    projectUrl: '/projects/luna-balance',
    documents: [
      {
        title: 'LUNA: Your Path to Self',
        description: 'Long-form presentation on LUNA\'s personal understanding system and biological intelligence engine.',
        href: '/documents/luna-self-understanding.pdf',
        filename: 'LUNA-Your-Path-to-Self.pdf',
      },
      {
        title: 'Luna: State Intelligence',
        description: 'Strategic overview of LUNA\'s four-layer data stack and partner-grade intelligence layer.',
        href: '/documents/luna-state-intelligence.pdf',
        filename: 'Luna-State-Intelligence.pdf',
      },
      {
        title: 'LUNA Balance — Investor Brief',
        description: 'Short investor-grade summary of the LUNA Balance product, market and roadmap.',
        href: '/documents/luna-balance-presentation.pdf',
        filename: 'LUNA-Balance-Presentation.pdf',
      },
    ],
    infographics: [
      { src: lunaInfographic, title: 'Luna: The Intelligence Layer for Women\'s Wellbeing', alt: 'Luna Balance architecture and intelligence layer infographic' },
    ],
  },
  {
    slug: 'saven',
    name: 'SAVEN',
    tagline: 'Infrastructure of Continuous Execution',
    projectUrl: '/projects/saven',
    documents: [
      {
        title: 'SAVEN: Infrastructure of Continuous Execution',
        description: 'Full SAVEN deck describing the operational backbone that turns intent into continuous delivery.',
        href: '/documents/SAVEN_Infrastructure_of_Continuous_Execution.pdf',
        filename: 'SAVEN-Infrastructure-of-Continuous-Execution.pdf',
      },
      {
        title: 'SAVEN Infrastructure',
        description: 'Condensed brief on SAVEN architecture, client model and operating principles.',
        href: '/documents/saven-infrastructure.pdf',
        filename: 'SAVEN-Infrastructure.pdf',
      },
    ],
    infographics: [
      { src: savenInfographic, title: 'SAVEN Infrastructure', alt: 'SAVEN infrastructure of continuous execution infographic' },
    ],
  },
  {
    slug: 'biomath-core',
    name: 'BioMath Core',
    tagline: 'Foundational Digital Health Architecture',
    projectUrl: '/projects/biomath-core',
    documents: [
      {
        title: 'BioMath Core — Architecture',
        description: 'Architectural overview of the BioMath Core platform powering 200+ planned ecosystem services.',
        href: '/documents/biomath-core-architecture.pdf',
        filename: 'BioMath-Core-Architecture.pdf',
      },
    ],
    infographics: [
      { src: biomathInfographic1, title: 'BioMath Core — Platform Overview', alt: 'BioMath Core platform overview infographic' },
      { src: biomathInfographic2, title: 'BioMath Core — Data Layer', alt: 'BioMath Core data layer infographic' },
      { src: biomathInfographic3, title: 'BioMath Core — Ecosystem', alt: 'BioMath Core ecosystem infographic' },
    ],
  },
  {
    slug: 'terraaero',
    name: 'TerraAero',
    tagline: 'Drone-Based Aerial Operations',
    projectUrl: '/projects/terraaero',
    documents: [
      {
        title: 'TerraAero — Investor One-Pager (VC Grade)',
        description: 'Concise VC-grade one-pager covering market, traction and unit economics.',
        href: '/documents/TERRAAERO-INVESTOR-ONE-PAGER-VC-GRADE.pdf',
        filename: 'TerraAero-Investor-One-Pager.pdf',
      },
    ],
    infographics: [
      { src: terraaeroInfographic, title: 'TerraAero Operations Map', alt: 'TerraAero operations infographic' },
    ],
  },
  {
    slug: 'abu-mall',
    name: 'Abu Mall',
    tagline: 'Adamas Materials Project',
    projectUrl: '/adamas',
    documents: [
      {
        title: 'Abu Mall — Paradigm',
        description: 'Strategic paradigm document for the Abu Mall flagship project within the Adamas Materials portfolio.',
        href: '/documents/abu-mall-paradigm.pdf',
        filename: 'Abu-Mall-Paradigm.pdf',
      },
    ],
    infographics: [],
  },
];

const totalDocs = projects.reduce((sum, p) => sum + p.documents.length, 0);
const totalInfographics = projects.reduce((sum, p) => sum + p.infographics.length, 0);

const ResourcesLibrary = () => {
  const [tab, setTab] = useState<'all' | 'documents' | 'infographics'>('all');

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero */}
        <section className="relative py-20 border-b border-border/40 bg-gradient-to-b from-primary/5 via-background to-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <Link to="/">
              <Button variant="ghost" size="sm" className="mb-6">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
              </Button>
            </Link>
            <div className="max-w-3xl">
              <Badge className="mb-4">Resources</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                Resource Library
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                A single hub for all downloadable presentations, investor briefs, and infographics across the Digital Invest portfolio. Browse by project below.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge variant="outline" className="text-sm py-1.5 px-3 gap-2">
                  <FileText className="w-4 h-4" /> {totalDocs} Documents
                </Badge>
                <Badge variant="outline" className="text-sm py-1.5 px-3 gap-2">
                  <Images className="w-4 h-4" /> {totalInfographics} Infographics
                </Badge>
                <Badge variant="outline" className="text-sm py-1.5 px-3 gap-2">
                  {projects.length} Projects
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Tabs */}
        <section className="container mx-auto px-4 max-w-6xl py-12">
          <Tabs value={tab} onValueChange={(v) => setTab(v as typeof tab)} className="w-full">
            <TabsList className="grid grid-cols-3 max-w-md mx-auto mb-12">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="documents">Documents</TabsTrigger>
              <TabsTrigger value="infographics">Infographics</TabsTrigger>
            </TabsList>

            {projects.map((project, idx) => {
              const showDocs = (tab === 'all' || tab === 'documents') && project.documents.length > 0;
              const showInfo = (tab === 'all' || tab === 'infographics') && project.infographics.length > 0;
              if (!showDocs && !showInfo) return null;

              return (
                <div key={project.slug} className="mb-16 scroll-mt-20" id={project.slug}>
                  {/* Project header */}
                  <div className="mb-8">
                    <div className="flex items-center justify-between flex-wrap gap-4 mb-2">
                      <div>
                        <h2 className="text-3xl font-bold text-foreground">{project.name}</h2>
                        <p className="text-muted-foreground mt-1">{project.tagline}</p>
                      </div>
                      <Link to={project.projectUrl}>
                        <Button variant="outline" size="sm" className="gap-2">
                          Visit project <ExternalLink className="w-4 h-4" />
                        </Button>
                      </Link>
                    </div>
                    <Separator className="mt-4" />
                  </div>

                  {/* Documents */}
                  {showDocs && (
                    <div className="mb-10">
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4 flex items-center gap-2">
                        <FileText className="w-4 h-4" /> Documents ({project.documents.length})
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {project.documents.map((doc, i) => (
                          <Card key={i} className="border-border/60 hover:border-primary/40 transition-all duration-300 hover:shadow-lg group">
                            <CardHeader className="pb-3">
                              <div className="flex items-start gap-3">
                                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                                  <FileText className="w-5 h-5 text-primary" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <CardTitle className="text-base leading-tight">{doc.title}</CardTitle>
                                </div>
                              </div>
                            </CardHeader>
                            <CardContent>
                              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{doc.description}</p>
                              <div className="flex gap-2">
                                <Button size="sm" variant="default" asChild className="gap-2">
                                  <a href={doc.href} download={doc.filename}>
                                    <Download className="w-4 h-4" /> Download
                                  </a>
                                </Button>
                                <Button size="sm" variant="outline" asChild className="gap-2">
                                  <a href={doc.href} target="_blank" rel="noopener noreferrer">
                                    <ExternalLink className="w-4 h-4" /> Preview
                                  </a>
                                </Button>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Infographics */}
                  {showInfo && (
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4 flex items-center gap-2">
                        <Images className="w-4 h-4" /> Infographics ({project.infographics.length})
                      </h3>
                      <InfographicsGallery infographics={project.infographics} projectTitle={project.name} />
                    </div>
                  )}
                </div>
              );
            })}
          </Tabs>

          <Separator className="my-12" />

          {/* CTA */}
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
            <CardContent className="pt-8 pb-8 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">
                Need additional materials?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Schedule a private briefing or request additional documentation tailored to your investment thesis.
              </p>
              <div className="flex gap-3 justify-center flex-wrap">
                <Link to="/start-investing">
                  <Button size="lg">Request Information</Button>
                </Link>
                <Link to="/schedule">
                  <Button size="lg" variant="outline">Schedule a Call</Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <div className="mt-12">
            <InvestorPageDisclaimer />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ResourcesLibrary;
