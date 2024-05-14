import { useQuery } from '@tanstack/react-query';
import { queries } from './queryKeys';
import { getAllGroupByUserIdFetch } from '@/apis/getAllGroupByUserIdApi';

export const useGetAllGroupByUserId = (userId: string) =>
  useQuery({
    queryKey: queries.group.getAllByUserId(userId).queryKey,
    queryFn: () => getAllGroupByUserIdFetch(userId),
  });
