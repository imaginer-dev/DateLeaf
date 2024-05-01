import { useLoginState } from '../../stores/loginStore.ts';
import useSignIn from '../../react-queries/useSignIn.ts';
import { isValidEmail, isValidPassword } from '../../utils/authUtils.ts';

const LoginButton = () => {
  const { email, password } = useLoginState();
  const { mutate } = useSignIn();

  const onClick = () => {
    if (!isValidEmail(email) || !isValidPassword(password)) {
      // TODO: 다이얼로그 보여 주기
      console.log('not valid form');
      return;
    }

    mutate(
      {
        email,
        password,
      },
      {
        onError: (error) => {
          console.error(error.message);
        },
        onSettled: (data) => {
          console.log(data);
        },
        onSuccess: (data) => {
          console.log(data);
        },
      },
    );
  };

  return (
    <button type={'button'} onClick={onClick} className="btn btn-outline btn-primary w-full">
      SIGN IN
    </button>
  );
};

export default LoginButton;
