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

  addEvents: (newEvent: Events) =>
    set((state) => {
      // 중복 검사 로직 추가
      const isDuplicate = state.events.some(
        (event) => event.start === newEvent.start && event.title === newEvent.title,
      );

      if (!isDuplicate) {
        return { events: [...state.events, newEvent] };
      } else {
        return { events: [...state.events] }; // 중복된 경우 상태 변경 없음
      }
    }),
  db_events: [],
  addEvents: (newEvent: Events) => set((state) => ({ events: [...state.events, newEvent] })),
  initEvents: () => set(() => ({ events: [] })),
  addDBEvents: (newEvent: DB_Events) => set((state) => ({ db_events: [...state.db_events, newEvent] })),
}));
