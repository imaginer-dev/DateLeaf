import { FC, FormEventHandler, ReactNode } from 'react';
import { useLoginState } from '../../stores/loginStore.ts';
import { isValidEmail, isValidPassword } from '../../utils/authUtils.ts';
import useSignIn from '../../react-queries/useSignIn.ts';

interface Props {
  children: ReactNode;
}

const LoginForm: FC<Props> = ({ children }) => {
  const { email, password } = useLoginState();
  const { mutate } = useSignIn();
  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (!isValidEmail(email) || !isValidPassword(password)) {
      // TODO: 다이얼로그 보여 주기
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
    <form onSubmit={onSubmit} className={'flex w-full flex-col'}>
      {children}
    </form>
  );
};

export default LoginForm;
