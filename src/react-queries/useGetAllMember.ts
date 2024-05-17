import { useQuery } from '@tanstack/react-query';
import { queries } from './queryKeys';
import { getAllGroupMembers } from '@/apis/getAllGroupMember.ts';

export const useGetAllMember = (groupId: string) =>
  useQuery({
    queryKey: queries.group.getAllMember(groupId).queryKey,
    queryFn: () => getAllGroupMembers(groupId),
  });
