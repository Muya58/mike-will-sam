import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

let client;

try {
    if (supabaseUrl && supabaseKey && supabaseUrl.startsWith('http')) {
        client = createClient(supabaseUrl, supabaseKey);
    } else {
        console.warn('⚠️ Missing or invalid Supabase keys. Using mock client for build.');
        throw new Error('Invalid Keys');
    }
} catch (error) {
    client = {
        from: () => ({
            select: () => ({
                order: () => ({ data: [], error: null }),
                data: [],
                error: null
            })
        })
    };
}

export const supabase = client;
