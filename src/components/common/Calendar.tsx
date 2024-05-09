import FullCalendar from '@fullcalendar/react';
import { EventClickArg } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { useRef, useState, useEffect } from 'react';

type Event = {
  title: string;
  start: Date | string;
};
interface EventCardsProps {
  events: Event[];
  date: Date | string | null;
}

const events = [
  { title: 'Meeting', start: new Date() },
  { title: 'Meeting', start: '2024-05-08' },
  { title: 'Meeting', start: '2024-05-08' },
  { title: 'Meeting', start: '2024-05-08' },
];

export function Calendar() {
  const [calendarHeight, setCalendarHeight] = useState<string | number>('auto');
  const calendarRef = useRef<FullCalendar | null>(null);
  const [selectedEvents, setSelectedEvents] = useState<Event[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateClick = (clickInfo: EventClickArg) => {
    if (clickInfo.event.start) {
      const clickStartDate = new Date(clickInfo.event.start);
      setSelectedDate(clickStartDate);

      const clickedStartDate = new Date(clickInfo.event.start).toDateString();
      setSelectedEvents(events.filter((event) => new Date(event.start).toDateString() === clickedStartDate));
    } else {
      console.log('not available');
    }
  };

  const handlePrev = () => {
    const calendarApi = calendarRef?.current?.getApi();
    if (calendarApi) {
      calendarApi.prev();
      setSelectedDate(null);
    } else {
      console.error('Calendar API is not available.');
    }
  };

  const handleNext = () => {
    const calendarApi = calendarRef?.current?.getApi();
    if (calendarApi) {
      calendarApi.next();
      setSelectedDate(null);
    } else {
      console.error('Calendar API is not available.');
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const updateSize = () => {
    const isMobile = window.innerWidth < 768;
    setCalendarHeight(isMobile ? 500 : 'auto');
    updateTitle();
  };

  const updateTitle = () => {
    const calendarApi = calendarRef?.current?.getApi();
    if (calendarApi) {
      const calendarView = calendarApi.view;

      const date = new Date(calendarView.currentStart);
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const newTitle = `${year}.${month}`;

      const titleElement = document.querySelector('.fc-toolbar-title');
      if (titleElement) {
        titleElement.textContent = newTitle;
      }
    }
  };

  useEffect(() => {
    const calendarApi = calendarRef?.current?.getApi();

    if (calendarApi) {
      calendarApi.on('datesSet', updateTitle);
    }

    updateTitle(); // 컴포넌트 마운트 시 제목 업데이트

    /* 캘린더 - 반응형 사이즈 */
    window.addEventListener('resize', updateSize);
    updateSize(); // 컴포넌트 마운트 시 화면 크기에 따른 업데이트

    return () => {
      window.removeEventListener('resize', updateSize);
      if (calendarApi) {
        calendarApi.off('datesSet', updateTitle);
      }
    };
  }, [updateSize]);

  return (
    <div>
      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        eventClick={handleDateClick}
        dayMaxEvents={2} //Max개수까지보이고 나머지는 more
        //navLinks={true} // 날짜/주 이름을 클릭하여 뷰를 변경할 수 있습니다.
        editable={true} // 이벤트를 수정할 수 있습니다.
        eventContent={renderEventContent}
        contentHeight={calendarHeight}
        titleFormat={{
          year: 'numeric',
          month: '2-digit',
        }}
        eventTimeFormat={{
          hour: '2-digit',
          minute: '2-digit',
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
          prevButton: { click: handlePrev },
          nextButton: { click: handleNext },
        }}
      />
      {selectedDate && <EventCards events={selectedEvents} date={selectedDate} />}
    </div>
  );
}

interface EventInfo {
  timeText: string;
  event: {
    title: string;
  };
}

function renderEventContent(eventInfo: EventInfo) {
  return (
    <>
      <div className="w-full border-0 bg-secondary p-0.5 text-white">
        <b className="border-0">{eventInfo.timeText}</b>
        <i> {eventInfo.event.title}</i>
      </div>
    </>
  );
}

function EventCards({ events, date }: EventCardsProps) {
  if (!date) {
    return <div>No date provided</div>; // date가 null인 경우 처리
  }

  const formattedDate = new Date(date)
    .toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    })
    .replace(/\. /g, '.')
    .slice(0, -1);
  console.log(formattedDate);

  return (
    <div>
      <h2>{formattedDate}</h2>
      <div className="flex overflow-x-auto">
        {events.map((event, index) => (
          <div key={index} className="m-2 min-w-[200px] bg-blue-200 p-2 text-white">
            <h3>{event.title}</h3>
            <p>{new Date(event.start).toLocaleTimeString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
