import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from "firebase";

firebase.initializeApp({
    apiKey: "AIzaSyAh0L1ZgYDTkJFJLLhULN_nkl9oLQupF24",
    authDomain: "",
    databaseURL: "",
    storageBucket: "gs://utnfinal-9eb12.appspot.com",
    messagingSenderId: ""
});
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
