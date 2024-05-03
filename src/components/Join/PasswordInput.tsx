import InputForm from '../common/InputForm.tsx';
import { useJoinState } from '../../stores/joinStore.ts';
import { LooseValidation, ValidateProcessor } from '../../utils/authUtils.ts';

const PasswordInput = () => {
  const { password, passwordHandler } = useJoinState();
  const validator = new ValidateProcessor(new LooseValidation());

  return (
    <InputForm
      defaultValue={password}
      title={'비밀번호'}
      placeholder={'비밀번호 입력'}
      hint={''}
      onChange={(e) => passwordHandler(e.target.value)}
      name={'password'}
      type={'password'}
      id={'password-input'}
      aria-label={'join-password-input'}
      error={!validator.isValidPassword(password)}
      errorText={'※ 비밀번호는 6자리 이상이어야 합니다.'}
    />
  );
};

export default PasswordInput;
