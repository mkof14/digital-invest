import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Heart, Brain, Activity, Shield, Database, Microscope, LineChart, Users, Globe, Zap, Lock, Rocket, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import biomathLifeHero from "@/assets/projects/biomathlife-hero.jpg";
import DownloadInvestorBriefButton from "@/components/DownloadInvestorBriefButton";
import InvestorPageDisclaimer from "@/components/InvestorPageDisclaimer";

const BioMathLife = () => {
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
      
      <main className="container mx-auto px-4 pt-24 md:pt-28 pb-8">
        {/* Hero Section */}
        <section className="relative py-32 -mx-4 px-4 overflow-hidden mb-16">
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url(${biomathLifeHero})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/90 to-background/70" />
          </div>

          <div className="relative z-10 max-w-4xl">
            <Link to="/projects" className="animate-fade-in">
              <Button variant="ghost" size="sm" className="mb-6 hover:bg-background/80">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Projects
              </Button>
            </Link>
            <div className="animate-fade-in" style={{ animationDelay: '0.1s', animationFillMode: 'backwards' }}>
              <Badge className="mb-4">Precision Medicine Platform</Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                BioMath Life Platform
              </h1>
            <p className="text-2xl text-foreground mb-4">
              Unifying Biology, Data, and Daily Life into One Intelligent System
            </p>
            <p className="text-xl text-muted-foreground max-w-3xl mb-8">
              BioMath Life transforms how people understand and optimize their health by combining genomic analysis, 
              biomathematical modeling, continuous monitoring, and AI-driven insights into a single integrated platform.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link to="/start-investing">
                <Button size="lg">
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
                <a href="https://biomathlife.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Globe className="h-5 w-5" />
                  biomathlife.com
                </a>
              </Button>
              <DownloadInvestorBriefButton projectSlug="biomathlife" size="lg" />
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
                BioMath Life is a precision medicine platform that creates detailed biomathematical models of the human body 
                based on genetic profiles, lab data, biometric monitoring, and lifestyle information. The platform provides 
                personalized health insights, disease risk assessment, and optimization recommendations across 20 comprehensive 
                health categories.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                By integrating cutting-edge genomic sequencing, mathematical biology, artificial intelligence, and continuous 
                health monitoring, BioMath Life enables individuals and healthcare providers to make more informed decisions 
                about treatment, prevention, and wellness optimization.
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
                <Microscope className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Precision Understanding</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Transform complex biological data into clear, actionable insights that help individuals understand 
                  their unique health profile and optimize their wellbeing.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <Heart className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Proactive Health</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Enable early detection and prevention through continuous monitoring and predictive modeling, shifting 
                  healthcare from reactive treatment to proactive optimization.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <Users className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Accessible Intelligence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Make advanced biomathematical analysis and AI-powered health insights accessible beyond specialized 
                  research institutions and available to individuals and practitioners.
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
                  <CardTitle className="text-xl">Data Collection & Integration</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Users provide genetic data through DNA sequencing, upload lab results, connect wearable devices for 
                  continuous biometric monitoring, and input lifestyle information. The platform integrates these data 
                  streams into a unified personal health profile stored in the encrypted Black Box vault.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                    2
                  </div>
                  <CardTitle className="text-xl">Biomathematical Modeling</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Advanced algorithms create personalized biomathematical models that simulate how an individual's body 
                  processes nutrients, responds to stress, metabolizes medications, and ages over time. These models are 
                  continuously refined as new data arrives.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                    3
                  </div>
                  <CardTitle className="text-xl">AI Analysis & Insights</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Multiple AI models analyze the data and biomathematical simulations to generate personalized insights, 
                  identify potential health risks, suggest optimization strategies, and provide daily recommendations across 
                  200+ specialized services spanning 20 health categories.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                    4
                  </div>
                  <CardTitle className="text-xl">Personalized Recommendations</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Users receive tailored guidance on nutrition, exercise, sleep, stress management, supplementation, and 
                  preventive care. The AI Advisor (available via voice and text) provides ongoing support, answers questions, 
                  and helps interpret complex health information in accessible language.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Technology & Architecture */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Technology & Architecture</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-primary/20">
              <CardHeader>
                <Database className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Black Box - Secure Data Vault</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Military-grade encrypted storage for all personal health data, genetic information, lab results, and 
                  biometric measurements. Users maintain complete control over data access and sharing.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• AES-256 encryption</li>
                  <li>• Zero-trust architecture</li>
                  <li>• HIPAA, GDPR compliant</li>
                  <li>• Blockchain-verified data integrity</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <Brain className="w-10 h-10 text-primary mb-2" />
                <CardTitle>AI Advisor System</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Conversational AI interface (voice + text) that provides 24/7 health guidance, answers questions, interprets 
                  lab results, explains genetic findings, and offers personalized recommendations based on your complete health profile.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Natural language processing</li>
                  <li>• Multi-modal AI models</li>
                  <li>• Context-aware responses</li>
                  <li>• Continuous learning system</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <Activity className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Continuous Monitoring Engine</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Real-time integration with wearable devices, smart scales, CGM sensors, and home diagnostic equipment. 
                  Automated data collection and analysis with intelligent alerting for significant changes.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Multi-device integration</li>
                  <li>• Real-time data streaming</li>
                  <li>• Pattern detection algorithms</li>
                  <li>• Anomaly alerting system</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <LineChart className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Analytics & Reporting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Comprehensive visualization of health trends, progress tracking, comparative analysis, and predictive 
                  modeling. Generate detailed reports for healthcare providers and track outcomes over time.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Interactive dashboards</li>
                  <li>• Trend analysis tools</li>
                  <li>• Predictive forecasting</li>
                  <li>• Exportable medical reports</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* 20 Health Categories */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">20 Comprehensive Health Categories</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Access over 200 AI-powered services spanning every aspect of health and wellness, from critical care to 
              preventive optimization
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.map((category) => (
              <Card key={category} className="border-primary/20 hover:border-primary/40 transition-all hover-scale">
                <CardContent className="p-4 text-center">
                  <p className="text-sm font-medium">{category}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-12" />

        {/* Operational Model */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Operational Model</h2>
          <Card className="border-primary/20">
            <CardContent className="pt-8 space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-3">Individual Access</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Users sign up directly through the platform, complete initial health assessments, upload genetic data and 
                  lab results, connect monitoring devices, and begin receiving personalized insights. Subscription-based access 
                  to services with tiered plans based on category coverage and analysis depth.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Clinical Partnerships</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Healthcare providers integrate BioMath Life into clinical workflows as a decision-support tool. Practitioners 
                  access patient models, review AI-generated insights, and receive recommendations for diagnostic testing, 
                  treatment optimization, and preventive interventions.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Data Privacy & Control</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Users maintain complete ownership of their health data. Granular permission controls allow selective sharing 
                  with healthcare providers, researchers, or family members. All data remains encrypted and user-controlled at all times.
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
                <CardTitle>Health-Conscious Individuals</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  People seeking to optimize longevity, prevent disease, understand genetic predispositions, improve athletic 
                  performance, manage chronic conditions, or simply gain deeper insight into their personal health.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle>Healthcare Practitioners</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Physicians, geneticists, nutritionists, and wellness coaches using biomathematical modeling and AI analysis 
                  to enhance diagnostic accuracy, personalize treatment plans, and provide evidence-based recommendations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle>Research Institutions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Academic and pharmaceutical organizations leveraging anonymized population-level data for drug development, 
                  clinical trial design, biomarker discovery, and personalized medicine research.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle>Wellness Organizations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Corporate wellness programs, longevity clinics, fitness centers, and health optimization practices offering 
                  advanced health assessment and personalized guidance as premium services.
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
                The global precision medicine market is experiencing rapid growth as genomic sequencing costs decline, AI 
                capabilities advance, and consumer interest in personalized health increases. Individuals now have access to 
                unprecedented amounts of personal health data from wearables, at-home diagnostics, and genetic testing services.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                However, most people lack the tools and expertise to interpret this data meaningfully or translate it into 
                actionable health decisions. Healthcare providers are overwhelmed with data volume and complexity while 
                traditional one-size-fits-all treatment approaches prove increasingly inadequate.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                BioMath Life addresses this gap by unifying disparate health data streams, applying advanced mathematical 
                modeling to create personalized biological simulations, and using AI to generate accessible insights and 
                recommendations. The platform transforms raw health data into genuine understanding and practical action.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* What Makes This Unique */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">What Makes BioMath Life Unique</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-primary/20">
              <CardHeader>
                <Zap className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Mathematical Foundation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Unlike simple genetic reporting services, BioMath Life creates dynamic biomathematical models that simulate 
                  biological processes, predict outcomes, and account for complex interactions between genetics, environment, 
                  and behavior over time.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <Lock className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Comprehensive Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  The platform unifies genetic data, lab results, biometric monitoring, lifestyle tracking, and clinical records 
                  into a single coherent system rather than treating them as isolated data points.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <Brain className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Dual AI Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Multiple AI models provide balanced recommendations with expert validation, ensuring insights are both 
                  scientifically rigorous and practically applicable. The system learns and improves continuously.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <Shield className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Privacy-First Architecture</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Built from the ground up with military-grade security, zero-trust architecture, and user-controlled data 
                  access. Health data never leaves the encrypted vault without explicit user permission.
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
                BioMath Life envisions a future where precision medicine becomes the standard of care, accessible to everyone 
                rather than reserved for elite research institutions. Over the next 5-10 years, the platform will expand to 
                include real-time disease prediction, automated preventive interventions, integration with smart home health 
                monitoring systems, and direct connections to pharmacies for personalized medication fulfillment.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The platform will evolve into a comprehensive health operating system that coordinates all aspects of personal 
                wellness - from daily nutrition and exercise to medical treatment and longevity optimization. By building the 
                largest validated database of biomathematical models and health outcomes, BioMath Life will drive breakthrough 
                discoveries in precision medicine, drug development, and preventive care.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Ultimately, the goal is to shift healthcare from reactive sick-care to proactive health optimization, extending 
                healthy lifespan, reducing chronic disease burden, and enabling individuals to make truly informed decisions 
                about their health based on their unique biology rather than population averages.
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
                  Core platform operational with active user base across genomic analysis, biomathematical modeling, and AI 
                  advisory services. Black Box data vault and continuous monitoring integrations functional. Expanding clinical 
                  partnerships and refining AI recommendation engines based on real-world usage data.
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
                  <li>• Launch enhanced AI Advisor with voice interface capabilities</li>
                  <li>• Expand to 50+ clinical partnerships for practitioner-facing tools</li>
                  <li>• Complete regulatory pathway for diagnostic claims in key categories</li>
                  <li>• Release mobile applications for iOS and Android</li>
                  <li>• Integrate additional wearable devices and home diagnostic equipment</li>
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
                  <li>• Deploy predictive disease modeling for major chronic conditions</li>
                  <li>• Launch automated pharmacy integration for personalized supplement fulfillment</li>
                  <li>• Expand international availability with localized health data compliance</li>
                  <li>• Develop enterprise wellness solutions for corporate health programs</li>
                  <li>• Build research data marketplace for anonymized population insights</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Important Notice */}
        <Card className="mb-16 border-primary/20 bg-muted/20">
          <CardContent className="pt-8">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Shield className="w-6 h-6 text-primary" />
              Important Notice
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              BioMath Life is an informational and wellness platform. The system provides educational insights and suggestions 
              based on data analysis but does not diagnose, treat, cure, or prevent any disease. All recommendations are for 
              informational purposes and should be discussed with qualified healthcare professionals. The platform complements 
              but does not replace professional medical advice, diagnosis, or treatment.
            </p>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <Card className="bg-gradient-tech text-primary-foreground border-0 mb-16">
          <CardContent className="py-12 text-center">
            <Heart className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Interested in BioMath Life?</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Learn more about how BioMath Life is transforming precision medicine and personalized health optimization
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link to="/start-investing">
                <Button size="lg" variant="secondary">
                  Request Information
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <DownloadInvestorBriefButton projectSlug="biomathlife" size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10" />
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

export default BioMathLife;