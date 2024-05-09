import { create } from 'zustand';

interface ChangePasswordState {
  password: string;

  passwordHandler: (password: string) => void;
}

export const useChangePasswordState = create<ChangePasswordState>()((set) => ({
  password: '',

  passwordHandler: (password: string) => set(() => ({ password })),
}));
