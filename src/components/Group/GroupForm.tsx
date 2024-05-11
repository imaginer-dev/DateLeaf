import { FC, useState } from 'react';
import GroupFormNameInput from './GroupFormNameInput';
import GroupFormDescriptionInput from './GroupFormDescriptionInput';
import GroupFormDateInput from './GroupFormDateInput';
import UserInvite from '../common/UserInvite';
import GroupFormMemoInput from './GroupFormMemoInput';

interface Props {
  name?: string;
  description?: string | null;
  startDate?: string;
  endDate?: string;
  memo?: string | null;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
}

const GroupForm: FC<Props> = ({
  name = '',
  description = '',
  startDate = new Date().toString(),
  endDate = new Date().toString(),
  memo = '',
  onSubmit,
}) => {
  const [member, setMember] = useState<any[]>([]);

  return (
    <form onSubmit={onSubmit} className="container mx-auto flex max-w-sm flex-1 flex-col gap-4 pb-[50px] pt-4">
      <div className="flex h-full w-full flex-1 flex-col gap-4">
        <GroupFormNameInput name={name} />
        <GroupFormDescriptionInput description={description ?? ''} />
        <GroupFormDateInput startDate={startDate} endDate={endDate} />
        <UserInvite member={member} setMember={setMember} />
        <GroupFormMemoInput memo={memo ?? ''} />
      </div>
      <button type="submit" className="btn btn-outline btn-primary w-full">
        저장
      </button>
    </form>
  );
};

export default GroupForm;
