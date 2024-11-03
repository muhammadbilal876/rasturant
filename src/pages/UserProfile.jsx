import React, { useContext, useEffect, useState } from "react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import img from '../assets/avatar-9.png';
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";

const UserProfile = () => {

  const [profile, userProfile] = useState(null);
  const {setIsAuthenticated} = useContext(AuthContext)
  const navegate = useNavigate()

  const handleLogout = () => {
    setIsAuthenticated(false)
  }
  return (
    <>
      <Navbar />
      <div className="container1">
        <div className="profile-header">
          <div className="profile-image">
            <img src={img} alt="" />
          </div>
          {profile ? (
            <div className="profile-details">
              <h1>{profile.name.charAt(0).toUpperCase() + profile.name.slice(1)}</h1>
              <h3 className="my-3">{profile.email}</h3>
              <button className="btn btn-danger px-3" onClick={handleLogout}>Logout</button>
            </div>
          ) : (
            <div>
              <p>No profile data available.</p>
            </div>
          )}
        </div>
      </div>
      <div className="container mb-5">
        <div className="row">
          <div className="col">
            <h2 className="mb-4" id="order">MY ORDERS</h2>
          </div>
          <div className="row">
            <div className="col">
              <div className="card shadow border-0" style={{ border: '1px solid #e0e0e0', padding: '20px' }}>
                <div className="card-body order-card">
                  <div className="order-content">
                    <img
                      src="https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img35.png"
                      alt="Product"
                      className="order-image"
                    />
                    <div>
                      <h6 className="card-title mb-2">Women Zip-Front Relaxed Fit Jacket</h6>
                      <p className="my-2">
                        <span style={{ marginRight: '10px' }}>$74</span>
                        <span>Quantity: 1</span>
                      </p>
                      <p>Date: <span className="text-secondary">Mon Oct 21 2024</span></p>
                      <p>Payment: <span className="text-secondary">Clear</span></p>
                    </div>
                  </div>
                  <div className="order-status">
                    ● Order Placed
                  </div>
                  <div className="track-button">
                    <a href="#order" className="btn btn-outline-dark" disable>Track Order</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
      <Footer />
    </>
  );
};

export default UserProfile;
