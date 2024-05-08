import { useEventState } from '@/stores/myEventsStore.ts';
import DialogButton from '@/components/common/DialogButton';
import InputForm from '../common/InputForm';
import { useState } from 'react';

const CreateEventButton = () => {
  const { addEvents } = useEventState();
  const [eventTitle, setTitle] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

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
    console.log('clicked! ', eventTitle, startDate, endDate);
    if (eventTitle !== '' && startDate !== '' && endDate !== '')
      addEvents({ title: eventTitle, start: startDate, end: endDate });
  };

  const eventForm = (
    <div>
      <InputForm title="일정 제목" placeholder="새 일정 제목" onChange={onTitleChanged} />
      <InputForm title="시작 날짜" placeholder="YYYY-MM-DD" onChange={onStartDateChanged} />
      <InputForm title="끝 날짜" placeholder="YYYY-MM-DD" onChange={onEndDateChanged} />
      <hr className="m-4" />
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
        desc={' '}
        children={eventForm}
      />
    </div>
  );
};
export default CreateEventButton;
