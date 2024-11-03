// import React, { createContext, useEffect, useState } from 'react';
// import { auth } from '../../firebase/firebase';
// import { onAuthStateChanged } from 'firebase/auth';
// import { getFirestore, doc, getDoc } from 'firebase/firestore';

// export const AuthContext = createContext();

// const AuthContextProvider = ({ children }) => {
//     const [isAuthenticated, setIsAuthenticated] = useState(false);
//     const [userRole, setUserRole] = useState(null);

//     useEffect(() => {
//         const unsubscribe = onAuthStateChanged(auth, async (user) => {
//             if (user) {
//                 setIsAuthenticated(true);
//                 // Fetch user role from Firestore
//                 const firestore = getFirestore();
//                 const docRef = doc(firestore, "users", user.uid);
//                 const docSnap = await getDoc(docRef);
//                 if (docSnap.exists()) {
//                     setUserRole(docSnap.data().role);
//                 } else {
//                     setUserRole(null); // User role not found
//                 }
//             } else {
//                 setIsAuthenticated(false);
//                 setUserRole(null); // User is signed out
//             }
//         });

//         return () => unsubscribe();
//     }, []);

//     return (
//         <AuthContext.Provider value={{ isAuthenticated, userRole, setIsAuthenticated }}>
//             {children}
//         </AuthContext.Provider>
//     );
// }

// export default AuthContextProvider;




import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../../firebase/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userRole, setUserRole] = useState(null);
    const [userProfile, setUserProfile] = useState(null); // State to store user profile

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                setIsAuthenticated(true);
                // Fetch user role from Firestore
                const firestore = getFirestore();
                const docRef = doc(firestore, "users", user.uid);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setUserRole(docSnap.data().role);
                } else {
                    setUserRole(null); // User role not found
                }
            } else {
                setIsAuthenticated(false);
                setUserRole(null); // User is signed out
            }
        });

        return () => unsubscribe();
    }, []);

    // Function to get user profile from Firestore
    const getUserProfile = async (uid) => {
        try {
            const firestore = getFirestore();
            const docRef = doc(firestore, "users", uid);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setUserProfile(docSnap.data()); // Set user profile data in state
                return docSnap.data(); // Return user profile data
            } else {
                console.error('User profile not found');
                return null;
            }
        } catch (error) {
            console.error('Error fetching user profile:', error);
            return null;
        }
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, userRole, getUserProfile, userProfile, setIsAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;
