import supabase from '@/supabase';
import { Events } from '@/utils/index';

export const getPersonalSchedule = async () => {
  const { data, error } = await supabase.from('personal_schedules').select();
  if (error) {
    throw error;
  }
  return data;
};

// 가장 최근 데이터 하나 가져오기
export const getLastPersonalSchedule = async () => {
  const { data, error } = await supabase
    .from('personal_schedules')
    .select()
    .order('created_at', { ascending: false })
    .limit(1)
    .maybeSingle();
  if (error) {
    throw error;
  }
  return data;
};

export const addPersonalSchedule = async ({ start, end, ...props }: Events) => {
  const { error } = await supabase.from('personal_schedules').insert({ ...props, start_date: start, end_date: end });
  if (error) {
    throw error;
  }
};

export const updatePersonalSchedule = async (id: number, { start, end, ...props }: Events) => {
  const { error } = await supabase
    .from('personal_schedules')
    .update({ ...props, start_date: start, end_date: end })
    .eq('id', id);
  if (error) {
    throw error;
  }
};

export const deletePersonalSchedule = async (id: number) => {
  const { error } = await supabase.from('personal_schedules').delete().eq('id', id);
  if (error) {
    throw error;
  }
};
