import React, { Component } from "react";
import "./css/app.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import Navbar from "./components/nav/navbar";
import RegisterUser from "./components/registerUser";
import App from "./App";
import LoginWithMonash from "./components/loginWithMonash";
import database from "./data.js";
import About from "./components/about";

class Login extends Component {
  state = {
    database: {}
  };
  constructor(props) {
    super(props);
    this.state.loggedIn = "not-checked";
    database.setAuthStateChangedCallback(this.changeAuthState);
  }

  changeAuthState = user => {
    if (user) {
      this.setState({ loggedIn: true, email: user.email });
    } else {
      this.setState({ loggedIn: false, userId: null });
    }
  };

  render() {
    if (
      this.state.loggedIn === true &&
      this.state.email.includes("student.monash.edu")
    ) {
      return <App uid={this.state.email} />;
    } else if (this.state.loggedIn === "not-checked") {
      return <div className="loader text-5xl">Loading...</div>;
    } else if (
      this.state.loggedIn === true &&
      !this.state.email.includes("student.monash.edu")
    ) {
      return <LoginWithMonash />;
    } else {
      return (
        <Router>
          <Switch>
            <Route
              exact
              path="/login"
              render={() => (
                <React.Fragment>
                  <Navbar loggedIn={false} />
                  <RegisterUser />
                </React.Fragment>
              )}
            />
            <Route
              render={() => (
                <React.Fragment>
                  <Navbar loggedIn={false} />
                  <About />
                </React.Fragment>
              )}
            />
          </Switch>
        </Router>
      );
    }
  }
}
export default Login;
