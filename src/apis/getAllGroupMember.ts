import supabase from '@/supabase';

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
