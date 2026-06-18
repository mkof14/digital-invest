import type { MediaItem } from '@/components/ProjectMediaRoom';
import agronTacticalPdf from '@/assets/projects/agron-tactical-blueprint.pdf.asset.json';
import agronAutonomousPdf from '@/assets/projects/agron-autonomous-workforce.pdf.asset.json';
import agronAutonomousV2Pdf from '@/assets/projects/agron-autonomous-workforce-v2.pdf.asset.json';
import oneinowEnvironmentPdf from '@/assets/projects/1inow-environment.pdf.asset.json';

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
    },
    {
      kind: 'pdf',
      id: 'agron-workforce-1',
      title: 'Autonomous Workforce Infrastructure',
      subtitle: 'Foundational model',
      meta: 'PDF · Vol. I',
      url: agronAutonomousPdf.url,
      fileName: 'Autonomous_Workforce_Infrastructure.pdf',
    },
    {
      kind: 'pdf',
      id: 'agron-workforce-2',
      title: 'Autonomous Workforce — Vol. II',
      subtitle: 'Expanded framework',
      meta: 'PDF · Vol. II',
      url: agronAutonomousV2Pdf.url,
      fileName: 'Autonomous_Workforce_Infrastructure_v2.pdf',
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
    },
  ],
};

export const getProjectMediaExtras = (slug: string): MediaItem[] => {
  return extrasBySlug[slug] ?? [];
};
