import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon, Copy, Check } from 'lucide-react';
import { format } from 'date-fns';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import InvestorPageDisclaimer from '@/components/InvestorPageDisclaimer';

interface Project {
  slug: string;
  title: string;
}

interface TimeSlot {
  startTime: string;
  endTime: string;
}

const Schedule = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [availableSlots, setAvailableSlots] = useState<TimeSlot[]>([]);
  const [loading, setLoading] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [copied, setCopied] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: '',
    notes: '',
    date: undefined as Date | undefined,
    selectedSlot: ''
  });

  useEffect(() => {
    loadProjects();
  }, []);

  useEffect(() => {
    if (formData.date) {
      loadAvailableSlots(formData.date);
    }
  }, [formData.date]);

  const loadProjects = async () => {
    const { data } = await supabase
      .from('projects')
      .select('slug, title')
      .eq('is_visible', true)
      .order('priority', { ascending: false });
    
    if (data) setProjects(data);
  };

  const loadAvailableSlots = async (date: Date) => {
    const dayOfWeek = date.getDay();
    
    // Get availability windows for this day
    const { data: windows } = await supabase
      .from('availability_windows')
      .select('*')
      .eq('day_of_week', dayOfWeek)
      .eq('is_active', true);

    if (!windows || windows.length === 0) {
      setAvailableSlots([]);
      return;
    }

    // Get existing bookings for this date
    const { data: bookings } = await supabase
      .from('consultation_bookings')
      .select('start_time, end_time')
      .eq('date', format(date, 'yyyy-MM-dd'))
      .neq('status', 'CANCELLED');

    // Generate 30-minute slots
    const slots: TimeSlot[] = [];
    windows.forEach(window => {
      const [startHour, startMin] = window.start_time.split(':').map(Number);
      const [endHour, endMin] = window.end_time.split(':').map(Number);
      
      let current = startHour * 60 + startMin;
      const end = endHour * 60 + endMin;
      
      while (current + 30 <= end) {
        const slotStart = `${String(Math.floor(current / 60)).padStart(2, '0')}:${String(current % 60).padStart(2, '0')}`;
        const slotEnd = `${String(Math.floor((current + 30) / 60)).padStart(2, '0')}:${String((current + 30) % 60).padStart(2, '0')}`;
        
        // Check if slot is not booked
        const isBooked = bookings?.some(b => b.start_time === slotStart);
        
        if (!isBooked) {
          slots.push({ startTime: slotStart, endTime: slotEnd });
        }
        
        current += 30;
      }
    });

    setAvailableSlots(slots);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.date || !formData.selectedSlot) {
      toast.error('Please select a date and time slot');
      return;
    }

    setLoading(true);

    const [startTime, endTime] = formData.selectedSlot.split(' - ');
    
    const { error } = await supabase
      .from('consultation_bookings')
      .insert({
        name: formData.name,
        email: formData.email,
        phone: formData.phone || null,
        project: formData.project,
        notes: formData.notes || null,
        date: format(formData.date, 'yyyy-MM-dd'),
        start_time: startTime,
        end_time: endTime,
        status: 'PENDING'
      });

    setLoading(false);

    if (error) {
      toast.error('Failed to submit booking');
      return;
    }

    setConfirmed(true);
  };

  const copyEmailToClipboard = () => {
    const emailText = `Hi ${formData.name},

Thank you for requesting a consultation with Digital Invest Inc.
We received your preferred time:

Date: ${formData.date ? format(formData.date, 'MMMM dd, yyyy') : ''}
Time: ${formData.selectedSlot}
Project: ${formData.project}

We will review your request and confirm the time shortly.

Best regards,
Digital Invest Inc.
digitalinvest.com`;

    navigator.clipboard.writeText(emailText);
    setCopied(true);
    toast.success('Email copied to clipboard');
    setTimeout(() => setCopied(false), 2000);
  };

  if (confirmed) {
    return (
      <>
        <Navigation />
        <main className="min-h-screen pt-24 pb-16 bg-background">
          <div className="container mx-auto px-4 max-w-2xl">
            <div className="bg-card border border-border rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-3xl font-bold mb-4">Request Received</h1>
              <p className="text-muted-foreground mb-6">
                Thank you, {formData.name}. Your consultation request has been received. This is a non-binding request for information. We will follow up privately to confirm your preferred time.
              </p>
              
              <div className="bg-muted/30 border border-border rounded-lg p-6 mb-6 text-left">
                <h3 className="font-semibold mb-3">Confirmation Email Template</h3>
                <pre className="text-sm whitespace-pre-wrap text-muted-foreground mb-4">
{`Hi ${formData.name},

Thank you for requesting a consultation with Digital Invest Inc.
We received your preferred time:

Date: ${formData.date ? format(formData.date, 'MMMM dd, yyyy') : ''}
Time: ${formData.selectedSlot}
Project: ${formData.project}

We will review your request and confirm the time shortly.

Best regards,
Digital Invest Inc.
digitalinvest.com`}
                </pre>
                <Button onClick={copyEmailToClipboard} variant="outline" className="w-full">
                  {copied ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
                  {copied ? 'Copied!' : 'Copy Email Template'}
                </Button>
              </div>

              <Button asChild>
                <a href="/">Return to Home</a>
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-24 pb-16 bg-background">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Request Consultation</h1>
            <p className="text-xl text-muted-foreground">
              Request a private conversation to discuss Digital Invest Inc. projects.
            </p>
            <p className="text-sm text-muted-foreground mt-4 max-w-2xl mx-auto">
              This is a non-binding request for a consultation. Submitting this form does not constitute any offer, commitment, or approval. Any potential participation, if pursued, is handled offline through proper legal channels separate from this website.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-8 space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone (Optional)</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="project">Project of Interest *</Label>
              <Select required value={formData.project} onValueChange={(value) => setFormData({ ...formData, project: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a project" />
                </SelectTrigger>
                <SelectContent>
                  {projects.map((project) => (
                    <SelectItem key={project.slug} value={project.title}>
                      {project.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">Notes (Optional)</Label>
              <Textarea
                id="notes"
                rows={4}
                placeholder="Tell us what you'd like to discuss..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label>Select Date *</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !formData.date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {formData.date ? format(formData.date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={formData.date}
                    onSelect={(date) => setFormData({ ...formData, date, selectedSlot: '' })}
                    disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                    initialFocus
                    className="pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>

            {formData.date && (
              <div className="space-y-2">
                <Label>Select Time Slot *</Label>
                {availableSlots.length === 0 ? (
                  <p className="text-sm text-muted-foreground">No available slots for this date</p>
                ) : (
                  <Select required value={formData.selectedSlot} onValueChange={(value) => setFormData({ ...formData, selectedSlot: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a time slot" />
                    </SelectTrigger>
                    <SelectContent>
                      {availableSlots.map((slot, idx) => (
                        <SelectItem key={idx} value={`${slot.startTime} - ${slot.endTime}`}>
                          {slot.startTime} - {slot.endTime}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              </div>
            )}

            <Button type="submit" className="w-full" disabled={loading || !formData.selectedSlot}>
              {loading ? 'Submitting...' : 'Submit Consultation Request'}
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              This is a non-binding consultation request. We will follow up to confirm availability.
            </p>
          </form>

          {/* Legal Disclaimer */}
          <div className="mt-12">
            <InvestorPageDisclaimer variant="compact" />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Schedule;