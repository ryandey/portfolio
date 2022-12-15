// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyC3B7xmINh24fUJQR55HQs9hKmQTE7mFr0",
  authDomain: "ryan-dey-portfolio.firebaseapp.com",
  projectId: "ryan-dey-portfolio",
  storageBucket: "ryan-dey-portfolio.appspot.com",
  messagingSenderId: "1097677652725",
  appId: "1:1097677652725:web:e6b7fc0ccbf2b94be6bbbc",
  measurementId: "G-HHL1WG6EJX"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);