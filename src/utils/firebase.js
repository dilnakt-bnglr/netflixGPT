// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_YQYoSrqf7qQ_trvnNCBY0hoQ13eRbJs",
  authDomain: "netflixgpt-f37ce.firebaseapp.com",
  projectId: "netflixgpt-f37ce",
  storageBucket: "netflixgpt-f37ce.firebasestorage.app",
  messagingSenderId: "491995194897",
  appId: "1:491995194897:web:22a5fddbb37525a532b3b0",
  measurementId: "G-5WJRS37H1P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
