import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddProduct from "./conponents/AddProduct";
import Cart from "./conponents/Cart";
import Dashboard from "./conponents/Dashboard";
import EditProduct from "./conponents/EditProduct";
import ForgetPassword from "./conponents/ForgetPassword";
import Home from "./conponents/Home";
import Services from "./conponents/Services";
import Layout from "./conponents/Layout";
import Login from "./conponents/Login";
import OrderSuccess from "./conponents/OrderSuccess";
import Password from "./conponents/Password";
import Product from "./conponents/Product";
import Razorpay from "./conponents/Razorpay";
import Register from "./conponents/Register";
import ViewProduct from "./conponents/ViewProduct";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/layout" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="Services" element={<Services />} />
          <Route path="product" element={<Product />} />

          <Route path="cart" element={<Cart />} />
          <Route path="razorpay/:id" element={<Razorpay />} />
          <Route path="order-page" element={<OrderSuccess />} />
          <Route path="dashboard" element={<Dashboard />}>
            <Route path="add-product" element={<AddProduct />} />
            <Route path="view-product" element={<ViewProduct />} />
            <Route index element={<ViewProduct />} />
            <Route path="Edit-product/:id" element={<EditProduct />} />
          </Route>
        </Route>
        <Route path="/forgot-password" element={<ForgetPassword />} />
        <Route path="/password/:id/:token" element={<Password />} />
      </Routes>
    </div>
  );
}

export default App;
