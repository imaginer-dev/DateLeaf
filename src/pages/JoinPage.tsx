import JoinPageLayout from '../layouts/JoinPageLayout.tsx';
import VerticalLogo from '../components/common/VerticalLogo.tsx';
import {
  JoinForm,
  NameInput,
  NickNameInput,
  PhoneInput,
  EmailInput,
  PasswordInput,
  PwCheckInput,
  TermsCheckInput,
  JoinFormActions,
  JoinButton,
} from '../components/Join';

const JoinPage = () => {
  return (
    <JoinPageLayout>
      <VerticalLogo />
      <JoinForm>
        <NameInput />
        <NickNameInput />
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
