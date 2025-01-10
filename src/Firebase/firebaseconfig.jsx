import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAxp5J3tNrSBIxLZx95bBm8Yz38tf31TVg",
  authDomain: "portfolio-70162.firebaseapp.com",
  projectId: "portfolio-70162",
  storageBucket: "portfolio-70162.firebasestorage.app",
  messagingSenderId: "132377884070",
  appId: "1:132377884070:web:72d01a7d21dc5683624b67"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)