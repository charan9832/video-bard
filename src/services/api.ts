import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export const generateScript = async (params: {
  platform: 'youtube' | 'tiktok' | 'instagram';
  tone: string;
  keywords: string[];
  length: 'short' | 'medium' | 'long';
}) => {
  const { data, error } = await supabase.functions.invoke('generate-script', {
    body: params
  });

  if (error) throw error;
  return data;
};

export const analyzeKeywords = async (keywords: string[]) => {
  const { data, error } = await supabase.functions.invoke('analyze-keywords', {
    body: { keywords }
  });

  if (error) throw error;
  return data;
};

export const schedulePost = async (params: {
  platform: string;
  content: string;
  scheduledTime: Date;
}) => {
  const { data, error } = await supabase.functions.invoke('schedule-post', {
    body: params
  });

  if (error) throw error;
  return data;
};