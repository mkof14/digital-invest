import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download, Users, Globe, Lightbulb, Shield, FileText, Briefcase, ChevronRight } from 'lucide-react';

const Demo = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 py-32">
        <div className="max-w-6xl mx-auto text-center space-y-12">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight tracking-tight">
            Engineering the Future of Human Systems, Intelligence, and Real-World Infrastructure
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Building transformative technologies that redefine healthcare, agriculture, food systems, and multi-sector operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button size="lg" asChild className="text-base">
              <Link to="/projects">
                View Portfolio <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-base">
              <Link to="/for-investors">For Investors</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Investor Overview */}
      <section className="py-32 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-6 mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground">Investor Overview</h2>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Digital Invest Inc. operates a diverse portfolio of proprietary platforms across HealthTech, AgroTech, FoodTech, and digital infrastructure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="text-5xl font-bold text-foreground">5</div>
              <div className="text-lg text-muted-foreground">Proprietary Platforms</div>
            </div>
            <div className="space-y-4">
              <div className="text-5xl font-bold text-foreground">3</div>
              <div className="text-lg text-muted-foreground">Core Industries</div>
            </div>
            <div className="space-y-4">
              <div className="text-5xl font-bold text-foreground">20+</div>
              <div className="text-lg text-muted-foreground">Years Experience</div>
            </div>
            <div className="space-y-4">
              <div className="text-5xl font-bold text-foreground">100%</div>
              <div className="text-lg text-muted-foreground">U.S.-Based Development</div>
            </div>
          </div>

          <div className="mt-20 space-y-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">Portfolio Structure</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Each platform operates independently while sharing core technological infrastructure, AI systems, and operational expertise. This approach maximizes efficiency, reduces redundancy, and creates synergies across health, agriculture, food production, and digital services.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">Investment Philosophy</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We pursue long-term value creation through real-world technology deployment. Our focus is on building sustainable, scalable platforms that address fundamental challenges in human health, food systems, and infrastructure. We work with select partners who share our commitment to operational excellence and patient capital.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">Private Format</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Digital Invest operates through private, individual discussions rather than public crowdfunding. This allows for thorough due diligence, aligned expectations, and meaningful partnerships with investors who understand our multi-year development cycles and sector-specific challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Manifesto */}
      <section className="py-32 px-4 border-t border-border bg-card">
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground">Founder Manifesto</h2>
          
          <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
            <p>
              For over two decades, I have been building systems that matter—platforms that process genetic data, analyze agricultural operations, optimize food production, and manage complex infrastructure at scale.
            </p>

            <p>
              This work began in biomolecular research and precision medicine diagnostics. It expanded into AI-driven health analytics, drone automation for agriculture, intelligent food systems, and multi-sector digital infrastructure. Each platform represents years of engineering, regulatory navigation, and real-world testing.
            </p>

            <p>
              Digital Invest Inc. exists because these systems are too important to remain isolated. The future requires integrated solutions—where health data informs nutrition, where agricultural intelligence enhances food production, where all platforms share computational resources and operational expertise.
            </p>

            <p>
              We do not chase trends. We build what endures. We do not promise overnight returns. We focus on decade-long transformations. We do not operate in public markets. We work with partners who understand that fundamental innovation requires patience, capital, and conviction.
            </p>

            <p>
              This is not a startup. This is a portfolio of mature, operating platforms unified under one strategic vision. We are engineering the infrastructure that will power human health, food security, and real-economy operations for the next generation.
            </p>

            <p className="text-foreground font-semibold pt-4">
              — Michael Kofman, Founder & Chief Executive Officer
            </p>
          </div>
        </div>
      </section>

      {/* Vision 2030 */}
      <section className="py-32 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-6 mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground">Vision 2030</h2>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Our roadmap for the next seven years—building integrated systems across health, agriculture, food, and infrastructure.
            </p>
          </div>

          <div className="space-y-16">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">2024-2025</div>
                <h3 className="text-2xl font-bold text-foreground">Platform Consolidation</h3>
                <p className="text-muted-foreground">
                  Complete integration of shared AI infrastructure, unified authentication, and cross-platform data pipelines. Launch manufacturing operations for TerraAero and DishCore.
                </p>
              </div>

              <div className="space-y-4">
                <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">2026-2027</div>
                <h3 className="text-2xl font-bold text-foreground">Market Expansion</h3>
                <p className="text-muted-foreground">
                  Scale health analytics and genomic services, expand agricultural automation deployments, establish food production facilities, and extend digital infrastructure capabilities.
                </p>
              </div>

              <div className="space-y-4">
                <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">2028-2030</div>
                <h3 className="text-2xl font-bold text-foreground">Global Operations</h3>
                <p className="text-muted-foreground">
                  Achieve operational scale across all platforms, establish international partnerships, and position Digital Invest as a multi-sector technology leader with proven revenue and impact.
                </p>
              </div>
            </div>

            <div className="space-y-8 pt-8">
              <h3 className="text-2xl font-semibold text-foreground">Strategic Priorities Through 2030</h3>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <ChevronRight className="h-6 w-6 text-foreground flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-foreground mb-1">Unified Technology Stack</div>
                    <div className="text-muted-foreground">Deploy shared AI reasoning, cloud infrastructure, and security systems across all platforms to maximize efficiency and cross-platform intelligence.</div>
                  </div>
                </li>
                <li className="flex gap-4">
                  <ChevronRight className="h-6 w-6 text-foreground flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-foreground mb-1">Manufacturing & Operations</div>
                    <div className="text-muted-foreground">Establish U.S.-based production for hardware (drones, food systems) and scale software/data services (health analytics, digital platforms).</div>
                  </div>
                </li>
                <li className="flex gap-4">
                  <ChevronRight className="h-6 w-6 text-foreground flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-foreground mb-1">Regulatory Compliance</div>
                    <div className="text-muted-foreground">Maintain HIPAA/HITECH standards for health platforms, FAA compliance for agricultural drones, FDA preparation for food tech, and enterprise security across all systems.</div>
                  </div>
                </li>
                <li className="flex gap-4">
                  <ChevronRight className="h-6 w-6 text-foreground flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-foreground mb-1">Revenue Diversification</div>
                    <div className="text-muted-foreground">Generate revenue through subscription models (health/software), hardware sales (drones/food systems), B2B enterprise services, and data analytics offerings.</div>
                  </div>
                </li>
                <li className="flex gap-4">
                  <ChevronRight className="h-6 w-6 text-foreground flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-foreground mb-1">Strategic Partnerships</div>
                    <div className="text-muted-foreground">Collaborate with healthcare systems, agricultural operators, food distributors, and enterprise clients to accelerate deployment and validation.</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Profile */}
      <section className="py-32 px-4 border-t border-border bg-card">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-20">Corporate Profile</h2>

          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Legal Name</div>
                <div className="text-xl text-foreground">Digital Invest Inc.</div>
              </div>
              <div>
                <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Founded</div>
                <div className="text-xl text-foreground">2010 (operating as GENEX through 2023)</div>
              </div>
              <div>
                <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Headquarters</div>
                <div className="text-xl text-foreground">United States</div>
              </div>
              <div>
                <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Leadership</div>
                <div className="text-xl text-foreground">Michael Kofman, Founder & CEO</div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Industries</div>
                <div className="text-xl text-foreground">HealthTech, AgroTech, FoodTech, Digital Infrastructure</div>
              </div>
              <div>
                <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Portfolio</div>
                <div className="text-xl text-foreground">5 Proprietary Platforms</div>
              </div>
              <div>
                <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Stage</div>
                <div className="text-xl text-foreground">Operational Platforms in Development & Early Deployment</div>
              </div>
              <div>
                <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Structure</div>
                <div className="text-xl text-foreground">Private Investment Platform</div>
              </div>
            </div>
          </div>

          <div className="mt-20 pt-16 border-t border-border">
            <h3 className="text-2xl font-semibold text-foreground mb-8">Portfolio Overview</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="space-y-3">
                <div className="font-semibold text-foreground">BioMath Core</div>
                <div className="text-sm text-muted-foreground">Mathematical modeling, computational biology, bioinformatics infrastructure</div>
              </div>
              <div className="space-y-3">
                <div className="font-semibold text-foreground">BioMath Life Platform</div>
                <div className="text-sm text-muted-foreground">Precision medicine, genomic analytics, AI-driven health intelligence</div>
              </div>
              <div className="space-y-3">
                <div className="font-semibold text-foreground">TerraAero</div>
                <div className="text-sm text-muted-foreground">Agricultural automation, drone systems, precision farming solutions</div>
              </div>
              <div className="space-y-3">
                <div className="font-semibold text-foreground">DishCore</div>
                <div className="text-sm text-muted-foreground">Intelligent food production, nutrition tracking, wellness optimization</div>
              </div>
              <div className="space-y-3">
                <div className="font-semibold text-foreground">Digital Invest Platform</div>
                <div className="text-sm text-muted-foreground">Portfolio management, shared AI infrastructure, cross-platform services</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Values */}
      <section className="py-32 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-20">Corporate Values</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex gap-4">
                <Shield className="h-8 w-8 text-foreground flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Engineering Excellence</h3>
                  <p className="text-muted-foreground">We build systems that work—reliable, scalable, and designed for long-term operation. Every platform undergoes rigorous testing, iteration, and real-world validation.</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <Lightbulb className="h-8 w-8 text-foreground flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Long-Term Vision</h3>
                  <p className="text-muted-foreground">We measure success in decades, not quarters. Our platforms are designed to address fundamental challenges that will remain relevant for generations.</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <Users className="h-8 w-8 text-foreground flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Real-World Impact</h3>
                  <p className="text-muted-foreground">Technology means nothing without deployment. We focus on solutions that improve health outcomes, agricultural efficiency, food quality, and operational capabilities.</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <Globe className="h-8 w-8 text-foreground flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Cross-Platform Synergy</h3>
                  <p className="text-muted-foreground">Our portfolio structure creates value through shared infrastructure, unified AI systems, and operational knowledge transfer across industries.</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <FileText className="h-8 w-8 text-foreground flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Regulatory Compliance</h3>
                  <p className="text-muted-foreground">We operate in highly regulated sectors. Privacy, security, and compliance are non-negotiable foundations of every platform we build.</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <Briefcase className="h-8 w-8 text-foreground flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Operational Rigor</h3>
                  <p className="text-muted-foreground">We build businesses, not prototypes. Our platforms are designed for manufacturing, deployment, customer support, and sustainable revenue generation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Press Center */}
      <section className="py-32 px-4 border-t border-border bg-card">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-12">Press Center</h2>
          
          <div className="space-y-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">Recognition</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-6 border border-border rounded-lg space-y-3 hover:border-foreground/20 transition-colors">
                  <div className="text-sm text-muted-foreground">2023</div>
                  <div className="font-semibold text-foreground">Top 10 Precision Medicine Solutions Companies</div>
                  <p className="text-sm text-muted-foreground">Recognition for leadership in genomic analytics and personalized diagnostics.</p>
                </div>
                <div className="p-6 border border-border rounded-lg space-y-3 hover:border-foreground/20 transition-colors">
                  <div className="text-sm text-muted-foreground">Healthcare Tech Outlook</div>
                  <div className="font-semibold text-foreground">Digital Invest Inc.: Unleashing Healthcare Transformation</div>
                  <a 
                    href="https://www.healthcaretechoutlook.com/digital-invest-inc" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-foreground hover:underline inline-flex items-center gap-2"
                  >
                    Read article <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-6 pt-8">
              <h3 className="text-2xl font-semibold text-foreground">Media Inquiries</h3>
              <p className="text-muted-foreground">
                For press inquiries, partnership opportunities, or media requests, please contact:
              </p>
              <div className="space-y-2">
                <div className="text-foreground">Email: <a href="mailto:info@digitalinvest.inc" className="hover:underline">info@digitalinvest.inc</a></div>
              </div>
            </div>

            <div className="space-y-6 pt-8">
              <h3 className="text-2xl font-semibold text-foreground">Latest News</h3>
              <Button variant="outline" asChild>
                <Link to="/news">
                  View all news & insights <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Media Kit */}
      <section className="py-32 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-12">Media Kit</h2>
          
          <div className="space-y-12">
            <p className="text-xl text-muted-foreground">
              Download official logos, brand guidelines, and corporate materials for media and partnership use.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 border border-border rounded-lg space-y-4 hover:border-foreground/20 transition-colors">
                <Download className="h-8 w-8 text-foreground" />
                <h3 className="font-semibold text-foreground">Company Logo Pack</h3>
                <p className="text-sm text-muted-foreground">Digital Invest Inc. logos in multiple formats (PNG, SVG, EPS)</p>
                <Button variant="outline" size="sm" className="w-full">
                  Download
                </Button>
              </div>

              <div className="p-6 border border-border rounded-lg space-y-4 hover:border-foreground/20 transition-colors">
                <Download className="h-8 w-8 text-foreground" />
                <h3 className="font-semibold text-foreground">Project Logos</h3>
                <p className="text-sm text-muted-foreground">Individual logos for all five portfolio platforms</p>
                <Button variant="outline" size="sm" className="w-full">
                  Download
                </Button>
              </div>

              <div className="p-6 border border-border rounded-lg space-y-4 hover:border-foreground/20 transition-colors">
                <Download className="h-8 w-8 text-foreground" />
                <h3 className="font-semibold text-foreground">Brand Guidelines</h3>
                <p className="text-sm text-muted-foreground">Typography, color palette, and usage guidelines</p>
                <Button variant="outline" size="sm" className="w-full">
                  Download
                </Button>
              </div>

              <div className="p-6 border border-border rounded-lg space-y-4 hover:border-foreground/20 transition-colors">
                <Download className="h-8 w-8 text-foreground" />
                <h3 className="font-semibold text-foreground">Fact Sheet</h3>
                <p className="text-sm text-muted-foreground">One-page corporate overview and key statistics</p>
                <Button variant="outline" size="sm" className="w-full">
                  Download
                </Button>
              </div>

              <div className="p-6 border border-border rounded-lg space-y-4 hover:border-foreground/20 transition-colors">
                <Download className="h-8 w-8 text-foreground" />
                <h3 className="font-semibold text-foreground">Executive Photos</h3>
                <p className="text-sm text-muted-foreground">High-resolution photos of leadership team</p>
                <Button variant="outline" size="sm" className="w-full">
                  Download
                </Button>
              </div>

              <div className="p-6 border border-border rounded-lg space-y-4 hover:border-foreground/20 transition-colors">
                <Download className="h-8 w-8 text-foreground" />
                <h3 className="font-semibold text-foreground">Platform Screenshots</h3>
                <p className="text-sm text-muted-foreground">Visual assets from all five platforms</p>
                <Button variant="outline" size="sm" className="w-full">
                  Download
                </Button>
              </div>
            </div>

            <div className="pt-8 space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Usage Guidelines</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <ChevronRight className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span>Maintain proper spacing and clear space around all logos</span>
                </li>
                <li className="flex gap-3">
                  <ChevronRight className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span>Do not alter colors, proportions, or design elements</span>
                </li>
                <li className="flex gap-3">
                  <ChevronRight className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span>Use provided color specifications for brand consistency</span>
                </li>
                <li className="flex gap-3">
                  <ChevronRight className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span>Contact us for approval before using materials in paid advertising</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Careers */}
      <section className="py-32 px-4 border-t border-border bg-card">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-12">Careers & Hiring</h2>
          
          <div className="space-y-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">Join Our Team</h3>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Digital Invest Inc. is building transformative technology across healthcare, agriculture, food systems, and digital infrastructure. We're looking for exceptional engineers, researchers, and operators who want to work on problems that matter.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">What We Value</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <div className="font-semibold text-foreground">Technical Excellence</div>
                  <p className="text-muted-foreground">We hire people who care deeply about building systems that work—reliable, scalable, and maintainable.</p>
                </div>
                <div className="space-y-3">
                  <div className="font-semibold text-foreground">Cross-Disciplinary Thinking</div>
                  <p className="text-muted-foreground">Our projects span biology, engineering, data science, and operations. Curiosity across domains is essential.</p>
                </div>
                <div className="space-y-3">
                  <div className="font-semibold text-foreground">Long-Term Commitment</div>
                  <p className="text-muted-foreground">We're building platforms that take years to realize. We value patience, persistence, and strategic thinking.</p>
                </div>
                <div className="space-y-3">
                  <div className="font-semibold text-foreground">Real-World Impact</div>
                  <p className="text-muted-foreground">You'll work on systems that directly affect human health, food production, and agricultural efficiency.</p>
                </div>
              </div>
            </div>

            <div className="space-y-6 pt-8">
              <h3 className="text-2xl font-semibold text-foreground">Open Positions</h3>
              <div className="space-y-4">
                <div className="p-6 border border-border rounded-lg hover:border-foreground/20 transition-colors">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-semibold text-foreground">Senior Backend Engineer (Health Platform)</h4>
                      <div className="text-sm text-muted-foreground mt-1">Full-time · Remote (U.S.)</div>
                    </div>
                    <Button variant="outline" size="sm">Apply</Button>
                  </div>
                  <p className="text-sm text-muted-foreground">Build scalable cloud infrastructure for genomic data processing and AI-driven health analytics.</p>
                </div>

                <div className="p-6 border border-border rounded-lg hover:border-foreground/20 transition-colors">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-semibold text-foreground">Machine Learning Engineer (Multi-Platform)</h4>
                      <div className="text-sm text-muted-foreground mt-1">Full-time · Remote (U.S.)</div>
                    </div>
                    <Button variant="outline" size="sm">Apply</Button>
                  </div>
                  <p className="text-sm text-muted-foreground">Develop shared AI systems that power health analytics, agricultural automation, and food optimization.</p>
                </div>

                <div className="p-6 border border-border rounded-lg hover:border-foreground/20 transition-colors">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-semibold text-foreground">DevOps / Infrastructure Engineer</h4>
                      <div className="text-sm text-muted-foreground mt-1">Full-time · Remote (U.S.)</div>
                    </div>
                    <Button variant="outline" size="sm">Apply</Button>
                  </div>
                  <p className="text-sm text-muted-foreground">Manage cloud infrastructure, CI/CD pipelines, and security systems across five platform deployments.</p>
                </div>

                <div className="p-6 border border-border rounded-lg hover:border-foreground/20 transition-colors">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-semibold text-foreground">Operations Manager (Manufacturing)</h4>
                      <div className="text-sm text-muted-foreground mt-1">Full-time · On-site (U.S.)</div>
                    </div>
                    <Button variant="outline" size="sm">Apply</Button>
                  </div>
                  <p className="text-sm text-muted-foreground">Lead manufacturing operations for drone systems and food production hardware.</p>
                </div>
              </div>
            </div>

            <div className="pt-8 space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Don't See Your Role?</h3>
              <p className="text-muted-foreground">
                We're always interested in exceptional talent. Send your resume and a brief note about what you want to build to <a href="mailto:careers@digitalinvest.inc" className="text-foreground hover:underline">careers@digitalinvest.inc</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Documents */}
      <section className="py-32 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-12">Internal Documents Center</h2>
          
          <div className="space-y-12">
            <p className="text-xl text-muted-foreground">
              Access corporate documents, investor materials, and platform-specific resources.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 border border-border rounded-lg space-y-4 hover:border-foreground/20 transition-colors">
                <FileText className="h-8 w-8 text-foreground" />
                <h3 className="font-semibold text-foreground">Investor Briefs</h3>
                <p className="text-sm text-muted-foreground">Download PDF briefs for each platform with investment highlights, roadmaps, and risk disclosures.</p>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/investor-documents">View Documents</Link>
                </Button>
              </div>

              <div className="p-6 border border-border rounded-lg space-y-4 hover:border-foreground/20 transition-colors">
                <FileText className="h-8 w-8 text-foreground" />
                <h3 className="font-semibold text-foreground">Corporate Governance</h3>
                <p className="text-sm text-muted-foreground">Legal structure, compliance policies, and operational governance documents.</p>
                <Button variant="outline" size="sm" disabled>
                  Restricted Access
                </Button>
              </div>

              <div className="p-6 border border-border rounded-lg space-y-4 hover:border-foreground/20 transition-colors">
                <FileText className="h-8 w-8 text-foreground" />
                <h3 className="font-semibold text-foreground">Technical Documentation</h3>
                <p className="text-sm text-muted-foreground">Platform architecture, API documentation, and integration guides.</p>
                <Button variant="outline" size="sm" disabled>
                  Internal Only
                </Button>
              </div>

              <div className="p-6 border border-border rounded-lg space-y-4 hover:border-foreground/20 transition-colors">
                <FileText className="h-8 w-8 text-foreground" />
                <h3 className="font-semibold text-foreground">Legal & Compliance</h3>
                <p className="text-sm text-muted-foreground">Privacy policies, terms of use, risk disclosures, and regulatory filings.</p>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/legal/terms">View Legal Pages</Link>
                </Button>
              </div>
            </div>

            <div className="pt-8 p-6 border border-border rounded-lg bg-muted/20">
              <h3 className="font-semibold text-foreground mb-3">Document Access</h3>
              <p className="text-sm text-muted-foreground">
                Some materials are restricted to current investors, partners, or employees. For access requests, contact <a href="mailto:info@digitalinvest.inc" className="text-foreground hover:underline">info@digitalinvest.inc</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center px-4 py-32 border-t border-border bg-card">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight tracking-tight">
            We build what the world will depend on.
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Infrastructure for health. Systems for agriculture. Platforms for food. Technology that endures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button size="lg" asChild className="text-base">
              <Link to="/for-investors">
                For Investors <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-base">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Demo;
