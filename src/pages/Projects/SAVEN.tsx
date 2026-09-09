import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  ArrowLeft, ArrowRight, ExternalLink, Bot, Brain, ShieldCheck, Network,
  Activity, Layers, Users, Home, Building2, Hospital, Cpu, Workflow,
  CheckCircle2, XCircle, Handshake, LineChart, Lock, Eye, TrendingUp,
} from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import InvestorPageDisclaimer from '@/components/InvestorPageDisclaimer';
import ProjectMediaRoomBySlug from '@/components/ProjectMediaRoomBySlug';
import OptimizedImage from '@/components/OptimizedImage';
import { savenContent as C, SAVEN_LINKS } from './savenContent';

import heroAsset from '@/assets/saven/hero.asset.json';
import logoAsset from '@/assets/saven/logo.asset.json';
import labAsset from '@/assets/saven/lab.asset.json';
import applicationsAsset from '@/assets/saven/applications.asset.json';
import pillarsAsset from '@/assets/saven/pillars.asset.json';
import homeAssistAsset from '@/assets/saven/home-assist.asset.json';
import homeAssist2Asset from '@/assets/saven/home-assist-2.asset.json';
import interactionAsset from '@/assets/saven/interaction.asset.json';
import rehabilitationAsset from '@/assets/saven/rehabilitation.asset.json';
import environmentsAsset from '@/assets/saven/environments.asset.json';

const Section = ({
  id, kicker, title, children, className = '',
}: { id?: string; kicker?: string; title?: string; children: React.ReactNode; className?: string }) => (
  <section id={id} className={`py-16 md:py-24 scroll-mt-24 ${className}`}>
    <div className="container mx-auto px-4 max-w-6xl">
      {kicker && (
        <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-primary/80 font-medium mb-3">{kicker}</p>
      )}
      {title && (
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-8">{title}</h2>
      )}
      {children}
    </div>
  </section>
);

const Chip = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-sm text-muted-foreground">{children}</span>
);

const Note = ({ children }: { children: React.ReactNode }) => (
  <p className="mt-6 text-sm text-muted-foreground/80 italic">{children}</p>
);

const Flow = ({ items }: { items: string[] }) => (
  <div className="flex flex-wrap items-center gap-2">
    {items.map((s, i) => (
      <span key={s} className="flex items-center gap-2">
        <span className="rounded-lg border border-border bg-card px-3 py-2 text-sm font-medium text-foreground">{s}</span>
        {i < items.length - 1 && <ArrowRight className="h-4 w-4 text-muted-foreground shrink-0" aria-hidden="true" />}
      </span>
    ))}
  </div>
);

