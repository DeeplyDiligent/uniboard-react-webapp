import React, { Component } from "react";
import firebase from "firebase";
import firebaseui from "firebaseui";

class RegisterUser extends Component {
  componentDidMount() {
    // Initialize the FirebaseUI Widget using Firebase.
    this.ui = new firebaseui.auth.AuthUI(firebase.auth());
    this.ui.start("#firebaseui-auth-container", {
      signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
      ]
      // Other config options...
    });
  }
  componentWillUnmount() {
    this.ui.delete();
  }
  render() {
    // console.log(firebase);
    return (
      <div className="p-2 pt-6 text-center">
        <div>
          Please Sign In with your Monash University Google Account Below:
        </div>
        <div id="firebaseui-auth-container" />
      </div>
    );
  }
}

export default RegisterUser;
