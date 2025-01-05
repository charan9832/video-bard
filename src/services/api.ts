import { createClient } from '@supabase/supabase-js';

// Ensure environment variables are available
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

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