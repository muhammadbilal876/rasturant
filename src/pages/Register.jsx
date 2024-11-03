import React, { useContext, useState } from 'react';
import { Footer, Navbar } from "../components";
import { Link, useNavigate } from 'react-router-dom';
import toast from "react-hot-toast";
import { AuthContext } from './context/AuthContext';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, firestore } from '../firebase/firebase';
import { doc, setDoc } from 'firebase/firestore';

const initialState = { name: '', email: '', password: '' };

const Register = () => {
    const { setIsAuthenticated } = useContext(AuthContext);
    const [state, setState] = useState(initialState);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });
    }

    const handleRegister = async (e) => {
        e.preventDefault();

        const { name, email, password } = state; // Adjusted to match the state structure
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        const trimmedName = name.trim();
        const trimmedEmail = email.trim();
        const trimmedPassword = password.trim();

        if (trimmedName.length < 3) {
            toast.error("Please enter your full name", 'error');
            return;
        }
        if (!trimmedEmail) {
            toast.error("Please enter your email address", 'error');
            return;
        }
        if (!emailRegex.test(trimmedEmail)) {
            toast.error("Please enter a valid email address", 'error');
            return;
        }
        if (trimmedPassword.length < 6) {
            toast.error("Please enter your password correctly", 'error');
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, trimmedEmail, trimmedPassword);
            const user = userCredential.user;
            toast.success("Account created successfully", 'success');
            addDocument(user)
            console.log('User created:', user);
            navigate('/login');
        } catch (err) {
            console.error(err);
            toast.error("Something went wrong, user not created", 'error');
        }
    }

    const addDocument = async (user) => {
        try{
         await setDoc(doc(firestore, "users", user.uid), {
           firstName: "",
           lastName: "",
           uid: user.uid,
           role: 'user' 
         });
         console.log('user document created at firestore')
        }
       catch(err){
         console.error(err)
       }
       }
    return (
        <>
            <Navbar />
            <div className="register-container">
                <div className="register-card">
                    <h2 className="register-title">Create an Account</h2>
                    <form onSubmit={handleRegister}>
                        <div className="auth-form-group">
                            <label htmlFor="name">Full Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                placeholder="Enter Your Name"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="auth-form-group">
                            <label htmlFor="email">Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                placeholder="name@example.com"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="auth-form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                name="password"
                                placeholder="Password"
                                onChange={handleChange}
                            />
                        </div>
                        <button className="register-btn" type="submit">
                            Register
                        </button>
                    </form>
                    <div className="login-prompt">
                        Already have an account? <Link to="/login" className="login-link">Login</Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Register;









