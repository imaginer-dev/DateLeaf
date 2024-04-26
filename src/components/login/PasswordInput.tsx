import InputForm from '../common/InputForm.tsx';
import { useLoginState } from '../../stores/loginStore.ts';

const PasswordInput = () => {
  const { password, passwordHandler } = useLoginState();

  return (
    <InputForm
      defaultValue={password}
      title={'Password'}
      placeholder={'패스워드를 입력해 주세요.'}
      hint={'Hint text.'}
      onChange={(e) => passwordHandler(e.target.value)}
      name={'password'}
      type={'password'}
    />
  );
};

export default PasswordInput;
