import { FC, useState } from 'react';
import { searchUser } from '../../apis/authApis.ts';
import DialogButton from '@/components/common/DialogButton';
import { IconUserPlus } from '@/assets/icons';
import UserInviteDialog from '@/components/common/UserInviteDialog';
import UserInvited from './UserInvited';
import UserInviteList from './UserInviteList.tsx';

interface Props {
  member: any;
  setMember: any;
}

const UserInvite: FC<Props> = ({ member, setMember }) => {
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
      nickNames.map(({ user_nickname, id }) => {
        setList([
          <UserInviteList
            user_nickname={user_nickname}
            id={id}
            key={id + '-UserInviteList'}
            onClick={() => {
              if (!user_nickname.length) return;
              setMember([...member, <UserInvited user_nickname={user_nickname} id={id} key={id + '-Member'} />]);
            }}
          />,
        ]);
      });
    });
  };

  return (
    <div>
      멤버 초대하기 *
      <ul className="flex gap-2">
        {member}
        <li>
          <DialogButton
            classname={'userInvite bg-base-200 hover:bg-base-300'}
            name={<IconUserPlus />}
            title={'멤버 찾기'}
            desc={''}
            children={<UserInviteDialog list={list} onChange={onChange} onSearchClick={onSearchClick} />}
          />
        </li>
      </ul>
    </div>
  );
};

export default UserInvite;
