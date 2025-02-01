import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ element, ...rest }) => {
  const { token } = useSelector((state) => state.currentUser.User);

  return token ? element : <Navigate to="/landing/login" />;
};

export default PrivateRoute;
