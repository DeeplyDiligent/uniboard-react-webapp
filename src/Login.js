import React, { Component } from "react";
import "./css/app.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import Navbar from "./components/nav/navbar";
import RegisterUser from "./components/registerUser";
import firebase from "firebase";
import App from "./App";
import LoginWithMonash from "./components/loginWithMonash";

class Login extends Component {
  state = {
    database: {}
  };
  constructor(props) {
    super(props);
    this.config = {
      apiKey: "AIzaSyDummAaSk7h1T1AuC2BsU8zhTAH3H4tVNg",
      authDomain: "synopsis-465b0.firebaseapp.com",
      databaseURL: "https://synopsis-465b0.firebaseio.com",
      projectId: "synopsis-465b0",
      storageBucket: "synopsis-465b0.appspot.com",
      messagingSenderId: "1062729892729"
    };
    firebase.initializeApp(this.config);
    // Initialize Cloud Firestore through Firebase
    this.db = firebase.firestore();

    // Disable deprecated features
    this.db.settings({
      timestampsInSnapshots: true
    });
    this.state.loggedIn = "not-checked";
    firebase.auth().onAuthStateChanged(this.changeAuthState);
  }

  changeAuthState = user => {
    if (user) {
      this.setState({ loggedIn: true, userId: user.uid, email: user.email });
    } else {
      this.setState({ loggedIn: false, userId: null });
    }
  };

  render() {
    if (
      this.state.loggedIn === true 
      // && this.state.email.includes("student.monash.edu")
    ) {
      return (
        <Router>
          <Switch>
            <Route
              path="/app/user/:id"
              render={props => (
                <App db={this.db} uid={this.state.userId} {...props} />
              )}
            />
            <Route
              path="/*"
              render={props => (
                <App db={this.db} uid={this.state.userId} {...props} />
              )}
            />
          </Switch>
        </Router>
      );
    } else if (this.state.loggedIn === "not-checked") {
      return <div className="loader">Loading...</div>;
    } else if (this.state.loggedIn === true && !this.state.email.includes("student.monash.edu")) {
      return (
        <LoginWithMonash />
      );
    } else {
      return (
        <React.Fragment>
          <Router>
            <Navbar loggedIn={false} />
          </Router>
          <RegisterUser />
        </React.Fragment>
      );
    }
  }
}
export default Login;
