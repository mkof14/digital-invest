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
    fullName: '',
    email: '',
    phone: '',
    country: '',
    investmentExperience: '',
    riskTolerance: '',
    investmentGoals: '',
    preferredSectors: [] as string[],
    investmentAmount: '',
    accreditedInvestor: false,
    agreesToTerms: false,
    receiveUpdates: false,
    additionalInfo: ''
  });

  const sectors = [
    'Artificial Intelligence',
    'Machine Learning', 
    'Biotechnology',
    'Blockchain & Cryptocurrency',
    'Quantum Computing',
    'Green Technology',
    'Medical Technology',
    'FinTech'
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

    try {
      const { supabase } = await import('@/integrations/supabase/client');
      
      // Save to database
      const { error } = await supabase.from('investor_leads').insert({
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone || null,
        country: formData.country || null,
        amount_range: formData.investmentAmount || 'undisclosed',
        comments: `Investment Experience: ${formData.investmentExperience}\nRisk Tolerance: ${formData.riskTolerance}\nPreferred Sectors: ${formData.preferredSectors.join(', ')}\nGoals: ${formData.investmentGoals}\nAdditional: ${formData.additionalInfo}`,
        source: 'investor-handbook',
      });

      if (error) throw error;

      // Send email notifications
      try {
        await supabase.functions.invoke('send-notification', {
          body: {
            type: 'handbook_download',
            data: {
              name: formData.fullName,
              email: formData.email,
            },
            sendToAdmin: true,
            sendToUser: true,
          },
        });
      } catch (emailError) {
        console.error('Error sending notification emails:', emailError);
      }
      
      toast({
        title: "Request Received",
        description: "Your information request has been received. We will review it and follow up privately. This does not constitute any commitment or agreement.",
        duration: 5000,
      });
      
      setStep(4);
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "There was an error submitting your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
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
        <h3 className="text-2xl font-bold mb-2">Request Received</h3>
        <p className="text-muted-foreground mb-6">
          Your information request has been successfully submitted. We will review your profile and follow up privately to discuss potential opportunities. This does not constitute any commitment or agreement.
        </p>
        <Button variant="default" onClick={() => setStep(1)} className="hover:scale-105 transition-transform">
          Submit Another Request
        </Button>
      </Card>
    );
  }

  return (
    <Card className="max-w-2xl mx-auto p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Information Request Form</h2>
        <p className="text-muted-foreground mb-4">
          Request information about Digital Invest Inc. projects and portfolio
        </p>
        <div className="text-xs text-muted-foreground px-4 py-3 bg-muted/30 rounded-lg border border-border/50">
          <strong>Important:</strong> This form is for informational purposes only and does not constitute an offer, commitment, or agreement. Any potential participation is handled privately and offline through proper legal channels.
        </div>
        
        {/* Progress Bar */}
        <div className="mt-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-muted-foreground">Step {step} of 3</span>
            <span className="text-sm font-medium">{Math.round((step / 3) * 100)}%</span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div 
              className="bg-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${(step / 3) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Step 1: Personal Information */}
        {step === 1 && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="fullName">Full Name</Label>
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
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  required
                />
              </div>
              <div>
                <Label htmlFor="country">Country</Label>
                <Select onValueChange={(value) => setFormData({...formData, country: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="usa">United States</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                    <SelectItem value="canada">Canada</SelectItem>
                    <SelectItem value="germany">Germany</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex justify-end">
              <Button type="button" variant="default" onClick={nextStep} className="hover:scale-105 transition-transform">
                Next
              </Button>
            </div>
          </div>
        )}

        {/* Step 2: Investment Profile */}
        {step === 2 && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Investment Profile</h3>
            
            <div>
              <Label>Investment Experience</Label>
              <Select onValueChange={(value) => setFormData({...formData, investmentExperience: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Select experience level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="beginner">Beginner (less than 1 year)</SelectItem>
                  <SelectItem value="intermediate">Intermediate (1-5 years)</SelectItem>
                  <SelectItem value="advanced">Advanced (5+ years)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Risk Tolerance</Label>
              <Select onValueChange={(value) => setFormData({...formData, riskTolerance: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Select risk level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="conservative">Conservative</SelectItem>
                  <SelectItem value="moderate">Moderate</SelectItem>
                  <SelectItem value="aggressive">Aggressive</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Approximate Level of Interest (Optional, Non-Binding)</Label>
              <Select onValueChange={(value) => setFormData({...formData, investmentAmount: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Select indicative interest level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="10-50k">$10,000 - $50,000</SelectItem>
                  <SelectItem value="50-100k">$50,000 - $100,000</SelectItem>
                  <SelectItem value="100-500k">$100,000 - $500,000</SelectItem>
                  <SelectItem value="500k+">$500,000+</SelectItem>
                  <SelectItem value="undisclosed">Prefer not to say</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-xs text-muted-foreground mt-1">This information is indicative only and does not create any commitment</p>
            </div>

            <div>
              <Label>Preferred Sectors (select multiple)</Label>
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
              <Button type="button" variant="outline" onClick={prevStep} className="hover:scale-105 transition-transform">
                Back
              </Button>
              <Button type="button" variant="default" onClick={nextStep} className="hover:scale-105 transition-transform">
                Next
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: Additional Information */}
        {step === 3 && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Additional Information</h3>
            
            <div>
              <Label htmlFor="goals">Areas of Interest</Label>
              <Textarea
                id="goals"
                placeholder="Describe what interests you about Digital Invest projects..."
                value={formData.investmentGoals}
                onChange={(e) => setFormData({...formData, investmentGoals: e.target.value})}
              />
            </div>

            <div>
              <Label htmlFor="additional">Additional Information</Label>
              <Textarea
                id="additional"
                placeholder="Any additional information about your preferences..."
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
                <Label htmlFor="accredited">I am an accredited investor</Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="updates"
                  checked={formData.receiveUpdates}
                  onCheckedChange={(checked) => setFormData({...formData, receiveUpdates: checked as boolean})}
                />
                <Label htmlFor="updates">Receive updates about new opportunities</Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="terms"
                  checked={formData.agreesToTerms}
                  onCheckedChange={(checked) => setFormData({...formData, agreesToTerms: checked as boolean})}
                  required
                />
                <Label htmlFor="terms" className="text-sm">I understand this is a non-binding information request and does not constitute an offer, commitment, or agreement. *</Label>
              </div>
            </div>

            <div className="flex justify-between">
              <Button type="button" variant="outline" onClick={prevStep} className="hover:scale-105 transition-transform">
                Back
              </Button>
              <Button 
                type="submit" 
                variant="default" 
                disabled={!formData.agreesToTerms || isLoading}
                className="hover:scale-105 transition-transform"
              >
                {isLoading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
                Submit Information Request
              </Button>
            </div>
          </div>
        )}
      </form>
    </Card>
  );
};

export default InvestorForm;