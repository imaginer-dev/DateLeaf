import InputForm from '../common/InputForm.tsx';
import { useJoinState } from '../../stores/joinStore.ts';
import { isValidName } from '../../utils/authUtils.ts';

const NameInput = () => {
  const { name, nameHandler } = useJoinState();

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
      error={!isValidName(name)}
      errorText={'※ 이름을 입력해 주세요.'}
    />
  );
};

export default NameInput;
