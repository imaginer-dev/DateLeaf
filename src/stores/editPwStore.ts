import { create } from 'zustand';

interface EditPwState {
  email: string;
  name: string;

  emailHandler: (email: string) => void;
  nameHandler: (name: string) => void;
}

export const useEditPwState = create<EditPwState>()((set) => ({
  email: '',
  name: '',

  emailHandler: (email: string) => set((state) => ({ email, name: state.name })),
  nameHandler: (name: string) => set((state) => ({ email: state.email, name })),
}));
