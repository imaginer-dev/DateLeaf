import { useEditPwState } from '../../stores/editPwStore.ts';

const EditPwButton = () => {
  const { email, name } = useEditPwState();

  const onClick = () => {
    console.log('email: ', email);
    console.log('name: ', name);
  };

  return (
    <button type={'submit'} onClick={onClick} className="btn btn-outline btn-primary w-full">
      비밀번호 변경
    </button>
  );
};

export default EditPwButton;
