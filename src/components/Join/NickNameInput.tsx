import InputForm from '../common/InputForm.tsx';
import { useJoinState } from '../../stores/joinStore.ts';

const NickNameInput = () => {
  const { nickName, nickNameHandler } = useJoinState();

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
    />
  );
};

export default NickNameInput;
