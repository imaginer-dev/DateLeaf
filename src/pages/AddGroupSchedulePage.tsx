import GroupForm from '@/components/GroupForm/GroupForm';
import AppBar from '@/components/common/AppBar';

const AddGroupPage = () => {
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log(formData.get('name'));
  };

  return (
    <div className="flex min-h-dvh w-screen flex-col overflow-x-hidden px-6">
      <AppBar backButton title={'모임 일정 등록하기'} />
      <GroupForm onSubmit={handleSubmit} />
    </div>
  );
};

export default AddGroupPage;
