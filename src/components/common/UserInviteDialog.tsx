import InputForm from './InputForm.tsx';
import { FC } from 'react';
import { IconSearch } from '@/assets/icons';
import { Member } from '@/types/Member.ts';
import UserInviteList from './UserInviteList.tsx';
interface Props {
  list: Member[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSearchClick: () => void;
  onUserItemClick: (clickedUser: Member) => void;
}

const UserInvite: FC<Props> = ({ list, onChange, onSearchClick, onUserItemClick }) => {
  return (
    <div>
      <div className="flex items-end">
        <InputForm title={'닉네임으로 검색하기'} placeholder={'닉네임을 입력하세요'} hint={''} onChange={onChange} />
        <button type="button" className="btn btn-outline btn-primary" onClick={onSearchClick}>
          <IconSearch />
        </button>
      </div>
      <ul id="searchList" role="list" className="divide-y divide-gray-100">
        {list.map((user) => (
          <UserInviteList
            id={user.id}
            onClick={() => onUserItemClick(user)}
            user_nickname={user.user_nickname}
            key={user.id + '-UserInviteList'}
          />
        ))}
      </ul>
    </div>
  );
};

export default UserInvite;
