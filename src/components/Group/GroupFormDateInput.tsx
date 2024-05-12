import { FC } from 'react';
import { dateToYYMMDD } from '@/utils/dateUtils';

interface Props {
  startDate: string;
  endDate: string;
}

const GroupFormDateInput: FC<Props> = ({ startDate, endDate }) => {
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
          defaultValue={dateToYYMMDD(new Date(startDate))}
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
          id="group-end-date-input"
          defaultValue={dateToYYMMDD(new Date(endDate))}
          name="endDate"
        />
      </div>
    </div>
  );
};

export default GroupFormDateInput;
