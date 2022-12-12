import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';

export const RequireAuth = ({ children, requireAdmin }) => {
  const { user } = useAuthContext();

  if (
    user &&
    requireAdmin &&
    user?.authorities[0]?.authority !== 'ROLE_ADMIN'
  ) {
    console.log('entered require admin block', user);
    return <Navigate to="/" />;
  }

  if (!user) {
    console.log('entered require user block', user);
    return <Navigate to="/login" />;
  }

  return children;
};
