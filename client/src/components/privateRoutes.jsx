import { Navigate } from 'react-router';
import {jwtDecode} from 'jwt-decode';

function PrivateRoute({ component: Component, adminOnly }) {
  const token = localStorage.getItem('token');

  if (!token) {
    return <Navigate to="/login" />;
  }

  const user = jwtDecode(token);
  if (adminOnly && user.role !== 'admin') {
    return <Navigate to="/dashboard" />;
  }

  return <Component />;
}

export default PrivateRoute;
