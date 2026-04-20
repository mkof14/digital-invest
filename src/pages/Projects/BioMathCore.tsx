import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Heart, Brain, Activity, Shield, Lock, Database, Cpu, Layers, Server, FileText, AlertCircle, Globe, Rocket, ArrowLeft, Download, Images, Eye, Dna, Zap, Users, Stethoscope, Moon, Apple, Leaf, Baby, Microscope, Sparkles, MonitorSmartphone } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import biomathCoreHero from "@/assets/projects/biomath-core-hero.jpg";
import biomathWellness from "@/assets/projects/biomath-wellness-center.jpg";
import biomathSupercomputer from "@/assets/projects/biomath-supercomputer.jpg";
import biomathBlackBox from "@/assets/projects/biomath-health-blackbox.jpg";
import biomathMeeting from "@/assets/projects/biomath-meeting-room.png";
import biomathCardBg from "@/assets/projects/biomathcore-card-bg.png";
import infographic1 from "@/assets/projects/biomath-core-infographic1.jpg";
import infographic2 from "@/assets/projects/biomath-core-infographic2.jpg";
import infographic3 from "@/assets/projects/biomath-core-infographic3.jpg";
// Presentation-aligned imagery (BioMath Core Architecture deck)
import presHero from "@/assets/projects/biomath-pres-hero.jpg";
import presOrbital from "@/assets/projects/biomath-pres-orbital.jpg";
import presBaseline from "@/assets/projects/biomath-pres-baseline.jpg";
import presBlackBox from "@/assets/projects/biomath-pres-blackbox.jpg";
import presOrbitalLoop from "@/assets/projects/biomath-pres-orbital-loop.jpg";
import presTime from "@/assets/projects/biomath-pres-time.jpg";
import presOutput from "@/assets/projects/biomath-pres-output.jpg";
import InvestorPageDisclaimer from "@/components/InvestorPageDisclaimer";
import { InfographicsGallery } from "@/components/InfographicsGallery";

const infographics = [
  { src: infographic1, title: "Living Digital Human Model", alt: "BioMath Core: Living Digital Human Model" },
  { src: infographic2, title: "Architecture of Digital Modeling", alt: "BioMath Core: Architecture of Living Digital Modeling" },
  { src: infographic3, title: "Living Digital Architecture", alt: "BioMath Core: Living Digital Architecture" },
];

const categoryData = [
  { name: "Critical Health", icon: Heart, color: "hsl(0,70%,55%)" },
  { name: "Everyday Wellness", icon: Sparkles, color: "hsl(140,60%,50%)" },
  { name: "Longevity & Anti-Aging", icon: Zap, color: "hsl(35,90%,55%)" },
  { name: "Mental Wellness", icon: Brain, color: "hsl(270,60%,60%)" },
  { name: "Fitness & Performance", icon: Activity, color: "hsl(330,70%,55%)" },
  { name: "Women's Health", icon: Heart, color: "hsl(320,60%,55%)" },
  { name: "Men's Health", icon: Shield, color: "hsl(210,70%,55%)" },
  { name: "Beauty & Skincare", icon: Eye, color: "hsl(350,65%,55%)" },
  { name: "Nutrition & Diet", icon: Apple, color: "hsl(120,55%,45%)" },
  { name: "Sleep & Recovery", icon: Moon, color: "hsl(250,50%,55%)" },
  { name: "Environmental Health", icon: Leaf, color: "hsl(160,55%,45%)" },
  { name: "Family Health", icon: Baby, color: "hsl(30,70%,55%)" },
  { name: "Preventive Medicine", icon: Stethoscope, color: "hsl(180,55%,45%)" },
  { name: "Biohacking", icon: Dna, color: "hsl(280,65%,55%)" },
  { name: "Senior Care", icon: Users, color: "hsl(45,60%,50%)" },
  { name: "Eye-Health Suite", icon: Eye, color: "hsl(190,60%,50%)" },
  { name: "Digital Therapeutics", icon: MonitorSmartphone, color: "hsl(240,55%,55%)" },
  { name: "Sexual Longevity", icon: Heart, color: "hsl(340,60%,50%)" },
  { name: "Men's Sexual Health", icon: Shield, color: "hsl(200,60%,50%)" },
  { name: "Women's Sexual Health", icon: Heart, color: "hsl(310,55%,50%)" },
];

