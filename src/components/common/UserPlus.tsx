import { FC } from 'react';
import DialogButton from '@/components/common/DialogButton';
import IconUserPlus from '@/assets/icons/IconUserPlus';
import UserPlusDialog from '@/components/common/UserPlusDialog';

const AddCalendarPage: FC = () => {
  return (
    <div>
      멤버 초대하기 *
      <DialogButton
        classname={'userplus'}
        name={<IconUserPlus />}
        title={'멤버 찾기'}
        desc={''}
        children={<UserPlusDialog />}
      />
    </div>
  );
};

export default AddCalendarPage;
