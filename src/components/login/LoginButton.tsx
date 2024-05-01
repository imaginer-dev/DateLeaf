import { useRef, useState } from 'react';
import { useLoginState } from '../../stores/loginStore.ts';
import useSignIn from '../../react-queries/useSignIn.ts';
import { isValidEmail, isValidPassword } from '../../utils/authUtils.ts';
import { isAuthError } from '@supabase/supabase-js';
import Dialog from '../Dialog.tsx';

interface DialogElement {
  openModal: () => void;
  closeModal: () => void;
}

const messages = {
  ISVAILD_ERROR: '이메일 또는 비밀번호 형식이 잘못되었습니다.',
  AUTH_ERROR: '이메일 또는 비밀번호가 정확하지 않습니다.',
};

const LoginButton = () => {
  const { email, password } = useLoginState();
  const { mutate } = useSignIn();
  const dialogRef = useRef<DialogElement | null>(null);
  const [dialogMessage, setDialogMessage] = useState('');

  const onClick = () => {
    if (!isValidEmail(email) || !isValidPassword(password)) {
      setDialogMessage(messages.ISVAILD_ERROR);
      dialogRef.current?.openModal();
      return;
    }

    mutate(
      {
        email,
        password,
      },
      {
        onError: (error) => {
          if (isAuthError(error)) {
            // console.log(error.status);
            // console.log(error.message);
            // console.log(error);
            //인증오류
            setDialogMessage(messages.AUTH_ERROR);
            dialogRef.current?.openModal();
          }
        },
        onSettled: (data) => {
          console.log(data);
        },
        onSuccess: (data) => {
          //로그인 성공시에는 팝업없이 캘린더 메인으로
          console.log(data);
        },
      },
    );
  };

  return (
    <>
      <button type={'button'} onClick={onClick} className="btn btn-outline btn-primary w-full">
        로그인
      </button>
      <Dialog ref={dialogRef} desc={dialogMessage}></Dialog>
    </>
  );
};

export default LoginButton;
