import InputForm from '../common/InputForm.tsx';
import { useLoginState } from '../../stores/loginStore.ts';
import { isValidPassword } from '../../utils/authUtils.ts';

const PasswordInput = () => {
  const { password, passwordHandler } = useLoginState();

  return (
    <InputForm
      defaultValue={password}
      title={'Password'}
      placeholder={'패스워드를 입력해 주세요.'}
      hint={''}
      onChange={(e) => passwordHandler(e.target.value)}
      name={'password'}
      type={'password'}
      error={!isValidPassword(password)}
      errorText={'비밀번호는 6자리 이상이어야 합니다.'}
    />
  );
};

export default PasswordInput;
