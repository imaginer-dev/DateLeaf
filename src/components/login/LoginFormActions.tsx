import { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const LoginFormActions: FC<Props> = ({ children }) => {
  return <div className={'flex w-full flex-col gap-2'}>{children}</div>;
};

export default LoginFormActions;
