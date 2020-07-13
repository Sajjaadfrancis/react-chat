import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
  apiKey: "AIzaSyCzT75cg_g0FCHbAFMogR4WLfz5ZDvBxcc",
  authDomain: "react-chat-da5ca.firebaseapp.com",
  databaseURL: "https://react-chat-da5ca.firebaseio.com",
  projectId: "react-chat-da5ca",
  storageBucket: "react-chat-da5ca.appspot.com",
  messagingSenderId: "264646939049",
  appId: "1:264646939049:web:f7661934cb0cc9062fb4b8",
  measurementId: "G-8FH7TW23KF",
});

ReactDOM.render(
  <React.StrictMode>
    <div>Hello World</div>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
