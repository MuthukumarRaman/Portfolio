// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA246S_Lfg1kFOsqtfnGpOVhvDmtgsLtsk",
  authDomain: "umapathi-web.firebaseapp.com",
  projectId: "umapathi-web",
  storageBucket: "umapathi-web.firebasestorage.app",
  messagingSenderId: "178444811696",
  appId: "1:178444811696:web:8d310ae01e29a644662a75",
  measurementId: "G-YHJ34JHTY5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);