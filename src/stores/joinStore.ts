import { create } from 'zustand';

interface JoinState {
  name: string;
  phone: string;
  email: string;
  password: string;
  pwCheck: string;
  useTermsCheck: boolean;
  privacyTermsCheck: boolean;

  nameHandler: (name: string) => void;
  phoneHandler: (phone: string) => void;
  emailHandler: (email: string) => void;
  passwordHandler: (password: string) => void;
  pwCheckHandler: (pwCheck: string) => void;
  useTermsCheckHandler: () => void;
  privacyTermsCheckHandler: () => void;
}

export const useJoinState = create<JoinState>()((set) => ({
  name: '',
  phone: '',
  email: '',
  password: '',
  pwCheck: '',
  useTermsCheck: false,
  privacyTermsCheck: false,

  nameHandler: (name: string) => set((state) => ({ ...state, name })),
  phoneHandler: (phone: string) => set((state) => ({ ...state, phone })),
  emailHandler: (email: string) => set((state) => ({ ...state, email })),
  passwordHandler: (password: string) => set((state) => ({ ...state, password })),
  pwCheckHandler: (pwCheck: string) => set((state) => ({ ...state, pwCheck })),
  useTermsCheckHandler: () => set((state) => ({ ...state, useTermsCheck: !state.useTermsCheck })),
  privacyTermsCheckHandler: () => set((state) => ({ ...state, privacyTermsCheck: !state.privacyTermsCheck })),
}));
