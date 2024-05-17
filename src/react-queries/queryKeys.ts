import { createQueryKeyStore } from '@lukemorales/query-key-factory';

export const queries = createQueryKeyStore({
  auth: {
    isLogin: null,
    profile: null,
  },
  session: {
    getSession: null,
  },
  groupSchedule: {
    getOne: (scheduleId: string) => [scheduleId],
    getAll: null,
    update: null,
  },
  group: {
    getOne: (groupId: string) => [groupId],
    getAllMemberSchedule: (groupId: string) => [groupId],
    getAll: null,
    update: null,
    updateMember: null,
    getAllMember: (groupId: string) => [groupId],
    add: null,
    getAllByUserId: (userId: string) => [userId],
  },
});
