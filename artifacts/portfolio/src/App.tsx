import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import { CustomCursor } from "@/components/CustomCursor";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <TooltipProvider>
      <CustomCursor />
      <Home />
      <Toaster />
      <Analytics />
    </TooltipProvider>
  );
}

export default App;
