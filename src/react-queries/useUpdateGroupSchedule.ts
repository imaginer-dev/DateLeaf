import { updateGroupSchedule, updateGroupScheduleMember } from '@/apis/groupScheduleApis';
import { useMutation } from '@tanstack/react-query';
import { queries } from './queryKeys';
import { Member } from '@/types/Member';
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';

interface UpdateGroupSchedule {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  memo: string;
  scheduleId: string;
  newMemberList: Member[];
}

interface DialogElement {
  openModal: () => void;
  closeModal: () => void;
}

export const useUpdateGroupSchedule = () => {
  const navigator = useNavigate();

  const errorDialogRef = useRef<DialogElement | null>(null);
  const successDialog = useRef<DialogElement | null>(null);

  const {
    mutate: updateGroupScheduleMutate,
    isPending: updateGroupScheduleIsPending,
    isSuccess: updateGroupScheduleIsSuccess,
    isError: updateGroupScheduleIsError,
    reset: updateGroupScheduleReset,
  } = useMutation({
    mutationKey: queries.groupSchedule.update.queryKey,
    mutationFn: updateGroupSchedule,
  });

  const {
    mutate: updateGroupMemberMutate,
    isPending: updateGroupMemberIsPending,
    isSuccess: updateGroupMemberIsSuccess,
    isError: updateGroupMemberIsError,
    reset: updateGroupMemberReset,
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
      successDialog.current?.openModal();
      updateGroupMemberReset();
      updateGroupScheduleReset();
    }
  }, [
    updateGroupScheduleIsSuccess,
    updateGroupMemberIsSuccess,
    navigator,
    updateGroupMemberReset,
    updateGroupScheduleReset,
  ]);

  useEffect(() => {
    if (updateGroupScheduleIsError || updateGroupMemberIsError) {
      errorDialogRef.current?.openModal();
      updateGroupMemberReset();
      updateGroupScheduleReset();
    }
  }, [updateGroupScheduleIsError, updateGroupMemberIsError, updateGroupMemberReset, updateGroupScheduleReset]);

  return {
    mutate,
    isPending: updateGroupScheduleIsPending || updateGroupMemberIsPending,
    errorDialogRef,
    successDialog,
  };
};
