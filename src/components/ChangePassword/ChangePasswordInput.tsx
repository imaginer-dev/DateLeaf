import { useChangePasswordState } from '@/stores/changePasswordStore';
import { LooseValidation, ValidateProcessor } from '@/utils/authUtils';
import InputForm from '../common/InputForm';

const ChangePasswordInput = () => {
  const { password, passwordHandler } = useChangePasswordState();
  const validator = new ValidateProcessor(new LooseValidation());
  return (
    <InputForm
      defaultValue={password}
      title={'비밀번호'}
      placeholder={'변경할 비밀번호를 입력해 주세요.'}
      hint={''}
      onChange={(e) => passwordHandler(e.target.value)}
      name={'password'}
      type={'password'}
      id={'change-password-input'}
      aria-label={'change-password-input'}
      error={!validator.isValidPassword(password)}
      errorText={'비밀번호는 6자리 이상이어야 합니다.'}
    />
  );
};

export default ChangePasswordInput;
