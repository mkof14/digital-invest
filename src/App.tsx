import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import Platform from "./pages/Platform";
import Services from "./pages/Services";
import Team from "./pages/Team";
import Recognition from "./pages/Recognition";
import Partnerships from "./pages/Partnerships";
import StartInvesting from "./pages/StartInvesting";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Cookies from "./pages/Cookies";
import NotFound from "./pages/NotFound";
import BioMathLife from "./pages/Projects/BioMathLife";
import BioMathCore from "./pages/Projects/BioMathCore";
import TerraAero from "./pages/Projects/TerraAero";
import DigitalInvest from "./pages/Projects/DigitalInvest";
import DishCore from "./pages/Projects/DishCore";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import HowItWorks from "./pages/HowItWorks";
import Contact from "./pages/Contact";
import News from "./pages/News";
import NewsDetail from "./pages/NewsDetail";
import TeamPage from "./pages/TeamPage";
import TermsOfUse from "./pages/Legal/TermsOfUse";
import PrivacyPolicy from "./pages/Legal/PrivacyPolicy";
import RiskDisclosure from "./pages/Legal/RiskDisclosure";
import Auth from "./pages/Auth";
import AdminLayout from "./pages/Admin/AdminLayout";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import AdminProjects from "./pages/Admin/AdminProjects";
import AdminLeads from "./pages/Admin/AdminLeads";
import AdminHandbookDownloads from "./pages/Admin/AdminHandbookDownloads";
import AdminUsers from "./pages/Admin/AdminUsers";
import AdminSiteSections from "./pages/Admin/AdminSiteSections";
import AdminSetup from "./pages/Admin/AdminSetup";
import AdminTeam from "./pages/Admin/AdminTeam";
import AdminNews from "./pages/Admin/AdminNews";
import AdminEmailTemplates from "./pages/Admin/AdminEmailTemplates";
import AdminSocialMedia from "./pages/Admin/AdminSocialMedia";
import AdminContent from "./pages/Admin/AdminContent";
import AdminConsultations from "./pages/Admin/AdminConsultations";
import AdminAvailability from "./pages/Admin/AdminAvailability";
import AdminSitemap from "./pages/Admin/AdminSitemap";
import AdminLaunchChecklist from "./pages/Admin/AdminLaunchChecklist";
import WhyDigitalInvest from "./pages/WhyDigitalInvest";
import ForInvestors from "./pages/ForInvestors";
import InvestorDocuments from "./pages/InvestorDocuments";
import About from "./pages/About";
import Demo from "./pages/Demo";
import Compliance from "./pages/Compliance";
import RiskFactors from "./pages/RiskFactors";
import Security from "./pages/Security";
import Governance from "./pages/Governance";
import ESG from "./pages/ESG";
import Values from "./pages/Values";
import PressCenter from "./pages/PressCenter";
import MediaKit from "./pages/MediaKit";
import Careers from "./pages/Careers";
import InternalDocuments from "./pages/InternalDocuments";
import API from "./pages/API";
import Infrastructure from "./pages/Infrastructure";
import InvestorHandbook from "./pages/InvestorHandbook";
import Schedule from './pages/Schedule';
import LegalOverview from './pages/LegalOverview';
import CookieConsent from './components/CookieConsent';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="dark" storageKey="digital-invest-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <CookieConsent />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/platform" element={<Platform />} />
            <Route path="/services" element={<Services />} />
            <Route path="/team" element={<Team />} />
            <Route path="/recognition" element={<Recognition />} />
            <Route path="/partnerships" element={<Partnerships />} />
          <Route path="/start-investing" element={<StartInvesting />} />
          <Route path="/schedule" element={<Schedule />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/cookies" element={<Cookies />} />
            
            {/* Dynamic Platform Routes */}
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:slug" element={<NewsDetail />} />
            <Route path="/team-members" element={<TeamPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/why-digital-invest" element={<WhyDigitalInvest />} />
            <Route path="/for-investors" element={<ForInvestors />} />
            <Route path="/investor-documents" element={<InvestorDocuments />} />
            <Route path="/demo" element={<Demo />} />
            
            {/* Financial & Professional Pages */}
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
            
            {/* Legal Routes */}
            <Route path="/legal-overview" element={<LegalOverview />} />
            <Route path="/legal/terms" element={<TermsOfUse />} />
            <Route path="/legal/privacy" element={<PrivacyPolicy />} />
            <Route path="/legal/risk-disclosure" element={<RiskDisclosure />} />
            
            {/* Auth */}
            <Route path="/auth" element={<Auth />} />
            
            {/* Admin Setup (outside AdminLayout - no role required) */}
            <Route path="/admin/setup" element={<AdminSetup />} />
            
            {/* Admin Routes */}
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
            
            {/* Legacy Project Routes (keep for backwards compatibility) */}
            <Route path="/projects/biomathlife" element={<BioMathLife />} />
            <Route path="/projects/biomathcore" element={<BioMathCore />} />
            <Route path="/projects/terraaero" element={<TerraAero />} />
            <Route path="/projects/digital-invest" element={<DigitalInvest />} />
            <Route path="/projects/dishcore" element={<DishCore />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