const SAVEN = () => {
  const [project, setProject] = useState<{ website_url?: string | null } | null>(null);

  useEffect(() => {
    supabase.from('projects').select('website_url').eq('slug', 'saven').maybeSingle()
      .then(({ data }) => data && setProject(data));
  }, []);

  const siteUrl = project?.website_url || SAVEN_LINKS.site;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative min-h-[78vh] flex items-center overflow-hidden bg-[#070b14]">
        <div className="absolute inset-0">
          <img src={heroAsset.url} alt="SAVEN robotics assisting people in real environments" className="w-full h-full object-cover opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#070b14] via-[#070b14]/85 to-[#070b14]/40" />
        </div>
        <div className="relative z-10 container mx-auto px-4 py-24 max-w-6xl">
          <Link to="/projects" className="inline-flex items-center text-sky-300/80 hover:text-sky-200 mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> {C.back}
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <img src={logoAsset.url} alt="SAVEN Robotics Lab" className="h-14 w-14 rounded-lg object-cover" />
            <Badge className="bg-sky-500/15 text-sky-200 border-sky-400/30">{C.hero.badge}</Badge>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-3">SAVEN</h1>
          <p className="text-xl md:text-2xl text-amber-200/90 font-light mb-5">{C.hero.tagline}</p>
          <p className="max-w-2xl text-lg text-slate-200/90 leading-relaxed mb-6">{C.hero.desc}</p>
          <div className="flex flex-wrap gap-2 mb-8">
            {C.hero.chips.map((c) => (
              <span key={c} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-slate-200">{c}</span>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="#overview">
              <Button size="lg" className="bg-sky-600 hover:bg-sky-500 text-white">{C.hero.ctaPrimary}</Button>
            </a>
            <a href={siteUrl} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-white/25 text-white hover:bg-white/10">
                <ExternalLink className="w-4 h-4 mr-2" /> {C.hero.ctaExternal}
              </Button>
            </a>
          </div>
          <p className="mt-6 text-sm text-slate-300/70">{C.hero.status}</p>
        </div>
      </section>

      {/* Core idea */}
      <Section id="overview" kicker={C.idea.kicker} title={C.idea.title}>
        <div className="grid gap-10 md:grid-cols-2 items-start">
          <div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">{C.idea.p1}</p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">{C.idea.p2}</p>
            <div className="flex flex-wrap gap-2">{C.idea.needs.map((n) => <Chip key={n}>{n}</Chip>)}</div>
            <p className="mt-6 text-lg font-medium text-foreground">{C.idea.conclusion}</p>
          </div>
          <OptimizedImage src={environmentsAsset.url} alt="SAVEN assistance across homes, rehabilitation and care environments" className="rounded-xl w-full h-auto shadow-lg" />
        </div>
      </Section>

      {/* Human assistance */}
      <Section id="human-assistance" kicker={C.assistance.kicker} title={C.assistance.title} className="bg-muted/30">
        <p className="text-lg text-muted-foreground max-w-3xl mb-8">{C.assistance.p}</p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {C.assistance.items.map((i) => (
            <Card key={i.t} className="border-border/70 transition-shadow hover:shadow-md">
              <CardContent className="p-6">
                <Users className="h-5 w-5 text-primary mb-3" aria-hidden="true" />
                <h3 className="font-semibold text-foreground mb-2">{i.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{i.d}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <Note>{C.assistance.note}</Note>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <OptimizedImage src={homeAssistAsset.url} alt="SAVEN assistance with mobility at home" className="rounded-xl w-full h-56 object-cover" />
          <OptimizedImage src={rehabilitationAsset.url} alt="SAVEN concept visual of supervised rehabilitation support" className="rounded-xl w-full h-56 object-cover" />
          <OptimizedImage src={interactionAsset.url} alt="SAVEN human-robot interaction in a learning environment" className="rounded-xl w-full h-56 object-cover" />
        </div>
      </Section>

      {/* Human Assistance Layer */}
      <Section kicker={C.layer.kicker} title={C.layer.title}>
        <p className="text-lg text-muted-foreground max-w-3xl mb-10">{C.layer.p}</p>
        <div className="space-y-4">
          {C.layer.layers.map((l) => (
            <div key={l.t} className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40">
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <span className="text-sm font-mono text-primary/80 md:w-12">{l.n}</span>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-1">{l.t}</h3>
                  <p className="text-muted-foreground mb-3">{l.d}</p>
                  <div className="flex flex-wrap gap-2">{l.items.map((x) => <Chip key={x}>{x}</Chip>)}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Beyond a single robot */}
      <Section kicker={C.beyondRobot.kicker} title={C.beyondRobot.title} className="bg-muted/30">
        <p className="text-lg text-muted-foreground max-w-3xl mb-8">{C.beyondRobot.p}</p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 mb-8">
          {C.beyondRobot.forms.map((f) => (
            <div key={f} className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3">
              <Bot className="h-5 w-5 text-primary" aria-hidden="true" />
              <span className="text-foreground">{f}</span>
            </div>
          ))}
        </div>
        <Flow items={C.beyondRobot.flow} />
        <Note>{C.beyondRobot.note}</Note>
      </Section>

      {/* Hardware-flexible */}
      <Section kicker={C.hardware.kicker} title={C.hardware.title}>
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">{C.hardware.p1}</p>
            <div className="flex flex-wrap gap-2 mb-6">{C.hardware.specialties.map((s) => <Chip key={s}>{s}</Chip>)}</div>
            <p className="text-lg text-muted-foreground leading-relaxed">{C.hardware.p2}</p>
          </div>
          <div>
            <div className="rounded-xl border border-primary/30 bg-primary/5 p-6">
              <Flow items={C.hardware.equation} />
              <p className="mt-4 text-lg font-semibold text-foreground">= {C.hardware.equationResult}</p>
            </div>
            <p className="mt-6 font-medium text-foreground">{C.hardware.dependsTitle}</p>
            <div className="mt-3 flex flex-wrap gap-2">{C.hardware.depends.map((d) => <Chip key={d}>{d}</Chip>)}</div>
            <Note>{C.hardware.note}</Note>
          </div>
        </div>
      </Section>

      {/* Human Data + Human Data Model */}
      <Section id="human-data-model" kicker={C.humanData.kicker} title={C.humanData.title} className="bg-muted/30">
        <p className="text-lg text-muted-foreground max-w-3xl mb-4">{C.humanData.p1}</p>
        <p className="text-lg text-muted-foreground max-w-3xl mb-6">{C.humanData.p2}</p>
        <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3 mb-14">
          {C.humanData.questions.map((q) => (
            <li key={q} className="flex items-start gap-2 text-muted-foreground">
              <CheckCircle2 className="h-4 w-4 text-primary mt-1 shrink-0" aria-hidden="true" /> {q}
            </li>
          ))}
        </ul>

        <p className="text-xs uppercase tracking-[0.2em] text-primary/80 font-medium mb-3">{C.hdm.kicker}</p>
        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">{C.hdm.title}</h3>
        <p className="text-lg text-muted-foreground max-w-3xl mb-6">{C.hdm.p}</p>
        <Flow items={C.hdm.chain} />
        <p className="mt-8 text-lg text-muted-foreground max-w-3xl">{C.hdm.p2}</p>
        <div className="mt-3 flex flex-wrap gap-2">{C.hdm.qualities.map((q) => <Chip key={q}>{q}</Chip>)}</div>

        <h4 className="mt-12 mb-6 text-xl font-semibold text-foreground">{C.hdm.principlesTitle}</h4>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {C.hdm.principles.map((p) => (
            <Card key={p.t} className="border-border/70">
              <CardContent className="p-6">
                <Lock className="h-5 w-5 text-primary mb-3" aria-hidden="true" />
                <h5 className="font-semibold text-foreground mb-2">{p.t}</h5>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.d}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-8">
          <a href={SAVEN_LINKS.humanDataModel} target="_blank" rel="noopener noreferrer">
            <Button variant="outline"><ExternalLink className="h-4 w-4 mr-2" /> Human Data Model</Button>
          </a>
        </div>
      </Section>

      {/* BioMath Core */}
      <Section kicker={C.biomath.kicker} title={C.biomath.title}>
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">{C.biomath.p1}</p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">{C.biomath.p2}</p>
            <p className="font-medium text-foreground">{C.biomath.scope}</p>
            <Note>{C.biomath.scopeNote}</Note>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/projects/biomath-core"><Button variant="outline">Explore BioMath Core</Button></Link>
              <a href={SAVEN_LINKS.biomathCore} target="_blank" rel="noopener noreferrer">
                <Button variant="ghost"><ExternalLink className="h-4 w-4 mr-2" /> SAVEN × BioMath Core</Button>
              </a>
            </div>
          </div>
          <ol className="space-y-3">
            {C.biomath.chain.map((s, i) => (
              <li key={s.t} className="rounded-lg border border-border bg-card p-4">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-mono text-primary/70">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <p className="font-semibold text-foreground">{s.t}</p>
                    <p className="text-sm text-muted-foreground">{s.d}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* Systems architecture */}
      <Section id="technology" kicker={C.systems.kicker} title={C.systems.title} className="bg-muted/30">
        <div className="grid gap-4 md:grid-cols-3">
          {C.systems.stack.map((g) => (
            <Card key={g.t} className="border-border/70">
              <CardContent className="p-6">
                <Layers className="h-5 w-5 text-primary mb-3" aria-hidden="true" />
                <h3 className="font-semibold text-foreground mb-3">{g.t}</h3>
                <ul className="space-y-1.5">
                  {g.items.map((i) => <li key={i} className="text-sm text-muted-foreground">{i}</li>)}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-primary/80 font-medium mb-3">{C.knowledge.kicker}</p>
            <h3 className="text-2xl font-bold text-foreground mb-4">{C.knowledge.title}</h3>
            <p className="text-muted-foreground mb-6">{C.knowledge.p}</p>
            <Flow items={C.knowledge.chain} />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-primary/80 font-medium mb-3">{C.decision.kicker}</p>
            <h3 className="text-2xl font-bold text-foreground mb-4">{C.decision.title}</h3>
            <p className="text-muted-foreground mb-4">{C.decision.p}</p>
            <div className="flex flex-wrap gap-2 mb-4">{C.decision.items.map((i) => <Chip key={i}>{i}</Chip>)}</div>
            <p className="text-lg font-semibold text-foreground">{C.decision.statement}</p>
            <Note>{C.decision.note}</Note>
          </div>
        </div>
        <div className="mt-8">
          <a href={SAVEN_LINKS.systems} target="_blank" rel="noopener noreferrer">
            <Button variant="outline"><ExternalLink className="h-4 w-4 mr-2" /> SAVEN Systems</Button>
          </a>
        </div>
      </Section>

      {/* Robotics Interface */}
      <Section id="robotics-interface" kicker={C.interface.kicker} title={C.interface.title}>
        <p className="text-lg text-muted-foreground max-w-3xl mb-8">{C.interface.p}</p>
        <div className="grid gap-4 sm:grid-cols-2 mb-10">
          {C.interface.distinction.map((d) => (
            <Card key={d.t} className="border-border/70">
              <CardContent className="p-6">
                <Network className="h-5 w-5 text-primary mb-3" aria-hidden="true" />
                <h3 className="font-semibold text-foreground mb-2">{d.t}</h3>
                <p className="text-sm text-muted-foreground">{d.d}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="rounded-xl border border-border bg-card p-6 text-center">
          <p className="font-semibold text-foreground">{C.interface.top}</p>
          <div className="my-3 h-6 w-px bg-border mx-auto" aria-hidden="true" />
          <p className="inline-block rounded-lg bg-primary/10 px-4 py-2 font-semibold text-primary">{C.interface.hub}</p>
          <div className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {C.interface.endpoints.map((e) => (
              <span key={e} className="rounded-lg border border-border px-3 py-2 text-sm text-muted-foreground">{e}</span>
            ))}
          </div>
        </div>
        <Note>{C.interface.note}</Note>
        <div className="mt-6">
          <a href={SAVEN_LINKS.roboticsInterface} target="_blank" rel="noopener noreferrer">
            <Button variant="outline"><ExternalLink className="h-4 w-4 mr-2" /> SAVEN Robotics Interface</Button>
          </a>
        </div>
      </Section>

      {/* Robotics Lab */}
      <Section id="robotics-lab" kicker={C.lab.kicker} title={C.lab.title} className="bg-muted/30">
        <div className="grid gap-10 md:grid-cols-2 items-start">
          <div>
            <p className="text-lg text-muted-foreground mb-6">{C.lab.p}</p>
            <p className="font-medium text-foreground mb-3">{C.lab.scopeTitle}</p>
            <div className="flex flex-wrap gap-2">{C.lab.scope.map((s) => <Chip key={s}>{s}</Chip>)}</div>
            <Note>{C.lab.note}</Note>
            <div className="mt-6">
              <a href={SAVEN_LINKS.roboticsLab} target="_blank" rel="noopener noreferrer">
                <Button variant="outline"><ExternalLink className="h-4 w-4 mr-2" /> SAVEN Robotics Lab</Button>
              </a>
            </div>
          </div>
          <OptimizedImage src={labAsset.url} alt="SAVEN Robotics Lab development environment" className="rounded-xl w-full h-auto shadow-lg" />
        </div>
      </Section>

      {/* Development pathway */}
      <Section kicker={C.pathway.kicker} title={C.pathway.title}>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {C.pathway.steps.map((s) => (
            <Card key={s.t} className="border-border/70 transition-shadow hover:shadow-md">
              <CardContent className="p-6">
                <span className="text-sm font-mono text-primary/70">{s.n}</span>
                <h3 className="mt-1 font-semibold text-foreground mb-3">{s.t}</h3>
                <ul className="space-y-1.5">
                  {s.items.map((i) => <li key={i} className="text-sm text-muted-foreground">{i}</li>)}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        <Note>{C.pathway.note}</Note>
      </Section>

      {/* Applications */}
      <Section kicker={C.environments.kicker} title={C.environments.title} className="bg-muted/30">
        <p className="text-lg text-muted-foreground max-w-3xl mb-8">{C.environments.p}</p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-10">
          {C.environments.items.map((g, idx) => {
            const Icon = [Home, Hospital, Activity, Users, Building2, Workflow][idx % 6];
            return (
              <Card key={g.t} className="border-border/70">
                <CardContent className="p-6">
                  <Icon className="h-5 w-5 text-primary mb-3" aria-hidden="true" />
                  <h3 className="font-semibold text-foreground mb-3">{g.t}</h3>
                  <ul className="space-y-1.5">
                    {g.items.map((i) => <li key={i} className="text-sm text-muted-foreground">{i}</li>)}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <OptimizedImage src={applicationsAsset.url} alt="SAVEN application environments overview" className="rounded-xl w-full h-auto shadow-lg" />

        <div className="mt-14">
          <p className="text-xs uppercase tracking-[0.2em] text-primary/80 font-medium mb-3">{C.broader.kicker}</p>
          <h3 className="text-2xl font-bold text-foreground mb-4">{C.broader.title}</h3>
          <p className="text-muted-foreground mb-6 max-w-3xl">{C.broader.p}</p>
          <div className="flex flex-wrap gap-2 mb-4">{C.broader.envs.map((e) => <Chip key={e}>{e}</Chip>)}</div>
          <p className="text-lg font-semibold text-foreground">{C.broader.common}</p>
          <p className="text-sm text-muted-foreground">{C.broader.commonNote}</p>
        </div>
        <div className="mt-8">
          <a href={SAVEN_LINKS.applications} target="_blank" rel="noopener noreferrer">
            <Button variant="outline"><ExternalLink className="h-4 w-4 mr-2" /> SAVEN Applications</Button>
          </a>
        </div>
      </Section>

      {/* Partners */}
      <Section id="partners" kicker={C.partners.kicker} title={C.partners.title}>
        <p className="text-lg text-muted-foreground max-w-3xl mb-8">{C.partners.p}</p>
        <div className="rounded-xl border border-primary/30 bg-primary/5 p-6 mb-10">
          <Flow items={C.partners.equation} />
          <p className="mt-4 text-lg font-semibold text-foreground">= {C.partners.equationResult}</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {C.partners.categories.map((c) => (
            <Card key={c.t} className="border-border/70 transition-shadow hover:shadow-md">
              <CardContent className="p-6">
                <Handshake className="h-5 w-5 text-primary mb-3" aria-hidden="true" />
                <h3 className="font-semibold text-foreground mb-2">{c.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.d}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <Note>{C.partners.note}</Note>

        <h4 className="mt-12 mb-6 text-xl font-semibold text-foreground">{C.partners.entryTitle}</h4>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {C.partners.entry.map((e, i) => (
            <div key={e.t} className="rounded-lg border border-border bg-card p-4">
              <span className="text-xs font-mono text-primary/70">{String(i + 1).padStart(2, '0')}</span>
              <p className="font-semibold text-foreground">{e.t}</p>
              <p className="text-sm text-muted-foreground">{e.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/contact"><Button>{C.partners.cta}</Button></Link>
          <a href={SAVEN_LINKS.partners} target="_blank" rel="noopener noreferrer">
            <Button variant="outline"><ExternalLink className="h-4 w-4 mr-2" /> SAVEN Partners</Button>
          </a>
        </div>
      </Section>

      {/* Commercial architecture */}
      <Section kicker={C.commercial.kicker} title={C.commercial.title} className="bg-muted/30">
        <p className="text-lg text-muted-foreground max-w-3xl mb-8">{C.commercial.p}</p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {C.commercial.items.map((i) => (
            <Card key={i.t} className="border-border/70">
              <CardContent className="p-5">
                <LineChart className="h-5 w-5 text-primary mb-3" aria-hidden="true" />
                <h3 className="font-semibold text-foreground mb-2">{i.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{i.d}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <h4 className="mt-12 mb-4 text-xl font-semibold text-foreground">{C.commercial.b2bTitle}</h4>
        <div className="flex flex-wrap gap-2 mb-8">{C.commercial.b2b.map((b) => <Chip key={b}>{b}</Chip>)}</div>
        <Flow items={C.commercial.b2bFlow} />

        <div className="mt-14">
          <p className="text-xs uppercase tracking-[0.2em] text-primary/80 font-medium mb-3">{C.scale.kicker}</p>
          <h3 className="text-2xl font-bold text-foreground mb-6">{C.scale.title}</h3>
          <Flow items={C.scale.steps} />
          <p className="mt-6 text-lg text-foreground max-w-3xl">{C.scale.conclusion}</p>
        </div>
      </Section>

      {/* Pillars */}
      <Section kicker={C.pillars.kicker} title={C.pillars.title}>
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <div className="space-y-3">
            {C.pillars.items.map((p) => (
              <div key={p.l} className="flex items-start gap-4 rounded-lg border border-border bg-card p-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 font-bold text-primary">{p.l}</span>
                <div>
                  <p className="font-semibold text-foreground">{p.t}</p>
                  <p className="text-sm text-muted-foreground">{p.d}</p>
                </div>
              </div>
            ))}
            <p className="pt-2 text-sm uppercase tracking-[0.15em] text-muted-foreground">{C.pillars.line}</p>
          </div>
          <OptimizedImage src={pillarsAsset.url} alt="SAVEN pillars: Support, Action, Verification, Environment, Network" className="rounded-xl w-full h-auto shadow-lg" />
        </div>
      </Section>

      {/* Difference */}
      <Section kicker={C.difference.kicker} title={C.difference.title} className="bg-muted/30">
        <p className="text-muted-foreground mb-6">{C.difference.p}</p>
        <ul className="space-y-2">
          {C.difference.lines.map((l) => (
            <li key={l} className="flex items-center gap-3 text-lg text-foreground">
              <ArrowRight className="h-4 w-4 text-primary" aria-hidden="true" /> {l}
            </li>
          ))}
        </ul>
      </Section>

      {/* Safety, privacy, boundaries */}
      <Section kicker={C.safety.kicker} title={C.safety.title}>
        <div className="grid gap-10 lg:grid-cols-3">
          <div>
            <ShieldCheck className="h-6 w-6 text-primary mb-4" aria-hidden="true" />
            <div className="flex flex-wrap gap-2">{C.safety.items.map((i) => <Chip key={i}>{i}</Chip>)}</div>
            <p className="mt-6 text-lg font-medium text-foreground">{C.safety.statement}</p>
          </div>
          <div>
            <Eye className="h-6 w-6 text-primary mb-4" aria-hidden="true" />
            <h3 className="text-xl font-semibold text-foreground mb-2">{C.privacy.title}</h3>
            <p className="text-muted-foreground mb-4">{C.privacy.p}</p>
            <div className="flex flex-wrap gap-2">{C.privacy.items.map((i) => <Chip key={i}>{i}</Chip>)}</div>
            <Note>{C.privacy.note}</Note>
            <div className="mt-4">
              <a href={SAVEN_LINKS.safety} target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="sm"><ExternalLink className="h-4 w-4 mr-2" /> SAVEN Safety</Button>
              </a>
            </div>
          </div>
          <div>
            <XCircle className="h-6 w-6 text-destructive mb-4" aria-hidden="true" />
            <h3 className="text-xl font-semibold text-foreground mb-4">{C.isNot.title}</h3>
            <ul className="space-y-2">
              {C.isNot.items.map((i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <XCircle className="h-4 w-4 text-destructive/70 mt-0.5 shrink-0" aria-hidden="true" /> {i}
                </li>
              ))}
            </ul>
            <p className="mt-4 font-medium text-foreground">{C.isNot.statement}</p>
          </div>
        </div>
      </Section>

      {/* Portfolio fit */}
      <Section kicker={C.fit.kicker} title={C.fit.title} className="bg-muted/30">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-lg text-muted-foreground mb-4">{C.fit.p}</p>
            <div className="flex flex-wrap gap-2 mb-6">{C.fit.items.map((i) => <Chip key={i}>{i}</Chip>)}</div>
            <p className="text-lg text-foreground">{C.fit.conclusion}</p>
            <OptimizedImage src={homeAssist2Asset.url} alt="SAVEN robotic assistance supporting daily independence" className="mt-8 rounded-xl w-full h-auto shadow-lg" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-4">{C.fit.archTitle}</h3>
            <ol className="space-y-2">
              {C.fit.arch.map((a, i) => (
                <li key={a.t} className="rounded-lg border border-border bg-card p-4">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-primary/70">{String(i + 1).padStart(2, '0')}</span>
                    <div>
                      <p className="font-semibold text-foreground">{a.t}</p>
                      <p className="text-sm text-muted-foreground">{a.d}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
            <Note>{C.fit.archNote}</Note>
          </div>
        </div>
      </Section>

      {/* Media room */}
      <Section title={C.mediaTitle}>
        <ProjectMediaRoomBySlug slug="saven" />
      </Section>

      {/* CTA */}
      <section className="py-20 bg-[#070b14]">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <Cpu className="h-8 w-8 text-sky-400 mx-auto mb-6" aria-hidden="true" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{C.cta.title}</h2>
          <p className="text-slate-300 mb-8">{C.cta.p}</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/contact">
              <Button size="lg" className="bg-sky-600 hover:bg-sky-500 text-white">
                <TrendingUp className="h-4 w-4 mr-2" /> {C.cta.primary}
              </Button>
            </Link>
            <a href={siteUrl} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-white/25 text-white hover:bg-white/10">
                <ExternalLink className="h-4 w-4 mr-2" /> {C.cta.external}
              </Button>
            </a>
            <a href={SAVEN_LINKS.investors} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="ghost" className="text-slate-200 hover:bg-white/10">{C.cta.investors}</Button>
            </a>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-6xl py-10">
        <InvestorPageDisclaimer />
      </div>

      <Footer />
    </div>
  );
};

export default SAVEN;
