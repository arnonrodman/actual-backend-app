// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDi7BehjreCUG7ukm2gdG4t6FnlABLagoQ",
  authDomain: "actual-backend-app-a1491.firebaseapp.com",
  projectId: "actual-backend-app-a1491",
  storageBucket: "actual-backend-app-a1491.firebasestorage.app",
  messagingSenderId: "379321194723",
  appId: "1:379321194723:web:19e53ae38e80c7fbb00dd6",
  measurementId: "G-D0TJWHC6N2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);