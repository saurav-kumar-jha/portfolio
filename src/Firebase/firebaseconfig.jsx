import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDTf83itlWn35kj8mC2p2buJGw4K7aY0oM",
  authDomain: "portfolio-e8df4.firebaseapp.com",
  projectId: "portfolio-e8df4",
  storageBucket: "portfolio-e8df4.firebasestorage.app",
  messagingSenderId: "389164214196",
  appId: "1:389164214196:web:db5d78832678dfc61574e1",
  measurementId: "G-W72229VK6R"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)