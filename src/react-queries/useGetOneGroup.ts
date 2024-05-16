import { useQuery } from '@tanstack/react-query';
import { queries } from '@/react-queries/queryKeys.ts';
import { getOneGroupApi } from '@/apis/getOneGroupApi.ts';

export const useGetOneGroup = (groupId: string) =>
  useQuery({
    queryKey: queries.group.getOne(groupId).queryKey,
    queryFn: () => getOneGroupApi(groupId),
  });
