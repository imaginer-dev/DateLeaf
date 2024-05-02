import InputForm from '../common/InputForm.tsx';
import { useJoinState } from '../../stores/joinStore.ts';
import { LooseValidation, ValidateProcessor } from '../../utils/authUtils.ts';

const EmailInput = () => {
  const { email, emailHandler } = useJoinState();
  const validator = new ValidateProcessor(new LooseValidation());

  return (
    <InputForm
      defaultValue={email}
      title={'이메일'}
      placeholder={'이메일 입력'}
      hint={''}
      onChange={(e) => emailHandler(e.target.value)}
      type={'email'}
      name={'email'}
      id={'email-input'}
      aria-label={'join-email-input'}
      error={!validator.isValidEmail(email)}
      errorText={'※ 올바른 이메일을 입력해 주세요.'}
    />
  );
};

export default EmailInput;
