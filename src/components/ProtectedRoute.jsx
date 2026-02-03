import { Navigate } from 'react-router-dom';
import { auth } from '../utils/auth';

export default function ProtectedRoute({ children }) {
  const isAuthenticated = auth.checkAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
