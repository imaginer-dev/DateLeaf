import supabase from '@/supabase';
import { Member } from '@/types/Member.ts';

interface UpdateGroupMember {
  updatedMemberList: Member[];
  groupId: string;
}

export const updateGroupMember = async ({ updatedMemberList, groupId }: UpdateGroupMember) => {
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
