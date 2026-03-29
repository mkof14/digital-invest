// App entry
import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import ScrollToTop from "@/components/ScrollToTop";
import CookieConsent from './components/CookieConsent';
import { Loader2 } from "lucide-react";

// Critical path — loaded eagerly
import Index from "./pages/Index";

// Lazy-loaded pages for code splitting
const Platform = lazy(() => import("./pages/Platform"));
const Services = lazy(() => import("./pages/Services"));
const Recognition = lazy(() => import("./pages/Recognition"));
const Partnerships = lazy(() => import("./pages/Partnerships"));
const StartInvesting = lazy(() => import("./pages/StartInvesting"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const Cookies = lazy(() => import("./pages/Cookies"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Projects = lazy(() => import("./pages/Projects"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));
const HowItWorks = lazy(() => import("./pages/HowItWorks"));
const Contact = lazy(() => import("./pages/Contact"));
const News = lazy(() => import("./pages/News"));
const NewsDetail = lazy(() => import("./pages/NewsDetail"));
const TeamPage = lazy(() => import("./pages/TeamPage"));
const TermsOfUse = lazy(() => import("./pages/Legal/TermsOfUse"));
const PrivacyPolicy = lazy(() => import("./pages/Legal/PrivacyPolicy"));
const RiskDisclosure = lazy(() => import("./pages/Legal/RiskDisclosure"));
const Auth = lazy(() => import("./pages/Auth"));
const InvestorAuth = lazy(() => import("./pages/InvestorAuth"));
const AdminLayout = lazy(() => import("./pages/Admin/AdminLayout"));
const AdminDashboard = lazy(() => import("./pages/Admin/AdminDashboard"));
const AdminProjects = lazy(() => import("./pages/Admin/AdminProjects"));
const AdminLeads = lazy(() => import("./pages/Admin/AdminLeads"));
const AdminHandbookDownloads = lazy(() => import("./pages/Admin/AdminHandbookDownloads"));
const AdminUsers = lazy(() => import("./pages/Admin/AdminUsers"));
const AdminSiteSections = lazy(() => import("./pages/Admin/AdminSiteSections"));
const AdminSetup = lazy(() => import("./pages/Admin/AdminSetup"));
const AdminTeam = lazy(() => import("./pages/Admin/AdminTeam"));
const AdminNews = lazy(() => import("./pages/Admin/AdminNews"));
const AdminEmailTemplates = lazy(() => import("./pages/Admin/AdminEmailTemplates"));
const AdminSocialMedia = lazy(() => import("./pages/Admin/AdminSocialMedia"));
const AdminContent = lazy(() => import("./pages/Admin/AdminContent"));
const AdminConsultations = lazy(() => import("./pages/Admin/AdminConsultations"));
const AdminAvailability = lazy(() => import("./pages/Admin/AdminAvailability"));
const AdminSitemap = lazy(() => import("./pages/Admin/AdminSitemap"));
const AdminLaunchChecklist = lazy(() => import("./pages/Admin/AdminLaunchChecklist"));
const WhyDigitalInvest = lazy(() => import("./pages/WhyDigitalInvest"));
const ForInvestors = lazy(() => import("./pages/ForInvestors"));
const InvestorDocuments = lazy(() => import("./pages/InvestorDocuments"));
const Glossary = lazy(() => import("./pages/Glossary"));
const DocumentLibrary = lazy(() => import("./pages/DocumentLibrary"));
const About = lazy(() => import("./pages/About"));
const Demo = lazy(() => import("./pages/Demo"));
const Compliance = lazy(() => import("./pages/Compliance"));
const RiskFactors = lazy(() => import("./pages/RiskFactors"));
const Security = lazy(() => import("./pages/Security"));
const Governance = lazy(() => import("./pages/Governance"));
const ESG = lazy(() => import("./pages/ESG"));
const Values = lazy(() => import("./pages/Values"));
const PressCenter = lazy(() => import("./pages/PressCenter"));
const MediaKit = lazy(() => import("./pages/MediaKit"));
const Careers = lazy(() => import("./pages/Careers"));
const InternalDocuments = lazy(() => import("./pages/InternalDocuments"));
const API = lazy(() => import("./pages/API"));
const Infrastructure = lazy(() => import("./pages/Infrastructure"));
const InvestorHandbook = lazy(() => import("./pages/InvestorHandbook"));
const Schedule = lazy(() => import('./pages/Schedule'));
const LegalOverview = lazy(() => import('./pages/LegalOverview'));
const PortfolioOverview = lazy(() => import('./pages/PortfolioOverview'));
const AdamasMaterialsOverview = lazy(() => import('./pages/AdamasMaterials'));
const AdamasProjectDetail = lazy(() => import('./pages/AdamasMaterials/AdamasProjectDetail'));
const AbuMall = lazy(() => import('./pages/AdamasMaterials/AbuMall'));

// Legacy project routes
const BioMathLife = lazy(() => import("./pages/Projects/BioMathLife"));
const BioMathCore = lazy(() => import("./pages/Projects/BioMathCore"));
const TerraAero = lazy(() => import("./pages/Projects/TerraAero"));
const DigitalInvest = lazy(() => import("./pages/Projects/DigitalInvest"));
const MyDay = lazy(() => import("./pages/Projects/MyDay"));
const ItsGoodToday = lazy(() => import("./pages/Projects/ItsGoodToday"));
const AGRON = lazy(() => import("./pages/Projects/AGRON"));
const AGRONWork = lazy(() => import("./pages/Projects/AGRONWork"));
const LunaBalance = lazy(() => import("./pages/Projects/LunaBalance"));
const StressCore = lazy(() => import("./pages/Projects/StressCore"));
const VitalCore = lazy(() => import("./pages/Projects/VitalCore"));
const BioAgeCore = lazy(() => import("./pages/Projects/BioAgeCore"));
const LongevityCore = lazy(() => import("./pages/Projects/LongevityCore"));
const FamilyCore = lazy(() => import("./pages/Projects/FamilyCore"));
const SeniorCore = lazy(() => import("./pages/Projects/SeniorCore"));
const SkinCore = lazy(() => import("./pages/Projects/SkinCore"));
const MRXHealth = lazy(() => import("./pages/Projects/MRXHealth"));
const TableServed = lazy(() => import("./pages/Projects/TableServed"));
const BaseLine = lazy(() => import("./pages/Projects/BaseLine"));
const SAVEN = lazy(() => import("./pages/Projects/SAVEN"));

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <Loader2 className="h-10 w-10 animate-spin text-primary" />
  </div>
);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes cache
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="dark" storageKey="digital-invest-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <CookieConsent />
        <BrowserRouter>
          <ScrollToTop />
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/platform" element={<Platform />} />
              <Route path="/services" element={<Services />} />
              <Route path="/team" element={<TeamPage />} />
              <Route path="/team-members" element={<TeamPage />} />
              <Route path="/recognition" element={<Recognition />} />
              <Route path="/partnerships" element={<Partnerships />} />
              <Route path="/start-investing" element={<StartInvesting />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/cookies" element={<Cookies />} />
              
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:slug" element={<ProjectDetail />} />
              <Route path="/how-it-works" element={<HowItWorks />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/news" element={<News />} />
              <Route path="/news/:slug" element={<NewsDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/why-digital-invest" element={<WhyDigitalInvest />} />
              <Route path="/for-investors" element={<ForInvestors />} />
              <Route path="/investor-documents" element={<InvestorDocuments />} />
              <Route path="/demo" element={<Demo />} />
              
              <Route path="/compliance" element={<Compliance />} />
              <Route path="/risk-factors" element={<RiskFactors />} />
              <Route path="/security" element={<Security />} />
              <Route path="/governance" element={<Governance />} />
              <Route path="/esg" element={<ESG />} />
              <Route path="/values" element={<Values />} />
              <Route path="/press-center" element={<PressCenter />} />
              <Route path="/media-kit" element={<MediaKit />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/internal-documents" element={<InternalDocuments />} />
              <Route path="/api" element={<API />} />
              <Route path="/infrastructure" element={<Infrastructure />} />
              <Route path="/investor-handbook" element={<InvestorHandbook />} />
              <Route path="/glossary" element={<Glossary />} />
              <Route path="/document-library" element={<DocumentLibrary />} />
              <Route path="/overview" element={<PortfolioOverview />} />
              
              <Route path="/legal-overview" element={<LegalOverview />} />
              <Route path="/legal/terms" element={<TermsOfUse />} />
              <Route path="/legal/privacy" element={<PrivacyPolicy />} />
              <Route path="/legal/risk-disclosure" element={<RiskDisclosure />} />
              
              <Route path="/auth" element={<Auth />} />
              <Route path="/investor-auth" element={<InvestorAuth />} />
              
              <Route path="/admin/setup" element={<AdminSetup />} />
              
              <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<AdminDashboard />} />
                <Route path="projects" element={<AdminProjects />} />
                <Route path="leads" element={<AdminLeads />} />
                <Route path="handbook-downloads" element={<AdminHandbookDownloads />} />
                <Route path="users" element={<AdminUsers />} />
                <Route path="site-sections" element={<AdminSiteSections />} />
                <Route path="team" element={<AdminTeam />} />
                <Route path="news" element={<AdminNews />} />
                <Route path="email-templates" element={<AdminEmailTemplates />} />
                <Route path="social-media" element={<AdminSocialMedia />} />
                <Route path="content" element={<AdminContent />} />
                <Route path="consultations" element={<AdminConsultations />} />
                <Route path="availability" element={<AdminAvailability />} />
                <Route path="sitemap" element={<AdminSitemap />} />
                <Route path="launch-checklist" element={<AdminLaunchChecklist />} />
              </Route>
              
              {/* Legacy Project Routes */}
              <Route path="/projects/biomathlife" element={<BioMathLife />} />
              <Route path="/projects/biomathcore" element={<BioMathCore />} />
              <Route path="/projects/biomath-core" element={<BioMathCore />} />
              <Route path="/projects/terraaero" element={<TerraAero />} />
              <Route path="/projects/digital-invest" element={<DigitalInvest />} />
              <Route path="/projects/myday" element={<MyDay />} />
              <Route path="/projects/itsgoodtoday" element={<ItsGoodToday />} />
              <Route path="/projects/agron" element={<AGRON />} />
              <Route path="/projects/luna-balance" element={<LunaBalance />} />
              <Route path="/projects/agron-work" element={<AGRONWork />} />
              <Route path="/projects/stresscore" element={<StressCore />} />
              <Route path="/projects/vitalcore" element={<VitalCore />} />
              <Route path="/projects/bioagecore" element={<BioAgeCore />} />
              <Route path="/projects/longevitycore" element={<LongevityCore />} />
              <Route path="/projects/familycore" element={<FamilyCore />} />
              <Route path="/projects/seniorcore" element={<SeniorCore />} />
              <Route path="/projects/skincore" element={<SkinCore />} />
              <Route path="/projects/mrx-health" element={<MRXHealth />} />
              <Route path="/projects/table-served" element={<TableServed />} />
              <Route path="/projects/baseline" element={<BaseLine />} />
              <Route path="/projects/saven" element={<SAVEN />} />
              
              {/* Adamas Materials Projects */}
              <Route path="/adamas" element={<AdamasMaterialsOverview />} />
              <Route path="/adamas/agron-net" element={<AGRON />} />
              <Route path="/adamas/agron-work" element={<AGRONWork />} />
              <Route path="/adamas/:slug" element={<AdamasProjectDetail />} />
              
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
