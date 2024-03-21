import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDSLvD2Ctx_0SfLbvpqkw50Qf-ZpDDGdKU",
  authDomain: "applezone-16207.firebaseapp.com",
  projectId: "applezone-16207",
  storageBucket: "applezone-16207.appspot.com",
  messagingSenderId: "168883258172",
  appId: "1:168883258172:web:f394d06c5bf35b2b6dd439",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage();
export const auth = getAuth(app);
export default app;
