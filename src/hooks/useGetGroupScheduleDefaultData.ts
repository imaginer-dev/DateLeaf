import { useGetAllMember } from '@/react-queries/useGetAllMember';
import { useGetOneGroupSchedule } from '@/react-queries/useGetOneGroupSchedule';

export const useGetGroupScheduleDefaultData = (scheduleId: string, groupId: string) => {
  const {
    data: groupScheduleData,
    isLoading: groupScheduleIsLoading,
    error: groupScheduleError,
    isError: groupScheduleIsError,
  } = useGetOneGroupSchedule(scheduleId);

  const {
    data: groupMemberData,
    isLoading: groupMemberIsLoading,
    error: groupMemberError,
    isError: groupMemberIsError,
  } = useGetAllMember(groupId);

  return {
    groupScheduleData,
    groupMemberData,
    isLoading: groupScheduleIsLoading || groupMemberIsLoading,
    error: groupScheduleError ?? groupMemberError,
    isError: groupScheduleIsError || groupMemberIsError,
  };
};
