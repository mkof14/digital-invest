/**
 * StarWall by AGRON — commercial, enterprise & B2G architecture sections.
 * Rendered inside src/pages/Projects/StarWall.tsx. Presentation only.
 */
import { Link } from 'react-router-dom';
import {
  ArrowRight, ArrowDown, Cloud, Server, Building2, Shuffle, ShieldCheck, Users,
  Network, Rocket, Landmark, Briefcase, Handshake, Repeat, Coins, FileText, Layers, Plug,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import type { StarWallCommercialContent, Status } from '@/pages/Projects/starwallCommercialContent';

const AGRON_SERVICES = 'https://www.agron1.com/services';

const SectionTitle = ({ kicker, title }: { kicker?: string; title: string }) => (
  <div className="mb-8">
    {kicker && <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-primary/80 mb-3">{kicker}</p>}
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-foreground">{title}</h2>
  </div>
);

const Note = ({ children }: { children: React.ReactNode }) => (
  <p className="mt-6 text-xs md:text-sm text-muted-foreground/80 leading-relaxed max-w-4xl">{children}</p>
);

const Bullets = ({ items }: { items: string[] }) => (
  <ul className="space-y-2">
    {items.map((line) => (
      <li key={line} className="flex items-start gap-2 text-sm text-muted-foreground">
        <span className="mt-2 w-1 h-1 rounded-full bg-primary flex-shrink-0" aria-hidden="true" />
        {line}
      </li>
    ))}
  </ul>
);

const Chips = ({ items }: { items: string[] }) => (
  <div className="flex flex-wrap gap-2">
    {items.map((item) => (
      <span key={item} className="px-3 py-2 rounded-lg border border-border/60 bg-background/50 text-xs md:text-sm text-foreground/80">
        {item}
      </span>
    ))}
  </div>
);

const Flow = ({ steps, compact = false }: { steps: string[]; compact?: boolean }) => (
  <div className="flex flex-col lg:flex-row lg:flex-wrap items-stretch lg:items-center justify-center gap-2 lg:gap-3">
    {steps.map((step, i) => (
      <div key={step} className="flex flex-col lg:flex-row items-center gap-2 lg:gap-3">
        <div
          className={`w-full lg:w-auto text-center rounded-xl border border-primary/25 bg-primary/5 font-medium text-foreground ${
            compact ? 'px-3 py-2 text-xs md:text-sm' : 'px-4 py-3 text-sm'
          }`}
        >
          {step}
        </div>
        {i < steps.length - 1 && (
          <>
            <ArrowDown className="w-4 h-4 text-primary/60 lg:hidden" aria-hidden="true" />
            <ArrowRight className="w-4 h-4 text-primary/60 hidden lg:block rtl:rotate-180" aria-hidden="true" />
          </>
        )}
      </div>
    ))}
  </div>
);

const statusStyles: Record<Status, string> = {
  active: 'border-primary/40 bg-primary/10 text-primary',
  development: 'border-amber-500/40 bg-amber-500/10 text-amber-600 dark:text-amber-400',
  planned: 'border-border/70 bg-muted/40 text-muted-foreground',
};

const StatusTag = ({ status, labels }: { status: Status; labels: Record<Status, string> }) => (
  <span className={`inline-block px-2.5 py-1 rounded-full border text-[11px] uppercase tracking-wide ${statusStyles[status]}`}>
    {labels[status].split('—')[0].trim()}
  </span>
);

type Props = { c: StarWallCommercialContent; onInterest: () => void };

/** Section A — placed high on the page: the three ways to deploy. */
export const StarWallDeploymentModels = ({ c }: { c: StarWallCommercialContent }) => (
  <section aria-labelledby="starwall-three-models">
    <div className="mb-8">
      <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-primary/80 mb-3">{c.threeModels.kicker}</p>
      <h2 id="starwall-three-models" className="text-2xl md:text-4xl font-bold tracking-tight text-foreground">
        {c.threeModels.title}
      </h2>
      <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed max-w-4xl">{c.threeModels.p}</p>
    </div>

    <div className="mb-8">
      <Flow steps={c.threeModels.progression} />
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      {c.threeModels.items.map((m) => (
        <Card key={m.t} className="bg-card/60 border-border/60 hover:border-primary/40 transition-colors">
          <CardContent className="pt-6 space-y-4">
            <div className="flex items-baseline gap-3">
              <span className="text-2xl font-bold text-primary/70">{m.n}</span>
              <h3 className="text-lg font-semibold text-foreground">{m.t}</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{m.d}</p>

            {m.customer && (
              <div>
                <p className="text-xs uppercase tracking-wide text-foreground/70 mb-2">{m.customerTitle}</p>
                <Bullets items={m.customer} />
              </div>
            )}

            <div>
              <p className="text-xs uppercase tracking-wide text-foreground/70 mb-2">{m.providesTitle}</p>
              <Bullets items={m.provides} />
            </div>

            <div className="pt-3 border-t border-border/60">
              <p className="text-xs uppercase tracking-wide text-muted-foreground/70 mb-1">Commercial model</p>
              <p className="text-sm font-medium text-foreground">{m.model}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </section>
);

/** Section B — the full commercial / enterprise / B2G architecture block. */
const StarWallCommercial = ({ c, onInterest }: Props) => {
  const statusLabels: Record<Status, string> = {
    active: c.statusLegend.active,
    development: c.statusLegend.development,
    planned: c.statusLegend.planned,
  };

  return (
    <>
      {/* STATUS DISCIPLINE */}
      <section>
        <div className="p-6 rounded-2xl border border-border/60 bg-card/40">
          <h2 className="text-base font-semibold text-foreground mb-4">{c.statusLegend.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {(['active', 'development', 'planned'] as Status[]).map((s) => (
              <div key={s} className="flex items-start gap-3">
                <StatusTag status={s} labels={statusLabels} />
                <p className="text-sm text-muted-foreground leading-relaxed">{statusLabels[s].split('—').slice(1).join('—').trim()}</p>
              </div>
            ))}
          </div>
          <Note>{c.statusLegend.note}</Note>
        </div>
      </section>

      {/* EDITIONS */}
      <section>
        <SectionTitle kicker={c.editions.kicker} title={c.editions.title} />
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-4xl mb-8">{c.editions.p}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {c.editions.items.map((e) => (
            <Card key={e.t} className="bg-card/60 border-border/60 hover:border-primary/40 transition-colors">
              <CardContent className="pt-6 space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-semibold text-foreground">{e.t}</h3>
                  <StatusTag status={e.status} labels={statusLabels} />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{e.d}</p>
                <Bullets items={e.items} />
              </CardContent>
            </Card>
          ))}
        </div>
        <Note>{c.editions.note}</Note>
      </section>

      {/* DEPLOYMENT ARCHITECTURE */}
      <section>
        <SectionTitle kicker={c.deployArch.kicker} title={c.deployArch.title} />
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-4xl mb-8">{c.deployArch.p}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {c.deployArch.items.map((d, i) => {
            const Icon = [Cloud, Server, Building2, Shuffle][i] ?? Cloud;
            return (
              <div key={d.t} className="p-5 rounded-xl border border-border/60 bg-card/40">
                <Icon className="w-5 h-5 text-primary mb-3" aria-hidden="true" />
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="font-semibold text-foreground">{d.t}</h3>
                  <StatusTag status={d.status} labels={statusLabels} />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{d.d}</p>
              </div>
            );
          })}
        </div>
        <Note>{c.deployArch.note}</Note>
      </section>

      {/* INTEGRATION LAYER */}
      <section>
        <SectionTitle kicker={c.integrationLayer.kicker} title={c.integrationLayer.title} />
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-4xl mb-8">{c.integrationLayer.p}</p>
        <div className="p-6 md:p-8 rounded-2xl border border-border/60 bg-card/40">
          <Flow steps={c.integrationLayer.flow} compact />
        </div>
        <div className="mt-6">
          <p className="text-sm font-medium text-foreground mb-3 flex items-center gap-2">
            <Plug className="w-4 h-4 text-primary" aria-hidden="true" />
            {c.integrationLayer.mechanismsTitle}
          </p>
          <Chips items={c.integrationLayer.mechanisms} />
        </div>
        <Note>{c.integrationLayer.note}</Note>
      </section>

      {/* DATA OWNERSHIP */}
      <section>
        <SectionTitle kicker={c.dataControl.kicker} title={c.dataControl.title} />
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-4xl mb-8">{c.dataControl.p}</p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {c.dataControl.items.map((item) => (
            <div key={item} className="p-4 rounded-xl border border-border/60 bg-card/40 text-sm text-foreground/85">
              <ShieldCheck className="w-4 h-4 text-primary mb-2" aria-hidden="true" />
              {item}
            </div>
          ))}
        </div>
        <Note>{c.dataControl.note}</Note>
      </section>

      {/* ROLE-BASED OPERATIONS */}
      <section>
        <SectionTitle kicker={c.roles.kicker} title={c.roles.title} />
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-4xl mb-8">{c.roles.p}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {c.roles.items.map((r) => (
            <div key={r.t} className="p-5 rounded-xl border border-border/60 bg-card/40">
              <Users className="w-5 h-5 text-primary mb-3" aria-hidden="true" />
              <h3 className="font-semibold text-foreground text-sm uppercase tracking-wide mb-3">{r.t}</h3>
              <Bullets items={r.items} />
            </div>
          ))}
        </div>
        <Note>{c.roles.note}</Note>
      </section>

      {/* MULTI-SITE */}
      <section>
        <SectionTitle kicker={c.multiSite.kicker} title={c.multiSite.title} />
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-4xl mb-8">{c.multiSite.p}</p>
        <div className="p-6 md:p-8 rounded-2xl border border-border/60 bg-card/40 space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2">
            {c.multiSite.nodes.map((n) => (
              <div key={n} className="px-3 py-3 rounded-xl border border-border/60 bg-background/50 text-center text-xs md:text-sm text-foreground/85">
                {n}
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <ArrowDown className="w-5 h-5 text-primary/60" aria-hidden="true" />
          </div>
          <Flow steps={c.multiSite.flow} />
        </div>
        <div className="mt-6">
          <Flow steps={c.multiSite.growth} compact />
        </div>
        <Note>{c.multiSite.note}</Note>
      </section>

      {/* PILOT PROGRAM */}
      <section>
        <SectionTitle kicker={c.pilot.kicker} title={c.pilot.title} />
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-4xl mb-8">{c.pilot.p}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {c.pilot.steps.map((s) => (
            <div key={s.n} className="p-5 rounded-xl border border-border/60 bg-card/40">
              <span className="text-xl font-bold text-primary/70">{s.n}</span>
              <h3 className="mt-1 font-semibold text-foreground">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Button size="lg" onClick={onInterest}>
            <Rocket className="mr-2 h-4 w-4" aria-hidden="true" />
            {c.pilot.cta}
          </Button>
        </div>
        <Note>{c.pilot.note}</Note>
      </section>

      {/* B2B */}
      <section>
        <SectionTitle kicker={c.b2b.kicker} title={c.b2b.title} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl border border-border/60 bg-card/40">
            <Briefcase className="w-5 h-5 text-primary mb-3" aria-hidden="true" />
            <p className="text-sm font-medium text-foreground mb-3">{c.b2b.customersTitle}</p>
            <Chips items={c.b2b.customers} />
          </div>
          <div className="p-6 rounded-2xl border border-border/60 bg-card/40">
            <Layers className="w-5 h-5 text-primary mb-3" aria-hidden="true" />
            <p className="text-sm font-medium text-foreground mb-3">{c.b2b.scopeTitle}</p>
            <Bullets items={c.b2b.scope} />
          </div>
        </div>
        <div className="mt-6">
          <p className="text-xs uppercase tracking-[0.2em] text-primary/80 mb-3">{c.procurementB2B.kicker}</p>
          <h3 className="text-lg font-semibold text-foreground mb-2">{c.procurementB2B.title}</h3>
          <p className="text-sm text-muted-foreground mb-5 max-w-3xl">{c.procurementB2B.p}</p>
          <Flow steps={c.procurementB2B.path} compact />
          <Note>{c.procurementB2B.note}</Note>
        </div>
        <div className="mt-8">
          <Button size="lg" onClick={onInterest}>{c.b2b.cta}</Button>
        </div>
      </section>

      {/* B2G */}
      <section>
        <SectionTitle kicker={c.b2g.kicker} title={c.b2g.title} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl border border-border/60 bg-card/40">
            <Landmark className="w-5 h-5 text-primary mb-3" aria-hidden="true" />
            <p className="text-sm font-medium text-foreground mb-3">{c.b2g.envsTitle}</p>
            <Chips items={c.b2g.envs} />
          </div>
          <div className="p-6 rounded-2xl border border-border/60 bg-card/40">
            <FileText className="w-5 h-5 text-primary mb-3" aria-hidden="true" />
            <p className="text-sm font-medium text-foreground mb-3">{c.b2g.structureTitle}</p>
            <Bullets items={c.b2g.structure} />
          </div>
        </div>
        <div className="mt-6">
          <p className="text-xs uppercase tracking-[0.2em] text-primary/80 mb-3">{c.procurementB2G.kicker}</p>
          <h3 className="text-lg font-semibold text-foreground mb-2">{c.procurementB2G.title}</h3>
          <p className="text-sm text-muted-foreground mb-5 max-w-3xl">{c.procurementB2G.p}</p>
          <Flow steps={c.procurementB2G.path} compact />
          <Note>{c.procurementB2G.note}</Note>
        </div>
        <div className="mt-8">
          <Button size="lg" onClick={onInterest}>{c.b2g.cta}</Button>
        </div>
        <Note>{c.b2g.note}</Note>
      </section>

      {/* PARTNERS */}
      <section>
        <SectionTitle kicker={c.partners.kicker} title={c.partners.title} />
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-4xl mb-8">{c.partners.p}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {c.partners.items.map((p) => (
            <div key={p.t} className="p-5 rounded-xl border border-border/60 bg-card/40">
              <Handshake className="w-5 h-5 text-primary mb-3" aria-hidden="true" />
              <h3 className="font-semibold text-foreground text-sm uppercase tracking-wide mb-3">{p.t}</h3>
              <Bullets items={p.items} />
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button size="lg" onClick={onInterest}>{c.partners.cta}</Button>
          <Button size="lg" variant="outline" asChild>
            <a href={AGRON_SERVICES} target="_blank" rel="noopener noreferrer">View AGRON Services Catalog</a>
          </Button>
        </div>
        <Note>{c.partners.note}</Note>
      </section>

      {/* CUSTOMER EXPANSION MODEL */}
      <section>
        <SectionTitle kicker={c.expansionModel.kicker} title={c.expansionModel.title} />
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-4xl mb-8">{c.expansionModel.p}</p>
        <div className="p-6 md:p-8 rounded-2xl border border-border/60 bg-card/40">
          <Flow steps={c.expansionModel.chain} compact />
        </div>
        <Note>{c.expansionModel.note}</Note>
      </section>

      {/* REVENUE ARCHITECTURE */}
      <section>
        <SectionTitle kicker={c.revenueArch.kicker} title={c.revenueArch.title} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {c.revenueArch.columns.map((col) => (
            <div key={col.t} className="p-6 rounded-2xl border border-border/60 bg-card/40">
              <Coins className="w-5 h-5 text-primary mb-3" aria-hidden="true" />
              <h3 className="font-semibold text-foreground mb-3">{col.t}</h3>
              <Bullets items={col.items} />
            </div>
          ))}
        </div>
        <Note>{c.revenueArch.note}</Note>
      </section>

      {/* SUBSCRIPTION LOGIC */}
      <section>
        <SectionTitle kicker={c.subscriptionLogic.kicker} title={c.subscriptionLogic.title} />
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-4xl mb-6">{c.subscriptionLogic.p}</p>
        <Chips items={c.subscriptionLogic.items} />
        <Note>{c.subscriptionLogic.note}</Note>
      </section>

      {/* CONTRACT STRUCTURE */}
      <section>
        <SectionTitle kicker={c.contracts.kicker} title={c.contracts.title} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {c.contracts.items.map((item) => (
            <div key={item.t} className="p-5 rounded-xl border border-border/60 bg-card/40">
              <Repeat className="w-5 h-5 text-primary mb-3" aria-hidden="true" />
              <h3 className="font-semibold text-foreground text-sm uppercase tracking-wide">{item.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.d}</p>
            </div>
          ))}
        </div>
        <Note>{c.contracts.note}</Note>
      </section>

      {/* LAND & EXPAND */}
      <section>
        <SectionTitle kicker={c.landExpand.kicker} title={c.landExpand.title} />
        <div className="p-6 md:p-8 rounded-2xl border border-border/60 bg-card/40 space-y-2">
          {c.landExpand.steps.map((s, i) => (
            <div key={s.t}>
              <div className="px-5 py-4 rounded-xl border border-primary/25 bg-primary/5 flex flex-wrap items-baseline gap-x-3">
                <p className="font-semibold text-foreground uppercase tracking-wide text-sm">{s.t}</p>
                <p className="text-sm text-muted-foreground">{s.d}</p>
              </div>
              {i < c.landExpand.steps.length - 1 && (
                <div className="flex justify-center py-1">
                  <ArrowDown className="w-4 h-4 text-primary/50" aria-hidden="true" />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* FINAL ARCHITECTURE */}
      <section>
        <SectionTitle kicker={c.finalArch.kicker} title={c.finalArch.title} />
        <div className="p-6 md:p-8 rounded-2xl border border-border/60 bg-card/40 space-y-2">
          {c.finalArch.layers.map((layer, i) => (
            <div key={layer.t}>
              <div className="px-5 py-4 rounded-xl border border-primary/25 bg-primary/5">
                <div className="flex items-center gap-2 mb-2">
                  <Network className="w-4 h-4 text-primary" aria-hidden="true" />
                  <p className="font-semibold text-foreground uppercase tracking-wide text-sm">{layer.t}</p>
                </div>
                <Chips items={layer.items} />
              </div>
              {i < c.finalArch.layers.length - 1 && (
                <div className="flex justify-center py-1">
                  <ArrowDown className="w-4 h-4 text-primary/50" aria-hidden="true" />
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button size="lg" onClick={onInterest}>{c.b2b.cta}</Button>
          <Button size="lg" variant="outline" asChild>
            <Link to="/projects/agron">Explore AGRON Infrastructure</Link>
          </Button>
        </div>
        <Note>{c.finalArch.note}</Note>
      </section>
    </>
  );
};

export default StarWallCommercial;
