import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import PracticeAreas from "./pages/PracticeAreas";
import OurTeams from "./pages/OurTeams";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import BDSSection from "./pages/PracticeArea/BDSSection";
import Policy from "./pages/PracticeArea/Policy";
import Assets from "./pages/PracticeArea/Assets";
import Other from "./pages/PracticeArea/Other";
import Corporate from "./pages/PracticeArea/Corporate";
import Litigation from "./pages/PracticeArea/Litigation";
import FAQ from "./pages/Faq";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/practice-areas" element={<PracticeAreas />} />
          <Route path="/our-teams" element={<OurTeams />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/BDS" element={<BDSSection />} />
          <Route path="/Policy-Drafting" element={<Policy />} />
          <Route path="/asset-management" element={<Assets />} />
          <Route path="/professional-translation" element={<Other />} />
          <Route path="/corporate-management" element={<Corporate />} />
          <Route path="/litigation" element={<Litigation />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
