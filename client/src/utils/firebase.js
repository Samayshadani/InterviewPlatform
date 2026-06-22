
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "my-p1-i99ntt.firebaseapp.com",
  projectId: "my-p1-i99ntt",
  storageBucket: "my-p1-i99ntt.appspot.com",
  messagingSenderId: "1085734748770",
  appId: "1:1085734748770:web:e987d50213c4470fee073b"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}