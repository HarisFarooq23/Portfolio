import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import { CustomCursor } from "@/components/CustomCursor";

function App() {
  return (
    <TooltipProvider>
      <CustomCursor />
      <Home />
      <Toaster />
    </TooltipProvider>
  );
}

export default App;
