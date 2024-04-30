import JoinPageLayout from '../layouts/JoinPageLayout.tsx';
import VerticalLogo from '../components/common/VerticalLogo.tsx';
import JoinForm from '../components/Join/JoinForm.tsx';
import NameInput from '../components/Join/NameInput.tsx';
import PhoneInput from '../components/Join/PhoneInput.tsx';
import EmailInput from '../components/Join/EmailInput.tsx';
import PasswordInput from '../components/Join/PasswordInput.tsx';
import PwCheckInput from '../components/Join/PwCheckInput.tsx';
import TermsCheckInput from '../components/Join/TermsCheckInput.tsx';
import JoinFormActions from '../components/Join/JoinFormActions.tsx';
import JoinButton from '../components/Join/JoinButton.tsx';

const JoinPage = () => {
  return (
    <JoinPageLayout>
      <VerticalLogo />
      <JoinForm>
        <NameInput />
        <PhoneInput />
        <EmailInput />
        <PasswordInput />
        <PwCheckInput />
        <TermsCheckInput />
      </JoinForm>
      <JoinFormActions>
        <JoinButton />
      </JoinFormActions>
    </JoinPageLayout>
  );
};

export default JoinPage;
