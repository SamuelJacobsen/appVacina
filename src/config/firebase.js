import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getReactNativePersistence, initializeAuth } from "firebase/auth/react-native"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getStorage } from "firebase/storage";
import { initializeFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC6dv43UliZiT1NHS6foiSBk16dpEq4inI",
  authDomain: "appvacina-82b88.firebaseapp.com",
  projectId: "appvacina-82b88",
  storageBucket: "appvacina-82b88.appspot.com",
  messagingSenderId: "405639948347",
  appId: "1:405639948347:web:387eb216b5ebf2a182d41e"
};


const app = initializeApp(firebaseConfig);

initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
})

const auth = getAuth(app);

const storage = getStorage(app)

const db = initializeFirestore(app, { experimentalForceLongPolling: true })

export {app, auth, db, storage}