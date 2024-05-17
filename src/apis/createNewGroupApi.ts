import supabase from '@/supabase';
import { Member } from '@/types/Member.ts';

interface CreateNewGroup {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  memo: string;
  newMemberList: Member[];
}

export const createNewGroupApi = async ({ startDate, endDate, newMemberList, ...props }: CreateNewGroup) => {
  // 현재 로그인된 사용자를 가져온다.
  const { data: user, error: userError } = await supabase.auth.getUser();

  if (userError) {
    throw userError;
  }

  // 그룹을 생성한다.
  const { data: groupInfo, error: groupInfoError } = await supabase
    .from('groups')
    .insert({
      name: props.name,
      description: props.description,
      memo: props.memo,
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

  return true;
};
