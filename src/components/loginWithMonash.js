import React, { Component } from "react";
import firebase from "firebase";

class LoginWithMonash extends Component {
  state = {};
  logout = () => {
    firebase.auth().signOut();
  };
  render() {
    return (
      <div className="center-on-page">
        <h3>Please log in with your Monash email Address</h3>
        <button
          onClick={this.logout}
          className="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 my-2 rounded"
        >
          Logout
        </button>
      </div>
    );
  }
}

export default LoginWithMonash;
