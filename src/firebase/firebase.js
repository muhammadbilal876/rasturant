import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBkiWIXp2R4Rc_Oqfu9x0MD3YhCNdcPzXQ",
  authDomain: "first-class9.firebaseapp.com",
  projectId: "first-class9",
  storageBucket: "first-class9.firebasestorage.app",
  messagingSenderId: "1012179029502",
  appId: "1:1012179029502:web:22f293891d0c3270ba44af",
  measurementId: "G-TZ38DH4Y56"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);

export{auth, analytics, firestore}