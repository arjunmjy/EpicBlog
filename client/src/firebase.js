// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blogwave-73197.firebaseapp.com",
  projectId: "blogwave-73197",
  storageBucket: "blogwave-73197.appspot.com",
  messagingSenderId: "752491184885",
  appId: "1:752491184885:web:27977cb0c61f0e2d0c3bbc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);