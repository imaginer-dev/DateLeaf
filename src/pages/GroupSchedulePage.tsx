import AppBar from '@/components/common/AppBar';
import HamburgerButton from '@/components/common/SideBar/HamburgerButton';
import Calendar from '@/components/common/Calendar';
import CreateEventButton from '@/components/MyCalendar/CreateEventButton';
import { useParams } from 'react-router-dom';
import { useGetOneGroupSchedule } from '@/react-queries/useGetOneGroupSchedule';
import { Loading } from '.';

const GroupSchedulePage = () => {
  // TODO: 캘린더 수정해서 이벤트 리스트를 외부에서 받을 수 있도록 해야함.
  // TODO: 그룹 스케줄을 받아오는게 아닌 그룹 정보를 받아와 이름을 표현해줘야 한다.
  const params = useParams<{ groupId: string }>();
  const groupId = params.groupId!;

  const { data, isLoading, isError } = useGetOneGroupSchedule(groupId);

  if (isError) {
    return <div>에러가 발생했습니다.</div>;
  }

  console.log(data);

  return (
    <div className="lg:ml-80">
      {isLoading && <Loading size="lg" display="spinner" color="primary" />}
      <AppBar backButton={false} IconButton={<HamburgerButton />} calendarName={data?.title ?? ''} />
      <main className="z-1 relative flex-grow">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded bg-white p-6 px-4 sm:px-0">
            <Calendar />
          </div>
        </div>
      </main>
      <CreateEventButton />
    </div>
  );
};

export default GroupSchedulePage;
