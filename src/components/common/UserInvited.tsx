import { FC } from 'react';
import { IconClose, IconLeaf } from '@/assets/icons';
import DialogButton from './DialogButton';

interface Props {
  user_nickname: any;
  id: any;
}

const UserInvited: FC<Props> = ({ user_nickname, id }) => {
  return (
    <li key={id}>
      <DialogButton
        classname={'userInvite bg-white hover:bg-base-100 relative'}
        name={
          <div>
            <IconClose style={'absolute top-px right-px'} />
            <IconLeaf />
            <p>{user_nickname}</p>
          </div>
        }
        title={''}
        desc={'해당 멤버를 삭제 하시겠습니까?'}
        children={''}
      />
    </li>
  );
};

export default UserInvited;
