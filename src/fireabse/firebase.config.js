// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCz4FcGQQ4X3qJ6u7eEahRlBsmGS-9v59k",
  authDomain: "email-password-auth-a88e6.firebaseapp.com",
  projectId: "email-password-auth-a88e6",
  storageBucket: "email-password-auth-a88e6.firebasestorage.app",
  messagingSenderId: "107609687050",
  appId: "1:107609687050:web:572fd7f5d66134875ecbf3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
