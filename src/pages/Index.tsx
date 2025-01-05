import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { Pricing } from "@/components/Pricing";
import { Footer } from "@/components/Footer";
import { ScriptGenerator } from "@/components/ScriptGenerator";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <div className="py-24 bg-black/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Try Our AI Script Generator
          </h2>
          <ScriptGenerator />
        </div>
      </div>
      <HowItWorks />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Index;