import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// --- Redux ke liye zaroori imports ---
import { Provider } from "react-redux";
import { store } from "./redux/store"; // Apne store ka sahi path daalein

import ScrollToTop from "./components/Topscrollbar";

// Main Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Foundation from "./pages/Foundation";
import Stakeholders from "./pages/Stakeholders";
import Media from "./pages/Media";
import Join from "./pages/Join";
import Admin from "./pages/Admin";
import UserPanel from "./pages/UserPanel";
import NotFound from "./pages/NotFound";

// Program Pages
import Programs from "./pages/Programs";
import OneOrganicSwitch from "./pages/OneOrganicSwitch";
import OrganicCorners from "./pages/OrganicCorners";
import FarmerToolkits from "./pages/FarmerToolkits";
import CarbonMarketplace from "./pages/CarbonMarketplace";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsOfServicePage from "./pages/TermsOfServicePage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {/* --- Provider poori application ko wrap karega --- */}
      <Provider store={store}>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            {/* Main Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/foundation" element={<Foundation />} />
            <Route path="/stakeholders" element={<Stakeholders />} />
            <Route path="/media" element={<Media />} />
            <Route path="/join" element={<Join />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/profile" element={<UserPanel />} />

            {/* Program Routes */}
            <Route path="/programs" element={<Programs />} />
            <Route
              path="/programs/one-organic-switch"
              element={<OneOrganicSwitch />}
            />
            <Route
              path="/programs/organic-corners"
              element={<OrganicCorners />}
            />
            <Route
              path="/programs/farmer-toolkits"
              element={<FarmerToolkits />}
            />
            <Route
              path="/programs/carbon-marketplace"
              element={<CarbonMarketplace />}
            />

            {/* Catch-all and Policy Routes */}
            <Route path="*" element={<NotFound />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-of-service" element={<TermsOfServicePage />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
