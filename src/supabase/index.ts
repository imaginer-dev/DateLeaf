import { createClient } from '@supabase/supabase-js';
import { Database } from './supabse.types.ts';

const supabaseUrl = 'https://gfdlxyizcyatrunsajun.supabase.co';
const supabaseKey = process.env.SUPABASE_KEY as string;
const supabase = createClient<Database>(supabaseUrl, supabaseKey);

export default supabase;
