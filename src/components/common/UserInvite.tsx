import { FC } from 'react';
import DialogButton from '@/components/common/DialogButton';
import IconUserPlus from '@/assets/icons/IconUserPlus';
import UserInviteDialog from '@/components/common/UserInviteDialog';

const AddCalendarPage: FC = () => {
  return (
    <div>
      멤버 초대하기 *
      <DialogButton
        classname={'userInvite bg-base-200 hover:bg-base-300'}
        name={<IconUserPlus />}
        title={'멤버 찾기'}
        desc={''}
        children={<UserInviteDialog />}
      />
    </div>
  );
};

export default AddCalendarPage;
