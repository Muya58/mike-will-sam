const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://crgpypdayufwuwyijzvq.supabase.co';
const supabaseKey = 'sb_publishable_D_WmyI0r2x6WzBDrnWhUpQ_8W4-llVO';

const supabase = createClient(supabaseUrl, supabaseKey);

async function testConnection() {
    console.log("Testing connection...");
    try {
        const { data, error } = await supabase.from('players').select('*').limit(1);
        if (error) {
            console.error("Connection Error:", error.message);
            // Supabase keys that are invalid usually return a specific error or 401
        } else {
            console.log("Connection Success! Data:", data);
        }
    } catch (err) {
        console.error("Unexpected error:", err);
    }
}

testConnection();
