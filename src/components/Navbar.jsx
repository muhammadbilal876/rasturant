import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import img from '../assets/avatar.png'
import { AuthContext } from '../pages/context/AuthContext';
import toast from "react-hot-toast";
import { auth } from '../firebase/firebase';

const Navbar = () => {

    const state = useSelector(state => state.handleCart);
    const { isAuthenticated, setIsAuthenticated, userRole } = useContext(AuthContext);
    const navegate = useNavigate()

    const handleLogout = async () => {
        try {
            await auth.signOut()
            setIsAuthenticated(false)
            toast.success("You have been successfully logged out!", 'success')
            navegate('/')
        } catch (error) {
            console.error("Error signing out: ", error);
        }
    }

    return (
        <nav className="navbar navbar-expand-lg py-3 sticky-top" style={{ backgroundColor: "#004658" }}>
            <div className="container">
                <Link className="navbar-brand fw-bold fs-4 text-white logo" to="/" style={{ fontSize: '1.8rem' }}>
                    <h3>Food<span style={{ color: 'orange' }}>Planet</span></h3>
                </Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item mx-2">
                            <Link className="nav-link" to="/" activeClassName="active-link">Home</Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link className="nav-link" to="/product" activeClassName="active-link">Items</Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link className="nav-link" to="/about" activeClassName="active-link">About</Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link className="nav-link" to="/contact" activeClassName="active-link">Contact</Link>
                        </li>
                        <li className='nav-item mx-2'>
                            {!userRole === 'admin'
                                ? ''
                                : <Link to='/admin' className="nav-link" style={{ textDecoration: 'none' }}>Admin</Link>
                            }
                        </li>
                    </ul>

                    {/* Buttons */}
                    <div className="buttons text-center">
                        <Link to="/cart" className="btn btn-outline-light mx-2 shadow-sm position-relative">
                            <i className="fas fa-shopping-cart me-1"></i> Cart
                            <span className="badge bg-danger position-absolute top-0 start-100 translate-middle rounded-pill">{state.length}</span>
                        </Link>
                        {!isAuthenticated
                            ? <Link to="/login" className="btn mx-2 shadow-sm text-white" style={{ backgroundColor: '#027b9a' }}>
                                <i className="fas fa-user-plus me-1"></i> Login
                            </Link>
                            : <li className="btn mx-2 text-white nav-item dropdown">
                                <a className="nav-link dropdown-toggle border-0" href="#profile" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src={img} alt="" style={{ width: '40px', borderRadius: '50%' }} />
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown" style={{ backgroundColor: "#004658" }}>
                                    <Link to='/profile' className="dropdown-item text-white bg-transparent" href="#"><i className="fas fa-user me-2"></i>Profile</Link>
                                    <a href='#logout' className="dropdown-item text-white bg-transparent" onClick={handleLogout}><i className="fas fa-sign-out-alt me-2"></i>Logout</a>
                                </div>
                            </li>
                        }
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
