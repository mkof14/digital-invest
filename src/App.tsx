import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
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
import AdminTeam from "./pages/Admin/AdminTeam";
import AdminNews from "./pages/Admin/AdminNews";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="dark" storageKey="digital-invest-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/platform" element={<Platform />} />
            <Route path="/services" element={<Services />} />
            <Route path="/team" element={<Team />} />
            <Route path="/recognition" element={<Recognition />} />
            <Route path="/partnerships" element={<Partnerships />} />
            <Route path="/start-investing" element={<StartInvesting />} />
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
            
            {/* Legal Routes */}
            <Route path="/legal/terms" element={<TermsOfUse />} />
            <Route path="/legal/privacy" element={<PrivacyPolicy />} />
            <Route path="/legal/risk-disclosure" element={<RiskDisclosure />} />
            
            {/* Auth */}
            <Route path="/auth" element={<Auth />} />
            
            {/* Admin Routes */}
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<AdminDashboard />} />
              <Route path="projects" element={<AdminProjects />} />
              <Route path="leads" element={<AdminLeads />} />
              <Route path="team" element={<AdminTeam />} />
              <Route path="news" element={<AdminNews />} />
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
