import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Footer, Navbar } from "../components";
import axios from 'axios'
import toast from "react-hot-toast";

const initialState = { email: '' }
const ForgotPassword = () => {

    const [state, setSate] = useState(initialState)
    const navigate = useNavigate()

    const handleChange = (e) => {
        setSate({ ...state, [e.target.name]: e.target.value })
    }

    const handleReset = async (e) => {
        e.preventDefault();
        const { email } = state;
    
        if (!email) {
            toast.error("Please enter your email");
            return;
        }
    
        try {
            await axios.post(
                `http://localhost:8000/api/users/reset-password/:token`, 
                { email }, 
                { withCredentials: true }
            );
    
            toast.success("Password reset successfully");
            navigate('/login');
        } catch (error) {
            // Display the error message
            const errorMessage = error.response?.data?.message || "An error occurred";
            toast.error(errorMessage);
        }
    };
    
    return (
        <>
            <Navbar />
            <div className="register-container">
                <div className="register-card">
                    <h2 className="register-title">Welcome Back</h2>
                    <form onSubmit={handleReset}>
                        <div className="auth-form-group">
                            <label htmlFor="Email">Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                placeholder="name@example.com"
                                onChange={handleChange}
                            />
                        </div>
                        <button className="register-btn" type="submit">
                            Reset Password
                        </button>
                    </form>
                    <div className="login-prompt">
                        I know my password? <Link to="/login" className="login-link">Login</Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ForgotPassword;









