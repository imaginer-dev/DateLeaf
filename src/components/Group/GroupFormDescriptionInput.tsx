import { FC } from 'react';
import InputForm from '../common/InputForm';

interface Props {
  description: string;
}

const GroupFormDescriptionInput: FC<Props> = ({ description }) => {
  return (
    <InputForm
      id="group-description-input"
      type="text"
      defaultValue={description}
      placeholder="모임 설명을 입력하세요"
      onChange={() => {}}
      title="모임 설명"
      hint=""
      name="description"
    />
  );
};

export default GroupFormDescriptionInput;
