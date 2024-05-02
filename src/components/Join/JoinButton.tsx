import { useJoinState } from '../../stores/joinStore';
import { isValidName, isValidFormatPhone, isValidEmail, isValidPassword, isValidPwCheck } from '@/utils/authUtils.ts';
import { useRef, useState } from 'react';
import useSignUp from '@/react-queries/useSignUp';
import { isAuthError } from '@supabase/supabase-js';
import { useNavigate } from 'react-router-dom';
import { Loading } from '@/pages';
import Dialog from '../Dialog';

interface DialogElement {
  openModal: () => void;
  closeModal: () => void;
}

const messages = {
  NAME_ISVAILD_ERROR: '이름은 두글자 이상 입력 가능합니다.',
  PHONE_ISVAILD_ERROR: '휴대폰 번호를 정확히 입력해주세요.',
  PWCHECK_ISVAILD_ERROR: '비밀번호 확인을 진행해주세요.',
  EMAIL_PASSWORD_ISVAILD_ERROR: '이메일 또는 비밀번호 형식이 잘못되었습니다.',
  TERMS_ISVAILD_ERROR: '개인정보 수집 및 이용약관에 동의해주세요.',
  AUTH_ERROR: '이미 가입한 계정이 있습니다. 계정을 확인해주세요.',
};

const JoinButton = () => {
  const { nickName, name, phone, email, password, pwCheck, useTermsCheck, privacyTermsCheck } = useJoinState();
  const { mutate, isPending } = useSignUp();
  const navigate = useNavigate();
  const dialogRef = useRef<DialogElement | null>(null);
  const [dialogMessage, setDialogMessage] = useState('');

  const onClick = () => {
    if (!isValidEmail(email) || !isValidPassword(password)) {
      setDialogMessage(messages.EMAIL_PASSWORD_ISVAILD_ERROR);
      dialogRef.current?.openModal();
      return;
    }

    if (!isValidName(name)) {
      setDialogMessage(messages.NAME_ISVAILD_ERROR);
      dialogRef.current?.openModal();
      return;
    }

    if (!isValidFormatPhone(phone)) {
      setDialogMessage(messages.PHONE_ISVAILD_ERROR);
      dialogRef.current?.openModal();
      return;
    }

    if (!isValidPwCheck(password, pwCheck)) {
      setDialogMessage(messages.PWCHECK_ISVAILD_ERROR);
      dialogRef.current?.openModal();
      return;
    }

    if (!useTermsCheck || !privacyTermsCheck) {
      setDialogMessage(messages.TERMS_ISVAILD_ERROR);
      dialogRef.current?.openModal();
      return;
    }

    mutate(
      {
        name,
        nickName,
        phone,
        email,
        password,
        pwCheck: '',
        useTermsCheck: false,
        privacyTermsCheck: false,
      },
      {
        onError: (error) => {
          if (isAuthError(error)) {
            setDialogMessage(messages.AUTH_ERROR);
            dialogRef.current?.openModal();
          }
        },
        onSuccess: () => {
          navigate('/*');
        },
      },
    );
  };

  return (
    <>
      <button type={'submit'} onClick={onClick} className="btn btn-outline btn-primary w-full">
        회원가입 하기
      </button>
      <Dialog ref={dialogRef} desc={dialogMessage}></Dialog>
      {isPending && <Loading size={'lg'} color={'primary'} display={'spinner'} />}
    </>
  );
};

export default JoinButton;
