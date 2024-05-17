import { useAddNewGroup } from '@/react-queries/useAddNewGroup';
import { Member } from '@/types/Member';
import { useRef, useState } from 'react';
import { isValidGroupInput } from '@/utils/groupScheduleUtils.ts';

interface DialogElement {
  openModal: () => void;
  closeModal: () => void;
}

export const useAddGroupSchedule = () => {
  const { mutate, isPending } = useAddNewGroup();
  const successDialogRef = useRef<DialogElement | null>(null);
  const failDialogRef = useRef<DialogElement | null>(null);

  const [errorText, setErrorText] = useState('모임 일정 등록에 실패했습니다.');

  const addGroupSchedule = (e: React.FormEvent<HTMLFormElement>, userList: Member[]) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newGroupSchedule = {
      name: formData.get('name') as string,
      description: formData.get('description') as string,
      startDate: formData.get('startDate') as string,
      endDate: formData.get('endDate') as string,
      memo: formData.get('memo') as string,
      newMemberList: userList,
    };

    const validationResult = isValidGroupInput(newGroupSchedule);

    if (validationResult.error) {
      failDialogRef?.current?.openModal();
      setErrorText(validationResult.errorText);
      return;
    }

    mutate(newGroupSchedule, {
      onError: (error) => {
        console.error(error);
        failDialogRef.current?.openModal();
      },
      onSuccess: () => {
        successDialogRef.current?.openModal();
      },
    });
  };

  return {
    addGroupSchedule,
    errorText,
    isPending,
    successDialogRef,
    failDialogRef,
  };
};
