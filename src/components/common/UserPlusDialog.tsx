import InputForm from './InputForm.tsx';
import { searchUser } from '../../apis/authApis.ts';
import { FC, useState } from 'react';
import IconSearch from '@/assets/icons/IconSearch.tsx';
import UserPlusList from './UserPlusList.tsx';

const UserPlus: FC = () => {
  const [email, setEamil] = useState('');
  const [list, setList] = useState<any[]>([]);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEamil(event.target.value);
  };

  const onSearchClick = () => {
    searchUser(email).then((value) => {
      setList(value.map(({ user_nickname, id }) => <UserPlusList user_nickname={user_nickname} id={id} />));
      return list;
    });
  };

  return (
    <div>
      <div className="flex items-end">
        <InputForm title={'닉네임으로 검색하기'} placeholder={'닉네임을 입력하세요'} hint={''} onChange={onChange} />
        <button className="btn btn-outline btn-primary" onClick={onSearchClick}>
          <IconSearch />
        </button>
      </div>
      <ul id="searchList" role="list" className="divide-y divide-gray-100">
        {list}
      </ul>
    </div>
  );
};

export default UserPlus;
