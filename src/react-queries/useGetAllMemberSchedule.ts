import { useQuery } from '@tanstack/react-query';
import { queries } from '@/react-queries/queryKeys.ts';
import { getAllMemberSchedule } from '@/apis/getAllMemberSchedule.ts';

export const useGetAllMemberSchedule = (groupId: string) =>
  useQuery({
    queryKey: queries.group.getAllMemberSchedule(groupId).queryKey,
    queryFn: () => getAllMemberSchedule(groupId),
  });
