
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { EasterEggProvider } from "@/context/EasterEggContext";
import { EasterEgg } from "@/components/EasterEgg";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { useEasterEggTrigger } from "@/hooks/useEasterEggTrigger";

const App = () => {
  // This will be used in the main app to listen for the Easter egg trigger
  useEasterEggTrigger();

  const queryClient = new QueryClient();

  return (
    <EasterEggProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
          <EasterEgg />
        </TooltipProvider>
      </QueryClientProvider>
    </EasterEggProvider>
  );
};

export default App;
