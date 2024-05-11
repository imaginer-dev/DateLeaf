import InputForm from './InputForm.tsx';
import { FC } from 'react';
import { IconSearch } from '@/assets/icons';
interface Props {
  list: any[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSearchClick: () => void;
}

const UserInvite: FC<Props> = ({ list, onChange, onSearchClick }) => {
  return (
    <div>
      <div className="flex items-end">
        <InputForm title={'닉네임으로 검색하기'} placeholder={'닉네임을 입력하세요'} hint={''} onChange={onChange} />
        <button type="button" className="btn btn-outline btn-primary" onClick={onSearchClick}>
          <IconSearch />
        </button>
      </div>
      <ul id="searchList" role="list" className="divide-y divide-gray-100">
        {list}
      </ul>
    </div>
  );
};

export default UserInvite;
