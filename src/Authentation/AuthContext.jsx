import React from "react";
import { createContext, useState } from "react";
import { Navigate } from "react-router-dom";
export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const login = () => {
    console.log(isAuth);
    setIsAuth(true);
    return console.log(isAuth);
  };
  const logout = () => {
    setIsAuth(false);
  };

  return (
    <AuthContext.Provider value={(isAuth, login, logout)}>
      {children}
    </AuthContext.Provider>
  );
};
