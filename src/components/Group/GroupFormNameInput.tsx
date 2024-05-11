import { FC } from 'react';
import InputForm from '../common/InputForm';

interface Props {
  name: string;
}

const GroupFormNameInput: FC<Props> = ({ name = '' }) => {
  return (
    <InputForm
      id="group-name-input"
      type="text"
      defaultValue={name}
      placeholder="모임명을 입력하세요"
      onChange={() => {}}
      title="모임명 *"
      hint=""
      name="name"
    />
  );
};

export default GroupFormNameInput;
