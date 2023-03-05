import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const useAuth = () => {
  const user = localStorage.getItem("token");
  if (user) {
    return true;
  } else {
    return false;
  }
};

const ProtectedRoutes = ({ children }) => {
  const isAuth = useAuth();
  const location = useLocation();

  return isAuth ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default ProtectedRoutes;