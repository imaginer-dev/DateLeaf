import { FC } from 'react';
import { Link } from 'react-router-dom';

interface LoginNavigationLinkProps {
  text: string;
  to: string;
}

const LoginNavigationLink: FC<LoginNavigationLinkProps> = ({ text, to }) => {
  return (
    <Link className={'text-xs font-medium'} to={to}>
      {text}
    </Link>
  );
};

export default LoginNavigationLink;
