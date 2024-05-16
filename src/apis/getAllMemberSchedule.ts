import supabase from '@/supabase';
import { getAllGroupMembers } from '@/apis/getAllGroupMember.ts';

export const getAllMemberSchedule = async (groupId: string) => {
  const memberList = await getAllGroupMembers(groupId);

  const memberIdList = memberList.map((member) => member.id);

  const { data: memberScheduleList } = await supabase
    .from('personal_schedules')
    .select('*')
    .in('user_id', memberIdList);

  return memberScheduleList;
};
