import supabase from '@/supabase';

export const getOneGroupApi = async (groupId: string) => {
  const { data, error } = await supabase.from('groups').select('*').eq('id', +groupId);

  if (error) {
    throw error;
  }

  if (!data) {
    throw new Error('데이터를 찾을 수 없습니다.');
  }

  return data[0];
};
