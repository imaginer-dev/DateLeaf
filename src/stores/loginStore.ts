import { create } from 'zustand';

interface LoginState {
  email: string;
  password: string;

  emailHandler: (email: string) => void;
  passwordHandler: (password: string) => void;
}

export const useLoginState = create<LoginState>()((set) => ({
  email: '',
  password: '',

  emailHandler: (email: string) => set((state) => ({ email, password: state.password })),
  passwordHandler: (password: string) => set((state) => ({ email: state.email, password })),
}));
