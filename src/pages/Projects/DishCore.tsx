import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Apple,
  Calendar,
  BarChart3,
  Target,
  Utensils,
  CheckCircle2,
  Scale,
  Heart,
  Brain,
  Database,
  Cpu,
  Users,
  Globe,
  Activity,
  Rocket,
  AlertCircle,
  ShoppingCart,
  Home
} from "lucide-react";
import dishcoreLogo from "@/assets/dishcore-logo.png";
import dishcoreHero from "@/assets/projects/dishcore-hero.jpg";
import DownloadInvestorBriefButton from "@/components/DownloadInvestorBriefButton";
import OptimizedImage from "@/components/OptimizedImage";
import InvestorPageDisclaimer from "@/components/InvestorPageDisclaimer";

const DishCore = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="relative py-32 -mx-4 px-4 overflow-hidden mb-16">
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url(${dishcoreHero})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/90 to-background/70" />
          </div>

          <div className="relative z-10 max-w-4xl">
            <div className="flex items-center gap-6 mb-8">
              <OptimizedImage 
                src={dishcoreLogo} 
                alt="DishCore logo" 
                className="w-20 h-20 md:w-24 md:h-24 object-contain"
                showSkeleton={false}
              />
              <div>
                <Badge className="mb-2">Intelligent Food Platform</Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-foreground">
                  DishCore
                </h1>
              </div>
            </div>
            <p className="text-2xl text-foreground mb-4">
              Where Nutrition Meets Intelligence
            </p>
            <p className="text-xl text-muted-foreground max-w-3xl mb-8">
              DishCore transforms food and nutrition through AI-driven recipe intelligence, smart manufacturing, and personalized 
              meal guidance. From daily nutrition planning to standardized meal production - making healthy eating simple, 
              accessible, and consistently good.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link to="/start-investing">
                <Button size="lg">
                  Request Information
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-primary/30 hover:border-primary"
              >
                <a href="https://dishcore.life" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Globe className="h-5 w-5" />
                  dishcore.life
                </a>
              </Button>
              <DownloadInvestorBriefButton projectSlug="dishcore" size="lg" />
            </div>
          </div>
        </section>

        {/* Overview - Positioned High */}
        <section className="mb-16 -mt-8">
          <Card className="border-primary/20 shadow-lg">
            <CardContent className="pt-8 space-y-4">
              <h2 className="text-3xl font-bold mb-4">Overview</h2>
              <p className="text-lg leading-relaxed">
                DishCore is an intelligent food platform combining AI-driven nutrition guidance, smart recipe development, and 
                standardized meal manufacturing. The system helps individuals eat better through personalized daily meal plans 
                while building infrastructure for scalable, data-driven food production.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Unlike generic meal planning apps or traditional food manufacturers, DishCore integrates personal nutrition 
                optimization with systematic food production intelligence. The platform analyzes individual goals, preferences, 
                body data, and dietary needs to generate customized meal guidance while applying the same AI to optimize 
                manufacturing processes, recipe standardization, and quality control.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Core Mission */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Core Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-primary/20">
              <CardHeader>
                <Utensils className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Simplify Healthy Eating</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Remove complexity and guesswork from daily nutrition. Transform meal planning from overwhelming chore into 
                  simple routine. Make healthy eating accessible, practical, and sustainable for real families.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <Brain className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Intelligence-Driven Food</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Apply AI and data science to food production, moving from generic recipes to precisely engineered meals 
                  optimized for nutrition, taste, repeatability, and manufacturing efficiency.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <Heart className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Wellness Synergy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Integrate nutrition intelligence with broader health platforms (BioMath ecosystem) enabling food choices 
                  informed by personal biology, activity levels, health goals, and real-time biometric data.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* How the Platform Works */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">How the Platform Works</h2>
          <div className="space-y-6">
            <Card className="border-primary/20">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                    1
                  </div>
                  <CardTitle className="text-xl">Personal Profile & Goals</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Users create profiles including dietary preferences, restrictions, allergies, health goals (weight management, 
                  muscle building, energy optimization, disease management), activity levels, and budget constraints. Optional 
                  integration with body tracking data (weight, body composition, energy levels) enables dynamic recommendations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                    2
                  </div>
                  <CardTitle className="text-xl">AI Recipe Engine</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  AI analyzes your profile, current progress, upcoming schedule, and available ingredients to generate personalized 
                  daily meal plans. Recipes optimized for nutritional goals, taste preferences, cooking time constraints, and 
                  ingredient availability. System learns from your feedback and adjusts recommendations continuously.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                    3
                  </div>
                  <CardTitle className="text-xl">Daily Guidance & Tracking</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Receive daily meal plans with detailed recipes, nutrition breakdowns, shopping lists, and meal prep guidance. 
                  Track what you actually eat, log body metrics, note energy and mood levels. Platform analyzes this feedback 
                  to understand what works for your body and refines future recommendations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                    4
                  </div>
                  <CardTitle className="text-xl">Progress Analysis & Optimization</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Weekly reports show nutrition trends, goal progress, body changes, and pattern insights. Visual dashboards 
                  make it easy to see what's working. AI identifies optimization opportunities and suggests adjustments. 
                  Continuous feedback loop improves recommendations over time.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Technology & Systems */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Technology & Architecture</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-primary/20">
              <CardHeader>
                <Brain className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Nutrition AI Engine</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Machine learning models trained on nutritional science, recipe databases, dietary patterns, and health outcomes. 
                  Generates meal plans optimized for multiple constraints: nutritional targets, taste preferences, cooking complexity, 
                  cost, and ingredient availability.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Multi-objective optimization</li>
                  <li>• Preference learning algorithms</li>
                  <li>• Nutritional database integration</li>
                  <li>• Continuous model refinement</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <Database className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Recipe Intelligence System</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Comprehensive recipe database with detailed nutritional analysis, ingredient specifications, preparation 
                  instructions, and manufacturing parameters. Standardized formats enable both home cooking guidance and 
                  industrial production planning.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 10,000+ analyzed recipes</li>
                  <li>• Detailed macro/micronutrient data</li>
                  <li>• Manufacturing process specs</li>
                  <li>• Quality control parameters</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <Cpu className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Manufacturing Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  AI-driven production planning systems optimize manufacturing workflows, ingredient sourcing, batch scheduling, 
                  and quality assurance. Standardized processes ensure consistent results across production runs while maintaining 
                  nutritional targets and taste profiles.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Automated batch planning</li>
                  <li>• Quality control systems</li>
                  <li>• Supply chain optimization</li>
                  <li>• Production efficiency analytics</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <BarChart3 className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Analytics & Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Comprehensive tracking of nutritional intake, body metrics, progress towards goals, and pattern analysis. 
                  Visual dashboards present complex nutrition data in intuitive, actionable formats that help users understand 
                  what's working and what needs adjustment.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Daily nutrition tracking</li>
                  <li>• Body metrics visualization</li>
                  <li>• Goal progress monitoring</li>
                  <li>• Pattern correlation analysis</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Key Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Key Features & Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-primary/20">
              <CardHeader>
                <Utensils className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Personalized Daily Menus</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Custom meal plans and recipes generated daily based on your goals, preferences, dietary restrictions, and 
                  current progress. Each recommendation includes detailed nutritional breakdown, shopping lists, and step-by-step 
                  cooking instructions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <Target className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Goal-Aligned Planning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Every meal recommendation aligns with your specific objectives: weight loss, muscle gain, energy optimization, 
                  disease management, athletic performance, or general wellness. Macronutrient targets, calorie ranges, and 
                  micronutrient priorities automatically adjusted.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <BarChart3 className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Visual Progress Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Clear, intuitive dashboards showing nutrition trends, body composition changes, energy levels, and goal progress. 
                  Correlation analysis reveals how specific foods and eating patterns affect your individual outcomes.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <Apple className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Smart Food Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Analyze what you eat and understand how it affects your body. Track macros, micros, meal timing, and portion 
                  sizes. AI identifies patterns connecting food choices to energy, mood, recovery, and progress.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <Calendar className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Weekly Reports</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Comprehensive weekly summaries showing nutritional achievements, body changes, adherence patterns, and optimization 
                  opportunities. Clear visualizations make complex nutrition data understandable and actionable.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <ShoppingCart className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Grocery Integration (Future)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Planned integration with grocery delivery services enabling one-click shopping for recommended meals. Ingredient 
                  lists automatically converted to orders with smart substitutions, price optimization, and delivery scheduling.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Operational Model */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Operational Model</h2>
          <Card className="border-primary/20">
            <CardContent className="pt-8 space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-3">Consumer Platform (Current)</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Individual users access DishCore through web and mobile applications. Subscription-based service provides 
                  unlimited meal planning, recipe access, tracking tools, and weekly reports. Users set their goals, input 
                  preferences, and receive daily customized meal plans. System learns from usage patterns and refines recommendations continuously.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Manufacturing Intelligence (Development)</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Same AI recipe engine that powers consumer meal planning drives standardized food manufacturing. Recipes 
                  converted into production specifications with precise ingredient quantities, processing parameters, quality 
                  control checkpoints, and nutritional verification. Enables consistent, repeatable production of optimized meals 
                  at scale for ready-meal programs, meal kit services, and institutional food providers.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">B2B Partnerships (Future)</h3>
                <p className="text-muted-foreground leading-relaxed">
                  White-label nutrition intelligence for wellness programs, fitness centers, healthcare providers, and corporate 
                  wellness initiatives. Custom meal production services for retailers, wellness brands, and food service operations 
                  seeking data-optimized, nutrition-forward products.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Who It Serves */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Who It Serves</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle>Health-Conscious Individuals</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  People seeking to optimize nutrition for specific goals: weight management, athletic performance, disease 
                  prevention, energy optimization, or general wellness. Individuals tired of generic diet plans that don't 
                  account for personal preferences and daily realities.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle>Busy Families</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Parents managing household nutrition who need simple, practical meal planning that accommodates different 
                  family member preferences, dietary restrictions, and busy schedules. Systems that reduce daily decision fatigue 
                  around what to eat.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle>Athletes & Fitness Enthusiasts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Serious athletes and fitness-focused individuals requiring precise nutrition aligned with training programs, 
                  performance goals, and recovery needs. People who understand nutrition matters but lack time or expertise 
                  for detailed meal planning.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle>Food Industry Partners (Future)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Meal kit companies, ready-meal manufacturers, wellness brands, corporate cafeterias, and food service operators 
                  seeking data-driven recipe development, nutrition optimization, and manufacturing intelligence for health-forward 
                  product lines.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Market Context */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Market Context</h2>
          <Card className="border-primary/20">
            <CardContent className="pt-8 space-y-4">
              <p className="text-lg leading-relaxed">
                Nutrition is one of the most influential factors in health outcomes, yet most people struggle with consistent 
                healthy eating. Generic diet plans fail because they ignore individual preferences, practical constraints, and 
                personal biology. Meal planning apps provide recipes but lack intelligent guidance. Food manufacturers produce 
                at scale but rarely optimize for nutrition and rarely personalize for individual needs.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The personalized nutrition market is growing rapidly as consumers recognize that one-size-fits-all dietary 
                recommendations don't work. Wearables and health tracking apps generate body data, genetic testing reveals 
                metabolic differences, yet few tools actually translate this information into practical daily meal guidance. 
                Meanwhile, the ready-meal and meal kit markets exceed $20 billion annually but most products lack true nutritional 
                optimization and personalization capabilities.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                DishCore addresses both sides: helping individuals eat better through intelligent personal guidance while building 
                infrastructure for data-optimized food manufacturing. The platform bridges the gap between nutrition science and 
                daily eating reality, making healthy food both personally tailored and systematically producible.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* What Makes This Unique */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">What Makes DishCore Unique</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-primary/20">
              <CardHeader>
                <Cpu className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Dual Intelligence Layer</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Same AI engine powers both personal nutrition guidance and manufacturing intelligence. Consumer insights improve 
                  product development; manufacturing data enhances personalization. Virtuous cycle between individual users and 
                  systematic production impossible for pure meal-planning apps or traditional food manufacturers.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <Heart className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Health Ecosystem Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Built within Digital Invest's health platform ecosystem, enabling nutrition recommendations informed by BioMath 
                  Core health data, activity tracking, and biometric monitoring. Food choices optimized based on personal biology 
                  rather than generic population averages.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <Target className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Practical First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Recommendations designed for real life, not theoretical perfection. System accounts for time constraints, 
                  budget limits, cooking skill levels, ingredient availability, and family preferences. Sustainable healthy 
                  eating rather than unsustainable extreme diets.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <Scale className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Manufacturing Scalability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Recipe intelligence system designed from start for both home cooking and industrial production. Standardized 
                  specifications enable repeatable manufacturing. Quality control parameters ensure consistent nutritional and 
                  taste outcomes across production volumes.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Long-Term Vision */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Long-Term Vision</h2>
          <Card className="border-primary/20">
            <CardContent className="pt-8 space-y-4">
              <p className="text-lg leading-relaxed">
                DishCore aims to become the intelligence layer powering personalized nutrition at scale - both for individuals 
                planning daily meals and food manufacturers producing optimized products. The 5-10 year vision encompasses expanding 
                from meal planning guidance to full-stack food intelligence: from recipe development through manufacturing to 
                consumer delivery.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Consumer platform will evolve to include automated grocery ordering, smart kitchen integration, meal prep 
                services, and direct connection to DishCore-optimized ready meals and ingredients. Integration with smart home 
                systems enables seamless coordination between meal planning, grocery inventory, cooking equipment, and nutritional 
                tracking.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Manufacturing intelligence will expand to serve wellness brands, meal kit services, institutional food providers, 
                and health-focused retailers seeking data-optimized products. The system will enable true mass personalization: 
                large-scale production of nutrition-optimized meals that maintain individual customization through modular 
                manufacturing, variable formulation, and intelligent batch planning. Goal is making healthy, personalized food 
                as accessible and affordable as generic processed products.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Current Stage & Roadmap */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Current Stage & Roadmap</h2>
          <div className="space-y-6">
            <Card className="border-primary/20 bg-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="w-6 h-6" />
                  Current Stage
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Core meal planning platform operational with AI recipe engine, personalized meal generation, tracking tools, 
                  and analytics dashboards functional. Active user base testing platform across various nutrition goals and 
                  dietary preferences. Refining recommendation algorithms based on user feedback and outcome data. Manufacturing 
                  intelligence system in development phase.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="w-6 h-6" />
                  Next 12 Months
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Launch mobile applications for iOS and Android</li>
                  <li>• Deploy grocery integration for automated shopping list conversion</li>
                  <li>• Expand recipe database to 25,000+ analyzed recipes</li>
                  <li>• Release API for third-party wellness app integration</li>
                  <li>• Complete manufacturing optimization system for pilot production facility</li>
                  <li>• Establish partnerships with meal kit and ready-meal companies</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Rocket className="w-6 h-6" />
                  18-36 Months
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Launch DishCore-branded ready meal production line</li>
                  <li>• Deploy smart kitchen integration for automated cooking guidance</li>
                  <li>• Expand B2B services for corporate wellness and institutional food programs</li>
                  <li>• Build white-label nutrition platform for wellness brands and retailers</li>
                  <li>• Integrate with BioMath Core for biology-informed nutrition recommendations</li>
                  <li>• Establish regional manufacturing facilities for scaled production</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Important Notice */}
        <Card className="mb-16 border-primary/20 bg-muted/20">
          <CardContent className="pt-8">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <AlertCircle className="w-6 h-6 text-primary" />
              Important Notice
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              DishCore is a nutrition planning and food intelligence platform providing educational information and meal 
              recommendations. The system does not provide medical nutrition therapy, diagnose health conditions, or replace 
              professional dietary counseling. All recommendations are for informational purposes. Users with medical conditions, 
              dietary restrictions, or specific health concerns should consult qualified healthcare professionals and registered 
              dietitians before making significant dietary changes.
            </p>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <Card className="bg-gradient-tech text-primary-foreground border-0 mb-16">
          <CardContent className="py-12 text-center">
            <Utensils className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Learn More About DishCore</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Discover how DishCore transforms nutrition and food production through intelligent systems
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link to="/start-investing">
                <Button size="lg" variant="secondary">
                  Request Information
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <DownloadInvestorBriefButton projectSlug="dishcore" size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10" />
            </div>
          </CardContent>
        </Card>

        {/* Legal Disclaimer */}
        <div className="mt-16">
          <InvestorPageDisclaimer />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DishCore;