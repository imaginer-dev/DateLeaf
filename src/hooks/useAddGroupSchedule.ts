import { useAddNewGroup } from '@/react-queries/useAddNewGroup';
import { Member } from '@/types/Member';
import { useRef } from 'react';

interface DialogElement {
  openModal: () => void;
  closeModal: () => void;
}

export const useAddGroupSchedule = () => {
  const { mutate, isPending } = useAddNewGroup();
  const successDialogRef = useRef<DialogElement | null>(null);
  const failDialogRef = useRef<DialogElement | null>(null);

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
    isPending,
    successDialogRef,
    failDialogRef,
  };
};
