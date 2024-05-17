import { useMutation } from '@tanstack/react-query';
import { queries } from './queryKeys';
import { Member } from '@/types/Member';
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { updateGroup } from '@/apis/updateGroupApi.ts';
import { updateGroupMember } from '@/apis/updateGroupMemberApi.ts';
import { isValidGroupInput } from '@/utils/groupScheduleUtils.ts';

interface UpdateGroup {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  memo: string;
  groupId: string;
  newMemberList: Member[];
}

interface DialogElement {
  openModal: () => void;
  closeModal: () => void;
}

export const useUpdateGroup = () => {
  const navigator = useNavigate();

  const errorDialogRef = useRef<DialogElement | null>(null);
  const successDialog = useRef<DialogElement | null>(null);

  const [errorText, setErrorText] = useState('모임 일정 수정에 실패했습니다.');

  const {
    mutate: updateGroupMutate,
    isPending: updateGroupIsPending,
    isSuccess: updateGroupIsSuccess,
    isError: updateGroupIsError,
    reset: updateGroupReset,
  } = useMutation({
    mutationKey: queries.groupSchedule.update.queryKey,
    mutationFn: updateGroup,
  });

  const {
    mutate: updateGroupMemberMutate,
    isPending: updateGroupMemberIsPending,
    isSuccess: updateGroupMemberIsSuccess,
    isError: updateGroupMemberIsError,
    reset: updateGroupMemberReset,
  } = useMutation({
    mutationKey: queries.group.updateMember.queryKey,
    mutationFn: updateGroupMember,
  });

  const mutate = (data: UpdateGroup) => {
    const validationResult = isValidGroupInput(data);

    if (validationResult.error) {
      errorDialogRef?.current?.openModal();
      setErrorText(validationResult.errorText);
      return;
    }

    updateGroupMutate(data);
    updateGroupMemberMutate({
      updatedMemberList: data.newMemberList,
      groupId: data.groupId,
    });
  };

  useEffect(() => {
    if (updateGroupIsSuccess && updateGroupMemberIsSuccess) {
      successDialog.current?.openModal();
      updateGroupMemberReset();
      updateGroupReset();
    }
  }, [updateGroupIsSuccess, updateGroupMemberIsSuccess, navigator, updateGroupMemberReset, updateGroupReset]);

  useEffect(() => {
    if (updateGroupIsError || updateGroupMemberIsError) {
      errorDialogRef.current?.openModal();
      updateGroupMemberReset();
      updateGroupReset();
    }
  }, [updateGroupIsError, updateGroupMemberIsError, updateGroupMemberReset, updateGroupReset]);

  return {
    mutate,
    errorText,
    isPending: updateGroupIsPending || updateGroupMemberIsPending,
    errorDialogRef,
    successDialog,
  };
};
