import React, { useState } from 'react';
import img from '../assets/avatar.png';
import { Breadcrumb, Layout, Menu } from 'antd';
import RegisterUsers from './RegisterUsers';
import AddProducts from './AddProduct';
import {
  UserOutlined,
  ShoppingCartOutlined,
  ProductFilled,
  HomeFilled,
  MenuOutlined
} from '@ant-design/icons';
import { Link, Outlet, Route, Routes, useLocation } from 'react-router-dom';

const { Header, Content, Sider } = Layout;

const getItem = (label, key, icon, children) => ({
  key,
  icon,
  children,
  label,
});

const Admin = () => {
  const [collapsed, setCollapsed] = useState(true); 
  const location = useLocation();

  const items = [
    getItem(<Link to="/admin" style={{textDecoration:'none'}}>Dashboard</Link>, '1', <HomeFilled />),
    getItem(<Link to="/admin/orders" style={{textDecoration:'none'}}>Orders</Link>, '2', <ShoppingCartOutlined />),
    getItem('User', 'sub1', <UserOutlined />, [
      getItem(<Link to="/admin/register-users" style={{textDecoration:'none'}}>Register</Link>, '3'),
      getItem(<Link to="/admin/contact-users" style={{textDecoration:'none'}}>Contact</Link>, '4'),
    ]),
    getItem('Products', 'sub2', <ProductFilled />, [
      getItem(<Link to="/admin/add-products" style={{textDecoration:'none'}}>Add Products</Link>, '5'),
      getItem(<Link to="/admin/total-products" style={{textDecoration:'none'}}>Total Products</Link>, '8'),
    ]),
  ];

  const toggleSidebar = () => setCollapsed(!collapsed);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        breakpoint="md"
        collapsedWidth={0}
        style={{
          position: 'fixed', 
          height: '100vh',
          zIndex: 1000, 
        }}
      >
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>

      <Layout style={{ marginLeft: collapsed ? 0 : 200, transition: 'margin-left 0.2s' }}>
        {/* Header with Hamburger Icon */}
        <Header style={{ padding: 0, background: '#004658', height: '90px' }}>
          <div className="header" style={{ display: 'flex', alignItems: 'center', padding: '0 16px' }}>
            <MenuOutlined
              className="hamburger-icon"
              onClick={toggleSidebar}
              style={{
                fontSize: '24px',
                color: 'white',
                cursor: 'pointer',
                marginRight: '16px'
              }}
            />
            <h2 className="text-white" style={{ margin: 0 }}>Food<span style={{ color: 'orange' }}>Planet</span></h2>
            <div className="right" style={{ marginLeft: 'auto' }}>
              <li className="btn mx-2 text-white nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle border-0"
                  href="#v"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src={img}
                    alt=""
                    style={{ width: '40px', borderRadius: '50%', marginRight: '5px' }}
                  />
                  John Doe
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown" style={{ backgroundColor: '#004658' }}>
                  <Link to="/" className="dropdown-item text-white bg-transparent">
                    <i className="fas fa-home me-2"></i>Home
                  </Link>
                  <a className="dropdown-item text-white bg-transparent" href="#v">
                    <i className="fas fa-sign-out-alt me-2"></i>Logout
                  </a>
                </div>
              </li>
            </div>
          </div>
        </Header>

        {/* Content */}
        <Content style={{ margin: '24px 16px', transition: 'margin-left 0.2s' }}>
          <Breadcrumb style={{ margin: '16px 0' }}></Breadcrumb>
          <div style={{ padding: 4, minHeight: 360 }}>
            {/* Content based on routes */}
            {location.pathname === "/admin/add-products" || 
            location.pathname === "/admin/contact-users" ||
            location.pathname === "/admin/register-users"||
            location.pathname === "/admin/total-products" ||
            location.pathname === "/admin/orders"
            ? (
              <Routes>
                <Route path="/admin/add-products" element={<AddProducts />} />
                <Route path="register-users" element={<RegisterUsers />} />
              </Routes>
            ) : (
              <div>
                {/* Dashboard content goes here */}

                <div className="admin-cart">
                   <div className="row">
                     <div className="col-12 col-sm-6 col-md-3 mb-4">
                       <div className="card border-0 shadow p-3 px-4 h-100" style={{ backgroundColor: '#ffab2d' }}>                         <h2>Total Orders</h2>
                         <div className="d-flex flex-row align-items-center justify-content-between">
                           <h2 className="me-2 py-3">328</h2>
                           <i className="fas fa-shopping-cart" style={{ color: '#66b0ff', backgroundColor: '#cce5ff' }}></i>
                         </div>
                       </div>
                     </div>
                     <div className="col-12 col-sm-6 col-md-3 mb-4">
                       <div className="card border-0 shadow p-3 px-4 h-100" style={{ backgroundColor: '#ff3ca6' }}>
                         <h2>Total Sales</h2>
                         <div className="d-flex flex-row align-items-center justify-content-between">
                           <h2 className="me-2 py-3">$40,876</h2>
                           <i className="fas fa-chart-line" style={{ color: '#2bd47d', backgroundColor: '#c0f2d8' }}></i>
                         </div>
                       </div>
                     </div>
                     <div className="col-12 col-sm-6 col-md-3 mb-4">
                       <div className="card border-0 shadow p-3 px-4 h-100" style={{ backgroundColor: '#3f50f6' }}>
                         <h2>Total User</h2>
                         <div className="d-flex flex-row align-items-center justify-content-between">
                           <h2 className="me-2 py-3">402</h2>
                           <i className="fas fa-user" style={{ color: '#ffc233', backgroundColor: '#ffe8b3' }}></i>
                         </div>
                       </div>
                     </div>
                     <div className="col-12 col-sm-6 col-md-3 mb-4">
                       <div className="card border-0 shadow p-3 px-4 h-100" style={{ backgroundColor: '#00cccd' }}>
                         <h2>Products</h2>
                         <div className="d-flex flex-row align-items-center justify-content-between">
                           <h2 className="me-2 py-3">40</h2>
                           <i className="fas fa-box" style={{ color: '#e05260', backgroundColor: '#f7d4d7' }}></i>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
                 <div className="container">
                   <div className="row">
                     <div className="col">
                       <h2>Recent Sales</h2>
                       <div className="card border-4 mb-3 p-4" style={{ fontSize: '18px' }}>
                         <div className="row align-items-center justify-content-between">
                           <div className="col-12 col-md-auto text-center mb-3 mb-md-0">
                             <img
                               src="data:image/svg+xml,%3csvg%20width='73'%20height='73'%20viewBox='0%200%2073%2073'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='0.5'%20y='0.5'%20width='72'%20height='72'%20fill='%23F9FAFB'%20stroke='%23D2D2D2'/%3e%3cpath%20d='M41.1484%2037.4871L38.6348%2038.9418V65.0908L61.2694%2052.0221V25.873L41.1484%2037.4871Z'%20fill='%23565656'/%3e%3cpath%20d='M45.247%2014.039L36.5423%209L13.2793%2022.4295L21.9956%2027.4684L45.247%2014.039Z'%20fill='%23565656'/%3e%3cpath%20d='M59.7945%2022.4307L49.7631%2016.7168L26.5117%2030.1463L27.8384%2030.8329L36.5431%2035.8602L45.2013%2030.8678L59.7945%2022.4307Z'%20fill='%23565656'/%3e%3cpath%20d='M24.7545%2039.7573L20.5883%2037.6161V30.9595L12%2026.0137V51.9765L34.4717%2064.9521V38.9893L24.7545%2033.3917V39.7573Z'%20fill='%23565656'/%3e%3c/svg%3e"
                               style={{ width: '50px' }}
                               alt=""
                             />
                           </div>
                           <div className="col-12 col-md-5">
                             <p className="mb-2">
                               <span className="text-secondary">Product :</span> Women Zip-Front Relaxed Fit Jacket
                             </p>
                             <p className="mb-2">
                               <span className="text-secondary">Name :</span> Muhammad Bilal
                             </p>
                             <p className="mb-2">
                               <span className="text-secondary">Address :</span> D ground street no 4 Faisalabad Pakistan,{' '}
                               <span>38000</span>
                             </p>
                           </div>
                           <div className="col-12 col-md-3">
                             <p className="mb-2">
                               <span className="text-secondary">Items :</span> 1
                             </p>
                             <p className="mb-2">
                               <span className="text-secondary">Payment :</span> Clear
                             </p>
                             <p className="mb-2">
                               <span className="text-secondary">Date :</span> 10/29/2024
                             </p>
                           </div>
                           <div className="col">
                             <p className="mb-1">
                               <span className="text-secondary">Price:</span> $70
                             </p>
                           </div>
                           <div className="col-12 col-md-2 text-md-end text-start">
                             <select className="form-select form-select-sm rounded-1 border-1">
                               <option value="">Order Placed</option>
                               <option value="">Out for delivery</option>
                               <option value="">Delivered</option>
                             </select>
                           </div>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
              </div>
            )}
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Admin;
