import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCso6_KiY0pvS4W2HJFGpM5csr40Mde_wU",
  authDomain: "diapulsewebapp.firebaseapp.com",
  projectId: "diapulsewebapp",
  storageBucket: "diapulsewebapp.firebasestorage.app",
  messagingSenderId: "256420809504",
  appId: "1:256420809504:web:7d0f750238d32edd6b6545",
  measurementId: "G-CJCTBW685P"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
