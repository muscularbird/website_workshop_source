import { createClient as createSupabaseClient } from '@supabase/supabase-js';

// This is a client-side only version for the Pages Router
export const createClient = () => {
  return createSupabaseClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}; 