import { Loading } from '@/pages';
import { useGetSession } from '@/react-queries/useGetSession';
import { Outlet, useNavigate } from 'react-router-dom';

const ProtectedRoute = () => {
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

  return <Outlet />;
};

export default ProtectedRoute;
