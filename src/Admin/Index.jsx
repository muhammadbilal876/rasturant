import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Admin from './Admin';
import Addproduct from './AddProduct';
import ContactUsers from './ContactUsers';
import Orders from './Orders';
import TotalProducts from './TotalProducts';
export default function Index() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Admin />}>
        <Route path="add-products" element={<Addproduct />} />
        <Route path="register-users" element={<registerUsers />} />
        <Route path="contact-users" element={<ContactUsers />} />
        <Route path="orders" element={<Orders />} />
        <Route path="total-products" element={<TotalProducts />} />
      </Route>
    </Routes>
    <Outlet />
    </>
  );
}
