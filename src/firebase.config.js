// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQYU_9HXx2P_LvI5rZBcXb2YxjPqMVsng",
  authDomain: "assignment10-e2e4f.firebaseapp.com",
  projectId: "assignment10-e2e4f",
  storageBucket: "assignment10-e2e4f.firebasestorage.app",
  messagingSenderId: "752926377214",
  appId: "1:752926377214:web:e1e6232cc8f8f5bf79d1af",
  measurementId: "G-TEPDHYT3RC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
export default auth;