import { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const JoinPageLayout: FC<Props> = ({ children }) => {
  return (
    <main className={'m-auto flex h-full w-full max-w-md flex-col items-center justify-center overflow-auto p-8'}>
      {children}
    </main>
  );
};

export default JoinPageLayout;
