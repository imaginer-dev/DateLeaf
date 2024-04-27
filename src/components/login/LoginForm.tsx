import { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const LoginForm: FC<Props> = ({ children }) => {
  return <form className={'flex w-full flex-col gap-4'}>{children}</form>;
};

export default LoginForm;
