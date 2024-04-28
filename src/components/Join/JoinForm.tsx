import { FC, ReactNode } from 'react';

interface Props {
    children: ReactNode;
  }
  
  const JoinForm: FC<Props> = ({ children }) => {
    return <form className={'flex w-full flex-col mt-9'}>{children}</form>;
  };
  
  export default JoinForm;