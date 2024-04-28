import CenterPageLayout from '../layouts/CenterPageLayout.tsx';
import VerticalLogo from '../components/common/VerticalLogo.tsx';
import LoginForm from '../components/login/LoginForm.tsx';
import EmailInput from '../components/login/EmailInput.tsx';
import LoginFormActions from '../components/login/LoginFormActions.tsx';
import LoginButton from '../components/login/LoginButton.tsx';
import LoginNavigation from '../components/login/LoginNavigation.tsx';
import LoginNavigationLink from '../components/login/LoginNavigationLink.tsx';
import NameInput from '../components/Join/NameInput.tsx';

const LoginPage = () => {
  return (
    <CenterPageLayout>
      <VerticalLogo />
      <LoginForm>
        <NameInput />
        <EmailInput />
      </LoginForm>
      <LoginFormActions>
        <LoginButton />
        <LoginNavigation>
          <LoginNavigationLink text={'비밀번호 찾기'} to={'/'} />
          <LoginNavigationLink text={'회원가입'} to={'/'} />
        </LoginNavigation>
      </LoginFormActions>
    </CenterPageLayout>
  );
};

export default LoginPage;
