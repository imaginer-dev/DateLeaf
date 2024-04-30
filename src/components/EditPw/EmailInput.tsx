import InputForm from '../common/InputForm.tsx';
import { useEditPwState } from '../../stores/editPwStore.ts';

const EmailInput = () => {
  const { email, emailHandler } = useEditPwState();

  return (
    <InputForm
      defaultValue={email}
      title={'이메일'}
      placeholder={'이메일을 입력하세요'}
      hint={'Hint Text'}
      onChange={(e) => emailHandler(e.target.value)}
      type={'email'}
      name={'email'}
    />
  );
};

export default EmailInput;
