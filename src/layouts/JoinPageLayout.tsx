import { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const JoinPageLayout: FC<Props> = ({ children }) => {
  return (
    <main className={'flex flex-col h-full w-full max-w-md items-center m-auto overflow-auto p-8 justify-center'}>
        {children}
    </main>
  );
};

export default JoinPageLayout;
