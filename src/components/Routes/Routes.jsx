import { Navigate } from 'react-router-dom';

export const PublicRoute = ({ children }) => {
  if (1 === 0) {
    return <Navigate to="/diary" />;
  }
  return children;
};
export const PrivateRoute = ({ children }) => {
  if (1 === 0) {
    return <Navigate to="/" />;
  }

  return children;
};
