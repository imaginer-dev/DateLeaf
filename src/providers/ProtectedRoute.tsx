import { Loading } from '@/pages';
import { useGetSession } from '@/react-queries/useGetSession';
import { FC, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
  children: ReactNode;
}

const ProtectedRoute: FC<Props> = ({ children }) => {
  const { data, isError, error, isLoading } = useGetSession();
  const navigate = useNavigate();

  if (isError) {
    throw error;
  }

  if (isLoading) {
    return <Loading display="spinner" size="lg" color="primary" />;
  }

  if (!data?.session) {
    navigate('/login');
  }

  return children;
};

export default ProtectedRoute;
