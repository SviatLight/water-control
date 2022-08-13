import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import {FirebaseContext} from "./config";
import {auth, backFirebase, firestore} from "./config";

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
