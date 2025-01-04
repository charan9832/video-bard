import { Wand2, Edit, Rocket, BarChart3, FileText, Search, Bot, Share2 } from "lucide-react";

const features = [
  {
    title: "AI Script Writing",
    description: "Generate platform-optimized scripts with built-in SEO recommendations",
    icon: FileText,
  },
  {
    title: "SEO Integration",
    description: "Automatic keyword optimization and trend analysis for maximum reach",
    icon: Search,
  },
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
    icon: Share2,
  },
  {
    title: "Smart Analytics",
    description: "Track performance and get AI-powered content recommendations",
    icon: BarChart3,
  },
  {
    title: "AI Avatars",
    description: "Create professional faceless videos with AI-generated content",
    icon: Bot,
  },
  {
    title: "Workflow Automation",
    description: "Streamline your content creation with customizable templates",
    icon: Rocket,
  },
];

export const Features = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-background/80">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">
          Powerful Features for Content Creators
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Everything you need to create, optimize, and distribute engaging content across all platforms
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-card hover:bg-accent transition-colors duration-300 border border-border"
            >
              <div className="flex flex-col items-center text-center">
                <feature.icon className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};