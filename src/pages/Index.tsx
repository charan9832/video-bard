import { useState } from "react";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { Pricing } from "@/components/Pricing";
import { Footer } from "@/components/Footer";
import { AuthDialog } from "@/components/AuthDialog";
import { ScriptCreator } from "@/components/ScriptCreator";

const Index = () => {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuth = () => {
    // This will be replaced with actual auth logic
    setIsAuthenticated(true);
    setIsAuthOpen(false);
  };

  if (isAuthenticated) {
    return <ScriptCreator />;
  }

  return (
    <div className="min-h-screen">
      <Hero onGetStarted={() => setIsAuthOpen(true)} />
      <Features />
      <HowItWorks />
      <Pricing />
      <Footer />
      <AuthDialog 
        isOpen={isAuthOpen} 
        onClose={() => setIsAuthOpen(false)} 
        onSuccess={handleAuth}
      />
    </div>
  );
};

export default Index;