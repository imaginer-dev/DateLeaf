import AppBar from '@/components/common/AppBar';
import HamburgerButton from '@/components/common/SideBar/HamburgerButton';
import Calendar from '@/components/common/Calendar';
import CreateEventDialog from '@/components/MyCalendar/CreateEventButton';
import { useParams } from 'react-router-dom';
import { Loading } from '.';
import { DB_Events } from '@/utils';
import { useGetOneGroup } from '@/react-queries/useGetOneGroup.ts';
import { useGetAllMemberSchedule } from '@/react-queries/useGetAllMemberSchedule.ts';

const GroupSchedulePage = () => {
  // TODO: 캘린더 수정해서 이벤트 리스트를 외부에서 받을 수 있도록 해야함.
  // TODO: 그룹 스케줄을 받아오는게 아닌 그룹 정보를 받아와 이름을 표현해줘야 한다.
  const params = useParams<{ groupId: string }>();
  const groupId = params.groupId!;

  const { data, isLoading, isError } = useGetOneGroup(groupId);
  const {
    data: memberScheduleList,
    isLoading: memberScheduleListLoading,
    isError: memberScheduleListError,
  } = useGetAllMemberSchedule(groupId);

  if (isError || memberScheduleListError) {
    return <div>에러가 발생했습니다.</div>;
  }

  console.log(data);

  const db_events: DB_Events[] = [];
  if (memberScheduleList) {
    const eventList: DB_Events[] = memberScheduleList.map((item) => ({
      start_date: item.start_date,
      end_date: item.end_date,
      title: item.title,
      id: item.id,
    }));
    db_events.push(...eventList);
  }

  const onDelete = (id: number) => {
    console.log('delete group id: ', id);
    // TODO: delete group schedule with id
  };

  return (
    <div className="lg:ml-80">
      {(isLoading || memberScheduleListLoading) && <Loading size="lg" display="spinner" color="primary" />}
      <AppBar backButton={false} IconButton={<HamburgerButton />} calendarName={data?.name ?? ''} />
      <main className="z-1 relative flex-grow">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded bg-white p-6 px-4 sm:px-0">
            <Calendar db_events={db_events} onDeleteClicked={onDelete} />
          </div>
        </div>
      </main>
      <CreateEventDialog />
    </div>
  );
};

export default GroupSchedulePage;
