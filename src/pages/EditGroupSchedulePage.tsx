import GroupForm from '@/components/Group/GroupForm';
import AppBar from '@/components/common/AppBar';
import { useGetOneGroupSchedule } from '@/react-queries/useGetOneGroupSchedule';
import { useParams } from 'react-router-dom';
import { Loading } from '.';
import { Member } from '@/types/Member';

const EditGroupSchedulePage = () => {
  const params = useParams<{ groupId: string; scheduleId: string }>();
  const { scheduleId } = params;
  const { data, isError, error, isLoading } = useGetOneGroupSchedule(scheduleId!);

  if (isError) {
    // TODO: 에러 처리
    return <div>{error.message}</div>;
  }

  if (!data) {
    // TODO: 에러 처리
    return <div>데이터를 찾을 수 없습니다.</div>;
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>, userList: Member[]) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log(formData.get('name'));
    console.log(formData.get('description'));
    console.log(formData.get('startDate'));
    console.log(formData.get('endDate'));
    console.log(formData.get('memo'));
    console.log('userList', userList);
  };

  return (
    <>
      {isLoading && <Loading display="spinner" size="lg" color="primary" />}
      <div className="flex min-h-dvh w-screen flex-col overflow-x-hidden px-4">
        <AppBar backButton title={'모임 일정 등록하기'} />
        <GroupForm
          onSubmit={handleSubmit}
          name={data.title}
          description={data.description}
          startDate={data.start_date}
          endDate={data.end_date}
          memo={data.memo}
        />
      </div>
    </>
  );
};

export default EditGroupSchedulePage;
