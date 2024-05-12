import { updateGroupSchedule, updateGroupScheduleMember } from '@/apis/groupScheduleApis';
import { useMutation } from '@tanstack/react-query';
import { queries } from './queryKeys';
import { Member } from '@/types/Member';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

interface UpdateGroupSchedule {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  memo: string;
  scheduleId: string;
  newMemberList: Member[];
}

export const useUpdateGroupSchedule = () => {
  const navigator = useNavigate();

  const {
    mutate: updateGroupScheduleMutate,
    isPending: updateGroupScheduleIsPending,
    isSuccess: updateGroupScheduleIsSuccess,
    isError: updateGroupScheduleIsError,
  } = useMutation({
    mutationKey: queries.groupSchedule.update.queryKey,
    mutationFn: updateGroupSchedule,
  });

  const {
    mutate: updateGroupMemberMutate,
    isPending: updateGroupMemberIsPending,
    isSuccess: updateGroupMemberIsSuccess,
    isError: updateGroupMemberIsError,
  } = useMutation({
    mutationKey: queries.group.updateMember.queryKey,
    mutationFn: updateGroupScheduleMember,
  });

  const mutate = (data: UpdateGroupSchedule) => {
    updateGroupScheduleMutate(data);
    updateGroupMemberMutate({
      updatedMemberList: data.newMemberList,
      groupId: data.scheduleId,
    });
  };

  useEffect(() => {
    if (updateGroupScheduleIsSuccess && updateGroupMemberIsSuccess) {
      navigator(-1);
    }
  }, [updateGroupScheduleIsSuccess, updateGroupMemberIsSuccess, navigator]);

  return {
    mutate,
    isPending: updateGroupScheduleIsPending || updateGroupMemberIsPending,
    isError: updateGroupScheduleIsError || updateGroupMemberIsError,
  };
};
