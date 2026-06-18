import type { MediaItem } from '@/components/ProjectMediaRoom';
import agronTacticalPdf from '@/assets/projects/agron-tactical-blueprint.pdf.asset.json';
import agronAutonomousPdf from '@/assets/projects/agron-autonomous-workforce.pdf.asset.json';
import agronAutonomousV2Pdf from '@/assets/projects/agron-autonomous-workforce-v2.pdf.asset.json';
import oneinowEnvironmentPdf from '@/assets/projects/1inow-environment.pdf.asset.json';

// Visual assets re-used as Media Room previews so every project ships with
// at least one preview-ready item out of the box.
import agronInfographic from '@/assets/projects/agron-infographic.webp';
import agronHero from '@/assets/projects/agron-hero.webp';
import agronWorkHero from '@/assets/projects/agronwork-hero.jpg';
import biomathInfo1 from '@/assets/projects/biomath-core-infographic1.webp';
import biomathInfo2 from '@/assets/projects/biomath-core-infographic2.webp';
import biomathInfo3 from '@/assets/projects/biomath-core-infographic3.webp';
import biomathHero from '@/assets/projects/biomath-core-hero.jpg';
import biomathBlackbox from '@/assets/projects/biomath-health-blackbox.webp';
import biomathSupercomputer from '@/assets/projects/biomath-supercomputer.jpg';
import biomathWellness from '@/assets/projects/biomath-wellness-center.jpg';
import biomathPresOrbital from '@/assets/projects/biomath-pres-orbital.webp';
import biomathPresBaseline from '@/assets/projects/biomath-pres-baseline.webp';
import biomathPresBlackbox from '@/assets/projects/biomath-pres-blackbox.webp';
import biomathPresTime from '@/assets/projects/biomath-pres-time.webp';
import biomathPresOutput from '@/assets/projects/biomath-pres-output.webp';
import biomathLifeHero from '@/assets/projects/biomathlife-hero.jpg';
import lunaInfographic from '@/assets/projects/luna-infographic.webp';
import lunaHero from '@/assets/projects/luna-hero.webp';
import savenInfographic from '@/assets/projects/saven-infographic.webp';
import savenHero from '@/assets/projects/saven-hero.webp';
import savenRobot from '@/assets/projects/saven-robot.webp';
import savenRobotElderly from '@/assets/projects/saven-robot-elderly.webp';
import terraInfographic from '@/assets/projects/terraaero-infographic.webp';
import terraHero from '@/assets/projects/terraaero-hero.jpg';
import t1dVisual from '@/assets/projects/t1d-visual.jpg';
import t1dHero from '@/assets/projects/t1d-hero.jpg';
import oneinowHero from '@/assets/projects/1inow-hero.jpg';
import baselineHero from '@/assets/projects/baseline-hero.jpg';
import bioageHero from '@/assets/projects/bioagecore-hero.jpg';
import familyHero from '@/assets/projects/familycore-hero.jpg';
import goodTodayHero from '@/assets/projects/itsgoodtoday-hero.jpg';
import longevityHero from '@/assets/projects/longevitycore-hero.jpg';
import mrxHero from '@/assets/projects/mrx-hero.jpg';
import mydayHero from '@/assets/projects/myday-hero.webp';
import seniorHero from '@/assets/projects/seniorcore-hero.jpg';
import skinHero from '@/assets/projects/skincore-hero.jpg';
import stressHero from '@/assets/projects/stresscore-hero.jpg';
import tableHero from '@/assets/projects/tableserved-hero.webp';
import vitalHero from '@/assets/projects/vitalcore-hero.jpg';

const img = (id: string, title: string, url: string, subtitle?: string, meta = 'Visual'): MediaItem => ({
  kind: 'image', id, title, subtitle, meta, url,
});

