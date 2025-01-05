import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Code, ImagePlus, MessageSquare, PenTool, Search, Wand2 } from "lucide-react";

export const ScriptCreator = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle script generation logic here
    console.log("Generating script:", message);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center py-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          What can I help with?
        </h1>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 bg-[#1E1E2E] rounded-lg p-6 shadow-xl">
        {/* Message Area */}
        <div className="flex-1 min-h-[400px] mb-6 glass-card rounded-lg p-4">
          {/* Messages will be displayed here */}
        </div>

        {/* Input Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message Video Bard..."
              className="min-h-[100px] w-full bg-background/50 rounded-lg pr-12 resize-none glass-card"
            />
            <Button
              type="submit"
              size="icon"
              className="absolute bottom-4 right-4 rounded-full bg-primary hover:bg-primary/90"
            >
              <MessageSquare className="h-4 w-4" />
            </Button>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-2 justify-center">
            <ActionButton icon={<ImagePlus />} label="Create image" />
            <ActionButton icon={<Code />} label="Code" />
            <ActionButton icon={<MessageSquare />} label="Summarize text" />
            <ActionButton icon={<PenTool />} label="Help me write" />
            <ActionButton icon={<Search />} label="Analyze images" />
            <Button variant="outline" className="glass-card">
              More
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

const ActionButton = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <Button
    variant="outline"
    className="glass-card flex items-center gap-2 hover:bg-primary/10"
  >
    {icon}
    <span>{label}</span>
  </Button>
);