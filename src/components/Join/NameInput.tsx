import InputForm from '../common/InputForm.tsx';
import { useJoinState } from '../../stores/joinStore.ts';

const NameInput = () => {
  const { name, nameHandler } = useJoinState();

  return (
    <InputForm
      defaultValue={name}
      title={'이름'}
      placeholder={'이름을 입력하세요'}
      hint={'Hint Text'}
      onChange={(e) => nameHandler(e.target.value)}
      type={'name'}
      name={'name'}
    />
  );
};

export default NameInput;
