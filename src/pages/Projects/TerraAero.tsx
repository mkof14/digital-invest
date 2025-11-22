import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Droplets, Wheat, BarChart3, Package, Zap, MapPin, Users, Globe, Factory, Rocket, AlertCircle, Layers, Activity } from "lucide-react";
import { Link } from "react-router-dom";
import terraaeroLogo from "@/assets/terraaero-logo.png";
import terraaeroHero from "@/assets/projects/terraaero-hero.jpg";
import DownloadInvestorBriefButton from "@/components/DownloadInvestorBriefButton";
import OptimizedImage from "@/components/OptimizedImage";
import InvestorPageDisclaimer from "@/components/InvestorPageDisclaimer";

const TerraAero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="relative py-32 -mx-4 px-4 overflow-hidden mb-16">
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url(${terraaeroHero})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/90 to-background/70" />
          </div>

          <div className="relative z-10 max-w-4xl">
            <div className="flex items-center gap-6 mb-8">
              <OptimizedImage 
                src={terraaeroLogo} 
                alt="TerraAero logo" 
                className="w-20 h-20 md:w-24 md:h-24 object-contain"
                showSkeleton={false}
              />
              <div>
                <Badge className="mb-4">AgroTech & Drone Manufacturing</Badge>
                <h1 className="text-4xl md:text-6xl font-bold">
                  TerraAero
                </h1>
              </div>
            </div>
            <p className="text-2xl text-foreground mb-4">
              Precision Agriculture and Autonomous Logistics Through Advanced Drone Technology
            </p>
            <p className="text-xl text-muted-foreground max-w-3xl mb-8">
              TerraAero develops and operates autonomous drone systems for agricultural monitoring, precision crop management, 
              and intelligent logistics. Combining aerospace engineering with AI-driven analytics and building towards U.S.-based 
              drone manufacturing capabilities.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link to="/start-investing">
                <Button size="lg">
                  Request Information
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <DownloadInvestorBriefButton projectSlug="terraaero" size="lg" />
            </div>
          </div>
        </section>

        {/* Executive Summary */}
        <section className="mb-16">
          <Card className="border-primary/20">
            <CardContent className="pt-8 space-y-4">
              <h2 className="text-3xl font-bold mb-4">Overview</h2>
              <p className="text-lg leading-relaxed">
                TerraAero combines autonomous aerospace systems with artificial intelligence to deliver scalable solutions for 
                modern agriculture and logistics. The project operates commercial drone services across the Southern United States 
                while developing in-house manufacturing capabilities for custom-designed agricultural and delivery aircraft.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Current operations include precision crop spraying, fertilization, field analytics, irrigation monitoring, and 
                logistics delivery across multiple states. The long-term roadmap encompasses U.S.-based drone manufacturing, 
                expanded multi-state operations, and vertical integration from technology production to field deployment.
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
                <Wheat className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Precision Agriculture</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Transform agricultural operations through autonomous drone technology that delivers precision monitoring, 
                  resource optimization, and data-driven decision support for farmers and agricultural enterprises.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <Package className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Intelligent Logistics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Enable rapid, efficient delivery through autonomous drone systems that reduce transit times, operating costs, 
                  and environmental impact compared to traditional ground-based logistics.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <Factory className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Domestic Manufacturing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Develop U.S.-based drone manufacturing infrastructure to reduce supply chain dependencies, optimize aircraft 
                  design for specific operational environments, and build vertical integration from production to deployment.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* How the Platform Works */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">How TerraAero Works</h2>
          <div className="space-y-6">
            <Card className="border-primary/20">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                    1
                  </div>
                  <CardTitle className="text-xl">Field Assessment & Planning</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Agricultural clients request services through online scheduling or direct contact. TerraAero agronomists review 
                  field conditions, crop types, treatment requirements, and operational constraints. Flight plans generated 
                  considering weather, crop stage, application timing, and regulatory requirements.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                    2
                  </div>
                  <CardTitle className="text-xl">Autonomous Flight Operations</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Licensed pilots deploy drone fleet (T30-T60 platforms) for precision spraying, fertilization, or monitoring 
                  operations. Onboard sensors capture multispectral imagery, thermal data, and topographic information while 
                  executing treatment applications with sub-meter accuracy. Real-time telemetry monitored throughout operations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                    3
                  </div>
                  <CardTitle className="text-xl">AI Analysis & Reporting</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Ground-based AI systems process captured data to generate actionable insights: crop stress detection, disease 
                  identification, irrigation needs assessment, yield forecasting, and treatment effectiveness analysis. Clients 
                  receive detailed reports with recommendations for follow-up actions, optimal treatment timing, and resource allocation.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                    4
                  </div>
                  <CardTitle className="text-xl">Continuous Monitoring & Optimization</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Subscription clients receive regular monitoring flights throughout growing season. Historical data builds 
                  comprehensive field profiles enabling predictive analytics, optimization recommendations, and early problem 
                  detection. Multi-year data tracks soil health evolution, treatment efficacy, and yield improvements.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Technology & Systems */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Technology & Systems</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-primary/20">
              <CardHeader>
                <Zap className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Agricultural Drone Fleet</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Custom-configured T30 and T60 platforms optimized for agricultural duty cycles. Onboard systems include 
                  precision spray controllers, multispectral cameras, thermal sensors, GPS guidance, and obstacle avoidance.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 10-40 liter tank capacity</li>
                  <li>• Sub-meter application accuracy</li>
                  <li>• 30-60 minute flight endurance</li>
                  <li>• Real-time telemetry systems</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <BarChart3 className="w-10 h-10 text-primary mb-2" />
                <CardTitle>AI Analytics Engine</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Machine learning models analyze multispectral imagery, thermal patterns, and historical data to detect crop 
                  stress, disease, nutrient deficiencies, and irrigation needs before visible symptoms appear.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Automated anomaly detection</li>
                  <li>• Predictive yield modeling</li>
                  <li>• Treatment recommendation engine</li>
                  <li>• Multi-season trend analysis</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <MapPin className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Operations Command Center</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Centralized flight operations management coordinating pilot scheduling, weather monitoring, regulatory 
                  compliance, equipment maintenance, and real-time fleet tracking across multiple operational regions.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Multi-state coordination</li>
                  <li>• Real-time weather integration</li>
                  <li>• Regulatory compliance tracking</li>
                  <li>• Equipment health monitoring</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <Package className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Delivery Systems</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Autonomous logistics platforms for restaurant food delivery, retail package transport, and express service. 
                  GPS-guided precision landing, secure payload containers, temperature control capabilities.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Up to 5kg payload capacity</li>
                  <li>• 10-30 minute delivery times</li>
                  <li>• Real-time tracking systems</li>
                  <li>• Secure confirmation protocols</li>
                </ul>
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
                <h3 className="text-xl font-bold mb-3">Service-Based Agriculture</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Farmers and agricultural enterprises subscribe to TerraAero services rather than purchasing drone equipment. 
                  Clients pay per-acre for spraying operations, per-flight for monitoring services, or monthly subscriptions for 
                  season-long coverage. This model eliminates capital expenditure requirements, ensures professional operations 
                  by licensed crews, and maintains consistent data quality through standardized procedures.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Crew Deployment Model</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Regional teams operate from strategic locations across coverage areas. Each crew includes FAA-licensed remote 
                  pilots, agricultural specialists, equipment technicians, and data analysts. Mobile operations enable rapid 
                  deployment to client sites. Equipment maintained centrally with standardized procedures and quality controls.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Logistics Integration</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Delivery operations integrate with restaurant and retail partner systems for automated order processing, route 
                  optimization, and real-time tracking. Customers receive notifications, track flights in real-time, and confirm 
                  secure deliveries. Partners access analytics on delivery performance, customer satisfaction, and operational efficiency.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Service Categories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Agricultural Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card className="border-primary/20">
              <CardHeader>
                <Droplets className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Precision Crop Treatment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Targeted application of pesticides, herbicides, fungicides, and growth regulators with GPS-guided precision. 
                  Variable rate application adjusts dosage based on crop density, terrain, and historical data. Reduces chemical 
                  usage by 20-40% compared to traditional methods while improving treatment effectiveness.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Sub-meter application accuracy</li>
                  <li>• Variable rate technology</li>
                  <li>• Real-time wind compensation</li>
                  <li>• Detailed coverage mapping</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <Wheat className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Field Analytics & Monitoring</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Regular aerial surveys capture multispectral and thermal imagery for crop health assessment. AI analysis 
                  detects stress, disease, nutrient deficiencies, and irrigation problems before visible symptoms appear. 
                  Generates actionable reports with treatment recommendations and priority mapping.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• NDVI vegetation health mapping</li>
                  <li>• Thermal stress detection</li>
                  <li>• Disease outbreak identification</li>
                  <li>• Yield forecasting models</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <Droplets className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Irrigation Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Aerial monitoring identifies irrigation system issues, water distribution problems, and field drainage concerns. 
                  Soil moisture modeling combined with weather forecasts generates precision irrigation recommendations that 
                  optimize water usage and crop health.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Water stress mapping</li>
                  <li>• System performance analysis</li>
                  <li>• Drainage problem detection</li>
                  <li>• Smart irrigation scheduling</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <BarChart3 className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Season-Long Intelligence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Subscription monitoring throughout growing season builds comprehensive field profiles. Multi-year historical 
                  data enables predictive analytics, treatment effectiveness tracking, soil health evolution monitoring, and 
                  continuous optimization recommendations.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Historical trend analysis</li>
                  <li>• Yield prediction modeling</li>
                  <li>• Treatment efficacy tracking</li>
                  <li>• ROI optimization insights</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Who It Serves */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Who It Serves</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle>Commercial Farms</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Mid-to-large scale farming operations (500+ acres) growing row crops, specialty crops, vineyards, and orchards. 
                  Farms seeking precision agriculture capabilities without capital investment in drone equipment and specialized training.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle>Agricultural Cooperatives</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Grower cooperatives and agricultural service providers offering precision services to member farms. Organizations 
                  seeking scalable technology partnerships that enhance their service portfolios and member value.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle>Food & Restaurant Partners</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Restaurants, ghost kitchens, and food delivery platforms seeking fast, reliable, low-cost delivery options 
                  that maintain food quality and reduce delivery times compared to traditional ground-based services.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle>Retail & E-Commerce</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Local retailers, pharmacies, and e-commerce fulfillment centers requiring rapid last-mile delivery for urgent 
                  or premium shipments. Businesses differentiating through speed and service quality.
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
                Modern agriculture faces mounting pressure to increase productivity while reducing environmental impact, managing 
                rising labor costs, and adapting to climate variability. Traditional farming methods struggle to deliver the 
                precision, efficiency, and data-driven decision making required in contemporary agricultural markets.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Drone technology has moved from experimental to essential for commercial agriculture. The global agricultural 
                drone market is projected to reach $5.7 billion by 2028 as precision farming becomes standard practice. However, 
                most farms lack the capital, expertise, and infrastructure to operate drone programs independently, creating demand 
                for professional service providers.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Simultaneously, logistics and last-mile delivery costs continue rising while customer expectations for speed 
                increase. Autonomous drone delivery offers potential 60-80% cost reduction compared to vehicle-based delivery 
                for short-range urban and suburban routes. Regulatory frameworks are maturing, expanding operational possibilities 
                for commercial drone services across both agriculture and logistics sectors.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* What Makes This Unique */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">What Makes TerraAero Unique</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-primary/20">
              <CardHeader>
                <Layers className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Full-Stack Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Unlike equipment manufacturers or pure software companies, TerraAero controls the entire value chain: aircraft 
                  operation, data collection, AI analysis, and customer-facing insights. This integration enables continuous 
                  optimization impossible when components are fragmented across vendors.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <Factory className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Manufacturing Roadmap</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Building towards U.S.-based drone manufacturing creates vertical integration from technology production to field 
                  operations. Custom-designed aircraft optimized specifically for agricultural and logistics duty cycles rather 
                  than adapting general-purpose consumer drones.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <Users className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Professional Operations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Trained crews with agricultural expertise, not just drone pilots. Team includes agronomists who understand 
                  crop science, data analysts who extract actionable insights, and licensed pilots who ensure safe, compliant operations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <BarChart3 className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Multi-Sector Platform</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Shared technology and operational infrastructure serves both agriculture and logistics sectors. Diversified 
                  revenue streams, shared development costs, and cross-sector learning create resilience and operational leverage.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Geographic Expansion */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">23-State Expansion Plan</h2>
          <Card className="border-primary/20">
            <CardContent className="pt-8 space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-primary" />
                  Phase 1: Southern Operations (Current)
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Active operations in North Carolina, South Carolina, Georgia, and Florida. Established regional crews, local 
                  partnerships, and operational infrastructure. Coverage includes row crops, specialty agriculture, and suburban 
                  logistics corridors.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-primary" />
                  Phase 2: Regional Expansion (12-24 Months)
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Expand into Alabama, Tennessee, Louisiana, Mississippi, Arkansas, Texas, and Oklahoma. Target high-value 
                  agricultural regions with strong demand for precision services. Establish additional operational bases and 
                  regional partnerships. Scale crew hiring and training programs.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-primary" />
                  Phase 3: National Coverage (24-48 Months)
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Complete build-out to 23 states covering major agricultural production regions and urban logistics markets. 
                  Deploy manufacturing facilities producing custom TerraAero aircraft optimized for North American operating 
                  conditions. Establish national operations command infrastructure coordinating multi-state fleet management.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Long-Term Vision */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Long-Term Vision</h2>
          <Card className="border-primary/20">
            <CardContent className="pt-8 space-y-4">
              <p className="text-lg leading-relaxed">
                TerraAero envisions becoming the premier autonomous aerial services company serving North American agriculture 
                and logistics markets. The 5-10 year roadmap focuses on three strategic pillars: expanding geographic coverage 
                to 23 states, developing domestic manufacturing capabilities for proprietary aircraft, and building the most 
                comprehensive agricultural intelligence database in the industry.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Manufacturing capabilities will enable custom aircraft optimized for specific operational environments: heavy-duty 
                spray systems for row crops, high-endurance monitoring platforms for large farms, temperature-controlled delivery 
                pods for food logistics, and rapid-response systems for time-sensitive operations. Vertical integration from 
                component production through field operations creates defensible competitive advantages.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The agricultural intelligence platform will become increasingly valuable as multi-year datasets enable predictive 
                modeling, optimization recommendations, and industry insights impossible for individual farms to generate. This 
                data infrastructure positions TerraAero as both an operational services company and an agricultural intelligence provider.
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
                  Active commercial operations in four Southern states with established customer base and operational infrastructure. 
                  Fleet of T30-T60 platforms performing spraying, monitoring, and delivery services. Licensed pilot teams, ground 
                  crew, and analytics support operational. Revenue-generating services with established pricing models and client contracts.
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
                  <li>• Expand operations into 3-4 additional Southern states</li>
                  <li>• Scale fleet to 25+ operational aircraft</li>
                  <li>• Launch subscription monitoring services for season-long contracts</li>
                  <li>• Deploy enhanced AI analytics platform for predictive insights</li>
                  <li>• Establish partnerships with agricultural cooperatives and service providers</li>
                  <li>• Begin manufacturing feasibility studies and facility site selection</li>
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
                  <li>• Commence U.S.-based drone manufacturing operations</li>
                  <li>• Deploy first custom-designed TerraAero agricultural platforms</li>
                  <li>• Expand coverage to 15+ states across multiple agricultural regions</li>
                  <li>• Launch advanced logistics services in major metropolitan areas</li>
                  <li>• Build national operations command center coordinating multi-state fleet</li>
                  <li>• Establish research partnerships leveraging agricultural intelligence database</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <Card className="bg-gradient-tech text-primary-foreground border-0 mb-16">
          <CardContent className="py-12 text-center">
            <Wheat className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Learn More About TerraAero</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Discover how TerraAero is transforming agriculture and logistics through autonomous drone technology
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link to="/start-investing">
                <Button size="lg" variant="secondary">
                  Request Information
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <DownloadInvestorBriefButton projectSlug="terraaero" size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10" />
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

export default TerraAero;