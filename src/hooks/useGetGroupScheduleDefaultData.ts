import { useGetAllMember } from '@/react-queries/useGetAllMember';
import { useGetOneGroup } from '@/react-queries/useGetOneGroup.ts';

export const useGetGroupScheduleDefaultData = (groupId: string) => {
  const {
    data: groupData,
    isLoading: groupIsLoading,
    error: groupError,
    isError: groupIsError,
  } = useGetOneGroup(groupId);

  const {
    data: groupMemberData,
    isLoading: groupMemberIsLoading,
    error: groupMemberError,
    isError: groupMemberIsError,
  } = useGetAllMember(groupId);

  return {
    groupData,
    groupMemberData,
    isLoading: groupIsLoading || groupMemberIsLoading,
    error: groupError ?? groupMemberError,
    isError: groupIsError || groupMemberIsError,
  };
};
