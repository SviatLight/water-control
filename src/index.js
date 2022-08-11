import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { initializeApp } from 'firebase/app';
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore"
import "firebase/firestore"
import "firebase/auth"

export const backFirebase = initializeApp({
  apiKey: "AIzaSyDLPUuR7puLI8g9BYE2rzA42HsLsCYHAXQ",
  authDomain: "water-control-2d572.firebaseapp.com",
  projectId: "water-control-2d572",
  storageBucket: "water-control-2d572.appspot.com",
  messagingSenderId: "124391087033",
  appId: "1:124391087033:web:cc7082c9678cc1a9b1b468",
  measurementId: "G-EZ4XXNV7S9"
});

export const FirebaseContext = createContext(null)

export const auth = getAuth(backFirebase)
export const firestore = getFirestore(backFirebase)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FirebaseContext.Provider value={{backFirebase, auth, firestore}}>
    <React.StrictMode>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </React.StrictMode>
  </FirebaseContext.Provider>
);
