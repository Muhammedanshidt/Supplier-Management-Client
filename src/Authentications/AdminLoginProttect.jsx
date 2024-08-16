import React from 'react';
import { Navigate } from 'react-router-dom';

const AdminLoginProttect = ({ children }) => {
  const adminToken = sessionStorage.getItem('adminToken'); 
  console.log(adminToken);
  
  if (adminToken) {
    return <Navigate to="/admin" />; 
  }

  return children; 
};

export default AdminLoginProttect;
