import { create } from 'zustand';

interface EditPwState {
  email: string;
  emailHandler: (email: string) => void;
}

export const useEditPwState = create<EditPwState>()((set) => ({
  email: '',
  emailHandler: (email: string) => set(() => ({ email })),
}));
