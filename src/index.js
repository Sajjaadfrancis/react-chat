import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { Route, BrowserRouter as Router } from "react-router-dom";
import LoginComponent from "./login/login";
import SignupComponent from "./signup/signup";
import DashboardComponent from "./dashboard/dashboard";

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

const routing = (
  <Router>
    <div id="routing-container">
      <Route path="/login" component={LoginComponent}></Route>
      <Route path="/signup" component={SignupComponent}></Route>
      <Route path="/dashboard" component={DashboardComponent}></Route>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
