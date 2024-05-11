import supabase from '@/supabase';

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
