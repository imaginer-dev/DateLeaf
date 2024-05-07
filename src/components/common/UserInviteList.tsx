import { FC } from 'react';
import IconPlus from '@/assets/icons/IconPlus.tsx';

interface Props {
  user_nickname: any;
  id: string;
}

const UserPlusList: FC<Props> = ({ user_nickname, id }) => {
  return (
    <li key={id} className="border-b">
      <button className="ju btn block flex w-full justify-between border-none bg-transparent" onClick={onPlusClick}>
        {user_nickname}
        <IconPlus />
      </button>
    </li>
  );
};

const onPlusClick = () => {
  console.log('aa');
};

export default UserPlusList;
