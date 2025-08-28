import Navigation from '@/components/Navigation';
import InvestmentCard from '@/components/InvestmentCard';
import InvestorForm from '@/components/InvestorForm';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
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
  CheckCircle
} from 'lucide-react';

const Index = () => {
  const investmentOpportunities = [
    {
      title: "NeuroLink AI Platform",
      description: "Революционная платформа для анализа нейронных сетей в медицине",
      category: "AI" as const,
      minInvestment: "$25,000",
      expectedReturn: "35-45%",
      riskLevel: "Средний" as const,
      investors: 127,
      progress: 73,
      target: "$2.5M"
    },
    {
      title: "BioGenetics Research",
      description: "Разработка персонализированной генной терапии",
      category: "BioTech" as const,
      minInvestment: "$50,000",
      expectedReturn: "50-70%",
      riskLevel: "Высокий" as const,
      investors: 89,
      progress: 45,
      target: "$5M"
    },
    {
      title: "Quantum ML Algorithms",
      description: "Квантовые алгоритмы машинного обучения следующего поколения",
      category: "ML" as const,
      minInvestment: "$15,000",
      expectedReturn: "25-35%",
      riskLevel: "Средний" as const,
      investors: 234,
      progress: 88,
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
            <span className="gradient-text">будущее технологий</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Получите доступ к эксклюзивным инвестиционным возможностям в сфере ИИ, 
            биотехнологий и других прорывных технологий
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="tech" size="lg" className="text-lg px-8 py-4">
              Начать инвестировать
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4">
              Изучить проекты
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">$120M+</div>
              <div className="text-muted-foreground">Инвестировано</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">150+</div>
              <div className="text-muted-foreground">Проектов</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-success mb-2">45%</div>
              <div className="text-muted-foreground">Средняя доходность</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">2.5K+</div>
              <div className="text-muted-foreground">Инвесторов</div>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent/20 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
      </section>

      {/* Tech Sectors */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Технологические секторы</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Инвестируйте в самые перспективные направления развития технологий
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {techSectors.map((sector, index) => (
              <Card key={sector.name} className="p-6 text-center hover:card-hover transition-all duration-300 group">
                <sector.icon className="w-12 h-12 mx-auto mb-4 text-primary group-hover:text-primary-glow transition-colors" />
                <h3 className="font-semibold mb-2">{sector.name}</h3>
                <p className="text-muted-foreground text-sm mb-2">{sector.projects} проектов</p>
                <Button variant="ghost" size="sm">Подробнее</Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Opportunities */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Текущие возможности</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Эксклюзивные инвестиционные проекты с высоким потенциалом роста
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {investmentOpportunities.map((opportunity, index) => (
              <InvestmentCard key={index} {...opportunity} />
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              Посмотреть все проекты
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Почему Digital Invest</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Мы предоставляем все необходимые инструменты для успешного инвестирования в технологии
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 text-center hover:card-hover transition-all duration-300 group">
                <feature.icon className="w-12 h-12 mx-auto mb-4 text-primary group-hover:text-primary-glow transition-colors" />
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Investor Form */}
      <section id="invest" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Станьте инвестором</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Заполните анкету и получите персональные рекомендации по инвестициям
            </p>
          </div>
          
          <InvestorForm />
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
              <p className="text-muted-foreground">
                Платформа для инвестиций в технологии будущего
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Инвестиции</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">AI проекты</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Биотехнологии</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">ML алгоритмы</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Блокчейн</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#about" className="hover:text-foreground transition-colors">О нас</a></li>
                <li><a href="#team" className="hover:text-foreground transition-colors">Команда</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Карьера</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Пресса</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#contacts" className="hover:text-foreground transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Документы</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Безопасность</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border/20 mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Digital Invest. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;