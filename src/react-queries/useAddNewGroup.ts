import { useMutation } from '@tanstack/react-query';
import { queries } from './queryKeys';
import { addGroupScheduleFetch } from '@/apis/groupScheduleApis';

export const useAddNewGroup = () =>
  useMutation({
    mutationKey: queries.group.add.queryKey,
    mutationFn: addGroupScheduleFetch,
  });
