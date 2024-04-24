// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9kF_DOnXL_sKFz8mXraaJHVfCe9SOok0",
  authDomain: "login-c2eaa.firebaseapp.com",
  projectId: "login-c2eaa",
  storageBucket: "login-c2eaa.appspot.com",
  messagingSenderId: "823554357190",
  appId: "1:823554357190:web:c27655222f73186ca164c7",
  measurementId: "G-PQX59R63SZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export { app, analytics };