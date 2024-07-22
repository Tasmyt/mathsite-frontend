import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks';
// import { useEffect, useState } from 'react';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  // const [authChecked, setAuthChecked] = useState(false);
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  // useEffect(() => {
  //   if (!authChecked && !isRefreshing) {
  //     setAuthChecked(true);
  //   }
  // }, [authChecked, isRefreshing]);

  // if (!authChecked) {
  //   return null;
  // }
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
