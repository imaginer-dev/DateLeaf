import { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const CenterPageLayout: FC<Props> = ({ children }) => {
  return (
    <main className={'flex h-screen w-screen items-center justify-center'}>
      <div className={'flex h-full w-full max-w-md flex-col items-center justify-around overflow-hidden px-8 py-8'}>
        {children}
      </div>
    </main>
  );
};

export default CenterPageLayout;
