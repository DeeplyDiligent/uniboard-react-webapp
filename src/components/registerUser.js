
import React, { Component } from 'react';
import firebase from 'firebase';
import firebaseui from 'firebaseui';

class RegisterUser extends Component {
    componentDidMount(){
        // Initialize the FirebaseUI Widget using Firebase.
        var ui = new firebaseui.auth.AuthUI(firebase.auth());
        ui.start('#firebaseui-auth-container', {
            signInOptions: [
                // Leave the lines as is for the providers you want to offer your users.
                firebase.auth.GoogleAuthProvider.PROVIDER_ID
            ],
            signInSuccessUrl: '/home/'
            // Other config options...
        });
    }
    render() { 
        console.log(firebase);
        return ( <div id="firebaseui-auth-container"></div>);
    }
}
 
export default RegisterUser;