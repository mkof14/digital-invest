import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";
import { PDFDocument, rgb, StandardFonts } from "https://esm.sh/pdf-lib@1.17.1";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
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

    console.log(`Generating investor brief for project: ${slug}`);

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
      console.error('Project not found:', error);
      return new Response(JSON.stringify({ error: 'Project not found' }), {
        status: 404,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    console.log(`Found project: ${project.title}`);

    // Create PDF
    const pdfDoc = await PDFDocument.create();
    const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);
    const timesRomanBold = await pdfDoc.embedFont(StandardFonts.TimesRomanBold);

    const pageWidth = 595;
    const pageHeight = 842;
    const margin = 50;
    const maxWidth = pageWidth - 2 * margin;

    let currentPage = pdfDoc.addPage([pageWidth, pageHeight]);
    let yPosition = pageHeight - margin;

    // Helper function to add new page if needed
    const checkAndAddNewPage = (requiredSpace: number) => {
      if (yPosition - requiredSpace < margin + 30) {
        currentPage = pdfDoc.addPage([pageWidth, pageHeight]);
        yPosition = pageHeight - margin;
        return true;
      }
      return false;
    };

    // Helper function to draw wrapped text
    const drawWrappedText = (text: string, fontSize: number, font: any, maxWidth: number) => {
      const words = text.split(' ');
      const lines: string[] = [];
      let currentLine = '';

      for (const word of words) {
        const testLine = currentLine ? `${currentLine} ${word}` : word;
        const width = font.widthOfTextAtSize(testLine, fontSize);
        
        if (width > maxWidth && currentLine) {
          lines.push(currentLine);
          currentLine = word;
        } else {
          currentLine = testLine;
        }
      }
      if (currentLine) lines.push(currentLine);

      for (const line of lines) {
        checkAndAddNewPage(fontSize + 5);
        currentPage.drawText(line, {
          x: margin,
          y: yPosition,
          size: fontSize,
          font: font,
          color: rgb(0.2, 0.2, 0.2),
        });
        yPosition -= fontSize + 5;
      }
      yPosition -= 5;
    };

    // 1. COVER / HEADER
    currentPage.drawText(project.title.toUpperCase(), {
      x: margin,
      y: yPosition,
      size: 24,
      font: timesRomanBold,
      color: rgb(0.1, 0.1, 0.1),
    });
    yPosition -= 40;

    currentPage.drawText(`Category: ${project.category}`, {
      x: margin,
      y: yPosition,
      size: 12,
      font: timesRomanFont,
      color: rgb(0.3, 0.3, 0.3),
    });
    yPosition -= 20;

    if (project.location) {
      currentPage.drawText(`Location: ${project.location}`, {
        x: margin,
        y: yPosition,
        size: 12,
        font: timesRomanFont,
        color: rgb(0.3, 0.3, 0.3),
      });
      yPosition -= 20;
    }

    currentPage.drawText(`Status: ${project.status}`, {
      x: margin,
      y: yPosition,
      size: 12,
      font: timesRomanFont,
      color: rgb(0.3, 0.3, 0.3),
    });
    yPosition -= 30;

    currentPage.drawText('A portfolio project developed by Digital Invest Inc.', {
      x: margin,
      y: yPosition,
      size: 10,
      font: timesRomanFont,
      color: rgb(0.4, 0.4, 0.4),
    });
    yPosition -= 50;

    // 2. SUMMARY BLOCK
    checkAndAddNewPage(80);
    currentPage.drawText('SUMMARY', {
      x: margin,
      y: yPosition,
      size: 16,
      font: timesRomanBold,
      color: rgb(0.1, 0.1, 0.1),
    });
    yPosition -= 30;

    drawWrappedText(project.short_description, 11, timesRomanFont, maxWidth);
    yPosition -= 10;

    const summaryBullets = [
      'Part of the Digital Invest multi-sector portfolio.',
      'All participation is private and offline; this brief is informational only.'
    ];

    for (const bullet of summaryBullets) {
      checkAndAddNewPage(20);
      currentPage.drawText(`• ${bullet}`, {
        x: margin,
        y: yPosition,
        size: 10,
        font: timesRomanFont,
        color: rgb(0.3, 0.3, 0.3),
      });
      yPosition -= 20;
    }
    yPosition -= 20;

    // 3. PROJECT OVERVIEW
    checkAndAddNewPage(80);
    currentPage.drawText('PROJECT OVERVIEW', {
      x: margin,
      y: yPosition,
      size: 16,
      font: timesRomanBold,
      color: rgb(0.1, 0.1, 0.1),
    });
    yPosition -= 30;

    drawWrappedText(project.long_description, 11, timesRomanFont, maxWidth);
    yPosition -= 20;

    // 4. INVESTMENT HIGHLIGHTS
    checkAndAddNewPage(80);
    currentPage.drawText('INVESTMENT HIGHLIGHTS', {
      x: margin,
      y: yPosition,
      size: 16,
      font: timesRomanBold,
      color: rgb(0.1, 0.1, 0.1),
    });
    yPosition -= 30;

    const getHighlights = (category: string) => {
      const categoryLower = category.toLowerCase();
      if (categoryLower.includes('agro') || categoryLower.includes('agriculture')) {
        return [
          'Real demand from agricultural operations',
          'Scalable drone services and analytics platform',
          'Manufacturing roadmap for proprietary hardware',
          'Unit economics designed for sustainability',
          'Cross-project data infrastructure synergy'
        ];
      } else if (categoryLower.includes('health') || categoryLower.includes('longevity')) {
        return [
          'Data infrastructure for precision medicine',
          'AI-driven health insights and analytics',
          'Multi-layer business model (subscriptions, partnerships)',
          'Subscription revenue potential',
          'Integration with Digital Invest portfolio'
        ];
      } else if (categoryLower.includes('food') || categoryLower.includes('nutrition')) {
        return [
          'Standardized food manufacturing platform',
          'AI-powered recipe engine and optimization',
          'Repeatability and quality control systems',
          'Wellness and nutrition synergy',
          'B2B and white-label revenue streams'
        ];
      } else {
        return [
          'Portfolio structure with shared infrastructure',
          'Multi-sector diversification and stability',
          'Cross-project operational synergies',
          'Real platforms with operational history',
          'Long-term value creation strategy',
          'Private format allowing individual discussions'
        ];
      }
    };

    const highlights = getHighlights(project.category);
    for (const highlight of highlights) {
      checkAndAddNewPage(20);
      currentPage.drawText(`• ${highlight}`, {
        x: margin,
        y: yPosition,
        size: 11,
        font: timesRomanFont,
        color: rgb(0.2, 0.2, 0.2),
      });
      yPosition -= 20;
    }
    yPosition -= 20;

    // 5. WHY NOW
    checkAndAddNewPage(80);
    currentPage.drawText('WHY NOW', {
      x: margin,
      y: yPosition,
      size: 16,
      font: timesRomanBold,
      color: rgb(0.1, 0.1, 0.1),
    });
    yPosition -= 30;

    const getWhyNow = (category: string) => {
      const categoryLower = category.toLowerCase();
      if (categoryLower.includes('agro') || categoryLower.includes('agriculture')) {
        return [
          'Agro-drone operations transitioning from pilot phase to daily operations',
          'Growing demand for precision agriculture solutions',
          'Technology maturity enabling cost-effective deployment'
        ];
      } else if (categoryLower.includes('health') || categoryLower.includes('longevity')) {
        return [
          'Growing demand for structured health and longevity tools',
          'AI and data infrastructure reaching practical application stage',
          'Market readiness for precision medicine platforms'
        ];
      } else if (categoryLower.includes('food') || categoryLower.includes('nutrition')) {
        return [
          'Need for standardized, data-driven food manufacturing',
          'Rising consumer interest in personalized nutrition',
          'Technology enabling scalable custom food production'
        ];
      } else {
        return [
          'Multi-project ecosystems gaining relevance vs. isolated ventures',
          'Infrastructure synergies creating competitive advantages',
          'Market conditions favoring diversified portfolios'
        ];
      }
    };

    const whyNow = getWhyNow(project.category);
    for (const point of whyNow) {
      checkAndAddNewPage(20);
      currentPage.drawText(`• ${point}`, {
        x: margin,
        y: yPosition,
        size: 11,
        font: timesRomanFont,
        color: rgb(0.2, 0.2, 0.2),
      });
      yPosition -= 20;
    }
    yPosition -= 20;

    // 6. REVENUE MODEL
    checkAndAddNewPage(80);
    currentPage.drawText('HOW THIS PROJECT CAN GENERATE REVENUE', {
      x: margin,
      y: yPosition,
      size: 16,
      font: timesRomanBold,
      color: rgb(0.1, 0.1, 0.1),
    });
    yPosition -= 30;

    const getRevenueModel = (slug: string) => {
      if (slug.includes('terraaero')) {
        return [
          'Drone services for agricultural operations',
          'Data analytics and reporting subscriptions',
          'Future manufacturing and hardware sales',
          'Licensing of proprietary technology'
        ];
      } else if (slug.includes('biomathcore')) {
        return [
          'Platform subscriptions and licensing',
          'API integrations with healthcare systems',
          'Data analytics services',
          'Enterprise partnerships'
        ];
      } else if (slug.includes('biomathlife') || slug.includes('biomath-life')) {
        return [
          'Individual and family memberships',
          'Healthcare provider partnerships',
          'Corporate wellness programs',
          'Data and research collaborations'
        ];
      } else if (slug.includes('dishcore')) {
        return [
          'Direct food production and sales',
          'B2B manufacturing partnerships',
          'White-label services',
          'Recipe and data licensing'
        ];
      } else {
        return [
          'Portfolio value creation through shared infrastructure',
          'Cross-project operational efficiencies',
          'Strategic project development and exits',
          'Platform and technology licensing'
        ];
      }
    };

    const revenueModel = getRevenueModel(slug);
    for (const stream of revenueModel) {
      checkAndAddNewPage(20);
      currentPage.drawText(`• ${stream}`, {
        x: margin,
        y: yPosition,
        size: 11,
        font: timesRomanFont,
        color: rgb(0.2, 0.2, 0.2),
      });
      yPosition -= 20;
    }
    yPosition -= 20;

    // 7. ROADMAP
    checkAndAddNewPage(80);
    currentPage.drawText('ROADMAP', {
      x: margin,
      y: yPosition,
      size: 16,
      font: timesRomanBold,
      color: rgb(0.1, 0.1, 0.1),
    });
    yPosition -= 30;

    const phases = [
      'Phase 1 — Foundation: Core platform development and initial operations',
      'Phase 2 — Expansion: Market validation and service scaling',
      'Phase 3 — Scaling: Operational growth and infrastructure expansion',
      'Phase 4 — Long-term growth: Market leadership and portfolio synergies'
    ];

    for (const phase of phases) {
      checkAndAddNewPage(20);
      currentPage.drawText(`• ${phase}`, {
        x: margin,
        y: yPosition,
        size: 11,
        font: timesRomanFont,
        color: rgb(0.2, 0.2, 0.2),
      });
      yPosition -= 20;
    }
    yPosition -= 20;

    // 8. RISK SUMMARY
    checkAndAddNewPage(80);
    currentPage.drawText('RISK SUMMARY', {
      x: margin,
      y: yPosition,
      size: 16,
      font: timesRomanBold,
      color: rgb(0.1, 0.1, 0.1),
    });
    yPosition -= 30;

    const risks = [
      'Early-stage projects can experience delays or strategy changes',
      'Regulatory environments may evolve and impact operations',
      'Market demand can vary and affect revenue projections',
      'Operational and execution risks exist in all ventures',
      'Technology development may face unforeseen challenges',
      'No financial results or returns are guaranteed',
      'Participation can result in partial or full loss of capital'
    ];

    for (const risk of risks) {
      checkAndAddNewPage(20);
      currentPage.drawText(`• ${risk}`, {
        x: margin,
        y: yPosition,
        size: 11,
        font: timesRomanFont,
        color: rgb(0.2, 0.2, 0.2),
      });
      yPosition -= 20;
    }
    yPosition -= 20;

    // 9. ABOUT DIGITAL INVEST
    checkAndAddNewPage(80);
    currentPage.drawText('ABOUT DIGITAL INVEST', {
      x: margin,
      y: yPosition,
      size: 16,
      font: timesRomanBold,
      color: rgb(0.1, 0.1, 0.1),
    });
    yPosition -= 30;

    const aboutText = 'Digital Invest Inc. develops and operates multi-sector projects in HealthTech, AgroTech, FoodTech, AI systems, and manufacturing. The portfolio is built around real-economy execution, long-term strategy, and shared infrastructure.';
    drawWrappedText(aboutText, 11, timesRomanFont, maxWidth);
    yPosition -= 20;

    // 10. DISCLAIMER
    checkAndAddNewPage(100);
    yPosition = margin + 50; // Position at bottom
    currentPage.drawText('DISCLAIMER', {
      x: margin,
      y: yPosition,
      size: 10,
      font: timesRomanBold,
      color: rgb(0.3, 0.3, 0.3),
    });
    yPosition -= 20;

    const disclaimerText = 'This document is for informational purposes only and does not constitute an offer to sell or a solicitation of an offer to buy any securities. It is not financial, legal, or tax advice. Any potential participation would be discussed individually and handled offline, in compliance with applicable laws and regulations.';
    const disclaimerWords = disclaimerText.split(' ');
    const disclaimerLines: string[] = [];
    let currentDisclaimerLine = '';

    for (const word of disclaimerWords) {
      const testLine = currentDisclaimerLine ? `${currentDisclaimerLine} ${word}` : word;
      const width = timesRomanFont.widthOfTextAtSize(testLine, 9);
      
      if (width > maxWidth && currentDisclaimerLine) {
        disclaimerLines.push(currentDisclaimerLine);
        currentDisclaimerLine = word;
      } else {
        currentDisclaimerLine = testLine;
      }
    }
    if (currentDisclaimerLine) disclaimerLines.push(currentDisclaimerLine);

    for (const line of disclaimerLines) {
      currentPage.drawText(line, {
        x: margin,
        y: yPosition,
        size: 9,
        font: timesRomanFont,
        color: rgb(0.4, 0.4, 0.4),
      });
      yPosition -= 15;
    }

    // Add page numbers
    const pages = pdfDoc.getPages();
    pages.forEach((page, index) => {
      page.drawText(`Page ${index + 1} of ${pages.length}`, {
        x: pageWidth / 2 - 30,
        y: 20,
        size: 9,
        font: timesRomanFont,
        color: rgb(0.5, 0.5, 0.5),
      });
    });

    const pdfBytes = await pdfDoc.save();

    console.log(`PDF generated successfully for ${slug}, size: ${pdfBytes.length} bytes`);

    return new Response(pdfBytes, {
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
