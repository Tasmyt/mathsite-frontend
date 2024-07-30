import React from 'react';
import AdminPage from '../pages/private/admin'; 
import PrivatePage from '../pages/private/private'; 
import { useAuth } from 'hooks';


const CourseBasedRoute = () => {
  const { user } = useAuth(); 

  return user.course === 'admin' ? <AdminPage /> : <PrivatePage />;
};

export default CourseBasedRoute;