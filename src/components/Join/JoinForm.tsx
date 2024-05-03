import { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const JoinForm: FC<Props> = ({ children }) => {
  return <form className={'mt-9 flex w-full flex-col'}>{children}</form>;
};

export default JoinForm;
