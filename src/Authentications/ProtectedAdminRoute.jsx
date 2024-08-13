import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedAdminRoute = ({ children }) => {
  const adminToken = sessionStorage.getItem('adminToken'); 
  

  if (!adminToken) {
    return <Navigate to="/admin-login" />; 
  }

  return children; 
};

export default ProtectedAdminRoute;
