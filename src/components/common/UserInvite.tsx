import { FC } from 'react';
import DialogButton from '@/components/common/DialogButton';
import { IconUserPlus } from '@/assets/icons';
import UserInviteDialog from '@/components/common/UserInviteDialog';

export const UserInvite: FC = () => {
  return (
    <div>
      멤버 초대하기 *
      <ul className="flex gap-2">
        <li>
          <DialogButton
            classname={'userInvite bg-base-200 hover:bg-base-300'}
            name={<IconUserPlus />}
            title={'멤버 찾기'}
            desc={''}
            children={<UserInviteDialog />}
          />
        </li>
      </ul>
    </div>
  );
};

export default UserInvite;
