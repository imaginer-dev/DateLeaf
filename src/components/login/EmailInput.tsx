import InputForm from '../common/InputForm.tsx';
import { useLoginState } from '../../stores/loginStore.ts';
import { isValidEmail } from '../../utils/authUtils.ts';

const EmailInput = () => {
  const { email, emailHandler } = useLoginState();

  return (
    <InputForm
      defaultValue={email}
      title={'Email'}
      placeholder={'이메일을 입력하세요'}
      hint={''}
      onChange={(e) => emailHandler(e.target.value)}
      type={'email'}
      name={'email'}
      aria-label={'login-email-input'}
      error={!isValidEmail(email)}
      errorText={'올바른 이메일을 입력해 주세요.'}
    />
  );
};

export default EmailInput;
