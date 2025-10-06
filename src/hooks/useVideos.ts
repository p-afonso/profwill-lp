import { useState, useEffect } from 'react';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

let supabaseInstance: SupabaseClient | null = null;

function getSupabaseClient() {
  if (supabaseInstance) {
    return supabaseInstance;
  }

  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Missing Supabase environment variables');
  }

  supabaseInstance = createClient(supabaseUrl, supabaseAnonKey);
  return supabaseInstance;
}

export interface Video {
  id: string;
  section: string;
  video_url: string;
  video_id: string;
  title: string;
  views?: string;
  display_order: number;
  is_active: boolean;
}

export function useVideos(section: string) {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchVideos() {
      try {
        setLoading(true);
        setError(null);

        const supabase = getSupabaseClient();
        const { data, error: fetchError } = await supabase
          .from('videos')
          .select('*')
          .eq('section', section)
          .eq('is_active', true)
          .order('display_order', { ascending: true });

        if (fetchError) throw fetchError;

        setVideos(data || []);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch videos'));
        console.error('Error fetching videos:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchVideos();
  }, [section]);

  return { videos, loading, error };
}

export function extractYouTubeId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/,
    /youtube\.com\/embed\/([^&\n?#]+)/,
    /youtube\.com\/v\/([^&\n?#]+)/,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
  }

  return null;
}
