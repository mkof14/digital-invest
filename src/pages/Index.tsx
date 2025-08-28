import Navigation from '@/components/Navigation';
import InvestmentCard from '@/components/InvestmentCard';
import InvestorForm from '@/components/InvestorForm';
import BioMathPlatform from '@/components/BioMathPlatform';
import CompanyInfo from '@/components/CompanyInfo';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import heroImage from '@/assets/hero-tech-investment.jpg';
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
  Award
} from 'lucide-react';

const Index = () => {
  const investmentOpportunities = [
    {
      title: "BioMath Life Platform",
      description: "Революционная платформа прецизионной медицины с биоматематическим моделированием",
      category: "BioTech" as const,
      minInvestment: "$100,000",
      expectedReturn: "60-80%",
      riskLevel: "Средний" as const,
      investors: 89,
      progress: 73,
      target: "$5M"
    },
    {
      title: "NeuroLink AI Platform",
      description: "Революционная платформа для анализа нейронных сетей в медицине",
      category: "AI" as const,
      minInvestment: "$25,000",
      expectedReturn: "35-45%",
      riskLevel: "Средний" as const,
      investors: 127,
      progress: 88,
      target: "$2.5M"
    },
    {
      title: "Quantum ML Algorithms",
      description: "Квантовые алгоритмы машинного обучения следующего поколения",
      category: "ML" as const,
      minInvestment: "$15,000",
      expectedReturn: "25-35%",
      riskLevel: "Средний" as const,
      investors: 234,
      progress: 65,
      target: "$1.8M"
    }
  ];

  const features = [
    {
      icon: Shield,
      title: "Безопасность инвестиций",
      description: "Многоуровневая система защиты и проверки проектов"
    },
    {
      icon: BarChart3,
      title: "Детальная аналитика",
      description: "Глубокий анализ рисков и потенциала каждого проекта"
    },
    {
      icon: Users,
      title: "Экспертное сообщество",
      description: "Доступ к сети профессиональных инвесторов и экспертов"
    },
    {
      icon: TrendingUp,
      title: "Высокая доходность",
      description: "Средняя доходность портфеля составляет 40-60% годовых"
    }
  ];

  const techSectors = [
    { icon: Brain, name: "Искусственный интеллект", projects: 47 },
    { icon: Dna, name: "Биотехнологии", projects: 23 },
    { icon: Cpu, name: "Машинное обучение", projects: 34 },
    { icon: Microscope, name: "Медицинские технологии", projects: 19 }
  ];

  const companyStats = [
    { label: "Инвестировано", value: "$120M+", icon: Target },
    { label: "Проектов", value: "150+", icon: Building2 },
    { label: "Средняя доходность", value: "45%", icon: TrendingUp },
    { label: "Лет опыта", value: "30+", icon: Award }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Technology Investment Background" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-hero"></div>
        </div>
        
        {/* Neural Pattern Overlay */}
        <div className="absolute inset-0 neural-pattern opacity-10 z-10"></div>
        
        {/* Content */}
        <div className="relative z-20 container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
            Следующее поколение инвестиций
          </Badge>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Инвестируйте в
            <br />
            <span className="gradient-text">будущее медицины</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Digital Invest Inc. — революционная биоматематическая платформа для прецизионной медицины. 
            Инвестируйте в BioMath Life Platform и другие прорывные технологии.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="tech" size="lg" className="text-lg px-8 py-4">
              Начать инвестировать
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4">
              Изучить BioMath Platform
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {companyStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-2">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent/20 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
      </section>

      {/* Main Content Tabs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="biomath" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 max-w-2xl mx-auto mb-12">
              <TabsTrigger value="biomath" className="text-sm">BioMath Platform</TabsTrigger>
              <TabsTrigger value="projects" className="text-sm">Проекты</TabsTrigger>
              <TabsTrigger value="company" className="text-sm">О компании</TabsTrigger>
              <TabsTrigger value="invest" className="text-sm">Инвестировать</TabsTrigger>
            </TabsList>
            
            <TabsContent value="biomath" className="mt-8">
              <BioMathPlatform />
            </TabsContent>
            
            <TabsContent value="projects" className="mt-8">

              <div className="space-y-16">
                {/* Investment Opportunities Header */}
                <div className="text-center">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Текущие возможности</h2>
                  <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    Эксклюзивные инвестиционные проекты с высоким потенциалом роста от Digital Invest Inc.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {investmentOpportunities.map((opportunity, index) => (
                    <InvestmentCard key={index} {...opportunity} />
                  ))}
                </div>
                
                <div className="text-center">
                  <Button variant="outline" size="lg">
                    Посмотреть все проекты
                  </Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="company" className="mt-8">
              <CompanyInfo />
            </TabsContent>
            
            <TabsContent value="invest" className="mt-8">
              <div className="space-y-16">
                <div className="text-center">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Станьте инвестором</h2>
                  <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    Заполните анкету и получите персональные рекомендации по инвестициям в проекты Digital Invest Inc.
                  </p>
                </div>
                <InvestorForm />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card/50 py-12 border-t border-border/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-tech flex items-center justify-center">
                  <span className="text-lg font-bold text-primary-foreground">DI</span>
                </div>
                <span className="text-xl font-bold">Digital Invest</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Революционная биоматематическая платформа для прецизионной медицины и инвестиций в технологии будущего
              </p>
              <div className="text-sm text-muted-foreground">
                <p>301 S McDowell Street, Suite 125-1609</p>
                <p>Charlotte, NC 28204</p>
                <p className="mt-2">
                  <a href="mailto:info@digitalinvest.com" className="hover:text-foreground transition-colors">
                    info@digitalinvest.com
                  </a>
                </p>
                <p>
                  <a href="tel:19802108177" className="hover:text-foreground transition-colors">
                    (980) 210-8177
                  </a>
                </p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">BioMath Platform</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Секвенирование ДНК</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Биоматематическое моделирование</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Прецизионная диагностика</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Персонализированные лекарства</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Инвестиции</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">AI проекты</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Биотехнологии</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">ML алгоритмы</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Медицинские технологии</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#company" className="hover:text-foreground transition-colors">О Digital Invest Inc.</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Команда</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Карьера</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Документы</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              &copy; 2024 Digital Invest Inc. Все права защищены.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="https://www.linkedin.com/company/digital-invest-inc/" className="text-muted-foreground hover:text-foreground transition-colors">
                LinkedIn
              </a>
              <a href="https://www.facebook.com/digitalinvestcompany" className="text-muted-foreground hover:text-foreground transition-colors">
                Facebook
              </a>
              <a href="https://www.youtube.com/@BiomathLife" className="text-muted-foreground hover:text-foreground transition-colors">
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