import { createClient } from '@supabase/supabase-js';

// Get Supabase credentials from environment
const supabase = createClient(
  'https://e7e31911-35a7-45a5-95bd-c81a8adaa199.supabase.co',  // Your project URL
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImU3ZTMxOTExLTM1YTctNDVhNS05NWJkLWM4MWE4YWRhYTE5OSIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNzA2ODY5NDI4LCJleHAiOjIwMjI0NDU0Mjh9.Th_v_bZ3j7sWXQKGPmMxBqJAzWt_NF5sQPj0Tr0WFYY'  // Your anon key
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