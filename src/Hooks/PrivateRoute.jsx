import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate } from 'react-router-dom';
import Loading from '../Pages/Loading';

const PrivateRoute = ({ children }) => {
  const { users, loading } = useContext(AuthContext);

  if (loading) {
    return <Loading></Loading>
  }

  if (users && users?.email) {
    return children;
  }
  return <Navigate to={"/auth/login"}></Navigate>
};

export default PrivateRoute;