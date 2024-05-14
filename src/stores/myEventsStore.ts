import { create } from 'zustand';
import { Events, DB_Events } from '../utils/index.ts';

interface EventsState {
  events: Events[];
  addEvents: (event: Events) => void;
  initEvents: () => void;

  db_events: DB_Events[];
  addDBEvents: (db_event: DB_Events) => void;
}

export const useEventState = create<EventsState>()((set) => ({
  events: [],
  addEvents: (newEvent: Events) => set((state) => ({ events: [...state.events, newEvent] })),

  db_events: [],
  initEvents: () => set(() => ({ events: [] })),
  addDBEvents: (newEvent: DB_Events) => set((state) => ({ db_events: [...state.db_events, newEvent] })),
}));
