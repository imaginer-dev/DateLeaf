import { create } from 'zustand';
import { Events } from '../utils/index.ts';

interface EventsState {
  events: Events[];
  addEvents: (event: Events) => void;
  initEvents: () => void;
}

export const useEventState = create<EventsState>()((set) => ({
  events: [],

  addEvents: (newEvent: Events) => set((state) => ({ events: [...state.events, newEvent] })),
  initEvents: () => set(() => ({ events: [] })),
}));
