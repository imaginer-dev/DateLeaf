import DialogButton from '@/components/common/DialogButton';
import { InputRef } from '../common/InputForm.tsx';
import { useState, useRef, useEffect } from 'react';
import { Events } from '@/utils/index.ts';
import { addPersonalSchedule, updatePersonalSchedule } from '@/apis/personalScheduleApi.ts';

export interface eventProps {
  id?: number;
  title?: string;
  start_date?: string;
  end_date?: string;
}

const CreateEventButton = ({ id, title, start_date, end_date }: eventProps) => {
  const [eventTitle, setTitle] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const titleRef = useRef<HTMLInputElement>(null);
  const startRef = useRef<HTMLInputElement>(null);
  const endRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (start_date) {
      setStartDate(start_date);
      startRef!.current!.value = start_date;
    }
    if (end_date) {
      setEndDate(end_date);
      endRef!.current!.value = end_date;
    }
    if (title) {
      setTitle(title);
      titleRef!.current!.value = title;
    }
  }, [start_date, end_date, title]);

  const onTitleChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const onStartDateChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStartDate(event.target.value);
  };

  const onEndDateChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEndDate(event.target.value);
  };

  const onCreateClicked = () => {
    if (eventTitle !== '' && startDate !== '') {
      const newEvent: Events = {
        title: eventTitle,
        start: startDate,
        end: endDate === '' ? startDate : endDate,
      };
      if (id) {
        updatePersonalSchedule(id, newEvent).catch((err) => {
          console.log(err);
        });
      } else {
        addPersonalSchedule(newEvent).catch((err) => {
          console.log(err);
        });
      }
    }

    setTitle('');
    setStartDate('');
    setEndDate('');
    if (titleRef.current) {
      titleRef.current.value = '';
    }
    if (startRef.current) {
      startRef.current.value = '';
    }
    if (endRef.current) {
      endRef.current.value = '';
    }
  };

  const eventForm = (
    <div>
      <hr className="mt-1" />
      <InputRef title="일정 제목" placeholder="새 일정 제목" onChange={onTitleChanged} ref={titleRef} />
      <InputRef type="date" title="시작 날짜" placeholder="YYYY-MM-DD" onChange={onStartDateChanged} ref={startRef} />
      <InputRef type="date" title="끝 날짜" placeholder="YYYY-MM-DD" onChange={onEndDateChanged} ref={endRef} />
      <hr className="mb-2 mt-2" />
      <button className="btn w-full bg-primary text-base-100" onClick={onCreateClicked}>
        {id ? '수정하기' : '추가하기'}
      </button>
    </div>
  );
  return (
    <div className="p-8 pl-0 pr-0">
      <DialogButton
        classname="btn bg-primary text-base-100 w-full"
        name={id ? '수정' : '새 일정 추가하기'}
        title={id ? '일정 수정' : '일정 추가'}
        desc={''}
        children={eventForm}
      />
    </div>
  );
};
export default CreateEventButton;
