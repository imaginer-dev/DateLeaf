import InputForm from '../common/InputForm.tsx';
import { useJoinState } from '../../stores/joinStore.ts';
import { LooseValidation, ValidateProcessor } from '../../utils/authUtils.ts';

const NickNameInput = () => {
  const { nickName, nickNameHandler } = useJoinState();
  const validator = new ValidateProcessor(new LooseValidation());

  return (
    <InputForm
      defaultValue={nickName}
      title={'닉네임'}
      placeholder={'닉네임 입력'}
      hint={''}
      onChange={(e) => nickNameHandler(e.target.value)}
      type={'name'}
      name={'nickName'}
      id={'nickName-input'}
      aria-label={'join-nickName-input'}
      error={!validator.isValidNickName(nickName)}
      errorText={'※ 닉네임은 2~12자 이내여야 합니다.'}
    />
  );
};

export default NickNameInput;
