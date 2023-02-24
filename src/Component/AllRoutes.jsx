import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import NotFound from "../Pages/NotFound";
import ProductPage from "../Pages/ProductPage";
import SignUpPage from "../Pages/SignUpPage";
import LoginPage from "../Pages/LoginPage";
import Dashboard from "../Pages/Dashboard";
import PrivateRoutes from "./PrivateRoutes";
import CartPage from "../Pages/CartPage";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/product"
        element={
          <PrivateRoutes>
            <ProductPage />
          </PrivateRoutes>
        }
      />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/cartpage" element={<CartPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AllRoutes;
