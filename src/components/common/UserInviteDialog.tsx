import InputForm from './InputForm.tsx';
import { searchUser } from '../../apis/authApis.ts';
import { FC, useState } from 'react';
import { IconSearch } from '@/assets/icons';
import UserInviteList from './UserInviteList.tsx';

const UserInvite: FC = () => {
  const [email, setEamil] = useState('');
  const [list, setList] = useState<any[]>([]);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEamil(event.target.value);
  };

  const onSearchClick = () => {
    searchUser(email).then((nickNames) => {
      if (!nickNames.length) {
        alert('해당 닉네임을 찾을 수 없습니다.');
        return;
      }
      setList(
        nickNames.map(({ user_nickname, id }) => {
          return <UserInviteList user_nickname={user_nickname} key={id + '-UserInviteList'} />;
        }),
      );
      return list;
    });
  };

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
