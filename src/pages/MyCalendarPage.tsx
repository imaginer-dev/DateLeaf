import AppBar from '@/components/common/AppBar.tsx';
import Calendar from '../components/common/Calendar.tsx';
import CreateEventButton from '@/components/MyCalendar/CreateEventButton.tsx';
import HamburgerButton from '@/components/common/SideBar/HamburgerButton.tsx';
import { getPersonalSchedule, deletePersonalSchedule } from '@/apis/personalScheduleApi';
import { useEventState } from '@/stores/myEventsStore';
import { useEffect } from 'react';

const MyCalendarPage: React.FC = () => {
  const { db_events, addDBEvents } = useEventState();

  useEffect(() => {
    getPersonalSchedule().then((schedule) => {
      schedule.map((x) => {
        addDBEvents({ ...x });
      });
    });
  }, [addDBEvents]);

  const onDeleteClicked = (id: number) => {
    console.log('delete : ', id);
    deletePersonalSchedule(id)
      .then((val) => {
        console.log('delete done!', val);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="lg:ml-80">
      <AppBar backButton={false} IconButton={<HamburgerButton />} calendarName="내 캘린더" />
      <main className="z-1 relative flex-grow">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div>
            <Calendar db_events={db_events} onDeleteClicked={onDeleteClicked} />
            <CreateEventButton />
          </div>
        </div>
      </main>
    </div>
  );
};

export default MyCalendarPage;
