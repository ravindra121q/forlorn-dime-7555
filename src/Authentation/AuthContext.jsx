import React from "react";
import { createContext, useState } from "react";
import { Navigate } from "react-router-dom";
export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  const login = () => {
    setIsAuth(true);
  };
  const logout = () => {};
  if (isAuth) {
    <Navigate to="/dashboard" />;
  }
  return (
    <AuthContext.Provider value={(isAuth, login, logout)}>
      {children}
    </AuthContext.Provider>
  );
};
