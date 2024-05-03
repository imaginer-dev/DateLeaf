import { useEditPwState } from '../../stores/editPwStore.ts';
import { recoveryPasswd } from '../../apis/authApis.ts';

const EditPwButton = () => {
  const { email } = useEditPwState();

  const onClick = () => {
    console.log('email: ', email);
    const result = recoveryPasswd(email);
    result.then((value) => {
      console.log(value);
    });
  };

  return (
    <button type={'submit'} onClick={onClick} className="btn btn-outline btn-primary w-full">
      비밀번호 변경
    </button>
  );
};

export default EditPwButton;
