import { create } from 'zustand';

interface TestStoreType {
  value: number;
  increase: () => void;
}

const useTestStore = create<TestStoreType>()((set) => ({
  value: 0,
  increase: () => set((state) => ({ value: state.value + 1 })),
}));

export default useTestStore;
