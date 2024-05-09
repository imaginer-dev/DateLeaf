import supabase from '@/supabase';

const updateUserPassword = async (password: string) => {
  const { data, error } = await supabase.auth.updateUser({ password });

  if (error) {
    throw error;
  }

  return data;
};

export default updateUserPassword;
