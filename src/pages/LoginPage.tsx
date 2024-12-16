import { useState, useRef, useEffect } from 'react';
import CenterPageLayout from '../layouts/CenterPageLayout.tsx';
import VerticalLogo from '../assets/svgs/VerticalLogo.tsx';
import {
  EmailInput,
  LoginButton,
  LoginForm,
  LoginFormActions,
  LoginNavigation,
  LoginNavigationLink,
  PasswordInput,
  Slogan,
} from '../components/login';
import Footer from '@/components/common/Footer.tsx';
import TestIDModal from '@/components/login/TestIDModal.tsx';
import { useJoinState } from '@/stores/joinStore.ts';
import Dialog, { DialogElement } from '../components/common/Dialog';

const LoginPage = () => {
  const { isSignupSuccess, setIsSignupSuccess } = useJoinState();
  const [isTestModalOpen, setIsTestModalOpen] = useState(true);
  const dialogRef = useRef<DialogElement | null>(null);

  useEffect(() => {
    if (isSignupSuccess) {
      dialogRef.current?.openModal();
      setIsSignupSuccess(false);
    }
  }, [isSignupSuccess, setIsSignupSuccess]);

  return (
    <>
      <TestIDModal isOpen={isTestModalOpen} onClose={() => setIsTestModalOpen(false)} />
      <Dialog ref={dialogRef} desc="회원가입이 완료되었습니다. 이메일 인증 후 로그인해주세요." />
      <CenterPageLayout>
        <VerticalLogo />
        <Slogan />
        <LoginForm>
          <EmailInput />
          <PasswordInput />
        </LoginForm>
        <LoginFormActions>
          <LoginButton />
          <LoginNavigation>
            <LoginNavigationLink text={'비밀번호 찾기'} to={'/editPw'} />
            <LoginNavigationLink text={'회원가입'} to={'/join'} />
          </LoginNavigation>
        </LoginFormActions>
      </CenterPageLayout>
      <Footer />
    </>
  );
};

export default LoginPage;
