import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC6dv43UliZiT1NHS6foiSBk16dpEq4inI",
  authDomain: "appvacina-82b88.firebaseapp.com",
  projectId: "appvacina-82b88",
  storageBucket: "appvacina-82b88.appspot.com",
  messagingSenderId: "405639948347",
  appId: "1:405639948347:web:387eb216b5ebf2a182d41e"
};


const app = initializeApp(firebaseConfig);

const auth_mod = getAuth(app);

export {auth_mod}