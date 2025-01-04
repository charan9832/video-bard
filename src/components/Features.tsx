import { Wand2, Edit, Rocket, BarChart3 } from "lucide-react";

const features = [
  {
    title: "Text-to-Edit Magic",
    description: "Transform text instructions into professional video edits instantly",
    icon: Wand2,
  },
  {
    title: "Auto-Edit",
    description: "AI-powered editing that matches platform-specific styles",
    icon: Edit,
  },
  {
    title: "Multi-Platform",
    description: "Seamlessly publish to YouTube, TikTok, and Instagram",
    icon: Rocket,
  },
  {
    title: "Smart Analytics",
    description: "Track performance and get AI-powered content recommendations",
    icon: BarChart3,
  },
];

export const Features = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Powerful Features for Content Creators
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card feature-card p-6 rounded-xl"
            >
              <feature.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};