import GroupForm from '@/components/Group/GroupForm';
import AppBar from '@/components/common/AppBar';
import { useParams } from 'react-router-dom';
import { Loading } from '.';
import { Member } from '@/types/Member';
import { useUpdateGroup } from '@/react-queries/useUpdateGroup.ts';
import { useGetGroupScheduleDefaultData } from '@/hooks/useGetGroupScheduleDefaultData';
import Dialog from '@/components/common/Dialog';

const EditGroupPage = () => {
  const params = useParams<{ groupId: string }>();
  const groupId = params.groupId!;

  const { groupMemberData, groupData, error, isLoading, isError } = useGetGroupScheduleDefaultData(groupId);
  const { mutate, errorText, successDialog, errorDialogRef, isPending: updateIsPending } = useUpdateGroup();

  if (isError) {
    return <div>{error!.message}</div>;
  }

  if ((!groupMemberData || !groupData) && !isLoading) {
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
      groupId,
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
          <AppBar backButton title={'모임 수정하기'} />
          <GroupForm
            onSubmit={handleSubmit}
            name={groupData!.name}
            description={groupData!.description}
            startDate={groupData!.start_date}
            endDate={groupData!.end_date}
            memo={groupData!.memo}
            memberList={groupMemberData}
            isLoading={updateIsPending}
          />
          <Dialog ref={errorDialogRef} desc={errorText} />
          <Dialog ref={successDialog} desc="성공적으로 수정했습니다." />
        </div>
      )}
    </>
  );
};

export default EditGroupPage;
