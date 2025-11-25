import { PDFDocument, rgb, StandardFonts } from 'https://esm.sh/pdf-lib@1.17.1';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log('Starting Investor Handbook PDF generation');

    const pdfDoc = await PDFDocument.create();
    const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const helveticaBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

    const pageWidth = 612;
    const pageHeight = 792;
    const margin = 60;
    const contentWidth = pageWidth - (margin * 2);

    // Color scheme
    const darkColor = rgb(0.043, 0.067, 0.125); // #0B1120
    const lightColor = rgb(0.42, 0.42, 0.42);
    const accentColor = rgb(0.22, 0.74, 0.97);

    let currentPage = pdfDoc.addPage([pageWidth, pageHeight]);
    let yPosition = pageHeight - margin;
    let pageNumber = 1;

    // Helper function to add new page
    const addNewPage = () => {
      currentPage = pdfDoc.addPage([pageWidth, pageHeight]);
      yPosition = pageHeight - margin;
      pageNumber++;
      
      // Add page number
      currentPage.drawText(`${pageNumber}`, {
        x: pageWidth - margin - 20,
        y: 30,
        size: 9,
        font: helveticaFont,
        color: lightColor,
      });
    };

    // Helper function to check if we need a new page
    const checkPageBreak = (neededSpace: number) => {
      if (yPosition - neededSpace < margin) {
        addNewPage();
      }
    };

    // Helper function to sanitize text for PDF encoding
    const sanitizeText = (text: string): string => {
      return text
        .replace(/→/g, '->')
        .replace(/'/g, "'")  // left single quote
        .replace(/'/g, "'")  // right single quote
        .replace(/"/g, '"')  // left double quote
        .replace(/"/g, '"')  // right double quote
        .replace(/–/g, '-')  // en dash
        .replace(/—/g, '-')  // em dash
        .replace(/…/g, '...') // ellipsis
        .replace(/[\u0080-\uFFFF]/g, '?'); // Replace any remaining non-ASCII with ?
    };

    // Helper function to draw text with wrapping
    const drawWrappedText = (text: string, x: number, maxWidth: number, fontSize: number, font: any, color: any, lineHeight: number) => {
      // Sanitize the text first
      const sanitizedText = sanitizeText(text);
      
      // Split into paragraphs first to handle newlines
      const paragraphs = sanitizedText.split('\n');
      
      for (const paragraph of paragraphs) {
        const words = paragraph.split(' ');
        let line = '';
        
        for (const word of words) {
          const testLine = line + (line ? ' ' : '') + word;
          const textWidth = font.widthOfTextAtSize(testLine, fontSize);
          
          if (textWidth > maxWidth && line) {
            checkPageBreak(lineHeight);
            currentPage.drawText(line, { x, y: yPosition, size: fontSize, font, color });
            yPosition -= lineHeight;
            line = word;
          } else {
            line = testLine;
          }
        }
        
        if (line) {
          checkPageBreak(lineHeight);
          currentPage.drawText(line, { x, y: yPosition, size: fontSize, font, color });
          yPosition -= lineHeight;
        }
      }
    };

    // COVER PAGE
    currentPage.drawText(sanitizeText('DIGITAL INVEST INC.'), {
      x: margin,
      y: pageHeight - 200,
      size: 36,
      font: helveticaBold,
      color: darkColor,
    });

    currentPage.drawText(sanitizeText('Investor Handbook - 2025 Edition'), {
      x: margin,
      y: pageHeight - 240,
      size: 18,
      font: helveticaFont,
      color: lightColor,
    });

    currentPage.drawText(sanitizeText('Engineering the Future of Health, Agriculture, Food, and AI Infrastructure'), {
      x: margin,
      y: pageHeight - 280,
      size: 12,
      font: helveticaFont,
      color: lightColor,
    });

    currentPage.drawText('digitalinvest.com', {
      x: margin,
      y: 60,
      size: 11,
      font: helveticaFont,
      color: accentColor,
    });

    // SECTION 1 - Introduction
    addNewPage();
    yPosition -= 20;

    currentPage.drawText('1. Introduction', {
      x: margin,
      y: yPosition,
      size: 24,
      font: helveticaBold,
      color: darkColor,
    });
    yPosition -= 40;

    currentPage.drawText('About Digital Invest Inc.', {
      x: margin,
      y: yPosition,
      size: 14,
      font: helveticaBold,
      color: darkColor,
    });
    yPosition -= 25;

    const intro1 = "Digital Invest Inc. is a U.S.-based technology and innovation company operating across HealthTech, AgroTech, FoodTech, AI systems, and real-economy infrastructure. Founded (originally as GENEX) in 2010, we have spent more than a decade building deep technological platforms and operational systems that scale across sectors.";
    drawWrappedText(intro1, margin, contentWidth, 11, helveticaFont, darkColor, 16);
    yPosition -= 10;

    drawWrappedText("We build long-term infrastructure — not short-term software.", margin, contentWidth, 11, helveticaBold, darkColor, 16);
    yPosition -= 10;

    drawWrappedText("Our portfolio includes:", margin, contentWidth, 11, helveticaFont, darkColor, 16);
    yPosition -= 5;

    const projects = [
      "BioMath Core — Intelligent health operating system",
      "BioMath Life — Long-term health and longevity navigation",
      "TerraAero — AgroDrone operations + U.S.-based manufacturing initiative",
      "DishCore — Precision food manufacturing engine",
      "Digital Invest — Multi-sector backbone & intelligence layer"
    ];

    for (const project of projects) {
      checkPageBreak(20);
      currentPage.drawText(sanitizeText('• ' + project), {
        x: margin + 10,
        y: yPosition,
        size: 11,
        font: helveticaFont,
        color: darkColor,
      });
      yPosition -= 16;
    }
    yPosition -= 5;

    const intro2 = "This handbook is designed to give qualified partners and aligned stakeholders a structured understanding of how Digital Invest operates.";
    drawWrappedText(intro2, margin, contentWidth, 11, helveticaFont, darkColor, 16);
    yPosition -= 5;

    drawWrappedText("It is not a public offering and does not constitute financial advice.", margin, contentWidth, 11, helveticaBold, darkColor, 16);

    // SECTION 2 - Portfolio Overview
    addNewPage();
    yPosition -= 20;

    currentPage.drawText('2. Portfolio Overview', {
      x: margin,
      y: yPosition,
      size: 24,
      font: helveticaBold,
      color: darkColor,
    });
    yPosition -= 40;

    currentPage.drawText('A Multi-Sector Portfolio Built for Real-World Impact', {
      x: margin,
      y: yPosition,
      size: 14,
      font: helveticaBold,
      color: darkColor,
    });
    yPosition -= 25;

    drawWrappedText("Digital Invest operates across multiple pillars:", margin, contentWidth, 11, helveticaFont, darkColor, 16);
    yPosition -= 10;

    const pillars = [
      { title: "1. Health Intelligence", items: ["Interpretation of biological, clinical, and lifestyle data", "Long-term risk navigation", "Personalized insights, not raw dashboards"] },
      { title: "2. AgroTech", items: ["Precision agriculture and drone-based operations", "U.S.-based drone manufacturing (future initiative)", "Resource optimization and field intelligence"] },
      { title: "3. FoodTech", items: ["Precision food production", "Intelligent manufacturing processes", "Nutrition logic integrated with real-world operations"] },
      { title: "4. AI & Data Systems", items: ["Cross-platform intelligence layer", "Structured reasoning engines", "Infrastructure for real-economy decision-making"] },
      { title: "5. Real-Economy Systems", items: ["Logistics", "Operations", "Industrial scaling", "Multi-sector coordination"] }
    ];

    for (const pillar of pillars) {
      checkPageBreak(80);
      currentPage.drawText(pillar.title, {
        x: margin,
        y: yPosition,
        size: 12,
        font: helveticaBold,
        color: darkColor,
      });
      yPosition -= 18;

      for (const item of pillar.items) {
        checkPageBreak(20);
        currentPage.drawText('- ' + item, {
          x: margin + 15,
          y: yPosition,
          size: 10,
          font: helveticaFont,
          color: darkColor,
        });
        yPosition -= 14;
      }
      yPosition -= 10;
    }

    // SECTION 3 - Strategic Philosophy
    addNewPage();
    yPosition -= 20;

    currentPage.drawText('3. Strategic Philosophy', {
      x: margin,
      y: yPosition,
      size: 24,
      font: helveticaBold,
      color: darkColor,
    });
    yPosition -= 40;

    currentPage.drawText('Our Principles', {
      x: margin,
      y: yPosition,
      size: 14,
      font: helveticaBold,
      color: darkColor,
    });
    yPosition -= 25;

    const principles = [
      { num: "1.", title: "Long-Term Design", desc: "We build platforms that evolve over years, not months." },
      { num: "2.", title: "Deep Execution", desc: "Real progress is measured in systems deployed and operations running." },
      { num: "3.", title: "Clear Intelligence", desc: "AI must explain, not overwhelm." },
      { num: "4.", title: "Human Impact", desc: "Every platform must improve real life: health, food, agriculture, operations." },
      { num: "5.", title: "American-Based Development", desc: "All core systems are built and scaled in the United States." },
      { num: "6.", title: "Engineering First", desc: "Great systems come from great engineering, not marketing." }
    ];

    for (const principle of principles) {
      checkPageBreak(45);
      currentPage.drawText(sanitizeText(`${principle.num} ${principle.title}`), {
        x: margin,
        y: yPosition,
        size: 12,
        font: helveticaBold,
        color: darkColor,
      });
      yPosition -= 18;
      drawWrappedText(principle.desc, margin + 15, contentWidth - 15, 10, helveticaFont, darkColor, 14);
      yPosition -= 10;
    }

    // SECTION 4 - Project Summaries
    addNewPage();
    yPosition -= 20;

    currentPage.drawText('4. Project Summaries', {
      x: margin,
      y: yPosition,
      size: 24,
      font: helveticaBold,
      color: darkColor,
    });
    yPosition -= 40;

    const projectSummaries = [
      { name: "BioMath Core", desc: "Intelligent health operating system that unifies medical, biological, lifestyle, and genetic data into clear interpretation. A structured model that supports long-term decisions, clinical navigation, and actionable insights." },
      { name: "BioMath Life", desc: "A long-term longevity environment. Organizes daily behaviors, risks, patterns, and biological trends into a continuous health navigation model." },
      { name: "TerraAero", desc: "AgroDrone operations platform with U.S. manufacturing potential. Focus on precision agriculture, field automation, and large-scale deployment capabilities." },
      { name: "DishCore", desc: "Intelligent food manufacturing engine using precision processes and standardized nutritional logic. Bridges food production, health data, and AI-driven formulation." },
      { name: "Digital Invest Infrastructure", desc: "Cross-project data fabric, intelligence, dashboards, and operational backbone. Designed to connect siloed domains into a unified system." }
    ];

    for (const proj of projectSummaries) {
      checkPageBreak(60);
      currentPage.drawText(sanitizeText(proj.name), {
        x: margin,
        y: yPosition,
        size: 13,
        font: helveticaBold,
        color: darkColor,
      });
      yPosition -= 18;
      drawWrappedText(proj.desc, margin, contentWidth, 10, helveticaFont, darkColor, 14);
      yPosition -= 15;
    }

    // SECTION 5 - Technology & Infrastructure
    addNewPage();
    yPosition -= 20;

    currentPage.drawText('5. Technology & Infrastructure', {
      x: margin,
      y: yPosition,
      size: 24,
      font: helveticaBold,
      color: darkColor,
    });
    yPosition -= 40;

    currentPage.drawText('Systems Approach', {
      x: margin,
      y: yPosition,
      size: 14,
      font: helveticaBold,
      color: darkColor,
    });
    yPosition -= 25;

    drawWrappedText("Digital Invest builds systems, not features. We view technology as interconnected layers:", margin, contentWidth, 11, helveticaFont, darkColor, 16);
    yPosition -= 10;

    const layers = ["data ingestion", "reasoning", "operations", "intelligence", "manufacturing", "field deployment"];
    for (const layer of layers) {
      checkPageBreak(18);
      currentPage.drawText('- ' + layer, {
        x: margin + 10,
        y: yPosition,
        size: 10,
        font: helveticaFont,
        color: darkColor,
      });
      yPosition -= 14;
    }
    yPosition -= 15;

    currentPage.drawText('Integrity & Security', {
      x: margin,
      y: yPosition,
      size: 14,
      font: helveticaBold,
      color: darkColor,
    });
    yPosition -= 25;

    const integrity1 = "We incorporate cryptographic integrity methods when relevant:";
    drawWrappedText(integrity1, margin, contentWidth, 11, helveticaFont, darkColor, 16);
    yPosition -= 5;

    const integrityItems = ["document hashing", "tamper-proof logs", "traceable changes", "optional blockchain anchoring for timestamping"];
    for (const item of integrityItems) {
      checkPageBreak(18);
      currentPage.drawText('- ' + item, {
        x: margin + 10,
        y: yPosition,
        size: 10,
        font: helveticaFont,
        color: darkColor,
      });
      yPosition -= 14;
    }
    yPosition -= 5;

    drawWrappedText("(no tokens, no public crypto activities)", margin, contentWidth, 10, helveticaFont, lightColor, 14);
    yPosition -= 15;

    drawWrappedText("Security principles:", margin, contentWidth, 11, helveticaFont, darkColor, 16);
    yPosition -= 5;

    const securityItems = ["role-based access", "encrypted channels", "hardened infrastructure", "controlled investor document distribution"];
    for (const item of securityItems) {
      checkPageBreak(18);
      currentPage.drawText('- ' + item, {
        x: margin + 10,
        y: yPosition,
        size: 10,
        font: helveticaFont,
        color: darkColor,
      });
      yPosition -= 14;
    }

    // SECTION 6 - Risk Factors
    addNewPage();
    yPosition -= 20;

    currentPage.drawText('6. Risk Factors (Summary)', {
      x: margin,
      y: yPosition,
      size: 24,
      font: helveticaBold,
      color: darkColor,
    });
    yPosition -= 40;

    drawWrappedText("Important risks include:", margin, contentWidth, 11, helveticaFont, darkColor, 16);
    yPosition -= 10;

    const risks = [
      "market volatility across health, agriculture, food, and tech",
      "regulatory complexity",
      "long development cycles",
      "operational dependencies",
      "technological shifts",
      "supply chain constraints",
      "cyber and data risks",
      "potential delays in manufacturing or deployment"
    ];

    for (const risk of risks) {
      checkPageBreak(18);
      currentPage.drawText('- ' + risk, {
        x: margin + 10,
        y: yPosition,
        size: 10,
        font: helveticaFont,
        color: darkColor,
      });
      yPosition -= 14;
    }
    yPosition -= 15;

    drawWrappedText("Digital Invest does not guarantee outcomes, returns, or performance.", margin, contentWidth, 11, helveticaBold, darkColor, 16);
    yPosition -= 15;

    drawWrappedText("Full details available at: digitalinvest.com/risk-factors", margin, contentWidth, 10, helveticaFont, accentColor, 14);

    // SECTION 7 - Governance
    addNewPage();
    yPosition -= 20;

    currentPage.drawText('7. Governance', {
      x: margin,
      y: yPosition,
      size: 24,
      font: helveticaBold,
      color: darkColor,
    });
    yPosition -= 40;

    drawWrappedText("Governance at Digital Invest includes:", margin, contentWidth, 11, helveticaFont, darkColor, 16);
    yPosition -= 10;

    const governance = [
      "defined oversight structure",
      "strategic review cycles",
      "risk and compliance evaluation",
      "operational quality control",
      "advisory inputs from specialists in health, technology, and agriculture",
      "disciplined portfolio management"
    ];

    for (const item of governance) {
      checkPageBreak(18);
      currentPage.drawText('- ' + item, {
        x: margin + 10,
        y: yPosition,
        size: 10,
        font: helveticaFont,
        color: darkColor,
      });
      yPosition -= 14;
    }

    // SECTION 8 - ESG & Sustainability
    yPosition -= 30;
    checkPageBreak(100);

    currentPage.drawText('8. ESG & Sustainability', {
      x: margin,
      y: yPosition,
      size: 24,
      font: helveticaBold,
      color: darkColor,
    });
    yPosition -= 40;

    const esg = [
      { title: "Environmental", desc: "Precision agriculture reduces waste and improves land-use efficiency." },
      { title: "Social", desc: "Health platforms empower individuals to understand and navigate health more clearly." },
      { title: "Governance", desc: "Emphasis on long-term responsibility, ethics, and secure operations." }
    ];

    for (const item of esg) {
      checkPageBreak(40);
      currentPage.drawText(sanitizeText(item.title), {
        x: margin,
        y: yPosition,
        size: 12,
        font: helveticaBold,
        color: darkColor,
      });
      yPosition -= 18;
      drawWrappedText(item.desc, margin + 10, contentWidth - 10, 10, helveticaFont, darkColor, 14);
      yPosition -= 15;
    }

    // SECTION 9 - Investor Process
    addNewPage();
    yPosition -= 20;

    currentPage.drawText('9. Investor Process', {
      x: margin,
      y: yPosition,
      size: 24,
      font: helveticaBold,
      color: darkColor,
    });
    yPosition -= 30;

    currentPage.drawText('(Private & Offline)', {
      x: margin,
      y: yPosition,
      size: 14,
      font: helveticaBold,
      color: lightColor,
    });
    yPosition -= 35;

    drawWrappedText("All participation is:", margin, contentWidth, 11, helveticaFont, darkColor, 16);
    yPosition -= 10;

    const participation = ["private", "non-binding during initial review", "handled offline", "subject to due diligence", "dependent on regulatory requirements"];
    for (const item of participation) {
      checkPageBreak(18);
      currentPage.drawText('- ' + item, {
        x: margin + 10,
        y: yPosition,
        size: 10,
        font: helveticaFont,
        color: darkColor,
      });
      yPosition -= 14;
    }
    yPosition -= 15;

    drawWrappedText("We do not run:", margin, contentWidth, 11, helveticaFont, darkColor, 16);
    yPosition -= 5;

    const doNotRun = ["public offerings", "crowdfunding", "token sales", "open solicitations"];
    for (const item of doNotRun) {
      checkPageBreak(18);
      currentPage.drawText('- ' + item, {
        x: margin + 10,
        y: yPosition,
        size: 10,
        font: helveticaFont,
        color: darkColor,
      });
      yPosition -= 14;
    }
    yPosition -= 15;

    drawWrappedText("Step-by-step (informational):", margin, contentWidth, 11, helveticaFont, darkColor, 16);
    yPosition -= 5;

    const steps = ["1. Initial contact ->", "2. Optional NDA ->", "3. High-level discussion ->", "4. Document sharing ->", "5. Due diligence ->", "6. Offline legal agreements"];
    for (const step of steps) {
      checkPageBreak(18);
      currentPage.drawText(sanitizeText(step), {
        x: margin + 10,
        y: yPosition,
        size: 10,
        font: helveticaFont,
        color: darkColor,
      });
      yPosition -= 14;
    }

    // SECTION 10 - Contact Information
    addNewPage();
    yPosition -= 20;

    currentPage.drawText('10. Contact Information', {
      x: margin,
      y: yPosition,
      size: 24,
      font: helveticaBold,
      color: darkColor,
    });
    yPosition -= 40;

    const contacts = [
      "Digital Invest Inc.",
      "digitalinvest.com",
      "",
      "General inquiries: info@digitalinvest.com",
      "Press: press@digitalinvest.com",
      "Compliance: compliance@digitalinvest.com",
      "Careers: careers@digitalinvest.com"
    ];

    for (const contact of contacts) {
      checkPageBreak(18);
      if (contact) {
        currentPage.drawText(sanitizeText(contact), {
          x: margin,
          y: yPosition,
          size: contact.includes('@') ? 10 : 11,
          font: contact.includes('@') ? helveticaFont : helveticaBold,
          color: contact.includes('@') ? accentColor : darkColor,
        });
      }
      yPosition -= 16;
    }

    // SECTION 11 - Legal Notice
    yPosition -= 30;
    checkPageBreak(120);

    currentPage.drawText('11. Legal Notice', {
      x: margin,
      y: yPosition,
      size: 24,
      font: helveticaBold,
      color: darkColor,
    });
    yPosition -= 40;

    const legal = "This Investor Handbook is informational only. It is not financial advice, legal advice, or a public offering. Digital Invest Inc. provides materials solely for qualified individuals and private discussions.";
    drawWrappedText(legal, margin, contentWidth, 11, helveticaFont, darkColor, 16);

    const pdfBytes = await pdfDoc.save();

    return new Response(pdfBytes, {
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="digital-invest-investor-handbook-2025.pdf"',
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
