import GroupForm from '@/components/Group/GroupForm';
import AppBar from '@/components/common/AppBar';
import { useParams } from 'react-router-dom';
import { Loading } from '.';
import { Member } from '@/types/Member';
import { useUpdateGroupSchedule } from '@/react-queries/useUpdateGroupSchedule';
import { useGetGroupScheduleDefaultData } from '@/hooks/useGetGroupScheduleDefaultData';
import Dialog from '@/components/common/Dialog';

const EditGroupSchedulePage = () => {
  const params = useParams<{ groupId: string; scheduleId: string }>();
  const scheduleId = params.scheduleId!;
  const groupId = params.groupId!;

  const { groupMemberData, groupScheduleData, error, isLoading, isError } = useGetGroupScheduleDefaultData(
    scheduleId,
    groupId,
  );
  const { mutate, successDialog, errorDialogRef, isPending: updateIsPending } = useUpdateGroupSchedule();

  if (isError) {
    return <div>{error!.message}</div>;
  }

  if ((!groupMemberData || !groupScheduleData) && !isLoading) {
    return <div>데이터를 찾을 수 없습니다.</div>;
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>, userList: Member[]) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const updatePayload = {
      name: formData.get('name') as string,
      description: formData.get('description') as string,
      startDate: formData.get('startDate') as string,
      endDate: formData.get('endDate') as string,
      memo: formData.get('memo') as string,
      scheduleId,
      newMemberList: userList,
    };
    mutate(updatePayload);
  };

  return (
    <>
      {isLoading ? (
        <Loading display="spinner" size="lg" color="primary" />
      ) : (
        <div className="flex min-h-dvh w-screen flex-col overflow-x-hidden px-4">
          <AppBar backButton title={'모임 일정 수정하기'} />
          <GroupForm
            onSubmit={handleSubmit}
            name={groupScheduleData!.title}
            description={groupScheduleData!.description}
            startDate={groupScheduleData!.start_date}
            endDate={groupScheduleData!.end_date}
            memo={groupScheduleData!.memo}
            memberList={groupMemberData}
            isLoading={updateIsPending}
          />
          <Dialog ref={errorDialogRef} desc="오류가 발생했습니다. 다시시도해 주세요." />
          <Dialog ref={successDialog} desc="성공적으로 수정했습니다." />
        </div>
      )}
    </>
  );
};

export default EditGroupSchedulePage;
