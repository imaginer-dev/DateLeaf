import { Loading } from '@/pages';
import Dialog from '../common/Dialog';
import useUpdateUserPassword from '@/react-queries/useUpdateUserPassword';
const ChangePasswordButton = () => {
  const { onClick, dialogRef, dialogMessage, isPending } = useUpdateUserPassword();

  return (
    <>
      <button onClick={onClick} className="btn btn-outline text-primary" type="button">
        비밀번호 변경하기
      </button>
      <Dialog ref={dialogRef} desc={dialogMessage}></Dialog>
      {isPending && <Loading display="spinner" color="primary" size="lg" />}
    </>
  );
};
export default ChangePasswordButton;
