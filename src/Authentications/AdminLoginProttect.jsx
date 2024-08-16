import React from 'react';
import { Navigate } from 'react-router-dom';

const AdminLoginProttect = ({ children }) => {
  const isAuthenticated = !!sessionStorage.getItem('adminToken'); 
  console.log("login",isAuthenticated);
  
  if (isAuthenticated) {
    return <Navigate to="/admin" />; 
  }

  return children; 
};

export default AdminLoginProttect;
