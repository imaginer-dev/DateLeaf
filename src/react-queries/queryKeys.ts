import { createQueryKeyStore } from '@lukemorales/query-key-factory';

export const queries = createQueryKeyStore({
  auth: {
    isLogin: null,
  },
  session: {
    getSession: null,
  },
});
