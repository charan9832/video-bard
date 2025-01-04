import { Check } from "lucide-react";

const steps = [
  {
    title: "Upload Your Content",
    description: "Import your raw footage or start from scratch with AI-generated scripts",
  },
  {
    title: "Edit with AI",
    description: "Use text commands or auto-edit features to transform your content",
  },
  {
    title: "Optimize & Publish",
    description: "Get AI recommendations and publish across multiple platforms",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-24 bg-black/50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          How It Works
        </h2>
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start mb-8">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center mr-4">
                <Check className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};