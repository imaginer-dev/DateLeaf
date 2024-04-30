import InputForm from '../common/InputForm.tsx';
import { useJoinState } from '../../stores/joinStore.ts';

const EmailInput = () => {
  const { email, emailHandler } = useJoinState();

  return (
    <InputForm
      defaultValue={email}
      title={'이메일'}
      placeholder={'이메일을 입력하세요'}
      hint={'Hint Text'}
      onChange={(e) => emailHandler(e.target.value)}
      type={'email'}
      name={'email'}
    />
  );
};

export default EmailInput;
