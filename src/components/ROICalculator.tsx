import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Calculator, TrendingUp, DollarSign, Clock } from "lucide-react";

const ROICalculator = () => {
  const [investment, setInvestment] = useState<string>("");
  const [term, setTerm] = useState<string>("3");
  const [tier, setTier] = useState<string>("growth");
  
  const calculateROI = () => {
    const amount = parseFloat(investment);
    const years = parseFloat(term);
    
    if (!amount || amount < 50000) return null;
    
    const rates = {
      strategic: 0.20, // 20% annual return
      growth: 0.275,   // 27.5% annual return  
      institutional: 0.35 // 35% annual return
    };
    
    const rate = rates[tier as keyof typeof rates];
    const futureValue = amount * Math.pow(1 + rate, years);
    const totalReturn = futureValue - amount;
    const totalROI = (totalReturn / amount) * 100;
    
    return {
      futureValue,
      totalReturn,
      totalROI,
      annualReturn: rate * 100
    };
  };
  
  const results = calculateROI();
  
  return (
    <Card className="border-0 shadow-elevated bg-gradient-premium/10">
      <CardHeader>
        <div className="flex items-center space-x-3">
          <Calculator className="h-8 w-8 text-primary" />
          <CardTitle className="text-2xl">Investment ROI Calculator</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <Label htmlFor="investment">Investment Amount ($)</Label>
            <Input
              id="investment"
              type="number"
              placeholder="50,000"
              min="50000"
              value={investment}
              onChange={(e) => setInvestment(e.target.value)}
              className="text-lg"
            />
            <p className="text-xs text-muted-foreground">Minimum: $50,000</p>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="term">Investment Term</Label>
            <Select value={term} onValueChange={setTerm}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 Year</SelectItem>
                <SelectItem value="2">2 Years</SelectItem>
                <SelectItem value="3">3 Years</SelectItem>
                <SelectItem value="4">4 Years</SelectItem>
                <SelectItem value="5">5 Years</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="tier">Investment Tier</Label>
            <Select value={tier} onValueChange={setTier}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="strategic">Strategic Partner (20%)</SelectItem>
                <SelectItem value="growth">Growth Investor (27.5%)</SelectItem>
                <SelectItem value="institutional">Institutional (35%)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        {results && (
          <div className="mt-8 p-6 bg-gradient-sophisticated/20 rounded-lg border border-primary/20">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <TrendingUp className="mr-2 h-5 w-5 text-success" />
              Projected Returns
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-card rounded-lg">
                <DollarSign className="h-6 w-6 text-primary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Initial Investment</p>
                <p className="text-xl font-bold text-foreground">
                  ${parseFloat(investment).toLocaleString()}
                </p>
              </div>
              
              <div className="text-center p-4 bg-card rounded-lg">
                <Clock className="h-6 w-6 text-accent mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Annual Return Rate</p>
                <p className="text-xl font-bold text-accent">
                  {results.annualReturn.toFixed(1)}%
                </p>
              </div>
              
              <div className="text-center p-4 bg-card rounded-lg">
                <TrendingUp className="h-6 w-6 text-success mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Total Return</p>
                <p className="text-xl font-bold text-success">
                  ${results.totalReturn.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                </p>
              </div>
              
              <div className="text-center p-4 bg-card rounded-lg">
                <DollarSign className="h-6 w-6 text-warning mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Future Value</p>
                <p className="text-xl font-bold text-warning">
                  ${results.futureValue.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                </p>
              </div>
            </div>
            
            <div className="mt-4">
              <div className="flex justify-between text-sm mb-2">
                <span>ROI Progress</span>
                <span className="font-semibold">{results.totalROI.toFixed(0)}%</span>
              </div>
              <Progress value={Math.min(results.totalROI, 200)} className="h-3" />
              <p className="text-xs text-muted-foreground mt-1">
                Based on projected {results.annualReturn}% annual returns over {term} years
              </p>
            </div>
          </div>
        )}
        
        {!results && investment && parseFloat(investment) < 50000 && (
          <div className="p-4 bg-warning/20 border border-warning/30 rounded-lg">
            <p className="text-sm text-warning-foreground">
              Minimum investment amount is $50,000 for Strategic Partner tier.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ROICalculator;