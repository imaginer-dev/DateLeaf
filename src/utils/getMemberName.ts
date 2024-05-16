import { Member } from '@/types/Member.ts';

export const getMemberName = (userId: string, memberList: Member[]) => {
  const member = memberList.find((member) => member.id === userId);

  return member?.user_nickname === '' ? member?.user_name : member?.user_nickname;
};
