import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { useRef, useState, useEffect, useCallback } from 'react';
// import { formatDateRange, formatTime } from '../../utils/dateUtils';
import { Events, DB_Events } from '../../utils/index.ts';
import { formatDateRange } from '../../utils/dateUtils';
import CreateEventButton from '@/components/MyCalendar/CreateEventButton.tsx';

interface EventInfo {
  timeText: string;
  event: {
    title: string;
  };
}

interface EventCardsProps {
  events: DB_Events[];
  date: string | null;
  onDelete: (id: number) => void;
}

interface CalendarProps {
  db_events: DB_Events[];
  onDeleteClicked: (id: number) => void;
}

export default function Calendar({ db_events, onDeleteClicked }: CalendarProps) {
  const [calendarHeight, setCalendarHeight] = useState<string | number>('auto');
  const calendarRef = useRef<FullCalendar | null>(null);
  const [selectedEvents, setSelectedEvents] = useState<DB_Events[]>([]);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  useEffect(() => {
    console.log('mounted!');
  }, []);
  /*
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
  */

  const handleDateSelection = (dateClickInfo: { dateStr: string }) => {
    console.log(dateClickInfo);
    const clickedDateStr = dateClickInfo.dateStr;
    setSelectedDate(clickedDateStr);
    setSelectedEvents(
      db_events.filter(
        (event) =>
          clickedDateStr >= event.start_date.split('T')[0] &&
          clickedDateStr <= (event.end_date ? event.end_date.split('T')[0] : event.start_date.split('T')[0]),
      ),
    );
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

  const updateSize = useCallback(() => {
    setCalendarHeight(window.innerWidth < 768 ? 500 : 'auto');
  }, []);

  /*
  const updateTitle = () => {
    const calendarApi = calendarRef?.current?.getApi();
    if (calendarApi) {
      const calendarView = calendarApi.view;
      console.log('View start date:', calendarView.currentStart);

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
  */

  useEffect(() => {
    /*
    const calendarApi = calendarRef?.current?.getApi();
    if (calendarApi) {
      calendarApi.on('datesSet', updateTitle);
    }

    updateTitle(); // 컴포넌트 마운트 시 제목 업데이트
    */

    /* 캘린더 - 반응형 사이즈 */
    window.addEventListener('resize', updateSize);
    updateSize(); // 컴포넌트 마운트 시 화면 크기에 따른 업데이트

    return () => {
      window.removeEventListener('resize', updateSize);
      /*
      if (calendarApi) {
        calendarApi.off('datesSet', updateTitle);
      }
      */
    };
  }, [updateSize]);

  const events: Events[] = [];
  db_events.map((event) => {
    events.push({ ...event, start: event.start_date, end: event.end_date });
  });

  return (
    <div>
      <div className="rounded bg-white p-7 px-4">
        <FullCalendar
          ref={calendarRef}
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={events}
          // eventClick={handleDateClick}
          dateClick={handleDateSelection}
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
      </div>
      <div className="eventCardList mt-10">
        {selectedDate && <EventCards events={selectedEvents} date={selectedDate} onDelete={onDeleteClicked} />}
      </div>
    </div>
  );
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

function EventCards({ events, date, onDelete }: EventCardsProps) {
  console.log(events, date);
  const [menuOpen, setMenuOpen] = useState(-1);

  if (!events.length) {
    return (
      <div className="min-h-[150px] min-w-[240px] bg-white p-4 text-black">
        일정이 없습니다. <br />
        일정을 등록해주세요!
      </div>
    );
  }

  return (
    <div>
      <h2 className="mb-2 ml-2">{date}</h2>
      <div className="flex gap-5 overflow-x-auto">
        {events.map((event, index) => {
          const eventDateRange = formatDateRange(event.start_date, event.end_date);
          // const eventTime = formatTime(event.start_date);
          return (
            <div key={index} className="relative min-h-[150px] min-w-[240px] bg-white p-4 text-black">
              <h3>{event.title}</h3>
              <p className="mt-1 text-xs">{eventDateRange}</p>
              {/* <p className="mt-1 text-xs">{eventTime}</p> */}
              {/* 메뉴 버튼 */}
              <div
                className="absolute right-2 top-2 flex cursor-pointer flex-col items-center justify-center"
                onClick={() => setMenuOpen(menuOpen === index ? -1 : index)}
              >
                <div className="mb-1 h-1 w-1 rounded-full bg-[#429400]"></div>
                <div className="mb-1 h-1 w-1 rounded-full bg-[#429400]"></div>
                <div className="h-1 w-1 rounded-full bg-[#429400]"></div>
              </div>
              {/* 메뉴 */}
              {menuOpen === index && (
                <div className="absolute right-0 top-10 z-10 rounded-lg bg-white shadow-md">
                  <ul>
                    <li className="cursor-pointer p-2 hover:bg-gray-100">
                      <CreateEventButton
                        id={event.id}
                        title={event.title}
                        start_date={event.start_date}
                        end_date={event.end_date}
                      />
                    </li>
                    <li className="cursor-pointer p-2 hover:bg-gray-100" onClick={() => onDelete(event.id)}>
                      삭제
                    </li>
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
