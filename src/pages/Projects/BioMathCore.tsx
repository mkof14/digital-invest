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
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={biomathCardBg} alt="" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(220,20%,4%)]/60 via-[hsl(220,20%,4%)]/30 to-[hsl(220,20%,4%)]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(220,20%,4%)]/90 via-transparent to-[hsl(220,20%,4%)]/70" />
        </div>

        <div className="container mx-auto px-4 relative z-10 py-32">
          <Link to="/projects" className="inline-block mb-8">
            <Button variant="ghost" size="sm" className="text-[hsl(200,80%,70%)] hover:bg-[hsl(200,80%,50%)]/10 border border-[hsl(200,80%,50%)]/20">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t('projectCommon.backToProjects')}
            </Button>
          </Link>

          <div className="max-w-4xl">
            <Badge className="mb-6 bg-[hsl(200,80%,50%)]/15 text-[hsl(200,80%,70%)] border-[hsl(200,80%,50%)]/30 text-sm px-4 py-1">
              {t('projectBiomathCore.badge', 'Digital Health · Foundation Platform')}
            </Badge>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[0.95]">
              <span className="text-white">BioMath</span>{" "}
              <span className="text-[hsl(200,80%,55%)]">Core</span>
            </h1>
            <p className="text-2xl md:text-3xl font-light text-[hsl(210,15%,75%)] mb-4">
              {t('projectBiomathCore.heroSubtitle')}
            </p>
            <p className="text-lg text-[hsl(210,10%,60%)] max-w-2xl mb-10 leading-relaxed">
              {t('projectBiomathCore.heroDesc')}
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link to="/start-investing">
                <Button size="lg" className="bg-[hsl(200,80%,50%)] hover:bg-[hsl(200,80%,45%)] text-white px-8">
                  {t('projectCommon.requestInformation')}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" asChild className="border-[hsl(200,80%,50%)]/30 text-[hsl(200,80%,70%)] hover:bg-[hsl(200,80%,50%)]/10">
                <a href="https://biomathcore.com" target="_blank" rel="noopener noreferrer">
                  <Globe className="h-5 w-5 mr-2" />
                  biomathcore.com
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-[hsl(210,15%,25%)] text-[hsl(210,10%,65%)] hover:bg-[hsl(210,15%,12%)]">
                <a href="/investor-briefs/biomath-core-investor-brief.pdf" download="BioMath-Core-Investor-Brief.pdf">
                  <Download className="w-5 h-5 mr-2" />
                  {t('projectCommon.investorBrief')}
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-[hsl(210,15%,25%)] text-[hsl(210,10%,65%)] hover:bg-[hsl(210,15%,12%)]">
                <a href="#infographics">
                  <Images className="w-5 h-5 mr-2" />
                  {t('projectCommon.infographics')}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <main className="relative z-10">
        {/* ═══════════════════════ STATS RIBBON ═══════════════════════ */}
        <section className="border-y border-[hsl(210,15%,15%)] bg-[hsl(220,20%,6%)]">
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "200+", label: t('projectBiomathCore.statServices') },
                { value: "20", label: t('projectBiomathCore.statCategories') },
                { value: "50+", label: t('projectBiomathCore.statIntegrations') },
                { value: "24/7", label: t('projectBiomathCore.statAnalysis') },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl md:text-4xl font-bold text-[hsl(200,80%,55%)]">{stat.value}</p>
                  <p className="text-sm text-[hsl(210,10%,55%)] mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════ FOUNDATION BANNER ═══════════════════════ */}
        <section className="container mx-auto px-4 py-16">
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0">
              <img src={biomathSupercomputer} alt="" className="w-full h-full object-cover opacity-30" />
              <div className="absolute inset-0 bg-gradient-to-r from-[hsl(220,25%,8%)]/95 via-[hsl(220,25%,8%)]/80 to-[hsl(220,25%,8%)]/60" />
            </div>
            <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-start gap-6">
              <div className="w-16 h-16 rounded-2xl bg-[hsl(200,80%,50%)]/10 border border-[hsl(200,80%,50%)]/20 flex items-center justify-center flex-shrink-0">
                <Rocket className="w-8 h-8 text-[hsl(200,80%,55%)]" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  {t('projectBiomathCore.foundationTitle')}
                </h2>
                <p className="text-[hsl(210,10%,65%)] text-lg leading-relaxed">
                  {t('projectBiomathCore.foundationDesc')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════ WELLNESS CENTER IMAGE + OVERVIEW ═══════════════════════ */}
        <section className="container mx-auto px-4 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="rounded-2xl overflow-hidden border border-[hsl(210,15%,15%)] shadow-2xl">
              <img src={biomathWellness} alt="BioMath Core Wellness Center" className="w-full h-[400px] object-cover" />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">{t('projectCommon.overview')}</h2>
              <p className="text-lg text-[hsl(210,10%,65%)] leading-relaxed">
                {t('projectBiomathCore.overviewP1')}
              </p>
              <p className="text-[hsl(210,10%,55%)] leading-relaxed">
                {t('projectBiomathCore.overviewP2')}
              </p>
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
              { step: "01", title: "Data Aggregation", desc: "Connect wearables, upload labs, import medical records, add genetic tests. All data flows into the encrypted Model Archive vault.", icon: Database },
              { step: "02", title: "Knowledge Engine", desc: "Server-side engine analyzes data, identifies patterns, correlates metrics across categories, and updates your personal health model continuously.", icon: Server },
              { step: "03", title: "AI Insight Generation", desc: "200+ specialized AI services examine sleep, nutrition, stress, recovery, cognition, metabolic health and generate personalized insights.", icon: Cpu },
              { step: "04", title: "Daily Guidance", desc: "Personalized recommendations through clean dashboards. Visual reports, smart alerts, and context-rich explanations — designed to inform, not alarm.", icon: FileText },
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
                Health Black Box
              </h2>
              <p className="text-xl text-[hsl(210,10%,65%)] mb-8 leading-relaxed">
                Your Model Archive — an encrypted vault storing all personal health data with military-grade security. 
                You maintain complete control over data access, sharing, and sovereignty.
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
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">Technology & Architecture</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">20 Health Categories</h2>
            <p className="text-center text-[hsl(210,10%,55%)] mb-12 max-w-3xl mx-auto">
              200+ specialized AI services organized across comprehensive health and wellness domains
            </p>
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
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Key Features & Capabilities</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Operational Model</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Who It Serves</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">What Makes BioMath Core Unique</h2>
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Market Context</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Long-Term Vision</h2>
            <p className="text-lg text-[hsl(210,10%,65%)] leading-relaxed mb-6">
              BioMath Core aims to become the foundational operating system for personal health — the layer connecting 
              all data sources, generating unified insights, and coordinating wellness across your entire life.
            </p>
            <p className="text-[hsl(210,10%,50%)] leading-relaxed">
              Over 5-10 years: family health coordination, senior independence through predictive monitoring, 
              smart home integration, automated medication management, and seamless healthcare provider coordination.
            </p>
          </div>
        </section>

        {/* ═══════════════════════ ROADMAP ═══════════════════════ */}
        <section className="container mx-auto px-4 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Roadmap</h2>
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
                <h3 className="text-lg font-bold text-white mb-2">Important Notice</h3>
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
