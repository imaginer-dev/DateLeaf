import { getOneGroupSchedule } from '@/apis/groupScheduleApis';
import { useQuery } from '@tanstack/react-query';
import { queries } from './queryKeys';

export const useGetOneGroupSchedule = (scheduleId: string) =>
  useQuery({
    queryKey: queries.groupSchedule.getOne(scheduleId).queryKey,
    queryFn: () => getOneGroupSchedule(scheduleId),
  });
