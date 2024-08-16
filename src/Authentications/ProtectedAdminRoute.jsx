import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedAdminRoute = ({ children }) => {
  const isAuthenticated = !!sessionStorage.getItem('adminToken'); 
  console.log("rout", isAuthenticated);
  

  if (!isAuthenticated) {
    return <Navigate to="/admin-login" />; 
  }

  return children; 
};

export default ProtectedAdminRoute;
