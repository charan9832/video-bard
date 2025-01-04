import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center gradient-bg">
      <div className="container mx-auto px-4 py-32 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-down">
          Create Content with
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> AI Magic</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto animate-fade-up">
          Transform your ideas into engaging content across platforms with our AI-powered creation suite
        </p>
        <div className="flex gap-4 justify-center animate-fade-up">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline">
            Watch Demo
          </Button>
        </div>
      </div>
    </div>
  );
};