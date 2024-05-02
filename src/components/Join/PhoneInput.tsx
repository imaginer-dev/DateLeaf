import InputForm from '../common/InputForm.tsx';
import { useJoinState } from '../../stores/joinStore.ts';
import { FormatPhone } from './FormatPhone.tsx';
import { LooseValidation, ValidateProcessor } from '../../utils/authUtils.ts';

const PhoneInput = () => {
  const { phone, phoneHandler } = useJoinState();
  const validator = new ValidateProcessor(new LooseValidation());
  const formattedPhone = validator.isValidPhone(phone) ? FormatPhone(phone) : phone;

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
      error={!validator.isValidPhone(phone)}
      value={formattedPhone}
      errorText={"※ '-' 제외 11자리를 입력해 주세요"}
    />
  );
};

export default PhoneInput;
