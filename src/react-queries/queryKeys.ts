import { createQueryKeyStore } from '@lukemorales/query-key-factory';

export const queries = createQueryKeyStore({
  session: {
    getSession: null,
  },
});
