import { isLogIn } from '@/apis/authApis';
import updateUserPassword from '@/apis/updateUserApi';
import { useChangePasswordState } from '@/stores/changePasswordStore';
import supabase from '@/supabase';
import { LooseValidation, ValidateProcessor } from '@/utils/authUtils';
import { useMutation } from '@tanstack/react-query';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface DialogElement {
  openModal: () => void;
  closeModal: () => void;
}

const useUpdateUserPassword = () => {
  const { mutate, isPending } = useMutation({
    mutationKey: ['updateUserPassword'],
    mutationFn: updateUserPassword,
  });
  const [dialogMessage, setDialogMessage] = useState('');
  const { password } = useChangePasswordState();
  const dialogRef = useRef<DialogElement | null>(null);
  const navigate = useNavigate();

  const validator = new ValidateProcessor(new LooseValidation());

  const onClick = () => {
    if (!validator.isValidPassword(password)) {
      setDialogMessage('유효하지 않은 패스워드 입니다.');
      dialogRef.current?.openModal();
    }

    mutate(password, {
      onSuccess: async () => {
        const { session } = await isLogIn();
        if (session) {
          await supabase.auth.signOut();
        }
        navigate('/login');
      },
      onError: (e) => {
        setDialogMessage(e.message);
        dialogRef.current?.openModal();
      },
    });
  };
  return {
    isPending,
    onClick,
    dialogRef,
    dialogMessage,
  };
};

export default useUpdateUserPassword;
