import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'; 
import { auth } from '../firebase/firebase';
import { AuthContext } from '../pages/context/AuthContext';
import toast from 'react-hot-toast';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const initialState = {email:'', password:''}
export default function Login() {

  const {setIsAuthenticated, userRole } = useContext(AuthContext)
  const [state, setState] = useState(initialState)
  const navegate = useNavigate()

  const handleChange = e => {
    setState(state => ({...state,[e.target.name]: e.target.value}))
  }
  const handleLogin = e => {
    e.preventDefault()

    let {email, password} = state
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    email = email.trim()
    password = password.trim()

    if(!email){
        toast.error("Please enter your email address", 'error')
      return
    }
    if(!emailRegex.test(email)){
        toast.error("Please enter a valid email address", 'error');
    return;
    }
    if(password.length < 6){
      toast.error("Please enter your password correctly", 'error')
      return
    }
    // setIsProcessing(true)
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user)
    toast.success("Login successful", 'success');
    setIsAuthenticated(true)
    navegate('/');
  })
  .catch((err) => {
    if (err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password') {
      toast.error("Incorrect email or password", 'error');
    } else {
      toast.error("Incorrect email or password.", 'error');
    }
  })
  .finally(() => {
    // setIsProcessing(false);
  });
  }
  return (
<>
             <Navbar />
             <div className="register-container">
                 <div className="register-card">
                     <h2 className="register-title">Login to Your Account</h2>
                     <form onSubmit={handleLogin}>
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
                             <p className="text-end fw-bold">
                                 <Link to='/forgot-password' style={{ textDecoration: 'none', color: "#4b6cb7" }}>
                                     Forgot Password?
                                 </Link>
                             </p>
                         </div>
                         <button className="register-btn" type="submit">
                             Login
                         </button>
                     </form>
                     <div className="login-prompt">
                         Don't have an account? <Link to="/register" className="login-link">Register</Link>
                     </div>
                 </div>
             </div>
             <Footer />
         </>
  )
}











// import React, { useContext, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { Footer, Navbar } from "../components";
// import toast from "react-hot-toast";
// import { AuthContext } from "./context/AuthContext";
// import { signInWithEmailAndPassword } from 'firebase/auth'; 

// const initialState = { email: '', password: '' };

// const Login = () => {
//     const { setIsAuthenticated, auth } = useContext(AuthContext);
//     const [state, setState] = useState(initialState);
//     const navigate = useNavigate();

//     const handleChange = (e) => {
//         setState({ ...state, [e.target.name]: e.target.value });
//     };
    
//     const handleLogin = async (e) => {
//         e.preventDefault();
//         let { email, password } = state;
    
//         if (!email) {
//             toast.error('Please enter your email');
//             return;
//         }
//         if (password.length < 6) {
//             toast.error('Please enter a password of at least 6 characters');
//             return;
//         }

//         try {
//             const userCredential = await signInWithEmailAndPassword(auth, email, password);
//             const user = userCredential.user;
//             console.log(user);
//             toast.success("Login successful");
//             setIsAuthenticated(true);
//             navigate('/');
//         } catch (err) {
//             console.log("Error iin login: ",err)
//             if (err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password') {
//                 toast.error("Incorrect email or password");
//             } else {
//                 toast.error("An unexpected error occurred. Please try again.");
//             }


//         }
//     };
    
//     return (
//         <>
//             <Navbar />
//             <div className="register-container">
//                 <div className="register-card">
//                     <h2 className="register-title">Login to Your Account</h2>
//                     <form onSubmit={handleLogin}>
//                         <div className="auth-form-group">
//                             <label htmlFor="email">Email address</label>
//                             <input
//                                 type="email"
//                                 className="form-control"
//                                 name="email"
//                                 placeholder="name@example.com"
//                                 onChange={handleChange}
//                             />
//                         </div>
//                         <div className="auth-form-group">
//                             <label htmlFor="password">Password</label>
//                             <input
//                                 type="password"
//                                 className="form-control"
//                                 name="password"
//                                 placeholder="Password"
//                                 onChange={handleChange}
//                             />
//                             <p className="text-end fw-bold">
//                                 <Link to='/forgot-password' style={{ textDecoration: 'none', color: "#4b6cb7" }}>
//                                     Forgot Password?
//                                 </Link>
//                             </p>
//                         </div>
//                         <button className="register-btn" type="submit">
//                             Login
//                         </button>
//                     </form>
//                     <div className="login-prompt">
//                         Don't have an account? <Link to="/register" className="login-link">Register</Link>
//                     </div>
//                 </div>
//             </div>
//             <Footer />
//         </>
//     );
// };

// export default Login;
