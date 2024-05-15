import AppBar from '@/components/common/AppBar.tsx';
import Calendar from '../components/common/Calendar.tsx';
import CreateEventDialog from '@/components/MyCalendar/CreateEventButton.tsx';
import HamburgerButton from '@/components/common/SideBar/HamburgerButton.tsx';
import { getPersonalSchedule, deletePersonalSchedule } from '@/apis/personalScheduleApi';
import { useEventState } from '@/stores/myEventsStore';
import { useEffect, useRef } from 'react';
import Dialog from '@/components/common/Dialog.tsx';

interface DialogElement {
  openModal: () => void;
  closeModal: () => void;
}

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

  const dialogRef = useRef<DialogElement | null>(null);

  const openModal = (dialogRef: React.RefObject<DialogElement>) => {
    if (dialogRef.current) {
      dialogRef.current?.openModal();
    }
  };

  return (
    <div className="lg:ml-80">
      <AppBar backButton={false} IconButton={<HamburgerButton />} calendarName="내 캘린더" />
      <main className="z-1 relative flex-grow">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div>
            <Calendar db_events={db_events} onDeleteClicked={onDeleteClicked} />
            <button type="button" className="btn w-full bg-primary text-base-100" onClick={() => openModal(dialogRef)}>
              새 일정 추가하기
            </button>
            <Dialog ref={dialogRef} title="일정 추가" desc={''} children={<CreateEventDialog />} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default MyCalendarPage;
