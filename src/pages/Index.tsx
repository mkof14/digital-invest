import Navigation from '@/components/Navigation';
import InvestorForm from '@/components/InvestorForm';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  TrendingUp, 
  Shield, 
  Users, 
  BarChart3, 
  Brain, 
  Dna, 
  Cpu, 
  Microscope,
  ArrowRight,
  CheckCircle,
  Building2,
  Target,
  Award,
  Activity,
  HeartPulse,
  Pill,
  Cloud,
  Database,
  Monitor,
  Globe,
  Mail,
  Phone,
  MapPin,
  Calendar
} from 'lucide-react';

const Index = () => {
  // Real data from Digital Invest Inc websites
  const platformServices = [
    {
      number: "#1",
      title: "Секвенирование и анализ ДНК",
      description: "Создание индивидуального генетического профиля для каждого пациента",
      details: "DNA sequencing is the process of identifying the order of nucleotide bases in a strand of DNA. We leverage this sequence for comprehensive analysis of patient genetic traits, primarily to assess susceptibility to various diseases, metabolization of different substances, and reaction to established medications.",
      icon: Dna
    },
    {
      number: "#2",
      title: "Биоматематическая модель тела",
      description: "Создание индивидуальной биоматематической модели человеческого тела",
      details: "We view the human body as an intricately complex and finely-tuned system. To dissect and simulate the processes operating within this system, we develop a biomathematical model of the human body, refined with insights from the patient's genetic profile.",
      icon: Brain
    },
    {
      number: "#3",
      title: "Быстрая диагностика",
      description: "Диагностика на основе генетических предрасположенностей и медицинской истории",
      details: "AI conducts a comprehensive analysis of extensive medical information to pinpoint underlying causes of vital sign deviations and provide initial diagnosis. Think of it as consultation with a vast panel of doctors.",
      icon: Activity
    },
    {
      number: "#4",
      title: "Моделирование развития болезни",
      description: "Прогнозирование течения заболевания и рекомендации по лечению",
      details: "The patient's biomathematical model is employed to simulate ailments and their impact on individual organs and the overall body, enabling precise identification of root causes.",
      icon: HeartPulse
    },
    {
      number: "#5",
      title: "Персонализированные лекарства",
      description: "Подбор и/или производство лекарств с максимальной эффективностью",
      details: "Precision Medicine, founded on individual genetic data, enables maximum medication effectiveness while avoiding adverse impacts. We pinpoint precisely these medications or formulate distinct combinations tailored to specific patients.",
      icon: Pill
    }
  ];

  const keyResources = [
    {
      title: "Лаборатория секвенирования",
      description: "Cutting-edge robotic biomolecular laboratory for DNA sequencing with maximum process efficiency",
      icon: Microscope
    },
    {
      title: "BioMath Cloud",
      description: "Cloud Processing component hosting all patient data, medical knowledge bases, and AI algorithms",
      icon: Cloud
    },
    {
      title: "Искусственный интеллект",
      description: "Specialized AI version tailored exclusively for medical information processing",
      icon: Brain
    },
    {
      title: "Система мониторинга",
      description: "Continuous vital signs monitoring system tracking changes 24/7",
      icon: Monitor
    },
    {
      title: "Фармацевтическое оборудование",
      description: "Fully automated pharmaceutical equipment for personalized medication production",
      icon: Pill
    },
    {
      title: "Информационный хаб",
      description: "Facilitates communication with patients, medical institutions, and partners",
      icon: Database
    }
  ];

  const companyGoals = [
    {
      title: "Precision Diagnosis",
      description: "\"Medical Council of Physicians 24/7\" powered by specialized AI as significant aid to attending physicians",
      icon: Shield
    },
    {
      title: "Quick Access",
      description: "Reducing healthcare system burden and patient waiting times by increasing efficiency in diagnosis and treatment decisions",
      icon: Activity
    },
    {
      title: "Improving Life",
      description: "Improving quality of life and active longevity through vital signs monitoring and personalized pharmacology",
      icon: HeartPulse
    }
  ];

  const teamMembers = [
    {
      name: "Michael Kofman",
      role: "CEO/President",
      description: "Renowned technological visionary with expertise in executive acumen, strategic analysis, and information security. Founded several successful companies in US and Europe.",
      achievements: "Founded 9 Net Avenue (acquired by Concentric Networks), DataPeer Inc., and Xibi Group Inc. Recognized as Entrepreneur of the Year 1999."
    },
    {
      name: "Alex Tur",
      role: "CTO",
      description: "Accomplished manager with extensive engineering background. Over 20 years of hands-on experience in multidisciplinary software and hardware development.",
      achievements: "Led development teams across multiple countries. Developed innovative Cloud B2B/B2C Platform for Big Data processing."
    },
    {
      name: "Karina Gorfin",
      role: "CLO",
      description: "Executive leader and advisor to international corporations for over 25 years. Expertise in corporate law, strategic business relations, and technology law.",
      achievements: "Led successful merger and acquisition processes. Founded legal practice in 2003 representing high net worth individuals and corporations."
    }
  ];

  const companyStats = [
    { label: "Years of Experience", value: "30+", icon: Calendar },
    { label: "Countries Served", value: "10+", icon: Globe },
    { label: "Successful Projects", value: "150+", icon: Target },
    { label: "Team Members", value: "50+", icon: Users }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with Corporate Pattern */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-hero"></div>
        </div>
        
        {/* Corporate Pattern Overlay */}
        <div className="absolute inset-0 corporate-pattern opacity-40 z-10"></div>
        
        {/* Content */}
        <div className="relative z-20 container mx-auto px-4 text-center animate-fade-in">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 animate-scale-in" style={{ animationDelay: '0.2s' }}>
            Digital Invest Inc. • Since 2010
          </Badge>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-scale-in" style={{ animationDelay: '0.4s' }}>
            BioMath Life Platform
            <br />
            <span className="gradient-text">Advanced Precision Medicine</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.6s' }}>
            Using mathematical models of the human body with AI support to diagnose and predict disease development, 
            recommending optimal treatment methods through biomathematical modeling.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-scale-in" style={{ animationDelay: '0.8s' }}>
            <Button size="lg" className="text-lg px-8 py-4 professional-glow">
              Explore Investment Opportunities
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4">
              Learn More About BML Platform
            </Button>
          </div>
          
          {/* Company Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '1s' }}>
            {companyStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-2">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-subtle-float"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-xl animate-subtle-float" style={{ animationDelay: '2s' }}></div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="platform" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 max-w-3xl mx-auto mb-12">
              <TabsTrigger value="platform">BioMath Platform</TabsTrigger>
              <TabsTrigger value="company">About Company</TabsTrigger>
              <TabsTrigger value="team">Leadership Team</TabsTrigger>
              <TabsTrigger value="invest">Investment</TabsTrigger>
            </TabsList>
            
            {/* BioMath Platform Tab */}
            <TabsContent value="platform" className="mt-8">
              <div className="space-y-20">
                {/* Our Goals */}
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Goals</h2>
            <p className="text-muted-foreground text-lg max-w-4xl mx-auto mb-8">
              If you share our goals and desire to make the world a better place, welcome aboard. 
              Invest your knowledge, experience, finances in this advanced approach to medicine.
            </p>
                  <Card className="p-8 mb-12 bg-gradient-corporate">
                    <p className="text-muted-foreground leading-relaxed">
                      Building on its achievements in advanced human genome analysis, Digital Invest Inc. continues to evolve towards 
                      reshaping the landscape of traditional medicine. The essence of the BioMath Life Platform is to shift the focus 
                      from statistical methods in disease diagnosis and treatment to mathematical ones. Using digital simulation, this 
                      approach opens broad opportunities in predicting disease progression and potential response to treatment.
                    </p>
                  </Card>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {companyGoals.map((goal, index) => (
                    <Card key={index} className="p-8 text-center card-hover elevated-card">
                      <goal.icon className="w-16 h-16 mx-auto mb-6 text-primary" />
                      <h3 className="text-xl font-semibold mb-4">{goal.title}</h3>
                      <p className="text-muted-foreground">{goal.description}</p>
                    </Card>
                  ))}
                </div>

                {/* How It Works */}
                <div className="py-16">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
                    <p className="text-muted-foreground text-lg max-w-4xl mx-auto">
                      The platform's architecture is structured for various interactions with clients and partners. 
                      Modular production structure allows for comprehensive and specific research requests.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                    <Card className="p-8 elevated-card">
                      <div className="flex items-center mb-6">
                        <div className="w-16 h-16 rounded-full bg-gradient-tech flex items-center justify-center mr-4">
                          <Database className="w-8 h-8 text-primary-foreground" />
                        </div>
                        <h3 className="text-2xl font-semibold">Information Hub</h3>
                      </div>
                      <p className="text-muted-foreground mb-4">
                        Client and partner communication facilitated through external Information Hub. 
                        Tasks include preprocessing and sorting data, ensuring platform security.
                      </p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Data preprocessing and sorting</li>
                        <li>• Client needs adaptation</li>
                        <li>• Information security management</li>
                      </ul>
                    </Card>
                    
                    <Card className="p-8 elevated-card">
                      <div className="flex items-center mb-6">
                        <div className="w-16 h-16 rounded-full bg-gradient-neural flex items-center justify-center mr-4">
                          <Cloud className="w-8 h-8 text-primary-foreground" />
                        </div>
                        <h3 className="text-2xl font-semibold">BioMath Cloud</h3>
                      </div>
                      <p className="text-muted-foreground mb-4">
                        Core platform comprising patient genetic analysis data, personalized biomathematical models, 
                        and medical history processing with AI.
                      </p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Patient genetic analysis data</li>
                        <li>• Biomathematical modeling</li>
                        <li>• AI-powered disease diagnosis</li>
                      </ul>
                    </Card>
                  </div>
                </div>

                {/* Platform Services */}
                <div className="py-16">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Platform Services</h2>
                    <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                      Each service serves as a link in the technological chain, while functioning as a 
                      self-contained entity both technically and financially.
                    </p>
                  </div>
                  
                  <div className="space-y-8">
                    {platformServices.map((service, index) => (
                      <Card key={index} className="p-8 card-hover elevated-card">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                          <div className="lg:col-span-1 flex justify-center lg:justify-start">
                            <Badge className="text-lg px-4 py-2 bg-primary/10 text-primary border-primary/20">
                              {service.number}
                            </Badge>
                          </div>
                          
                          <div className="lg:col-span-2 flex justify-center">
                            <div className="w-20 h-20 rounded-full bg-gradient-bio flex items-center justify-center">
                              <service.icon className="w-10 h-10 text-primary-foreground" />
                            </div>
                          </div>
                          
                          <div className="lg:col-span-9">
                            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                            <p className="text-muted-foreground mb-4">{service.description}</p>
                            <p className="text-sm text-muted-foreground leading-relaxed">{service.details}</p>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Key Resources */}
                <div className="py-16 bg-gradient-corporate rounded-2xl">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Resources</h2>
                    <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                      Our solutions operate on advanced technological equipment with cutting-edge algorithms 
                      and maximum level of information security.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {keyResources.map((resource, index) => (
                      <Card key={index} className="p-6 card-hover elevated-card">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 rounded-lg bg-gradient-tech flex items-center justify-center mr-4">
                            <resource.icon className="w-6 h-6 text-primary-foreground" />
                          </div>
                          <h3 className="text-lg font-semibold">{resource.title}</h3>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">{resource.description}</p>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
            
            {/* Company Info Tab */}
            <TabsContent value="company" className="mt-8">
              <div className="space-y-16">
                <div className="text-center">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">About Digital Invest Inc.</h2>
                  <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                    On the market since 2010 (former GENEX Company), with expertise in biotechnology, 
                    Big Data, Cloud Computing, and AI.
                  </p>
                </div>

                <Card className="p-12 elevated-card">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                      <h3 className="text-2xl font-semibold mb-6">Our Vision & Mission</h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        We are seasoned experts in biotechnology, Big Data, Cloud Computing, and AI. For years, we've 
                        perfected collaboration models with scientists, doctors, and engineers, where each contributes 
                        invaluable expertise toward shared goals.
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        Six years ago, we embarked on creating a biomathematical model tailored to each individual, 
                        rooted in mathematical understanding of human body processes at all levels and their interactions.
                      </p>
                    </div>
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <CheckCircle className="w-6 h-6 text-success mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold mb-2">Advanced DNA Analysis</h4>
                          <p className="text-sm text-muted-foreground">Comprehensive human genome analysis since 2010</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <CheckCircle className="w-6 h-6 text-success mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold mb-2">International Experience</h4>
                          <p className="text-sm text-muted-foreground">Successful projects in US, Europe, and other regions</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <CheckCircle className="w-6 h-6 text-success mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold mb-2">Healthcare Tech Recognition</h4>
                          <p className="text-sm text-muted-foreground">Featured in Healthcare Tech Outlook Magazine</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Company Contact Info */}
                <Card className="p-8 elevated-card">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <MapPin className="w-5 h-5 text-primary" />
                          <div>
                            <p className="font-medium">301 S McDowell Street</p>
                            <p className="text-muted-foreground">Suite 125-1609, Charlotte, NC 28204</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Mail className="w-5 h-5 text-primary" />
                          <a href="mailto:info@digitalinvest.com" className="text-primary hover:underline">
                            info@digitalinvest.com
                          </a>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Phone className="w-5 h-5 text-primary" />
                          <a href="tel:19802108177" className="text-primary hover:underline">
                            (980) 210-8177
                          </a>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-6">Areas of Expertise</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <p className="text-sm font-medium">• Precision Medicine</p>
                          <p className="text-sm font-medium">• Artificial Intelligence</p>
                          <p className="text-sm font-medium">• Applied Mathematics</p>
                          <p className="text-sm font-medium">• Big Data Analytics</p>
                        </div>
                        <div className="space-y-2">
                          <p className="text-sm font-medium">• Digital Health</p>
                          <p className="text-sm font-medium">• Genetics Research</p>
                          <p className="text-sm font-medium">• System Biology</p>
                          <p className="text-sm font-medium">• Cloud Computing</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </TabsContent>
            
            {/* Team Tab */}
            <TabsContent value="team" className="mt-8">
              <div className="space-y-16">
                <div className="text-center">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Leadership Team</h2>
                  <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                    Our team brings decades of experience in business development, commercialization, 
                    and building successful companies in both the USA and Europe.
                  </p>
                </div>

                <div className="space-y-12">
                  {teamMembers.map((member, index) => (
                    <Card key={index} className="p-8 elevated-card">
                      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                        <div className="text-center lg:text-left">
                          <div className="w-32 h-32 rounded-full bg-gradient-tech mx-auto lg:mx-0 mb-4 flex items-center justify-center">
                            <span className="text-3xl font-bold text-primary-foreground">
                              {member.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                          <Badge className="mb-4">{member.role}</Badge>
                        </div>
                        <div className="lg:col-span-3">
                          <p className="text-muted-foreground mb-6 leading-relaxed">{member.description}</p>
                          <div className="bg-gradient-corporate p-6 rounded-lg">
                            <h4 className="font-semibold mb-3 text-primary">Key Achievements</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">{member.achievements}</p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
            
            {/* Investment Tab */}
            <TabsContent value="invest" className="mt-8">
              <div className="space-y-16">
                <div className="text-center">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Investment Opportunities</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Partner with us in advancing healthcare through biomathematical modeling and precision medicine. 
              Complete the investor questionnaire for personalized investment recommendations.
            </p>
                </div>

                {/* Investment Highlights */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                  <Card className="p-8 text-center elevated-card">
                    <TrendingUp className="w-16 h-16 mx-auto mb-4 text-primary" />
                    <h3 className="text-xl font-semibold mb-3">Growth Potential</h3>
                    <p className="text-muted-foreground">Enter the rapidly expanding precision medicine market with proven technology and experienced team</p>
                  </Card>
                  <Card className="p-8 text-center elevated-card">
                    <Shield className="w-16 h-16 mx-auto mb-4 text-primary" />
                    <h3 className="text-xl font-semibold mb-3">Risk Mitigation</h3>
                    <p className="text-muted-foreground">Diversified portfolio approach with multiple revenue streams across the healthcare technology sector</p>
                  </Card>
                  <Card className="p-8 text-center elevated-card">
                    <Award className="w-16 h-16 mx-auto mb-4 text-primary" />
                    <h3 className="text-xl font-semibold mb-3">Proven Track Record</h3>
                    <p className="text-muted-foreground">30+ years of combined experience with successful exits and international market presence</p>
                  </Card>
                </div>

                <InvestorForm />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-corporate py-16 border-t border-border/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-tech flex items-center justify-center">
                  <span className="text-lg font-bold text-primary-foreground">DI</span>
                </div>
                <span className="text-xl font-bold">Digital Invest Inc.</span>
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Advanced healthcare solutions through biomathematical modeling and precision medicine. 
                Developing the future of medical technology since 2010.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-primary">BioMath Platform</h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>DNA Sequencing & Analysis</li>
                <li>Biomathematical Modeling</li>
                <li>AI-Powered Diagnosis</li>
                <li>Personalized Medicine</li>
                <li>Continuous Monitoring</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-primary">Investment</h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>BioTech Opportunities</li>
                <li>AI & Machine Learning</li>
                <li>Healthcare Technology</li>
                <li>Precision Medicine</li>
                <li>Strategic Partnerships</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-primary">Contact</h4>
              <div className="space-y-3 text-muted-foreground text-sm">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Charlotte, NC 28204</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-primary" />
                  <a href="mailto:info@digitalinvest.com" className="hover:text-foreground">
                    info@digitalinvest.com
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-primary" />
                  <a href="tel:19802108177" className="hover:text-foreground">
                    (980) 210-8177
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border/20 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              &copy; 2024 Digital Invest Inc. All rights reserved. Precision medicine through biomathematical modeling.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="https://www.linkedin.com/company/digital-invest-inc/" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                LinkedIn
              </a>
              <a href="https://www.facebook.com/digitalinvestcompany" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Facebook
              </a>
              <a href="https://www.youtube.com/@BiomathLife" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                YouTube
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;