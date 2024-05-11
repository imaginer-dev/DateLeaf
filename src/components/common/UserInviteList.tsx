import { FC } from 'react';
import { IconPlus } from '@/assets/icons';

interface Props {
  user_nickname: any;
  id: string;
}

const UserInviteList: FC<Props> = ({ user_nickname, id }) => {
  return (
    <li key={id} className="border-b">
      <button type="button" className="ju btn flex w-full justify-between border-none bg-transparent" onClick={onClick}>
        {user_nickname}
        <IconPlus />
      </button>
    </li>
  );
};

const onClick = () => {};

export default UserInviteList;
