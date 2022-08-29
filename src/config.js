import { createContext } from "react";
import { initializeApp } from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

export const backFirebase = initializeApp({
  apiKey: "AIzaSyDLPUuR7puLI8g9BYE2rzA42HsLsCYHAXQ",
  authDomain: "water-control-2d572.firebaseapp.com",
  projectId: "water-control-2d572",
  storageBucket: "water-control-2d572.appspot.com",
  messagingSenderId: "124391087033",
  appId: "1:124391087033:web:cc7082c9678cc1a9b1b468",
  measurementId: "G-EZ4XXNV7S9",
  databaseURL:
    "https://water-control-2d572-default-rtdb.europe-west1.firebasedatabase.app/",
});

export const FirebaseContext = createContext(null);

export const auth = getAuth(backFirebase);
export const firestore = getFirestore(backFirebase);
export const db = getDatabase(backFirebase);
