import { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const LoginNavigation: FC<Props> = ({ children }) => {
  return <div className={'flex flex-row justify-between'}>{children}</div>;
};

export default LoginNavigation;
