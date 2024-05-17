import supabase from '@/supabase';

interface UpdateGroup {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  memo: string;
  groupId: string;
}

export const updateGroup = async ({ name, description, startDate, endDate, memo, groupId }: UpdateGroup) => {
  console.log(memo);
  console.log(description);
  const { data, error } = await supabase
    .from('groups')
    .update({
      name,
      description,
      start_date: startDate,
      end_date: endDate,
      memo,
    })
    .eq('id', +groupId);

  if (error) {
    throw error;
  }

  return data;
};
