import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { useRef, useState, useEffect } from 'react';

const events = [
  { title: 'Meeting', start: new Date() },
  { title: 'Meeting2', start: '2024-05-08', end: '2024-05-12', backgroundColor: 'red', borderColor: 'red' },
  { title: 'Meeting3', start: '2024-05-08', end: '2024-05-10', backgroundColor: 'green', borderColor: 'green' },
  { title: 'Meeting4', start: '2024-05-08', end: '2024-05-11' },
];

const Calendar: React.FC = () => {
  const [calendarHeight, setCalendarHeight] = useState<string | number>('auto');
  const calendarRef = useRef<FullCalendar | null>(null);
  const handlePrev = () => {
    const calendarApi = calendarRef?.current?.getApi();
    if (calendarApi) {
      calendarApi.prev();
    } else {
      console.error('Calendar API is not available.');
    }
  };

  const handleNext = () => {
    const calendarApi = calendarRef?.current?.getApi();
    if (calendarApi) {
      calendarApi.next();
    } else {
      console.error('Calendar API is not available.');
    }
  };

  useEffect(() => {
    const updateSize = () => {
      const isMobile = window.innerWidth < 768;
      setCalendarHeight(isMobile ? 500 : 'auto');
    };

    window.addEventListener('resize', updateSize);
    updateSize();

    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <div>
      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        dayMaxEvents={2} //Max개수까지보이고 나머지는 more
        navLinks={true} // 날짜/주 이름을 클릭하여 뷰를 변경할 수 있습니다.
        editable={true} // 이벤트를 수정할 수 있습니다.
        eventContent={renderEventContent}
        contentHeight={calendarHeight}
        titleFormat={{
          year: 'numeric',
          month: '2-digit',
          meridiem: false,
        }}
        dayHeaderFormat={{
          weekday: 'short',
        }}
        headerToolbar={{
          left: 'prevButton',
          center: 'title',
          right: 'nextButton',
        }}
        customButtons={{
          prevButton: {
            icon: 'chevron-left',
            click: handlePrev,
          },
          nextButton: {
            icon: 'chevron-right',
            click: handleNext,
          },
        }}
      />
    </div>
  );
};

interface EventInfo {
  timeText: string;
  event: {
    title: string;
  };
}

function renderEventContent(eventInfo: EventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}

export default Calendar;
