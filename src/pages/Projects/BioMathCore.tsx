import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Heart, Brain, Activity, Shield, Lock, Database, Cpu, Layers, Server, FileText, AlertCircle, Globe, Rocket, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import biomathCoreHero from "@/assets/projects/biomath-core-hero.jpg";
import DownloadInvestorBriefButton from "@/components/DownloadInvestorBriefButton";
import InvestorPageDisclaimer from "@/components/InvestorPageDisclaimer";

const BioMathCore = () => {
  const categories = [
    "Critical Health", "Everyday Wellness", "Longevity & Anti-Aging", "Mental Wellness",
    "Fitness & Performance", "Women's Health", "Men's Health", "Beauty & Skincare",
    "Nutrition & Diet", "Sleep & Recovery", "Environmental Health", "Family Health",
    "Preventive Medicine", "Biohacking & Performance", "Senior Care", "Eye-Health Suite",
    "Digital Therapeutics", "Sexual Longevity", "Men's Sexual Health", "Women's Sexual Health"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="relative py-32 -mx-4 px-4 overflow-hidden mb-16">
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url(${biomathCoreHero})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/90 to-background/70" />
          </div>

          <div className="container mx-auto relative z-10">
            <div className="max-w-4xl">
              <Link to="/projects" className="animate-fade-in">
                <Button variant="ghost" size="sm" className="mb-6 hover:bg-background/80">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Projects
                </Button>
              </Link>
              <div className="flex items-center gap-6 mb-8 animate-fade-in" style={{ animationDelay: '0.1s', animationFillMode: 'backwards' }}>
                <img 
                  src="/lovable-uploads/biomath-core-logo.png" 
                  alt="BioMath Core logo" 
                  className="w-20 h-20 md:w-24 md:h-24 object-contain"
                />
                <div>
                  <Badge className="mb-4">Intelligent Health OS</Badge>
                  <h1 className="text-4xl md:text-6xl font-bold">
                    BioMath Core
                  </h1>
                </div>
              </div>
              <p className="text-2xl md:text-3xl font-light text-foreground mb-4">
                Where Data Meets Daily Life
              </p>
              <p className="text-xl text-muted-foreground max-w-3xl mb-8">
                From sleep to cognition, from movement to mood — BioMath Core brings clarity to your health journey through 
                intelligent real-time insights, 200+ AI-powered services, and a secure personal data vault.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link to="/start-investing">
                  <Button size="lg" className="px-8">
                    Request Information
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-primary/30 hover:border-primary"
                >
                  <a href="https://biomathcore.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <Globe className="h-5 w-5" />
                    biomathcore.com
                  </a>
                </Button>
                <DownloadInvestorBriefButton projectSlug="biomathcore" size="lg" />
              </div>
            </div>
          </div>
        </section>

        {/* Overview - Positioned High */}
        <section className="mb-16 -mt-8">
          <Card className="border-primary/20 shadow-lg">
            <CardContent className="pt-8 space-y-4">
              <h2 className="text-3xl font-bold mb-4">Overview</h2>
              <p className="text-lg leading-relaxed">
                BioMath Core is an intelligent health operating system that unifies medical records, biological data, genetic 
                information, wearable metrics, and lifestyle inputs into a single coherent platform. The system transforms 
                complex health data into clear, actionable insights that help individuals understand their bodies and optimize 
                their wellbeing.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Unlike fragmented health apps that track isolated metrics, BioMath Core provides comprehensive analysis across 
                20 health categories through 200+ specialized AI services. The platform serves as your personal health intelligence 
                layer, continuously processing data streams and delivering personalized guidance that actually makes sense.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Core Mission */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Core Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-primary/20">
              <CardHeader>
                <Heart className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Understanding, Not Overwhelm</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Convert health signals into meaning, then into gentle supportive guidance. Provide clarity without 
                  pressure, interpretation without anxiety. Make complex biology accessible and actionable.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <Shield className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Reassurance, Not Urgency</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Build on a foundation of emotional safety. Users are learning, never failing. Guidance is invitational 
                  rather than prescriptive, supportive rather than judgmental.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <Brain className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Education, Not Diagnosis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Help users understand how their bodies respond day-to-day. Educational, supportive, wellness-first. 
                  Interpretation of patterns, not medical diagnosis or treatment.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* How the Platform Works */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">How the Platform Works</h2>
          <div className="space-y-6">
            <Card className="border-primary/20">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                    1
                  </div>
                  <CardTitle className="text-xl">Data Aggregation & Storage</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Users connect health data sources: upload lab results, link wearable devices (fitness trackers, smart scales, 
                  sleep monitors, CGM sensors), import medical records, add genetic test results, and track daily metrics like 
                  food, exercise, mood, and energy. All data flows into the encrypted Model Archive vault where it's organized, 
                  validated, and prepared for analysis.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                    2
                  </div>
                  <CardTitle className="text-xl">Knowledge Engine Processing</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Server-side knowledge engine analyzes incoming data streams, identifies patterns, correlates metrics across 
                  categories, detects anomalies, and updates your personal health model. The engine runs continuously, processing 
                  new information as it arrives and refining its understanding of your unique biology.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                    3
                  </div>
                  <CardTitle className="text-xl">AI Insight Generation</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Multiple AI models analyze your data across 20 health categories. Each category has 10+ specialized services 
                  that examine specific aspects: sleep quality analysis, nutrition optimization, stress pattern detection, 
                  recovery monitoring, cognitive performance tracking, metabolic health assessment, and more. AI generates 
                  personalized insights tailored to your goals and current state.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                    4
                  </div>
                  <CardTitle className="text-xl">Daily Guidance Delivery</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Users receive daily personalized recommendations through clean, intuitive dashboards. Insights are presented 
                  with context and explanation, not just numbers. Visual reports show trends over time. Smart alerts notify 
                  when significant patterns emerge. Everything designed to inform and support rather than alarm or overwhelm.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Technology Architecture */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Technology & Architecture</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-primary/20">
              <CardHeader>
                <Lock className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Model Archive (Black Box)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Encrypted vault storing all personal health data with military-grade security. Users maintain complete control 
                  over data access and sharing. SOC 2 certified infrastructure with zero-trust architecture.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• AES-256 encryption at rest and in transit</li>
                  <li>• Blockchain-verified data integrity</li>
                  <li>• Granular permission controls</li>
                  <li>• HIPAA, GDPR, HITECH compliant</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <Cpu className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Data Pipelines</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Automated data collection from 50+ integrated sources including wearables, lab systems, electronic health 
                  records, and manual entries. Real-time processing, validation, and normalization.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Multi-source data ingestion</li>
                  <li>• Automated quality checks</li>
                  <li>• Real-time synchronization</li>
                  <li>• Historical data preservation</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <Server className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Knowledge Engine</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Server-side computational system that processes health data through mathematical models, statistical analysis, 
                  pattern recognition algorithms, and machine learning pipelines to extract meaningful insights.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Multi-dimensional data analysis</li>
                  <li>• Pattern correlation engine</li>
                  <li>• Anomaly detection systems</li>
                  <li>• Predictive modeling capabilities</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <Brain className="w-10 h-10 text-primary mb-2" />
                <CardTitle>AI Insight System</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Multiple specialized AI models generate category-specific insights, recommendations, and explanations. Dual-AI 
                  analysis provides balanced perspectives validated against medical knowledge bases.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 200+ specialized AI services</li>
                  <li>• Category-specific analysis</li>
                  <li>• Natural language explanations</li>
                  <li>• Continuous model improvement</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <FileText className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Report Engine</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Generates comprehensive visual reports, trend analyses, progress tracking, and exportable summaries. Clean 
                  dashboards present complex information in intuitive, actionable formats.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Interactive visualizations</li>
                  <li>• Customizable dashboards</li>
                  <li>• Exportable medical reports</li>
                  <li>• Historical trend analysis</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <Layers className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Integration Layer</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  API infrastructure enabling connections with healthcare providers, research institutions, third-party health 
                  apps, and medical device ecosystems while maintaining data sovereignty and security.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Secure API endpoints</li>
                  <li>• Healthcare system integration</li>
                  <li>• Third-party app connectivity</li>
                  <li>• Research data sharing (opt-in)</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* 20 Health Categories & 200+ Services */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">20 Health Categories</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Access 200+ specialized AI services organized across comprehensive health and wellness categories. Each category 
              contains 10+ focused services analyzing specific aspects of your health.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
            {categories.map((category) => (
              <Card key={category} className="border-primary/20 hover:border-primary/40 transition-all hover-scale cursor-pointer">
                <CardContent className="p-4 text-center">
                  <p className="text-sm font-medium">{category}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-primary/20 bg-muted/20">
            <CardContent className="pt-8">
              <h3 className="text-xl font-bold mb-4">Category Examples</h3>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <p className="font-semibold text-foreground mb-2">Critical Health:</p>
                  <p className="text-sm">Cardiovascular monitoring, blood pressure analysis, glucose management, medication tracking, vital signs assessment</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-2">Longevity & Anti-Aging:</p>
                  <p className="text-sm">Cellular health optimization, biological age calculation, senescence markers, mitochondrial function, telomere analysis</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-2">Fitness & Performance:</p>
                  <p className="text-sm">Training optimization, recovery analysis, VO2max tracking, muscle adaptation, performance prediction</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-2">Mental Wellness:</p>
                  <p className="text-sm">Stress pattern detection, mood tracking, cognitive performance, mindfulness metrics, sleep quality impact</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Key Features & Capabilities */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Key Features & Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-primary/20">
              <CardHeader>
                <Brain className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Dual AI Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Multiple AI models provide comprehensive analysis with balanced recommendations. Expert validation ensures 
                  insights are both scientifically sound and practically applicable to daily life.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <Activity className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Real-Time Monitoring</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Continuous data collection from connected devices with intelligent processing. Automated pattern detection 
                  identifies trends, correlations, and potential concerns before they become problems.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <Database className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Unified Health Record</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  All health information in one place: medical history, lab results, genetic data, biometric measurements, 
                  lifestyle tracking, and clinical notes. Accessible, organized, and shareable on your terms.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <FileText className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Smart Insights & Reports</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Personalized daily insights explaining what's happening in your body and why. Weekly summary reports track 
                  progress, highlight patterns, and suggest adjustments. Clear visualizations make complex data understandable.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <Heart className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Personalized Guidance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Tailored recommendations for nutrition, exercise, sleep, stress management, and supplementation based on your 
                  unique health profile, goals, and current state. Actionable advice that actually fits your life.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <Lock className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Privacy & Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Military-grade encryption, zero-trust architecture, SOC 2 certification. You control who sees your data, 
                  when they see it, and for how long. Complete data sovereignty and portability.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Operational Model */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Operational Model</h2>
          <Card className="border-primary/20">
            <CardContent className="pt-8 space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-3">Daily User Workflow</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Users wake up to personalized daily insights based on sleep quality, recovery status, and scheduled activities. 
                  Throughout the day, connected devices automatically track activity, heart rate, stress levels, and other metrics. 
                  The platform analyzes this data in real-time, updating recommendations as conditions change. Evening reports 
                  summarize the day and suggest adjustments for tomorrow.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Service Activation Model</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Users choose which of the 20 health categories matter most to them and activate relevant AI services within 
                  those categories. Can start with just a few services and expand over time. Subscription pricing scales with 
                  the number and depth of activated services rather than flat-rate access to everything.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Clinical Integration</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Healthcare providers can receive patient-authorized access to BioMath Core data and insights. Practitioners 
                  use the platform as a clinical decision support tool, reviewing AI-generated assessments alongside traditional 
                  medical evaluation. Generates professional reports suitable for clinical documentation.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Who It Serves */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Who It Serves</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle>Health Optimization Seekers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Individuals focused on longevity, performance enhancement, disease prevention, and continuous wellness 
                  improvement. People who want to understand their bodies deeply and optimize based on personal biology 
                  rather than generic population averages.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle>Chronic Condition Managers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  People managing diabetes, cardiovascular conditions, autoimmune disorders, metabolic syndromes, or other 
                  ongoing health challenges who need continuous monitoring, pattern detection, and optimization guidance.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle>Athletes & Performers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Professional and serious amateur athletes optimizing training, recovery, nutrition, and performance through 
                  data-driven insights. Biohackers pushing human performance boundaries with scientific precision.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle>Healthcare Professionals</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Physicians, genetic counselors, nutritionists, and wellness practitioners using advanced analytics to 
                  enhance patient care, personalize treatment plans, and track outcomes more effectively.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Market Context */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Market Context</h2>
          <Card className="border-primary/20">
            <CardContent className="pt-8 space-y-4">
              <p className="text-lg leading-relaxed">
                Healthcare is drowning in data but starving for insight. Wearables generate millions of data points. Genetic 
                testing reveals thousands of variants. Lab tests pile up in disconnected systems. Medical records fragment 
                across providers. Yet most people cannot answer simple questions about their own health patterns or make truly 
                informed optimization decisions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The precision medicine market is projected to reach $120+ billion globally as genomic sequencing becomes 
                affordable, AI capabilities mature, and consumers demand personalized health solutions. However, most existing 
                platforms focus narrowly on single domains: genetic testing companies provide raw data without context, wearable 
                manufacturers track metrics without analysis, medical record systems store information without generating insights.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                BioMath Core addresses the fundamental need for health data integration, biomathematical modeling, and intelligent 
                interpretation. The platform transforms disconnected data streams into a coherent operating system for personal 
                health - filling the gap between data collection and actionable understanding.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* What Makes This Unique */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">What Makes BioMath Core Unique</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-primary/20">
              <CardHeader>
                <Layers className="w-10 h-10 text-primary mb-2" />
                <CardTitle>True Data Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Most health platforms collect data in silos. BioMath Core unifies genetics, labs, biometrics, lifestyle, and 
                  medical history into a single biomathematical model that understands how everything interconnects and influences 
                  each other. Correlations across categories reveal insights impossible to see in isolated data streams.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <Cpu className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Mathematical Rigor</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Built on computational biology and biomathematical modeling rather than simple statistical analysis. The 
                  system simulates biological processes, predicts outcomes, and accounts for non-linear interactions that 
                  basic tracking apps miss entirely.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <Activity className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Continuous Intelligence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Real-time data processing and analysis means insights update as your body changes throughout the day. The 
                  platform learns from your patterns, adapts recommendations dynamically, and provides timely guidance when it 
                  matters most.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <Shield className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Emotional Safety First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Designed to inform and support rather than alarm or pressure. Insights presented with context and explanation. 
                  Language emphasizes learning and optimization rather than failure and problems. Users feel empowered, not anxious.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Long-Term Vision */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Long-Term Vision</h2>
          <Card className="border-primary/20">
            <CardContent className="pt-8 space-y-4">
              <p className="text-lg leading-relaxed">
                BioMath Core aims to become the foundational operating system for personal health - the layer that connects 
                all health data sources, generates unified insights, and coordinates wellness activities across your entire life. 
                Think of it as the iOS or Android of health: the platform other health apps, devices, and services build on top of.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Over 5-10 years, the vision includes expanding from individual health intelligence to family health coordination, 
                enabling parents to manage children's wellness, seniors to maintain independence through predictive monitoring, 
                and multi-generational health pattern analysis. Integration with smart home systems for environmental health 
                optimization, automated medication management, and seamless coordination with healthcare providers.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The platform will evolve into a comprehensive health ecosystem where data flows effortlessly between personal 
                tracking, clinical care, research participation, and wellness optimization. By building the largest validated 
                database of personalized health models and outcomes, BioMath Core will drive advances in precision medicine, 
                disease prevention, and longevity science while keeping individuals in control of their data and health decisions.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Current Stage & Roadmap */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Current Stage & Roadmap</h2>
          <div className="space-y-6">
            <Card className="border-primary/20 bg-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="w-6 h-6" />
                  Current Stage
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Core platform operational with 20 health categories and 200+ AI services active. Black Box data vault, 
                  integration pipelines, knowledge engine, and reporting systems functional. Active user base testing platform 
                  across multiple health use cases. Refining AI models based on real-world usage patterns and outcomes.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="w-6 h-6" />
                  Next 12 Months
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Launch mobile applications for iOS and Android with full feature parity</li>
                  <li>• Expand wearable device integrations to 75+ supported devices</li>
                  <li>• Deploy voice-enabled AI Advisor for hands-free interaction</li>
                  <li>• Release clinical practitioner portal for healthcare provider access</li>
                  <li>• Build API ecosystem enabling third-party health app integration</li>
                  <li>• Establish partnerships with lab testing companies for direct result import</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Rocket className="w-6 h-6" />
                  18-36 Months
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Deploy predictive health modeling for major chronic disease risks</li>
                  <li>• Launch family health management tools for multi-user households</li>
                  <li>• Integrate with electronic health record systems for seamless clinical data exchange</li>
                  <li>• Develop enterprise wellness solutions for corporate health programs</li>
                  <li>• Expand international availability with localized health regulations compliance</li>
                  <li>• Build research data platform for opt-in scientific contribution</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Important Notice */}
        <Card className="mb-16 border-primary/20 bg-muted/20">
          <CardContent className="pt-8">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <AlertCircle className="w-6 h-6 text-primary" />
              Important Notice
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              BioMath Core is an informational and educational wellness platform. The system provides data analysis, pattern 
              recognition, and optimization suggestions but does not diagnose medical conditions, prescribe treatments, or 
              replace professional medical care. All insights and recommendations are for informational purposes and should be 
              discussed with qualified healthcare professionals before making health decisions. The platform complements but 
              does not substitute for professional medical advice, diagnosis, or treatment.
            </p>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <Card className="bg-gradient-tech text-primary-foreground border-0 mb-16">
          <CardContent className="py-12 text-center">
            <Heart className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Learn More About BioMath Core</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Discover how BioMath Core transforms health data into personal intelligence and actionable guidance
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link to="/start-investing">
                <Button size="lg" variant="secondary">
                  Request Information
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <DownloadInvestorBriefButton projectSlug="biomathcore" size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10" />
            </div>
          </CardContent>
        </Card>

        {/* Legal Disclaimer */}
        <div className="mt-16">
          <InvestorPageDisclaimer />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BioMathCore;