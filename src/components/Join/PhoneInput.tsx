import InputForm from '../common/InputForm.tsx';
import { useJoinState } from '../../stores/joinStore.ts';

const PhoneInput = () => {
  const { phone, phoneHandler } = useJoinState();

  return (
    <InputForm
      defaultValue={phone}
      title={'핸드폰 번호'}
      placeholder={'핸드폰 번호를 입력하세요'}
      hint={'Hint Text'}
      onChange={(e) => phoneHandler(e.target.value)}
      type={'phone'}
      name={'phone'}
    />
  );
};

export default PhoneInput;
