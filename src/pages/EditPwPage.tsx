import CenterPageLayout from '../layouts/CenterPageLayout.tsx';
import LoginForm from '../components/login/LoginForm.tsx';
import EmailInput from '../components/EditPw/EmailInput.tsx';
import NameInput from '../components/EditPw/NameInput.tsx';
import LoginFormActions from '../components/login/LoginFormActions.tsx';
import EditPwButton from '../components/EditPw/EditPwButton.tsx';

const EditPwPage = () => {
  return (
    <CenterPageLayout>
      <LoginForm>
        <NameInput />
        <EmailInput />
      </LoginForm>
      <LoginFormActions>
        <EditPwButton />
      </LoginFormActions>
    </CenterPageLayout>
  );
};

export default EditPwPage;
