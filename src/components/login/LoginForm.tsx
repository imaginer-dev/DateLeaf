import { ChangeEventHandler, createContext, FC, ReactNode, useState } from 'react';

interface Props {
  children: ReactNode;
}

interface LoginFormState {
  email: string;
  password: string;
}

interface State {
  formChangeHandler: ChangeEventHandler<HTMLInputElement>;
  loginFormState: LoginFormState;
}

export const LoginContext = createContext<State>();

const LoginForm: FC<Props> = ({ children }) => {
  const [formState, setFormState] = useState<LoginFormState>({
    email: '',
    password: '',
  });

  const formChangeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    const name = e.target.name as 'email' | 'password';
    const value = e.target.value;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <LoginContext.Provider
      value={{
        loginFormState: formState,
        formChangeHandler,
      }}
    >
      <form>{children}</form>
    </LoginContext.Provider>
  );
};

export default LoginForm;
