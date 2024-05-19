import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD53Ys20Cc5BBoY3TmTejNeJ5n_KYG_NrQ",
  authDomain: "applewebsitedatabase.firebaseapp.com",
  projectId: "applewebsitedatabase",
  storageBucket: "applewebsitedatabase.appspot.com",
  messagingSenderId: "271171967317",
  appId: "1:271171967317:web:ee8e73a1819cb604e5b7dc"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage();
export const auth = getAuth(app);
export default app;