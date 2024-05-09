import ChangePasswordButton from './ChangePasswordButton';
import ChangePasswordInput from './ChangePasswordInput';

const ChangePasswordForm = () => {
  return (
    <form className="flex flex-1 flex-col justify-between px-8 pb-10">
      <ChangePasswordInput />
      <ChangePasswordButton />
    </form>
  );
};

export default ChangePasswordForm;
