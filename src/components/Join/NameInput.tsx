import InputForm from '../common/InputForm.tsx';
import { useJoinState } from '../../stores/joinStore.ts';
import { LooseValidation, ValidateProcessor } from '../../utils/authUtils.ts';

const NameInput = () => {
  const { name, nameHandler } = useJoinState();
  const validator = new ValidateProcessor(new LooseValidation());

  return (
    <InputForm
      defaultValue={name}
      title={'이름'}
      placeholder={'이름(필수)'}
      hint={''}
      onChange={(e) => nameHandler(e.target.value)}
      type={'name'}
      name={'name'}
      id={'name-input'}
      aria-label={'join-name-input'}
      error={!validator.isValidName(name)}
      errorText={'※ 이름을 입력해 주세요.'}
    />
  );
};

export default NameInput;
