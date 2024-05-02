import InputForm from '../common/InputForm.tsx';
import { useJoinState } from '../../stores/joinStore.ts';
import { isValidPhone, formatPhone } from '../../utils/authUtils.ts';

const PhoneInput = () => {
  const { phone, phoneHandler } = useJoinState();
  const formattedPhone = isValidPhone(phone) ? formatPhone(phone) : phone;

  return (
    <InputForm
      title={'휴대폰 번호'}
      placeholder={"휴대폰 번호 입력 ('-' 제외 11자리 입력)"}
      hint={''}
      onChange={(e) => phoneHandler(e.target.value)}
      type={'phone'}
      name={'phone'}
      id={'phone-input'}
      aria-label={'join-phone-input'}
      error={!isValidPhone(phone)}
      value={formattedPhone}
      errorText={"※ '-' 제외 11자리를 입력해 주세요"}
    />
  );
};

export default PhoneInput;
