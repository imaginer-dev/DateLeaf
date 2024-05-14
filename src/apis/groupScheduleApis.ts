import supabase from '@/supabase';
import { Member } from '@/types/Member';
interface addGroupShedule {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  memo: string;
  newMemberList: Member[];
}

export const addGroupScheduleFetch = async ({ startDate, endDate, newMemberList, ...props }: addGroupShedule) => {
  // 현재 로그인된 사용자를 가져온다.
  const { data: user, error: userError } = await supabase.auth.getUser();

  if (userError) {
    throw userError;
  }

  // 그룹을 생성한다.
  const { data: groupInfo, error: groupInfoError } = await supabase
    .from('groups')
    .insert({
      name: props.title,
      open: true,
      start_date: startDate,
      end_date: endDate,
    })
    .select()
    .single();

  if (!groupInfo || groupInfoError) {
    throw groupInfoError;
  }

  // 그룹에 멤버를 추가한다.
  const newRelationSchema = newMemberList.map((member) => ({
    group_id: groupInfo.id,
    user_id: member.id,
  }));
  newRelationSchema.push({
    group_id: groupInfo.id,
    user_id: user.user.id,
  });
  const { error: groupMemberError } = await supabase.from('group_user_ralations').insert(newRelationSchema);
  if (groupMemberError) {
    throw groupMemberError;
  }
  // 그룹 일정을 생성한다.
  const { data: groupScheduleData, error: groupScheduleError } = await supabase
    .from('group_schedules')
    .insert({ ...props, start_date: startDate, end_date: endDate, group_id: groupInfo.id })
    .select()
    .single();

  if (groupScheduleError) {
    throw groupScheduleError;
  }
  return groupScheduleData;
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
