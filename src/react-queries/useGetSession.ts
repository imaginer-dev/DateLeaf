import { useQuery } from '@tanstack/react-query';
import { queries } from './queryKeys';
import { getSession } from '@/apis/sessionApis';

export const useGetSession = () =>
  useQuery({
    queryKey: queries.session.getSession.queryKey,
    queryFn: getSession,
  });
