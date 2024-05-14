import supabase from '@/supabase';

export const getUserFetch = async () => {
  const { data: session, error: sessionError } = await supabase.auth.getUser();

  if (!session || sessionError) {
    throw sessionError;
  }

  const { data, error } = await supabase.from('profiles').select('*').eq('id', session.user.id).single();

  if (error) {
    throw error;
  }

  return data;
};
