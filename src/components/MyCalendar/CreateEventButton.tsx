import { useEventState } from '@/stores/myEventsStore.ts';
import DialogButton from '@/components/common/DialogButton';
import { InputRef } from '../common/InputForm.tsx';
import { useState, useRef } from 'react';

const CreateEventButton = () => {
  const { addEvents } = useEventState();
  const [eventTitle, setTitle] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const titleRef = useRef<HTMLInputElement>(null);
  const startRef = useRef<HTMLInputElement>(null);
  const endRef = useRef<HTMLInputElement>(null);

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
      addEvents({ title: eventTitle, start: startDate, end: endDate === '' ? startDate : endDate });
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
      <InputRef title="시작 날짜" placeholder="YYYY-MM-DD" onChange={onStartDateChanged} ref={startRef} />
      <InputRef title="끝 날짜" placeholder="YYYY-MM-DD" onChange={onEndDateChanged} ref={endRef} />
      <hr className="mb-2 mt-2" />
      <button className="btn w-full bg-primary text-base-100" onClick={onCreateClicked}>
        추가하기
      </button>
    </div>
  );
  return (
    <div className="p-8">
      <DialogButton
        classname="btn bg-primary text-base-100 w-full"
        name={'새 일정 추가하기'}
        title={'일정 추가'}
        desc={''}
        children={eventForm}
      />
    </div>
  );
};
export default CreateEventButton;
