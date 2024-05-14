import supabase from '@/supabase';

export const getAllGroupByUserIdFetch = async (userId: string) => {
  const { data, error } = await supabase.from('group_user_ralations').select('*').eq('user_id', userId);
  if (error) {
    throw error;
  }
  const { data: groupData, error: groupError } = await supabase
    .from('groups')
    .select('*')
    .in(
      'id',
      data.map((d) => d.group_id),
    );

  if (groupError) {
    throw groupError;
  }

  return groupData;
};
