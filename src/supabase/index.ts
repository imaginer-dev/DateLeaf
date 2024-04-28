import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://gfdlxyizcyatrunsajun.supabase.co';
const supabaseKey = process.env.SUPABASE_KEY as string;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
