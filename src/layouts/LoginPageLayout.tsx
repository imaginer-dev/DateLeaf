import { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const LoginPageLayout: FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};

export default LoginPageLayout;
