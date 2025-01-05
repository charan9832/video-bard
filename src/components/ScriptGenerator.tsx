import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { generateScript } from '@/services/api';

export const ScriptGenerator = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [platform, setPlatform] = useState<'youtube' | 'tiktok' | 'instagram'>('youtube');
  const [tone, setTone] = useState('casual');
  const [keywords, setKeywords] = useState('');
  const [length, setLength] = useState<'short' | 'medium' | 'long'>('medium');

  const handleGenerate = async () => {
    try {
      setLoading(true);
      const keywordArray = keywords.split(',').map(k => k.trim());
      const script = await generateScript({
        platform,
        tone,
        keywords: keywordArray,
        length
      });
      
      toast({
        title: "Script Generated!",
        description: "Your script has been generated successfully.",
      });
      
      // Here you would typically update your UI with the generated script
      console.log(script);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate script. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto p-6 glass-card rounded-xl">
      <h2 className="text-2xl font-bold mb-6">Generate Script</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Platform</label>
          <Select
            value={platform}
            onValueChange={(value: 'youtube' | 'tiktok' | 'instagram') => setPlatform(value)}
          >
            <option value="youtube">YouTube</option>
            <option value="tiktok">TikTok</option>
            <option value="instagram">Instagram</option>
          </Select>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">Tone</label>
          <Select value={tone} onValueChange={setTone}>
            <option value="casual">Casual</option>
            <option value="professional">Professional</option>
            <option value="funny">Funny</option>
            <option value="educational">Educational</option>
          </Select>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">Keywords (comma-separated)</label>
          <Input
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            placeholder="Enter keywords..."
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">Length</label>
          <Select
            value={length}
            onValueChange={(value: 'short' | 'medium' | 'long') => setLength(value)}
          >
            <option value="short">Short</option>
            <option value="medium">Medium</option>
            <option value="long">Long</option>
          </Select>
        </div>
        
        <Button
          onClick={handleGenerate}
          disabled={loading}
          className="w-full"
        >
          {loading ? 'Generating...' : 'Generate Script'}
        </Button>
      </div>
    </div>
  );
};