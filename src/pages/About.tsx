import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Heart, TrendingUp, Shield, Users, Globe, Loader2 } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { MarkdownContent } from '@/components/MarkdownContent';
import { getContentBlock, renderContentBlock, ContentBlock } from '@/lib/contentService';

const About = () => {
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

  // Fallback content
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
            <Badge variant="secondary" className="mb-4">About Us</Badge>
            <h1 className="text-5xl md:text-6xl font-bold">
              <span className="gradient-blue-animated">About Us</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Digital Invest Inc. — Innovation across HealthTech, AI, Agriculture, and Real-Economy Systems.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-8">Our Story</h2>
          <div className="text-muted-foreground">
            <MarkdownContent
              content={renderContentBlock(content.story, fallbacks.story)}
            />
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-foreground mb-8">Recognitions & Awards</h2>
          <div className="mb-8 text-muted-foreground">
            <MarkdownContent
              content={renderContentBlock(content.recognition, fallbacks.recognition)}
            />
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <Award className="h-8 w-8 text-primary mt-1" />
                  <div>
                    <CardTitle className="text-xl mb-2">
                      Top 10 Precision Medicine Solutions Companies — 2023
                    </CardTitle>
                    <CardDescription className="text-base">
                      Digital Invest Inc. was recognized among the Top 10 Precision Medicine Solutions Companies of 2023, 
                      highlighting leadership in genomic analytics, personalized diagnostics, and Precision Medicine 2.0 initiatives.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <Award className="h-8 w-8 text-primary mt-1" />
                  <div>
                    <CardTitle className="text-xl mb-2">Healthcare Tech Outlook Magazine</CardTitle>
                    <CardDescription className="text-base mb-4">
                      Digital Invest Inc.: Unleashing Healthcare Transformation with Tailored Treatment Strategies
                    </CardDescription>
                    <Button variant="outline" asChild>
                      <a 
                        href="https://www.healthcaretechoutlook.com/digital-invest-inc" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        Read full article
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
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-foreground mb-8">Our Expertise</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Heart className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Precision medicine & genomic analysis</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Heart className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Biomolecular and biochemical diagnostics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Heart className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">AI-driven health analytics and reasoning engines</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Heart className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Cloud-based data processing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Heart className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Health intelligence and longevity platforms</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Globe className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Telecommunications and infrastructure systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Data security & enterprise architectures</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <TrendingUp className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">e-Commerce & automation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <TrendingUp className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Big Data analytics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Globe className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">International venture building</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-8">Our Mission</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="text-muted-foreground">
                <MarkdownContent
                  content={renderContentBlock(content.mission, fallbacks.mission)}
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* The Vision Ahead */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-foreground mb-8">The Vision Ahead</h2>
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">BioMath Life Platform</CardTitle>
                <CardDescription className="text-base">
                  A comprehensive longevity and precision health platform integrating genomics, biochemistry, 
                  lifestyle data, and AI-driven reasoning to deliver personalized health insights and proactive 
                  preventive care.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">BioMath Core</CardTitle>
                <CardDescription className="text-base">
                  Advanced computational and biomathematical modeling services for pharmaceutical, biotech, 
                  and research organizations, enabling precision medicine development and drug discovery acceleration.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">TerraAero</CardTitle>
                <CardDescription className="text-base">
                  Intelligent drone and agricultural technology solutions for precision farming, crop monitoring, 
                  and real-economy automation in the agricultural sector.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">DishCore</CardTitle>
                <CardDescription className="text-base">
                  A personalized nutrition and body-tracking platform combining AI-driven meal planning, 
                  metabolic insights, and food production systems for optimal wellness and longevity.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Digital Invest Inc.</CardTitle>
                <CardDescription className="text-base">
                  The parent company and investment services platform, managing the portfolio and facilitating 
                  private investment opportunities across all projects through a unified technological and 
                  operational backbone.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-8">Our Commitment</h2>
          <Card>
            <CardContent className="pt-6">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Shield className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <span className="text-lg text-muted-foreground">Scientific and engineering rigor</span>
                </li>
                <li className="flex items-start gap-3">
                  <TrendingUp className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <span className="text-lg text-muted-foreground">Long-term strategy</span>
                </li>
                <li className="flex items-start gap-3">
                  <Users className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <span className="text-lg text-muted-foreground">Real-world execution</span>
                </li>
                <li className="flex items-start gap-3">
                  <Award className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <span className="text-lg text-muted-foreground">Measurable impact</span>
                </li>
                <li className="flex items-start gap-3">
                  <Globe className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <span className="text-lg text-muted-foreground">U.S.-based development</span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <span className="text-lg text-muted-foreground">Privacy and security</span>
                </li>
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
              <h3 className="text-2xl font-bold text-foreground mb-4">Corporate Legal Framework</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Digital Invest Inc. operates exclusively through private, offline contractual engagements with qualified individuals and organizations. We do not raise capital publicly, do not conduct public offerings through this website, and do not operate as a crowdfunding platform or public marketplace. All participation, if any, is discussed individually, subject to due diligence and eligibility verification, and formalized through separate legal agreements executed offline.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Ready to Learn More?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Explore our portfolio projects or request private information about potential collaboration opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="/projects">View Projects</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/contact">Request Information</a>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
