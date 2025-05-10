import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCso6_KiY0pvS4W2HJFGpM5csr40Mde_wU",
    authDomain: "diapulsewebapp.firebaseapp.com",
    projectId: "diapulsewebapp",
    storageBucket: "diapulsewebapp.firebasestorage.app",
    messagingSenderId: "256420809504",
    appId: "1:256420809504:web:7d0f750238d32edd6b6545",
    measurementId: "G-CJCTBW685P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);