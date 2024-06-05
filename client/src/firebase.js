// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "homeharbor-6adf6.firebaseapp.com",
  projectId: "homeharbor-6adf6",
  storageBucket: "homeharbor-6adf6.appspot.com",
  messagingSenderId: "733673987139",
  appId: "1:733673987139:web:a1faf83d3398f853d788f6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);