import { FC, useState } from 'react';
import InputForm from '../common/InputForm';
import { isValidGroupScheduleName } from '@/utils/groupScheduleUtils';

interface Props {
  name: string;
}

const GroupFormNameInput: FC<Props> = ({ name = '' }) => {
  const [isError, setIsError] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsError(!isValidGroupScheduleName(e.target.value));
  };

  return (
    <InputForm
      id="group-name-input"
      type="text"
      defaultValue={name}
      placeholder="모임명을 입력하세요"
      onChange={onChange}
      title="모임명 *"
      hint=""
      error={isError}
      errorText="모임명을 입력해주세요."
      name="name"
    />
  );
};

export default GroupFormNameInput;
