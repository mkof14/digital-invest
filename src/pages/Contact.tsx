import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Mail, MapPin, Loader2, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { supabase } from '@/integrations/supabase/client';
import PageHero from '@/components/PageHero';
import heroImage from '@/assets/heroes/contact.webp';

const formSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email().max(255),
  subject: z.string().min(5).max(200),
  message: z.string().min(10).max(1000),
});

const Contact = () => {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: '', email: '', subject: '', message: '' },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from('investor_leads').insert({
        project_id: null, name: values.name, email: values.email,
        phone: null, country: null, amount_range: 'undisclosed',
        comments: `Subject: ${values.subject}\n\n${values.message}`, source: 'contact-form',
      });
      if (error) throw error;
      try {
        await supabase.functions.invoke('send-notification', {
          body: { type: 'contact', data: { name: values.name, email: values.email, comments: values.message }, sendToAdmin: true, sendToUser: true },
        });
      } catch (emailError) { console.error('Error sending notification emails:', emailError); }
      toast({ title: t('contact.requestReceived'), description: t('contact.requestReceivedText') });
      form.reset();
    } catch (error: any) {
      toast({ title: t('common.error'), description: error.message || t('contact.error'), variant: 'destructive' });
    } finally { setIsSubmitting(false); }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <PageHero image={heroImage} className="!pb-12">
        <div className="mb-2 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">{t('contact.title')}</h1>
          <p className="text-xl max-w-3xl mx-auto mb-6 text-primary-light">{t('contact.subtitle')}</p>
          <div className="max-w-2xl mx-auto">
            <p className="text-sm text-muted-foreground px-6 py-4 bg-muted/30 rounded-lg border border-border/50">
              <strong>{t('common.important')}:</strong> {t('contact.disclaimer')}
            </p>
          </div>
        </div>
      </PageHero>
      <div className="pb-16">
        <div className="container mx-auto px-4">

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="border border-border/50">
                <CardHeader>
                  <CardTitle className="text-2xl">{t('contact.formTitle')}</CardTitle>
                  <CardDescription>{t('contact.formSubtitle')}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField control={form.control} name="name" render={({ field }) => (
                        <FormItem><FormLabel>{t('contact.name')}</FormLabel><FormControl><Input placeholder="John Doe" {...field} /></FormControl><FormMessage /></FormItem>
                      )} />
                      <FormField control={form.control} name="email" render={({ field }) => (
                        <FormItem><FormLabel>{t('contact.email')}</FormLabel><FormControl><Input type="email" placeholder="john@example.com" {...field} /></FormControl><FormMessage /></FormItem>
                      )} />
                      <FormField control={form.control} name="subject" render={({ field }) => (
                        <FormItem><FormLabel>{t('contact.subject')}</FormLabel><FormControl><Input placeholder={t('contact.subjectPlaceholder')} {...field} /></FormControl><FormMessage /></FormItem>
                      )} />
                      <FormField control={form.control} name="message" render={({ field }) => (
                        <FormItem><FormLabel>{t('contact.message')}</FormLabel><FormControl><Textarea placeholder={t('contact.messagePlaceholder')} className="min-h-[150px]" {...field} /></FormControl><FormMessage /></FormItem>
                      )} />
                      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? (<><Loader2 className="mr-2 h-4 w-4 animate-spin" />{t('common.sending')}</>) : (<><Send className="mr-2 h-4 w-4" />{t('common.submitRequest')}</>)}
                      </Button>
                      <p className="text-xs text-center text-muted-foreground mt-2">{t('contact.nonBinding')}</p>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <Card className="border border-border/50">
                <CardHeader><CardTitle>{t('contact.contactInfo')}</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">{t('contact.emailLabel')}</p>
                      <a href="mailto:info@digitalinvest.com" className="text-muted-foreground hover:text-primary transition-colors">info@digitalinvest.com</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">{t('contact.officeLabel')}</p>
                      <p className="text-muted-foreground">Digital Invest Inc.<br />Charlotte, NC<br />United States</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-border/50">
                <CardHeader><CardTitle>{t('contact.whatToExpect')}</CardTitle></CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    {[1,2,3,4].map(i => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{t(`contact.expect${i}`)}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-muted/30 border border-border/50">
                <CardContent className="pt-6">
                  <div className="text-sm text-muted-foreground">
                    <p className="font-medium text-foreground mb-2">{t('contact.legalNotice')}</p>
                    <p>{t('contact.legalNoticeText')}</p>
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