const BioMathCore = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-[hsl(220,20%,4%)] text-[hsl(210,15%,85%)]">
      <Navigation />
      
      {/* ═══════════════════════ HERO ═══════════════════════ */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-[hsl(220,30%,3%)]">
        {/* Deep space backdrop */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,hsl(25,90%,15%)_0%,transparent_55%),radial-gradient(ellipse_at_20%_80%,hsl(210,80%,12%)_0%,transparent_50%),hsl(220,30%,3%)]" />
          {/* Subtle starfield */}
          <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(white_1px,transparent_1px)] [background-size:48px_48px]" />
        </div>

        {/* Orbital core image — right side, dominant */}
        <div className="absolute inset-y-0 right-0 w-full md:w-[60%] lg:w-[55%] z-0 pointer-events-none">
          <div className="relative w-full h-full">
            <img
              src={presHero}
              alt="BioMath Core — orbital architecture of the personal human model"
              className="absolute inset-0 w-full h-full object-contain object-right opacity-95 [filter:drop-shadow(0_0_80px_hsl(25,95%,55%/0.35))]"
            />
            {/* Soft fade into background on the left edge */}
            <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-[hsl(220,30%,3%)] via-[hsl(220,30%,3%)]/80 to-transparent" />
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10 py-28">
          <Link to="/projects" className="inline-block mb-8">
            <Button variant="ghost" size="sm" className="text-[hsl(25,90%,65%)] hover:bg-[hsl(25,90%,55%)]/10 border border-[hsl(25,90%,55%)]/25">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t('projectCommon.backToProjects')}
            </Button>
          </Link>

          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge className="bg-gradient-to-r from-[hsl(25,90%,55%)] to-[hsl(35,95%,55%)] text-white border-0 text-sm px-4 py-1 uppercase tracking-wider shadow-lg shadow-[hsl(25,90%,40%)]/30">
                ★ {t('projectBiomathCore.flagshipBadge', 'Flagship Asset')}
              </Badge>
              <Badge className="bg-[hsl(25,90%,55%)]/15 text-[hsl(25,90%,70%)] border-[hsl(25,90%,55%)]/30 text-sm px-4 py-1 uppercase tracking-wider">
                {t('projectBiomathCore.badge', 'Digital Health · Foundation Architecture')}
              </Badge>
              <Badge className="bg-[hsl(200,80%,55%)]/15 text-[hsl(200,80%,75%)] border-[hsl(200,80%,55%)]/30 text-sm px-4 py-1 uppercase tracking-wider">
                {t('projectBiomathCore.masterModuleBadge', 'Master Service Module')}
              </Badge>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[0.92] tracking-tight">
              <span className="text-white">BioMath</span>{" "}
              <span className="bg-gradient-to-r from-[hsl(25,95%,60%)] via-[hsl(35,95%,65%)] to-[hsl(25,95%,55%)] bg-clip-text text-transparent">Core</span>
            </h1>
            <p className="text-2xl md:text-4xl font-light text-white/95 mb-5 leading-tight">
              {t('projectBiomathCore.heroSubtitle')}
            </p>
            <p className="text-lg text-[hsl(210,15%,70%)] max-w-2xl mb-10 leading-relaxed">
              {t('projectBiomathCore.heroDesc')}
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link to="/start-investing">
                <Button size="lg" className="bg-gradient-to-r from-[hsl(25,90%,55%)] to-[hsl(35,95%,55%)] hover:from-[hsl(25,90%,50%)] hover:to-[hsl(35,95%,50%)] text-white px-8 shadow-lg shadow-[hsl(25,90%,40%)]/30 border-0">
                  {t('projectCommon.requestInformation')}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" asChild className="border-[hsl(200,80%,55%)]/40 text-[hsl(200,80%,75%)] hover:bg-[hsl(200,80%,55%)]/10 bg-[hsl(220,30%,6%)]/60 backdrop-blur-sm">
                <a href="https://biomathcore.com" target="_blank" rel="noopener noreferrer">
                  <Globe className="h-5 w-5 mr-2" />
                  biomathcore.com
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-[hsl(210,15%,30%)] text-[hsl(210,10%,75%)] hover:bg-[hsl(210,15%,12%)] bg-[hsl(220,30%,6%)]/60 backdrop-blur-sm">
                <a href="/investor-briefs/biomath-core-investor-brief.pdf" download="BioMath-Core-Investor-Brief.pdf">
                  <Download className="w-5 h-5 mr-2" />
                  {t('projectCommon.investorBrief')}
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-[hsl(210,15%,30%)] text-[hsl(210,10%,75%)] hover:bg-[hsl(210,15%,12%)] bg-[hsl(220,30%,6%)]/60 backdrop-blur-sm">
                <a href="#infographics">
                  <Images className="w-5 h-5 mr-2" />
                  {t('projectCommon.infographics')}
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom fade into next section */}
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-b from-transparent to-[hsl(220,20%,4%)] z-10 pointer-events-none" />
      </section>

      <main className="relative z-10">
        {/* ═══════════════════════ STATS RIBBON ═══════════════════════ */}
        <section className="border-y border-[hsl(25,90%,55%)]/15 bg-[hsl(220,25%,5%)]">
          <div className="container mx-auto px-4 py-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "200+", label: t('projectBiomathCore.statServices') },
                { value: "20", label: t('projectBiomathCore.statCategories') },
                { value: "360°", label: t('projectBiomathCore.statIntegrations') },
                { value: "Live", label: t('projectBiomathCore.statAnalysis') },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-[hsl(25,95%,60%)] to-[hsl(35,95%,65%)] bg-clip-text text-transparent">{stat.value}</p>
                  <p className="text-xs md:text-sm uppercase tracking-wider text-[hsl(210,10%,55%)] mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════ FLAGSHIP ASSET ═══════════════════════ */}
        <section className="relative py-24 overflow-hidden bg-[hsl(220,25%,4%)]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,hsl(25,90%,18%)_0%,transparent_50%),radial-gradient(ellipse_at_80%_80%,hsl(200,80%,12%)_0%,transparent_45%)]" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-14">
              <Badge className="mb-5 bg-gradient-to-r from-[hsl(25,90%,55%)] to-[hsl(35,95%,55%)] text-white border-0 px-4 py-1 uppercase tracking-wider">
                ★ {t('projectBiomathCore.flagshipSectionBadge', 'Flagship Asset of the Portfolio')}
              </Badge>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {t('projectBiomathCore.flagshipTitle', 'The Cornerstone Project. The Engine of an Entire Ecosystem.')}
              </h2>
              <p className="text-lg md:text-xl text-[hsl(210,15%,75%)] leading-relaxed">
                {t('projectBiomathCore.flagshipLead', 'BioMath Core is the central pillar of the Digital Invest portfolio — the highest-capitalization, highest-potential asset and the master service module from which dozens of consumer products, vertical platforms and specialized services are built. Every other digital health project in the portfolio inherits its architecture, data fabric and intelligence from this single Core.')}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                {
                  icon: Rocket,
                  title: t('projectBiomathCore.flagshipCard1Title', 'Highest Capitalization Potential'),
                  desc: t('projectBiomathCore.flagshipCard1Desc', 'Positioned as the most valuable asset in the portfolio — a foundational platform addressing one of the largest global markets: personal health, longevity and preventive medicine.'),
                  accent: 'hsl(25,95%,60%)',
                },
                {
                  icon: Server,
                  title: t('projectBiomathCore.flagshipCard2Title', 'Master Service Module'),
                  desc: t('projectBiomathCore.flagshipCard2Desc', 'A single architectural Core that powers 200+ specialized micro-services and feeds 20+ vertical product categories — from longevity and family health to mental wellness and biohacking.'),
                  accent: 'hsl(200,80%,65%)',
                },
                {
                  icon: Layers,
                  title: t('projectBiomathCore.flagshipCard3Title', 'Ecosystem Multiplier'),
                  desc: t('projectBiomathCore.flagshipCard3Desc', 'Every subsequent project — BioMath Life, LongevityCore, FamilyCore, SkinCore, SeniorCore and others — extends from this Core, compounding value across the entire portfolio with each new module shipped.'),
                  accent: 'hsl(35,95%,65%)',
                },
              ].map((card) => (
                <Card key={card.title} className="bg-[hsl(220,30%,6%)]/80 border-[hsl(25,90%,55%)]/15 backdrop-blur-sm hover:border-[hsl(25,90%,55%)]/40 transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-3"
                      style={{ background: `linear-gradient(135deg, ${card.accent}33, ${card.accent}11)`, border: `1px solid ${card.accent}55` }}
                    >
                      <card.icon className="w-7 h-7" style={{ color: card.accent }} />
                    </div>
                    <CardTitle className="text-xl text-white leading-snug">{card.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[hsl(210,15%,70%)] leading-relaxed text-sm">{card.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Ecosystem ribbon */}
            <div className="mt-14 max-w-5xl mx-auto">
              <div className="rounded-2xl border border-[hsl(25,90%,55%)]/20 bg-gradient-to-r from-[hsl(220,30%,5%)] via-[hsl(25,40%,7%)] to-[hsl(220,30%,5%)] p-8 md:p-10">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-[hsl(25,95%,55%)] to-[hsl(35,95%,55%)] flex items-center justify-center shadow-lg shadow-[hsl(25,90%,40%)]/40">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs uppercase tracking-[0.2em] text-[hsl(25,90%,65%)] mb-2 font-semibold">
                      {t('projectBiomathCore.flagshipRibbonKicker', 'One Core · Many Products')}
                    </p>
                    <p className="text-lg md:text-xl text-white leading-relaxed">
                      {t('projectBiomathCore.flagshipRibbonText', 'BioMath Core is not a single product — it is the operating substrate of an entire digital health ecosystem. Its value compounds with every new vertical, every new market and every new service plugged into the Core.')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════ ECOSYSTEM FAN DIAGRAM ═══════════════════════ */}
        <section className="relative py-24 overflow-hidden bg-[hsl(220,28%,3.5%)]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(25,90%,12%)_0%,transparent_60%)]" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <Badge className="mb-4 bg-[hsl(25,90%,55%)]/10 text-[hsl(25,90%,70%)] border-[hsl(25,90%,55%)]/25 uppercase tracking-wider">
                {t('projectBiomathCore.fanBadge', 'Ecosystem Map')}
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                {t('projectBiomathCore.fanTitle', 'One Core. An Entire Ecosystem of Products.')}
              </h2>
              <p className="text-base md:text-lg text-[hsl(210,15%,70%)] leading-relaxed">
                {t('projectBiomathCore.fanLead', 'BioMath Core sits at the center. Every other digital health product in the portfolio — from longevity to family care — connects to and is powered by this single architectural Core.')}
              </p>
            </div>

            {(() => {
              const nodes = [
                { name: 'BioMath Life',   color: 'hsl(195,85%,60%)', slug: 'biomathlife'    },
                { name: 'LongevityCore',  color: 'hsl(35,95%,60%)',  slug: 'longevitycore'  },
                { name: 'FamilyCore',     color: 'hsl(15,85%,60%)',  slug: 'familycore'     },
                { name: 'SkinCore',       color: 'hsl(330,75%,62%)', slug: 'skincore'       },
                { name: 'SeniorCore',     color: 'hsl(45,85%,58%)',  slug: 'seniorcore'     },
                { name: 'StressCore',     color: 'hsl(270,70%,65%)', slug: 'stresscore'     },
                { name: 'BioAgeCore',     color: 'hsl(160,70%,50%)', slug: 'bioagecore'     },
                { name: 'LunaBalance',    color: 'hsl(310,65%,62%)', slug: 'luna-balance'   },
                { name: 'VitalCore',      color: 'hsl(0,75%,60%)',   slug: 'vitalcore'      },
                { name: 'MRX Health',     color: 'hsl(210,80%,62%)', slug: 'mrx-health'     },
                { name: 'BaseLine',       color: 'hsl(140,60%,55%)', slug: 'baseline'       },
                { name: 'MyDay',          color: 'hsl(250,70%,65%)', slug: 'myday'          },
              ];
              const W = 900, H = 620, cx = W / 2, cy = H / 2, r = 250;
              return (
                <div className="max-w-5xl mx-auto">
                  <div className="rounded-3xl border border-[hsl(25,90%,55%)]/15 bg-[hsl(220,30%,5%)]/60 backdrop-blur-sm p-4 md:p-8">
                    <svg
                      viewBox={`0 0 ${W} ${H}`}
                      className="w-full h-auto"
                      role="img"
                      aria-label="BioMath Core ecosystem fan diagram"
                    >
                      <defs>
                        <radialGradient id="fanCoreGlow" cx="50%" cy="50%" r="50%">
                          <stop offset="0%" stopColor="hsl(25,95%,60%)" stopOpacity="0.55" />
                          <stop offset="100%" stopColor="hsl(25,95%,60%)" stopOpacity="0" />
                        </radialGradient>
                        <radialGradient id="fanCoreFill" cx="50%" cy="50%" r="50%">
                          <stop offset="0%" stopColor="hsl(35,95%,65%)" />
                          <stop offset="100%" stopColor="hsl(25,95%,50%)" />
                        </radialGradient>
                      </defs>

                      {/* Orbit rings */}
                      <circle cx={cx} cy={cy} r={r * 0.45} fill="none" stroke="hsl(25,90%,55%)" strokeOpacity="0.08" strokeWidth="1" />
                      <circle cx={cx} cy={cy} r={r * 0.75} fill="none" stroke="hsl(25,90%,55%)" strokeOpacity="0.08" strokeWidth="1" />
                      <circle cx={cx} cy={cy} r={r}        fill="none" stroke="hsl(25,90%,55%)" strokeOpacity="0.10" strokeWidth="1" />

                      {/* Connecting lines (Core → satellites) */}
                      {nodes.map((n, i) => {
                        const a = (i / nodes.length) * Math.PI * 2 - Math.PI / 2;
                        const x = cx + Math.cos(a) * r;
                        const y = cy + Math.sin(a) * r;
                        return (
                          <line
                            key={`l-${n.name}`}
                            x1={cx} y1={cy} x2={x} y2={y}
                            stroke={n.color}
                            strokeOpacity="0.45"
                            strokeWidth="1.25"
                          />
                        );
                      })}

                      {/* Core glow + core node */}
                      <circle cx={cx} cy={cy} r="120" fill="url(#fanCoreGlow)" />
                      <circle cx={cx} cy={cy} r="62" fill="url(#fanCoreFill)" stroke="hsl(35,100%,75%)" strokeWidth="1.5" />
                      <text x={cx} y={cy - 4} textAnchor="middle" fontSize="18" fontWeight="700" fill="white" style={{ fontFamily: 'inherit' }}>BioMath</text>
                      <text x={cx} y={cy + 18} textAnchor="middle" fontSize="18" fontWeight="700" fill="white" style={{ fontFamily: 'inherit' }}>Core</text>

                      {/* Satellite nodes (clickable links to project pages) */}
                      {nodes.map((n, i) => {
                        const a = (i / nodes.length) * Math.PI * 2 - Math.PI / 2;
                        const x = cx + Math.cos(a) * r;
                        const y = cy + Math.sin(a) * r;
                        // label offset: push outward from center
                        const labelDx = Math.cos(a) * 14;
                        const labelDy = Math.sin(a) * 14;
                        const anchor = Math.cos(a) > 0.25 ? 'start' : Math.cos(a) < -0.25 ? 'end' : 'middle';
                        return (
                          <Link
                            key={`n-${n.name}`}
                            to={`/projects/${n.slug}`}
                            aria-label={`Open ${n.name} project page`}
                            className="cursor-pointer outline-none focus-visible:[&_circle]:stroke-white hover:[&_circle:first-child]:fill-[hsl(220,30%,12%)] hover:[&_text]:fill-white transition-colors"
                          >
                            <g>
                              {/* invisible larger hit target for easier clicking */}
                              <circle cx={x} cy={y} r="34" fill="transparent" />
                              <circle cx={x} cy={y} r="22" fill="hsl(220,30%,8%)" stroke={n.color} strokeWidth="2" />
                              <circle cx={x} cy={y} r="6" fill={n.color} />
                              <text
                                x={x + labelDx}
                                y={y + labelDy + 4}
                                textAnchor={anchor}
                                fontSize="13"
                                fontWeight="600"
                                fill="hsl(210,15%,88%)"
                                style={{ fontFamily: 'inherit' }}
                              >
                                {n.name}
                              </text>
                            </g>
                          </Link>
                        );
                      })}
                    </svg>

                    {/* Mobile-friendly legend below (also clickable) */}
                    <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:hidden">
                      {nodes.map((n) => (
                        <Link
                          key={`leg-${n.name}`}
                          to={`/projects/${n.slug}`}
                          className="flex items-center gap-2 text-xs text-[hsl(210,15%,80%)] hover:text-white transition-colors"
                        >
                          <span className="inline-block w-2.5 h-2.5 rounded-full" style={{ background: n.color }} />
                          {n.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <p className="text-center text-xs uppercase tracking-[0.2em] text-[hsl(25,90%,65%)] mt-6 font-semibold">
                    {t('projectBiomathCore.fanCaption', '12+ products · 200+ services · 1 architectural Core')}
                  </p>
                </div>
              );
            })()}
          </div>
        </section>


        <section className="container mx-auto px-4 py-20">

          <div className="text-center mb-12">
            <Badge className="mb-4 bg-[hsl(25,90%,55%)]/10 text-[hsl(25,90%,70%)] border-[hsl(25,90%,55%)]/25 uppercase tracking-wider">
              The Architecture Difference
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              {t('projectBiomathCore.beyondTitle', 'Moving Beyond Static Tracking')}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { row: t('projectBiomathCore.beyondRow1', 'Architecture'), trad: t('projectBiomathCore.beyondTrad1', 'A collection of disconnected services.'), core: t('projectBiomathCore.beyondCore1', 'A single, unified, living digital structure.') },
              { row: t('projectBiomathCore.beyondRow2', 'Data Role'), trad: t('projectBiomathCore.beyondTrad2', 'New data simply adds to a historical log.'), core: t('projectBiomathCore.beyondCore2', 'Every new action dynamically alters the entire systemic picture.') },
              { row: t('projectBiomathCore.beyondRow3', 'Processing'), trad: t('projectBiomathCore.beyondTrad3', 'Linear logging.'), core: t('projectBiomathCore.beyondCore3', 'Simultaneous, multi-layered modeling.') },
              { row: t('projectBiomathCore.beyondRow4', 'Output'), trad: t('projectBiomathCore.beyondTrad4', 'Isolated reports and profiles.'), core: t('projectBiomathCore.beyondCore4', 'A constantly evolving structural understanding.') },
            ].map((item) => (
              <div key={item.row} className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[hsl(210,15%,15%)] rounded-xl overflow-hidden border border-[hsl(210,15%,15%)]">
                <div className="bg-[hsl(220,20%,7%)] p-5">
                  <p className="text-xs uppercase tracking-wider text-[hsl(210,10%,45%)] mb-2">Traditional Trackers</p>
                  <p className="text-sm text-[hsl(210,10%,65%)] leading-relaxed">{item.trad}</p>
                </div>
                <div className="bg-gradient-to-br from-[hsl(25,90%,12%)]/40 to-[hsl(220,20%,7%)] p-5 border-l border-[hsl(25,90%,55%)]/20">
                  <p className="text-xs uppercase tracking-wider text-[hsl(25,90%,65%)] mb-2 font-semibold">{item.row} · BioMath Core</p>
                  <p className="text-sm text-white leading-relaxed">{item.core}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════════ FOUNDATION BANNER ═══════════════════════ */}
        <section className="container mx-auto px-4 pb-16">
          <div className="relative rounded-2xl overflow-hidden border border-[hsl(25,90%,55%)]/15">
            <div className="absolute inset-0">
              <img src={biomathSupercomputer} alt="" className="w-full h-full object-cover opacity-30" />
              <div className="absolute inset-0 bg-gradient-to-r from-[hsl(220,25%,5%)]/95 via-[hsl(220,25%,5%)]/85 to-[hsl(25,90%,15%)]/40" />
            </div>
            <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-start gap-6">
              <div className="w-16 h-16 rounded-2xl bg-[hsl(25,90%,55%)]/10 border border-[hsl(25,90%,55%)]/25 flex items-center justify-center flex-shrink-0">
                <Rocket className="w-8 h-8 text-[hsl(25,90%,65%)]" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  {t('projectBiomathCore.foundationTitle')}
                </h2>
                <p className="text-[hsl(210,10%,70%)] text-lg leading-relaxed">
                  {t('projectBiomathCore.foundationDesc')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════ HUMAN BASELINE (from presentation) + OVERVIEW ═══════════════════════ */}
        <section className="container mx-auto px-4 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="rounded-2xl overflow-hidden border border-[hsl(210,15%,15%)] shadow-2xl shadow-[hsl(25,90%,30%)]/10 bg-[hsl(220,25%,3%)]">
              <img src={presBaseline} alt="Constructing the Human Baseline — BioMath Core" className="w-full h-[420px] object-cover" />
            </div>
            <div className="space-y-6">
              <Badge className="bg-[hsl(25,90%,55%)]/10 text-[hsl(25,90%,70%)] border-[hsl(25,90%,55%)]/25 uppercase tracking-wider">
                Constructing the Human Baseline
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white">{t('projectCommon.overview')}</h2>
              <p className="text-lg text-[hsl(210,10%,75%)] leading-relaxed">
                {t('projectBiomathCore.overviewP1')}
              </p>
              <p className="text-[hsl(210,10%,60%)] leading-relaxed">
                {t('projectBiomathCore.overviewP2')}
              </p>
              <p className="text-sm text-[hsl(25,90%,65%)] italic border-l-2 border-[hsl(25,90%,55%)]/40 pl-4">
                {t('projectBiomathCore.overviewKeyInsight', 'Key insight: this is not a static medical profile — it is a living structural map that shifts with every new input.')}
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════ BLACK BOX ARCHITECTURE (from presentation) ═══════════════════════ */}
        <section className="relative py-24 overflow-hidden bg-[hsl(220,30%,3%)] border-y border-[hsl(210,15%,12%)]">
          <div className="absolute inset-0 opacity-30">
            <img src={presBlackBox} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[hsl(220,30%,3%)] via-[hsl(220,30%,3%)]/70 to-transparent" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl">
              <Badge className="mb-5 bg-[hsl(200,80%,55%)]/10 text-[hsl(200,80%,75%)] border-[hsl(200,80%,55%)]/25 uppercase tracking-wider">
                Sovereignty by Design
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                {t('projectBiomathCore.blackBoxTitle2', 'The Black Box Architecture')}
              </h2>
              <p className="text-lg text-[hsl(210,15%,80%)] leading-relaxed mb-6">
                {t('projectBiomathCore.blackBoxIntro', 'Every user is encapsulated in a deeply protected personal environment. The system computes deeply, but remains entirely hermetic — access is governed entirely by the user.')}
              </p>
              <ul className="space-y-3">
                {[
                  t('projectBiomathCore.blackBoxL1', 'The complete active history.'),
                  t('projectBiomathCore.blackBoxL2', 'The internal logic of all systemic changes.'),
                  t('projectBiomathCore.blackBoxL3', 'The unique structural map of the individual.'),
                  t('projectBiomathCore.blackBoxL4', 'The proprietary cross-category relationships.'),
                ].map((line) => (
                  <li key={line} className="flex items-start gap-3 text-[hsl(210,15%,75%)]">
                    <Lock className="w-4 h-4 mt-1 flex-shrink-0 text-[hsl(25,90%,65%)]" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ═══════════════════════ CORE MISSION ═══════════════════════ */}
        <section className="bg-[hsl(220,20%,6%)] border-y border-[hsl(210,15%,12%)] py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">{t('projectCommon.coreMission')}</h2>
            <p className="text-center text-[hsl(210,10%,55%)] mb-12 max-w-2xl mx-auto">
              {t('projectBiomathCore.missionSubtitle')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Heart, title: t('projectBiomathCore.mission1Title'), desc: t('projectBiomathCore.mission1Desc'), color: "hsl(0,65%,55%)" },
                { icon: Shield, title: t('projectBiomathCore.mission2Title'), desc: t('projectBiomathCore.mission2Desc'), color: "hsl(200,80%,55%)" },
                { icon: Brain, title: t('projectBiomathCore.mission3Title'), desc: t('projectBiomathCore.mission3Desc'), color: "hsl(270,60%,60%)" },
              ].map((item) => (
                <div key={item.title} className="bg-[hsl(220,18%,8%)] rounded-2xl p-8 border border-[hsl(210,15%,15%)] hover:border-[hsl(200,80%,50%)]/30 transition-all duration-500 group">
                  <item.icon className="w-12 h-12 mb-6 transition-transform duration-500 group-hover:scale-110" style={{ color: item.color }} />
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-[hsl(210,10%,55%)] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════ HOW IT WORKS ═══════════════════════ */}
        <section className="container mx-auto px-4 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">{t('projectCommon.howPlatformWorks')}</h2>
          <p className="text-center text-[hsl(210,10%,55%)] mb-16 max-w-2xl mx-auto">
            {t('projectBiomathCore.howSubtitle')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { step: "01", title: t('projectBiomathCore.step1Title'), desc: t('projectBiomathCore.step1Desc'), icon: Database },
              { step: "02", title: t('projectBiomathCore.step2Title'), desc: t('projectBiomathCore.step2Desc'), icon: Server },
              { step: "03", title: t('projectBiomathCore.step3Title'), desc: t('projectBiomathCore.step3Desc'), icon: Cpu },
              { step: "04", title: t('projectBiomathCore.step4Title'), desc: t('projectBiomathCore.step4Desc'), icon: FileText },
            ].map((item) => (
              <div key={item.step} className="bg-[hsl(220,18%,7%)] rounded-2xl p-8 border border-[hsl(210,15%,13%)] hover:border-[hsl(200,80%,50%)]/20 transition-all duration-500 group relative overflow-hidden">
                <span className="absolute top-6 right-8 text-6xl font-bold text-[hsl(200,80%,50%)]/8 group-hover:text-[hsl(200,80%,50%)]/15 transition-colors">{item.step}</span>
                <item.icon className="w-10 h-10 text-[hsl(200,80%,55%)] mb-5" />
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-[hsl(210,10%,55%)] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════════ DUAL-OPINION COGNITIVE ENGINE (from presentation) ═══════════════════════ */}
        <section className="relative py-24 overflow-hidden bg-[hsl(220,30%,3%)] border-y border-[hsl(210,15%,12%)]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,hsl(25,90%,15%)_0%,transparent_60%)] opacity-60" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-14">
              <Badge className="mb-4 bg-[hsl(25,90%,55%)]/10 text-[hsl(25,90%,70%)] border-[hsl(25,90%,55%)]/25 uppercase tracking-wider">
                How the System Thinks
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                {t('projectBiomathCore.dualEngineTitle', 'The Dual-Opinion Cognitive Engine')}
              </h2>
              <p className="text-[hsl(210,10%,65%)] max-w-2xl mx-auto">
                {t('projectBiomathCore.dualEngineSubtitle', 'Every new signal is evaluated in parallel — not sequentially. This is not a software function; it is the native way the platform thinks.')}
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="flex justify-center mb-8">
                <div className="bg-[hsl(220,25%,6%)] border border-[hsl(25,90%,55%)]/30 rounded-2xl px-8 py-5 text-center shadow-lg shadow-[hsl(25,90%,30%)]/10">
                  <p className="text-xs uppercase tracking-widest text-[hsl(25,90%,65%)] mb-1">Input</p>
                  <p className="text-xl font-bold text-white">{t('projectBiomathCore.dualEngineSignal', 'New Signal')}</p>
                </div>
              </div>

              <div className="hidden md:flex justify-center mb-2">
                <div className="w-2/3 h-12 relative">
                  <div className="absolute top-0 left-1/2 w-px h-6 bg-gradient-to-b from-[hsl(25,90%,55%)]/50 to-transparent -translate-x-1/2" />
                  <div className="absolute top-6 left-1/4 right-1/4 h-px bg-gradient-to-r from-[hsl(25,90%,55%)]/40 via-[hsl(25,90%,55%)]/60 to-[hsl(25,90%,55%)]/40" />
                  <div className="absolute top-6 left-1/4 w-px h-6 bg-gradient-to-b from-[hsl(25,90%,55%)]/50 to-transparent" />
                  <div className="absolute top-6 right-1/4 w-px h-6 bg-gradient-to-b from-[hsl(25,90%,55%)]/50 to-transparent" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="bg-[hsl(220,22%,7%)] border border-[hsl(200,80%,55%)]/25 rounded-2xl p-8 hover:border-[hsl(200,80%,55%)]/50 transition-all duration-500">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[hsl(200,80%,55%)]/15 border border-[hsl(200,80%,55%)]/30 flex items-center justify-center">
                      <Cpu className="w-6 h-6 text-[hsl(200,80%,70%)]" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-[hsl(200,80%,70%)]">Track 1</p>
                      <h3 className="text-xl font-bold text-white">{t('projectBiomathCore.dualEngineLocalTitle', 'Local Opinion')}</h3>
                    </div>
                  </div>
                  <p className="text-[hsl(210,15%,75%)] leading-relaxed">
                    {t('projectBiomathCore.dualEngineLocalDesc', 'Formed inside a specific service or category. Deep, autonomous analysis based purely on local domain logic — clean, focused, undiluted by adjacent context.')}
                  </p>
                </div>

                <div className="bg-[hsl(220,22%,7%)] border border-[hsl(25,90%,55%)]/25 rounded-2xl p-8 hover:border-[hsl(25,90%,55%)]/50 transition-all duration-500">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[hsl(25,90%,55%)]/15 border border-[hsl(25,90%,55%)]/30 flex items-center justify-center">
                      <Layers className="w-6 h-6 text-[hsl(25,90%,70%)]" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-[hsl(25,90%,70%)]">Track 2</p>
                      <h3 className="text-xl font-bold text-white">{t('projectBiomathCore.dualEngineSystemicTitle', 'Systemic Opinion')}</h3>
                    </div>
                  </div>
                  <p className="text-[hsl(210,15%,75%)] leading-relaxed">
                    {t('projectBiomathCore.dualEngineSystemicDesc', 'Evaluated against active history, cross-category influences and the established structural map of the individual — placing the signal inside the whole picture.')}
                  </p>
                </div>
              </div>

              <div className="flex justify-center mb-6">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-px h-8 bg-gradient-to-b from-transparent via-[hsl(25,90%,55%)]/60 to-[hsl(25,90%,55%)]" />
                  <ArrowRight className="w-5 h-5 text-[hsl(25,90%,65%)] rotate-90" />
                </div>
              </div>

              <div className="flex justify-center">
                <div className="bg-gradient-to-br from-[hsl(25,90%,18%)] via-[hsl(220,25%,6%)] to-[hsl(200,80%,15%)] border border-[hsl(25,90%,55%)]/40 rounded-2xl px-8 py-6 text-center max-w-2xl shadow-xl shadow-[hsl(25,90%,30%)]/20">
                  <p className="text-xs uppercase tracking-widest text-[hsl(25,90%,70%)] mb-2">Output</p>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {t('projectBiomathCore.dualEngineUnifiedTitle', 'Unified Conclusion')}
                  </h3>
                  <p className="text-[hsl(210,15%,80%)]">
                    {t('projectBiomathCore.dualEngineUnifiedDesc', 'A single decision that respects both the depth of the domain and the structure of the whole — eliminating superficial interpretations.')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════ COMPOUNDING POWER OF TIME (from presentation) ═══════════════════════ */}
        <section className="container mx-auto px-4 py-24">
          <div className="text-center mb-14">
            <Badge className="mb-4 bg-[hsl(200,80%,55%)]/10 text-[hsl(200,80%,75%)] border-[hsl(200,80%,55%)]/25 uppercase tracking-wider">
              Time as an Asset
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              {t('projectBiomathCore.timeTitle', 'The Compounding Power of Time')}
            </h2>
            <p className="text-[hsl(210,10%,65%)] max-w-2xl mx-auto">
              {t('projectBiomathCore.timeSubtitle', 'Each phase deepens the structural map. The longer the user stays, the more irreplaceable the model becomes.')}
            </p>
          </div>

          <div className="max-w-6xl mx-auto bg-[hsl(220,25%,5%)] border border-[hsl(210,15%,15%)] rounded-2xl p-6 md:p-10 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_90%_10%,hsl(25,90%,20%)_0%,transparent_55%)] opacity-50 pointer-events-none" />

            <div className="relative">
              <svg viewBox="0 0 800 280" className="w-full h-auto" preserveAspectRatio="none" aria-hidden="true">
                <defs>
                  <linearGradient id="bmcCurveFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="hsl(25,95%,60%)" stopOpacity="0.45" />
                    <stop offset="100%" stopColor="hsl(25,95%,60%)" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="bmcCurveStroke" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="hsl(200,80%,60%)" />
                    <stop offset="60%" stopColor="hsl(35,95%,60%)" />
                    <stop offset="100%" stopColor="hsl(25,95%,60%)" />
                  </linearGradient>
                </defs>

                {[60, 120, 180, 240].map((y) => (
                  <line key={y} x1="0" y1={y} x2="800" y2={y} stroke="hsl(210,15%,18%)" strokeDasharray="3 6" strokeWidth="1" />
                ))}

                <path
                  d="M 0 250 C 150 248, 250 235, 350 200 C 450 165, 530 110, 620 60 C 690 22, 750 12, 800 8 L 800 280 L 0 280 Z"
                  fill="url(#bmcCurveFill)"
                />
                <path
                  d="M 0 250 C 150 248, 250 235, 350 200 C 450 165, 530 110, 620 60 C 690 22, 750 12, 800 8"
                  fill="none"
                  stroke="url(#bmcCurveStroke)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />

                {[
                  { x: 80, y: 248 },
                  { x: 290, y: 218 },
                  { x: 520, y: 118 },
                  { x: 740, y: 18 },
                ].map((p, i) => (
                  <g key={i}>
                    <circle cx={p.x} cy={p.y} r="6" fill="hsl(220,30%,3%)" stroke="hsl(25,95%,60%)" strokeWidth="2" />
                    <circle cx={p.x} cy={p.y} r="2.5" fill="hsl(25,95%,65%)" />
                  </g>
                ))}
              </svg>

              <div className="text-center text-[10px] uppercase tracking-wider text-[hsl(210,10%,50%)] mt-2">
                Time inside BioMath Core →
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
              {[
                {
                  phase: t('projectBiomathCore.timePhase1Label', 'Phase 1 · Day 1'),
                  title: t('projectBiomathCore.timePhase1Title', 'First Snapshot'),
                  desc: t('projectBiomathCore.timePhase1Desc', 'Initial baseline captured. The system has data, but no rhythm.'),
                  color: "hsl(200,80%,60%)",
                },
                {
                  phase: t('projectBiomathCore.timePhase2Label', 'Phase 2 · Month 1'),
                  title: t('projectBiomathCore.timePhase2Title', 'Patterns Emerge'),
                  desc: t('projectBiomathCore.timePhase2Desc', 'Reaction patterns and behavioral anchors begin to stabilize. First cross-category links appear.'),
                  color: "hsl(180,70%,55%)",
                },
                {
                  phase: t('projectBiomathCore.timePhase3Label', 'Phase 3 · Year 1'),
                  title: t('projectBiomathCore.timePhase3Title', 'Structural Map'),
                  desc: t('projectBiomathCore.timePhase3Desc', 'A dense, multi-layered structural map of the individual. Causal logic becomes traceable.'),
                  color: "hsl(35,95%,60%)",
                },
                {
                  phase: t('projectBiomathCore.timePhase4Label', 'Phase 4 · Year 3+'),
                  title: t('projectBiomathCore.timePhase4Title', 'Irreplaceable Model'),
                  desc: t('projectBiomathCore.timePhase4Desc', 'The living digital structure cannot be reconstructed elsewhere. Time itself becomes the moat.'),
                  color: "hsl(25,95%,60%)",
                },
              ].map((p) => (
                <div
                  key={p.phase}
                  className="bg-[hsl(220,22%,7%)] border border-[hsl(210,15%,15%)] rounded-xl p-5 hover:border-[hsl(25,90%,55%)]/30 transition-all duration-500"
                >
                  <p className="text-[10px] uppercase tracking-widest mb-2" style={{ color: p.color }}>{p.phase}</p>
                  <h4 className="text-base font-bold text-white mb-2">{p.title}</h4>
                  <p className="text-xs text-[hsl(210,10%,65%)] leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════ HEALTH BLACK BOX ═══════════════════════ */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0">
            <img src={biomathBlackBox} alt="" className="w-full h-full object-cover opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-r from-[hsl(220,20%,4%)]/95 via-[hsl(220,20%,4%)]/70 to-[hsl(220,20%,4%)]/95" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <Lock className="w-16 h-16 text-[hsl(200,80%,55%)] mx-auto mb-6" />
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                {t('projectBiomathCore.blackBoxTitle')}
              </h2>
              <p className="text-xl text-[hsl(210,10%,65%)] mb-8 leading-relaxed">
                {t('projectBiomathCore.blackBoxDesc')}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["AES-256 Encryption", "Blockchain Integrity", "Zero-Trust Architecture", "HIPAA & GDPR"].map((item) => (
                  <div key={item} className="bg-[hsl(220,20%,8%)]/80 backdrop-blur-sm border border-[hsl(210,15%,18%)] rounded-xl px-4 py-3 text-sm text-[hsl(210,10%,70%)]">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════ TECHNOLOGY ARCHITECTURE ═══════════════════════ */}
        <section className="container mx-auto px-4 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">{t('projectCommon.technologyArchitecture')}</h2>
          <p className="text-center text-[hsl(210,10%,55%)] mb-12 max-w-2xl mx-auto">
            Six core layers powering the intelligent health operating system
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Lock, title: "Model Archive", items: ["AES-256 encryption at rest & in transit", "Blockchain-verified data integrity", "Granular permission controls", "SOC 2 certified infrastructure"] },
              { icon: Cpu, title: "Data Pipelines", items: ["50+ integrated data sources", "Real-time synchronization", "Automated quality checks", "Historical data preservation"] },
              { icon: Server, title: "Knowledge Engine", items: ["Multi-dimensional analysis", "Pattern correlation engine", "Anomaly detection systems", "Predictive modeling"] },
              { icon: Brain, title: "AI Insight System", items: ["200+ specialized AI services", "Category-specific analysis", "Natural language explanations", "Continuous model improvement"] },
              { icon: FileText, title: "Report Engine", items: ["Interactive visualizations", "Customizable dashboards", "Exportable medical reports", "Historical trend analysis"] },
              { icon: Layers, title: "Integration Layer", items: ["Secure API endpoints", "Healthcare system integration", "Third-party connectivity", "Research data sharing"] },
            ].map((item) => (
              <div key={item.title} className="bg-[hsl(220,18%,7%)] rounded-2xl p-6 border border-[hsl(210,15%,13%)] hover:border-[hsl(200,80%,50%)]/20 transition-all duration-500">
                <item.icon className="w-10 h-10 text-[hsl(200,80%,55%)] mb-4" />
                <h3 className="text-lg font-bold text-white mb-4">{item.title}</h3>
                <ul className="space-y-2">
                  {item.items.map((point) => (
                    <li key={point} className="text-sm text-[hsl(210,10%,55%)] flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-[hsl(200,80%,55%)] mt-2 flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════════ INFOGRAPHICS ═══════════════════════ */}
        <section className="container mx-auto px-4 py-16" id="infographics">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">Platform Architecture & Vision</h2>
          <p className="text-center text-[hsl(210,10%,55%)] mb-10 max-w-3xl mx-auto">
            Visual overview of BioMath Core's living digital model, self-learning architecture, and ecosystem scale
          </p>
          <InfographicsGallery infographics={infographics} projectTitle="BioMath Core" />
        </section>

        {/* ═══════════════════════ 20 HEALTH CATEGORIES ═══════════════════════ */}
        <section className="bg-[hsl(220,20%,6%)] border-y border-[hsl(210,15%,12%)] py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">{t('projectBiomathCore.categoriesTitle')}</h2>
            <p className="text-center text-[hsl(210,10%,55%)] mb-12 max-w-3xl mx-auto">{t('projectBiomathCore.categoriesSubtitle')}</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {categoryData.map((cat) => {
                const Icon = cat.icon;
                return (
                  <div
                    key={cat.name}
                    className="bg-[hsl(220,18%,8%)] border border-[hsl(210,15%,15%)] rounded-xl p-5 text-center hover:border-[hsl(200,80%,50%)]/30 transition-all duration-500 group cursor-default"
                  >
                    <Icon className="w-8 h-8 mx-auto mb-3 transition-transform duration-500 group-hover:scale-110" style={{ color: cat.color }} />
                    <p className="text-sm font-medium text-[hsl(210,10%,70%)] group-hover:text-white transition-colors">{cat.name}</p>
                  </div>
                );
              })}
            </div>

            {/* Category Examples */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { cat: "Critical Health", examples: "Cardiovascular monitoring, blood pressure analysis, glucose management, medication tracking, vital signs" },
                { cat: "Longevity & Anti-Aging", examples: "Biological age calculation, senescence markers, mitochondrial function, telomere analysis, cellular optimization" },
                { cat: "Fitness & Performance", examples: "Training optimization, recovery analysis, VO2max tracking, muscle adaptation, performance prediction" },
                { cat: "Mental Wellness", examples: "Stress pattern detection, mood tracking, cognitive performance, mindfulness metrics, sleep quality impact" },
              ].map((item) => (
                <div key={item.cat} className="bg-[hsl(220,18%,8%)] border border-[hsl(210,15%,13%)] rounded-xl p-5">
                  <p className="font-semibold text-white text-sm mb-2">{item.cat}</p>
                  <p className="text-xs text-[hsl(210,10%,50%)] leading-relaxed">{item.examples}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════ KEY FEATURES ═══════════════════════ */}
        <section className="container mx-auto px-4 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">{t('projectCommon.keyFeatures')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Brain, title: "Dual AI Analysis", desc: "Multiple AI models provide comprehensive analysis with balanced recommendations and expert validation." },
              { icon: Activity, title: "Real-Time Monitoring", desc: "Continuous data collection from connected devices with intelligent pattern detection and automated alerts." },
              { icon: Database, title: "Unified Health Record", desc: "All health information unified: medical history, labs, genetics, biometrics, lifestyle, and clinical notes." },
              { icon: FileText, title: "Smart Reports", desc: "Personalized daily insights with weekly summaries, progress tracking, and clear trend visualizations." },
              { icon: Heart, title: "Personalized Guidance", desc: "Tailored recommendations for nutrition, exercise, sleep, stress management based on your unique profile." },
              { icon: Lock, title: "Privacy & Security", desc: "Military-grade encryption, zero-trust architecture, SOC 2 certification. Complete data sovereignty." },
            ].map((item) => (
              <div key={item.title} className="bg-[hsl(220,18%,7%)] rounded-2xl p-6 border border-[hsl(210,15%,13%)] hover:border-[hsl(200,80%,50%)]/20 transition-all duration-500 group">
                <item.icon className="w-10 h-10 text-[hsl(200,80%,55%)] mb-4 transition-transform group-hover:scale-110" />
                <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                <p className="text-sm text-[hsl(210,10%,55%)] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════════ MEETING ROOM / OPERATIONAL MODEL ═══════════════════════ */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0">
            <img src={biomathMeeting} alt="" className="w-full h-full object-cover opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-b from-[hsl(220,20%,4%)]/90 via-[hsl(220,20%,4%)]/80 to-[hsl(220,20%,4%)]" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">{t('projectCommon.operationalModel')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Daily User Workflow", desc: "Wake to personalized insights. Connected devices auto-track throughout the day. Real-time recommendations update as conditions change. Evening reports summarize and suggest." },
                { title: "Service Activation", desc: "Choose categories that matter most. Activate relevant AI services. Start with a few, expand over time. Subscription scales with depth, not flat-rate." },
                { title: "Clinical Integration", desc: "Healthcare providers receive patient-authorized access. Clinical decision support tool alongside traditional evaluation. Professional-grade exportable reports." },
              ].map((item) => (
                <div key={item.title} className="bg-[hsl(220,18%,8%)]/80 backdrop-blur-sm rounded-2xl p-8 border border-[hsl(210,15%,15%)]">
                  <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-[hsl(210,10%,55%)] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════ WHO IT SERVES ═══════════════════════ */}
        <section className="container mx-auto px-4 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">{t('projectCommon.whoItServes')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Health Optimization Seekers", desc: "Individuals focused on longevity, performance, disease prevention. Understanding their bodies through personal biology rather than generic averages." },
              { title: "Chronic Condition Managers", desc: "Managing diabetes, cardiovascular conditions, autoimmune disorders, or metabolic syndromes with continuous monitoring and optimization guidance." },
              { title: "Athletes & Performers", desc: "Professional and serious athletes optimizing training, recovery, nutrition through data-driven insights and biohacking precision." },
              { title: "Healthcare Professionals", desc: "Physicians, counselors, nutritionists using advanced analytics to personalize treatment plans and track outcomes effectively." },
            ].map((item) => (
              <div key={item.title} className="bg-[hsl(220,18%,7%)] rounded-2xl p-8 border border-[hsl(210,15%,13%)] hover:border-[hsl(200,80%,50%)]/20 transition-all">
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-[hsl(210,10%,55%)] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════════ WHAT MAKES IT UNIQUE ═══════════════════════ */}
        <section className="bg-[hsl(220,20%,6%)] border-y border-[hsl(210,15%,12%)] py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">{t('projectBiomathCore.uniqueTitle')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { icon: Layers, title: "True Data Integration", desc: "Unifies genetics, labs, biometrics, lifestyle, and medical history into a single biomathematical model. Correlations across categories reveal insights impossible in isolated data." },
                { icon: Cpu, title: "Mathematical Rigor", desc: "Built on computational biology and biomathematical modeling. Simulates biological processes, predicts outcomes, accounts for non-linear interactions." },
                { icon: Activity, title: "Continuous Intelligence", desc: "Real-time processing means insights update as your body changes. The platform learns, adapts dynamically, and provides timely guidance." },
                { icon: Shield, title: "Emotional Safety First", desc: "Designed to inform and support. Language emphasizes learning and optimization. Users feel empowered, not anxious." },
              ].map((item) => (
                <div key={item.title} className="flex gap-5">
                  <div className="w-12 h-12 rounded-xl bg-[hsl(200,80%,50%)]/10 border border-[hsl(200,80%,50%)]/20 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-[hsl(200,80%,55%)]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-[hsl(210,10%,55%)] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════ MARKET CONTEXT ═══════════════════════ */}
        <section className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{t('projectCommon.marketContext')}</h2>
              <p className="text-lg text-[hsl(210,10%,65%)] mb-4 leading-relaxed">
                Healthcare is drowning in data but starving for insight. Wearables generate millions of data points. 
                Genetic testing reveals thousands of variants. Yet most people cannot answer basic questions about their health patterns.
              </p>
              <p className="text-[hsl(210,10%,50%)] leading-relaxed mb-4">
                The precision medicine market is projected to reach $120+ billion globally. However, most platforms focus narrowly on 
                single domains without cross-correlation or unified intelligence.
              </p>
              <p className="text-[hsl(210,10%,50%)] leading-relaxed">
                BioMath Core fills the gap between data collection and actionable understanding — the intelligent layer that transforms 
                disconnected streams into a coherent operating system for personal health.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden border border-[hsl(210,15%,15%)] shadow-2xl">
              <img src={biomathSupercomputer} alt="BioMath Core technology infrastructure" className="w-full h-[350px] object-cover" />
            </div>
          </div>
        </section>

        {/* ═══════════════════════ LONG-TERM VISION ═══════════════════════ */}
        <section className="bg-[hsl(220,20%,6%)] border-y border-[hsl(210,15%,12%)] py-20">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <Globe className="w-14 h-14 text-[hsl(200,80%,55%)] mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{t('projectCommon.longTermVision')}</h2>
            <p className="text-lg text-[hsl(210,10%,65%)] leading-relaxed mb-6">
              {t('projectBiomathCore.visionDesc')}
            </p>
            <p className="text-[hsl(210,10%,50%)] leading-relaxed">
              {t('projectBiomathCore.visionDesc2')}
            </p>
          </div>
        </section>

        {/* ═══════════════════════ ROADMAP ═══════════════════════ */}
        <section className="container mx-auto px-4 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">{t('projectCommon.roadmap')}</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              { phase: "Current", icon: Globe, color: "hsl(200,80%,55%)", items: ["20 health categories & 200+ AI services active", "Black Box vault & integration pipelines operational", "Knowledge engine & reporting systems functional", "Active user base across multiple health use cases"] },
              { phase: "Next 12 Months", icon: Activity, color: "hsl(140,60%,50%)", items: ["iOS & Android mobile apps with full feature parity", "75+ supported wearable device integrations", "Voice-enabled AI Advisor", "Clinical practitioner portal launch"] },
              { phase: "18–36 Months", icon: Rocket, color: "hsl(35,90%,55%)", items: ["Predictive health modeling for chronic disease risks", "Family health management tools", "Enterprise corporate wellness solutions", "International expansion with localized compliance"] },
            ].map((phase) => (
              <div key={phase.phase} className="bg-[hsl(220,18%,7%)] rounded-2xl p-8 border border-[hsl(210,15%,13%)] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full" style={{ backgroundColor: phase.color }} />
                <div className="flex items-center gap-3 mb-5">
                  <phase.icon className="w-6 h-6" style={{ color: phase.color }} />
                  <h3 className="text-xl font-bold text-white">{phase.phase}</h3>
                </div>
                <ul className="space-y-2">
                  {phase.items.map((item) => (
                    <li key={item} className="text-sm text-[hsl(210,10%,55%)] flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: phase.color }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════════ IMPORTANT NOTICE ═══════════════════════ */}
        <section className="container mx-auto px-4 pb-16">
          <div className="bg-[hsl(220,18%,8%)] border border-[hsl(35,60%,40%)]/30 rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-[hsl(35,70%,55%)] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-white mb-2">{t('projectCommon.importantNotice')}</h3>
                <p className="text-sm text-[hsl(210,10%,55%)] leading-relaxed">
                  BioMath Core is an informational and educational wellness platform. It provides data analysis, pattern recognition, 
                  and optimization suggestions but does not diagnose medical conditions, prescribe treatments, or replace professional 
                  medical care. All insights should be discussed with qualified healthcare professionals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════ CTA ═══════════════════════ */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0">
            <img src={biomathCardBg} alt="" className="w-full h-full object-cover opacity-25" />
            <div className="absolute inset-0 bg-[hsl(220,20%,4%)]/70" />
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <Heart className="w-16 h-16 text-[hsl(200,80%,55%)] mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Learn More About BioMath Core</h2>
            <p className="text-lg text-[hsl(210,10%,60%)] mb-10 max-w-2xl mx-auto">
              Discover how BioMath Core transforms health data into personal intelligence and actionable guidance
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link to="/start-investing">
                <Button size="lg" className="bg-[hsl(200,80%,50%)] hover:bg-[hsl(200,80%,45%)] text-white px-8">
                  Request Information
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" asChild className="border-[hsl(200,80%,50%)]/30 text-[hsl(200,80%,70%)] hover:bg-[hsl(200,80%,50%)]/10">
                <a href="/investor-briefs/biomath-core-investor-brief.pdf" download="BioMath-Core-Investor-Brief.pdf">
                  <Download className="w-5 h-5 mr-2" />
                  Investor Brief (PDF)
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Legal Disclaimer */}
        <div className="container mx-auto px-4 py-16">
          <InvestorPageDisclaimer />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BioMathCore;
