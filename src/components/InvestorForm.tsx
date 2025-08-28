import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Loader2, CheckCircle } from 'lucide-react';

const InvestorForm = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(1);
  
  const [formData, setFormData] = useState({
    // Личная информация
    fullName: '',
    email: '',
    phone: '',
    country: '',
    
    // Инвестиционный профиль
    investmentExperience: '',
    riskTolerance: '',
    investmentGoals: '',
    preferredSectors: [] as string[],
    investmentAmount: '',
    
    // Дополнительно
    accreditedInvestor: false,
    agreesToTerms: false,
    receiveUpdates: false,
    additionalInfo: ''
  });

  const sectors = [
    'Искусственный интеллект',
    'Машинное обучение', 
    'Биотехнологии',
    'Блокчейн и криптовалюты',
    'Квантовые вычисления',
    'Зеленые технологии',
    'Медицинские технологии',
    'Финтех'
  ];

  const handleSectorChange = (sector: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      preferredSectors: checked 
        ? [...prev.preferredSectors, sector]
        : prev.preferredSectors.filter(s => s !== sector)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Имитация отправки данных
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Анкета отправлена!",
      description: "Наш менеджер свяжется с вами в течение 24 часов.",
      duration: 5000,
    });
    
    setIsLoading(false);
    setStep(4); // Показать страницу успеха
  };

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  if (step === 4) {
    return (
      <Card className="max-w-md mx-auto p-8 text-center">
        <CheckCircle className="w-16 h-16 text-success mx-auto mb-4" />
        <h3 className="text-2xl font-bold mb-2">Спасибо за интерес!</h3>
        <p className="text-muted-foreground mb-6">
          Ваша анкета успешно отправлена. Мы проанализируем ваш профиль и предложим 
          подходящие инвестиционные возможности.
        </p>
        <Button variant="tech" onClick={() => setStep(1)}>
          Заполнить еще одну анкету
        </Button>
      </Card>
    );
  }

  return (
    <Card className="max-w-2xl mx-auto p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Анкета инвестора</h2>
        <p className="text-muted-foreground">
          Заполните анкету, чтобы получить персональные рекомендации по инвестициям
        </p>
        
        {/* Progress Bar */}
        <div className="mt-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-muted-foreground">Шаг {step} из 3</span>
            <span className="text-sm font-medium">{Math.round((step / 3) * 100)}%</span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div 
              className="bg-gradient-tech h-2 rounded-full transition-all duration-300"
              style={{ width: `${(step / 3) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Шаг 1: Личная информация */}
        {step === 1 && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Личная информация</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="fullName">Полное имя</Label>
                <Input
                  id="fullName"
                  value={formData.fullName}
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  required
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>
              <div>
                <Label htmlFor="phone">Телефон</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  required
                />
              </div>
              <div>
                <Label htmlFor="country">Страна</Label>
                <Select onValueChange={(value) => setFormData({...formData, country: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите страну" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="russia">Россия</SelectItem>
                    <SelectItem value="belarus">Беларусь</SelectItem>
                    <SelectItem value="ukraine">Украина</SelectItem>
                    <SelectItem value="kazakhstan">Казахстан</SelectItem>
                    <SelectItem value="other">Другая</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex justify-end">
              <Button type="button" variant="tech" onClick={nextStep}>
                Далее
              </Button>
            </div>
          </div>
        )}

        {/* Шаг 2: Инвестиционный профиль */}
        {step === 2 && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Инвестиционный профиль</h3>
            
            <div>
              <Label>Опыт инвестирования</Label>
              <Select onValueChange={(value) => setFormData({...formData, investmentExperience: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Выберите уровень опыта" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="beginner">Начинающий (менее 1 года)</SelectItem>
                  <SelectItem value="intermediate">Средний (1-5 лет)</SelectItem>
                  <SelectItem value="advanced">Опытный (более 5 лет)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Толерантность к риску</Label>
              <Select onValueChange={(value) => setFormData({...formData, riskTolerance: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Выберите уровень риска" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="conservative">Консервативный</SelectItem>
                  <SelectItem value="moderate">Умеренный</SelectItem>
                  <SelectItem value="aggressive">Агрессивный</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Планируемая сумма инвестиций</Label>
              <Select onValueChange={(value) => setFormData({...formData, investmentAmount: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Выберите сумму" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="10-50k">$10,000 - $50,000</SelectItem>
                  <SelectItem value="50-100k">$50,000 - $100,000</SelectItem>
                  <SelectItem value="100-500k">$100,000 - $500,000</SelectItem>
                  <SelectItem value="500k+">$500,000+</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Предпочитаемые секторы (выберите несколько)</Label>
              <div className="grid grid-cols-2 gap-2 mt-2">
                {sectors.map((sector) => (
                  <div key={sector} className="flex items-center space-x-2">
                    <Checkbox
                      id={sector}
                      checked={formData.preferredSectors.includes(sector)}
                      onCheckedChange={(checked) => handleSectorChange(sector, checked as boolean)}
                    />
                    <Label htmlFor={sector} className="text-sm">{sector}</Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-between">
              <Button type="button" variant="outline" onClick={prevStep}>
                Назад
              </Button>
              <Button type="button" variant="tech" onClick={nextStep}>
                Далее
              </Button>
            </div>
          </div>
        )}

        {/* Шаг 3: Дополнительная информация */}
        {step === 3 && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Дополнительная информация</h3>
            
            <div>
              <Label htmlFor="goals">Инвестиционные цели</Label>
              <Textarea
                id="goals"
                placeholder="Опишите ваши инвестиционные цели..."
                value={formData.investmentGoals}
                onChange={(e) => setFormData({...formData, investmentGoals: e.target.value})}
              />
            </div>

            <div>
              <Label htmlFor="additional">Дополнительная информация</Label>
              <Textarea
                id="additional"
                placeholder="Любая дополнительная информация о ваших предпочтениях..."
                value={formData.additionalInfo}
                onChange={(e) => setFormData({...formData, additionalInfo: e.target.value})}
              />
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="accredited"
                  checked={formData.accreditedInvestor}
                  onCheckedChange={(checked) => setFormData({...formData, accreditedInvestor: checked as boolean})}
                />
                <Label htmlFor="accredited">Я являюсь аккредитованным инвестором</Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="updates"
                  checked={formData.receiveUpdates}
                  onCheckedChange={(checked) => setFormData({...formData, receiveUpdates: checked as boolean})}
                />
                <Label htmlFor="updates">Получать обновления о новых возможностях</Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="terms"
                  checked={formData.agreesToTerms}
                  onCheckedChange={(checked) => setFormData({...formData, agreesToTerms: checked as boolean})}
                  required
                />
                <Label htmlFor="terms">Соглашаюсь с условиями и политикой конфиденциальности</Label>
              </div>
            </div>

            <div className="flex justify-between">
              <Button type="button" variant="outline" onClick={prevStep}>
                Назад
              </Button>
              <Button 
                type="submit" 
                variant="tech" 
                disabled={!formData.agreesToTerms || isLoading}
              >
                {isLoading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
                Отправить анкету
              </Button>
            </div>
          </div>
        )}
      </form>
    </Card>
  );
};

export default InvestorForm;