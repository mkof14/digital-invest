import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Loader2, Send, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { supabase } from '@/integrations/supabase/client';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Invalid email address').max(255),
  subject: z.string().min(5, 'Subject must be at least 5 characters').max(200),
  message: z.string().min(10, 'Message must be at least 10 characters').max(1000),
});

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase.from('investor_leads').insert({
        project_id: null,
        name: values.name,
        email: values.email,
        phone: null,
        country: null,
        amount_range: 'undisclosed',
        comments: `Subject: ${values.subject}\n\n${values.message}`,
        source: 'contact-form',
      });

      if (error) throw error;

      // Send email notifications
      try {
        await supabase.functions.invoke('send-notification', {
          body: {
            type: 'contact',
            data: {
              name: values.name,
              email: values.email,
              comments: values.message,
            },
            sendToAdmin: true,
            sendToUser: true,
          },
        });
      } catch (emailError) {
        console.error('Error sending notification emails:', emailError);
      }

      toast({
        title: 'Request Received',
        description: 'Thank you for your message. Your request has been received. We will review it and follow up privately. This does not constitute any commitment or agreement.',
      });
      
      form.reset();
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message || 'There was an error sending your message. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
              Have questions? Get in touch with our team.
            </p>
            <div className="max-w-2xl mx-auto">
              <p className="text-sm text-muted-foreground px-6 py-4 bg-muted/30 rounded-lg border border-border/50">
                <strong>Important:</strong> This form allows you to request more information about Digital Invest Inc. and its projects. Submitting this form does not constitute an offer, commitment, or agreement. Any potential participation, if pursued, will be handled privately and offline.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border border-border/50">
                <CardHeader>
                  <CardTitle className="text-2xl">Request Information</CardTitle>
                  <CardDescription>
                    Submit your inquiry and we'll follow up privately. No commitment is created by this message.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="john@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Subject</FormLabel>
                            <FormControl>
                              <Input placeholder="Investment inquiry" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Tell us about your investment interests, questions, or how we can help..."
                                className="min-h-[150px]"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4" />
                            Submit Request
                          </>
                        )}
                      </Button>
                      <p className="text-xs text-center text-muted-foreground mt-2">
                        This is a non-binding information request only
                      </p>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information & Additional Info */}
            <div className="space-y-8">
              {/* Contact Details */}
              <Card className="border border-border/50">
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">Email</p>
                      <a href="mailto:info@digitalinvest.com" className="text-muted-foreground hover:text-primary transition-colors">
                        info@digitalinvest.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">Office</p>
                      <p className="text-muted-foreground">
                        Digital Invest Inc.<br />
                        Charlotte, NC<br />
                        United States
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Response Time */}
              <Card className="border border-border/50">
                <CardHeader>
                  <CardTitle>What to Expect</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Response within 1-2 business days</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Private consultation with our team</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Informational materials and documentation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Clear next steps for exploratory discussion</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Disclaimer */}
              <Card className="bg-muted/30 border border-border/50">
                <CardContent className="pt-6">
                  <div className="text-sm text-muted-foreground">
                    <p className="font-medium text-foreground mb-2">Legal Notice</p>
                    <p>
                      Digital Invest Inc. does not provide investment, legal, or tax advice through this website. 
                      Information provided is for informational purposes only and does not constitute 
                      a public offer or solicitation. All participation is private, invitation-only, and requires formal legal agreements executed offline.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
