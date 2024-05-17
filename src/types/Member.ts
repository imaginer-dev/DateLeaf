import { Database } from '@/supabase/supabse.types';

export type Member = Database['public']['Tables']['profiles']['Row'];
