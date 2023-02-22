import React from "react";
import { useContext } from "react";
import { AuthContext } from "../Authentation/AuthContext";

const PrivateRoutes = ({ children }) => {
  const { isAuth } = useContext(AuthContext);
  return children;
};

export default PrivateRoutes;
