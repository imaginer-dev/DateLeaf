import AppBar from '@/components/common/AppBar.tsx';
import Calendar from '../components/common/Calendar.tsx';
import CreateEventButton from '@/components/MyCalendar/CreateEventButton.tsx';
import HamburgerButton from '@/components/common/SideBar/HamburgerButton.tsx';

const MyCalendarPage: React.FC = () => {
  return (
    <div className="lg:ml-80">
      <AppBar backButton={false} IconButton={<HamburgerButton />} calendarName="내 캘린더" />
      <main className="z-1 relative flex-grow">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="rounded p-6 px-4 sm:px-0">
            <Calendar />
            <CreateEventButton />
          </div>
        </div>
      </main>
    </div>
  );
};

export default MyCalendarPage;
