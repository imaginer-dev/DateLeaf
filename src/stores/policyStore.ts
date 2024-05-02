import { create } from 'zustand';

interface PolicyState {
  check: string;

  checkHandler: (check: string) => void;
}

export const usePolicyState = create<PolicyState>()((set) => ({
  check: '확인',

  checkHandler: (check: string) => set((state) => ({ ...state, check })),
}));
