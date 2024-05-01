import supabase from '../supabase';

interface SignInParams {
  email: string;
  password: string;
}
export const signIn = async ({ email, password }: SignInParams) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });
  if (error) {
    throw error;
  }

  return data;
};
