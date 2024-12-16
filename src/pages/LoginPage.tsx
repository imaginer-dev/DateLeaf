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

const LoginPage = () => {
  return (
    <>
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
