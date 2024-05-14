import { getUserFetch } from '@/apis/getUserApi';
import { useQuery } from '@tanstack/react-query';
import { queries } from './queryKeys';

export const useGetProfile = () =>
  useQuery({
    queryKey: queries.auth.profile.queryKey,
    queryFn: getUserFetch,
  });
