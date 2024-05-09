import { create } from 'zustand';
import { Events } from '../utils/index.ts';

const initialEventsState: Events[] = [
  { title: 'Meeting', start: new Date(), end: new Date() },
  { title: 'Meeting2', start: '2024-05-08', end: '2024-05-12', backgroundColor: 'red', borderColor: 'red' },
  { title: 'Meeting3', start: '2024-05-08', end: '2024-05-10', backgroundColor: 'green', borderColor: 'green' },
  { title: 'Meeting4', start: '2024-05-08', end: '2024-05-11' },
];

interface EventsState {
  events: Events[];
  addEvents: (event: Events) => void;
  initEvents: () => void;
}

export const useEventState = create<EventsState>()((set) => ({
  events: [...initialEventsState],

  addEvents: (newEvent: Events) => set((state) => ({ events: [...state.events, newEvent] })),
  initEvents: () => set(() => ({ events: [] })),
}));
