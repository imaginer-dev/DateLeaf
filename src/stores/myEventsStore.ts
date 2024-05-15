import { create } from 'zustand';
import { DB_Events } from '../utils/index.ts';

interface EventsState {
  db_events: DB_Events[];
  addDBEvents: (db_event: DB_Events) => void;
}

export const useEventState = create<EventsState>()((set) => ({
  db_events: [],
  addDBEvents: (newEvent: DB_Events) => set((state) => ({ db_events: [...state.db_events, newEvent] })),
}));
