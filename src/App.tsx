
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Dashboard from "./pages/Dashboard";
import RiskAssessment from "./pages/RiskAssessment";
import Compliance from "./pages/Compliance";
import Policies from "./pages/Policies";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import AuditManagement from "./pages/AuditManagement";
import Incidents from "./pages/Incidents";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><Dashboard /></Layout>} />
          <Route path="/risk-assessment" element={<Layout><RiskAssessment /></Layout>} />
          <Route path="/compliance" element={<Layout><Compliance /></Layout>} />
          <Route path="/policies" element={<Layout><Policies /></Layout>} />
          <Route path="/audit-management" element={<Layout><AuditManagement /></Layout>} />
          <Route path="/incidents" element={<Layout><Incidents /></Layout>} />
          <Route path="/reports" element={<Layout><Reports /></Layout>} />
          <Route path="/settings" element={<Layout><Settings /></Layout>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
