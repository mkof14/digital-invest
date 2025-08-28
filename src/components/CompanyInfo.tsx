import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  MapPin, 
  Phone, 
  Mail,
  Linkedin,
  Facebook,
  Youtube,
  Building2,
  Users,
  Target,
  TrendingUp,
  Globe,
  Award
} from 'lucide-react';

const CompanyInfo = () => {
  const stats = [
    { label: "Года опыта", value: "30+", icon: Award },
    { label: "Успешных проектов", value: "150+", icon: Target },
    { label: "Команда экспертов", value: "25+", icon: Users },
    { label: "Средняя доходность", value: "45%", icon: TrendingUp }
  ];

  const domains = [
    "Precision Medicine",
    "Artificial Intelligence", 
    "Applied Mathematics",
    "Cybernetics",
    "Big Data",
    "Predictive Analytics",
    "Digital Health",
    "Healthcare",
    "Genetics",
    "System Biology",
    "Life Science",
    "Biotechnology Research"
  ];

  return (
    <div className="space-y-16">
      {/* Company Overview */}
      <section className="text-center py-16">
        <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
          Digital Invest Inc.
        </Badge>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Технологический <span className="gradient-text">провидец</span>
          <br />и стратегический <span className="gradient-text">консультант</span>
        </h1>
        
        <p className="text-xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
          Более 30 лет опыта в руководстве, основании и консультировании компаний в США и Европе. 
          Глубокие знания в области IT, визионерский подход и сильное лидерство.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 text-center hover:card-hover transition-all duration-300 group">
              <stat.icon className="w-8 h-8 mx-auto mb-2 text-primary group-hover:text-primary-glow transition-colors" />
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>
      </section>

      {/* About Digital Invest */}
      <section className="py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              О компании Digital Invest Inc.
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Digital Invest Inc. — биотехнологическая исследовательская компания, специализирующаяся 
                на генетических исследованиях, биоматематике, прецизионной медицине и цифровом здравоохранении.
              </p>
              <p>
                Наша команда успешно строила и масштабировала бизнесы в области телекоммуникаций, 
                больших данных и цифровых технологий. Мы сочетаем глубокие технические знания с 
                инновационным подходом к решению сложнейших медицинских и биологических задач.
              </p>
              <p>
                Компания продолжает развиваться в направлении изменения ландшафта традиционной медицины, 
                создавая революционные решения для диагностики, лечения и профилактики заболеваний.
              </p>
            </div>
            <div className="mt-6">
              <Button variant="tech" size="lg">
                Узнать больше о компании
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <Card className="p-8 bg-gradient-hero">
              <Building2 className="w-20 h-20 mx-auto mb-6 text-primary" />
              <h3 className="text-xl font-semibold text-center mb-4">Наша миссия</h3>
              <p className="text-center text-muted-foreground">
                Революционизировать здравоохранение через биоматематическое моделирование 
                и персонализированную медицину, делая передовые технологии доступными для каждого.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Expertise Domains */}
      <section className="py-16 bg-card/20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Области экспертизы</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            BioMath Life Platform — кроссдоменный проект, охватывающий множество 
            передовых технологических областей
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {domains.map((domain, index) => (
            <Card key={index} className="p-4 text-center hover:card-hover transition-all duration-300 group">
              <Badge variant="outline" className="w-full text-xs py-2 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                {domain}
              </Badge>
            </Card>
          ))}
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Руководство</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Опытная команда технологических лидеров и медицинских экспертов
          </p>
        </div>
        
        <Card className="p-8 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="text-center lg:text-left">
              <div className="w-32 h-32 rounded-full bg-gradient-tech mx-auto lg:mx-0 mb-4 flex items-center justify-center">
                <Users className="w-16 h-16 text-primary-foreground" />
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-2">Michael Kofman</h3>
              <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">
                CEO & Founder
              </Badge>
              <p className="text-muted-foreground mb-4">
                C-Level руководитель с более чем 30-летним опытом руководства, основания и консультирования 
                компаний в США и Европе. Технологический провидец, стратегический консультант и предприниматель.
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Button>
                <Button variant="outline" size="sm">
                  <Mail className="w-4 h-4 mr-2" />
                  Контакт
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-card/20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Свяжитесь с нами</h2>
          <p className="text-muted-foreground text-lg">
            Мы будем рады пообщаться с вами
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Details */}
          <Card className="p-8">
            <h3 className="text-xl font-semibold mb-6">Контактная информация</h3>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">
                  301 S McDowell Street, Suite 125-1609<br />
                  Charlotte, NC 28204
                </span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:info@digitalinvest.com" className="text-muted-foreground hover:text-foreground transition-colors">
                  info@digitalinvest.com
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <a href="tel:19802108177" className="text-muted-foreground hover:text-foreground transition-colors">
                  (980) 210-8177
                </a>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-semibold mb-4">Социальные сети</h4>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Button>
                <Button variant="outline" size="sm">
                  <Facebook className="w-4 h-4 mr-2" />
                  Facebook
                </Button>
                <Button variant="outline" size="sm">
                  <Youtube className="w-4 h-4 mr-2" />
                  YouTube
                </Button>
              </div>
            </div>
          </Card>
          
          {/* Contact Form */}
          <Card className="p-8">
            <h3 className="text-xl font-semibold mb-6">Напишите нам</h3>
            
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Тема обращения</label>
                <select className="w-full p-3 rounded-md border border-border bg-background">
                  <option>Общий вопрос</option>
                  <option>Запрос документов</option>
                  <option>Обратный звонок</option>
                  <option>Записаться на встречу</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Ваше имя</label>
                <input 
                  type="text" 
                  className="w-full p-3 rounded-md border border-border bg-background"
                  placeholder="Введите ваше имя"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full p-3 rounded-md border border-border bg-background"
                  placeholder="Введите ваш email"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Сообщение</label>
                <textarea 
                  rows={4}
                  className="w-full p-3 rounded-md border border-border bg-background"
                  placeholder="Введите ваше сообщение"
                ></textarea>
              </div>
              
              <Button variant="tech" className="w-full">
                Отправить сообщение
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* Investment Opportunity */}
      <section className="py-16 text-center">
        <Card className="p-12 bg-gradient-hero max-w-4xl mx-auto">
          <Globe className="w-16 h-16 mx-auto mb-6 text-primary" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Инвестиционная возможность
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Digital Invest Inc. предлагает уникальную возможность инвестировать в будущее медицины. 
            BioMath Life Platform представляет собой прорывную технологию с огромным коммерческим потенциалом.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="tech" size="lg" className="text-lg px-8 py-4">
              Узнать об инвестициях
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4">
              Скачать презентацию
            </Button>
          </div>
        </Card>
      </section>
    </div>
  );
};

export default CompanyInfo;