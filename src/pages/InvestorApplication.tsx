import { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CheckCircle2, ShieldCheck, Lock, ArrowLeft, Send, Loader2, Mail } from 'lucide-react';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import InvestorPageDisclaimer from '@/components/InvestorPageDisclaimer';

const SECTORS = [
  'BioMath Life Family',
  'Digital Health',
  'AGRON / Agritech',
  'TerraAero / Aerospace',
  'Adamas Materials',
  'Sustainable Manufacturing',
  'AI & Data Platforms',
] as const;

const InvestorApplication = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);

  const tp = (k: string, fallback: string) =>
    (t(`investorApplication.${k}`) === `investorApplication.${k}`
      ? fallback
      : t(`investorApplication.${k}`));

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${tp('metaTitle', 'Investor Application')} — Digital Invest`;
  }, []);

  const schema = useMemo(
    () =>
      z.object({
        name: z
          .string()
          .trim()
          .min(2, tp('errors.nameShort', 'Please enter your full name'))
          .max(120),
        email: z
          .string()
          .trim()
          .email(tp('errors.email', 'Please enter a valid email'))
          .max(255),
        phone: z.string().trim().max(40).optional().or(z.literal('')),
        country: z.string().trim().max(80).optional().or(z.literal('')),
        investorType: z.enum(['private', 'family_office', 'institutional', 'other']),
        amountRange: z.enum([
          'undisclosed',
          'under_100k',
          '100k_500k',
          '500k_2m',
          '2m_plus',
        ]),
        sectors: z.array(z.string()).default([]),
        message: z
          .string()
          .trim()
          .max(2000, tp('errors.messageLong', 'Message is too long'))
          .optional()
          .or(z.literal('')),
        consent: z.literal(true, {
          errorMap: () => ({
            message: tp('errors.consent', 'You must agree to be contacted'),
          }),
        }),
        // honeypot
        website: z.string().max(0).optional().or(z.literal('')),
      }),
    [t],
  );

  type FormValues = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      investorType: 'private',
      amountRange: 'undisclosed',
      sectors: [],
      consent: false as unknown as true,
    },
  });

  const selectedSectors = watch('sectors') ?? [];

  const toggleSector = (sector: string, checked: boolean) => {
    const next = checked
      ? Array.from(new Set([...(selectedSectors ?? []), sector]))
      : (selectedSectors ?? []).filter((s) => s !== sector);
    setValue('sectors', next, { shouldValidate: false });
  };

  const onSubmit = async (values: FormValues) => {
    try {
      const { data, error } = await supabase.functions.invoke(
        'submit-investor-application',
        {
          body: {
            name: values.name,
            email: values.email,
            phone: values.phone || undefined,
            country: values.country || undefined,
            investorType: values.investorType,
            amountRange: values.amountRange,
            sectors: values.sectors ?? [],
            message: values.message || undefined,
            website: values.website || undefined,
            locale: (navigator?.language || 'en').slice(0, 5),
          },
        },
      );

      if (error || (data as any)?.error) {
        const msg =
          (data as any)?.error ||
          error?.message ||
          tp('errors.generic', 'Something went wrong. Please try again.');
        toast({
          title: tp('toast.errorTitle', 'Submission failed'),
          description: msg,
          variant: 'destructive',
        });
        return;
      }

      setSubmitted(true);
      reset();
      toast({
        title: tp('toast.successTitle', 'Application received'),
        description: tp(
          'toast.successDesc',
          'Thank you. Our team will reach out within 1–2 business days.',
        ),
      });
    } catch (err: any) {
      toast({
        title: tp('toast.errorTitle', 'Submission failed'),
        description:
          err?.message ?? tp('errors.generic', 'Something went wrong. Please try again.'),
        variant: 'destructive',
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-12 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background pointer-events-none" />
        <div className="absolute -top-32 -left-24 w-[420px] h-[420px] bg-primary/15 rounded-full blur-3xl animate-pulse" />
        <div className="relative max-w-5xl mx-auto">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate(-1)}
            className="mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {tp('back', 'Back')}
          </Button>

          <Badge
            variant="secondary"
            className="mb-4 px-4 py-2 text-sm border-primary/20"
          >
            <ShieldCheck className="w-4 h-4 mr-2 inline" />
            {tp('badge', 'Private — by invitation')}
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            {tp('title', 'Investor Application')}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
            {tp(
              'subtitle',
              'Submit an expression of interest to explore opportunities across the Digital Invest portfolio. This is an informational request — not an investment commitment.',
            )}
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 pb-20 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8">
          {/* Side info */}
          <aside className="space-y-4">
            <Card className="border-primary/20">
              <CardContent className="pt-6 space-y-4">
                <h3 className="font-semibold text-lg">
                  {tp('whatHappens', 'What happens next')}
                </h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {[
                    tp('step1', 'Our team reviews your request privately'),
                    tp(
                      'step2',
                      'We follow up within 1–2 business days via your preferred channel',
                    ),
                    tp(
                      'step3',
                      'If aligned, we share project materials and arrange a call',
                    ),
                  ].map((s, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border/60">
              <CardContent className="pt-6 space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2 font-medium text-foreground">
                  <Lock className="w-4 h-4 text-primary" />
                  {tp('confidentialTitle', 'Confidential')}
                </div>
                <p>
                  {tp(
                    'confidentialDesc',
                    'Your information is handled privately and used only to evaluate fit. No public listing, no broadcast.',
                  )}
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/60">
              <CardContent className="pt-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2 font-medium text-foreground mb-2">
                  <Mail className="w-4 h-4 text-primary" />
                  {tp('directContact', 'Prefer email?')}
                </div>
                <a
                  href="mailto:info@digitalinvest.com"
                  className="text-primary hover:underline"
                >
                  info@digitalinvest.com
                </a>
              </CardContent>
            </Card>
          </aside>

          {/* Form */}
          <section>
            {submitted ? (
              <Card className="border-primary/30 bg-gradient-to-br from-primary/10 via-background to-background">
                <CardContent className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 mx-auto rounded-full bg-primary/15 flex items-center justify-center">
                    <CheckCircle2 className="w-7 h-7 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">
                    {tp('successTitle', 'Application received')}
                  </h2>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    {tp(
                      'successDesc',
                      'Thank you for reaching out. A confirmation has been sent to your email. Our team will follow up within 1–2 business days.',
                    )}
                  </p>
                  <div className="flex gap-3 justify-center pt-4 flex-wrap">
                    <Button onClick={() => setSubmitted(false)} variant="outline">
                      {tp('submitAnother', 'Submit another')}
                    </Button>
                    <Link to="/projects">
                      <Button>{tp('explorePortfolio', 'Explore portfolio')}</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="border-border/60">
                <CardContent className="pt-6">
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* honeypot */}
                    <div className="hidden" aria-hidden="true">
                      <label htmlFor="website">Website</label>
                      <input
                        id="website"
                        type="text"
                        tabIndex={-1}
                        autoComplete="off"
                        {...register('website')}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">
                          {tp('fields.name', 'Full name')} *
                        </Label>
                        <Input
                          id="name"
                          autoComplete="name"
                          {...register('name')}
                          aria-invalid={!!errors.name}
                        />
                        {errors.name && (
                          <p className="text-sm text-destructive mt-1">
                            {errors.name.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="email">
                          {tp('fields.email', 'Email')} *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          autoComplete="email"
                          {...register('email')}
                          aria-invalid={!!errors.email}
                        />
                        {errors.email && (
                          <p className="text-sm text-destructive mt-1">
                            {errors.email.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="phone">
                          {tp('fields.phone', 'Phone')}
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          autoComplete="tel"
                          placeholder="+1 555 0100"
                          {...register('phone')}
                        />
                      </div>

                      <div>
                        <Label htmlFor="country">
                          {tp('fields.country', 'Country')}
                        </Label>
                        <Input
                          id="country"
                          autoComplete="country-name"
                          {...register('country')}
                        />
                      </div>

                      <div>
                        <Label>{tp('fields.investorType', 'Investor type')} *</Label>
                        <Select
                          defaultValue="private"
                          onValueChange={(v) =>
                            setValue('investorType', v as FormValues['investorType'], {
                              shouldValidate: true,
                            })
                          }
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="private">
                              {tp('investorType.private', 'Private investor')}
                            </SelectItem>
                            <SelectItem value="family_office">
                              {tp('investorType.family_office', 'Family office')}
                            </SelectItem>
                            <SelectItem value="institutional">
                              {tp('investorType.institutional', 'Institutional')}
                            </SelectItem>
                            <SelectItem value="other">
                              {tp('investorType.other', 'Other')}
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label>
                          {tp('fields.amountRange', 'Indicative range (USD)')} *
                        </Label>
                        <Select
                          defaultValue="undisclosed"
                          onValueChange={(v) =>
                            setValue('amountRange', v as FormValues['amountRange'], {
                              shouldValidate: true,
                            })
                          }
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="undisclosed">
                              {tp('amount.undisclosed', 'Prefer not to disclose')}
                            </SelectItem>
                            <SelectItem value="under_100k">
                              {tp('amount.under_100k', 'Under $100K')}
                            </SelectItem>
                            <SelectItem value="100k_500k">
                              {tp('amount.100k_500k', '$100K – $500K')}
                            </SelectItem>
                            <SelectItem value="500k_2m">
                              {tp('amount.500k_2m', '$500K – $2M')}
                            </SelectItem>
                            <SelectItem value="2m_plus">
                              {tp('amount.2m_plus', '$2M+')}
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <p className="text-xs text-muted-foreground mt-1">
                          {tp(
                            'amount.help',
                            'For internal sizing only. Non-binding.',
                          )}
                        </p>
                      </div>
                    </div>

                    <div>
                      <Label className="mb-2 block">
                        {tp('fields.sectors', 'Sectors of interest')}
                      </Label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {SECTORS.map((s) => {
                          const checked = selectedSectors.includes(s);
                          return (
                            <label
                              key={s}
                              className="flex items-center gap-2 rounded-md border border-border/60 px-3 py-2 hover:border-primary/40 cursor-pointer transition-colors"
                            >
                              <Checkbox
                                checked={checked}
                                onCheckedChange={(v) => toggleSector(s, !!v)}
                              />
                              <span className="text-sm">{s}</span>
                            </label>
                          );
                        })}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message">
                        {tp('fields.message', 'Message')}
                      </Label>
                      <Textarea
                        id="message"
                        rows={5}
                        placeholder={tp(
                          'fields.messagePlaceholder',
                          'Tell us briefly what you are looking for and any context that helps us route your request.',
                        )}
                        {...register('message')}
                      />
                      {errors.message && (
                        <p className="text-sm text-destructive mt-1">
                          {errors.message.message}
                        </p>
                      )}
                    </div>

                    <div className="flex items-start gap-3">
                      <Checkbox
                        id="consent"
                        onCheckedChange={(v) =>
                          setValue('consent', !!v as true, { shouldValidate: true })
                        }
                      />
                      <div className="grid gap-1.5 leading-snug">
                        <Label htmlFor="consent" className="text-sm cursor-pointer">
                          {tp(
                            'consent.label',
                            'I agree to be contacted by Digital Invest about this request.',
                          )}{' '}
                          *
                        </Label>
                        <p className="text-xs text-muted-foreground">
                          {tp(
                            'consent.help',
                            'This submission is informational only and does not constitute an offer or commitment. See our',
                          )}{' '}
                          <Link to="/privacy" className="underline hover:text-foreground">
                            {tp('consent.privacy', 'Privacy Policy')}
                          </Link>
                          .
                        </p>
                        {errors.consent && (
                          <p className="text-sm text-destructive">
                            {errors.consent.message as string}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3 pt-2">
                      <Button
                        type="submit"
                        size="lg"
                        disabled={isSubmitting}
                        className="min-w-[180px]"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            {tp('submitting', 'Sending…')}
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            {tp('submit', 'Submit application')}
                          </>
                        )}
                      </Button>
                      <Link to="/for-investors">
                        <Button type="button" variant="outline" size="lg">
                          {tp('cancel', 'Cancel')}
                        </Button>
                      </Link>
                    </div>
                  </form>
                </CardContent>
              </Card>
            )}

            <div className="mt-10">
              <InvestorPageDisclaimer />
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default InvestorApplication;
