import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  TrendingUp, ArrowRight, ExternalLink, ChefHat, Clock, ShieldCheck,
  Truck, CalendarCheck, Users, UtensilsCrossed, Leaf, ChevronRight,
  MapPin, ArrowLeft
} from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import InvestorPageDisclaimer from '@/components/InvestorPageDisclaimer';
import heroImg from '@/assets/projects/tableserved-hero.jpg';

const TableServed = () => {
  const [project, setProject] = useState<any>(null);

  useEffect(() => {
    const fetchProject = async () => {
      const { data } = await supabase
        .from('projects')
        .select('*')
        .eq('slug', 'table-served')
        .single();
      if (data) setProject(data);
    };
    fetchProject();
  }, []);

  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-background theme-tableserved">
      <Navigation />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="TableServed — Weekly Family Nutrition" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1408]/95 via-[#1a1408]/80 to-[#1a1408]/50" />
        </div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-3xl">
            <Link to="/projects" className="inline-flex items-center text-amber-300/70 hover:text-amber-300 mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" /> {t('projectCommon.backToProjects')}
            </Link>
            <Badge className="mb-4 bg-amber-500/20 text-amber-300 border-amber-500/30 text-sm px-4 py-1">
              USA Weekly Food Reliability
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-2 tracking-tight">
              Table<span className="text-amber-400">Served</span>
            </h1>
            <p className="text-xl md:text-2xl text-amber-200/70 font-light italic mb-6">
              Weekly Food, Solved.
            </p>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
              Deterministic family nutrition. Scheduled meals prepared in certified US hubs, 
              delivered every Sunday to reclaim your week. Simple. Structural.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8 py-6 text-lg">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  Express Interest
                </Button>
              </Link>
              {project?.website_url && (
                <a href={project.website_url} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="border-amber-400/40 text-amber-300 hover:bg-amber-500/10 px-8 py-6 text-lg">
                    <ExternalLink className="w-5 h-5 mr-2" /> Visit Website
                  </Button>
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* What is TableServed */}
      <section className="py-20 bg-gradient-to-b from-[#1a1408] to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What is <span className="text-amber-400">TableServed</span>?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              TableServed isn't a delivery app — it's a weekly stability protocol. We've replaced daily chaos 
              with a reliable, predictable rhythm. Reliable, neighborhood-cooked family nutrition operating 
              across North America to ensure your week remains calm.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: ChefHat, title: 'Chef-Prepared', desc: 'Local licensed chefs prepare your meals with professional craft and quality ingredients.' },
              { icon: CalendarCheck, title: 'Weekly Schedule', desc: 'Order for the week or month. Predictable delivery every Sunday evening.' },
              { icon: UtensilsCrossed, title: 'Diverse Cuisines', desc: 'Browse a weekly roster of diverse local cuisines tailored to your household preferences.' },
              { icon: MapPin, title: 'North America Wide', desc: 'Regional kitchens across the US and Canada ensure freshness and local flavor.' },
            ].map((item, i) => (
              <Card key={i} className="bg-card/50 border-amber-500/10 hover:border-amber-500/30 transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 rounded-xl bg-amber-500/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-amber-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* The Protocol — How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            The <span className="text-amber-400">Protocol</span>
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Four deterministic steps. No guesswork, no last-minute decisions.
          </p>
          <div className="max-w-4xl mx-auto space-y-8">
            {[
              { step: '01', title: 'CURATION — Design Your Week', desc: 'Browse our weekly roster and select chef-prepared meals tailored to your household. Set your portion counts once and let the rhythm take over.' },
              { step: '02', title: 'COMMITMENT — The Friday Lock', desc: 'Every Friday at Noon, the registry seals. This deterministic cutoff allows our regional kitchens to source fresh ingredients with zero waste.' },
              { step: '03', title: 'PREPARATION — Professional Craft', desc: 'Over the weekend, local licensed chefs prepare your batches. Meals are blast-chilled and vacuum-sealed to lock in Sunday quality for the whole week.' },
              { step: '04', title: 'FULFILLMENT — The Sunday Pulse', desc: 'Sunday evening, our couriers deliver your Stability Box. Wake up Monday morning with your entire week of nutrition solved.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start group">
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-amber-400 font-bold text-xl">{item.step}</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Key <span className="text-amber-400">Features</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { icon: ShieldCheck, title: 'Master-Batch Production', desc: 'Stability and efficiency through batch cooking — consistent quality at scale with zero individual ingredient swaps.' },
              { icon: Leaf, title: 'Allergen & Cuisine Filters', desc: 'Detailed Roster tags let you filter by cuisine type or allergen at a high level. Your Identity profile recalibrates portions automatically.' },
              { icon: Users, title: 'Family-Sized Portions', desc: 'Child portions are nutrition-dense but appropriately sized. Update your household Identity profile to adjust allocations.' },
              { icon: Clock, title: 'Blast-Chilled Freshness', desc: 'Vacuum-sealed and blast-chilled to maintain Sunday quality throughout the entire week.' },
              { icon: Truck, title: 'Sunday Delivery', desc: 'The Stability Box arrives every Sunday evening — your week starts solved on Monday morning.' },
              { icon: CalendarCheck, title: 'Weekly & Monthly Plans', desc: 'Flexible scheduling for weekly or monthly commitments. Set it once, reclaim your time.' },
            ].map((item, i) => (
              <Card key={i} className="bg-card border-border/50 hover:border-amber-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/5">
                <CardContent className="p-6">
                  <item.icon className="w-8 h-8 text-amber-400 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Who It Serves */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Who <span className="text-amber-400">It Serves</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: Users, title: 'Busy Families', desc: 'Parents who want nutritious, diverse meals without the daily decision fatigue and grocery runs.' },
              { icon: ChefHat, title: 'Working Professionals', desc: 'Individuals who value structured nutrition and want to reclaim weekday evenings from cooking.' },
              { icon: MapPin, title: 'Health-Conscious Households', desc: 'Anyone seeking reliable, scheduled nutrition with transparency on ingredients and preparation.' },
            ].map((item, i) => (
              <Card key={i} className="bg-gradient-to-b from-card to-card/50 border-amber-500/10 text-center hover:border-amber-500/30 transition-all">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-amber-500/10 flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-8 h-8 text-amber-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Highlights */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Investment <span className="text-amber-400">Highlights</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              'Recurring subscription model with predictable weekly revenue and high retention',
              'Master-batch production ensures cost efficiency and scalable operations',
              'Deterministic supply chain — Friday lock eliminates waste and optimizes sourcing',
              'Regional kitchen network across North America enables rapid geographic expansion',
              'Family-first positioning captures underserved market of structured weekly nutrition',
              'Part of the Digital Invest portfolio with cross-platform synergies in health and wellness',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-card/50 border border-border/50">
                <ChevronRight className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                <p className="text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#1a1408] to-[#2a1f0a]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Interested in TableServed?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Submitting interest is non-binding and does not create any agreement. 
            All potential participation is discussed individually and offline.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-10 py-6 text-lg">
                Submit Interest <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/projects">
              <Button size="lg" variant="outline" className="border-gray-500 text-gray-300 hover:bg-white/5 px-10 py-6 text-lg">
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <InvestorPageDisclaimer />
      </div>

      <Footer />
    </div>
  );
};

export default TableServed;
