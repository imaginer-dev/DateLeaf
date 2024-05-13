import { addGroupSchedule } from '@/apis/groupScheduleApis';
import GroupForm from '@/components/Group/GroupForm';
import AppBar from '@/components/common/AppBar';
import { Member } from '@/types/Member';

const AddGroupPage = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>, userList: Member[]) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const addSchedule = {
      title: formData.get('name') as string,
      description: formData.get('description') as string,
      startDate: formData.get('startDate') as string,
      endDate: formData.get('endDate') as string,
      memo: formData.get('memo') as string,
      newMemberList: userList,
    };
    addGroupSchedule(addSchedule);
  };

  return (
    <div className="flex min-h-dvh w-screen flex-col overflow-x-hidden px-6">
      <AppBar backButton title={'모임 일정 등록하기'} />
      <GroupForm onSubmit={handleSubmit} />
    </div>
  );
};

export default AddGroupPage;