const extrasBySlug: Record<string, MediaItem[]> = {
  agron: [
    {
      kind: 'pdf',
      id: 'agron-tactical',
      title: 'AGRON Tactical Blueprint',
      subtitle: 'Operational doctrine',
      meta: 'PDF · Deployment & tactics',
      url: agronTacticalPdf.url,
      fileName: 'AGRON_Tactical_Blueprint.pdf',
      updatedAt: agronTacticalPdf.created_at,
    },
    {
      kind: 'pdf',
      id: 'agron-workforce-1',
      title: 'Autonomous Workforce Infrastructure',
      subtitle: 'Foundational model',
      meta: 'PDF · Vol. I',
      url: agronAutonomousPdf.url,
      fileName: 'Autonomous_Workforce_Infrastructure.pdf',
      updatedAt: agronAutonomousPdf.created_at,
    },
    {
      kind: 'pdf',
      id: 'agron-workforce-2',
      title: 'Autonomous Workforce — Vol. II',
      subtitle: 'Expanded framework',
      meta: 'PDF · Vol. II',
      url: agronAutonomousV2Pdf.url,
      fileName: 'Autonomous_Workforce_Infrastructure_v2.pdf',
      updatedAt: agronAutonomousV2Pdf.created_at,
    },
    {
      kind: 'video',
      id: 'agron-video',
      title: 'AGRON — Video Overview',
      subtitle: 'Founder briefing',
      meta: 'YouTube · ~5 min',
      url: 'https://www.youtube.com/embed/tansFOZdKRo?rel=0',
      embed: 'https://www.youtube.com/embed/tansFOZdKRo?rel=0',
      watchUrl: 'https://www.youtube.com/watch?v=tansFOZdKRo',
    },
    img('agron-infographic', 'AGRON — Capability Map', agronInfographic, 'Infographic', 'Infographic'),
    img('agron-hero', 'AGRON — Brand Visual', agronHero, 'Cover image'),
  ],
  'agron-work': [
    img('agronwork-hero', 'AGRON Work — Brand Visual', agronWorkHero, 'Cover image'),
  ],
  '1inow': [
    {
      kind: 'pdf',
      id: '1inow-environment',
      title: '1inow — Environment Presentation',
      subtitle: 'Project overview',
      meta: 'PDF · Presentation',
      url: oneinowEnvironmentPdf.url,
      fileName: '1inow-environment.pdf',
      updatedAt: oneinowEnvironmentPdf.created_at,
    },
    img('1inow-hero', '1inow — Brand Visual', oneinowHero, 'Cover image'),
  ],
  baseline: [
    img('baseline-hero', 'BaseLine — Brand Visual', baselineHero, 'Cover image'),
  ],
  bioagecore: [
    img('bioage-hero', 'BioAge Core — Brand Visual', bioageHero, 'Cover image'),
  ],
  'biomath-core': [
    img('biomath-info-1', 'BioMath Core — System Architecture', biomathInfo1, 'Infographic 1/3', 'Infographic'),
    img('biomath-info-2', 'BioMath Core — Data & Modelling', biomathInfo2, 'Infographic 2/3', 'Infographic'),
    img('biomath-info-3', 'BioMath Core — Ecosystem Loop', biomathInfo3, 'Infographic 3/3', 'Infographic'),
    img('biomath-pres-orbital', 'Orbital Health Loop', biomathPresOrbital, 'Presentation visual'),
    img('biomath-pres-baseline', 'Baseline Engine', biomathPresBaseline, 'Presentation visual'),
    img('biomath-pres-blackbox', 'Health Black Box', biomathPresBlackbox, 'Presentation visual'),
    img('biomath-pres-time', 'Time-Series Model', biomathPresTime, 'Presentation visual'),
    img('biomath-pres-output', 'Output Layer', biomathPresOutput, 'Presentation visual'),
    img('biomath-blackbox', 'Health Black Box — Concept', biomathBlackbox, 'Concept visual'),
    img('biomath-supercomputer', 'Supercomputer Layer', biomathSupercomputer, 'Concept visual'),
    img('biomath-wellness', 'Wellness Center', biomathWellness, 'Concept visual'),
    img('biomath-hero', 'BioMath Core — Brand Visual', biomathHero, 'Cover image'),
  ],
  biomathlife: [
    img('biomathlife-hero', 'BioMath Life — Brand Visual', biomathLifeHero, 'Cover image'),
  ],
  familycore: [
    img('family-hero', 'Family Core — Brand Visual', familyHero, 'Cover image'),
  ],
  itsgoodtoday: [
    img('goodtoday-hero', "It's Good Today — Brand Visual", goodTodayHero, 'Cover image'),
  ],
  longevitycore: [
    img('longevity-hero', 'Longevity Core — Brand Visual', longevityHero, 'Cover image'),
  ],
  'luna-balance': [
    img('luna-info', 'Luna Balance — Capability Map', lunaInfographic, 'Infographic', 'Infographic'),
    img('luna-hero', 'Luna Balance — Brand Visual', lunaHero, 'Cover image'),
  ],
  'mrx-health': [
    img('mrx-hero', 'MRX Health — Brand Visual', mrxHero, 'Cover image'),
  ],
  myday: [
    img('myday-hero', 'MyDay — Brand Visual', mydayHero, 'Cover image'),
  ],
  saven: [
    img('saven-info', 'SAVEN — Capability Map', savenInfographic, 'Infographic', 'Infographic'),
    img('saven-robot', 'SAVEN — Companion Robot', savenRobot, 'Concept visual'),
    img('saven-robot-elderly', 'SAVEN — In-Home Use', savenRobotElderly, 'Concept visual'),
    img('saven-hero', 'SAVEN — Brand Visual', savenHero, 'Cover image'),
  ],
  seniorcore: [
    img('senior-hero', 'Senior Core — Brand Visual', seniorHero, 'Cover image'),
  ],
  skincore: [
    img('skin-hero', 'Skin Core — Brand Visual', skinHero, 'Cover image'),
  ],
  stresscore: [
    img('stress-hero', 'Stress Core — Brand Visual', stressHero, 'Cover image'),
  ],
  t1d: [
    img('t1d-visual', 'T1D — Clinical Visual', t1dVisual, 'Concept visual'),
    img('t1d-hero', 'T1D — Brand Visual', t1dHero, 'Cover image'),
  ],
  'table-served': [
    img('tableserved-hero', 'Table Served — Brand Visual', tableHero, 'Cover image'),
  ],
  terraaero: [
    img('terra-info', 'TerraAero — Capability Map', terraInfographic, 'Infographic', 'Infographic'),
    img('terra-hero', 'TerraAero — Brand Visual', terraHero, 'Cover image'),
  ],
  vitalcore: [
    img('vital-hero', 'Vital Core — Brand Visual', vitalHero, 'Cover image'),
  ],
};

export const getProjectMediaExtras = (slug: string): MediaItem[] => {
  return extrasBySlug[slug] ?? [];
};
