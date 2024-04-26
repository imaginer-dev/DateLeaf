import InputForm from '../common/InputForm.tsx';
import { useLoginState } from '../../stores/loginStore.ts';

const EmailInput = () => {
  const { email, emailHandler } = useLoginState();

  return (
    <InputForm
      defaultValue={email}
      title={'Email'}
      placeholder={'이메일을 입력하세요'}
      hint={'Hint Text'}
      onChange={(e) => emailHandler(e.target.value)}
      type={'email'}
      name={'email'}
    />
  );
};

export default EmailInput;
