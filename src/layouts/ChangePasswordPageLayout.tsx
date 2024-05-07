import { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const ChangePasswordPageLayout: FC<Props> = ({ children }) => {
  return <main className={'flex h-screen w-screen flex-col justify-between pb-8'}>{children}</main>;
};

export default ChangePasswordPageLayout;
