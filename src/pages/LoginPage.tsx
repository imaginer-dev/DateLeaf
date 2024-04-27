import LoginPageLayout from '../layouts/LoginPageLayout.tsx';
import VerticalLogo from '../components/common/VerticalLogo.tsx';
import LoginForm from '../components/login/LoginForm.tsx';
import EmailInput from '../components/login/EmailInput.tsx';
import PasswordInput from '../components/login/PasswordInput.tsx';
import LoginFormActions from '../components/login/LoginFormActions.tsx';
import LoginButton from '../components/login/LoginButton.tsx';
import LoginNavigation from '../components/login/LoginNavigation.tsx';
import LoginNavigationLink from '../components/login/LoginNavigationLink.tsx';

const LoginPage = () => {
  return (
    <LoginPageLayout>
      <VerticalLogo />
      <LoginForm>
        <EmailInput />
        <PasswordInput />
      </LoginForm>
      <LoginFormActions>
        <LoginButton />
        <LoginNavigation>
          <LoginNavigationLink text={'비밀번호 찾기'} to={'/'} />
          <LoginNavigationLink text={'회원가입'} to={'/'} />
        </LoginNavigation>
      </LoginFormActions>
    </LoginPageLayout>
  );
};

export default LoginPage;
