import InputForm from '../common/InputForm.tsx';
import { useJoinState } from '../../stores/joinStore.ts';
import { LooseValidation, ValidateProcessor } from '../../utils/authUtils.ts';

const PwCheckInput = () => {
  const { pwCheck, password, pwCheckHandler } = useJoinState();
  const validator = new ValidateProcessor(new LooseValidation());

  return (
    <InputForm
      defaultValue={pwCheck}
      title={'비밀번호 확인'}
      placeholder={'비밀번호 확인'}
      hint={''}
      onChange={(e) => pwCheckHandler(e.target.value)}
      type={'password'}
      name={'pwCheck'}
      id={'pwCheck-input'}
      aria-label={'join-pwCheck-input'}
      error={!validator.isValidPwCheck(pwCheck, password)}
      errorText={'※ 비밀번호가 일치하지 않습니다.'}
    />
  );
};

export default PwCheckInput;
