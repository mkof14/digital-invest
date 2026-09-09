import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";
import { PDFDocument, rgb, StandardFonts } from "https://esm.sh/pdf-lib@1.17.1";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

/** WinAnsi-safe text: replaces typographic and non-latin characters. */
const sanitize = (input: unknown): string => {
  let s = String(input ?? '');
  s = s
    .replace(/[\u2013\u2014\u2015]/g, '-')
    .replace(/[\u2018\u2019\u201A\u2032]/g, "'")
    .replace(/[\u201C\u201D\u201E\u2033]/g, '"')
    .replace(/[\u2022\u25CF\u00B7]/g, '-')
    .replace(/\u2026/g, '...')
    .replace(/[\u00A0\u202F\u2009]/g, ' ')
    .replace(/[\u2190-\u21FF\u2600-\u27BF\uD800-\uDFFF\uFE0F]/g, '')
    .replace(/\u00D7/g, 'x');
  // Strip markdown decoration
  s = s
    .replace(/^\s{0,3}#{1,6}\s*/gm, '')
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/(^|\s)\*(\S[^*]*?)\*/g, '$1$2')
    .replace(/`{1,3}/g, '')
    .replace(/^\s*[-*+]\s+/gm, '- ')
    .replace(/\[(.*?)\]\((.*?)\)/g, '$1')
    .replace(/\|/g, ' ')
    .replace(/^\s*>+\s?/gm, '');
  // Drop anything still outside the WinAnsi range
  s = s.replace(/[^\x09\x0A\x0D\x20-\x7E\u00A1-\u00FF]/g, '');
  return s.replace(/[ \t]+/g, ' ').replace(/\n{3,}/g, '\n\n').trim();
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const url = new URL(req.url);
    const slug = url.pathname.split('/').pop();

    if (!slug) {
      return new Response(JSON.stringify({ error: 'Project slug is required' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    const { data: project, error } = await supabase
      .from('projects')
      .select('*')
      .eq('slug', slug)
      .single();

    if (error || !project) {
      return new Response(JSON.stringify({ error: 'Project not found' }), {
        status: 404,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const pdfDoc = await PDFDocument.create();
    const bodyFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

    const pageWidth = 595;
    const pageHeight = 842;
    const margin = 56;
    const bottomLimit = margin + 40;
    const maxWidth = pageWidth - 2 * margin;

    let page = pdfDoc.addPage([pageWidth, pageHeight]);
    let y = pageHeight - margin;

    const newPage = () => {
      page = pdfDoc.addPage([pageWidth, pageHeight]);
      y = pageHeight - margin;
    };

    const ensure = (space: number) => {
      if (y - space < bottomLimit) newPage();
    };

    const wrap = (text: string, size: number, font: any, width: number) => {
      const lines: string[] = [];
      for (const paragraph of text.split('\n')) {
        if (!paragraph.trim()) {
          lines.push('');
          continue;
        }
        let line = '';
        for (const word of paragraph.split(' ')) {
          const test = line ? `${line} ${word}` : word;
          if (font.widthOfTextAtSize(test, size) > width && line) {
            lines.push(line);
            line = word;
          } else {
            line = test;
          }
        }
        if (line) lines.push(line);
      }
      return lines;
    };

    const drawParagraph = (
      text: string,
      opts: { size?: number; font?: any; color?: [number, number, number]; indent?: number; gap?: number } = {}
    ) => {
      const size = opts.size ?? 10.5;
      const font = opts.font ?? bodyFont;
      const color = opts.color ?? [0.22, 0.24, 0.28];
      const indent = opts.indent ?? 0;
      const leading = size * 1.45;
      const clean = sanitize(text);
      if (!clean) return;
      for (const line of wrap(clean, size, font, maxWidth - indent)) {
        if (!line) {
          y -= leading * 0.5;
          continue;
        }
        ensure(leading);
        page.drawText(line, {
          x: margin + indent,
          y,
          size,
          font,
          color: rgb(color[0], color[1], color[2]),
        });
        y -= leading;
      }
      y -= opts.gap ?? 6;
    };

    const drawHeading = (text: string) => {
      ensure(60);
      y -= 10;
      const clean = sanitize(text).toUpperCase();
      for (const line of wrap(clean, 13, boldFont, maxWidth)) {
        ensure(20);
        page.drawText(line, { x: margin, y, size: 13, font: boldFont, color: rgb(0.08, 0.1, 0.14) });
        y -= 18;
      }
      ensure(12);
      page.drawLine({
        start: { x: margin, y: y + 6 },
        end: { x: margin + maxWidth, y: y + 6 },
        thickness: 0.7,
        color: rgb(0.8, 0.82, 0.86),
      });
      y -= 12;
    };

    const drawBullets = (items: string[], size = 10.5) => {
      for (const item of items) {
        const clean = sanitize(item);
        if (!clean) continue;
        const lines = wrap(clean, size, bodyFont, maxWidth - 16);
        lines.forEach((line, idx) => {
          ensure(size * 1.45);
          if (idx === 0) {
            page.drawText('-', { x: margin, y, size, font: bodyFont, color: rgb(0.35, 0.38, 0.44) });
          }
          page.drawText(line, { x: margin + 16, y, size, font: bodyFont, color: rgb(0.22, 0.24, 0.28) });
          y -= size * 1.45;
        });
        y -= 3;
      }
      y -= 6;
    };

    // ---------- COVER ----------
    const rawTitle = sanitize(project.title);
    const [titleMain, ...titleRest] = rawTitle.split(' - ');
    const subtitle = titleRest.join(' - ');

    let titleSize = 30;
    while (boldFont.widthOfTextAtSize(titleMain, titleSize) > maxWidth && titleSize > 16) titleSize -= 1;
    page.drawText(titleMain, { x: margin, y, size: titleSize, font: boldFont, color: rgb(0.07, 0.09, 0.13) });
    y -= titleSize + 12;

    if (subtitle) {
      for (const line of wrap(subtitle, 14, bodyFont, maxWidth)) {
        page.drawText(line, { x: margin, y, size: 14, font: bodyFont, color: rgb(0.3, 0.33, 0.38) });
        y -= 20;
      }
      y -= 4;
    }

    page.drawLine({
      start: { x: margin, y },
      end: { x: margin + maxWidth, y },
      thickness: 1,
      color: rgb(0.75, 0.78, 0.83),
    });
    y -= 24;

    const metaLines = [
      `Category: ${project.category ?? '-'}`,
      project.location ? `Location: ${project.location}` : '',
      `Status: ${project.status ?? '-'}`,
      project.website_url ? `Website: ${project.website_url}` : '',
    ].filter(Boolean) as string[];

    for (const meta of metaLines) {
      const clean = sanitize(meta);
      ensure(16);
      page.drawText(clean, { x: margin, y, size: 10.5, font: bodyFont, color: rgb(0.32, 0.35, 0.4) });
      y -= 16;
    }
    y -= 8;
    drawParagraph('A portfolio project developed by Digital Invest Inc.', {
      size: 10,
      color: [0.45, 0.47, 0.52],
      gap: 12,
    });

    // ---------- SUMMARY ----------
    drawHeading('Summary');
    drawParagraph(project.short_description ?? '');
    drawBullets([
      'Part of the Digital Invest multi-sector portfolio.',
      'All participation is private and offline; this brief is informational only.',
    ], 10);

    // ---------- OVERVIEW ----------
    if (project.long_description) {
      drawHeading('Project Overview');
      drawParagraph(project.long_description);
    }

    const categoryLower = String(project.category ?? '').toLowerCase();
    const slugLower = slug.toLowerCase();
    const isAutonomous =
      slugLower.startsWith('agron') ||
      categoryLower.includes('autonomous') ||
      categoryLower.includes('robotic') ||
      categoryLower.includes('security');

    // ---------- HIGHLIGHTS ----------
    drawHeading('Investment Highlights');
    if (isAutonomous) {
      drawBullets([
        'Operational experience combined with autonomous systems and software',
        'Professional services, assessment and training as an established revenue base',
        'Intelligence and monitoring capabilities extending into maritime environments',
        'Modular infrastructure adaptable to different operating environments',
        'Recurring services alongside project-based delivery',
        'Human-in-command approach across all security applications',
      ]);
    } else if (categoryLower.includes('health') || categoryLower.includes('longevity')) {
      drawBullets([
        'Data infrastructure for precision medicine',
        'AI-driven health insights and analytics',
        'Multi-layer business model (subscriptions, partnerships)',
        'Subscription revenue potential',
        'Integration with the Digital Invest portfolio',
      ]);
    } else if (categoryLower.includes('food') || categoryLower.includes('nutrition')) {
      drawBullets([
        'Standardized food manufacturing platform',
        'AI-powered recipe engine and optimization',
        'Repeatability and quality control systems',
        'Wellness and nutrition synergy',
        'B2B and white-label revenue streams',
      ]);
    } else if (categoryLower.includes('agro') || categoryLower.includes('agriculture')) {
      drawBullets([
        'Real demand from agricultural operations',
        'Scalable services and analytics platform',
        'Manufacturing roadmap for proprietary hardware',
        'Unit economics designed for sustainability',
        'Cross-project data infrastructure synergy',
      ]);
    } else {
      drawBullets([
        'Portfolio structure with shared infrastructure',
        'Multi-sector diversification and stability',
        'Cross-project operational synergies',
        'Real platforms with operational history',
        'Long-term value creation strategy',
        'Private format allowing individual discussions',
      ]);
    }

    // ---------- WHY NOW ----------
    drawHeading('Why Now');
    if (isAutonomous) {
      drawBullets([
        'Organizations increasingly need operational capability, not only equipment',
        'Autonomous systems, sensors and software are converging into integrated operations',
        'Maritime and infrastructure operators are investing in situational awareness',
      ]);
    } else if (categoryLower.includes('health') || categoryLower.includes('longevity')) {
      drawBullets([
        'Growing demand for structured health and longevity tools',
        'AI and data infrastructure reaching practical application stage',
        'Market readiness for precision medicine platforms',
      ]);
    } else {
      drawBullets([
        'Multi-project ecosystems gaining relevance vs. isolated ventures',
        'Infrastructure synergies creating competitive advantages',
        'Market conditions favoring diversified portfolios',
      ]);
    }

    // ---------- REVENUE ----------
    drawHeading('How This Project Can Generate Revenue');
    if (isAutonomous) {
      drawBullets([
        'Professional services: consulting, assessment, validation, capability development',
        'Training: operator and instructor programmes, training-centre development',
        'Technology: software, system integration and technical infrastructure',
        'Recurring services: subscriptions, intelligence, monitoring and support',
        'Deployment: installations, mobile units and site-specific integration',
      ]);
    } else if (slugLower.includes('terraaero')) {
      drawBullets([
        'Services for agricultural operations',
        'Data analytics and reporting subscriptions',
        'Future manufacturing and hardware sales',
        'Licensing of proprietary technology',
      ]);
    } else if (slugLower.includes('biomath')) {
      drawBullets([
        'Platform subscriptions and licensing',
        'API integrations with healthcare systems',
        'Data analytics services',
        'Enterprise partnerships',
      ]);
    } else {
      drawBullets([
        'Portfolio value creation through shared infrastructure',
        'Cross-project operational efficiencies',
        'Strategic project development',
        'Platform and technology licensing',
      ]);
    }

    // ---------- ROADMAP ----------
    drawHeading('Roadmap');
    drawBullets([
      'Phase 1 - Foundation: core platform development and initial operations',
      'Phase 2 - Expansion: market validation and service scaling',
      'Phase 3 - Scaling: operational growth and infrastructure expansion',
      'Phase 4 - Long-term growth: market position and portfolio synergies',
    ]);

    // ---------- RISKS ----------
    drawHeading('Risk Summary');
    drawBullets([
      'Early-stage projects can experience delays or strategy changes',
      'Regulatory environments may evolve and impact operations',
      'Market demand can vary and affect expectations',
      'Operational and execution risks exist in all ventures',
      'Technology development may face unforeseen challenges',
      'No financial results or returns are guaranteed',
      'Participation can result in partial or full loss of capital',
    ]);

    // ---------- ABOUT ----------
    drawHeading('About Digital Invest');
    drawParagraph(
      'Digital Invest Inc. develops and operates multi-sector projects across health technology, AI systems, autonomous operations, advanced materials and manufacturing. The portfolio is built around real-economy execution, long-term strategy and shared infrastructure.'
    );

    // ---------- DISCLAIMER ----------
    ensure(120);
    drawHeading('Disclaimer');
    drawParagraph(
      'This document is for informational purposes only and does not constitute an offer to sell or a solicitation of an offer to buy any securities. It is not financial, legal or tax advice. Any potential participation would be discussed individually and handled offline, in compliance with applicable laws and regulations.',
      { size: 9, color: [0.42, 0.45, 0.5] }
    );

    // ---------- PAGE NUMBERS ----------
    const pages = pdfDoc.getPages();
    pages.forEach((p, index) => {
      const label = `Page ${index + 1} of ${pages.length}`;
      p.drawText(label, {
        x: pageWidth / 2 - bodyFont.widthOfTextAtSize(label, 8.5) / 2,
        y: 26,
        size: 8.5,
        font: bodyFont,
        color: rgb(0.55, 0.57, 0.62),
      });
    });

    const pdfBytes = await pdfDoc.save();

    return new Response(pdfBytes as unknown as BodyInit, {
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${slug}-investor-brief.pdf"`,
      },
    });
  } catch (error) {
    console.error('Error generating PDF:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
