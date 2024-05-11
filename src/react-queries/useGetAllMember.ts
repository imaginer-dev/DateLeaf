import { getAllGroupMembers } from '@/apis/groupScheduleApis';
import { useQuery } from '@tanstack/react-query';
import { queries } from './queryKeys';

export const useGetAllMember = (groupId: string) =>
  useQuery({
    queryKey: queries.group.getAllMember(groupId).queryKey,
    queryFn: () => getAllGroupMembers(groupId),
  });
