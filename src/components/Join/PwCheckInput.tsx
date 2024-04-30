import InputForm from '../common/InputForm.tsx';
import { useJoinState } from '../../stores/joinStore.ts';

const PwCheckInput = () => {
  const { pwCheck, pwCheckHandler } = useJoinState();

  return (
    <InputForm
      defaultValue={pwCheck}
      title={'비밀번호 확인'}
      placeholder={'Password Check'}
      hint={'Hint Text'}
      onChange={(e) => pwCheckHandler(e.target.value)}
      name={'pwCheck'}
      type={'password'}
    />
  );
};

export default PwCheckInput;
