import supabase from '@/supabase';

interface SignInParams {
  email: string;
  password: string;
}

interface SignUpParams {
  name: string;
  nickName: string;
  phone: string;
  email: string;
  password: string;
  pwCheck: string;
  useTermsCheck: boolean;
  privacyTermsCheck: boolean;
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

export const isLogIn = async () => {
  const { data, error } = await supabase.auth.getSession();
  if (error) {
    throw error;
  }
  return data;
};

export const signUp = async ({ name, nickName, phone, email, password }: SignUpParams) => {
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      data: {
        name: name,
        nickName: nickName,
        phone: phone,
      },
    },
  });
  if (error) {
    throw error;
  }
  return data;
};

export const recoveryPasswd = async (email: string) => {
  const { data, error } = await supabase.auth.resetPasswordForEmail(email);
  if (error) {
    throw error;
  }
  return data;
};

export const searchUser = async (nickname: string) => {
  const { data: profiles, error } = await supabase.from('profiles').select().eq('user_nickname', nickname);
  if (error) {
    throw error;
  }

  return profiles;
};
