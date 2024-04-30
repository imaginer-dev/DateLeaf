import InputForm from '../common/InputForm.tsx';
import { useEditPwState } from '../../stores/editPwStore.ts';

const NameInput = () => {
  const { name, nameHandler } = useEditPwState();

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
