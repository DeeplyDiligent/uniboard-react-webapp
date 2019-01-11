import React, { Component } from 'react';
import './css/app.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import Navbar from './components/nav/navbar'
import RegisterUser from './components/registerUser'
import About from './components/about';
import Contact from './components/contact';
import Home from './components/home';
import Sidebar from './components/sidebar/sidebar';
import firebase from 'firebase';


class App extends Component {
  state = {}
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
    this.state.loggedIn = 'not-checked';
    this.checkSignedIn(this);
  }

  checkSignedIn(context){
    firebase.auth().onAuthStateChanged(function(user) {

      if (user) {
        context.setState({loggedIn:true})
      } else {
        context.setState({loggedIn:false})
      }
    });
  }
  
  render() {
    if (this.state.loggedIn === true){
      return (
        <Router>
        <div className="App">
          <Route path="/home/sidebar/:id"  render={(props) => <Sidebar {...props} />} />
          <Navbar />
          <div className="mainComponent" >
            <Switch>
              <Route path="/home" component={Home} />
            </Switch>
          </div>
        </div>
        </Router>
      );
    } else if (this.state.loggedIn === 'not-checked') {
      return (
        <div id="loader">Loading...</div>
      );
    } else {
      return(<React.Fragment><Navbar /><RegisterUser /></React.Fragment>);
    }
  }
}
export default App;