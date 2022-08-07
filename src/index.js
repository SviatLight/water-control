import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import firebase from "firebase";
import "firebase/firestore"
import "firebase/auth"

export const backFirebase = firebase.initializeApp({
  apiKey: "AIzaSyDLPUuR7puLI8g9BYE2rzA42HsLsCYHAXQ",
  authDomain: "water-control-2d572.firebaseapp.com",
  projectId: "water-control-2d572",
  storageBucket: "water-control-2d572.appspot.com",
  messagingSenderId: "124391087033",
  appId: "1:124391087033:web:cc7082c9678cc1a9b1b468",
  measurementId: "G-EZ4XXNV7S9"
});

export const Context = createContext(null)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{firebase, auth, firestore}}>
    <React.StrictMode>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </React.StrictMode>
  </Context.Provider>
);
