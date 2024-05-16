import { useQuery } from '@tanstack/react-query';
import { queries } from '@/react-queries/queryKeys.ts';
import { getOneGroup } from '@/apis/groupScheduleApis.ts';

export const useGetOneGroup = (groupId: string) =>
  useQuery({
    queryKey: queries.group.getOne(groupId).queryKey,
    queryFn: () => getOneGroup(groupId),
  });
