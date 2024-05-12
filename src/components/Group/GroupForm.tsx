import { FC, useState } from 'react';
import GroupFormNameInput from './GroupFormNameInput';
import GroupFormDescriptionInput from './GroupFormDescriptionInput';
import GroupFormDateInput from './GroupFormDateInput';
import UserInvite from '../common/UserInvite';
import GroupFormMemoInput from './GroupFormMemoInput';
import { Member } from '@/types/Member';

interface Props {
  name?: string;
  description?: string | null;
  startDate?: string;
  endDate?: string;
  memo?: string | null;
  memberList?: Member[];
  onSubmit: (e: React.FormEvent<HTMLFormElement>, userList: Member[]) => void;
}

const GroupForm: FC<Props> = ({
  name = '',
  description = '',
  startDate = new Date().toString(),
  endDate = new Date().toString(),
  memo = '',
  memberList = [],
  onSubmit,
}) => {
  const [member, setMember] = useState<Member[]>(memberList);

  const onClick = (newMember: Member) => {
    setMember((prev) => [...prev, newMember]);
  };

  return (
    <form
      onSubmit={(e) => onSubmit(e, member)}
      className="container mx-auto flex max-w-sm flex-1 flex-col gap-4 pb-[50px] pt-4"
    >
      <div className="flex h-full w-full flex-1 flex-col gap-4">
        <GroupFormNameInput name={name} />
        <GroupFormDescriptionInput description={description ?? ''} />
        <GroupFormDateInput startDate={startDate} endDate={endDate} />
        <UserInvite member={member} setMember={onClick} />
        <GroupFormMemoInput memo={memo ?? ''} />
      </div>
      <button type="submit" className="btn btn-outline btn-primary w-full">
        저장
      </button>
    </form>
  );
};

export default GroupForm;
