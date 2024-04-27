import { useLoginState } from '../../stores/loginStore.ts';

const LoginButton = () => {
  const { email, password } = useLoginState();

  const onClick = () => {
    console.log('email: ', email);
    console.log('password: ', password);
  };

  return (
    <button type={'submit'} onClick={onClick} className="btn btn-outline btn-primary w-full">
      SIGN IN
    </button>
  );
};

export default LoginButton;
