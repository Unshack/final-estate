// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "final-estate.firebaseapp.com",
  projectId: "final-estate",
  storageBucket: "final-estate.appspot.com",
  messagingSenderId: "349504975158",
  appId: "1:349504975158:web:bb789db91ee3ea7fe24397"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);