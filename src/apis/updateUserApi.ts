import supabase from '@/supabase';

const updateUser = async (password: string) => {
  const { data, error } = await supabase.auth.updateUser({ password });

  if (error) {
    throw error;
  }

  return data;
};

export default updateUser;
