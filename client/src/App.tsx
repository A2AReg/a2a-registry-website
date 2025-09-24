import { Switch, Route, useLocation } from "wouter";
import { useEffect } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import Home from "@/pages/Home";
import Docs from "@/pages/Docs";
import NotFound from "@/pages/not-found";

function Router() {
  const [location] = useLocation();
  
  // Track SPA route changes with PostHog
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).posthog) {
      try {
        (window as any).posthog.capture('$pageview', { 
          $current_url: window.location.href,
          $pathname: location 
        });
      } catch (error) {
        console.debug('PostHog pageview tracking error:', error);
      }
    }
  }, [location]);

  return (
    <Switch>
      <Route path="/" component={Home}/>
      <Route path="/docs" component={Docs}/>
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="a2a-ui-theme">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
