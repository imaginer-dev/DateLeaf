import { FC } from 'react';

interface Props {
  memo: string;
}

const GroupFormMemoInput: FC<Props> = ({ memo }) => {
  return (
    <div>
      <label className="label label-text w-full text-start">메모</label>
      <textarea
        id="group-memo-input"
        className="input input-bordered h-24 w-full"
        rows={10}
        placeholder="메모를 입력하세요"
        defaultValue={memo}
        onChange={() => {}}
        title="메모"
        name="memo"
      />
      <p className="label-text-alt">최대 500자 까지 입력할 수 있습니다.</p>
    </div>
  );
};

export default GroupFormMemoInput;
