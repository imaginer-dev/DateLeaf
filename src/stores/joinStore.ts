import { create } from 'zustand';

interface JoinState {
  name: string;
  nickName: string;
  phone: string;
  email: string;
  password: string;
  showError: boolean;
  pwCheck: string;
  useTermsCheck: boolean;
  privacyTermsCheck: boolean;

  nameHandler: (name: string) => void;
  nickNameHandler: (name: string) => void;
  phoneHandler: (phone: string) => void;
  emailHandler: (email: string) => void;
  passwordHandler: (password: string) => void;
  setShowError: (showError: boolean) => void;
  pwCheckHandler: (pwCheck: string) => void;
  useTermsCheckHandler: () => void;
  privacyTermsCheckHandler: () => void;
}

export const useJoinState = create<JoinState>()((set) => ({
  name: '',
  nickName: '',
  phone: '',
  email: '',
  password: '',
  showError: false,
  pwCheck: '',
  useTermsCheck: false,
  privacyTermsCheck: false,

  nameHandler: (name: string) => set((state) => ({ ...state, name })),
  nickNameHandler: (nickName: string) => set((state) => ({ ...state, nickName })),
  phoneHandler: (phone: string) => set((state) => ({ ...state, phone })),
  emailHandler: (email: string) => set((state) => ({ ...state, email })),
  passwordHandler: (password: string) => set((state) => ({ ...state, password })),
  pwCheckHandler: (pwCheck: string) => set((state) => ({ ...state, pwCheck })),
  useTermsCheckHandler: () => set((state) => ({ ...state, useTermsCheck: !state.useTermsCheck })),
  privacyTermsCheckHandler: () => set((state) => ({ ...state, privacyTermsCheck: !state.privacyTermsCheck })),
  setShowError: (showError: boolean) => set((state) => ({ ...state, showError })),
}));
