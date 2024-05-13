import { FC, useState } from 'react';
import { dateToYYMMDD } from '@/utils/dateUtils';
import { getGroupSchedulePeriodErrorDefineObject } from '@/utils/groupScheduleUtils';

interface Props {
  startDate: string;
  endDate: string;
}

const GroupFormDateInput: FC<Props> = ({ startDate, endDate }) => {
  const [curStartDate, setCurStartDate] = useState<string>(dateToYYMMDD(startDate));
  const [curEndDate, setCurEndDate] = useState<string>(dateToYYMMDD(endDate));
  const { errorText, isError } = getGroupSchedulePeriodErrorDefineObject({
    startDate: curStartDate,
    endDate: curEndDate,
  });

  const onStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurStartDate(e.target.value);
  };

  const onEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurEndDate(e.target.value);
  };

  return (
    <div className="w-full">
      <label className="label label-text w-full text-start">모임 설정 기간 *</label>
      <div className="input input-bordered flex w-full flex-row items-center gap-1 p-0">
        <label className="hidden" htmlFor="group-start-date-input">
          모임 시작
        </label>
        <input
          className="input border-none"
          type="date"
          onChange={onStartDateChange}
          value={curStartDate}
          id="group-start-date-input"
          name="startDate"
        />
        ~
        <label className="hidden" htmlFor="group-end-date-input">
          모임 종료
        </label>
        <input
          className="input border-none"
          type="date"
          onChange={onEndDateChange}
          id="group-end-date-input"
          value={curEndDate}
          name="endDate"
        />
      </div>
      <div className="label flex h-8 flex-row items-center">
        <span className={`label-text-alt ${isError ? 'text-error' : ''}`}>{isError ? errorText : ''}</span>
      </div>
    </div>
  );
};

export default GroupFormDateInput;
