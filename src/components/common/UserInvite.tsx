import { FC, useState } from 'react';
import { searchUser } from '../../apis/authApis.ts';
import DialogButton from '@/components/common/DialogButton';
import { IconUserPlus } from '@/assets/icons';
import UserInviteDialog from '@/components/common/UserInviteDialog';
import { Member } from '@/types/Member.ts';
import UserInvited from './UserInvited.tsx';

interface Props {
  member: Member[];
  setMember: any;
}

const UserInvite: FC<Props> = ({ member, setMember }) => {
  const [email, setEamil] = useState('');
  const [list, setList] = useState<Member[]>([]);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEamil(event.target.value);
  };

  const onSearchClick = () => {
    searchUser(email).then((searchedUserList) => {
      if (!searchedUserList.length) {
        alert('해당 닉네임을 찾을 수 없습니다.');
        return;
      }
      setList(searchedUserList);
    });
  };

  const onUserItemClick = (clickedUser: Member) => {
    setMember(clickedUser);
  };

  return (
    <div>
      멤버 초대하기 *
      <ul className="flex gap-2">
        {member.map(({ user_nickname, id }) => (
          <UserInvited id={id} user_nickname={user_nickname} key={id + '-UserInvited'} />
        ))}
        <li>
          <DialogButton
            classname={'userInvite bg-base-200 hover:bg-base-300'}
            name={<IconUserPlus />}
            title={'멤버 찾기'}
            desc={''}
            children={
              <UserInviteDialog
                onUserItemClick={onUserItemClick}
                list={list}
                onChange={onChange}
                onSearchClick={onSearchClick}
              />
            }
          />
        </li>
      </ul>
    </div>
  );
};

export default UserInvite;
