import InputForm from '../common/InputForm.tsx';
import { useJoinState } from '../../stores/joinStore.ts';

const PasswordInput = () => {
  const { password, passwordHandler } = useJoinState();

  return (
    <InputForm
      defaultValue={password}
      title={'비밀번호'}
      placeholder={'Password'}
      hint={'Hint Text'}
      onChange={(e) => passwordHandler(e.target.value)}
      name={'password'}
      type={'password'}
    />
  );
};

export default PasswordInput;
