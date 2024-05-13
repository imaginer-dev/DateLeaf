import supabase from '@/supabase';
import { Member } from '@/types/Member';
interface addGroupShedule {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  memo: string;
  newMemberList: any[];
}

export const addGroupSchedule = async ({ startDate, endDate, ...props }: addGroupShedule) => {
  const { error } = await supabase
    .from('group_schedules')
    .insert({ ...props, start_date: startDate, end_date: endDate });

  if (error) {
    throw error;
  }
};

interface UpdateGroupSchedule {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  memo: string;
  scheduleId: string;
}

interface UpdateGroupScheduleMember {
  updatedMemberList: Member[];
  groupId: string;
}

export const getOneGroupSchedule = async (scheduleId: string) => {
  const { data, error } = await supabase.from('group_schedules').select('*').eq('id', +scheduleId);

  if (error) {
    throw error;
  }

  if (!data) {
    throw new Error('데이터를 찾을 수 없습니다.');
  }

  return data[0];
};

export const updateGroupSchedule = async ({
  name,
  description,
  startDate,
  endDate,
  memo,
  scheduleId,
}: UpdateGroupSchedule) => {
  const { data, error } = await supabase
    .from('group_schedules')
    .update({
      title: name,
      description,
      start_date: startDate,
      end_date: endDate,
      memo,
    })
    .eq('id', +scheduleId);

  if (error) {
    throw error;
  }

  return data;
};

export const updateGroupScheduleMember = async ({ updatedMemberList, groupId }: UpdateGroupScheduleMember) => {
  const { error: deleteError } = await supabase.from('group_user_ralations').delete().eq('group_id', groupId);
  if (deleteError) {
    throw deleteError;
  }

  const { data, error: insertError } = await supabase.from('group_user_ralations').insert(
    updatedMemberList.map((member) => ({
      group_id: +groupId,
      user_id: member.id,
    })),
  );

  if (insertError) {
    throw insertError;
  }

  return data;
};

export const getAllGroupMembers = async (groupId: string) => {
  // group_user_ralations 의 응답 결과의 user_id를 포함하는 profile리스트를 받아온다.
  const { data, error } = await supabase.from('group_user_ralations').select('user_id').eq('group_id', +groupId);

  if (error) {
    throw error;
  }

  if (!data) {
    throw new Error('데이터를 찾을 수 없습니다.');
  }

  const { data: allUserProfile, error: getProfileError } = await supabase
    .from('profiles')
    .select('*')
    .in(
      'id',
      data.map((d) => d.user_id),
    );

  if (getProfileError) {
    throw getProfileError;
  }

  return allUserProfile;
};
