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
