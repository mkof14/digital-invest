import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Heart, TrendingUp, Shield, Users, Globe, Loader2, CheckCircle2, Building2, Linkedin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { MarkdownContent } from '@/components/MarkdownContent';
import { getContentBlock, renderContentBlock, ContentBlock } from '@/lib/contentService';

const About = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState<{
    story: ContentBlock | null;
    recognition: ContentBlock | null;
    mission: ContentBlock | null;
    vision: ContentBlock | null;
    commitment: ContentBlock | null;
  }>({
    story: null,
    recognition: null,
    mission: null,
    vision: null,
    commitment: null,
  });

  useEffect(() => {
    const fetchContent = async () => {
      const [story, recognition, mission, vision, commitment] = await Promise.all([
        getContentBlock('about.story'),
        getContentBlock('about.recognition'),
        getContentBlock('about.mission'),
        getContentBlock('about.vision'),
        getContentBlock('about.commitment'),
      ]);
      setContent({ story, recognition, mission, vision, commitment });
      setLoading(false);
    };
    fetchContent();
  }, []);

  const fallbacks = {
    story: `Digital Invest Inc. is a U.S.-based technology and innovation company with roots dating back to 2010, originally operating under the GENEX name. Over more than a decade, we have focused on research, development, and the commercialization of advanced technologies that bridge health, engineering, data, and real-world operations.

From the early years in biomolecular research, genetic diagnostics, and precision medicine, we have continued to expand into AI systems, data platforms, industrial automation, and intelligent real-economy infrastructures.

Today, Digital Invest brings together this multi-sector expertise into a unified portfolio of long-term, practical, and scalable projects.`,
    recognition: `Digital Invest Inc. and its portfolio projects have been recognized by leading industry publications including Healthcare Tech Outlook and AgTech Innovation Journal for pioneering work in precision medicine, agricultural technology, and AI-driven platforms.`,
    mission: `Digital Invest Inc.'s mission is to revolutionize healthcare through biomathematical modeling and personalized medicine, enabling individuals to make informed, proactive decisions for healthier, longer lives. We combine cutting-edge AI, genomic science, and real-world operational systems to deliver tangible, scalable, and meaningful innovations across multiple industries.`,
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="flex items-center justify-center min-h-[400px]">
          <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      {/* Hero Section */}
      <section className="relative py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6">
            <Badge variant="secondary" className="mb-4">{t('about.title')}</Badge>
            <h1 className="text-5xl md:text-6xl font-bold">
              <span className="gradient-blue-animated">{t('about.title')}</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('about.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4 bg-muted/30 section-gradient-cool">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-8">{t('about.ourStory')}</h2>
          <div className="text-muted-foreground">
            <MarkdownContent content={renderContentBlock(content.story, fallbacks.story)} />
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="py-16 px-4 section-gradient-warm">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-foreground mb-8">{t('about.recognitions')}</h2>
          <div className="mb-8 text-muted-foreground">
            <MarkdownContent content={renderContentBlock(content.recognition, fallbacks.recognition)} />
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <Award className="h-8 w-8 text-primary mt-1" />
                  <div>
                    <CardTitle className="text-xl mb-2">{t('about.award1Title')}</CardTitle>
                    <CardDescription className="text-base">{t('about.award1Desc')}</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <Award className="h-8 w-8 text-primary mt-1" />
                  <div>
                    <CardTitle className="text-xl mb-2">{t('about.award2Title')}</CardTitle>
                    <CardDescription className="text-base mb-4">{t('about.award2Desc')}</CardDescription>
                    <Button variant="outline" asChild>
                      <a href="https://www.healthcaretechoutlook.com/digital-invest-inc" target="_blank" rel="noopener noreferrer">
                        {t('common.readArticle')}
                      </a>
                    </Button>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="py-16 px-4 bg-muted/30 section-gradient-lavender">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-foreground mb-8">{t('about.expertise')}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {[1,2,3,4,5].map(i => (
                    <li key={i} className="flex items-start gap-3">
                      <Heart className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">{t(`about.expertise${i}`)}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {[6,7,8,9,10].map(i => (
                    <li key={i} className="flex items-start gap-3">
                      <Globe className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">{t(`about.expertise${i}`)}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 px-4 section-gradient-mint">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-8">{t('about.mission')}</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="text-muted-foreground">
                <MarkdownContent content={renderContentBlock(content.mission, fallbacks.mission)} />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* The Vision Ahead */}
      <section className="py-16 px-4 bg-muted/30 section-gradient-gold">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-foreground mb-8">{t('about.visionAhead')}</h2>
          <div className="space-y-8">
            {['biomathlife', 'biomathcore', 'terraaero', 'dishcore', 'digitalinvest'].map(key => (
              <Card key={key}>
                <CardHeader>
                  <CardTitle className="text-xl">
                    {key === 'biomathlife' ? 'BioMath Life Platform' : 
                     key === 'biomathcore' ? 'BioMath Core' :
                     key === 'terraaero' ? 'TerraAero' :
                     key === 'dishcore' ? 'DishCore' : 'Digital Invest Inc.'}
                  </CardTitle>
                  <CardDescription className="text-base">{t(`about.vision_${key}`)}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-16 px-4 section-gradient-rose">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-8">{t('about.commitment')}</h2>
          <Card>
            <CardContent className="pt-6">
              <ul className="space-y-4">
                {[
                  { icon: Shield, key: 'commitment1' },
                  { icon: TrendingUp, key: 'commitment2' },
                  { icon: Users, key: 'commitment3' },
                  { icon: Award, key: 'commitment4' },
                  { icon: Globe, key: 'commitment5' },
                  { icon: Shield, key: 'commitment6' },
                ].map(({ icon: Icon, key }) => (
                  <li key={key} className="flex items-start gap-3">
                    <Icon className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <span className="text-lg text-muted-foreground">{t(`about.${key}`)}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Corporate Legal Statement */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="border border-border/50 bg-muted/30">
            <CardContent className="pt-8 pb-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">{t('about.legalFramework')}</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">{t('about.legalFrameworkText')}</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-muted/30 section-gradient-slate">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">{t('about.readyToLearn')}</h2>
          <p className="text-lg text-muted-foreground mb-8">{t('about.readyToLearnText')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild><a href="/projects">{t('about.viewProjects')}</a></Button>
            <Button size="lg" variant="outline" asChild><a href="/overview">{t('footer.overview', 'Portfolio Overview')}</a></Button>
            <Button size="lg" variant="outline" asChild><a href="/contact">{t('about.requestInfo')}</a></Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
