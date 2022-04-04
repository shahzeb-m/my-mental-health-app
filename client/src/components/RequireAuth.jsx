import { useLocation, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

export const RequireAuth = ({ children }) => {
  const location = useLocation();
  const user = useSelector(selectUser);

  return user ? (
    children
  ) : (
    <Navigate to={'/login'} state={{ path: location.pathname }} />
  );
};
