import GroupForm from '@/components/GroupForm/GroupForm';
import AppBar from '@/components/common/AppBar';

const EditGroupPage = () => {
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log(formData);
  };

  return (
    <div className="flex min-h-dvh w-screen flex-col overflow-x-hidden px-4">
      <AppBar backButton title={'모임 일정 등록하기'} />
      {/**
       * // TODO: 기본값을 서버에서 받아와서 넘겨줘야 합니다.
       */}
      <GroupForm
        onSubmit={handleSubmit}
        name=""
        description=""
        endDate={new Date().toString()}
        memo=""
        startDate={new Date().toString()}
      />
    </div>
  );
};

export default EditGroupPage;
