import { Outlet, Navigate } from 'react-router';

const ProtectedRoutes = ({ user }) => {
  console.log(user);
  return user ? <Outlet /> : <Navigate to='/login' />;
};

export default ProtectedRoutes;
