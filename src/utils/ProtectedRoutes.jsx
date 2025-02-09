import { Outlet, Navigate } from 'react-router';

const ProtectedRoutes = ({ user }) => {
  console.log(user);
  return user ? <Outlet /> : <Navigate to='/login' replace />;
};

export default ProtectedRoutes;
