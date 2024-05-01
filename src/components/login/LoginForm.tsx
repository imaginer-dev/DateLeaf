import { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const LoginForm: FC<Props> = ({ children }) => {
  return <form className={'flex w-full flex-col'}>{children}</form>;
};

export default LoginForm;
