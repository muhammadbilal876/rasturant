// import React from "react";
// import './App.css';
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
// import ReactDOM from "react-dom/client";
// import "../node_modules/font-awesome/css/font-awesome.min.css";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Provider } from "react-redux";
// import store from "./redux/store";

// import {
//   Home,
//   Product,
//   Products,
//   AboutPage,
//   ContactPage,
//   Cart,
//   Login,
//   Register,
//   Checkout,
//   PageNotFound,
// } from "./pages";
// import ScrollToTop from "./components/ScrollToTop";
// import { Toaster } from "react-hot-toast";
// import ForgotPassword from "./pages/ForgotPassword";
// import UserProfile from "./pages/UserProfile";
// import Admin from "./Admin/Index";
// import AuthContext from "./pages/context/AuthContext";
// import PrivateRoutes from './important/PrivateRoutes'
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <AuthContext>
//   <BrowserRouter>
//     <ScrollToTop>
//       <Provider store={store}>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/product" element={<Products />} />
//           <Route path="/product/:id" element={<Product />} />
//           <Route path="/about" element={<AboutPage />} />
//           <Route path="/contact" element={<ContactPage />} />
//           <Route path="/cart" element={<PrivateRoutes Components={Cart} />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/profile" element={<PrivateRoutes Components={UserProfile} />} />
//           <Route path="/forgot-password" element={<ForgotPassword />} />
//           <Route path="/checkout" element={<Checkout />} />
//           <Route path="*" element={<PageNotFound />} />
//           <Route path="/product/*" element={<PageNotFound />} />
//           <Route path="/admin/*" element={<PrivateRoutes Components={Admin}/>} />
//         </Routes>
//       </Provider>
//     </ScrollToTop>
//     <Toaster />
//   </BrowserRouter>
//   </AuthContext>
// );









import React from "react";
import './App.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import ReactDOM from "react-dom/client";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

import {
  Home,
  Product,
  Products,
  AboutPage,
  ContactPage,
  Cart,
  Login,
  Register,
  Checkout,
  PageNotFound,
} from "./pages";
import ScrollToTop from "./components/ScrollToTop";
import { Toaster } from "react-hot-toast";
import ForgotPassword from "./pages/ForgotPassword";
import UserProfile from "./pages/UserProfile";
import Admin from "./Admin/Index";
import AuthContextProvider from "./pages/context/AuthContext";
import PrivateRoutes from './important/PrivateRoutes';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <BrowserRouter>
      <ScrollToTop>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Products />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/cart" element={<PrivateRoutes Components={Cart} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<PrivateRoutes Components={UserProfile} />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<PageNotFound />} />
            <Route path="/product/*" element={<PageNotFound />} />
            <Route path="/admin/*" element={<PrivateRoutes Components={Admin} adminOnly={true} />} />
          </Routes>
        </Provider>
      </ScrollToTop>
      <Toaster />
    </BrowserRouter>
  </AuthContextProvider>
);
