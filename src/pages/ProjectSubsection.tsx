import { useEffect } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ProjectMediaRoomBySlug from '@/components/ProjectMediaRoomBySlug';
import ProjectDocumentsSection from '@/components/ProjectDocumentsSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Cpu, Map, Mail, ShieldCheck, Layers, Workflow } from 'lucide-react';

const VALID_SECTIONS = new Set(['tech', 'roadmap', 'media', 'docs', 'interest']);

const titles: Record<string, { en: string; key: string }> = {
  tech: { en: 'Technology', key: 'projectSection.techTitle' },
  roadmap: { en: 'Roadmap', key: 'projectSection.roadmapTitle' },
  media: { en: 'Media Room', key: 'projectSection.mediaTitle' },
  docs: { en: 'Documents', key: 'projectSection.docsTitle' },
  interest: { en: 'Express Interest', key: 'projectSection.interestTitle' },
};

const subtitles: Record<string, { en: string; key: string }> = {
  tech: {
    en: 'Architecture, data sources and technology stack overview for this initiative.',
    key: 'projectSection.techSubtitle',
  },
  roadmap: {
    en: 'High-level milestones and delivery phases. Detailed roadmap available under NDA.',
    key: 'projectSection.roadmapSubtitle',
  },
  media: {
    en: 'Press coverage, brand assets and visual materials related to this project.',
    key: 'projectSection.mediaSubtitle',
  },
  docs: {
    en: 'Public documents and downloadable materials. Sensitive files are gated.',
    key: 'projectSection.docsSubtitle',
  },
  interest: {
    en: 'Submit a non-binding expression of interest. No payment, no commitment.',
    key: 'projectSection.interestSubtitle',
  },
};

export default function ProjectSubsection() {
  const { slug = '', section = '' } = useParams();
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug, section]);

  if (!VALID_SECTIONS.has(section)) {
    return <Navigate to={`/projects/${slug}`} replace />;
  }

  const prettySlug = slug.replace(/-/g, ' ');

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 pt-24 pb-16">
        <Link to={`/projects/${slug}`} className="inline-block animate-fade-in">
          <Button variant="ghost" size="sm" className="mb-6 hover:bg-muted/60 transition-all">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t('projectCommon.backToOverview', 'Back to project overview')}
          </Button>
        </Link>

        <div className="mb-10 animate-fade-in" style={{ animationDelay: '0.05s', animationFillMode: 'backwards' }}>
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2 capitalize">
            {prettySlug}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">
            {t(titles[section].key, titles[section].en)}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            {t(subtitles[section].key, subtitles[section].en)}
          </p>
        </div>

        <div className="animate-fade-in" style={{ animationDelay: '0.15s', animationFillMode: 'backwards' }}>
          {section === 'media' && <ProjectMediaRoomBySlug slug={slug} />}
          {section === 'docs' && <ProjectDocumentsSection projectSlug={slug} />}

          {section === 'tech' && (
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Layers, titleEn: 'Architecture', descEn: 'Modular, cloud-native services with clear separation of data, logic and presentation layers.' },
                { icon: Workflow, titleEn: 'Data & ML pipeline', descEn: 'Standardised ingestion, feature processing and model lifecycle management with audit trails.' },
                { icon: ShieldCheck, titleEn: 'Security & compliance', descEn: 'Privacy-by-design, encryption at rest and in transit, role-based access and full audit logging.' },
              ].map((b, i) => {
                const Icon = b.icon;
                return (
                  <Card key={i} className="hover:-translate-y-1 transition-all duration-300 hover:shadow-xl">
                    <CardContent className="pt-6">
                      <Icon className="w-8 h-8 text-primary mb-3" />
                      <h3 className="font-semibold mb-2">{b.titleEn}</h3>
                      <p className="text-sm text-muted-foreground">{b.descEn}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}

          {section === 'roadmap' && (
            <div className="space-y-4">
              {[
                { phase: 'Phase 1', titleEn: 'Foundation', descEn: 'Core architecture, data model and initial product surface.' },
                { phase: 'Phase 2', titleEn: 'Pilot deployments', descEn: 'Controlled rollouts with selected partners and feedback loops.' },
                { phase: 'Phase 3', titleEn: 'Scale & ecosystem', descEn: 'Broader availability, integrations and ecosystem expansion.' },
              ].map((p, i) => (
                <Card key={i} className="border-l-4 border-l-primary hover:translate-x-1 transition-all duration-300">
                  <CardContent className="pt-6">
                    <p className="text-xs uppercase tracking-widest text-primary mb-1">{p.phase}</p>
                    <h3 className="text-lg font-semibold mb-1">{p.titleEn}</h3>
                    <p className="text-sm text-muted-foreground">{p.descEn}</p>
                  </CardContent>
                </Card>
              ))}
              <p className="text-xs text-muted-foreground pt-4">
                Detailed timelines are shared under NDA with qualified investors.
              </p>
            </div>
          )}

          {section === 'interest' && (
            <Card className="max-w-2xl hover:shadow-xl transition-shadow">
              <CardContent className="pt-8 pb-8">
                <Mail className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-2xl font-semibold mb-3">
                  {t('projectSection.interestCta', 'Submit a non-binding expression of interest')}
                </h3>
                <p className="text-muted-foreground mb-6">
                  Our team will follow up by email. No payment is collected and no investment is committed.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button asChild size="lg">
                    <Link to="/investor-application">
                      {t('projectSection.openForm', 'Open interest form')}
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link to="/contact">
                      {t('projectSection.contactUs', 'Contact us')}
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
