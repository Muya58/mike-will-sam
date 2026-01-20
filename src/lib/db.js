import { createClient } from '@supabase/supabase-js'

// Cache busting: This file replaces the old supabaseClient.js to force Vercel to rebuild deps.
// Use robust fallback to ensure build NEVER fails.

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder'

console.log('Initializing Supabase Client (Final Fix Version) with URL:', supabaseUrl.substring(0, 20) + '...');

export const supabase = createClient(supabaseUrl, supabaseKey);
