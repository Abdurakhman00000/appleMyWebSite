import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAjWs4TVFeOzCedLfyKpTpln5SwD4_dOXE",
  authDomain: "myapplesiteproject.firebaseapp.com",
  projectId: "myapplesiteproject",
  storageBucket: "myapplesiteproject.appspot.com",
  messagingSenderId: "122643318908",
  appId: "1:122643318908:web:007a087c64df82543ea1f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage();
export const auth = getAuth(app);
export default app;