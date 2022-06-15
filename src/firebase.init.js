import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC2vra1iLKUcTfipktxNRPKf9PRmA2rcF0",
  authDomain: "fifa-world-cup-158d7.firebaseapp.com",
  projectId: "fifa-world-cup-158d7",
  storageBucket: "fifa-world-cup-158d7.appspot.com",
  messagingSenderId: "1010007762925",
  appId: "1:1010007762925:web:d422e36b0d395b29c2e9e4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
