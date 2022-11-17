import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const PublicRoute = ({ children }) => {
  const TOKEN = useSelector(state => state.auth.accessToken);
  if (TOKEN) {
    return <Navigate to="/diary" />;
  }
  return children;
};
export const PrivateRoute = ({ children }) => {
  const TOKEN = useSelector(state => state.auth.accessToken);

  if (!TOKEN) {
    return <Navigate to="/" />;
  }

  return children;
};
